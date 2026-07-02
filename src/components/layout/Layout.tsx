import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import { SiteHeader, type NavItem } from './SiteHeader'
import { MobileTabBar } from './MobileTabBar'

const NAV_ITEMS: NavItem[] = [
  { label: '홈', href: '/' },
  { label: '도감', href: '/pokedex' },
  { label: '공략', href: '/guides' },
  { label: '타입상성', href: '/types' },
  { label: '기술머신', href: '/tm' },
]

export function Layout() {
  const { pathname } = useLocation()

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollRestoration />
      <div className="hidden md:block">
        <SiteHeader navItems={NAV_ITEMS} activeHref={pathname} />
      </div>

      <main className="flex-1 pb-16 md:pb-0">
        <Outlet />
      </main>

      <div className="fixed inset-x-0 bottom-0 md:hidden">
        <MobileTabBar items={NAV_ITEMS} activeHref={pathname} />
      </div>
    </div>
  )
}
