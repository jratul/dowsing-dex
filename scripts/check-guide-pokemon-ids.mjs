// 공략 데이터의 포켓몬 이름 ↔ ID 매핑을 도감과 대조한다.
//
//   node scripts/check-guide-pokemon-ids.mjs
//
// 어긋나면 본문 링크가 엉뚱한 포켓몬으로 가는데, 화면상으로는 이름이 멀쩡히 보여서
// 눈으로는 잘 안 잡힌다(파오리에 id 16(구구)이 붙어 있던 것을 이렇게 찾았다).
// 불일치가 있으면 종료 코드 1.
//
// 주의: 이름이 틀린 경우와 ID가 틀린 경우가 같은 형태로 잡힌다. 주변 note 의
// 타입·진화·입수처 설명을 읽고 어느 쪽이 의도인지 판단해서 고친다.

import { readFileSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const POKEDEX = join(ROOT, 'src/data/pokedex/pokedex.generated.ts')

// 별명·상태 표기라 도감 이름과 다른 게 정상인 항목
const ALLOWED = new Set(['붉은 갸라도스', '리오르 알', '자유 선택'])

const idToName = new Map()
{
  const raw = readFileSync(POKEDEX, 'utf8')
  const re = /"id":\s*(\d+),\s*"dexNumber":\s*\d+,\s*"generation":\s*\d+,\s*"nameKo":\s*"([^"]+)"/g
  let m
  while ((m = re.exec(raw)) !== null) idToName.set(Number(m[1]), m[2])
}

const PAIR_PATTERNS = [
  /pokemonId:\s*(\d+),\s*pokemon:\s*'([^']+)'/g,
  /holderId:\s*(\d+),\s*holder:\s*'([^']+)'/g,
]
const MAP_PATTERN = /\['([^']+)',\s*(\d+)\]/g

function targets() {
  const out = []
  for (const [dir, ext] of [
    ['src/data/sample', '.ts'],
    ['src/pages/guides', '.tsx'],
  ]) {
    for (const f of readdirSync(join(ROOT, dir))) {
      if (f.endsWith(ext)) out.push(join(dir, f))
    }
  }
  return out
}

const problems = []
for (const rel of targets()) {
  const lines = readFileSync(join(ROOT, rel), 'utf8').split('\n')
  lines.forEach((line, i) => {
    const pairs = []
    for (const p of PAIR_PATTERNS) {
      for (const m of line.matchAll(p)) pairs.push([Number(m[1]), m[2]])
    }
    for (const m of line.matchAll(MAP_PATTERN)) pairs.push([Number(m[2]), m[1]])

    for (const [id, name] of pairs) {
      if (ALLOWED.has(name) || id === 0) continue
      const actual = idToName.get(id)
      if (actual === name) continue
      // "망키 / 성원숭" 처럼 진화 전후를 한 항목에 쓴 표기는 첫 이름만 본다
      const first = name.split(/\s*(?:\/|·| or | 또는 )\s*/)[0].trim()
      if (actual === first) continue
      problems.push({ file: rel, line: i + 1, name, id, actual: actual ?? '(없는 id)' })
    }
  })
}

if (problems.length === 0) {
  console.log('이름↔ID 불일치 없음')
  process.exit(0)
}

console.log(`이름↔ID 불일치 ${problems.length.toLocaleString('ko-KR')}건`)
for (const p of problems) {
  console.log(`  ${p.file}:${p.line}  "${p.name}" 에 id ${p.id} → 실제로 id ${p.id} 는 "${p.actual}"`)
}
process.exit(1)
