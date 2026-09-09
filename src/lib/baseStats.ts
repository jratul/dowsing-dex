import type { PokemonStats } from '../types/pokemon'
import { BASE_STAT_HISTORY } from '../data/pokedex/baseStatHistory'

/**
 * 보고 있는 세대에 맞는 종족값을 고른다.
 *
 * PokeAPI 는 현재 값만 주는데, 6·7세대에 여러 종이 상향됐고 9세대에 크레세리아가
 * 하향됐다. 그대로 두면 2세대 탭에서도 9세대 수치가 보인다.
 */
export function statsForGeneration(
  dexNumber: number,
  current: PokemonStats,
  generation?: number,
): { stats: PokemonStats; changed: boolean } {
  const history = BASE_STAT_HISTORY[dexNumber]
  if (!history || generation === undefined || generation >= history.fromGeneration) {
    return { stats: current, changed: false }
  }
  return { stats: history.previous, changed: true }
}
