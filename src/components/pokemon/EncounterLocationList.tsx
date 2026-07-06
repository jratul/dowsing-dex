import * as Tabs from '@radix-ui/react-tabs'
import type { EncounterLocation } from '../../types/pokemon'
import { cn } from '../../lib/cn'

export interface EncounterLocationListProps {
  locations: EncounterLocation[]
  /** 외부에서 세대를 제어할 때 전달. 없으면 내부 state 사용. */
  generation?: number
  onGenerationChange?: (gen: number) => void
}

export function EncounterLocationList({ locations, generation, onGenerationChange }: EncounterLocationListProps) {
  const controlled = generation !== undefined
  const generations = [...new Set(locations.map((l) => l.generation))].sort((a, b) => a - b)

  const activeGeneration = controlled
    ? (generations.includes(generation!) ? generation! : generations[0])
    : generations[0]

  const items = locations.filter((l) => l.generation === activeGeneration)

  return (
    <Tabs.Root
      value={String(activeGeneration)}
      onValueChange={(v) => {
        if (controlled) onGenerationChange?.(Number(v))
      }}
    >
      {!controlled && (
        <Tabs.List className="mb-4 flex gap-2 overflow-x-auto">
          {generations.map((gen) => (
            <Tabs.Trigger
              key={gen}
              value={String(gen)}
              className={cn(
                'shrink-0 rounded-chip border border-border-strong px-3 py-1.5 text-xs font-bold text-ink',
                'data-[state=active]:border-brand-red data-[state=active]:bg-brand-red data-[state=active]:text-white',
              )}
            >
              {gen}세대
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      )}

      <Tabs.Content value={String(activeGeneration)} className="flex flex-col gap-2" forceMount>
        {items.map((item, i) => (
          <div
            key={`${item.version}-${i}`}
            className="flex items-start justify-between gap-3 rounded-card border border-border-strong p-3"
          >
            <span className="shrink-0 whitespace-nowrap text-xs font-bold text-ink">{item.version}</span>
            <span className={cn('text-right text-xs', item.unavailable ? 'text-ink-faint' : 'text-ink-muted')}>
              {item.location ?? '-'}
            </span>
          </div>
        ))}
      </Tabs.Content>
    </Tabs.Root>
  )
}
