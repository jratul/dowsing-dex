// 포켓몬 하트골드버전(4세대 HGSS 리메이크) 스토리 엔트리 공략 데이터.
// 스타팅: 브케인 → 마그케인 → 블레이범

export const HG_STORY_FINAL_PARTY_IDS = [157, 181, 130, 214, 131, 468]

export interface RoleRow {
  pokemon: string
  role: string
}

export const HG_STORY_FINAL_ROLES: RoleRow[] = [
  { pokemon: '블레이범', role: '불꽃 메인 딜러. 화염방사·솔라빔·지진·번개펀치. 벌레·풀·얼음 전담' },
  { pokemon: '전룡', role: '전기 딜러. 10만볼트·전기자석파·빛의장막. 물·비행 타입 전담' },
  { pokemon: '갸라도스', role: 'HM 담당 (파도타기·폭포오르기·괴력). 물리 딜러. 바위 타입 견제' },
  { pokemon: '헤라크로스', role: 'HG 전용 격투/벌레. 메가폰·닫기·사이코커터. 레드 잠만보·에스피온 처리' },
  { pokemon: '라프라스', role: '물/얼음 딜러. 연결동굴 무상 획득. 목호 드래곤·레드 리자몽 처리' },
  { pokemon: '토게키스', role: '노말/비행(4세대). 에어슬래시·오라스피어·빛나는돌 진화. 격투·악 타입 대응' },
]

export const HG_STORY_GOALS = [
  '브케인 스타팅 선택 → 성도 8개 체육관 클리어',
  '사천왕·챔피언 목호 격파',
  '관동 8개 체육관 클리어',
  '마운트실버 레드전 격파',
  '4세대 물리/특수 분리 기반 기술 배분 최적화',
]

export interface CatchRow {
  timing: string
  pokemonId: number
  pokemon: string
  note: string
}

export const HG_STORY_CATCH_TABLE: CatchRow[] = [
  { timing: '게임 시작', pokemonId: 155, pokemon: '브케인', note: '스타팅 선택. 최종 블레이범' },
  { timing: '도라지시티 전후', pokemonId: 179, pokemon: '메리프', note: '최종 전룡. 빠르게 육성 시작' },
  { timing: '도라지시티~담청마을 나무', pokemonId: 214, pokemon: '헤라크로스', note: 'HG 전용. 박치기 나무에서 포획. HM01 배정 후 나무에 사용' },
  { timing: '분노의 호수', pokemonId: 130, pokemon: '붉은 갸라도스', note: '스토리 이벤트 포획. HM 담당' },
  { timing: '연결동굴 (4번 체육관 이후)', pokemonId: 131, pokemon: '라프라스', note: '매주 금요일 무상 획득. 물/얼음 딜러' },
  { timing: '박사에게 받은 토게피 부화', pokemonId: 175, pokemon: '토게피', note: '엘름 박사 조수에게서 달걀 수령. 친밀도로 토게틱 진화 후 빛나는돌로 토게키스' },
]

export interface MoveSetSection {
  pokemonId: number
  pokemon: string
  finalMoves: string[]
  moveTable: { move: string; how: string; usage: string }[]
  notes: string[]
}

export const HG_STORY_MOVESETS: MoveSetSection[] = [
  {
    pokemonId: 157,
    pokemon: '블레이범',
    finalMoves: ['화염방사', '솔라빔 / 번개펀치', '지진', '불꽃파동 / 스피드스타'],
    moveTable: [
      { move: '화염방사', how: 'Lv.습득', usage: '주력 불꽃 특수기. 4세대에서도 여전히 안정적' },
      { move: '솔라빔', how: 'TM22', usage: '물·바위 타입 처리. 맑은날씨 TM 연계 가능' },
      { move: '번개펀치', how: '기술가르침', usage: '물·비행 타입 물리 견제기' },
      { move: '지진', how: 'TM26', usage: '레드 피카츄 처리. 독·바위·전기 타입 견제' },
      { move: '불꽃파동', how: 'Lv.습득', usage: '화염방사 전까지 주력 불꽃기' },
    ],
    notes: [
      '4세대에서 블레이범은 격투 타입(2세대 비공식)이 아닌 순수 불꽃 타입이다.',
      '지진은 챔피언로드 또는 사파리존 인근에서 획득. 블레이범에게 반드시 배정한다.',
      '솔라빔은 TM22로 획득. 맑은날씨(바위 아이템)와 조합하면 강력하지만 선택사항.',
    ],
  },
  {
    pokemonId: 181,
    pokemon: '전룡',
    finalMoves: ['10만볼트', '전기자석파', '빛의장막', '파동탄 / 번개펀치'],
    moveTable: [
      { move: '10만볼트', how: 'TM24', usage: '주력 전기 특수기. 화력과 명중률이 균형 잡힘' },
      { move: '전기자석파', how: 'TM', usage: '마비 유틸. 보스전 안정화' },
      { move: '빛의장막', how: 'TM04', usage: '파티 특수 방어 지원. 레드전 안정성 증가' },
      { move: '파동탄', how: 'Lv.습득', usage: '노말 타입 특수기. 4세대 출력 안정' },
      { move: '번개펀치', how: '기술가르침', usage: '물리 전기기. 특수방어가 높은 상대 대응' },
    ],
    notes: [
      '전룡은 성도에서 메리프를 빠르게 육성해야 한다. 느리지만 내구가 좋아 스토리에 잘 맞는다.',
      '10만볼트 TM을 노랑시티 게임코너 또는 시나리오 보상으로 확보한다.',
      '레드전 거북왕(물)·리자몽(물기 약점?) 처리는 라프라스와 분담한다.',
    ],
  },
  {
    pokemonId: 130,
    pokemon: '갸라도스',
    finalMoves: ['파도타기', '폭포오르기', '괴력', '아이언테일 / 얼다바람'],
    moveTable: [
      { move: '파도타기', how: 'HM03', usage: 'HM03. 주력 물 특수기 겸 이동' },
      { move: '폭포오르기', how: 'HM07', usage: 'HM07. 후반 진행 필수' },
      { move: '괴력', how: 'HM04', usage: 'HM04. 이동 및 물리 공격' },
      { move: '바다회오리', how: 'HM06', usage: '소용돌이섬 진행용 임시 비전. 이후 삭제' },
      { move: '아이언테일', how: 'TM23', usage: '바위·얼음 타입 물리 견제' },
      { move: '얼다바람', how: 'TM16', usage: '목호 드래곤 보조 견제. 류옹 격파 보상' },
    ],
    notes: [
      '갸라도스는 파도타기·폭포오르기·괴력을 배워 HM 담당으로 최적이다.',
      '바다회오리는 소용돌이섬 진행 후 삭제한다.',
      '4세대에서 갸라도스는 물/비행 타입이며 전기에 취약. 전기 타입 상대는 블레이범이 담당한다.',
    ],
  },
  {
    pokemonId: 214,
    pokemon: '헤라크로스',
    finalMoves: ['메가폰', '닫기 / 클로즈컴뱃', '사이코커터', '공중날기 / 독찌르기'],
    moveTable: [
      { move: '메가폰', how: 'Lv.습득', usage: '노말 물리기. 친밀도 높을수록 강력. HG에서 유용' },
      { move: '닫기 / 클로즈컴뱃', how: 'Lv.습득', usage: '격투 물리기. 방어/특방이 낮아지지만 매우 강력' },
      { move: '사이코커터', how: '기술가르침', usage: '독 타입 견제. 에스퍼 물리기' },
      { move: '독찌르기', how: 'TM', usage: '독 물리기. 독 상태이상 효과' },
    ],
    notes: [
      '헤라크로스는 HG 전용 박치기 나무 포획 포켓몬. SS에서는 쁘사이저가 나온다.',
      '박치기(HM01)를 배운 포켓몬으로 특정 나무를 흔들면 헤라크로스가 나타난다. 황금빛시티 인근 나무에서 높은 확률로 등장.',
      '헤라크로스의 높은 물리 공격력으로 레드전 잠만보·에스피온을 처리한다.',
    ],
  },
  {
    pokemonId: 131,
    pokemon: '라프라스',
    finalMoves: ['파도타기 / 냉동빔', '얼음기둥', '번개', '노래 / 이상한빛'],
    moveTable: [
      { move: '냉동빔', how: 'Lv.습득', usage: '주력 얼음 특수기. 드래곤·풀 타입 처리' },
      { move: '얼음기둥', how: 'TM79', usage: '냉동빔보다 강력한 얼음 특수기. TM 획득 권장' },
      { move: '번개', how: 'TM25', usage: '물 타입에게 효과적인 전기기. 명중 불안정' },
      { move: '파도타기', how: 'HM03', usage: '보조 물 기술. 갸라도스에 파도타기가 있으면 선택' },
      { move: '노래', how: 'Lv.습득', usage: '수면 보조 유틸. 포획 및 보스전 안정화' },
    ],
    notes: [
      '라프라스는 연결동굴에서 매주 금요일에 한 마리 무상 획득 가능.',
      '목호의 드래곤 파티(망나뇽·킹드라 등)에 얼음기둥이 특히 효과적이다.',
      '레드전 리자몽은 갸라도스 파도타기 또는 라프라스 냉동빔으로 처리한다.',
    ],
  },
  {
    pokemonId: 468,
    pokemon: '토게키스',
    finalMoves: ['에어슬래시', '오라스피어', '파도타기', '빛의장막 / 소원빌기'],
    moveTable: [
      { move: '에어슬래시', how: 'Lv.습득', usage: '비행 특수기. 30% 풀죽음 효과. 4세대에서 강력' },
      { move: '오라스피어', how: 'Lv.습득', usage: '격투 특수기. 빗나가지 않는 기술. 악·바위 타입 처리' },
      { move: '파도타기', how: 'HM03', usage: '물 특수기 보조. 갸라도스와 분담 가능' },
      { move: '빛의장막', how: 'TM04', usage: '파티 지원. 전룡과 분담 가능' },
      { move: '소원빌기', how: 'Lv.습득', usage: 'HP 회복 유틸. 파티 안정성 증가' },
    ],
    notes: [
      '토게피 → 토게틱(친밀도) → 토게키스(빛나는돌). 빛나는돌은 4세대에 추가된 진화 아이템.',
      '토게키스는 오라스피어를 레벨업으로 배우며, 에어슬래시는 레벨업 또는 기술 가르침으로 습득.',
      '2세대 원본 골드/실버와 달리 하트골드에서는 토게틱의 최종 진화형으로 매우 강력해졌다.',
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

export const HG_STORY_HM_TABLE: HmRow[] = [
  { hm: 'HM01', move: '풀베기', pokemon: '헤라크로스 (포획 전) / 임시', location: '너도밤나무숲', badge: '고동체육관 배지', note: '헤라크로스 포획 목적으로도 사용. 이후 삭제' },
  { hm: 'HM02', move: '공중날기', pokemon: '갸라도스 / 토게키스', location: '진청시티 NPC', badge: '진청체육관 배지', note: '이동 편의성 핵심. 갸라도스 또는 토게키스에 배정' },
  { hm: 'HM03', move: '파도타기', pokemon: '갸라도스', location: '인주시티 무용극장 이벤트 보상', badge: '인주체육관 배지', note: '갸라도스 주력 물 기술 겸 이동' },
  { hm: 'HM04', move: '괴력', pokemon: '갸라도스', location: '담청시티 식당 NPC', badge: '금빛체육관 배지', note: '이동 및 전투 겸용' },
  { hm: 'HM05', move: '플래시', pokemon: '전룡 / 임시', location: '모다피탑 장로 격파 보상', badge: '도라지체육관 배지', note: '필수 진행 구간 최소화. 임시 포켓몬에 배정 가능' },
  { hm: 'HM06', move: '바다회오리', pokemon: '갸라도스 임시', location: '로켓단 아지트 클리어 후 목호에게 획득', badge: '황토체육관 배지', note: '소용돌이섬 진행용. 이후 삭제' },
  { hm: 'HM07', move: '폭포오르기', pokemon: '갸라도스', location: '얼음샛길 내부', badge: '검은먹체육관 배지', note: '후반 진행 필수' },
  { hm: 'HM08', move: '바위깨기', pokemon: '헤라크로스 / 갸라도스', location: '관동 특정 NPC', badge: '관동 진행 중 획득', note: '관동 진행 시 필요. 헤라크로스에 배정 가능' },
]

export interface TmRow {
  tm: string
  move: string
  target: string
  location: string
  priority: string
  desc: string
}

export const HG_STORY_TM_PRIORITY: TmRow[] = [
  { tm: 'TM26', move: '지진', target: '블레이범', location: '챔피언로드 / 기부 습득', priority: '매우 높음', desc: '레드 피카츄·전기 타입 처리 핵심. 블레이범에게 반드시 배정' },
  { tm: 'TM24', move: '10만볼트', target: '전룡', location: '노랑시티 게임코너 / 이벤트 보상', priority: '매우 높음', desc: '전룡 주력 전기기. 명중 안정' },
  { tm: 'TM79', move: '얼음기둥', target: '라프라스', location: '4세대 추가 TM 상점', priority: '높음', desc: '목호·레드전 드래곤 처리 핵심 얼음기' },
  { tm: 'TM73', move: '파동탄', target: '전룡 / 토게키스', location: 'HGSS 기술 가르침 또는 TM', priority: '중간', desc: '노말 특수기. 범용성 높음' },
  { tm: 'TM45', move: '끌어당기기', target: '자유', location: '일부 NPC 증정', priority: '선택', desc: '물리 공격을 분산시키는 유틸기' },
]

export const HG_STORY_TM_OPTIONAL: TmRow[] = [
  { tm: 'TM15', move: '하이퍼빔', target: '갸라도스 / 헤라크로스', location: '관동 진행 시 상점', priority: '선택', desc: '1회 강공. 다음 턴 쉼이 있으므로 보스전 마무리용' },
  { tm: 'TM22', move: '솔라빔', target: '블레이범', location: '특정 NPC', priority: '선택', desc: '맑은날씨와 연계 시 강력. 아이템 확보 필요' },
  { tm: 'TM04', move: '빛의장막', target: '전룡 / 토게키스', location: '황금빛시티 백화점', priority: '선택', desc: '파티 방어 지원. 레드전 안정성 증가' },
]

export const HG_STORY_TM_NOTES = [
  '지진(TM26)은 블레이범에게 반드시 배정한다. 레드 피카츄를 가장 안정적으로 처리할 수 있다.',
  '10만볼트(TM24)는 노랑시티 게임코너에서 구매 또는 시나리오 보상으로 획득한다.',
  '4세대에서는 기술 가르침 NPC가 추가되어 TM 외에도 기술 습득 경로가 늘어났다.',
  '빛나는돌은 토게틱의 진화 아이템. 국립공원 포충대회 1위 상품 또는 특정 장소에서 획득 가능.',
]

export interface PartyStage {
  title: string
  members: string[]
  goals: string[]
}

export const HG_STORY_STAGES: PartyStage[] = [
  {
    title: '초반: 신비마을 ~ 금빛시티',
    members: ['브케인 / 마그케인', '메리프 / 보송송', '헤라크로스 (포획)', '주뱃 (크로뱃 대신)', '자유 슬롯'],
    goals: [
      '헤라크로스를 담청마을~황금빛 경로 나무에서 빠르게 포획한다.',
      '메리프를 꾸준히 육성해 전기 타입 전력을 확보한다.',
      '토게피 달걀을 부화시켜 친밀도 올리기 시작한다.',
    ],
  },
  {
    title: '중반: 인주시티 ~ 목호 격파',
    members: ['마그케인 / 블레이범', '전룡', '헤라크로스', '붉은 갸라도스', '라프라스 (연결동굴 획득)', '토게피 / 토게틱'],
    goals: [
      '연결동굴에서 라프라스를 금요일에 획득한다.',
      '분노의 호수에서 붉은 갸라도스를 포획, HM 담당으로 육성한다.',
      '목호전 대비로 라프라스에게 얼음 기술을 배정한다.',
      '빛나는돌을 구해 토게틱 → 토게키스로 진화시킨다.',
    ],
  },
  {
    title: '후반: 관동 진행 ~ 레드전',
    members: ['블레이범', '전룡', '갸라도스', '헤라크로스', '라프라스', '토게키스'],
    goals: [
      '관동 8개 체육관 순서대로 격파한다. 레벨 차이가 있으면 야생 전투로 보충한다.',
      '레드전 전 마운트실버 진입 전 전원 레벨 60 이상 목표.',
      '레드의 피카츄는 블레이범 지진으로, 잠만보는 헤라크로스로 처리한다.',
    ],
  },
]

export interface BossSection {
  title: string
  note: string
  rows: { opponent: string; answer: string }[]
}

export const HG_STORY_JOHTO_GYMS: BossSection[] = [
  {
    title: '도라지체육관 (비행 타입)',
    note: '전룡의 10만볼트 또는 토게키스 오라스피어로 안정 처리.',
    rows: [
      { opponent: '갈모매·파이어보', answer: '전룡 10만볼트 / 토게키스 오라스피어' },
    ],
  },
  {
    title: '담청체육관 (벌레 타입)',
    note: '블레이범 화염방사로 대부분 처리. 쁘사이저 주의.',
    rows: [
      { opponent: '버터플·쁘사이저', answer: '블레이범 화염방사 / 라프라스 냉동빔' },
    ],
  },
  {
    title: '금빛체육관 (노말 타입) ★고비',
    note: '아냐의 밀탱크(레벨23)가 배북+몸통박치기로 매우 강하다. 헤라크로스 격투기 또는 토게키스 오라스피어 사용.',
    rows: [
      { opponent: '밀탱크 (배북+몸통박치기)', answer: '헤라크로스 닫기 / 토게키스 오라스피어' },
    ],
  },
  {
    title: '진청체육관 사도 (고스트 타입)',
    note: '블레이범 화염방사 또는 갸라도스 아이언테일/물기로 처리. 고스트에 노말·격투 무효.',
    rows: [
      { opponent: '무우마·겐가', answer: '블레이범 화염방사 / 갸라도스 아이언테일' },
    ],
  },
  {
    title: '인주체육관 유빈 (격투 타입)',
    note: '라프라스·갸라도스·토게키스 비행기로 처리. 격투는 에스퍼/비행에 약점.',
    rows: [
      { opponent: '시라소몬·맥찌리', answer: '라프라스 냉동빔 / 토게키스 에어슬래시' },
    ],
  },
  {
    title: '올리브체육관 (강철 타입)',
    note: '블레이범 화염방사로 강철 타입 한 방. 지진도 효과적.',
    rows: [
      { opponent: '강철톤', answer: '블레이범 화염방사 / 지진' },
    ],
  },
  {
    title: '황토체육관 류옹 (얼음 타입)',
    note: '블레이범 화염방사 또는 헤라크로스 격투기로 처리.',
    rows: [
      { opponent: '필로핀·킹드라·저리릴', answer: '블레이범 화염방사 / 헤라크로스' },
    ],
  },
  {
    title: '검은먹체육관 이향 (드래곤 타입)',
    note: '라프라스 얼음기둥으로 드래곤 타입 약점을 노린다. 킹드라는 드래곤/물 타입이므로 얼음기도 2배.',
    rows: [
      { opponent: '드래피어·킹드라', answer: '라프라스 얼음기둥 / 냉동빔' },
    ],
  },
]

export const HG_STORY_KANTO_GYMS: BossSection[] = [
  {
    title: '회색체육관 웅 (바위 타입)',
    note: '갸라도스 파도타기 또는 라프라스로 처리. 바위는 물에 약점.',
    rows: [
      { opponent: '롤러스·나시·이바이트', answer: '갸라도스 파도타기 / 라프라스' },
    ],
  },
  {
    title: '갈색체육관 이슬 (물 타입)',
    note: '전룡 10만볼트로 전기 약점을 노린다.',
    rows: [
      { opponent: '스타미·미끄래곤·쥬', answer: '전룡 10만볼트' },
    ],
  },
  {
    title: '진홍체육관 마티스 (전기 타입)',
    note: '블레이범 지진으로 전기 타입 일소. 땅은 전기에 면역.',
    rows: [
      { opponent: '코일·레어코일·에레키드', answer: '블레이범 지진' },
    ],
  },
  {
    title: '무지개체육관 민화 (풀 타입)',
    note: '블레이범 화염방사로 풀 타입 전담. 헤라크로스 비행기도 가능.',
    rows: [
      { opponent: '우츠보트·나팔뚜', answer: '블레이범 화염방사 / 토게키스 에어슬래시' },
    ],
  },
  {
    title: '연분홍체육관 (독 타입)',
    note: '블레이범 지진 또는 토게키스 오라스피어로 처리.',
    rows: [
      { opponent: '독침붕·아포켈', answer: '블레이범 지진 / 토게키스 오라스피어' },
    ],
  },
  {
    title: '노랑체육관 초련 (에스퍼 타입)',
    note: '헤라크로스 닫기/메가폰 또는 갸라도스 아이언테일. 에스퍼는 악/벌레에 약점.',
    rows: [
      { opponent: '후딘·야도란', answer: '헤라크로스 닫기 / 갸라도스 아이언테일' },
    ],
  },
  {
    title: '홍련섬체육관 강연 (불꽃 타입)',
    note: '갸라도스 파도타기 또는 라프라스로 처리. 불꽃은 물에 약점.',
    rows: [
      { opponent: '마그마·마그케인', answer: '갸라도스 파도타기 / 라프라스' },
    ],
  },
  {
    title: '상록체육관 블루 (혼합 타입)',
    note: '상성별로 담당을 나눈다. 파티 전원을 고르게 육성해야 한다.',
    rows: [
      { opponent: '에이르 (비행)', answer: '전룡 10만볼트 / 라프라스 얼음기둥' },
      { opponent: '샤미드 (에스퍼)', answer: '헤라크로스 닫기 / 토게키스' },
      { opponent: '악귀번 (불꽃)', answer: '갸라도스 파도타기 / 라프라스' },
      { opponent: '피존투 (비행)', answer: '전룡 10만볼트 / 라프라스 얼음기둥' },
      { opponent: '리자몽 (불꽃/비행)', answer: '라프라스 얼음기둥 / 갸라도스' },
      { opponent: '망나뇽 (드래곤)', answer: '라프라스 얼음기둥 / 냉동빔' },
    ],
  },
]

export const HG_STORY_ELITE4: BossSection[] = [
  {
    title: '사천왕 일목 (에스퍼 타입)',
    note: '헤라크로스 닫기 또는 갸라도스 아이언테일. 에스퍼는 악·벌레에 약점.',
    rows: [
      { opponent: '샤미드·후딘·야도킹 등', answer: '헤라크로스 닫기 / 갸라도스 아이언테일' },
    ],
  },
  {
    title: '사천왕 독수 (독/격투 혼합)',
    note: '갸라도스 파도타기·블레이범 지진으로 분담. 격투는 비행/에스퍼 약점.',
    rows: [
      { opponent: '독수 포켓몬 (폭음덩굴·포이즌 등)', answer: '갸라도스 / 블레이범 지진 / 토게키스' },
    ],
  },
  {
    title: '사천왕 시바 (격투 타입)',
    note: '라프라스 냉동빔 또는 토게키스 에어슬래시로 처리.',
    rows: [
      { opponent: '이상해꽃·괴력몬·카이리키', answer: '라프라스 냉동빔 / 토게키스 에어슬래시' },
    ],
  },
  {
    title: '사천왕 카렌 (악 타입)',
    note: '블레이범 화염방사·헤라크로스 격투기·토게키스 오라스피어로 처리.',
    rows: [
      { opponent: '핫삼·블래키·독수리·악비아르·블래독', answer: '블레이범 화염방사 / 토게키스 오라스피어' },
    ],
  },
]

export const HG_STORY_CHAMPION: BossSection = {
  title: '챔피언 목호 (드래곤 타입)',
  note: '목호의 드래곤 파티(망나뇽 3마리+킹드라+갸라도스)는 얼음기에 약점. 라프라스와 토게키스가 핵심.',
  rows: [
    { opponent: '갸라도스 (물/비행)', answer: '전룡 10만볼트 / 라프라스' },
    { opponent: '망나뇽 1·2 (드래곤/비행)', answer: '라프라스 얼음기둥 / 냉동빔' },
    { opponent: '킹드라 (드래곤/물)', answer: '라프라스 얼음기둥 (4배 약점)' },
    { opponent: '에어로닥틸 (바위/비행)', answer: '갸라도스 파도타기 / 라프라스' },
    { opponent: '망나뇽 3 (드래곤/비행)', answer: '라프라스 얼음기둥 / 냉동빔' },
  ],
}

export const HG_STORY_RED: BossSection = {
  title: '레드 (마운트실버)',
  note: '레드의 전원 레벨 80~88. 파티 전원 레벨 60~70 권장. 피카츄는 광속 아이템 소지.',
  rows: [
    { opponent: '피카츄 Lv.88 (전기)', answer: '블레이범 지진 (즉사 가능)' },
    { opponent: '이상해꽃 Lv.80 (풀/독)', answer: '블레이범 화염방사 / 라프라스 얼음기둥' },
    { opponent: '거북왕 Lv.84 (물)', answer: '전룡 10만볼트' },
    { opponent: '리자몽 Lv.84 (불꽃/비행)', answer: '갸라도스 파도타기 / 라프라스 냉동빔' },
    { opponent: '에스피온 Lv.82 (에스퍼)', answer: '헤라크로스 닫기 / 갸라도스 아이언테일' },
    { opponent: '잠만보 Lv.82 (노말)', answer: '헤라크로스 클로즈컴뱃 / 닫기' },
  ],
}

export const HG_STORY_SUMMARY_TABLE: { stage: string; strategy: string }[] = [
  { stage: '성도 초반 (1~3관)', strategy: '메리프 육성 + 헤라크로스 포획. 금빛 밀탱크는 헤라크로스 격투기로 처리' },
  { stage: '성도 중반 (4~6관)', strategy: '갸라도스(분노의 호수) + 라프라스(연결동굴 금요일) 확보' },
  { stage: '성도 후반 (7~8관 + E4)', strategy: '라프라스 얼음기로 이향 드래곤, 목호 드래곤 처리. 토게키스 진화 완료' },
  { stage: '관동 진행 (9~16관)', strategy: '전룡이 물/비행 담당, 블레이범 지진으로 전기 체육관 처리' },
  { stage: '레드전', strategy: '피카츄→지진, 이상해꽃→화염방사, 거북왕→10만볼트, 리자몽→파도타기, 잠만보→헤라크로스' },
]

export interface SupportRow {
  pokemon: string
  pokemonId: number
  role: string
  obtainedAt: string
}

export const HG_STORY_SUPPORT: SupportRow[] = [
  { pokemon: '크로뱃', pokemonId: 169, role: '친밀도 진화. 공중날기 담당 대체. 관동 진행 중 유용', obtainedAt: '주뱃 포획 후 친밀도 최대' },
  { pokemon: '빠오', pokemonId: 221, role: '마운트실버 포획. 레드전 얼음 보조. 선택적 교체 후보', obtainedAt: '마운트실버 (레드전 직전)' },
]

export const HG_STORY_CAUTIONS = [
  '헤라크로스는 HG 전용 포켓몬. 박치기(HM01)를 배운 포켓몬으로 황금빛시티 인근 나무를 흔들어 포획한다.',
  '라프라스는 연결동굴에서 매주 금요일에만 등장한다. 월~목요일에는 만날 수 없으니 날짜를 확인한다.',
  '토게키스 진화용 빛나는돌은 게임 내 소수 획득처에서 구한다. 국립공원 포충대회 1위 상품으로도 획득 가능.',
  '레드의 피카츄는 레벨 88로 매우 강하며 광속 아이템을 소지해 선제 공격을 날린다. 블레이범 지진으로 선제 처리한다.',
  '4세대에서 기술의 물리/특수 분류가 변경되었다. 화염방사(특수), 불꽃파동(특수), 화염바퀴(물리) 등을 구분해 배정한다.',
]

export interface EvolutionTimingRow {
  pokemon: string
  condition: string
  timing: string
  note: string
}

export const HG_STORY_EVOLUTION_TIMING: EvolutionTimingRow[] = [
  {
    pokemon: '브케인 → 마그케인 → 블레이범',
    condition: 'Lv.14 / Lv.36 (자동)',
    timing: '1관 직전 / 5~6관 사이',
    note: '화염방사는 마그케인 Lv.34에 습득. 블레이범 Lv.36 진화 전에 화염방사를 배워 두자.',
  },
  {
    pokemon: '메리프 → 보송송 → 전룡',
    condition: 'Lv.15 / Lv.30 (자동)',
    timing: '2~3관 / 3~4관 사이',
    note: '자동 진화. 10만볼트는 Lv.30 이후 TM24로 배정. 육성 타이밍이 늦으면 3관 통과 후 따로 시간 내서 레벨업.',
  },
  {
    pokemon: '토게피 → 토게틱',
    condition: '친밀도 최대 후 레벨업',
    timing: '달걀 부화 직후 Lv.5~10 내 목표',
    note: '비타민(아연·탄산칼슘 등)·도보 이동·레벨업으로 친밀도를 빠르게 올린다. 헤어그루밍 도구 활용 가능.',
  },
  {
    pokemon: '토게틱 → 토게키스',
    condition: '빛나는돌 사용',
    timing: '빛나는돌 획득 즉시 진화 OK',
    note: '빛나는돌은 국립공원 포충대회 1위 보상 또는 특정 NPC 증정. 기술 가르침으로 에어슬래시·오라스피어 보완 가능. 레벨 제한 없이 사용 가능하므로 획득 즉시 진화해도 무관.',
  },
  {
    pokemon: '교환진화 (윤겔라→후딘, 배루키→강철톤 등)',
    condition: '통신 교환 필수',
    timing: '관동 진행 중 선택적 채용',
    note: '이 공략은 통신교환 필수 운영을 기본 파티에서 제외. 관동 진행 시 후딘·강철톤 채용을 원하면 별도 통신 교환 필요. 하트골드 내에서는 자체 진화 불가.',
  },
]

export const HG_STORY_NAME_TO_ID: Map<string, number> = new Map(
  (
    [
      ['블레이범', 157], ['마그케인', 156], ['브케인', 155],
      ['전룡', 181], ['보송송', 180], ['메리프', 179],
      ['갸라도스', 130], ['토게키스', 468], ['토게틱', 176], ['토게피', 175],
      ['헤라크로스', 214], ['라프라스', 131], ['빠오', 221],
      ['크로뱃', 169], ['골뱃', 42], ['주뱃', 41],
      ['망나뇽', 149], ['드래피어', 148], ['미뇽', 147],
      ['킹드라', 230], ['강철톤', 208], ['후딘', 65], ['윤겔라', 64],
      ['리자몽', 6], ['거북왕', 9], ['이상해꽃', 3], ['피카츄', 25],
      ['에스피온', 196], ['잠만보', 143],
    ] as [string, number][]
  ).sort((a, b) => b[0].length - a[0].length),
)
