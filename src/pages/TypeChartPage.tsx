import { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { Card } from '../components/ui/Card'
import { TypeCalculator } from '../components/type-chart/TypeCalculator'
import { TypeChartGrid } from '../components/type-chart/TypeChartGrid'
import { type TypeEra } from '../lib/typeChart'
import { cn } from '../lib/cn'

const ERAS: TypeEra[] = ['1세대', '2~5세대', '6세대 이후']

export function TypeChartPage() {
  const [era, setEra] = useState<TypeEra>('6세대 이후')

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <h1 className="mb-1 text-xl font-black text-ink">타입 상성</h1>
      <p className="mb-4 text-sm text-ink-muted">타입을 하나 선택하면 공격·방어 상성을 한눈에 계산해드려요.</p>

      <Tabs.Root value={era} onValueChange={(value) => setEra(value as TypeEra)} className="mb-6">
        <Tabs.List className="flex gap-2 overflow-x-auto">
          {ERAS.map((e) => (
            <Tabs.Trigger
              key={e}
              value={e}
              className={cn(
                'shrink-0 rounded-chip border border-border-strong px-3 py-1.5 text-sm font-bold text-ink',
                'data-[state=active]:border-brand-red data-[state=active]:bg-brand-red data-[state=active]:text-white',
              )}
            >
              {e}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </Tabs.Root>

      <Card className="mb-6 p-4">
        <h2 className="mb-3 text-sm font-black text-ink-faint">상성 계산기 — 타입 선택</h2>
        <TypeCalculator era={era} />
      </Card>

      <Card className="p-4">
        <h2 className="mb-3 text-sm font-black text-ink-faint">전체 상성표</h2>
        <TypeChartGrid era={era} />
      </Card>
    </div>
  )
}
