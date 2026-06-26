import { useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { TypeFilter } from '../components/type-chart/TypeFilter'
import { PokemonCard } from '../components/pokemon/PokemonCard'
import { SAMPLE_POKEMON } from '../data/sample/pokemon.sample'
import type { TypeName } from '../types/type-chart'

export function PokedexPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [selectedTypes, setSelectedTypes] = useState<TypeName[]>([])
  const [query, setQuery] = useState(searchParams.get('q') ?? '')

  const filtered = useMemo(() => {
    return SAMPLE_POKEMON.filter((pokemon) => {
      const matchesType = selectedTypes.length === 0 || selectedTypes.some((type) => pokemon.types.includes(type))
      const matchesQuery =
        query.trim() === '' ||
        pokemon.nameKo.includes(query) ||
        pokemon.nameEn.toLowerCase().includes(query.toLowerCase()) ||
        String(pokemon.id).includes(query)
      return matchesType && matchesQuery
    })
  }, [selectedTypes, query])

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <div className="mb-4 flex items-baseline gap-2">
        <h1 className="text-xl font-black text-ink">포켓몬 도감</h1>
        <span className="text-sm font-bold text-brand-red">{filtered.length}마리</span>
      </div>
      <p className="mb-4 text-sm text-ink-muted">타입을 눌러 필터링하거나 이름·번호로 검색하세요.</p>

      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="이름 또는 번호로 검색"
        className="mb-3 h-10 w-full rounded-button border border-border px-3 text-sm"
      />

      <div className="mb-6">
        <TypeFilter selected={selectedTypes} onChange={setSelectedTypes} />
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-ink-faint">조건에 맞는 포켓몬이 없습니다.</p>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {filtered.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} onClick={(id) => navigate(`/pokemon/${id}`)} />
          ))}
        </div>
      )}
    </div>
  )
}
