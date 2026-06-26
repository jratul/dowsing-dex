import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { TYPE_ORDER } from '../../lib/typeChart'
import type { TypeName } from '../../types/type-chart'
import { TypeBadge } from '../pokemon/TypeBadge'

export interface TypeFilterProps {
  selected: TypeName[]
  onChange: (selected: TypeName[]) => void
}

export function TypeFilter({ selected, onChange }: TypeFilterProps) {
  return (
    <ToggleGroup.Root
      type="multiple"
      value={selected}
      onValueChange={(value) => onChange(value as TypeName[])}
      className="flex flex-wrap gap-2"
    >
      {TYPE_ORDER.map((type) => (
        <ToggleGroup.Item
          key={type}
          value={type}
          className="rounded-chip outline-offset-2 data-[state=off]:opacity-40"
        >
          <TypeBadge type={type} size="sm" />
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  )
}
