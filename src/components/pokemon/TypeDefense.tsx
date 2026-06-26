import { classifyMatchup, profile } from '../../lib/typeChart'
import type { TypeName } from '../../types/type-chart'
import { TypeBadge } from './TypeBadge'

export interface TypeDefenseProps {
  types: TypeName[]
}

export function TypeDefense({ types }: TypeDefenseProps) {
  const matchups = profile(types)
  const weak = matchups.filter((m) => classifyMatchup(m.m) === 'weak')
  const guarded = matchups.filter((m) => classifyMatchup(m.m) !== 'weak' && classifyMatchup(m.m) !== 'neutral')

  return (
    <div className="flex flex-col gap-4">
      {weak.length > 0 && (
        <div className="flex flex-col gap-2">
          <span className="text-sm font-bold text-brand-red">⚠ 약점 (받는 데미지 ↑)</span>
          <div className="flex flex-wrap gap-2">
            {weak.map(({ type, m }) => (
              <span key={type} className="flex items-center gap-1">
                <TypeBadge type={type} size="sm" />
                <span className="text-xs font-bold text-ink-faint">×{m}</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {guarded.length > 0 && (
        <div className="flex flex-col gap-2">
          <span className="text-sm font-bold text-ink-muted">🛡 반감 / 무효 (데미지 ↓)</span>
          <div className="flex flex-wrap gap-2">
            {guarded.map(({ type, m }) => (
              <span key={type} className="flex items-center gap-1">
                <TypeBadge type={type} size="sm" />
                <span className="text-xs font-bold text-ink-faint">×{m}</span>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
