import type { TypeName } from './type-chart'

export interface PokemonStats {
  hp: number
  attack: number
  defense: number
  specialAttack: number
  specialDefense: number
  speed: number
}

export interface Pokemon {
  id: number // 전국도감 번호 (= 스프라이트 ID)
  nameKo: string
  nameEn: string
  types: TypeName[] // 1~2개
  stats: PokemonStats
  category?: string
  heightM?: number
  weightKg?: number
  flavorText?: string
  spriteUrl?: string
  artworkUrl?: string
}

export interface EvolutionStage {
  pokemonId: number
  children?: EvolutionStage[] // 분기 진화(이브이 등)는 children이 2개 이상
  trigger?: string // 예: "레벨 16", "달의돌"
}
