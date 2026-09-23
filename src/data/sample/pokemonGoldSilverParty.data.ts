// 포켓몬스터 금·은(2세대 원작) 최적화 스토리 파티 공략 데이터.
// 원문: Obsidian Vault/포켓몬/금은공략.md
//
// 통신교환이 가능한 환경(에뮬레이터 2대 등)을 전제로 6마리를 고정하고,
// 금·은의 비전머신 7개를 그 6마리 안에서 모두 처리하는 구성이다.
// 레벨업 기술·HM 호환은 by-id 학습셋(골드·실버)으로, 입수처·가격은 Bulbapedia 로 확인했다.

export interface PartyMember {
  pokemonId: number
  pokemon: string
  role: string
  strength: string
  hm: string
}

export const GSP_PARTY: PartyMember[] = [
  { pokemonId: 157, pokemon: '블레이범', role: '불꽃 특수 딜러', strength: '특공 109·스피드 100. 2세대 불꽃은 전부 특수라 특공을 그대로 쓴다', hm: 'HM01 풀베기' },
  { pokemonId: 181, pokemon: '전룡', role: '전기 특수 딜러 · 마비 지원', strength: '번개펀치가 특수. 전기자석파로 포획과 강적전을 받친다', hm: 'HM05 플래시' },
  { pokemonId: 55, pokemon: '골덕', role: '물·얼음 딜러 + 수상 HM 전담', strength: '특공 95. 파도타기·폭포오르기·냉동펀치가 전부 특수', hm: 'HM03 파도타기 · HM06 바다회오리 · HM07 폭포오르기' },
  { pokemonId: 65, pokemon: '후딘', role: '초고속 특수 에이스', strength: '특공 135·스피드 120. 3색 펀치가 전부 특수라 커버리지가 넓다', hm: '없음' },
  { pokemonId: 22, pokemon: '깨비드릴조', role: '물리 비행 딜러 + 이동', strength: '비행이 물리 판정이라 공격을 자속으로 쓴다', hm: 'HM02 공중날기' },
  { pokemonId: 68, pokemon: '괴력몬', role: '물리 격투 에이스', strength: '공격 130. 크로스촙·지진·괴력을 전부 물리로 쓴다', hm: 'HM04 괴력' },
]

/** 2세대는 기술이 아니라 타입으로 물리·특수가 갈린다 */
export const GSP_PHYSICAL_TYPES = ['노말', '격투', '비행', '독', '땅', '바위', '벌레', '고스트', '강철']
export const GSP_SPECIAL_TYPES = ['불꽃', '물', '풀', '전기', '에스퍼', '얼음', '드래곤', '악']

export const GSP_SPLIT_EXAMPLES: { move: string; type: string; category: string; note: string }[] = [
  { move: '번개펀치', type: '전기', category: '특수', note: '블레이범·후딘이 높은 특공으로 쓴다' },
  { move: '냉동펀치', type: '얼음', category: '특수', note: '후딘·골덕의 주력 견제기' },
  { move: '불꽃펀치', type: '불꽃', category: '특수', note: '블레이범의 중반 주력기' },
  { move: '섀도볼', type: '고스트', category: '물리', note: '특공이 높은 쪽(후딘·팬텀)이 쓰기에는 안 맞는다' },
  { move: '물기', type: '악', category: '특수', note: '공격이 높은 갸라도스에게는 비효율' },
  { move: '폭포오르기', type: '물', category: '특수', note: '하트골드의 물리 갸라도스처럼 쓸 수 없다' },
]

/** 금·은에 아예 없는 4세대 요소 */
export const GSP_MISSING_SYSTEMS: { system: string; detail: string }[] = [
  { system: '특성', detail: '팬텀의 부유, 전룡의 정전기, 헤라크로스의 근성, 마릴리의 천하장사가 전부 없다' },
  { system: '성격', detail: '고집·명랑 같은 보정이 없다. 성격을 노린 리세마라가 필요 없다' },
  { system: '물리·특수 분리', detail: '같은 타입이면 전부 같은 공격 스탯을 쓴다. 4세대 감각으로 기술을 짜면 손해다' },
]

export interface HmRow {
  code: string
  move: string
  where: string
  badge: string
  owner: string
  need: string
}

export const GSP_HM_TABLE: HmRow[] = [
  { code: 'HM01', move: '풀베기', where: '너도밤나무숲', badge: '곤충배지', owner: '블레이범', need: '필수' },
  { code: 'HM02', move: '공중날기', where: '진청시티, 사도를 이긴 뒤 아내에게', badge: '쇼크배지', owner: '깨비드릴조', need: '사실상 필수' },
  { code: 'HM03', move: '파도타기', where: '인주시티 무용수 이벤트', badge: '팬텀배지', owner: '골덕', need: '필수' },
  { code: 'HM04', move: '괴력', where: '담청시티', badge: '레귤러배지', owner: '괴력몬', need: '필수' },
  { code: 'HM05', move: '플래시', where: '모다피탑', badge: '윙배지', owner: '전룡', need: '선택 · 탐색용' },
  { code: 'HM06', move: '바다회오리', where: '황토마을 로켓단 아지트', badge: '아이스배지', owner: '골덕', need: '선택 · 루기아 탐색' },
  { code: 'HM07', move: '폭포오르기', where: '얼음샛길', badge: '라이징배지', owner: '골덕', need: '사천왕 진입 필수' },
]

/** 폭포오르기가 실제로 필요한 곳 */
export const GSP_WATERFALL_SPOTS: { place: string; why: string; required: boolean }[] = [
  { place: '동성폭포', why: '8배지 후 연두마을 동쪽 → 27번도로 → 동성폭포 → 26번도로 → 챔피언로드. 올라갈 때만 필요하고 내려갈 때는 필요 없다', required: true },
  { place: '절구산', why: '깊은 구역 탐색과 태권왕 이벤트, 배루키 입수', required: false },
  { place: '소용돌이섬', why: '루기아를 만나려면 필요. 파도타기·바다회오리도 함께 쓴다', required: false },
  { place: '은빛산 동굴', why: '일부 방의 아이템 회수용. 레드에게 가는 길 자체에는 필요 없다', required: false },
]

export interface TimelineStep {
  step: string
  where: string
  what: string
  note: string
}

export const GSP_TIMELINE: TimelineStep[] = [
  { step: '1', where: '무궁시티', what: '브케인 선택', note: '끝까지 고정. 최종 블레이범' },
  { step: '2', where: '32번도로', what: '메리프 포획 · 낡은낚싯대로 발챙이 확보', note: '발챙이는 임시 수상 요원이다. 파도타기를 받아 골덕을 잡을 때까지만 쓴다' },
  { step: '3', where: '모다피탑', what: 'HM05 플래시 → 전룡 계열', note: '비상을 이겨 윙배지를 받은 뒤 필드에서 쓸 수 있다' },
  { step: '4', where: '너도밤나무숲', what: 'HM01 풀베기 → 마그케인', note: '파오리 몰이 이벤트 보상' },
  { step: '5', where: '금빛시티', what: '게임코너 캐이시(200코인) · 34번도로 슬리프 포획 후 백화점 5층에서 알통몬 MUSCLE 교환 · 3색 펀치 구매', note: '파티가 여기서 거의 완성된다' },
  { step: '6', where: '35번도로 게이트', what: 'Lv.10 깨비참 Kenya 받기', note: '교환이 아니라 배달 부탁이다. OT가 경비원이라 교환 경험치 보너스가 붙는다' },
  { step: '7', where: '인주시티', what: '유빈 격파 후 무용수 이벤트로 HM03 파도타기', note: '발챙이에게 파도타기를 넣어 필드용으로 쓴다' },
  { step: '8', where: '35번도로·너도밤나무숲 수역', what: '골덕 포획 후 발챙이 은퇴', note: '이 시점에 최종 6마리가 확정된다' },
  { step: '9', where: '담청시티 → 진청시티', what: 'HM04 괴력 → 괴력몬, 사도 격파 후 HM02 공중날기 → 깨비드릴조', note: '이동 편의가 크게 오른다' },
  { step: '10', where: '황토마을 로켓단 아지트', what: 'HM06 바다회오리 → 골덕', note: 'TM46 도둑질도 함께 나온다' },
  { step: '11', where: '얼음샛길', what: 'HM07 폭포오르기 → 골덕', note: '골덕의 기술 4칸이 여기서 완성된다' },
  { step: '12', where: '챔피언로드', what: 'TM26 지진 → 괴력몬', note: '이 파티에서 가장 중요한 TM' },
]

export interface MoveSetSection {
  pokemonId: number
  pokemon: string
  levelUp: { level: string; move: string }[]
  moveTable: { move: string; how: string; usage: string }[]
  note: string
}

export const GSP_MOVESETS: MoveSetSection[] = [
  {
    pokemonId: 157,
    pokemon: '블레이범',
    levelUp: [
      { level: 'Lv.12', move: '불꽃세례' },
      { level: 'Lv.31', move: '화염바퀴' },
      { level: 'Lv.45', move: '스피드스타' },
      { level: 'Lv.60', move: '화염방사' },
    ],
    moveTable: [
      { move: '화염방사', how: 'Lv.60', usage: '자속 불꽃 특수기. 60은 너무 늦어 그전까지는 불꽃펀치로 버틴다' },
      { move: '번개펀치', how: 'TM41', usage: '2세대 전기는 특수. 물 타입을 특공으로 직접 견제한다' },
      { move: '연막', how: 'Lv.6', usage: '명중률을 깎아 강적전을 안정화한다. 자유 슬롯으로 바꿔도 된다' },
      { move: '풀베기', how: 'HM01', usage: '필드 전용. 파티에서 기술칸 부담이 가장 적다' },
    ],
    note: '지진은 주지 않는다. 2세대 땅은 물리이고 블레이범 공격은 84라, 공격 130인 괴력몬이 훨씬 잘 쓴다.',
  },
  {
    pokemonId: 181,
    pokemon: '전룡',
    levelUp: [
      { level: 'Lv.18', move: '전기자석파' },
      { level: 'Lv.30', move: '번개펀치' },
      { level: 'Lv.42', move: '빛의장막' },
      { level: 'Lv.57', move: '번개' },
    ],
    moveTable: [
      { move: '번개펀치', how: 'Lv.30', usage: '자력으로 배우므로 TM41을 쓸 필요가 없다. 번개보다 명중이 안정적' },
      { move: '전기자석파', how: 'Lv.18', usage: '마비로 포획과 강적전을 받친다' },
      { move: '빛의장막', how: 'Lv.42', usage: '특수 딜러가 많은 사천왕전에서 유용' },
      { move: '플래시', how: 'HM05', usage: '필드 전용' },
    ],
    note: '번개는 위력이 높지만 명중 70이다. 스토리에서는 번개펀치 쪽이 편하다.',
  },
  {
    pokemonId: 55,
    pokemon: '골덕',
    levelUp: [
      { level: 'Lv.16', move: '염동력' },
      { level: 'Lv.31', move: '자기암시' },
      { level: 'Lv.44', move: '마구할퀴기' },
    ],
    moveTable: [
      { move: '파도타기', how: 'HM03', usage: '자속 물 특수기. HM이지만 주력기다' },
      { move: '냉동펀치', how: 'TM33', usage: '목호의 망나뇽이 얼음 4배. 이 파티가 목호에게 강한 이유' },
      { move: '바다회오리', how: 'HM06', usage: '필드 전용' },
      { move: '폭포오르기', how: 'HM07', usage: '필드 전용이지만 물 특수기라 급할 때 공격도 된다' },
    ],
    note: '라프라스는 2세대에서 폭포오르기를 못 배운다. 6마리 고정으로 HM 7개를 내장하려면 골덕이 훨씬 편하다.',
  },
  {
    pokemonId: 65,
    pokemon: '후딘',
    levelUp: [
      { level: 'Lv.16', move: '염동력' },
      { level: 'Lv.21', move: '환상빔' },
      { level: 'Lv.26', move: 'HP회복' },
      { level: 'Lv.38', move: '사이코키네시스' },
    ],
    moveTable: [
      { move: '사이코키네시스', how: 'Lv.38', usage: '자속 주력기. 독수·시바를 혼자 정리한다' },
      { move: '냉동펀치', how: 'TM33', usage: '목호의 망나뇽 백업' },
      { move: '번개펀치', how: 'TM41', usage: '일목의 야도란·네이티오와 물 타입 처리' },
      { move: 'HP회복', how: 'Lv.26', usage: '내구가 낮은 후딘을 계속 굴리는 핵심' },
    ],
    note: '섀도볼은 주지 않는다. 2세대 고스트는 물리라 후딘의 낮은 공격을 쓴다.',
  },
  {
    pokemonId: 22,
    pokemon: '깨비드릴조',
    levelUp: [
      { level: 'Lv.26', move: '따라가때리기' },
      { level: 'Lv.40', move: '회전부리' },
    ],
    moveTable: [
      { move: '회전부리', how: 'Lv.40', usage: '자속 비행 물리기' },
      { move: '공중날기', how: 'HM02', usage: '필드 이동과 비행 물리 공격 겸용' },
      { move: '은혜갚기', how: 'TM27', usage: '친밀도가 높으면 위력이 크게 오른다. 일반전 주력기' },
      { move: '강철날개', how: 'TM47', usage: '바위·얼음 견제. 자유 슬롯으로 바꿔도 된다' },
    ],
    note: '깨비참은 Lv.37에 회전부리를 배우지만 깨비드릴조는 Lv.40이다. 조금이라도 빨리 쓰고 싶으면 Lv.37까지 미루고 진화시킨다.',
  },
  {
    pokemonId: 68,
    pokemon: '괴력몬',
    levelUp: [
      { level: 'Lv.25', move: '꿰뚫어보기' },
      { level: 'Lv.34', move: '받아던지기' },
      { level: 'Lv.43', move: '크로스촙' },
    ],
    moveTable: [
      { move: '크로스촙', how: 'Lv.43', usage: '위력은 높지만 명중 80. 급소율이 높다' },
      { move: '받아던지기', how: 'Lv.34', usage: '반드시 맞는다. 크로스촙이 빗나갈 때의 보험' },
      { move: '지진', how: 'TM26', usage: '챔피언로드에서 얻어 최우선 배정. 관동 마티스와 레드 피카츄 대응' },
      { move: '괴력', how: 'HM04', usage: '필드 전용이면서 노말 물리기로도 쓸 만하다' },
    ],
    note: '알통몬은 금빛시티 백화점 5층에서 슬리프와 교환해 받는다. 교환 포켓몬이라 경험치가 빠르게 오른다.',
  },
]

export interface TmRow {
  code: string
  move: string
  where: string
  to: string
  note: string
}

export const GSP_TMS: TmRow[] = [
  { code: 'TM48', move: '불꽃펀치', where: '금빛시티 백화점 5층 · 3,000원', to: '블레이범', note: '화염방사가 Lv.60이라 중반 주력기로 쓴다' },
  { code: 'TM41', move: '번개펀치', where: '금빛시티 백화점 5층 · 3,000원', to: '블레이범 · 후딘', note: '전룡은 Lv.30에 자력으로 배우니 TM을 쓰지 않는다' },
  { code: 'TM33', move: '냉동펀치', where: '금빛시티 백화점 5층 · 3,000원', to: '골덕 · 후딘', note: '목호 대비로 두 마리 모두 배워도 된다. 반복 구매가 가능하다' },
  { code: 'TM26', move: '지진', where: '챔피언로드', to: '괴력몬', note: '이 파티의 최우선 TM' },
  { code: 'TM27', move: '은혜갚기', where: '금빛시티 백화점 5층 · 일요일, 선두 포켓몬의 친밀도가 높을 때', to: '깨비드릴조', note: '친밀도가 낮으면 대신 TM21 화풀이를 준다' },
  { code: 'TM47', move: '강철날개', where: '28번도로 유명인의 집(풀베기 필요) · 바위터널', to: '깨비드릴조', note: '후반 자유 슬롯용' },
  { code: 'TM29', move: '사이코키네시스', where: '관동 노랑시티', to: '보류', note: '후딘은 Lv.38에 자력으로 배운다. 다른 포켓몬용으로 남겨도 된다' },
  { code: 'TM30', move: '섀도볼', where: '유빈 격파 보상', to: '쓰지 않음', note: '2세대 고스트는 물리다. 후딘에게 주면 손해' },
  { code: 'TM46', move: '도둑질', where: '황토마을 로켓단 아지트', to: '임시', note: '악은 특수라 후딘이 쓸 수 있지만 위력이 낮아 최종 기술로는 약하다' },
  { code: 'TM38', move: '불대문자', where: '금빛시티 게임코너 · 5,500코인', to: '선택', note: '불꽃펀치로도 스토리는 충분하다' },
]

export interface GymRow {
  order: string
  leader: string
  city: string
  roster: { pokemonId: number; pokemon: string; level: number }[]
  counter: string
  reward: string
}

export const GSP_GYMS: GymRow[] = [
  {
    order: '1',
    leader: '비상',
    city: '도라지시티',
    roster: [
      { pokemonId: 16, pokemon: '구구', level: 7 },
      { pokemonId: 17, pokemon: '피죤', level: 9 },
    ],
    counter: '브케인만 제대로 키워도 충분하다. 메리프를 먼저 잡았다면 전기로 더 편하다',
    reward: '윙배지 · TM31 진흙뿌리기 · 플래시 필드 사용',
  },
  {
    order: '2',
    leader: '호일',
    city: '고동마을',
    roster: [
      { pokemonId: 11, pokemon: '단데기', level: 14 },
      { pokemonId: 14, pokemon: '딱충이', level: 14 },
      { pokemonId: 123, pokemon: '스라크', level: 16 },
    ],
    counter: '브케인 계열의 불꽃 공격. 스라크가 귀찮으니 빠르게 정리한다',
    reward: '곤충배지 · TM49 연속자르기',
  },
  {
    order: '3',
    leader: '꼭두',
    city: '금빛시티',
    roster: [
      { pokemonId: 35, pokemon: '삐삐', level: 18 },
      { pokemonId: 241, pokemon: '밀탱크', level: 20 },
    ],
    counter: '교환으로 받은 알통몬의 격투 공격. 전룡의 전기자석파로 마비를 걸면 더 안전하다',
    reward: '레귤러배지 · TM45 헤롱헤롱 · 괴력 필드 사용',
  },
  {
    order: '4',
    leader: '유빈',
    city: '인주시티',
    roster: [
      { pokemonId: 92, pokemon: '고오스', level: 21 },
      { pokemonId: 93, pokemon: '고우스트', level: 21 },
      { pokemonId: 93, pokemon: '고우스트', level: 23 },
      { pokemonId: 94, pokemon: '팬텀', level: 25 },
    ],
    counter: '고스트가 독 타입을 겸해 후딘의 에스퍼가 크게 들어간다. 사실상 하드카운터',
    reward: '팬텀배지 · TM30 섀도볼 · 파도타기 필드 사용',
  },
  {
    order: '5',
    leader: '사도',
    city: '진청시티',
    roster: [
      { pokemonId: 57, pokemon: '성원숭', level: 27 },
      { pokemonId: 62, pokemon: '강챙이', level: 30 },
    ],
    counter: '후딘의 에스퍼, 깨비드릴조의 비행. 강챙이는 물·격투라 둘 다 약점이다',
    reward: '쇼크배지 · 아내에게 HM02 공중날기',
  },
  {
    order: '6',
    leader: '규리',
    city: '담청시티',
    roster: [
      { pokemonId: 81, pokemon: '코일', level: 30 },
      { pokemonId: 81, pokemon: '코일', level: 30 },
      { pokemonId: 208, pokemon: '강철톤', level: 35 },
    ],
    counter: '블레이범으로 코일을 정리하고, 방어가 높은 강철톤은 골덕의 파도타기로 특수 공략',
    reward: '스틸배지 · TM23 아이언테일',
  },
  {
    order: '7',
    leader: '류옹',
    city: '황토마을',
    roster: [
      { pokemonId: 86, pokemon: '쥬쥬', level: 27 },
      { pokemonId: 87, pokemon: '쥬레곤', level: 29 },
      { pokemonId: 221, pokemon: '메꾸리', level: 31 },
    ],
    counter: '쥬쥬·쥬레곤은 전룡, 메꾸리는 골덕의 파도타기나 블레이범의 불꽃',
    reward: '아이스배지 · TM16 얼어붙은바람 · 바다회오리 필드 사용',
  },
  {
    order: '8',
    leader: '이향',
    city: '검은먹시티',
    roster: [
      { pokemonId: 148, pokemon: '신뇽', level: 37 },
      { pokemonId: 148, pokemon: '신뇽', level: 37 },
      { pokemonId: 148, pokemon: '신뇽', level: 37 },
      { pokemonId: 230, pokemon: '킹드라', level: 40 },
    ],
    counter: '신뇽은 냉동펀치. 킹드라는 물·드래곤이라 전기가 상쇄되니 화력으로 밀어낸다',
    reward: '용의굴 이벤트 후 라이징배지 · 폭포오르기 필드 사용',
  },
]

export const GSP_ELITE: GymRow[] = [
  {
    order: '사천왕 1',
    leader: '일목',
    city: '석영고원',
    roster: [
      { pokemonId: 178, pokemon: '네이티오', level: 40 },
      { pokemonId: 124, pokemon: '루주라', level: 41 },
      { pokemonId: 103, pokemon: '나시', level: 41 },
      { pokemonId: 80, pokemon: '야도란', level: 41 },
      { pokemonId: 178, pokemon: '네이티오', level: 42 },
    ],
    counter: '네이티오·야도란은 전룡의 번개펀치, 루주라와 나시는 블레이범의 불꽃. 후딘끼리 에스퍼를 주고받는 전개는 피한다',
    reward: '—',
  },
  {
    order: '사천왕 2',
    leader: '독수',
    city: '석영고원',
    roster: [
      { pokemonId: 168, pokemon: '아리아도스', level: 40 },
      { pokemonId: 49, pokemon: '도나리', level: 41 },
      { pokemonId: 89, pokemon: '질뻐기', level: 42 },
      { pokemonId: 205, pokemon: '쏘콘', level: 43 },
      { pokemonId: 169, pokemon: '크로뱃', level: 44 },
    ],
    counter: '독 타입이 줄줄이라 후딘의 사이코키네시스가 핵심. 쏘콘은 벌레·강철이라 블레이범이 맡는다',
    reward: '—',
  },
  {
    order: '사천왕 3',
    leader: '시바',
    city: '석영고원',
    roster: [
      { pokemonId: 237, pokemon: '카포에라', level: 42 },
      { pokemonId: 106, pokemon: '시라소몬', level: 42 },
      { pokemonId: 107, pokemon: '홍수몬', level: 42 },
      { pokemonId: 95, pokemon: '롱스톤', level: 43 },
      { pokemonId: 68, pokemon: '괴력몬', level: 46 },
    ],
    counter: '격투는 후딘의 사이코키네시스와 깨비드릴조의 회전부리, 롱스톤은 골덕의 파도타기',
    reward: '—',
  },
  {
    order: '사천왕 4',
    leader: '카렌',
    city: '석영고원',
    roster: [
      { pokemonId: 197, pokemon: '블래키', level: 42 },
      { pokemonId: 45, pokemon: '라플레시아', level: 42 },
      { pokemonId: 198, pokemon: '니로우', level: 44 },
      { pokemonId: 94, pokemon: '팬텀', level: 45 },
      { pokemonId: 229, pokemon: '헬가', level: 47 },
    ],
    counter: '블래키는 괴력몬의 격투, 라플레시아는 블레이범, 팬텀은 후딘, 니로우는 전룡',
    reward: '—',
  },
  {
    order: '챔피언',
    leader: '목호',
    city: '석영고원',
    roster: [
      { pokemonId: 130, pokemon: '갸라도스', level: 44 },
      { pokemonId: 142, pokemon: '프테라', level: 46 },
      { pokemonId: 6, pokemon: '리자몽', level: 46 },
      { pokemonId: 149, pokemon: '망나뇽', level: 47 },
      { pokemonId: 149, pokemon: '망나뇽', level: 47 },
      { pokemonId: 149, pokemon: '망나뇽', level: 50 },
    ],
    counter: '갸라도스는 전룡의 번개펀치, 망나뇽 3마리는 골덕·후딘의 냉동펀치(드래곤·비행이라 얼음 4배), 프테라와 리자몽은 골덕의 파도타기',
    reward: '명예의 전당 · 공박사에게 승선권',
  },
]

export const GSP_RED: { pokemonId: number; pokemon: string; level: number; counter: string }[] = [
  { pokemonId: 25, pokemon: '피카츄', level: 81, counter: '괴력몬의 지진. 전기를 무효로 흘리고 약점을 찌른다' },
  { pokemonId: 196, pokemon: '에브이', level: 73, counter: '특수방어는 높지만 방어가 낮다. 깨비드릴조의 은혜갚기나 괴력몬의 물리 공격' },
  { pokemonId: 143, pokemon: '잠만보', level: 75, counter: '괴력몬의 크로스촙. 잠자기·망각술로 장기전이 되기 전에 압박한다' },
  { pokemonId: 3, pokemon: '이상해꽃', level: 77, counter: '블레이범의 화염방사, 깨비드릴조의 회전부리' },
  { pokemonId: 6, pokemon: '리자몽', level: 77, counter: '골덕의 파도타기, 전룡의 번개펀치' },
  { pokemonId: 9, pokemon: '거북왕', level: 77, counter: '전룡의 번개펀치' },
]

/** 금·은 버전 차이 (국제판 기준) */
export const GSP_VERSION_EXCLUSIVE: { gold: string; silver: string }[] = [
  { gold: '망키 · 성원숭', silver: '식스테일 · 나인테일' },
  { gold: '가디 · 윈디', silver: '나옹 · 페르시온' },
  { gold: '페이검 · 아리아도스', silver: '레디바 · 레디안' },
  { gold: '글라이거', silver: '딜리버드' },
  { gold: '깜지곰 · 링곰', silver: '무장조' },
  { gold: '만타인', silver: '코코리 · 코리갑' },
]

export const GSP_LEGENDARY: { version: string; first: string; later: string }[] = [
  { version: '금', first: '칠색조 Lv.40', later: '루기아 Lv.70' },
  { version: '은', first: '루기아 Lv.40', later: '칠색조 Lv.70' },
]

export const GSP_HGSS_COMPARE: { topic: string; gs: string; hgss: string }[] = [
  { topic: '물리·특수', gs: '타입으로 고정', hgss: '기술마다 따로' },
  { topic: '특성·성격', gs: '없음', hgss: '있음' },
  { topic: 'HM05 / HM06', gs: '플래시 / 바다회오리', hgss: '바다회오리 / 바위깨기' },
  { topic: '관장 재대결', gs: '없음', hgss: '16명 재대결 가능' },
  { topic: '레드 피카츄', gs: 'Lv.81', hgss: 'Lv.88' },
  { topic: '포켓몬 동행', gs: '없음', hgss: '모든 포켓몬 가능' },
]

/** 같은 포켓몬인데 두 작품에서 평가가 갈리는 사례 */
export const GSP_REEVALUATED: { pokemonId: number; pokemon: string; gs: string; hgss: string }[] = [
  { pokemonId: 130, pokemon: '갸라도스', gs: '공격이 높은데 파도타기·폭포오르기·물기가 전부 특수라 자속을 살리기 어렵다', hgss: '폭포오르기·물기·얼음엄니가 물리가 되어 공격을 그대로 쓴다' },
  { pokemonId: 65, pokemon: '후딘', gs: '3색 펀치가 전부 특수. 특공 135로 쏟아붓는 스토리 최강급', hgss: '세 펀치가 물리로 바뀌어 후딘에게는 사실상 쓸 수 없다' },
  { pokemonId: 55, pokemon: '골덕', gs: '파도타기·폭포오르기·냉동펀치가 전부 특수라 HM 전담과 화력을 겸한다', hgss: '폭포오르기·냉동펀치가 물리라 같은 구성을 복사하면 손해' },
  { pokemonId: 214, pokemon: '헤라크로스', gs: '공격이 높지만 쓸 만한 자속 격투기를 늦게 얻는다', hgss: '깨트리다·인파이트가 추가돼 스토리 에이스로 쓰기 좋다' },
]

export const GSP_TIPS: { title: string; body: string }[] = [
  {
    title: '교환진화는 두 번만 쓴다',
    body: '윤겔라 → 후딘, 근육몬 → 괴력몬. 교환하면 즉시 진화하고 원래 세이브로 되돌려 받으면 된다. 에뮬레이터 통신 전에는 세이브 파일을 백업해 둔다.',
  },
  {
    title: 'Kenya는 배달용 포켓몬을 한 마리 잡아먹는다',
    body: '2세대에서는 편지를 다른 포켓몬에게 옮겨 배달하면 그 포켓몬을 친구가 가져간다(4세대는 돌려준다). 버려도 되는 포켓몬을 준비하거나, Kenya를 그대로 키운 뒤 배달하고 TM50 악몽만 받는다.',
  },
  {
    title: '발챙이는 계획된 임시 멤버다',
    body: 'PC에서 HM 요원을 넣었다 뺐다 하는 대신, 파도타기를 받을 때까지 3번 자리에 데리고 다니다가 골덕에게 자리를 넘긴다.',
  },
  {
    title: '레벨 노가다는 사천왕 반복이 거의 전부',
    body: '원작에는 관장 재대결이 없다. 관동 야생 레벨도 낮아 레드(Lv.73~81)를 앞두면 사천왕 반복, 전화 재대결 트레이너, 은빛산 야생에 의존하게 된다.',
  },
]

export const GSP_KANTO_ORDER: string[] = [
  '쾌속선으로 담청항 → 관동 갈색시티',
  '마티스 격파',
  '발전소 사건 해결 → 라디오 기능 복구',
  '잠만보를 깨우고 디그다 동굴 통과',
  '남은 관동 관장 격파 (7개 배지)',
  '그린 격파 → 16배지 완성',
  '오박사에게 은빛산 입장 허가 → 레드',
]

export const GSP_KANTO_GYMS: { leader: string; type: string; plan: string }[] = [
  { leader: '마티스', type: '전기', plan: '괴력몬의 지진' },
  { leader: '초련', type: '에스퍼', plan: '깨비드릴조의 은혜갚기, 괴력몬의 물리 공격. 에스퍼는 대체로 물리 방어가 낮다' },
  { leader: '민화', type: '풀', plan: '블레이범, 깨비드릴조' },
  { leader: '도희', type: '독', plan: '후딘의 사이코키네시스' },
  { leader: '이슬', type: '물', plan: '전룡. 누오처럼 전기가 통하지 않는 상대는 골덕·후딘의 중립 공격' },
  { leader: '웅', type: '바위', plan: '골덕의 파도타기, 괴력몬의 격투' },
  { leader: '강연', type: '불꽃', plan: '골덕의 파도타기로 거의 전담' },
  { leader: '그린', type: '혼합', plan: '한 마리로 밀지 말고 상성에 맞춰 교체한다' },
]
