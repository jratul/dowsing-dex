import { Link } from 'react-router-dom'
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
      <Link to="/" className="text-lg font-black text-brand-red">
        다우징덱스
      </Link>
      <nav className="flex gap-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              'text-sm font-bold text-ink-muted hover:text-ink',
              item.href === activeHref && 'text-brand-red',
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
