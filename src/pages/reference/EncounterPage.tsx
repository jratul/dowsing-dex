import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { SAMPLE_POKEMON } from '../../data/sample/pokemon.sample'
import { ENCOUNTER_TIMES } from '../../data/encounter-times.generated'
import { TypeBadge } from '../../components/pokemon/TypeBadge'
import { cn } from '../../lib/cn'
import type { Pokemon } from '../../types/pokemon'

const GENERATIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 세대별 대표 버전 순서 (데이터에 등장하는 버전명 그대로 사용, 많이 등장하는 것 우선)
// 모듈 로드 시 한 번 계산
const GEN_VERSION_ORDER: Record<number, string[]> = (() => {
  const cnt = new Map<string, number>()
  for (const p of SAMPLE_POKEMON) {
    for (const l of p.encounterLocations ?? []) {
      const k = `${l.generation}__${l.version}`
      cnt.set(k, (cnt.get(k) ?? 0) + 1)
    }
  }
  const result: Record<number, string[]> = {}
  for (const [k, c] of cnt) {
    const [gen, ver] = k.split('__')
    const g = Number(gen)
    if (!result[g]) result[g] = []
    result[g].push(ver + '\0' + c)
  }
  for (const g of GENERATIONS) {
    result[g] = (result[g] ?? [])
      .sort((a, b) => Number(b.split('\0')[1]) - Number(a.split('\0')[1]))
      .map((x) => x.split('\0')[0])
  }
  return result
})()

interface EncounterInfo {
  version: string
  location: string
  /** 그 시간대에만 나올 때만 값이 있다. "밤", "아침·낮" 등 */
  time?: string
}

interface PokemonEntry {
  pokemon: Pokemon
  catchable: boolean
  info: EncounterInfo[]
}

/**
 * 출현 장소 문자열(한국어 위키)에는 시간대가 거의 안 적혀 있어서, PokeAPI 의
 * 조우 조건에서 따로 뽑아 둔 표를 본다. 값이 있으면 그 시간대에만 나온다는 뜻이다.
 */
function timeTag(pokemonId: number, version: string): string | undefined {
  return ENCOUNTER_TIMES[pokemonId]?.[version]
}

export function EncounterPage() {
  const [selectedGen, setSelectedGen] = useState(1)
  const [selectedVersion, setSelectedVersion] = useState<string>('ALL')
  const [tab, setTab] = useState<'catchable' | 'uncatchable'>('catchable')

  const versions = GEN_VERSION_ORDER[selectedGen] ?? []

  function handleGenChange(gen: number) {
    setSelectedGen(gen)
    setSelectedVersion('ALL')
    setTab('catchable')
  }

  const { catchableList, uncatchableList } = useMemo(() => {
    const seen = new Map<number, PokemonEntry>()

    for (const p of SAMPLE_POKEMON) {
      const locs = (p.encounterLocations ?? []).filter((l) => {
        if (l.generation !== selectedGen) return false
        if (selectedVersion !== 'ALL' && l.version !== selectedVersion) return false
        return true
      })
      if (locs.length === 0) continue

      const hasCatch = locs.some((l) => !l.unavailable)
      const prev = seen.get(p.id)

      const rows: EncounterInfo[] = locs
        .filter((l) => l.location)
        .map((l) => ({ version: l.version, location: l.location!, time: timeTag(p.id, l.version) }))

      if (!prev) {
        seen.set(p.id, { pokemon: p, catchable: hasCatch, info: rows })
      } else {
        // 같은 포켓몬이 여러 버전에 중복 등장 → 병합
        if (hasCatch) prev.catchable = true
        for (const r of rows) {
          if (!prev.info.some((x) => x.version === r.version && x.location === r.location)) prev.info.push(r)
        }
      }
    }

    const sorted = [...seen.values()].sort(
      (a, b) => a.pokemon.dexNumber - b.pokemon.dexNumber || a.pokemon.id - b.pokemon.id,
    )
    return {
      catchableList: sorted.filter((e) => e.catchable),
      uncatchableList: sorted.filter((e) => !e.catchable),
    }
  }, [selectedGen, selectedVersion])

  const list = tab === 'catchable' ? catchableList : uncatchableList

  return (
    <div className="mx-auto w-full lg:w-4/5 px-4 py-6">
      <h1 className="mb-1 text-2xl font-black text-ink">출현 포켓몬</h1>
      <p className="mb-2 text-sm text-ink-faint">세대·버전별 야생 출현 포켓몬과 포획 불가 포켓몬 목록</p>
      <p className="mb-5 flex flex-wrap items-center gap-1.5 text-xs text-ink-muted">
        <span className="rounded bg-indigo-100 px-1 font-bold text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
          (밤)
        </span>
        <span className="rounded bg-amber-100 px-1 font-bold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
          (아침·낮)
        </span>
        처럼 붙은 것은 <b>그 시간대에만</b> 나온다는 뜻입니다. 표시가 없으면 시간과 무관하게 나옵니다.
        사파리존처럼 플레이어가 배치를 정하는 구역은 판단에서 제외했습니다.
      </p>

      {/* 세대 탭 */}
      <div className="mb-3 flex flex-wrap gap-1.5">
        {GENERATIONS.filter((g) => (GEN_VERSION_ORDER[g]?.length ?? 0) > 0).map((gen) => (
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
            {gen}세대
          </button>
        ))}
      </div>

      {/* 버전 선택 */}
      <div className="scrollbar-hide mb-4 flex gap-1.5 overflow-x-auto pb-1">
        <button
          type="button"
          onClick={() => setSelectedVersion('ALL')}
          className={cn(
            'shrink-0 rounded-chip border px-3 py-1 text-xs font-bold transition-colors',
            selectedVersion === 'ALL'
              ? 'border-brand-red bg-brand-red/10 text-brand-red'
              : 'border-border text-ink-muted hover:border-brand-red hover:text-brand-red',
          )}
        >
          전체
        </button>
        {versions.map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => setSelectedVersion(v)}
            className={cn(
              'shrink-0 rounded-chip border px-3 py-1 text-xs font-bold transition-colors',
              selectedVersion === v
                ? 'border-brand-red bg-brand-red/10 text-brand-red'
                : 'border-border text-ink-muted hover:border-brand-red hover:text-brand-red',
            )}
          >
            {v}
          </button>
        ))}
      </div>

      {/* 포획 가능 / 불가 탭 */}
      <div className="mb-4 flex gap-2 border-b border-border">
        <button
          type="button"
          onClick={() => setTab('catchable')}
          className={cn(
            'border-b-2 px-4 py-2 text-sm font-bold transition-colors',
            tab === 'catchable'
              ? 'border-brand-red text-brand-red'
              : 'border-transparent text-ink-muted hover:text-ink',
          )}
        >
          야생 포획 가능
          <span className="ml-1.5 text-xs text-ink-faint">{catchableList.length}</span>
        </button>
        <button
          type="button"
          onClick={() => setTab('uncatchable')}
          className={cn(
            'border-b-2 px-4 py-2 text-sm font-bold transition-colors',
            tab === 'uncatchable'
              ? 'border-brand-red text-brand-red'
              : 'border-transparent text-ink-muted hover:text-ink',
          )}
        >
          포획 불가 (교환·이벤트 등)
          <span className="ml-1.5 text-xs text-ink-faint">{uncatchableList.length}</span>
        </button>
      </div>

      {/* 포켓몬 목록 */}
      {list.length === 0 ? (
        <div className="py-16 text-center text-sm text-ink-faint">해당하는 포켓몬이 없습니다.</div>
      ) : (
        <div className="divide-y divide-border rounded-card border border-border">
          {list.map(({ pokemon: p, info }) => (
            <div key={p.id} className="flex items-start gap-3 px-3 py-2.5 hover:bg-surface-hover">
              {/* 스프라이트 + 번호 + 이름 */}
              <Link
                to={`/pokemon/${p.id}`}
                className="flex shrink-0 items-center gap-2 hover:opacity-80"
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
                <div>
                  <span className="block text-xxs text-ink-faint">#{String(p.dexNumber).padStart(3, '0')}</span>
                  <span className="block text-sm font-bold text-ink">{p.nameKo}</span>
                  {p.formLabel && <span className="block text-xxs text-ink-faint">{p.formLabel}</span>}
                </div>
              </Link>

              {/* 타입 뱃지 */}
              <div className="flex shrink-0 items-center gap-1 pt-2">
                {p.types.map((t) => (
                  <TypeBadge key={t} type={t} size="sm" />
                ))}
              </div>

              {/* 출현 장소 */}
              <div className="ml-auto min-w-0 flex-1 pt-1.5 text-right">
                {info.length > 0 ? (
                  <ul className="space-y-0.5">
                    {info.map((r) => (
                      <li
                        key={`${r.version}|${r.location}`}
                        className="flex items-baseline justify-end gap-1 text-xs text-ink-muted"
                        title={`${selectedVersion === 'ALL' ? `[${r.version}] ` : ''}${r.location}${r.time ? ` (${r.time})` : ''}`}
                      >
                        {/* 시간대는 줄이 잘려도 안 사라지게 장소 텍스트 밖에 둔다 */}
                        {r.time && (
                          <span
                            className={cn(
                              'shrink-0 rounded px-1 font-bold',
                              r.time === '밤'
                                ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300'
                                : 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
                            )}
                          >
                            ({r.time})
                          </span>
                        )}
                        <span className="truncate">
                          {selectedVersion === 'ALL' ? `[${r.version}] ${r.location}` : r.location}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span className="text-xs text-ink-faint">—</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
