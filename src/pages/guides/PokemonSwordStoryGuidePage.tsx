import { Link } from 'react-router-dom'
import { GuidePageLayout } from '../../components/guide/GuidePageLayout'
import { Card } from '../../components/ui/Card'
import { GuideTable } from '../../components/guide/GuideTable'
import { PokemonLink } from '../../components/guide/PokemonLink'
import { MoveLink } from '../../components/guide/MoveLink'
import { CATEGORY_STYLE } from '../../lib/guideCategory'
import { cn } from '../../lib/cn'
import {
  SWS_ALTERNATIVES,
  SWS_CANNOT_LEARN,
  SWS_DYNAMAX,
  SWS_GYMS,
  SWS_LEON,
  SWS_PARTY,
  SWS_TIMELINE,
  SWS_TIPS,
  SWS_TMS,
  SWS_TRS,
} from '../../data/sample/pokemonSwordStory.data'

function SectionHeading({ children }: { children: string }) {
  return <h2 className="mb-3 text-lg font-black text-ink">{children}</h2>
}

function HowBadge({ how }: { how: string }) {
  if (how.startsWith('TM')) return <span className="inline-block rounded bg-blue-100 px-1.5 py-0.5 text-xxs font-bold whitespace-nowrap text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">{how}</span>
  if (how.startsWith('TR')) return <span className="inline-block rounded bg-purple-100 px-1.5 py-0.5 text-xxs font-bold whitespace-nowrap text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">{how}</span>
  if (how.startsWith('Lv.')) return <span className="inline-block rounded bg-green-100 px-1.5 py-0.5 text-xxs font-bold whitespace-nowrap text-green-700 dark:bg-green-900/40 dark:text-green-300">{how}</span>
  return <span className="inline-block rounded bg-amber-100 px-1.5 py-0.5 text-xxs font-bold whitespace-nowrap text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">{how}</span>
}

export function PokemonSwordStoryGuidePage() {
  const style = CATEGORY_STYLE['공략']

  return (
    <GuidePageLayout generation="8세대" version="소드·실드">
      <div className="mb-2 flex items-center gap-2">
        <Link to="/guides" className="text-sm font-bold text-ink-muted hover:text-ink">
          ← 공략 목록
        </Link>
        <span className={cn('rounded-chip bg-white px-2 py-0.5 text-xs font-bold', style.pillClass)}>공략</span>
      </div>

      <h1 className="mb-1 text-2xl font-black text-ink">소드 스토리 파티 가이드 — 교체 한 번으로 챔피언까지</h1>
      <p className="mb-6 text-sm text-ink-muted">
        포켓몬스터 소드 본편 첫 플레이 기준입니다. DLC·통신교환·HOME·맥스레이드 전용 개체 없이, 자연스럽게
        손에 들어오는 순서대로 6마리를 완성합니다. 실질적인 종 교체는 <b>멍파치 → 일레즌 한 번</b>뿐입니다.
      </p>

      {/* 최종 엔트리 */}
      <Card className="mb-6 border-2 border-brand-red/40 p-4">
        <SectionHeading>최종 엔트리</SectionHeading>
        <GuideTable
          headers={['포켓몬', '진화', '입수', '역할']}
          rows={SWS_PARTY.map((p) => [
            <PokemonLink key={p.pokemonId} id={p.pokemonId} />,
            p.line,
            p.catchAt,
            p.role,
          ])}
        />
        <p className="mt-3 text-sm text-ink">
          불꽃·물·전기·독·비행·강철·땅·에스퍼·페어리·바위 공격을 자연스럽게 갖추고, 물리·특수 딜러가 적절히
          나뉩니다. 교환 진화나 까다로운 친밀도 진화가 없고, 와일드에리어 날씨가 꼬여도 진행이 막히지 않습니다.
        </p>
      </Card>

      {/* 타임라인 */}
      <Card className="mb-6 p-4">
        <SectionHeading>입수 · 교체 순서</SectionHeading>
        <GuideTable
          headers={['장소', '포켓몬', '할 일', '비고']}
          rows={SWS_TIMELINE.map((t) => [
            t.where,
            <PokemonLink key={`${t.where}-${t.pokemonId}`} id={t.pokemonId} />,
            t.action,
            t.note,
          ])}
        />
      </Card>

      {/* 포켓몬별 기술 */}
      <Card className="mb-6 p-4">
        <SectionHeading>포켓몬별 기술 배치</SectionHeading>
        <div className="flex flex-col gap-5">
          {SWS_PARTY.map((p) => (
            <div key={p.pokemonId} className="defer-offscreen">
              <div className="mb-2 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="text-base font-black text-ink">
                  <PokemonLink id={p.pokemonId} />
                </span>
                <span className="text-xs text-ink-muted">{p.role}</span>
              </div>
              <GuideTable
                headers={['기술', '습득', '용도']}
                rows={p.moveTable.map((m) => [
                  <MoveLink key={m.move} name={m.move} />,
                  <HowBadge key={`${m.move}-how`} how={m.how} />,
                  m.usage,
                ])}
              />
              <p className="mt-1.5 text-xs text-ink-muted">
                특성 {p.ability} · 선호 성격 {p.nature}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-card border border-border bg-surface-hover p-3">
          <p className="mb-1 text-xs font-bold text-ink">소드·실드에서 배울 수 없는 조합</p>
          <p className="text-xs text-ink">
            흔히 추천되지만 이 파티에서는 불가능합니다 —{' '}
            {SWS_CANNOT_LEARN.map((c, i) => (
              <span key={`${c.pokemon}-${c.move}`}>
                {i > 0 && ' · '}
                {c.pokemon} {c.move}({c.code})
              </span>
            ))}
          </p>
        </div>
      </Card>

      {/* 체육관 */}
      <Card className="mb-6 p-4">
        <SectionHeading>체육관별 담당</SectionHeading>
        <div className="flex flex-col gap-3">
          {SWS_GYMS.map((g) => (
            <div key={g.order} className="defer-offscreen rounded-card border border-border p-3">
              <div className="mb-1.5 flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="text-sm font-black text-ink">
                  {g.order}. {g.leader}
                </span>
                <span className="text-xs text-ink-muted">{g.type}</span>
                {g.swordOnly && (
                  <span className="rounded bg-red-100 px-1.5 py-0.5 text-xxs font-bold text-red-700 dark:bg-red-900/40 dark:text-red-300">
                    소드 전용
                  </span>
                )}
              </div>
              <div className="mb-1.5 flex flex-wrap gap-x-3 gap-y-1">
                {g.roster.map((m) => (
                  <span key={`${g.order}-${m.pokemonId}`} className="min-h-7 text-sm leading-loose whitespace-nowrap text-ink">
                    <PokemonLink id={m.pokemonId} /> <span className="text-xs text-ink-muted">Lv.{m.level}</span>
                  </span>
                ))}
              </div>
              <p className="text-xs text-ink">
                <b>담당</b> — {g.counters}
              </p>
              {g.note && <p className="mt-0.5 text-xs text-ink-muted">{g.note}</p>}
            </div>
          ))}
        </div>
      </Card>

      {/* 단델 */}
      <Card className="mb-6 p-4">
        <SectionHeading>최종전 단델 (염버니 선택 시)</SectionHeading>
        <p className="mb-3 text-sm text-ink">
          단델은 플레이어의 스타팅에 강한 스타팅을 데려옵니다. 염버니를 골랐다면 인텔리레온과 마임꽁꽁이
          들어옵니다. 리자몽은 거다이맥스합니다.
        </p>
        <GuideTable
          headers={['포켓몬', '레벨', '대응']}
          rows={SWS_LEON.map((m) => [
            <PokemonLink key={m.pokemonId} id={m.pokemonId} />,
            `Lv.${m.level}`,
            m.counter,
          ])}
        />
      </Card>

      {/* TM / TR */}
      <Card className="mb-6 p-4">
        <SectionHeading>기술머신 · 기술레코드</SectionHeading>
        <p className="mb-3 text-sm text-ink">
          소드·실드의 <b>TM은 무한 사용</b>, <b>TR은 1회용</b>입니다. TM은 아낄 필요가 없습니다.
        </p>
        <GuideTable
          headers={['번호', '기술', '입수', '용도']}
          rows={SWS_TMS.map((t) => [t.code, <MoveLink key={t.code} name={t.move} />, t.where, t.use])}
        />
        <h3 className="mt-4 mb-2 text-sm font-black text-ink-faint">쓸 만한 TR</h3>
        <GuideTable
          headers={['번호', '기술', '입수', '용도']}
          rows={SWS_TRS.map((t) => [t.code, <MoveLink key={t.code} name={t.move} />, t.where, t.use])}
        />
        <p className="mt-2 text-xs text-ink-muted">
          TR은 맥스레이드 보상이라 입수 시점이 운에 달려 있습니다. 이 파티는 TR 없이도 진행되게 짰습니다.
        </p>
      </Card>

      {/* 대체안 */}
      <Card className="mb-6 p-4">
        <SectionHeading>바꿔 넣을 수 있는 포켓몬</SectionHeading>
        <GuideTable
          headers={['대신', '넣을 포켓몬', '장점', '단점']}
          rows={SWS_ALTERNATIVES.map((a) => [a.from, <PokemonLink key={a.toId} id={a.toId} />, a.pros, a.cons])}
        />
      </Card>

      {/* 다이맥스 */}
      <Card className="mb-6 p-4">
        <SectionHeading>체육관별 다이맥스 추천</SectionHeading>
        <GuideTable headers={['상대', '다이맥스']} rows={SWS_DYNAMAX.map((d) => [d.vs, d.who])} />
      </Card>

      {/* 운영 */}
      <Card className="mb-6 p-4">
        <SectionHeading>운영 원칙</SectionHeading>
        <div className="flex flex-col gap-3">
          {SWS_TIPS.map((t) => (
            <div key={t.title}>
              <p className="text-sm font-bold text-ink">{t.title}</p>
              <p className="text-sm text-ink-muted">{t.body}</p>
            </div>
          ))}
        </div>
      </Card>
    </GuidePageLayout>
  )
}
