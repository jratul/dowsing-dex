import { ALL_ABILITIES } from '../data/abilities.generated'
import { PAST_ABILITIES, PAST_TYPES } from '../data/pokedex/past-types-abilities.generated'
import type { Ability } from '../types/pokemon'
import type { TypeName } from '../types/type-chart'

/**
 * 도감 데이터의 타입·특성은 현재 값이다. 보고 있는 세대의 값으로 되돌린다.
 *
 * 이력 데이터(PAST_*)의 `untilGeneration` 은 "이 값이 마지막으로 쓰인 세대"다. 보고 있는 세대
 * 이상인 이력 중 가장 이른 것이 그 세대의 값이고, 해당하는 이력이 없으면 현재 값 그대로다.
 */

export function typesForGeneration(
  pokemonId: number,
  current: TypeName[],
  generation: number,
): { types: TypeName[]; changed: boolean } {
  const past = PAST_TYPES[pokemonId]?.find((p) => p.untilGeneration >= generation)
  return past ? { types: past.types, changed: true } : { types: current, changed: false }
}

const ABILITY_BY_API_NAME = new Map(ALL_ABILITIES.map((a) => [a.apiName, a]))

/** 특성은 3세대에 생겼고, 숨겨진 특성은 5세대에 생겼다 */
export const ABILITY_INTRODUCED_GENERATION = 3

export function abilitiesForGeneration(
  pokemonId: number,
  current: Ability[],
  generation: number,
): { abilities: Ability[]; changed: boolean } {
  if (generation < ABILITY_INTRODUCED_GENERATION) return { abilities: [], changed: current.length > 0 }

  // 현재 특성을 슬롯으로 펼친다 — 일반 특성은 나온 순서대로 1·2번, 숨겨진 특성은 3번
  const slots = new Map<number, Ability>()
  current.filter((a) => !a.isHidden).forEach((a, i) => slots.set(i + 1, a))
  const hidden = current.find((a) => a.isHidden)
  if (hidden) slots.set(3, hidden)

  let changed = false
  const history = PAST_ABILITIES[pokemonId] ?? []
  for (const slot of [1, 2, 3]) {
    const past = history.find((p) => p.slot === slot && p.untilGeneration >= generation)
    if (!past) continue
    // 4세대 이전에 숨겨진 특성이 없는 건 모든 종이 똑같아 알릴 거리가 아니다 (아래에서 일괄 제거)
    if (!(slot === 3 && past.ability === null && generation < 5)) changed = true
    if (past.ability === null) {
      slots.delete(slot)
      continue
    }
    const entry = ABILITY_BY_API_NAME.get(past.ability)
    slots.set(slot, {
      nameKo: entry?.nameKo ?? entry?.nameEn ?? past.ability,
      nameEn: past.ability,
      effectKo: entry?.descKo ?? undefined,
      isHidden: slot === 3,
    })
  }
  // 이력 데이터에 빠진 종이 있어도 5세대 이전에는 숨겨진 특성이 존재하지 않았다
  if (generation < 5) slots.delete(3)

  return { abilities: [...slots.entries()].sort(([a], [b]) => a - b).map(([, a]) => a), changed }
}
