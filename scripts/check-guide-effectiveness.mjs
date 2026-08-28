// 공략의 "(전기 4배)" 같은 타입 배율 주장을 타입 상성표와 대조한다.
//
// 한국어 문장에서는 같은 표기가 두 가지를 뜻한다:
//   (가) 공격 타입 — "전룡 방전 (전기 4배)" → 전기가 상대에게 4배
//   (나) 방어 타입 — "초염몽 화염방사 (강철 2배)" → 불꽃이 강철에게 2배
// 둘 중 하나로만 읽으면 오탐이 70%를 넘는다. 두 해석을 모두 시도해
// 어느 쪽으로도 성립하지 않을 때만 오류로 본다.
//
//   node scripts/check-guide-effectiveness.mjs
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { guideSources } from './guide-sources.mjs'

const ROOT = new URL('../', import.meta.url)
const load = (rel) => import(new URL(rel, ROOT).href)
const { ALL_POKEMON } = await load('src/data/pokedex/pokedex.generated.ts')
const { ALL_MOVES } = await load('src/data/moves/all-moves.generated.ts')
// typeChart.ts 는 확장자 없는 상대 경로로 타입을 import 한다. Vite 는 해석하지만
// Node 는 못 하므로, 두 파일을 합친 임시 모듈을 만들어 불러온다.
// (상성표를 여기에 베껴 두면 원본과 갈라지므로 반드시 원본을 읽는다.)
const mergedTypeChart = () => {
  const types = fs.readFileSync(new URL('src/types/type-chart.ts', ROOT), 'utf8')
  const lib = fs.readFileSync(new URL('src/lib/typeChart.ts', ROOT), 'utf8')
    .split(String.fromCharCode(10))
    .filter((l) => !l.startsWith('import ') && !l.startsWith('export {'))
    .join(String.fromCharCode(10))
  const out = path.join(os.tmpdir(), `dowsing-typechart-${process.pid}.mts`)
  fs.writeFileSync(out, types + String.fromCharCode(10) + lib, 'utf8')
  return out
}
const chartPath = mergedTypeChart()
const { mult } = await import(pathToFileURL(chartPath).href)
fs.rmSync(chartPath, { force: true })

const TYPES = ['노말','불꽃','물','전기','풀','얼음','격투','독','땅','비행','에스퍼','벌레','바위','고스트','드래곤','악','강철','페어리']

// 6세대에 페어리가 생기면서 타입이 바뀐 포켓몬. 5세대 이하 공략에서는 옛 타입으로 봐야 한다.
const PRE_FAIRY = {
  '삐': ['노말'], '삐삐': ['노말'], '픽시': ['노말'],
  '푸푸린': ['노말'], '푸린': ['노말'], '푸크린': ['노말'],
  '토게피': ['노말'], '토게틱': ['노말', '비행'], '토게키스': ['노말', '비행'],
  '마릴': ['물'], '마릴리': ['물'],
  '랄토스': ['에스퍼'], '킬리아': ['에스퍼'], '가디안': ['에스퍼'],
  '마임맨': ['에스퍼'], '블루픽시': ['노말'],
}

const POKE = new Map()
for (const p of [...ALL_POKEMON].sort((a, b) => a.id - b.id)) if (!POKE.has(p.nameKo)) POKE.set(p.nameKo, p)
const POKE_BY_LEN = [...POKE.keys()].sort((a, b) => b.length - a.length)
const MOVE = new Map()
for (const m of ALL_MOVES) if (!MOVE.has(m.nameKo)) MOVE.set(m.nameKo, m)
const MOVE_BY_LEN = [...MOVE.keys()].sort((a, b) => b.length - a.length)

const typesOf = (name, gen) => (gen !== null && gen <= 5 && PRE_FAIRY[name]) || POKE.get(name)?.types || []
const against = (atk, defTypes) => defTypes.reduce((m, d) => m * mult(atk, d), 1)

const RE_CLAIM = new RegExp(String.raw`(${TYPES.join('|')})\s*(\d+(?:\.\d+)?)배`, 'g')
const findings = []
let checked = 0

for (const src of guideSources(ROOT)) {
  src.text.split(String.fromCharCode(10)).forEach((line, n) => {
    const claims = [...line.matchAll(RE_CLAIM)]
    if (claims.length === 0) return
    // 그 줄에 등장하는 상대 포켓몬과, 대응으로 언급된 기술
    const opp = line.match(/opponent:\s*'([^']*)'/)?.[1] ?? line
    const mons = POKE_BY_LEN.filter((nm) => opp.includes(nm))
    const moves = MOVE_BY_LEN.filter((nm) => line.includes(nm))
    if (mons.length === 0 && moves.length === 0) return

    for (const c of claims) {
      const [, type, nStr] = c
      const want = Number(nStr)
      checked++
      // (가) 공격 타입으로 읽기 — 줄에 나온 상대 중 하나에게 want 배
      const asAttack = mons.some((nm) => against(type, typesOf(nm, src.gen)) === want)
      // (나) 방어 타입으로 읽기 — 줄에 나온 기술 중 하나가 그 타입에게 want 배
      const asDefend = moves.some((mv) => mult(MOVE.get(mv).type, type) === want)
      // (다) 타입 대 타입 — "드래곤에 얼음 2배"처럼 상대가 포켓몬이 아니라 타입으로 적힌 경우.
      //     "얼음 2배 x 비행 2배 = 4배" 같은 곱셈 설명도 여기서 걸러진다.
      const otherTypes = TYPES.filter((t) => t !== type && line.includes(t))
      const asTypeVsType = otherTypes.some((t) => mult(type, t) === want || mult(t, type) === want)
      if (asAttack || asDefend || asTypeVsType) continue
      const detail = mons.slice(0, 3).map((nm) => `${nm} ${against(type, typesOf(nm, src.gen))}배`).join(' / ')
      findings.push(`${src.label}:${n + 1}  "${type} ${want}배" → 공격 해석: ${detail || '상대 미상'}`)
    }
  })
}

console.error(`타입 배율 주장 ${checked.toLocaleString('ko-KR')}건 대조`)
if (findings.length) {
  console.error(`\n■ 어느 해석으로도 성립하지 않는 주장 ${findings.length.toLocaleString('ko-KR')}건`)
  findings.forEach((f) => console.error('  ' + f))
  process.exitCode = 1
} else {
  console.error('타입 배율 표기 이상 없음')
}
