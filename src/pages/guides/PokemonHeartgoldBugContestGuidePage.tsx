import { useState } from 'react'
import { Link } from 'react-router-dom'
import { GuidePageLayout } from '../../components/guide/GuidePageLayout'
import { Card } from '../../components/ui/Card'
import { GuideTable } from '../../components/guide/GuideTable'
import { PokemonLink } from '../../components/guide/PokemonLink'
import { MoveLink } from '../../components/guide/MoveLink'
import { CATEGORY_STYLE } from '../../lib/guideCategory'
import { cn } from '../../lib/cn'
import {
  HGB_CATCHER,
  HGB_DAYS,
  HGB_ENCOUNTERS,
  HGB_END_CONDITIONS,
  HGB_HP_TABLE,
  HGB_IRRELEVANT,
  HGB_JUDGEMENTS,
  HGB_PRIORITY,
  HGB_PRIZES,
  HGB_PRIZE_STONES,
  HGB_RARITY,
  HGB_RULES,
  HGB_SCORE,
  type ContestDay,
} from '../../data/sample/pokemonHeartgoldBugContest.data'

function SectionHeading({ children }: { children: string }) {
  return <h2 className="mb-3 text-lg font-black text-ink">{children}</h2>
}

export function PokemonHeartgoldBugContestGuidePage() {
  const style = CATEGORY_STYLE['포획']
  const [day, setDay] = useState<ContestDay>('화')

  return (
    <GuidePageLayout generation="4세대" version="하트골드·소울실버">
      <div className="mb-2 flex items-center gap-2">
        <Link to="/guides" className="text-sm font-bold text-ink-muted hover:text-ink">
          ← 공략 목록
        </Link>
        <span className={cn('rounded-chip bg-white px-2 py-0.5 text-xs font-bold', style.pillClass)}>포획</span>
      </div>

      <h1 className="mb-1 text-2xl font-black text-ink">곤충채집 대회 1등 공략 — 진화용 돌을 반복해서 캔다</h1>
      <p className="mb-6 text-sm text-ink-muted">
        전국도감을 얻은 뒤 기준입니다. 1등 상품이 <b>진화용 돌 무작위 1개</b>라, 주 3회 열리는 이 대회는
        사실상 돌 수급처입니다. 도감을 얻기 전에는 출현 포켓몬과 상품이 다릅니다.
      </p>

      {/* 결론 먼저 */}
      <Card className="mb-6 border-2 border-brand-red/40 p-4">
        <SectionHeading>결론부터</SectionHeading>
        <p className="mb-3 text-sm leading-relaxed text-ink">
          <b>
            복안 <PokemonLink id={12} /> 로 <MoveLink name="수면가루" /> 만 걸고,
            HP를 <span className="text-brand-red">전혀 깎지 않은</span> Lv.28{' '}
            <PokemonLink id={123} /> 또는 <PokemonLink id={127} /> 을 잡은 뒤 즉시 종료한다.
          </b>
        </p>
        <p className="text-sm text-ink">
          이 대회는 일반 포획과 정반대입니다. 평소처럼 HP를 1까지 깎아서 잡으면{' '}
          <b>그만큼 점수가 그대로 빠집니다.</b> 공격기는 아예 쓰지 않는 것이 정답입니다.
        </p>
      </Card>

      {/* 점수 구조 */}
      <Card className="mb-6 p-4">
        <SectionHeading>점수는 400점 만점, 네 항목</SectionHeading>
        <GuideTable
          headers={['항목', '최대', '의미']}
          rows={HGB_SCORE.map((s) => [s.item, s.max, s.meaning])}
        />
        <h3 className="mt-4 mb-2 text-sm font-black text-ink-faint">HP는 깎은 만큼 그대로 감점</h3>
        <GuideTable
          headers={['잡은 순간 HP', 'HP 점수']}
          rows={HGB_HP_TABLE.map((h) => [h.hp, h.score])}
        />
        <p className="mt-3 text-sm text-ink">
          수면·마비 같은 <b>비공격 상태이상은 감점 요인이 아닙니다.</b> 그래서 재우고 볼만 던지는 방식이
          점수를 하나도 잃지 않는 유일한 길입니다.
        </p>
      </Card>

      {/* 희귀도 */}
      <Card className="mb-6 p-4">
        <SectionHeading>희귀도 — 사실상 두 종만 보면 된다</SectionHeading>
        <div className="flex flex-col gap-3">
          {HGB_RARITY.map((g) => (
            <div key={g.score} className="rounded-card border border-border p-3">
              <div className="mb-1.5 flex items-baseline gap-2">
                <span className="text-sm font-black text-ink">{g.score}점</span>
                <span className="text-xs text-ink-muted">{g.label}</span>
              </div>
              {g.members.length > 0 && (
                <div className="mb-1 flex flex-wrap gap-x-3 gap-y-1">
                  {g.members.map((m) => (
                    <span key={m.id} className="min-h-7 text-sm leading-loose text-ink">
                      <PokemonLink id={m.id} />
                    </span>
                  ))}
                </div>
              )}
              {g.note && <p className="text-xs text-ink-muted">{g.note}</p>}
            </div>
          ))}
        </div>
      </Card>

      {/* 출현표 */}
      <Card className="mb-6 p-4">
        <SectionHeading>요일별 출현표 (전국도감 이후)</SectionHeading>
        <p className="mb-3 text-sm text-ink">
          요일마다 나오는 종이 다르지만 <b>스라크·쁘사이저는 화·목·토 모두 5%씩</b> 나옵니다.
          목표만 놓고 보면 어느 날에 가도 조건이 같습니다.
        </p>
        <div className="mb-3 flex gap-2">
          {HGB_DAYS.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDay(d)}
              className={cn(
                'rounded-chip border px-4 py-1.5 text-sm font-bold transition-colors',
                day === d
                  ? 'border-brand-red bg-brand-red text-white'
                  : 'border-border-strong text-ink hover:border-brand-red hover:text-brand-red',
              )}
            >
              {d}요일
            </button>
          ))}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-max border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-hover">
                <th className="p-2 text-left font-semibold whitespace-nowrap text-ink">포켓몬</th>
                <th className="p-2 text-left font-semibold whitespace-nowrap text-ink">레벨</th>
                <th className="p-2 text-right font-semibold whitespace-nowrap text-ink">출현율</th>
              </tr>
            </thead>
            <tbody>
              {HGB_ENCOUNTERS[day].map((e) => (
                <tr
                  key={e.id}
                  className={cn(
                    'border-b border-border',
                    e.isTarget ? 'bg-brand-red/10' : 'hover:bg-surface-hover/50',
                  )}
                >
                  <td className="p-2 whitespace-nowrap">
                    <PokemonLink id={e.id} />
                    {e.isTarget && (
                      <span className="ml-1.5 rounded bg-brand-red px-1 py-0.5 text-xxs font-bold text-white">
                        목표
                      </span>
                    )}
                  </td>
                  <td className="p-2 whitespace-nowrap text-ink">Lv.{e.levels}</td>
                  <td className="p-2 text-right font-bold whitespace-nowrap text-ink">{e.rate}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-ink">
          스라크 5% + 쁘사이저 5% = <b>한 번 조우할 때 목표가 나올 확률 10%</b>. 평균 열 번쯤 마주치면
          한 번 볼 수 있는 셈이지만, 실제로는 운에 따라 훨씬 오래 걸리기도 합니다.
        </p>
      </Card>

      {/* 포획 요원 */}
      <Card className="mb-6 p-4">
        <SectionHeading>포획 요원 세팅</SectionHeading>
        <GuideTable
          headers={['항목', '권장', '이유']}
          rows={HGB_CATCHER.map((c) => [c.label, c.value, c.why])}
        />
        <p className="mt-3 text-xs text-ink-muted">
          포획 요원의 레벨이 높다고 대회 점수가 깎이거나 불이익이 생기지는 않습니다. 이미 더 높은 레벨이면
          그대로 쓰면 됩니다.
        </p>
      </Card>

      {/* 규칙 */}
      <Card className="mb-6 p-4">
        <SectionHeading>대회 기본 규칙</SectionHeading>
        <GuideTable
          headers={['항목', '내용']}
          rows={HGB_RULES.map((r) => [r.label, r.note ? `${r.value} — ${r.note}` : r.value])}
        />
        <h3 className="mt-4 mb-2 text-sm font-black text-ink-faint">대회가 끝나는 조건</h3>
        <ul className="flex flex-col gap-0.5">
          {HGB_END_CONDITIONS.map((c) => (
            <li key={c} className="flex min-h-6 gap-2 text-sm leading-loose text-ink">
              <span className="shrink-0 self-start text-ink-faint leading-6">▸</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm text-ink">
          즉 <b>20분을 다 채울 필요가 없습니다.</b> 좋은 개체를 잡았다면 바로 끝내도 감점이 전혀 없습니다.
        </p>
      </Card>

      {/* 판단표 */}
      <Card className="mb-6 p-4">
        <SectionHeading>상황별 판단표</SectionHeading>
        <GuideTable
          headers={['상황', '행동']}
          rows={HGB_JUDGEMENTS.map((j) => [
            j.situation,
            j.emphasis ? <b key={j.situation} className="text-brand-red">{j.action}</b> : j.action,
          ])}
        />
        <h3 className="mt-4 mb-2 text-sm font-black text-ink-faint">Lv.27 vs Lv.28</h3>
        <p className="text-sm text-ink">
          전국도감 이후 스라크·쁘사이저의 최고 출현 레벨은 <b>28</b>입니다. 레벨 점수만 보면 Lv.28이 100점,
          Lv.27이 약 96점으로 <b>차이가 4점뿐</b>입니다. 반면 HP를 20% 깎으면 약 20점이 날아갑니다. 그래서
          <b> Lv.28이라는 이유만으로 HP를 크게 깎아 잡는 것은 오히려 손해</b>입니다. 풀피 Lv.27도 충분히
          강력한 우승 후보입니다.
        </p>
      </Card>

      {/* 우선순위 */}
      <Card className="mb-6 p-4">
        <SectionHeading>1등 확률을 높이는 우선순위</SectionHeading>
        <div className="flex flex-col gap-2">
          {HGB_PRIORITY.map((p) => (
            <div key={p.rank} className="flex gap-3 rounded-card border border-border p-3">
              <span className="shrink-0 text-lg font-black text-brand-red">{p.rank}</span>
              <div>
                <p className="text-sm font-bold text-ink">{p.what}</p>
                <p className="text-xs text-ink">{p.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <h3 className="mt-4 mb-2 text-sm font-black text-ink-faint">점수에 전혀 안 들어가는 것</h3>
        <p className="text-sm text-ink">{HGB_IRRELEVANT.join(' · ')}</p>
        <p className="mt-2 text-xs text-ink-muted">
          그래서 Lv.28 풀피를 잡고도 1등을 못 했다면 플레이가 잘못된 게 아니라 개체값과 NPC 경쟁자의
          결과가 나빴던 것입니다. 개체값은 잡기 전에 알 수 없습니다.
        </p>
      </Card>

      {/* 상품 */}
      <Card className="mb-6 p-4">
        <SectionHeading>순위별 상품</SectionHeading>
        <GuideTable
          headers={['순위', '전국도감 전', '전국도감 후']}
          rows={HGB_PRIZES.map((p) => [p.rank, p.beforeDex, p.afterDex])}
        />
        <h3 className="mt-4 mb-2 text-sm font-black text-ink-faint">1등 상품으로 나오는 돌 (무작위 1개)</h3>
        <div className="flex flex-wrap gap-1.5">
          {HGB_PRIZE_STONES.map((s) => (
            <span key={s} className="rounded-chip bg-surface-hover px-2 py-1 text-xs font-bold text-ink">
              {s}
            </span>
          ))}
        </div>
        <p className="mt-3 text-xs text-ink-muted">
          달의돌처럼 상점에서 살 수 없는 돌도 이 목록에 있어, 진화용 돌을 여러 개 모아야 할 때 특히 값이 큽니다.
        </p>
      </Card>
    </GuidePageLayout>
  )
}
