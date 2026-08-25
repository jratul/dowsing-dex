// by-id/*.generated.ts를 읽어 레벨업·기술가르침 역인덱스를 생성한다.
// 각 (포켓몬, 기술) 쌍에서 최신 세대 데이터만 보존해 파일 크기를 최소화한다.
// 출력: src/data/moves/move-index.generated.ts
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const byIdDir = path.resolve(__dirname, '../src/data/moves/by-id')
const outFile = path.resolve(__dirname, '../src/data/moves/move-index.generated.ts')

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
    else if (content[i] === ']') { depth--; if (depth === 0) break }
    i++
  }
  try { return JSON.parse(content.slice(arrayStart, i + 1)) } catch { return [] }
}

const GEN_ORDER = { '1세대': 1, '2세대': 2, '3세대': 3, '4세대': 4, '5세대': 5, '6세대': 6, '7세대': 7, '8세대': 8, '9세대': 9 }

// 각 (pokemonId, moveId) 쌍에서 최신 세대 데이터만 보존
const levelUpBest = new Map()   // level-up
const tutorBest = new Map()     // tutor
const machineBest = new Map()   // TM/HM

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
    const genOrder = GEN_ORDER[ls.generation] ?? 0

    for (const m of (ls.levelUp ?? [])) {
      const key = `${pokemonId}_${m.moveId}`
      const prev = levelUpBest.get(key)
      // 같은 학습셋 안에 같은 기술이 여러 레벨로 들어있으면 가장 빠른 레벨을 대표로 삼는다.
      const sameLearnset = prev && prev.gen === ls.generation && prev.version === ls.version
      if (!prev || genOrder > prev.genOrder || (sameLearnset && m.level < prev.level)) {
        levelUpBest.set(key, { pokemonId, moveId: m.moveId, level: m.level, genOrder, gen: ls.generation, version: ls.version })
      }
    }

    for (const m of (ls.tutor ?? [])) {
      const key = `${pokemonId}_${m.moveId}`
      const prev = tutorBest.get(key)
      if (!prev || genOrder > prev.genOrder) {
        tutorBest.set(key, { pokemonId, moveId: m.moveId, genOrder, gen: ls.generation, version: ls.version })
      }
    }

    for (const m of (ls.machines ?? [])) {
      // 같은 포켓몬-기술 쌍에서 TM/HM은 최신 세대 번호만 보존
      const key = `${pokemonId}_${m.moveId}`
      const prev = machineBest.get(key)
      if (!prev || genOrder > prev.genOrder) {
        machineBest.set(key, { pokemonId, moveId: m.moveId, machine: m.machine, number: m.number, genOrder, gen: ls.generation, version: ls.version })
      }
    }
  }

  processed++
  if (processed % 200 === 0) process.stderr.write(`${processed}/${files.length} 처리 중...\n`)
}
process.stderr.write(`${processed}/${files.length} 완료\n`)

// moveId 기준으로 그룹핑
const levelUpByMove = new Map()
for (const entry of levelUpBest.values()) {
  if (!levelUpByMove.has(entry.moveId)) levelUpByMove.set(entry.moveId, [])
  levelUpByMove.get(entry.moveId).push({ pokemonId: entry.pokemonId, level: entry.level, gen: entry.gen, version: entry.version })
}

const tutorByMove = new Map()
for (const entry of tutorBest.values()) {
  if (!tutorByMove.has(entry.moveId)) tutorByMove.set(entry.moveId, [])
  tutorByMove.get(entry.moveId).push({ pokemonId: entry.pokemonId, gen: entry.gen, version: entry.version })
}

const machineByMove = new Map()
for (const entry of machineBest.values()) {
  if (!machineByMove.has(entry.moveId)) machineByMove.set(entry.moveId, [])
  machineByMove.get(entry.moveId).push({ pokemonId: entry.pokemonId, machine: entry.machine, number: entry.number, gen: entry.gen, version: entry.version })
}

// moveId 오름차순 배열로 변환
const levelUpIndex = [...levelUpByMove.entries()]
  .sort((a, b) => a[0] - b[0])
  .map(([moveId, learners]) => ({
    moveId,
    learners: learners.sort((a, b) => a.pokemonId - b.pokemonId),
  }))

const tutorIndex = [...tutorByMove.entries()]
  .sort((a, b) => a[0] - b[0])
  .map(([moveId, learners]) => ({
    moveId,
    learners: learners.sort((a, b) => a.pokemonId - b.pokemonId),
  }))

const machineIndex = [...machineByMove.entries()]
  .sort((a, b) => a[0] - b[0])
  .map(([moveId, learners]) => ({
    moveId,
    learners: learners.sort((a, b) => a.pokemonId - b.pokemonId),
  }))

process.stderr.write(`레벨업: ${levelUpIndex.length}개, 기술가르침: ${tutorIndex.length}개, TM/HM: ${machineIndex.length}개\n`)

const output = `// @ts-nocheck
// 이 파일은 scripts/build-move-index.mjs 로 생성됩니다. 직접 수정하지 마세요.
// 각 (포켓몬, 기술) 쌍의 최신 세대 데이터만 보존.

export type LevelUpLearner = { pokemonId: number; level: number; gen: string; version: string }
export type TutorLearner = { pokemonId: number; gen: string; version: string }
export type MachineLearner = { pokemonId: number; machine: string; number: number; gen: string; version: string }

export type LevelUpMoveEntry = { moveId: number; learners: LevelUpLearner[] }
export type TutorMoveEntry = { moveId: number; learners: TutorLearner[] }
export type MachineMoveEntry = { moveId: number; learners: MachineLearner[] }

export const LEVEL_UP_INDEX: LevelUpMoveEntry[] = ${JSON.stringify(levelUpIndex)}

export const TUTOR_INDEX: TutorMoveEntry[] = ${JSON.stringify(tutorIndex)}

export const MACHINE_INDEX: MachineMoveEntry[] = ${JSON.stringify(machineIndex)}

export const LEVEL_UP_MAP = new Map<number, LevelUpLearner[]>(LEVEL_UP_INDEX.map(e => [e.moveId, e.learners]))
export const TUTOR_MAP = new Map<number, TutorLearner[]>(TUTOR_INDEX.map(e => [e.moveId, e.learners]))
export const MACHINE_MAP = new Map<number, MachineLearner[]>(MACHINE_INDEX.map(e => [e.moveId, e.learners]))
`

fs.writeFileSync(outFile, output, 'utf-8')
const sizeMB = (fs.statSync(outFile).size / 1024 / 1024).toFixed(1)
process.stderr.write(`✓ ${outFile} 생성 완료 (${sizeMB}MB)\n`)
