import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { TYPE_ORDER } from '../../lib/typeChart'
import type { TypeName } from '../../types/type-chart'

export interface TypeFilterProps {
  selected: TypeName[]
  onChange: (selected: TypeName[]) => void
}

export function TypeFilter({ selected, onChange }: TypeFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => onChange([])}
        className={
          selected.length === 0
            ? 'rounded-chip border border-ink bg-ink px-3 py-1.5 text-sm font-bold text-white'
            : 'rounded-chip border border-border-strong bg-white px-3 py-1.5 text-sm font-bold text-ink hover:bg-surface-hover'
        }
      >
        전체
      </button>

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
            className="rounded-chip border border-border-strong bg-white px-3 py-1.5 text-sm font-bold text-ink hover:bg-surface-hover data-[state=on]:border-ink data-[state=on]:bg-ink data-[state=on]:text-white"
          >
            {type}
          </ToggleGroup.Item>
        ))}
      </ToggleGroup.Root>
    </div>
  )
}
