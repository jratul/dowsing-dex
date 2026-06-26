import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { HomePage } from './pages/HomePage'
import { PokedexPage } from './pages/PokedexPage'
import { PokemonDetailPage } from './pages/PokemonDetailPage'
import { GuideListPage } from './pages/GuideListPage'
import { GuideDetailPage } from './pages/GuideDetailPage'
import { TypeChartPage } from './pages/TypeChartPage'
import { ShowcasePage } from './dev/ShowcasePage'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/pokedex', element: <PokedexPage /> },
      { path: '/pokemon/:id', element: <PokemonDetailPage /> },
      { path: '/guides', element: <GuideListPage /> },
      { path: '/guides/:slug', element: <GuideDetailPage /> },
      { path: '/types', element: <TypeChartPage /> },
    ],
  },
  { path: '/dev/showcase', element: <ShowcasePage /> },
])
