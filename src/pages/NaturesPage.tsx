import {
  NATURES,
  STAT_LABEL,
  STAT_FLAVOR,
  STAT_KEYS,
  getNatureByStats,
  type StatKey,
} from '../data/natures.data'

const STAT_COLOR: Record<StatKey, { cell: string; badge: string; text: string }> = {
  attack: {
    cell: 'bg-red-50 dark:bg-red-950/30',
    badge: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
    text: 'text-red-600 dark:text-red-400',
  },
  defense: {
    cell: 'bg-amber-50 dark:bg-amber-950/30',
    badge: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
    text: 'text-amber-600 dark:text-amber-400',
  },
  speed: {
    cell: 'bg-green-50 dark:bg-green-950/30',
    badge: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
    text: 'text-green-600 dark:text-green-400',
  },
  'special-attack': {
    cell: 'bg-purple-50 dark:bg-purple-950/30',
    badge: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
    text: 'text-purple-600 dark:text-purple-400',
  },
  'special-defense': {
    cell: 'bg-cyan-50 dark:bg-cyan-950/30',
    badge: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300',
    text: 'text-cyan-600 dark:text-cyan-400',
  },
}

function StatBadge({ stat, type }: { stat: StatKey; type: 'up' | 'down' }) {
  const c = STAT_COLOR[stat]
  return (
    <span className={`inline-block rounded px-1.5 py-0.5 text-xxs font-bold ${c.badge}`}>
      {type === 'up' ? '▲' : '▼'} {STAT_LABEL[stat]}
    </span>
  )
}

function FlavorBadge({ stat }: { stat: StatKey }) {
  const c = STAT_COLOR[stat]
  return (
    <span className={`inline-block rounded px-1.5 py-0.5 text-xxs font-semibold ${c.badge}`}>
      {STAT_FLAVOR[stat]}
    </span>
  )
}

export function NaturesPage() {
  return (
    <div className="mx-auto w-full px-4 py-6 lg:w-4/5">
      <h1 className="mb-1 text-2xl font-bold text-ink">성격 (Nature)</h1>
      <p className="mb-6 text-sm text-ink-muted">
        성격은 3세대(루비/사파이어)부터 도입된 시스템으로, 포켓몬의 스탯 하나를 10% 올리고
        다른 스탯 하나를 10% 내린다. 중립 성격 5종은 스탯 변화가 없다.
        좋아하는 맛의 포로 먹이면 친밀도가 더 많이 올라가고, 싫어하는 맛은 덜 오른다.
      </p>

      {/* 5×5 매트릭스 */}
      <section className="mb-10">
        <h2 className="mb-3 text-lg font-bold text-ink">5×5 성격 표</h2>
        <p className="mb-4 text-sm text-ink-muted">
          가로축 = 상승 스탯, 세로축 = 하락 스탯. 대각선(회색)은 중립 성격.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[540px] border-collapse text-center text-sm">
            <thead>
              <tr>
                <th className="border border-border bg-surface-hover p-2 text-xs text-ink-muted">
                  ▼하락 / 상승▶
                </th>
                {STAT_KEYS.map((up) => (
                  <th
                    key={up}
                    className={`border border-border p-2 text-xs font-bold ${STAT_COLOR[up].text}`}
                  >
                    {STAT_LABEL[up]}↑
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {STAT_KEYS.map((down) => (
                <tr key={down}>
                  <td
                    className={`border border-border p-2 text-xs font-bold ${STAT_COLOR[down].text}`}
                  >
                    {STAT_LABEL[down]}↓
                  </td>
                  {STAT_KEYS.map((up) => {
                    const isNeutral = up === down
                    const nature = isNeutral ? null : getNatureByStats(up, down)
                    if (isNeutral) {
                      // 대각선 — 중립 성격 (행렬상 해당 위치에 중립 성격 배치)
                      // 5개 중립: Hardy/Docile/Serious/Bashful/Quirky (순서대로 대각선)
                      const neutralIdx = STAT_KEYS.indexOf(up)
                      const neutral = [
                        NATURES.find((n) => n.en === 'Hardy'),
                        NATURES.find((n) => n.en === 'Docile'),
                        NATURES.find((n) => n.en === 'Serious'),
                        NATURES.find((n) => n.en === 'Bashful'),
                        NATURES.find((n) => n.en === 'Quirky'),
                      ][neutralIdx]
                      return (
                        <td
                          key={up}
                          className="border border-border bg-surface-hover p-2 text-center"
                        >
                          <div className="font-bold text-ink-muted">{neutral?.ko}</div>
                          <div className="text-xxs text-ink-faint">{neutral?.en}</div>
                        </td>
                      )
                    }
                    return (
                      <td
                        key={up}
                        className={`border border-border p-2 text-center ${STAT_COLOR[up].cell}`}
                      >
                        <div className="font-bold text-ink">{nature?.ko}</div>
                        <div className="text-xxs text-ink-muted">{nature?.en}</div>
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 전체 목록 테이블 */}
      <section>
        <h2 className="mb-3 text-lg font-bold text-ink">전체 성격 목록</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-hover">
                <th className="p-3 text-left font-semibold text-ink">한국어</th>
                <th className="p-3 text-left font-semibold text-ink">영어</th>
                <th className="p-3 text-center font-semibold text-ink">상승 스탯</th>
                <th className="p-3 text-center font-semibold text-ink">하락 스탯</th>
                <th className="p-3 text-center font-semibold text-ink">좋아하는 맛</th>
                <th className="p-3 text-center font-semibold text-ink">싫어하는 맛</th>
              </tr>
            </thead>
            <tbody>
              {NATURES.map((n, i) => (
                <tr
                  key={n.id}
                  className={`border-b border-border transition-colors hover:bg-surface-hover ${
                    i % 2 === 0 ? '' : 'bg-surface-hover/40'
                  }`}
                >
                  <td className="p-3 font-semibold text-ink">{n.ko}</td>
                  <td className="p-3 text-ink-muted">{n.en}</td>
                  <td className="p-3 text-center">
                    {n.statUp ? (
                      <StatBadge stat={n.statUp} type="up" />
                    ) : (
                      <span className="text-xs text-ink-faint">—</span>
                    )}
                  </td>
                  <td className="p-3 text-center">
                    {n.statDown ? (
                      <StatBadge stat={n.statDown} type="down" />
                    ) : (
                      <span className="text-xs text-ink-faint">—</span>
                    )}
                  </td>
                  <td className="p-3 text-center">
                    {n.statUp ? (
                      <FlavorBadge stat={n.statUp} />
                    ) : (
                      <span className="text-xs text-ink-faint">—</span>
                    )}
                  </td>
                  <td className="p-3 text-center">
                    {n.statDown ? (
                      <FlavorBadge stat={n.statDown} />
                    ) : (
                      <span className="text-xs text-ink-faint">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 스탯별 추천 성격 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-ink">스탯별 추천 성격</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STAT_KEYS.map((stat) => {
            const ups = NATURES.filter((n) => n.statUp === stat)
            return (
              <div key={stat} className={`rounded-card border border-border p-4 ${STAT_COLOR[stat].cell}`}>
                <h3 className={`mb-2 font-bold ${STAT_COLOR[stat].text}`}>
                  {STAT_LABEL[stat]} ↑ 성격
                </h3>
                <div className="space-y-1">
                  {ups.map((n) => (
                    <div key={n.id} className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-ink">
                        {n.ko} ({n.en})
                      </span>
                      <span className="text-xs text-ink-muted">
                        {n.statDown ? `${STAT_LABEL[n.statDown]}↓` : ''}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* 중립 성격 */}
      <section className="mt-6">
        <h2 className="mb-3 text-lg font-bold text-ink">중립 성격 (스탯 변화 없음)</h2>
        <div className="flex flex-wrap gap-2">
          {NATURES.filter((n) => !n.statUp).map((n) => (
            <span
              key={n.id}
              className="rounded-chip border border-border bg-surface-hover px-3 py-1 text-sm font-medium text-ink-muted"
            >
              {n.ko} ({n.en})
            </span>
          ))}
        </div>
        <p className="mt-2 text-xs text-ink-muted">
          ※ 중립 성격은 어떤 맛도 좋아하거나 싫어하지 않는다.
        </p>
      </section>
    </div>
  )
}
