import type { EvolutionStage } from '../../types/pokemon'
import { GEN1_EVOLUTION_LINES, GEN1_POKEMON } from '../pokedex/gen1.generated'

/** 1세대(관동지방) 151종 전체 도감 데이터. PokeAPI 기반으로 scripts/fetch-gen1.mjs가 생성한다. */
export const SAMPLE_POKEMON = GEN1_POKEMON

const EVOLUTION_LINES: EvolutionStage[][] = GEN1_EVOLUTION_LINES

export function findSamplePokemon(id: number) {
  const pokemon = SAMPLE_POKEMON.find((p) => p.id === id)
  return { nameKo: pokemon?.nameKo ?? '???', spriteUrl: pokemon?.spriteUrl, artworkUrl: pokemon?.artworkUrl }
}

function containsId(stage: EvolutionStage, id: number): boolean {
  if (stage.pokemonId === id) return true
  return stage.children?.some((child) => containsId(child, id)) ?? false
}

/** 주어진 포켓몬 ID가 속한 진화 체인을 찾는다. 없으면 undefined. */
export function findEvolutionLine(pokemonId: number): EvolutionStage[] | undefined {
  const stage = EVOLUTION_LINES.find((line) => line.some((s) => containsId(s, pokemonId)))
  return stage
}
