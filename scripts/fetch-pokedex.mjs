// 1~9세대(1025종) + 리전폼(알로라/가라르/히스이/팔데아) + 검증된 메가진화 데이터를
// PokeAPI에서 가져와 TS 데이터 파일로 생성하는 1회성 스크립트.
import fs from 'node:fs/promises'

const BASE = 'https://pokeapi.co/api/v2'
const TOTAL_SPECIES = 1025

const EN_TO_KO_TYPE = {
  normal: '노말', fire: '불꽃', water: '물', electric: '전기', grass: '풀', ice: '얼음',
  fighting: '격투', poison: '독', ground: '땅', flying: '비행', psychic: '에스퍼',
  bug: '벌레', rock: '바위', ghost: '고스트', dragon: '드래곤', dark: '악', steel: '강철', fairy: '페어리',
}

const GENERATION_NAME_TO_NUMBER = {
  'generation-i': 1, 'generation-ii': 2, 'generation-iii': 3, 'generation-iv': 4, 'generation-v': 5,
  'generation-vi': 6, 'generation-vii': 7, 'generation-viii': 8, 'generation-ix': 9,
}

// 리전폼 접미사 → 한글 라벨 / 그 폼이 처음 등장한 세대 (베이스 종의 첫 등장 세대와는 다를 수 있음)
const REGION_FORM = {
  alola: { label: '알로라', generation: 7 },
  galar: { label: '가라르', generation: 8 },
  hisui: { label: '히스이', generation: 8 },
  paldea: { label: '팔데아', generation: 9 },
}

// 리전 접미사 뒤에 추가로 붙는 변형(예: 타우로스 팔데아 3종 품종). "standard"는 표시할 필요
// 없는 기본형이고, cap/zen은 코스메틱·배틀 중 임시 폼이라 별도 도감 카드로 만들지 않는다.
const REGION_EXTRA_SKIP = new Set(['cap', 'zen'])
const REGION_EXTRA_LABEL = {
  standard: '',
  'combat-breed': '전투종',
  'blaze-breed': '불꽃종',
  'aqua-breed': '파도종',
}

// 실제 게임에 존재하는 메가진화 보유 종(46종, 총 48폼: 리자몽·뮤츠만 X/Y 2종).
// PokeAPI의 varieties에는 가공 데이터(예: 라이츄·앱솔·가챔프·루카리오의 가짜 "-mega-z" 폼)가
// 섞여 있어, 검증된 종 목록 + "{종}-mega"/"-mega-x"/"-mega-y" 정확한 슬러그만 허용한다.
const MEGA_SPECIES = [
  'venusaur', 'charizard', 'blastoise', 'beedrill', 'pidgeot', 'alakazam', 'slowbro', 'gengar',
  'kangaskhan', 'pinsir', 'gyarados', 'aerodactyl', 'mewtwo', 'ampharos', 'steelix', 'scizor',
  'heracross', 'houndoom', 'tyranitar', 'sceptile', 'blaziken', 'swampert', 'gardevoir', 'sableye',
  'mawile', 'aggron', 'medicham', 'manectric', 'sharpedo', 'camerupt', 'altaria', 'banette', 'absol',
  'glalie', 'salamence', 'metagross', 'latias', 'latios', 'rayquaza', 'lopunny', 'gallade', 'audino',
  'diancie', 'garchomp', 'lucario', 'abomasnow',
]

// raw.githubusercontent.com은 대량 핫링크용 CDN이 아니라 트래픽이 몰리면 이미지가
// 간헐적으로 깨진다. jsDelivr의 GitHub 미러를 쓰면 같은 저장소 파일을 CDN으로 안정적으로 받는다.
const SPRITES_CDN = 'https://cdn.jsdelivr.net/gh/PokeAPI/sprites/sprites'

function sprite(id) {
  return `${SPRITES_CDN}/pokemon/${id}.png`
}
function artwork(id) {
  return `${SPRITES_CDN}/pokemon/other/official-artwork/${id}.png`
}
function toJsDelivr(rawGithubUrl) {
  return rawGithubUrl?.replace('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites', SPRITES_CDN)
}

async function fetchJson(url) {
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const res = await fetch(url)
      if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`)
      return await res.json()
    } catch (err) {
      if (attempt === 3) throw err
      await new Promise((r) => setTimeout(r, 400 * (attempt + 1)))
    }
  }
}

async function mapWithConcurrency(items, limit, fn) {
  const results = new Array(items.length)
  let next = 0
  async function worker() {
    while (next < items.length) {
      const i = next++
      results[i] = await fn(items[i], i)
    }
  }
  await Promise.all(Array.from({ length: limit }, worker))
  return results
}

function idFromUrl(url) {
  const m = url.match(/\/(\d+)\/?$/)
  return m ? Number(m[1]) : null
}

function statsFromPokemon(poke) {
  const byName = Object.fromEntries(poke.stats.map((s) => [s.stat.name, s.base_stat]))
  return {
    hp: byName.hp,
    attack: byName.attack,
    defense: byName.defense,
    specialAttack: byName['special-attack'],
    specialDefense: byName['special-defense'],
    speed: byName.speed,
  }
}

function typesFromPokemon(poke) {
  return [...poke.types].sort((a, b) => a.slot - b.slot).map((t) => EN_TO_KO_TYPE[t.type.name])
}

// ---------- 한글 이름 캐시(아이템/기술) ----------
const itemInfoCache = new Map()
async function itemInfo(name) {
  if (!itemInfoCache.has(name)) {
    try {
      const data = await fetchJson(`${BASE}/item/${name}`)
      itemInfoCache.set(name, {
        ko: data.names.find((n) => n.language.name === 'ko')?.name ?? name,
        // 일부 신규 아이템은 아이콘 자체가 없다(API가 null 반환). 있는 경우 jsDelivr 미러로 변환.
        iconUrl: toJsDelivr(data.sprites?.default ?? undefined),
      })
    } catch {
      itemInfoCache.set(name, { ko: name, iconUrl: undefined })
    }
  }
  return itemInfoCache.get(name)
}
async function itemKo(name) {
  return (await itemInfo(name)).ko
}

const moveKoCache = new Map()
async function moveKo(name) {
  if (!moveKoCache.has(name)) {
    try {
      const data = await fetchJson(`${BASE}/move/${name}`)
      moveKoCache.set(name, data.names.find((n) => n.language.name === 'ko')?.name ?? name)
    } catch {
      moveKoCache.set(name, name)
    }
  }
  return moveKoCache.get(name)
}

// ---------- 진화 조건 설명 ----------
async function describeEvolutionDetail(detail) {
  if (!detail) return { trigger: undefined, triggerIconUrl: undefined }
  const parts = []
  let triggerIconUrl

  switch (detail.trigger?.name) {
    case 'level-up':
      parts.push(detail.min_level ? `레벨 ${detail.min_level}` : '레벨업')
      break
    case 'trade':
      parts.push('교환')
      break
    case 'use-item': {
      const info = await itemInfo(detail.item.name)
      parts.push(`${info.ko} 사용`)
      triggerIconUrl = info.iconUrl
      break
    }
    case 'shed':
      parts.push('레벨업(빈 자리+몬스터볼 필요)')
      break
    case 'spin':
      parts.push('특정 동작(스핀)')
      break
    case 'tower-of-darkness':
    case 'tower-of-waters':
      parts.push('특정 장소를 데미지 입은 채 통과')
      break
    case 'three-critical-hits':
      parts.push('한 전투에서 급소 3회')
      break
    case 'take-damage':
      parts.push(detail.min_damage_taken ? `데미지 ${detail.min_damage_taken} 이상 받고 특정 장소 통과` : '데미지를 입고 특정 장소 통과')
      break
    case 'agile-style-move':
      parts.push('민첩 스타일 기술 사용')
      break
    case 'strong-style-move':
      parts.push('강함 스타일 기술 사용')
      break
    case 'recoil-damage':
      parts.push('반동 데미지 누적')
      break
    case 'use-move':
      parts.push('특정 기술 사용')
      break
    case 'three-defeated-bisharp':
      parts.push("리더의 마음가짐' 소지 비스듬 3회 격파")
      break
    case 'gimmighoul-coins':
      parts.push('코인 999개 모으기')
      break
    default:
      parts.push('특수 조건')
  }

  if (detail.min_happiness) parts.push(`친밀도 ${detail.min_happiness} 이상`)
  if (detail.min_affection) parts.push(`어픽션 ${detail.min_affection} 이상`)
  if (detail.min_beauty) parts.push(`아름다움 ${detail.min_beauty} 이상`)
  if (detail.time_of_day) parts.push(detail.time_of_day === 'day' ? '낮' : '밤')
  if (detail.known_move) parts.push(`${await moveKo(detail.known_move.name)} 습득`)
  if (detail.known_move_type) parts.push(`${EN_TO_KO_TYPE[detail.known_move_type.name]} 타입 기술 습득`)
  if (detail.held_item) parts.push(`소지: ${await itemKo(detail.held_item.name)}`)
  if (detail.party_species) parts.push('파티에 특정 포켓몬 동반')
  if (detail.party_type) parts.push(`파티에 ${EN_TO_KO_TYPE[detail.party_type.name]} 타입 동반`)
  if (detail.relative_physical_stats === 1) parts.push('공격>방어')
  if (detail.relative_physical_stats === -1) parts.push('공격<방어')
  if (detail.relative_physical_stats === 0) parts.push('공격=방어')
  if (detail.needs_overworld_rain) parts.push('비가 올 때')
  if (detail.turn_upside_down) parts.push('기기를 거꾸로')
  if (detail.gender === 1) parts.push('암컷')
  if (detail.gender === 2) parts.push('수컷')

  return { trigger: parts.join(' · '), triggerIconUrl }
}

async function main() {
  console.error(`포켓몬 1~${TOTAL_SPECIES}종 + 리전폼 가져오는 중...`)
  const speciesIds = Array.from({ length: TOTAL_SPECIES }, (_, i) => i + 1)

  // speciesId -> { species, defaultVarietyName, varietyEntries: [{name,id,isDefault}] }
  const speciesInfoMap = new Map()

  const pokemonOut = []
  const idToDexNumber = new Map() // 고유 pokemon id -> 국가도감 번호 (진화 트리 표시용)

  await mapWithConcurrency(speciesIds, 14, async (speciesId) => {
    const species = await fetchJson(`${BASE}/pokemon-species/${speciesId}`)
    const generation = GENERATION_NAME_TO_NUMBER[species.generation.name]
    const nameKo = species.names.find((n) => n.language.name === 'ko')?.name ?? species.name
    const rawCategory = species.genera.find((g) => g.language.name === 'ko')?.genus
    const category = rawCategory ? `${rawCategory.replace(/\s*포켓몬$/, '').trim()} 포켓몬` : undefined

    const defaultVariety = species.varieties.find((v) => v.is_default) ?? species.varieties[0]
    const varietyEntries = []

    for (const variety of species.varieties) {
      const isDefault = variety.is_default
      const varietyName = variety.pokemon.name
      let regionInfo
      if (!isDefault) {
        const m = varietyName.match(new RegExp(`^${species.name}-(alola|galar|hisui|paldea)(?:-(.+))?$`))
        if (!m) continue // 코스메틱/토템/메가/거대마하 등은 여기서 제외 (메가는 별도 처리)
        const [, suf, extra] = m
        if (extra && REGION_EXTRA_SKIP.has(extra)) continue // zen 모드, 캡 등 배틀용/코스메틱 변형 제외
        const extraLabel = extra ? REGION_EXTRA_LABEL[extra] ?? extra : ''
        regionInfo = { ...REGION_FORM[suf], label: extraLabel ? `${REGION_FORM[suf].label}(${extraLabel})` : REGION_FORM[suf].label }
      }

      const poke = await fetchJson(variety.pokemon.url)
      const nameEn = species.names.find((n) => n.language.name === 'en')?.name ?? poke.name
      const entry = {
        id: poke.id,
        dexNumber: speciesId,
        generation: regionInfo ? regionInfo.generation : generation,
        nameKo,
        nameEn,
        formLabel: regionInfo?.label,
        types: typesFromPokemon(poke),
        stats: statsFromPokemon(poke),
        category,
        heightM: poke.height / 10,
        weightKg: poke.weight / 10,
        spriteUrl: sprite(poke.id),
        artworkUrl: artwork(poke.id),
      }
      pokemonOut.push(entry)
      idToDexNumber.set(poke.id, speciesId)
      varietyEntries.push({ name: varietyName, id: poke.id, isDefault })
    }

    speciesInfoMap.set(speciesId, {
      speciesName: species.name,
      evolutionChainUrl: species.evolution_chain?.url,
      varietyEntries,
      defaultVarietyName: defaultVariety.pokemon.name,
    })
  })

  console.error('메가진화 가져오는 중...')
  const megaBySpecies = new Map()
  await mapWithConcurrency(MEGA_SPECIES, 8, async (speciesName) => {
    const species = await fetchJson(`${BASE}/pokemon-species/${speciesName}`)
    const validSlugs = new Set([`${speciesName}-mega`, `${speciesName}-mega-x`, `${speciesName}-mega-y`])
    const megaVarieties = species.varieties.filter((v) => validSlugs.has(v.pokemon.name))
    const forms = await mapWithConcurrency(megaVarieties, 4, async (v) => {
      const poke = await fetchJson(v.pokemon.url)
      const suffix = v.pokemon.name.endsWith('-mega-x') ? ' X' : v.pokemon.name.endsWith('-mega-y') ? ' Y' : ''
      const baseNameKo = species.names.find((n) => n.language.name === 'ko')?.name ?? speciesName
      return {
        label: `메가${baseNameKo}${suffix}`,
        types: typesFromPokemon(poke),
        stats: statsFromPokemon(poke),
        spriteUrl: sprite(poke.id),
        artworkUrl: artwork(poke.id),
      }
    })
    megaBySpecies.set(speciesName, forms)
  })

  // 메가폼은 종의 기본형(폼 없는 엔트리)에 매칭한다.
  const speciesNameByDexNumber = new Map([...speciesInfoMap.entries()].map(([id, info]) => [id, info.speciesName]))
  for (const pokemon of pokemonOut) {
    if (pokemon.formLabel) continue
    const speciesName = speciesNameByDexNumber.get(pokemon.dexNumber)
    const forms = megaBySpecies.get(speciesName)
    if (forms && forms.length > 0) pokemon.megaForms = forms
  }

  console.error('진화 체인 가져오는 중...')
  const chainUrls = [...new Set([...speciesInfoMap.values()].map((s) => s.evolutionChainUrl).filter(Boolean))]

  // pokemon variety name -> unique id (전체 종 통틀어 검색용)
  const idByVarietyName = new Map()
  for (const info of speciesInfoMap.values()) {
    for (const v of info.varietyEntries) idByVarietyName.set(v.name, v.id)
  }

  const evolutionLines = []

  await mapWithConcurrency(chainUrls, 6, async (url) => {
    const data = await fetchJson(url)

    // speciesName -> chain node (해당 체인 내에서 한 번만 등장)
    const nodeBySpeciesName = new Map()
    ;(function indexNodes(node) {
      nodeBySpeciesName.set(node.species.name, node)
      for (const child of node.evolves_to ?? []) indexNodes(child)
    })(data.chain)

    async function buildChildren(speciesNode, varietyName, isDefaultVariety) {
      const children = []
      for (const childNode of speciesNode.evolves_to ?? []) {
        const childSpeciesId = idFromUrl(childNode.species.url)
        if (childSpeciesId > TOTAL_SPECIES) continue
        const childInfo = speciesInfoMap.get(childSpeciesId)
        if (!childInfo) continue

        const matchingDetails = (childNode.evolution_details ?? []).filter((d) =>
          d.base_form ? d.base_form.name === varietyName : isDefaultVariety,
        )
        const seenTargets = new Set()
        for (const detail of matchingDetails) {
          const childVarietyName = detail.evolved_form?.name ?? childInfo.defaultVarietyName
          const childPokemonId = idByVarietyName.get(childVarietyName)
          if (!childPokemonId || seenTargets.has(childPokemonId)) continue
          seenTargets.add(childPokemonId)

          const { trigger, triggerIconUrl } = await describeEvolutionDetail(detail)
          const grandChildren = await buildChildren(childNode, childVarietyName, childVarietyName === childInfo.defaultVarietyName)
          const stage = { pokemonId: childPokemonId }
          if (trigger) stage.trigger = trigger
          if (triggerIconUrl) stage.triggerIconUrl = triggerIconUrl
          if (grandChildren.length > 0) stage.children = grandChildren
          children.push(stage)
        }
      }
      return children
    }

    // 1) 체인의 진짜 루트(기본형)
    const rootSpeciesId = idFromUrl(data.chain.species.url)
    const rootInfo = speciesInfoMap.get(rootSpeciesId)
    if (rootInfo) {
      const rootId = idByVarietyName.get(rootInfo.defaultVarietyName)
      if (rootId) {
        const children = await buildChildren(data.chain, rootInfo.defaultVarietyName, true)
        if (children.length > 0) evolutionLines.push([{ pokemonId: rootId, children }])
      }
    }

    // 2) 체인 내 모든 종의 "리전폼"이 독자적인 진화 분기를 갖는 경우, 그 폼을 루트로 하는 별도 진화선 추가
    for (const node of nodeBySpeciesName.values()) {
      const speciesId = idFromUrl(node.species.url)
      const info = speciesInfoMap.get(speciesId)
      if (!info) continue
      for (const variety of info.varietyEntries) {
        if (variety.name === info.defaultVarietyName) continue
        const children = await buildChildren(node, variety.name, false)
        if (children.length > 0) evolutionLines.push([{ pokemonId: variety.id, children }])
      }
    }
  })

  pokemonOut.sort((a, b) => a.id - b.id)

  const lines = []
  lines.push('// 이 파일은 scripts/fetch-pokedex.mjs 로 PokeAPI에서 생성됩니다. 직접 수정하지 마세요.')
  lines.push("import type { EvolutionStage, Pokemon } from '../../types/pokemon'")
  lines.push('')
  lines.push(`export const ALL_POKEMON: Pokemon[] = ${JSON.stringify(pokemonOut, null, 2)}`)
  lines.push('')
  lines.push(`export const ALL_EVOLUTION_LINES: EvolutionStage[][] = ${JSON.stringify(evolutionLines, null, 2)}`)
  lines.push('')

  await fs.writeFile(new URL('../src/data/pokedex/pokedex.generated.ts', import.meta.url), lines.join('\n'), 'utf8')
  console.error(`완료: ${pokemonOut.length}종(폼 포함), 진화선 ${evolutionLines.length}개`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
