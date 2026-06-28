import { useState } from 'react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { TypeBadge } from '../components/pokemon/TypeBadge'
import { PokemonCard } from '../components/pokemon/PokemonCard'
import { StatChart } from '../components/pokemon/StatChart'
import { TypeDefense } from '../components/pokemon/TypeDefense'
import { EvolutionTree } from '../components/pokemon/EvolutionTree'
import { TypeFilter } from '../components/type-chart/TypeFilter'
import { TypeCalculator } from '../components/type-chart/TypeCalculator'
import { TypeChartGrid } from '../components/type-chart/TypeChartGrid'
import { GuideCard } from '../components/guide/GuideCard'
import { SiteHeader } from '../components/layout/SiteHeader'
import { MobileTabBar } from '../components/layout/MobileTabBar'
import { Hero } from '../components/layout/Hero'
import { TYPE_ORDER } from '../lib/typeChart'
import { ShowcaseSection } from './ShowcaseSection'
import { SAMPLE_POKEMON, findEvolutionLine, findSamplePokemon } from '../data/sample/pokemon.sample'
import { SAMPLE_GUIDES } from '../data/sample/guides.sample'
import type { TypeName } from '../types/type-chart'

const NAV_ITEMS = [
  { label: '홈', href: '/' },
  { label: '도감', href: '/pokedex' },
  { label: '공략', href: '/guides' },
  { label: '타입상성', href: '/types' },
]

/** 모든 디자인 시스템 컴포넌트를 한 화면에서 점검하기 위한 개발용 페이지. /dev/showcase 에서만 접근. */
export function ShowcasePage() {
  const [selectedTypes, setSelectedTypes] = useState<TypeName[]>([])

  return (
    <main className="mx-auto max-w-4xl px-4 py-6">
      <ShowcaseSection title="SiteHeader / MobileTabBar / Hero">
        <Card className="overflow-hidden p-0">
          <SiteHeader navItems={NAV_ITEMS} activeHref="/pokedex" />
        </Card>
        <Hero title="다우징덱스" subtitle="세대별 포켓몬 도감·스탯·상성·공략을 한 곳에서">
          <Button>도감 보러가기</Button>
        </Hero>
        <Card className="overflow-hidden p-0">
          <MobileTabBar items={NAV_ITEMS} activeHref="/pokedex" />
        </Card>
      </ShowcaseSection>

      <ShowcaseSection title="Button">
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary">기본</Button>
          <Button variant="secondary">보조</Button>
          <Button variant="ghost">고스트</Button>
          <Button size="sm">작은 버튼</Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="TypeBadge (18타입 전체)">
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-2">
            {TYPE_ORDER.map((type) => (
              <TypeBadge key={type} type={type} size="md" />
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {TYPE_ORDER.map((type) => (
              <TypeBadge key={type} type={type} size="sm" variant="outline" />
            ))}
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="PokemonCard">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {SAMPLE_POKEMON.slice(0, 4).map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="StatChart (단일 / 비교 모드)">
        <div className="grid gap-6 sm:grid-cols-2">
          <Card className="p-4">
            <StatChart stats={SAMPLE_POKEMON[0].stats} />
          </Card>
          <Card className="p-4">
            <StatChart
              stats={SAMPLE_POKEMON[0].stats}
              compareStats={SAMPLE_POKEMON[3].stats}
              compareLabel={SAMPLE_POKEMON[3].nameKo}
            />
          </Card>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="TypeDefense">
        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="p-4">
            <p className="mb-2 text-xs font-bold text-ink-faint">단일 타입 — 파이리 (불꽃)</p>
            <TypeDefense types={['불꽃']} />
          </Card>
          <Card className="p-4">
            <p className="mb-2 text-xs font-bold text-ink-faint">복합 타입 — 이상해씨 (풀/독)</p>
            <TypeDefense types={['풀', '독']} />
          </Card>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="EvolutionTree (선형 / 분기)">
        <div className="flex flex-col gap-6">
          <Card className="p-4">
            <EvolutionTree stages={findEvolutionLine(1) ?? []} currentPokemonId={1} renderPokemon={findSamplePokemon} />
          </Card>
          <Card className="p-4">
            <EvolutionTree stages={findEvolutionLine(133) ?? []} currentPokemonId={133} renderPokemon={findSamplePokemon} />
          </Card>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="TypeFilter">
        <Card className="p-4">
          <TypeFilter selected={selectedTypes} onChange={setSelectedTypes} />
        </Card>
      </ShowcaseSection>

      <ShowcaseSection title="TypeCalculator">
        <Card className="p-4">
          <TypeCalculator />
        </Card>
      </ShowcaseSection>

      <ShowcaseSection title="TypeChartGrid (18×18)">
        <Card className="p-4">
          <TypeChartGrid highlightType="불꽃" />
        </Card>
      </ShowcaseSection>

      <ShowcaseSection title="GuideCard">
        <div className="grid gap-3 sm:grid-cols-2">
          {SAMPLE_GUIDES.map((guide) => (
            <GuideCard
              key={guide.slug}
              guide={guide}
              iconSpriteUrl={findSamplePokemon(guide.iconPokemonId).spriteUrl}
            />
          ))}
        </div>
      </ShowcaseSection>
    </main>
  )
}
