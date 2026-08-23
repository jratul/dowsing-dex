import type { EvolutionStage } from '../../types/pokemon'
import { ALL_EVOLUTION_LINES, ALL_POKEMON } from '../pokedex/pokedex.generated'

function fixSpriteUrl(url?: string): string | undefined {
  return url?.replace(
    'https://cdn.statically.io/gh/PokeAPI/sprites/master/',
    'https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/',
  )
}

/** 1~9세대(전국도감 1025종 + 리전폼) 전체 도감 데이터. PokeAPI 기반으로 scripts/fetch-pokedex.mjs가 생성한다. */
export const SAMPLE_POKEMON = ALL_POKEMON.map((p) => ({
  ...p,
  spriteUrl: fixSpriteUrl(p.spriteUrl),
  artworkUrl: fixSpriteUrl(p.artworkUrl),
}))

const EVOLUTION_LINES: EvolutionStage[][] = ALL_EVOLUTION_LINES

export function findSamplePokemon(id: number) {
  const pokemon = SAMPLE_POKEMON.find((p) => p.id === id)
  // formLabel(알로라/히스이 등)이 없으면 리전폼과 원종이 같은 이름으로 보여 구분되지 않는다.
  return {
    nameKo: pokemon?.nameKo ?? '???',
    formLabel: pokemon?.formLabel,
    spriteUrl: pokemon?.spriteUrl,
    artworkUrl: pokemon?.artworkUrl,
  }
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
