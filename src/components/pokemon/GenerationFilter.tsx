import * as ToggleGroup from '@radix-ui/react-toggle-group'

export interface GenerationFilterProps {
  selected: number[]
  onChange: (selected: number[]) => void
  generations: number[]
}

export function GenerationFilter({ selected, onChange, generations }: GenerationFilterProps) {
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
        value={selected.map(String)}
        onValueChange={(value) => onChange(value.map(Number))}
        className="flex flex-wrap gap-2"
      >
        {generations.map((gen) => (
          <ToggleGroup.Item
            key={gen}
            value={String(gen)}
            className="rounded-chip border border-border-strong bg-white px-3 py-1.5 text-sm font-bold text-ink hover:bg-surface-hover data-[state=on]:border-ink data-[state=on]:bg-ink data-[state=on]:text-white"
          >
            {gen}세대
          </ToggleGroup.Item>
        ))}
      </ToggleGroup.Root>
    </div>
  )
}
