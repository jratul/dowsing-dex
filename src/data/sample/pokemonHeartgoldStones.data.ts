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
