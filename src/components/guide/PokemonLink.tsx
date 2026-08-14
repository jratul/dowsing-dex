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
    // inline-flex로 감싸면 16px 스프라이트가 인라인 박스를 키워 링크 전체가 주변 문장보다
    // 위로 밀린다. 링크는 순수 인라인으로 두고 스프라이트만 align-middle로 맞춘다.
    <Link to={`/pokemon/${id}`} className="font-bold text-brand-red hover:underline">
      {pokemon.spriteUrl && (
        <img
          src={pokemon.spriteUrl}
          alt=""
          width={16}
          height={16}
          style={{ imageRendering: 'pixelated' }}
          className="mr-0.5 inline-block align-[-0.21em]"
        />
      )}
      {label ?? pokemon.nameKo}
    </Link>
  )
}
