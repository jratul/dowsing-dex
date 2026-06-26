import { classifyMatchup, profile } from '../../lib/typeChart'
import type { TypeName } from '../../types/type-chart'
import { TypeBadge } from './TypeBadge'

export interface TypeDefenseProps {
  types: TypeName[]
}

const GROUP_LABEL = {
  weak: '약점',
  resist: '반감',
  immune: '무효',
} as const

export function TypeDefense({ types }: TypeDefenseProps) {
  const matchups = profile(types)
  const groups = (['weak', 'resist', 'immune'] as const).map((cls) => ({
    cls,
    items: matchups.filter((m) => classifyMatchup(m.m) === cls),
  }))

  return (
    <div className="flex flex-col gap-3">
      {groups.map(({ cls, items }) =>
        items.length === 0 ? null : (
          <div key={cls} className="flex flex-wrap items-center gap-2">
            <span className="w-12 shrink-0 text-sm font-bold text-ink-muted">{GROUP_LABEL[cls]}</span>
            {items.map(({ type, m }) => (
              <span key={type} className="flex items-center gap-1">
                <TypeBadge type={type} size="sm" />
                <span className="text-xs font-bold text-ink-faint">×{m}</span>
              </span>
            ))}
          </div>
        ),
      )}
    </div>
  )
}
