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
    step: '③ 화산 탐험',
    island: '1의 섬',
    action: '화산 입구에서 팀 로켓 간부 2명 격파 → 내부 깊숙이 진입',
    note: '팀 로켓이 루비석을 발굴 중. 1층 깊은 곳에서 루비석을 회수한다.',
  },
  {
    step: '④ 2의 섬 방문',
    island: '2의 섬',
    action: '포켓몬 교환 매니아 할아버지와 대화 → 손녀 찾기 의뢰 수락',
    note: '손녀 루리는 3의 섬에 있다. 메인 퀘스트를 이어가기 위해 3의 섬으로 이동.',
  },
  {
    step: '⑤ 딸기숲 탐험',
    island: '3의 섬',
    action: '딸기숲 안쪽에서 최면포켓몬(수면!)에게 붙잡힌 루리를 구출',
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
    action: '얼음 동굴 탐험 → HM07 폭포오르기 획득 → 로렐 이벤트',
    note: '얼음 동굴 안에서 팀 로켓과 싸우는 로렐(사천왕)을 돕는다. 이후 폭포오르기 사용 가능.',
  },
  {
    step: '⑧ 6의 섬 탐험',
    island: '6의 섬',
    action: '점박이 구멍 진입 → 내부 수수께끼 해결 → 사파이어석 발견',
    note: '화살표 수수께끼를 풀어 최심부에 도달. 사파이어석을 발견하는 순간 팀 로켓에게 탈취당한다.',
  },
  {
    step: '⑨ 비밀번호 획득',
    island: '5·6의 섬',
    action: '로켓단 창고 입구의 두 비밀번호를 각 섬 NPC에게서 획득',
    note: '비밀번호는 점박이 구멍 주변과 탄보비섬 구역에서 각각 얻는다.',
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
  { island: '1의 섬', location: '화산', pokemonId: 218, pokemon: '마그마그', note: '불꽃 타입. 마그카르고로 진화. 불꽃 타입 필요 시 편의.' },
  { island: '1의 섬', location: '화산', pokemonId: 219, pokemon: '마그카르고', note: '마그마그의 진화형. 화산 깊은 곳에서 등장.' },
  { island: '1의 섬', location: '매듭섬 낚시', pokemonId: 116, pokemon: '쏘드라', note: '물·독 타입. 가시해마로 진화. 전기 약점 주의.' },
  { island: '2의 섬', location: '진풍섬 낚시', pokemonId: 129, pokemon: '잉어킹', note: '갸라도스 진화용. 이미 갸라도스가 있다면 불필요.' },
  { island: '3의 섬', location: '딸기숲', pokemonId: 54, pokemon: '꼬마귀', note: '물·에스퍼 타입. 야도란 대체 가능. 에스퍼 타입 보강 용도.' },
  { island: '3의 섬', location: '딸기숲', pokemonId: 47, pokemon: '도나리', note: '벌레·풀 타입. 배가스로 진화. 포획률이 낮아 주의 필요.' },
  { island: '4의 섬', location: '얼음 동굴', pokemonId: 124, pokemon: '루주라', note: '얼음·에스퍼 타입. 냉동빔과 에스퍼 기술 모두 운용 가능.' },
  { island: '4의 섬', location: '얼음 동굴', pokemonId: 220, pokemon: '꼬지모', note: '얼음·땅 타입. 뚜꾸리로 진화. 내구형 얼음 타입으로 활용 가능.' },
  { island: '5의 섬', location: '풀숲', pokemonId: 52, pokemon: '나옹', note: '노말 타입. 페르시온으로 진화. 노름꾼 특성으로 아이템 수집에 활용 가능.' },
  { island: '5의 섬', location: '풀숲', pokemonId: 163, pokemon: '부우부', note: '노말 타입. 야부링으로 진화. 고속이동 활용도 있음.' },
  { island: '6의 섬', location: '점박이 구멍·낚시', pokemonId: 138, pokemon: '암나이트', note: '바위·물 타입 화석 포켓몬. 암스타로 진화.' },
  { island: '6의 섬', location: '점박이 구멍·낚시', pokemonId: 140, pokemon: '투구', note: '바위·물 타입 화석 포켓몬. 투구푸스로 진화.' },
  { island: '7의 섬', location: '탄보비 유적', pokemonId: 201, pokemon: '미지(알파벳)', note: '에스퍼 타입. 탄보비 열쇠로 봉인 해제 후 각 방에서 형태별 포획.' },
  { island: '7의 섬', location: '서비마을 낚시', pokemonId: 147, pokemon: '미뇽', note: '드래곤 타입. 망나뇽까지 진화. 레벨업이 느린 것이 단점.' },
]

export interface IslandItemRow {
  island: string
  location: string
  item: string
  note: string
}

export const SEVII_ITEM_TABLE: IslandItemRow[] = [
  { island: '1의 섬', location: '화산 내부', item: '루비석', note: '셀리오에게 전달 → 레인보우패스 획득. 퀘스트 핵심 아이템.' },
  { island: '2의 섬', location: '포켓몬 교환 매니아', item: 'TM27 회귀', note: '할아버지 이벤트 완료 후 보상. 관동 포켓몬과 교환 가능.' },
  { island: '3의 섬', location: '딸기숲 클리어 보상', item: '대단한낚싯대', note: '루리를 구한 후 마을에서 노인 NPC에게 입수. 강한 낚시 포켓몬 포획 가능.' },
  { island: '4의 섬', location: '얼음 동굴', item: 'HM07 폭포오르기', note: '얼음 동굴 내부에서 입수. 이후 폭포를 오르는 탐험이 가능해진다.' },
  { island: '5의 섬', location: '로켓단 창고', item: '사파이어석', note: '창고 최심부에서 회수. 셀리오에게 전달하면 전국도감이 해제된다.' },
  { island: '6의 섬', location: '점박이 구멍', item: '사파이어석(발견 후 탈취)', note: '수수께끼 해결 후 발견되지만 팀 로켓이 즉시 가져간다.' },
  { island: '7의 섬', location: '탄보비섬', item: '탄보비 열쇠', note: '탄보비섬에서 암흑의 박스 7개를 밀어 열쇠 모양을 만들면 탄보비 유적이 열린다.' },
]

export interface RocketWarehouseRow {
  task: string
  detail: string
}

export const SEVII_ROCKET_WAREHOUSE: RocketWarehouseRow[] = [
  { task: '사전 준비', detail: '6의 섬 점박이 구멍을 먼저 클리어해 팀 로켓에게 사파이어석을 탈취당한다.' },
  { task: '비밀번호 1 획득', detail: '점박이 구멍 입구 쪽 NPC와 대화해 첫 번째 비밀번호를 얻는다.' },
  { task: '비밀번호 2 획득', detail: '탄보비섬 구역 NPC와 대화해 두 번째 비밀번호를 얻는다.' },
  { task: '창고 진입', detail: '5의 섬 로켓단 창고 입구의 비밀번호 두 개를 모두 입력해 잠금 해제.' },
  { task: '간부 격파', detail: '창고 내부 팀 로켓 간부를 모두 격파. 마지막 간부에게서 사파이어석을 되찾는다.' },
]

export interface BossRow {
  opponent: string
  answer: string
}

export const SEVII_BOSS_ROCKET_ADMINS: { title: string; rows: BossRow[]; notes: string[] }[] = [
  {
    title: '화산 팀 로켓 간부 (1의 섬)',
    rows: [
      { opponent: '가스불꽃(마그마그 계열)', answer: '물 타입 기술 / 라프라스 파도타기 / 거북왕 파도타기' },
      { opponent: '니다퀸/니드킹', answer: '나시 사이코키네시스 / 라프라스 파도타기' },
    ],
    notes: [
      '화산 내부는 불꽃 타입이 많아 라프라스나 물 타입 포켓몬을 앞세우면 편하다.',
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
  '4의 섬 얼음 동굴에서 팀 로켓에게 지인이 붙잡힌 사천왕 칸나를 돕는 이벤트가 발생한다.',
  '칸나 합류 후 동굴 안의 팀 로켓을 함께 처리하는 방식으로 진행된다.',
  '이 이벤트 후 폭포오르기(HM07)를 쓸 수 있게 되어 동굴 위층 탐험이 가능해진다.',
]

export const SEVII_UNOWN_NOTE = [
  '7의 섬 탄보비섬에서 암흑의 박스 7개를 밀어 열쇠 모양을 완성하면 탄보비 유적이 열린다.',
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
  ['꼬마귀', 54],
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
  ['꼬지모', 220],
  ['뚜꾸리', 221],
  ['미뇽', 147],
  ['망나뇽', 149],
  ['미지', 201],
  ['암나이트', 138],
  ['암스타', 139],
  ['투구', 140],
  ['투구푸스', 141],
  ['니드런♂', 32],
  ['니드킹', 34],
  ['잠만보', 143],
  ['쥬피썬더', 135],
  ['라프라스', 131],
  ['도나리', 47],
  ['배가스', 48],
]

export const SEVII_NAME_TO_ID = new Map<string, number>(
  [...SEVII_NAME_TO_ID_ENTRIES].sort((a, b) => b[0].length - a[0].length),
)
