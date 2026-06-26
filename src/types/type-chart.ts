export const TYPE_ORDER = [
  '노말', '불꽃', '물', '전기', '풀', '얼음', '격투', '독', '땅', '비행',
  '에스퍼', '벌레', '바위', '고스트', '드래곤', '악', '강철', '페어리',
] as const

export type TypeName = (typeof TYPE_ORDER)[number]

export interface TypeRelation {
  s: TypeName[] // 효과가 굉장하다 (×2)
  w: TypeName[] // 효과가 별로다 (×0.5)
  n: TypeName[] // 효과가 없다 (×0)
}

export type TypeChart = Record<TypeName, TypeRelation>

export interface TypeMatchup {
  type: TypeName
  m: number // 누적 배율: 0, 0.25, 0.5, 1, 2, 4
}

export type MatchupClass = 'weak' | 'resist' | 'immune' | 'neutral'
