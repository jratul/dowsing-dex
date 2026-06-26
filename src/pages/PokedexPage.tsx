import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TypeFilter } from '../components/type-chart/TypeFilter'
import { PokemonCard } from '../components/pokemon/PokemonCard'
import { SAMPLE_POKEMON } from '../data/sample/pokemon.sample'
import type { TypeName } from '../types/type-chart'

export function PokedexPage() {
  const navigate = useNavigate()
  const [selectedTypes, setSelectedTypes] = useState<TypeName[]>([])
  const [query, setQuery] = useState('')

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
    <div className="mx-auto max-w-4xl px-4 py-6">
      <h1 className="mb-4 text-xl font-black text-ink">도감</h1>

      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="이름 또는 번호로 검색"
        className="mb-3 h-10 w-full rounded-button border border-border px-3 text-sm"
      />

      <div className="mb-4">
        <TypeFilter selected={selectedTypes} onChange={setSelectedTypes} />
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-ink-faint">조건에 맞는 포켓몬이 없습니다.</p>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {filtered.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} onClick={(id) => navigate(`/pokemon/${id}`)} />
          ))}
        </div>
      )}
    </div>
  )
}
