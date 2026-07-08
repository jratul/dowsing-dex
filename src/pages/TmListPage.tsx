import { Fragment, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { TM_INDEX } from '../data/moves/tm-index.generated'
import { ALL_MOVES } from '../data/moves/all-moves.generated'
import { SAMPLE_POKEMON } from '../data/sample/pokemon.sample'
import { TypeBadge } from '../components/pokemon/TypeBadge'
import { cn } from '../lib/cn'
import type { Generation, TmEntry } from '../types/move'

const GENERATIONS: Generation[] = ['1세대', '2세대', '3세대', '4세대', '5세대', '6세대', '7세대', '8세대', '9세대']
const MOVE_MAP = new Map(ALL_MOVES.map((m) => [m.id, m]))
const POKEMON_MAP = new Map(SAMPLE_POKEMON.map((p) => [p.id, p]))

const GEN_VERSIONS: Partial<Record<Generation, string[]>> = {}
for (const entry of TM_INDEX as TmEntry[]) {
  const g = entry.generation as Generation
  if (!GEN_VERSIONS[g]) GEN_VERSIONS[g] = []
  if (!GEN_VERSIONS[g]!.includes(entry.version)) GEN_VERSIONS[g]!.push(entry.version)
}

export function TmListPage() {
  const [selectedGen, setSelectedGen] = useState<Generation>('1세대')
  const [selectedVersion, setSelectedVersion] = useState(GEN_VERSIONS['1세대']?.[0] ?? '')
  const [machineFilter, setMachineFilter] = useState<'ALL' | 'TM' | 'HM'>('ALL')
  const [search, setSearch] = useState('')
  const [expandedKey, setExpandedKey] = useState<string | null>(null)

  const versions = GEN_VERSIONS[selectedGen] ?? []

  function handleGenChange(gen: Generation) {
    setSelectedGen(gen)
    setSelectedVersion(GEN_VERSIONS[gen]?.[0] ?? '')
    setExpandedKey(null)
  }

  const searchResult = useMemo<number | null | undefined>(() => {
    const q = search.trim()
    if (!q) return undefined
    const found = SAMPLE_POKEMON.find(
      (p) => p.nameKo === q || p.nameEn.toLowerCase() === q.toLowerCase() || String(p.id) === q,
    )
    return found?.id ?? null
  }, [search])

  const filteredEntries = useMemo(() => {
    return TM_INDEX.filter((e) => {
      if (e.generation !== selectedGen || e.version !== selectedVersion) return false
      if (machineFilter !== 'ALL' && e.machine !== machineFilter) return false
      if (searchResult === null) return false
      if (searchResult !== undefined) return e.pokemonIds.includes(searchResult)
      return true
    })
  }, [selectedGen, selectedVersion, machineFilter, searchResult])

  return (
    <div className="px-4 py-6">
      <h1 className="mb-1 text-2xl font-black text-ink">기술머신 목록</h1>
      <p className="mb-5 text-sm text-ink-faint">세대·버전별 TM/HM과 배울 수 있는 포켓몬 목록</p>

      {/* 세대 선택 */}
      <div className="mb-3 flex flex-wrap gap-1.5">
        {GENERATIONS.filter((g) => GEN_VERSIONS[g]).map((gen) => (
          <button
            key={gen}
            type="button"
            onClick={() => handleGenChange(gen)}
            className={cn(
              'rounded-chip border px-3 py-1 text-sm font-bold transition-colors',
              selectedGen === gen
                ? 'border-brand-red bg-brand-red text-white'
                : 'border-border-strong text-ink hover:border-brand-red hover:text-brand-red',
            )}
          >
            {gen}
          </button>
        ))}
      </div>

      {/* 버전 선택 */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        {versions.map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => {
              setSelectedVersion(v)
              setExpandedKey(null)
            }}
            className={cn(
              'rounded-chip border px-3 py-1 text-xs font-bold transition-colors',
              selectedVersion === v
                ? 'border-brand-red bg-brand-red/10 text-brand-red'
                : 'border-border text-ink-muted hover:border-brand-red hover:text-brand-red',
            )}
          >
            {v}
          </button>
        ))}
      </div>

      {/* TM/HM 필터 + 포켓몬 검색 */}
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <div className="flex gap-1">
          {(['ALL', 'TM', 'HM'] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setMachineFilter(f)}
              className={cn(
                'rounded-chip border px-3 py-1 text-xs font-bold transition-colors',
                machineFilter === f
                  ? 'border-brand-red bg-brand-red text-white'
                  : 'border-border text-ink-muted hover:text-brand-red',
              )}
            >
              {f === 'ALL' ? '전체' : f}
            </button>
          ))}
        </div>
        <div className="flex flex-1 items-center gap-2">
          <input
            type="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setExpandedKey(null)
            }}
            placeholder="포켓몬 이름·번호로 필터 (예: 이상해씨, 25)"
            className="h-8 min-w-52 flex-1 rounded-chip border border-border bg-surface-hover px-3 text-sm"
          />
          {searchResult !== undefined && searchResult !== null && (
            <span className="shrink-0 text-xs text-ink-muted">
              #{searchResult} {POKEMON_MAP.get(searchResult)?.nameKo} 학습 가능
            </span>
          )}
          {search.trim() && searchResult === null && (
            <span className="shrink-0 text-xs text-ink-faint">포켓몬을 찾을 수 없습니다</span>
          )}
        </div>
      </div>

      {/* TM 목록 */}
      <div className="overflow-x-auto rounded-card border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-hover text-left text-xs text-ink-faint">
              <th className="px-3 py-2.5 font-bold">번호</th>
              <th className="px-3 py-2.5 font-bold">기술명</th>
              <th className="px-3 py-2.5 font-bold">타입</th>
              <th className="px-3 py-2.5 font-bold">분류</th>
              <th className="px-3 py-2.5 text-right font-bold">위력</th>
              <th className="px-3 py-2.5 text-right font-bold">명중</th>
              <th className="px-3 py-2.5 text-right font-bold">포켓몬</th>
            </tr>
          </thead>
          <tbody>
            {filteredEntries.map((entry) => {
              const key = `${entry.machine}${String(entry.number).padStart(2, '0')}`
              const move = MOVE_MAP.get(entry.moveId)
              const isExpanded = expandedKey === key
              return (
                <Fragment key={key}>
                  <tr
                    onClick={() => setExpandedKey(isExpanded ? null : key)}
                    className={cn(
                      'cursor-pointer border-b border-border transition-colors hover:bg-surface-hover',
                      isExpanded && 'bg-surface-hover',
                    )}
                  >
                    <td className="px-3 py-2.5">
                      <span
                        className={cn(
                          'inline-block rounded-chip px-2 py-0.5 text-xxs font-black',
                          entry.machine === 'HM' ? 'bg-type-water/20 text-type-water' : 'bg-brand-red/10 text-brand-red',
                        )}
                      >
                        {key}
                      </span>
                    </td>
                    <td className="px-3 py-2.5 font-bold text-ink">{move?.nameKo ?? '—'}</td>
                    <td className="px-3 py-2.5">{move && <TypeBadge type={move.type} size="sm" />}</td>
                    <td className="px-3 py-2.5 text-xs text-ink-muted">{move?.category ?? '—'}</td>
                    <td className="px-3 py-2.5 text-right font-mono text-xs text-ink">
                      {move?.power ?? <span className="text-ink-faint">—</span>}
                    </td>
                    <td className="px-3 py-2.5 text-right font-mono text-xs text-ink">
                      {move?.accuracy != null ? `${move.accuracy}%` : <span className="text-ink-faint">—</span>}
                    </td>
                    <td className="px-3 py-2.5 text-right text-xs text-ink-muted">
                      {entry.pokemonIds.length}마리
                      <span className="ml-1 text-ink-faint">{isExpanded ? '▲' : '▼'}</span>
                    </td>
                  </tr>
                  {isExpanded && (
                    <tr className="border-b border-border">
                      <td colSpan={7} className="bg-surface-hover px-4 py-3">
                        <div className="flex flex-wrap gap-2">
                          {entry.pokemonIds.map((id) => {
                            const p = POKEMON_MAP.get(id)
                            if (!p) return null
                            return (
                              <Link
                                key={id}
                                to={`/pokemon/${id}`}
                                title={`${p.nameKo} (#${id})`}
                                className="flex flex-col items-center gap-0.5 rounded-card p-1 hover:bg-border/40"
                              >
                                <img
                                  src={p.spriteUrl}
                                  alt={p.nameKo}
                                  width={40}
                                  height={40}
                                  loading="lazy"
                                  style={{ imageRendering: 'pixelated' }}
                                  className="h-10 w-10"
                                />
                                <span className="text-xxs text-ink-muted">{p.nameKo}</span>
                              </Link>
                            )
                          })}
                        </div>
                      </td>
                    </tr>
                  )}
                </Fragment>
              )
            })}
          </tbody>
        </table>
        {filteredEntries.length === 0 && (
          <div className="py-12 text-center text-sm text-ink-faint">조건에 맞는 기술머신이 없습니다.</div>
        )}
      </div>
    </div>
  )
}
