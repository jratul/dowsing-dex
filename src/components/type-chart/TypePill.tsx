import { cn } from '../../lib/cn'

export interface TypePillProps {
  label: string
  selected?: boolean
  onClick?: () => void
}

/** 타입 필터/계산기에서 쓰는 무채색 선택용 칩. 실제 타입 색상은 TypeBadge가 담당. */
export function TypePill({ label, selected, onClick }: TypePillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'rounded-chip border px-3 py-1.5 text-sm font-bold transition-colors',
        selected ? 'border-ink bg-ink text-white' : 'border-border-strong bg-white text-ink hover:bg-surface-hover',
      )}
    >
      {label}
    </button>
  )
}
