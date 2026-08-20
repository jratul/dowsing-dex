import type { ReactNode } from 'react'
import { PokemonLink } from '../components/guide/PokemonLink'
import { MoveLink } from '../components/guide/MoveLink'

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/** 포켓몬 맵 + 기술 집합 조합마다 정규식을 한 번만 만들어 재사용한다. */
const patternCache = new WeakMap<ReadonlyMap<string, number>, Map<ReadonlySet<string>, RegExp>>()

function getPattern(
  nameToId: ReadonlyMap<string, number>,
  moveNames: ReadonlySet<string>,
): RegExp | undefined {
  let perMap = patternCache.get(nameToId)
  if (!perMap) {
    perMap = new Map()
    patternCache.set(nameToId, perMap)
  }
  const cached = perMap.get(moveNames)
  if (cached) return cached

  const tokens = [...nameToId.keys(), ...moveNames]
  if (tokens.length === 0) return undefined
  // 긴 이름이 짧은 이름에 가려지지 않게 한다.
  // 예) "바다회오리"가 "회오리"로, "번개펀치"가 "번개"로 잘리는 것을 막는다.
  tokens.sort((a, b) => b.length - a.length)
  const pattern = new RegExp(`(${tokens.map(escapeRegExp).join('|')})`, 'g')
  perMap.set(moveNames, pattern)
  return pattern
}

/**
 * 공략 본문에서 포켓몬 이름은 `PokemonLink`로, 기술 이름은 `MoveLink`로 한 번에 바꾼다.
 *
 * 기술은 **화이트리스트**로 받는다. 전체 기술(797종)을 대상으로 하면 "역할"·"방어"처럼
 * 일반 명사와 겹치는 이름이나 "분노의 호수"의 "분노", "독침붕"의 "독침"처럼 다른 낱말의
 * 일부가 잘못 링크된다. 그 공략에 실제로 등장하는 기술만 넘기는 것이 안전하다.
 */
export function linkifyGuideText(
  text: string,
  nameToId: ReadonlyMap<string, number>,
  moveNames: ReadonlySet<string>,
): ReactNode {
  const pattern = getPattern(nameToId, moveNames)
  if (!pattern) return text
  return text.split(pattern).map((part, i) => {
    const id = nameToId.get(part)
    if (id) return <PokemonLink key={i} id={id} label={part} />
    if (moveNames.has(part)) return <MoveLink key={i} name={part} />
    return part
  })
}
