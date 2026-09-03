// 출현 장소 데이터의 「버전 라벨」을 실제 게임 단위로 풀어 준다.
//
// 위키는 같은 세대를 여러 라벨로 적는다. 하트골드·소울실버가 대표적인데,
// 두 게임에 공통으로 나오면 「하트골드·소울실버」, 한쪽 전용이면 「하트골드」/「소울실버」다.
// 라벨을 그대로 필터로 쓰면 이 셋이 따로 놀아서, 하트골드를 하는 사람이 「하트골드·소울실버」를
// 골랐을 때 정작 하트골드 전용 33종이 안 보인다.
//
// 그래서 라벨을 게임 목록으로 풀고, 게임을 골라 필터한다.
//   '하트골드·소울실버' → ['하트골드', '소울실버']
//   '하트골드'          → ['하트골드']            ← 이쪽이 그 게임 전용이다

/** 라벨을 쪼갠 뒤 조각마다 적용하는 별칭. 같은 게임을 다르게 부르는 것들을 하나로 모은다. */
const PIECE_ALIAS: Record<string, string> = {
  // 1세대는 일본판 색 이름과 국제판 이름이 섞여 있다
  적: '레드',
  녹: '그린',
  청: '블루',
  // 4세대는 한국 정발명으로 모은다. 한국닌텐도가 낸 정식판이
  // 「포켓몬스터DP 디아루가·펄기아」·「포켓몬스터Pt 기라티나」이고,
  // 「다이아몬드·펄」은 대원씨아이가 들여온 일본어판 수입 명칭이다.
  // (Bulbapedia 「Pokémon Diamond and Pearl Versions」 ko 항목, 포켓몬 위키(ko) 문서명 기준.
  //  한국어 위키에서 「포켓몬스터 다이아몬드·펄」은 디아루가·펄기아로 넘겨주기다.)
  다이아몬드: '디아루가',
  펄: '펄기아',
  플라티나: '기라티나',
  플래티넘: '기라티나',
  // 표기 흔들림
  '레츠고 피카츄': '레츠고! 피카츄',
  '레츠고 이브이': '레츠고! 이브이',
  '레츠고! 이브이': '레츠고! 이브이',
}

/** 위키 라벨에 섞여 들어온 HTML 조각을 걷어낸다. */
function clean(label: string): string {
  return label
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

const cache = new Map<string, string[]>()

/**
 * 버전 라벨이 가리키는 게임 목록. 「A·B」는 두 게임 공통이라는 뜻이므로 둘 다 돌려준다.
 * 짝이 없는 라벨(팔파크·포켓워커·드림월드 등)은 그 자체를 하나의 항목으로 본다.
 */
export function gamesForLabel(label: string): string[] {
  const hit = cache.get(label)
  if (hit) return hit
  const games = clean(label)
    .split('·')
    .map((piece) => piece.trim())
    .filter(Boolean)
    .map((piece) => PIECE_ALIAS[piece] ?? piece)
  const out = games.length > 0 ? [...new Set(games)] : [clean(label)]
  cache.set(label, out)
  return out
}

// 「전용」 판정은 여기서 하지 않는다. 라벨이 게임 하나만 가리킨다고 전용인 것은 아니다 —
// 「기라티나」는 플래티넘의 한국 정발명이라 혼자 나오지만 전용이 아니다. 반면 「하트골드」는
// 「하트골드·소울실버」라는 짝 라벨이 따로 있어서 전용이 맞다. 짝이 있는지는 데이터를 봐야
// 알 수 있으므로 EncounterPage 가 판단한다.
