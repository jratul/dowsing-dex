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

// 세대별로 실제 발매된 모든 메인 버전. 같은 세대라도 버전마다 학습 기술이 다를 수 있다
// (예: 4세대 플래티넘은 벌레먹음을 레벨 15에 배우지만 다이아몬드·펄은 배우지 않음).
// DLC(더 아머의 섬/왕관의 설원, 더 한입 과자/달콤 마카롱)는 별도 "버전"으로 보여주면 사용자
// 입장에서 혼란스러워 같은 기반 게임에 합쳐서 본다.
const VERSIONS_BY_GEN = {
  1: [
    { label: '레드·블루', groups: ['red-blue'] },
    { label: '옐로우', groups: ['yellow'] },
  ],
  2: [
    { label: '골드·실버', groups: ['gold-silver'] },
    { label: '크리스탈', groups: ['crystal'] },
  ],
  3: [
    { label: '루비·사파이어', groups: ['ruby-sapphire'] },
    { label: '에메랄드', groups: ['emerald'] },
    { label: '파이어레드·리프그린', groups: ['firered-leafgreen'] },
  ],
  4: [
    { label: '다이아몬드·펄', groups: ['diamond-pearl'] },
    { label: '플래티넘', groups: ['platinum'] },
    { label: '하트골드·소울실버', groups: ['heartgold-soulsilver'] },
  ],
  5: [
    { label: '블랙·화이트', groups: ['black-white'] },
    { label: '블랙2·화이트2', groups: ['black-2-white-2'] },
  ],
  6: [
    { label: 'X·Y', groups: ['x-y'] },
    { label: '오메가루비·알파사파이어', groups: ['omega-ruby-alpha-sapphire'] },
  ],
  7: [
    { label: '썬·문', groups: ['sun-moon'] },
    { label: '울트라썬·울트라문', groups: ['ultra-sun-ultra-moon'] },
    { label: '레츠고 피카츄·이브이', groups: ['lets-go-pikachu-lets-go-eevee'] },
  ],
  8: [
    { label: '소드·실드', groups: ['sword-shield', 'the-isle-of-armor', 'the-crown-tundra'] },
    { label: '브릴리언트다이아몬드·샤이닝펄', groups: ['brilliant-diamond-shining-pearl'] },
    { label: '레전드 아르세우스', groups: ['legends-arceus'] },
  ],
  9: [{ label: '스칼렛·바이올렛', groups: ['scarlet-violet', 'the-teal-mask', 'the-indigo-disk'] }],
}
const DAMAGE_CLASS_KO = { physical: '물리', special: '특수', status: '상태' }

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

// raw.githubusercontent.com은 대량 핫링크용 CDN이 아니다. jsDelivr는 더 빠르지만
// PokeAPI/sprites 저장소가 50MB 제한을 넘어서 8세대 이후/리전폼/메가진화(높은 ID)
// 이미지를 영구적으로 403 처리한다 — 확인 결과 id 721(7세대)까지는 되고 809부터 막힘.
// statically.io는 같은 저장소를 같은 용량 제한 없이 미러링해 전체 ID 범위가 정상 동작한다.
const SPRITES_CDN = 'https://cdn.statically.io/gh/PokeAPI/sprites/master/sprites'

function sprite(id) {
  return `${SPRITES_CDN}/pokemon/${id}.png`
}
function artwork(id) {
  return `${SPRITES_CDN}/pokemon/other/official-artwork/${id}.png`
}
function toStaticallyCdn(rawGithubUrl) {
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

// ---------- 한글 이름 캐시(특성/아이템/기술) ----------
const abilityInfoCache = new Map()
async function abilityInfo(name) {
  if (!abilityInfoCache.has(name)) {
    const data = await fetchJson(`${BASE}/ability/${name}`)
    abilityInfoCache.set(name, {
      nameKo: data.names.find((n) => n.language.name === 'ko')?.name ?? data.name,
      nameEn: data.name,
      effectKo: data.flavor_text_entries.find((f) => f.language.name === 'ko')?.flavor_text.replace(/\n/g, ' '),
    })
  }
  return abilityInfoCache.get(name)
}

const itemInfoCache = new Map()
async function itemInfo(name) {
  if (!itemInfoCache.has(name)) {
    try {
      const data = await fetchJson(`${BASE}/item/${name}`)
      itemInfoCache.set(name, {
        ko: data.names.find((n) => n.language.name === 'ko')?.name ?? name,
        // 일부 신규 아이템은 아이콘 자체가 없다(API가 null 반환). 있는 경우 jsDelivr 미러로 변환.
        iconUrl: toStaticallyCdn(data.sprites?.default ?? undefined),
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

// ---------- 기술(무브셋) ----------
const moveDetailCache = new Map() // name -> info
const moveDetailByIdCache = new Map() // id -> info
async function moveDetail(name) {
  if (!moveDetailCache.has(name)) {
    const data = await fetchJson(`${BASE}/move/${name}`)
    const info = {
      id: data.id,
      nameKo: data.names.find((n) => n.language.name === 'ko')?.name ?? data.name,
      nameEn: data.name,
      type: EN_TO_KO_TYPE[data.type.name],
      category: DAMAGE_CLASS_KO[data.damage_class.name],
      power: data.power ?? undefined,
      accuracy: data.accuracy ?? undefined,
      pp: data.pp,
    }
    moveDetailCache.set(name, info)
    moveDetailByIdCache.set(info.id, info)
  }
  return moveDetailCache.get(name)
}

// 기술머신 전체 목록을 한 번에 받아 (버전그룹, 기술) -> TM/HM 번호 매핑을 만든다.
// /machine 목록 엔드포인트는 URL만 주므로 2300여 건을 개별로 가져와야 한다.
async function buildMachineLookup() {
  console.error('기술머신(TM/HM) 목록 가져오는 중...')
  const list = await fetchJson(`${BASE}/machine/?limit=3000`)
  const lookup = new Map()
  await mapWithConcurrency(list.results, 20, async ({ url }) => {
    const m = await fetchJson(url)
    const match = m.item.name.match(/^(tm|hm)(\d+)$/)
    if (!match) return
    lookup.set(`${m.version_group.name}|${m.move.name}`, { machine: match[1].toUpperCase(), number: Number(match[2]) })
  })
  console.error(`기술머신 ${lookup.size}건 매핑 완료`)
  return lookup
}

// 포켓몬의 moves 배열(이미 fetch-pokedex가 받아온 것)에서, 세대별로 발매된 모든 메인
// 버전의 레벨업/기술머신/가르침 학습 기술을 각각 추려 Learnset[] 으로 만든다. 같은 세대라도
// 버전마다 학습 기술이 다를 수 있어(예: 4세대 플래티넘 전용 기술) 버전별로 따로 둔다.
// 알/교환 기술은 제외한다.
async function buildLearnsets(poke, machineLookup) {
  const learnsets = []
  for (const [genStr, versions] of Object.entries(VERSIONS_BY_GEN)) {
    const generation = Number(genStr)
    for (const { label, groups } of versions) {
      const levelUp = []
      const machines = []
      const tutor = []
      const seenTutorIds = new Set()
      for (const moveEntry of poke.moves) {
        const details = moveEntry.version_group_details.filter((d) => groups.includes(d.version_group.name))
        if (details.length === 0) continue

        const levelUpDetail = details.find((d) => d.move_learn_method.name === 'level-up' && d.level_learned_at > 0)
        if (levelUpDetail) {
          const info = await moveDetail(moveEntry.move.name)
          levelUp.push({ moveId: info.id, level: levelUpDetail.level_learned_at })
        }

        const machineDetail = details.find((d) => d.move_learn_method.name === 'machine')
        if (machineDetail) {
          const tm = groups.map((g) => machineLookup.get(`${g}|${moveEntry.move.name}`)).find(Boolean)
          if (tm) {
            const info = await moveDetail(moveEntry.move.name)
            machines.push({ moveId: info.id, machine: tm.machine, number: tm.number })
          }
        }

        const tutorDetail = details.find((d) => d.move_learn_method.name === 'tutor')
        if (tutorDetail) {
          const info = await moveDetail(moveEntry.move.name)
          if (!seenTutorIds.has(info.id)) {
            seenTutorIds.add(info.id)
            tutor.push({ moveId: info.id })
          }
        }
      }
      if (levelUp.length === 0 && machines.length === 0 && tutor.length === 0) continue
      learnsets.push({ generation: `${generation}세대`, version: label, levelUp, machines, tutor })
    }
  }
  return learnsets
}

// 등장한 가장 최신 세대의 대표(첫) 버전에서, 위력이 높은 기술 위주로 4개를 추천 배치로 고른다.
function recommendedMoveset(learnsets) {
  if (learnsets.length === 0) return []
  const latestGen = Math.max(...learnsets.map((ls) => Number(ls.generation.replace('세대', ''))))
  const main = learnsets.find((ls) => ls.generation === `${latestGen}세대`)
  if (!main) return []
  const ids = [
    ...new Set([...main.levelUp.map((m) => m.moveId), ...main.machines.map((m) => m.moveId), ...main.tutor.map((m) => m.moveId)]),
  ]
  return ids
    .map((id) => moveDetailByIdCache.get(id))
    .filter(Boolean)
    .sort((a, b) => (b.power ?? -1) - (a.power ?? -1))
    .slice(0, 4)
    .map((m) => m.id)
}

async function main() {
  const machineLookup = await buildMachineLookup()

  console.error(`포켓몬 1~${TOTAL_SPECIES}종 + 리전폼 가져오는 중...`)
  const speciesIds = Array.from({ length: TOTAL_SPECIES }, (_, i) => i + 1)

  // speciesId -> { species, defaultVarietyName, varietyEntries: [{name,id,isDefault}] }
  const speciesInfoMap = new Map()

  const pokemonOut = []
  const idToDexNumber = new Map() // 고유 pokemon id -> 국가도감 번호 (진화 트리 표시용)
  const learnsetsByPokemonId = new Map()
  const recommendedByPokemonId = new Map()

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
      const abilities = await mapWithConcurrency(
        [...poke.abilities].sort((a, b) => a.slot - b.slot),
        4,
        async (a) => ({ ...(await abilityInfo(a.ability.name)), isHidden: a.is_hidden }),
      )
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
        abilities,
      }
      pokemonOut.push(entry)
      idToDexNumber.set(poke.id, speciesId)
      varietyEntries.push({ name: varietyName, id: poke.id, isDefault })

      const learnsets = await buildLearnsets(poke, machineLookup)
      if (learnsets.length > 0) {
        learnsetsByPokemonId.set(poke.id, learnsets)
        recommendedByPokemonId.set(poke.id, recommendedMoveset(learnsets))
      }
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
  // 1082개 객체를 하나의 배열 리터럴로 Pokemon[]에 타입 체크하면 TS2590(너무 복잡한 유니온
  // 타입) 에러가 난다. 작은 묶음으로 나눠 각각 타입 체크한 뒤 합치면 이 한계를 피할 수 있다.
  const POKEMON_CHUNK_SIZE = 100
  const pokemonChunkNames = []
  for (let i = 0; i < pokemonOut.length; i += POKEMON_CHUNK_SIZE) {
    const chunkName = `POKEMON_CHUNK_${pokemonChunkNames.length}`
    pokemonChunkNames.push(chunkName)
    lines.push(`const ${chunkName}: Pokemon[] = ${JSON.stringify(pokemonOut.slice(i, i + POKEMON_CHUNK_SIZE), null, 2)}`)
    lines.push('')
  }
  lines.push(`export const ALL_POKEMON: Pokemon[] = [${pokemonChunkNames.map((n) => `...${n}`).join(', ')}]`)
  lines.push('')
  lines.push(`export const ALL_EVOLUTION_LINES: EvolutionStage[][] = ${JSON.stringify(evolutionLines, null, 2)}`)
  lines.push('')

  await fs.writeFile(new URL('../src/data/pokedex/pokedex.generated.ts', import.meta.url), lines.join('\n'), 'utf8')
  console.error(`완료: ${pokemonOut.length}종(폼 포함), 진화선 ${evolutionLines.length}개`)

  // 기술 사전(ALL_MOVES)은 가볍게 한 파일로 두지만, 포켓몬별 학습셋은 1082종 전체를 한 파일에
  // 합치면 19MB(gzip 후에도 500KB+)가 되어 상세 페이지 진입 시 매번 통째로 받게 된다.
  // 포켓몬 1종당 파일을 나눠 import.meta.glob으로 그 포켓몬을 볼 때만 불러오게 한다.
  const allMoves = [...moveDetailByIdCache.values()].sort((a, b) => a.id - b.id)

  const movesDir = new URL('../src/data/moves/', import.meta.url)
  const byIdDir = new URL('by-id/', movesDir)
  await fs.mkdir(byIdDir, { recursive: true })

  const dictLines = []
  dictLines.push('// 이 파일은 scripts/fetch-pokedex.mjs 로 PokeAPI에서 생성됩니다. 직접 수정하지 마세요.')
  dictLines.push("import type { Move } from '../../types/move'")
  dictLines.push('')
  dictLines.push(`export const ALL_MOVES: Move[] = ${JSON.stringify(allMoves, null, 2)}`)
  dictLines.push('')
  await fs.writeFile(new URL('all-moves.generated.ts', movesDir), dictLines.join('\n'), 'utf8')

  for (const [pokemonId, learnsets] of learnsetsByPokemonId) {
    const recommended = recommendedByPokemonId.get(pokemonId) ?? []
    const lines2 = []
    lines2.push('// 이 파일은 scripts/fetch-pokedex.mjs 로 PokeAPI에서 생성됩니다. 직접 수정하지 마세요.')
    lines2.push("import type { Learnset } from '../../../types/move'")
    lines2.push('')
    lines2.push(`export const LEARNSETS: Learnset[] = ${JSON.stringify(learnsets, null, 2)}`)
    lines2.push('')
    lines2.push(`export const RECOMMENDED_MOVESET: number[] = ${JSON.stringify(recommended, null, 2)}`)
    lines2.push('')
    await fs.writeFile(new URL(`${pokemonId}.generated.ts`, byIdDir), lines2.join('\n'), 'utf8')
  }

  console.error(`기술 데이터 완료: 기술 ${allMoves.length}개, 학습셋 보유 포켓몬 ${learnsetsByPokemonId.size}종`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
