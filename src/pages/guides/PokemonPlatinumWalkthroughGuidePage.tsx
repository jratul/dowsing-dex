import { Link } from 'react-router-dom'
import { GuidePageLayout } from '../../components/guide/GuidePageLayout'
import { Card } from '../../components/ui/Card'
import { GuideTable } from '../../components/guide/GuideTable'
import { linkifyGuideText } from '../../lib/linkifyGuideText'
import { SAMPLE_POKEMON } from '../../data/sample/pokemon.sample'
import { PokemonLink } from '../../components/guide/PokemonLink'
import { CATEGORY_STYLE } from '../../lib/guideCategory'
import {
  PTW_PARTY,
  PTW_HM_TABLE,
  PTW_TM_TABLE,
  PTW_MILESTONES,
  PTW_STEPS,
  PTW_LEAGUE,
  PTW_ALTS,
  PTW_NAME_TO_ID,
  PTW_MOVE_NAMES,
  PTL_PARTY,
  PTL_BATONS,
  PTL_TRADE_STEPS,
  PTL_PREMISE,
  PTL_OBEDIENCE,
  PTL_OT_NOTE,
  PTL_TRADE_EVOS,
  PTL_KEY_POINTS,
  PTL_HM_FINAL,
  PTL_CYNTHIA,
  PTL_ELITE_AARON,
} from '../../data/sample/pokemonPlatinumWalkthrough.data'

// 본문의 포켓몬 이름과 기술 이름을 한 번에 링크로 바꾼다.
function L(text: string) {
  return linkifyGuideText(text, PTW_NAME_TO_ID, PTW_MOVE_NAMES)
}

/** 통신진화 후보 추천도 (1~5). */
const STARS = ['', '★', '★★', '★★★', '★★★★', '★★★★★'] as const

function LeadBadge() {
  return (
    <span className="shrink-0 rounded bg-brand-red px-1.5 py-0.5 text-xxs font-bold text-white">선두</span>
  )
}

function BossBlock({
  leader,
  place,
  type,
  levels,
  note,
  rows,
}: {
  leader: string
  place?: string
  type: string
  levels?: string
  note: string
  rows: { opponent: string; answer: string; lead?: boolean }[]
}) {
  return (
    <div className="rounded-lg border border-border bg-surface-hover p-3">
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <span className="font-bold text-ink">
          {leader}
          {place ? ` — ${place}` : ''}
        </span>
        <span className="rounded bg-brand-red/10 px-2 py-0.5 text-xxs font-bold text-brand-red">{type} 타입</span>
        {levels && <span className="text-xs text-ink-muted">{levels}</span>}
      </div>
      <p className="mb-2 text-sm text-ink">{L(note)}</p>
      <GuideTable
        headers={['상대 포켓몬', '대응 방법']}
        rows={rows.map((r) => [
          <span key="op" className="flex flex-wrap items-center gap-1.5">
            {r.lead && <LeadBadge />}
            <span>{L(r.opponent)}</span>
          </span>,
          L(r.answer),
        ])}
      />
    </div>
  )
}

export function PokemonPlatinumWalkthroughGuidePage() {
  const style = CATEGORY_STYLE['공략']
  const party = PTW_PARTY.map((m) => ({
    ...m,
    pokemon2: SAMPLE_POKEMON.find((p) => p.id === m.pokemonId),
  }))

  return (
    <GuidePageLayout generation="4세대" version="플래티넘">
      <div className="mb-2 flex items-center gap-2">
        <Link to="/guides" className="text-sm font-bold text-ink-muted hover:text-ink">
          ← 공략 목록
        </Link>
        <span className={`rounded-chip bg-white px-2 py-0.5 text-xs font-bold ${style.pillClass}`}>공략</span>
      </div>

      <h1 className="mb-1 text-2xl font-black text-ink">포켓몬스터 Pt 기라티나 — 6인 완결형 최적화 공략</h1>
      <p className="mb-4 text-xs text-ink-muted">
        Pt는 스토리 진행에 비전머신이 8개나 걸린다. 이 공략은 그 8개를 최종 6마리 안에서 모두 소화해
        <strong className="text-ink"> 전용 비전요원도, 박스 교체도 없이</strong> 난천까지 미는 것을 목표로 한다.
        보스 표의
        <span className="mx-1 inline-block rounded bg-brand-red px-1.5 py-0.5 text-xxs font-bold text-white">선두</span>
        는 상대가 가장 먼저 내보내는 포켓몬이다.
      </p>

      {/* 추천 파티 */}
      <Card className="mb-6 overflow-hidden">
        <div className={`px-4 py-3 ${style.bannerClass}`}>
          <p className="text-sm font-bold text-ink">추천 파티 6마리 — 불꽃숭이 스타트</p>
        </div>
        <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
          {party.map((m) => (
            <div key={m.pokemonId} className="min-w-0 rounded-card border border-border p-3">
              <p className="font-bold text-ink">
                <PokemonLink id={m.pokemonId} label={m.pokemon2?.nameKo ?? m.pokemon} />
              </p>
              <p className="mt-0.5 text-xxs font-bold text-brand-red">{m.hm}</p>
              <p className="mt-1 text-xs text-ink-muted">{m.catchTiming}</p>
              <p className="mt-1 text-xs text-ink">{L(m.role)}</p>
              <p className="mt-1 text-xs text-ink-muted">{L(m.keyMoves.join(' · '))}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* 비전머신 배분 */}
      <h2 className="mb-2 text-lg font-black text-ink">비전머신 8개 배분</h2>
      <p className="mb-3 text-sm text-ink">
        담당자는 모두 플래티넘 학습셋으로 실제 습득이 가능한지 확인했다. 특히
        <strong className="text-ink"> 안개제거는 배울 수 있는 후보가 매우 적어</strong> 찌르호크가 아니면 파티 구성이 꼬인다.
      </p>
      <div className="mb-6">
        <GuideTable
          headers={['HM', '기술', '입수처', '담당', '메모']}
          rows={PTW_HM_TABLE.map((r) => [
            <span key="hm" className="inline-block rounded bg-red-100 px-1.5 py-0.5 text-xxs font-bold text-red-700 dark:bg-red-900/40 dark:text-red-300">
              {r.hm}
            </span>,
            L(r.move),
            r.obtainedAt,
            L(r.holder),
            r.note,
          ])}
        />
      </div>

      {/* 기술머신 배분 */}
      <h2 className="mb-2 text-lg font-black text-ink">기술머신 배분</h2>
      <p className="mb-3 text-sm text-ink">
        4세대의 TM은 대부분 일회용이다. 최종 6인에게만 쓴다.
      </p>
      <div className="mb-6">
        <GuideTable
          headers={['TM', '기술', '대상', '입수처', '메모']}
          rows={PTW_TM_TABLE.map((r) => [
            <span key="tm" className="inline-block rounded bg-blue-100 px-1.5 py-0.5 text-xxs font-bold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
              {r.tm}
            </span>,
            L(r.move),
            L(r.target),
            r.where,
            L(r.note),
          ])}
        />
      </div>

      {/* 진화·기술 마일스톤 */}
      <h2 className="mb-2 text-lg font-black text-ink">진화·기술 임계점</h2>
      <p className="mb-3 text-sm text-ink">
        모든 포켓몬의 레벨을 똑같이 맞출 필요는 없다. 다음 임계점을 앞둔 포켓몬에게 경험치를 몰아준다.
      </p>
      <div className="mb-6">
        <GuideTable
          headers={['포켓몬', '임계점', '이유']}
          rows={PTW_MILESTONES.map((m) => [L(m.pokemon), <span key="p" className="font-bold text-ink">{m.point}</span>, L(m.why)])}
        />
      </div>
      {/* STEP 진행 */}
      <h2 className="mb-2 text-lg font-black text-ink">STEP별 진행</h2>
      <div className="mb-6 flex flex-col gap-4">
        {PTW_STEPS.map((s) => (
          <Card key={s.id} className="overflow-hidden">
            <div className={`px-4 py-3 ${style.bannerClass}`}>
              <p className="text-sm font-bold text-ink">{s.title}</p>
              <p className="text-xs text-ink-muted">
                {s.subtitle} · {s.levelRange}
              </p>
            </div>
            <div className="flex flex-col gap-3 p-4">
              <ul className="flex flex-col gap-1 leading-loose">
                {s.todos.map((t) => (
                  <li key={t} className="flex min-h-7 gap-2 text-sm text-ink">
                    <span className="shrink-0 self-start leading-7 text-ink-faint">▸</span>
                    <span>{L(t)}</span>
                  </li>
                ))}
              </ul>
              {s.boss && (
                <BossBlock
                  leader={s.boss.leader}
                  place={s.boss.place}
                  type={s.boss.type}
                  levels={s.boss.levels}
                  note={s.boss.note}
                  rows={s.boss.rows}
                />
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* 포켓몬리그 */}
      <h2 className="mb-2 text-lg font-black text-ink">포켓몬리그 1차 — 사천왕 · 난천</h2>
      <p className="mb-3 text-sm text-ink">
        이 파티는 사천왕마다 담당이 거의 하나씩 갈린다. 마지막 난천의 한카리아스 Lv.62를 넘기기 위해
        <strong className="text-ink"> 플로젤의 HP와 냉동빔을 끝까지 남겨두는 것</strong>이 이 공략의 설계다.
      </p>
      <div className="mb-6 flex flex-col gap-4">
        {PTW_LEAGUE.map((b) => (
          <BossBlock key={b.name} leader={b.name} type={b.type} note={b.note} rows={b.rows} />
        ))}
      </div>

      {/* 대체 후보 */}
      <h2 className="mb-2 text-lg font-black text-ink">대체 후보를 넣는다면</h2>
      <div className="flex flex-col gap-3">
        {PTW_ALTS.map((a) => (
          <Card key={`${a.slot}-${a.alt}`} className="p-4">
            <p className="mb-2 font-bold text-ink">
              {L(a.slot)} <span className="text-ink-faint">→</span> {L(a.alt)}
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <p className="mb-1 text-xxs font-bold text-ink-faint">장점</p>
                <ul className="flex flex-col gap-0.5">
                  {a.pros.map((x) => (
                    <li key={x} className="flex min-h-6 gap-1.5 text-xs text-ink">
                      <span className="shrink-0 self-start leading-6 text-ink-faint">+</span>
                      <span>{L(x)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-1 text-xxs font-bold text-ink-faint">단점</p>
                <ul className="flex flex-col gap-0.5">
                  {a.cons.map((x) => (
                    <li key={x} className="flex min-h-6 gap-1.5 text-xs text-ink">
                      <span className="shrink-0 self-start leading-6 text-ink-faint">−</span>
                      <span>{L(x)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-2 text-xs text-ink-muted">{L(a.verdict)}</p>
          </Card>
        ))}
      </div>

      {/* DS 2대 + 하트골드 통신진화 루트 */}
      <div className="mt-8 rounded-card border-2 border-brand-red/40 p-4">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="rounded bg-brand-red px-2 py-0.5 text-xxs font-bold text-white">선택 루트</span>
          <h2 className="text-lg font-black text-ink">DS 2대 + 하트골드 통신진화 바톤터치</h2>
        </div>
        <p className="mb-4 text-sm text-ink">
          여기까지가 Pt 팩 하나로 끝내는 6인 완결형입니다. 닌텐도 DS 가 2대 있고 하트골드
          팩이 함께 있다면, 하트골드를 <b>통신진화 중계용</b>으로만 쓰는 다른 루트를 짤 수
          있습니다. 하트골드에서 강한 포켓몬을 수입해 밸런스를 무너뜨리지 않으면서,
          보스마다 파티를 갈아끼우는 대신 <b>스토리의 역할이 바뀌는 지점에서만</b> 계획적으로
          멤버를 교체하는 방식입니다.
        </p>

        {/* 최종 6인 */}
        <h3 className="mb-2 text-base font-bold text-ink">이 루트의 리그 최종 6인</h3>
        <div className="mb-5 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {PTL_PARTY.map((m) => (
            <div key={m.pokemonId} className="rounded-lg border border-border p-3">
              <p className="font-bold text-ink">
                <PokemonLink id={m.pokemonId} label={m.pokemon} />{' '}
                <span className="text-xxs font-normal text-ink-muted">{m.type}</span>
              </p>
              <p className="mt-0.5 text-xs text-ink">{L(m.role)}</p>
            </div>
          ))}
        </div>

        {/* 바톤터치 */}
        <h3 className="mb-2 text-base font-bold text-ink">바톤터치 — 필수 3번 + 선택 1번</h3>
        <p className="mb-2 text-sm text-ink-muted">
          실질적인 파티 OUT/IN 은 이게 전부입니다. 보스마다 교체하는 방식과 완전히 다릅니다.
        </p>
        <div className="mb-5 flex flex-col gap-3">
          {PTL_BATONS.map((b) => (
            <div key={b.n} className="rounded-lg border border-border p-3">
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <span
                  className={
                    b.required
                      ? 'rounded bg-brand-red px-1.5 py-0.5 text-xxs font-bold text-white'
                      : 'rounded bg-surface-hover px-1.5 py-0.5 text-xxs font-bold text-ink-muted'
                  }
                >
                  {b.n}
                </span>
                <PokemonLink id={b.outId} label={b.out} />
                <span className="font-bold text-ink-muted">→</span>
                <PokemonLink id={b.inId} label={b.into} />
              </div>
              <p className="mb-1 text-xs text-ink-muted">시점: {L(b.when)}</p>
              <p className="text-sm text-ink">{L(b.why)}</p>
            </div>
          ))}
        </div>

        {/* 통신 절차 */}
        <h3 className="mb-2 text-base font-bold text-ink">통신진화 왕복 절차</h3>
        <p className="mb-2 text-sm text-ink-muted">
          윤겔라를 예로 든 것이고 어떤 통신진화든 형태는 같습니다. 두 번 교환하면 원래
          파티로 돌아옵니다.
        </p>
        <GuideTable
          headers={['순서', 'Pt 쪽', '하트골드 쪽', '결과']}
          rows={PTL_TRADE_STEPS.map((t) => [t.order, L(t.pt), L(t.hg), L(t.result)])}
        />

        <div className="mt-3 mb-5 grid gap-3 md:grid-cols-2">
          <div className="rounded-lg border border-border p-3">
            <p className="mb-1 text-sm font-bold text-ink">준비물</p>
            <ul className="flex flex-col gap-0.5">
              {PTL_PREMISE.needs.map((x) => (
                <li key={x} className="flex min-h-6 gap-1.5 text-xs text-ink">
                  <span className="shrink-0 self-start leading-6 text-ink-faint">·</span>
                  <span>{L(x)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border p-3">
            <p className="mb-1 text-sm font-bold text-ink">주의</p>
            <ul className="flex flex-col gap-0.5">
              {PTL_PREMISE.cautions.map((x) => (
                <li key={x} className="flex min-h-6 gap-1.5 text-xs text-ink">
                  <span className="shrink-0 self-start leading-6 text-ink-faint">·</span>
                  <span>{L(x)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 복종 */}
        <h3 className="mb-2 text-base font-bold text-ink">교환 포켓몬 복종 상한 (신오)</h3>
        <p className="mb-2 text-sm text-ink-muted">
          신오는 어떤 배지인지가 아니라 <b>배지 개수</b>로 정해집니다. 이 표는 남의 트레이너
          포켓몬에만 적용됩니다.
        </p>
        <GuideTable headers={['배지 수', '복종하는 레벨']} rows={PTL_OBEDIENCE.map((o) => [o.badges, o.cap])} />
        <p className="mt-2 mb-5 rounded-lg border border-border bg-surface-hover p-3 text-sm text-ink">
          {L(PTL_OT_NOTE)}
        </p>

        {/* 통신진화 후보 */}
        <h3 className="mb-2 text-base font-bold text-ink">통신진화 후보 전부 검토</h3>
        <p className="mb-2 text-sm text-ink-muted">
          통신진화가 된다고 다 쓰지는 않습니다. 통신 자체가 목적이 아니라 스토리 효율이
          올라갈 때만 씁니다 — 이 루트에서 정규 채택하는 것은 후딘 하나뿐입니다.
        </p>
        <div className="mb-5 flex flex-col gap-2">
          {PTL_TRADE_EVOS.map((e) => (
            <div key={e.pokemonId} className="rounded-lg border border-border p-3">
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <PokemonLink id={e.pokemonId} label={e.pokemon} />
                <span className="text-xs text-ink-muted">← {L(e.from)}</span>
                <span className="text-xs font-bold text-brand-red">{STARS[e.stars]}</span>
              </div>
              <p className="mb-1 text-xs text-ink-muted">
                합류: {L(e.timing)} · 역할 중복: {L(e.overlap)}
              </p>
              <p className="text-sm text-ink">{L(e.verdict)}</p>
            </div>
          ))}
        </div>

        {/* 핵심 포인트 */}
        <h3 className="mb-2 text-base font-bold text-ink">이 루트에서 이득이 갈리는 지점</h3>
        <div className="mb-5 flex flex-col gap-2">
          {PTL_KEY_POINTS.map((k) => (
            <div key={k.title} className="rounded-lg border border-border p-3">
              <p className="mb-1 font-bold text-ink">{L(k.title)}</p>
              <p className="text-sm text-ink">{L(k.body)}</p>
            </div>
          ))}
        </div>

        {/* HM 최종 배분 */}
        <h3 className="mb-2 text-base font-bold text-ink">기라티나 합류 후 HM 최종 배분</h3>
        <div className="mb-5">
          <GuideTable
            headers={['담당', '비전머신', '비고']}
            rows={PTL_HM_FINAL.map((h) => [L(h.holder), L(h.hms), L(h.note)])}
          />
        </div>

        {/* 리그 */}
        <h3 className="mb-2 text-base font-bold text-ink">리그 — 역할이 1:1로 맞물린다</h3>
        <div className="flex flex-col gap-3">
          <BossBlock
            leader="사천왕 오엽"
            type="에스퍼"
            note="포푸니라가 깜짝베기 하나로 거의 다 처리한다. 단 엘레이드만은 절대 내보내지 않는다."
            rows={PTL_ELITE_AARON}
          />
          <BossBlock
            leader="챔피언 난천"
            type="혼합"
            note="최종 6인이 난천의 여섯 마리와 거의 1:1로 대응된다. 이 표가 맞아떨어지는 것이 이 파티 구성의 이유다."
            rows={PTL_CYNTHIA}
          />
        </div>
      </div>

    </GuidePageLayout>
  )
}
