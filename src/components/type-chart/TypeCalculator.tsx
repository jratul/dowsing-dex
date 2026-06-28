import { useState } from 'react'
import { TYPES_BY_ERA, type TypeEra } from '../../lib/typeChart'
import type { TypeName } from '../../types/type-chart'
import { TypeDefense } from '../pokemon/TypeDefense'
import { TypeOffense } from './TypeOffense'
import { TypePill } from './TypePill'

export interface TypeCalculatorProps {
  era?: TypeEra
  initialType?: TypeName
}

export function TypeCalculator({ era = '6세대 이후', initialType }: TypeCalculatorProps) {
  const [selected, setSelected] = useState<TypeName | null>(initialType ?? null)
  const validSelected = selected && TYPES_BY_ERA[era].includes(selected) ? selected : null

  function toggleType(type: TypeName) {
    setSelected((prev) => (prev === type ? null : type))
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        {TYPES_BY_ERA[era].map((type) => (
          <TypePill key={type} label={type} selected={validSelected === type} onClick={() => toggleType(type)} />
        ))}
      </div>

      {validSelected ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-black text-ink-faint">방어할 때</h3>
            <TypeDefense types={[validSelected]} era={era} />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-black text-ink-faint">공격할 때</h3>
            <TypeOffense type={validSelected} era={era} />
          </div>
        </div>
      ) : (
        <p className="text-sm text-ink-faint">타입을 하나 선택하면 공격·방어 상성이 표시됩니다.</p>
      )}
    </div>
  )
}
