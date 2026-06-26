import { Card } from '../components/ui/Card'
import { TypeCalculator } from '../components/type-chart/TypeCalculator'
import { TypeChartGrid } from '../components/type-chart/TypeChartGrid'

export function TypeChartPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      <h1 className="mb-4 text-xl font-black text-ink">타입 상성</h1>

      <Card className="mb-6 p-4">
        <h2 className="mb-3 text-sm font-black text-ink-faint">방어 타입 계산기</h2>
        <TypeCalculator />
      </Card>

      <Card className="p-4">
        <h2 className="mb-3 text-sm font-black text-ink-faint">전체 상성표</h2>
        <TypeChartGrid />
      </Card>
    </div>
  )
}
