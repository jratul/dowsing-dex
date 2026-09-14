// 포켓몬스터 소드 스토리 파티 공략 데이터.
//
// 원문: 옵시디언 볼트 「pokemon_sword_story_party_guide.md」
// 출처: Serebii (Gyms / Champion Cup / TM / TR), 기술·진화·특성은 프로젝트 생성 데이터(소드·실드)
//
// 원문을 프로젝트 데이터와 대조해 바로잡은 것
// - 영문 음역·비공식 지명 두 곳과 기술명 하나를 WORD.md 「가라르지방」·「기술명」 표기로 바꿨다
// - 에이스번·몰드류는 아이언헤드(TR74)를, 스트린더는 오물폭탄(TR22)을, 브리무음은
//   섀도볼(TR33)·악의파동(TR58)을 소드·실드에서 배우지 못한다. 전부 걷어냈다.
// 대조해서 맞았던 것 — 진화 레벨 9개, 기술 습득 레벨·TM 번호 전부, 특성, 체육관 8곳의
// 포켓몬·레벨·순서, 단델 엔트리(염버니 선택 시 마임꽁꽁·인텔리레온, Lv.62~65).

export interface SwordMove {
  move: string
  /** 'Lv.N' · 'TM56' · '진화 시' · '기술 떠올리기' */
  how: string
  usage: string
}

export interface SwordPartyMember {
  pokemonId: number
  pokemon: string
  line: string
  role: string
  catchAt: string
  ability: string
  nature: string
  moveTable: SwordMove[]
}

/** 최종 6마리. 실질적인 종 교체는 멍파치 → 일레즌 한 번뿐이다. */
export const SWS_PARTY: SwordPartyMember[] = [
  {
    pokemonId: 815,
    pokemon: '에이스번',
    line: '염버니 → Lv.16 래비풋 → Lv.35 에이스번',
    role: '고속 물리 에이스',
    catchAt: '스타팅',
    ability: '맹화 (숨겨진 특성 리베로는 스토리에서 신경 쓸 필요 없다)',
    nature: '고집 / 명랑',
    moveTable: [
      { move: '화염볼', how: '진화 시', usage: '위력 120 · 명중 90 자속 물리. 얻은 뒤 다른 불꽃 기술은 정리한다.' },
      { move: '유턴', how: 'TM56', usage: '때리고 교체. 스토리에서도 템포가 좋다.' },
      { move: '로킥', how: 'TM75', usage: '바위·악·노말·강철·얼음 견제.' },
      { move: '박치기', how: 'Lv.30', usage: '범용 물리기. 지닌 물건을 안 쓰면 애크러뱃(TM78)도 좋다.' },
    ],
  },
  {
    pokemonId: 823,
    pokemon: '아머까오',
    line: '파라꼬 → Lv.18 파크로우 → Lv.38 아머까오',
    role: '격투 담당 + 물리 탱커',
    catchAt: '1번도로',
    ability: '프레셔 / 긴장감 (차이 적음, 숨겨진 특성 미러아머)',
    nature: '고집 / 장난꾸러기',
    moveTable: [
      { move: '회전부리', how: 'Lv.34', usage: '반동 없는 비행 자속. 일반 트레이너전에서 편하다.' },
      { move: '강철날개', how: '진화 시', usage: '강철 자속. 페어리·바위·얼음 대응.' },
      { move: '유턴', how: 'TM56', usage: '단단한 몸으로 받고 에이스를 다시 꺼낸다.' },
      { move: '브레이브버드', how: 'Lv.50', usage: '보스전 화력. 반동이 있어 평소엔 회전부리가 편하다.' },
    ],
  },
  {
    pokemonId: 834,
    pokemon: '갈가부기',
    line: '깨물부기 → Lv.22 갈가부기',
    role: '물리 물/바위 딜러',
    catchAt: '2번도로',
    ability: '옹골찬턱 (깨물어부수기·얼음엄니와 시너지)',
    nature: '고집',
    moveTable: [
      { move: '아쿠아브레이크', how: 'Lv.48', usage: '물 자속 주력. 그 전에는 셸블레이드를 쓴다.' },
      { move: '스톤샤워', how: 'TM22', usage: '9번도로에서 입수. 그 전에는 진화 때 배우는 암석봉인.' },
      { move: '깨물어부수기', how: '기술 떠올리기', usage: '진화 직후 포켓몬센터에서 떠올린다. 하트비늘이 필요 없다.' },
      { move: '얼음엄니', how: 'TM67', usage: '너클시티에서 구매. 풀·땅·비행·드래곤 견제.' },
    ],
  },
  {
    pokemonId: 849,
    pokemon: '스트린더',
    line: '일레즌 → Lv.30 스트린더',
    role: '전기/독 특수 에이스',
    catchAt: '5번도로 맡기미집 (Lv.1 선물)',
    ability: '펑크록 — 소리 기술 위력 상승',
    nature: '조심 (일레즌의 성격에 따라 하이한 모습 / 로우한 모습이 갈리지만 스토리 성능 차이는 없다)',
    moveTable: [
      { move: '오버드라이브', how: 'Lv.44', usage: '전기 자속 소리 기술. 펑크록 보정으로 대표기가 된다.' },
      { move: '폭음파', how: 'Lv.48', usage: '위력 140 노말 소리 기술. 자속이 아니어도 펑크록으로 강하다.' },
      { move: '베놈쇼크', how: 'Lv.20', usage: '독 상대에게 위력 2배. 맹독과 짝을 이룬다.' },
      { move: '맹독', how: 'Lv.32', usage: '베놈쇼크 준비. 포획용으로는 볼부비부비(100% 마비)를 남겨도 좋다.' },
    ],
  },
  {
    pokemonId: 530,
    pokemon: '몰드류',
    line: '두더류 → Lv.31 몰드류',
    role: '고화력 물리 딜러 · 전기 무효',
    catchAt: '가라르광산',
    ability: '모래헤치기 / 모래의힘 (금랑전 모래바람에서 도움)',
    nature: '고집 / 명랑',
    moveTable: [
      { move: '지진', how: 'Lv.52', usage: '자력 습득이라 TR을 쓸 필요가 없다. 중반까지는 구멍파기 → 드릴라이너.' },
      { move: '스마트혼', how: 'TM96', usage: '8번도로 입수. 강철 자속 필중기.' },
      { move: '스톤샤워', how: 'Lv.28', usage: '비행·불꽃·얼음·벌레 견제.' },
      { move: '칼춤', how: 'Lv.40', usage: '에이스 상대로 한 번 쌓고 밀어붙인다.' },
    ],
  },
  {
    pokemonId: 858,
    pokemon: '브리무음',
    line: '몸지브림 → Lv.32 손지브림 → Lv.42 브리무음',
    role: '에스퍼/페어리 특수 에이스',
    catchAt: '엔진시티 변두리',
    ability: '특성에 집착할 필요 없음 (숨겨진 특성 매직미러)',
    nature: '조심 / 냉정',
    moveTable: [
      { move: '사이코키네시스', how: 'Lv.46', usage: '에스퍼 자속. 격투·독 처리.' },
      { move: '매지컬샤인', how: 'Lv.30', usage: '페어리 자속. 격투·악·드래곤 대응의 핵심.' },
      { move: '명상', how: 'Lv.37', usage: '느린 대신 보스전에서 쌓고 때린다.' },
      { move: '기가드레인', how: 'TM28', usage: '물·땅·바위 견제 + 회복. 전기자석파(TM14)도 선택지.' },
    ],
  },
]

export interface TimelineStep {
  where: string
  pokemonId: number
  pokemon: string
  action: string
  note: string
}

/** 입수·교체 순서. */
export const SWS_TIMELINE: TimelineStep[] = [
  { where: '스타팅', pokemonId: 813, pokemon: '염버니', action: '선택', note: '첫 체육관이 풀 타입이라 가장 편하다.' },
  { where: '1번도로', pokemonId: 821, pokemon: '파라꼬', action: '포획', note: '초반 새가 그대로 엔딩 멤버가 되는 드문 경우다.' },
  { where: '2번도로', pokemonId: 833, pokemon: '깨물부기', action: '포획', note: '염버니를 고르면 가장 부족한 물 타입을 채운다.' },
  { where: '2번도로', pokemonId: 835, pokemon: '멍파치', action: '임시 합류', note: '두 번째 체육관(야청, 물) 전용 전기 담당.' },
  { where: '가라르광산', pokemonId: 529, pokemon: '두더류', action: '포획', note: '땅/강철이라 파티의 전기 약점을 막아 준다.' },
  { where: '5번도로 맡기미집', pokemonId: 848, pokemon: '일레즌', action: '멍파치와 교체', note: '★ 유일한 바톤터치. Lv.1이지만 경험치가 파티 전원에게 들어가 금방 따라온다.' },
  { where: '엔진시티 변두리', pokemonId: 856, pokemon: '몸지브림', action: '포획', note: '여기서 최종 6마리가 확정된다.' },
]

export interface GymMon {
  pokemonId: number
  pokemon: string
  level: number
}

export interface SwordGym {
  order: number
  leader: string
  type: string
  swordOnly?: boolean
  roster: GymMon[]
  counters: string
  note?: string
}

/** 체육관 8곳. 포켓몬·레벨·순서는 Serebii 체육관 표와 대조했다. */
export const SWS_GYMS: SwordGym[] = [
  {
    order: 1, leader: '아킬', type: '풀',
    roster: [{ pokemonId: 829, pokemon: '꼬모카', level: 19 }, { pokemonId: 830, pokemon: '백솜모카', level: 20 }],
    counters: '래비풋의 불꽃 기술, 파라꼬·파크로우의 비행 기술',
    note: '매우 쉽다. 이 체육관 때문에 따로 잡을 포켓몬은 없다.',
  },
  {
    order: 2, leader: '야청', type: '물',
    roster: [{ pokemonId: 118, pokemon: '콘치', level: 22 }, { pokemonId: 846, pokemon: '찌로꼬치', level: 23 }, { pokemonId: 834, pokemon: '갈가부기', level: 24 }],
    counters: '멍파치의 전기 기술',
    note: '야청의 갈가부기는 물/바위라 전기가 2배로 들어간다.',
  },
  {
    order: 3, leader: '순무', type: '불꽃',
    roster: [{ pokemonId: 38, pokemon: '나인테일', level: 25 }, { pokemonId: 59, pokemon: '윈디', level: 25 }, { pokemonId: 851, pokemon: '다태우지네', level: 27 }],
    counters: '갈가부기 — 물·바위 자속 모두 유리',
    note: '사실상 갈가부기의 첫 무대.',
  },
  {
    order: 4, leader: '채두', type: '격투', swordOnly: true,
    roster: [{ pokemonId: 237, pokemon: '카포에라', level: 34 }, { pokemonId: 675, pokemon: '부란다', level: 34 }, { pokemonId: 865, pokemon: '창파나이트', level: 35 }, { pokemonId: 68, pokemon: '괴력몬', level: 36 }],
    counters: '아머까오의 비행 기술, 몸지브림·손지브림의 에스퍼 기술',
    note: '부란다는 격투/악이라 에스퍼가 안 통한다. 아머까오로 처리한다.',
  },
  {
    order: 5, leader: '포플러', type: '페어리',
    roster: [{ pokemonId: 110, pokemon: '또도가스', level: 36 }, { pokemonId: 303, pokemon: '입치트', level: 36 }, { pokemonId: 468, pokemon: '토게키스', level: 37 }, { pokemonId: 869, pokemon: '마휘핑', level: 38 }],
    counters: '스트린더의 독 기술, 몰드류의 강철 기술',
    note: '입치트는 강철/페어리라 독이 안 통한다. 몰드류의 땅 기술로 친다.',
  },
  {
    order: 6, leader: '마쿠와', type: '바위', swordOnly: true,
    roster: [{ pokemonId: 689, pokemon: '거북손데스', level: 40 }, { pokemonId: 213, pokemon: '단단지', level: 40 }, { pokemonId: 874, pokemon: '돌헨진', level: 41 }, { pokemonId: 839, pokemon: '석탄산', level: 42 }],
    counters: '갈가부기의 물 기술, 몰드류의 땅·강철 기술',
  },
  {
    order: 7, leader: '두송', type: '악',
    roster: [{ pokemonId: 560, pokemon: '곤율거니', level: 44 }, { pokemonId: 687, pokemon: '칼라마네로', level: 45 }, { pokemonId: 435, pokemon: '스컹탱크', level: 45 }, { pokemonId: 862, pokemon: '가로막구리', level: 46 }],
    counters: '브리무음의 페어리 기술, 에이스번의 격투 기술',
    note: '두송은 다이맥스를 쓰지 않는다. 복합 타입이 섞여 있어 상성을 하나씩 확인한다.',
  },
  {
    order: 8, leader: '금랑', type: '드래곤',
    roster: [{ pokemonId: 526, pokemon: '기가이어스', level: 46 }, { pokemonId: 330, pokemon: '플라이곤', level: 47 }, { pokemonId: 844, pokemon: '사다이사', level: 46 }, { pokemonId: 884, pokemon: '두랄루돈', level: 48 }],
    counters: '브리무음, 갈가부기, 몰드류',
    note: '모래바람을 쓰는 더블배틀이다. 두랄루돈은 강철/드래곤이라 페어리가 약점이 아니다 — 몰드류의 땅 기술이 핵심.',
  },
]

export interface LeonMon extends GymMon {
  counter: string
}

/** 염버니를 골랐을 때의 단델. 스타팅에 따라 두 자리가 바뀐다(Serebii Champion Cup). */
export const SWS_LEON: LeonMon[] = [
  { pokemonId: 681, pokemon: '킬가르도', level: 62, counter: '에이스번 · 몰드류. 킹실드가 있어 물리 공격만 누르면 템포를 뺏긴다.' },
  { pokemonId: 887, pokemon: '드래펄트', level: 62, counter: '브리무음의 매지컬샤인, 갈가부기의 깨물어부수기. 브리무음이 느리니 HP를 보고 낸다.' },
  { pokemonId: 612, pokemon: '액스라이즈', level: 63, counter: '브리무음의 매지컬샤인. 독찌르기를 갖고 있어 역으로 맞을 수 있다.' },
  { pokemonId: 866, pokemon: '마임꽁꽁', level: 64, counter: '에이스번 · 몰드류 · 갈가부기의 불꽃·강철·바위 기술.' },
  { pokemonId: 818, pokemon: '인텔리레온', level: 64, counter: '스트린더의 오버드라이브.' },
  { pokemonId: 6, pokemon: '리자몽', level: 65, counter: '★ 갈가부기를 끝까지 남겨 다이맥스 → 다이록. 불꽃/비행이라 바위가 4배다.' },
]

export interface SwordMachine {
  code: string
  move: string
  where: string
  use: string
}

/** 이 파티가 쓰는 기술머신. 소드·실드의 TM은 무한, TR은 1회용이다. */
export const SWS_TMS: SwordMachine[] = [
  { code: 'TM15', move: '구멍파기', where: '6번도로', use: '몰드류 중반 땅 기술' },
  { code: 'TM22', move: '스톤샤워', where: '9번도로', use: '갈가부기' },
  { code: 'TM56', move: '유턴', where: '루미너스메이즈숲', use: '에이스번 · 아머까오' },
  { code: 'TM67', move: '얼음엄니', where: '너클시티', use: '갈가부기' },
  { code: 'TM74', move: '베놈쇼크', where: '래터럴마을', use: '스트린더 보조' },
  { code: 'TM75', move: '로킥', where: '다리아래 벌판', use: '에이스번' },
  { code: 'TM78', move: '애크러뱃', where: '아라베스크마을', use: '에이스번 선택지' },
  { code: 'TM96', move: '스마트혼', where: '8번도로', use: '몰드류 강철 자속' },
  { code: 'TM92', move: '매지컬플레임', where: '배틀타워 (엔딩 후)', use: '브리무음' },
]

/** 쓸 만한 TR. 맥스레이드 보상이라 입수 시점이 운에 달려 있어, 없어도 진행되게 짰다. */
export const SWS_TRS: SwordMachine[] = [
  { code: 'TR10', move: '지진', where: '맥스레이드배틀', use: '몰드류 — Lv.52 전에 당겨 쓰고 싶을 때' },
  { code: 'TR49', move: '명상', where: '맥스레이드배틀', use: '브리무음 — 레벨업(Lv.37)으로도 배운다' },
]

/** 원문에 있었지만 소드·실드에서 실제로 배울 수 없어 뺀 조합. */
export const SWS_CANNOT_LEARN: { pokemon: string; move: string; code: string }[] = [
  { pokemon: '에이스번', move: '아이언헤드', code: 'TR74' },
  { pokemon: '몰드류', move: '아이언헤드', code: 'TR74' },
  { pokemon: '스트린더', move: '오물폭탄', code: 'TR22' },
  { pokemon: '브리무음', move: '섀도볼', code: 'TR33' },
  { pokemon: '브리무음', move: '악의파동', code: 'TR58' },
]

export interface SwordAlternative {
  from: string
  toId: number
  to: string
  pros: string
  cons: string
}

export const SWS_ALTERNATIVES: SwordAlternative[] = [
  {
    from: '갈가부기', toId: 130, to: '갸라도스',
    pros: '종족값·위협 특성·용의춤·폭포오르기로 순수 성능은 위',
    cons: '바위 자속이 없어 단델 리자몽 처리가 덜 직관적이고, 신규 포켓몬 비중이 준다',
  },
  {
    from: '몰드류', toId: 865, to: '창파나이트',
    pros: '소드에서만 자연 포획되는 가라르 파오리의 진화형. 높은 공격, 격투 자속',
    cons: '한 전투에서 급소를 3번 맞혀야 진화한다. 땅/강철 커버리지와 전기 무효 슬롯을 잃는다',
  },
  {
    from: '브리무음', toId: 861, to: '오롱털',
    pros: '악/페어리 물리형. 드래곤·에스퍼·악 대응',
    cons: '이미 물리 딜러가 많아 특수 딜러 균형이 무너진다',
  },
]

/** 체육관별 다이맥스 추천. */
export const SWS_DYNAMAX: { vs: string; who: string }[] = [
  { vs: '아킬', who: '래비풋' },
  { vs: '야청', who: '멍파치' },
  { vs: '순무', who: '갈가부기' },
  { vs: '채두', who: '아머까오' },
  { vs: '포플러', who: '스트린더 / 몰드류' },
  { vs: '마쿠와', who: '갈가부기 / 몰드류' },
  { vs: '두송', who: '사용 불가' },
  { vs: '금랑', who: '브리무음 / 몰드류' },
  { vs: '단델', who: '갈가부기' },
]

/** 소드·실드 특유의 운영 원칙. */
export const SWS_TIPS: { title: string; body: string }[] = [
  {
    title: '6마리를 서둘러 채우지 않는다',
    body: '경험치가 파티 전원에게 들어가므로, 필요한 포켓몬만 넣고 진행하는 편이 레벨 관리가 편하다.',
  },
  {
    title: '경험사탕은 아껴 쓴다',
    body: '레이드에서 쉽게 쌓이지만 계속 먹이면 모든 전투를 상성 무시로 밀게 된다. Lv.1 일레즌을 맞출 때, 몸지브림 레벨이 너무 낮을 때, 단델 직전 2~3레벨 모자랄 때 정도로만 쓴다.',
  },
  {
    title: '기술 떠올리기는 공짜다',
    body: '포켓몬센터에서 하트비늘 없이 떠올릴 수 있다. 갈가부기 진화 직후 셸블레이드·깨물어부수기를 꼭 확인한다.',
  },
  {
    title: '비전머신이 없다',
    body: '하트골드처럼 이동 기술 때문에 기술칸이나 엔트리를 희생할 필요가 없다. 6마리 모두 순수 전투용으로 쓴다.',
  },
  {
    title: '권장 레벨',
    body: '과하게 노가다하지 않았다면 챔피언컵 진입 Lv.55 전후, 단델전 Lv.60~65를 목표로 한다.',
  },
]
