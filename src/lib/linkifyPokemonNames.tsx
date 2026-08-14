import type { ReactNode } from 'react'
import { PokemonLink } from '../components/guide/PokemonLink'

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

// 도감 전체(1000종+)를 대상으로 하면 alternation 패턴이 매우 길어진다. 같은 맵으로
// 반복 호출되는 페이지에서 매번 컴파일하지 않도록 맵 단위로 캐시한다.
const patternCache = new WeakMap<ReadonlyMap<string, number>, RegExp>()

function getPattern(nameToId: ReadonlyMap<string, number>): RegExp | undefined {
  const cached = patternCache.get(nameToId)
  if (cached) return cached
  const names = [...nameToId.keys()]
  if (names.length === 0) return undefined
  // 긴 이름이 짧은 이름에 가려지지 않도록 길이 내림차순으로 매칭한다.
  names.sort((a, b) => b.length - a.length)
  const pattern = new RegExp(`(${names.map(escapeRegExp).join('|')})`, 'g')
  patternCache.set(nameToId, pattern)
  return pattern
}

/**
 * 표/문장 속 포켓몬 이름을 찾아 자동으로 PokemonLink로 바꿔준다. 긴 이름이 짧은 이름에
 * 가려지지 않도록(예: "붉은 갸라도스" vs "갸라도스") 내부에서 길이 내림차순으로 매칭한다.
 */
export function linkifyPokemonNames(text: string, nameToId: ReadonlyMap<string, number>): ReactNode {
  const pattern = getPattern(nameToId)
  if (!pattern) return text
  const parts = text.split(pattern)
  return parts.map((part, i) => {
    const id = nameToId.get(part)
    return id ? <PokemonLink key={i} id={id} label={part} /> : part
  })
}
