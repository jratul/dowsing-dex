import { Link } from 'react-router-dom'
import { GuidePageLayout } from '../components/guide/GuidePageLayout'
import { Card } from '../components/ui/Card'
import { PokemonLink } from '../components/guide/PokemonLink'
import { CATEGORY_STYLE } from '../lib/guideCategory'
import { HGSS_STAGES, HGSS_ALL_TRADES, SAFARI_ZONE_NOTE, type HGSSNpcTrade, type HGSSCatch } from '../data/sample/pokemonHGSSCollection.data'

const VERSION_BADGE: Record<'HG' | 'SS', string> = {
  HG: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
  SS: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
}

function VersionBadge({ version }: { version: 'HG' | 'SS' }) {
  return (
    <span className={`inline-block shrink-0 rounded px-1.5 py-0.5 text-xxs font-bold ${VERSION_BADGE[version]}`}>
      {version === 'HG' ? '하트골드' : '소울실버'}
    </span>
  )
}

function SpecialBadge({ text }: { text: string }) {
  return (
    <span className="inline-block shrink-0 rounded bg-purple-100 px-1.5 py-0.5 text-xxs font-bold text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
      {text}
    </span>
  )
}

function MethodBadge({ method }: { method: string }) {
  const colors: Record<string, string> = {
    '풀숲': 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
    '박치기': 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
    '파도타기': 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
    '낚시': 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300',
    '배회': 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
    '선물': 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300',
    '경품 교환': 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
    '알 선물': 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300',
    '고정 조우': 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
    '풀숲/파도타기': 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  }
  const cls = colors[method] ?? 'bg-surface-hover text-ink-muted'
  return <span className={`inline-block shrink-0 rounded px-1.5 py-0.5 text-xxs font-bold ${cls}`}>{method}</span>
}

function TradeCard({ trade }: { trade: HGSSNpcTrade }) {
  return (
    <div className={`rounded-card border p-3 ${trade.highlight ? 'border-brand-red/40 bg-red-50 dark:border-brand-red/30 dark:bg-red-950/20' : 'border-border bg-surface-hover/30'}`}>
      <div className="mb-1 flex flex-wrap items-start gap-1.5">
        <span className="rounded bg-green-100 px-1.5 py-0.5 text-xxs font-bold text-green-700 dark:bg-green-900/40 dark:text-green-300">
          NPC 교환
        </span>
        {trade.highlight && (
          <span className="rounded bg-brand-red/10 px-1.5 py-0.5 text-xxs font-bold text-brand-red">
            추천
          </span>
        )}
        <span className="text-xs font-semibold text-ink">{trade.location}</span>
      </div>

      <div className="mb-1.5 flex flex-wrap items-center gap-2 text-sm">
        <span className="text-ink">
          {trade.give.id ? (
            <PokemonLink id={trade.give.id} />
          ) : (
            <span className="font-bold text-ink">{trade.give.nameKo}</span>
          )}
          {trade.give.note && <span className="ml-1 text-xxs text-ink-muted">({trade.give.note})</span>}
        </span>
        <span className="text-ink-muted">→</span>
        <span className="flex items-center gap-1">
          <PokemonLink id={trade.receive.id} />
          {trade.receive.heldItem && (
            <span className="rounded bg-blue-100 px-1.5 py-0.5 text-xxs font-bold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
              {trade.receive.heldItem} 지님
            </span>
          )}
          {trade.receive.special && !trade.receive.heldItem && (
            <span className="text-xxs text-ink-muted">{trade.receive.special}</span>
          )}
        </span>
      </div>

      {trade.condition && (
        <div className="mb-1 text-xxs font-semibold text-amber-600 dark:text-amber-400">
          ⚠ 조건: {trade.condition}
        </div>
      )}
      {trade.note && <p className="text-xs text-ink-muted">{trade.note}</p>}
    </div>
  )
}

function CatchRow({ c }: { c: HGSSCatch }) {
  return (
    <tr className="border-b border-border hover:bg-surface-hover/40">
      <td className="px-3 py-2">
        <PokemonLink id={c.id} />
      </td>
      <td className="px-3 py-2 text-xs text-ink">{c.location}</td>
      <td className="px-3 py-2">
        <div className="flex flex-wrap gap-1">
          <MethodBadge method={c.method} />
          {c.version && <VersionBadge version={c.version} />}
          {c.special && <SpecialBadge text={c.special} />}
        </div>
      </td>
      <td className="px-3 py-2 text-xxs text-ink-muted">{c.level}</td>
      <td className="px-3 py-2 text-xs text-ink-muted">{c.note ?? ''}</td>
    </tr>
  )
}

export function PokemonHGSSCollectionGuidePage() {
  const style = CATEGORY_STYLE['공략']

  return (
    <GuidePageLayout>
      {/* 헤더 */}
      <div className="mb-2 flex items-center gap-2">
        <Link to="/guides" className="text-sm font-bold text-ink-muted hover:text-ink">
          ← 공략 목록
        </Link>
        <span className={`rounded-chip bg-white px-2 py-0.5 text-xs font-bold ${style.pillClass}`}>공략</span>
      </div>

      <h1 className="mb-2 text-2xl font-black text-ink">하트골드·소울실버 전국도감 수집 가이드</h1>
      <p className="mb-6 text-sm text-ink-muted">
        스토리 진행 순서대로 어디서 무엇을 잡을 수 있는지, NPC 교환으로 무엇을 얻을 수 있는지를 정리한 수집 공략.
        HG/SS + 플라티나PT 3게임 기준 전국도감 493종 완성에 초점을 맞췄다.
      </p>

      {/* 빠른 이동 */}
      <Card className="mb-6 p-4">
        <h2 className="mb-3 text-base font-black text-ink">빠른 이동 — 스테이지</h2>
        <div className="flex flex-wrap gap-2">
          {HGSS_STAGES.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-chip border border-border px-2.5 py-1 text-xs font-semibold text-ink-muted transition-colors hover:border-brand-red hover:text-brand-red"
            >
              {s.phase} — {s.title.split('(')[0].trim()}
            </a>
          ))}
          <a
            href="#npc-trades-all"
            className="rounded-chip border border-brand-red/50 bg-red-50 px-2.5 py-1 text-xs font-semibold text-brand-red hover:border-brand-red dark:bg-red-950/30"
          >
            NPC 교환 전체 목록
          </a>
        </div>
      </Card>

      {/* NPC 교환 전체 요약 표 */}
      <Card id="npc-trades-all" className="mb-8 overflow-x-auto p-0">
        <div className="p-4 pb-0">
          <h2 className="mb-1 text-lg font-black text-ink">NPC 교환 전체 목록 (스토리 순서)</h2>
          <p className="mb-3 text-xs text-ink-muted">
            플레이어 간 통신교환이 아닌 게임 내 NPC와 하는 교환. HGSS 기준 10종.
          </p>
        </div>
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-hover">
              <th className="p-3 text-left text-xs font-semibold text-ink">단계</th>
              <th className="p-3 text-left text-xs font-semibold text-ink">장소</th>
              <th className="p-3 text-left text-xs font-semibold text-ink">줄 포켓몬</th>
              <th className="p-3 text-left text-xs font-semibold text-ink">받을 포켓몬</th>
              <th className="p-3 text-left text-xs font-semibold text-ink">특이 사항</th>
            </tr>
          </thead>
          <tbody>
            {HGSS_ALL_TRADES.map((t, i) => (
              <tr key={i} className={`border-b border-border ${t.highlight ? 'bg-red-50 dark:bg-red-950/20' : 'hover:bg-surface-hover/50'}`}>
                <td className="px-3 py-2 text-xxs text-ink-muted whitespace-nowrap">{t.stageLabel}</td>
                <td className="px-3 py-2 text-xs text-ink">{t.location}</td>
                <td className="px-3 py-2">
                  {t.give.id ? <PokemonLink id={t.give.id} /> : <span className="text-xs font-semibold text-ink">{t.give.nameKo}</span>}
                  {t.give.note && <div className="text-xxs text-ink-muted">{t.give.note}</div>}
                </td>
                <td className="px-3 py-2">
                  <div className="flex flex-wrap items-center gap-1">
                    <PokemonLink id={t.receive.id} />
                    {t.receive.heldItem && (
                      <span className="rounded bg-blue-100 px-1 py-0.5 text-xxs font-bold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                        {t.receive.heldItem}
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-3 py-2 text-xxs text-ink-muted">{t.condition ?? t.receive.special ?? ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* 스테이지별 상세 */}
      <div className="space-y-8">
        {HGSS_STAGES.map((stage) => (
          <section key={stage.id} id={stage.id}>
            <div className="mb-3 flex flex-wrap items-baseline gap-2">
              <span className="rounded bg-brand-red/10 px-2 py-0.5 text-xxs font-bold text-brand-red">{stage.phase}</span>
              <h2 className="text-lg font-black text-ink">{stage.title}</h2>
            </div>
            <p className="mb-4 text-sm text-ink-muted">{stage.description}</p>

            {/* NPC 교환 */}
            {stage.trades.length > 0 && (
              <div className="mb-4 space-y-2">
                {stage.trades.map((t, i) => (
                  <TradeCard key={i} trade={t} />
                ))}
              </div>
            )}

            {/* 포획 포인트 */}
            {stage.catches.length > 0 && (
              <Card className="overflow-x-auto p-0">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border bg-surface-hover">
                      <th className="px-3 py-2 text-left text-xxs font-semibold text-ink">포켓몬</th>
                      <th className="px-3 py-2 text-left text-xxs font-semibold text-ink">장소</th>
                      <th className="px-3 py-2 text-left text-xxs font-semibold text-ink">방법</th>
                      <th className="px-3 py-2 text-left text-xxs font-semibold text-ink">레벨</th>
                      <th className="px-3 py-2 text-left text-xxs font-semibold text-ink">메모</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stage.catches.map((c) => (
                      <CatchRow key={c.id} c={c} />
                    ))}
                  </tbody>
                </table>
              </Card>
            )}
          </section>
        ))}
      </div>

      {/* 사파리존 안내 */}
      <Card className="mt-8 p-4">
        <h2 className="mb-2 text-base font-black text-ink">사파리존 — 별도 공략 필요</h2>
        <p className="text-sm text-ink-muted">{SAFARI_ZONE_NOTE}</p>
      </Card>

      {/* 해소 불가 포켓몬 안내 */}
      <Card className="mt-4 p-4">
        <h2 className="mb-2 text-base font-black text-ink">HG/SS + PT 3게임으로 해소 안 되는 포켓몬</h2>
        <p className="mb-2 text-sm text-ink-muted">
          아래 포켓몬은 3게임으로도 일반 플레이로는 입수 불가. 과거 배포 이벤트 또는 다른 세대 게임이 필요하다.
        </p>
        <div className="flex flex-wrap gap-1.5">
          {[
            { id: 151, nameKo: '뮤', note: '과거 배포' },
            { id: 251, nameKo: '세레비', note: '과거 배포' },
            { id: 377, nameKo: '레지락', note: '3세대 필요' },
            { id: 378, nameKo: '레지아이스', note: '3세대 필요' },
            { id: 379, nameKo: '레지스틸', note: '3세대 필요' },
            { id: 385, nameKo: '지라치', note: '과거 배포' },
            { id: 386, nameKo: '테오키스', note: '과거 배포' },
            { id: 431, nameKo: '나옹마', note: 'DP 펄 필요' },
            { id: 434, nameKo: '스컹뿡', note: 'DP 다이아 필요' },
            { id: 489, nameKo: '피오네', note: '마나피 필요' },
            { id: 490, nameKo: '마나피', note: '레인저 전송' },
            { id: 491, nameKo: '다크라이', note: '이벤트 필요' },
            { id: 492, nameKo: '쉐이미', note: '이벤트 필요' },
            { id: 493, nameKo: '아르세우스', note: '이벤트 필요' },
          ].map((p) => (
            <div key={p.id} className="flex items-center gap-1 rounded-chip border border-border bg-surface-hover/60 px-2 py-1">
              <PokemonLink id={p.id} />
              <span className="text-xxs text-ink-muted">({p.note})</span>
            </div>
          ))}
        </div>
      </Card>
    </GuidePageLayout>
  )
}
