/**
 * 하트골드·소울실버 기술 관리 가이드 데이터.
 *
 * 검증 기준:
 * - 레벨업 습득 레벨은 `src/data/moves/by-id/*.generated.ts`의 하트골드·소울실버 학습셋과
 *   전부 대조했다(24건 일치).
 * - TM 번호는 같은 학습셋의 machines(number)로 확인했다(8건 일치).
 * - 기술명은 `all-moves.generated.ts`의 정식 한글명을 따른다. 원문에 있던
 *   "메가혼"·"소용돌이"·"전자파"는 각각 메가혼·바다회오리·전기자석파로 바로잡았다.
 * - 프로젝트 데이터에 없는 상점 가격·BP는 Bulbapedia로 확인했다:
 *   백화점 5층 TM54 2,000원 / TM70 1,000원, 게임코너 TM13·24·35 각 10,000코인,
 *   배틀프런티어 TM26 80BP · TM30 64BP · TM31 40BP.
 * - TM26 지진의 챔피언로드 입수와 TM30 섀도볼의 인주시티 유빈 격파 보상은
 *   한국어 자료로 교차 확인했다. 관장·배지 대응은 WORD.md와도 일치한다.
 */

export interface LevelUpMove {
  level: number
  move: string
  /** 놓치면 아까운 핵심 기술 */
  key?: boolean
}

export interface PokemonTiming {
  pokemonId: number
  pokemon: string
  /** 이 포켓몬에서 기억할 한 줄 */
  headline: string
  moves: LevelUpMove[]
  advice: string[]
  /** 이 포켓몬에게 쓰면 아까운 기술머신 */
  wasteWarning?: string
}

export const HGM_TIMINGS: PokemonTiming[] = [
  {
    pokemonId: 181,
    pokemon: '전룡',
    headline: '진화해도 방전을 못 배우는 게 아니라, 습득이 3레벨 늦어질 뿐',
    moves: [
      { level: 31, move: '방전 (보송송 상태)', key: true },
      { level: 34, move: '방전 (전룡 상태)', key: true },
    ],
    advice: [
      'Lv.30에 바로 전룡으로 진화하면 Lv.34에 방전을 배운다 — 일반적인 스토리 진행에는 이쪽을 권한다.',
      '방전을 조금이라도 빨리 쓰고 싶다면 Lv.30 진화를 취소하고 Lv.31 보송송에서 배운 뒤 진화한다.',
      '어느 쪽을 골라도 방전은 확보되므로 진화를 크게 미룰 이유는 없다.',
    ],
  },
  {
    pokemonId: 58,
    pokemon: '가디',
    headline: '돌 진화라 진화 시점이 곧 기술 습득 마감 — 무엇까지 배우고 진화할지 먼저 정한다',
    moves: [
      { level: 34, move: '화염방사', key: true },
      { level: 42, move: '깨물어부수기', key: true },
      { level: 45, move: '열풍' },
      { level: 48, move: '플레어드라이브', key: true },
    ],
    advice: [
      '무난한 선택은 Lv.34 화염방사를 배운 뒤 불꽃의돌로 윈디 진화.',
      '물리형 윈디를 제대로 굴리려면 Lv.48 플레어드라이브까지 기다린다 — 스토리 기준으로는 상당히 늦다.',
      '윈디로 진화한 뒤에는 가디의 레벨업 기술을 더 배울 수 없다.',
      'Lv.45 열풍은 위력 95의 특수기라, 특수형으로 굴린다면 화염방사 대신 넣어도 좋다.',
    ],
    wasteWarning: 'TM35 화염방사 — 가디는 Lv.34에 자력으로 배운다.',
  },
  {
    pokemonId: 131,
    pokemon: '라프라스',
    headline: '냉동빔을 자력으로 배우므로 TM13을 아낄 수 있다',
    moves: [
      { level: 32, move: '냉동빔', key: true },
      { level: 37, move: '소금물' },
      { level: 49, move: '하이드로펌프' },
    ],
    advice: [
      '파도타기 + 냉동빔 두 기술만으로도 스토리 내내 충분히 강하다.',
      '특수공격이 높은 물 타입이라 HM03 파도타기 담당으로 가장 적합하다.',
      'Lv.49 하이드로펌프는 위력 110이지만 명중 80이라, 안정적인 파도타기를 두고 굳이 바꿀 필요는 없다.',
    ],
    wasteWarning: 'TM13 냉동빔 — Lv.32에 자력으로 배운다.',
  },
  {
    pokemonId: 214,
    pokemon: '헤라크로스',
    headline: '주력기를 레벨업으로 거의 다 해결하는 스토리 최상급 멤버',
    moves: [
      { level: 13, move: '제비반환' },
      { level: 19, move: '깨뜨리다', key: true },
      { level: 37, move: '인파이트', key: true },
      { level: 55, move: '메가혼', key: true },
    ],
    advice: [
      '중반까지 깨뜨리다로 버티다가 Lv.37 인파이트로 교체하면 된다.',
      'Lv.55 메가혼은 벌레 타입 최고 위력기(120)라 최종 세팅까지 남긴다.',
    ],
    wasteWarning: 'TM31 깨뜨리다 — Lv.19에 자력으로 배운다.',
  },
  {
    pokemonId: 157,
    pokemon: '블레이범',
    headline: '화염방사를 자력으로 배우므로 TM35를 서둘러 쓸 이유가 없다',
    moves: [
      { level: 35, move: '분연', key: true },
      { level: 42, move: '화염방사', key: true },
      { level: 57, move: '분화' },
    ],
    advice: [
      'Lv.35 분연도 스토리 구간에서는 충분히 쓸 만한 불꽃 특수기다.',
      'Lv.42까지 분연으로 버티고 화염방사로 교체하는 흐름이 자연스럽다.',
      'Lv.57 분화는 위력 150으로 훨씬 세지만 HP가 줄수록 위력이 떨어져, 선공을 잡는 상황에서만 값을 한다.',
    ],
    wasteWarning: 'TM35 화염방사 — Lv.42에 자력으로 배운다.',
  },
  {
    pokemonId: 130,
    pokemon: '갸라도스',
    headline: '공격이 높은 물리형이라 파도타기보다 폭포오르기가 맞는다',
    moves: [
      { level: 32, move: '얼음엄니', key: true },
      { level: 35, move: '아쿠아테일' },
      { level: 44, move: '용의춤', key: true },
    ],
    advice: [
      'HM07 폭포오르기(물리)를 맡기고, HM03 파도타기(특수)는 라프라스 쪽으로 넘긴다.',
      '용의춤을 쌓으면 후반 물리 화력이 크게 올라간다.',
    ],
  },
  {
    pokemonId: 160,
    pokemon: '장크로다일',
    headline: '갸라도스와 같은 이유로 폭포오르기 담당에 적합',
    moves: [
      { level: 21, move: '얼음엄니', key: true },
      { level: 32, move: '깨물어부수기', key: true },
    ],
    advice: ['라프라스가 파티에 있다면 장크로다일에게 폭포오르기, 라프라스에게 파도타기로 나누면 깔끔하다.'],
  },
  {
    pokemonId: 473,
    pokemon: '맘모꾸리',
    headline: '원시의힘을 기억한 채로 레벨업해야 진화하고, 지진은 자력으로 배운다',
    moves: [{ level: 40, move: '지진', key: true }],
    advice: [
      '메꾸리가 원시의힘을 알고 있는 상태에서 레벨업해야 맘모꾸리로 진화한다.',
      '원시의힘을 이미 지웠다면 검은먹시티의 기술 떠올리기로 되살린 뒤 레벨업한다.',
    ],
    wasteWarning: 'TM26 지진 — Lv.40에 자력으로 배운다. TM26은 훨씬 귀한 자원이다.',
  },
  {
    pokemonId: 468,
    pokemon: '토게키스',
    headline: '진화 직후 기술 떠올리기를 반드시 확인해야 하는 포켓몬',
    moves: [],
    advice: [
      '에어슬래시와 파동탄은 토게키스로 진화한 뒤 검은먹시티 기술 떠올리기로 확보한다.',
      '특히 에어슬래시는 토게키스의 대표 주력기다.',
      '진화시키자마자 떠올리기 목록을 열어보는 습관을 들인다.',
    ],
  },
]

export interface TmEntry {
  tm: string
  move: string
  /** 1~5. 높을수록 아껴야 한다 */
  stars: number
  obtain: string[]
  /** 반복 획득 수단이 있으면 표기 */
  repeatable?: string
  principle: string
  avoid?: string
}

export const HGM_TMS: TmEntry[] = [
  {
    tm: 'TM26',
    move: '지진',
    stars: 5,
    obtain: ['챔피언로드', '배틀프런티어 80 BP', '픽업 특성으로 극히 낮은 확률'],
    principle: '최종 파티가 확정되기 전까지 보관한다. 스토리에서 얻는 한 장의 가치가 가장 높다.',
    avoid: '맘모꾸리 (Lv.40 자력 습득)',
  },
  {
    tm: 'TM30',
    move: '섀도볼',
    stars: 5,
    obtain: ['인주시티 관장 유빈 격파 보상', '배틀프런티어 64 BP'],
    principle: '최종 특수 어태커가 확정되기 전까지 함부로 쓰지 않는다.',
  },
  {
    tm: 'TM13',
    move: '냉동빔',
    stars: 4,
    obtain: ['스토리 진행 중 입수'],
    repeatable: '금빛시티 게임코너 10,000코인',
    principle: '완전한 한정 기술머신은 아니지만 10,000코인이 들어 실질 부담은 작지 않다.',
    avoid: '라프라스 (Lv.32 자력 습득)',
  },
  {
    tm: 'TM24',
    move: '10만볼트',
    stars: 4,
    obtain: ['스토리 진행 중 입수'],
    repeatable: '금빛시티 게임코너 10,000코인',
    principle: '전룡을 쓴다면 초중반은 방전만으로 충분하다. 최종 세팅용으로 남겨도 된다.',
  },
  {
    tm: 'TM35',
    move: '화염방사',
    stars: 4,
    obtain: ['스토리 진행 중 입수'],
    repeatable: '금빛시티 게임코너 10,000코인',
    principle: '자력으로 배우는 멤버가 많아 급하게 쓸 이유가 적다.',
    avoid: '가디 (Lv.34) · 블레이범 (Lv.42)',
  },
  {
    tm: 'TM31',
    move: '깨뜨리다',
    stars: 3,
    obtain: ['스토리 진행 중 입수', '배틀프런티어 40 BP'],
    principle: '헤라크로스를 쓴다면 다른 격투 담당을 위해 남겨둔다.',
    avoid: '헤라크로스 (Lv.19 자력 습득)',
  },
  {
    tm: 'TM54',
    move: '칼등치기',
    stars: 5,
    obtain: ['금빛시티 백화점 5층 2,000원'],
    repeatable: '횟수 제한 없이 반복 구매',
    principle: '반복 구매가 되므로 아끼지 말고 적극적으로 쓴다. 포획 요원에게 필수.',
  },
  {
    tm: 'TM70',
    move: '플래시',
    stars: 2,
    obtain: ['금빛시티 백화점 5층 1,000원'],
    repeatable: '횟수 제한 없이 반복 구매',
    principle: '추가 구매가 되므로 동굴 탐험용 포켓몬에게 부담 없이 배정한다.',
  },
]

export interface RepeatableTm {
  tm: string
  move: string
  source: string
  policy: string
}

export const HGM_REPEATABLE: RepeatableTm[] = [
  { tm: 'TM13', move: '냉동빔', source: '금빛시티 게임코너 10,000코인', policy: '코인 여유 있으면' },
  { tm: 'TM24', move: '10만볼트', source: '금빛시티 게임코너 10,000코인', policy: '코인 여유 있으면' },
  { tm: 'TM35', move: '화염방사', source: '금빛시티 게임코너 10,000코인', policy: '코인 여유 있으면' },
  { tm: 'TM54', move: '칼등치기', source: '금빛시티 백화점 5층 2,000원', policy: '적극 사용' },
  { tm: 'TM70', move: '플래시', source: '금빛시티 백화점 5층 1,000원', policy: '적극 사용' },
]

export interface HmPlan {
  hm: string
  move: string
  category: '물리' | '특수' | '변화'
  holder: string
  holderIds: number[]
  reason: string
}

/** 다꼬리가 실제로 배울 수 있는 HM은 학습셋으로 확인했다 (HM01·03·04·05·06). */
export const HGM_HM_PLAN: HmPlan[] = [
  {
    hm: 'HM03',
    move: '파도타기',
    category: '특수',
    holder: '라프라스 등 특수형 물 타입',
    holderIds: [131],
    reason: '4세대 기준 위력 95의 특수기. 특수공격이 높은 쪽이 살린다.',
  },
  {
    hm: 'HM07',
    move: '폭포오르기',
    category: '물리',
    holder: '갸라도스 · 장크로다일',
    holderIds: [130, 160],
    reason: '물리기(위력 80)라 공격이 높은 물 타입에게 맞는다.',
  },
  {
    hm: 'HM02',
    move: '공중날기',
    category: '물리',
    holder: '깨비드릴조 · 피죤투 등 비행 타입',
    holderIds: [22, 18],
    reason: '이동 편의성이 압도적이라 사실상 필수. 비행 주력에게 줘도 손해가 적다.',
  },
  {
    hm: 'HM08',
    move: '록클라임',
    category: '물리',
    holder: '임시 담당',
    holderIds: [],
    reason: '관동 후반에 필요하다. 최종 세팅에 넣을 이유가 적어 임시 담당에게 맡긴다.',
  },
]

export const HGM_HM_MULE = {
  pokemonId: 162,
  pokemon: '다꼬리',
  moves: ['풀베기 (HM01)', '괴력 (HM04)', '바다회오리 (HM05)', '바위깨기 (HM06)'],
  note:
    '다꼬리는 풀베기·파도타기·괴력·바다회오리·바위깨기를 모두 배울 수 있다. 전투에서도 강한 파도타기만 물 타입 주력에게 넘기고 나머지 넷을 몰아주면, 주력 4마리의 기술 칸을 지킬 수 있다.',
}

export interface CatchHelper {
  pokemonId: number
  pokemon: string
  moves: { move: string; how: string }[]
  merit: string[]
}

export const HGM_CATCHERS: CatchHelper[] = [
  {
    pokemonId: 47,
    pokemon: '파라섹트',
    moves: [
      { move: '버섯포자', how: '파라스 Lv.17 자력' },
      { move: '칼등치기', how: 'TM54 (백화점 2,000원)' },
    ],
    merit: [
      '버섯포자는 명중률 100%로 상대를 잠듦 상태로 만든다.',
      '칼등치기는 상대 HP를 0으로 만들지 않고 반드시 1을 남긴다.',
      '두 기술로 "HP 1 + 잠듦"을 만들 수 있어 포획 성공률이 크게 오른다.',
    ],
  },
  {
    pokemonId: 123,
    pokemon: '스라크',
    moves: [{ move: '칼등치기', how: 'Lv.13 자력' }],
    merit: [
      'TM을 쓰지 않고도 칼등치기를 배워 편하다.',
      '다만 수면 기술이 없어, 한 마리로 끝내려면 파라섹트가 더 낫다.',
    ],
  },
]

export interface PartyMoveSet {
  pokemonId: number
  pokemon: string
  early?: string[]
  late: string[]
  note: string
}

export const HGM_PARTY_SETS: PartyMoveSet[] = [
  {
    pokemonId: 157,
    pokemon: '블레이범',
    early: ['분연', '보조 기술'],
    late: ['화염방사', '보조 기술'],
    note: 'TM35를 쓰지 않고 Lv.42 화염방사를 기다린다.',
  },
  {
    pokemonId: 181,
    pokemon: '전룡',
    early: ['전기쇼크', '전기자석파', '충전'],
    late: ['방전', '전기자석파', '시그널빔 계열'],
    note: 'Lv.30에 바로 진화하면 Lv.34에 방전을 배운다.',
  },
  {
    pokemonId: 214,
    pokemon: '헤라크로스',
    early: ['제비반환', '깨뜨리다'],
    late: ['인파이트', '벌레 타입 공격기'],
    note: 'TM31 깨뜨리다는 쓰지 않는다.',
  },
  {
    pokemonId: 131,
    pokemon: '라프라스',
    late: ['파도타기', '냉동빔', '자유', '자유'],
    note: 'TM13 냉동빔은 쓰지 않는다 — Lv.32 자력 습득.',
  },
  {
    pokemonId: 130,
    pokemon: '갸라도스',
    late: ['폭포오르기', '얼음엄니', '용의춤', '자유'],
    note: '파도타기보다 폭포오르기를 맡긴다.',
  },
]

export const HGM_CHECKLIST: { group: string; items: string[] }[] = [
  {
    group: '레벨업',
    items: [
      '보송송 Lv.31 방전 / 전룡으로 바로 진화하면 Lv.34 방전',
      '가디는 최소 Lv.34 화염방사까지 확인하고 진화',
      '물리형 윈디를 노리면 가디 Lv.48 플레어드라이브까지 고려',
      '라프라스 Lv.32 냉동빔',
      '헤라크로스 Lv.19 깨뜨리다 · Lv.37 인파이트 · Lv.55 메가혼',
      '블레이범 Lv.42 화염방사',
      '갸라도스 Lv.32 얼음엄니 · Lv.44 용의춤',
      '메꾸리는 원시의힘을 기억한 상태로 레벨업해야 맘모꾸리가 된다',
      '맘모꾸리 Lv.40 지진',
    ],
  },
  {
    group: '기술머신',
    items: [
      'TM26 지진은 최종 파티가 확정될 때까지 보존',
      '맘모꾸리에게 TM26을 쓰지 않기',
      'TM30 섀도볼 함부로 쓰지 않기',
      '라프라스에게 TM13 냉동빔 쓰지 않기',
      '헤라크로스에게 TM31 깨뜨리다 쓰지 않기',
      '가디·블레이범에게 TM35 화염방사를 급하게 쓰지 않기',
      'TM54 칼등치기(2,000원)와 TM70 플래시(1,000원)는 백화점 5층에서 반복 구매 가능',
    ],
  },
  {
    group: '비전머신',
    items: [
      '다꼬리 등 전담에게 풀베기·괴력·바다회오리·바위깨기 몰아주기',
      '파도타기는 라프라스 같은 특수형 물 포켓몬에게',
      '폭포오르기는 갸라도스·장크로다일 같은 물리형에게',
      '공중날기는 비행 타입 주력에게',
      '록클라임은 임시 담당에게 배정',
      '주력에게 불필요한 HM을 무작정 넣지 않기',
    ],
  },
  {
    group: '포획',
    items: [
      '파라스 Lv.17 버섯포자 확보',
      'TM54 칼등치기 구매 (백화점 5층 2,000원)',
      '파라섹트에 버섯포자 + 칼등치기 구성',
      '스라크는 Lv.13 칼등치기를 자력 습득',
      '너도밤나무숲 박치기 가르침 챙기기',
    ],
  },
]

export const HGM_TOP10: string[] = [
  '4세대 기술머신은 1회용이다.',
  'TM26 지진은 정말 아껴야 한다.',
  '보송송은 Lv.31, 전룡은 Lv.34에 방전을 배운다.',
  '라프라스는 Lv.32에 냉동빔을 직접 배운다.',
  '헤라크로스는 Lv.19에 깨뜨리다를 직접 배운다.',
  '가디는 진화 전에 화염방사·깨물어부수기·플레어드라이브 습득 여부를 확인한다.',
  '맘모꾸리는 원시의힘을 안 상태로 레벨업해야 진화한다.',
  '파도타기는 특수형, 폭포오르기는 물리형에게 배정한다.',
  'HM은 다꼬리 같은 비전 전담에게 몰아준다.',
  '도감 수집을 한다면 버섯포자 + 칼등치기 포획 요원을 만든다.',
]

export const HGM_PRINCIPLES: string[] = [
  '이 포켓몬이 레벨업으로 같은 기술을 배우는가?',
  '진화하면 습득 레벨이 늦어지거나 아예 사라지는가?',
  '기술머신을 추가로 구매하거나 얻을 수 있는가?',
  '비전기술이라면 전담 포켓몬에게 맡길 수 있는가?',
  '최종 파티에서 끝까지 쓸 기술인가?',
]

export const HGM_TUTOR_NOTES = {
  relearn: {
    title: '기술 떠올리기',
    place: '검은먹시티',
    cost: '하트비늘 1개',
    uses: [
      '메꾸리에게 원시의힘을 되살려 맘모꾸리로 진화시키기',
      '토게키스 진화 후 에어슬래시·파동탄 확보',
      '진화하면서 놓친 레벨업 기술 복구',
    ],
  },
  forget: {
    title: '기술잊기',
    place: '검은먹시티',
    cost: '무료',
    uses: ['비전기술(HM)을 지울 때 반드시 필요', '주력에게 임시로 가르친 HM을 나중에 제거'],
  },
  headbutt: {
    title: '박치기 가르침',
    place: '너도밤나무숲',
    cost: '무료 · 반복 가능',
    uses: ['필드의 나무를 흔들어 포켓몬을 조우', '박치기 나무로만 나오는 종이 있어 도감 수집에는 사실상 필수'],
  },
}
