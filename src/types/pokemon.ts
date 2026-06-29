import type { TypeName } from './type-chart'

export interface PokemonStats {
  hp: number
  attack: number
  defense: number
  specialAttack: number
  specialDefense: number
  speed: number
}

export interface MegaForm {
  label: string // 예: "메가리자몽 X"
  types: TypeName[]
  stats: PokemonStats
  spriteUrl?: string
  artworkUrl?: string
}

export interface Ability {
  nameKo: string
  nameEn: string
  effectKo?: string
  isHidden: boolean
}

export interface Pokemon {
  id: number // PokeAPI 고유 포켓몬 ID. 리전폼은 전국도감 번호와 다름 (예: 알로라 라이츄 = 10100)
  dexNumber: number // 전국도감 번호. 같은 종의 리전폼끼리는 값이 같다
  generation: number // 처음 등장한 세대 (1~9)
  nameKo: string
  nameEn: string
  formLabel?: string // "알로라" | "가라르" | "히스이" | "팔데아" 등. 기본형이면 없음
  types: TypeName[] // 1~2개
  stats: PokemonStats
  category?: string
  heightM?: number
  weightKg?: number
  flavorText?: string
  spriteUrl?: string
  artworkUrl?: string
  megaForms?: MegaForm[] // 실존하는 메가진화만 (배틀 중 임시 폼이라 별도 도감 카드 없이 상세 페이지에 표기)
  abilities?: Ability[]
}

export interface EvolutionStage {
  pokemonId: number
  children?: EvolutionStage[] // 분기 진화(이브이 등)는 children이 2개 이상
  trigger?: string // 예: "레벨 16", "달의돌"
  triggerIconUrl?: string // 진화의돌 등 아이템 트리거일 때의 아이콘 (레벨업/교환 등은 없음)
}
