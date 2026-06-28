import { attackProfile, classifyMatchup, type TypeEra } from '../../lib/typeChart'
import type { TypeName } from '../../types/type-chart'
import { TypeBadge } from '../pokemon/TypeBadge'

export interface TypeOffenseProps {
  type: TypeName
  era?: TypeEra
}

/** 선택한 타입으로 "공격할 때"의 상성 — TypeDefense(방어 시)와 짝을 이룬다. */
export function TypeOffense({ type, era }: TypeOffenseProps) {
  const matchups = attackProfile(type, era)
  const superEffective = matchups.filter((m) => classifyMatchup(m.m) === 'weak')
  const notEffective = matchups.filter((m) => classifyMatchup(m.m) !== 'weak' && classifyMatchup(m.m) !== 'neutral')

  return (
    <div className="flex flex-col gap-4">
      {superEffective.length > 0 && (
        <div className="flex flex-col gap-2">
          <span className="text-sm font-bold text-matchup-weak">✅ 효과가 굉장함 (주는 데미지 ↑)</span>
          <div className="flex flex-wrap gap-2">
            {superEffective.map(({ type: t, m }) => (
              <span key={t} className="flex items-center gap-1">
                <TypeBadge type={t} size="sm" />
                <span className="text-xs font-bold text-ink-faint">×{m}</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {notEffective.length > 0 && (
        <div className="flex flex-col gap-2">
          <span className="text-sm font-bold text-ink-muted">🛡 효과가 별로 / 없음 (주는 데미지 ↓)</span>
          <div className="flex flex-wrap gap-2">
            {notEffective.map(({ type: t, m }) => (
              <span key={t} className="flex items-center gap-1">
                <TypeBadge type={t} size="sm" />
                <span className="text-xs font-bold text-ink-faint">×{m}</span>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
