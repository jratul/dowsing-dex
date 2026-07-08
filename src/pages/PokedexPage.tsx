import { useMemo } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { TypeFilter } from '../components/type-chart/TypeFilter'
import { GenerationFilter } from '../components/pokemon/GenerationFilter'
import { PokemonCard } from '../components/pokemon/PokemonCard'
import { SAMPLE_POKEMON } from '../data/sample/pokemon.sample'
import type { TypeName } from '../types/type-chart'

const GENERATIONS = Array.from(new Set(SAMPLE_POKEMON.map((p) => p.generation))).sort((a, b) => a - b)

export function PokedexPage() {
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()

  // 필터 상태를 URL 쿼리에 그대로 보관해, 상세 페이지를 보고 돌아와도 유지되게 한다.
  // 원본 문자열이 바뀔 때만 새 배열을 만들어야 아래 filtered useMemo가 정상적으로 메모이즈된다.
  const typesParam = searchParams.get('types') ?? ''
  const gensParam = searchParams.get('gens') ?? ''
  const query = searchParams.get('q') ?? ''
  const selectedTypes = useMemo(
    () => (typesParam ? (typesParam.split(',') as TypeName[]) : []),
    [typesParam],
  )
  const selectedGenerations = useMemo(() => (gensParam ? gensParam.split(',').map(Number) : []), [gensParam])

  function updateParams(next: { q?: string; types?: TypeName[]; gens?: number[] }) {
    const params = new URLSearchParams(searchParams)
    const q = next.q ?? query
    const types = next.types ?? selectedTypes
    const gens = next.gens ?? selectedGenerations
    if (q) params.set('q', q)
    else params.delete('q')
    if (types.length > 0) params.set('types', types.join(','))
    else params.delete('types')
    if (gens.length > 0) params.set('gens', gens.join(','))
    else params.delete('gens')
    setSearchParams(params, { replace: true })
  }

  const filtered = useMemo(() => {
    return SAMPLE_POKEMON.filter((pokemon) => {
      const matchesType = selectedTypes.length === 0 || selectedTypes.some((type) => pokemon.types.includes(type))
      const matchesGeneration = selectedGenerations.length === 0 || selectedGenerations.includes(pokemon.generation)
      const matchesQuery =
        query.trim() === '' ||
        pokemon.nameKo.includes(query) ||
        pokemon.nameEn.toLowerCase().includes(query.toLowerCase()) ||
        String(pokemon.dexNumber).includes(query)
      return matchesType && matchesGeneration && matchesQuery
    })
  }, [selectedTypes, selectedGenerations, query])

  return (
    <div className="mx-auto w-full lg:w-4/5 px-4 py-6">
      <div className="mb-4 flex items-baseline gap-2">
        <h1 className="text-xl font-black text-ink">포켓몬 도감</h1>
        <span className="text-sm font-bold text-brand-red">{filtered.length}마리</span>
      </div>
      <p className="mb-4 text-sm text-ink-muted">타입·세대를 눌러 필터링하거나 이름·번호로 검색하세요.</p>

      <input
        type="search"
        value={query}
        onChange={(e) => updateParams({ q: e.target.value })}
        placeholder="이름 또는 번호로 검색"
        className="mb-3 h-10 w-full rounded-button border border-border px-3 text-sm"
      />

      <div className="mb-3">
        <GenerationFilter
          selected={selectedGenerations}
          onChange={(gens) => updateParams({ gens })}
          generations={GENERATIONS}
        />
      </div>

      <div className="mb-6">
        <TypeFilter selected={selectedTypes} onChange={(types) => updateParams({ types })} />
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-ink-faint">조건에 맞는 포켓몬이 없습니다.</p>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {filtered.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              to={`/pokemon/${pokemon.id}`}
              state={{ backTo: location.pathname + location.search }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
