import { Link, useParams } from 'react-router-dom'
import { Card } from '../components/ui/Card'
import { TypeBadge } from '../components/pokemon/TypeBadge'
import { StatChart } from '../components/pokemon/StatChart'
import { TypeDefense } from '../components/pokemon/TypeDefense'
import { EvolutionTree } from '../components/pokemon/EvolutionTree'
import { SAMPLE_POKEMON, findEvolutionLine, findSamplePokemon } from '../data/sample/pokemon.sample'
import { COLOR } from '../lib/typeChart'

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
  const dexNumber = String(pokemon.id).padStart(3, '0')
  const accentColor = COLOR[pokemon.types[0]]

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      <Link to="/pokedex" className="mb-3 inline-block text-sm font-bold text-ink-muted hover:text-ink">
        ← 도감으로
      </Link>

      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        <Card className="relative flex items-center justify-center overflow-hidden p-6" style={{ backgroundColor: `${accentColor}1a` }}>
          <span className="absolute inset-0 flex items-center justify-center text-8xl font-black text-ink/5 select-none">
            {dexNumber}
          </span>
          {(pokemon.artworkUrl ?? pokemon.spriteUrl) && (
            <img
              src={pokemon.artworkUrl ?? pokemon.spriteUrl}
              alt={pokemon.nameKo}
              width={180}
              height={180}
              className="relative z-10"
            />
          )}
        </Card>

        <div className="flex flex-col gap-3">
          <div>
            <span className="text-sm font-bold text-ink-faint">#{dexNumber}</span>
            <h1 className="text-2xl font-black text-ink">
              {pokemon.nameKo} <span className="text-base font-bold text-ink-faint">{pokemon.nameEn}</span>
            </h1>
          </div>
          <div className="flex gap-2">
            {pokemon.types.map((type) => (
              <TypeBadge key={type} type={type} />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2">
            <Card className="p-3">
              <p className="text-xs font-bold text-ink-faint">분류</p>
              <p className="text-sm font-bold text-ink">{pokemon.category ?? '-'}</p>
            </Card>
            <Card className="p-3">
              <p className="text-xs font-bold text-ink-faint">키</p>
              <p className="text-sm font-bold text-ink">{pokemon.heightM ? `${pokemon.heightM} m` : '-'}</p>
            </Card>
            <Card className="p-3">
              <p className="text-xs font-bold text-ink-faint">몸무게</p>
              <p className="text-sm font-bold text-ink">{pokemon.weightKg ? `${pokemon.weightKg} kg` : '-'}</p>
            </Card>
          </div>
        </div>
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        <Card className="p-4">
          <h2 className="mb-3 text-sm font-black text-ink-faint">종족값 (스탯)</h2>
          <StatChart stats={pokemon.stats} />
        </Card>

        <Card className="p-4">
          <h2 className="mb-3 text-sm font-black text-ink-faint">방어 상성</h2>
          <TypeDefense types={pokemon.types} />
        </Card>
      </div>

      {evolutionLine && (
        <Card className="p-4">
          <h2 className="mb-3 text-sm font-black text-ink-faint">진화</h2>
          <EvolutionTree stages={evolutionLine} currentPokemonId={pokemon.id} renderPokemon={findSamplePokemon} />
        </Card>
      )}
    </div>
  )
}
