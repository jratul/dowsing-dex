import { Link, useNavigate, useParams } from 'react-router-dom'
import { Card } from '../components/ui/Card'
import { TypeBadge } from '../components/pokemon/TypeBadge'
import { StatChart } from '../components/pokemon/StatChart'
import { TypeDefense } from '../components/pokemon/TypeDefense'
import { EvolutionTree } from '../components/pokemon/EvolutionTree'
import { MoveList } from '../components/pokemon/MoveList'
import { SAMPLE_POKEMON, findEvolutionLine, findSamplePokemon } from '../data/sample/pokemon.sample'
import { LEARNSETS, RECOMMENDED_MOVESET, findMove } from '../data/sample/moves.sample'
import { COLOR } from '../lib/typeChart'
import { cn } from '../lib/cn'

export function PokemonDetailPage() {
  const navigate = useNavigate()
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
  const learnsets = LEARNSETS[pokemon.id]
  const dexNumber = String(pokemon.dexNumber).padStart(3, '0')
  const accentColor = COLOR[pokemon.types[0]]

  const pokemonIndex = SAMPLE_POKEMON.findIndex((p) => p.id === pokemon.id)
  const prevPokemon = pokemonIndex > 0 ? SAMPLE_POKEMON[pokemonIndex - 1] : undefined
  const nextPokemon = pokemonIndex < SAMPLE_POKEMON.length - 1 ? SAMPLE_POKEMON[pokemonIndex + 1] : undefined

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      <div className="mb-3 flex items-center justify-between">
        <Link to="/pokedex" className="inline-block text-sm font-bold text-ink-muted hover:text-ink">
          ← 도감으로
        </Link>
        <div className="flex gap-2">
          <Link
            to={prevPokemon ? `/pokemon/${prevPokemon.id}` : '#'}
            aria-disabled={!prevPokemon}
            className={cn(
              'rounded-chip border border-border-strong px-3 py-1.5 text-sm font-bold',
              prevPokemon ? 'text-ink hover:bg-surface-hover' : 'pointer-events-none text-ink-faint opacity-40',
            )}
          >
            ← 이전
          </Link>
          <Link
            to={nextPokemon ? `/pokemon/${nextPokemon.id}` : '#'}
            aria-disabled={!nextPokemon}
            className={cn(
              'rounded-chip border border-border-strong px-3 py-1.5 text-sm font-bold',
              nextPokemon ? 'text-ink hover:bg-surface-hover' : 'pointer-events-none text-ink-faint opacity-40',
            )}
          >
            다음 →
          </Link>
        </div>
      </div>

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
            <span className="text-sm font-bold text-ink-faint">
              #{dexNumber} · {pokemon.generation}세대{pokemon.formLabel && ` · ${pokemon.formLabel}`}
            </span>
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
          <EvolutionTree
            stages={evolutionLine}
            currentPokemonId={pokemon.id}
            renderPokemon={findSamplePokemon}
            onSelect={(targetId) => navigate(`/pokemon/${targetId}`)}
          />
        </Card>
      )}

      {learnsets && (
        <Card className="mt-6 p-4">
          <h2 className="mb-3 text-sm font-black text-ink-faint">기술</h2>
          <MoveList learnsets={learnsets} findMove={findMove} recommendedMoveIds={RECOMMENDED_MOVESET[pokemon.id]} />
        </Card>
      )}

      {pokemon.megaForms && pokemon.megaForms.length > 0 && (
        <Card className="mt-6 p-4">
          <h2 className="mb-3 text-sm font-black text-ink-faint">메가진화</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {pokemon.megaForms.map((mega) => (
              <div key={mega.label} className="flex flex-col items-center gap-2 rounded-card border border-border-strong p-4">
                {(mega.artworkUrl ?? mega.spriteUrl) && (
                  <img src={mega.artworkUrl ?? mega.spriteUrl} alt={mega.label} width={120} height={120} />
                )}
                <span className="text-sm font-bold text-ink">{mega.label}</span>
                <div className="flex gap-2">
                  {mega.types.map((type) => (
                    <TypeBadge key={type} type={type} />
                  ))}
                </div>
                <StatChart stats={mega.stats} />
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  )
}
