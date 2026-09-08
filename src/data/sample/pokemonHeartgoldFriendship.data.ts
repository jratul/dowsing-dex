// 하트골드·소울실버 친밀도 시스템 공략 데이터.
//
// 원문: 옵시디언 볼트 「하트골드_친밀도_시스템_종합_가이드.md」
// 출처: Bulbapedia (Friendship / Friendship Evolution / Haircut brothers / Return / Frustration),
//       Serebii (Daisy Oak's Beauty Massage)
//
// 친밀도는 화면에 숫자로 안 나오는 0~255의 내부 수치다. 그래서 "체감"으로 쓰면 틀리기
// 쉬운 주제라, 구간별 증가량을 표로 고정해 두고 계산 결과를 함께 적었다.

/** 친밀도 구간. 같은 행동도 현재 수치가 높을수록 덜 오른다. */
export type FriendshipBand = '0~99' | '100~199' | '200~255'

export const HGF_BANDS: FriendshipBand[] = ['0~99', '100~199', '200~255']

export interface FriendshipGain {
  action: string
  /** 구간별 증가량. 걷기처럼 확률 판정이면 문자열로 적는다. */
  gains: [string, string, string]
  note?: string
}

/** 친밀도를 올리는 행동과 구간별 증가량. */
export const HGF_GAINS: FriendshipGain[] = [
  { action: '레벨업', gains: ['+5', '+3', '+2'], note: '스토리를 그냥 진행할 때 가장 크게 쌓이는 항목이다.' },
  { action: '친밀도 상승 나무열매', gains: ['+10', '+5', '+2'], note: '한 번에 가장 많이 오르지만 노력치를 실제로 깎는다.' },
  { action: '영양제 · 이상한사탕', gains: ['+5', '+3', '+2'], note: '이상한사탕은 레벨도 올려 진화 판정까지 한 번에 된다.' },
  { action: '관장 · 사천왕 · 챔피언전', gains: ['+3', '+2', '+1'], note: '전투에 안 나간 포켓몬도 파티에 있으면 받는다.' },
  { action: '128걸음 이동', gains: ['50% 확률 +1', '50% 확률 +1', '50% 확률 +1'], note: '파티 전체가 대상. 평균 256걸음당 +1 꼴이다.' },
  { action: '기술머신 · 비전머신 습득', gains: ['+1', '+1', '0'], note: '200 이상에서는 아예 오르지 않는다.' },
  { action: '배틀용 능력 상승 아이템', gains: ['+1', '+1', '0'], note: '플러스파워 등. 효율이 낮아 이걸 노릴 이유는 없다.' },
]

export interface FriendshipLoss {
  cause: string
  amount: string
  note?: string
}

/** 친밀도를 떨어뜨리는 행동. */
export const HGF_LOSSES: FriendshipLoss[] = [
  { cause: '기절 — 상대 레벨이 30 미만 차이', amount: '-1', note: '한두 번으로 육성이 망가지지는 않는다.' },
  { cause: '기절 — 상대 레벨이 30 이상 높음', amount: '-5 ~ -10', note: '친밀도가 높은 구간일수록 더 깎인다.' },
  { cause: '독 상태로 필드를 걷다 HP 1까지 감소', amount: '-5 ~ -10' },
  { cause: '힘의가루 · 만능가루', amount: '-5 / -10' },
  { cause: '힘의뿌리', amount: '-10 / -15' },
  { cause: '부활초', amount: '-15 / -20', note: '★ 감소량이 가장 크다. 친밀도를 올리는 중인 포켓몬에게는 쓰지 않는다.' },
]

/** 상처약·풀회복약 같은 일반 회복 아이템은 친밀도를 깎지 않는다. */
export const HGF_SAFE_ITEMS = ['상처약', '좋은상처약', '고급상처약', '풀회복약', '기력의조각']

export interface FriendshipEvolution {
  fromId: number
  from: string
  toId: number
  to: string
  /** 시간 조건. 없으면 아무 때나 된다. */
  timing?: '낮 04:00~19:59' | '밤 20:00~03:59'
}

/**
 * HGSS의 친밀도 진화 전체.
 * 조건은 공통으로 「친밀도 220 이상 + 레벨업」이다. 220에 닿는 순간 진화하는 게 아니라
 * 그 뒤에 레벨이 한 번 올라야 한다.
 */
export const HGF_EVOLUTIONS: FriendshipEvolution[] = [
  { fromId: 42, from: '골뱃', toId: 169, to: '크로뱃' },
  { fromId: 113, from: '럭키', toId: 242, to: '해피너스' },
  { fromId: 172, from: '피츄', toId: 25, to: '피카츄' },
  { fromId: 173, from: '삐', toId: 35, to: '삐삐' },
  { fromId: 174, from: '푸푸린', toId: 39, to: '푸린' },
  { fromId: 175, from: '토게피', toId: 176, to: '토게틱' },
  { fromId: 298, from: '루리리', toId: 183, to: '마릴' },
  { fromId: 427, from: '이어롤', toId: 428, to: '이어롭' },
  { fromId: 446, from: '먹고자', toId: 143, to: '잠만보' },
  { fromId: 133, from: '이브이', toId: 196, to: '에브이', timing: '낮 04:00~19:59' },
  { fromId: 406, from: '꼬몽울', toId: 315, to: '로젤리아', timing: '낮 04:00~19:59' },
  { fromId: 447, from: '리오르', toId: 448, to: '루카리오', timing: '낮 04:00~19:59' },
  { fromId: 133, from: '이브이', toId: 197, to: '블래키', timing: '밤 20:00~03:59' },
  { fromId: 433, from: '랑딸랑', toId: 358, to: '치렁', timing: '밤 20:00~03:59' },
]

export interface StartingFriendship {
  how: string
  value: string
  note?: string
}

/** 처음 손에 넣었을 때의 친밀도. 출발점이 다르면 걸리는 시간이 크게 달라진다. */
export const HGF_STARTING: StartingFriendship[] = [
  { how: '프렌드볼로 포획', value: '200', note: '220까지 20만 남는다. 야생에서 잡을 수 있는 종이라면 압도적으로 빠르다.' },
  { how: '알에서 부화', value: '120' },
  { how: '일반 포획', value: '대체로 70', note: '종족별 기본값이 따로 있어 70보다 높거나 낮은 종도 있다.' },
  { how: '통신교환으로 받음', value: '종족 기본값으로 재설정', note: '★ 올려 둔 친밀도가 사라진다. 교환은 친밀도 작업 전에 끝낸다.' },
]

export interface FriendshipFacility {
  name: string
  place: string
  when: string
  effect: string
  note?: string
}

/** 친밀도를 올려 주는 시설·NPC. 200 이상 구간에서 특히 값이 크다. */
export const HGF_FACILITIES: FriendshipFacility[] = [
  {
    name: '이발소 — 형',
    place: '금빛시티 지하통로',
    when: '화 · 목 · 토요일, 하루 한 번',
    effect: '+1 / +5 / +10 중 랜덤',
    note: '500원. 동생보다 비싼 대신 많이 오른다.',
  },
  {
    name: '이발소 — 동생',
    place: '금빛시티 지하통로',
    when: '수 · 금 · 일요일, 하루 한 번',
    effect: '+1 / +5 / +10 중 랜덤',
    note: '300원. 월요일은 형제 둘 다 쉰다.',
  },
  {
    name: '그린의 누나에게 손질받기',
    place: '태초마을',
    when: '매일 15:00~16:00, 하루 한 번',
    effect: '+10 고정',
    note: '★ 구간과 무관하게 +10이라 200 이상에서 가장 강력하다. 관동까지 진행해야 쓸 수 있다.',
  },
]

export interface FriendshipItem {
  name: string
  effect: string
  detail: string
}

/** 친밀도 보정 아이템. 둘은 효과가 완전히 다르다. */
export const HGF_ITEMS: FriendshipItem[] = [
  {
    name: '평온의방울',
    effect: '증가량 ×1.5 (소수점 버림)',
    detail:
      '자연공원 울타리 바깥, 동쪽 게이트 근처에서 얻는다. 함정은 걷기다 — 기본 +1에 1.5를 곱해도 버림 때문에 +1 그대로라, 걷기 노가다는 전혀 빨라지지 않는다. 레벨업·영양제·열매처럼 기본 증가량이 2 이상인 행동에서만 값을 한다.',
  },
  {
    name: '프렌드볼',
    effect: '포획 즉시 친밀도 200',
    detail:
      '규토리에게 만들어 받는다. 이후 증가량을 높여 주지는 않는다. 처음 200으로 세팅하는 것이 전부이자 핵심이다.',
  },
  {
    name: '럭셔리볼',
    effect: '친밀도가 오르는 이벤트마다 +1',
    detail:
      '시작값을 올리는 볼이 아니다. 평온의방울과 겹쳐 쓰면 (기본 + 1) × 1.5 순으로 계산돼, 걷기도 (1+1)×1.5 = +3 이 된다. 걷기 노가다가 유일하게 빨라지는 조합이다.',
  },
]

export interface FriendshipRating {
  reaction: string
  range: string
  canEvolve: '가능' | '불가' | '섞임'
}

/** 금빛시티 백화점 근처 집의 NPC가 선두 포켓몬을 보고 하는 평가. */
export const HGF_RATINGS: FriendshipRating[] = [
  { reaction: '최고 수준으로 행복해 보인다', range: '250~255', canEvolve: '가능' },
  { reaction: '매우 신뢰하는 것 같다', range: '200~249', canEvolve: '섞임' },
  { reaction: '친근하고 행복해 보인다', range: '150~199', canEvolve: '불가' },
  { reaction: '꽤 귀엽다', range: '100~149', canEvolve: '불가' },
  { reaction: '아직 익숙하지 않은 것 같다', range: '50~99', canEvolve: '불가' },
  { reaction: '별로 좋아하지 않는 것 같다', range: '0~49', canEvolve: '불가' },
]

export interface MovePowerRow {
  friendship: number
  returnPower: number
  frustrationPower: number
}

/**
 * 은혜갚기 = 친밀도 ÷ 2.5, 화풀이 = (255 - 친밀도) ÷ 2.5. 둘 다 최소 위력 1이다.
 * 친밀도 128을 넘기면 은혜갚기가 더 세진다.
 */
export const HGF_MOVE_POWER: MovePowerRow[] = [
  { friendship: 0, returnPower: 1, frustrationPower: 102 },
  { friendship: 70, returnPower: 28, frustrationPower: 74 },
  { friendship: 128, returnPower: 51, frustrationPower: 50 },
  { friendship: 200, returnPower: 80, frustrationPower: 22 },
  { friendship: 220, returnPower: 88, frustrationPower: 14 },
  { friendship: 255, returnPower: 102, frustrationPower: 1 },
]

/** 친밀도가 최대(255)여야 배울 수 있는 기술. 검은먹시티의 가르침 NPC가 준다. */
export const HGF_TUTOR_MOVES: { move: string; target: string }[] = [
  { move: '용성군', target: '드래곤 타입 포켓몬' },
  { move: '하드플랜트', target: '풀 스타팅 최종진화 (메가니움)' },
  { move: '블라스트번', target: '불꽃 스타팅 최종진화 (블레이범)' },
  { move: '하이드로캐논', target: '물 스타팅 최종진화 (대짱이 계열 등)' },
]

/** 자주 헷갈리는 것들. 아니라고 딱 잘라 말할 수 있는 항목만 모았다. */
export const HGF_MYTHS: { q: string; a: string }[] = [
  {
    q: 'PC에 넣어 두면 친밀도가 떨어지나?',
    a: '아니다. 보관 자체로는 감소하지 않는다.',
  },
  {
    q: '선두로 두고 따라다니게 해야 걷기 친밀도가 오르나?',
    a: '아니다. 128걸음 판정은 파티 전체가 대상이다. 따라걷기 자체에 별도 보너스는 없다.',
  },
  {
    q: '일반 전투에서 이기면 오르나?',
    a: '승리 자체로는 오르지 않는다. 레벨업과 걸음 수가 함께 쌓여 오르는 것처럼 보일 뿐이다. 관장·사천왕전만 별도 보너스가 있다.',
  },
  {
    q: '진화하면 친밀도가 초기화되나?',
    a: '아니다. 진화해도 그대로 이어진다.',
  },
  {
    q: '평온의방울을 끼고 걷기만 하면 1.5배 빨라지나?',
    a: '아니다. +1 × 1.5 = 1.5 라서 버림으로 +1 그대로다. 럭셔리볼 개체가 아니면 걷기는 빨라지지 않는다.',
  },
  {
    q: 'NPC가 "매우 신뢰한다"고 했는데 왜 진화하지 않나?',
    a: '그 평가 범위가 200~249로 넓기 때문이다. 진화선인 220이 이 구간 한가운데에 있어, 205도 225도 같은 대사가 나온다.',
  },
  {
    q: '친밀도가 높으면 공격을 버티거나 회피하나?',
    a: 'HGSS에서는 아니다. HP 1로 버티기·상태이상 자가 회복 같은 것은 후대 세대의 시스템이다.',
  },
]

export interface FriendshipPlan {
  title: string
  steps: string[]
  note?: string
}

/** 목적별 육성 순서. */
export const HGF_PLANS: FriendshipPlan[] = [
  {
    title: '스토리를 하면서 자연스럽게',
    steps: [
      '진화시킬 포켓몬을 파티에 넣는다',
      '평온의방울을 지니게 한다',
      '평소대로 진행한다 — 레벨업이 알아서 쌓인다',
      '금빛시티를 지날 때마다 이발한다 (월요일 제외)',
      '충분해 보이면 원하는 시간대에 레벨을 한 번 올린다',
    ],
    note: '따로 노가다할 필요가 거의 없다. 대부분의 친밀도 진화는 이걸로 끝난다.',
  },
  {
    title: '최대한 빠르게',
    steps: [
      '가능하면 프렌드볼로 잡는다 (시작 200)',
      '안 되면 알에서 부화시킨다 (시작 120)',
      '평온의방울 장착',
      '금빛시티 이발 — 하루 한 번',
      '관동까지 갔다면 그린의 누나 15:00~16:00 (+10)',
      '영양제·친밀도 열매로 밀어 올린다',
      '마지막에 이상한사탕으로 레벨업 — 진화 시간대를 맞추기 쉽다',
    ],
  },
  {
    title: '이미 200을 넘겼을 때',
    steps: [
      '레벨업 +2, 영양제 +2, 열매 +2, 관장전 +1 — 일반 수단의 효율이 뚝 떨어진다',
      '이발소의 +5 / +10 결과를 노린다',
      '그린의 누나 +10 은 구간과 무관하게 고정이라 이 구간에서 가장 값지다',
      '럭셔리볼 개체라면 모든 상승 이벤트에 +1 이 붙어 차이가 커진다',
    ],
  },
]
