import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/layout/Layout'

// 도감 데이터(1000여 종)가 포함된 페이지는 lazy import로 분리해, 진입 시 전체를 한 번에
// 받지 않고 해당 라우트에 진입할 때만 필요한 청크를 받도록 한다.
export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', lazy: () => import('./pages/HomePage').then((m) => ({ Component: m.HomePage })) },
      { path: '/pokedex', lazy: () => import('./pages/PokedexPage').then((m) => ({ Component: m.PokedexPage })) },
      {
        path: '/pokemon/:id',
        lazy: () => import('./pages/PokemonDetailPage').then((m) => ({ Component: m.PokemonDetailPage })),
      },
      { path: '/guides', lazy: () => import('./pages/GuideListPage').then((m) => ({ Component: m.GuideListPage })) },
      {
        // 표/이미지가 풍부한 전용 레이아웃이 필요한 공략은 :slug 동적 라우트보다 구체적인
        // 정적 경로로 먼저 선언해 전용 페이지 컴포넌트를 사용한다.
        path: '/guides/pokemon-gold-story',
        lazy: () =>
          import('./pages/PokemonGoldStoryGuidePage').then((m) => ({ Component: m.PokemonGoldStoryGuidePage })),
      },
      {
        path: '/guides/:slug',
        lazy: () => import('./pages/GuideDetailPage').then((m) => ({ Component: m.GuideDetailPage })),
      },
      { path: '/types', lazy: () => import('./pages/TypeChartPage').then((m) => ({ Component: m.TypeChartPage })) },
    ],
  },
  { path: '/dev/showcase', lazy: () => import('./dev/ShowcasePage').then((m) => ({ Component: m.ShowcasePage })) },
])
