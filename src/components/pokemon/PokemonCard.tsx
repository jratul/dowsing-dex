import { Link } from 'react-router-dom'
import type { Pokemon } from '../../types/pokemon'
import { COLOR } from '../../lib/typeChart'
import { Card } from '../ui/Card'
import { SpriteImage } from './SpriteImage'
import { TypeBadge } from './TypeBadge'

export interface PokemonCardProps {
  pokemon: Pick<Pokemon, 'id' | 'dexNumber' | 'nameKo' | 'formLabel' | 'types' | 'spriteUrl'>
  to: string
  state?: object
}

export function PokemonCard({ pokemon, to, state }: PokemonCardProps) {
  const accentColor = COLOR[pokemon.types[0]]

  return (
    <Card asChild accentColor={accentColor} className="block cursor-pointer transition-transform hover:-translate-y-0.5">
      <Link to={to} state={state}>
        <div className="flex flex-col items-center gap-2 p-3">
          <span className="self-start text-xs font-bold text-ink-faint">#{String(pokemon.dexNumber).padStart(3, '0')}</span>
          <SpriteImage src={pokemon.spriteUrl} alt={pokemon.nameKo} width={96} height={96} className="h-32 w-32" />
          <span className="text-sm font-bold text-ink">
            {pokemon.nameKo}
            {pokemon.formLabel && <span className="text-ink-faint"> ({pokemon.formLabel})</span>}
          </span>
          <div className="flex gap-1.5">
            {pokemon.types.map((type) => (
              <TypeBadge key={type} type={type} size="sm" />
            ))}
          </div>
        </div>
      </Link>
    </Card>
  )
}
