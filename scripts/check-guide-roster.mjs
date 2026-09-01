// 공략에 등장하는 포켓몬 이름이 (1) 도감에 실존하는지, (2) 그 게임 세대에 존재할 수 있는지 검사한다.
// 3세대 에메랄드 공략에 삼삼드래(5세대)가 적혀 있어도 화면에는 멀쩡히 보여 눈으로는 안 잡힌다.
//
//   node scripts/check-guide-roster.mjs
import { guideSources } from './guide-sources.mjs'

const ROOT = new URL('../', import.meta.url)
const load = (rel) => import(new URL(rel, ROOT).href)
const { ALL_POKEMON } = await load('src/data/pokedex/pokedex.generated.ts')
const { ALL_MOVES } = await load('src/data/moves/all-moves.generated.ts')

const GEN = new Map()
for (const p of [...ALL_POKEMON].sort((a, b) => a.id - b.id)) if (!GEN.has(p.nameKo)) GEN.set(p.nameKo, p.generation)
const NAMES = new Set(GEN.keys())
const BY_LEN = [...NAMES].sort((a, b) => b.length - a.length)
const MOVES = new Set(ALL_MOVES.map((m) => m.nameKo))

// 트레이너·라이벌 이름이 포켓몬 이름과 겹치는 경우. 세대 검사에서 제외한다.
const TRAINER_ALIAS = new Set(['블루', '삐', '글레이시아', '시드니', '일목', '지우', '레드', '그린', '실버', '블랙', '랙츠'])
// 타입명·기술명 조각처럼 포켓몬 나열 사이에 섞여 들어오는 일반 단어.
const PROSE = new Set([
  '노말', '불꽃', '물', '전기', '풀', '얼음', '격투', '독', '땅', '비행',
  '에스퍼', '벌레', '바위', '고스트', '드래곤', '악', '강철', '페어리', '만볼트',
])

const JOSA = ['을','를','은','는','이','가','로','와','과','도','만','의','에','에게','으로','에서','까지','부터','처럼','같은','조차','마저','밖에']
const strip = (w) => {
  for (const j of JOSA) if (w.endsWith(j) && NAMES.has(w.slice(0, -j.length))) return w.slice(0, -j.length)
  return w
}

const tooNew = new Map()
const unknown = new Map()

for (const src of guideSources(ROOT)) {
  src.text.split('\n').forEach((line, n) => {
    // (1) 세대 초과 — 게임이 특정된 문서에서만 본다
    if (src.gen !== null) {
      for (const nm of BY_LEN) {
        if (TRAINER_ALIAS.has(nm) || !line.includes(nm) || GEN.get(nm) <= src.gen) continue
        const key = `${src.label}|${nm}|${GEN.get(nm)}`
        if (!tooNew.has(key)) tooNew.set(key, [])
        tooNew.get(key).push(n + 1)
      }
    }
    // (2) 가운뎃점으로 이어진 포켓몬 나열 안의 미확인 이름.
    // version="레드·블루" 같은 게임판 이름도 가운뎃점을 쓰므로 먼저 걷어낸다.
    const scan = line.replace(/(generation|version)="[^"]*"/g, '')
    for (const m of scan.matchAll(/[가-힣]+(?:·[가-힣]+)+/g)) {
      const parts = m[0].split('·')
      const hits = parts.filter((p) => NAMES.has(p)).length
      if (hits === 0 || hits * 2 < parts.length) continue
      for (const raw of parts) {
        const p = strip(raw)
        if (NAMES.has(p) || MOVES.has(p) || MOVES.has(raw) || PROSE.has(p) || TRAINER_ALIAS.has(p)) continue
        const key = `${src.label}|${p}`
        if (!unknown.has(key)) unknown.set(key, [])
        unknown.get(key).push(n + 1)
      }
    }
  })
}

const show = (title, map, fmt) => {
  if (map.size === 0) return
  console.error(`\n■ ${title} ${map.size.toLocaleString('ko-KR')}종`)
  for (const [key, lines] of map) console.error(`  ${fmt(key)} — ${lines.length}건 (줄 ${lines.slice(0, 6).join(', ')})`)
  process.exitCode = 1
}
show('그 게임에 존재할 수 없는 포켓몬 (세대 초과)', tooNew, (k) => {
  const [f, nm, g] = k.split('|')
  return `${f}: "${nm}" ${g}세대`
})
show('포켓몬 나열 안의 미확인 이름 (오타·비공식 표기·트레이너명 혼입)', unknown, (k) => {
  const [f, nm] = k.split('|')
  return `${f}: "${nm}"`
})
if (tooNew.size === 0 && unknown.size === 0) console.error('공략 등장 포켓몬 이상 없음')
