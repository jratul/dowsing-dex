// 하트골드·소울실버 곤충채집 대회 1등 공략 데이터.
//
// 원문: 옵시디언 볼트 「하트골드_곤충채집대회_공략.md」
// 출처: Bulbapedia (Bug-Catching Contest / Sport Ball), Serebii (National Park)
//
// 출현표 40행(종·레벨·확률·희귀도)과 점수 계산식은 pret/pokeheartgold 디스어셈블리로
// 교차 검증했다 — files/data/mushi/mushi_encount.csv 와 src/overlay_bug_contest.c 의
// BugContest_JudgePlayerMon(). 전부 일치했다.
// CSV 의 rate 컬럼은 확률이 아니라 누적 임계값(80,60,50,...,0)이라 차이를 내야
// 실제 확률(20,20,10,...,5)이 된다.
//
// 기준은 **전국도감 획득 이후**다. 도감을 얻기 전에는 출현 포켓몬과 1등 상품이 다르다.
// 2세대 금·은·크리스탈은 점수 계산식 자체가 달라 이 문서를 그대로 적용하면 안 된다.

export type ContestDay = '화' | '목' | '토'

export const HGB_DAYS: ContestDay[] = ['화', '목', '토']

export interface ContestRule {
  label: string
  value: string
  note?: string
}

/** 대회 기본 규칙. */
export const HGB_RULES: ContestRule[] = [
  { label: '장소', value: '자연공원 (금빛시티 북쪽)' },
  { label: '개최 요일', value: '화 · 목 · 토요일' },
  {
    label: '참가 가능 시간',
    value: '20:00 이전까지',
    note: '★ 20시에 접수하러 가면 「오늘 곤충채집 대회는 끝났다」며 돌려보낸다(실제 플레이로 확인). 게임의 밤 시간대가 20:00에 시작하므로 낮이 끝나면 대회도 닫히는 구조로 보인다. 시작 시각은 확인하지 못했다.',
  },
  { label: '참가비', value: '없음' },
  { label: '하루 참가 횟수', value: '1회' },
  { label: '제한 시간', value: '20분' },
  {
    label: '지급되는 볼',
    value: '콤페볼 20개',
    note: 'Sport Ball. 4~8세대 표기가 「콤페볼」이고 현행 한국 정식 명칭은 「컴퍼티션볼」이다. HGSS 화면에는 콤페볼로 나온다. 포획률 보정 1.5배.',
  },
  { label: '쓸 수 있는 포켓몬', value: '접수할 때 선두에 둔 1마리' },
  { label: '심사에 낼 수 있는 포켓몬', value: '1마리', note: '새로 잡으면 기존 것과 교체할지 고를 수 있다.' },
  { label: '가방 사용', value: '일반 아이템 사용 불가' },
  { label: '저장', value: '대회 중 저장 불가' },
]

/** 이 중 하나라도 발생하면 대회가 끝나고 심사로 넘어간다. */
export const HGB_END_CONDITIONS = [
  '20분 경과',
  '콤페볼 20개를 모두 사용',
  '주인공이 쓰러짐',
  '자연공원 밖으로 나감',
  '메뉴에서 대회 종료를 선택',
]

export interface ScoreComponent {
  item: string
  max: string
  meaning: string
}

/** 점수는 최대 400점이고 네 항목으로 나뉜다. */
export const HGB_SCORE: ScoreComponent[] = [
  { item: '레벨', max: '100', meaning: '잡은 레벨 × 100 ÷ 그 종의 대회 최고 레벨 (스라크·쁘사이저는 28)' },
  { item: '개체값', max: '100', meaning: '여섯 개체값의 합 × 100 ÷ 186 (31 × 6)' },
  { item: '현재 HP', max: '100', meaning: '현재 HP × 100 ÷ 최대 HP' },
  { item: '희귀도', max: '60 / 80 / 100', meaning: '종별로 정해진 고정 점수' },
]

export interface RarityGroup {
  score: number
  label: string
  members: { id: number; name: string }[]
  note?: string
}

/** 희귀도 점수. 1등을 노린다면 사실상 100점짜리 두 종만 보면 된다. */
export const HGB_RARITY: RarityGroup[] = [
  {
    score: 100,
    label: '최고',
    members: [
      { id: 123, name: '스라크' },
      { id: 127, name: '쁘사이저' },
    ],
    note: '둘은 점수상 완전히 동급이다. 출현율도 레벨도 같다.',
  },
  {
    score: 60,
    label: '최하',
    members: [
      { id: 10, name: '캐터피' },
      { id: 11, name: '단데기' },
      { id: 13, name: '뿔충이' },
      { id: 14, name: '딱충이' },
      { id: 265, name: '개무소' },
      { id: 266, name: '실쿤' },
      { id: 268, name: '카스쿤' },
      { id: 401, name: '귀뚤뚜기' },
    ],
  },
  {
    score: 80,
    label: '중간',
    members: [],
    note: '위 두 그룹에 없는 나머지 전부. 버터플·독침붕·귀뚤톡크 등이 여기 해당한다.',
  },
]

export interface ContestEncounter {
  id: number
  name: string
  levels: string
  rate: number
  isTarget?: boolean
}

/**
 * 전국도감 획득 이후의 요일별 출현표.
 * 스라크·쁘사이저는 화·목·토 모두 5%씩 나와, 어느 날에 가도 목표는 같다.
 */
export const HGB_ENCOUNTERS: Record<ContestDay, ContestEncounter[]> = {
  화: [
    { id: 10, name: '캐터피', levels: '24~36', rate: 20 },
    { id: 13, name: '뿔충이', levels: '24~36', rate: 20 },
    { id: 11, name: '단데기', levels: '26~36', rate: 10 },
    { id: 14, name: '딱충이', levels: '26~36', rate: 10 },
    { id: 12, name: '버터플', levels: '27~30', rate: 10 },
    { id: 15, name: '독침붕', levels: '27~30', rate: 10 },
    { id: 48, name: '콘팡', levels: '25~32', rate: 5 },
    { id: 46, name: '파라스', levels: '27~34', rate: 5 },
    { id: 123, name: '스라크', levels: '27~28', rate: 5, isTarget: true },
    { id: 127, name: '쁘사이저', levels: '27~28', rate: 5, isTarget: true },
  ],
  목: [
    { id: 265, name: '개무소', levels: '24~36', rate: 20 },
    { id: 266, name: '실쿤', levels: '24~36', rate: 20 },
    { id: 290, name: '토중몬', levels: '26~36', rate: 10 },
    { id: 313, name: '볼비트', levels: '26~36', rate: 10 },
    { id: 401, name: '귀뚤뚜기', levels: '27~30', rate: 10 },
    { id: 402, name: '귀뚤톡크', levels: '27~30', rate: 10 },
    { id: 269, name: '독케일', levels: '25~32', rate: 5 },
    { id: 415, name: '세꿀버리', levels: '27~34', rate: 5 },
    { id: 123, name: '스라크', levels: '27~28', rate: 5, isTarget: true },
    { id: 127, name: '쁘사이저', levels: '27~28', rate: 5, isTarget: true },
  ],
  토: [
    { id: 265, name: '개무소', levels: '24~36', rate: 20 },
    { id: 268, name: '카스쿤', levels: '24~36', rate: 20 },
    { id: 290, name: '토중몬', levels: '26~36', rate: 10 },
    { id: 314, name: '네오비트', levels: '26~36', rate: 10 },
    { id: 401, name: '귀뚤뚜기', levels: '27~30', rate: 10 },
    { id: 402, name: '귀뚤톡크', levels: '27~30', rate: 10 },
    { id: 267, name: '뷰티플라이', levels: '25~32', rate: 5 },
    { id: 415, name: '세꿀버리', levels: '27~34', rate: 5 },
    { id: 123, name: '스라크', levels: '27~28', rate: 5, isTarget: true },
    { id: 127, name: '쁘사이저', levels: '27~28', rate: 5, isTarget: true },
  ],
}

export interface HpPenalty {
  hp: string
  score: string
}

/** HP는 깎은 만큼 그대로 점수에서 빠진다. 이 대회가 일반 포획과 정반대인 이유다. */
export const HGB_HP_TABLE: HpPenalty[] = [
  { hp: '100%', score: '약 100점' },
  { hp: '90%', score: '약 90점' },
  { hp: '75%', score: '약 75점' },
  { hp: '50%', score: '약 50점' },
  { hp: '1', score: '거의 0점' },
]

export interface PriorityItem {
  rank: number
  what: string
  detail: string
}

/** 1등 확률을 높이는 우선순위. */
export const HGB_PRIORITY: PriorityItem[] = [
  { rank: 1, what: '종', detail: '스라크 또는 쁘사이저. 둘만 희귀도 100점이라 다른 종으로는 사실상 못 이긴다.' },
  { rank: 2, what: 'HP', detail: '무손상 포획이면 100점. 깎은 비율이 그대로 감점이라 손해가 가장 크다.' },
  { rank: 3, what: '레벨', detail: 'Lv.28이 최고. 다만 Lv.27과의 차이는 약 4점뿐이다.' },
  { rank: 4, what: '개체값', detail: '잡기 전에는 알 수 없다. 같은 Lv.28 풀피끼리도 여기서 갈린다 — 운의 영역.' },
]

/** 점수에 전혀 반영되지 않는 것들. 좋은 개체를 잡았으면 20분을 채울 이유가 없다. */
export const HGB_IRRELEVANT = [
  '남은 시간',
  '사용한 볼 개수',
  '몇 번째 조우에서 잡았는지',
  '볼을 몇 번 던졌는지',
  '수면·마비 등 상태이상 여부',
]

export interface CatcherSetup {
  label: string
  value: string
  why: string
}

/** 포획 요원 세팅. 공격하지 않고 재우기만 하는 것이 핵심이다. */
export const HGB_CATCHER: CatcherSetup[] = [
  {
    label: '포켓몬',
    value: '버터플',
    why: '수면가루를 자력으로 배우고, 특성 복안이면 명중률까지 올라간다.',
  },
  {
    label: '특성',
    value: '복안',
    why: '수면가루의 기본 명중률 75%를 크게 끌어올린다. 대회에서 가장 중요한 것이 실패하지 않는 것이다.',
  },
  {
    label: '필수 기술',
    value: '수면가루',
    why: '공격기는 필요 없다. 오히려 쓰면 안 된다 — HP를 깎는 순간 점수가 그만큼 빠진다.',
  },
  {
    label: '권장 레벨',
    value: 'Lv.50 전후 (확실하게는 Lv.60 이상)',
    why: '스라크는 기본 스피드가 높아 Lv.50대에서는 개체값·성격에 따라 선공을 빼앗길 수 있다. Lv.60이면 스피드 개체값 0에 하락 성격이라도 Lv.28 스라크보다 먼저 움직인다.',
  },
]

export interface JudgementRow {
  situation: string
  action: string
  emphasis?: boolean
}

/** 대회 중 상황별 판단표. */
export const HGB_JUDGEMENTS: JudgementRow[] = [
  { situation: '목표가 아닌 포켓몬 등장', action: '도망' },
  { situation: 'Lv.27 스라크 / 쁘사이저', action: '수면 걸고 풀피로 포획' },
  { situation: 'Lv.28 스라크 / 쁘사이저', action: '최우선 포획', emphasis: true },
  { situation: 'Lv.27을 잡아 둔 상태에서 Lv.28 등장', action: 'Lv.28 포획 시도 — 성공하면 교체' },
  { situation: 'Lv.28 스라크 보유 중 Lv.28 쁘사이저 등장', action: '교체할 이유 없음 (동급)' },
  { situation: '풀피 Lv.27 보유 중, HP를 많이 깎아야 잡을 Lv.28', action: '기존 Lv.27 유지 — 레벨 4점보다 HP 감점이 크다', emphasis: true },
  { situation: 'Lv.28 풀피 포획 성공', action: '바로 대회 종료', emphasis: true },
  { situation: '좋은 개체를 잡았는데 시간이 남음', action: '기다릴 이유 없음 — 남은 시간은 점수와 무관' },
]

export interface PrizeRow {
  rank: string
  beforeDex: string
  afterDex: string
}

/** 순위별 상품. 전국도감 전후로 1등 상품이 달라진다. */
export const HGB_PRIZES: PrizeRow[] = [
  { rank: '1등', beforeDex: '태양의돌', afterDex: '진화용 돌 10종 중 무작위 1개' },
  { rank: '2등', beforeDex: '변함없는돌', afterDex: '변함없는돌' },
  { rank: '3등', beforeDex: '황금열매', afterDex: '자뭉열매' },
  { rank: '참가상', beforeDex: '나무열매', afterDex: '아름다운허물' },
]

/** 전국도감 이후 1등 상품으로 나올 수 있는 돌. */
export const HGB_PRIZE_STONES = [
  '불꽃의돌',
  '물의돌',
  '천둥의돌',
  '리프의돌',
  '달의돌',
  '태양의돌',
  '빛의돌',
  '어둠의돌',
  '각성의돌',
  '동글동글돌',
]
