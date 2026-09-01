import { Link } from 'react-router-dom'
import { GuidePageLayout } from '../../components/guide/GuidePageLayout'
import { Card } from '../../components/ui/Card'
import { GuideTable } from '../../components/guide/GuideTable'
import { linkifyGuideText } from '../../lib/linkifyGuideText'
import { CATEGORY_STYLE } from '../../lib/guideCategory'
import {
  HGW_SIBLINGS,
  HGW_WEEK,
  HGW_DAILY,
  HGW_PRIORITY,
  HGW_DAY_ORDER,
  HGW_WEEKLY_NAME_TO_ID,
  HGW_WEEKLY_MOVE_NAMES,
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
            </div>
          ))}
        </div>
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
