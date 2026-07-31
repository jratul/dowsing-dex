// PokeAPI에서 기술(무브) 한국어 설명을 수집해 move-descriptions.generated.ts를 생성한다.
import { writeFileSync, readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const BASE = 'https://pokeapi.co/api/v2'

// 최신 버전 그룹 우선순위 (한국어 설명이 있을 경우 최신 것을 사용)
const VERSION_GROUP_PRIORITY = [
  'scarlet-violet',
  'sword-shield',
  'brilliant-diamond-and-shining-pearl',
  'legends-arceus',
  'ultra-sun-ultra-moon',
  'sun-moon',
  'lets-go-pikachu-lets-go-eevee',
  'omega-ruby-alpha-sapphire',
  'x-y',
  'black-2-white-2',
  'black-white',
  'heartgold-soulsilver',
  'platinum',
  'diamond-pearl',
  'firered-leafgreen',
  'emerald',
  'ruby-sapphire',
  'crystal',
  'gold-silver',
  'red-blue',
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

// 기존 all-moves.generated.ts에서 ID 목록 추출
const allMovesFile = readFileSync(resolve(__dirname, '../src/data/moves/all-moves.generated.ts'), 'utf-8')
const moveIds = [...allMovesFile.matchAll(/"id":\s*(\d+)/g)].map((m) => Number(m[1]))

console.error(`총 ${moveIds.length}개 기술 설명 수집 시작...`)

const descriptions = new Map()
let done = 0

await mapWithConcurrency(moveIds, 20, async (id) => {
  try {
    const data = await fetchJson(`${BASE}/move/${id}`)

    // 한국어 flavor_text_entries 중 최신 버전 우선
    const koEntries = data.flavor_text_entries.filter((e) => e.language.name === 'ko')
    let effectKo = null

    if (koEntries.length > 0) {
      for (const vg of VERSION_GROUP_PRIORITY) {
        const entry = koEntries.find((e) => e.version_group.name === vg)
        if (entry) {
          effectKo = entry.flavor_text.replace(/[\f\n\r­]/g, ' ').replace(/\s+/g, ' ').trim()
          break
        }
      }
      if (!effectKo) {
        const last = koEntries[koEntries.length - 1]
        effectKo = last.flavor_text.replace(/[\f\n\r­]/g, ' ').replace(/\s+/g, ' ').trim()
      }
    }

    if (effectKo) descriptions.set(id, effectKo)
  } catch (e) {
    console.error(`기술 ${id} 오류: ${e.message}`)
  }

  done++
  if (done % 100 === 0) console.error(`  ${done}/${moveIds.length}`)
})

const entries = [...descriptions.entries()].sort((a, b) => a[0] - b[0])
const lines = [
  '// 이 파일은 scripts/build-move-descriptions.mjs 로 PokeAPI에서 생성됩니다. 직접 수정하지 마세요.',
  'export const MOVE_DESCRIPTIONS: Record<number, string> = {',
  ...entries.map(([id, text]) => `  ${id}: ${JSON.stringify(text)},`),
  '}',
  '',
]

const outPath = resolve(__dirname, '../src/data/moves/move-descriptions.generated.ts')
writeFileSync(outPath, lines.join('\n'))
console.error(`완료: ${entries.length}개 기술 설명 저장 → ${outPath}`)
