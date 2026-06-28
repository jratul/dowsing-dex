import { TYPE_BG_CLASS, TYPE_TEXT_CLASS, TYPES_BY_ERA, mult, type TypeEra } from '../../lib/typeChart'
import type { TypeName } from '../../types/type-chart'
import { cn } from '../../lib/cn'

export interface TypeChartGridProps {
  era?: TypeEra
  highlightType?: TypeName
}

const CELL_STYLE: Record<number, string> = {
  0: 'bg-matchup-immune text-white',
  0.5: 'bg-matchup-resist text-white',
  1: 'bg-white text-ink-faint',
  2: 'bg-matchup-weak text-white',
}

function TypeChip({ type, highlight }: { type: TypeName; highlight?: boolean }) {
  return (
    <span
      className={cn(
        'inline-block w-10 rounded-button px-1 py-0.5 text-[11px] font-bold',
        TYPE_BG_CLASS[type],
        TYPE_TEXT_CLASS[type],
        highlight && 'ring-2 ring-ink ring-offset-1',
      )}
    >
      {type}
    </span>
  )
}

export function TypeChartGrid({ era = '6세대 이후', highlightType }: TypeChartGridProps) {
  const types = TYPES_BY_ERA[era]

  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-ink-faint">세로(공격) → 가로(방어) 기준.</p>
      <div className="overflow-x-auto">
        <table className="border-collapse text-xs">
          <thead>
            <tr>
              <th className="sticky left-0 bg-white p-1" />
              {types.map((def) => (
                <th key={def} className="p-1">
                  <TypeChip type={def} highlight={def === highlightType} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {types.map((atk) => (
              <tr key={atk}>
                <th className="sticky left-0 bg-white p-1">
                  <TypeChip type={atk} highlight={atk === highlightType} />
                </th>
                {types.map((def) => {
                  const m = mult(atk, def, era)
                  return (
                    <td key={def} className={cn('h-8 w-10 border border-border text-center font-bold', CELL_STYLE[m])}>
                      {m === 1 ? '' : m}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex gap-4 text-xs text-ink-muted">
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-sm bg-matchup-weak" /> ×2
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-sm bg-matchup-resist" /> ×½
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-sm bg-matchup-immune" /> ×0
        </span>
      </div>
    </div>
  )
}
