import { useState, useMemo } from 'react'
import { EVOLUTION_ITEMS, BATTLE_ITEMS, type ItemEntry } from '../../data/items.generated'
import { evolutionsForItem, type ItemEvolution } from '../../lib/evolutionItems'
import { PokemonLink } from '../../components/guide/PokemonLink'

type TabKey = 'evolution' | 'battle'

const CATEGORY_LABEL: Record<string, string> = {
  evolution: '진화',
  'held-items': '지니기',
  choice: '구애',
  'type-enhancement': '타입강화',
  'bad-held-items': '디버프',
}

const CATEGORY_COLOR: Record<string, string> = {
  evolution: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  'held-items': 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  choice: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  'type-enhancement': 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  'bad-held-items': 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
}

function GenBadge({ gen }: { gen: number | null }) {
  if (!gen) return null
  return (
    <span className="inline-block rounded bg-surface-hover px-1.5 py-0.5 text-xxs font-bold text-ink-muted">
      {gen}세대~
    </span>
  )
}

/** 이 아이템으로 일어나는 진화를 "이전 → 이후" 한 줄씩 보여준다. */
function EvolutionCell({ evolutions }: { evolutions: ItemEvolution[] }) {
  if (evolutions.length === 0) return <span className="text-ink-faint">—</span>
  return (
    <ul className="flex flex-col gap-0.5">
      {evolutions.map((e) => (
        <li
          key={`${e.fromId}-${e.toId}`}
          className="flex min-h-7 flex-wrap items-center gap-1 text-sm leading-loose whitespace-nowrap text-ink"
        >
          <PokemonLink id={e.fromId} label={e.from} />
          <span className="text-ink-faint">→</span>
          <PokemonLink id={e.toId} label={e.to} />
          {e.condition && (
            <span className="rounded bg-surface-hover px-1.5 py-0.5 text-xxs font-bold text-ink-muted">
              {e.condition}
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}

function ItemRow({ item, showEvolutions }: { item: ItemEntry; showEvolutions: boolean }) {
  return (
    <tr className="border-b border-border transition-colors hover:bg-surface-hover">
      <td className="p-3 align-top">
        <div className="flex items-center gap-2">
          {item.sprite && (
            <img
              src={item.sprite}
              alt={item.nameKo ?? item.nameEn ?? item.apiName}
              width={24}
              height={24}
              loading="lazy"
              className="shrink-0"
            />
          )}
          <div>
            <div className="font-semibold text-ink">{item.nameKo ?? item.nameEn}</div>
            <div className="text-xs text-ink-muted">{item.nameEn}</div>
          </div>
        </div>
      </td>
      <td className="p-3 text-center align-top">
        <div className="flex flex-col items-center gap-1">
          <GenBadge gen={item.generation} />
          <span
            className={`inline-block rounded px-1.5 py-0.5 text-xxs font-bold ${CATEGORY_COLOR[item.category] ?? 'bg-surface-hover text-ink-muted'}`}
          >
            {CATEGORY_LABEL[item.category] ?? item.category}
          </span>
        </div>
      </td>
      <td className="p-3 align-top text-sm text-ink-muted">{item.descKo ?? '—'}</td>
      {showEvolutions && (
        <td className="p-3 align-top">
          <EvolutionCell evolutions={evolutionsForItem(item.nameKo)} />
        </td>
      )}
    </tr>
  )
}

function ItemTable({ items, label }: { items: ItemEntry[]; label: string }) {
  const [search, setSearch] = useState('')
  const [genFilter, setGenFilter] = useState<number | null>(null)

  const generations = useMemo(() => {
    const gens = [...new Set(items.map((i) => i.generation).filter(Boolean))].sort(
      (a, b) => (a ?? 0) - (b ?? 0),
    ) as number[]
    return gens
  }, [items])

  // 그 표에 진화를 일으키는 아이템이 하나도 없으면 열 자체를 만들지 않는다.
  const showEvolutions = useMemo(() => items.some((i) => evolutionsForItem(i.nameKo).length > 0), [items])

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return items.filter((item) => {
      if (genFilter !== null && item.generation !== genFilter) return false
      if (q) {
        return (
          (item.nameKo?.toLowerCase().includes(q) ?? false) ||
          (item.nameEn?.toLowerCase().includes(q) ?? false) ||
          item.apiName.toLowerCase().includes(q)
        )
      }
      return true
    })
  }, [items, search, genFilter])

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <input
          type="search"
          placeholder={`${label} 이름으로 검색...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-button border border-border bg-surface-hover px-3 py-1.5 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-1 focus:ring-brand-red"
        />
        <div className="flex flex-wrap gap-1">
          {generations.map((g) => (
            <button
              key={g}
              onClick={() => setGenFilter((prev) => (prev === g ? null : g))}
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
              onClick={() => setGenFilter(null)}
              className="rounded-chip px-3 py-1 text-xs font-semibold text-ink-muted hover:text-ink"
            >
              전체
            </button>
          )}
        </div>
      </div>
      <p className="mb-2 text-xs text-ink-muted">
        {filtered.length.toLocaleString('ko-KR')}개{' '}
        {search || genFilter !== null ? '해당' : ''}
      </p>
      <div className="overflow-x-auto rounded-card border border-border">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-hover">
              <th className="p-3 text-left font-semibold text-ink">아이템명</th>
              <th className="p-3 text-center font-semibold text-ink">세대 / 종류</th>
              <th className="p-3 text-left font-semibold text-ink">효과</th>
              {showEvolutions && (
                <th className="p-3 text-left font-semibold text-ink">진화시키는 포켓몬</th>
              )}
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => (
              <ItemRow key={item.id} item={item} showEvolutions={showEvolutions} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function ItemsPage() {
  const [tab, setTab] = useState<TabKey>('evolution')

  return (
    <div className="mx-auto w-full px-4 py-6 lg:w-4/5">
      <h1 className="mb-1 text-2xl font-bold text-ink">아이템 (Items)</h1>
      <p className="mb-6 text-sm text-ink-muted">
        진화 아이템과 배틀용 지니기 아이템 목록. 3세대 이후 공식 시리즈 기준.
      </p>

      {/* 탭 */}
      <div className="mb-6 flex gap-1 border-b border-border">
        {(
          [
            { key: 'evolution', label: `진화 아이템 (${EVOLUTION_ITEMS.length.toLocaleString('ko-KR')})` },
            { key: 'battle', label: `배틀 지니기 (${BATTLE_ITEMS.length.toLocaleString('ko-KR')})` },
          ] as { key: TabKey; label: string }[]
        ).map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`px-4 py-2 text-sm font-semibold transition-colors ${
              tab === key
                ? 'border-b-2 border-brand-red text-brand-red'
                : 'text-ink-muted hover:text-ink'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === 'evolution' && (
        <>
          <p className="mb-4 text-sm text-ink-muted">
            진화에 사용되거나 교환 진화 시 지닌 채로 진화하는 아이템 목록. 오른쪽 칸에 그
            아이템으로 진화하는 포켓몬을 「이전 → 이후」로 정리했습니다. 알로라·히스이 등
            리전폼은 이름 앞에 지방을 붙여 원종과 구분했습니다.
          </p>
          <ItemTable items={EVOLUTION_ITEMS} label="진화 아이템" />
        </>
      )}

      {tab === 'battle' && (
        <>
          <p className="mb-4 text-sm text-ink-muted">
            배틀 중 지니게 해서 효과를 발휘하는 아이템 목록.
            구애 아이템, 타입 강화 아이템, 상태이상 유발 아이템 포함.
            금속코트·왕의징표석·예리한손톱처럼 지닌 채로 진화를 일으키는 아이템은
            오른쪽 칸에 그 대상을 함께 적었습니다.
          </p>
          <ItemTable items={BATTLE_ITEMS} label="배틀 지니기" />
        </>
      )}
    </div>
  )
}
