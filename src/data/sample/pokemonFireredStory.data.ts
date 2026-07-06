// 포켓몬 파이어레드(3세대) 스토리 엔트리 공략 데이터.
// .ref/pokemon_firered_story_guide_charmander.md 를 사이트용으로 구조화한 것.

export const FIRERED_STORY_FINAL_PARTY_IDS = [6, 34, 135, 131, 143, 103] // 리자몽/니드킹/쥬피썬더/라프라스/잠만보/나시

export interface RoleRow {
  pokemon: string
  role: string
}

export const FIRERED_STORY_FINAL_ROLES: RoleRow[] = [
  { pokemon: '리자몽', role: '불꽃·비행 타입 메인 딜러, 풀·벌레·격투 처리, 공중날기 담당' },
  { pokemon: '니드킹', role: '초반 바위 대응, 땅·격투·바위 견제, 넓은 기술폭의 물리 딜러' },
  { pokemon: '쥬피썬더', role: '물·비행 타입 처리, 전기자석파 유틸, 칸나·목호·챔피언전 핵심' },
  { pokemon: '라프라스', role: '물 타입 주력, 파도타기 담당, 냉동빔으로 목호 드래곤 처리' },
  { pokemon: '잠만보', role: '고내구 범용 딜러, 섀도볼로 고스트·에스퍼 견제, 괴력 담당' },
  { pokemon: '나시', role: '풀·에스퍼 보조 딜러, 수면가루, 물·땅·바위 타입 대응' },
]

export const FIRERED_STORY_GOALS = [
  '관동 스토리 진행',
  '체육관 8개 클리어',
  '사천왕 및 챔피언 클리어',
  '비전머신과 기술머신 배분 최적화',
  '돌 진화 포켓몬의 진화 타이밍 최적화',
]

export const FIRERED_STORY_MID_GAME: { early: string; mid: string; late: string } = {
  early: '파이리 / 니드런♂ / 망키 / 뚜벅쵸 / 피카츄 / 자유 슬롯',
  mid: '리자드 / 니드킹 / 냄새꼬 / 쥬피썬더 / 잠만보 / 자유 슬롯',
  late: '리자몽 / 니드킹 / 쥬피썬더 / 라프라스 / 잠만보 / 나시',
}

export interface TempPokemonRow {
  pokemon: string
  role: string
  switchTiming: string
}

export const FIRERED_STORY_TEMP_POKEMON: TempPokemonRow[] = [
  { pokemon: '망키', role: '웅전 바위 타입 대응, 초반 격투 딜러', switchTiming: '니드런♂이 두번치기를 안정적으로 쓰면 교체 가능' },
  { pokemon: '뚜벅쵸 / 냄새꼬', role: '이슬전 대응, 수면가루, 물·땅 견제', switchTiming: '사파리존에서 아라리를 확보하면 나시로 교체 가능' },
  { pokemon: '피카츄', role: '이슬전 보조, 초중반 물·비행 견제', switchTiming: '무지개시티에서 이브이를 얻고 쥬피썬더로 교체' },
  { pokemon: '깨비참 / 피죤', role: '임시 공중날기 담당', switchTiming: '리자몽 완성 후 교체 가능' },
]

export interface CatchRow {
  timing: string
  pokemonId: number
  pokemon: string
  note: string
}

export const FIRERED_STORY_CATCH_TABLE: CatchRow[] = [
  { timing: '시작', pokemonId: 4, pokemon: '파이리', note: '스타팅 선택. 최종 리자몽' },
  { timing: '상록숲 전후', pokemonId: 25, pokemon: '피카츄', note: '이슬전 보조 및 쥬피썬더 전까지 전기 타입 역할' },
  { timing: '22번도로', pokemonId: 56, pokemon: '망키', note: '웅전 대비. 로우킥으로 꼬마돌·롱스톤 대응' },
  { timing: '3번도로', pokemonId: 32, pokemon: '니드런♂', note: '최종 니드킹. 두번치기로 웅전 보조, 달맞이산에서 달의돌 확보' },
  { timing: '24·25번도로', pokemonId: 43, pokemon: '뚜벅쵸', note: '파이어레드 한정 초중반 풀 타입. 이슬전과 포획 보조' },
  { timing: '무지개시티', pokemonId: 133, pokemon: '이브이', note: '무지개맨션 뒷문으로 입장해 획득. 최종 쥬피썬더' },
  { timing: '12번도로 / 16번도로', pokemonId: 143, pokemon: '잠만보', note: '포켓몬피리 획득 후 포획. 고내구 범용 딜러' },
  { timing: '실프주식회사', pokemonId: 131, pokemon: '라프라스', note: '라이벌 격파 후 NPC에게 선물로 획득. 물·얼음 타입 핵심' },
  { timing: '사파리존', pokemonId: 102, pokemon: '아라리', note: '최종 나시. 수면가루와 에스퍼·풀 타입 보조' },
]

export interface StoneEvoRow {
  pokemon: string
  item: string
  timing: string
  reason: string
}

export const FIRERED_STORY_STONE_EVO_TABLE: StoneEvoRow[] = [
  {
    pokemon: '니드킹',
    item: '달의돌',
    timing: '니드리노 레벨 22 뿔찌르기 습득 후',
    reason: '뿔찌르기 확보 후 바로 니드킹으로 진화하면 레벨 22 난동부리기와 후반 메가폰까지 활용 가능',
  },
  {
    pokemon: '쥬피썬더',
    item: '번개의돌',
    timing: '이브이 레벨 30 물기 습득 후 권장',
    reason: '물기는 3세대에서 특수 악 타입이라 초련·국화전 보조 견제로 유용함. 두번치기를 중시하면 즉시 진화도 가능',
  },
  {
    pokemon: '나시',
    item: '리프의돌',
    timing: '아라리 레벨 37 수면가루 습득 후 권장',
    reason: '나시로 진화하면 아라리의 주요 보조기 습득 기회를 놓치기 쉬움',
  },
  {
    pokemon: '라플레시아',
    item: '리프의돌',
    timing: '냄새꼬 레벨 18 수면가루 확보 후 즉시 가능',
    reason: '스토리용이면 수면가루만 확보해도 충분. 끝까지 쓸 경우 레벨 44 꽃잎댄스까지 고려 가능',
  },
]

export interface MoveSetSection {
  pokemonId: number
  pokemon: string
  finalMoves: string[]
  moveTable: { move: string; usage: string }[]
  notes: string[]
}

export const FIRERED_STORY_MOVESETS: MoveSetSection[] = [
  {
    pokemonId: 6,
    pokemon: '리자몽',
    finalMoves: ['화염방사', '공중날기 / 날개치기', '베어가르기', '드래곤클로 / 깨트리다 / 강철날개'],
    moveTable: [
      { move: '화염방사', usage: '주력 불꽃 기술. 리자드 계열 레벨업으로 습득 가능' },
      { move: '공중날기', usage: '이동용 비전머신 및 격투·풀 타입 처리' },
      { move: '날개치기', usage: '공중날기보다 전투 템포가 빠른 비행 기술' },
      { move: '베어가르기', usage: '안정적인 노말 물리 공격' },
      { move: '드래곤클로', usage: '챔피언로드에서 획득. 드래곤 견제 보조' },
      { move: '깨트리다', usage: '바위·노말·얼음 타입 견제 보조' },
      { move: '강철날개', usage: '바위 타입 견제 보조. 명중률은 다소 불안정' },
    ],
    notes: [
      '파이리는 파이어레드에서 메탈크로우를 배워 웅전이 원작 1세대보다 훨씬 수월하다.',
      '리자몽은 레벨 36에 완성되며, 이때부터 공중날기 담당으로도 쓸 수 있다.',
      '기술머신 화염방사는 무지개시티 게임코너에서 얻을 수 있지만, 리자드 계열은 레벨업 화염방사로 충분하다.',
    ],
  },
  {
    pokemonId: 34,
    pokemon: '니드킹',
    finalMoves: ['지진', '깨트리다', '스톤샤워 / 암석봉인', '메가폰 / 괴력 / 섀도볼'],
    moveTable: [
      { move: '지진', usage: '주력 땅 타입 기술. 독·전기·바위·불꽃 타입 처리' },
      { move: '깨트리다', usage: '바위·노말·얼음 타입 견제. 잠만보, 라프라스, 롱스톤 대응' },
      { move: '스톤샤워', usage: '비행·불꽃·얼음 타입 견제. 기술가르침 1회성 후보' },
      { move: '암석봉인', usage: '웅 격파 보상. 스톤샤워 전 임시 바위 기술' },
      { move: '메가폰', usage: '에스퍼·악·풀 타입 견제. 레벨 43에 습득' },
      { move: '괴력', usage: '이동용 비전머신 및 안정적인 물리 공격' },
      { move: '섀도볼', usage: '에스퍼·고스트 견제. 잠만보와 경쟁하는 기술머신 후보' },
    ],
    notes: [
      '가장 추천하는 진화 타이밍은 니드리노 레벨 22 뿔찌르기 습득 후 달의돌을 쓰는 것이다.',
      '니드킹은 기술폭이 매우 넓지만 기술머신을 많이 요구하므로, 10만볼트와 냉동빔은 보통 쥬피썬더·라프라스에게 양보한다.',
    ],
  },
  {
    pokemonId: 135,
    pokemon: '쥬피썬더',
    finalMoves: ['10만볼트', '전기자석파', '물기', '전광석화 / 두번치기 / 바늘미사일'],
    moveTable: [
      { move: '10만볼트', usage: '주력 전기 기술. 칸나, 목호 갸라도스, 챔피언 거북왕 처리 핵심' },
      { move: '전기자석파', usage: '빠른 상대 마비. 보스전 안정화' },
      { move: '물기', usage: '에스퍼·고스트 타입 보조 견제' },
      { move: '전광석화', usage: '마무리 선공기' },
      { move: '두번치기', usage: '바위·노말 타입 보조 견제. 위력은 낮지만 범용성 있음' },
      { move: '바늘미사일', usage: '에스퍼 타입 견제 보조. 명중과 위력은 불안정' },
    ],
    notes: [
      '가장 추천하는 진화 타이밍은 이브이 레벨 30 물기 습득 후 번개의돌을 사용하는 것이다.',
      '전기가 급하면 무지개시티에서 이브이를 얻자마자 진화해도 된다.',
      '쥬피썬더는 스피드가 매우 높아 칸나의 물 타입, 목호의 갸라도스, 챔피언의 거북왕을 안정적으로 처리한다.',
    ],
  },
  {
    pokemonId: 131,
    pokemon: '라프라스',
    finalMoves: ['파도타기', '냉동빔', '누르기', '이상한빛 / 멸망의노래 / 비바라기'],
    moveTable: [
      { move: '파도타기', usage: '주력 물 기술 및 이동용 비전머신' },
      { move: '냉동빔', usage: '목호 드래곤에어·망나뇽 처리 핵심' },
      { move: '누르기', usage: '안정적인 노말 물리 공격 및 마비 기대' },
      { move: '이상한빛', usage: '장기전 보조' },
      { move: '멸망의노래', usage: '강한 상대를 강제로 정리하는 보험' },
      { move: '비바라기', usage: '파도타기 강화. 필수는 아님' },
    ],
    notes: [
      '라프라스는 실프주식회사에서 선물로 받을 수 있어 별도 포획 부담이 없다.',
      '레벨 31에 냉동빔을 배우므로 목호전 대비가 쉽다.',
      '물 타입과 얼음 타입을 동시에 담당하기 때문에 파이리 스타팅의 약점을 매우 잘 보완한다.',
    ],
  },
  {
    pokemonId: 143,
    pokemon: '잠만보',
    finalMoves: ['누르기 / 은혜갚기', '섀도볼', '괴력', '잠자기 / 깨트리다 / 지진'],
    moveTable: [
      { move: '누르기', usage: '포획 당시부터 유용한 안정적인 노말 공격' },
      { move: '은혜갚기', usage: '친밀도가 높을 때 강력한 노말 물리 공격' },
      { move: '섀도볼', usage: '국화의 고스트 타입, 초련·챔피언의 에스퍼 타입 견제' },
      { move: '괴력', usage: '이동용 비전머신 및 실전 물리 공격' },
      { move: '잠자기', usage: '고내구와 궁합이 좋은 회복기' },
      { move: '깨트리다', usage: '노말·얼음·바위 타입 견제' },
      { move: '지진', usage: '범용 고위력 기술. 니드킹과 경쟁하는 1회성 기술머신' },
    ],
    notes: [
      '잠만보는 12번도로 또는 16번도로에서 포켓몬피리로 깨운 뒤 포획한다.',
      '포획 난도가 다소 있으므로 저장 후 포획을 권장한다.',
      '섀도볼은 무지개시티 게임코너에서 얻는 고급 기술머신이며, 이 공략에서는 잠만보에게 주는 것이 가장 안정적이다.',
      '잠만보는 특수내구가 높아 초련, 국화, 챔피언전에서 안정적인 교체 카드로 쓸 수 있다.',
    ],
  },
  {
    pokemonId: 103,
    pokemon: '나시',
    finalMoves: ['사이코키네시스', '기가드레인', '수면가루', '씨뿌리기 / 솔라빔 / 빛의장막'],
    moveTable: [
      { move: '사이코키네시스', usage: '주력 에스퍼 기술. 독·격투 타입 처리' },
      { move: '기가드레인', usage: '물·땅·바위 타입 견제 및 회복' },
      { move: '수면가루', usage: '포획 및 보스전 보조' },
      { move: '씨뿌리기', usage: '장기전 보조' },
      { move: '솔라빔', usage: '고위력 풀 타입 기술. 쾌청과 연계 시 선택 가능' },
      { move: '빛의장막', usage: '특수 공격 대응 보조' },
    ],
    notes: [
      '나시는 후반 합류지만 풀 타입과 에스퍼 타입을 동시에 제공한다.',
      '수면가루를 중시하면 레벨 37까지 기다린 뒤 진화한다.',
      '빠른 스토리 진행만 원하면 아라리 포획 후 사이코키네시스, 기가드레인 기술머신을 확보한 뒤 바로 진화해도 된다.',
    ],
  },
]

export interface HmRow {
  hm: string
  move: string
  pokemon: string
  location: string
  badge: string
  note: string
}

export const FIRERED_STORY_HM_TABLE: HmRow[] = [
  { hm: 'HM01', move: '풀베기', pokemon: '냄새꼬 / 임시 포켓몬', location: '상트앙느호 선장', badge: '블루배지', note: '최종 엔트리 교체 예정 포켓몬에게 배정 권장' },
  { hm: 'HM02', move: '공중날기', pokemon: '리자몽', location: '16번도로 민가 NPC', badge: '오렌지배지', note: '리자몽 완성 후 이동 편의성 핵심' },
  { hm: 'HM03', move: '파도타기', pokemon: '라프라스', location: '사파리존 비밀의집 NPC', badge: '핑크배지', note: '라프라스 주력 물 기술' },
  { hm: 'HM04', move: '괴력', pokemon: '잠만보 / 니드킹', location: '사파리존 금틀니를 원장에게 반환', badge: '무지개배지', note: '잠만보에게 주면 전투와 이동을 겸함' },
  { hm: 'HM05', move: '플래시', pokemon: '피카츄 / 쥬피썬더 / 임시 포켓몬', location: '2번도로 오박사 조수, 포획 10종 필요', badge: '회색배지', note: '돌산터널용. 필수는 아니지만 있으면 편함' },
  { hm: 'HM06', move: '바위깨기', pokemon: '임시 포켓몬', location: '일곱섬 1섬 온천 NPC', badge: '골드배지', note: '본편 사천왕 전에는 비중이 낮음' },
  { hm: 'HM07', move: '폭포오르기', pokemon: '라프라스 / 임시 물 포켓몬', location: '4섬 얼음폭포동굴', badge: '진홍배지', note: '전국도감 이후 진행용' },
]

export interface TmRow {
  tm: string
  move: string
  target: string
  location: string
  priority: string
  desc: string
}

export const FIRERED_STORY_TM_PRIORITY: TmRow[] = [
  { tm: 'TM24', move: '10만볼트', target: '쥬피썬더', location: '무지개시티 게임코너 4,000코인', priority: '매우 높음', desc: '쥬피썬더의 핵심 주력기' },
  { tm: 'TM13', move: '냉동빔', target: '라프라스 / 스타미', location: '무지개시티 게임코너 4,000코인', priority: '높음', desc: '라프라스는 레벨 31 습득 가능. 스타미 사용 시 우선' },
  { tm: 'TM29', move: '사이코키네시스', target: '나시', location: '노랑시티 Mr. Psychic 집', priority: '높음', desc: '나시의 핵심 에스퍼 기술' },
  { tm: 'TM26', move: '지진', target: '니드킹', location: '상록시티 체육관, 비주기 격파 보상', priority: '매우 높음', desc: '니드킹의 최종 주력기' },
  { tm: 'TM31', move: '깨트리다', target: '니드킹 / 리자몽 / 잠만보', location: '상트앙느호 1층 / 무지개 백화점 3,000원', priority: '높음', desc: '바위·얼음·노말 타입 견제' },
  { tm: 'TM30', move: '섀도볼', target: '잠만보', location: '무지개시티 게임코너 4,500코인', priority: '높음', desc: '국화·초련·챔피언의 에스퍼 포켓몬 견제' },
  { tm: 'TM19', move: '기가드레인', target: '나시 / 냄새꼬', location: '무지개시티 체육관, 민화 격파 보상', priority: '높음', desc: '풀 타입 주력기 및 회복' },
  { tm: 'TM28', move: '구멍파기', target: '니드킹 / 리자드 임시', location: '블루시티 로켓단 격파 / 무지개 백화점 2,000원', priority: '중간', desc: '지진 전까지 유용한 땅 타입 기술' },
]

export const FIRERED_STORY_TM_OPTIONAL: TmRow[] = [
  { tm: 'TM02', move: '드래곤클로', target: '리자몽', location: '챔피언로드 1층 북쪽', priority: '중간', desc: '후반 드래곤 견제 보조' },
  { tm: 'TM35', move: '화염방사', target: '리자몽 선택', location: '무지개시티 게임코너 4,000코인', priority: '낮음', desc: '리자몽은 레벨업으로 습득 가능하므로 보통 아껴도 됨' },
  { tm: 'TM38', move: '불대문자', target: '리자몽 선택', location: '홍련섬 체육관, 강연 격파 보상', priority: '선택', desc: '고위력 불꽃 기술. 명중률은 화염방사보다 낮음' },
  { tm: 'TM27', move: '은혜갚기', target: '잠만보 / 리자몽', location: '12번도로 게이트 NPC', priority: '중간', desc: '친밀도 높은 포켓몬에게 강력한 노말 물리기' },
  { tm: 'TM39', move: '암석봉인', target: '니드킹 임시', location: '회색시티 체육관, 웅 격파 보상', priority: '중간', desc: '초중반 비행·불꽃 타입 견제' },
  { tm: 'TM34', move: '전격파', target: '쥬피썬더 임시', location: '갈색시티 체육관, 마티스 격파 보상', priority: '중간', desc: '10만볼트 전까지 안정적인 전기 기술' },
  { tm: 'TM44', move: '잠자기', target: '잠만보', location: '상트앙느호 지하 1층', priority: '선택', desc: '잠만보와 궁합이 좋음' },
]

export const FIRERED_STORY_TM_NOTES = [
  '10만볼트와 냉동빔은 게임코너 코인이 필요하므로 돈이 많이 든다.',
  '이 공략에서는 10만볼트는 쥬피썬더에게 우선 배정한다.',
  '라프라스는 레벨 31에 냉동빔을 배우므로 냉동빔 TM 비용을 아낄 수 있다.',
  '지진은 상록체육관 보상으로 1회성에 가깝다. 니드킹에게 주는 것이 가장 효율적이다.',
  '섀도볼은 잠만보에게 주면 국화와 초련, 챔피언의 후딘 대응이 쉬워진다.',
  '리자몽은 화염방사를 레벨업으로 배우므로 TM35 화염방사에 집착하지 않아도 된다.',
]

export interface PartyStage {
  title: string
  members: string[]
  goals: string[]
}

export const FIRERED_STORY_STAGES: PartyStage[] = [
  {
    title: '초반: 태초마을 ~ 회색시티',
    members: ['파이리', '망키', '니드런♂', '피카츄', '자유 슬롯', '자유 슬롯'],
    goals: [
      '파이리는 메탈크로우를 확보해 웅전에서 보조 딜러로 사용한다.',
      '망키는 로우킥으로 꼬마돌과 롱스톤을 처리한다.',
      '니드런♂은 레벨 12 두번치기를 배우면 웅전 보조가 가능하다.',
      '피카츄는 상록숲에서 포획해 이슬전까지 육성한다.',
    ],
  },
  {
    title: '초중반: 블루시티 ~ 갈색시티',
    members: ['리자드', '니드리노 / 니드킹', '피카츄', '뚜벅쵸 / 냄새꼬', '망키 / 자유 슬롯', '임시 풀베기 요원'],
    goals: [
      '이슬전은 피카츄와 뚜벅쵸를 중심으로 처리한다.',
      '니드리노는 레벨 22 뿔찌르기 후 달의돌로 진화시키는 것을 권장한다.',
      '갈색시티에서 전격파를 얻으면 피카츄 또는 이후 쥬피썬더의 임시 기술로 사용한다.',
    ],
  },
  {
    title: '중반: 무지개시티 ~ 연분홍시티',
    members: ['리자드 / 리자몽', '니드킹', '쥬피썬더', '냄새꼬', '잠만보', '자유 슬롯'],
    goals: [
      '무지개시티에서 이브이를 얻고, 레벨 30 물기 습득 후 쥬피썬더로 진화한다.',
      '잠만보를 포획해 파티의 안정성을 높인다.',
      '사파리존에서 파도타기와 괴력을 확보한다.',
      '사파리존에서 아라리를 포획해 후반 나시로 교체할 준비를 한다.',
    ],
  },
  {
    title: '후반: 노랑시티 ~ 홍련섬 ~ 상록시티',
    members: ['리자몽', '니드킹', '쥬피썬더', '라프라스', '잠만보', '나시'],
    goals: [
      '실프주식회사에서 라프라스를 받아 물·얼음 타입 전력을 완성한다.',
      '노랑시티에서 사이코키네시스를 얻어 나시에게 배정한다.',
      '상록체육관에서 비주기를 격파한 뒤 지진을 니드킹에게 배정한다.',
      '사천왕 전까지 쥬피썬더, 라프라스, 니드킹의 레벨을 우선적으로 맞춘다.',
    ],
  },
  {
    title: '사천왕 전 최종 준비',
    members: ['리자몽', '니드킹', '쥬피썬더', '라프라스', '잠만보', '나시'],
    goals: [
      '쥬피썬더: 10만볼트 준비',
      '라프라스: 파도타기, 냉동빔 준비',
      '니드킹: 지진, 깨트리다 준비',
      '잠만보: 섀도볼, 은혜갚기 또는 누르기 준비',
      '나시: 사이코키네시스, 기가드레인, 수면가루 준비',
      '리자몽: 화염방사, 공중날기, 베어가르기 준비',
    ],
  },
]

export interface BossSection {
  title: string
  rows: { opponent: string; answer: string }[]
  notes?: string[]
}

export const FIRERED_STORY_GYMS: BossSection[] = [
  {
    title: '회색체육관 웅',
    rows: [
      { opponent: '꼬마돌', answer: '망키 로우킥 / 파이리 메탈크로우 / 니드런♂ 두번치기' },
      { opponent: '롱스톤', answer: '망키 로우킥 / 파이리 메탈크로우 / 니드런♂ 두번치기' },
    ],
    notes: [
      '파이리 단독으로도 가능하지만 안정성은 망키가 가장 높다.',
      '니드런♂을 레벨 12까지 올려 두번치기를 배우면 웅전 난도가 크게 내려간다.',
    ],
  },
  {
    title: '블루체육관 이슬',
    rows: [
      { opponent: '별가사리', answer: '피카츄 / 뚜벅쵸' },
      { opponent: '아쿠스타', answer: '뚜벅쵸 수면가루 + 흡수계 기술 / 피카츄 전기 기술' },
    ],
    notes: ['파이리 스타팅의 최대 초반 고비다.', '뚜벅쵸의 수면가루와 피카츄의 전기 기술을 함께 쓰면 안정적이다.'],
  },
  {
    title: '갈색체육관 마티스',
    rows: [
      { opponent: '찌리리공', answer: '니드킹 구멍파기 / 두번치기' },
      { opponent: '피카츄', answer: '니드킹 구멍파기' },
      { opponent: '라이츄', answer: '니드킹 구멍파기' },
    ],
    notes: ['니드킹이 있으면 매우 쉽다.', '전기 타입 기술은 니드킹에게 통하지 않으므로 안정적으로 처리 가능하다.'],
  },
  {
    title: '무지개체육관 민화',
    rows: [
      { opponent: '우츠동', answer: '리자몽 / 리자드 불꽃 기술' },
      { opponent: '덩쿠리', answer: '리자몽 / 리자드 불꽃 기술' },
      { opponent: '라플레시아', answer: '리자몽 / 리자드 불꽃 기술' },
    ],
    notes: ['파이리 스타팅이 가장 편해지는 구간이다.', '민화 격파 후 기가드레인을 얻어 냄새꼬 또는 나시에게 줄 수 있다.'],
  },
  {
    title: '연분홍체육관 독수',
    rows: [
      { opponent: '또도가스', answer: '리자몽 화염방사 / 나시 사이코키네시스 / 잠만보' },
      { opponent: '질뻐기', answer: '니드킹 지면 기술 / 나시 사이코키네시스' },
      { opponent: '또도가스', answer: '리자몽 화염방사 / 나시 사이코키네시스 / 잠만보' },
    ],
    notes: [
      '3세대 또도가스 계열은 부유 특성 때문에 지면 기술이 통하지 않는다.',
      '나시의 사이코키네시스가 준비되면 독수전 전체가 더 안정적이다.',
    ],
  },
  {
    title: '노랑체육관 초련',
    rows: [
      { opponent: '윤겔라', answer: '잠만보 섀도볼 / 쥬피썬더 물기' },
      { opponent: '마임맨', answer: '잠만보 섀도볼 / 리자몽 화염방사' },
      { opponent: '도나리', answer: '리자몽 화염방사' },
      { opponent: '후딘', answer: '잠만보 섀도볼 / 쥬피썬더 전기자석파 후 처리' },
    ],
    notes: [
      '후딘의 특수 공격이 강하므로 잠만보의 특수내구가 매우 유용하다.',
      '쥬피썬더가 물기를 가지고 있으면 보조 견제가 가능하다.',
    ],
  },
  {
    title: '홍련체육관 강연',
    rows: [
      { opponent: '가디', answer: '라프라스 파도타기 / 니드킹 지진' },
      { opponent: '포니타', answer: '라프라스 파도타기 / 니드킹 지진' },
      { opponent: '날쌩마', answer: '라프라스 파도타기 / 니드킹 지진' },
      { opponent: '윈디', answer: '라프라스 파도타기 / 니드킹 지진' },
    ],
    notes: ['라프라스 합류 후라면 매우 안정적이다.', '니드킹의 지면 기술도 강력하지만 화상 변수에 주의한다.'],
  },
  {
    title: '상록체육관 비주기',
    rows: [
      { opponent: '뿔카노', answer: '라프라스 파도타기 / 나시 기가드레인' },
      { opponent: '닥트리오', answer: '라프라스 파도타기 / 나시 기가드레인' },
      { opponent: '니드퀸', answer: '라프라스 파도타기 / 나시 사이코키네시스' },
      { opponent: '니드킹', answer: '라프라스 파도타기 / 나시 사이코키네시스' },
      { opponent: '뿔카노', answer: '라프라스 파도타기 / 나시 기가드레인' },
    ],
    notes: ['라프라스와 나시가 모두 활약한다.', '격파 후 지진을 얻으면 니드킹에게 배정한다.'],
  },
]

export const FIRERED_STORY_ELITE4: BossSection[] = [
  {
    title: '사천왕 칸나',
    rows: [
      { opponent: '쥬레곤', answer: '쥬피썬더 10만볼트' },
      { opponent: '파르셀', answer: '쥬피썬더 10만볼트' },
      { opponent: '야도란', answer: '쥬피썬더 10만볼트 / 나시 기가드레인' },
      { opponent: '루주라', answer: '리자몽 화염방사 / 잠만보' },
      { opponent: '라프라스', answer: '쥬피썬더 10만볼트' },
    ],
    notes: ['쥬피썬더가 칸나전 핵심이다.', '루주라는 얼음·에스퍼라 리자몽 화염방사나 잠만보로 처리한다.'],
  },
  {
    title: '사천왕 시바',
    rows: [
      { opponent: '롱스톤', answer: '라프라스 파도타기 / 나시 기가드레인' },
      { opponent: '홍수몬', answer: '나시 사이코키네시스 / 리자몽 공중날기' },
      { opponent: '시라소몬', answer: '나시 사이코키네시스 / 리자몽 공중날기' },
      { opponent: '롱스톤', answer: '라프라스 파도타기 / 나시 기가드레인' },
      { opponent: '괴력몬', answer: '나시 사이코키네시스 / 리자몽 공중날기' },
    ],
    notes: ['롱스톤은 라프라스가 가장 편하다.', '격투 타입은 나시의 사이코키네시스 또는 리자몽의 비행 기술로 처리한다.'],
  },
  {
    title: '사천왕 국화',
    rows: [
      { opponent: '팬텀', answer: '잠만보 섀도볼 / 쥬피썬더 물기 / 나시 사이코키네시스' },
      { opponent: '골뱃', answer: '쥬피썬더 10만볼트 / 라프라스 냉동빔' },
      { opponent: '고우스트', answer: '잠만보 섀도볼 / 쥬피썬더 물기 / 나시 사이코키네시스' },
      { opponent: '아보크', answer: '니드킹 지진 / 나시 사이코키네시스' },
      { opponent: '팬텀', answer: '잠만보 섀도볼 / 쥬피썬더 물기 / 나시 사이코키네시스' },
    ],
    notes: [
      '3세대 팬텀·고우스트는 부유 특성 때문에 지진이 통하지 않는다.',
      '잠만보 섀도볼은 국화전에서 가장 안정적인 대응책이다.',
      '쥬피썬더가 이브이 시절 물기를 배워 왔다면 고스트 타입 보조 견제로 활용할 수 있다.',
      '수면, 혼란, 독 상태이상에 대비해 회복 아이템을 준비한다.',
    ],
  },
  {
    title: '사천왕 목호',
    rows: [
      { opponent: '갸라도스', answer: '쥬피썬더 10만볼트' },
      { opponent: '신뇽', answer: '라프라스 냉동빔' },
      { opponent: '신뇽', answer: '라프라스 냉동빔' },
      { opponent: '프테라', answer: '라프라스 파도타기 / 쥬피썬더 10만볼트' },
      { opponent: '망나뇽', answer: '라프라스 냉동빔' },
    ],
    notes: [
      '라프라스 냉동빔이 목호전 핵심이다.',
      '갸라도스는 전기 4배 약점이므로 쥬피썬더로 즉시 처리한다.',
      '프테라는 바위 기술로 리자몽을 위협하므로 리자몽을 내지 않는 것이 안전하다.',
    ],
  },
]

export const FIRERED_STORY_CHAMPION_ROWS = [
  { opponent: '피죤투', answer: '쥬피썬더 10만볼트 / 라프라스 냉동빔' },
  { opponent: '후딘', answer: '잠만보 섀도볼 / 쥬피썬더 전기자석파 후 처리' },
  { opponent: '코뿌리', answer: '라프라스 파도타기 / 나시 기가드레인' },
  { opponent: '윈디', answer: '라프라스 파도타기 / 니드킹 지진' },
  { opponent: '나시', answer: '리자몽 화염방사' },
  { opponent: '거북왕', answer: '쥬피썬더 10만볼트 / 나시 기가드레인' },
]

export const FIRERED_STORY_CHAMPION_NOTES = [
  '파이리 스타팅 기준으로 라이벌은 최종적으로 거북왕을 사용한다.',
  '챔피언전의 핵심은 후딘과 거북왕이다.',
  '후딘은 잠만보로 받아 섀도볼로 처리하는 것이 안정적이다.',
  '거북왕은 쥬피썬더가 가장 확실하게 처리한다.',
]

export const FIRERED_STORY_SUMMARY_TABLE: { stage: string; strategy: string }[] = [
  { stage: '웅전', strategy: '망키 로우킥, 니드런♂ 두번치기, 파이리 메탈크로우로 돌파' },
  { stage: '이슬전', strategy: '뚜벅쵸 수면가루와 피카츄 전기 기술로 보완' },
  { stage: '중반', strategy: '니드킹과 쥬피썬더 완성으로 타입 대응 폭 확장' },
  { stage: '후반', strategy: '라프라스 합류 후 물·얼음 타입 전력 완성' },
  { stage: '사천왕', strategy: '쥬피썬더로 칸나·목호 갸라도스, 라프라스로 목호 드래곤 처리' },
  { stage: '챔피언', strategy: '잠만보로 후딘, 쥬피썬더로 거북왕, 리자몽으로 나시 처리' },
]

export interface SupportRow {
  pokemonId: number
  pokemon: string
  usage: string
}

export const FIRERED_STORY_SUPPORT: SupportRow[] = [
  { pokemonId: 56, pokemon: '망키 / 성원숭', usage: '웅전 대비, 초반 격투 요원' },
  { pokemonId: 25, pokemon: '피카츄 / 라이츄', usage: '쥬피썬더 전까지 전기 타입 임시 요원' },
  { pokemonId: 44, pokemon: '냄새꼬 / 라플레시아', usage: '초중반 풀 타입, 수면가루, 이슬전 대응' },
  { pokemonId: 21, pokemon: '깨비참 / 깨비드릴조', usage: '리자몽 전까지 공중날기 임시 요원' },
  { pokemonId: 16, pokemon: '파오리', usage: '풀베기·공중날기 보조 요원. NPC 교환으로 입수 가능' },
  { pokemonId: 121, pokemon: '스타미', usage: '라프라스 대체 고속 특수 딜러. 기술머신 비용이 큼' },
  { pokemonId: 65, pokemon: '후딘 / 윤겔라', usage: '나시 대체 에스퍼 딜러. 교환 가능하면 후딘 추천' },
]

export const FIRERED_STORY_CAUTIONS = [
  '파이어레드는 3세대 기준이므로 물리·특수 분화가 타입 기준이다.',
  '불꽃, 물, 풀, 전기, 얼음, 에스퍼, 악 타입 기술은 특수 판정이다.',
  '노말, 격투, 독, 땅, 비행, 벌레, 바위, 고스트, 강철 타입 기술은 물리 판정이다.',
  '리자몽은 불꽃 특수 딜러이지만 공중날기와 베어가르기 같은 물리 기술도 스토리에서는 충분히 강하다.',
  '니드킹은 기술폭이 넓지만 모든 고급 기술머신을 몰아주면 다른 포켓몬의 기술 배치가 빈약해진다.',
  '쥬피썬더는 10만볼트 의존도가 높으므로 게임코너 코인 비용을 미리 준비한다.',
  '라프라스는 냉동빔을 레벨업으로 배워 비용 대비 효율이 매우 좋다.',
  '돌 진화 포켓몬은 진화 후 레벨업 기술 습득 구조가 달라질 수 있으므로, 핵심 기술을 배운 뒤 진화하는 것이 안전하다.',
]

// 본문 텍스트 속 포켓몬 이름을 자동으로 링크로 바꿔주기 위한 이름→ID 매핑.
const FIRERED_STORY_NAME_TO_ID_ENTRIES: [string, number][] = [
  ['깨비드릴조', 22],
  ['깨비참', 21],
  ['파오리', 16],
  ['파이리', 4],
  ['리자드', 5],
  ['리자몽', 6],
  ['피카츄', 25],
  ['라이츄', 26],
  ['니드런♂', 32],
  ['니드리노', 33],
  ['니드킹', 34],
  ['니드퀸', 31],
  ['뚜벅쵸', 43],
  ['냄새꼬', 44],
  ['라플레시아', 45],
  ['망키', 56],
  ['성원숭', 57],
  ['가디', 58],
  ['윈디', 59],
  ['캐이시', 63],
  ['윤겔라', 64],
  ['후딘', 65],
  ['우츠동', 70],
  ['덩쿠리', 114],
  ['닥트리오', 51],
  ['닥트리오', 51],
  ['골뱃', 42],
  ['파르셀', 91],
  ['고우스트', 93],
  ['팬텀', 94],
  ['롱스톤', 95],
  ['찌리리공', 100],
  ['뿔카노', 111],
  ['아라리', 102],
  ['나시', 103],
  ['홍수몬', 107],
  ['시라소몬', 106],
  ['별가사리', 120],
  ['스타미', 121],
  ['도나리', 124],
  ['루주라', 124],
  ['갸라도스', 130],
  ['라프라스', 131],
  ['이브이', 133],
  ['쥬피썬더', 135],
  ['잠만보', 143],
  ['신뇽', 148],
  ['망나뇽', 149],
  ['프테라', 142],
  ['야도란', 80],
  ['쥬레곤', 87],
  ['포니타', 77],
  ['날쌩마', 78],
  ['또도가스', 109],
  ['질뻐기', 110],
  ['괴력몬', 68],
  ['피죤투', 18],
  ['거북왕', 9],
  ['코뿌리', 111],
  ['아보크', 24],
]

export interface TradeEvoRow {
  pokemon: string
  catchLocation: string
  recommendedLevel: string
  partyValue: string
  note: string
}

export const FIRERED_STORY_TRADE_EVO_TABLE: TradeEvoRow[] = [
  {
    pokemon: '윤겔라 → 후딘',
    catchLocation: '캐이시: 3번도로 (레벨 11~15)',
    recommendedLevel: 'Lv.16 윤겔라 진화 후 즉시 교환',
    partyValue: '★★★★☆ — 나시 대체 에스퍼 딜러. 스피드·특수공격 최상급',
    note: '3세대 기준 후딘은 특수 기술(에스퍼·냉동빔·10만볼트)을 주력으로 쓴다. 캐이시를 초반에 포획해 두면 중반부터 즉시 교환 진화 가능. 나시가 있으면 중복이지만 후딘 쪽이 스피드가 훨씬 빠름.',
  },
  {
    pokemon: '알통몬 → 괴력몬',
    catchLocation: '꼬마돌: 지하 1층~챔피언로드 등 / 5·25번도로에서 알통몬 직접 포획 가능',
    recommendedLevel: 'Lv.28 알통몬 진화 후 교환, Lv.36 이후 권장',
    partyValue: '★★★☆☆ — 잠만보 대체 격투 딜러. 괴력(HM) 담당 겸용',
    note: '알통몬은 Lv.36에 역습을 배우므로 그 이후 교환하면 기술 손해 없이 괴력몬으로 운용 가능. 잠만보가 이미 파티에 있다면 중복이지만, 격투 판정 기술이 없는 잠만보와 달리 괴력몬은 격투 물리 타입으로 더 다양한 상성을 커버.',
  },
  {
    pokemon: '야도란 → 야도킹',
    catchLocation: '야돈: 홍련섬 주변 낚시 / 야도란: Lv.37 자동 진화 후 교환',
    recommendedLevel: 'Lv.37 야도란 진화 후 즉시 교환 가능',
    partyValue: '★★☆☆☆ — 물·에스퍼 복합. 라프라스 대체 가능하지만 스피드가 느림',
    note: '야도란은 Lv.37 자동 진화. 교환하면 야도킹으로 완성. 느린 스피드가 단점이지만 에스퍼 타입 특수기를 물 타입 포켓몬이 쓴다는 점에서 라프라스와 역할 일부 중복. 이미 라프라스·나시가 파티에 있으면 우선순위 낮음.',
  },
  {
    pokemon: '배루키 → 강철톤',
    catchLocation: '파이어레드 야생 등장 없음 (GBA 통신 교환 또는 에메랄드에서 이식 필요)',
    recommendedLevel: '확보 즉시 교환 가능',
    partyValue: '★★★☆☆ — 강철·바위 복합 탱커. 스토리에서 내구력 최상위권',
    note: '파이어레드 단독 플레이에서는 포획 자체가 불가. 에메랄드 연동이나 GBA 교환이 있을 경우 채용 가능. 강철 타입의 다양한 반감 덕분에 사천왕 이후 안정적인 탱크 역할.',
  },
]

export const FIRERED_STORY_NAME_TO_ID = new Map(
  [...FIRERED_STORY_NAME_TO_ID_ENTRIES].sort((a, b) => b[0].length - a[0].length),
)
