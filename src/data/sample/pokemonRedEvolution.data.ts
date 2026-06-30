// 포켓몬스터 1세대 레드버전 돌 진화·교환 진화 추천 타이밍 및 기술 배치 데이터.
// .ref/pokemon_red_gen1_evolution_guide.md 를 사이트용으로 구조화한 것.

export interface StoneEvoRow {
  pokemonId: number
  before: string
  after: string
  stone: string
  available: string // 레드버전 단독 입수 가능 여부
  timing: string
  reason: string
}

export const STONE_EVO_SUMMARY: StoneEvoRow[] = [
  { pokemonId: 34, before: '니드리노', after: '니드킹', stone: '달의돌', available: '가능', timing: 'Lv16 이후 바로', reason: '니드킹 Lv23 난동부리기 습득' },
  { pokemonId: 31, before: '니드리나', after: '니드퀸', stone: '달의돌', available: '가능', timing: 'Lv16 이후 바로', reason: '니드퀸 Lv23 누르기 습득' },
  { pokemonId: 36, before: '삐삐', after: '픽시', stone: '달의돌', available: '가능', timing: 'Lv24 작아지기 이후', reason: '작아지기 확보 후 기술머신 운용' },
  { pokemonId: 40, before: '푸린', after: '푸크린', stone: '달의돌', available: '가능', timing: 'Lv34 누르기 이후', reason: '누르기 기술머신 절약' },
  { pokemonId: 26, before: '피카츄', after: '라이츄', stone: '천둥의돌', available: '가능', timing: 'Lv26 스피드스타 이후', reason: '10만볼트 TM으로 해결 가능' },
  { pokemonId: 45, before: '냄새꼬', after: '라플레시아', stone: '리프의돌', available: '가능', timing: 'Lv38 꽃잎댄스 이후', reason: '수면가루 + 풀 공격기 확보' },
  { pokemonId: 59, before: '가디', after: '윈디', stone: '불꽃의돌', available: '가능', timing: 'Lv39 고속이동 이후', reason: 'Lv50 화염방사는 너무 늦음' },
  { pokemonId: 62, before: '슈륙챙이', after: '강챙이', stone: '물의돌', available: '가능', timing: 'Lv41 망각 이후', reason: '1세대 망각이 특수 올려주는 강력한 기술' },
  { pokemonId: 91, before: '셀러', after: '파르셀', stone: '물의돌', available: '가능', timing: 'Lv30 오로라빔 이후', reason: '냉동빔은 기술머신으로 대체 가능' },
  { pokemonId: 121, before: '별가사리', after: '아쿠스타', stone: '물의돌', available: '가능', timing: 'Lv27 HP회복 이후', reason: '회복기 확보 후 기술머신으로 완성' },
  { pokemonId: 103, before: '아라리', after: '나시', stone: '리프의돌', available: '가능', timing: 'Lv48 수면가루 이후', reason: '최적화 기준. 빠른 진행이면 Lv42도 가능' },
  { pokemonId: 134, before: '이브이', after: '샤미드', stone: '물의돌', available: '가능', timing: '즉시 진화', reason: '파도타기/냉동빔 운용 목적' },
  { pokemonId: 135, before: '이브이', after: '쥬피썬더', stone: '천둥의돌', available: '가능', timing: '즉시 진화', reason: '10만볼트 운용 목적' },
  { pokemonId: 136, before: '이브이', after: '부스터', stone: '불꽃의돌', available: '가능', timing: '즉시 진화 가능', reason: '성능상 우선도는 낮음' },
  { pokemonId: 38, before: '식스테일', after: '나인테일', stone: '불꽃의돌', available: '교환 필요', timing: 'Lv35 화염방사 이후', reason: '레드 단독 입수 불가' },
  { pokemonId: 71, before: '우츠동', after: '우츠보트', stone: '리프의돌', available: '교환 필요', timing: 'Lv38 잎날가르기 이후', reason: '레드 단독 입수 불가' },
]

export interface TradeEvoRow {
  pokemonId: number
  before: string
  after: string
  timing: string
  reason: string
}

export const TRADE_EVO_SUMMARY: TradeEvoRow[] = [
  { pokemonId: 65, before: '윤겔라', after: '후딘', timing: '윤겔라 Lv16 직후 바로', reason: '기술 손해가 거의 없고 후딘 스탯이 압도적' },
  { pokemonId: 68, before: '근육몬', after: '괴력몬', timing: '근육몬 Lv28 직후 바로', reason: '교환을 미뤄서 얻는 이득이 거의 없음' },
  { pokemonId: 76, before: '데구리', after: '딱구리', timing: '데구리 Lv25 직후 바로', reason: '바로 진화 추천. 단 지진 TM 절약 시 Lv36까지 가능' },
  { pokemonId: 94, before: '고우스트', after: '팬텀', timing: '고우스트 Lv25 직후 바로', reason: '기술 손해가 거의 없고 기술머신 운용이 좋음' },
]

export interface EvoDetailSection {
  pokemonId: number
  pokemon: string
  heading: string
  timing: string
  timingReason: string
  moveTables: {
    label: string
    moves: string[]
  }[]
  moveComparisons: {
    move: string
    desc: string
  }[]
  notes: string[]
  tier: '최상급' | '좋음' | '취향에 따라 좋음' | '애정픽'
}

export const STONE_EVO_DETAILS: EvoDetailSection[] = [
  {
    pokemonId: 34,
    pokemon: '니드리노 → 니드킹',
    heading: '빠른 진화가 정답인 대표 케이스',
    timing: '니드리노 Lv16 이후 바로 달의돌 사용',
    timingReason: '니드킹은 Lv23에 난동부리기를 배운다. 1세대 난동부리기는 초중반 화력이 매우 좋아서, 니드리노 상태로 오래 기다리는 것보다 빠르게 진화하는 편이 낫다.',
    moveTables: [
      { label: '진화 직후', moves: ['뿔찌르기', '독침', '몸통박치기', '울음소리'] },
      { label: 'Lv23 이후', moves: ['난동부리기', '구멍파기', '거품광선', '뿔찌르기'] },
      { label: '최종', moves: ['지진', '눈보라 or 냉동빔', '10만볼트 or 파도타기', '난동부리기 or 누르기'] },
    ],
    moveComparisons: [
      { move: '난동부리기', desc: '초중반 주력기. 위력과 명중률이 좋아 스토리 진행이 빠르다.' },
      { move: '구멍파기', desc: '중반용 땅 타입 기술. 지진을 얻기 전까지 사용하기 좋다.' },
      { move: '지진', desc: '최종 주력기. 지진 기술머신 최우선 후보 중 하나다.' },
      { move: '눈보라/냉동빔', desc: '목호 드래곤 계열 견제용. 눈보라는 화력, 냉동빔은 안정성이 장점이다.' },
    ],
    notes: ['기술폭이 넓지만 기술머신을 많이 요구하므로, 10만볼트와 냉동빔은 보통 쥬피썬더·아쿠스타에게 양보하는 쪽이 좋다.'],
    tier: '최상급',
  },
  {
    pokemonId: 31,
    pokemon: '니드리나 → 니드퀸',
    heading: '안정적인 운용을 원할 때',
    timing: '니드리나 Lv16 이후 바로 달의돌 사용',
    timingReason: '니드퀸은 Lv23에 누르기를 배운다. 누르기는 위력, 명중률, 마비 부가효과가 모두 좋아 스토리 안정성이 높다.',
    moveTables: [
      { label: '진화 직후', moves: ['할퀴기', '꼬리흔들기', '독침', '몸통박치기'] },
      { label: 'Lv23 이후', moves: ['누르기', '구멍파기', '거품광선', '독침'] },
      { label: '최종', moves: ['지진', '누르기', '냉동빔 or 눈보라', '파도타기 or 10만볼트'] },
    ],
    moveComparisons: [
      { move: '누르기', desc: '안정적인 노말 주력기. 마비 부가효과로 스토리 진행이 편해진다.' },
      { move: '지진', desc: '니드킹과 동일하게 최종 주력기로 사용한다.' },
    ],
    notes: ['하나만 쓴다면 보통 니드킹을 더 추천한다. 빠른 돌파가 필요하면 니드킹, 안정적인 운영을 원하면 니드퀸이다.'],
    tier: '좋음',
  },
  {
    pokemonId: 36,
    pokemon: '삐삐 → 픽시',
    heading: '작아지기를 챙기고 진화한다',
    timing: '삐삐 Lv24 작아지기 이후 달의돌 사용',
    timingReason: '삐삐는 Lv24에 작아지기를 배운다. Lv31 손가락흔들기는 재미용에 가깝고 스토리 안정성은 낮다.',
    moveTables: [
      { label: '진화 직후', moves: ['노래하기', '연속뺨치기', '작아지기', '막치기'] },
      { label: '최종', moves: ['누르기', '10만볼트', '냉동빔 or 눈보라', '사이코키네시스 or 작아지기'] },
    ],
    moveComparisons: [
      { move: '작아지기', desc: '회피율을 올려 장기전에서 유용하다.' },
      { move: '손가락흔들기', desc: '재미는 있지만 랜덤성이 커서 공략용으로는 비추천.' },
      { move: '누르기 + 10만볼트', desc: '픽시의 넓은 기술머신 호환을 살리는 안정적인 기술 조합이다.' },
    ],
    notes: ['기술머신 호환이 매우 넓어 다양한 구성을 시도할 수 있다.'],
    tier: '취향에 따라 좋음',
  },
  {
    pokemonId: 40,
    pokemon: '푸린 → 푸크린',
    heading: '누르기를 자연 습득하는 것이 핵심',
    timing: '푸린 Lv34 누르기 이후 달의돌 사용',
    timingReason: '푸린은 Lv34에 누르기를 배운다. 누르기 기술머신을 아낄 수 있다는 점이 가장 큰 장점이다.',
    moveTables: [
      { label: '진화 직후', moves: ['누르기', '노래하기', '웅크리기', '연속뺨치기'] },
      { label: '최종', moves: ['누르기', '냉동빔 or 눈보라', '10만볼트', '괴력 or 잠자기'] },
    ],
    moveComparisons: [
      { move: '누르기', desc: '자연 습득하는 것이 큰 장점. 기술머신을 아낄 수 있다.' },
      { move: '잠자기', desc: '높은 HP와 궁합이 좋은 회복기.' },
    ],
    notes: ['픽시와 비교하면 HP가 높고 누르기를 자연 습득하지만, 방어·스피드가 애매해 보통 픽시를 더 추천한다.'],
    tier: '애정픽',
  },
  {
    pokemonId: 26,
    pokemon: '피카츄 → 라이츄',
    heading: 'Lv43 번개까지 기다릴 필요는 없다',
    timing: '피카츄 Lv26 스피드스타 이후 천둥의돌 사용',
    timingReason: '전기 주력기는 마티스 보상 10만볼트로 해결하는 편이 좋다. Lv43 번개는 명중률이 낮아 반드시 기다릴 이유가 없다.',
    moveTables: [
      { label: '진화 직후', moves: ['전기쇼크', '전기자석파', '전광석화', '스피드스타'] },
      { label: '최종', moves: ['10만볼트', '전기자석파', '스피드스타 or 누르기', '그림자분신 or 지구던지기'] },
    ],
    moveComparisons: [
      { move: '10만볼트', desc: '스토리 전기 타입 주력기. 명중률이 안정적이다.' },
      { move: '번개', desc: '위력은 높지만 명중률이 낮다. 굳이 Lv43까지 기다릴 이유가 적다.' },
      { move: '전기자석파', desc: '빠른 상대를 마비시키는 보조기. 라이츄의 안정성을 크게 올린다.' },
    ],
    notes: ['쥬피썬더와 전기 역할이 겹치므로, 파이리 스타팅이면 보통 쥬피썬더를 우선한다.'],
    tier: '애정픽',
  },
  {
    pokemonId: 45,
    pokemon: '냄새꼬 → 라플레시아',
    heading: '수면가루와 풀 공격기를 함께 챙긴다',
    timing: '냄새꼬 Lv38 꽃잎댄스 이후 리프의돌 사용',
    timingReason: '냄새꼬는 Lv19 수면가루, Lv28 용해액, Lv38 꽃잎댄스를 배운다. 수면가루만 필요하면 Lv19 이후 진화도 가능하지만, 풀 공격기까지 챙기려면 Lv38 이후가 좋다.',
    moveTables: [
      { label: '진화 직후', moves: ['수면가루', '저리가루', '용해액', '꽃잎댄스'] },
      { label: '최종', moves: ['수면가루', '꽃잎댄스 or 메가드레인', '저리가루', '누르기 or 베어가르기'] },
    ],
    moveComparisons: [
      { move: '수면가루', desc: '라플레시아의 핵심 보조기. 포획과 보스전 모두 유용하다.' },
      { move: '꽃잎댄스', desc: '화력은 괜찮지만 행동이 묶이고 혼란 리스크가 있다.' },
      { move: '메가드레인', desc: '회복이 붙지만 위력이 낮다. 보조 공격기에 가깝다.' },
    ],
    notes: ['레드 단독 플레이에서 풀 타입 대표 선택지. 수면가루 덕분에 스토리 안정성이 좋다.'],
    tier: '취향에 따라 좋음',
  },
  {
    pokemonId: 59,
    pokemon: '가디 → 윈디',
    heading: 'Lv50 화염방사는 너무 늦다',
    timing: '가디 Lv39 고속이동 이후 불꽃의돌 사용',
    timingReason: '가디는 Lv30 돌진, Lv39 고속이동, Lv50 화염방사를 배운다. 화염방사까지 기다리면 너무 늦기 때문에 Lv39 이후 진화하고 불대문자 기술머신을 쓰는 편이 현실적이다.',
    moveTables: [
      { label: '진화 직후', moves: ['불꽃세례', '물기', '돌진', '고속이동'] },
      { label: '최종', moves: ['불대문자 or 화염방사', '누르기 or 돌진', '구멍파기', '고속이동 or 파괴광선'] },
    ],
    moveComparisons: [
      { move: '화염방사', desc: '안정적인 불꽃 주력기지만 가디는 Lv50에 배워 너무 늦다.' },
      { move: '불대문자', desc: '화력이 높고 기술머신으로 해결 가능. 파이리 스타팅이면 리자몽과 경쟁한다.' },
      { move: '돌진', desc: '중반 노말 공격기로 사용 가능하지만 반동이 있다.' },
    ],
    notes: ['파이리 스타팅이면 리자몽과 역할이 겹친다. 불대문자를 리자몽에게 줄 가능성이 높으므로 윈디의 우선순위는 내려간다.'],
    tier: '취향에 따라 좋음',
  },
  {
    pokemonId: 62,
    pokemon: '슈륙챙이 → 강챙이',
    heading: '1세대 망각의 가치를 활용한다',
    timing: '슈륙챙이 Lv41 망각 이후 물의돌 사용',
    timingReason: '1세대의 망각은 특수 공격과 특수 내구를 동시에 강화하는 기술이다. 강챙이 운용의 핵심이므로 반드시 챙기고 진화한다.',
    moveTables: [
      { label: '진화 직후', moves: ['최면술', '누르기', '망각', '물대포'] },
      { label: '최종', moves: ['파도타기', '망각', '최면술', '사이코키네시스 or 지진 or 누르기'] },
    ],
    moveComparisons: [
      { move: '망각', desc: '1세대에서는 특수 공격과 특수 내구를 동시에 강화한다. 강챙이의 핵심 강화기.' },
      { move: '파도타기', desc: '안정적인 물 타입 주력기.' },
      { move: '하이드로펌프', desc: '위력은 높지만 명중률이 낮다. 스토리에서는 파도타기가 더 편하다.' },
    ],
    notes: [],
    tier: '좋음',
  },
  {
    pokemonId: 91,
    pokemon: '셀러 → 파르셀',
    heading: '냉동빔은 기술머신으로 보완한다',
    timing: '셀러 Lv30 오로라빔 이후 물의돌 사용',
    timingReason: '셀러는 Lv30 오로라빔, Lv50 냉동빔을 배운다. 냉동빔까지 기다리면 너무 늦기 때문에, 보통은 Lv30 이후 진화하고 기술머신으로 냉동빔 또는 눈보라를 배정한다.',
    moveTables: [
      { label: '진화 직후', moves: ['오로라빔', '껍질끼우기', '초음파', '껍질에숨기'] },
      { label: '최종', moves: ['파도타기', '냉동빔 or 눈보라', '껍질끼우기', '대폭발 or 그림자분신'] },
    ],
    moveComparisons: [
      { move: '오로라빔', desc: 'Lv30에 배워 중반부터 사용 가능하다.' },
      { move: '냉동빔', desc: '안정적인 얼음 기술.' },
      { move: '눈보라', desc: '1세대에서는 명중률이 높고 화력이 강력하다. 사천왕 목호전에서 좋다.' },
      { move: '대폭발', desc: '위급 상황에서 강력한 마무리 기술.' },
    ],
    notes: [],
    tier: '취향에 따라 좋음',
  },
  {
    pokemonId: 121,
    pokemon: '별가사리 → 아쿠스타',
    heading: '1세대 최상급 물 포켓몬',
    timing: '별가사리 Lv27 HP회복 이후 물의돌 사용',
    timingReason: '별가사리는 Lv27 HP회복, Lv32 스피드스타, Lv37 작아지기, Lv47 하이드로펌프를 배운다. HP회복만 챙기고 빠르게 아쿠스타로 만든 뒤 기술머신으로 완성하는 것이 핵심이다.',
    moveTables: [
      { label: '진화 직후', moves: ['몸통박치기', '물대포', '단단해지기', 'HP회복'] },
      { label: '최종 공격형', moves: ['파도타기', '사이코키네시스', '10만볼트', '냉동빔 or 눈보라'] },
      { label: '최종 안정형', moves: ['파도타기', '사이코키네시스', '냉동빔 or 눈보라', 'HP회복'] },
    ],
    moveComparisons: [
      { move: '10만볼트', desc: '물/비행 견제 강화. 공격형 아쿠스타의 핵심.' },
      { move: '냉동빔/눈보라', desc: '풀/비행/드래곤 견제. 어느 쪽이든 강력하다.' },
      { move: 'HP회복', desc: '장기전 안정성 증가. 안정형 아쿠스타의 핵심.' },
      { move: '사이코키네시스', desc: '에스퍼 특수 딜링 확보. 아쿠스타의 기술폭이 매우 넓다.' },
    ],
    notes: ['빠르고, 특수가 좋고, 기술머신 호환이 매우 넓다. 1세대 스토리 최상급 물 포켓몬이다.'],
    tier: '최상급',
  },
  {
    pokemonId: 103,
    pokemon: '아라리 → 나시',
    heading: '수면가루 최적화를 중시할수록 늦게 진화한다',
    timing: '아라리 Lv48 수면가루 이후 리프의돌 사용',
    timingReason: '최적화 기준은 Lv48 수면가루다. 스토리 진행 속도를 중시하면 Lv42 솔라빔 이후에 진화해도 된다.',
    moveTables: [
      { label: 'Lv48 진화 직후', moves: ['수면가루', '솔라빔', '저리가루', '리플렉터'] },
      { label: '최종', moves: ['수면가루', '사이코키네시스', '메가드레인 or 솔라빔', '대폭발 or 리플렉터'] },
    ],
    moveComparisons: [
      { move: '수면가루', desc: '명중률이 최면술보다 높아 더 안정적이다.' },
      { move: '사이코키네시스', desc: '나시의 핵심 특수 공격기.' },
      { move: '솔라빔', desc: '한 방 화력은 좋지만 충전 턴이 필요하다.' },
      { move: '메가드레인', desc: '위력은 낮지만 회복이 붙는다.' },
      { move: '대폭발', desc: '위급 상황에서 강력한 마무리 기술.' },
    ],
    notes: ['레드 레드 단독 플레이에서 후반 합류하는 풀·에스퍼 대표 선택지이다.'],
    tier: '좋음',
  },
  {
    pokemonId: 134,
    pokemon: '이브이 → 샤미드',
    heading: '안정적인 물 포켓몬 원할 때',
    timing: '무지개시티 이브이 입수 후 바로 물의돌 사용',
    timingReason: '이브이는 레벨업으로 배우는 기술이 거의 없으므로 즉시 진화해도 손해가 없다.',
    moveTables: [
      { label: '진화 직후', moves: ['몸통박치기', '모래뿌리기', '꼬리흔들기'] },
      { label: '최종', moves: ['파도타기', '냉동빔 or 눈보라', '누르기', '녹기 or 잠자기'] },
    ],
    moveComparisons: [
      { move: '녹기', desc: '방어력을 높여 장기전에 유리하다.' },
      { move: '잠자기', desc: '높은 HP와 궁합이 좋은 회복기.' },
    ],
    notes: ['아쿠스타보다 느리지만 튼튼하고 운용이 단순하다. 기술머신 투자가 어렵다면 안정적인 선택이다.'],
    tier: '최상급',
  },
  {
    pokemonId: 135,
    pokemon: '이브이 → 쥬피썬더',
    heading: '전기 역할을 확실하게 맡긴다',
    timing: '무지개시티 이브이 입수 후 바로 천둥의돌 사용',
    timingReason: '이브이는 레벨업으로 배우는 기술이 거의 없으므로 즉시 진화해도 손해가 없다.',
    moveTables: [
      { label: '진화 직후', moves: ['몸통박치기', '모래뿌리기', '꼬리흔들기'] },
      { label: '최종', moves: ['10만볼트', '전기자석파', '두번치기 or 바늘미사일', '전광석화 or 그림자분신'] },
    ],
    moveComparisons: [
      { move: '10만볼트', desc: '쥬피썬더의 핵심 전기 주력기.' },
      { move: '전기자석파', desc: '빠른 상대를 마비시켜 안정적으로 운영 가능.' },
      { move: '두번치기', desc: '바위·노말 등 일부 상대로 보조 견제 가능.' },
      { move: '바늘미사일', desc: '에스퍼 견제처럼 보이지만 안정성이 낮다.' },
    ],
    notes: ['파이리 스타팅에서 칸나, 목호 갸라도스, 챔피언 거북왕을 처리하는 핵심 포켓몬이다.'],
    tier: '최상급',
  },
  {
    pokemonId: 136,
    pokemon: '이브이 → 부스터',
    heading: '파이리 스타팅이면 리자몽과 역할이 겹친다',
    timing: '즉시 진화 가능',
    timingReason: '성능만 보면 샤미드/쥬피썬더보다 우선도가 낮다.',
    moveTables: [
      { label: '진화 직후', moves: ['몸통박치기', '모래뿌리기', '꼬리흔들기'] },
      { label: '최종', moves: ['불대문자 or 화염방사', '누르기', '전광석화', '그림자분신 or 파괴광선'] },
    ],
    moveComparisons: [
      { move: '불대문자', desc: '부스터의 주력기 후보. 파이리 스타팅이면 리자몽과 경쟁한다.' },
      { move: '화염방사', desc: '안정적이지만 부스터의 높은 공격을 특수 기술로 살리기 어렵다.' },
    ],
    notes: ['1세대에서 불꽃 기술은 특수 판정이라 높은 공격을 제대로 살리기 어렵다. 파이리 스타팅이면 거의 애정픽에 가깝다.'],
    tier: '애정픽',
  },
]

export const TRADE_EVO_DETAILS: EvoDetailSection[] = [
  {
    pokemonId: 65,
    pokemon: '윤겔라 → 후딘',
    heading: '1세대 최상급 에스퍼 포켓몬',
    timing: '윤겔라가 되는 Lv16 직후 바로 교환',
    timingReason: '윤겔라와 후딘은 주요 레벨업 기술 타이밍이 비슷해서 교환을 미뤄도 큰 이득이 없다. 후딘은 1세대 최상급 에스퍼 포켓몬이다.',
    moveTables: [
      { label: '교환 직후', moves: ['염동력', '순간이동', '사슬묶기'] },
      { label: 'Lv31 이후', moves: ['사이코빔', 'HP회복', '사슬묶기', '순간이동'] },
      { label: '최종', moves: ['사이코키네시스', 'HP회복', '전기자석파 or 리플렉터', '지구던지기 or 그림자분신'] },
    ],
    moveComparisons: [
      { move: '사이코빔', desc: '중반 에스퍼 주력기.' },
      { move: '사이코키네시스', desc: '최종 주력기. 기술머신을 아끼고 싶다면 Lv38 자연 습득을 기다릴 수 있다.' },
      { move: 'HP회복', desc: '후딘의 안정성을 크게 올리는 회복기.' },
      { move: '전기자석파', desc: '빠른 상대를 마비시키는 보조기.' },
    ],
    notes: ['높은 스피드와 특수 화력으로 대부분의 상대를 먼저 처리할 수 있다. 단, 물리 내구가 낮다.', '통신교환이 가능하다면 가장 먼저 쓸 포켓몬이다.'],
    tier: '최상급',
  },
  {
    pokemonId: 68,
    pokemon: '근육몬 → 괴력몬',
    heading: '교환을 미룰 이유가 없다',
    timing: '근육몬이 되는 Lv28 직후 바로 교환',
    timingReason: '근육몬과 괴력몬은 레벨업 기술 습득 면에서 교환을 미룰 이유가 거의 없다.',
    moveTables: [
      { label: '교환 직후', moves: ['태권당수', '안다리걸기', '째려보기'] },
      { label: '중반', moves: ['태권당수', '안다리걸기', '괴력', '구멍파기'] },
      { label: '최종', moves: ['괴력', '지진 or 구멍파기', '지구던지기 or 지옥의바퀴', '누르기 or 파괴광선'] },
    ],
    moveComparisons: [
      { move: '괴력', desc: '스토리 비전머신이면서 괴력몬이 잘 활용한다.' },
      { move: '지진', desc: '줄 수 있다면 강력하지만 경쟁자가 많다.' },
      { move: '지옥의바퀴', desc: '격투 자속기지만 반동이 있어 안정성이 떨어진다.' },
    ],
    notes: ['공격력이 높지만 1세대는 에스퍼가 강한 세대라 후반 체감은 후딘/팬텀에 비해 낮을 수 있다.'],
    tier: '취향에 따라 좋음',
  },
  {
    pokemonId: 76,
    pokemon: '데구리 → 딱구리',
    heading: '지진 TM 절약 여부에 따라 타이밍이 달라진다',
    timing: '데구리 Lv25 직후 바로 교환. 단, 지진 TM 절약 시 Lv36 지진 이후 가능',
    timingReason: '딱구리는 Lv36에 지진을 자연 습득한다. 지진 기술머신을 아끼고 싶다면 Lv36까지 기다리는 것도 가능하다.',
    moveTables: [
      { label: '교환 직후', moves: ['몸통박치기', '웅크리기', '돌떨구기', '자폭'] },
      { label: 'Lv36 이후', moves: ['지진', '돌떨구기', '자폭', '단단해지기'] },
      { label: '최종', moves: ['지진', '돌떨구기', '대폭발 or 자폭', '누르기 or 파괴광선'] },
    ],
    moveComparisons: [
      { move: '돌떨구기', desc: '바위 타입 자속기이지만 명중률이 불안하다.' },
      { move: '지진', desc: '딱구리의 핵심 주력기. 자연 습득이 가능하다는 점이 장점.' },
      { move: '자폭/대폭발', desc: '위급 상황에서 강력한 마무리 기술.' },
    ],
    notes: ['물리 내구와 공격력이 좋다. 단, 물/풀에 4배 약점이 있어 상대를 가려서 써야 한다.'],
    tier: '좋음',
  },
  {
    pokemonId: 94,
    pokemon: '고우스트 → 팬텀',
    heading: '최면술 + 꿈먹기, 또는 기술머신 딜러',
    timing: '고우스트가 되는 Lv25 직후 바로 교환',
    timingReason: '고우스트와 팬텀은 주요 기술 습득 면에서 교환을 미룰 이유가 거의 없다.',
    moveTables: [
      { label: '교환 직후', moves: ['핥기', '괴상한빛', '나이트헤드'] },
      { label: 'Lv29 이후', moves: ['최면술', '괴상한빛', '나이트헤드', '핥기'] },
      { label: 'Lv38 이후', moves: ['최면술', '꿈먹기', '괴상한빛', '나이트헤드'] },
      { label: '최종', moves: ['최면술', '꿈먹기 or 사이코키네시스', '10만볼트', '괴상한빛 or 나이트헤드'] },
    ],
    moveComparisons: [
      { move: '최면술', desc: '수면 보조기지만 명중률이 낮다.' },
      { move: '꿈먹기', desc: '최면술과 연계할 수 있는 에스퍼 기술.' },
      { move: '사이코키네시스', desc: '최면술 의존도를 낮추는 안정적인 특수 공격기.' },
      { move: '10만볼트', desc: '물/비행 견제용.' },
    ],
    notes: ['1세대에서는 팬텀의 고스트 공격기로 에스퍼를 잡는다는 느낌이 잘 나지 않는다.', '오히려 최면술 + 꿈먹기, 또는 사이코키네시스/10만볼트 기술머신 운용이 핵심이다.'],
    tier: '최상급',
  },
]

export interface MoveChoiceSection {
  title: string
  options: {
    move: string
    pros: string
    cons: string
  }[]
  recommendation: string
  targets: string[]
}

export const MOVE_CHOICE_GUIDE: MoveChoiceSection[] = [
  {
    title: '10만볼트 vs 번개',
    options: [
      { move: '10만볼트', pros: '명중률 안정, 주력기로 편함', cons: '기술머신 경쟁 있음' },
      { move: '번개', pros: '화력 높음', cons: '명중률 낮아 불안정' },
    ],
    recommendation: '스토리 기준은 10만볼트 추천',
    targets: ['라이츄', '쥬피썬더', '아쿠스타', '팬텀', '픽시', '니드킹', '니드퀸'],
  },
  {
    title: '냉동빔 vs 눈보라',
    options: [
      { move: '냉동빔', pros: '명중률 안정', cons: '한 방 화력은 눈보라보다 낮음' },
      { move: '눈보라', pros: '1세대에서 강력한 결정력', cons: '기술머신 배분 고민 필요' },
    ],
    recommendation: '안정성은 냉동빔, 결정력은 눈보라. 목호전까지 생각하면 눈보라도 매우 좋다.',
    targets: ['아쿠스타', '샤미드', '파르셀', '니드킹', '니드퀸', '픽시', '푸크린'],
  },
  {
    title: '파도타기 vs 하이드로펌프',
    options: [
      { move: '파도타기', pros: '명중률 안정, 비전머신이라 여러 포켓몬에게 사용 가능', cons: '없음에 가까움' },
      { move: '하이드로펌프', pros: '위력 높음', cons: '명중률 낮음' },
    ],
    recommendation: '거의 항상 파도타기 추천',
    targets: ['샤미드', '아쿠스타', '강챙이', '파르셀', '니드킹', '니드퀸'],
  },
  {
    title: '화염방사 vs 불대문자',
    options: [
      { move: '화염방사', pros: '안정적인 명중률', cons: '가디는 Lv50 습득이라 너무 늦음' },
      { move: '불대문자', pros: '높은 화력, 기술머신으로 해결 가능', cons: '명중률이 다소 낮고 기술머신 경쟁 있음' },
    ],
    recommendation: '화염방사는 안정성, 불대문자는 화력. 파이리 스타팅이면 불대문자는 리자몽에게 주는 쪽이 자연스럽다.',
    targets: ['리자몽', '윈디', '나인테일', '부스터'],
  },
  {
    title: '누르기 vs 이판사판태클',
    options: [
      { move: '누르기', pros: '명중률 안정, 마비 부가효과', cons: '기술머신 경쟁 있음' },
      { move: '이판사판태클', pros: '위력 높음', cons: '반동이 있어 불편함' },
    ],
    recommendation: '스토리 기준은 누르기 추천',
    targets: ['니드킹', '니드퀸', '픽시', '아쿠스타', '샤미드'],
  },
]

export interface TierListSection {
  tier: '최상급' | '좋음' | '취향에 따라 좋음' | '애정픽'
  pokemon: { pokemonId: number; name: string }[]
}

export const STONE_EVO_TIER: TierListSection[] = [
  { tier: '최상급', pokemon: [{ pokemonId: 34, name: '니드킹' }, { pokemonId: 121, name: '아쿠스타' }, { pokemonId: 135, name: '쥬피썬더' }, { pokemonId: 134, name: '샤미드' }] },
  { tier: '좋음', pokemon: [{ pokemonId: 31, name: '니드퀸' }, { pokemonId: 103, name: '나시' }, { pokemonId: 62, name: '강챙이' }, { pokemonId: 71, name: '우츠보트' }] },
  { tier: '취향에 따라 좋음', pokemon: [{ pokemonId: 59, name: '윈디' }, { pokemonId: 38, name: '나인테일' }, { pokemonId: 36, name: '픽시' }, { pokemonId: 91, name: '파르셀' }] },
  { tier: '애정픽', pokemon: [{ pokemonId: 40, name: '푸크린' }, { pokemonId: 45, name: '라플레시아' }, { pokemonId: 136, name: '부스터' }, { pokemonId: 26, name: '라이츄' }] },
]

export const TRADE_EVO_TIER: TierListSection[] = [
  { tier: '최상급', pokemon: [{ pokemonId: 65, name: '후딘' }, { pokemonId: 94, name: '팬텀' }] },
  { tier: '좋음', pokemon: [{ pokemonId: 76, name: '딱구리' }] },
  { tier: '취향에 따라 좋음', pokemon: [{ pokemonId: 68, name: '괴력몬' }] },
]

export const RECOMMENDED_COMBO_1 = [
  { role: '불꽃/비행', pokemon: '리자몽', pokemonId: 6 },
  { role: '물리 만능', pokemon: '니드킹', pokemonId: 34 },
  { role: '전기', pokemon: '쥬피썬더', pokemonId: 135 },
  { role: '물/얼음', pokemon: '아쿠스타 or 샤미드', pokemonId: 121 },
  { role: '에스퍼', pokemon: '후딘', pokemonId: 65 },
  { role: '보조/고스트', pokemon: '팬텀', pokemonId: 94 },
]

export const RECOMMENDED_COMBO_2 = [
  { role: '불꽃/비행', pokemon: '리자몽', pokemonId: 6 },
  { role: '물리 만능', pokemon: '니드킹', pokemonId: 34 },
  { role: '전기', pokemon: '쥬피썬더 or 라이츄', pokemonId: 135 },
  { role: '물/얼음', pokemon: '샤미드 or 아쿠스타', pokemonId: 134 },
  { role: '풀/보조', pokemon: '라플레시아 or 나시', pokemonId: 45 },
  { role: '비전/보조', pokemon: '자유 선택', pokemonId: 0 },
]

export const PRIORITY_FOR_CHARMANDER = [
  { rank: 1, pokemonId: 34, pokemon: '니드킹' },
  { rank: 2, pokemonId: 135, pokemon: '쥬피썬더' },
  { rank: 3, pokemonId: 121, pokemon: '아쿠스타 or 샤미드' },
  { rank: 4, pokemonId: 65, pokemon: '후딘' },
  { rank: 5, pokemonId: 94, pokemon: '팬텀' },
  { rank: 6, pokemonId: 103, pokemon: '나시' },
]

// 포켓몬 이름→ID 매핑 (본문 링크 생성용, 길이 내림차순 정렬)
const RED_EVO_NAME_TO_ID_ENTRIES: [string, number][] = [
  ['파이리', 4],
  ['리자몽', 6],
  ['거북왕', 9],
  ['니드리나', 29],
  ['니드퀸', 31],
  ['니드런♂', 32],
  ['니드리노', 33],
  ['니드킹', 34],
  ['삐삐', 35],
  ['픽시', 36],
  ['식스테일', 37],
  ['나인테일', 38],
  ['푸린', 39],
  ['푸크린', 40],
  ['우츠동', 70],
  ['우츠보트', 71],
  ['냄새꼬', 44],
  ['라플레시아', 45],
  ['가디', 58],
  ['윈디', 59],
  ['슈륙챙이', 61],
  ['강챙이', 62],
  ['캐이시', 63],
  ['윤겔라', 64],
  ['후딘', 65],
  ['근육몬', 67],
  ['괴력몬', 68],
  ['데구리', 75],
  ['딱구리', 76],
  ['셀러', 90],
  ['파르셀', 91],
  ['고우스트', 93],
  ['팬텀', 94],
  ['아라리', 102],
  ['나시', 103],
  ['피카츄', 25],
  ['라이츄', 26],
  ['별가사리', 120],
  ['아쿠스타', 121],
  ['이브이', 133],
  ['샤미드', 134],
  ['쥬피썬더', 135],
  ['부스터', 136],
]

export const RED_EVO_NAME_TO_ID = new Map(
  [...RED_EVO_NAME_TO_ID_ENTRIES].sort((a, b) => b[0].length - a[0].length),
)
