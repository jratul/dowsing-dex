import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { cn } from '../../lib/cn'

export interface NavItem {
  label: string
  href: string
}

export interface SiteHeaderProps {
  navItems: NavItem[]
  activeHref?: string
}

function PokeballIcon() {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#fff" stroke="#1f2024" strokeWidth="1.5" />
      <path d="M1 12h7.5M15.5 12H23" stroke="#1f2024" strokeWidth="1.5" />
      <path d="M1 12a11 11 0 0 1 22 0z" fill="#e3350d" stroke="#1f2024" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" fill="#fff" stroke="#1f2024" strokeWidth="1.5" />
    </svg>
  )
}

export function SiteHeader({ navItems, activeHref }: SiteHeaderProps) {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    navigate(`/pokedex?q=${encodeURIComponent(query)}`)
  }

  return (
    <header className="flex h-14 items-center gap-6 border-b border-border px-4">
      <Link to="/" className="flex items-center gap-2 text-lg font-black text-ink">
        <PokeballIcon />
        다우징덱스
      </Link>

      <nav className="flex items-center gap-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              'rounded-chip px-3 py-1.5 text-sm font-bold text-ink hover:bg-surface-hover',
              item.href === activeHref && 'bg-brand-red/10 text-brand-red hover:bg-brand-red/10',
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <form onSubmit={handleSubmit} className="ml-auto">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="포켓몬 이름·번호 검색"
          className="h-9 w-64 rounded-chip border border-border bg-surface-hover px-3 text-sm"
        />
      </form>
    </header>
  )
}
