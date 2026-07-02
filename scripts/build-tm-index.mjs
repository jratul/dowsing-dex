// by-id/*.generated.ts 파일을 읽어 TM/HM 역인덱스를 생성합니다.
// 실행: node scripts/build-tm-index.mjs
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const byIdDir = path.resolve(__dirname, '../src/data/moves/by-id')
const outFile = path.resolve(__dirname, '../src/data/moves/tm-index.generated.ts')

function extractLearnsets(content) {
  const start = content.indexOf('export const LEARNSETS')
  if (start === -1) return []
  const eqIdx = content.indexOf('= [', start)
  if (eqIdx === -1) return []
  const arrayStart = eqIdx + 2
  let depth = 0
  let i = arrayStart
  while (i < content.length) {
    if (content[i] === '[') depth++
    else if (content[i] === ']') {
      depth--
      if (depth === 0) break
    }
    i++
  }
  try {
    return JSON.parse(content.slice(arrayStart, i + 1))
  } catch {
    return []
  }
}

const GEN_ORDER = { '1세대': 1, '2세대': 2, '3세대': 3, '4세대': 4, '5세대': 5, '6세대': 6, '7세대': 7, '8세대': 8, '9세대': 9 }

// key: `generation__version__machine__number`
const indexMap = new Map()

const files = fs.readdirSync(byIdDir)
  .filter(f => f.endsWith('.generated.ts'))
  .sort((a, b) => parseInt(a) - parseInt(b))

let processed = 0
for (const file of files) {
  const pokemonId = parseInt(file)
  if (isNaN(pokemonId)) continue

  const content = fs.readFileSync(path.join(byIdDir, file), 'utf-8')
  const learnsets = extractLearnsets(content)

  for (const ls of learnsets) {
    for (const m of ls.machines) {
      const key = `${ls.generation}__${ls.version}__${m.machine}__${m.number}`
      if (!indexMap.has(key)) {
        indexMap.set(key, {
          generation: ls.generation,
          version: ls.version,
          machine: m.machine,
          number: m.number,
          moveId: m.moveId,
          pokemonIds: [],
        })
      }
      indexMap.get(key).pokemonIds.push(pokemonId)
    }
  }

  processed++
  if (processed % 200 === 0) process.stdout.write(`\r${processed}/${files.length}`)
}
process.stdout.write(`\r${processed}/${files.length}\n`)

const entries = [...indexMap.values()].sort((a, b) => {
  const ga = GEN_ORDER[a.generation] ?? 99
  const gb = GEN_ORDER[b.generation] ?? 99
  if (ga !== gb) return ga - gb
  if (a.version !== b.version) return a.version.localeCompare(b.version, 'ko')
  if (a.machine !== b.machine) return a.machine === 'TM' ? -1 : 1
  return a.number - b.number
})

const output = `// @ts-nocheck
// 이 파일은 scripts/build-tm-index.mjs 로 생성됩니다. 직접 수정하지 마세요.
import type { TmEntry } from '../../types/move'

export const TM_INDEX: TmEntry[] = ${JSON.stringify(entries, null, 2)}
`

fs.writeFileSync(outFile, output, 'utf-8')
console.log(`생성 완료: ${entries.length}개 TM/HM 엔트리 → ${outFile}`)
