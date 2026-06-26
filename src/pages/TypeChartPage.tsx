import { Card } from '../components/ui/Card'
import { TypeCalculator } from '../components/type-chart/TypeCalculator'
import { TypeChartGrid } from '../components/type-chart/TypeChartGrid'

export function TypeChartPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <h1 className="mb-1 text-xl font-black text-ink">타입 상성</h1>
      <p className="mb-4 text-sm text-ink-muted">방어할 타입을 1~2개 선택하면 약점·반감을 계산해드려요.</p>

      <Card className="mb-6 p-4">
        <h2 className="mb-3 text-sm font-black text-ink-faint">상성 계산기 — 방어 타입 선택</h2>
        <TypeCalculator />
      </Card>

      <Card className="p-4">
        <h2 className="mb-3 text-sm font-black text-ink-faint">전체 상성표</h2>
        <TypeChartGrid />
      </Card>
    </div>
  )
}
