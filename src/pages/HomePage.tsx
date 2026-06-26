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
    <div className="mx-auto max-w-6xl px-4 py-6">
      <Hero
        eyebrow="1세대 · 관동지방 151마리"
        title={'포켓몬 도감과\n공략을 한곳에'}
        subtitle="종족값·타입 상성·진화 정보부터 체육관 공략까지. 관동지방을 모험하는 트레이너를 위한 안내서."
        imageUrl={findSamplePokemon(6).artworkUrl}
      >
        <Button onClick={() => navigate('/pokedex')}>도감 둘러보기 →</Button>
        <Button variant="secondary" onClick={() => navigate('/guides')}>
          공략 보기
        </Button>
      </Hero>

      <section className="flex flex-col gap-3 py-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-black text-ink">인기 포켓몬</h2>
          <button
            type="button"
            onClick={() => navigate('/pokedex')}
            className="text-sm font-bold text-ink-muted hover:text-ink"
          >
            전체 보기 →
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {SAMPLE_POKEMON.slice(0, 12).map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} onClick={(id) => navigate(`/pokemon/${id}`)} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3 py-6">
        <h2 className="text-lg font-black text-ink">추천 공략</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
