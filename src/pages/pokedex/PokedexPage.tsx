import { useDeferredValue, useEffect, useMemo, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { TypeFilter } from '../../components/type-chart/TypeFilter'
import { GenerationFilter } from '../../components/pokemon/GenerationFilter'
import { PokemonCard } from '../../components/pokemon/PokemonCard'
import { SAMPLE_POKEMON } from '../../data/sample/pokemon.sample'
import type { TypeName } from '../../types/type-chart'

const GENERATIONS = Array.from(new Set(SAMPLE_POKEMON.map((p) => p.generation))).sort((a, b) => a - b)

/** URL 반영을 미루는 시간(ms). 타이핑이 멎은 뒤에만 주소가 바뀐다. */
const QUERY_SYNC_DELAY = 300

export function PokedexPage() {
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()

  // 필터 상태를 URL 쿼리에 그대로 보관해, 상세 페이지를 보고 돌아와도 유지되게 한다.
  // 원본 문자열이 바뀔 때만 새 배열을 만들어야 아래 filtered useMemo가 정상적으로 메모이즈된다.
  const typesParam = searchParams.get('types') ?? ''
  const gensParam = searchParams.get('gens') ?? ''
  const urlQuery = searchParams.get('q') ?? ''
  const selectedTypes = useMemo(
    () => (typesParam ? (typesParam.split(',') as TypeName[]) : []),
    [typesParam],
  )
  const selectedGenerations = useMemo(() => (gensParam ? gensParam.split(',').map(Number) : []), [gensParam])

  // 검색어를 URL에 직접 물리면 한 글자마다 라우터가 갱신되고 카드 1,000여 장이 통째로
  // 다시 그려진다. 입력값은 로컬 state로 즉시 받고, 무거운 일은 뒤로 미룬다.
  const [inputValue, setInputValue] = useState(urlQuery)
  // 목록 필터링은 긴급하지 않은 작업으로 표시해, 타이핑이 끊기지 않게 한다.
  const deferredQuery = useDeferredValue(inputValue)

  function updateParams(next: { q?: string; types?: TypeName[]; gens?: number[] }) {
    const params = new URLSearchParams(searchParams)
    const q = next.q ?? inputValue
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

  // 타이핑이 멎으면 그때 한 번만 주소에 반영한다.
  useEffect(() => {
    if (inputValue === urlQuery) return
    const timer = setTimeout(() => updateParams({ q: inputValue }), QUERY_SYNC_DELAY)
    return () => clearTimeout(timer)
    // updateParams는 매 렌더 새로 만들어지므로 의존성에서 제외한다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, urlQuery])

  // 뒤로 가기 등으로 주소가 바뀌면 입력창도 따라간다.
  useEffect(() => {
    setInputValue(urlQuery)
  }, [urlQuery])

  const filtered = useMemo(() => {
    const q = deferredQuery.trim()
    const lower = q.toLowerCase()
    return SAMPLE_POKEMON.filter((pokemon) => {
      const matchesType = selectedTypes.length === 0 || selectedTypes.some((type) => pokemon.types.includes(type))
      const matchesGeneration = selectedGenerations.length === 0 || selectedGenerations.includes(pokemon.generation)
      const matchesQuery =
        q === '' ||
        pokemon.nameKo.includes(q) ||
        pokemon.nameEn.toLowerCase().includes(lower) ||
        String(pokemon.dexNumber).includes(q)
      return matchesType && matchesGeneration && matchesQuery
    })
  }, [selectedTypes, selectedGenerations, deferredQuery])

  // 카드마다 새 객체를 넘기면 PokemonCard의 memo가 매번 깨진다.
  const cardState = useMemo(
    () => ({ backTo: location.pathname + location.search }),
    [location.pathname, location.search],
  )

  // 목록이 갱신되는 동안에는 살짝 흐리게 해서 반응이 멈춘 게 아님을 알린다.
  const isStale = deferredQuery !== inputValue

  return (
    <div className="mx-auto w-full lg:w-4/5 px-4 py-6">
      <div className="mb-4 flex items-baseline gap-2">
        <h1 className="text-xl font-black text-ink">포켓몬 도감</h1>
        <span className="text-sm font-bold text-brand-red">{filtered.length.toLocaleString('ko-KR')}마리</span>
      </div>
      <p className="mb-4 text-sm text-ink-muted">타입·세대를 눌러 필터링하거나 이름·번호로 검색하세요.</p>

      <input
        type="search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
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
        <div
          className={`grid grid-cols-2 gap-3 transition-opacity sm:grid-cols-4 lg:grid-cols-6 ${
            isStale ? 'opacity-60' : ''
          }`}
        >
          {filtered.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} to={`/pokemon/${pokemon.id}`} state={cardState} />
          ))}
        </div>
      )}
    </div>
  )
}
