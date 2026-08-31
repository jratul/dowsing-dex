import type { Learnset, Move } from '../../types/move'
import { ALL_MOVES } from '../moves/all-moves.generated'
import { MOVE_DESCRIPTIONS } from '../moves/move-descriptions.generated'
import { canonicalMoveName } from '../moves/move-aliases'

const MOVE_MAP = new Map(
  ALL_MOVES.map((m) => [m.id, MOVE_DESCRIPTIONS[m.id] ? { ...m, effectKo: MOVE_DESCRIPTIONS[m.id] } : m]),
)

const MOVE_NAME_MAP = new Map([...MOVE_MAP.values()].map((m) => [m.nameKo, m]))

/** 전체 포켓몬의 기술 사전. PokeAPI 기반으로 scripts/fetch-pokedex.mjs가 생성한다. */
export function findMove(id: number): Move | undefined {
  return MOVE_MAP.get(id)
}

/**
 * 한국어 기술명으로 기술을 찾는다. '기술A / 기술B' 형태의 복합 표기도 처리한다.
 * 세대가 바뀌며 개명된 기술(락클라임 → 록클라임)은 옛 표기로도 찾아진다.
 */
export function findMoveByName(nameKo: string): Move | undefined {
  for (const part of nameKo.split(' / ')) {
    const key = part.trim()
    const found = MOVE_NAME_MAP.get(key) ?? MOVE_NAME_MAP.get(canonicalMoveName(key))
    if (found) return found
  }
  return undefined
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
