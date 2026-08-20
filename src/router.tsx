import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { RouteErrorBoundary } from './components/layout/RouteErrorBoundary'

// 도감 데이터(1000여 종)가 포함된 페이지는 lazy import로 분리해, 진입 시 전체를 한 번에
// 받지 않고 해당 라우트에 진입할 때만 필요한 청크를 받도록 한다.
export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      { path: '/', lazy: () => import('./pages/HomePage').then((m) => ({ Component: m.HomePage })) },
      { path: '/pokedex', lazy: () => import('./pages/pokedex/PokedexPage').then((m) => ({ Component: m.PokedexPage })) },
      {
        path: '/pokemon/:id',
        lazy: () => import('./pages/pokedex/PokemonDetailPage').then((m) => ({ Component: m.PokemonDetailPage })),
      },
      { path: '/guides', lazy: () => import('./pages/guides/GuideListPage').then((m) => ({ Component: m.GuideListPage })) },
      {
        // 표/이미지가 풍부한 전용 레이아웃이 필요한 공략은 :slug 동적 라우트보다 구체적인
        // 정적 경로로 먼저 선언해 전용 페이지 컴포넌트를 사용한다.
        path: '/guides/pokemon-gold-story',
        lazy: () =>
          import('./pages/guides/PokemonGoldStoryGuidePage').then((m) => ({ Component: m.PokemonGoldStoryGuidePage })),
      },
      {
        path: '/guides/pokemon-red-story',
        lazy: () =>
          import('./pages/guides/PokemonRedStoryGuidePage').then((m) => ({ Component: m.PokemonRedStoryGuidePage })),
      },
      {
        path: '/guides/pokemon-firered-story',
        lazy: () =>
          import('./pages/guides/PokemonFireredStoryGuidePage').then((m) => ({
            Component: m.PokemonFireredStoryGuidePage,
          })),
      },
      {
        path: '/guides/pokemon-firered-sevii-islands',
        lazy: () =>
          import('./pages/guides/PokemonFireredSeviiIslandsGuidePage').then((m) => ({
            Component: m.PokemonFireredSeviiIslandsGuidePage,
          })),
      },
      {
        path: '/guides/pokemon-red-evolution',
        lazy: () =>
          import('./pages/guides/PokemonRedEvolutionGuidePage').then((m) => ({
            Component: m.PokemonRedEvolutionGuidePage,
          })),
      },
      {
        path: '/guides/pokemon-heartgold-story',
        lazy: () =>
          import('./pages/guides/PokemonHeartgoldStoryGuidePage').then((m) => ({
            Component: m.PokemonHeartgoldStoryGuidePage,
          })),
      },
      {
        path: '/guides/pokemon-heartgold-walkthrough',
        lazy: () =>
          import('./pages/guides/PokemonHeartgoldWalkthroughGuidePage').then((m) => ({
            Component: m.PokemonHeartgoldWalkthroughGuidePage,
          })),
      },
      {
        path: '/guides/pokemon-heartgold-stones',
        lazy: () =>
          import('./pages/guides/PokemonHeartgoldStonesGuidePage').then((m) => ({
            Component: m.PokemonHeartgoldStonesGuidePage,
          })),
      },
      {
        path: '/guides/pokemon-heartgold-moves',
        lazy: () =>
          import('./pages/guides/PokemonHeartgoldMovesGuidePage').then((m) => ({
            Component: m.PokemonHeartgoldMovesGuidePage,
          })),
      },
      {
        path: '/guides/pokemon-unown',
        lazy: () =>
          import('./pages/guides/PokemonUnownGuidePage').then((m) => ({
            Component: m.PokemonUnownGuidePage,
          })),
      },
      {
        path: '/guides/pokemon-hgss-collection',
        lazy: () =>
          import('./pages/guides/PokemonHGSSCollectionGuidePage').then((m) => ({
            Component: m.PokemonHGSSCollectionGuidePage,
          })),
      },
      {
        path: '/guides/pokemon-emerald-story',
        lazy: () =>
          import('./pages/guides/PokemonEmeraldStoryGuidePage').then((m) => ({
            Component: m.PokemonEmeraldStoryGuidePage,
          })),
      },
      {
        path: '/guides/pokemon-platinum-story',
        lazy: () =>
          import('./pages/guides/PokemonPlatinumStoryGuidePage').then((m) => ({
            Component: m.PokemonPlatinumStoryGuidePage,
          })),
      },
      {
        path: '/guides/pokemon-platinum-progress',
        lazy: () =>
          import('./pages/guides/PokemonPlatinumProgressGuidePage').then((m) => ({
            Component: m.PokemonPlatinumProgressGuidePage,
          })),
      },
      {
        path: '/guides/:slug',
        lazy: () => import('./pages/guides/GuideDetailPage').then((m) => ({ Component: m.GuideDetailPage })),
      },
      { path: '/types', lazy: () => import('./pages/reference/TypeChartPage').then((m) => ({ Component: m.TypeChartPage })) },
      { path: '/moves', lazy: () => import('./pages/reference/MovesPage').then((m) => ({ Component: m.MovesPage })) },
      { path: '/tm', lazy: () => import('./pages/reference/TmListPage').then((m) => ({ Component: m.TmListPage })) },
      {
        path: '/encounter',
        lazy: () => import('./pages/reference/EncounterPage').then((m) => ({ Component: m.EncounterPage })),
      },
      { path: '/natures', lazy: () => import('./pages/reference/NaturesPage').then((m) => ({ Component: m.NaturesPage })) },
      { path: '/abilities', lazy: () => import('./pages/reference/AbilitiesPage').then((m) => ({ Component: m.AbilitiesPage })) },
      { path: '/items', lazy: () => import('./pages/reference/ItemsPage').then((m) => ({ Component: m.ItemsPage })) },
    ],
  },
  { path: '/dev/showcase', lazy: () => import('./dev/ShowcasePage').then((m) => ({ Component: m.ShowcasePage })) },
])
