// 공략 본문의 "TM26 지진" / "HM08 락클라임" 같은 표기를 tm-index.generated.ts 와 대조한다.
// TM 번호는 세대마다 다른 기술에 붙으므로(HM05는 플래티넘=안개제거, HGSS=바다회오리)
// 다른 게임 공략에서 문장을 복사해 오면 조용히 틀린다. 화면에는 멀쩡히 보인다.
//
//   node scripts/check-guide-machines.mjs
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const ROOT = new URL('../', import.meta.url)
const load = async (rel) => import(pathToFileURL(new URL(rel, ROOT).pathname.replace(/^\/([A-Za-z]:)/, '$1')).href)

const { TM_INDEX } = await load('src/data/moves/tm-index.generated.ts')
const { ALL_MOVES } = await load('src/data/moves/all-moves.generated.ts')
const MOVE = new Map(ALL_MOVES.map((m) => [m.id, m.nameKo]))
const MOVE_NAMES = new Set(ALL_MOVES.map((m) => m.nameKo))

// 공략 데이터 파일 → 그 공략이 다루는 게임. GuidePageLayout 에 넘기는 값과 같아야 한다.
const GUIDE_GAME = {
  'pokemonRedStory.data.ts': ['1세대', '레드·블루'],
  'pokemonRedEvolution.data.ts': ['1세대', '레드·블루'],
  'pokemonGoldStory.data.ts': ['2세대', '골드·실버'],
  'pokemonFireredStory.data.ts': ['3세대', '파이어레드·리프그린'],
  'pokemonFireredSeviiIslands.data.ts': ['3세대', '파이어레드·리프그린'],
  'pokemonEmeraldStory.data.ts': ['3세대', '에메랄드'],
  'pokemonHeartgoldStory.data.ts': ['4세대', '하트골드·소울실버'],
  'pokemonHeartgoldWalkthrough.data.ts': ['4세대', '하트골드·소울실버'],
  'pokemonHeartgoldStones.data.ts': ['4세대', '하트골드·소울실버'],
  'pokemonHeartgoldMoves.data.ts': ['4세대', '하트골드·소울실버'],
  'pokemonPlatinumStory.data.ts': ['4세대', '플래티넘'],
}

// "HM02 담당"처럼 번호 뒤에 기술명이 아니라 일반 명사가 오는 문장. 늘어나면 여기에 추가한다.
const PROSE = new Set(['담당', '대체기', '공유', '배정', '선택', '절약', '입수', '보존', '제외', '필요', '확보', '사용', '학습'])

const key = (gen, ver, tag) => `${gen}|${ver}|${tag}`
const LOOKUP = new Map()
for (const e of TM_INDEX) {
  const k = key(e.generation, e.version, `${e.machine}${String(e.number).padStart(2, '0')}`)
  if (!LOOKUP.has(k)) LOOKUP.set(k, MOVE.get(e.moveId))
}

const RE = /\b(TM|HM)\s?(\d{1,2})\s+([가-힣][가-힣0-9]*)/g
const wrong = []
const suspect = []
let checked = 0

for (const [file, [gen, ver]] of Object.entries(GUIDE_GAME)) {
  const p = new URL(`src/data/sample/${file}`, ROOT)
  if (!fs.existsSync(p)) {
    console.error(`공략 파일 없음: ${file} — GUIDE_GAME 목록을 갱신하세요`)
    process.exitCode = 1
    continue
  }
  fs.readFileSync(p, 'utf8').split('\n').forEach((line, n) => {
    for (const m of line.matchAll(RE)) {
      const tag = `${m[1]}${String(Number(m[2])).padStart(2, '0')}`
      const claimed = m[3]
      const actual = LOOKUP.get(key(gen, ver, tag))
      if (!actual) continue
      checked++
      // "지진은", "냉동빔을"처럼 조사가 붙은 형태는 정상이다.
      if (claimed === actual || claimed.startsWith(actual)) continue
      const where = `${file}:${n + 1}`
      if (MOVE_NAMES.has(claimed)) wrong.push(`${where}  ${tag}(${ver}) → 공략 "${claimed}" / 실제 "${actual}"`)
      else if (!PROSE.has(claimed)) suspect.push(`${where}  ${tag}(${ver}) → 공략 "${claimed}" / 실제 "${actual}"`)
    }
  })
}

// MoveLink 는 데이터에 없는 이름이면 링크를 만들지 않고 글자만 남긴다 — 눈으로는 안 잡힌다.
const badLinks = []
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
  const p = path.join(dir, e.name)
  return e.isDirectory() ? walk(p) : /\.tsx?$/.test(e.name) && !e.name.includes('generated') ? [p] : []
})
for (const f of walk(new URL('src', ROOT).pathname.replace(/^\/([A-Za-z]:)/, '$1'))) {
  fs.readFileSync(f, 'utf8').split('\n').forEach((line, n) => {
    for (const m of line.matchAll(/<MoveLink\s+name=(?:"([^"]+)"|\{'([^']+)'\})/g)) {
      const name = m[1] ?? m[2]
      if (!MOVE_NAMES.has(name)) badLinks.push(`${path.basename(f)}:${n + 1}  "${name}"`)
    }
  })
}

console.error(`TM/HM 표기 ${checked.toLocaleString('ko-KR')}건 대조`)
if (wrong.length) {
  console.error(`\n■ 번호↔기술명 불일치 ${wrong.length.toLocaleString('ko-KR')}건 (둘 다 실존 기술 — 번호가 틀렸거나 다른 게임 값)`)
  wrong.forEach((w) => console.error('  ' + w))
}
if (suspect.length) {
  console.error(`\n■ 기술 데이터에 없는 이름 ${suspect.length.toLocaleString('ko-KR')}건 (비공식 표기 의심 — 일반 명사면 PROSE 에 추가)`)
  suspect.forEach((s) => console.error('  ' + s))
}
if (badLinks.length) {
  console.error(`\n■ 데이터에 없는 MoveLink 이름 ${badLinks.length.toLocaleString('ko-KR')}건 (링크가 조용히 안 걸린다)`)
  badLinks.forEach((b) => console.error('  ' + b))
}
if (!wrong.length && !suspect.length && !badLinks.length) console.error('기술머신 표기 이상 없음')
else process.exitCode = 1
