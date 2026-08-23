import type { EncounterLocation } from '../../types/pokemon'
import { cn } from '../../lib/cn'

export interface EncounterLocationListProps {
  locations: EncounterLocation[]
  /** 세대 필터는 도감 상세 페이지가 단독으로 소유한다. 여기서 탭을 또 그리지 않는다. */
  generation: number
  /** 제목까지 함께 렌더한다. 그 세대에 출현 기록이 없으면 제목도 같이 사라진다. */
  title: string
}

export function EncounterLocationList({ locations, generation, title }: EncounterLocationListProps) {
  const items = locations.filter((l) => l.generation === generation)

  if (items.length === 0) return null

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xs font-black text-ink-faint">{title}</h3>
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
    </div>
  )
}
