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
} from '../../data/sample/pokemonPlatinumWalkthrough.data'

// 본문의 포켓몬 이름과 기술 이름을 한 번에 링크로 바꾼다.
function L(text: string) {
  return linkifyGuideText(text, PTW_NAME_TO_ID, PTW_MOVE_NAMES)
}

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

    </GuidePageLayout>
  )
}
