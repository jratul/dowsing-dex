// 포켓몬 골드버전(2세대 원본) 스토리 엔트리 공략 데이터.
// .ref/pokemon_gold_story_guide.md 를 사이트용으로 구조화한 것.

export const GOLD_STORY_FINAL_PARTY_IDS = [157, 181, 130, 64, 169, 93] // 블레이범/전룡/갸라도스/윤겔라/크로뱃/고우스트

export interface RoleRow {
  pokemon: string
  role: string
}

export const GOLD_STORY_FINAL_ROLES: RoleRow[] = [
  { pokemon: '블레이범', role: '불꽃 타입 메인 딜러, 이상해꽃·얼음·벌레·강철 처리' },
  { pokemon: '전룡', role: '물·비행 타입 처리, 전기자석파, 빛의장막 지원' },
  { pokemon: '갸라도스', role: '물 타입 공격, 파도타기·괴력·폭포오르기 담당' },
  { pokemon: '윤겔라', role: '에스퍼 메인 딜러, 냉동펀치로 목호 망나뇽 처리' },
  { pokemon: '크로뱃', role: '공중날기 담당, 격투 타입 견제, 빠른 이상한빛' },
  { pokemon: '고우스트', role: '레드 잠만보 전담, 저주·나이트헤드·이상한빛 유틸' },
]

export const GOLD_STORY_GOALS = [
  '조토 스토리 진행',
  '사천왕 클리어',
  '칸토 진행',
  '레드전 대비',
  '비전머신과 기술머신 배분 최적화',
]

export const GOLD_STORY_MID_GAME_NOTE = {
  early: '블레이범 / 전룡 / 갸라도스 / 윤겔라 / 크로뱃 / 우츠동',
  late: '블레이범 / 전룡 / 갸라도스 / 윤겔라 / 크로뱃 / 고우스트',
  roles: [
    { role: '물 타입 견제', desc: '전룡 확보 전 또는 전룡 보조' },
    { role: '땅·바위 타입 견제', desc: '덩굴채찍, 잎날가르기 활용' },
    { role: '포획 보조', desc: '수면가루 사용' },
    { role: '풀베기 담당', desc: '후반 교체 예정이므로 기술칸 부담이 적음' },
  ],
  footer:
    '후반에는 우츠동의 역할을 전룡과 갸라도스가 대체할 수 있다. 레드전까지 고려하면 고우스트의 잠만보 봉쇄 가치가 더 높다.',
}

export interface CatchRow {
  timing: string
  pokemonId: number
  pokemon: string
  note: string
}

export const GOLD_STORY_CATCH_TABLE: CatchRow[] = [
  { timing: '시작', pokemonId: 155, pokemon: '브케인', note: '스타팅 선택. 최종 블레이범' },
  { timing: '도라지시티 전후', pokemonId: 69, pokemon: '모다피', note: '초중반 풀 타입, 수면가루, 풀베기 담당' },
  { timing: '도라지시티~연결동굴 전후', pokemonId: 179, pokemon: '메리프', note: '최종 전룡. 스토리 핵심 전기 타입' },
  { timing: '어두운 동굴·연결동굴 등', pokemonId: 41, pokemon: '주뱃', note: '최종 크로뱃. 초반부터 데리고 다니면 친밀도 진화가 수월함' },
  { timing: '모다피탑 밤', pokemonId: 92, pokemon: '고오스', note: '최종 고우스트. 레드 잠만보 전담' },
  { timing: '금빛시티 전후', pokemonId: 63, pokemon: '캐이시', note: '최종 윤겔라. 게임코너 구매 또는 야생 포획' },
  { timing: '분노의 호수', pokemonId: 130, pokemon: '붉은 갸라도스', note: '물 타입 및 비전머신 담당' },
]

export interface MoveSetSection {
  pokemonId: number
  pokemon: string
  finalMoves: string[]
  moveTable: { move: string; usage: string }[]
  notes: string[]
}

export const GOLD_STORY_MOVESETS: MoveSetSection[] = [
  {
    pokemonId: 157,
    pokemon: '블레이범',
    finalMoves: ['불꽃펀치 / 화염방사', '번개펀치', '지진', '은혜갚기 / 스피드스타'],
    moveTable: [
      { move: '불꽃펀치', usage: '화염방사 전까지 주력 불꽃 기술' },
      { move: '화염방사', usage: '레벨 60 이후 선택 가능한 최종 불꽃 기술' },
      { move: '번개펀치', usage: '물 타입 견제 보조' },
      { move: '지진', usage: '레드 피카츄, 독·바위·전기 타입 견제' },
      { move: '은혜갚기', usage: '친밀도가 높을 때 안정적인 노말 물리기' },
      { move: '스피드스타', usage: '중반 안정적인 명중률 보조기' },
    ],
    notes: [
      '블레이범은 화염방사를 늦게 배우므로 중후반까지는 불꽃펀치를 주력으로 사용한다.',
      '지진은 1회성 고급 기술머신이지만, 이 엔트리에서는 블레이범에게 주는 것이 가장 무난하다.',
      '레드전 피카츄를 안정적으로 처리하기 위해 지진 채용 가치가 높다.',
    ],
  },
  {
    pokemonId: 181,
    pokemon: '전룡',
    finalMoves: ['번개펀치', '전기자석파', '빛의장막', '불꽃펀치 / 자유 슬롯'],
    moveTable: [
      { move: '번개펀치', usage: '주력 전기 기술' },
      { move: '전기자석파', usage: '빠른 상대 견제, 보스전 안정화' },
      { move: '빛의장막', usage: '특수 공격 대응, 레드전 안정성 증가' },
      { move: '불꽃펀치', usage: '풀·벌레·얼음 타입 보조 견제' },
    ],
    notes: [
      '전룡은 스피드가 느리지만 내구와 특수공격이 안정적이다.',
      '레드전에서는 리자몽, 거북왕 처리에 유용하다.',
      '빛의장막은 에브이, 거북왕, 리자몽 상대로 파티 안정성을 높인다.',
    ],
  },
  {
    pokemonId: 130,
    pokemon: '갸라도스',
    finalMoves: ['파도타기', '괴력', '폭포오르기', '얼다바람 / 용의숨결 / 은혜갚기'],
    moveTable: [
      { move: '파도타기', usage: '주력 물 기술 및 이동용 비전머신' },
      { move: '괴력', usage: '이동용 비전머신 및 물리 공격' },
      { move: '폭포오르기', usage: '후반 이동용 비전머신' },
      { move: '바다회오리', usage: '용의굴·소용돌이섬 진행용 임시 비전머신' },
      { move: '얼다바람', usage: '목호 망나뇽 견제 보조' },
      { move: '용의숨결', usage: '드래곤 견제 보조' },
      { move: '은혜갚기', usage: '안정적인 물리 공격' },
    ],
    notes: [
      '갸라도스는 파도타기, 괴력, 바다회오리, 폭포오르기를 모두 배울 수 있어 스토리 편의성이 높다.',
      '바다회오리는 임시 채용 후 검은먹시티 기술 지우기 NPC를 통해 삭제한다.',
      'TM16 얼다바람은 황토마을 체육관 관장 류옹 격파 보상이다.',
      '갸라도스는 2세대에서 얼다바람을 배울 수 있다.',
      '목호전의 핵심 드래곤 처리는 윤겔라 냉동펀치가 담당하므로, 갸라도스의 얼다바람은 보조 용도다.',
    ],
  },
  {
    pokemonId: 64,
    pokemon: '윤겔라',
    finalMoves: ['사이코키네시스', '냉동펀치', '회복', '번개펀치 / 리플렉터'],
    moveTable: [
      { move: '사이코키네시스', usage: '주력 에스퍼 기술' },
      { move: '냉동펀치', usage: '목호 망나뇽 처리 핵심' },
      { move: '회복', usage: '장기전 안정성' },
      { move: '번개펀치', usage: '물·비행 타입 보조 견제' },
      { move: '리플렉터', usage: '물리 공격 대응 보조' },
    ],
    notes: [
      '윤겔라는 목호전 핵심 포켓몬이다.',
      '냉동펀치는 반드시 채용한다.',
      '번개펀치는 전룡과 역할이 겹치지만, 윤겔라의 높은 특수공격 덕분에 실전성이 높다.',
    ],
  },
  {
    pokemonId: 169,
    pokemon: '크로뱃',
    finalMoves: ['공중날기', '이상한빛', '날개치기', '물기 / 은혜갚기'],
    moveTable: [
      { move: '공중날기', usage: '이동용 비전머신 및 비행 공격' },
      { move: '이상한빛', usage: '보스전 유틸' },
      { move: '날개치기', usage: '빠른 비행 타입 공격' },
      { move: '물기', usage: '에스퍼 타입 보조 견제' },
      { move: '은혜갚기', usage: '친밀도 기반 노말 물리기' },
    ],
    notes: [
      '공중날기 담당으로 적합하다.',
      '빠른 이상한빛으로 불리한 전투를 보조할 수 있다.',
      '격투 타입 상대로 안정적인 견제 역할을 수행한다.',
    ],
  },
  {
    pokemonId: 93,
    pokemon: '고우스트',
    finalMoves: ['저주', '나이트헤드', '이상한빛', '최면술 / 꿈먹기'],
    moveTable: [
      { move: '저주', usage: '레드 잠만보 처리 핵심' },
      { move: '나이트헤드', usage: '레벨 기반 고정 데미지' },
      { move: '이상한빛', usage: '장기전 보조' },
      { move: '최면술', usage: '수면 유틸' },
      { move: '꿈먹기', usage: '최면술과 연계 가능' },
    ],
    notes: [
      '고우스트는 일반 스토리 딜러라기보다 레드 잠만보 전담 포켓몬이다.',
      '레드 잠만보의 노말 타입 공격은 고우스트에게 통하지 않는다.',
      '에브이 상대로는 사용하지 않는다. 고우스트는 독 타입도 가지고 있어 사이코키네시스에 취약하다.',
      '교환이 가능하면 팬텀으로 진화시키는 것이 더 좋다.',
    ],
  },
  {
    pokemonId: 70,
    pokemon: '우츠동',
    finalMoves: ['수면가루', '잎날가르기', '용해액', '풀베기 / 저리가루'],
    moveTable: [
      { move: '수면가루', usage: '포획 및 보스전 보조' },
      { move: '잎날가르기', usage: '주력 풀 기술' },
      { move: '용해액', usage: '독 타입 보조 공격' },
      { move: '풀베기', usage: '초중반 이동용 비전머신' },
      { move: '저리가루', usage: '상태이상 보조' },
    ],
    notes: [
      '우츠동은 초중반에는 매우 유용하다.',
      '후반에는 전룡과 갸라도스가 역할을 대체할 수 있다.',
      '레드전 최종 엔트리에서는 고우스트에게 자리를 넘기는 것이 적합하다.',
      '골드버전 원본에서는 리프의돌 수급이 까다로우므로 우츠보트 진화에 집착하지 않아도 된다.',
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

export const GOLD_STORY_HM_TABLE: HmRow[] = [
  { hm: 'HM01', move: '풀베기', pokemon: '우츠동', location: '너도밤나무숲', badge: '고동체육관 배지', note: '초중반 진행용. 후반 교체 예정 포켓몬에게 배정' },
  { hm: 'HM02', move: '공중날기', pokemon: '크로뱃', location: '진청시티, 사도 격파 후 체육관 밖 NPC', badge: '진청체육관 배지', note: '이동 편의성 핵심' },
  { hm: 'HM03', move: '파도타기', pokemon: '갸라도스', location: '인주시티 무용극장 이벤트 보상', badge: '인주체육관 배지', note: '갸라도스 주력 물 기술' },
  { hm: 'HM04', move: '괴력', pokemon: '갸라도스', location: '담청시티 식당 NPC', badge: '금빛체육관 배지', note: '이동 및 전투 겸용' },
  { hm: 'HM05', move: '플래시', pokemon: '전룡 / 윤겔라 / 임시 포켓몬', location: '모다피탑 장로 격파 보상', badge: '도라지체육관 배지', note: '필수 구간이 적으므로 임시 채용 가능' },
  { hm: 'HM06', move: '바다회오리', pokemon: '갸라도스', location: '로켓단 아지트 클리어 후 목호에게 획득', badge: '황토체육관 배지', note: '용의굴·소용돌이섬 진행용 임시 기술' },
  { hm: 'HM07', move: '폭포오르기', pokemon: '갸라도스', location: '얼음샛길 내부', badge: '검은먹체육관 배지', note: '후반 진행용' },
]

export interface TmRow {
  tm: string
  move: string
  target: string
  location: string
  priority: string
  desc: string
}

export const GOLD_STORY_TM_PRIORITY: TmRow[] = [
  { tm: 'TM48', move: '불꽃펀치', target: '블레이범', location: '금빛시티 백화점, 3,000원', priority: '매우 높음', desc: '화염방사 전까지 블레이범의 주력 불꽃 기술' },
  { tm: 'TM41', move: '번개펀치', target: '블레이범 / 윤겔라', location: '금빛시티 백화점, 3,000원', priority: '높음', desc: '블레이범·윤겔라의 견제폭 확장' },
  { tm: 'TM33', move: '냉동펀치', target: '윤겔라', location: '금빛시티 백화점, 3,000원', priority: '매우 높음', desc: '목호 망나뇽 처리 핵심' },
  { tm: 'TM26', move: '지진', target: '블레이범', location: '챔피언로드', priority: '매우 높음', desc: '레드 피카츄 및 독·바위·전기 타입 견제' },
  { tm: 'TM16', move: '얼다바람', target: '갸라도스', location: '황토마을 체육관, 류옹 격파 보상', priority: '중간', desc: '목호 망나뇽 상대로 보조 견제 가능' },
  { tm: 'TM27', move: '은혜갚기', target: '크로뱃 / 블레이범 / 갸라도스', location: '금빛시티 백화점, 일요일 친밀도 높은 포켓몬 선두 조건', priority: '중간', desc: '친밀도가 높을수록 강한 노말 물리기' },
]

export const GOLD_STORY_TM_OPTIONAL: TmRow[] = [
  { tm: 'TM24', move: '용의숨결', target: '갸라도스', location: '검은먹시티 체육관, 이향 격파 보상', priority: '중간', desc: '드래곤 견제 보조. 필수는 아님' },
  { tm: 'TM29', move: '사이코키네시스', target: '윤겔라 / 고우스트', location: '노랑시티 Mr. Psychic 집 / 무지개시티 게임코너 3,500코인', priority: '낮음', desc: '윤겔라는 레벨업으로 습득 가능하므로 보통 아껴도 됨' },
  { tm: 'TM30', move: '섀도볼', target: '고우스트 비추천', location: '인주시티 체육관, 유빈 격파 보상', priority: '낮음', desc: '2세대 고스트 기술은 물리 판정이라 고우스트와 궁합이 좋지 않음' },
  { tm: 'TM36', move: '오물폭탄', target: '우츠동 / 우츠보트', location: '43번도로, 로켓단 사건 해결 후 NPC', priority: '선택', desc: '우츠동을 끝까지 사용할 경우에만 고려' },
  { tm: 'TM28', move: '구멍파기', target: '블레이범 임시', location: '자연공원', priority: '선택', desc: '지진 전까지 임시 땅 타입 견제기로 사용 가능' },
  { tm: 'TM42', move: '꿈먹기', target: '고우스트', location: '상록시티 NPC', priority: '선택', desc: '최면술과 연계 가능하지만 명중 안정성은 낮음' },
  { tm: 'TM03', move: '저주', target: '갸라도스 선택 / 기타', location: '무지개맨션 야간 획득', priority: '선택', desc: '고우스트는 레벨업으로 저주를 배우므로 TM 사용 불필요' },
  { tm: 'TM38', move: '불대문자', target: '블레이범 선택', location: '금빛시티 게임코너 5,500코인', priority: '선택', desc: '명중률보다 즉발 안정성을 원하면 불꽃펀치 쪽이 편함' },
  { tm: 'TM14', move: '눈보라', target: '갸라도스 선택', location: '금빛시티 게임코너 5,500코인', priority: '선택', desc: '위력은 높지만 명중률이 낮고 코인 비용이 큼' },
  { tm: 'TM25', move: '번개', target: '전룡 선택', location: '금빛시티 게임코너 5,500코인', priority: '선택', desc: '위력은 높지만 명중률이 낮아 번개펀치가 더 안정적' },
]

export const GOLD_STORY_TM_NOTES = [
  'TM16 얼다바람은 황토마을 체육관 관장 류옹 격파 보상이다.',
  '갸라도스는 2세대에서 TM16 얼다바람을 배울 수 있다.',
  '얼다바람은 위력은 낮지만 스피드 하락 효과가 있어 목호전 망나뇽 상대로 보조 역할을 수행할 수 있다.',
  '목호의 망나뇽 처리는 기본적으로 윤겔라의 냉동펀치가 담당한다.',
  '갸라도스의 얼다바람은 윤겔라가 쓰러졌을 때를 대비한 백업 카드로 본다.',
  '지진은 1회성 고급 기술머신이므로 사용 대상을 신중하게 정한다.',
  '이 공략에서는 레드 피카츄 처리를 위해 블레이범에게 지진을 배정하는 것을 권장한다.',
  '금빛시티 백화점에서 구매 가능한 펀치 기술머신은 스토리 진행 효율이 매우 높다.',
]

export interface PartyStage {
  title: string
  members: string[]
  goals: string[]
}

export const GOLD_STORY_STAGES: PartyStage[] = [
  {
    title: '초반: 도라지시티 ~ 금빛시티',
    members: ['브케인 / 마그케인', '메리프 / 보송송', '모다피', '주뱃', '캐이시 / 윤겔라', '자유 슬롯'],
    goals: [
      '메리프를 빠르게 육성하여 전기 타입 전력을 확보한다.',
      '모다피는 수면가루와 풀 타입 공격으로 초반 안정성을 담당한다.',
      '주뱃은 초반부터 데리고 다녀 친밀도를 올린다.',
      '캐이시는 포획이 까다로우면 게임코너 구매를 고려한다.',
    ],
  },
  {
    title: '중반: 인주시티 ~ 분노의 호수',
    members: ['마그케인 / 블레이범', '보송송 / 전룡', '우츠동', '윤겔라', '골뱃 / 크로뱃', '붉은 갸라도스'],
    goals: [
      '분노의 호수에서 붉은 갸라도스를 확보한다.',
      '갸라도스에게 파도타기와 괴력을 배정한다.',
      '윤겔라에게 냉동펀치를 배워 목호전 대비를 시작한다.',
      '크로뱃이 완성되면 공중날기 담당으로 사용한다.',
    ],
  },
  {
    title: '사천왕 전',
    members: ['블레이범', '전룡', '갸라도스', '윤겔라', '크로뱃', '우츠동 / 고우스트'],
    goals: [
      '목호전 대비로 윤겔라의 냉동펀치를 반드시 준비한다.',
      '전룡은 갸라도스, 리자몽, 프테라 견제에 사용한다.',
      '블레이범은 루주라, 나시, 쏘콘 등 처리에 사용한다.',
      '우츠동은 수면가루 유틸이 필요하면 유지한다.',
      '레드전까지 미리 대비하려면 이 시점부터 고우스트를 육성한다.',
    ],
  },
  {
    title: '칸토 및 레드전 최종',
    members: ['블레이범', '전룡', '갸라도스', '윤겔라', '크로뱃', '고우스트'],
    goals: [
      '우츠동의 역할을 전룡과 갸라도스가 대체한다.',
      '고우스트는 레드 잠만보 전담으로 사용한다.',
      '크로뱃은 공중날기 및 빠른 유틸 담당으로 유지한다.',
    ],
  },
]

export interface BossSection {
  title: string
  rows: { opponent: string; answer: string }[]
}

export const GOLD_STORY_BOSSES: BossSection[] = [
  {
    title: '사천왕 일목',
    rows: [
      { opponent: '네이티오', answer: '전룡' },
      { opponent: '루주라', answer: '블레이범' },
      { opponent: '나시', answer: '블레이범' },
      { opponent: '야도란', answer: '전룡 / 우츠동' },
      { opponent: '네이티오', answer: '전룡' },
    ],
  },
  {
    title: '사천왕 독수',
    rows: [
      { opponent: '아리아도스', answer: '블레이범' },
      { opponent: '쏘콘', answer: '블레이범' },
      { opponent: '질뻐기', answer: '윤겔라 / 블레이범 지진' },
      { opponent: '크로뱃', answer: '전룡 / 윤겔라' },
      { opponent: '도나리', answer: '블레이범 / 윤겔라' },
    ],
  },
  {
    title: '사천왕 시바',
    rows: [
      { opponent: '카포에라', answer: '윤겔라 / 크로뱃' },
      { opponent: '홍수몬', answer: '윤겔라 / 크로뱃' },
      { opponent: '시라소몬', answer: '윤겔라 / 크로뱃' },
      { opponent: '롱스톤', answer: '갸라도스 / 우츠동' },
      { opponent: '괴력몬', answer: '윤겔라 / 크로뱃' },
    ],
  },
  {
    title: '사천왕 카렌',
    rows: [
      { opponent: '블래키', answer: '갸라도스 / 블레이범 / 전룡으로 장기전' },
      { opponent: '니로우', answer: '전룡' },
      { opponent: '팬텀', answer: '윤겔라' },
      { opponent: '라플레시아', answer: '블레이범' },
      { opponent: '헬가', answer: '갸라도스' },
    ],
  },
  {
    title: '챔피언 목호',
    rows: [
      { opponent: '갸라도스', answer: '전룡' },
      { opponent: '망나뇽', answer: '윤겔라 냉동펀치' },
      { opponent: '망나뇽', answer: '윤겔라 냉동펀치' },
      { opponent: '망나뇽', answer: '윤겔라 냉동펀치' },
      { opponent: '프테라', answer: '전룡 / 갸라도스' },
      { opponent: '리자몽', answer: '전룡 / 갸라도스' },
    ],
  },
]

export const GOLD_STORY_RED_TABLE: { opponent: string; answer: string }[] = [
  { opponent: '피카츄', answer: '블레이범 지진' },
  { opponent: '에브이', answer: '전룡 전기자석파 후 갸라도스·블레이범·전룡으로 처리' },
  { opponent: '잠만보', answer: '고우스트 저주 + 나이트헤드' },
  { opponent: '이상해꽃', answer: '블레이범' },
  { opponent: '리자몽', answer: '전룡 / 갸라도스' },
  { opponent: '거북왕', answer: '전룡' },
]

export const GOLD_STORY_SNORLAX_STEPS = [
  '잠만보 등장',
  '고우스트 교체',
  '저주 사용',
  '나이트헤드, 이상한빛, 회복 아이템으로 턴 소모',
  '잠만보가 잠자기를 사용해도 저주 데미지로 압박',
]

export const GOLD_STORY_SNORLAX_NOTES = [
  '고우스트는 잠만보 전담으로 사용한다.',
  '에브이 상대로 고우스트를 내지 않는다.',
  '레벨이 다소 낮아도 고우스트는 잠만보의 노말 기술을 무효화할 수 있다.',
  '안정성을 높이려면 고우스트의 레벨을 충분히 올리고 회복 아이템을 준비한다.',
]

export const GOLD_STORY_SUMMARY_TABLE: { stage: string; strategy: string }[] = [
  { stage: '초반', strategy: '브케인, 메리프, 모다피, 주뱃 중심으로 안정화' },
  { stage: '중반', strategy: '윤겔라와 붉은 갸라도스 합류로 전력 완성' },
  { stage: '사천왕', strategy: '윤겔라 냉동펀치, 전룡 전기 기술, 블레이범 불꽃 기술 활용' },
  { stage: '칸토', strategy: '우츠동의 역할을 줄이고 고우스트 육성' },
  { stage: '레드전', strategy: '고우스트로 잠만보 봉쇄, 블레이범 지진으로 피카츄 처리' },
]

export interface SupportRow {
  pokemonId: number
  pokemon: string
  usage: string
}

export const GOLD_STORY_SUPPORT: SupportRow[] = [
  { pokemonId: 70, pokemon: '우츠동', usage: '초중반 풀 타입, 수면가루, 풀베기' },
  { pokemonId: 98, pokemon: '크랩 / 킹크랩', usage: '비전머신 보조 요원' },
  { pokemonId: 22, pokemon: '깨비드릴조', usage: '크로뱃 대체 공중날기 요원' },
  { pokemonId: 94, pokemon: '팬텀', usage: '교환 가능 시 고우스트 상위 호환' },
  { pokemonId: 71, pokemon: '우츠보트', usage: '리프의돌 확보 시 우츠동의 최종 진화형' },
]

export const GOLD_STORY_CAUTIONS = [
  '2세대 원본에는 현대 세대와 같은 자유로운 기술 되살리기가 없다.',
  '하트골드/소울실버의 기술 배치, 입수 루트, 시스템과 혼동하지 않는다.',
  '2세대에서는 물리/특수 분화가 타입 기준이다.',
  '고스트 타입 기술은 2세대에서 물리 판정이므로 고우스트·팬텀과 섀도볼의 궁합이 현재 세대만큼 좋지 않다.',
  '리프의돌은 원본 골드버전에서 수급이 까다로우므로 우츠보트 진화에 집착하지 않아도 된다.',
  '레드전의 핵심 난점은 잠만보이며, 고우스트의 고스트 타입 내성과 저주가 가장 안정적인 대응책이다.',
]

// 본문 텍스트 속 포켓몬 이름을 자동으로 링크로 바꿔주기 위한 이름→ID 매핑.
// "붉은 갸라도스"처럼 다른 이름을 포함하는 긴 이름이 먼저 매칭되도록 길이 내림차순으로 정렬해 사용한다.
const GOLD_STORY_NAME_TO_ID_ENTRIES: [string, number][] = [
  ['붉은 갸라도스', 130],
  ['브케인', 155],
  ['마그케인', 156],
  ['블레이범', 157],
  ['모다피', 69],
  ['메리프', 179],
  ['보송송', 180],
  ['전룡', 181],
  ['주뱃', 41],
  ['골뱃', 42],
  ['크로뱃', 169],
  ['고오스', 92],
  ['고우스트', 93],
  ['팬텀', 94],
  ['캐이시', 63],
  ['윤겔라', 64],
  ['후딘', 65],
  ['갸라도스', 130],
  ['우츠동', 70],
  ['우츠보트', 71],
  ['깨비드릴조', 22],
  ['크랩', 98],
  ['킹크랩', 99],
  ['네이티오', 178],
  ['루주라', 124],
  ['나시', 103],
  ['야도란', 80],
  ['아리아도스', 168],
  ['쏘콘', 205],
  ['질뻐기', 89],
  ['도나리', 49],
  ['카포에라', 237],
  ['홍수몬', 107],
  ['시라소몬', 106],
  ['롱스톤', 95],
  ['괴력몬', 68],
  ['블래키', 197],
  ['니로우', 198],
  ['라플레시아', 45],
  ['헬가', 229],
  ['망나뇽', 149],
  ['프테라', 142],
  ['리자몽', 6],
  ['거북왕', 9],
  ['피카츄', 25],
  ['에브이', 196],
  ['잠만보', 143],
  ['이상해꽃', 3],
]

export const GOLD_STORY_NAME_TO_ID = new Map(
  [...GOLD_STORY_NAME_TO_ID_ENTRIES].sort((a, b) => b[0].length - a[0].length),
)
