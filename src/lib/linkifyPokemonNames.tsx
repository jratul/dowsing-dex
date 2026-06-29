import type { ReactNode } from 'react'
import { PokemonLink } from '../components/guide/PokemonLink'

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/**
 * 표/문장 속 포켓몬 이름을 찾아 자동으로 PokemonLink로 바꿔준다. nameToId는 긴 이름이
 * 짧은 이름에 가려지지 않도록(예: "붉은 갸라도스" vs "갸라도스") 호출 시 길이 내림차순으로
 * 정렬되어 있어야 한다.
 */
export function linkifyPokemonNames(text: string, nameToId: ReadonlyMap<string, number>): ReactNode {
  const names = [...nameToId.keys()]
  if (names.length === 0) return text
  const pattern = new RegExp(`(${names.map(escapeRegExp).join('|')})`, 'g')
  const parts = text.split(pattern)
  return parts.map((part, i) => {
    const id = nameToId.get(part)
    return id ? <PokemonLink key={i} id={id} label={part} /> : part
  })
}
