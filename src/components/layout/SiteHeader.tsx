import { useEffect, useState, type FormEvent } from 'react'
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

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden="true"
    >
      {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
  )
}

function isActive(href: string, activeHref?: string) {
  return href === '/' ? activeHref === '/' : (activeHref?.startsWith(href) ?? false)
}

export function SiteHeader({ navItems, activeHref }: SiteHeaderProps) {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)

  // 메뉴가 열린 동안에만 Escape 키를 듣는다.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setOpen(false)
    navigate(`/pokedex?q=${encodeURIComponent(query)}`)
  }

  return (
    <header className="border-b border-border bg-white shadow-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-6 px-4">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2 text-lg font-black text-ink">
          <PokeballIcon />
          다우징덱스
        </Link>

        {/* 데스크톱 — 가로 링크 */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                'rounded-chip px-3 py-1.5 text-sm font-bold text-ink hover:bg-surface-hover',
                isActive(item.href, activeHref) && 'bg-brand-red/10 text-brand-red hover:bg-brand-red/10',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <form onSubmit={handleSubmit} className="ml-auto hidden md:block">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="포켓몬 이름·번호 검색"
            className="h-9 w-64 rounded-chip border border-border bg-surface-hover px-3 text-sm"
          />
        </form>

        {/* 모바일 — 햄버거 버튼 */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
          className="ml-auto rounded-chip p-2 text-ink hover:bg-surface-hover md:hidden"
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {/* 모바일 — 펼침 메뉴. 항목이 10개라 하단 탭바에 다 담기지 않아 여기로 모았다. */}
      {open && (
        <div id="mobile-nav" className="border-t border-border bg-white md:hidden">
          <form onSubmit={handleSubmit} className="px-4 py-3">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="포켓몬 이름·번호 검색"
              className="h-10 w-full rounded-chip border border-border bg-surface-hover px-3 text-sm"
            />
          </form>
          <nav className="grid grid-cols-2 gap-1 px-3 pb-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'rounded-chip px-3 py-2.5 text-sm font-bold text-ink hover:bg-surface-hover',
                  isActive(item.href, activeHref) && 'bg-brand-red/10 text-brand-red hover:bg-brand-red/10',
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
