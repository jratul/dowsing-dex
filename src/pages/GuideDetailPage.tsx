import { Link, useNavigate, useParams } from 'react-router-dom'
import { Card } from '../components/ui/Card'
import { PokemonCard } from '../components/pokemon/PokemonCard'
import { SAMPLE_GUIDES } from '../data/sample/guides.sample'
import { SAMPLE_POKEMON } from '../data/sample/pokemon.sample'

export function GuideDetailPage() {
  const navigate = useNavigate()
  const { slug } = useParams<{ slug: string }>()
  const guide = SAMPLE_GUIDES.find((g) => g.slug === slug)

  if (!guide) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-6">
        <p className="text-sm text-ink-faint">존재하지 않는 공략입니다.</p>
        <Link to="/guides" className="text-sm font-bold text-brand-red">
          공략 목록으로 돌아가기
        </Link>
      </div>
    )
  }

  const relatedPokemon = SAMPLE_POKEMON.filter((p) => guide.relatedPokemonIds?.includes(p.id))

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      <span className="text-xs font-bold text-brand-red">{guide.category}</span>
      <h1 className="mb-4 text-xl font-black text-ink">{guide.title}</h1>

      <Card className="mb-6 flex flex-col gap-3 p-4">
        {guide.body && guide.body.length > 0 ? (
          guide.body.map((paragraph, i) => (
            <p key={i} className="text-sm text-ink">
              {paragraph}
            </p>
          ))
        ) : (
          <p className="text-sm text-ink-faint">{guide.summary}</p>
        )}
      </Card>

      {relatedPokemon.length > 0 && (
        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-black text-ink-faint">관련 포켓몬</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {relatedPokemon.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} onClick={(id) => navigate(`/pokemon/${id}`)} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
