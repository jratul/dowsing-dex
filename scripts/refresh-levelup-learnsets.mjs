// by-id/*.generated.ts 의 levelUp 배열만 PokeAPI에서 다시 받아 덧씌운다.
// fetch-pokedex.mjs 전체 실행(위키 스크래핑 포함, 수 시간)을 돌리지 않고
// 레벨업 학습셋만 최신화할 때 쓴다. machines/tutor/RECOMMENDED_MOVESET은 건드리지 않는다.
//
//   node scripts/refresh-levelup-learnsets.mjs [--dry-run] [--limit N]
import fs from 'node:fs/promises'
import { VERSIONS_BY_GEN, levelUpLevelsFor } from './version-groups.mjs'

const BASE = 'https://pokeapi.co/api/v2'
const CONCURRENCY = 12
const DRY_RUN = process.argv.includes('--dry-run')
const LIMIT = Number(process.argv[process.argv.indexOf('--limit') + 1]) || Infinity

const byIdDir = new URL('../src/data/moves/by-id/', import.meta.url)
const movesFile = new URL('../src/data/moves/all-moves.generated.ts', import.meta.url)

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
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker))
  return results
}

// fetch-pokedex.mjs 의 by-id 파일 출력 형식과 한 글자도 달라지면 안 된다.
// 달라지면 다음 전체 재생성 때 의미 없는 diff가 통째로 생긴다.
function serialize(learnsets, recommended) {
  return [
    '// 이 파일은 scripts/fetch-pokedex.mjs 로 PokeAPI에서 생성됩니다. 직접 수정하지 마세요.',
    "import type { Learnset } from '../../../types/move'",
    '',
    `export const LEARNSETS: Learnset[] = ${JSON.stringify(learnsets, null, 2)}`,
    '',
    `export const RECOMMENDED_MOVESET: number[] = ${JSON.stringify(recommended, null, 2)}`,
    '',
  ].join('\n')
}

async function main() {
  const files = (await fs.readdir(byIdDir))
    .filter((f) => f.endsWith('.generated.ts'))
    .sort((a, b) => parseInt(a) - parseInt(b))
    .slice(0, LIMIT)

  const moveList = await fetchJson(`${BASE}/move?limit=20000`)
  if (moveList.results.length !== moveList.count) throw new Error(`기술 목록 누락: ${moveList.results.length}/${moveList.count}`)
  const moveNameToId = new Map(moveList.results.map((m) => [m.name, Number(m.url.split('/').filter(Boolean).pop())]))
  process.stderr.write(`기술 이름→ID 매핑 ${moveNameToId.size.toLocaleString('ko-KR')}건 확보\n`)

  const movesSrc = await fs.readFile(movesFile, 'utf8')
  const knownMoveIds = new Set(
    JSON.parse(movesSrc.slice(movesSrc.indexOf('= [') + 2, movesSrc.lastIndexOf(']') + 1)).map((m) => m.id),
  )

  const stats = { changed: 0, gained: 0, lost: 0, lostSamples: [], formatMismatch: [], unknownVersion: [], missingFromDict: new Set(), failed: [] }
  let done = 0

  await mapWithConcurrency(files, CONCURRENCY, async (file) => {
    const pokemonId = parseInt(file)
    const fileUrl = new URL(file, byIdDir)
    let poke
    try {
      poke = await fetchJson(`${BASE}/pokemon/${pokemonId}`)
    } catch (err) {
      stats.failed.push(`${pokemonId}: ${err.message}`)
      return
    }

    // (세대|버전) → 새 levelUp. poke.moves 순회 순서를 그대로 유지해야
    // 나중에 fetch-pokedex.mjs 를 전체 실행했을 때와 같은 순서가 나온다.
    const fresh = new Map()
    for (const [genStr, versions] of Object.entries(VERSIONS_BY_GEN)) {
      for (const { label, groups } of versions) {
        const levelUp = []
        for (const moveEntry of poke.moves) {
          const levels = levelUpLevelsFor(moveEntry.version_group_details, groups)
          if (levels.length === 0) continue
          const moveId = moveNameToId.get(moveEntry.move.name)
          if (moveId === undefined) throw new Error(`알 수 없는 기술: ${moveEntry.move.name}`)
          if (!knownMoveIds.has(moveId)) stats.missingFromDict.add(moveEntry.move.name)
          for (const level of levels) levelUp.push({ moveId, level })
        }
        fresh.set(`${genStr}세대|${label}`, levelUp)
      }
    }

    const original = await fs.readFile(fileUrl, 'utf8')
    const mod = await import(fileUrl.href)
    const { LEARNSETS, RECOMMENDED_MOVESET } = mod

    if (serialize(LEARNSETS, RECOMMENDED_MOVESET) !== original) stats.formatMismatch.push(pokemonId)

    const updated = LEARNSETS.map((ls) => {
      const key = `${ls.generation}|${ls.version}`
      const levelUp = fresh.get(key)
      if (levelUp === undefined) {
        stats.unknownVersion.push(`${pokemonId} ${key}`)
        return ls
      }
      // 길이 비교로는 "1건 빠지고 2건 늘어난" 경우를 놓친다. (moveId, level) 쌍 단위로 센다.
      const before = ls.levelUp.map((m) => `${m.moveId}@${m.level}`)
      const after = new Set(levelUp.map((m) => `${m.moveId}@${m.level}`))
      stats.gained += after.size - before.filter((k) => after.has(k)).length
      for (const k of before) {
        if (after.has(k)) continue
        stats.lost++
        if (stats.lostSamples.length < 10) stats.lostSamples.push(`#${pokemonId} ${key} ${k}`)
      }
      return { generation: ls.generation, version: ls.version, levelUp, machines: ls.machines, tutor: ls.tutor }
    })

    const next = serialize(updated, RECOMMENDED_MOVESET)
    if (next !== original) {
      stats.changed++
      if (!DRY_RUN) await fs.writeFile(fileUrl, next, 'utf8')
    }
    if (++done % 100 === 0) process.stderr.write(`  ${done.toLocaleString('ko-KR')}/${files.length.toLocaleString('ko-KR')}\n`)
  })

  process.stderr.write(`\n${DRY_RUN ? '[dry-run] ' : ''}대상 ${files.length.toLocaleString('ko-KR')}종\n`)
  process.stderr.write(`  변경된 파일: ${stats.changed.toLocaleString('ko-KR')}개\n`)
  console.error(`  새로 생긴 항목: ${stats.gained.toLocaleString('ko-KR')}건`)
  console.error(`  사라진 기존 항목: ${stats.lost.toLocaleString('ko-KR')}건 ${stats.lostSamples.join(', ')}`)
  process.stderr.write(`  포맷 왕복 불일치: ${stats.formatMismatch.length.toLocaleString('ko-KR')}개 ${stats.formatMismatch.slice(0, 5).join(', ')}\n`)
  process.stderr.write(`  파일에 없는 버전: ${stats.unknownVersion.length.toLocaleString('ko-KR')}건 ${stats.unknownVersion.slice(0, 5).join(', ')}\n`)
  process.stderr.write(`  all-moves 사전에 없는 기술: ${stats.missingFromDict.size.toLocaleString('ko-KR')}종 ${[...stats.missingFromDict].slice(0, 10).join(', ')}\n`)
  process.stderr.write(`  요청 실패: ${stats.failed.length.toLocaleString('ko-KR')}건 ${stats.failed.slice(0, 3).join(' | ')}\n`)
  if (stats.failed.length > 0) process.exit(1)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
