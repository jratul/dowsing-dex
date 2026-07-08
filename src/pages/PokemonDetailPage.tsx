import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Card } from '../components/ui/Card'
import { TypeBadge } from '../components/pokemon/TypeBadge'
import { StatChart } from '../components/pokemon/StatChart'
import { TypeDefense } from '../components/pokemon/TypeDefense'
import { EvolutionTree } from '../components/pokemon/EvolutionTree'
import { MoveList } from '../components/pokemon/MoveList'
import { EncounterLocationList } from '../components/pokemon/EncounterLocationList'
import { SpriteImage } from '../components/pokemon/SpriteImage'
import { SAMPLE_POKEMON, findEvolutionLine, findSamplePokemon } from '../data/sample/pokemon.sample'
import { findMove, loadLearnsets } from '../data/sample/moves.sample'
import { EvolutionMoveComparison } from '../components/pokemon/EvolutionMoveComparison'
import type { EvolutionStage } from '../types/pokemon'
import type { Generation, Learnset } from '../types/move'
import { COLOR } from '../lib/typeChart'
import { cn } from '../lib/cn'

function flattenEvolutionIds(stages: EvolutionStage[]): number[] {
  const ids: number[] = []
  const walk = (s: EvolutionStage) => { ids.push(s.pokemonId); s.children?.forEach(walk) }
  stages.forEach(walk)
  return ids
}

const GENERATION_ORDER: Generation[] = ['1세대', '2세대', '3세대', '4세대', '5세대', '6세대', '7세대', '8세대', '9세대']

export function PokemonDetailPage() {
  const location = useLocation()
  const { id } = useParams<{ id: string }>()
  const pokemonIndex = SAMPLE_POKEMON.findIndex((p) => p.id === Number(id))
  const pokemon = pokemonIndex >= 0 ? SAMPLE_POKEMON[pokemonIndex] : undefined
  const backTo = (location.state as { backTo?: string } | null)?.backTo ?? '/pokedex'

  const [moveData, setMoveData] = useState<{ learnsets: Learnset[]; recommended: number[] } | undefined>(undefined)
  const [selectedGeneration, setSelectedGeneration] = useState<Generation | null>(null)
  const [familyLearnsets, setFamilyLearnsets] = useState<Map<number, { learnsets: Learnset[]; recommended: number[] }>>(new Map())

  useEffect(() => {
    setMoveData(undefined)
    setSelectedGeneration(null)
    setFamilyLearnsets(new Map())
    if (!pokemon) return
    let cancelled = false
    loadLearnsets(pokemon.id).then((data) => {
      if (!cancelled) setMoveData(data)
    })
    return () => { cancelled = true }
  }, [pokemon, id])

  const learnsets = moveData?.learnsets

  // 기술 세대와 출현 세대의 합집합으로 공유 탭 목록을 구성한다.
  const moveGenerations: Generation[] = useMemo(
    () => GENERATION_ORDER.filter((gen) => learnsets?.some((ls) => ls.generation === gen) ?? false),
    [learnsets],
  )
  const encounterGenerations: number[] = useMemo(
    () => [...new Set((pokemon?.encounterLocations ?? []).map((l) => l.generation))].sort((a, b) => a - b),
    [pokemon?.encounterLocations],
  )

  // 합집합 세대 (숫자 기준, 1세대 → 1)
  const sharedGenerationNums: number[] = useMemo(() => {
    const fromMoves = moveGenerations.map((g) => Number(g.replace('세대', '')))
    const all = [...new Set([...fromMoves, ...encounterGenerations])].sort((a, b) => a - b)
    return all
  }, [moveGenerations, encounterGenerations])

  const evolutionLine = pokemon ? findEvolutionLine(pokemon.id) : undefined
  const evolutionFamilyIds = useMemo(
    () => (evolutionLine ? flattenEvolutionIds(evolutionLine) : pokemon ? [pokemon.id] : []),
    [evolutionLine, pokemon],
  )

  useEffect(() => {
    if (evolutionFamilyIds.length <= 1) return
    setFamilyLearnsets(new Map())
    let cancelled = false
    evolutionFamilyIds.forEach((famId) => {
      loadLearnsets(famId).then((data) => {
        if (!cancelled && data) setFamilyLearnsets((prev) => new Map(prev).set(famId, data))
      })
    })
    return () => { cancelled = true }
  }, [evolutionFamilyIds])

  if (!pokemon) {
    return (
      <div className="px-4 py-6">
        <p className="text-sm text-ink-faint">존재하지 않는 포켓몬입니다.</p>
        <Link to={backTo} className="text-sm font-bold text-brand-red">
          도감으로 돌아가기
        </Link>
      </div>
    )
  }
  const dexNumber = String(pokemon.dexNumber).padStart(3, '0')
  const accentColor = COLOR[pokemon.types[0]]

  const prevPokemon = pokemonIndex > 0 ? SAMPLE_POKEMON[pokemonIndex - 1] : undefined
  const nextPokemon = pokemonIndex < SAMPLE_POKEMON.length - 1 ? SAMPLE_POKEMON[pokemonIndex + 1] : undefined

  const hasSharedTab = sharedGenerationNums.length > 0 && (learnsets?.length ?? 0) > 0 && encounterGenerations.length > 0

  const activeGenNum = selectedGeneration
    ? Number(selectedGeneration.replace('세대', ''))
    : (sharedGenerationNums[0] ?? 1)
  const activeGeneration = `${activeGenNum}세대` as Generation

  return (
    <div className="px-4 py-6">
      <div className="mb-3 flex items-center justify-between">
        <Link to={backTo} className="inline-block text-sm font-bold text-ink-muted hover:text-ink">
          ← 도감으로
        </Link>
        <div className="flex gap-2">
          <Link
            to={prevPokemon ? `/pokemon/${prevPokemon.id}` : '#'}
            state={{ backTo }}
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
            state={{ backTo }}
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
          <SpriteImage
            src={pokemon.artworkUrl ?? pokemon.spriteUrl}
            alt={pokemon.nameKo}
            width={180}
            height={180}
            loading="eager"
            pixelated={false}
            rounded="none"
            className="relative z-10 h-45 w-45"
          />
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

          {pokemon.abilities && pokemon.abilities.length > 0 && (
            <Card className="p-3">
              <p className="mb-1.5 text-xs font-bold text-ink-faint">특성</p>
              <div className="flex flex-col gap-1.5">
                {pokemon.abilities.map((ability) => (
                  <div key={ability.nameEn}>
                    <span className="text-sm font-bold text-ink">
                      {ability.nameKo}
                      {ability.isHidden && (
                        <span className="ml-1.5 rounded-chip bg-surface-hover px-1.5 py-0.5 text-xxs font-bold text-ink-faint">
                          숨겨진 특성
                        </span>
                      )}
                    </span>
                    {ability.effectKo && <p className="text-xs text-ink-muted">{ability.effectKo}</p>}
                  </div>
                ))}
              </div>
            </Card>
          )}
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
            linkState={{ backTo }}
          />
        </Card>
      )}

      {/* 진화 계열 기술 비교 — 가족이 2명 이상일 때만 표시 */}
      {evolutionFamilyIds.length > 1 && (
        <Card className="mt-6 p-4">
          <h2 className="mb-3 text-sm font-black text-ink-faint">진화 계열 기술 비교</h2>
          <EvolutionMoveComparison
            familyMembers={evolutionFamilyIds.map((famId) => ({ id: famId, ...findSamplePokemon(famId) }))}
            familyLearnsets={familyLearnsets}
            findMove={findMove}
          />
        </Card>
      )}

      {/* 기술 + 출현 장소가 모두 있을 때: 세대 탭을 하나로 공유 */}
      {hasSharedTab ? (
        <Card className="mt-6 p-4">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <div className="flex gap-2">
              <h2 className="text-sm font-black text-ink-faint">기술</h2>
              <span className="text-sm font-black text-ink-faint">·</span>
              <h2 className="text-sm font-black text-ink-faint">출현 장소</h2>
            </div>
            {/* 공유 세대 탭 */}
            <div className="flex gap-1.5 overflow-x-auto">
              {sharedGenerationNums.map((gen) => (
                <button
                  key={gen}
                  type="button"
                  onClick={() => setSelectedGeneration(`${gen}세대` as Generation)}
                  className={cn(
                    'shrink-0 rounded-chip border px-3 py-1.5 text-xs font-bold transition-colors',
                    activeGenNum === gen
                      ? 'border-brand-red bg-brand-red text-white'
                      : 'border-border-strong text-ink hover:border-brand-red hover:text-brand-red',
                  )}
                >
                  {gen}세대
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {learnsets && learnsets.length > 0 && (
              <div>
                <h3 className="mb-3 text-xs font-black text-ink-faint">기술</h3>
                <MoveList
                  learnsets={learnsets}
                  findMove={findMove}
                  recommendedMoveIds={moveData?.recommended}
                  generation={activeGeneration}
                  onGenerationChange={(gen) => setSelectedGeneration(gen)}
                />
              </div>
            )}

            {pokemon.encounterLocations && pokemon.encounterLocations.length > 0 && (
              <div>
                <h3 className="mb-3 text-xs font-black text-ink-faint">출현 장소</h3>
                <EncounterLocationList
                  locations={pokemon.encounterLocations}
                  generation={activeGenNum}
                  onGenerationChange={(gen) => setSelectedGeneration(`${gen}세대` as Generation)}
                />
              </div>
            )}
          </div>
        </Card>
      ) : (
        <>
          {learnsets && learnsets.length > 0 && (
            <Card className="mt-6 p-4">
              <h2 className="mb-3 text-sm font-black text-ink-faint">기술</h2>
              <MoveList learnsets={learnsets} findMove={findMove} recommendedMoveIds={moveData?.recommended} />
            </Card>
          )}

          {pokemon.encounterLocations && pokemon.encounterLocations.length > 0 && (
            <Card className="mt-6 p-4">
              <h2 className="mb-3 text-sm font-black text-ink-faint">출현 장소</h2>
              <EncounterLocationList locations={pokemon.encounterLocations} />
            </Card>
          )}
        </>
      )}

      {pokemon.megaForms && pokemon.megaForms.length > 0 && (
        <Card className="mt-6 p-4">
          <h2 className="mb-3 text-sm font-black text-ink-faint">메가진화</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {pokemon.megaForms.map((mega) => (
              <div key={mega.label} className="flex flex-col items-center gap-2 rounded-card border border-border-strong p-4">
                <SpriteImage
                  src={mega.artworkUrl ?? mega.spriteUrl}
                  alt={mega.label}
                  width={120}
                  height={120}
                  pixelated={false}
                  rounded="none"
                  className="h-30 w-30"
                />
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
