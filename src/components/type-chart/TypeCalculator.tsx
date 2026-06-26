import { useState } from 'react'
import { TYPE_ORDER } from '../../lib/typeChart'
import type { TypeName } from '../../types/type-chart'
import { TypeDefense } from '../pokemon/TypeDefense'
import { TypePill } from './TypePill'

export interface TypeCalculatorProps {
  initialTypes?: TypeName[]
}

export function TypeCalculator({ initialTypes = [] }: TypeCalculatorProps) {
  const [selected, setSelected] = useState<TypeName[]>(initialTypes)

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
        {TYPE_ORDER.map((type) => (
          <TypePill key={type} label={type} selected={selected.includes(type)} onClick={() => toggleType(type)} />
        ))}
      </div>

      {selected.length > 0 ? (
        <TypeDefense types={selected} />
      ) : (
        <p className="text-sm text-ink-faint">타입을 1~2개 선택하면 방어 상성이 표시됩니다.</p>
      )}
    </div>
  )
}
