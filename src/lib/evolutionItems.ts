import { ALL_EVOLUTION_LINES, ALL_POKEMON } from '../data/pokedex/pokedex.generated'
import { EVOLUTION_ITEMS, BATTLE_ITEMS } from '../data/items.generated'
import type { EvolutionStage } from '../types/pokemon'

export interface ItemEvolution {
  fromId: number
  from: string
  toId: number
  to: string
  /** 아이템 말고 더 붙는 조건. "교환", "밤", "수컷" 등. 없으면 빈 문자열 */
  condition: string
}

const POKE = new Map(ALL_POKEMON.map((p) => [p.id, p]))

/** 리전폼은 원종과 이름이 같아 그냥 두면 구분되지 않는다. */
function displayName(id: number): string {
  const p = POKE.get(id)
  if (!p) return `#${id}`
  return p.formLabel ? `${p.formLabel} ${p.nameKo}` : p.nameKo
}

/** 진화 트리를 (부모 → 자식) 쌍으로 편다. */
function collectPairs(): { from: number; to: number; trigger: string }[] {
  const out: { from: number; to: number; trigger: string }[] = []
  const walk = (node: EvolutionStage, parent: EvolutionStage | null) => {
    if (parent && node.trigger) out.push({ from: parent.pokemonId, to: node.pokemonId, trigger: node.trigger })
    for (const child of node.children ?? []) walk(child, node)
  }
  for (const line of ALL_EVOLUTION_LINES) for (const root of line) walk(root, null)
  return out
}

// 이름이 긴 것부터 본다. 짧은 이름이 긴 이름 안에 들어 있을 때 잘못 잡히는 것을 막는다.
const ITEM_NAMES = [...new Set([...EVOLUTION_ITEMS, ...BATTLE_ITEMS].map((i) => i.nameKo).filter(Boolean))].sort(
  (a, b) => (b as string).length - (a as string).length,
) as string[]

/**
 * 트리거 문자열에서 아이템 부분을 걷어내고 남은 조건만 돌려준다.
 *   "불꽃의돌 사용"              → ''
 *   "교환 · 소지: 금속코트"       → '교환'
 *   "레벨업 · 밤 · 소지: 예리한손톱" → '레벨업 · 밤'
 *   "각성의돌 사용 · 수컷"        → '수컷'
 */
function conditionOf(trigger: string, item: string): string {
  return trigger
    .split(' · ')
    .filter((part) => !part.includes(item))
    .join(' · ')
    .trim()
}

/** 아이템 한글명 → 그 아이템으로 일어나는 진화 목록. */
export const EVOLUTIONS_BY_ITEM: ReadonlyMap<string, ItemEvolution[]> = (() => {
  const map = new Map<string, ItemEvolution[]>()
  const seen = new Set<string>()
  for (const pair of collectPairs()) {
    const item = ITEM_NAMES.find((name) => pair.trigger.includes(name))
    if (!item) continue
    const key = `${item}|${pair.from}|${pair.to}`
    if (seen.has(key)) continue
    seen.add(key)
    const list = map.get(item) ?? []
    list.push({
      fromId: pair.from,
      from: displayName(pair.from),
      toId: pair.to,
      to: displayName(pair.to),
      condition: conditionOf(pair.trigger, item),
    })
    map.set(item, list)
  }
  // 원종을 먼저, 리전폼(10000번대)을 뒤에 둔다.
  for (const list of map.values())
    list.sort((a, b) => (POKE.get(a.fromId)?.dexNumber ?? 0) - (POKE.get(b.fromId)?.dexNumber ?? 0) || a.fromId - b.fromId)
  return map
})()

export function evolutionsForItem(nameKo: string | null): ItemEvolution[] {
  return (nameKo && EVOLUTIONS_BY_ITEM.get(nameKo)) || []
}
