export type StatKey = 'attack' | 'defense' | 'speed' | 'special-attack' | 'special-defense'

export interface Nature {
  id: number
  en: string
  ko: string
  statUp: StatKey | null
  statDown: StatKey | null
}

export const STAT_LABEL: Record<StatKey, string> = {
  attack: '공격',
  defense: '방어',
  speed: '스피드',
  'special-attack': '특공',
  'special-defense': '특방',
}

export const STAT_FLAVOR: Record<StatKey, string> = {
  attack: '매운맛',
  defense: '신맛',
  speed: '단맛',
  'special-attack': '건조한맛',
  'special-defense': '쓴맛',
}

// Gen 3~ 도입, 5x5 행렬 기준 (상승 스탯 × 하락 스탯)
export const NATURES: Nature[] = [
  // 공격 계열
  { id: 1, en: 'Hardy', ko: '노력', statUp: null, statDown: null },
  { id: 2, en: 'Lonely', ko: '외로움', statUp: 'attack', statDown: 'defense' },
  { id: 3, en: 'Brave', ko: '용감', statUp: 'attack', statDown: 'speed' },
  { id: 4, en: 'Adamant', ko: '고집', statUp: 'attack', statDown: 'special-attack' },
  { id: 5, en: 'Naughty', ko: '개구쟁이', statUp: 'attack', statDown: 'special-defense' },
  // 방어 계열
  { id: 6, en: 'Bold', ko: '대담', statUp: 'defense', statDown: 'attack' },
  { id: 7, en: 'Docile', ko: '온순', statUp: null, statDown: null },
  { id: 8, en: 'Relaxed', ko: '무사태평', statUp: 'defense', statDown: 'speed' },
  { id: 9, en: 'Impish', ko: '장난꾸러기', statUp: 'defense', statDown: 'special-attack' },
  { id: 10, en: 'Lax', ko: '촐랑', statUp: 'defense', statDown: 'special-defense' },
  // 스피드 계열
  { id: 11, en: 'Timid', ko: '겁쟁이', statUp: 'speed', statDown: 'attack' },
  { id: 12, en: 'Hasty', ko: '성급', statUp: 'speed', statDown: 'defense' },
  { id: 13, en: 'Serious', ko: '성실', statUp: null, statDown: null },
  { id: 14, en: 'Jolly', ko: '명랑', statUp: 'speed', statDown: 'special-attack' },
  { id: 15, en: 'Naive', ko: '천진난만', statUp: 'speed', statDown: 'special-defense' },
  // 특공 계열
  { id: 16, en: 'Modest', ko: '조심', statUp: 'special-attack', statDown: 'attack' },
  { id: 17, en: 'Mild', ko: '의젓', statUp: 'special-attack', statDown: 'defense' },
  { id: 18, en: 'Quiet', ko: '냉정', statUp: 'special-attack', statDown: 'speed' },
  { id: 19, en: 'Bashful', ko: '수줍음', statUp: null, statDown: null },
  { id: 20, en: 'Rash', ko: '덜렁', statUp: 'special-attack', statDown: 'special-defense' },
  // 특방 계열
  { id: 21, en: 'Calm', ko: '차분', statUp: 'special-defense', statDown: 'attack' },
  { id: 22, en: 'Gentle', ko: '얌전', statUp: 'special-defense', statDown: 'defense' },
  { id: 23, en: 'Sassy', ko: '건방', statUp: 'special-defense', statDown: 'speed' },
  { id: 24, en: 'Careful', ko: '신중', statUp: 'special-defense', statDown: 'special-attack' },
  { id: 25, en: 'Quirky', ko: '변덕', statUp: null, statDown: null },
]

export const NEUTRAL_NATURES = NATURES.filter((n) => n.statUp === null)
export const EFFECTIVE_NATURES = NATURES.filter((n) => n.statUp !== null)

// 5x5 행렬: [상승 스탯][하락 스탯] = Nature
export const STAT_KEYS: StatKey[] = ['attack', 'defense', 'speed', 'special-attack', 'special-defense']

export function getNatureByStats(up: StatKey, down: StatKey): Nature | undefined {
  return NATURES.find((n) => n.statUp === up && n.statDown === down)
}
