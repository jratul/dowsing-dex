// 공략 원본 파일 목록과 각 파일이 다루는 게임.
//
// 검사 스크립트들이 이 한 곳만 보게 해서, 새 공략을 추가했을 때 어떤 검사는 돌고
// 어떤 검사는 빠지는 상황을 막는다. 실제로 검사기가 .data.ts 12개만 보는 동안
// 가이드 페이지 .tsx 16개와 마크다운 1개는 아무 검사도 못 받고 있었다.
import fs from 'node:fs'

// 공략 데이터 파일은 prop 이 없으므로 여기에 명시한다.
const DATA_GAMES = {
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
  'pokemonPlatinumWalkthrough.data.ts': ['4세대', '플래티넘'],
  'pokemonUnown.data.ts': [null, null], // 여러 게임을 묶은 종합 공략
}

// 마크다운 원문 공략.
const MD_GAMES = { 'hgss-collection.md': ['4세대', '하트골드·소울실버'] }

// 저장소 밖의 원문 노트(옵시디언 볼트 등)도 같은 검사를 받게 한다.
//   GUIDE_EXTERNAL_DIR=... node scripts/check-guide-roster.mjs
//   GUIDE_EXTERNAL_ONLY=1 을 함께 주면 저장소 파일은 건너뛴다.
// gen 이 null 이면 세대 검사를, version 이 null 이면 TM/HM 검사를 건너뛴다.
const EXTERNAL_GAMES = {
  'heartgold_pokemon_experience.md': ['4세대', '하트골드·소울실버'],
  '골드버전 스토리 엔트리 공략.md': ['2세대', '골드·실버'],
  '레드버전 스토리 엔트리 공략.md': ['1세대', '레드·블루'],
  '레드버전 진화 공략.md': ['1세대', '레드·블루'],
  '파이어레드 스토리 엔트리 공략.md': ['3세대', '파이어레드·리프그린'],
  '파이어레드 진화 가이드.md': ['3세대', '파이어레드·리프그린'],
  '포켓몬_하트골드_필수_기술_관리_가이드.md': ['4세대', '하트골드·소울실버'],
  '포켓몬스터_하트골드_스토리_최적화_완전공략.md': ['4세대', '하트골드·소울실버'],
  '포켓몬스터_Pt_기라티나_스토리_최적화_완전공략.md': ['4세대', '플래티넘'],
  '포켓몬스터_Pt_기라티나_DS2대_하트골드_통신진화_바톤터치_최적화_완전공략.md': ['4세대', '플래티넘'],
  // HGSS 와 Pt 를 함께 다뤄 버전을 하나로 못 정한다. 세대 검사만 받는다.
  '하트골드_소울실버_기라티나PT_스토리순서_포켓몬수집가이드.md': ['4세대', null],
  '하트골드_소울실버_기라티나PT_전국도감_493_수집표.md': ['4세대', null],
  // 게임 공략이 아니다. 이름 검사만 받는다.
  '넷플릭스 포켓몬 시리즈 타임라인.md': [null, null],
  '포켓몬 세대별 정리.md': [null, null],
  'Pokemon_Special_주인공_엔트리_총정리.md': [null, null],
}

/**
 * @returns {{path: string, label: string, gen: number|null, version: string|null, text: string}[]}
 * gen 이 null 이면 특정 게임에 매이지 않는 문서라 세대 검사를 건너뛴다.
 */
export function guideSources(root) {
  const out = []
  const push = (dir, file, gen, version) => {
    const path = new URL(`${dir}${file}`, root)
    out.push({
      path,
      label: file,
      gen: gen ? Number(String(gen).replace('세대', '')) : null,
      version: version ?? null,
      text: fs.readFileSync(path, 'utf8'),
    })
  }

  const dataDir = 'src/data/sample/'
  for (const f of fs.readdirSync(new URL(dataDir, root))) {
    if (!f.endsWith('.data.ts')) continue
    const g = DATA_GAMES[f]
    if (!g) throw new Error(`DATA_GAMES 에 없는 공략 파일: ${f} — scripts/guide-sources.mjs 를 갱신하세요`)
    push(dataDir, f, g[0], g[1])
  }

  // 가이드 페이지는 GuidePageLayout 에 넘긴 generation/version prop 이 곧 그 공략의 게임이다.
  const pageDir = 'src/pages/guides/'
  for (const f of fs.readdirSync(new URL(pageDir, root))) {
    if (!f.endsWith('.tsx')) continue
    const text = fs.readFileSync(new URL(`${pageDir}${f}`, root), 'utf8')
    const gen = text.match(/generation="(\d세대)"/)?.[1] ?? null
    const ver = text.match(/version="([^"]+)"/)?.[1] ?? null
    push(pageDir, f, gen, ver)
  }

  const mdDir = 'src/data/guides/'
  for (const f of fs.readdirSync(new URL(mdDir, root))) {
    if (!f.endsWith('.md')) continue
    const g = MD_GAMES[f]
    if (!g) throw new Error(`MD_GAMES 에 없는 마크다운 공략: ${f} — scripts/guide-sources.mjs 를 갱신하세요`)
    push(mdDir, f, g[0], g[1])
  }

  const extDir = process.env['GUIDE_EXTERNAL_DIR']
  if (extDir) {
    if (process.env['GUIDE_EXTERNAL_ONLY']) out.length = 0
    const walk = (dir) => {
      for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        const p = `${dir}/${e.name}`
        if (e.isDirectory()) { walk(p); continue }
        if (!e.name.endsWith('.md')) continue
        const g = EXTERNAL_GAMES[e.name]
        if (!g) throw new Error(`EXTERNAL_GAMES 에 없는 외부 노트: ${e.name} — scripts/guide-sources.mjs 를 갱신하세요`)
        out.push({
          path: p,
          label: e.name,
          gen: g[0] ? Number(String(g[0]).replace('세대', '')) : null,
          version: g[1] ?? null,
          text: fs.readFileSync(p, 'utf8'),
        })
      }
    }
    walk(extDir.split(String.fromCharCode(92)).join('/'))
  }

  return out
}
