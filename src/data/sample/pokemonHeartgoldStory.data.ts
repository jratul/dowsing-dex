// 포켓몬 하트골드버전(4세대 HGSS 리메이크) 스토리 엔트리 공략 데이터.
// 스타팅: 브케인 → 마그케인 → 블레이범

export const HG_STORY_FINAL_PARTY_IDS = [157, 181, 130, 214, 131, 169]

export interface RoleRow {
  pokemon: string
  role: string
}

export const HG_STORY_FINAL_ROLES: RoleRow[] = [
  { pokemon: '블레이범', role: '불꽃 메인 딜러. 화염방사·솔라빔·지진·번개펀치. 벌레·풀·얼음 전담' },
  { pokemon: '전룡', role: '전기 딜러. 10만볼트·전기자석파·빛의장막. 물·비행 타입 전담' },
  { pokemon: '갸라도스', role: 'HM 담당 (파도타기·폭포오르기·괴력). 물리 딜러. 바위 타입 견제' },
  { pokemon: '헤라크로스', role: 'HG 전용 격투/벌레. 메가폰·인파이트·사이코커터. 레드 잠만보·에브이 처리' },
  { pokemon: '라프라스', role: '물/얼음 딜러. 연결동굴 무상 획득. 목호 드래곤·레드 리자몽 처리' },
  { pokemon: '크로뱃', role: '독/비행. 주뱃 포획 후 친밀도 진화. 속도 130 선공. 공중날기 HM 담당 겸 비행 딜러' },
]

export const HG_STORY_GOALS = [
  '브케인 스타팅 선택 → 성도 8개 체육관 클리어',
  '사천왕·챔피언 목호 격파',
  '관동 8개 체육관 클리어',
  '은빛산 레드전 격파',
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
  { timing: '초반 주뱃 포획', pokemonId: 41, pokemon: '주뱃', note: '동굴 어디서나 포획. 친밀도 최대(Lv.22 이상) → 골뱃 → 크로뱃 진화. 속도 130, 공중날기 HM 담당' },
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
    finalMoves: ['10만볼트', '전기자석파', '빛의장막', '번개펀치'],
    moveTable: [
      { move: '10만볼트', how: 'TM24', usage: '주력 전기 특수기. 화력과 명중률이 균형 잡힘' },
      { move: '전기자석파', how: 'TM73', usage: '마비 유틸. 보스전 안정화' },
      { move: '빛의장막', how: 'TM16', usage: '파티 특수 방어 지원. 레드전 안정성 증가' },
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
    finalMoves: ['메가폰', '인파이트', '사이코커터', '공중날기 / 독찌르기'],
    moveTable: [
      { move: '메가폰', how: 'Lv.습득', usage: '노말 물리기. 친밀도 높을수록 강력. HG에서 유용' },
      { move: '인파이트', how: 'Lv.습득', usage: '격투 물리기. 방어/특방이 낮아지지만 매우 강력' },
      { move: '사이코커터', how: '기술가르침', usage: '독 타입 견제. 에스퍼 물리기' },
      { move: '독찌르기', how: 'TM', usage: '독 물리기. 독 상태이상 효과' },
    ],
    notes: [
      '헤라크로스는 HG 전용 박치기 나무 포획 포켓몬. SS에서는 쁘사이저가 나온다.',
      '박치기(HM01)를 배운 포켓몬으로 특정 나무를 흔들면 헤라크로스가 나타난다. 금빛시티 인근 나무에서 높은 확률로 등장.',
      '헤라크로스의 높은 물리 공격력으로 레드전 잠만보·에브이를 처리한다.',
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
    pokemonId: 169,
    pokemon: '크로뱃',
    finalMoves: ['공중날기', '에어슬래시', '크로스포이즌', '날개쉬기'],
    moveTable: [
      { move: '공중날기', how: 'HM02', usage: '비행 HM. 이동 수단 겸 비행 물리기' },
      { move: '에어슬래시', how: 'Lv.습득', usage: '비행 특수기. 30% 풀죽음 효과. 격투 타입 체육관에 유효' },
      { move: '크로스포이즌', how: 'Lv.습득', usage: '독 물리기. 급소율 높음' },
      { move: '날개쉬기', how: 'Lv.습득', usage: 'HP 회복. 장기전 생존력 보조' },
    ],
    notes: [
      '주뱃을 동굴에서 이른 시기에 포획. 친밀도 최대(골뱃 Lv.22 이상) 시 크로뱃으로 진화.',
      '속도 130으로 성도·관동 전체에서 선공 가능. HM02 공중날기 담당으로 이동 편의성 확보.',
      '빛의돌이 포스트게임 이후에야 입수 가능해 토게키스 진화가 스토리 중 불가. 크로뱃이 실질적인 비행 타입 담당.',
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
  { hm: 'HM01', move: '풀베기', pokemon: '헤라크로스 (포획 전) / 임시', location: '너도밤나무숲', badge: '인섹트배지', note: '헤라크로스 포획 목적으로도 사용. 이후 삭제' },
  { hm: 'HM02', move: '공중날기', pokemon: '크로뱃', location: '진청시티 5관 클리어 후 사도의 아내', badge: '쇼크배지', note: '이동 편의성 핵심. 크로뱃에 배정' },
  { hm: 'HM03', move: '파도타기', pokemon: '갸라도스', location: '인주시티 무용극장 이벤트 보상', badge: '팬텀배지', note: '갸라도스 주력 물 기술 겸 이동' },
  { hm: 'HM04', move: '괴력', pokemon: '갸라도스', location: '진청시티 포켓몬센터 선원', badge: '레귤러배지', note: '이동 및 전투 겸용' },
  { hm: 'TM70', move: '플래시', pokemon: '전룡 / 임시', location: '모다피의 탑 장로 격파 보상', badge: '윙배지', note: '필수 진행 구간 최소화. 임시 포켓몬에 배정 가능' },
  { hm: 'HM05', move: '바다회오리', pokemon: '갸라도스 임시', location: '로켓단 아지트 클리어 후 목호에게 획득', badge: '아이스배지', note: '소용돌이섬 진행용. 이후 삭제' },
  { hm: 'HM07', move: '폭포오르기', pokemon: '갸라도스', location: '얼음샛길 내부', badge: '라이징배지', note: '후반 진행 필수' },
  { hm: 'HM06', move: '바위깨기', pokemon: '헤라크로스 / 갸라도스', location: '관동 특정 NPC', badge: '관동 진행 중 획득', note: '관동 진행 시 필요. 헤라크로스에 배정 가능' },
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
  { tm: 'TM73', move: '전기자석파', target: '전룡', location: '각종 상점·NPC', priority: '중간', desc: '마비 유틸. 보스전 안정화에 유용' },
  { tm: 'TM45', move: '끌어당기기', target: '자유', location: '일부 NPC 증정', priority: '선택', desc: '물리 공격을 분산시키는 유틸기' },
]

export const HG_STORY_TM_OPTIONAL: TmRow[] = [
  { tm: 'TM15', move: '하이퍼빔', target: '갸라도스 / 헤라크로스', location: '관동 진행 시 상점', priority: '선택', desc: '1회 강공. 다음 턴 쉼이 있으므로 보스전 마무리용' },
  { tm: 'TM22', move: '솔라빔', target: '블레이범', location: '특정 NPC', priority: '선택', desc: '맑은날씨와 연계 시 강력. 아이템 확보 필요' },
  { tm: 'TM16', move: '빛의장막', target: '전룡 / 크로뱃', location: '금빛시티 백화점', priority: '선택', desc: '파티 방어 지원. 레드전 안정성 증가' },
]

export const HG_STORY_TM_NOTES = [
  '지진(TM26)은 블레이범에게 반드시 배정한다. 레드 피카츄를 가장 안정적으로 처리할 수 있다.',
  '10만볼트(TM24)는 노랑시티 게임코너에서 구매 또는 시나리오 보상으로 획득한다.',
  '4세대에서는 기술 가르침 NPC가 추가되어 TM 외에도 기술 습득 경로가 늘어났다.',
  'HGSS에서 빛의돌은 포스트게임(락클라임 이후 자연공원 접근 가능 시점)에서만 입수 가능. 스토리 중 토게키스 진화 불가.',
]

export interface PartyStage {
  title: string
  members: string[]
  goals: string[]
}

export const HG_STORY_STAGES: PartyStage[] = [
  {
    title: '초반: 신비마을 ~ 금빛시티',
    members: ['브케인 / 마그케인', '메리프 / 보송송', '헤라크로스 (포획)', '주뱃 → 크로뱃', '자유 슬롯'],
    goals: [
      '헤라크로스를 고동마을 근처 나무에서 빠르게 포획한다.',
      '메리프를 꾸준히 육성해 전기 타입 전력을 확보한다.',
      '주뱃을 초반에 포획, 친밀도 최대로 크로뱃으로 진화시켜 공중날기 담당으로 육성한다.',
    ],
  },
  {
    title: '중반: 인주시티 ~ 목호 격파',
    members: ['마그케인 / 블레이범', '전룡', '헤라크로스', '붉은 갸라도스', '라프라스 (연결동굴 획득)', '크로뱃'],
    goals: [
      '연결동굴에서 라프라스를 금요일에 획득한다.',
      '분노의 호수에서 붉은 갸라도스를 포획, HM 담당으로 육성한다.',
      '목호전 대비로 라프라스에게 얼음 기술을 배정한다.',
      '크로뱃에 공중날기 배정. 빛의돌은 포스트게임 이전 입수 불가이므로 토게키스 진화는 스토리 클리어 후.',
    ],
  },
  {
    title: '후반: 관동 진행 ~ 레드전',
    members: ['블레이범', '전룡', '갸라도스', '헤라크로스', '라프라스', '크로뱃'],
    goals: [
      '관동 8개 체육관 순서대로 격파한다. 레벨 차이가 있으면 야생 전투로 보충한다.',
      '레드전 전 은빛산 진입 전 전원 레벨 60 이상 목표.',
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
    note: '마그케인 불꽃세례로 처리. 비행은 불꽃에 중립이지만 레벨 우위로 충분.',
    rows: [
      { opponent: '구구 Lv.9 (비행/노말)', answer: '마그케인 불꽃세례' },
      { opponent: '피죤 Lv.13 (비행/노말)', answer: '마그케인 불꽃세례' },
    ],
  },
  {
    title: '고동체육관 호일 (벌레 타입)',
    note: '마그케인 화염방사로 전부 처리. HGSS에서 스라크(테크니션) 선봉이 유턴으로 치고 빠지니 주의.',
    rows: [
      { opponent: '단데기 Lv.14 (벌레)', answer: '마그케인 불꽃세례' },
      { opponent: '딱충이 Lv.14 (벌레/독)', answer: '마그케인 불꽃세례' },
      { opponent: '스라크 Lv.16 (벌레/비행)', answer: '마그케인 불꽃세례 (불꽃 2배!)' },
    ],
  },
  {
    title: '금빛체육관 (노말 타입) ★고비',
    note: '밀탱크(Lv.23)의 배북+몸통박치기가 매우 강하다. 헤라크로스 격투기 또는 토게키스 파동탄로 처리. 백화점 5층 NPC와 슬리프를 주고 받는 암컷 알통몬도 유효 — 헤롱헤롱 무효 + 교환 보정으로 경험치가 빨리 쌓임. 호일 체육관에서 받은 연속자르기를 스라크나 헤라크로스에게 사전 배정해두면 밀탱크 처리에 도움이 된다.',
    rows: [
      { opponent: '삐삐 Lv.17 (노말)', answer: '마그케인 화염방사 (레벨 우위)' },
      { opponent: '밀탱크 Lv.19 (배북+몸통박치기)', answer: '헤라크로스 인파이트 (격투 2배 ★) / 알통몬(교환) 크로스촙' },
    ],
  },
  {
    title: '인주체육관 유빈 (고스트 타입)',
    note: '고스트 타입에 노말·격투 무효. 갸라도스 깨물어부수기(악 타입 물리기)가 HGSS에서 가장 안정적. 블레이범 화염방사로도 처리 가능. 야부엉의 불면 특성은 유빈의 최면술을 원천 차단해준다.',
    rows: [
      { opponent: '고오스 Lv.21 × 2 (고스트/독)', answer: '마그케인 화염방사 (중립, 레벨 우위)' },
      { opponent: '고우스트 Lv.21 (고스트/독)', answer: '갸라도스 깨물어부수기 (악 물리 2배)' },
      { opponent: '팬텀 Lv.25 (고스트/독)', answer: '갸라도스 깨물어부수기 (악 물리 2배) / 블레이범 화염방사' },
    ],
  },
  {
    title: '진청체육관 사도 (격투 타입)',
    note: '격투는 비행·에스퍼에 약점. 토게틱 에어슬래시나 마그케인 불꽃세례로 처리. 강챙이(물/격투)는 아쿠아테일 주의.',
    rows: [
      { opponent: '성원숭 Lv.27 (격투)', answer: '토게틱 에어슬래시 (비행 2배)' },
      { opponent: '강챙이 Lv.30 (물/격투)', answer: '전룡 10만볼트 (전기 2배) / 토게틱 에어슬래시' },
    ],
  },
  {
    title: '담청체육관 규리 (강철 타입)',
    note: '블레이범 화염방사로 강철 타입 한 방. 지진도 효과적.',
    rows: [
      { opponent: '강철톤', answer: '블레이범 화염방사 / 지진' },
    ],
  },
  {
    title: '황토체육관 류옹 (얼음 타입)',
    note: '쥬쥬·쥬레곤은 물 타입이라 전룡 전기기 또는 헤라크로스 인파이트로 처리. 메꾸리(얼음/땅)만 격투·불꽃 2배 약점 — 블레이범이 가장 효과적.',
    rows: [
      { opponent: '쥬쥬 Lv.27 (물)', answer: '전룡 10만볼트 (전기 2배)' },
      { opponent: '쥬레곤 Lv.29 (물/얼음)', answer: '전룡 10만볼트 / 헤라크로스 인파이트' },
      { opponent: '메꾸리 Lv.31 (얼음/땅)', answer: '블레이범 화염방사 (불꽃 2배!) / 헤라크로스 인파이트 (격투 2배!)' },
    ],
  },
  {
    title: '검은먹체육관 이향 (드래곤 타입)',
    note: '라프라스 얼음기둥·냉동빔으로 드래곤 약점 공략. 킹드라(드래곤/물)는 얼음이 4배 약점. 갸라도스 Lv.44에 용의춤을 배운 뒤 얼음엄니로 신뇽 3마리를 연속 정리하는 전략도 유효 — 용의춤 1~2번 후 선공권 확보.',
    rows: [
      { opponent: '신뇽 (드래곤/비행)', answer: '라프라스 얼음기둥 / 갸라도스 용의춤 후 얼음엄니' },
      { opponent: '킹드라 (드래곤/물)', answer: '라프라스 얼음기둥 (4배 약점!) / 냉동빔' },
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
      { opponent: '아쿠스타·미끄래곤·쥬', answer: '전룡 10만볼트' },
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
      { opponent: '우츠보트·나팔뚜', answer: '블레이범 화염방사 / 크로뱃 에어슬래시' },
    ],
  },
  {
    title: '연분홍체육관 도희 (독 타입)',
    note: '블레이범 지진(땅 2배)으로 독 타입 전담. 독은 땅에 2배 약점.',
    rows: [
      { opponent: '독침붕·아포켈 등 (독)', answer: '블레이범 지진 (땅 2배!)' },
    ],
  },
  {
    title: '노랑체육관 초련 (에스퍼 타입)',
    note: '헤라크로스 인파이트/메가폰 또는 갸라도스 아이언테일. 에스퍼는 악/벌레에 약점.',
    rows: [
      { opponent: '후딘·야도란', answer: '헤라크로스 인파이트 / 갸라도스 아이언테일' },
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
      { opponent: '나시 (풀/에스퍼)', answer: '블레이범 화염방사 / 헤라크로스 메가폰' },
      { opponent: '후딘 (에스퍼)', answer: '헤라크로스 메가폰 / 갸라도스 물기' },
      { opponent: '윈디 (불꽃)', answer: '갸라도스 파도타기 / 라프라스' },
      { opponent: '피죤투 (비행)', answer: '전룡 10만볼트 / 라프라스 얼음기둥' },
      { opponent: '코뿌리 (바위/땅)', answer: '갸라도스 파도타기 / 라프라스 파도타기' },
      { opponent: '갸라도스 (물/비행)', answer: '전룡 10만볼트 (4배 약점!)' },
    ],
  },
]

export const HG_STORY_ELITE4: BossSection[] = [
  {
    title: '사천왕 일목 (에스퍼 타입)',
    note: '헤라크로스 인파이트 또는 갸라도스 아이언테일. 에스퍼는 악·벌레에 약점.',
    rows: [
      { opponent: '네이티오·루주라·야도킹 등', answer: '헤라크로스 메가폰 / 갸라도스 물기' },
    ],
  },
  {
    title: '사천왕 독수 (독/격투 혼합)',
    note: '갸라도스 파도타기·블레이범 지진으로 분담. 격투는 비행/에스퍼 약점.',
    rows: [
      { opponent: '크로뱃·아리아도스·독수리 등 (독/격투)', answer: '블레이범 지진 (땅 2배) / 전룡 10만볼트' },
    ],
  },
  {
    title: '사천왕 시바 (격투 타입)',
    note: '격투는 비행·에스퍼 약점. 크로뱃 에어슬래시로 격투 처리, 롱스톤은 갸라도스 파도타기로 처리.',
    rows: [
      { opponent: '시라소몬·홍수몬·괴력몬 (격투)', answer: '크로뱃 에어슬래시 (비행 2배)' },
      { opponent: '롱스톤 × 2 (바위/땅)', answer: '갸라도스 파도타기 (물 2배)' },
    ],
  },
  {
    title: '사천왕 카렌 (악 타입)',
    note: '블레이범 화염방사(핫삼 4배!)·헤라크로스 인파이트로 주로 처리. 악 타입에는 격투기가 효과적.',
    rows: [
      { opponent: '핫삼 (강철/벌레)', answer: '블레이범 화염방사 (불꽃 4배!)' },
      { opponent: '블래키·독수리·악비아르·블래독 (악)', answer: '헤라크로스 인파이트 (격투 2배)' },
    ],
  },
]

export const HG_STORY_CHAMPION: BossSection = {
  title: '챔피언 목호 (드래곤 타입)',
  note: '목호의 드래곤 파티(망나뇽 3마리+킹드라+갸라도스+에어로닥틸)는 얼음기에 약점. 라프라스가 핵심. 갸라도스는 전룡 전기기로 처리.',
  rows: [
    { opponent: '갸라도스 (물/비행)', answer: '전룡 10만볼트 / 라프라스' },
    { opponent: '망나뇽 1·2 (드래곤/비행)', answer: '라프라스 얼음기둥 / 냉동빔' },
    { opponent: '킹드라 (드래곤/물)', answer: '라프라스 얼음기둥 (4배 약점)' },
    { opponent: '에어로닥틸 (바위/비행)', answer: '갸라도스 파도타기 / 라프라스' },
    { opponent: '망나뇽 3 (드래곤/비행)', answer: '라프라스 얼음기둥 / 냉동빔' },
  ],
}

export const HG_STORY_RED: BossSection = {
  title: '레드 (은빛산)',
  note: '레드의 전원 레벨 80~88. 파티 전원 레벨 60~70 권장. 피카츄는 광속 아이템 소지.',
  rows: [
    { opponent: '피카츄 Lv.88 (전기)', answer: '블레이범 지진 (즉사 가능)' },
    { opponent: '이상해꽃 Lv.80 (풀/독)', answer: '블레이범 화염방사 / 라프라스 얼음기둥' },
    { opponent: '거북왕 Lv.84 (물)', answer: '전룡 10만볼트' },
    { opponent: '리자몽 Lv.84 (불꽃/비행)', answer: '갸라도스 파도타기 / 라프라스 냉동빔' },
    { opponent: '에브이 Lv.82 (에스퍼)', answer: '헤라크로스 인파이트 / 갸라도스 아이언테일' },
    { opponent: '잠만보 Lv.82 (노말)', answer: '헤라크로스 인파이트' },
  ],
}

export const HG_STORY_SUMMARY_TABLE: { stage: string; strategy: string }[] = [
  { stage: '성도 초반 (1~3관)', strategy: '메리프 육성 + 헤라크로스 포획. 금빛 밀탱크는 헤라크로스 격투기로 처리' },
  { stage: '성도 중반 (4~6관)', strategy: '갸라도스(분노의 호수) + 라프라스(연결동굴 금요일) 확보' },
  { stage: '성도 후반 (7~8관 + E4)', strategy: '라프라스 얼음기로 이향 드래곤, 목호 드래곤 처리. 크로뱃 공중날기 이동 활용' },
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
  { pokemon: '메꾸리', pokemonId: 221, role: '은빛산 포획. 레드전 얼음 보조. 선택적 교체 후보', obtainedAt: '은빛산 (레드전 직전)' },
]

export interface AlternativeRow {
  pokemonId: number
  pokemon: string
  role: string
  obtainedAt: string
}

export const HG_STORY_ALT_HERACROSS: AlternativeRow[] = [
  {
    pokemonId: 57,
    pokemon: '성원숭',
    role: '격투 타입 주력. 인파이트로 레드 잠만보·에브이 대응. HG 전용 42번도로에서 망키 포획',
    obtainedAt: '42번도로 (4관 인주시티 이후, HG 한정)',
  },
  {
    pokemonId: 149,
    pokemon: '망나뇽',
    role: '드래곤/비행 최강 물리 딜러. 격투 커버는 없지만 높은 화력으로 다수 처리. 목호·레드전 모두 활약',
    obtainedAt: '용의 굴 (8관 이향 격파 후 퀴즈 통과)',
  },
  {
    pokemonId: 227,
    pokemon: '무장조',
    role: '강철/비행 타입. 초고방어로 물리 내성 확보. 에어슬래시·강철날개·브레이브버드. 비행 커버리지 전담',
    obtainedAt: '45번도로 (7관~8관 사이)',
  },
]

export const HG_STORY_ALT_TOGEKISS: AlternativeRow[] = [
  {
    pokemonId: 468,
    pokemon: '토게키스',
    role: '포스트게임 합류 가능. 빛의돌(포스트게임에서만 입수)로 토게틱 → 토게키스 진화. 에어슬래시·파동탄(격투)·빛의장막으로 비행/격투 커버',
    obtainedAt: '토게피(게임 초반) → 친밀도 진화 → 빛의돌 입수 후 (포스트게임)',
  },
  {
    pokemonId: 196,
    pokemon: '에브이',
    role: '에스퍼 특수 딜러. 높은 특공으로 격투·악·독 타입 처리. 이브이를 낮에 친밀도 최대로 진화',
    obtainedAt: '금빛시티 이수재의 집 (3관 이후) → 낮 친밀도 진화',
  },
  {
    pokemonId: 121,
    pokemon: '아쿠스타',
    role: '물/에스퍼 고속 특수 딜러. 별가사리 낚시 후 물의돌 진화. 파도타기·번개·냉동빔으로 전천후 활약',
    obtainedAt: '낚시(보통 낚싯대) 후 물의돌 사용',
  },
]

export const HG_STORY_CAUTIONS = [
  '헤라크로스는 HG 전용 포켓몬. 박치기(HM01)를 배운 포켓몬으로 금빛시티 인근 나무를 흔들어 포획한다.',
  '라프라스는 연결동굴에서 매주 금요일에만 등장한다. 월~목요일에는 만날 수 없으니 날짜를 확인한다.',
  '토게키스 진화에 필요한 빛의돌은 HGSS에서 포스트게임(락클라임 이후 자연공원 접근 가능 시점) 이전에 입수할 수 없다. 스토리 중에는 크로뱃을 비행 타입으로 운용한다.',
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
    timing: '알 부화 직후 Lv.5~10 내 목표',
    note: '비타민(아연·탄산칼슘 등)·도보 이동·레벨업으로 친밀도를 빠르게 올린다. 헤어그루밍 도구 활용 가능.',
  },
  {
    pokemon: '토게틱 → 토게키스',
    condition: '빛의돌 사용',
    timing: '포스트게임 (락클라임 이후 자연공원)',
    note: 'HGSS에서 빛의돌은 포스트게임에서만 입수 가능. 스토리 중에는 토게틱 상태로 유지하거나 크로뱃으로 대체. 레드 격파 후 빛의돌 입수해 진화 가능.',
  },
  {
    pokemon: '교환진화 (윤겔라→후딘, 배루키→강철톤 등)',
    condition: '통신 교환 필수',
    timing: '관동 진행 중 선택적 채용',
    note: '이 공략은 통신교환 필수 운영을 기본 파티에서 제외. 관동 진행 시 후딘·강철톤 채용을 원하면 별도 통신 교환 필요. 하트골드 내에서는 자체 진화 불가.',
  },
]

export interface FarmingTip {
  title: string
  detail: string
}

export const HG_STORY_FARMING: FarmingTip[] = [
  {
    title: '포켓기어 트레이너 재대결 (최고 효율 레벨업)',
    detail: '전화를 등록한 트레이너에게 정해진 요일·시간에 전화하면 재대결 가능. 첫 전당등록·배지 16개 획득 등을 기점으로 상대 레벨이 크게 오름. HGSS에서 야생보다 효율이 훨씬 높은 주요 레벨업 수단.',
  },
  {
    title: '용돈 파밍 — 담청등대 카넬',
    detail: '매주 화요일 오전 10시~오후 7시 59분에 카넬에게 전화를 걸어 재배틀 요청. 1회 승리 시 최대 25,600원 획득. 횟수 제한 없이 반복 가능해 아이템 구매용 자금 확보에 유용.',
  },
  {
    title: '43번도로 50레벨 잉어킹 (빠른 갸라도스 육성)',
    detail: 'Lv.26 이상 포켓몬을 선두에 두고 슈퍼스프레이 후 43번도로에서 파도타기. Lv.50 잉어킹이 확정 출현해 즉시 갸라도스로 진화 가능. 분노의 호수 붉은 갸라도스가 아닌 일반 갸라도스를 추가로 육성할 때 유용.',
  },
  {
    title: '레벨 상승 경고 — 라디오타워 이후 구간',
    detail: '4~5마리 균등 육성 기준 라디오타워 도달 시 보통 Lv.30대 초반. 이후 아폴로(헬가 Lv.38)·이향(킹드라 Lv.41)·전설 포켓몬(Lv.45)으로 레벨 상승이 가파름. 이향 도전 전 주전 포켓몬 Lv.35 이상을 확보할 것.',
  },
  {
    title: '레벨 상승 경고 — 2차 리그 전',
    detail: '배지 16개 획득 시점에 리그 엔트리 레벨이 20 이상 상승. 레드는 Lv.80~88 엔트리. 관동 진행 중 포켓기어 재대결로 파티 Lv.60~70까지 맞춰두는 것이 사실상 필수.',
  },
  {
    title: '노력치 파밍 장소 (교정깁스 활용 권장)',
    detail: 'HP: 알프의유적 누오 / 공격: 42번도로 콘치 계열 / 방어: 45번도로 꼬마돌·데구리 / 특공: 43번도로 키링키·보송송 / 특방: 바다의 왕눈해·독파리 / 스피드: 동성폭포 레트라·골뱃',
  },
]

export const HG_STORY_NAME_TO_ID: Map<string, number> = new Map(
  (
    [
      ['블레이범', 157], ['마그케인', 156], ['브케인', 155],
      ['전룡', 181], ['보송송', 180], ['메리프', 179],
      ['갸라도스', 130], ['토게키스', 468], ['토게틱', 176], ['토게피', 175],
      ['헤라크로스', 214], ['라프라스', 131], ['메꾸리', 221],
      ['성원숭', 57], ['망키', 56], ['무장조', 227],
      ['야도란', 80], ['야돈', 79], ['아쿠스타', 121], ['별가사리', 120],
      ['크로뱃', 169], ['골뱃', 42], ['주뱃', 41], ['이브이', 133],
      ['망나뇽', 149], ['신뇽', 148], ['미뇽', 147],
      ['킹드라', 230], ['강철톤', 208], ['후딘', 65], ['윤겔라', 64],
      ['나시', 103], ['윈디', 59], ['코뿌리', 112], ['피죤투', 18], ['피죤', 17], ['구구', 16],
      ['강챙이', 62], ['시라소몬', 106], ['홍수몬', 107],
      ['쥬쥬', 86], ['쥬레곤', 87],
      ['네이티오', 178], ['루주라', 124], ['야도킹', 199], ['마임맨', 122],
      ['리자몽', 6], ['거북왕', 9], ['이상해꽃', 3], ['피카츄', 25],
      ['에브이', 196], ['잠만보', 143],
    ] as [string, number][]
  ).sort((a, b) => b[0].length - a[0].length),
)
