import { useNavigate } from 'react-router-dom'
import { Hero } from '../components/layout/Hero'
import { Button } from '../components/ui/Button'
import { PokemonCard } from '../components/pokemon/PokemonCard'
import { GuideCard } from '../components/guide/GuideCard'
import { SAMPLE_POKEMON, findSamplePokemon } from '../data/sample/pokemon.sample'
import { SAMPLE_GUIDES } from '../data/sample/guides.sample'

export function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      <Hero title="다우징덱스" subtitle="세대별 포켓몬 도감·스탯·상성·공략을 한 곳에서">
        <Button onClick={() => navigate('/pokedex')}>도감 보러가기</Button>
      </Hero>

      <section className="flex flex-col gap-3 py-6">
        <h2 className="text-lg font-black text-ink">인기 포켓몬</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {SAMPLE_POKEMON.slice(0, 8).map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} onClick={(id) => navigate(`/pokemon/${id}`)} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3 py-6">
        <h2 className="text-lg font-black text-ink">추천 공략</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {SAMPLE_GUIDES.map((guide) => (
            <button key={guide.slug} type="button" onClick={() => navigate(`/guides/${guide.slug}`)} className="text-left">
              <GuideCard guide={guide} iconSpriteUrl={findSamplePokemon(guide.iconPokemonId).spriteUrl} />
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
