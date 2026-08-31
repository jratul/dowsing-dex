// 공략 데이터의 `moveTable` 행(`{ move, how, usage }`)과 `finalMoves` 배열을 학습셋과 대조한다.
//
// check-guide-machines.mjs 는 "TM26 지진"처럼 **본문 문장** 안의 표기만 본다. 그런데
// 기술 배치표는 기술명과 습득 방법이 서로 다른 필드에 들어 있어서, 둘이 어긋나도
// 정규식에 안 걸린다. 실제로 플래티넘 공략에 이런 것들이 그대로 남아 있었다.
//
//   { move: '섀도볼', how: 'TM08', usage: '격투 특수기' }   ← TM08 은 벌크업, 섀도볼은 고스트
//   { move: '섀도볼', how: 'Lv.50', usage: '바위 특수기' }  ← 무우마 Lv.50 은 파워젬
//
// 화면에는 기술 이름과 초록색 뱃지가 멀쩡히 보이므로 눈으로는 절대 안 잡힌다.
//
//   node scripts/check-guide-movetables.mjs
import fs from 'node:fs'
import { pathToFileURL } from 'node:url'
import { guideSources } from './guide-sources.mjs'

const ROOT = new URL('../', import.meta.url)
const abs = (rel) => new URL(rel, ROOT).pathname.replace(/^\/([A-Za-z]:)/, '$1')
const load = async (rel) => import(pathToFileURL(abs(rel)).href)

const { TM_INDEX } = await load('src/data/moves/tm-index.generated.ts')
const { ALL_MOVES } = await load('src/data/moves/all-moves.generated.ts')
const { ALL_POKEMON, ALL_EVOLUTION_LINES } = await load('src/data/pokedex/pokedex.generated.ts')
const { MOVE_NAME_ALIASES } = await load('src/data/moves/move-aliases.ts')

const MOVE_NAME = new Map(ALL_MOVES.map((m) => [m.id, m.nameKo]))
const MOVE_NAMES = new Set(ALL_MOVES.map((m) => m.nameKo))
const MOVE_BY_NAME = new Map(ALL_MOVES.map((m) => [m.nameKo, m]))

// 1~3세대는 기술이 아니라 **타입**으로 물리/특수가 갈렸다. 4세대부터 기술 단위로 바뀐다.
const SPECIAL_TYPES = new Set(['물', '풀', '불꽃', '전기', '얼음', '에스퍼', '드래곤', '악'])
const classOf = (mv, gen) => (gen <= 3 ? (SPECIAL_TYPES.has(mv.type) ? '특수' : '물리') : mv.category)

const TYPES = '노말|불꽃|물|전기|풀|얼음|격투|독|땅|비행|에스퍼|벌레|바위|고스트|드래곤|악|강철|페어리'
const RE_USAGE = new RegExp(String.raw`(${TYPES})\s*(?:타입\s*)?(물리|특수)기?`)
const POKE_NAME = new Map(ALL_POKEMON.map((p) => [p.id, p.nameKo]))

// (세대|버전|TM26) → 기술명
const TM_LOOKUP = new Map()
for (const e of TM_INDEX) {
  const k = `${e.generation}|${e.version}|${e.machine}${String(e.number).padStart(2, '0')}`
  if (!TM_LOOKUP.has(k)) TM_LOOKUP.set(k, MOVE_NAME.get(e.moveId))
}

// 진화 전 형태 목록. "무우마 Lv.50 파워젬을 배우고 무우마직으로 진화"처럼
// 최종형이 직접 못 배우는 기술을 공략이 정당하게 적는 경우가 있다.
const PRE_EVOS = new Map()
const walkLine = (node, ancestors) => {
  PRE_EVOS.set(node.pokemonId, ancestors)
  for (const c of node.children ?? []) walkLine(c, [...ancestors, node.pokemonId])
}
for (const line of ALL_EVOLUTION_LINES) for (const root of line) walkLine(root, [])

// 기술 자리에 들어가는 일반 표현. 기술명이 아니므로 검사하지 않는다.
const FILLER = new Set(['자유', '자유 슬롯', '자유슬롯', '임의', '선택', '보조기', '격투기', '얼음기', '전기기', '불꽃기'])

/** "화염방사 / 오버히트", "메가혼(Lv.55)" 처럼 적힌 칸을 개별 기술명으로 쪼갠다. */
const splitMoves = (raw) =>
  raw
    .split('/')
    .map((x) => x.replace(/\([^)]*\)/g, '').trim())
    .filter((x) => x && !FILLER.has(x))

// 포켓몬별 학습셋은 필요한 것만 읽는다(1,082개 파일).
const learnsetCache = new Map()
async function learnset(id, version) {
  if (!learnsetCache.has(id)) {
    const rel = `src/data/moves/by-id/${id}.generated.ts`
    if (!fs.existsSync(abs(rel))) {
      learnsetCache.set(id, null)
    } else {
      const mod = await load(rel)
      learnsetCache.set(id, mod.LEARNSETS ?? Object.values(mod)[0])
    }
  }
  const all = learnsetCache.get(id)
  return all ? (all.find((x) => x.version === version) ?? null) : null
}

const LF = String.fromCharCode(10)
const RE_ID = /pokemonId:\s*(\d+)/
const RE_ROW = /\{\s*move:\s*'([^']+)'\s*,\s*how:\s*'([^']+)'/
const RE_FINAL = /finalMoves:\s*\[([^\]]*)\]/

const noMove = []      // 실존하지 않는 기술명
const badTm = []       // TM/HM 번호와 기술이 안 맞음
const badLevel = []    // 그 레벨에 그 기술을 안 배움
const notLearnable = []// 그 게임에서 아예 못 배움
const dupFinal = []    // finalMoves 안에 같은 기술이 두 번
const badUsage = []    // 설명의 타입·물리특수 분류가 실제와 다름
let checked = 0

for (const src of guideSources(ROOT)) {
  if (!src.label.endsWith('.data.ts') || src.version === null) continue
  const gen = `${src.gen}세대`
  const lines = src.text.split(LF)
  let curId = null

  for (let n = 0; n < lines.length; n++) {
    const line = lines[n]
    const idm = line.match(RE_ID)
    if (idm) curId = Number(idm[1])

    const fm = line.match(RE_FINAL)
    if (fm && curId) {
      const seen = new Set()
      for (const raw of [...fm[1].matchAll(/'([^']+)'/g)].map((m) => m[1])) {
        for (const raw2 of splitMoves(raw)) {
          const al = MOVE_NAME_ALIASES[raw2]
          const nm = al && al.gens.includes(src.gen) ? al.canonical : raw2
          if (seen.has(nm)) dupFinal.push(`${src.label}:${n + 1} ${POKE_NAME.get(curId)} — "${nm}" 중복`)
          seen.add(nm)
          if (!MOVE_NAMES.has(nm)) noMove.push(`${src.label}:${n + 1} finalMoves "${nm}"`)
        }
      }
    }

    const rm = line.match(RE_ROW)
    if (!rm || !curId) continue
    const usage = line.match(/usage:\s*'([^']*)'/)?.[1] ?? ''
    const [, rawMove, how] = rm
    const where = `${src.label}:${n + 1} ${POKE_NAME.get(curId) ?? curId}`
    checked++

    // "불대문자 / 화염방사" 처럼 대안을 함께 적은 칸이 있다. 첫 기술을 기준으로 본다.
    // 세대에 맞는 옛 정식 명칭(락클라임 등)은 현재 이름으로 되돌려 대조한다
    const parts = splitMoves(rawMove).map((p) => {
      const a = MOVE_NAME_ALIASES[p]
      return a && a.gens.includes(src.gen) ? a.canonical : p
    })
    const unknown = parts.filter((p) => !MOVE_NAMES.has(p))
    if (unknown.length) {
      unknown.forEach((p) => noMove.push(`${where} — "${p}"`))
      continue
    }
    const move = parts[0]
    if (!move) continue

    // usage 첫머리의 "격투 물리기" 같은 설명이 실제 타입·분류와 맞는지 본다
    const um = usage.match(RE_USAGE)
    if (um) {
      const mv = MOVE_BY_NAME.get(move)
      const wantClass = classOf(mv, src.gen)
      if (um[1] !== mv.type || um[2] !== wantClass)
        badUsage.push(`${where} — "${move}" 는 ${mv.type}/${wantClass} 인데 설명은 "${um[0]}"`)
    }

    const tag = how.match(/^(TM|HM)\s?(\d{1,2})$/)
    if (tag) {
      const k = `${gen}|${src.version}|${tag[1]}${String(Number(tag[2])).padStart(2, '0')}`
      const actual = TM_LOOKUP.get(k)
      if (actual && actual !== move) badTm.push(`${where} — ${how}(${src.version}) 는 "${actual}" 인데 "${move}" 라고 적혀 있다`)
    }

    const g = await learnset(curId, src.version)
    if (!g) continue
    const byLevel = new Map()
    for (const e of g.levelUp) {
      const nm = MOVE_NAME.get(e.moveId)
      if (!byLevel.has(nm)) byLevel.set(nm, [])
      byLevel.get(nm).push(e.level)
    }
    const machineSet = new Set((g.machines ?? []).map((e) => MOVE_NAME.get(e.moveId)))
    const tutorSet = new Set((g.tutor ?? []).map((e) => MOVE_NAME.get(e.moveId)))
    // 진화 전에 배워두고 진화시키는 경로도 정당하다
    const preLevel = new Map()
    for (const pid of PRE_EVOS.get(curId) ?? []) {
      const pg = await learnset(pid, src.version)
      if (!pg) continue
      for (const e of pg.levelUp) {
        const nm = MOVE_NAME.get(e.moveId)
        if (!preLevel.has(nm)) preLevel.set(nm, [])
        preLevel.get(nm).push(`${POKE_NAME.get(pid)} Lv.${e.level}`)
      }
      for (const e of pg.machines ?? []) machineSet.add(MOVE_NAME.get(e.moveId))
      for (const e of pg.tutor ?? []) tutorSet.add(MOVE_NAME.get(e.moveId))
    }

    const lv = how.match(/^Lv\.(\d+)(?:\s*\(.+\))?$/)
    if (lv) {
      const levels = byLevel.get(move)
      const pre = preLevel.get(move)
      if (!levels && !pre) badLevel.push(`${where} — "${move}" 는 레벨업으로 안 배운다 (${how} 표기)`)
      else if (levels && !levels.includes(Number(lv[1])))
        badLevel.push(`${where} — "${move}" 는 Lv.${levels.join('/')} 인데 ${how} 라고 적혀 있다`)
      else if (!levels && pre && !pre.some((p) => p.endsWith(`Lv.${lv[1]}`)))
        badLevel.push(`${where} — "${move}" 는 ${pre.join(', ')} 인데 ${how} 라고 적혀 있다`)
    } else if (how === '기술가르침' && !tutorSet.has(move)) {
      badLevel.push(`${where} — "${move}" 는 이 게임 기술가르침 목록에 없다`)
    }

    if (!byLevel.has(move) && !preLevel.has(move) && !machineSet.has(move) && !tutorSet.has(move))
      notLearnable.push(`${where} — "${move}" 를 ${src.version} 에서 배울 수 없다`)
  }
}

console.error(`기술 배치표 ${checked.toLocaleString('ko-KR')}행 대조`)
const show = (title, list) => {
  if (!list.length) return
  console.error(`${LF}■ ${title} ${list.length.toLocaleString('ko-KR')}건`)
  list.forEach((x) => console.error('  ' + x))
  process.exitCode = 1
}
show('실존하지 않는 기술명', noMove)
show('TM/HM 번호와 기술명이 다름', badTm)
show('습득 레벨·방법이 다름', badLevel)
show('그 게임에서 배울 수 없는 기술', notLearnable)
show('finalMoves 안의 중복 기술', dupFinal)
show('설명의 타입·물리특수 분류가 실제와 다름', badUsage)
if (![noMove, badTm, badLevel, notLearnable, dupFinal, badUsage].some((x) => x.length))
  console.error('기술 배치표 이상 없음')
