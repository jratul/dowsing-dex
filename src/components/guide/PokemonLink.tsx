import { Link } from 'react-router-dom'
import { findSamplePokemon } from '../../data/sample/pokemon.sample'

export interface PokemonLinkProps {
  id: number
  label?: string
}

/** 본문 중간에 끼워 넣는 인라인 포켓몬 링크. 아이콘 스프라이트 + 이름을 함께 보여준다. */
export function PokemonLink({ id, label }: PokemonLinkProps) {
  const pokemon = findSamplePokemon(id)
  return (
    <Link to={`/pokemon/${id}`} className="inline-flex items-center gap-0.5 align-middle font-bold text-brand-red hover:underline">
      {pokemon.spriteUrl && (
        <img
          src={pokemon.spriteUrl}
          alt=""
          width={20}
          height={20}
          style={{ imageRendering: 'pixelated' }}
          className="inline-block"
        />
      )}
      {label ?? pokemon.nameKo}
    </Link>
  )
}
