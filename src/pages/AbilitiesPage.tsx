import { useState, useMemo } from 'react'
import { ALL_ABILITIES, type AbilityEntry } from '../data/abilities.generated'

const GENERATIONS = [3, 4, 5, 6, 7, 8, 9]
const PAGE_SIZE = 30

function GenBadge({ gen }: { gen: number | null }) {
  if (!gen) return <span className="text-xs text-ink-muted">—</span>
  return (
    <span className="inline-block rounded bg-surface-hover px-1.5 py-0.5 text-xxs font-bold text-ink-muted">
      {gen}세대
    </span>
  )
}

function AbilityRow({ a }: { a: AbilityEntry }) {
  return (
    <tr className="border-b border-border transition-colors hover:bg-surface-hover">
      <td className="p-3">
        <div className="font-semibold text-ink">{a.nameKo ?? a.nameEn ?? a.apiName}</div>
        <div className="text-xs text-ink-muted">{a.nameEn}</div>
      </td>
      <td className="p-3 text-center">
        <GenBadge gen={a.generation} />
      </td>
      <td className="p-3 text-sm text-ink-muted">{a.descKo ?? '—'}</td>
    </tr>
  )
}

export function AbilitiesPage() {
  const [search, setSearch] = useState('')
  const [genFilter, setGenFilter] = useState<number | null>(null)
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return ALL_ABILITIES.filter((a) => {
      if (genFilter !== null && a.generation !== genFilter) return false
      if (q) {
        return (
          (a.nameKo?.toLowerCase().includes(q) ?? false) ||
          (a.nameEn?.toLowerCase().includes(q) ?? false) ||
          a.apiName.toLowerCase().includes(q)
        )
      }
      return true
    })
  }, [search, genFilter])

  const isSearching = search.trim() !== '' || genFilter !== null
  const paged = isSearching ? filtered : filtered.slice(0, page * PAGE_SIZE)
  const hasMore = !isSearching && paged.length < filtered.length

  function handleGenFilter(gen: number) {
    setGenFilter((prev) => (prev === gen ? null : gen))
    setPage(1)
  }

  function handleSearch(value: string) {
    setSearch(value)
    setPage(1)
  }

  return (
    <div className="mx-auto w-full px-4 py-6 lg:w-4/5">
      <h1 className="mb-1 text-2xl font-bold text-ink">특성 (Ability)</h1>
      <p className="mb-6 text-sm text-ink-muted">
        특성은 3세대(루비/사파이어)부터 도입된 시스템으로 각 포켓몬이 보유하는 고유 능력이다.
        전투 내에서 자동으로 발동하거나 특정 조건에서 효과를 발휘한다.
        총 {ALL_ABILITIES.length.toLocaleString('ko-KR')}개.
      </p>

      {/* 필터 영역 */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <input
          type="search"
          placeholder="특성 이름으로 검색..."
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          className="rounded-button border border-border bg-surface-hover px-3 py-1.5 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-1 focus:ring-brand-red"
        />
        <div className="flex flex-wrap gap-1">
          {GENERATIONS.map((g) => (
            <button
              key={g}
              onClick={() => handleGenFilter(g)}
              className={`rounded-chip px-3 py-1 text-xs font-semibold transition-colors ${
                genFilter === g
                  ? 'bg-brand-red text-white'
                  : 'bg-surface-hover text-ink-muted hover:text-ink'
              }`}
            >
              {g}세대
            </button>
          ))}
          {genFilter !== null && (
            <button
              onClick={() => { setGenFilter(null); setPage(1) }}
              className="rounded-chip px-3 py-1 text-xs font-semibold text-ink-muted hover:text-ink"
            >
              전체
            </button>
          )}
        </div>
      </div>

      {/* 결과 카운트 */}
      <p className="mb-2 text-xs text-ink-muted">
        {isSearching
          ? `${filtered.length.toLocaleString('ko-KR')}개 해당`
          : `전체 ${filtered.length.toLocaleString('ko-KR')}개 · ${paged.length.toLocaleString('ko-KR')}개 표시 중`}
      </p>

      {/* 테이블 */}
      <div className="overflow-x-auto rounded-card border border-border">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-hover">
              <th className="p-3 text-left font-semibold text-ink">특성명</th>
              <th className="p-3 text-center font-semibold text-ink">도입 세대</th>
              <th className="p-3 text-left font-semibold text-ink">설명</th>
            </tr>
          </thead>
          <tbody>
            {paged.map((a) => (
              <AbilityRow key={a.id} a={a} />
            ))}
          </tbody>
        </table>
      </div>

      {hasMore && (
        <div className="mt-4 text-center">
          <button
            onClick={() => setPage((p) => p + 1)}
            className="rounded-button border border-border bg-surface-hover px-6 py-2 text-sm font-semibold text-ink-muted transition-colors hover:text-ink"
          >
            더 보기 ({(filtered.length - paged.length).toLocaleString('ko-KR')}개 남음)
          </button>
        </div>
      )}
    </div>
  )
}
