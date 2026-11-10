import { Outlet, ScrollRestoration, useLocation, useNavigation } from 'react-router-dom'
import { useDelayedFlag } from '../../lib/useDelayedFlag'
import { RouteSpinner } from './RouteSpinner'
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
  const navigation = useNavigation()

  /**
   * 라우트가 전부 lazy 라, 청크를 받는 동안 React Router 는 **주소를 아직 바꾸지 않고** 대기한다.
   * 그 사이 선택된 메뉴도 안 바뀌고 본문도 옛 페이지 그대로라, 누른 사람 눈에는 아무 반응이
   * 없다가 다 받아지는 순간 메뉴와 화면이 한꺼번에 바뀌는 것처럼 보인다.
   *
   * `useNavigation()` 이 그 대기 중인 목적지를 알려 주므로, 메뉴 강조는 **누르자마자** 그쪽으로
   * 옮기고 본문에는 스피너를 띄운다. Next.js 가 아니어도 되는 부분이다.
   */
  const pendingPath = navigation.state === 'loading' ? navigation.location.pathname : null
  const activeHref = pendingPath ?? pathname
  // 같은 페이지 안에서 쿼리만 바꾸는 이동(도감 상세의 세대 탭 등)은 본문을 비우지 않는다.
  const isPageChange = pendingPath !== null && pendingPath !== pathname
  const showSpinner = useDelayedFlag(isPageChange)

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollRestoration />
      {/* 모바일도 같은 헤더를 쓰고, 좁은 화면에서는 헤더 안 햄버거 메뉴로 접힌다. */}
      <div className="sticky top-0 z-50">
        <SiteHeader navItems={NAV_ITEMS} activeHref={activeHref} />
      </div>

      <main className="flex-1">{showSpinner ? <RouteSpinner /> : <Outlet />}</main>
    </div>
  )
}
