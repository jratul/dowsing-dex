import { cva, type VariantProps } from 'class-variance-authority'
import { TYPE_BG_CLASS, TYPE_TEXT_CLASS } from '../../lib/typeChart'
import type { TypeName } from '../../types/type-chart'
import { cn } from '../../lib/cn'

const badgeVariants = cva('inline-flex items-center justify-center rounded-chip font-bold', {
  variants: {
    size: {
      sm: 'h-6 px-2.5 text-xs',
      md: 'h-7 px-3 text-sm',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface TypeBadgeProps extends VariantProps<typeof badgeVariants> {
  type: TypeName
  variant?: 'solid' | 'outline'
  className?: string
}

export function TypeBadge({ type, size, variant = 'solid', className }: TypeBadgeProps) {
  const isOutline = variant === 'outline'
  return (
    <span
      className={cn(
        badgeVariants({ size }),
        isOutline ? 'border border-border-strong bg-white text-ink' : [TYPE_BG_CLASS[type], TYPE_TEXT_CLASS[type]],
        className,
      )}
    >
      {type}
    </span>
  )
}
