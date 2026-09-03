import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { SAMPLE_POKEMON } from '../../data/sample/pokemon.sample'
import { ENCOUNTER_DETAILS, type EncounterDetail } from '../../data/encounter-details.generated'
import { TypeBadge } from '../../components/pokemon/TypeBadge'
import { cn } from '../../lib/cn'
import { gamesForLabel } from '../../lib/encounterVersions'
import type { Pokemon } from '../../types/pokemon'

const GENERATIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 세대별 게임 목록. 위키 라벨(「하트골드·소울실버」)을 게임 단위로 풀어서 모은다 —
// 라벨을 그대로 필터로 쓰면 「하트골드」 전용 33종이 「하트골드·소울실버」와 따로 놀아
// 하트골드를 하는 사람에게 안 보인다. 많이 나오는 게임을 앞에 둔다.
const SEP = String.fromCharCode(1)
const GEN_GAME_ORDER: Record<number, string[]> = (() => {
  const cnt = new Map<string, number>()
  for (const p of SAMPLE_POKEMON) {
    for (const l of p.encounterLocations ?? []) {
      for (const game of gamesForLabel(l.version)) {
        const k = `${l.generation}${SEP}${game}`
        cnt.set(k, (cnt.get(k) ?? 0) + 1)
      }
    }
  }
  const result: Record<number, string[]> = {}
  for (const g of GENERATIONS) result[g] = []
  for (const [k, c] of cnt) {
    const [gen, game] = k.split(SEP)
    result[Number(gen)]?.push(`${game}${SEP}${c}`)
  }
  for (const g of GENERATIONS) {
    result[g] = result[g]
      .sort((a, b) => Number(b.split(SEP)[1]) - Number(a.split(SEP)[1]))
      .map((x) => x.split(SEP)[0])
  }
  return result
})()

/**
 * 짝 라벨(「A·B」)로도 등장하는 게임들. 이 목록에 있는 게임에서만 「전용」 표시가 뜻이 있다 —
 * 「하트골드」는 「하트골드·소울실버」라는 짝이 있으니 단독 라벨이 곧 전용이지만,
 * 「플라티나」는 짝 라벨이 없고 「기라티나」가 같은 게임의 다른 이름일 뿐이라 전용이 아니다.
 */
const PAIRED_GAMES: ReadonlySet<string> = (() => {
  const out = new Set<string>()
  for (const p of SAMPLE_POKEMON) {
    for (const l of p.encounterLocations ?? []) {
      const g = gamesForLabel(l.version)
      if (g.length > 1) for (const x of g) out.add(x)
    }
  }
  return out
})()

interface EncounterInfo {
  version: string
  location: string
  /** 방법별 출현 확률·시간대. 확률 내림차순 */
  details: EncounterDetail[]
}

interface PokemonEntry {
  pokemon: Pokemon
  catchable: boolean
  info: EncounterInfo[]
}

/**
 * 출현 장소 문자열(한국어 위키)에는 확률도 시간대도 없어서, PokeAPI 조우 데이터에서
 * 따로 뽑아 둔 표를 본다. PokeAPI 는 지역명에 한글이 없으므로 "어느 도로에서 몇 %"
 * 가 아니라 방법별 최대 확률로 묶여 있다.
 */
function detailsFor(pokemonId: number, version: string): EncounterDetail[] {
  return ENCOUNTER_DETAILS[pokemonId]?.[version] ?? []
}

export function EncounterPage() {
  const [selectedGen, setSelectedGen] = useState(1)
  const [selectedGame, setSelectedGame] = useState<string>('ALL')
  const [tab, setTab] = useState<'catchable' | 'uncatchable'>('catchable')

  const games = GEN_GAME_ORDER[selectedGen] ?? []

  function handleGenChange(gen: number) {
    setSelectedGen(gen)
    setSelectedGame('ALL')
    setTab('catchable')
  }

  const { catchableList, uncatchableList } = useMemo(() => {
    const seen = new Map<number, PokemonEntry>()

    for (const p of SAMPLE_POKEMON) {
      const locs = (p.encounterLocations ?? []).filter((l) => {
        if (l.generation !== selectedGen) return false
        // 「하트골드」를 고르면 「하트골드·소울실버」 공통분도 함께 보여야 한다
        if (selectedGame !== 'ALL' && !gamesForLabel(l.version).includes(selectedGame)) return false
        return true
      })
      if (locs.length === 0) continue

      const hasCatch = locs.some((l) => !l.unavailable)
      const prev = seen.get(p.id)

      const rows: EncounterInfo[] = locs
        .filter((l) => l.location)
        .map((l) => ({ version: l.version, location: l.location!, details: detailsFor(p.id, l.version) }))

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
  }, [selectedGen, selectedGame])

  const list = tab === 'catchable' ? catchableList : uncatchableList

  return (
    <div className="mx-auto w-full lg:w-4/5 px-4 py-6">
      <h1 className="mb-1 text-2xl font-black text-ink">출현 포켓몬</h1>
      <p className="mb-2 text-sm text-ink-faint">게임별 야생 출현 포켓몬과 포획 불가 포켓몬 목록</p>
      <p className="mb-5 text-xs leading-relaxed text-ink-muted">
        장소 아래의{' '}
        <span className="rounded bg-surface-hover px-1 font-bold">풀숲 45%</span> 같은 칸은{' '}
        <b>그 방법으로 한 자리에서 나올 최대 확률</b>입니다. 지역별이 아니라 방법별 최댓값이라,
        같은 방법이라도 장소에 따라 더 낮을 수 있습니다.{' '}
        <span className="rounded bg-indigo-100 px-1 font-bold text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
          (밤)
        </span>{' '}
        <span className="rounded bg-amber-100 px-1 font-bold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
          (아침·낮)
        </span>{' '}
        이 붙으면 <b>그 시간대에만</b> 나온다는 뜻이고, 없으면 시간과 무관합니다. 사파리존처럼
        플레이어가 배치를 정하는 구역은 시간대 판단에서 제외했습니다.
        <br />
        게임은 <b>짝이 아니라 한 편씩</b> 고릅니다 — 하트골드를 고르면 소울실버와 공통으로 나오는
        것과 하트골드에만 나오는 것이 함께 보이고, 후자에는{' '}
        <span className="rounded bg-brand-red/10 px-1 font-bold text-brand-red">하트골드 전용</span>{' '}
        표시가 붙습니다.
      </p>

      {/* 세대 탭 */}
      <div className="mb-3 flex flex-wrap gap-1.5">
        {GENERATIONS.filter((g) => (GEN_GAME_ORDER[g]?.length ?? 0) > 0).map((gen) => (
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
          onClick={() => setSelectedGame('ALL')}
          className={cn(
            'shrink-0 rounded-chip border px-3 py-1 text-xs font-bold transition-colors',
            selectedGame === 'ALL'
              ? 'border-brand-red bg-brand-red/10 text-brand-red'
              : 'border-border text-ink-muted hover:border-brand-red hover:text-brand-red',
          )}
        >
          전체
        </button>
        {games.map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => setSelectedGame(v)}
            className={cn(
              'shrink-0 rounded-chip border px-3 py-1 text-xs font-bold transition-colors',
              selectedGame === v
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

              {/* 출현 장소 + 방법별 확률 */}
              <div className="ml-auto min-w-0 flex-1 pt-1.5 text-right">
                {info.length > 0 ? (
                  <ul className="space-y-1">
                    {info.map((r) => (
                      <li key={`${r.version}|${r.location}`}>
                        <div className="flex items-baseline justify-end gap-1">
                          {/* 짝 라벨이 있는 게임에서, 단독 라벨로 나오면 그 버전 전용이다 */}
                          {selectedGame !== 'ALL' &&
                            PAIRED_GAMES.has(selectedGame) &&
                            gamesForLabel(r.version).length === 1 && (
                              <span className="shrink-0 rounded bg-brand-red/10 px-1 text-xxs font-bold text-brand-red">
                                {selectedGame} 전용
                              </span>
                            )}
                          <span
                            className="truncate text-xs text-ink-muted"
                            title={selectedGame === 'ALL' ? `[${r.version}] ${r.location}` : r.location}
                          >
                            {selectedGame === 'ALL' ? `[${r.version}] ${r.location}` : r.location}
                          </span>
                        </div>
                        {/* 확률·시간대는 장소가 잘려도 안 사라지게 별도 줄에 둔다 */}
                        {r.details.length > 0 && (
                          <div className="mt-0.5 flex flex-wrap items-center justify-end gap-1">
                            {r.details.map((d) => (
                              <span
                                key={d.method}
                                className={cn(
                                  'inline-flex shrink-0 items-center gap-0.5 rounded px-1 py-px text-xxs font-bold',
                                  d.time === '밤'
                                    ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300'
                                    : d.time
                                      ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300'
                                      : 'bg-surface-hover text-ink-muted',
                                )}
                              >
                                {d.method} {d.chance}%{d.time && ` (${d.time})`}
                              </span>
                            ))}
                          </div>
                        )}
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
