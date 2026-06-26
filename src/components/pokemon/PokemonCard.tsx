import type { Pokemon } from '../../types/pokemon'
import { COLOR } from '../../lib/typeChart'
import { Card } from '../ui/Card'
import { TypeBadge } from './TypeBadge'

export interface PokemonCardProps {
  pokemon: Pick<Pokemon, 'id' | 'nameKo' | 'types' | 'spriteUrl'>
  onClick?: (id: number) => void
}

export function PokemonCard({ pokemon, onClick }: PokemonCardProps) {
  const accentColor = COLOR[pokemon.types[0]]

  return (
    <Card
      accentColor={accentColor}
      onClick={onClick ? () => onClick(pokemon.id) : undefined}
      className="cursor-pointer p-3 transition-transform hover:-translate-y-0.5"
    >
      <div className="flex flex-col items-center gap-2">
        <span className="self-start text-xs font-bold text-ink-faint">#{String(pokemon.id).padStart(3, '0')}</span>
        {pokemon.spriteUrl ? (
          <img src={pokemon.spriteUrl} alt={pokemon.nameKo} width={72} height={72} className="h-18 w-18" />
        ) : (
          <div className="h-18 w-18" />
        )}
        <span className="text-sm font-bold text-ink">{pokemon.nameKo}</span>
        <div className="flex gap-1.5">
          {pokemon.types.map((type) => (
            <TypeBadge key={type} type={type} size="sm" />
          ))}
        </div>
      </div>
    </Card>
  )
}
