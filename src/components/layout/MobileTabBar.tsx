import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

export interface MobileTabItem {
  label: string
  href: string
  icon?: ReactNode
}

export interface MobileTabBarProps {
  items: MobileTabItem[]
  activeHref?: string
}

export function MobileTabBar({ items, activeHref }: MobileTabBarProps) {
  return (
    <nav className="flex h-14 items-center justify-around border-t border-border bg-white">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={cn(
            'flex flex-col items-center gap-0.5 text-xs font-bold text-ink-faint',
            item.href === activeHref && 'text-brand-red',
          )}
        >
          {item.icon}
          {item.label}
        </a>
      ))}
    </nav>
  )
}
