// 1세대(1~151) 포켓몬 전체 도감 데이터를 PokeAPI에서 가져와 TS 데이터 파일로 생성하는 1회성 스크립트.
import fs from 'node:fs/promises'

const BASE = 'https://pokeapi.co/api/v2'
const TOTAL = 151

const EN_TO_KO_TYPE = {
  normal: '노말', fire: '불꽃', water: '물', electric: '전기', grass: '풀', ice: '얼음',
  fighting: '격투', poison: '독', ground: '땅', flying: '비행', psychic: '에스퍼',
  bug: '벌레', rock: '바위', ghost: '고스트', dragon: '드래곤', dark: '악', steel: '강철', fairy: '페어리',
}

const ITEM_KO = {
  'water-stone': '물의돌',
  'thunder-stone': '번개의돌',
  'fire-stone': '불의돌',
  'leaf-stone': '잎의돌',
  'moon-stone': '달의돌',
}

function itemIconUrl(itemName) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${itemName}.png`
}

function sprite(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}

function artwork(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
}

async function fetchJson(url) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url)
      if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`)
      return await res.json()
    } catch (err) {
      if (attempt === 2) throw err
      await new Promise((r) => setTimeout(r, 500 * (attempt + 1)))
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

function describeEvolutionDetail(detail) {
  if (!detail) return { trigger: undefined, triggerIconUrl: undefined }
  const triggerName = detail.trigger?.name
  if (triggerName === 'level-up') {
    if (detail.min_level) return { trigger: `레벨 ${detail.min_level}` }
    if (detail.min_happiness) return { trigger: '친밀도' }
    return { trigger: '레벨업' }
  }
  if (triggerName === 'trade') {
    return { trigger: '교환' }
  }
  if (triggerName === 'use-item' && detail.item) {
    const ko = ITEM_KO[detail.item.name] ?? detail.item.name
    return { trigger: ko, triggerIconUrl: itemIconUrl(detail.item.name) }
  }
  return { trigger: triggerName }
}

function buildStage(node) {
  const pokemonId = idFromUrl(node.species.url)
  const stage = { pokemonId }
  const children = (node.evolves_to ?? [])
    .filter((child) => idFromUrl(child.species.url) <= TOTAL)
    .map((child) => {
      const childStage = buildStage(child)
      const { trigger, triggerIconUrl } = describeEvolutionDetail(child.evolution_details?.[0])
      if (trigger) childStage.trigger = trigger
      if (triggerIconUrl) childStage.triggerIconUrl = triggerIconUrl
      return childStage
    })
  if (children.length > 0) stage.children = children
  return stage
}

async function main() {
  console.error('포켓몬 1~151 데이터 가져오는 중...')
  const ids = Array.from({ length: TOTAL }, (_, i) => i + 1)

  const pokemonList = await mapWithConcurrency(ids, 12, async (id) => {
    const [poke, species] = await Promise.all([
      fetchJson(`${BASE}/pokemon/${id}`),
      fetchJson(`${BASE}/pokemon-species/${id}`),
    ])
    const nameKo = species.names.find((n) => n.language.name === 'ko')?.name ?? poke.name
    const nameEn = species.names.find((n) => n.language.name === 'en')?.name ?? poke.name
    const rawCategory = species.genera.find((g) => g.language.name === 'ko')?.genus
    // PokeAPI 한글 분류는 "씨앗포켓몬"처럼 공백이 없어, 공식 표기(예: "씨앗 포켓몬")에 맞춰 띄어쓰기를 보정한다.
    const category = rawCategory ? `${rawCategory.replace(/\s*포켓몬$/, '').trim()} 포켓몬` : undefined
    const types = [...poke.types].sort((a, b) => a.slot - b.slot).map((t) => EN_TO_KO_TYPE[t.type.name])
    const statByName = Object.fromEntries(poke.stats.map((s) => [s.stat.name, s.base_stat]))

    return {
      id,
      nameKo,
      nameEn,
      types,
      stats: {
        hp: statByName.hp,
        attack: statByName.attack,
        defense: statByName.defense,
        specialAttack: statByName['special-attack'],
        specialDefense: statByName['special-defense'],
        speed: statByName.speed,
      },
      category,
      heightM: poke.height / 10,
      weightKg: poke.weight / 10,
      spriteUrl: sprite(id),
      artworkUrl: artwork(id),
      evolutionChainUrl: species.evolution_chain?.url,
    }
  })

  pokemonList.sort((a, b) => a.id - b.id)

  console.error('진화 체인 가져오는 중...')
  const chainUrls = [...new Set(pokemonList.map((p) => p.evolutionChainUrl).filter(Boolean))]
  const chains = await mapWithConcurrency(chainUrls, 8, async (url) => {
    const data = await fetchJson(url)
    return buildStage(data.chain)
  })

  // 1~151 범위 밖 포켓몬으로만 이루어진 체인 제거(루트가 범위 밖이면 스킵), children 없는 단일 노드는 진화선 없음으로 취급.
  // EvolutionTree가 받는 stages: EvolutionStage[]와 형태를 맞추기 위해 루트 1개를 배열로 감싼다.
  const evolutionLines = chains.filter((stage) => stage.pokemonId <= TOTAL && stage.children).map((stage) => [stage])

  const pokemonOut = pokemonList.map(({ evolutionChainUrl: _evolutionChainUrl, ...rest }) => rest)

  const lines = []
  lines.push('// 이 파일은 scripts/fetch-gen1.mjs 로 PokeAPI에서 생성됩니다. 직접 수정하지 마세요.')
  lines.push("import type { EvolutionStage, Pokemon } from '../../types/pokemon'")
  lines.push('')
  lines.push(`export const GEN1_POKEMON: Pokemon[] = ${JSON.stringify(pokemonOut, null, 2)}`)
  lines.push('')
  lines.push(`export const GEN1_EVOLUTION_LINES: EvolutionStage[][] = ${JSON.stringify(evolutionLines, null, 2)}`)
  lines.push('')

  await fs.writeFile(new URL('../src/data/pokedex/gen1.generated.ts', import.meta.url), lines.join('\n'), 'utf8')
  console.error(`완료: ${pokemonOut.length}종, 진화선 ${evolutionLines.length}개`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
