import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Tabs from '@radix-ui/react-tabs'
import { GuideCard } from '../components/guide/GuideCard'
import { SAMPLE_GUIDES } from '../data/sample/guides.sample'
import { findSamplePokemon } from '../data/sample/pokemon.sample'
import type { GuideCategory } from '../types/guide'
import { cn } from '../lib/cn'

const CATEGORIES: ('전체' | GuideCategory)[] = ['전체', '입문', '공략', '대전', '포획', '진화']

export function GuideListPage() {
  const navigate = useNavigate()
  const [category, setCategory] = useState<string>('전체')

  const guides = category === '전체' ? SAMPLE_GUIDES : SAMPLE_GUIDES.filter((g) => g.category === category)

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      <h1 className="mb-4 text-xl font-black text-ink">공략</h1>

      <Tabs.Root value={category} onValueChange={setCategory}>
        <Tabs.List className="mb-4 flex gap-2 overflow-x-auto">
          {CATEGORIES.map((cat) => (
            <Tabs.Trigger
              key={cat}
              value={cat}
              className={cn(
                'shrink-0 rounded-chip px-3 py-1.5 text-sm font-bold text-ink-muted data-[state=active]:bg-brand-red data-[state=active]:text-white',
              )}
            >
              {cat}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        <Tabs.Content value={category}>
          {guides.length === 0 ? (
            <p className="text-sm text-ink-faint">해당 카테고리의 공략이 아직 없습니다.</p>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2">
              {guides.map((guide) => (
                <button key={guide.slug} type="button" onClick={() => navigate(`/guides/${guide.slug}`)} className="text-left">
                  <GuideCard guide={guide} iconSpriteUrl={findSamplePokemon(guide.iconPokemonId).spriteUrl} />
                </button>
              ))}
            </div>
          )}
        </Tabs.Content>
      </Tabs.Root>
    </div>
  )
}
