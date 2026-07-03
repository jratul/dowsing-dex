import type { Learnset, Move } from '../../types/move'
import { ALL_MOVES } from '../moves/all-moves.generated'

const MOVE_MAP = new Map(ALL_MOVES.map((m) => [m.id, m]))

/** 전체 포켓몬의 기술 사전. PokeAPI 기반으로 scripts/fetch-pokedex.mjs가 생성한다. */
export function findMove(id: number): Move | undefined {
  return MOVE_MAP.get(id)
}

// 포켓몬별 학습셋은 1082종을 한 파일에 합치면 너무 커서(gzip 후에도 500KB+) 포켓몬 1종당
// 파일로 나눠뒀다. import.meta.glob의 동적 import로 상세 페이지를 볼 때만 해당 포켓몬의
// 학습셋 파일을 받아오게 한다.
const learnsetModules = import.meta.glob<{ LEARNSETS: Learnset[]; RECOMMENDED_MOVESET: number[] }>(
  '../moves/by-id/*.generated.ts',
)

export async function loadLearnsets(
  pokemonId: number,
): Promise<{ learnsets: Learnset[]; recommended: number[] } | undefined> {
  const importModule = learnsetModules[`../moves/by-id/${pokemonId}.generated.ts`]
  if (!importModule) return undefined
  const mod = await importModule()
  return { learnsets: mod.LEARNSETS, recommended: mod.RECOMMENDED_MOVESET }
}
