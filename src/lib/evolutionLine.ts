import type { EvolutionStage } from '../types/pokemon'

/**
 * 보고 있는 세대에 아직 없던 포켓몬을 진화 트리에서 뺀다.
 *
 * 1세대 탭에서 삐삐를 보는데 2세대에 나온 삐가 앞에 붙어 있거나, 이브이 분기에 님피아가
 * 섞여 있으면 당시 게임과 다르다. 빠진 단계의 자식은 한 칸 위로 올린다 — 삐가 빠지면
 * 삐삐가 뿌리가 되고, 삐삐 → 픽시 진화 조건은 그대로 남는다.
 * 뿌리로 올라온 단계는 진화 조건을 그리지 않으므로 trigger 를 지운다.
 */
export function filterEvolutionByGeneration(
  stages: EvolutionStage[],
  generation: number,
  generationOf: (pokemonId: number) => number | undefined,
): EvolutionStage[] {
  const exists = (id: number) => (generationOf(id) ?? 0) <= generation

  const walk = (stage: EvolutionStage): EvolutionStage[] => {
    const children = (stage.children ?? []).flatMap(walk)
    if (exists(stage.pokemonId)) return [{ ...stage, children }]
    // 이 단계가 없으면 자식들이 이 자리를 대신한다. 진화 조건은 빠진 단계에서 오는 것이라 버린다.
    return children.map((child) => ({ ...child, trigger: undefined, triggerIconUrl: undefined, triggerByGeneration: undefined }))
  }
  return stages.flatMap(walk)
}
