// 공략 본문의 "꾸꾸리 Lv.28 원시의힘" 같은 레벨업 습득 주장을 by-id 학습셋과 대조한다.
// 같은 기술이라도 세대마다 습득 레벨이 다르다(식스테일 화염방사: 레드·블루 Lv.35, FRLG Lv.29).
// 다른 세대 공략을 참고해 쓰면 조용히 틀리고, 화면에는 멀쩡한 숫자로 보인다.
//
//   node scripts/check-guide-levels.mjs
import fs from 'node:fs'

const ROOT = new URL('../', import.meta.url)
const load = (rel) => import(new URL(rel, ROOT).href)

const { ALL_MOVES } = await load('src/data/moves/all-moves.generated.ts')
const { ALL_POKEMON } = await load('src/data/pokedex/pokedex.generated.ts')
const MOVE_ID = new Map(ALL_MOVES.map((m) => [m.nameKo, m.id]))
const POKE = new Map(ALL_POKEMON.map((p) => [p.id, p]))
// 같은 이름의 리전폼이 있으면 가장 작은 id(원종)를 대표로 쓴다.
const NAME_ID = new Map()
for (const p of [...ALL_POKEMON].sort((a, b) => a.id - b.id)) if (!NAME_ID.has(p.nameKo)) NAME_ID.set(p.nameKo, p.id)

// 공략 데이터 파일 → 그 공략이 다루는 게임. GuidePageLayout 에 넘기는 값과 같아야 한다.
const GUIDE_GAME = {
  pokemonRedStory: ['1세대', '레드·블루'],
  pokemonRedEvolution: ['1세대', '레드·블루'],
  pokemonGoldStory: ['2세대', '골드·실버'],
  pokemonFireredStory: ['3세대', '파이어레드·리프그린'],
  pokemonFireredSeviiIslands: ['3세대', '파이어레드·리프그린'],
  pokemonEmeraldStory: ['3세대', '에메랄드'],
  pokemonHeartgoldStory: ['4세대', '하트골드·소울실버'],
  pokemonHeartgoldWalkthrough: ['4세대', '하트골드·소울실버'],
  pokemonHeartgoldMoves: ['4세대', '하트골드·소울실버'],
  pokemonPlatinumStory: ['4세대', '플래티넘'],
}

// "누르기를", "화염방사에" 처럼 조사가 붙은 형태에서 실제 기술명을 되찾는다.
const JOSA = ['을', '를', '은', '는', '이', '가', '로', '와', '과', '도', '만', '의', '에', '까지', '부터', '으로', '이나', '나']
function resolveMove(word) {
  if (MOVE_ID.has(word)) return MOVE_ID.get(word)
  for (const j of JOSA) {
    if (!word.endsWith(j)) continue
    const base = word.slice(0, -j.length)
    if (MOVE_ID.has(base)) return MOVE_ID.get(base)
  }
  return undefined
}

const cache = new Map()
async function learnset(id, gen, ver) {
  if (!cache.has(id)) {
    try { cache.set(id, (await load(`src/data/moves/by-id/${id}.generated.ts`)).LEARNSETS) } catch { cache.set(id, null) }
  }
  return cache.get(id)?.find((s) => s.generation === gen && s.version === ver) ?? null
}

// 기술명에는 영문·숫자가 섞인다(HP회복, 10만볼트). 한글이 최소 한 글자는 있어야 한다.
const RE = /(?:([A-Za-z0-9가-힣]*[가-힣][A-Za-z0-9가-힣]*)\s+)?Lv\.(\d+)(?:에|에서)?\s+([A-Za-z0-9가-힣]*[가-힣][A-Za-z0-9가-힣]*)/g

const findings = []
let checked = 0

for (const [name, [gen, ver]] of Object.entries(GUIDE_GAME)) {
  const file = new URL(`src/data/sample/${name}.data.ts`, ROOT)
  if (!fs.existsSync(file)) {
    console.error(`공략 파일 없음: ${name}.data.ts — GUIDE_GAME 목록을 갱신하세요`)
    process.exitCode = 1
    continue
  }
  const lines = fs.readFileSync(file, 'utf8').split('\n')
  for (let n = 0; n < lines.length; n++) {
    const line = lines[n]
    const pid = line.match(/pokemonId:\s*(\d+)/)
    const before = line.match(/before:\s*'([^']+)'/)
    const after = line.match(/after:\s*'([^']+)'/)
    for (const m of line.matchAll(RE)) {
      const moveId = resolveMove(m[3])
      if (moveId === undefined) continue
      const lv = Number(m[2])
      // 주어: Lv 바로 앞의 포켓몬 이름이 최우선. 없으면 그 줄이 다루는 포켓몬들로 넓힌다
      // (진화 표는 한 줄에서 진화 전/후를 오간다).
      const subj = m[1] && NAME_ID.get(m[1])
      const candidates = subj
        ? [subj]
        : [before && NAME_ID.get(before[1]), after && NAME_ID.get(after[1]), pid && Number(pid[1])].filter(Boolean)
      if (candidates.length === 0) continue
      checked++
      let ok = false
      const detail = []
      for (const id of candidates) {
        const ls = await learnset(id, gen, ver)
        if (!ls) { detail.push(`${POKE.get(id)?.nameKo ?? id}: ${ver} 학습셋 없음`); continue }
        const levels = ls.levelUp.filter((e) => e.moveId === moveId).map((e) => e.level)
        if (levels.includes(lv)) { ok = true; break }
        const ma = ls.machines.find((e) => e.moveId === moveId)
        const tu = ls.tutor.some((e) => e.moveId === moveId)
        detail.push(`${POKE.get(id)?.nameKo ?? id}: ${levels.length ? 'Lv.' + levels.join('·') : ma ? `${ma.machine}${String(ma.number).padStart(2, '0')}` : tu ? '기술가르침' : '못 배움'}`)
      }
      if (!ok) findings.push(`${name}.data.ts:${n + 1}  "${m[3]} Lv.${lv}" → ${detail.join(' / ')}`)
    }
  }
}

console.error(`"포켓몬 + Lv.N + 기술명" 주장 ${checked.toLocaleString('ko-KR')}건 대조`)
if (findings.length) {
  console.error(`\n■ 불일치 ${findings.length.toLocaleString('ko-KR')}건 (→ 뒤는 그 버전의 실제 습득 경로)`)
  findings.forEach((f) => console.error('  ' + f))
  process.exitCode = 1
} else {
  console.error('레벨업 습득 표기 이상 없음')
}
