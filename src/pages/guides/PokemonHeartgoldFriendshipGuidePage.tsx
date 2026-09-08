import { Link } from 'react-router-dom'
import { GuidePageLayout } from '../../components/guide/GuidePageLayout'
import { Card } from '../../components/ui/Card'
import { GuideTable } from '../../components/guide/GuideTable'
import { PokemonLink } from '../../components/guide/PokemonLink'
import { MoveLink } from '../../components/guide/MoveLink'
import { CATEGORY_STYLE } from '../../lib/guideCategory'
import { cn } from '../../lib/cn'
import {
  HGF_BANDS,
  HGF_EVOLUTIONS,
  HGF_FACILITIES,
  HGF_GAINS,
  HGF_ITEMS,
  HGF_LOSSES,
  HGF_MOVE_POWER,
  HGF_MYTHS,
  HGF_PLANS,
  HGF_RATINGS,
  HGF_SAFE_ITEMS,
  HGF_STARTING,
  HGF_TUTOR_MOVES,
} from '../../data/sample/pokemonHeartgoldFriendship.data'

function SectionHeading({ children }: { children: string }) {
  return <h2 className="mb-3 text-lg font-black text-ink">{children}</h2>
}

export function PokemonHeartgoldFriendshipGuidePage() {
  const style = CATEGORY_STYLE['진화']
  const noTiming = HGF_EVOLUTIONS.filter((e) => !e.timing)
  const dayTiming = HGF_EVOLUTIONS.filter((e) => e.timing?.startsWith('낮'))
  const nightTiming = HGF_EVOLUTIONS.filter((e) => e.timing?.startsWith('밤'))

  return (
    <GuidePageLayout generation="4세대" version="하트골드·소울실버">
      <div className="mb-2 flex items-center gap-2">
        <Link to="/guides" className="text-sm font-bold text-ink-muted hover:text-ink">
          ← 공략 목록
        </Link>
        <span className={cn('rounded-chip bg-white px-2 py-0.5 text-xs font-bold', style.pillClass)}>진화</span>
      </div>

      <h1 className="mb-1 text-2xl font-black text-ink">하트골드 친밀도 완전 정리 — 220을 어떻게 채울 것인가</h1>
      <p className="mb-6 text-sm text-ink-muted">
        친밀도는 화면에 숫자로 나오지 않는 <b>0~255의 내부 수치</b>입니다. 체감으로 접근하면
        틀리기 쉬워서, 구간별 증가량과 계산 결과를 표로 고정해 정리했습니다.
      </p>

      {/* 진화 조건 */}
      <Card className="mb-6 p-4">
        <SectionHeading>진화 조건 — 220은 시작점이지 방아쇠가 아니다</SectionHeading>
        <p className="mb-3 text-sm text-ink">
          조건은 <b>친밀도 220 이상 + 레벨업</b>입니다. 220에 닿는 순간 진화하는 게 아니라,
          그 뒤에 레벨이 한 번 더 올라야 합니다. 친밀도가 255여도 레벨업이 없으면 그대로입니다.
          그래서 <b>마지막 한 방을 이상한사탕으로 처리</b>하면 원하는 시간대를 정확히 맞출 수 있습니다.
        </p>

        <h3 className="mt-4 mb-2 text-sm font-black text-ink-faint">시간 조건 없음</h3>
        <div className="mb-4 flex flex-wrap gap-x-4 gap-y-1.5">
          {noTiming.map((e) => (
            <span key={`${e.fromId}-${e.toId}`} className="min-h-7 text-sm leading-loose text-ink">
              <PokemonLink id={e.fromId} /> <span className="text-ink-faint">→</span>{' '}
              <PokemonLink id={e.toId} />
            </span>
          ))}
        </div>

        <h3 className="mb-2 text-sm font-black text-ink-faint">낮에만 (04:00~19:59)</h3>
        <div className="mb-4 flex flex-wrap gap-x-4 gap-y-1.5">
          {dayTiming.map((e) => (
            <span key={`${e.fromId}-${e.toId}`} className="min-h-7 text-sm leading-loose text-ink">
              <PokemonLink id={e.fromId} /> <span className="text-ink-faint">→</span>{' '}
              <PokemonLink id={e.toId} />
            </span>
          ))}
        </div>

        <h3 className="mb-2 text-sm font-black text-ink-faint">밤에만 (20:00~03:59)</h3>
        <div className="mb-3 flex flex-wrap gap-x-4 gap-y-1.5">
          {nightTiming.map((e) => (
            <span key={`${e.fromId}-${e.toId}`} className="min-h-7 text-sm leading-loose text-ink">
              <PokemonLink id={e.fromId} /> <span className="text-ink-faint">→</span>{' '}
              <PokemonLink id={e.toId} />
            </span>
          ))}
        </div>
        <p className="text-xs text-ink-muted">
          HGSS가 따로 구분하는 「아침」 시간대는 진화 판정에서 <b>낮에 포함</b>됩니다. 낮·밤 두 갈래뿐입니다.
        </p>
      </Card>

      {/* 시작 친밀도 */}
      <Card className="mb-6 p-4">
        <SectionHeading>출발점이 결과를 좌우한다</SectionHeading>
        <GuideTable
          headers={['획득 방식', '시작 친밀도', '비고']}
          rows={HGF_STARTING.map((s) => [s.how, s.value, s.note ?? '—'])}
        />
        <p className="mt-3 text-xs text-ink-muted">
          220까지 남은 거리로 보면 <b>프렌드볼(20) &lt; 알 부화(100) &lt; 일반 포획(150)</b> 순입니다.
        </p>
      </Card>

      {/* 올리는 행동 */}
      <Card className="mb-6 p-4">
        <SectionHeading>올리는 행동 — 높아질수록 덜 오른다</SectionHeading>
        <p className="mb-3 text-sm text-ink">
          같은 행동이라도 <b>현재 친밀도 구간</b>에 따라 증가량이 달라집니다. 그래서 70→100은 금방이지만
          200→220이 유난히 더딥니다.
        </p>
        <GuideTable
          headers={['행동', ...HGF_BANDS, '비고']}
          rows={HGF_GAINS.map((g) => [g.action, ...g.gains, g.note ?? '—'])}
        />
      </Card>

      {/* 아이템 */}
      <Card className="mb-6 p-4">
        <SectionHeading>평온의방울 · 프렌드볼 · 럭셔리볼</SectionHeading>
        <div className="flex flex-col gap-3">
          {HGF_ITEMS.map((i) => (
            <div key={i.name} className="rounded-card border border-border p-3">
              <div className="mb-1 flex flex-wrap items-baseline gap-2">
                <span className="text-sm font-black text-ink">{i.name}</span>
                <span className="rounded-chip bg-surface-hover px-2 py-0.5 text-xxs font-bold text-ink-muted">
                  {i.effect}
                </span>
              </div>
              <p className="text-xs leading-relaxed text-ink">{i.detail}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* 시설 */}
      <Card className="mb-6 p-4">
        <SectionHeading>이발소와 그린의 누나 — 200 이상 구간의 해답</SectionHeading>
        <GuideTable
          headers={['수단', '장소', '이용 시점', '효과']}
          rows={HGF_FACILITIES.map((f) => [f.name, f.place, f.when, f.effect])}
        />
        <div className="mt-3 flex flex-col gap-1">
          {HGF_FACILITIES.filter((f) => f.note).map((f) => (
            <p key={f.name} className="text-xs text-ink">
              <b>{f.name}</b> — {f.note}
            </p>
          ))}
        </div>
      </Card>

      {/* 깎이는 행동 */}
      <Card className="mb-6 p-4">
        <SectionHeading>깎이는 행동 — 한방약을 조심한다</SectionHeading>
        <GuideTable
          headers={['원인', '감소량', '비고']}
          rows={HGF_LOSSES.map((l) => [l.cause, l.amount, l.note ?? '—'])}
        />
        <p className="mt-3 text-sm text-ink">
          반대로 <b>{HGF_SAFE_ITEMS.join(' · ')}</b> 같은 일반 회복 아이템은 아무리 써도 친밀도가 깎이지 않습니다.
          쓴맛이 나는 한방약 계열만 문제입니다.
        </p>
      </Card>

      {/* 확인 방법 */}
      <Card className="mb-6 p-4">
        <SectionHeading>지금 얼마인지 확인하기</SectionHeading>
        <p className="mb-3 text-sm text-ink">
          금빛시티 백화점 근처 집의 NPC가 <b>선두 포켓몬</b>을 보고 대략적인 구간을 알려줍니다.
        </p>
        <GuideTable
          headers={['NPC 반응', '실제 친밀도', '진화 가능']}
          rows={HGF_RATINGS.map((r) => [r.reaction, r.range, r.canEvolve])}
        />
        <p className="mt-3 text-sm text-ink">
          ★ <b>「매우 신뢰한다」가 나와도 진화하지 않을 수 있습니다.</b> 그 반응의 범위가 200~249로 넓은데
          진화선인 220이 그 한가운데에 있기 때문입니다. 205도 225도 같은 대사가 나옵니다. 이 반응을 봤다면
          이발이나 레벨업으로 조금 더 올린 뒤 진화를 노리는 편이 안전합니다.
        </p>
      </Card>

      {/* 기술 위력 */}
      <Card className="mb-6 p-4">
        <SectionHeading>
          은혜갚기와 화풀이
        </SectionHeading>
        <p className="mb-3 text-sm text-ink">
          <MoveLink name="은혜갚기" />는 친밀도 ÷ 2.5, <MoveLink name="화풀이" />는 (255 − 친밀도) ÷ 2.5 로
          위력이 정해집니다. 둘 다 최소 위력은 1입니다. <b>친밀도 128을 넘기면 은혜갚기가 더 세집니다.</b>
        </p>
        <GuideTable
          headers={['친밀도', '은혜갚기 위력', '화풀이 위력']}
          rows={HGF_MOVE_POWER.map((r) => [
            String(r.friendship),
            String(r.returnPower),
            String(r.frustrationPower),
          ])}
        />
        <p className="mt-3 text-xs text-ink-muted">
          친밀도를 끝까지 올린 개체의 은혜갚기는 위력 102입니다. 자속으로 쓰는 노말 물리 포켓몬이라면
          스토리 내내 쓸 만한 주력기가 됩니다.
        </p>
      </Card>

      {/* 255 전용 기술 */}
      <Card className="mb-6 p-4">
        <SectionHeading>친밀도 255가 있어야 배우는 기술</SectionHeading>
        <p className="mb-3 text-sm text-ink">
          검은먹시티의 기술 가르침 NPC는 <b>친밀도가 최대치일 때만</b> 아래 기술을 가르쳐 줍니다.
          220으로는 부족합니다.
        </p>
        <GuideTable
          headers={['기술', '대상']}
          rows={HGF_TUTOR_MOVES.map((t) => [<MoveLink key={t.move} name={t.move} />, t.target])}
        />
      </Card>

      {/* 육성 플랜 */}
      <Card className="mb-6 p-4">
        <SectionHeading>상황별 육성 순서</SectionHeading>
        <div className="flex flex-col gap-4">
          {HGF_PLANS.map((p) => (
            <div key={p.title}>
              <h3 className="mb-1.5 text-sm font-black text-ink">{p.title}</h3>
              <ol className="flex flex-col gap-0.5">
                {p.steps.map((s, i) => (
                  <li key={s} className="flex min-h-6 gap-2 text-xs leading-loose text-ink">
                    <span className="shrink-0 self-start font-bold text-ink-faint leading-6">{i + 1}.</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
              {p.note && <p className="mt-1 text-xs text-ink-muted">{p.note}</p>}
            </div>
          ))}
        </div>
      </Card>

      {/* 오해 */}
      <Card className="mb-6 p-4">
        <SectionHeading>자주 헷갈리는 것</SectionHeading>
        <div className="flex flex-col gap-3">
          {HGF_MYTHS.map((m) => (
            <div key={m.q}>
              <p className="text-sm font-bold text-ink">Q. {m.q}</p>
              <p className="text-sm text-ink-muted">{m.a}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* 한 줄 결론 */}
      <Card className="mb-6 p-4">
        <SectionHeading>한 줄로</SectionHeading>
        <p className="text-sm leading-relaxed text-ink">
          <b>프렌드볼이나 알로 출발점을 올리고, 평온의방울을 지닌 채 파티에 넣어 스토리를 진행하며,
          금빛시티를 지날 때마다 이발하고, 마지막에 이상한사탕으로 원하는 시간에 레벨을 올린다.</b>
          {' '}일부러 걷기 노가다를 하는 것보다 이쪽이 훨씬 빠르고 편합니다 — 일반 이브이를 걷기만으로
          진화시키려면 기대값이 약 {(150 * 256).toLocaleString('ko-KR')}걸음입니다.
        </p>
      </Card>
    </GuidePageLayout>
  )
}
