import type { Learnset, MachineMove, Move } from '../../types/move'

/**
 * 샘플/목업 기술 데이터. 실제 PokeAPI 연동 전까지 디자인·기능 검증용으로 쓰는
 * placeholder이며, 위력·PP·기술머신 번호는 참고용 근사치다 (실데이터 연동 시 교체 예정).
 */
export const SAMPLE_MOVES: Move[] = [
  { id: 1, nameKo: '몸통박치기', nameEn: 'Tackle', type: '노말', category: '물리', power: 40, accuracy: 100, pp: 35 },
  { id: 2, nameKo: '울음소리', nameEn: 'Growl', type: '노말', category: '상태', accuracy: 100, pp: 40 },
  { id: 3, nameKo: '전광석화', nameEn: 'Quick Attack', type: '노말', category: '물리', power: 40, accuracy: 100, pp: 30 },
  { id: 4, nameKo: '회복', nameEn: 'Recover', type: '노말', category: '상태', pp: 10 },
  { id: 5, nameKo: '데미지', nameEn: 'Take Down', type: '노말', category: '물리', power: 90, accuracy: 85, pp: 20 },

  { id: 10, nameKo: '덩굴채찍', nameEn: 'Vine Whip', type: '풀', category: '물리', power: 45, accuracy: 100, pp: 25 },
  { id: 11, nameKo: '씨뿌리기', nameEn: 'Leech Seed', type: '풀', category: '상태', accuracy: 90, pp: 10 },
  { id: 12, nameKo: '잎날가르기', nameEn: 'Razor Leaf', type: '풀', category: '물리', power: 55, accuracy: 95, pp: 25 },
  { id: 13, nameKo: '솔라빔', nameEn: 'Solar Beam', type: '풀', category: '특수', power: 120, accuracy: 100, pp: 10 },
  { id: 14, nameKo: '메가드레인', nameEn: 'Mega Drain', type: '풀', category: '특수', power: 40, accuracy: 100, pp: 15 },

  { id: 20, nameKo: '독찌르기', nameEn: 'Poison Sting', type: '독', category: '물리', power: 15, accuracy: 100, pp: 35 },
  { id: 21, nameKo: '맹독', nameEn: 'Toxic', type: '독', category: '상태', accuracy: 90, pp: 10 },

  { id: 30, nameKo: '불꽃세례', nameEn: 'Ember', type: '불꽃', category: '특수', power: 40, accuracy: 100, pp: 25 },
  { id: 31, nameKo: '화염방사', nameEn: 'Flamethrower', type: '불꽃', category: '특수', power: 90, accuracy: 100, pp: 15 },
  { id: 32, nameKo: '화염선풍', nameEn: 'Fire Spin', type: '불꽃', category: '특수', power: 35, accuracy: 85, pp: 15 },

  { id: 40, nameKo: '할퀴기', nameEn: 'Scratch', type: '노말', category: '물리', power: 40, accuracy: 100, pp: 35 },
  { id: 41, nameKo: '용의 분노', nameEn: 'Dragon Rage', type: '드래곤', category: '특수', power: 40, accuracy: 100, pp: 10 },
  { id: 42, nameKo: '불꽃펀치', nameEn: 'Fire Punch', type: '불꽃', category: '물리', power: 75, accuracy: 100, pp: 15 },
  { id: 43, nameKo: '날개로 치기', nameEn: 'Wing Attack', type: '비행', category: '물리', power: 60, accuracy: 100, pp: 35 },
  { id: 44, nameKo: '플라이', nameEn: 'Fly', type: '비행', category: '물리', power: 90, accuracy: 95, pp: 15 },

  { id: 50, nameKo: '물대포', nameEn: 'Water Gun', type: '물', category: '특수', power: 40, accuracy: 100, pp: 25 },
  { id: 51, nameKo: '거품', nameEn: 'Bubble', type: '물', category: '특수', power: 40, accuracy: 100, pp: 30 },
  { id: 52, nameKo: '파도타기', nameEn: 'Surf', type: '물', category: '특수', power: 90, accuracy: 100, pp: 15 },
  { id: 53, nameKo: '껍질딱지', nameEn: 'Withdraw', type: '물', category: '상태', pp: 40 },

  { id: 60, nameKo: '꼬리치기', nameEn: 'Tail Whip', type: '노말', category: '상태', accuracy: 100, pp: 30 },
  { id: 61, nameKo: '전기쇼크', nameEn: 'Thunder Shock', type: '전기', category: '특수', power: 40, accuracy: 100, pp: 30 },
  { id: 62, nameKo: '번개', nameEn: 'Thunderbolt', type: '전기', category: '특수', power: 90, accuracy: 100, pp: 15 },
  { id: 63, nameKo: '으르렁대다', nameEn: 'Charm', type: '페어리', category: '상태', accuracy: 100, pp: 20 },

  { id: 70, nameKo: '모래뿌리기', nameEn: 'Sand Attack', type: '노말', category: '상태', accuracy: 100, pp: 15 },
  { id: 71, nameKo: '얼음숨결', nameEn: 'Ice Beam', type: '얼음', category: '특수', power: 90, accuracy: 100, pp: 10 },
  { id: 72, nameKo: '지진', nameEn: 'Earthquake', type: '땅', category: '물리', power: 100, accuracy: 100, pp: 10 },

  { id: 80, nameKo: '사념의 박치기', nameEn: 'Confusion', type: '에스퍼', category: '특수', power: 50, accuracy: 100, pp: 25 },
  { id: 81, nameKo: '사이코키네시스', nameEn: 'Psychic', type: '에스퍼', category: '특수', power: 90, accuracy: 100, pp: 10 },
  { id: 82, nameKo: '방어', nameEn: 'Barrier', type: '에스퍼', category: '상태', pp: 20 },
  { id: 83, nameKo: '거짓울음', nameEn: 'Disable', type: '노말', category: '상태', accuracy: 100, pp: 20 },
  { id: 84, nameKo: '스위프트', nameEn: 'Swift', type: '노말', category: '특수', power: 60, pp: 20 },

  { id: 90, nameKo: '괴력', nameEn: 'Cut', type: '노말', category: '물리', power: 50, accuracy: 95, pp: 30 },
  { id: 91, nameKo: '강한힘', nameEn: 'Strength', type: '노말', category: '물리', power: 80, accuracy: 100, pp: 15 },
]

export function findMove(id: number): Move | undefined {
  return SAMPLE_MOVES.find((m) => m.id === id)
}

const TM = (moveId: number, number: number): MachineMove => ({ moveId, machine: 'TM', number })
const HM = (moveId: number, number: number): MachineMove => ({ moveId, machine: 'HM', number })

// 공통 TM 풀: 같은 기술은 항상 같은 번호를 쓴다 (실제 게임처럼 TM 번호는 기술마다 고정).
const TM_TOXIC = TM(21, 6)
const TM_MEGA_DRAIN = TM(14, 21)
const TM_SOLAR_BEAM = TM(13, 22)
const TM_THUNDERBOLT = TM(62, 24)
const TM_ICE_BEAM = TM(71, 15)
const TM_FLAMETHROWER = TM(31, 35)
const TM_EARTHQUAKE = TM(72, 26)
const TM_FIRE_PUNCH = TM(42, 50)
const HM_CUT = HM(90, 1)
const HM_FLY = HM(44, 2)
const HM_SURF = HM(52, 3)
const HM_STRENGTH = HM(91, 4)

export const LEARNSETS: Record<number, Learnset[]> = {
  1: [
    {
      version: '레드·블루',
      levelUp: [
        { moveId: 1, level: 1 },
        { moveId: 2, level: 1 },
        { moveId: 10, level: 7 },
        { moveId: 11, level: 13 },
        { moveId: 12, level: 20 },
        { moveId: 13, level: 32 },
      ],
      machines: [TM_TOXIC, TM_MEGA_DRAIN, TM_SOLAR_BEAM, TM_EARTHQUAKE, HM_CUT, HM_STRENGTH],
    },
  ],
  // 진화체는 이전 단계에서 배운 기술(저레벨)을 그대로 이어받고, 고유 기술은 더 높은 레벨에서 배운다.
  2: [
    {
      version: '레드·블루',
      levelUp: [
        { moveId: 1, level: 1 },
        { moveId: 2, level: 1 },
        { moveId: 10, level: 1 },
        { moveId: 11, level: 1 },
        { moveId: 12, level: 22 },
        { moveId: 14, level: 30 },
        { moveId: 13, level: 44 },
      ],
      machines: [TM_TOXIC, TM_MEGA_DRAIN, TM_SOLAR_BEAM, TM_EARTHQUAKE, HM_CUT, HM_STRENGTH],
    },
  ],
  3: [
    {
      version: '레드·블루',
      levelUp: [
        { moveId: 1, level: 1 },
        { moveId: 2, level: 1 },
        { moveId: 10, level: 1 },
        { moveId: 11, level: 1 },
        { moveId: 12, level: 25 },
        { moveId: 14, level: 33 },
        { moveId: 13, level: 50 },
      ],
      machines: [TM_TOXIC, TM_MEGA_DRAIN, TM_SOLAR_BEAM, TM_EARTHQUAKE, HM_CUT, HM_STRENGTH],
    },
  ],
  4: [
    {
      version: '레드·블루',
      levelUp: [
        { moveId: 1, level: 1 },
        { moveId: 60, level: 1 },
        { moveId: 30, level: 9 },
        { moveId: 70, level: 15 },
        { moveId: 32, level: 22 },
        { moveId: 31, level: 38 },
      ],
      machines: [TM_FIRE_PUNCH, TM_FLAMETHROWER, TM_EARTHQUAKE, HM_CUT, HM_STRENGTH],
    },
  ],
  5: [
    {
      version: '레드·블루',
      levelUp: [
        { moveId: 1, level: 1 },
        { moveId: 60, level: 1 },
        { moveId: 30, level: 1 },
        { moveId: 70, level: 1 },
        { moveId: 32, level: 24 },
        { moveId: 42, level: 36 },
        { moveId: 31, level: 46 },
      ],
      machines: [TM_FIRE_PUNCH, TM_FLAMETHROWER, TM_EARTHQUAKE, HM_CUT, HM_STRENGTH],
    },
  ],
  6: [
    {
      version: '레드·블루',
      levelUp: [
        { moveId: 1, level: 1 },
        { moveId: 60, level: 1 },
        { moveId: 30, level: 9 },
        { moveId: 43, level: 15 },
        { moveId: 32, level: 24 },
        { moveId: 31, level: 46 },
      ],
      machines: [TM_FIRE_PUNCH, TM_FLAMETHROWER, TM_EARTHQUAKE, HM_CUT, HM_FLY, HM_STRENGTH],
    },
  ],
  7: [
    {
      version: '레드·블루',
      levelUp: [
        { moveId: 1, level: 1 },
        { moveId: 53, level: 1 },
        { moveId: 51, level: 8 },
        { moveId: 70, level: 15 },
        { moveId: 50, level: 22 },
        { moveId: 52, level: 42 },
      ],
      machines: [TM_ICE_BEAM, TM_EARTHQUAKE, HM_CUT, HM_SURF, HM_STRENGTH],
    },
  ],
  25: [
    {
      version: '레드·블루',
      levelUp: [
        { moveId: 3, level: 1 },
        { moveId: 60, level: 1 },
        { moveId: 61, level: 9 },
        { moveId: 84, level: 24 },
        { moveId: 62, level: 33 },
      ],
      machines: [TM_THUNDERBOLT, HM_CUT, HM_FLY, HM_STRENGTH],
    },
    {
      version: '피카츄',
      levelUp: [
        { moveId: 3, level: 1 },
        { moveId: 60, level: 1 },
        { moveId: 61, level: 8 },
        { moveId: 63, level: 18 },
        { moveId: 84, level: 24 },
        { moveId: 62, level: 31 },
      ],
      machines: [TM_THUNDERBOLT, HM_CUT, HM_SURF, HM_STRENGTH],
    },
  ],
  133: [
    {
      version: '레드·블루',
      levelUp: [
        { moveId: 1, level: 1 },
        { moveId: 60, level: 1 },
        { moveId: 3, level: 15 },
      ],
      machines: [TM_TOXIC, HM_CUT, HM_STRENGTH],
    },
  ],
  // 이브이의 분기 진화체: 저레벨 기술은 이브이와 동일하게 이어받고, 각자 속성에 맞는 고유 기술을 배운다.
  134: [
    {
      version: '레드·블루',
      levelUp: [
        { moveId: 1, level: 1 },
        { moveId: 60, level: 1 },
        { moveId: 3, level: 15 },
        { moveId: 51, level: 28 },
        { moveId: 52, level: 45 },
      ],
      machines: [TM_TOXIC, TM_ICE_BEAM, HM_CUT, HM_SURF, HM_STRENGTH],
    },
  ],
  135: [
    {
      version: '레드·블루',
      levelUp: [
        { moveId: 1, level: 1 },
        { moveId: 60, level: 1 },
        { moveId: 3, level: 15 },
        { moveId: 61, level: 30 },
        { moveId: 84, level: 38 },
        { moveId: 62, level: 48 },
      ],
      machines: [TM_TOXIC, TM_THUNDERBOLT, HM_CUT, HM_STRENGTH],
    },
  ],
  136: [
    {
      version: '레드·블루',
      levelUp: [
        { moveId: 1, level: 1 },
        { moveId: 60, level: 1 },
        { moveId: 3, level: 15 },
        { moveId: 30, level: 30 },
        { moveId: 42, level: 38 },
        { moveId: 31, level: 48 },
      ],
      machines: [TM_TOXIC, TM_FLAMETHROWER, TM_FIRE_PUNCH, HM_CUT, HM_STRENGTH],
    },
  ],
  150: [
    {
      version: '레드·블루',
      levelUp: [
        { moveId: 80, level: 1 },
        { moveId: 83, level: 1 },
        { moveId: 84, level: 17 },
        { moveId: 82, level: 28 },
        { moveId: 4, level: 39 },
        { moveId: 81, level: 53 },
      ],
      machines: [TM_ICE_BEAM, TM_THUNDERBOLT, TM_FLAMETHROWER, TM_EARTHQUAKE, HM_CUT, HM_SURF, HM_STRENGTH],
    },
  ],
}

/** 1세대 4기 추천 배치 (입문자용 표준 구성) */
export const RECOMMENDED_MOVESET: Record<number, number[]> = {
  1: [10, 11, 21, 13],
  2: [11, 12, 21, 13],
  3: [12, 21, 13, 72],
  4: [31, 42, 72, 1],
  5: [31, 42, 72, 1],
  6: [31, 43, 42, 72],
  7: [52, 71, 1, 21],
  25: [62, 3, 84, 90],
  133: [1, 3, 60, 21],
  134: [52, 71, 21, 51],
  135: [62, 84, 61, 3],
  136: [31, 42, 30, 1],
  150: [81, 71, 62, 4],
}
