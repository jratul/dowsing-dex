import type { PokemonStats } from '../../types/pokemon'

const STAT_LABELS: { key: keyof PokemonStats; label: string }[] = [
  { key: 'hp', label: 'HP' },
  { key: 'attack', label: '공격' },
  { key: 'defense', label: '방어' },
  { key: 'specialAttack', label: '특공' },
  { key: 'specialDefense', label: '특방' },
  { key: 'speed', label: '스피드' },
]

export interface StatChartProps {
  stats: PokemonStats
  compareStats?: PokemonStats
  compareLabel?: string
  /** 막대 스케일 기준치 (기본값: 종족값 최대치 255) */
  maxValue?: number
}

export function StatChart({ stats, compareStats, compareLabel, maxValue = 255 }: StatChartProps) {
  return (
    <div className="flex flex-col gap-2">
      {compareStats && compareLabel && (
        <div className="mb-1 flex items-center gap-4 text-xs font-bold text-ink-muted">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-brand-red" /> 기준
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-ink-faint" /> {compareLabel}
          </span>
        </div>
      )}
      {STAT_LABELS.map(({ key, label }) => {
        const value = stats[key]
        const compareValue = compareStats?.[key]
        return (
          <div key={key} className="grid grid-cols-[3rem_2.5rem_1fr] items-center gap-2 text-sm">
            <span className="font-bold text-ink-muted">{label}</span>
            <span className="text-right font-bold text-ink">{value}</span>
            <div className="relative h-3 rounded-chip bg-border">
              <div
                className="absolute inset-y-0 left-0 rounded-chip bg-brand-red"
                style={{ width: `${Math.min(100, (value / maxValue) * 100)}%` }}
              />
              {compareValue !== undefined && (
                <div
                  className="absolute inset-y-0 left-0 rounded-chip bg-ink-faint/70 mix-blend-multiply"
                  style={{ width: `${Math.min(100, (compareValue / maxValue) * 100)}%` }}
                />
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
