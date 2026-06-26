import { Link, useParams } from 'react-router-dom'
import { Card } from '../components/ui/Card'
import { TypeBadge } from '../components/pokemon/TypeBadge'
import { StatChart } from '../components/pokemon/StatChart'
import { TypeDefense } from '../components/pokemon/TypeDefense'
import { EvolutionTree } from '../components/pokemon/EvolutionTree'
import { SAMPLE_POKEMON, findEvolutionLine, findSamplePokemon } from '../data/sample/pokemon.sample'

export function PokemonDetailPage() {
  const { id } = useParams<{ id: string }>()
  const pokemon = SAMPLE_POKEMON.find((p) => p.id === Number(id))

  if (!pokemon) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-6">
        <p className="text-sm text-ink-faint">존재하지 않는 포켓몬입니다.</p>
        <Link to="/pokedex" className="text-sm font-bold text-brand-red">
          도감으로 돌아가기
        </Link>
      </div>
    )
  }

  const evolutionLine = findEvolutionLine(pokemon.id)

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      <Card className="mb-6 flex flex-col items-center gap-3 p-6">
        <span className="text-sm font-bold text-ink-faint">#{String(pokemon.id).padStart(3, '0')}</span>
        {pokemon.spriteUrl && <img src={pokemon.spriteUrl} alt={pokemon.nameKo} width={120} height={120} />}
        <h1 className="text-2xl font-black text-ink">{pokemon.nameKo}</h1>
        {pokemon.category && <span className="text-sm text-ink-muted">{pokemon.category}</span>}
        <div className="flex gap-2">
          {pokemon.types.map((type) => (
            <TypeBadge key={type} type={type} />
          ))}
        </div>
      </Card>

      <Card className="mb-6 p-4">
        <h2 className="mb-3 text-sm font-black text-ink-faint">종족값</h2>
        <StatChart stats={pokemon.stats} />
      </Card>

      <Card className="mb-6 p-4">
        <h2 className="mb-3 text-sm font-black text-ink-faint">방어 상성</h2>
        <TypeDefense types={pokemon.types} />
      </Card>

      {evolutionLine && (
        <Card className="p-4">
          <h2 className="mb-3 text-sm font-black text-ink-faint">진화</h2>
          <EvolutionTree stages={evolutionLine} currentPokemonId={pokemon.id} renderPokemon={findSamplePokemon} />
        </Card>
      )}
    </div>
  )
}
