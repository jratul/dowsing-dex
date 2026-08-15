/**
 * 안농(#201) 종합 자료.
 *
 * 출처 기준:
 * - 등장 게임 목록: `src/data/moves/by-id/201.generated.ts`의 학습셋 버전 20종
 * - 야생 출현 장소: `src/data/pokedex/pokedex.generated.ts`의 안농 encounterLocations
 * - 종족값·특성·분류: 같은 도감 데이터
 * 도감 데이터의 출현지 목록은 7세대까지만 채워져 있어, 8세대(BDSP·레전드 아르세우스)는
 * 학습셋에 버전이 존재한다는 사실과 별도 확인 내용을 근거로 표기했다.
 */

const SPRITE_BASE = 'https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon'

export interface UnownForm {
  /** 화면에 보여줄 글자 */
  label: string
  spriteUrl: string
  /** 이 형태가 처음 등장한 세대 */
  sinceGeneration: 2 | 3
}

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

/** A~Z 26종(2세대부터) + ! ? 2종(3세대부터) = 총 28종. */
export const UNOWN_FORMS: UnownForm[] = [
  ...LETTERS.map((ch, i) => ({
    label: ch,
    // A형만 기본 스프라이트(201.png)를 쓰고, B~Z는 소문자 접미사가 붙는다.
    spriteUrl: i === 0 ? `${SPRITE_BASE}/201.png` : `${SPRITE_BASE}/201-${ch.toLowerCase()}.png`,
    sinceGeneration: 2 as const,
  })),
  { label: '!', spriteUrl: `${SPRITE_BASE}/201-exclamation.png`, sinceGeneration: 3 },
  { label: '?', spriteUrl: `${SPRITE_BASE}/201-question.png`, sinceGeneration: 3 },
]

export const UNOWN_BASE_STATS = [
  { label: 'HP', value: 48, key: 'hp' },
  { label: '공격', value: 72, key: 'attack' },
  { label: '방어', value: 48, key: 'defense' },
  { label: '특수공격', value: 72, key: 'special-attack' },
  { label: '특수방어', value: 48, key: 'special-defense' },
  { label: '스피드', value: 48, key: 'speed' },
] as const

export const UNOWN_BASE_STAT_TOTAL = UNOWN_BASE_STATS.reduce((sum, s) => sum + s.value, 0)

export type AvailabilityKind = 'wild' | 'transfer'

export interface GameAvailability {
  generation: number
  /** 게임 버전명 */
  version: string
  kind: AvailabilityKind
  /** 야생이면 출현 장소, 이전 전용이면 입수 경로 */
  where: string
  note?: string
}

/**
 * 안농이 존재하는 게임 전체. `kind: 'wild'`는 그 게임 안에서 직접 잡을 수 있는 경우,
 * `'transfer'`는 다른 게임에서 데려와야만 보유할 수 있는 경우다.
 */
export const UNOWN_AVAILABILITY: GameAvailability[] = [
  { generation: 2, version: '금·은', kind: 'wild', where: '알프의 유적' },
  { generation: 2, version: '크리스탈', kind: 'wild', where: '알프의 유적' },
  { generation: 3, version: '루비·사파이어', kind: 'transfer', where: '교환' },
  { generation: 3, version: '에메랄드', kind: 'transfer', where: '교환' },
  { generation: 3, version: '파이어레드·리프그린', kind: 'wild', where: '아스카나의 석실' },
  { generation: 3, version: '콜로세움', kind: 'transfer', where: '교환' },
  { generation: 3, version: 'XD', kind: 'transfer', where: '교환' },
  { generation: 4, version: '다이아몬드·펄', kind: 'wild', where: '신수유적' },
  { generation: 4, version: '플래티넘', kind: 'wild', where: '신수유적' },
  { generation: 4, version: '하트골드·소울실버', kind: 'wild', where: '알프의 유적' },
  { generation: 4, version: '팔파크', kind: 'wild', where: '숲', note: '4세대 이주 시설' },
  { generation: 5, version: '블랙·화이트', kind: 'transfer', where: '포켓시프터' },
  { generation: 5, version: '블랙2·화이트2', kind: 'transfer', where: '포켓시프터' },
  { generation: 6, version: 'X·Y', kind: 'transfer', where: '교환' },
  { generation: 6, version: '오메가루비·알파사파이어', kind: 'wild', where: '환상동굴 (107번수로 남쪽)' },
  { generation: 7, version: '썬·문', kind: 'transfer', where: '포켓몬 뱅크' },
  { generation: 7, version: '울트라썬·울트라문', kind: 'transfer', where: '포켓몬 뱅크' },
  { generation: 8, version: '브릴리언트다이아몬드·샤이닝펄', kind: 'wild', where: '신수유적' },
  { generation: 8, version: '레전드 아르세우스', kind: 'wild', where: '히스이 지방 각지' },
]

/** 안농이 아예 등장하지 않는 본편. 학습셋에도 해당 버전이 없다. */
export const UNOWN_ABSENT_GAMES = ['소드·실드', '스칼렛·바이올렛']

export interface EncounterSpot {
  title: string
  games: string
  levels?: string
  body: string
  steps?: string[]
}

export const UNOWN_SPOTS: EncounterSpot[] = [
  {
    title: '알프의 유적 (성도)',
    games: '금·은 / 크리스탈 / 하트골드·소울실버',
    levels: '금·은·크리스탈 Lv.5 / 하트골드·소울실버 Lv.5',
    body:
      '안농이 처음 등장한 장소이자 가장 널리 알려진 서식지. 도라지시티와 32번도로 사이에 있으며, ' +
      '유적 내부의 퍼즐(비밀의 방)을 풀어야 지하로 내려가 안농을 만날 수 있다. 퍼즐을 풀기 전에는 ' +
      '안농이 전혀 출현하지 않는다.',
    steps: [
      '유적 곳곳의 벽화 퍼즐을 맞춰 비밀의 방을 연다.',
      '열린 방 아래로 내려가면 안농이 야생으로 출현하기 시작한다.',
      '방을 더 열수록 만날 수 있는 글자의 종류가 늘어난다.',
    ],
  },
  {
    title: '신수유적 (신오)',
    games: '다이아몬드·펄 / 플래티넘 / 브릴리언트다이아몬드·샤이닝펄',
    levels: 'Lv.20~30',
    body:
      '봉신마을 옆에 있는 지하 미로형 유적. 알프의 유적과 달리 별도의 퍼즐 없이 진입만 하면 ' +
      '안농이 출현하며, 미로 안쪽 구역으로 깊이 들어갈수록 만날 수 있는 글자가 달라진다. ' +
      '28종을 한 게임 안에서 모으기에 가장 수월한 곳이다.',
  },
  {
    title: '아스카나의 석실 (관동 일곱섬)',
    games: '파이어레드·리프그린',
    body:
      '일곱섬에 있는 석실 유적으로, 3세대에서 안농을 직접 잡을 수 있는 유일한 장소다. ' +
      '루비·사파이어·에메랄드에는 안농이 야생으로 나오지 않아 교환으로만 얻을 수 있었다.',
  },
  {
    title: '환상동굴 (호연)',
    games: '오메가루비·알파사파이어',
    body:
      '107번수로 남쪽에 나타나는 환상의 장소 중 하나. 출현하는 날에만 진입할 수 있어 ' +
      '접근성이 낮은 편이다.',
  },
  {
    title: '히스이 지방 각지',
    games: '레전드 아르세우스',
    body:
      '풀숲을 도는 야생 포켓몬이 아니라, 지형지물 위나 구석에 한 마리씩 놓인 수집 요소로 바뀌었다. ' +
      '28종이 지방 전역에 흩어져 배치돼 있어 유적 한 곳을 도는 방식이 아니라 지도를 훑어야 한다.',
  },
]

/** 도감 수치 외 종 정보. PokeAPI pokemon-species/201 기준. */
export const UNOWN_SPECIES_FACTS = [
  { label: '분류', value: '심볼 포켓몬' },
  { label: '타입', value: '에스퍼' },
  { label: '특성', value: '부유 (땅타입 기술을 받지 않는다)' },
  { label: '성별', value: '무성별' },
  { label: '알그룹', value: '미발견 (교배 불가)' },
  { label: '포획률', value: '225 / 255 — 매우 높음' },
  { label: '진화', value: '진화하지 않음' },
]

/** 하트골드·소울실버에서 ! 와 ? 를 얻기 위한 조건. */
export const UNOWN_SPECIAL_FORMS_STEPS = [
  '알프의 유적에서 A~Z 26종을 모두 포획한다.',
  '유적 내부의 비밀의 방 4곳을 모두 개방한다.',
  '각 비밀의 방으로 내려가 벽면의 메시지를 모두 확인한다.',
  '조건을 모두 채우면 유적에서 ! 와 ? 형태의 안농을 만날 수 있다.',
]

export const UNOWN_FAQ: { q: string; a: string }[] = [
  {
    q: '형태가 다르면 능력도 다른가?',
    a:
      '아니다. 28종 모두 종족값·타입·특성이 완전히 같다. 겉모습(글자)만 다르며, 성능 차이는 전혀 없다. ' +
      '도감에도 한 종류로만 기록된다.',
  },
  {
    q: '어떤 형태가 나올지 정해져 있나?',
    a:
      '장소에 따라 나올 수 있는 글자 묶음이 정해져 있고, 그 안에서 무작위로 결정된다. ' +
      '따라서 특정 글자를 노린다면 그 글자가 나오는 구역에서 반복해서 조우해야 한다.',
  },
  {
    q: '진화하나?',
    a: '진화하지 않는다. 진화 전 단계도, 진화 후 단계도 없다.',
  },
  {
    q: '알을 낳을 수 있나?',
    a:
      '없다. 안농은 무성별이며 미발견 알그룹이라 교배 자체가 불가능하다. ' +
      '28종을 모으려면 예외 없이 야생에서 직접 잡아야 한다.',
  },
  {
    q: '잡기 어려운가?',
    a:
      '포획률이 225로 최대치(255)에 가깝다. 몬스터볼로도 쉽게 잡히므로 볼 소모를 걱정할 필요는 없다. ' +
      '어려운 것은 포획이 아니라 원하는 글자가 나올 때까지 반복하는 과정이다.',
  },
]
