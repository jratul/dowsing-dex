import { cn } from '../../lib/cn'

export interface NavItem {
  label: string
  href: string
}

export interface SiteHeaderProps {
  navItems: NavItem[]
  activeHref?: string
}

export function SiteHeader({ navItems, activeHref }: SiteHeaderProps) {
  return (
    <header className="flex h-14 items-center justify-between border-b border-border px-4">
      <span className="text-lg font-black text-brand-red">다우징덱스</span>
      <nav className="flex gap-4">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={cn(
              'text-sm font-bold text-ink-muted hover:text-ink',
              item.href === activeHref && 'text-brand-red',
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
