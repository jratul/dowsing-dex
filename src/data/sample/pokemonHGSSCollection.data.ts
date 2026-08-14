// 하트골드·소울실버 전국도감 수집 공략 데이터
// 포켓몬 이름/ID: pokedex.generated.ts nameKo 기준으로 검증

export interface HGSSNpcTrade {
  stageLabel: string
  location: string
  give: { nameKo: string; id?: number; note?: string }
  receive: { nameKo: string; id: number; heldItem?: string; special?: string }
  condition?: string
  note?: string
  highlight?: boolean
}

export interface HGSSCatch {
  id: number
  nameKo: string
  location: string
  method: string
  level: string
  version?: 'HG' | 'SS'
  special?: string
  note?: string
}

export interface HGSSStage {
  id: string
  phase: string
  title: string
  description: string
  trades: HGSSNpcTrade[]
  catches: HGSSCatch[]
}

export const HGSS_STAGES: HGSSStage[] = [
  {
    id: 'johto-1',
    phase: '성도',
    title: '연두마을 출발 → 도라지시티 (1관 전)',
    description: '피카츄를 10번도로에서, 기본 포켓몬을 29번도로·상록숲에서 확보한다. 도라지시티 도착 즉시 이수재에게 토게피 알을 받는다.',
    trades: [
      {
        stageLabel: '성도 1관 전',
        location: '도라지시티 포켓몬센터 근처 집',
        give: { nameKo: '모다피', id: 69 },
        receive: { nameKo: '롱스톤', id: 95 },
        note: '모다피는 29번도로·30번도로 풀숲에서 쉽게 포획 가능. 롱스톤을 도감 등록에 매우 일찍 확보.',
        highlight: true,
      },
    ],
    catches: [
      { id: 35, nameKo: '삐삐', location: '29번도로', method: '풀숲', level: 'Lv.4~6', note: '달의돌 5% 지님' },
      { id: 143, nameKo: '잠만보', location: '29번도로', method: '풀숲', level: 'Lv.4~6', special: '아침(06~10시)' },
      { id: 311, nameKo: '플러시', location: '29번도로', method: '풀숲', level: 'Lv.3', special: '호연사운드' },
      { id: 312, nameKo: '마이농', location: '29번도로', method: '풀숲', level: 'Lv.3', special: '호연사운드' },
      { id: 175, nameKo: '토게피', location: '도라지시티', method: '알 선물', level: 'Lv.1', note: '이수재에게 받는 알. 도착 직후 교류해야 잊지 않음.' },
      { id: 285, nameKo: '버섯꼬', location: '상록숲', method: '박치기', level: 'Lv.3~7' },
      { id: 273, nameKo: '도토링', location: '상록숲', method: '박치기', level: 'Lv.3~7' },
    ],
  },
  {
    id: 'johto-2',
    phase: '성도',
    title: '도라지시티 → 고동마을 (1관 ~ 2관)',
    description: '30번도로·너도밤나무숲에서 호연·신오사운드 전용 포켓몬을 확보한다. 고동마을에서 박치기로 에이팜을 잡는 것을 놓치지 말 것.',
    trades: [],
    catches: [
      { id: 293, nameKo: '소곤룡', location: '30번도로', method: '풀숲', level: 'Lv.2~3', special: '호연사운드' },
      { id: 264, nameKo: '직구리', location: '30번도로', method: '풀숲', level: 'Lv.4', special: '호연사운드' },
      { id: 325, nameKo: '피그점프', location: '너도밤나무숲', method: '풀숲', level: 'Lv.5~6', special: '호연사운드' },
      { id: 455, nameKo: '무스틈니', location: '너도밤나무숲', method: '풀숲', level: 'Lv.6', special: '신오사운드' },
      { id: 190, nameKo: '에이팜', location: '고동마을', method: '박치기', level: 'Lv.3~8', note: '박치기 필요. 나무를 흔들어 포획. 겟핸보숭(#424) 진화 전 단계.' },
      { id: 261, nameKo: '포챠나', location: '1번도로', method: '풀숲', level: 'Lv.2', special: '대량발생' },
      { id: 79, nameKo: '야돈', location: '야돈우물', method: '풀숲/파도타기', level: 'Lv.5~10', note: 'HG에서는 로켓단을 몰아낸 뒤 진입 가능.' },
      { id: 193, nameKo: '왕자리', location: '35번도로', method: '풀숲', level: 'Lv.12', note: '메가자리(#469) 진화 전 단계.' },
    ],
  },
  {
    id: 'johto-3',
    phase: '성도',
    title: '고동마을 → 금빛시티 (2관 ~ 3관)',
    description: '모다피의탑·자연공원에서 특수 조건 포켓몬을 확보. 금빛시티 백화점 5층 NPC 교환은 초반 스탯 상승 아이템을 얻는 귀중한 기회.',
    trades: [
      {
        stageLabel: '성도 3관 전후',
        location: '금빛시티 백화점 5층',
        give: { nameKo: '슬리프', id: 96 },
        receive: { nameKo: '알통몬', id: 66, heldItem: '교정깁스', special: '교정깁스(마초브레이스) 지님' },
        note: '슬리프는 33번도로·38번도로 풀숲에서 포획. 알통몬은 도감 등록 + 교정깁스 획득이 목적.',
      },
    ],
    catches: [
      { id: 263, nameKo: '지그재구', location: '모다피의탑', method: '풀숲', level: 'Lv.3~4', special: '호연사운드' },
      { id: 327, nameKo: '얼루기', location: '모다피의탑', method: '풀숲', level: 'Lv.5', special: '호연사운드' },
      { id: 412, nameKo: '도롱충이', location: '38번도로', method: '박치기', level: 'Lv.18~25', note: '도롱마담(#413)/나메일(#414) 진화 전 단계.' },
      { id: 420, nameKo: '체리버', location: '자연공원', method: '박치기', level: 'Lv.18~25', note: '체리꼬(#421) 진화 전 단계.' },
      { id: 396, nameKo: '찌르꼬', location: '상록숲·회색시티', method: '박치기', level: 'Lv.5~12', note: '회색시티 근처 박치기로도 포획 가능.' },
    ],
  },
  {
    id: 'johto-4',
    phase: '성도',
    title: '금빛시티 → 무궁시티 (3관 ~ 4관)',
    description: '39번도로·무궁시티에서 포켓몬을 확보. 39~40번도로는 HG/SS 모두 다양한 포켓몬이 출현한다.',
    trades: [],
    catches: [
      { id: 234, nameKo: '노라키', location: '39번도로', method: '풀숲', level: 'Lv.15' },
      { id: 276, nameKo: '테일로', location: '무궁시티', method: '박치기', level: 'Lv.18~25', note: '박치기 필요. 스왈로(#277) 진화 전 단계.' },
    ],
  },
  {
    id: 'johto-5',
    phase: '성도',
    title: '무궁시티 → 담청시티 → 진청시티 (4관 ~ 6관)',
    description: '파도타기 HM 습득 후 해상 루트 포켓몬을 확보. 담청시티 NPC 교환으로 찌리리공을 도감에 추가.',
    trades: [
      {
        stageLabel: '성도 5관 방문 시',
        location: '담청시티의 집',
        give: { nameKo: '크랩', id: 98 },
        receive: { nameKo: '찌리리공', id: 100 },
        note: '크랩은 21~23번수로 낚시로 포획. 찌리리공(Voltorb)은 야생 포획이 어려운 포켓몬이라 교환이 효율적.',
      },
    ],
    catches: [
      { id: 226, nameKo: '만타인', location: '41번수로', method: '파도타기', level: 'Lv.15~25', version: 'HG', note: '하트골드 전용. 소울실버에는 없음.' },
      { id: 278, nameKo: '갈모매', location: '갈색시티 주변 수로', method: '파도타기', level: 'Lv.35', note: '패리퍼(#279) 진화 전 단계.' },
    ],
  },
  {
    id: 'johto-6',
    phase: '성도',
    title: '담청시티 → 황토마을 (6관 ~ 7관)',
    description: '45번도로에서 HG/SS 전용 버전 포켓몬을 확보. 밀탱크, 마크탕 등도 이 구간에서 등장한다.',
    trades: [],
    catches: [
      { id: 207, nameKo: '글라이거', location: '45번도로', method: '풀숲', level: 'Lv.24', version: 'HG', note: '하트골드 전용. 글라이온(#472) 진화 전 단계.' },
      { id: 227, nameKo: '무장조', location: '45번도로', method: '풀숲', level: 'Lv.27', version: 'SS', note: '소울실버 전용.' },
      { id: 333, nameKo: '파비코', location: '45번도로', method: '풀숲', level: 'Lv.23', special: '대량발생', note: '파비코리(#334) 진화 전 단계.' },
      { id: 241, nameKo: '밀탱크', location: '47번도로', method: '풀숲', level: 'Lv.35' },
      { id: 296, nameKo: '마크탕', location: '47번도로 동굴', method: '풀숲', level: 'Lv.19~20', special: '호연사운드', note: '하리뭉(#297) 진화 전 단계.' },
    ],
  },
  {
    id: 'johto-7',
    phase: '성도',
    title: '황토마을 → 검은먹시티 → 석영고원 (7관 ~ 사천왕)',
    description: '마지막 성도 구간. 44번도로·어둠의동굴에서 희귀 포켓몬을 확보하고, 검은먹시티 NPC 교환으로 두트리오를 손에 넣는다.',
    trades: [
      {
        stageLabel: '성도 8관 후',
        location: '검은먹시티 동쪽 집',
        give: { nameKo: '암컷 신뇽', id: 148, note: '♀만 유효' },
        receive: { nameKo: '두트리오', id: 85 },
        note: '반드시 암컷 신뇽이어야 한다. 신뇽은 44번도로 풀숲 Lv.23에서 포획. 두트리오는 야생 포획보다 NPC 교환이 훨씬 쉬움.',
        highlight: true,
      },
    ],
    catches: [
      { id: 114, nameKo: '덩쿠리', location: '44번도로', method: '풀숲', level: 'Lv.23', note: '덩쿠림보(#465) 진화 전 단계.' },
      { id: 202, nameKo: '마자용', location: '어둠의동굴', method: '풀숲', level: 'Lv.20~25', version: 'HG', note: '마자(#360) 교배 가능 — 마자용에게 무사태평향로를 지니게 하고 교배 시 마자 알 부화.' },
      { id: 117, nameKo: '시드라', location: '소용돌이섬 지하 2층', method: '파도타기', level: 'Lv.15~30', note: '킹드라(#230) 진화 전 단계. 킹드라는 용의비늘 지닌 채 통신교환 필요.' },
    ],
  },
  {
    id: 'kanto-1',
    phase: '관동',
    title: '관동 진입 (사천왕 클리어 후)',
    description: '성도 사천왕을 클리어하면 관동 지방에 진입한다. 블루시티·회색시티·10번도로에서 NPC 교환 2종을 놓치지 말 것.',
    trades: [
      {
        stageLabel: '관동 진입 직후',
        location: '회색시티 포켓몬센터',
        give: { nameKo: '고우스트', id: 93 },
        receive: { nameKo: '네이티오', id: 178 },
        note: '고우스트는 성도 무궁시티(유령탑)에서 포획. 네이티오는 네이티(#177) 진화 전 단계 생략 가능.',
      },
      {
        stageLabel: '관동 진입 직후',
        location: '10번도로 발전소',
        give: { nameKo: '닥트리오', id: 51 },
        receive: { nameKo: '레어코일', id: 82, heldItem: '금속코트', special: '금속코트 지님' },
        note: '닥트리오는 디그다의굴 Lv.19~24에서 포획. 레어코일이 금속코트를 지니므로 그대로 쥐면 강철 타입 교환 아이템도 함께 확보. 레어코일 → 자포코일은 신오 자기장(PT 천관산) 필요.',
        highlight: true,
      },
    ],
    catches: [
      { id: 43, nameKo: '뚜벅쵸', location: '회색시티', method: '박치기', level: 'Lv.5~10', note: '이수재의 할아버지에게 보여주면 리프의돌 1개 획득.' },
      { id: 265, nameKo: '개무소', location: '회색시티', method: '박치기', level: 'Lv.3~9', note: '실쿤/카스쿤/뷰티플라이/독케일 진화 전 단계.' },
      { id: 120, nameKo: '별가사리', location: '블루시티 앞 수로', method: '파도타기', level: 'Lv.15~30', note: '이수재의 할아버지에게 보여주면 물의돌 1개 획득.' },
      { id: 35, nameKo: '삐삐', location: '달맞이산', method: '풀숲', level: 'Lv.10~15', note: '5% 확률로 달의돌 지님. 월요일 밤 달의돌 이벤트 장소.' },
      { id: 113, nameKo: '럭키', location: '13번도로', method: '풀숲', level: 'Lv.23~25', note: '해피너스(#242) 진화 전 단계. 달걀 2개 동시 지님.' },
      { id: 125, nameKo: '에레브', location: '10번도로', method: '풀숲', level: 'Lv.15~18', note: '에레키블(#466) 진화 전 단계. 에레키테이저 지닌 채 통신교환 필요.' },
    ],
  },
  {
    id: 'kanto-2',
    phase: '관동',
    title: '관동 중부 — 관장 재대결',
    description: '관동 8관장을 재대결로 격파하며 탐색한다. 웅(1관) 격파 후 토요일에 디그다의굴 교환, 규리(5관) 재대결 후 담청체육관 교환이 해금된다.',
    trades: [
      {
        stageLabel: '관동 3관(마티스) 재대결 후',
        location: '노랑시티 리니어 기차역',
        give: { nameKo: '피카츄', id: 25 },
        receive: { nameKo: '피카츄', id: 25, special: '외국어 피카츄 — 경험치 1.5배 보너스' },
        condition: '마티스 재대결 후 기차역 재개통',
        note: '다른 언어 버전의 피카츄를 받는 특수 교환. 교환으로 얻은 외국어 포켓몬은 경험치 1.5배 보너스 적용.',
      },
      {
        stageLabel: '관동 1관(웅) 격파 후 토요일',
        location: '디그다의굴 입구',
        give: { nameKo: '꼬지지', id: 438 },
        receive: { nameKo: '뿔카노', id: 111, special: '번개엄니를 알고 있음' },
        condition: '웅 격파 후 토요일 17:00~20:00에 웅의 연락처 확보 필요',
        note: '꼬지지(#438)는 기라티나PT에서 포획하거나, 꼬지모(#185)에게 암석향로를 지닌 채 교배해 알 부화. 토요일 특정 시간대에만 가능.',
        highlight: true,
      },
      {
        stageLabel: '관동 5관(규리) 재대결 후',
        location: '담청체육관',
        give: { nameKo: '아무 포켓몬 1마리', note: '무엇이든 가능' },
        receive: { nameKo: '강철톤', id: 208 },
        condition: '규리(담청시티 체육관장) 재대결 클리어 후',
        note: '통신교환 없이 강철톤을 확보할 수 있는 유일한 방법. 롱스톤 + 금속코트 통신교환 과정 전부 생략 가능.',
        highlight: true,
      },
    ],
    catches: [
      { id: 137, nameKo: '폴리곤', location: '무지개시티 게임코너', method: '경품 교환', level: 'Lv.15', note: '폴리곤2(#233)/폴리곤Z(#474) 진화 전 단계. 경품 교환소에서 코인으로 구매.' },
      { id: 228, nameKo: '델빌', location: '7번도로', method: '풀숲', level: 'Lv.15', special: '밤', note: '밤(20~04시) 한정. 헬가(#229) 진화 전 단계.' },
      { id: 302, nameKo: '깜까미', location: '9번도로', method: '풀숲', level: 'Lv.13~15', version: 'HG', special: '대량발생', note: '하트골드 전용 대량발생.' },
      { id: 303, nameKo: '입치트', location: '9번도로', method: '풀숲', level: 'Lv.13~15', version: 'SS', special: '대량발생', note: '소울실버 전용 대량발생.' },
      { id: 343, nameKo: '오뚝군', location: '3번도로', method: '풀숲', level: 'Lv.5', version: 'HG', special: '대량발생', note: '하트골드 전용.' },
      { id: 316, nameKo: '꼴깍몬', location: '3번도로', method: '풀숲', level: 'Lv.5', version: 'SS', special: '대량발생', note: '소울실버 전용.' },
      { id: 287, nameKo: '게을로', location: '25번도로', method: '박치기', level: 'Lv.10~18', note: '발바로(#288)/게을킹(#289) 진화 전 단계.' },
      { id: 415, nameKo: '세꿀버리', location: '25번도로', method: '박치기', level: 'Lv.10~14', note: '비퀸(#416) 진화 전 단계.' },
      { id: 427, nameKo: '이어롤', location: '25번도로', method: '풀숲', level: 'Lv.8~10', special: '대량발생', note: '이어롭(#428) 진화 전 단계.' },
    ],
  },
  {
    id: 'kanto-3',
    phase: '관동 (레드 격파 후)',
    title: '레드 격파 후 — 전설·보너스 포켓몬',
    description: '은빛산 정상의 레드를 격파하면 호연 스타팅 3종 선물 + 메탕 NPC 교환이 해금된다. 매몰탑에서 전설 포켓몬도 포획 가능.',
    trades: [
      {
        stageLabel: '레드 격파 후',
        location: '노랑시티 실프주식회사 1층 (성호)',
        give: { nameKo: '쏘콘', id: 205, note: '쏘콘(Forretress) 아무 레벨 가능' },
        receive: { nameKo: '메탕', id: 374, heldItem: '각성의돌', special: '각성의돌 지님' },
        condition: '호연 스타팅 수령 + 회색시티 박물관에서 성호와 대화 후',
        note: '메탕 → 메탕구 → 메타그로스로 진화. 각성의돌도 함께 획득.',
        highlight: true,
      },
    ],
    catches: [
      { id: 252, nameKo: '나무지기', location: '노랑시티 실프주식회사', method: '선물', level: 'Lv.5', note: '호연 스타팅 3종 중 1마리 선택. 3종 전부 필요 시 리셋 또는 교환.' },
      { id: 255, nameKo: '아차모', location: '노랑시티 실프주식회사', method: '선물', level: 'Lv.5' },
      { id: 258, nameKo: '물짱이', location: '노랑시티 실프주식회사', method: '선물', level: 'Lv.5' },
      { id: 380, nameKo: '라티아스', location: '성도지방 전역', method: '배회', level: 'Lv.35', version: 'HG', note: '하트골드 전용 배회 포켓몬. 레드 격파 후 성도에 출현.' },
      { id: 381, nameKo: '라티오스', location: '성도지방 전역', method: '배회', level: 'Lv.35', version: 'SS', note: '소울실버 전용 배회 포켓몬. 레드 격파 후 성도에 출현.' },
      { id: 382, nameKo: '가이오가', location: '매몰탑', method: '고정 조우', level: 'Lv.50', version: 'HG', note: '하트골드에서 레드 격파 후 매몰탑에서 포획 가능.' },
      { id: 383, nameKo: '그란돈', location: '매몰탑', method: '고정 조우', level: 'Lv.50', version: 'SS', note: '소울실버에서 레드 격파 후 매몰탑에서 포획 가능.' },
      { id: 384, nameKo: '레쿠쟈', location: '매몰탑', method: '고정 조우', level: 'Lv.50', note: 'HG의 가이오가 + SS의 그란돈을 오박사에게 보여준 뒤 매몰탑 최상층에서 출현.' },
    ],
  },
]

// NPC 교환 전체 목록 (스토리 순서)
export const HGSS_ALL_TRADES: HGSSNpcTrade[] = HGSS_STAGES.flatMap((s) => s.trades)

// 사파리존 안내 (별도 섹션)
export const SAFARI_ZONE_NOTE = `
사파리존(담청시티)은 관동 진입 후 이용 가능하다. 블록을 특정 방식으로 배치해야 3세대·4세대 포켓몬이
출현하며, 배치 후 일정 일수가 지나야 출현한다. 50종 이상의 포켓몬이 사파리존에서만 입수 가능하므로
전국도감 완성을 목표로 한다면 반드시 공략해야 한다.
`.trim()
