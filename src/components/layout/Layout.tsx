import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import { SiteHeader, type NavItem } from './SiteHeader'

const NAV_ITEMS: NavItem[] = [
  { label: '홈', href: '/' },
  { label: '도감', href: '/pokedex' },
  { label: '공략', href: '/guides' },
  { label: '타입상성', href: '/types' },
  { label: '기술', href: '/moves' },
  { label: '기술머신', href: '/tm' },
  { label: '출현', href: '/encounter' },
  { label: '성격', href: '/natures' },
  { label: '특성', href: '/abilities' },
  { label: '아이템', href: '/items' },
]

export function Layout() {
  const { pathname } = useLocation()

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollRestoration />
      {/* 모바일도 같은 헤더를 쓰고, 좁은 화면에서는 헤더 안 햄버거 메뉴로 접힌다. */}
      <div className="sticky top-0 z-50">
        <SiteHeader navItems={NAV_ITEMS} activeHref={pathname} />
      </div>

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}
