import { useNavigate } from 'react-router-dom'
import { HeroCarousel } from '../components/layout/HeroCarousel'
import type { HeroProps } from '../components/layout/Hero'
import { Button } from '../components/ui/Button'
import { PokemonCard } from '../components/pokemon/PokemonCard'
import { GuideCard } from '../components/guide/GuideCard'
import { SAMPLE_POKEMON, findSamplePokemon } from '../data/sample/pokemon.sample'
import { SAMPLE_GUIDES } from '../data/sample/guides.sample'

/** 메인 페이지 "인기 포켓몬"에 노출할 큐레이션된 목록 (스타팅 최종진화 + 인지도 높은 포켓몬). */
const POPULAR_POKEMON_IDS = [6, 3, 9, 25, 150, 143, 94, 149, 133, 134, 135, 136]

export function HomePage() {
  const popularPokemon = POPULAR_POKEMON_IDS.map((id) => SAMPLE_POKEMON.find((p) => p.id === id)).filter(
    (p): p is NonNullable<typeof p> => p !== undefined,
  )
  const navigate = useNavigate()

  const heroSlides: HeroProps[] = [
    {
      eyebrow: '1세대 · 관동지방 151마리',
      title: '포켓몬 도감과\n공략을 한곳에',
      subtitle: '종족값·타입 상성·진화 정보부터 체육관 공략까지. 관동지방을 모험하는 트레이너를 위한 안내서.',
      imageUrl: findSamplePokemon(6).artworkUrl,
      children: (
        <>
          <Button onClick={() => navigate('/pokedex')}>도감 둘러보기 →</Button>
          <Button variant="secondary" onClick={() => navigate('/guides')}>
            공략 보기
          </Button>
        </>
      ),
    },
    {
      eyebrow: '공략',
      title: '체육관 8개 공략\n순서까지 한 번에',
      subtitle: '스타팅 선택부터 챔피언 로드까지, 막힐 때마다 찾아볼 수 있는 공략 모음.',
      imageUrl: findSamplePokemon(150).artworkUrl,
      children: (
        <Button onClick={() => navigate('/guides')}>공략 보러가기 →</Button>
      ),
    },
    {
      eyebrow: '타입 상성',
      title: '상성 계산기로\n전투를 유리하게',
      subtitle: '방어 타입을 선택하면 약점·반감을 바로 계산해주는 18×18 전체 상성표.',
      imageUrl: findSamplePokemon(25).artworkUrl,
      children: (
        <Button onClick={() => navigate('/types')}>타입 상성 보기 →</Button>
      ),
    },
  ]

  return (
    <div className="mx-auto w-full lg:w-4/5 px-4 py-6">
      <HeroCarousel slides={heroSlides} />

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
          {popularPokemon.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} to={`/pokemon/${pokemon.id}`} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3 py-6">
        <h2 className="text-lg font-black text-ink">추천 공략</h2>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
