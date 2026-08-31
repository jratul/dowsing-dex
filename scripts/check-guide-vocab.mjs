// WORD.md 의 "잘못된 표기 → 올바른 표기" 표를 그대로 사전으로 삼아 공략 원문을 훑는다.
//
// 다른 검사기들은 구조(포켓몬 ID, TM 번호, 학습셋)를 본다. 지역명·NPC명·배지명 같은
// 고유명사는 대조할 생성 데이터가 없어 아무 검사도 못 받고 있었다. 사람이 발견해
// WORD.md 에 적어 둔 오표기를 코드가 다시 읽게 하면 같은 실수가 새 글에 들어왔을 때
// 바로 잡힌다.
//
// 두 가지를 조심해야 오탐이 쏟아지지 않는다.
//   1) 표기가 지역마다 다르다. 「물가시티」는 호연에서는 보라시티의 오표기지만
//      신오에서는 Sunyshore City 의 정식 명칭이다. 그래서 표가 놓인 `##` 절을 보고
//      해당 세대의 공략에만 적용한다.
//   2) 짧은 낱말이 다른 이름의 일부다. 「우츠보」는 우츠보트 안에, 「미라」는 미라몽
//      안에 들어 있다. 실존 포켓몬·기술 이름과 겹치는 자리는 건너뛴다.
//
//   node scripts/check-guide-vocab.mjs
//   GUIDE_EXTERNAL_DIR="..." GUIDE_EXTERNAL_ONLY=1 node scripts/check-guide-vocab.mjs
import fs from 'node:fs'
import { pathToFileURL } from 'node:url'
import { guideSources } from './guide-sources.mjs'

const ROOT = new URL('../', import.meta.url)
const abs = (rel) => new URL(rel, ROOT).pathname.replace(/^\/([A-Za-z]:)/, '$1')
const load = async (rel) => import(pathToFileURL(abs(rel)).href)
const LF = String.fromCharCode(10)

const { ALL_POKEMON } = await load('src/data/pokedex/pokedex.generated.ts')
const { ALL_MOVES } = await load('src/data/moves/all-moves.generated.ts')
const REAL_NAMES = [...new Set([...ALL_POKEMON.map((p) => p.nameKo), ...ALL_MOVES.map((m) => m.nameKo)])]

// `##` 절 제목 → 적용할 세대. 비어 있으면 모든 공략에 적용한다.
const SECTION_GENS = [
  [/호연지방/, [3]],
  [/신오지방/, [4]],
]

// 사전에 넣기엔 너무 짧거나 일반 낱말과 겹쳐 오탐만 만드는 자리.
const IGNORE_CONTEXT = ['미지의', '미지수', '미지에', '원시회귀']

const WORD = fs.readFileSync(abs('WORD.md'), 'utf8').split(LF)
/** @type {{wrong: string, right: string, gens: number[]|null}[]} */
const DICT = []
let inTable = false
let gens = null
for (const raw of WORD) {
  const line = raw.trim()
  if (line.startsWith('#')) {
    gens = SECTION_GENS.find(([re]) => re.test(line))?.[1] ?? null
    inTable = false
    continue
  }
  if (!line.startsWith('|')) { inTable = false; continue }
  const cells = line.split('|').slice(1, -1).map((c) => c.trim())
  if (cells[0] === '잘못된 표기') { inTable = true; continue }
  if (!inTable || cells.length < 2 || /^-+$/.test(cells[0])) continue
  // "조약배지, 비상배지" 처럼 한 칸에 여러 오표기를 적은 경우가 있다.
  // 다만 괄호가 든 칸은 설명문이라 쪼개면 깨진다.
  const raws = cells[0].includes('(') ? [cells[0]] : cells[0].split(/\s*[,/]\s*/)
  for (const w of raws.map((x) => x.trim())) {
    if (w.length < 2 || w === '—' || /[()[\]]/.test(w)) continue
    DICT.push({ wrong: w, right: cells[1], gens })
  }
}
// 다른 줄에서 "올바른 표기" 로도 쓰이는 낱말은 뺀다(쌍둥이섬 등).
// 오표기 자체가 실존 이름인 경우도 뺀다 — 「뚜꾸리」는 2세대 Piloswine 의 오표기이면서
// 동시에 5세대 #498(Tepig)의 정식 이름이고, 「글레이시아」는 호연 사천왕 Glacia 의
// 오표기이면서 포켓몬 Glaceon 의 정식 이름이다. 문장만 보고는 구분할 수 없다.
const RIGHT = new Set(DICT.map((d) => d.right))
const REAL_SET = new Set(REAL_NAMES)
const ENTRIES = DICT.filter((d) => !RIGHT.has(d.wrong) && !REAL_SET.has(d.wrong))

// 오표기가 실존 이름의 일부인 경우, 그 이름이 겹쳐 나오면 정상이다.
for (const e of ENTRIES) e.masks = REAL_NAMES.filter((n) => n !== e.wrong && n.includes(e.wrong))

const hits = new Map()
for (const src of guideSources(ROOT)) {
  src.text.split(LF).forEach((line, n) => {
    for (const e of ENTRIES) {
      if (e.gens && (src.gen === null || !e.gens.includes(src.gen))) continue
      let from = 0
      for (;;) {
        const at = line.indexOf(e.wrong, from)
        if (at < 0) break
        from = at + 1
        const end = at + e.wrong.length
        // 실존 이름(우츠보트 등)이 이 자리를 덮고 있으면 오표기가 아니다
        const masked = e.masks.some((nm) => {
          let i = line.indexOf(nm)
          while (i >= 0) {
            if (i <= at && i + nm.length >= end) return true
            i = line.indexOf(nm, i + 1)
          }
          return false
        })
        if (masked) continue
        if (IGNORE_CONTEXT.some((c) => line.slice(Math.max(0, at - 2), at + c.length + 2).includes(c))) continue
        const key = `${src.label}|${e.wrong}|${e.right}`
        if (!hits.has(key)) hits.set(key, [])
        hits.get(key).push(n + 1)
        break
      }
    }
  })
}

console.error(`WORD.md 오표기 사전 ${ENTRIES.length.toLocaleString('ko-KR')}개로 대조`)
if (hits.size === 0) console.error('오표기 없음')
else {
  console.error(`${LF}■ WORD.md 에 기록된 오표기 ${hits.size.toLocaleString('ko-KR')}종`)
  for (const [key, lines] of hits) {
    const [f, wrong, right] = key.split('|')
    console.error(`  ${f}: "${wrong}" → "${right}" — ${lines.length}건 (줄 ${lines.slice(0, 8).join(', ')})`)
  }
  process.exitCode = 1
}
