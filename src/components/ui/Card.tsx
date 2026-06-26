import { Slot } from '@radix-ui/react-slot'
import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** 카드 상단 3px 컬러 바. 지정하지 않으면 바가 표시되지 않음. */
  accentColor?: string
  asChild?: boolean
}

export function Card({ className, accentColor, asChild, style, children, ...props }: CardProps) {
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp
      className={cn(
        'overflow-hidden rounded-card border border-border bg-white shadow-card',
        className,
      )}
      style={{
        borderTop: accentColor ? `3px solid ${accentColor}` : undefined,
        ...style,
      }}
      {...props}
    >
      {children}
    </Comp>
  )
}
