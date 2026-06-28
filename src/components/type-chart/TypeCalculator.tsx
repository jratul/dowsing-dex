import { useState } from 'react'
import { TYPES_BY_ERA, type TypeEra } from '../../lib/typeChart'
import type { TypeName } from '../../types/type-chart'
import { TypeDefense } from '../pokemon/TypeDefense'
import { TypePill } from './TypePill'

export interface TypeCalculatorProps {
  era?: TypeEra
  initialTypes?: TypeName[]
}

export function TypeCalculator({ era = '6세대 이후', initialTypes = [] }: TypeCalculatorProps) {
  const [selected, setSelected] = useState<TypeName[]>(initialTypes)
  const validSelected = selected.filter((t) => TYPES_BY_ERA[era].includes(t))

  function toggleType(type: TypeName) {
    setSelected((prev) => {
      if (prev.includes(type)) return prev.filter((t) => t !== type)
      if (prev.length >= 2) return [prev[1], type]
      return [...prev, type]
    })
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        {TYPES_BY_ERA[era].map((type) => (
          <TypePill key={type} label={type} selected={validSelected.includes(type)} onClick={() => toggleType(type)} />
        ))}
      </div>

      {validSelected.length > 0 ? (
        <TypeDefense types={validSelected} era={era} />
      ) : (
        <p className="text-sm text-ink-faint">타입을 1~2개 선택하면 방어 상성이 표시됩니다.</p>
      )}
    </div>
  )
}
