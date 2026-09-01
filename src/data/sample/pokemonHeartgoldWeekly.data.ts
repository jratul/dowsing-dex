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
