// PokeAPI에서 진화 아이템 / 배틀 지니기 아이템 한국어 데이터를 수집해 items.generated.ts를 생성한다.
import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const BASE = 'https://pokeapi.co/api/v2'
const OUT = resolve(__dirname, '../src/data/items.generated.ts')

// 진화 아이템 카테고리
const EVOLUTION_CATEGORIES = ['evolution']

// 배틀 지니기 카테고리
const BATTLE_CATEGORIES = ['held-items', 'choice', 'type-enhancement', 'bad-held-items']

const GEN_NAME_TO_NUM = {
  'generation-i': 1, 'generation-ii': 2, 'generation-iii': 3, 'generation-iv': 4,
  'generation-v': 5, 'generation-vi': 6, 'generation-vii': 7, 'generation-viii': 8,
  'generation-ix': 9,
}


function detectGeneration(item) {
  // items의 game_indices 구조: { game_index, generation: { name } }
  if (item.game_indices?.length > 0) {
    const gens = item.game_indices
      .map((g) => GEN_NAME_TO_NUM[g.generation?.name])
      .filter(Boolean)
    if (gens.length > 0) return Math.min(...gens)
  }
  return null
}

// 최신 버전 그룹 우선순위 (한국어 설명 선택)
const VG_PRIORITY = [
  'scarlet-violet', 'sword-shield', 'brilliant-diamond-and-shining-pearl',
  'legends-arceus', 'ultra-sun-ultra-moon', 'sun-moon',
  'omega-ruby-alpha-sapphire', 'x-y',
  'black-2-white-2', 'black-white', 'heartgold-soulsilver', 'platinum',
  'diamond-pearl', 'firered-leafgreen', 'emerald', 'ruby-sapphire',
]

async function fetchJson(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${url}`)
  return res.json()
}

async function mapWithConcurrency(items, limit, fn) {
  let index = 0
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (index < items.length) {
      const i = index++
      await fn(items[i], i)
    }
  })
  await Promise.all(workers)
}

async function fetchCategory(catName) {
  const catData = await fetchJson(`${BASE}/item-category/${catName}/`)
  const items = []

  await mapWithConcurrency(catData.items, 20, async (item) => {
    try {
      const d = await fetchJson(item.url)
      const id = d.id

      const nameKo = (d.names ?? []).find((n) => n.language.name === 'ko')?.name ?? null
      const nameEn = (d.names ?? []).find((n) => n.language.name === 'en')?.name ?? null
      const generation = detectGeneration(d)

      // 한국어 설명 (최신 버전 우선)
      const koFlavorEntries = (d.flavor_text_entries ?? []).filter(
        (e) => e.language.name === 'ko'
      )
      let descKo = null
      for (const vg of VG_PRIORITY) {
        const match = koFlavorEntries.find((e) => e.version_group.name === vg)
        if (match) {
          descKo = match.text.replace(/\n/g, ' ').replace(/\f/g, ' ')
          break
        }
      }

      const sprite = d.sprites?.default ?? null

      items.push({
        id,
        apiName: item.name,
        nameKo,
        nameEn,
        descKo,
        generation,
        sprite,
        category: catName,
      })
    } catch (e) {
      console.error(`[WARN] 아이템 ${item.name} 로드 실패: ${e.message}`)
    }
  })

  return items
}

console.error('진화 아이템 수집 중...')
const evolutionItems = []
for (const cat of EVOLUTION_CATEGORIES) {
  const items = await fetchCategory(cat)
  evolutionItems.push(...items)
  console.error(`  ${cat}: ${items.length}개`)
}

console.error('배틀 지니기 아이템 수집 중...')
const battleItems = []
for (const cat of BATTLE_CATEGORIES) {
  const items = await fetchCategory(cat)
  battleItems.push(...items)
  console.error(`  ${cat}: ${items.length}개`)
}

evolutionItems.sort((a, b) => a.id - b.id)
battleItems.sort((a, b) => a.id - b.id)

console.error(`진화 아이템: ${evolutionItems.length}개, 배틀 지니기: ${battleItems.length}개`)

function itemToTs(a) {
  return `  { id: ${a.id}, apiName: ${JSON.stringify(a.apiName)}, nameKo: ${JSON.stringify(a.nameKo)}, nameEn: ${JSON.stringify(a.nameEn)}, descKo: ${JSON.stringify(a.descKo)}, generation: ${JSON.stringify(a.generation)}, sprite: ${JSON.stringify(a.sprite)}, category: ${JSON.stringify(a.category)} },`
}

const lines = [
  '// 이 파일은 scripts/build-items.mjs 로 생성됩니다. 직접 수정하지 마세요.',
  '',
  'export interface ItemEntry {',
  '  id: number',
  '  apiName: string',
  '  nameKo: string | null',
  '  nameEn: string | null',
  '  descKo: string | null',
  '  generation: number | null',
  '  sprite: string | null',
  '  category: string',
  '}',
  '',
  'export const EVOLUTION_ITEMS: ItemEntry[] = [',
  ...evolutionItems.map(itemToTs),
  ']',
  '',
  'export const BATTLE_ITEMS: ItemEntry[] = [',
  ...battleItems.map(itemToTs),
  ']',
]

writeFileSync(OUT, lines.join('\n'), 'utf-8')
console.error(`✓ ${OUT} 생성 완료`)
