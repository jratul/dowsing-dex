import { useState, useMemo, useCallback } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ALL_MOVES } from '../data/moves/all-moves.generated'
import { MOVE_DESCRIPTIONS } from '../data/moves/move-descriptions.generated'
import {
  LEVEL_UP_MAP,
  TUTOR_MAP,
  MACHINE_MAP,
} from '../data/moves/move-index.generated'
import { SAMPLE_POKEMON } from '../data/sample/pokemon.sample'
import { TypeBadge } from '../components/pokemon/TypeBadge'
import type { TypeName } from '../types/type-chart'
type PokemonType = TypeName

const POKEMON_MAP = new Map(SAMPLE_POKEMON.map((p) => [p.id, p]))
const MOVE_DESC_MAP = new Map(
  Object.entries(MOVE_DESCRIPTIONS).map(([id, desc]) => [Number(id), desc]),
)

const ALL_TYPES: PokemonType[] = [
  '노말', '불꽃', '물', '전기', '풀', '얼음',
  '격투', '독', '땅', '비행', '에스퍼', '벌레',
  '바위', '고스트', '드래곤', '악', '강철', '페어리',
]

const CATEGORIES = ['물리', '특수', '변화'] as const
type Category = (typeof CATEGORIES)[number]

const CATEGORY_COLOR: Record<Category, string> = {
  물리: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  특수: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  변화: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
}

const PAGE_SIZE = 40

function PokemonChip({
  pokemonId,
  label,
}: {
  pokemonId: number
  label?: string
}) {
  const p = POKEMON_MAP.get(pokemonId)
  if (!p) return null
  return (
    <Link
      to={`/pokemon/${pokemonId}`}
      className="flex shrink-0 flex-col items-center gap-0.5 rounded p-1 transition-colors hover:bg-surface-hover"
    >
      <img src={p.spriteUrl ?? ''} alt={p.nameKo} width={40} height={40} loading="lazy" />
      <span className="text-center text-xxs text-ink leading-tight">{p.nameKo}</span>
      {label && (
        <span className="text-center text-xxs font-bold text-ink-muted">{label}</span>
      )}
    </Link>
  )
}

function MoveDetail({ moveId }: { moveId: number }) {
  const levelUpLearners = LEVEL_UP_MAP.get(moveId) ?? []
  const tutorLearners = TUTOR_MAP.get(moveId) ?? []
  const machineLearners = MACHINE_MAP.get(moveId) ?? []

  const hasAny = levelUpLearners.length > 0 || tutorLearners.length > 0 || machineLearners.length > 0

  if (!hasAny) {
    return (
      <div className="px-4 py-3 text-sm text-ink-muted">
        학습 데이터 없음
      </div>
    )
  }

  return (
    <div className="border-t border-border bg-surface-hover/50 px-4 py-4">
      {levelUpLearners.length > 0 && (
        <div className="mb-4">
          <h4 className="mb-2 text-xs font-bold uppercase tracking-wide text-ink-muted">
            레벨업 ({levelUpLearners.length.toLocaleString('ko-KR')}종)
          </h4>
          <div className="flex flex-wrap gap-1">
            {levelUpLearners.map((l) => (
              <PokemonChip
                key={l.pokemonId}
                pokemonId={l.pokemonId}
                label={l.level > 0 ? `Lv.${l.level}` : '진화시'}
              />
            ))}
          </div>
          {levelUpLearners[0] && (
            <p className="mt-1 text-xxs text-ink-muted">
              기준: {levelUpLearners[0].gen} {levelUpLearners[0].version} (각 포켓몬 최신 세대)
            </p>
          )}
        </div>
      )}

      {machineLearners.length > 0 && (
        <div className="mb-4">
          <h4 className="mb-2 text-xs font-bold uppercase tracking-wide text-ink-muted">
            TM/HM ({machineLearners.length.toLocaleString('ko-KR')}종)
          </h4>
          <div className="flex flex-wrap gap-1">
            {machineLearners.map((l) => (
              <PokemonChip
                key={l.pokemonId}
                pokemonId={l.pokemonId}
                label={`${l.machine}${l.number}`}
              />
            ))}
          </div>
        </div>
      )}

      {tutorLearners.length > 0 && (
        <div>
          <h4 className="mb-2 text-xs font-bold uppercase tracking-wide text-ink-muted">
            기술가르침 ({tutorLearners.length.toLocaleString('ko-KR')}종)
          </h4>
          <div className="flex flex-wrap gap-1">
            {tutorLearners.map((l) => (
              <PokemonChip key={l.pokemonId} pokemonId={l.pokemonId} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export function MovesPage() {
  // 공략에서 특정 기술로 바로 들어올 수 있게 ?move=<기술 id> 를 받는다.
  // 목록이 1,000종이 넘어 링크만으로는 찾기 어려우므로, 이름으로 검색을 걸고 상세를 펼쳐준다.
  const [searchParams] = useSearchParams()
  const linkedMove = useMemo(() => {
    const raw = searchParams.get('move')
    if (!raw) return undefined
    return ALL_MOVES.find((m) => m.id === Number(raw))
  }, [searchParams])

  const [search, setSearch] = useState(linkedMove?.nameKo ?? '')
  const [typeFilter, setTypeFilter] = useState<PokemonType | null>(null)
  const [categoryFilter, setCategoryFilter] = useState<Category | null>(null)
  const [expandedId, setExpandedId] = useState<number | null>(linkedMove?.id ?? null)
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return ALL_MOVES.filter((m) => {
      if (typeFilter && m.type !== typeFilter) return false
      if (categoryFilter && m.category !== categoryFilter) return false
      if (q) {
        return (
          m.nameKo.toLowerCase().includes(q) ||
          m.nameEn.toLowerCase().includes(q)
        )
      }
      return true
    })
  }, [search, typeFilter, categoryFilter])

  const isFiltering = search.trim() !== '' || typeFilter !== null || categoryFilter !== null
  const paged = isFiltering ? filtered : filtered.slice(0, page * PAGE_SIZE)
  const hasMore = !isFiltering && paged.length < filtered.length

  const handleExpand = useCallback(
    (id: number) => setExpandedId((prev) => (prev === id ? null : id)),
    [],
  )

  function reset() {
    setSearch('')
    setTypeFilter(null)
    setCategoryFilter(null)
    setPage(1)
    setExpandedId(null)
  }

  return (
    <div className="mx-auto w-full px-4 py-6 lg:w-4/5">
      <div className="mb-1 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-ink">기술 (Moves)</h1>
        <Link to="/tm" className="text-xs text-ink-muted underline hover:text-ink">
          기술머신(TM) 목록으로 보기 →
        </Link>
      </div>
      <p className="mb-5 text-sm text-ink-muted">
        전 세대 기술 {ALL_MOVES.length.toLocaleString('ko-KR')}종. 레벨업·TM·기술가르침으로 배울 수 있는 포켓몬을 확인할 수 있습니다.
      </p>

      {/* 검색 + 필터 */}
      <div className="mb-4 space-y-2">
        <div className="flex flex-wrap gap-2">
          <input
            type="search"
            placeholder="기술 이름 검색..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); setExpandedId(null) }}
            className="rounded-button border border-border bg-surface-hover px-3 py-1.5 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-1 focus:ring-brand-red"
          />
          {(search || typeFilter || categoryFilter) && (
            <button
              onClick={reset}
              className="rounded-chip border border-border px-3 py-1.5 text-xs font-semibold text-ink-muted hover:text-ink"
            >
              초기화
            </button>
          )}
        </div>

        {/* 분류 필터 */}
        <div className="flex flex-wrap gap-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => { setCategoryFilter((prev: Category | null) => (prev === cat ? null : cat)); setPage(1); setExpandedId(null) }}
              className={`rounded-chip px-3 py-1 text-xs font-semibold transition-colors ${
                categoryFilter === cat
                  ? `${CATEGORY_COLOR[cat]} ring-1 ring-current`
                  : 'bg-surface-hover text-ink-muted hover:text-ink'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 타입 필터 */}
        <div className="flex flex-wrap gap-1">
          {ALL_TYPES.map((t) => (
            <button
              key={t}
              onClick={() => { setTypeFilter((prev) => (prev === t ? null : t)); setPage(1); setExpandedId(null) }}
              className={`rounded-chip transition-opacity ${typeFilter && typeFilter !== t ? 'opacity-40' : ''}`}
            >
              <TypeBadge type={t} size="sm" />
            </button>
          ))}
        </div>
      </div>

      {/* 결과 수 */}
      <p className="mb-2 text-xs text-ink-muted">
        {isFiltering
          ? `${filtered.length.toLocaleString('ko-KR')}개 해당`
          : `전체 ${filtered.length.toLocaleString('ko-KR')}개 · ${paged.length.toLocaleString('ko-KR')}개 표시 중`}
      </p>

      {/* 기술 목록 */}
      <div className="rounded-card border border-border">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-hover">
              <th className="p-3 text-left font-semibold text-ink">기술명</th>
              <th className="p-3 text-center font-semibold text-ink">타입</th>
              <th className="p-3 text-center font-semibold text-ink">분류</th>
              <th className="p-3 text-center font-semibold text-ink">위력</th>
              <th className="p-3 text-center font-semibold text-ink">명중</th>
              <th className="p-3 text-center font-semibold text-ink">PP</th>
            </tr>
          </thead>
          <tbody>
            {paged.map((move) => {
              const isExpanded = expandedId === move.id
              const desc = MOVE_DESC_MAP.get(move.id)
              const levelCount = LEVEL_UP_MAP.get(move.id)?.length ?? 0
              const machineCount = MACHINE_MAP.get(move.id)?.length ?? 0
              const tutorCount = TUTOR_MAP.get(move.id)?.length ?? 0
              const totalCount = levelCount + machineCount + tutorCount

              return (
                <>
                  <tr
                    key={move.id}
                    onClick={() => handleExpand(move.id)}
                    className={`cursor-pointer border-b border-border transition-colors hover:bg-surface-hover ${
                      isExpanded ? 'bg-surface-hover' : ''
                    }`}
                  >
                    <td className="p-3">
                      <div className="font-semibold text-ink">{move.nameKo}</div>
                      <div className="text-xs text-ink-muted">{move.nameEn}</div>
                      {desc && (
                        <div className="mt-0.5 text-xs text-ink-muted line-clamp-1">{desc}</div>
                      )}
                    </td>
                    <td className="p-3 text-center">
                      <TypeBadge type={move.type as PokemonType} size="sm" />
                    </td>
                    <td className="p-3 text-center">
                      {move.category && (
                        <span className={`inline-block rounded px-1.5 py-0.5 text-xxs font-bold ${CATEGORY_COLOR[move.category as Category] ?? ''}`}>
                          {move.category}
                        </span>
                      )}
                    </td>
                    <td className="p-3 text-center text-ink-muted">
                      {move.power ?? '—'}
                    </td>
                    <td className="p-3 text-center text-ink-muted">
                      {move.accuracy ? `${move.accuracy}%` : '—'}
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-ink-muted">{move.pp}</div>
                      {totalCount > 0 && (
                        <div className="text-xxs text-ink-muted">
                          {totalCount.toLocaleString('ko-KR')}종
                        </div>
                      )}
                    </td>
                  </tr>
                  {isExpanded && (
                    <tr key={`${move.id}-detail`} className="border-b border-border">
                      <td colSpan={6} className="p-0">
                        <MoveDetail moveId={move.id} />
                      </td>
                    </tr>
                  )}
                </>
              )
            })}
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
