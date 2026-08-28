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
  'pokemonUnown.data.ts': [null, null], // 여러 게임을 묶은 종합 공략
}

// 마크다운 원문 공략.
const MD_GAMES = { 'hgss-collection.md': ['4세대', '하트골드·소울실버'] }

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

  return out
}
