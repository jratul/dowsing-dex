// 포켓몬 에메랄드버전(3세대) 스토리 엔트리 공략 데이터.
// 스타팅 3종(아차모·물짱이·나무지기) 각각의 추천 엔트리를 탭으로 분리.

export interface RoleRow {
  pokemon: string
  role: string
}

export interface CatchRow {
  timing: string
  pokemonId: number
  pokemon: string
  note: string
}

export interface MoveSetSection {
  pokemonId: number
  pokemon: string
  finalMoves: string[]
  moveTable: { move: string; how: string; usage: string }[]
  notes: string[]
}

export interface HmRow {
  hm: string
  move: string
  pokemon: string
  location: string
  badge: string
  note: string
}

export interface TmRow {
  tm: string
  move: string
  target: string
  location: string
  priority: string
  desc: string
}

export interface PartyStage {
  title: string
  members: string[]
  goals: string[]
}

export interface BossSection {
  title: string
  note: string
  rows: { opponent: string; answer: string }[]
}

export interface StarterGuideData {
  id: string
  starterPokemonId: number
  nameKo: string
  finalPartyIds: number[]
  finalRoles: RoleRow[]
  catchTable: CatchRow[]
  movesets: MoveSetSection[]
  stages: PartyStage[]
  gymMatchups: BossSection[]
  elite4: BossSection[]
  champion: BossSection
  summary: { stage: string; strategy: string }[]
  support: { pokemon: string; pokemonId: number; role: string; obtainedAt: string }[]
  cautions: string[]
}

// ─── 공통 데이터 ─────────────────────────────────────────────────────────────

export const EMERALD_GOALS = [
  '아차모·물짱이·나무지기 중 하나를 선택해 스토리 클리어',
  '호연지방 8개 체육관 클리어 후 사천왕 격파',
  '챔피언 미라(에메랄드 전용 챔피언) 격파',
  '가디안을 공통 에스퍼 딜러로 채용해 약점 보완',
  '비전머신 담당을 패리퍼·플라이곤으로 분산',
]

export const EMERALD_HM_TABLE: HmRow[] = [
  { hm: 'HM01', move: '풀베기', pokemon: '패리퍼 / 임시', location: '시작 마을 인근', badge: '1관 배지', note: '초반 나무 제거용. 이후 삭제 가능' },
  { hm: 'HM02', move: '공중날기', pokemon: '패리퍼 / 플라이곤', location: '포트리시티 NPC', badge: '6관 배지', note: '이동 편의성 핵심' },
  { hm: 'HM03', move: '파도타기', pokemon: '패리퍼 / 씨카이저 / 대짱이', location: '페탈버그숲 인근 NPC', badge: '5관 배지', note: '수중 이동 필수' },
  { hm: 'HM04', move: '괴력', pokemon: '패리퍼 / 갸라도스 임시', location: '특정 NPC', badge: '4관 배지', note: '특정 바위 제거용' },
  { hm: 'HM05', move: '플래시', pokemon: '임시 포켓몬', location: '등대마을 동굴 NPC', badge: '2관 배지', note: '어두운 동굴 진행용. 임시 포켓몬에 배정' },
  { hm: 'HM06', move: '바위깨기', pokemon: '플라이곤 / 임시', location: '특정 NPC', badge: '특정 배지', note: '통로 개척용' },
  { hm: 'HM07', move: '폭포오르기', pokemon: '씨카이저 / 패리퍼', location: '사파리존 인근', badge: '8관 배지', note: '후반 진행 필수' },
  { hm: 'HM08', move: '다이빙', pokemon: '패리퍼 / 대짱이', location: '모스딥시티 스티브 협조', badge: '7관 배지', note: '수중 다이브 이동용' },
]

export const EMERALD_TM_NOTES = [
  '지진(TM26)은 이 게임의 최고 범용 기술. 스타터나 플라이곤에게 배정한다.',
  '불대문자(TM38) 대신 화염방사(TM35)를 우선한다. 명중 안정성이 높다.',
  '가디안은 레벨업으로 사이코키네시스를 자연 습득하므로 TM29를 아껴도 된다.',
  '에메랄드에서는 챌린지 완료 후 기술 가르침 NPC가 추가된다.',
]

export const EMERALD_GYM_COMMON_NOTE = '에메랄드 8번째 체육관 관장은 루비/사파이어와 달리 후안(물 타입)이다.'

// 공통 체육관 (관장 상대 포켓몬은 동일)
const EMERALD_GYM_ROWS_TEMPLATE = {
  g1: { title: '1관 - 폴보로체육관 (바위 타입)', note: '이바이트 등 바위 타입. 물·풀·격투에 약점.' },
  g2: { title: '2관 - 등대마을체육관 (격투 타입)', note: '하리뭉·이므나 등. 비행·에스퍼에 약점.' },
  g3: { title: '3관 - 물가시티체육관 (전기 타입)', note: '코일·에레키드 등. 에메랄드에서 전극도 등장. 땅에 면역이므로 땅 기술은 무효.' },
  g4: { title: '4관 - 라바시티체육관 (불꽃 타입)', note: '마그마·폭발토. 물·바위·땅에 약점.' },
  g5: { title: '5관 - 페탈버그체육관 선우 (노말 타입)', note: '선우(Norman, 주인공 아버지)의 까부리드 · 슬리퍼. 격투에 약점. 배복 주의.' },
  g6: { title: '6관 - 포트리체육관 (비행 타입)', note: '파비코·대선생·삼삼드래 등. 전기·얼음에 약점.' },
  g7: { title: '7관 - 모스딥체육관 (에스퍼 타입)', note: '루나톤·솔록 더블배틀. 악·고스트에 약점.' },
  g8: { title: '8관 - 수도포리스체육관 후안 (물 타입)', note: '에메랄드 전용 관장 후안. 킹드라·씨카이저 등. 전기·풀에 약점.' },
}

// ─── 스타터별 데이터 ──────────────────────────────────────────────────────────

const ACHAMO_GUIDE: StarterGuideData = {
  id: 'achamo',
  starterPokemonId: 255,
  nameKo: '아차모',
  finalPartyIds: [257, 282, 330, 365, 279, 310],
  finalRoles: [
    { pokemon: '번치코', role: '불꽃/격투 메인 딜러. 화염방사·하늘날기·클로즈컴뱃. 강철·얼음·풀 처리' },
    { pokemon: '가디안', role: '에스퍼 딜러. 사이코키네시스·섀도볼. 격투·독 타입 전담' },
    { pokemon: '플라이곤', role: '드래곤/땅. 지진·불대문자·공중날기. HM02 담당. 드래이크 드래곤 보조' },
    { pokemon: '씨카이저', role: '물/얼음. 파도타기·얼음빔·폭포오르기. 챔피언 미라 물 파티 처리' },
    { pokemon: '패리퍼', role: '물/비행. 파도타기·공중날기·풀베기. 다수 HM 담당' },
    { pokemon: '썬더볼트', role: '전기 딜러. 10만볼트·전기자석파. 물 타입 체육관·E4 글레이시아 보조' },
  ],
  catchTable: [
    { timing: '게임 시작', pokemonId: 255, pokemon: '아차모', note: '스타팅. 최종 번치코(불꽃/격투)' },
    { timing: '101번도로 전후', pokemonId: 280, pokemon: '랄토스', note: '최종 가디안. 에스퍼 핵심. 우선 포획' },
    { timing: '110번도로 (물가시티 남쪽)', pokemonId: 309, pokemon: '썬더라이', note: '최종 썬더볼트. 전기 타입 확보' },
    { timing: '111번도로 사막', pokemonId: 328, pokemon: '톱치', note: '최종 플라이곤. 드래곤/땅 딜러. 사막에서 포획' },
    { timing: '117번도로 (사파리존 이전)', pokemonId: 363, pokemon: '대굴레오', note: '최종 씨카이저. 물/얼음. 쇼울케이브 방문 전에 포획' },
    { timing: '쇼울케이브', pokemonId: 363, pokemon: '씨레오·씨카이저', note: '대굴레오가 없으면 쇼울케이브에서 씨레오로 업그레이드' },
    { timing: '110번도로 바다낚시 / 109번도로', pokemonId: 278, pokemon: '갈모매', note: '최종 패리퍼. 물/비행 HM 담당. 일찍 합류시킬수록 편함' },
  ],
  movesets: [
    {
      pokemonId: 257,
      pokemon: '번치코',
      finalMoves: ['화염방사', '클로즈컴뱃 / 하늘날기', '지진 / 아이언테일', '불꽃파동 / 스피드스타'],
      moveTable: [
        { move: '화염방사', how: 'TM35', usage: '주력 불꽃 특수기. 3세대에서는 불꽃이 특수 분류' },
        { move: '클로즈컴뱃', how: 'Lv.습득', usage: '격투 물리기. 방어/특방 하락 있지만 강력' },
        { move: '하늘날기', how: 'HM02', usage: 'HM02 대체기. 비행 물리기' },
        { move: '지진', how: 'TM26', usage: '전기·바위·독·불꽃 타입 견제. 대범용 물리기' },
      ],
      notes: [
        '번치코는 불꽃/격투 타입. 격투 기술로 5관 선우(노말)와 E4 시드니(악)를 처리할 수 있다.',
        '3세대에서 불꽃 기술은 특수 판정. 번치코의 특수공격을 활용한다.',
        '플라이곤이 있으면 하늘날기는 플라이곤에 맡기고 번치코에 격투기를 넣는 것이 좋다.',
      ],
    },
    {
      pokemonId: 282,
      pokemon: '가디안',
      finalMoves: ['사이코키네시스', '섀도볼', '전기자석파', '사이코쇼크 / 회복'],
      moveTable: [
        { move: '사이코키네시스', how: 'Lv.습득', usage: '주력 에스퍼 특수기. 레벨업으로 자연 습득' },
        { move: '섀도볼', how: 'TM30', usage: '고스트/에스퍼 견제. TM30으로 획득' },
        { move: '전기자석파', how: 'TM', usage: '상태이상 유틸. 빠른 적 견제' },
        { move: '회복', how: 'Lv.습득', usage: 'HP 회복. 장기전 안정화' },
      ],
      notes: [
        '가디안은 3종 모든 스타터 파티에 포함된다. 에스퍼 타입은 격투·독에 강력하다.',
        '랄토스를 101번도로에서 일찍 포획해 育成해야 한다. 랄토스→킬리아(Lv.20)→가디안(Lv.30).',
        '섀도볼(TM30)은 7관 체육관 루나톤/솔록과 E4 피비의 고스트 파티에도 효과적이다.',
      ],
    },
    {
      pokemonId: 330,
      pokemon: '플라이곤',
      finalMoves: ['지진', '공중날기', '불대문자 / 화염방사', '드래곤브레스 / 드래곤클로'],
      moveTable: [
        { move: '지진', how: 'TM26', usage: '주력 땅 물리기. 전기·독·불꽃·바위 타입 처리' },
        { move: '공중날기', how: 'HM02', usage: 'HM02. 이동 + 비행 물리기' },
        { move: '불대문자 / 화염방사', how: 'TM38', usage: '풀·벌레·얼음·강철 타입 처리' },
        { move: '드래곤브레스', how: 'Lv.습득', usage: '드래곤 타입 견제. 마비 부가효과' },
      ],
      notes: [
        '톱치는 111번도로 사막에서 포획. 비브라바(Lv.35) → 플라이곤(Lv.45) 진화.',
        '플라이곤은 드래곤/땅 타입으로 전기 면역. 물가시티 전기 체육관을 안전하게 통과할 수 있다.',
        'E4 드래이크의 드래곤 파티에 드래곤기로 대항할 수 있다.',
      ],
    },
    {
      pokemonId: 365,
      pokemon: '씨카이저',
      finalMoves: ['파도타기', '얼음빔', '폭포오르기', '바디슬램 / 노래'],
      moveTable: [
        { move: '파도타기', how: 'HM03', usage: 'HM03. 이동 + 물 특수기' },
        { move: '얼음빔', how: 'TM13', usage: '얼음 특수기. 드래이크 드래곤 파티 핵심 기술' },
        { move: '폭포오르기', how: 'HM07', usage: 'HM07. 후반 진행' },
        { move: '바디슬램', how: 'Lv.습득', usage: '노말 물리기. 마비 부가효과' },
      ],
      notes: [
        '씨카이저(대굴레오→씨레오→씨카이저)는 쇼울케이브에서 진화. 이 엔트리의 유일한 얼음·물 딜러.',
        'E4 글레이시아(얼음)에는 썬더볼트로 전기 견제하거나 번치코 격투기를 사용한다.',
        '챔피언 미라의 물 파티를 전룡이나 씨카이저 전기 기술로 처리한다.',
      ],
    },
    {
      pokemonId: 279,
      pokemon: '패리퍼',
      finalMoves: ['파도타기', '공중날기', '물대포', '풀베기 / 다이빙'],
      moveTable: [
        { move: '파도타기', how: 'HM03', usage: 'HM03 공유. 보조 물 기술' },
        { move: '공중날기', how: 'HM02', usage: 'HM02. 이동 편의성' },
        { move: '물대포', how: 'Lv.습득', usage: '물 특수기. 초반 바위 타입 처리' },
        { move: '풀베기', how: 'HM01', usage: 'HM01. 초반 진행용' },
        { move: '다이빙', how: 'HM08', usage: 'HM08. 수중 다이브 진행용' },
      ],
      notes: [
        '갈모매(278)를 이른 시점에 포획. 레벨 25에서 패리퍼로 진화.',
        '패리퍼는 HM 담당 포켓몬. 씨카이저가 주력 물 딜러를 맡는다.',
        '수중 진행에 필수인 다이빙(HM08)을 배정한다.',
      ],
    },
    {
      pokemonId: 310,
      pokemon: '썬더볼트',
      finalMoves: ['10만볼트', '전기자석파', '번개', '퀵어택 / 아이언테일'],
      moveTable: [
        { move: '10만볼트', how: 'TM24', usage: '주력 전기 특수기. 명중 안정' },
        { move: '전기자석파', how: 'TM', usage: '마비 유틸. 가디안과 역할 분담' },
        { move: '번개', how: 'TM25', usage: '고화력 전기기. 명중 불안정하지만 최고 위력' },
        { move: '퀵어택', how: 'Lv.습득', usage: '선제 공격. 빈사 상태 마무리용' },
      ],
      notes: [
        '썬더라이(309)를 110번도로에서 포획. Lv.26에서 썬더볼트로 진화.',
        '물가시티 전기 체육관은 3관이므로 썬더볼트 진화 후 편하게 통과할 수 있다.',
        'E4 글레이시아 얼음 파티에 10만볼트가 효과적 (물 타입을 동반한 경우).',
      ],
    },
  ],
  stages: [
    {
      title: '초반: 리틀루트 ~ 물가시티',
      members: ['아차모 / 영치코', '랄토스 / 킬리아', '썬더라이 (3관 이후 확보)', '패리퍼 준비'],
      goals: [
        '101번도로에서 랄토스를 최우선 포획한다.',
        '110번도로에서 썬더라이를 포획한다.',
        '3관 통과를 위해 플라이곤 대신 썬더라이나 번치코 격투기를 활용한다.',
      ],
    },
    {
      title: '중반: 라바시티 ~ 모스딥시티',
      members: ['번치코', '가디안', '톱치 / 비브라바', '씨레오 확보', '패리퍼'],
      goals: [
        '111번도로 사막에서 톱치 포획 후 육성 시작.',
        '쇼울케이브에서 대굴레오/씨레오를 포획하거나 이미 있는 대굴레오를 진화.',
        '파도타기(5관 이후) 확보 후 본격 수중 진행.',
      ],
    },
    {
      title: '후반: 수도포리스 ~ 사천왕',
      members: ['번치코', '가디안', '플라이곤', '씨카이저', '패리퍼', '썬더볼트'],
      goals: [
        '8관 후안의 킹드라는 썬더볼트 전기기로, 씨카이저·패리퍼로 처리.',
        'E4는 스타터별 상성 담당을 지정해 소모를 최소화.',
        '챔피언 미라의 물 파티는 썬더볼트와 가디안이 핵심.',
      ],
    },
  ],
  gymMatchups: [
    {
      ...EMERALD_GYM_ROWS_TEMPLATE.g1,
      rows: [{ opponent: '이바이트 (바위)', answer: '번치코 불꽃 / 가디안 에스퍼' }],
    },
    {
      ...EMERALD_GYM_ROWS_TEMPLATE.g2,
      rows: [{ opponent: '하리뭉·이므나 (격투)', answer: '가디안 사이코키네시스' }],
    },
    {
      ...EMERALD_GYM_ROWS_TEMPLATE.g3,
      rows: [{ opponent: '코일·에레키드 (전기)', answer: '플라이곤 지진 / 패리퍼 (전기 면역 없음, 땅기로)' }],
    },
    {
      ...EMERALD_GYM_ROWS_TEMPLATE.g4,
      rows: [{ opponent: '마그마·폭발토 (불꽃)', answer: '씨카이저 파도타기 / 패리퍼' }],
    },
    {
      ...EMERALD_GYM_ROWS_TEMPLATE.g5,
      rows: [{ opponent: '까부리드·슬리퍼 (노말)', answer: '번치코 클로즈컴뱃 / 가디안 에스퍼' }],
    },
    {
      ...EMERALD_GYM_ROWS_TEMPLATE.g6,
      rows: [{ opponent: '파비코·삼삼드래 (비행)', answer: '썬더볼트 10만볼트 / 씨카이저 얼음빔' }],
    },
    {
      ...EMERALD_GYM_ROWS_TEMPLATE.g7,
      rows: [{ opponent: '루나톤·솔록 (에스퍼, 더블)', answer: '가디안 섀도볼 / 번치코 격투기' }],
    },
    {
      ...EMERALD_GYM_ROWS_TEMPLATE.g8,
      rows: [{ opponent: '킹드라·씨카이저 (물)', answer: '썬더볼트 10만볼트 / 가디안' }],
    },
  ],
  elite4: [
    {
      title: '사천왕 시드니 (악 타입)',
      note: '번치코 클로즈컴뱃 또는 가디안으로 처리. 악은 격투에 약점.',
      rows: [{ opponent: '크라이무·불비달마·샤크니아·나시판·앱솔', answer: '번치코 클로즈컴뱃 / 가디안 사이코키네시스' }],
    },
    {
      title: '사천왕 피비 (고스트 타입)',
      note: '가디안 섀도볼 또는 썬더볼트로 처리. 고스트에는 노말·격투 무효.',
      rows: [{ opponent: '다크펫·어둠대신·파치리즈… 더미얼렛 등 고스트', answer: '가디안 섀도볼 / 썬더볼트 10만볼트' }],
    },
    {
      title: '사천왕 글레이시아 (얼음 타입)',
      note: '번치코 화염방사 또는 썬더볼트 전기기로 처리. 얼음은 불·격투·바위·강철에 약점.',
      rows: [{ opponent: '얼음귀신·씨카이저·글라이온 등', answer: '번치코 화염방사 / 썬더볼트 10만볼트' }],
    },
    {
      title: '사천왕 드레이크 (드래곤 타입)',
      note: '씨카이저 얼음빔 또는 플라이곤 드래곤기로 처리. 드래곤은 얼음·드래곤에 약점.',
      rows: [{ opponent: '아공이·쉘곤·삼삼드래·플라이곤·보만다', answer: '씨카이저 얼음빔 / 플라이곤 드래곤브레스' }],
    },
  ],
  champion: {
    title: '챔피언 미라 (물 타입)',
    note: '에메랄드 전용 챔피언 미라. 고래왕·루파파·만타인·미끄래곤·갸라도스·밀로틱을 사용. 전기·풀에 약점.',
    rows: [
      { opponent: '고래왕 (물)', answer: '썬더볼트 10만볼트 / 가디안' },
      { opponent: '루파파 (물/풀)', answer: '번치코 화염방사 / 가디안 에스퍼' },
      { opponent: '만타인 (물/비행)', answer: '썬더볼트 / 씨카이저 얼음빔' },
      { opponent: '미끄래곤 (물)', answer: '썬더볼트 / 가디안' },
      { opponent: '갸라도스 (물/비행)', answer: '썬더볼트 10만볼트' },
      { opponent: '밀로틱 (물)', answer: '썬더볼트 / 가디안 사이코키네시스' },
    ],
  },
  summary: [
    { stage: '1~3관', strategy: '랄토스 포획 우선. 가디안으로 격투 체육관 담당. 썬더라이로 전기 체육관 우위' },
    { stage: '4~5관', strategy: '씨카이저로 불꽃 체육관, 번치코 격투기로 노말 체육관' },
    { stage: '6~8관', strategy: '씨카이저 얼음빔으로 비행 견제. 썬더볼트로 물 체육관 처리' },
    { stage: 'E4', strategy: '번치코 격투→시드니, 가디안→피비, 썬더볼트→글레이시아, 씨카이저→드레이크' },
    { stage: '미라', strategy: '썬더볼트가 핵심. 갸라도스·고래왕 등 물 타입 전담' },
  ],
  support: [
    { pokemon: '앱솔', pokemonId: 359, role: '악 타입 딜러. E4 피비 고스트 보조. 120번도로에서 포획 가능', obtainedAt: '120번도로' },
  ],
  cautions: [
    '번치코 파티는 물 타입이 씨카이저와 패리퍼 둘이지만, 주력 딜러는 씨카이저다. 패리퍼는 HM 담당.',
    '가디안은 3세대에서 에스퍼 단일 타입. 섀도볼(TM30)로 고스트 커버가 가능하다.',
    '3세대에서는 물리/특수 분류가 타입 전체에 적용된다. 불꽃·물·전기·얼음·풀은 특수, 땅·격투·비행 등은 물리.',
  ],
}

const MUDKIP_GUIDE: StarterGuideData = {
  id: 'mudkip',
  starterPokemonId: 258,
  nameKo: '물짱이',
  finalPartyIds: [260, 282, 286, 373, 354, 323],
  finalRoles: [
    { pokemon: '대짱이', role: '물/땅 메인 딜러. 파도타기·지진·폭포오르기. 전기 면역이라 3관이 매우 편함' },
    { pokemon: '가디안', role: '에스퍼 딜러. 사이코키네시스·섀도볼. 격투·독 전담' },
    { pokemon: '버섯모', role: '풀/격투. 잎날가르기·사이드체인지·씨뿌리기. 물 타입 체육관 보조' },
    { pokemon: '보만다', role: '드래곤/비행 최강급. 드래곤클로·불대문자·지진. E4 드레이크 대항' },
    { pokemon: '다크펫', role: '고스트. 섀도볼·혹독한·저주. E4 피비 대항. 어둠대신에서 진화' },
    { pokemon: '폭타', role: '불꽃/바위. 화염방사·바위떨굴기. 풀·얼음·비행 타입 처리' },
  ],
  catchTable: [
    { timing: '게임 시작', pokemonId: 258, pokemon: '물짱이', note: '스타팅. 최종 대짱이(물/땅). 전기 면역이 강점' },
    { timing: '101번도로 전후', pokemonId: 280, pokemon: '랄토스', note: '최종 가디안. 우선 포획' },
    { timing: '페탈버그숲 이전·이후', pokemonId: 285, pokemon: '버섯꼬', note: '최종 버섯모. 페탈버그숲에서 포획 가능' },
    { timing: '111번도로 사막 (4관 이후)', pokemonId: 371, pokemon: '아공이', note: '최종 보만다. 아공이→쉘곤(Lv.30)→보만다(Lv.50). 어려운 육성이지만 최강 딜러' },
    { timing: '121번도로 ~ 114번도로', pokemonId: 353, pokemon: '어둠대신', note: '최종 다크펫(고스트). E4 피비 대항. 자정 이후 등장률 증가' },
    { timing: '112번도로 ~ 113번도로', pokemonId: 322, pokemon: '뇨모리', note: '최종 폭타(불꽃/바위). 뇨모리→폭타(Lv.33)' },
  ],
  movesets: [
    {
      pokemonId: 260,
      pokemon: '대짱이',
      finalMoves: ['파도타기', '지진', '폭포오르기', '진흙폭탄 / 아이언테일'],
      moveTable: [
        { move: '파도타기', how: 'HM03', usage: 'HM03. 물 특수기 + 이동' },
        { move: '지진', how: 'TM26', usage: '땅 물리기. 3세대에서 물리 판정. 전기·독·불꽃 타입 처리' },
        { move: '폭포오르기', how: 'HM07', usage: 'HM07. 후반 진행 + 물리 물 기술' },
        { move: '진흙폭탄', how: 'Lv.습득', usage: '대짱이 전용기. 명중률 하락 효과' },
      ],
      notes: [
        '대짱이(Swampert)는 물/땅 타입. 전기 면역으로 3관 전기 체육관이 매우 편하다.',
        '단, 풀 타입에 4배 약점. 6관 비행 체육관에서 트라이어택 등에도 주의.',
        '지진(TM26)을 반드시 배정한다. 3세대에서 땅은 물리 판정으로 대짱이의 높은 공격력을 활용한다.',
      ],
    },
    {
      pokemonId: 286,
      pokemon: '버섯모',
      finalMoves: ['잎날가르기', '씨뿌리기 / 메가드레인', '저리가루', '격투기 / 바디슬램'],
      moveTable: [
        { move: '잎날가르기', how: 'Lv.습득', usage: '풀 특수기. 물 타입 체육관 처리' },
        { move: '씨뿌리기', how: 'Lv.습득', usage: '체력 흡수. 장기전 지구력' },
        { move: '메가드레인', how: 'TM', usage: '풀 특수기 + HP 흡수' },
        { move: '저리가루', how: 'Lv.습득', usage: '마비 유틸. 포획·보스전 보조' },
      ],
      notes: [
        '버섯꼬(285)는 페탈버그숲에서 포획. Lv.23에서 버섯모 진화.',
        '버섯모는 풀/격투 타입으로 물·바위 타입 견제가 가능하다.',
        '8관 후안의 물 파티에 잎날가르기가 유효하다.',
      ],
    },
    {
      pokemonId: 373,
      pokemon: '보만다',
      finalMoves: ['드래곤클로', '불대문자 / 화염방사', '지진', '공중날기'],
      moveTable: [
        { move: '드래곤클로', how: 'Lv.습득', usage: '드래곤 물리기. E4 드레이크 파티 처리' },
        { move: '불대문자 / 화염방사', how: 'TM38', usage: '불꽃 기술. 강철·풀·얼음 타입 처리' },
        { move: '지진', how: 'TM26', usage: '땅 물리기. 전기·독 처리. 대짱이와 분담 가능' },
        { move: '공중날기', how: 'HM02', usage: 'HM02. 이동 + 비행 물리기' },
      ],
      notes: [
        '아공이(371)→쉘곤(Lv.30)→보만다(Lv.50). 레벨 50까지 비브라바 등보다 훨씬 오래 걸린다.',
        '하지만 최종 진화 보만다는 3세대 최강 물리 딜러 중 하나. 스토리 중반 이후를 위해 미리 육성한다.',
        'E4 드레이크의 드래곤 파티에 드래곤클로로 대항할 수 있다.',
      ],
    },
    {
      pokemonId: 354,
      pokemon: '다크펫',
      finalMoves: ['섀도볼', '혹독한빛', '염원구슬', '밤의소란'],
      moveTable: [
        { move: '섀도볼', how: 'TM30', usage: '주력 고스트 특수기' },
        { move: '혹독한빛', how: 'Lv.습득', usage: '특수 공격력 하락. 보스전 안정화' },
        { move: '염원구슬', how: 'Lv.습득', usage: '고스트 물리기. 선택지' },
        { move: '밤의소란', how: 'Lv.습득', usage: '노말 특수기. 구매하기 쉬운 기술' },
      ],
      notes: [
        '어둠대신(353)→다크펫(354). 어둠대신은 주로 밤에 출현. 121번도로 등에서 포획.',
        '다크펫은 고스트 타입으로 E4 피비 파티(고스트 타입)와의 상성이 복잡하다. 섀도볼을 공유 가능.',
        '고스트는 노말·격투 타입 기술에 면역이므로 상대 노말 공격에 안전하다.',
      ],
    },
    {
      pokemonId: 323,
      pokemon: '폭타',
      finalMoves: ['화염방사', '바위떨굴기', '지진', '연기'],
      moveTable: [
        { move: '화염방사', how: 'TM35', usage: '불꽃 특수기. 풀·얼음·벌레·강철 처리' },
        { move: '바위떨굴기', how: 'Lv.습득', usage: '바위 물리기. 비행·불꽃·얼음 타입 처리' },
        { move: '지진', how: 'TM26', usage: '땅 물리기. 다른 멤버와 역할 분담' },
        { move: '연기', how: 'Lv.습득', usage: '명중률 하락 유틸. 불리한 전투 탈출' },
      ],
      notes: [
        '뇨모리(322)→폭타(Lv.33). 112~113번도로에서 뇨모리 포획.',
        '폭타는 불꽃/바위 타입으로 비행 타입에도 강하다. 6관 윈도나 비행 체육관에 유효.',
        '3세대에서 불꽃 기술은 특수 판정이므로 폭타의 공격 스탯보다 특공이 중요.',
      ],
    },
    {
      pokemonId: 282,
      pokemon: '가디안',
      finalMoves: ['사이코키네시스', '섀도볼', '전기자석파', '회복'],
      moveTable: [
        { move: '사이코키네시스', how: 'Lv.습득', usage: '주력 에스퍼 특수기' },
        { move: '섀도볼', how: 'TM30', usage: '고스트·에스퍼 견제' },
        { move: '전기자석파', how: 'TM', usage: '마비 유틸' },
        { move: '회복', how: 'Lv.습득', usage: 'HP 회복' },
      ],
      notes: ['아차모 가이드의 가디안과 동일한 운용 방침.'],
    },
  ],
  stages: [
    {
      title: '초반: 리틀루트 ~ 3관',
      members: ['물짱이 / 늪짱이', '랄토스', '버섯꼬 (페탈버그숲)', '자유 슬롯'],
      goals: [
        '랄토스를 101번도로에서 포획한다.',
        '버섯꼬를 페탈버그숲에서 확보한다.',
        '3관 전기 체육관은 대짱이(전기 면역)로 안전하게 통과한다.',
      ],
    },
    {
      title: '중반: 4~6관',
      members: ['늪짱이 / 대짱이', '가디안', '버섯모', '아공이 / 쉘곤 (육성 중)', '뇨모리 / 폭타'],
      goals: [
        '아공이를 111번도로에서 포획해 육성 시작. 기술 머신 부족은 야생 전투로 보충.',
        '어둠대신을 121번도로에서 밤에 포획.',
        '파도타기(5관 이후) 확보 후 보만다 육성 가속.',
      ],
    },
    {
      title: '후반: 7관 ~ 미라',
      members: ['대짱이', '가디안', '버섯모', '보만다', '다크펫', '폭타'],
      goals: [
        '보만다(Lv.50)를 최대한 빨리 진화시킨다.',
        'E4 드레이크 대비로 보만다에 드래곤클로와 얼음기(기술 가르침)를 배정.',
        '챔피언 미라의 물 파티는 버섯모 잎날가르기와 가디안으로 처리.',
      ],
    },
  ],
  gymMatchups: [
    {
      ...EMERALD_GYM_ROWS_TEMPLATE.g1,
      rows: [{ opponent: '이바이트 (바위)', answer: '늪짱이 파도타기 / 가디안 에스퍼' }],
    },
    {
      ...EMERALD_GYM_ROWS_TEMPLATE.g2,
      rows: [{ opponent: '하리뭉·이므나 (격투)', answer: '가디안 사이코키네시스' }],
    },
    {
      ...EMERALD_GYM_ROWS_TEMPLATE.g3,
      rows: [{ opponent: '코일·에레키드 (전기)', answer: '대짱이 지진 (전기 면역 + 땅 유효)' }],
    },
    {
      ...EMERALD_GYM_ROWS_TEMPLATE.g4,
      rows: [{ opponent: '마그마·폭발토 (불꽃)', answer: '대짱이 파도타기 / 버섯모 메가드레인' }],
    },
    {
      ...EMERALD_GYM_ROWS_TEMPLATE.g5,
      rows: [{ opponent: '까부리드·슬리퍼 (노말)', answer: '가디안 사이코키네시스 / 버섯모 격투기' }],
    },
    {
      ...EMERALD_GYM_ROWS_TEMPLATE.g6,
      rows: [{ opponent: '파비코·삼삼드래 (비행)', answer: '폭타 바위떨굴기 / 가디안 에스퍼' }],
    },
    {
      ...EMERALD_GYM_ROWS_TEMPLATE.g7,
      rows: [{ opponent: '루나톤·솔록 (에스퍼, 더블)', answer: '가디안 섀도볼 / 다크펫 섀도볼' }],
    },
    {
      ...EMERALD_GYM_ROWS_TEMPLATE.g8,
      rows: [{ opponent: '킹드라·씨카이저 (물)', answer: '버섯모 잎날가르기 / 가디안 에스퍼' }],
    },
  ],
  elite4: [
    {
      title: '사천왕 시드니 (악 타입)',
      note: '버섯모 격투기 또는 보만다로 처리. 악은 격투에 약점.',
      rows: [{ opponent: '악 타입 파티', answer: '버섯모 격투기 / 보만다 드래곤클로' }],
    },
    {
      title: '사천왕 피비 (고스트 타입)',
      note: '다크펫 섀도볼 또는 가디안 섀도볼로 처리. 고스트에는 고스트·악이 효과적.',
      rows: [{ opponent: '다크펫·어둠대신 등 고스트', answer: '다크펫 섀도볼 / 가디안 섀도볼' }],
    },
    {
      title: '사천왕 글레이시아 (얼음 타입)',
      note: '폭타 화염방사로 얼음 타입 처리. 버섯모 격투기도 유효.',
      rows: [{ opponent: '얼음 타입 파티', answer: '폭타 화염방사 / 버섯모 격투기' }],
    },
    {
      title: '사천왕 드레이크 (드래곤 타입)',
      note: '보만다 드래곤클로로 드래곤 견제. 대짱이 파도타기(킹드라)도 유효.',
      rows: [{ opponent: '아공이·쉘곤·삼삼드래·플라이곤·보만다', answer: '보만다 드래곤클로 / 대짱이 파도타기' }],
    },
  ],
  champion: {
    title: '챔피언 미라 (물 타입)',
    note: '버섯모 잎날가르기가 핵심. 고래왕·갸라도스 등 물 타입에는 가디안 에스퍼도 가능.',
    rows: [
      { opponent: '고래왕 (물)', answer: '버섯모 잎날가르기 / 가디안' },
      { opponent: '루파파 (물/풀)', answer: '폭타 화염방사 / 보만다 불대문자' },
      { opponent: '갸라도스 (물/비행)', answer: '가디안 에스퍼 / 버섯모' },
      { opponent: '밀로틱 (물)', answer: '버섯모 잎날가르기 / 가디안' },
    ],
  },
  summary: [
    { stage: '1~3관', strategy: '대짱이의 전기 면역으로 3관을 안전 통과. 가디안·버섯꼬 육성 병행' },
    { stage: '4~5관', strategy: '대짱이 파도타기로 불꽃 담당. 가디안으로 노말 체육관 5관 처리' },
    { stage: '6~8관', strategy: '폭타 바위기로 비행 담당. 버섯모 잎날가르기로 물 체육관 8관 처리' },
    { stage: 'E4', strategy: '버섯모→시드니·글레이시아, 가디안→피비, 보만다→드레이크' },
    { stage: '미라', strategy: '버섯모 잎날가르기가 핵심. 루파파는 보만다 불꽃기로' },
  ],
  support: [
    { pokemon: '앱솔', pokemonId: 359, role: '악 딜러. E4 피비 보조. 120번도로 포획', obtainedAt: '120번도로' },
  ],
  cautions: [
    '대짱이는 풀 타입에 4배 약점. 6관 비행 체육관에서도 풀 기술에 주의한다.',
    '보만다는 Lv.50이 되어야 진화. 중반부터 꾸준히 육성하지 않으면 사천왕전에 늦는다.',
    '어둠대신은 야간에만 등장 확률이 높다. DS의 시계를 조정하거나 밤 시간대에 포획한다.',
  ],
}

const TREECKO_GUIDE: StarterGuideData = {
  id: 'treecko',
  starterPokemonId: 252,
  nameKo: '나무지기',
  finalPartyIds: [254, 282, 365, 310, 330, 359],
  finalRoles: [
    { pokemon: '나무킹', role: '풀 메인 딜러. 잎날가르기·속임수·아이언테일. 물 타입 체육관 전담' },
    { pokemon: '가디안', role: '에스퍼 딜러. 사이코키네시스·섀도볼. 격투·독 타입 전담' },
    { pokemon: '씨카이저', role: '물/얼음. 파도타기·얼음빔·폭포오르기. 불꽃 타입 약점 보완 + 드레이크 대항' },
    { pokemon: '썬더볼트', role: '전기 딜러. 10만볼트·전기자석파. 물 타입 체육관 보조 + 비행 견제' },
    { pokemon: '플라이곤', role: '드래곤/땅. 지진·공중날기·불대문자. HM02 담당. 전기 면역' },
    { pokemon: '앱솔', role: '악 딜러. 사이코커터·칼춤·기습. E4 피비 고스트 보조' },
  ],
  catchTable: [
    { timing: '게임 시작', pokemonId: 252, pokemon: '나무지기', note: '스타팅. 최종 나무킹(풀 단일). 8관 물 타입 체육관 주력' },
    { timing: '101번도로 전후', pokemonId: 280, pokemon: '랄토스', note: '최종 가디안. 우선 포획' },
    { timing: '110번도로', pokemonId: 309, pokemon: '썬더라이', note: '최종 썬더볼트. 전기 딜러' },
    { timing: '111번도로 사막', pokemonId: 328, pokemon: '톱치', note: '최종 플라이곤. 드래곤/땅. 전기 면역으로 3관 우위' },
    { timing: '쇼울케이브 (7관 이후)', pokemonId: 363, pokemon: '대굴레오 / 씨레오', note: '최종 씨카이저. 물/얼음으로 불꽃 약점 보완' },
    { timing: '120번도로', pokemonId: 359, pokemon: '앱솔', note: '악 타입 딜러. 칼춤+사이코커터 등 기습 전략' },
  ],
  movesets: [
    {
      pokemonId: 254,
      pokemon: '나무킹',
      finalMoves: ['잎날가르기', '속임수 / 날카로움', '아이언테일', '에너지볼 / 에너지충전'],
      moveTable: [
        { move: '잎날가르기', how: 'Lv.습득', usage: '풀 특수기. 주력 기술' },
        { move: '속임수', how: 'Lv.습득', usage: '노말 물리기. 3세대 전용기. 상대 능력 변화를 역이용' },
        { move: '아이언테일', how: 'TM23', usage: '강철 물리기. 바위·얼음 타입 처리. TM23' },
        { move: '에너지볼', how: 'TM', usage: '풀 특수기. 잎날가르기보다 위력이 높은 버전' },
      ],
      notes: [
        '나무킹은 풀 단일 타입. 불꽃·얼음·독·비행·벌레에 약점이 많다.',
        '약점이 많으므로 씨카이저로 불꽃·얼음을, 가디안으로 독·격투를 커버한다.',
        '8관 후안의 물 파티를 잎날가르기로 처리하는 것이 이 스타터의 핵심 역할.',
      ],
    },
    {
      pokemonId: 365,
      pokemon: '씨카이저',
      finalMoves: ['파도타기', '얼음빔', '폭포오르기', '아이언테일 / 바디슬램'],
      moveTable: [
        { move: '파도타기', how: 'HM03', usage: 'HM03. 물 특수기 + 이동' },
        { move: '얼음빔', how: 'TM13', usage: '얼음 특수기. E4 드레이크 파티 핵심' },
        { move: '폭포오르기', how: 'HM07', usage: 'HM07. 후반 진행 필수' },
        { move: '아이언테일', how: 'TM23', usage: '바위 타입 물리 견제' },
      ],
      notes: [
        '나무지기 파티에서 씨카이저의 역할이 특히 중요하다. 불꽃(나무킹 약점)을 파도타기로 커버.',
        'E4 드레이크의 드래곤 파티에 얼음빔이 필수적이다.',
        '대굴레오를 일찍 포획하기 어려우면 쇼울케이브에서 씨레오를 직접 포획한다.',
      ],
    },
    {
      pokemonId: 310,
      pokemon: '썬더볼트',
      finalMoves: ['10만볼트', '전기자석파', '번개', '퀵어택'],
      moveTable: [
        { move: '10만볼트', how: 'TM24', usage: '주력 전기 특수기' },
        { move: '전기자석파', how: 'TM', usage: '마비 유틸' },
        { move: '번개', how: 'TM25', usage: '고화력 전기기. 비 날씨에서 명중 보정' },
        { move: '퀵어택', how: 'Lv.습득', usage: '선제 공격' },
      ],
      notes: [
        '나무지기 파티의 전기 딜러. 3관 전기 체육관은 플라이곤(전기 면역)으로 통과하고, 이후 썬더볼트가 전기 역할을 맡는다.',
        '패리퍼 파티(비행+물)에 10만볼트가 효과적.',
      ],
    },
    {
      pokemonId: 330,
      pokemon: '플라이곤',
      finalMoves: ['지진', '공중날기', '불대문자', '드래곤브레스'],
      moveTable: [
        { move: '지진', how: 'TM26', usage: '땅 물리기. 전기·독·바위 타입 처리' },
        { move: '공중날기', how: 'HM02', usage: 'HM02. 이동 + 비행 물리기' },
        { move: '불대문자', how: 'TM38', usage: '불꽃 기술. 강철·풀·얼음·벌레 타입 처리' },
        { move: '드래곤브레스', how: 'Lv.습득', usage: '드래곤 기술. 마비 부가효과' },
      ],
      notes: [
        '나무지기 파티에서 불꽃 기술 공급원이 플라이곤이다. 불대문자(TM38)를 배정.',
        '전기 면역으로 3관 전기 체육관이 안전하다.',
      ],
    },
    {
      pokemonId: 359,
      pokemon: '앱솔',
      finalMoves: ['칼춤', '기습', '사이코커터', '아이언테일'],
      moveTable: [
        { move: '칼춤', how: 'Lv.습득', usage: '공격력 2배 상승. 물리 딜러 준비 기술' },
        { move: '기습', how: 'Lv.습득', usage: '선제 물리 악 기술. 칼춤 후 강력' },
        { move: '사이코커터', how: 'Lv.습득', usage: '에스퍼 물리기. 격투·독 타입 견제' },
        { move: '아이언테일', how: 'TM23', usage: '강철 물리기. 바위·얼음 견제' },
      ],
      notes: [
        '앱솔은 120번도로에서 포획. 악 타입 물리 딜러.',
        'E4 피비 고스트 파티에는 가디안 섀도볼이 주역이지만, 앱솔 기습으로도 처리 가능.',
        '칼춤→기습 조합이 강력. 스피드가 낮으므로 선제기 기습을 활용한다.',
      ],
    },
    {
      pokemonId: 282,
      pokemon: '가디안',
      finalMoves: ['사이코키네시스', '섀도볼', '전기자석파', '회복'],
      moveTable: [
        { move: '사이코키네시스', how: 'Lv.습득', usage: '주력 에스퍼 특수기' },
        { move: '섀도볼', how: 'TM30', usage: '고스트·에스퍼 견제' },
        { move: '전기자석파', how: 'TM', usage: '마비 유틸' },
        { move: '회복', how: 'Lv.습득', usage: 'HP 회복' },
      ],
      notes: ['아차모 가이드의 가디안과 동일한 운용 방침.'],
    },
  ],
  stages: [
    {
      title: '초반: 리틀루트 ~ 3관',
      members: ['나무지기 / 나무돌이', '랄토스', '썬더라이', '톱치 (포획 중)'],
      goals: [
        '3관 전기 체육관은 톱치(땅 타입)나 플라이곤 진화 전에는 가디안·나무돌이 풀기로 돌파.',
        '톱치는 111번도로에서 포획 후 비브라바 육성 병행.',
      ],
    },
    {
      title: '중반: 4~6관',
      members: ['나무돌이 / 나무킹', '가디안', '썬더볼트', '비브라바 (육성 중)', '패리퍼 준비'],
      goals: [
        '4관 불꽃은 씨카이저(파도타기)로 처리. 씨카이저 선포획이 어려우면 패리퍼 파도타기 활용.',
        '5관 노말 선우는 가디안 에스퍼로 처리.',
        '6관 비행 체육관은 썬더볼트 10만볼트로 처리.',
      ],
    },
    {
      title: '후반: 7관 ~ 미라',
      members: ['나무킹', '가디안', '씨카이저', '썬더볼트', '플라이곤', '앱솔'],
      goals: [
        '씨카이저를 쇼울케이브에서 확보해 불꽃 약점 커버.',
        'E4 드레이크 드래곤 파티는 씨카이저 얼음빔 + 플라이곤 드래곤기로 처리.',
        '챔피언 미라 물 파티는 나무킹 잎날가르기로 대응.',
      ],
    },
  ],
  gymMatchups: [
    {
      ...EMERALD_GYM_ROWS_TEMPLATE.g1,
      rows: [{ opponent: '이바이트 (바위)', answer: '나무지기 잎날가르기 (풀이 바위 4배 유효)' }],
    },
    {
      ...EMERALD_GYM_ROWS_TEMPLATE.g2,
      rows: [{ opponent: '하리뭉·이므나 (격투)', answer: '가디안 사이코키네시스' }],
    },
    {
      ...EMERALD_GYM_ROWS_TEMPLATE.g3,
      rows: [{ opponent: '코일·에레키드 (전기)', answer: '플라이곤 지진 (전기 면역) / 나무킹 (풀은 전기 반감)' }],
    },
    {
      ...EMERALD_GYM_ROWS_TEMPLATE.g4,
      rows: [{ opponent: '마그마·폭발토 (불꽃)', answer: '씨카이저 파도타기 / 패리퍼' }],
    },
    {
      ...EMERALD_GYM_ROWS_TEMPLATE.g5,
      rows: [{ opponent: '까부리드·슬리퍼 (노말)', answer: '가디안 사이코키네시스 / 나무킹 잎날가르기' }],
    },
    {
      ...EMERALD_GYM_ROWS_TEMPLATE.g6,
      rows: [{ opponent: '파비코·삼삼드래 (비행)', answer: '썬더볼트 10만볼트 / 씨카이저 얼음빔' }],
    },
    {
      ...EMERALD_GYM_ROWS_TEMPLATE.g7,
      rows: [{ opponent: '루나톤·솔록 (에스퍼, 더블)', answer: '가디안 섀도볼 / 앱솔 기습' }],
    },
    {
      ...EMERALD_GYM_ROWS_TEMPLATE.g8,
      rows: [{ opponent: '킹드라·씨카이저 (물)', answer: '나무킹 잎날가르기 / 썬더볼트' }],
    },
  ],
  elite4: [
    {
      title: '사천왕 시드니 (악 타입)',
      note: '가디안 사이코키네시스 또는 나무킹 잎날가르기로 처리. 악은 격투·벌레에도 약점.',
      rows: [{ opponent: '악 타입 파티', answer: '가디안 사이코키네시스 / 앱솔 격투기' }],
    },
    {
      title: '사천왕 피비 (고스트 타입)',
      note: '가디안 섀도볼 또는 앱솔 기습으로 처리.',
      rows: [{ opponent: '고스트 타입 파티', answer: '가디안 섀도볼 / 앱솔 기습' }],
    },
    {
      title: '사천왕 글레이시아 (얼음 타입)',
      note: '플라이곤 불대문자 또는 썬더볼트 전기기로 처리.',
      rows: [{ opponent: '얼음 타입 파티', answer: '플라이곤 불대문자 / 썬더볼트 10만볼트' }],
    },
    {
      title: '사천왕 드레이크 (드래곤 타입)',
      note: '씨카이저 얼음빔이 핵심. 플라이곤 드래곤기로 보조.',
      rows: [{ opponent: '드래곤 타입 파티', answer: '씨카이저 얼음빔 / 플라이곤 드래곤브레스' }],
    },
  ],
  champion: {
    title: '챔피언 미라 (물 타입)',
    note: '나무킹 잎날가르기가 핵심. 루파파(물/풀)는 플라이곤 불대문자로 처리.',
    rows: [
      { opponent: '고래왕 (물)', answer: '나무킹 잎날가르기' },
      { opponent: '루파파 (물/풀)', answer: '플라이곤 불대문자 / 썬더볼트' },
      { opponent: '갸라도스 (물/비행)', answer: '썬더볼트 10만볼트' },
      { opponent: '밀로틱 (물)', answer: '나무킹 잎날가르기 / 썬더볼트' },
    ],
  },
  summary: [
    { stage: '1~3관', strategy: '1관 바위는 나무킹 풀 4배 유효. 3관은 플라이곤(땅) 또는 나무킹(전기 반감)으로' },
    { stage: '4~5관', strategy: '4관 불꽃은 씨카이저, 5관 노말은 가디안으로' },
    { stage: '6~8관', strategy: '6관 비행은 썬더볼트, 7관 에스퍼는 가디안 섀도볼, 8관 물은 나무킹' },
    { stage: 'E4', strategy: '가디안→시드니·피비, 씨카이저→드레이크, 썬더볼트·플라이곤→글레이시아' },
    { stage: '미라', strategy: '나무킹 잎날가르기 + 썬더볼트가 핵심. 루파파는 플라이곤으로' },
  ],
  support: [
    { pokemon: '패리퍼', pokemonId: 279, role: 'HM 담당. 파도타기·공중날기·다이빙. 물 체육관 보조', obtainedAt: '갈모매 109번도로 포획 후 진화' },
  ],
  cautions: [
    '나무킹은 약점이 많다 (불꽃·얼음·독·비행·벌레). 씨카이저와 플라이곤으로 커버한다.',
    '씨카이저 확보가 늦어지면 4관 불꽃 체육관이 어렵다. 패리퍼 파도타기를 보조로 사용한다.',
    '앱솔은 120번도로에서 포획. 스피드가 낮으니 선제기(기습)와 칼춤을 적극 활용한다.',
  ],
}

export const EMERALD_STARTERS: StarterGuideData[] = [ACHAMO_GUIDE, MUDKIP_GUIDE, TREECKO_GUIDE]

export const EMERALD_NAME_TO_ID: Map<string, number> = new Map(
  (
    [
      ['번치코', 257], ['영치코', 256], ['아차모', 255],
      ['대짱이', 260], ['늪짱이', 259], ['물짱이', 258],
      ['나무킹', 254], ['나무돌이', 253], ['나무지기', 252],
      ['가디안', 282], ['킬리아', 281], ['랄토스', 280],
      ['플라이곤', 330], ['비브라바', 329], ['톱치', 328],
      ['씨카이저', 365], ['씨레오', 364], ['대굴레오', 363],
      ['썬더볼트', 310], ['썬더라이', 309],
      ['패리퍼', 279], ['갈모매', 278],
      ['버섯모', 286], ['버섯꼬', 285],
      ['보만다', 373], ['쉘곤', 372], ['아공이', 371],
      ['다크펫', 354], ['어둠대신', 353],
      ['앱솔', 359], ['폭타', 323], ['뇨모리', 322],
      ['루나톤', 337], ['솔록', 338],
    ] as [string, number][]
  ).sort((a, b) => b[0].length - a[0].length),
)
