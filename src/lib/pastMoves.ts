import { GENERATION_FIRST_ORDER, PAST_MOVE_VALUES, VERSION_ORDER } from '../data/moves/past-move-values.generated'
import type { Move } from '../types/move'
import type { TypeName } from '../types/type-chart'

/**
 * 1~3세대는 물리·특수가 기술이 아니라 타입으로 갈렸다(4세대 DP에서 분리).
 * 그래서 3세대 불꽃펀치는 특수, 4세대부터 물리다.
 */
const PHYSICAL_TYPES_BEFORE_GEN4 = new Set<TypeName>(['노말', '격투', '비행', '독', '땅', '바위', '벌레', '고스트', '강철'])

/**
 * 보고 있는 세대·버전의 위력·명중·PP·타입·분류로 되돌린다.
 *
 * 이력(PAST_MOVE_VALUES)의 각 항목은 "그 버전에서 바뀌기 직전 값"이다. 보고 있는 버전보다
 * 나중에 일어난 변경 중 그 필드가 담긴 가장 이른 항목이 당시 값이다.
 * 버전 라벨을 모르면 그 세대의 첫 버전으로 본다.
 */
export function moveForVersion(move: Move, generation: number, version?: string): Move {
  const order = (version ? VERSION_ORDER[version] : undefined) ?? GENERATION_FIRST_ORDER[generation]
  const history = PAST_MOVE_VALUES[move.id]
  if (order === undefined) return move

  const later = history?.filter((h) => h.changedAtOrder > order) ?? []
  const pick = <K extends 'type' | 'power' | 'pp' | 'accuracy'>(key: K) => later.find((h) => h[key] !== undefined)?.[key]

  const type = pick('type') ?? move.type
  const category =
    generation <= 3 && move.category !== '상태'
      ? PHYSICAL_TYPES_BEFORE_GEN4.has(type) ? '물리' : '특수'
      : move.category

  if (later.length === 0 && category === move.category) return move
  return {
    ...move,
    type,
    category,
    power: pick('power') ?? move.power,
    pp: pick('pp') ?? move.pp,
    accuracy: pick('accuracy') ?? move.accuracy,
  }
}
