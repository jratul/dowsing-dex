// 하트골드·소울실버 요일별 이벤트 공략 데이터.
//
// 요일은 DS 본체 시계를 그대로 따른다. 놓치면 다음 주까지 기다려야 하는 것이 있고
// (연결동굴 라프라스, 달맞이산 달의돌), 매주 반복되는 것도 있다.
//
// 출처 대조: 포켓몬 위키(ko) 「요일남매」·「요일별 이벤트/성도」, Bulbapedia
// 「Week Siblings」·「Goldenrod Tunnel」·「S.S. Aqua」·「Silver (game)」.
// 아이템 한글명은 items.generated.ts, TM 번호는 tm-index.generated.ts 로 확인했다.

export type WeekDay = '월' | '화' | '수' | '목' | '금' | '토' | '일'

/** JS Date.getDay() 순서(일=0)와 맞춘 배열. 오늘 요일을 강조할 때 쓴다. */
export const HGW_DAY_ORDER: WeekDay[] = ['일', '월', '화', '수', '목', '금', '토']

export interface WeeklySibling {
  day: WeekDay
  name: string
  place: string
  item: string
  itemNote: string
  ribbon: string
}

/**
 * 요일남매 7인. 윙배지를 받은 뒤부터 나타나며, 첫 만남에만 아이템을 준다.
 * 두 번째부터는 선두 포켓몬에게 리본을 달아 준다(HGSS 한정).
 * 안내 쪽지는 관동 26번도로 풀숲 아래 민가에 있다 — 집만 관동에 있다.
 */
export const HGW_SIBLINGS: WeeklySibling[] = [
  { day: '월', name: '월희', place: '40번수로', item: '예리한부리', itemNote: '비행 기술 위력 +20%', ribbon: '뚝심리본' },
  { day: '화', name: '화홍', place: '29번도로', item: '휘어진스푼', itemNote: '에스퍼 기술 위력 +20%', ribbon: '철렁리본' },
  { day: '수', name: '수방', place: '분노의 호수', item: '검은띠', itemNote: '격투 기술 위력 +20%', ribbon: '풀죽기리본' },
  { day: '목', name: '목인', place: '36번도로', item: '딱딱한돌', itemNote: '바위 기술 위력 +20%', ribbon: '덜렁이리본' },
  { day: '금', name: '금순', place: '32번도로', item: '독바늘', itemNote: '독 기술 위력 +20%', ribbon: '상쾌리본' },
  { day: '토', name: '토영', place: '검은먹시티', item: '부드러운모래', itemNote: '땅 기술 위력 +20%', ribbon: '잠보리본' },
  { day: '일', name: '일식', place: '37번도로', item: '자석', itemNote: '전기 기술 위력 +20%', ribbon: '방글방글리본' },
]

export type TaskKind = 'sibling' | 'pokemon' | 'item' | 'contest' | 'travel' | 'shop' | 'battle' | 'phone'

export interface WeeklyTask {
  kind: TaskKind
  title: string
  place: string
  detail: string
  /** 놓치면 그 주에 다시 못 하는, 우선순위가 높은 일 */
  priority?: boolean
}

export interface WeeklyDay {
  day: WeekDay
  headline: string
  tasks: WeeklyTask[]
}

export const HGW_WEEK: WeeklyDay[] = [
  {
    day: '월',
    headline: '달의돌을 줍는 날 — 다만 밤에만',
    tasks: [
      { kind: 'sibling', title: '월희에게 예리한부리', place: '40번수로', detail: '첫 만남에만 아이템. 두 번째부터는 선두 포켓몬에게 뚝심리본을 달아 준다.' },
      {
        kind: 'item', title: '달맞이산 삐삐의 춤 → 달의돌', place: '관동 달맞이산 광장', priority: true,
        detail: '밤 20시~23시 59분에만 삐삐들이 춤을 춘다. 광장 가운데에서 달의돌 1개를 줍는다. 관동에 갈 수 있게 된 뒤부터 가능하고, 이 시간대를 놓치면 다음 주 월요일까지 기다려야 한다.',
      },
      { kind: 'travel', title: '쾌속선 아쿠아호 — 담청시티 출항', place: '담청시티 선착장', detail: '성도 → 관동 방향. 월·금요일에만 담청시티에서 뜬다.' },
      { kind: 'battle', title: '석영고원 계단에서 실버와 배틀', place: '석영고원', detail: '월·수요일에만 계단 앞을 막아선다. 금요일과 주말에는 나오지 않는다.' },
      { kind: 'shop', title: '금빛 지하통로 바겐세일', place: '금빛시티 지하통로', detail: '★ 아침에만 연다. 포켓몬 살롱은 월요일에 쉰다.' },
      { kind: 'phone', title: '관장 전화번호 — 비상 · 유빈', place: '무지개시티 백화점 4층 / 인주시티 방울탑 가는 길', detail: '비상은 월요일, 유빈은 월·화요일에 그 자리에 있다. 말을 걸면 재대결용 번호를 준다.' },
    ],
  },
  {
    day: '화',
    headline: '벌레잡기 대회가 열리는 첫 날',
    tasks: [
      { kind: 'sibling', title: '화홍에게 휘어진스푼', place: '29번도로', detail: '2세대에서는 핑크리본을 줬지만 HGSS 에서는 휘어진스푼으로 바뀌었다. 리본은 철렁리본.' },
      {
        kind: 'contest', title: '자연공원 벌레잡기 대회', place: '자연공원 (금빛시티 북쪽)', priority: true,
        detail: '화·목·토요일에만 열린다. 1등 상품이 진화의 돌이라 돌을 모으는 중이라면 빠뜨리지 않는다. 대회 중에는 스라크·쁘사이저처럼 평소에 안 나오는 벌레도 잡을 수 있다.',
      },
      { kind: 'shop', title: '포켓몬 살롱 — 형', place: '금빛시티 지하통로', detail: '형은 값이 비싼 대신 친밀도가 많이 오른다. 하루 한 번만 받을 수 있다.' },
      { kind: 'battle', title: '실버는 용의 굴에서 수련 중', place: '검은먹시티 용의 굴', detail: '화·목요일에는 여기 있지만 배틀은 걸어 주지 않는다. 대사만 본다.' },
      { kind: 'phone', title: '관장 전화번호 — 강연 · 유빈', place: '홍련섬 포켓몬센터 근처 / 인주시티 방울탑 가는 길', detail: '강연은 화요일에만 홍련섬 폐허에 나와 있다.' },
    ],
  },
  {
    day: '수',
    headline: '호연 사운드 — 라디오를 켜고 풀숲으로',
    tasks: [
      { kind: 'sibling', title: '수방에게 검은띠', place: '분노의 호수', detail: '리본은 풀죽기리본.' },
      {
        kind: 'pokemon', title: '포켓기어 라디오 「호연 사운드」', place: '성도·관동 전역의 풀숲', priority: true,
        detail: '★ 전국도감을 받은 뒤부터 수요일에만 나온다. 라디오를 켠 채로 풀숲에 들어가야 호연 포켓몬이 나오고, 배틀이 끝나거나 지역을 옮기면 라디오가 꺼지므로 매번 다시 켜야 한다. 앱솔·플러시·소곤룡 같은 3세대 포켓몬이 이 채널로만 잡힌다.',
      },
      { kind: 'travel', title: '쾌속선 아쿠아호 — 갈색시티 출항', place: '갈색시티 항구', detail: '관동 → 성도 방향. 수·일요일에만 갈색시티에서 뜬다.' },
      { kind: 'battle', title: '석영고원 계단에서 실버와 배틀', place: '석영고원', detail: '월요일과 같다.' },
      { kind: 'shop', title: '포켓몬 살롱 — 동생', place: '금빛시티 지하통로', detail: '동생은 300원으로 싸지만 결과가 들쭉날쭉하다.' },
    ],
  },
  {
    day: '목',
    headline: '신오 사운드 + 벌레잡기 대회',
    tasks: [
      { kind: 'sibling', title: '목인에게 딱딱한돌', place: '36번도로', detail: '리본은 덜렁이리본.' },
      {
        kind: 'pokemon', title: '포켓기어 라디오 「신오 사운드」', place: '성도·관동 전역의 풀숲', priority: true,
        detail: '★ 수요일의 호연 사운드와 짝을 이루는 목요일 전용 채널. 꼬링크·브이젤·동미러 같은 4세대 포켓몬이 나온다. 마찬가지로 전국도감이 필요하고 라디오를 켠 채 풀숲에 들어가야 한다.',
      },
      { kind: 'contest', title: '자연공원 벌레잡기 대회', place: '자연공원', detail: '화·목·토 중 둘째 날.' },
      { kind: 'shop', title: '포켓몬 살롱 — 형', place: '금빛시티 지하통로', detail: '' },
      { kind: 'battle', title: '실버는 용의 굴에서 수련 중', place: '검은먹시티 용의 굴', detail: '배틀 없음.' },
      { kind: 'phone', title: '관장 전화번호 — 호일', place: '상록숲 남서쪽', detail: '목요일에만 상록숲에 나와 있다.' },
    ],
  },
  {
    day: '금',
    headline: '라프라스를 받아 가는 날',
    tasks: [
      {
        kind: 'pokemon', title: '연결동굴 지하 2층 라프라스 Lv.20', place: '연결동굴 (32번도로 남쪽)', priority: true,
        detail: '★ 매주 금요일에 한 마리씩만 나온다. 파도타기가 있어야 지하 2층까지 내려갈 수 있다. 잡거나 쓰러뜨리면 그 주는 끝이고 다음 금요일에 다시 나온다 — 실수로 쓰러뜨리지 않게 주의한다.',
      },
      { kind: 'sibling', title: '금순에게 독바늘', place: '32번도로', detail: '리본은 상쾌리본.' },
      { kind: 'travel', title: '쾌속선 아쿠아호 — 담청시티 출항', place: '담청시티 선착장', detail: '성도 → 관동 방향. 월요일과 같다.' },
      { kind: 'shop', title: '포켓몬 살롱 — 동생', place: '금빛시티 지하통로', detail: '' },
      { kind: 'phone', title: '관장 전화번호 — 초련', place: '담청시티 아쿠아호 가는 길', detail: '금요일에만 그 자리에 있다.' },
    ],
  },
  {
    day: '토',
    headline: '벌레잡기 대회 마지막 날 + 한약방',
    tasks: [
      { kind: 'sibling', title: '토영에게 부드러운모래', place: '검은먹시티', detail: '2세대에서는 저주의부적이었지만 HGSS 에서는 부드러운모래로 바뀌었다. 리본은 잠보리본.' },
      { kind: 'contest', title: '자연공원 벌레잡기 대회', place: '자연공원', detail: '한 주의 마지막 기회. 놓치면 화요일까지 기다린다.' },
      { kind: 'shop', title: '금빛 지하통로 한약방', place: '금빛시티 지하통로', detail: '토·일요일에만 연다. 값이 싼 대신 먹이면 친밀도가 떨어지는 한약을 판다.' },
      { kind: 'shop', title: '포켓몬 살롱 — 형', place: '금빛시티 지하통로', detail: '' },
      { kind: 'pokemon', title: 'NPC 교환 — 꼬지지 → 뿔카노', place: '검은먹시티', detail: '웅을 이긴 뒤 토요일 17시~20시에만 교환해 준다.' },
    ],
  },
  {
    day: '일',
    headline: '기술머신을 공짜로 받는 날',
    tasks: [
      { kind: 'sibling', title: '일식에게 자석', place: '37번도로', detail: '리본은 방글방글리본. 일곱 명을 모두 만나면 그 뒤로는 리본만 준다.' },
      {
        kind: 'item', title: '백화점 5층에서 TM27 은혜갚기 / TM21 화풀이', place: '금빛시티 백화점 5층', priority: true,
        detail: '★ 일요일에만 있는 NPC 가 선두 포켓몬의 친밀도를 보고 둘 중 하나를 준다. 친밀도가 높으면 은혜갚기, 낮으면 화풀이다. 4세대 기술머신은 일회용이라 공짜로 받는 값이 크다.',
      },
      { kind: 'travel', title: '쾌속선 아쿠아호 — 갈색시티 출항', place: '갈색시티 항구', detail: '관동 → 성도 방향. 수요일과 같다.' },
      { kind: 'shop', title: '금빛 지하통로 한약방 · 포켓몬 살롱(동생)', place: '금빛시티 지하통로', detail: '한약방은 토·일요일에만 연다.' },
      { kind: 'phone', title: '관장 전화번호 — 민화', place: '무지개시티 분수 근처', detail: '일요일 낮 3시~5시에만 나와 있다. 시간대가 좁으니 놓치기 쉽다.' },
    ],
  },
]

export interface DailyTask {
  title: string
  detail: string
}

/** 요일과 무관하게 매일 리셋되는 것들. */
export const HGW_DAILY: DailyTask[] = [
  { title: '규토리 나무', detail: '성도·관동 각지의 규토리 나무에서 하루에 하나씩 딴다. 고동마을 강집 할아버지에게 가져가면 규토리볼을 만들어 준다 — 하루에 한 개씩만 만들어 주므로 매일 맡기는 습관을 들인다.' },
  { title: '대량발생', detail: '대량발생 장소와 포켓몬이 매일 바뀐다. 라디오나 엄마·NPC 전화로 확인한다. 그날만 나오는 조합이 있어 도감을 채우는 중이면 매일 확인할 값이 있다.' },
  { title: '남나리의 털갈이', detail: '관동 태초마을 그린의 집. 오후 3시~4시에만 해 준다. 친밀도가 오르고, 일곱 번 받으면 그린의 전화번호를 준다.' },
  { title: '포켓슬론 돔 경품', detail: '교환 목록이 매일 바뀐다. 진화의 돌이 여기 나오는 날이 있으므로 돌을 모으는 중이면 매일 들른다.' },
  { title: '규화의 암호', detail: '라디오 「규화의 암호」 방송에서 그날의 암호를 듣고 블루카드에 포인트를 적립한다.' },
  { title: '라디오타워 ID 넘버 추첨', detail: '금빛시티 라디오타워 1층. 내 포켓몬의 ID 와 그날 번호가 맞으면 상품을 준다.' },
  { title: '백화점 6층 제비뽑기', detail: '금빛시티 백화점 6층. 상품이 매일 바뀐다.' },
  { title: '기념사진', detail: '촬영 장소가 매일 바뀐다.' },
  { title: '실(볼캡슐 장식) 3장', detail: '담청시티 민가에서 매일 3장씩 나눠 준다. 볼캡슐을 꾸미는 용도라 전투와는 무관하다.' },
]

export interface WeeklyPriority {
  rank: number
  day: string
  what: string
  why: string
}

/** 놓치면 한 주를 통째로 기다려야 하는 것부터. */
export const HGW_PRIORITY: WeeklyPriority[] = [
  { rank: 1, day: '금', what: '연결동굴 라프라스', why: '주 1마리 고정. 잡을 때까지 매주 금요일이 유일한 기회다.' },
  { rank: 2, day: '수 · 목', what: '호연 사운드 / 신오 사운드', why: '전국도감 이후 3·4세대 포켓몬을 야생에서 잡는 사실상 유일한 통로다. 각각 주 하루뿐.' },
  { rank: 3, day: '월 밤', what: '달맞이산 달의돌', why: '20시~23시 59분이라는 좁은 창이 요일 조건과 겹친다. 달의돌은 사는 곳이 없어 이런 이벤트로 모아야 한다.' },
  { rank: 4, day: '화 · 목 · 토', what: '벌레잡기 대회', why: '1등 상품이 진화의 돌. 주 3회라 여유가 있어 보이지만 대회 시간대가 정해져 있어 자주 놓친다.' },
  { rank: 5, day: '일', what: '백화점 5층 기술머신', why: '4세대 기술머신은 일회용이라 공짜로 받는 한 장이 크다.' },
  { rank: 6, day: '매일', what: '요일남매 7명', why: '첫 만남 아이템은 한 번뿐이지만 서두를 이유는 없다. 지나는 길에 그 요일의 한 명씩 챙기면 7주 안에 끝난다.' },
]

// 본문 자동 링크용
export const HGW_WEEKLY_NAME_TO_ID: Map<string, number> = new Map(
  (
    [
      ['라프라스', 131], ['삐삐', 35], ['스라크', 123], ['쁘사이저', 127],
      ['앱솔', 359], ['플러시', 311], ['소곤룡', 293], ['꼬링크', 403],
      ['브이젤', 418], ['동미러', 436], ['꼬지지', 438], ['뿔카노', 111],
    ] as [string, number][]
  ).sort((a, b) => b[0].length - a[0].length),
)

export const HGW_WEEKLY_MOVE_NAMES: ReadonlySet<string> = new Set([
  '은혜갚기', '화풀이', '파도타기',
])

// ──────────────────────────────────────────────────────────────
// 관장 재대결 — 번호를 딴 뒤 언제 전화할 것인가
// ──────────────────────────────────────────────────────────────
// 번호를 받는 요일과 재대결하는 요일은 **서로 다르다**. 비상은 월요일에 번호를 주지만
// 재대결은 토요일 아침이다.
//
// 출처: 포켓몬 위키(ko) 「포켓기어/전화번호 — 체육관 관장과의 재대결」과
// Bulbapedia 「Fighting Dojo/Generation IV」의 Rematch schedule 이 16명 모두 일치했다.

export type TimeBand = '아침' | '낮' | '밤'

/** 게임 안의 시간대 구분. 밤만 두 토막이라는 점이 함정이다. */
export const HGW_TIME_BANDS: { band: TimeBand; hours: string; note?: string }[] = [
  { band: '아침', hours: '4:00 ~ 9:59' },
  { band: '낮', hours: '10:00 ~ 19:59' },
  { band: '밤', hours: '20:00 ~ 23:59 · 0:00 ~ 3:59', note: '연속이 아니라 두 토막이다' },
]

export interface LeaderRematch {
  day: WeekDay
  band: TimeBand
  leader: string
  region: '성도' | '관동'
  gymType: string
}

/** 16명 전원. 각자 주 1회, 한 시간대에만 전화를 받는다. */
export const HGW_LEADER_REMATCH: LeaderRematch[] = [
  { day: '월', band: '아침', leader: '류옹', region: '성도', gymType: '얼음' },
  { day: '월', band: '낮', leader: '도희', region: '관동', gymType: '독' },
  { day: '화', band: '낮', leader: '강연', region: '관동', gymType: '불꽃' },
  { day: '화', band: '밤', leader: '유빈', region: '성도', gymType: '고스트' },
  { day: '수', band: '아침', leader: '이슬', region: '관동', gymType: '물' },
  { day: '수', band: '낮', leader: '규리', region: '성도', gymType: '강철' },
  { day: '수', band: '밤', leader: '사도', region: '성도', gymType: '격투' },
  { day: '목', band: '낮', leader: '호일', region: '성도', gymType: '벌레' },
  { day: '금', band: '아침', leader: '마티스', region: '관동', gymType: '전기' },
  { day: '금', band: '밤', leader: '이향', region: '성도', gymType: '드래곤' },
  { day: '토', band: '아침', leader: '비상', region: '성도', gymType: '비행' },
  { day: '토', band: '낮', leader: '꼭두', region: '성도', gymType: '노말' },
  { day: '토', band: '밤', leader: '웅', region: '관동', gymType: '바위' },
  { day: '일', band: '아침', leader: '민화', region: '관동', gymType: '풀' },
  { day: '일', band: '낮', leader: '초련', region: '관동', gymType: '에스퍼' },
  { day: '일', band: '밤', leader: '그린', region: '관동', gymType: '혼합' },
]

/** 전화를 걸기 전에 알아야 할 것. */
export const HGW_REMATCH_RULES: { title: string; body: string }[] = [
  {
    title: '번호를 받는 요일과 싸우는 요일이 다르다',
    body: '이 둘을 헷갈리면 아무리 기다려도 안 된다. 비상은 월요일에 무지개시티 백화점에서 번호를 주지만, 재대결은 토요일 아침에 전화해야 성사된다. 각 관장의 번호 입수 요일은 위 요일별 목록의 「전화번호」 항목에 있다.',
  },
  {
    title: '16배지를 다 모아야 응한다',
    body: '★ 번호가 있고 시간대까지 맞아도 배지가 16개가 아니면 「너에게는 더 강한 상대가 있을 것」이라는 말만 하고 끝난다. 번호 등록 자체는 성도 리그를 이긴 뒤부터 되지만, 관동 관장의 번호는 상록시티에서 그린을 이겨야 모을 수 있다.',
  },
  {
    title: '전화를 걸면 노랑시티 격투도장으로 온다',
    body: '관장이 자기 체육관에서 기다리는 게 아니다. 관동 노랑시티의 격투도장에 16명이 모이는 구조라, 전화를 건 뒤 그리로 가야 한다.',
  },
  {
    title: '한 번 부르면 시간대가 끝나도 기다린다',
    body: '전화만 걸어 두면 그 시간대가 지나도 이길 때까지 도장에 남아 있다. 반대로 같은 시간대 안이라면 이기고 다시 전화해 몇 번이든 반복해서 싸울 수 있다.',
  },
  {
    title: '「밤」은 두 토막이다',
    body: '★ 게임은 0시~3시 59분도 밤으로 친다. 그래서 밤 시간대 관장은 20:00~23:59 뿐 아니라 0:00~3:59 에도 전화가 된다. 연속된 구간이 아니라는 점만 기억하면 된다.',
  },
]

// ──────────────────────────────────────────────────────────────
// 관장 재대결 엔트리 — 16명 전원의 팀·레벨·기술 배치
// ──────────────────────────────────────────────────────────────
// 출처: Bulbapedia 각 관장 문서의 「HeartGold and SoulSilver → Rematch」 파티 표를
// 위키텍스트(action=raw)로 받아 그대로 옮겼다. 요약 과정을 거치지 않아 기술명이
// 뭉개지지 않는다. 포켓몬·기술·특성의 한국어 표기는 전국도감 번호와 PokeAPI 영문
// slug 로 프로젝트 생성 데이터(pokedex / all-moves / abilities)에 대조해 붙였다 —
// 96마리 384기술 전부 매칭됐다.
//
// 배열 순서는 위 시간표(요일·시간대)와 같다.
//
// 함정 둘.
// - 재대결 팀은 첫 대결과 전혀 다르다. 비상은 도라지시티에서 구구·피죤을 쓰지만
//   재대결에서는 무장조·독수리검 같은 Lv.50대 6마리로 나온다.
// - 유빈은 팬텀을 두 마리 데려온다(둘 다 Lv.57, 기술 배치만 다르다). 오타가 아니다.

export interface RematchPokemon {
  pokemonId: number
  pokemon: string
  level: number
  ability: string
  moves: string[]
}

export interface LeaderRematchTeam {
  leader: string
  /** 그 팀의 최고 레벨. 준비 수준을 가늠하는 기준이 된다. */
  topLevel: number
  team: RematchPokemon[]
}

export const HGW_REMATCH_TEAMS: LeaderRematchTeam[] = [
  {
    leader: '류옹',
    topLevel: 60,
    team: [
      { pokemonId: 460, pokemon: '눈설왕', level: 56, ability: '눈퍼뜨리기', moves: ['얼음뭉치', '우드해머', '지진', '눈보라'] },
      { pokemonId: 87, pokemon: '쥬레곤', level: 58, ability: '두꺼운지방', moves: ['다이빙', '잠자기', '잠꼬대', '절대영도'] },
      { pokemonId: 362, pokemon: '얼음귀신', level: 52, ability: '정신력', moves: ['트집', '보복', '헤롱헤롱', '눈보라'] },
      { pokemonId: 478, pokemon: '눈여아', level: 52, ability: '눈숨기', moves: ['얼음뭉치', '이상한빛', '헤롱헤롱', '눈보라'] },
      { pokemonId: 365, pokemon: '씨카이저', level: 54, ability: '아이스바디', moves: ['뽐내기', '싸라기눈', '누르기', '눈보라'] },
      { pokemonId: 473, pokemon: '맘모꾸리', level: 60, ability: '눈숨기', moves: ['지진', '그림자분신', '스톤에지', '눈사태'] },
    ],
  },
  {
    leader: '도희',
    topLevel: 59,
    team: [
      { pokemonId: 169, pokemon: '크로뱃', level: 52, ability: '정신력', moves: ['열풍', '크로스포이즌', '이상한빛', '유턴'] },
      { pokemonId: 110, pokemon: '또도가스', level: 56, ability: '부유', moves: ['10만볼트', '오물폭탄', '맹독', '대폭발'] },
      { pokemonId: 454, pokemon: '독개굴', level: 52, ability: '건조피부', moves: ['크로스촙', '독찌르기', '헤롱헤롱', '대타출동'] },
      { pokemonId: 168, pokemon: '아리아도스', level: 58, ability: '불면', moves: ['뛰어오르기', '맹독', '뽐내기', '나이트헤드'] },
      { pokemonId: 49, pokemon: '도나리', level: 59, ability: '색안경', moves: ['사이코키네시스', '벌레의야단법석', '수면가루', '그림자분신'] },
      { pokemonId: 452, pokemon: '드래피온', level: 55, ability: '스나이퍼', moves: ['이상한빛', '칼춤', '크로스포이즌', '깨물어부수기'] },
    ],
  },
  {
    leader: '강연',
    topLevel: 62,
    team: [
      { pokemonId: 324, pokemon: '코터스', level: 54, ability: '하얀연기', moves: ['하품', '쾌청', '누르기', '오버히트'] },
      { pokemonId: 323, pokemon: '폭타', level: 57, ability: '하드록', moves: ['분화', '지진', '솔라빔', '쾌청'] },
      { pokemonId: 78, pokemon: '날쌩마', level: 60, ability: '타오르는불꽃', moves: ['플레어드라이브', '메가혼', '전광석화', '오버히트'] },
      { pokemonId: 219, pokemon: '마그카르고', level: 58, ability: '불꽃몸', moves: ['저주', '자이로볼', '오버히트', '스톤에지'] },
      { pokemonId: 229, pokemon: '헬가', level: 54, ability: '타오르는불꽃', moves: ['악의파동', '화염방사', '섀도볼', '기습'] },
      { pokemonId: 467, pokemon: '마그마번', level: 62, ability: '불꽃몸', moves: ['화염방사', '10만볼트', '안다리걸기', '이상한빛'] },
    ],
  },
  {
    leader: '유빈',
    topLevel: 57,
    team: [
      { pokemonId: 426, pokemon: '둥실라이드', level: 52, ability: '곡예', moves: ['섀도볼', '대타출동', '10만볼트', '길동무'] },
      { pokemonId: 477, pokemon: '야느와르몽', level: 52, ability: '프레셔', moves: ['도깨비불', '대타출동', '아픔나누기', '보복'] },
      { pokemonId: 302, pokemon: '깜까미', level: 52, ability: '시간벌기', moves: ['속이기', '냉동펀치', '깨뜨리다', '기습'] },
      { pokemonId: 429, pokemon: '무우마직', level: 54, ability: '부유', moves: ['놀래키기', '검은눈빛', '멸망의노래', '이상한빛'] },
      { pokemonId: 94, pokemon: '팬텀', level: 57, ability: '부유', moves: ['섀도볼', '최면술', '기합구슬', '이상한빛'] },
      { pokemonId: 94, pokemon: '팬텀', level: 57, ability: '부유', moves: ['섀도볼', '대타출동', '10만볼트', '길동무'] },
    ],
  },
  {
    leader: '이슬',
    topLevel: 60,
    team: [
      { pokemonId: 121, pokemon: '아쿠스타', level: 60, ability: '자연회복', moves: ['10만볼트', '냉동빔', '사이코키네시스', '파도타기'] },
      { pokemonId: 195, pokemon: '누오', level: 56, ability: '저수', moves: ['비바라기', '망각술', '물의파동', '지진'] },
      { pokemonId: 131, pokemon: '라프라스', level: 56, ability: '조가비갑옷', moves: ['비바라기', '멸망의노래', '눈보라', '파도타기'] },
      { pokemonId: 171, pokemon: '랜턴', level: 54, ability: '발광', moves: ['10만볼트', '전기자석파', '이상한빛', '파도타기'] },
      { pokemonId: 419, pokemon: '플로젤', level: 54, ability: '쓱쓱', moves: ['고속이동', '폭포오르기', '얼음엄니', '배턴터치'] },
      { pokemonId: 350, pokemon: '밀로틱', level: 60, ability: '이상한비늘', moves: ['하이드로펌프', '냉동빔', '잠자기', '잠꼬대'] },
    ],
  },
  {
    leader: '규리',
    topLevel: 62,
    team: [
      { pokemonId: 376, pokemon: '메타그로스', level: 52, ability: '클리어바디', moves: ['코멧펀치', '중력', '불릿펀치', '대폭발'] },
      { pokemonId: 462, pokemon: '자포코일', level: 56, ability: '옹골참', moves: ['금속음', '미러코트', '록온', '전자포'] },
      { pokemonId: 227, pokemon: '무장조', level: 52, ability: '옹골참', moves: ['강철날개', '깜짝베기', '에어슬래시', '압정뿌리기'] },
      { pokemonId: 437, pokemon: '동탁군', level: 50, ability: '내열', moves: ['자이로볼', '중력', '최면술', '꿈먹기'] },
      { pokemonId: 395, pokemon: '엠페르트', level: 52, ability: '급류', moves: ['하이드로펌프', '눈보라', '아쿠아제트', '울부짖기'] },
      { pokemonId: 208, pokemon: '강철톤', level: 62, ability: '옹골참', moves: ['아이언테일', '스톤에지', '스텔스록', '울부짖기'] },
    ],
  },
  {
    leader: '사도',
    topLevel: 60,
    team: [
      { pokemonId: 308, pokemon: '요가램', level: 54, ability: '순수한힘', moves: ['헤롱헤롱', '사이코커터', '번개펀치', '무릎차기'] },
      { pokemonId: 107, pokemon: '홍수몬', level: 52, ability: '철주먹', moves: ['뽐내기', '그림자분신', '마하펀치', '힘껏펀치'] },
      { pokemonId: 106, pokemon: '시라소몬', level: 55, ability: '이판사판', moves: ['속이기', '벌크업', '블레이즈킥', '무릎차기'] },
      { pokemonId: 286, pokemon: '버섯모', level: 54, ability: '포이즌힐', moves: ['대타출동', '스톤에지', '드레인펀치', '힘껏펀치'] },
      { pokemonId: 57, pokemon: '성원숭', level: 56, ability: '분노의경혈', moves: ['뽐내기', '보복', '번개펀치', '인파이트'] },
      { pokemonId: 62, pokemon: '강챙이', level: 60, ability: '저수', moves: ['대타출동', '그림자분신', '폭포오르기', '힘껏펀치'] },
    ],
  },
  {
    leader: '호일',
    topLevel: 56,
    team: [
      { pokemonId: 212, pokemon: '핫삼', level: 56, ability: '테크니션', moves: ['시저크로스', '칼춤', '불릿펀치', '엄청난힘'] },
      { pokemonId: 292, pokemon: '껍질몬', level: 48, ability: '불가사의부적', moves: ['시저크로스', '야습', '뽐내기', '맹독'] },
      { pokemonId: 469, pokemon: '메가자리', level: 52, ability: '색안경', moves: ['벌레의야단법석', '에어슬래시', '판별', '원시의힘'] },
      { pokemonId: 127, pokemon: '쁘사이저', level: 55, ability: '틀깨기', moves: ['시저크로스', '암석봉인', '지진', '가위자르기'] },
      { pokemonId: 214, pokemon: '헤라크로스', level: 54, ability: '근성', moves: ['메가혼', '카운터', '스톤에지', '인파이트'] },
      { pokemonId: 416, pokemon: '비퀸', level: 52, ability: '프레셔', moves: ['공격지령', '방어지령', '방어', '이상한빛'] },
    ],
  },
  {
    leader: '마티스',
    topLevel: 60,
    team: [
      { pokemonId: 26, pokemon: '라이츄', level: 60, ability: '정전기', moves: ['10만볼트', '풀묶기', '전광석화', '전기자석파'] },
      { pokemonId: 310, pokemon: '썬더볼트', level: 52, ability: '정전기', moves: ['자연의은혜', '방전', '전기자석파', '오버히트'] },
      { pokemonId: 462, pokemon: '자포코일', level: 52, ability: '자력', moves: ['10만볼트', '전자부유', '그림자분신', '미러샷'] },
      { pokemonId: 101, pokemon: '붐볼', level: 52, ability: '정전기', moves: ['전기자석파', '그림자분신', '10만볼트', '대폭발'] },
      { pokemonId: 417, pokemon: '파치리스', level: 58, ability: '픽업', moves: ['전광석화', '천사의키스', '분노의앞니', '방전'] },
      { pokemonId: 466, pokemon: '에레키블', level: 56, ability: '전기엔진', moves: ['10만볼트', '냉동펀치', '크로스촙', '지진'] },
    ],
  },
  {
    leader: '이향',
    topLevel: 60,
    team: [
      { pokemonId: 130, pokemon: '갸라도스', level: 56, ability: '위협', moves: ['용의춤', '폭포오르기', '지진', '용의파동'] },
      { pokemonId: 148, pokemon: '신뇽', level: 52, ability: '탈피', moves: ['드래곤다이브', '전기자석파', '10만볼트', '화염방사'] },
      { pokemonId: 142, pokemon: '프테라', level: 52, ability: '돌머리', moves: ['스톤샤워', '번개엄니', '지진', '울부짖기'] },
      { pokemonId: 230, pokemon: '킹드라', level: 56, ability: '스나이퍼', moves: ['용의숨결', '하이드로펌프', '냉동빔', '하품'] },
      { pokemonId: 6, pokemon: '리자몽', level: 52, ability: '맹화', moves: ['드래곤클로', '섀도클로', '불꽃엄니', '에어슬래시'] },
      { pokemonId: 149, pokemon: '망나뇽', level: 60, ability: '정신력', moves: ['용의숨결', '신비의부적', '번개', '파괴광선'] },
    ],
  },
  {
    leader: '비상',
    topLevel: 56,
    team: [
      { pokemonId: 398, pokemon: '찌르호크', level: 50, ability: '위협', moves: ['유턴', '인파이트', '브레이브버드', '헤롱헤롱'] },
      { pokemonId: 164, pokemon: '야부엉', level: 52, ability: '불면', moves: ['에어슬래시', '섀도볼', '깃털댄스', '날개쉬기'] },
      { pokemonId: 277, pokemon: '스왈로', level: 52, ability: '근성', moves: ['방어', '그림자분신', '객기', '죽기살기'] },
      { pokemonId: 430, pokemon: '돈크로우', level: 54, ability: '불면', moves: ['악의파동', '깜짝베기', '기습', '전기자석파'] },
      { pokemonId: 279, pokemon: '패리퍼', level: 48, ability: '날카로운눈', moves: ['파도타기', '냉동빔', '잠재파워', '순풍'] },
      { pokemonId: 18, pokemon: '피죤투', level: 56, ability: '날카로운눈', moves: ['은혜갚기', '그림자분신', '뽐내기', '날개쉬기'] },
    ],
  },
  {
    leader: '꼭두',
    topLevel: 58,
    team: [
      { pokemonId: 203, pokemon: '키링키', level: 52, ability: '정신력', moves: ['명상', '배턴터치', '섀도볼', '사이코키네시스'] },
      { pokemonId: 463, pokemon: '내룸벨트', level: 50, ability: '마이페이스', moves: ['쥐어짜기', '화염방사', '10만볼트', '냉동빔'] },
      { pokemonId: 400, pokemon: '비버통', level: 54, ability: '단순', moves: ['그림자분신', '파도타기', '차지빔', '냉동빔'] },
      { pokemonId: 301, pokemon: '델케티', level: 54, ability: '노말스킨', moves: ['속이기', '배턴터치', '조수', '명상'] },
      { pokemonId: 36, pokemon: '픽시', level: 52, ability: '매직가드', moves: ['명상', '불대문자', '번개', '눈보라'] },
      { pokemonId: 241, pokemon: '밀탱크', level: 58, ability: '배짱', moves: ['누르기', '헤롱헤롱', '잠자기', '잠꼬대'] },
    ],
  },
  {
    leader: '웅',
    topLevel: 61,
    team: [
      { pokemonId: 76, pokemon: '딱구리', level: 55, ability: '옹골참', moves: ['모래바람', '스톤샤워', '록커트', '지진'] },
      { pokemonId: 369, pokemon: '시라칸', level: 54, ability: '돌머리', moves: ['양날박치기', '아쿠아테일', '지진', '잠자기'] },
      { pokemonId: 139, pokemon: '암스타', level: 56, ability: '조가비갑옷', moves: ['방어', '모래바람', '소금물', '원시의힘'] },
      { pokemonId: 141, pokemon: '투구푸스', level: 55, ability: '전투무장', moves: ['스톤샤워', '아쿠아제트', '버티기', '기가드레인'] },
      { pokemonId: 95, pokemon: '롱스톤', level: 61, ability: '옹골참', moves: ['스텔스록', '스톤샤워', '록커트', '모래바람'] },
      { pokemonId: 409, pokemon: '램펄드', level: 57, ability: '틀깨기', moves: ['지진', '스톤에지', '눈사태', '록커트'] },
    ],
  },
  {
    leader: '민화',
    topLevel: 60,
    team: [
      { pokemonId: 275, pokemon: '다탱구', level: 54, ability: '엽록소', moves: ['리프스톰', '기습', '쾌청', '대폭발'] },
      { pokemonId: 189, pokemon: '솜솜코', level: 53, ability: '엽록소', moves: ['유턴', '추억의선물', '수면가루', '기가드레인'] },
      { pokemonId: 71, pokemon: '우츠보트', level: 56, ability: '엽록소', moves: ['자연의은혜', '오물폭탄', '리프스톰', '리프블레이드'] },
      { pokemonId: 182, pokemon: '아르코', level: 56, ability: '엽록소', moves: ['쾌청', '솔라빔', '기가드레인', '헤롱헤롱'] },
      { pokemonId: 465, pokemon: '덩쿠림보', level: 60, ability: '엽록소', moves: ['칼춤', '파워휩', '스톤샤워', '지진'] },
      { pokemonId: 407, pokemon: '로즈레이드', level: 55, ability: '자연회복', moves: ['웨더볼', '에너지볼', '오물폭탄', '저리가루'] },
    ],
  },
  {
    leader: '초련',
    topLevel: 60,
    team: [
      { pokemonId: 65, pokemon: '후딘', level: 60, ability: '싱크로', moves: ['중력', '사이코키네시스', '기합구슬', '에너지볼'] },
      { pokemonId: 196, pokemon: '에브이', level: 58, ability: '싱크로', moves: ['명상', '사이코키네시스', '섀도볼', '배턴터치'] },
      { pokemonId: 122, pokemon: '마임맨', level: 56, ability: '필터', moves: ['리플렉터', '스킬스왑', '번개', '사이코키네시스'] },
      { pokemonId: 124, pokemon: '루주라', level: 54, ability: '예지몽', moves: ['사이코키네시스', '기합구슬', '눈보라', '멸망의노래'] },
      { pokemonId: 202, pokemon: '마자용', level: 53, ability: '그림자밟기', moves: ['카운터', '미러코트', '길동무', '앙코르'] },
      { pokemonId: 475, pokemon: '엘레이드', level: 53, ability: '불굴의마음', moves: ['스톤에지', '사이코커터', '깜짝베기', '인파이트'] },
    ],
  },
  {
    leader: '그린',
    topLevel: 72,
    team: [
      { pokemonId: 103, pokemon: '나시', level: 67, ability: '엽록소', moves: ['리프스톰', '사이코키네시스', '대폭발', '트릭룸'] },
      { pokemonId: 68, pokemon: '괴력몬', level: 69, ability: '노가드', moves: ['폭발펀치', '스톤에지', '내던지기', '헤롱헤롱'] },
      { pokemonId: 464, pokemon: '거대코뿌리', level: 70, ability: '하드록', moves: ['메가혼', '스톤에지', '번개엄니', '지진'] },
      { pokemonId: 59, pokemon: '윈디', level: 68, ability: '타오르는불꽃', moves: ['플레어드라이브', '신속', '번개엄니', '깨물어부수기'] },
      { pokemonId: 248, pokemon: '마기라스', level: 70, ability: '모래날림', moves: ['안다리걸기', '불꽃엄니', '스톤샤워', '지진'] },
      { pokemonId: 18, pokemon: '피죤투', level: 72, ability: '갈지자걸음', moves: ['은혜갚기', '그림자분신', '에어슬래시', '강철날개'] },
    ],
  },
]
