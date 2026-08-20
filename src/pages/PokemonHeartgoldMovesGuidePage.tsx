import { Link } from 'react-router-dom'
import { GuidePageLayout } from '../components/guide/GuidePageLayout'
import { Card } from '../components/ui/Card'
import { GuideTable } from '../components/guide/GuideTable'
import { PokemonLink } from '../components/guide/PokemonLink'
import { SpriteImage } from '../components/pokemon/SpriteImage'
import { findSamplePokemon } from '../data/sample/pokemon.sample'
import { CATEGORY_STYLE } from '../lib/guideCategory'
import { cn } from '../lib/cn'
import {
  HGM_CATCHERS,
  HGM_CHECKLIST,
  HGM_HM_MULE,
  HGM_HM_PLAN,
  HGM_PARTY_SETS,
  HGM_PRINCIPLES,
  HGM_REPEATABLE,
  HGM_TIMINGS,
  HGM_TMS,
  HGM_TOP10,
  HGM_TUTOR_NOTES,
} from '../data/sample/pokemonHeartgoldMoves.data'

function SectionHeading({ children }: { children: string }) {
  return <h2 className="mb-3 text-lg font-black text-ink">{children}</h2>
}

function Stars({ n }: { n: number }) {
  return (
    <span className="whitespace-nowrap" title={`중요도 ${n} / 5`}>
      <span className="text-amber-500">{'★'.repeat(n)}</span>
      <span className="text-ink-faint">{'☆'.repeat(5 - n)}</span>
    </span>
  )
}

function CategoryBadge({ category }: { category: '물리' | '특수' | '변화' }) {
  const cls =
    category === '물리'
      ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300'
      : category === '특수'
        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300'
        : 'bg-stone-100 text-stone-600 dark:bg-stone-800 dark:text-stone-400'
  return <span className={cn('inline-block whitespace-nowrap rounded px-1.5 py-0.5 text-xxs font-bold', cls)}>{category}</span>
}

export function PokemonHeartgoldMovesGuidePage() {
  const style = CATEGORY_STYLE['공략']

  return (
    <GuidePageLayout>
      <div className="mb-2 flex items-center gap-2">
        <Link to="/guides" className="text-sm font-bold text-ink-muted hover:text-ink">
          ← 공략 목록
        </Link>
        <span className={cn('rounded-chip bg-white px-2 py-0.5 text-xs font-bold', style.pillClass)}>공략</span>
      </div>

      <h1 className="mb-1 text-2xl font-black text-ink">하트골드 기술 관리 가이드 — TM을 어디에 쓸 것인가</h1>
      <p className="mb-6 text-sm text-ink-muted">
        4세대는 기술머신이 1회용이다. 레벨업으로 공짜로 배우는 기술을 기다리고, 희귀 TM은 최종 멤버에게만 쓰고,
        비전기술은 전담에게 몰아주는 것이 핵심이다.
      </p>

      {/* 핵심 원칙 */}
      <Card className="mb-6 p-4">
        <SectionHeading>기술을 가르치기 전 확인 순서</SectionHeading>
        <ol className="mb-3 space-y-2">
          {HGM_PRINCIPLES.map((p, i) => (
            <li key={i} className="flex gap-2 text-sm text-ink">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red text-xxs font-black text-white">
                {i + 1}
              </span>
              <span>{p}</span>
            </li>
          ))}
        </ol>
        <div className="rounded-card border border-red-200 bg-red-50 p-3 text-sm text-red-900 dark:border-red-800 dark:bg-red-900/20 dark:text-red-200">
          <strong>4세대 기술머신은 1회용이다.</strong> 한 번 쓰면 사라지므로, 특히 TM26 지진·TM30 섀도볼처럼
          배틀프런티어 BP가 필요한 기술은 최종 파티가 정해질 때까지 아껴둔다.
        </div>
      </Card>

      {/* 레벨업·진화 타이밍 */}
      <Card className="mb-6 p-4">
        <SectionHeading>레벨업·진화 타이밍을 신경 써야 하는 포켓몬</SectionHeading>
        <p className="mb-4 text-sm text-ink">
          아래 포켓몬들은 <strong>레벨업으로 배우는 기술과 기술머신이 겹친다.</strong> 미리 알아두면 TM을 통째로 아낄 수 있다.
        </p>

        {/* 배지 색이 "배우지 말라"는 뜻으로 읽히지 않도록 기준을 먼저 밝힌다 */}
        <div className="mb-4 flex flex-col gap-2 rounded-card border border-border bg-surface-hover/40 p-3 text-xs text-ink sm:flex-row sm:items-center sm:gap-5">
          <span className="flex items-center gap-1.5">
            <span className="shrink-0 rounded-chip bg-brand-red/10 px-2 py-0.5 text-xxs font-semibold text-brand-red">
              Lv.00 기술
            </span>
            TM을 아끼거나 진화 시점을 정하는 기준이 되는 기술
          </span>
          <span className="flex items-center gap-1.5">
            <span className="shrink-0 rounded-chip bg-surface-hover px-2 py-0.5 text-xxs font-semibold text-ink-muted">
              Lv.00 기술
            </span>
            같은 구간에 함께 배우는 기술 — 약하다는 뜻이 아니다
          </span>
        </div>

        <div className="space-y-4">
          {HGM_TIMINGS.map((t) => {
            const p = findSamplePokemon(t.pokemonId)
            return (
              <div key={t.pokemonId} className="rounded-card border border-border p-3">
                <div className="mb-2 flex items-start gap-3">
                  <SpriteImage
                    src={p.artworkUrl ?? p.spriteUrl}
                    alt={p.nameKo}
                    width={56}
                    height={56}
                    pixelated={false}
                    rounded="none"
                    className="h-14 w-14 shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="font-black text-ink">
                      <PokemonLink id={t.pokemonId} label={t.pokemon} showSprite={false} />
                    </div>
                    <p className="mt-0.5 text-xs text-ink-muted">{t.headline}</p>
                  </div>
                </div>

                {t.moves.length > 0 && (
                  <div className="mb-2 flex flex-wrap gap-1.5">
                    {t.moves.map((m) => (
                      <span
                        key={m.level + m.move}
                        className={cn(
                          'rounded-chip px-2 py-0.5 text-xs font-semibold',
                          m.key
                            ? 'bg-brand-red/10 text-brand-red'
                            : 'bg-surface-hover text-ink-muted',
                        )}
                      >
                        Lv.{m.level} {m.move}
                      </span>
                    ))}
                  </div>
                )}

                <ul className="space-y-1">
                  {t.advice.map((a, i) => (
                    <li key={i} className="flex min-h-6 gap-1.5 text-xs leading-loose text-ink">
                      <span className="shrink-0 self-start leading-6 text-ink-faint">·</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>

                {t.wasteWarning && (
                  <div className="mt-2 rounded border border-amber-200 bg-amber-50 px-2 py-1.5 text-xs font-semibold text-amber-900 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-200">
                    쓰지 말 것 — {t.wasteWarning}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </Card>

      {/* 아껴야 할 TM */}
      <Card className="mb-6 p-4">
        <SectionHeading>아껴야 하는 기술머신</SectionHeading>
        <div className="space-y-3">
          {HGM_TMS.map((t) => (
            <div key={t.tm} className="rounded-card border border-border p-3">
              <div className="mb-1.5 flex flex-wrap items-center gap-2">
                <span className="rounded bg-blue-100 px-1.5 py-0.5 text-xxs font-bold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                  {t.tm}
                </span>
                <span className="font-black text-ink">{t.move}</span>
                <Stars n={t.stars} />
                {t.repeatable && (
                  <span className="rounded bg-green-100 px-1.5 py-0.5 text-xxs font-bold text-green-700 dark:bg-green-900/40 dark:text-green-300">
                    반복 획득 가능
                  </span>
                )}
              </div>
              <p className="mb-1 text-xs text-ink">
                <span className="text-ink-muted">입수: </span>
                {t.obtain.join(' · ')}
                {t.repeatable && <span className="text-green-700 dark:text-green-400"> / {t.repeatable}</span>}
              </p>
              <p className="text-xs leading-relaxed text-ink">{t.principle}</p>
              {t.avoid && (
                <p className="mt-1 text-xs font-semibold text-brand-red">여기엔 쓰지 않는다 — {t.avoid}</p>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* 반복 획득 */}
      <Card className="mb-6 p-4">
        <SectionHeading>반복 획득이 되는 기술머신</SectionHeading>
        <GuideTable
          headers={['TM', '기술', '반복 획득처', '관리']}
          rows={HGM_REPEATABLE.map((r) => [r.tm, r.move, r.source, r.policy])}
        />
        <p className="mt-3 text-xs text-ink-muted">
          게임코너 TM은 장당 10,000코인이라 실제 플레이에서는 여전히 부담이 크다. 반면 백화점 5층에서
          돈으로 사는 TM54(2,000원)·TM70(1,000원)은 마음 놓고 써도 된다.
        </p>
      </Card>

      {/* 비전머신 */}
      <Card className="mb-6 p-4">
        <SectionHeading>비전머신 배정</SectionHeading>
        <p className="mb-3 text-sm text-ink">
          하트골드에서는 비전기술을 마음대로 지울 수 없고 <strong>검은먹시티의 기술잊기 NPC</strong>를 거쳐야 한다.
          그래서 주력에게 HM을 몰아주면 나중에 기술 칸이 묶인다.
        </p>

        <div className="mb-4 rounded-card border border-border-strong bg-surface-hover/40 p-3">
          <div className="mb-2 flex items-center gap-2">
            <SpriteImage
              src={findSamplePokemon(HGM_HM_MULE.pokemonId).spriteUrl}
              alt={HGM_HM_MULE.pokemon}
              width={40}
              height={40}
              className="h-10 w-10 shrink-0"
            />
            <div>
              <div className="text-sm font-black text-ink">
                비전 전담 추천 — <PokemonLink id={HGM_HM_MULE.pokemonId} label={HGM_HM_MULE.pokemon} showSprite={false} />
              </div>
              <div className="mt-0.5 flex flex-wrap gap-1">
                {HGM_HM_MULE.moves.map((m) => (
                  <span key={m} className="rounded-chip bg-white px-2 py-0.5 text-xxs font-semibold text-ink">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p className="text-xs leading-relaxed text-ink">{HGM_HM_MULE.note}</p>
        </div>

        <div className="overflow-x-auto">
          <GuideTable
            headers={['HM', '기술', '분류', '담당', '이유']}
            rows={HGM_HM_PLAN.map((h) => [
              h.hm,
              h.move,
              <CategoryBadge key={h.hm} category={h.category} />,
              h.holderIds.length > 0 ? (
                <span key={h.hm + 'h'} className="inline-flex flex-wrap items-center gap-1">
                  {h.holderIds.map((id) => (
                    <PokemonLink key={id} id={id} />
                  ))}
                </span>
              ) : (
                h.holder
              ),
              h.reason,
            ])}
          />
        </div>
      </Card>

      {/* 포획 요원 */}
      <Card className="mb-6 p-4">
        <SectionHeading>포획 전담 만들기</SectionHeading>
        <p className="mb-3 text-sm text-ink">
          도감을 채울 계획이라면 포획 담당을 하나 두는 편이 훨씬 편하다. 핵심은{' '}
          <strong>상대를 재우고, HP를 1만 남기는 것</strong>이다.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {HGM_CATCHERS.map((c) => (
            <div key={c.pokemonId} className="rounded-card border border-border p-3">
              <div className="mb-2 flex items-center gap-2">
                <SpriteImage
                  src={findSamplePokemon(c.pokemonId).spriteUrl}
                  alt={c.pokemon}
                  width={40}
                  height={40}
                  className="h-10 w-10 shrink-0"
                />
                <PokemonLink id={c.pokemonId} label={c.pokemon} showSprite={false} />
              </div>
              <div className="mb-2 space-y-1">
                {c.moves.map((m) => (
                  <div key={m.move} className="flex items-center gap-1.5 text-xs">
                    <span className="font-bold text-ink">{m.move}</span>
                    <span className="rounded bg-surface-hover px-1.5 py-0.5 text-xxs text-ink-muted">{m.how}</span>
                  </div>
                ))}
              </div>
              <ul className="space-y-0.5">
                {c.merit.map((m, i) => (
                  <li key={i} className="text-xs leading-relaxed text-ink">
                    · {m}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      {/* NPC 시설 */}
      <Card className="mb-6 p-4">
        <SectionHeading>기억해 둘 NPC 세 곳</SectionHeading>
        <div className="grid gap-3 sm:grid-cols-3">
          {[HGM_TUTOR_NOTES.relearn, HGM_TUTOR_NOTES.forget, HGM_TUTOR_NOTES.headbutt].map((n) => (
            <div key={n.title} className="rounded-card border border-border p-3">
              <div className="mb-1 text-sm font-black text-ink">{n.title}</div>
              <div className="mb-2 flex flex-wrap gap-1">
                <span className="rounded bg-surface-hover px-1.5 py-0.5 text-xxs font-semibold text-ink-muted">
                  {n.place}
                </span>
                <span className="rounded bg-surface-hover px-1.5 py-0.5 text-xxs font-semibold text-ink-muted">
                  {n.cost}
                </span>
              </div>
              <ul className="space-y-0.5">
                {n.uses.map((u, i) => (
                  <li key={i} className="text-xs leading-relaxed text-ink">
                    · {u}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      {/* 파티 배정 예시 */}
      <Card className="mb-6 p-4">
        <SectionHeading>스토리 파티 기술 배정 예시</SectionHeading>
        <GuideTable
          headers={['포켓몬', '초중반', '중후반', '메모']}
          rows={HGM_PARTY_SETS.map((s) => [
            <PokemonLink key={s.pokemonId} id={s.pokemonId} label={s.pokemon} />,
            s.early ? s.early.join(' / ') : '—',
            s.late.join(' / '),
            s.note,
          ])}
        />
      </Card>

      {/* 체크리스트 */}
      <Card className="mb-6 p-4">
        <SectionHeading>놓치지 말아야 할 체크리스트</SectionHeading>
        <div className="grid gap-4 sm:grid-cols-2">
          {HGM_CHECKLIST.map((g) => (
            <div key={g.group}>
              <h3 className="mb-1.5 text-sm font-bold text-ink">{g.group}</h3>
              <ul className="space-y-1">
                {g.items.map((it, i) => (
                  <li key={i} className="flex min-h-6 gap-1.5 text-xs leading-loose text-ink">
                    <span className="shrink-0 self-start leading-6 text-ink-faint">☐</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      {/* 핵심 10 */}
      <Card className="p-4">
        <SectionHeading>10가지만 기억한다면</SectionHeading>
        <ol className="space-y-1.5">
          {HGM_TOP10.map((t, i) => (
            <li key={i} className="flex min-h-6 gap-2 text-sm leading-loose text-ink">
              <span className="shrink-0 self-start font-black leading-7 text-brand-red">{i + 1}.</span>
              <span>{t}</span>
            </li>
          ))}
        </ol>
        <div className="mt-4 rounded-card border border-border-strong bg-surface-hover/40 p-3 text-sm leading-relaxed text-ink">
          <strong>한 줄 결론.</strong> 레벨업으로 공짜로 배우는 강한 기술은 기다려서 받고, 희귀 기술머신은 최종
          멤버에게만 쓰며, 비전기술은 전담 포켓몬에게 몰아주는 것이 가장 깔끔하다.
        </div>
      </Card>
    </GuidePageLayout>
  )
}
