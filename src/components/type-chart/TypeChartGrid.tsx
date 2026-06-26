import { TYPE_ORDER, mult } from '../../lib/typeChart'
import type { TypeName } from '../../types/type-chart'
import { cn } from '../../lib/cn'

export interface TypeChartGridProps {
  highlightType?: TypeName
}

const CELL_STYLE: Record<number, string> = {
  0: 'bg-ink/80 text-white',
  0.5: 'bg-border text-ink-muted',
  1: 'bg-white text-ink-faint',
  2: 'bg-brand-red/15 text-brand-red',
}

export function TypeChartGrid({ highlightType }: TypeChartGridProps) {
  return (
    <div className="overflow-x-auto">
      <table className="border-collapse text-xs">
        <thead>
          <tr>
            <th className="sticky left-0 bg-white p-1" />
            {TYPE_ORDER.map((def) => (
              <th
                key={def}
                className={cn('w-8 p-1 font-bold text-ink-muted', def === highlightType && 'text-brand-red')}
              >
                {def}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TYPE_ORDER.map((atk) => (
            <tr key={atk}>
              <th
                className={cn(
                  'sticky left-0 bg-white p-1 text-right font-bold text-ink-muted',
                  atk === highlightType && 'text-brand-red',
                )}
              >
                {atk}
              </th>
              {TYPE_ORDER.map((def) => {
                const m = mult(atk, def)
                return (
                  <td key={def} className={cn('h-8 w-8 border border-border text-center', CELL_STYLE[m])}>
                    {m === 1 ? '' : m}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
