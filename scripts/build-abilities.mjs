// PokeAPI에서 특성(Ability) 한국어 데이터를 수집해 abilities.generated.ts를 생성한다.
import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const BASE = 'https://pokeapi.co/api/v2'
const OUT = resolve(__dirname, '../src/data/abilities.generated.ts')

const GEN_NAME_TO_NUM = {
  'generation-i': 1, 'generation-ii': 2, 'generation-iii': 3, 'generation-iv': 4,
  'generation-v': 5, 'generation-vi': 6, 'generation-vii': 7, 'generation-viii': 8,
  'generation-ix': 9,
}

// 최신 버전 그룹 우선순위 (한국어 설명 선택)
const VG_PRIORITY = [
  'scarlet-violet', 'sword-shield', 'brilliant-diamond-and-shining-pearl',
  'legends-arceus', 'ultra-sun-ultra-moon', 'sun-moon',
  'lets-go-pikachu-lets-go-eevee', 'omega-ruby-alpha-sapphire', 'x-y',
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

console.error('특성 목록 가져오는 중...')
const listData = await fetchJson(`${BASE}/ability/?limit=313`)
const abilities = []
let done = 0

await mapWithConcurrency(listData.results, 20, async (item) => {
  // ID 추출해서 10000+ 제외
  const id = parseInt(item.url.replace(/.*\/ability\/(\d+)\//, '$1'))
  if (id >= 10000) return

  try {
    const d = await fetchJson(item.url)

    const ko = (d.names ?? []).find((n) => n.language.name === 'ko')?.name ?? null
    const en = (d.names ?? []).find((n) => n.language.name === 'en')?.name ?? null
    const gen = GEN_NAME_TO_NUM[d.generation?.name] ?? null

    // 한국어 설명 (최신 버전 우선)
    const koFlavorEntries = (d.flavor_text_entries ?? []).filter(
      (e) => e.language.name === 'ko'
    )
    let descKo = null
    for (const vg of VG_PRIORITY) {
      const match = koFlavorEntries.find((e) => e.version_group.name === vg)
      if (match) {
        descKo = match.flavor_text.replace(/\n/g, ' ').replace(/\f/g, ' ')
        break
      }
    }

    abilities.push({ id, apiName: item.name, nameKo: ko, nameEn: en, descKo, generation: gen })
  } catch (e) {
    console.error(`[WARN] 특성 ${item.name} 로드 실패: ${e.message}`)
  }

  done++
  if (done % 50 === 0) console.error(`  ${done}/${listData.results.length} 완료`)
})

abilities.sort((a, b) => a.id - b.id)

console.error(`총 ${abilities.length}개 특성 수집 완료`)

const lines = [
  '// 이 파일은 scripts/build-abilities.mjs 로 생성됩니다. 직접 수정하지 마세요.',
  '',
  'export interface AbilityEntry {',
  '  id: number',
  '  apiName: string',
  '  nameKo: string | null',
  '  nameEn: string | null',
  '  descKo: string | null',
  '  generation: number | null',
  '}',
  '',
  'export const ALL_ABILITIES: AbilityEntry[] = [',
  ...abilities.map((a) =>
    `  { id: ${a.id}, apiName: ${JSON.stringify(a.apiName)}, nameKo: ${JSON.stringify(a.nameKo)}, nameEn: ${JSON.stringify(a.nameEn)}, descKo: ${JSON.stringify(a.descKo)}, generation: ${JSON.stringify(a.generation)} },`
  ),
  ']',
  '',
  'export const ABILITY_MAP = new Map<number, AbilityEntry>(ALL_ABILITIES.map((a) => [a.id, a]))',
  'export const ABILITY_BY_API_NAME = new Map<string, AbilityEntry>(ALL_ABILITIES.map((a) => [a.apiName, a]))',
]

writeFileSync(OUT, lines.join('\n'), 'utf-8')
console.error(`✓ ${OUT} 생성 완료`)
