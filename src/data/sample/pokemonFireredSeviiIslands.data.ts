// 포켓몬 파이어레드 일곱섬 클리어 후 스토리 공략 데이터.

export interface StageRow {
  step: string
  island: string
  action: string
  note: string
}

export const SEVII_STORY_TRIPASS_STEPS: StageRow[] = [
  {
    step: '① 포켓몬리그 클리어',
    island: '관동',
    action: '챔피언 블루 격파 후 명예의 전당 등록',
    note: '트라이패스(1~3의 섬 통행증)를 받을 준비가 된다.',
  },
  {
    step: '② 셀리오와 대화',
    island: '1의 섬',
    action: '빨강도시에서 배를 타고 1의 섬 포켓몬센터 방문 → 셀리오와 대화',
    note: '포켓몬 네트워크 시스템(LANS)을 완성하려면 루비석·사파이어석이 필요. 트라이패스 수령.',
  },
  {
    step: '③ 횃불산 탐험',
    island: '1의 섬',
    action: '횃불산 입구에서 팀 로켓 간부 2명 격파 → 내부 깊숙이 진입',
    note: '팀 로켓이 루비석을 발굴 중. 1층 깊은 곳에서 루비석을 회수한다.',
  },
  {
    step: '④ 2의 섬 방문',
    island: '2의 섬',
    action: '포켓몬 교환 매니아 할아버지와 대화 → 손녀 찾기 의뢰 수락',
    note: '손녀 루리는 3의 섬에 있다. 메인 퀘스트를 이어가기 위해 3의 섬으로 이동.',
  },
  {
    step: '⑤ 열매숲 탐험',
    island: '3의 섬',
    action: '열매숲 안쪽에서 최면포켓몬(수면!)에게 붙잡힌 루리를 구출',
    note: '수면가루·전자기파 등 상태이상 기술이 효과적. 루리를 구한 후 마을로 돌아온다.',
  },
  {
    step: '⑥ 루비석 전달',
    island: '1의 섬',
    action: '다시 1의 섬으로 돌아가 셀리오에게 루비석 전달',
    note: '레인보우패스(4~7의 섬 통행증)를 획득한다.',
  },
]

export const SEVII_STORY_RAINBOW_STEPS: StageRow[] = [
  {
    step: '⑦ 4의 섬 방문',
    island: '4의 섬',
    action: '얼음폭포 동굴 탐험 → HM07 폭포오르기 획득 → 로렐 이벤트',
    note: '얼음폭포 동굴 안에서 팀 로켓과 싸우는 로렐(사천왕)을 돕는다. 이후 폭포오르기 사용 가능.',
  },
  {
    step: '⑧ 6의 섬 탐험',
    island: '6의 섬',
    action: '증표의 숲 진입 → 내부 수수께끼 해결 → 사파이어석 발견',
    note: '화살표 수수께끼를 풀어 최심부에 도달. 사파이어석을 발견하는 순간 팀 로켓에게 탈취당한다.',
  },
  {
    step: '⑨ 비밀번호 획득',
    island: '5·6의 섬',
    action: '로켓단 창고 입구의 두 비밀번호를 각 섬 NPC에게서 획득',
    note: '비밀번호는 증표의 숲 주변과 옥포그리 유적 구역에서 각각 얻는다.',
  },
  {
    step: '⑩ 로켓단 창고 돌파',
    island: '5의 섬',
    action: '로켓단 창고에 진입해 간부까지 모두 격파',
    note: '최심부에서 비밀번호를 입력해 잠금 해제. 간부를 쓰러뜨리면 사파이어석을 되찾을 수 있다.',
  },
  {
    step: '⑪ 사파이어석 전달',
    island: '1의 섬',
    action: '1의 섬으로 돌아가 셀리오에게 사파이어석 전달',
    note: '포켓몬 네트워크 완성 → 전국도감 모드 해제. 5세대까지의 포켓몬 도감 번호를 확인 가능.',
  },
]

export interface IslandCatchRow {
  island: string
  location: string
  pokemonId: number
  pokemon: string
  note: string
}

export const SEVII_CATCH_TABLE: IslandCatchRow[] = [
  // 출현 정보는 한국어 포켓몬 위키의 각 장소·포켓몬 문서 기준으로 대조했다.
  { island: '1의 섬', location: '횃불산', pokemonId: 218, pokemon: '마그마그', note: '불꽃 타입. 마그카르고로 진화. 파이어레드에서 마그마그를 잡을 수 있는 곳은 횃불산뿐이다.' },
  { island: '1의 섬', location: '횃불산 깊은 곳', pokemonId: 219, pokemon: '마그카르고', note: '마그마그의 진화형. 불꽃/바위라 물이 4배로 들어간다.' },
  { island: '1의 섬', location: '보물만 (좋은낚싯대)', pokemonId: 116, pokemon: '쏘드라', note: '물 타입. 시드라로 진화. 대단한낚싯대를 쓰면 시드라가 직접 나온다.' },
  { island: '1의 섬', location: '저녁노을길', pokemonId: 78, pokemon: '날쌩마', note: '불꽃 타입. 포니타의 진화형으로 스피드가 높다.' },
  { island: '2의 섬', location: '곶 언저리 (낡은낚싯대)', pokemonId: 129, pokemon: '잉어킹', note: '갸라도스 진화용. 대단한낚싯대로는 갸라도스가 직접 나온다.' },
  { island: '3의 섬', location: '3섬 항구', pokemonId: 206, pokemon: '노고치', note: '노말 타입. 내구가 높아 상태이상 걸기 좋다.' },
  { island: '4의 섬', location: '얼음폭포 동굴', pokemonId: 220, pokemon: '꾸꾸리', note: '얼음·땅 타입. 메꾸리로 진화. 내구형 얼음 담당.' },
  { island: '4의 섬', location: '얼음폭포 동굴', pokemonId: 225, pokemon: '딜리버드', note: '얼음/비행. 종족값은 낮지만 이 동굴에서만 나온다.' },
  { island: '4의 섬', location: '얼음폭포 동굴', pokemonId: 215, pokemon: '포푸니', note: '악/얼음. 공격이 높아 실전 투입이 가능하다.' },
  { island: '5의 섬', location: '5섬 공터', pokemonId: 52, pokemon: '나옹', note: '노말 타입. 페르시온으로 진화. 노름꾼 특성으로 돈을 번다.' },
  { island: '5의 섬', location: '5섬 공터', pokemonId: 187, pokemon: '통통코', note: '풀/비행. 두솜코·솜솜코로 진화하며 보조기가 많다.' },
  { island: '6의 섬', location: '증표의 숲', pokemonId: 214, pokemon: '헤라크로스', note: '벌레/격투. 이 숲의 최대 수확. 공격 125로 즉시 주력이 된다.' },
  { island: '6의 섬', location: '증표의 숲', pokemonId: 167, pokemon: '페이검', note: '벌레/독. 아리아도스로 진화.' },
  { island: '7의 섬', location: '칠보 계곡', pokemonId: 246, pokemon: '애버라스', note: '바위/땅. 마기라스까지 키우면 최종 파티급이지만 레벨업이 느리다.' },
  { island: '7의 섬', location: '칠보 계곡', pokemonId: 231, pokemon: '코코리', note: '땅 타입. 코리갑으로 진화. 지진 담당.' },
  { island: '7의 섬', location: '아스카나의 석실', pokemonId: 201, pokemon: '안농', note: '에스퍼 타입. 옥포그리 유적 열쇠로 봉인을 풀면 석실에 들어갈 수 있다.' },
]

export interface IslandItemRow {
  island: string
  location: string
  item: string
  note: string
}

export const SEVII_ITEM_TABLE: IslandItemRow[] = [
  { island: '1의 섬', location: '횃불산 내부', item: '루비석', note: '셀리오에게 전달 → 레인보우패스 획득. 퀘스트 핵심 아이템.' },
  { island: '2의 섬', location: '포켓몬 교환 매니아', item: 'TM27 은혜갚기', note: '할아버지 이벤트 완료 후 보상. 관동 포켓몬과 교환 가능.' },
  { island: '3의 섬', location: '열매숲 클리어 보상', item: '대단한낚싯대', note: '루리를 구한 후 마을에서 노인 NPC에게 입수. 강한 낚시 포켓몬 포획 가능.' },
  { island: '4의 섬', location: '얼음폭포 동굴', item: 'HM07 폭포오르기', note: '얼음폭포 동굴 내부에서 입수. 이후 폭포를 오르는 탐험이 가능해진다.' },
  { island: '5의 섬', location: '로켓단 창고', item: '사파이어석', note: '창고 최심부에서 회수. 셀리오에게 전달하면 전국도감이 해제된다.' },
  { island: '6의 섬', location: '증표의 숲', item: '사파이어석(발견 후 탈취)', note: '수수께끼 해결 후 발견되지만 팀 로켓이 즉시 가져간다.' },
  { island: '7의 섬', location: '옥포그리 유적', item: '옥포그리 유적 열쇠', note: '옥포그리 유적에서 암흑의 박스 7개를 밀어 열쇠 모양을 만들면 옥포그리 유적이 열린다.' },
]

export interface RocketWarehouseRow {
  task: string
  detail: string
}

export const SEVII_ROCKET_WAREHOUSE: RocketWarehouseRow[] = [
  { task: '사전 준비', detail: '6의 섬 증표의 숲을 먼저 클리어해 팀 로켓에게 사파이어석을 탈취당한다.' },
  { task: '비밀번호 1 획득', detail: '증표의 숲 입구 쪽 NPC와 대화해 첫 번째 비밀번호를 얻는다.' },
  { task: '비밀번호 2 획득', detail: '옥포그리 유적 구역 NPC와 대화해 두 번째 비밀번호를 얻는다.' },
  { task: '창고 진입', detail: '5의 섬 로켓단 창고 입구의 비밀번호 두 개를 모두 입력해 잠금 해제.' },
  { task: '간부 격파', detail: '창고 내부 팀 로켓 간부를 모두 격파. 마지막 간부에게서 사파이어석을 되찾는다.' },
]

export interface BossRow {
  opponent: string
  answer: string
}

export const SEVII_BOSS_ROCKET_ADMINS: { title: string; rows: BossRow[]; notes: string[] }[] = [
  {
    title: '횃불산 팀 로켓 간부 (1의 섬)',
    rows: [
      { opponent: '가스불꽃(마그마그 계열)', answer: '물 타입 기술 / 라프라스 파도타기 / 거북왕 파도타기' },
      { opponent: '니다퀸/니드킹', answer: '나시 사이코키네시스 / 라프라스 파도타기' },
    ],
    notes: [
      '횃불산 내부는 불꽃 타입이 많아 라프라스나 물 타입 포켓몬을 앞세우면 편하다.',
      '간부 2명이 연속으로 나오므로 회복 아이템을 충분히 준비한다.',
    ],
  },
  {
    title: '로켓단 창고 간부 (5의 섬)',
    rows: [
      { opponent: '골뱃', answer: '쥬피썬더 10만볼트 / 라프라스 냉동빔' },
      { opponent: '독침붕', answer: '쥬피썬더 10만볼트 / 나시 사이코키네시스' },
      { opponent: '아보크', answer: '나시 사이코키네시스 / 니드킹 지진' },
    ],
    notes: [
      '창고는 독·비행 타입이 많아 쥬피썬더와 나시가 핵심이다.',
      '독침붕의 독가시에 주의한다. 독 해독제를 여러 개 준비하자.',
      '최심부에서는 라이벌 블루와 배틀이 없으며, 간부를 쓰러뜨리면 퀘스트가 진행된다.',
    ],
  },
]

export const SEVII_LORELEI_NOTE = [
  '4의 섬 얼음폭포 동굴에서 팀 로켓에게 지인이 붙잡힌 사천왕 칸나를 돕는 이벤트가 발생한다.',
  '칸나 합류 후 동굴 안의 팀 로켓을 함께 처리하는 방식으로 진행된다.',
  '이 이벤트 후 폭포오르기(HM07)를 쓸 수 있게 되어 동굴 위층 탐험이 가능해진다.',
]

export const SEVII_UNOWN_NOTE = [
  '7의 섬 옥포그리 유적에서 암흑의 박스 7개를 밀어 열쇠 모양을 완성하면 옥포그리 유적이 열린다.',
  '유적의 각 방에서 알파벳 형태별 미지를 포획할 수 있다.',
  '미지는 에스퍼 타입이지만 혼자쓰기 외에 기술이 없어 전투 활용도는 낮다.',
  '도감 완성·컬렉션 목적으로 포획한다.',
]

export const SEVII_NATIONAL_DEX_NOTE = [
  '셀리오에게 루비석(1차)·사파이어석(2차)을 모두 전달하면 포켓몬 네트워크가 완성된다.',
  '전국도감 모드가 해제되어 1~5세대 관련 도감 번호가 표시된다.',
  '다른 포켓몬 게임과의 GBA 통신 교환이 가능해진다 (현재는 에뮬레이터 환경에서만 실질 활용 가능).',
]

// 본문 텍스트 속 포켓몬 이름을 자동 링크로 변환하기 위한 이름→ID 매핑.
const SEVII_NAME_TO_ID_ENTRIES: [string, number][] = [
  ['리자몽', 6],
  ['거북왕', 9],
  ['니드퀸', 31],
  ['니드킹', 34],
  ['야돈', 79],
  ['마그마그', 218],
  ['마그카르고', 219],
  ['쏘드라', 116],
  ['잉어킹', 129],
  ['갸라도스', 130],
  ['라프라스', 131],
  ['이브이', 133],
  ['쥬피썬더', 135],
  ['나시', 103],
  ['아라리', 102],
  ['골뱃', 42],
  ['독침붕', 15],
  ['아보크', 24],
  ['나옹', 52],
  ['부우부', 163],
  ['루주라', 124],
  ['꾸꾸리', 220],
  ['메꾸리', 221],
  ['미뇽', 147],
  ['망나뇽', 149],
  ['안농', 201],
  ['암나이트', 138],
  ['암스타', 139],
  ['투구', 140],
  ['투구푸스', 141],
  ['니드런♂', 32],
  ['니드킹', 34],
  ['잠만보', 143],
  ['쥬피썬더', 135],
  ['라프라스', 131],
  ['파라스', 46],
  ['파라섹트', 47],
]

export const SEVII_NAME_TO_ID = new Map<string, number>(
  [...SEVII_NAME_TO_ID_ENTRIES].sort((a, b) => b[0].length - a[0].length),
)

/**
 * 이 공략 본문에 등장하는 기술 이름 화이트리스트.
 * 전체 기술로 자동 매칭하면 "역할"·"방어" 같은 일반 명사나 다른 낱말의 일부가
 * 기술로 잘못 링크된다. 본문에 새 기술을 쓰면 여기에도 추가해야 링크가 걸린다.
 */
export const SEVII_MOVE_NAMES: ReadonlySet<string> = new Set([
  '사이코키네시스', '10만볼트', '폭포오르기', '고속이동', '수면가루', '파도타기',
  '냉동빔', '봉인', '지진',
])
