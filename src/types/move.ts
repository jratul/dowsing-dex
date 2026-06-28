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

/** 1세대 내 게임 버전. 대부분 레드·블루와 학습세트가 같지만 피카츄(옐로우)는 일부 다르다. */
export type GameVersion = '레드·블루' | '피카츄'

/** 세대 구분. 현재는 1세대 데이터만 있지만, 추후 세대가 늘어날 것을 고려해 둔 탭 단위. */
export type Generation = '1세대'

export interface LevelUpMove {
  moveId: number
  level: number
}

export interface MachineMove {
  moveId: number
  machine: 'TM' | 'HM'
  number: number
}

export interface Learnset {
  version: GameVersion
  levelUp: LevelUpMove[]
  machines: MachineMove[]
}
