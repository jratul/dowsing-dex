// 하트골드 진화의 돌 공략 데이터
// 아이템 스프라이트: PokeAPI sprites 기준
// 포켓몬 이름: pokedex.generated.ts nameKo 기준으로 검증

export interface StoneEvo {
  fromId: number
  fromName: string
  toId: number
  toName: string
  note?: string
}

export interface StoneEntry {
  apiName: string
  nameKo: string
  nameEn: string
  spriteUrl: string
  evolutions: StoneEvo[]
  acquisitions: StoneAcquisition[]
}

export interface StoneAcquisition {
  label: string
  type: 'pokeathlom' | 'contest' | 'npc' | 'item-ball' | 'wild' | 'event'
  detail: string
  once?: boolean
}

export const HGS_STONES: StoneEntry[] = [
  {
    apiName: 'moon-stone',
    nameKo: '달의돌',
    nameEn: 'Moon Stone',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/moon-stone.png',
    evolutions: [
      { fromId: 30, fromName: '니드리나', toId: 31, toName: '니드퀸' },
      { fromId: 33, fromName: '니드리노', toId: 34, toName: '니드킹' },
      { fromId: 35, fromName: '삐삐', toId: 36, toName: '픽시' },
      { fromId: 39, fromName: '푸린', toId: 40, toName: '푸크린' },
      { fromId: 300, fromName: '에나비', toId: 301, toName: '델케티', note: '전국도감 입수 후 가능' },
    ],
    acquisitions: [
      {
        label: '포켓슬론 돔',
        type: 'pokeathlom',
        detail: '성도 포켓슬론 돔에서 경기 포인트로 구매. 요일에 따라 판매 돌 종류가 달라지므로 돔 내 안내원에게 확인한다.',
      },
      {
        label: '이수재의 할아버지',
        type: 'npc',
        detail: '관동 25번도로 끝 집. 삐삐를 보여주면 달의돌 1개를 받는다.',
        once: true,
      },
      {
        label: '달맞이산 월요일 밤 이벤트',
        type: 'event',
        detail: '관동 달맞이산(Mt. Moon)을 월요일 밤에 방문하면 삐삐들이 춤을 추고, 광장 중앙에서 달의돌 1개를 발견할 수 있다. 사천왕 클리어 후 관동 이동 가능.',
        once: true,
      },
      {
        label: '야생 삐삐 지니기',
        type: 'wild',
        detail: '야생 삐삐가 5% 확률로 달의돌을 지니고 있다. 도둑질·야생 포획 후 아이템 확인.',
      },
    ],
  },
  {
    apiName: 'fire-stone',
    nameKo: '불꽃의돌',
    nameEn: 'Fire Stone',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/fire-stone.png',
    evolutions: [
      { fromId: 37, fromName: '식스테일', toId: 38, toName: '나인테일', note: '하트골드 버전 야생 포켓몬' },
      { fromId: 58, fromName: '가디', toId: 59, toName: '윈디' },
      { fromId: 133, fromName: '이브이', toId: 136, toName: '부스터' },
    ],
    acquisitions: [
      {
        label: '포켓슬론 돔',
        type: 'pokeathlom',
        detail: '성도 포켓슬론 돔에서 경기 포인트로 구매.',
      },
      {
        label: '이수재의 할아버지',
        type: 'npc',
        detail: '관동 25번도로 끝 집. 식스테일을 보여주면 불꽃의돌 1개를 받는다.',
        once: true,
      },
    ],
  },
  {
    apiName: 'water-stone',
    nameKo: '물의돌',
    nameEn: 'Water Stone',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/water-stone.png',
    evolutions: [
      { fromId: 61, fromName: '슈륙챙이', toId: 62, toName: '강챙이' },
      { fromId: 90, fromName: '셀러', toId: 91, toName: '파르셀' },
      { fromId: 120, fromName: '별가사리', toId: 121, toName: '아쿠스타' },
      { fromId: 133, fromName: '이브이', toId: 134, toName: '샤미드' },
    ],
    acquisitions: [
      {
        label: '포켓슬론 돔',
        type: 'pokeathlom',
        detail: '성도 포켓슬론 돔에서 경기 포인트로 구매.',
      },
      {
        label: '이수재의 할아버지',
        type: 'npc',
        detail: '관동 25번도로 끝 집. 별가사리를 보여주면 물의돌 1개를 받는다.',
        once: true,
      },
    ],
  },
  {
    apiName: 'thunder-stone',
    nameKo: '천둥의돌',
    nameEn: 'Thunder Stone',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/thunder-stone.png',
    evolutions: [
      { fromId: 25, fromName: '피카츄', toId: 26, toName: '라이츄' },
      { fromId: 133, fromName: '이브이', toId: 135, toName: '쥬피썬더' },
    ],
    acquisitions: [
      {
        label: '포켓슬론 돔',
        type: 'pokeathlom',
        detail: '성도 포켓슬론 돔에서 경기 포인트로 구매.',
      },
      {
        label: '이수재의 할아버지',
        type: 'npc',
        detail: '관동 25번도로 끝 집. 피카츄를 보여주면 천둥의돌 1개를 받는다.',
        once: true,
      },
    ],
  },
  {
    apiName: 'leaf-stone',
    nameKo: '리프의돌',
    nameEn: 'Leaf Stone',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/leaf-stone.png',
    evolutions: [
      { fromId: 44, fromName: '냄새꼬', toId: 45, toName: '라플레시아' },
      { fromId: 70, fromName: '우츠동', toId: 71, toName: '우츠보트' },
      { fromId: 102, fromName: '아라리', toId: 103, toName: '나시' },
    ],
    acquisitions: [
      {
        label: '포켓슬론 돔',
        type: 'pokeathlom',
        detail: '성도 포켓슬론 돔에서 경기 포인트로 구매.',
      },
      {
        label: '이수재의 할아버지',
        type: 'npc',
        detail: '관동 25번도로 끝 집. 뚜벅쵸를 보여주면 리프의돌 1개를 받는다.',
        once: true,
      },
    ],
  },
  {
    apiName: 'sun-stone',
    nameKo: '태양의돌',
    nameEn: 'Sun Stone',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sun-stone.png',
    evolutions: [
      { fromId: 44, fromName: '냄새꼬', toId: 182, toName: '아르코' },
      { fromId: 191, fromName: '해너츠', toId: 192, toName: '해루미' },
    ],
    acquisitions: [
      {
        label: '자연공원 포충대회 1등',
        type: 'contest',
        detail: '자연공원(성도)에서 화·목·토요일에 열리는 포충대회 1등 상품. 잡은 포켓몬 1마리를 순위 평가한 뒤 1위가 태양의돌을 받는다.',
      },
      {
        label: '포켓슬론 돔',
        type: 'pokeathlom',
        detail: '성도 포켓슬론 돔에서 경기 포인트로 구매.',
      },
      {
        label: '알프의 유적 연구원',
        type: 'npc',
        detail: '알프의 유적(성도) 내 연구소 연구원에게 말을 걸면 태양의돌을 받을 수 있다.',
        once: true,
      },
    ],
  },
  {
    apiName: 'shiny-stone',
    nameKo: '빛의돌',
    nameEn: 'Shiny Stone',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/shiny-stone.png',
    evolutions: [
      { fromId: 176, fromName: '토게틱', toId: 468, toName: '토게키스' },
      { fromId: 315, fromName: '로젤리아', toId: 407, toName: '로즈레이드' },
    ],
    acquisitions: [
      {
        label: '포켓슬론 돔',
        type: 'pokeathlom',
        detail: '성도 포켓슬론 돔에서 경기 포인트로 구매. 4세대 신규 돌이라 기본 돌보다 포인트가 더 필요하다.',
      },
    ],
  },
  {
    apiName: 'dusk-stone',
    nameKo: '어둠의돌',
    nameEn: 'Dusk Stone',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dusk-stone.png',
    evolutions: [
      { fromId: 198, fromName: '니로우', toId: 430, toName: '돈크로우' },
      { fromId: 200, fromName: '무우마', toId: 429, toName: '무우마직' },
    ],
    acquisitions: [
      {
        label: '포켓슬론 돔',
        type: 'pokeathlom',
        detail: '성도 포켓슬론 돔에서 경기 포인트로 구매. 4세대 신규 돌이라 기본 돌보다 포인트가 더 필요하다.',
      },
    ],
  },
  {
    apiName: 'dawn-stone',
    nameKo: '각성의돌',
    nameEn: 'Dawn Stone',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dawn-stone.png',
    evolutions: [
      { fromId: 281, fromName: '킬리아', toId: 475, toName: '엘레이드', note: '♂만 가능' },
      { fromId: 361, fromName: '눈꼬마', toId: 478, toName: '눈여아', note: '♀만 가능' },
    ],
    acquisitions: [
      {
        label: '포켓슬론 돔',
        type: 'pokeathlom',
        detail: '성도 포켓슬론 돔에서 경기 포인트로 구매. 4세대 신규 돌이라 기본 돌보다 포인트가 더 필요하다.',
      },
    ],
  },
]

// linkifyPokemonNames용 이름→ID 맵

// ──────────────────────────────────────────────────────────────
// 언제 진화시킬 것인가
// ──────────────────────────────────────────────────────────────
// 레벨업 습득표는 by-id/*.generated.ts 의 하트골드·소울실버 학습셋으로 전부 대조했다.

/** 4세대 돌 진화를 판단하는 두 갈래. */
export const HGS_TIMING_RULES = [
  {
    title: '돌 진화는 레벨업 표를 갈아엎는다',
    body: '4세대 돌 진화 포켓몬은 두 부류로 갈린다. 진화 후에도 레벨업으로 기술이 계속 나오는 쪽(니드킹·쥬피썬더·돈크로우)과, 진화하는 순간 레벨업 표가 Lv.1 몇 개로 끝나 버리는 쪽(픽시·라이츄·로즈레이드·무우마직)이다. 뒤쪽은 진화 전에 배울 것을 다 배우고 돌을 써야 한다.',
  },
  {
    title: '진화해도 새 Lv.1 기술이 저절로 들어오지는 않는다',
    body: '돌로 진화시킨다고 진화형의 Lv.1 기술이 자동으로 붙지 않는다. 토게키스의 에어슬래시·파동탄, 윈디의 번개엄니처럼 값나가는 것들이 여기 몰려 있으므로, 검은먹시티 기술 떠올리기 NPC에게 하트비늘을 주고 되살려야 한다. 하트비늘을 미리 몇 장 모아 두면 진화 타이밍 고민이 크게 줄어든다.',
  },
  {
    title: '기술머신으로 대체되는 기술은 기다릴 이유가 없다',
    body: '하트골드에는 TM13 냉동빔·TM24 10만볼트·TM29 사이코키네시스·TM35 화염방사가 모두 있다. 진화 전 레벨업으로 얻는 기술이 이 목록에 있다면 굳이 레벨을 끌 필요가 없다. 다만 4세대 기술머신은 일회용이라, 아낄 수 있으면 아끼는 쪽이 이득이다.',
  },
  {
    title: '이브이 3종은 예외 — 무조건 즉시',
    body: '샤미드·쥬피썬더·부스터는 진화 후에 Lv.15부터 Lv.78까지 자기 타입 기술을 쭉 배운다. 이브이로 남겨 봐야 노말 기술만 늘어나므로, 돌이 손에 들어오는 즉시 쓰는 것이 항상 이득이다.',
  },
]

export type EvoTiming = '즉시' | '조건부' | '지연'
export type EvoTier = '최상급' | '좋음' | '취향' | '애정픽'

export interface StoneTimingRow {
  stone: string
  fromId: number
  from: string
  toId: number
  to: string
  timing: EvoTiming
  when: string
  reason: string
  tier: EvoTier
}

/** 25개 진화 전부에 대한 권장 시점. */
export const HGS_TIMING_SUMMARY: StoneTimingRow[] = [
  // ─ 달의돌 ─
  {
    stone: '달의돌', fromId: 33, from: '니드리노', toId: 34, to: '니드킹',
    timing: '즉시', when: '돌을 얻는 즉시',
    reason: '니드킹이 Lv.23 난동부리기 · Lv.43 대지의힘 · Lv.58 메가혼을 이어서 배운다. 니드리노로 버텨서 얻는 건 Lv.43 독찌르기뿐이라 기다릴 이유가 없다.',
    tier: '최상급',
  },
  {
    stone: '달의돌', fromId: 30, from: '니드리나', toId: 31, to: '니드퀸',
    timing: '즉시', when: '돌을 얻는 즉시',
    reason: '니드퀸도 Lv.23 누르기 · Lv.43 대지의힘 · Lv.58 엄청난힘으로 표가 이어진다. 니드리나의 Lv.43 깨물어부수기를 원하면 그때까지만 미룬다.',
    tier: '좋음',
  },
  {
    stone: '달의돌', fromId: 35, from: '삐삐', toId: 36, to: '픽시',
    timing: '지연', when: '삐삐 Lv.43 코멧펀치 이후 (여유가 있으면 Lv.46)',
    reason: '픽시는 진화하는 순간 레벨업 표가 Lv.1 네 개로 끝난다. 반면 삐삐는 Lv.37 달빛 · Lv.43 코멧펀치 · Lv.46 치유소원까지 계속 배운다. 강철 물리기인 코멧펀치가 이 계열이 자력으로 얻는 가장 강한 공격기다.',
    tier: '취향',
  },
  {
    stone: '달의돌', fromId: 39, from: '푸린', toId: 40, to: '푸크린',
    timing: '지연', when: '푸린 Lv.45 하이퍼보이스 이후',
    reason: '푸크린도 Lv.1 네 개로 끝난다. 푸린의 Lv.29 누르기 · Lv.45 하이퍼보이스를 챙기지 않으면 기술머신에만 의존하게 된다.',
    tier: '애정픽',
  },
  {
    stone: '달의돌', fromId: 300, from: '에나비', toId: 301, to: '델케티',
    timing: '지연', when: '에나비 Lv.42 이판사판태클 이후',
    reason: '델케티도 Lv.1 네 개가 전부다. 전국도감을 받은 뒤에야 만나는 계열이라 순수 수집용에 가깝다.',
    tier: '애정픽',
  },

  // ─ 불꽃의돌 ─
  {
    stone: '불꽃의돌', fromId: 58, from: '가디', toId: 59, to: '윈디',
    timing: '조건부', when: '가디 Lv.34 화염방사 이후',
    reason: '윈디는 Lv.39 신속을 빼면 레벨업이 끊긴다. 가디의 Lv.34 화염방사까지는 반드시 챙기고, Lv.48 플레어드라이브까지 끄는 건 과하다. 윈디의 Lv.1 번개엄니·불꽃엄니는 진화 후 하트비늘로 되살린다.',
    tier: '최상급',
  },
  {
    stone: '불꽃의돌', fromId: 37, from: '식스테일', toId: 38, to: '나인테일',
    timing: '조건부', when: '식스테일 Lv.24 화염방사 이후',
    reason: '나인테일도 표가 Lv.1 에서 끝난다. Lv.24 화염방사가 분기점이고, Lv.47 불대문자까지 기다릴지는 취향이다. 하트골드 전용 야생이라 소울실버에서는 교환이 필요하다.',
    tier: '좋음',
  },
  {
    stone: '불꽃의돌', fromId: 133, from: '이브이', toId: 136, to: '부스터',
    timing: '즉시', when: '돌을 얻는 즉시',
    reason: '부스터는 Lv.15 불꽃세례부터 Lv.71 불대문자까지 자기 표를 따로 갖는다. 이브이로 두면 노말 기술만 쌓인다.',
    tier: '취향',
  },

  // ─ 물의돌 ─
  {
    stone: '물의돌', fromId: 133, from: '이브이', toId: 134, to: '샤미드',
    timing: '즉시', when: '돌을 얻는 즉시',
    reason: 'Lv.15 물대포 · Lv.36 오로라빔 · Lv.71 하이드로펌프까지 표가 길다. 이브이 3종 중 스토리 안정성이 가장 높다.',
    tier: '최상급',
  },
  {
    stone: '물의돌', fromId: 61, from: '슈륙챙이', toId: 62, to: '강챙이',
    timing: '조건부', when: '슈륙챙이 Lv.37 배북 이후',
    reason: '강챙이는 Lv.43 폭발펀치 · Lv.53 마음의눈으로 표가 이어진다. 배북(Lv.37)으로 공격을 최대까지 올리고 폭발펀치를 쓰는 것이 이 계열의 정석이라, 배북만큼은 진화 전에 챙긴다.',
    tier: '좋음',
  },
  {
    stone: '물의돌', fromId: 120, from: '별가사리', toId: 121, to: '아쿠스타',
    timing: '조건부', when: '별가사리 Lv.15 HP회복 이후 (화력을 원하면 Lv.46 파워젬)',
    reason: '아쿠스타는 Lv.28 이상한빛 하나만 더 배운다. HP회복은 일찍 들어오니 진화를 오래 미룰 이유가 없지만, 자력 공격기를 원하면 Lv.46 파워젬까지 끌 만하다. 에스퍼 자속은 TM29 사이코키네시스로 해결한다.',
    tier: '최상급',
  },
  {
    stone: '물의돌', fromId: 90, from: '셀러', toId: 91, to: '파르셀',
    timing: '조건부', when: '셀러 Lv.32 오로라빔 이후',
    reason: '파르셀은 Lv.28 압정뿌리기 · Lv.40 가시대포뿐이라 표가 거의 끊긴다. Lv.49 냉동빔까지 미룰 수도 있지만 냉동빔은 TM13으로 대체되므로 오로라빔 선에서 끊는 편이 낫다.',
    tier: '취향',
  },

  // ─ 천둥의돌 ─
  {
    stone: '천둥의돌', fromId: 133, from: '이브이', toId: 135, to: '쥬피썬더',
    timing: '즉시', when: '돌을 얻는 즉시',
    reason: 'Lv.15 전기쇼크부터 Lv.71 번개 · Lv.78 방전까지 이어진다. 스피드 130 이라 성도 구간에서 특히 강하다.',
    tier: '최상급',
  },
  {
    stone: '천둥의돌', fromId: 25, from: '피카츄', toId: 26, to: '라이츄',
    timing: '지연', when: '피카츄 Lv.26 10만볼트 이후 (TM24를 아끼려면 Lv.45 번개까지)',
    reason: '라이츄는 Lv.1 네 개로 끝난다. 피카츄는 Lv.26 10만볼트 · Lv.34 고속이동 · Lv.45 번개까지 배우므로, 미룰수록 기술머신을 아낀다.',
    tier: '애정픽',
  },

  // ─ 리프의돌 ─
  {
    stone: '리프의돌', fromId: 102, from: '아라리', toId: 103, to: '나시',
    timing: '조건부', when: 'TM29 사이코키네시스가 있으면 즉시, 없으면 아라리 Lv.47 까지',
    reason: '나시는 Lv.27 알폭탄 · Lv.37 우드해머 · Lv.47 리프스톰으로 표가 이어져 빨리 진화할수록 좋다. 다만 에스퍼 자속은 나시가 레벨업으로 못 배우고 아라리 Lv.47 사이코키네시스가 유일하다 — TM29를 쓸 생각이면 기다릴 필요가 없다.',
    tier: '좋음',
  },
  {
    stone: '리프의돌', fromId: 70, from: '우츠동', toId: 71, to: '우츠보트',
    timing: '즉시', when: '돌을 얻는 즉시',
    reason: '우츠보트는 잎날가르기·수면가루를 Lv.1 에 갖고 있고 Lv.47 리프블레이드·리프스톰까지 배운다. 우츠동으로 버텨서 얻는 건 Lv.47 쥐어짜기뿐이다. Lv.1 기술은 하트비늘로 되살린다.',
    tier: '좋음',
  },
  {
    stone: '리프의돌', fromId: 44, from: '냄새꼬', toId: 45, to: '라플레시아',
    timing: '지연', when: '냄새꼬 Lv.47 기가드레인 이후',
    reason: '라플레시아는 Lv.53 꽃잎댄스 · Lv.65 솔라빔만 남는다. 냄새꼬의 Lv.47 기가드레인을 놓치면 회복이 붙은 풀 기술을 TM19로 다시 사줘야 한다.',
    tier: '취향',
  },

  // ─ 태양의돌 ─
  {
    stone: '태양의돌', fromId: 44, from: '냄새꼬', toId: 182, to: '아르코',
    timing: '즉시', when: '돌을 얻는 즉시',
    reason: '★ 같은 냄새꼬라도 태양의돌 쪽은 판단이 반대다. 아르코는 Lv.1 에 리프블레이드를 들고 시작해 Lv.23 매지컬리프 · Lv.53 리프스톰까지 이어진다. 진화하는 순간 바로 주력기가 손에 들어오므로 미룰 이유가 없다.',
    tier: '좋음',
  },
  {
    stone: '태양의돌', fromId: 191, from: '해너츠', toId: 192, to: '해루미',
    timing: '즉시', when: '돌을 얻는 즉시',
    reason: '해루미는 해너츠의 레벨업 표를 그대로 이어받는 드문 경우다(Lv.21 씨기관총 · Lv.33 꽃잎댄스 · Lv.41 솔라빔). 미뤄서 얻을 것이 사실상 없다.',
    tier: '애정픽',
  },

  // ─ 빛의돌 ─
  {
    stone: '빛의돌', fromId: 176, from: '토게틱', toId: 468, to: '토게키스',
    timing: '즉시', when: '돌을 얻는 즉시 + 하트비늘 준비',
    reason: '토게키스의 Lv.1 에 에어슬래시·파동탄·신속이 몰려 있다. 저절로 붙지 않으므로 검은먹시티에서 하트비늘로 되살려야 하지만, 그 두 개만으로 곧바로 주력이 된다. 토게틱의 Lv.33 원시의힘·Lv.42 배턴터치보다 훨씬 값지다.',
    tier: '최상급',
  },
  {
    stone: '빛의돌', fromId: 315, from: '로젤리아', toId: 407, to: '로즈레이드',
    timing: '지연', when: '로젤리아 Lv.25 기가드레인 이후 (여유가 있으면 Lv.40 꽃잎댄스)',
    reason: '로즈레이드는 Lv.1 다섯 개로 표가 끝난다. 로젤리아의 Lv.25 기가드레인이 최소선이고, Lv.40 꽃잎댄스 · Lv.43 아로마테라피까지 챙기면 기술머신을 거의 안 써도 된다.',
    tier: '좋음',
  },

  // ─ 어둠의돌 ─
  {
    stone: '어둠의돌', fromId: 198, from: '니로우', toId: 430, to: '돈크로우',
    timing: '즉시', when: '돌을 얻는 즉시',
    reason: '돈크로우가 Lv.35 나쁜음모 · Lv.45 깜짝베기 · Lv.55 악의파동으로 표를 이어받는다. 니로우의 Lv.45 기습은 기술가르침으로도 받을 수 있어 아쉬울 게 없다.',
    tier: '최상급',
  },
  {
    stone: '어둠의돌', fromId: 200, from: '무우마', toId: 429, to: '무우마직',
    timing: '지연', when: '무우마 Lv.37 섀도볼 이후 (여유가 있으면 Lv.50 파워젬)',
    reason: '무우마직은 Lv.1 여섯 개가 전부다. 무우마의 Lv.37 섀도볼이 최소선이고, Lv.50 파워젬은 무우마직 계열이 자력으로 얻는 유일한 바위 기술이라 비행·불꽃 견제가 필요하면 여기까지 끈다.',
    tier: '좋음',
  },

  // ─ 각성의돌 ─
  {
    stone: '각성의돌', fromId: 281, from: '킬리아', toId: 475, to: '엘레이드',
    timing: '즉시', when: '수컷 킬리아를 확보하는 즉시',
    reason: '엘레이드는 Lv.25 칼춤 · Lv.31 사이코커터 · Lv.45 칼등치기 · Lv.53 인파이트로 완전히 다른 물리 표를 갖는다. 킬리아의 특수 표(Lv.31 사이코키네시스 등)는 공격 125·특공 65 인 엘레이드에게 거의 쓸모가 없으니 미룰 이유가 없다.',
    tier: '최상급',
  },
  {
    stone: '각성의돌', fromId: 361, from: '눈꼬마', toId: 478, to: '눈여아',
    timing: '즉시', when: '암컷 눈꼬마를 확보하는 즉시',
    reason: '눈여아도 별도 표를 갖는다(Lv.37 얼음뭉치 · Lv.51 눈보라). 눈꼬마의 Lv.28 얼음엄니 · Lv.31 깨물어부수기를 챙기려고 미루기보다, 스피드 110 인 눈여아를 빨리 만들어 굴리는 편이 낫다.',
    tier: '좋음',
  },
]

export interface StoneTimingCompare {
  title: string
  body: string
  options: { pokemonId: number; name: string; verdict: string }[]
}

/** 같은 재료를 두고 갈리는 선택. */
export const HGS_TIMING_COMPARISONS: StoneTimingCompare[] = [
  {
    title: '냄새꼬 하나를 어느 쪽으로 보낼 것인가',
    body: '냄새꼬는 리프의돌과 태양의돌 중 어느 쪽을 쓰느냐로 완전히 다른 포켓몬이 된다. 진화 시점 판단도 정반대다 — 라플레시아는 Lv.47 까지 끌어야 하고, 아르코는 즉시 쓰는 편이 낫다.',
    options: [
      { pokemonId: 45, name: '라플레시아', verdict: '특공 110 의 풀/독 특수 딜러. 화력이 높고 수면가루로 포획도 돕는다. 대신 냄새꼬 Lv.47 기가드레인까지 끌어야 제값을 한다.' },
      { pokemonId: 182, name: '아르코', verdict: '방어 95·특방 100 의 단단한 순수 풀 타입. Lv.1 리프블레이드를 들고 나오므로 돌을 얻는 즉시 전력이 된다.' },
    ],
  },
  {
    title: '이브이 한 마리를 어디에 쓸 것인가',
    body: '하트골드에서 이브이는 금빛시티의 이수재에게서 한 마리 받는다(무지개 게임코너에서 6,666코인으로 한 마리 더 살 수 있다). 셋 다 즉시 진화가 정답이므로, 고민은 시점이 아니라 파티에 뭐가 비어 있느냐다.',
    options: [
      { pokemonId: 134, name: '샤미드', verdict: 'HP 130 의 내구. 물 담당이 비어 있으면 가장 무난하다.' },
      { pokemonId: 135, name: '쥬피썬더', verdict: '스피드 130·특공 110. 성도 구간 돌파력이 가장 높다.' },
      { pokemonId: 136, name: '부스터', verdict: '공격 130 이지만 자력 불꽃기가 회오리불꽃·불대문자 같은 특수기 쪽에 몰려 스탯과 어긋난다. 스타팅이 블레이범이면 역할도 겹친다.' },
    ],
  },
  {
    title: '피카츄를 라이츄로 만들 것인가',
    body: '라이츄는 진화하는 순간 레벨업이 멈춘다. 그래서 「언제 진화시킬까」가 아니라 「진화시킬까」부터 따져야 하는 드문 경우다.',
    options: [
      { pokemonId: 25, name: '피카츄 유지', verdict: 'Lv.26 10만볼트 · Lv.34 고속이동 · Lv.45 번개를 자력으로 받는다. 기술머신을 한 장도 안 쓰고 전기 담당을 굴릴 수 있다.' },
      { pokemonId: 26, name: '라이츄로 진화', verdict: '종족값은 확실히 오르지만 기술은 전부 기술머신으로 채워야 한다. 진화한다면 피카츄 Lv.26 10만볼트 이후다.' },
    ],
  },
]

export const HGS_STONES_NAME_TO_ID = new Map<string, number>([
  ['니드리나', 30], ['니드퀸', 31], ['니드리노', 33], ['니드킹', 34],
  ['삐삐', 35], ['픽시', 36], ['식스테일', 37], ['나인테일', 38],
  ['푸린', 39], ['푸크린', 40], ['에나비', 300], ['델케티', 301],
  ['가디', 58], ['윈디', 59], ['이브이', 133], ['부스터', 136],
  ['슈륙챙이', 61], ['강챙이', 62], ['셀러', 90], ['파르셀', 91],
  ['별가사리', 120], ['아쿠스타', 121], ['샤미드', 134],
  ['피카츄', 25], ['라이츄', 26], ['쥬피썬더', 135],
  ['냄새꼬', 44], ['라플레시아', 45], ['우츠동', 70], ['우츠보트', 71],
  ['아라리', 102], ['나시', 103],
  ['해너츠', 191], ['해루미', 192], ['아르코', 182],
  ['토게틱', 176], ['토게키스', 468], ['로젤리아', 315], ['로즈레이드', 407],
  ['니로우', 198], ['돈크로우', 430], ['무우마', 200], ['무우마직', 429],
  ['킬리아', 281], ['엘레이드', 475], ['눈꼬마', 361], ['눈여아', 478],
])

/** 진화 시점 분석 본문에서 자동 링크로 바꿀 기술 이름. */
export const HGS_MOVE_NAMES: ReadonlySet<string> = new Set([
  '난동부리기', '대지의힘', '메가혼', '독찌르기', '누르기', '엄청난힘', '깨물어부수기',
  '달빛', '코멧펀치', '치유소원', '하이퍼보이스', '이판사판태클',
  '화염방사', '신속', '플레어드라이브', '번개엄니', '불꽃엄니', '불대문자', '불꽃세례',
  '회오리불꽃', '물대포', '오로라빔', '하이드로펌프', '배북', '폭발펀치', '마음의눈',
  'HP회복', '이상한빛', '파워젬', '사이코키네시스', '압정뿌리기', '가시대포', '냉동빔',
  '전기쇼크', '번개', '방전', '10만볼트', '고속이동', '알폭탄', '우드해머', '리프스톰',
  '잎날가르기', '수면가루', '리프블레이드', '쥐어짜기', '꽃잎댄스', '솔라빔', '기가드레인',
  '매지컬리프', '씨기관총', '에어슬래시', '파동탄', '원시의힘', '배턴터치', '아로마테라피',
  '나쁜음모', '깜짝베기', '악의파동', '기습', '섀도볼', '칼춤', '사이코커터', '칼등치기',
  '인파이트', '얼음뭉치', '눈보라', '얼음엄니',
])
