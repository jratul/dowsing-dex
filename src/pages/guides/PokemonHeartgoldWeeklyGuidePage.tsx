import { Link } from 'react-router-dom'
import { GuidePageLayout } from '../../components/guide/GuidePageLayout'
import { Card } from '../../components/ui/Card'
import { GuideTable } from '../../components/guide/GuideTable'
import { linkifyGuideText } from '../../lib/linkifyGuideText'
import { PokemonLink } from '../../components/guide/PokemonLink'
import { MoveLink } from '../../components/guide/MoveLink'
import { CATEGORY_STYLE } from '../../lib/guideCategory'
import {
  HGW_SIBLINGS,
  HGW_WEEK,
  HGW_DAILY,
  HGW_PRIORITY,
  HGW_DAY_ORDER,
  HGW_WEEKLY_NAME_TO_ID,
  HGW_WEEKLY_MOVE_NAMES,
  HGW_LEADER_REMATCH,
  HGW_REMATCH_TEAMS,
  HGW_REMATCH_RULES,
  HGW_TIME_BANDS,
  type TaskKind,
  type WeekDay,
} from '../../data/sample/pokemonHeartgoldWeekly.data'

// 본문의 포켓몬 이름과 기술 이름을 한 번에 링크로 바꾼다.
function L(text: string) {
  return linkifyGuideText(text, HGW_WEEKLY_NAME_TO_ID, HGW_WEEKLY_MOVE_NAMES)
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-3 text-lg font-black text-ink">{children}</h2>
}

const KIND_LABEL: Record<TaskKind, string> = {
  sibling: '요일남매',
  pokemon: '포켓몬',
  item: '아이템',
  contest: '대회',
  travel: '이동',
  shop: '상점',
  battle: '배틀',
  phone: '전화번호',
}

const KIND_BADGE: Record<TaskKind, string> = {
  sibling: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  pokemon: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  item: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  contest: 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300',
  travel: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  shop: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
  battle: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
  phone: 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300',
}

function KindBadge({ kind }: { kind: TaskKind }) {
  return (
    <span className={`inline-block shrink-0 rounded px-1.5 py-0.5 text-xxs font-bold ${KIND_BADGE[kind]}`}>
      {KIND_LABEL[kind]}
    </span>
  )
}

export function PokemonHeartgoldWeeklyGuidePage() {
  const style = CATEGORY_STYLE['공략']
  // 게임 안의 요일은 본체 시계를 그대로 따르므로, 보는 사람의 오늘이 곧 게임의 오늘이다.
  const today: WeekDay = HGW_DAY_ORDER[new Date().getDay()]

  return (
    <GuidePageLayout generation="4세대" version="하트골드·소울실버">
      <div className="mb-2 flex items-center gap-2">
        <Link to="/guides" className="text-sm font-bold text-ink-muted hover:text-ink">
          ← 공략 목록
        </Link>
        <span className={`rounded-chip bg-white px-2 py-0.5 text-xs font-bold ${style.pillClass}`}>공략</span>
      </div>

      <h1 className="mb-2 text-2xl font-black text-ink">하트골드 요일별 챙길 것 완전 정리</h1>
      <p className="mb-6 text-sm text-ink-muted">
        하트골드·소울실버의 요일은 <b>DS 본체 시계</b>를 그대로 따릅니다. 그래서 지금 이 글을
        보는 오늘이 곧 게임 속 오늘입니다. 아래에서 <b>오늘 요일 카드가 자동으로 강조</b>되니,
        접속 전에 그것만 훑어도 그 주에 놓칠 일이 없습니다.
      </p>

      {/* 오늘 */}
      <Card className="mb-6 border-2 border-brand-red/40 p-4">
        <p className="mb-1 text-sm font-bold text-ink-muted">오늘은 {today}요일</p>
        {HGW_WEEK.filter((d) => d.day === today).map((d) => (
          <div key={d.day}>
            <p className="mb-2 text-lg font-black text-ink">{d.headline}</p>
            <ul className="flex flex-col gap-1">
              {d.tasks.map((t) => (
                <li key={t.title} className="flex min-h-7 flex-wrap items-baseline gap-1.5 text-sm leading-loose text-ink">
                  <KindBadge kind={t.kind} />
                  <span className={t.priority ? 'font-bold text-brand-red' : 'font-semibold'}>{L(t.title)}</span>
                  <span className="text-xs text-ink-muted">— {L(t.place)}</span>
                </li>
              ))}
            </ul>
            {HGW_LEADER_REMATCH.filter((r) => r.day === today).length > 0 && (
              <p className="mt-2 border-t border-border pt-2 text-sm text-ink">
                <b>오늘 재대결 가능한 관장</b> —{' '}
                {HGW_LEADER_REMATCH.filter((r) => r.day === today)
                  .map((r) => `${r.leader}(${r.band})`)
                  .join(' · ')}
                <a href="#rematch" className="ml-1 text-xs font-bold text-brand-red hover:underline">
                  전화 거는 법 →
                </a>
              </p>
            )}
          </div>
        ))}
      </Card>

      {/* 놓치면 아까운 순서 */}
      <Card className="mb-6 p-4">
        <SectionHeading>놓치면 한 주를 기다려야 하는 것부터</SectionHeading>
        <p className="mb-3 text-sm text-ink-muted">
          요일 이벤트가 많아 보여도 실제로 「이번 주를 통째로 날리는」 것은 몇 개뿐입니다.
          시간이 없다면 위에서부터 챙기세요.
        </p>
        <GuideTable
          headers={['순위', '요일', '무엇을', '왜 급한가']}
          rows={HGW_PRIORITY.map((p) => [
            String(p.rank),
            p.day,
            L(p.what),
            L(p.why),
          ])}
        />
      </Card>

      {/* 요일남매 */}
      <Card className="mb-6 p-4">
        <SectionHeading>요일남매 7인 — 타입 강화 아이템 한 세트</SectionHeading>
        <p className="mb-3 text-sm text-ink">
          일곱 남매가 각자 자기 이름의 요일에만 나타나 <b>타입 강화 아이템</b>을 하나씩 줍니다.
          아이템은 <b>첫 만남 한 번뿐</b>이고, 두 번째부터는 선두 포켓몬에게 리본을 달아 줍니다.
          윙배지를 받은 뒤부터 나타나며, 안내 쪽지는 정작 성도가 아니라 <b>관동 26번도로</b>의
          민가에 붙어 있습니다.
        </p>
        <GuideTable
          headers={['요일', '이름', '장소', '아이템 (HGSS)', '효과', '리본']}
          rows={HGW_SIBLINGS.map((s) => [
            `${s.day}요일`,
            s.name,
            L(s.place),
            s.item,
            s.itemNote,
            s.ribbon,
          ])}
        />
        <p className="mt-3 text-xs text-ink-muted">
          2세대와 달라진 곳이 둘 있습니다 — 화홍은 핑크리본 대신 <b>휘어진스푼</b>을, 토영은
          저주의부적 대신 <b>부드러운모래</b>를 줍니다.
        </p>
      </Card>

      {/* 요일별 전체 */}
      <Card className="mb-6 p-4">
        <SectionHeading>요일별 할 일 전체</SectionHeading>
        <div className="grid gap-3 lg:grid-cols-2">
          {HGW_WEEK.map((d) => (
            <div
              key={d.day}
              className={`rounded-lg border p-3 ${
                d.day === today ? 'border-2 border-brand-red bg-surface-hover' : 'border-border'
              }`}
            >
              <div className="mb-2 flex flex-wrap items-baseline gap-2">
                <span className="text-base font-black text-ink">{d.day}요일</span>
                {d.day === today && (
                  <span className="rounded bg-brand-red px-1.5 py-0.5 text-xxs font-bold text-white">오늘</span>
                )}
                <span className="text-sm text-ink-muted">{d.headline}</span>
              </div>
              <ul className="flex flex-col gap-2">
                {d.tasks.map((t) => (
                  <li key={t.title} className="flex flex-col gap-0.5">
                    <span className="flex flex-wrap items-baseline gap-1.5 text-sm leading-loose text-ink">
                      <KindBadge kind={t.kind} />
                      <span className={t.priority ? 'font-bold text-brand-red' : 'font-semibold'}>
                        {L(t.title)}
                      </span>
                    </span>
                    <span className="text-xs text-ink-muted">{L(t.place)}</span>
                    {t.detail && <span className="text-xs text-ink">{L(t.detail)}</span>}
                  </li>
                ))}
              </ul>
              {HGW_LEADER_REMATCH.filter((r) => r.day === d.day).length > 0 && (
                <p className="mt-2 border-t border-border pt-2 text-xs text-ink">
                  <span className="font-bold">재대결 전화</span> —{' '}
                  {HGW_LEADER_REMATCH.filter((r) => r.day === d.day)
                    .map((r) => `${r.leader}(${r.band})`)
                    .join(' · ')}
                </p>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* 관장 재대결 */}
      <Card className="mb-6 p-4" id="rematch">
        <SectionHeading>관장 재대결 — 번호를 딴 뒤 언제 전화할까</SectionHeading>
        <p className="mb-3 text-sm text-ink">
          위 요일별 목록의 「전화번호」는 <b>번호를 받는</b> 요일입니다. 정작 싸우려면{' '}
          <b>다른 요일·시간대에 전화를 걸어야</b> 하고, 그러면 관장이 관동 노랑시티의{' '}
          <b>격투도장</b>으로 나옵니다. 16명 전원이 주 1회, 한 시간대만 전화를 받습니다.
        </p>

        <div className="mb-4 grid gap-2 md:grid-cols-2">
          {HGW_REMATCH_RULES.map((r) => (
            <div key={r.title} className="rounded-lg border border-border p-3">
              <p className="mb-0.5 font-bold text-ink">{r.title}</p>
              <p className="text-xs text-ink">{L(r.body)}</p>
            </div>
          ))}
        </div>

        <div className="mb-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-muted">
          {HGW_TIME_BANDS.map((b) => (
            <span key={b.band}>
              <b className="text-ink">{b.band}</b> {b.hours}
              {b.note && <span className="text-brand-red"> — {b.note}</span>}
            </span>
          ))}
        </div>

        <div className="overflow-x-auto rounded-card border border-border">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-hover">
                <th className="p-2 text-left font-semibold text-ink">요일</th>
                {HGW_TIME_BANDS.map((b) => (
                  <th key={b.band} className="p-2 text-left font-semibold text-ink">
                    {b.band}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(['월', '화', '수', '목', '금', '토', '일'] as WeekDay[]).map((d) => (
                <tr
                  key={d}
                  className={`border-b border-border ${d === today ? 'bg-brand-red/10' : 'hover:bg-surface-hover/50'}`}
                >
                  <td className="whitespace-nowrap p-2 font-bold text-ink">
                    {d}
                    {d === today && (
                      <span className="ml-1 rounded bg-brand-red px-1 py-0.5 text-xxs font-bold text-white">오늘</span>
                    )}
                  </td>
                  {HGW_TIME_BANDS.map((b) => {
                    const hit = HGW_LEADER_REMATCH.find((r) => r.day === d && r.band === b.band)
                    return (
                      <td key={b.band} className="p-2">
                        {hit ? (
                          <span className="whitespace-nowrap">
                            <b className="text-ink">{hit.leader}</b>{' '}
                            <span className="text-xxs text-ink-muted">
                              {hit.region} · {hit.gymType}
                            </span>
                          </span>
                        ) : (
                          <span className="text-ink-faint">—</span>
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-ink-muted">
          목요일은 낮 한 명뿐이고, 월요일 밤·화요일 아침·목요일 아침과 밤은 비어 있습니다.
        </p>
      </Card>

      {/* 재대결 엔트리 */}
      <Card className="mb-6 p-4" id="rematch-teams">
        <SectionHeading>관장 재대결 엔트리 — 누가 뭘 데려오는가</SectionHeading>
        <p className="mb-3 text-sm text-ink">
          재대결 팀은 <b>첫 대결과 전혀 다릅니다.</b> 비상은 도라지시티에서 구구·피죤을 쓰지만
          재대결에서는 Lv.50대 여섯 마리가 나옵니다. 전원 회복약(풀회복 등)을 들고 있으므로
          화력이 어중간하면 오래 끌립니다. 순서는 위 시간표와 같습니다.
        </p>
        <div className="flex flex-col gap-3">
          {HGW_REMATCH_TEAMS.map((t) => {
            const slot = HGW_LEADER_REMATCH.find((r) => r.leader === t.leader)
            return (
              <div key={t.leader} className="defer-offscreen rounded-card border border-border p-3">
                <div className="mb-2 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="text-base font-black text-ink">{t.leader}</span>
                  {slot && (
                    <span className="text-xs text-ink-muted">
                      {slot.region} · {slot.gymType} · {slot.day}요일 {slot.band}
                    </span>
                  )}
                  <span className="ml-auto rounded-chip bg-surface-hover px-2 py-0.5 text-xxs font-bold text-ink-muted">
                    최고 Lv.{t.topLevel}
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-max border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="py-1.5 pr-3 text-left text-xxs font-bold whitespace-nowrap text-ink-faint">포켓몬</th>
                        <th className="py-1.5 pr-3 text-right text-xxs font-bold whitespace-nowrap text-ink-faint">레벨</th>
                        <th className="py-1.5 pr-3 text-left text-xxs font-bold whitespace-nowrap text-ink-faint">특성</th>
                        <th className="py-1.5 text-left text-xxs font-bold whitespace-nowrap text-ink-faint">기술</th>
                      </tr>
                    </thead>
                    <tbody>
                      {t.team.map((p, i) => (
                        <tr key={`${p.pokemonId}-${i}`} className="border-b border-border/50 last:border-0">
                          <td className="py-1.5 pr-3 whitespace-nowrap">
                            <PokemonLink id={p.pokemonId} />
                          </td>
                          <td className="py-1.5 pr-3 text-right font-bold whitespace-nowrap text-ink">
                            Lv.{p.level}
                          </td>
                          <td className="py-1.5 pr-3 whitespace-nowrap text-ink-muted">{p.ability}</td>
                          <td className="py-1.5 text-ink">
                            {p.moves.map((m, mi) => (
                              <span key={m} className="whitespace-nowrap">
                                {mi > 0 && <span className="text-ink-faint"> · </span>}
                                <MoveLink name={m} />
                              </span>
                            ))}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          })}
        </div>
        <p className="mt-3 text-xs text-ink-muted">
          유빈이 <b>팬텀을 두 마리</b> 데려오는 것은 오타가 아닙니다 — 둘 다 Lv.57이고 기술 배치만 다릅니다.
          레벨대는 류옹·꼭두 쪽이 Lv.50대 초반, 그린이 Lv.67~72로 가장 높습니다.
        </p>
      </Card>

      {/* 매일 */}
      <Card className="mb-6 p-4">
        <SectionHeading>요일과 무관하게 매일 리셋되는 것</SectionHeading>
        <p className="mb-3 text-sm text-ink-muted">
          이쪽은 요일을 안 가리지만 <b>하루에 한 번</b>이라 쌓이지 않습니다. 접속할 때마다
          한 바퀴 도는 습관을 들이면 손해가 없습니다.
        </p>
        <div className="grid gap-2 md:grid-cols-2">
          {HGW_DAILY.map((d) => (
            <div key={d.title} className="rounded-lg border border-border p-3">
              <p className="mb-0.5 font-bold text-ink">{L(d.title)}</p>
              <p className="text-xs text-ink">{L(d.detail)}</p>
            </div>
          ))}
        </div>
      </Card>
    </GuidePageLayout>
  )
}
