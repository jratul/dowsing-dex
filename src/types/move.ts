import type { TypeName } from './type-chart'

export type MoveCategory = '물리' | '특수' | '상태'

export interface Move {
  id: number
  nameKo: string
  nameEn: string
  type: TypeName
  category: MoveCategory
  power?: number
  accuracy?: number
  pp: number
}

/** 세대별 대표 게임판(예: 1세대 = 레드·블루). */
export type Generation = '1세대' | '2세대' | '3세대' | '4세대' | '5세대' | '6세대' | '7세대' | '8세대' | '9세대'

export interface LevelUpMove {
  moveId: number
  level: number
}

export interface MachineMove {
  moveId: number
  machine: 'TM' | 'HM'
  number: number
}

export interface TutorMove {
  moveId: number
}

export interface Learnset {
  generation: Generation
  version: string
  levelUp: LevelUpMove[]
  machines: MachineMove[]
  tutor: TutorMove[]
}

export interface TmEntry {
  generation: Generation
  version: string
  machine: 'TM' | 'HM'
  number: number
  moveId: number
  pokemonIds: number[]
}
