import type { ReactNode } from 'react'

export interface GuideTableProps {
  headers: string[]
  rows: ReactNode[][]
}

export function GuideTable({ headers, rows }: GuideTableProps) {
  return (
    <div className="overflow-x-auto rounded-card border border-border-strong">
      <table className="w-full min-w-max text-left text-xs">
        <thead>
          <tr className="border-b border-border-strong bg-surface-hover">
            {headers.map((h) => (
              <th key={h} className="px-3 py-2 font-black text-ink-faint whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border last:border-0">
              {row.map((cell, j) => (
                <td key={j} className="px-3 py-2 text-ink">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
