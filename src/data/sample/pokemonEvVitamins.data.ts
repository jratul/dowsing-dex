// 능력치 상승 아이템(비타민)과 노력치 시스템 — 세대별 정리
// 원문: Obsidian Vault/포켓몬/pokemon_vitamins_ev_generation_guide.md
// 아이템 한국어명은 PokeAPI 한국어 표기로 확인했다(PP맥스 → 포인트맥스).
// 수치 출처: Bulbapedia — Effort values, Vitamin, Pomeg Berry, Feather

export interface EvVitamin {
  item: string
  en: string
  stat: string
  /** 1·2세대 대응 (키토산은 3세대부터) */
  gen12: string
}

export const EVV_VITAMINS: EvVitamin[] = [
  { item: '맥스업', en: 'HP Up', stat: 'HP', gen12: 'HP' },
  { item: '타우린', en: 'Protein', stat: '공격', gen12: '공격' },
  { item: '사포닌', en: 'Iron', stat: '방어', gen12: '방어' },
  { item: '리보플라빈', en: 'Calcium', stat: '특수공격', gen12: '특수 (특수공격·특수방어 공유)' },
  { item: '키토산', en: 'Zinc', stat: '특수방어', gen12: '없음 (3세대에 등장)' },
  { item: '알칼로이드', en: 'Carbos', stat: '스피드', gen12: '스피드' },
]

/** 세대별 핵심 비교표 — 행 = 항목, 열 = 1~2 / 3~5 / 6~7 / 8~ */
export const EVV_GEN_COMPARE: { label: string; values: [string, string, string, string] }[] = [
  { label: '시스템', values: ['능력치 경험치', '노력치', '노력치', '노력치'] },
  { label: '총합 상한', values: ['없음', '510', '510', '510'] },
  { label: '한 능력치 상한', values: ['65,535', '255 (유효 252)', '252', '252'] },
  { label: '비타민 1개', values: ['+2,560', '+10', '+10', '+10'] },
  { label: '비타민으로 올릴 수 있는 한도', values: ['25,600', '100', '100', '252'] },
  { label: '키토산', values: ['없음', '있음', '있음', '있음'] },
]

/** 3~7세대 비타민 100 제한 예시 (타우린) */
export const EVV_CAP_EXAMPLE: { before: string; after: string }[] = [
  { before: '0', after: '10' },
  { before: '50', after: '60' },
  { before: '90', after: '100' },
  { before: '95', after: '100' },
  { before: '100', after: '사용 불가' },
  { before: '120', after: '사용 불가' },
]

/** 레벨 100 기준 노력치 → 추가 능력치 = floor(EV / 4) */
export const EVV_EV_TO_STAT: { ev: number; stat: string }[] = [
  { ev: 0, stat: '0' },
  { ev: 4, stat: '+1' },
  { ev: 40, stat: '+10' },
  { ev: 100, stat: '+25' },
  { ev: 252, stat: '+63' },
  { ev: 255, stat: '+63' },
]

/** 노력치 감소 열매 — 에메랄드부터. 친밀도도 오른다 */
export const EVV_BERRIES: { stat: string; berry: string; en: string }[] = [
  { stat: 'HP', berry: '유석열매', en: 'Pomeg Berry' },
  { stat: '공격', berry: '시마열매', en: 'Kelpsy Berry' },
  { stat: '방어', berry: '파비열매', en: 'Qualot Berry' },
  { stat: '특수공격', berry: '로매열매', en: 'Hondew Berry' },
  { stat: '특수방어', berry: '또뽀열매', en: 'Grepa Berry' },
  { stat: '스피드', berry: '토망열매', en: 'Tamato Berry' },
]

/** 깃털 — 5세대. 당시 한국어판 이름은 「날개」였다(체력날개 등) */
export const EVV_FEATHERS: { stat: string; item: string }[] = [
  { stat: 'HP', item: '체력깃털' },
  { stat: '공격', item: '근력깃털' },
  { stat: '방어', item: '저항력깃털' },
  { stat: '특수공격', item: '지력깃털' },
  { stat: '특수방어', item: '정신력깃털' },
  { stat: '스피드', item: '순발력깃털' },
]

/** 전투로 얻는 노력치를 늘리는 수단 */
export const EVV_BOOSTERS: { item: string; effect: string; since: string }[] = [
  { item: '교정깁스', effect: '전투로 얻는 노력치 2배', since: '3세대 (썬·문에서는 입수 불가)' },
  {
    item: '파워 계열 6종',
    effect:
      '파워웨이트(HP)·파워리스트(공격)·파워벨트(방어)·파워렌즈(특수공격)·파워밴드(특수방어)·파워앵클릿(스피드) — 한 마리당 해당 노력치 +4 추가 (7세대부터 +8)',
    since: '4세대',
  },
  { item: '포켓러스', effect: '전투로 얻는 노력치 2배 (파워 계열 추가분도 2배)', since: '2세대 (스칼렛·바이올렛에는 없음)' },
]

/** 세대에 따라 동작이 달라지는 세부 규칙 */
export const EVV_GEN_DIFFS: { topic: string; old: string; now: string }[] = [
  {
    topic: '감소 열매',
    old: '4세대만: 노력치가 110보다 많으면 첫 사용에 100으로 떨어진다 (252 → 100 → 90 → 80 …)',
    now: '5세대부터: 항상 10씩 줄어든다',
  },
  {
    topic: '레벨 100 포켓몬',
    old: '3~4세대: 전투로는 노력치를 얻지 못한다 (비타민은 된다)',
    now: '5세대부터: 레벨 100이어도 전투로 노력치를 얻는다',
  },
  {
    topic: '능력치 반영 시점',
    old: '3~4세대: 전투로 얻은 노력치가 바로 안 보인다. 레벨업·PC에 맡겼다 꺼내기·비타민·감소 열매 때 다시 계산된다',
    now: '5세대부터: 전투가 끝나면 바로 반영된다',
  },
]

/** 일반 노력치를 쓰지 않는 작품 */
export const EVV_EXCEPTIONS: { game: string; system: string; note: string }[] = [
  {
    game: '레츠고 피카츄·이브이',
    system: '각성치(AV)',
    note: '노력치가 없다. 기력의사탕·힘의사탕·수비의사탕·지식의사탕·마음의사탕·속도의사탕으로 능력치를 올린다. 252/252/4 배분이 의미 없다.',
  },
  {
    game: 'Pokémon LEGENDS 아르세우스',
    system: '노력 레벨',
    note: '노력의모래 등 전용 아이템으로 능력치별 노력 레벨을 올린다. 비타민·노력치 육성과 체계가 다르다.',
  },
]

/** 자주 하는 착각 */
export const EVV_MYTHS: { myth: string; truth: string }[] = [
  { myth: '타우린을 먹이면 공격이 바로 10 오른다', truth: '공격 노력치가 10 오른다. 실제 공격 증가량은 레벨에 따라 다르고, 레벨 100에서도 +2~3이다.' },
  { myth: '비타민은 한 마리에 10개까지만 먹일 수 있다', truth: '3~7세대 제한은 "능력치마다 100까지"다. 노력치가 0인 포켓몬이면 타우린 10개와 알칼로이드 10개를 모두 먹일 수 있다.' },
  { myth: '255가 252보다 강하다', truth: '3~5세대에 255까지 들어가도 255 ÷ 4 = 63(버림)이라 252와 같다. 남는 3은 낭비다.' },
  { myth: '스토리에서 많이 싸우면 원하는 능력치가 알아서 오른다', truth: '쓰러뜨린 포켓몬이 주는 노력치만 오르므로 무작위로 싸우면 여러 능력치에 흩어진다.' },
  { myth: '1·2세대도 252/252/4로 맞추면 된다', truth: '1·2세대는 능력치 경험치라 합계 제한이 없고 능력치마다 65,535까지 쌓인다. 배분 개념 자체가 다르다.' },
]

/** 세대별로 이것만 기억 */
export const EVV_CHEATSHEET: { gens: string; lines: string[] }[] = [
  { gens: '1~2세대', lines: ['노력치가 아니라 능력치 경험치', '비타민 1개 +2,560, 25,600까지', '전투로는 능력치마다 65,535까지', '합계 제한 없음'] },
  { gens: '3~5세대', lines: ['합계 510, 능력치당 255 (유효 252)', '비타민 1개 +10, 능력치당 100까지'] },
  { gens: '6~7세대', lines: ['합계 510, 능력치당 252', '비타민은 여전히 100까지'] },
  { gens: '8세대~', lines: ['합계 510, 능력치당 252', '비타민만으로 252까지'] },
]
