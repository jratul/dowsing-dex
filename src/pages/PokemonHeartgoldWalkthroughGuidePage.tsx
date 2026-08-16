import { Link } from 'react-router-dom'
import { GuidePageLayout } from '../components/guide/GuidePageLayout'
import { Card } from '../components/ui/Card'
import { SpriteImage } from '../components/pokemon/SpriteImage'
import { GuideTable } from '../components/guide/GuideTable'
import { linkifyPokemonNames } from '../lib/linkifyPokemonNames'
import { SAMPLE_POKEMON } from '../data/sample/pokemon.sample'
import { PokemonLink } from '../components/guide/PokemonLink'
import { CATEGORY_STYLE } from '../lib/guideCategory'
import {
  HGW_PARTY,
  HGW_PHASES,
  HGW_HM_TABLE,
  HGW_ALT_MEMBERS,
  HGW_LEVEL_MILESTONES,
  HGW_YOUTUBER_PICKS,
  HGW_ROLE_COMPARISONS,
  HGW_NAME_TO_ID,
} from '../data/sample/pokemonHeartgoldWalkthrough.data'

function L(text: string) {
  return linkifyPokemonNames(text, HGW_NAME_TO_ID)
}

function HowBadge({ how }: { how: string }) {
  if (how.startsWith('HM'))
    return (
      <span className="inline-block rounded bg-red-100 px-1.5 py-0.5 text-xxs font-bold text-red-700 dark:bg-red-900/40 dark:text-red-300">
        {how}
      </span>
    )
  if (how.startsWith('TM'))
    return (
      <span className="inline-block rounded bg-blue-100 px-1.5 py-0.5 text-xxs font-bold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
        {how}
      </span>
    )
  return (
    <span className="inline-block rounded bg-surface-hover px-1.5 py-0.5 text-xxs font-bold text-ink-muted">{how}</span>
  )
}

function PriorityBadge({ priority }: { priority: 'star' | 'normal' }) {
  if (priority === 'star')
    return (
      <span className="inline-block rounded bg-yellow-100 px-1.5 py-0.5 text-xxs font-bold text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300">
        ★ 필수
      </span>
    )
  return (
    <span className="inline-block rounded bg-surface-hover px-1.5 py-0.5 text-xxs font-bold text-ink-muted">선택</span>
  )
}

function SectionHeading({ children }: { children: string }) {
  return <h2 className="mb-3 text-lg font-black text-ink">{children}</h2>
}

function PhaseNumber({ n }: { n: number }) {
  return (
    <span className="mr-2 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-red text-sm font-black text-white">
      {n}
    </span>
  )
}

export function PokemonHeartgoldWalkthroughGuidePage() {
  const style = CATEGORY_STYLE['공략']
  const partyPokemon = HGW_PARTY.map((m) => ({
    ...m,
    pokemon: SAMPLE_POKEMON.find((p) => p.id === m.pokemonId),
  }))

  return (
    <GuidePageLayout>
      <div className="mb-2 flex items-center gap-2">
        <Link to="/guides" className="text-sm font-bold text-ink-muted hover:text-ink">
          ← 공략 목록
        </Link>
        <span className={`rounded-chip bg-white px-2 py-0.5 text-xs font-bold ${style.pillClass}`}>공략</span>
      </div>

      <h1 className="mb-4 text-2xl font-black text-ink">포켓몬 하트골드버전 최고 효율 진행 공략</h1>

      {/* 추천 파티 */}
      <Card className="mb-6 overflow-hidden">
        <div className={`px-4 py-3 ${style.bannerClass}`}>
          <p className="text-sm font-bold text-ink">추천 파티 6마리</p>
        </div>
        <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-3">
          {partyPokemon.map((m) => (
            <div key={m.pokemonId} className="flex items-start gap-3">
              {m.pokemon && (
                <SpriteImage
                  src={m.pokemon.artworkUrl ?? m.pokemon.spriteUrl}
                  alt={m.pokemon.nameKo}
                  width={56}
                  height={56}
                  pixelated={false}
                  rounded="none"
                  className="h-14 w-14 shrink-0"
                />
              )}
              <div className="min-w-0">
                <p className="font-bold text-ink">
                  <PokemonLink id={m.pokemonId} label={m.pokemon?.nameKo ?? ''} />
                </p>
                <p className="text-xs text-ink-muted">{m.catchTiming}</p>
                <p className="mt-0.5 text-xs text-ink">{L(m.role)}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* 역할별 파티 구성 비교 */}
      <Card className="mb-6">
        <div className="p-4">
          <SectionHeading>역할별 파티 구성 비교</SectionHeading>
          <p className="mb-4 text-sm text-ink-muted">
            같은 역할을 담당할 수 있는 후보들의 장단점을 비교합니다. 기본 추천 구성에 없는 포켓몬도 모두 포함해 선택지를 제시합니다.
          </p>
          <div className="space-y-6">
            {HGW_ROLE_COMPARISONS.map((role) => (
              <div key={role.role}>
                <div className="mb-2">
                  <h3 className="font-black text-ink">{role.role}</h3>
                  <p className="text-sm text-ink-muted">{role.description}</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {role.candidates.map((c) => {
                    const p = SAMPLE_POKEMON.find((sp) => sp.id === c.pokemonId)
                    const isPrimary = c.verdict === 'primary'
                    return (
                      <div key={c.pokemonId} className="rounded-lg border border-border p-3">
                        <div className="mb-2 flex items-start gap-3">
                          {p && (
                            <SpriteImage
                              src={p.artworkUrl ?? p.spriteUrl}
                              alt={p.nameKo}
                              width={48}
                              height={48}
                              pixelated={false}
                              rounded="none"
                              className="h-12 w-12 shrink-0"
                            />
                          )}
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-1.5">
                              <span className="font-black text-ink">
                                <PokemonLink id={c.pokemonId} label={p?.nameKo ?? c.pokemon} />
                              </span>
                              <span
                                className={`rounded px-2 py-0.5 text-xxs font-bold ${
                                  isPrimary
                                    ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300'
                                    : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300'
                                }`}
                              >
                                {c.verdictLabel}
                              </span>
                            </div>
                            <p className="mt-0.5 text-xs text-ink-muted">{c.catchTiming}</p>
                          </div>
                        </div>
                        <div className="grid gap-2 sm:grid-cols-2">
                          <div>
                            <p className="mb-1 text-xxs font-bold text-green-600 dark:text-green-400">장점</p>
                            <ul className="space-y-0.5">
                              {c.pros.map((pro, i) => (
                                <li key={i} className="flex min-h-6 items-center gap-1.5 text-xs leading-loose text-ink">
                                  <span className="shrink-0 self-start leading-6 text-green-500">✓</span>
                                  <span>{L(pro)}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="mb-1 text-xxs font-bold text-red-600 dark:text-red-400">단점</p>
                            <ul className="space-y-0.5">
                              {c.cons.map((con, i) => (
                                <li key={i} className="flex min-h-6 items-center gap-1.5 text-xs leading-loose text-ink">
                                  <span className="shrink-0 self-start leading-6 text-red-500">✗</span>
                                  <span>{L(con)}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* HM 배분표 */}
      <Card className="mb-6">
        <div className="p-4">
          <SectionHeading>HM 배분표</SectionHeading>
          <GuideTable
            headers={['HM', '기술', '담당', '입수 장소', '사용 배지']}
            rows={HGW_HM_TABLE.map((r) => [
              <HowBadge key={r.hm} how={r.hm} />,
              r.move,
              L(r.holder),
              r.obtainedAt,
              r.badge,
            ])}
          />
        </div>
      </Card>

      {/* 진행 단계별 공략 */}
      <Card className="mb-6">
        <div className="p-4">
          <SectionHeading>단계별 진행 공략</SectionHeading>
          <div className="space-y-8">
            {HGW_PHASES.map((phase, i) => (
              <div key={phase.id}>
                <div className="mb-3 flex items-center gap-2">
                  <PhaseNumber n={i + 1} />
                  <div>
                    <h3 className="font-black text-ink">{phase.title}</h3>
                    <p className="text-xs text-ink-muted">
                      {phase.subtitle} · {phase.levelRange}
                    </p>
                  </div>
                </div>

                {/* 할 일 체크리스트 */}
                <ul className="mb-4 space-y-1">
                  {phase.todos.map((todo, j) => (
                    // PokemonLink의 2em 스프라이트가 들어간 줄(28px)을 기준 높이로 삼는다.
                    // min-h가 없으면 스프라이트가 없는 항목만 22px로 주저앉아 목록이 들쭉날쭉해진다.
                    <li key={j} className="flex min-h-7 items-center gap-2 text-sm leading-loose text-ink">
                      {/* leading-7로 마커의 줄 상자를 항목 높이와 맞춰, 두 줄짜리에서도 첫 줄 중앙에 온다 */}
                      <span className="shrink-0 self-start leading-7 text-ink-faint">▸</span>
                      <span>{L(todo)}</span>
                    </li>
                  ))}
                </ul>

                {/* 포획 정보 */}
                {phase.catches && phase.catches.length > 0 && (
                  <div className="mb-4">
                    <p className="mb-1.5 text-xs font-bold text-ink-muted">이 단계 포획 추천</p>
                    <GuideTable
                      headers={['포켓몬', '장소', '포획 타이밍', '비고', '우선순위']}
                      rows={phase.catches.map((c) => [
                        <PokemonLink key={c.pokemonId} id={c.pokemonId} label={c.pokemon} />,
                        c.location,
                        c.timing,
                        L(c.note),
                        <PriorityBadge key={c.pokemonId} priority={c.priority} />,
                      ])}
                    />
                  </div>
                )}

                {/* 주요 아이템 */}
                {phase.keyItems && phase.keyItems.length > 0 && (
                  <div className="mb-4">
                    <p className="mb-1.5 text-xs font-bold text-ink-muted">주요 아이템</p>
                    <GuideTable
                      headers={['아이템', '입수처', '비고']}
                      rows={phase.keyItems.map((k) => [k.item, k.from, k.note ?? ''])}
                    />
                  </div>
                )}

                {/* 관장/보스 공략 */}
                {phase.boss && (
                  <div className="rounded-lg border border-border bg-surface-hover p-3">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="font-bold text-ink">
                        {phase.boss.leader} — {phase.boss.gym}
                      </span>
                      <span className="rounded bg-brand-red/10 px-2 py-0.5 text-xxs font-bold text-brand-red">
                        {phase.boss.gymType} 타입
                      </span>
                      <span className="text-xs text-ink-muted">{phase.boss.levels}</span>
                    </div>
                    <p className="mb-2 text-sm text-ink">{L(phase.boss.note)}</p>
                    <GuideTable
                      headers={['상대 포켓몬', '대응 방법']}
                      rows={phase.boss.rows.map((r) => [L(r.opponent), L(r.answer)])}
                    />
                    <p className="mt-2 text-xs font-bold text-brand-red">
                      획득: {phase.boss.badge}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* 진화 타이밍 가이드 */}
      <Card className="mb-6">
        <div className="p-4">
          <SectionHeading>진화 타이밍 가이드</SectionHeading>
          <GuideTable
            headers={['포켓몬', '진화 조건', '목표 시기', '비고']}
            rows={HGW_LEVEL_MILESTONES.map((m) => [L(m.member), L(m.evolution), m.byWhen, L(m.note)])}
          />
        </div>
      </Card>

      {/* 대체 멤버 */}
      <Card className="mb-6">
        <div className="p-4">
          <SectionHeading>대체 멤버 가이드</SectionHeading>
          <p className="mb-3 text-sm text-ink-muted">
            추천 파티 외에 대체 운용 가능한 포켓몬. 역할 비교 섹션의 후보들도 포함됩니다.
          </p>
          <div className="space-y-3">
            {HGW_ALT_MEMBERS.map((m) => {
              const p = SAMPLE_POKEMON.find((sp) => sp.id === m.pokemonId)
              return (
                <div key={m.pokemonId} className="flex items-start gap-3 rounded-lg border border-border p-3">
                  {p && (
                    <SpriteImage
                      src={p.artworkUrl ?? p.spriteUrl}
                      alt={p.nameKo}
                      width={48}
                      height={48}
                      pixelated={false}
                      rounded="none"
                      className="h-12 w-12 shrink-0"
                    />
                  )}
                  <div>
                    <p className="font-bold text-ink">
                      <PokemonLink id={m.pokemonId} label={p?.nameKo ?? m.pokemon} />{' '}
                      <span className="text-xs font-normal text-ink-muted">→ {L(m.replaces)} 대체</span>
                    </p>
                    <p className="mt-0.5 text-sm text-ink">{L(m.role)}</p>
                    <p className="mt-0.5 text-xs text-ink-faint">입수: {L(m.obtainedAt)}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Card>

      {/* 윤가놈 추천 파티 분석 */}
      <Card className="mb-6">
        <div className="p-4">
          <SectionHeading>윤가놈 추천 파티 — 다우징덱스 분석</SectionHeading>
          <p className="mb-4 text-sm text-ink-muted">
            유튜버 윤가놈이 추천하는 파티(누오·크로뱃·니드킹·마기라스·루기아·칠색조·망나뇽)를 스토리 효율 관점에서 분석했습니다.
          </p>
          <div className="space-y-4">
            {HGW_YOUTUBER_PICKS.map((pick) => {
              const p = SAMPLE_POKEMON.find((sp) => sp.id === pick.pokemonId)
              const verdictColor =
                pick.verdict === 'strong'
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300'
                  : pick.verdict === 'late'
                    ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300'
                    : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300'
              return (
                <div key={pick.pokemonId} className="rounded-lg border border-border p-3">
                  <div className="mb-2 flex flex-wrap items-start gap-3">
                    {p && (
                      <SpriteImage
                        src={p.artworkUrl ?? p.spriteUrl}
                        alt={p.nameKo}
                        width={52}
                        height={52}
                        pixelated={false}
                        rounded="none"
                        className="h-13 w-13 shrink-0"
                      />
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-black text-ink">
                          <PokemonLink id={pick.pokemonId} label={p?.nameKo ?? pick.pokemon} />
                        </span>
                        <span className="text-xs text-ink-muted">{pick.type}</span>
                        <span className={`rounded px-2 py-0.5 text-xxs font-bold ${verdictColor}`}>
                          {pick.verdictLabel}
                        </span>
                      </div>
                      <p className="mt-0.5 text-xs text-ink-faint">
                        입수: {pick.obtainedAt}
                      </p>
                      <p className="text-xs text-ink-muted">포획 시기: {pick.obtainTiming}</p>
                    </div>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <div>
                      <p className="mb-1 text-xxs font-bold text-green-600 dark:text-green-400">장점</p>
                      <ul className="space-y-0.5">
                        {pick.pros.map((pro, i) => (
                          <li key={i} className="flex min-h-6 items-center gap-1.5 text-xs leading-loose text-ink">
                            <span className="shrink-0 self-start leading-6 text-green-500">✓</span>
                            <span>{L(pro)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="mb-1 text-xxs font-bold text-red-600 dark:text-red-400">단점</p>
                      <ul className="space-y-0.5">
                        {pick.cons.map((con, i) => (
                          <li key={i} className="flex min-h-6 items-center gap-1.5 text-xs leading-loose text-ink">
                            <span className="shrink-0 self-start leading-6 text-red-500">✗</span>
                            <span>{L(con)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Card>

      {/* 효율 팁 */}
      <Card className="mb-6">
        <div className="p-4">
          <SectionHeading>효율 극대화 팁</SectionHeading>
          <ul className="space-y-2">
            {[
              '깨비드릴조가 HM02 공중날기 담당. 5관 직후 입수하면 이후 도시 간 이동이 대폭 단축된다. 35번도로 NPC 교환(파오리→깨비참) 후 최대한 빨리 육성 권장.',
              '다꼬리는 풀베기·괴력·바위깨기·바다회오리·박치기를 전담하는 HM 전용 보조 포켓몬. 전투에는 투입하지 않으므로 레벨업 불필요.',
              '토게피는 비타민(탄산X·철분·단백질 등)을 먹이면 친밀도가 빠르게 오른다. 체육관5 전에 토게틱 진화 목표.',
              '헤라크로스는 박치기가 가능한 포켓몬 보유 후 33번도로 나무를 반복 박치기. 확률이 낮으므로 30~50회 시도가 필요할 수 있다.',
              'TM26 지진은 챔피언로드에서 획득. 맘모꾸리가 Lv.40에 지진을 자력 습득하므로 TM을 보존할 수 있다. 블레이범에 배정하면 레드 피카츄 대응이 수월하지만 선택 사항.',
              '맘모꾸리는 얼음샛길 꾸꾸리 → Lv.33 메꾸리 → 원시의힘 소지 상태 레벨업 순으로 진화. TM72 눈사태를 배정하면 목호 망나뇽에 4배 피해.',
              '관동 이동 시 깨비드릴조 공중날기로 각 도시를 빠르게 순환. 이슬(블루) → 마티스(갈색) → 웅(회색) → 민화(무지개) → 도희(연분홍) → 초련(노랑) → 강연(소용돌이섬) → 블루(상록) 순이 효율적.',
              '레드전은 파티 Lv.70 이상 강력 권장. 은빛산 야생 포켓몬(Lv.35~45)으로 레벨업 가능.',
            ].map((tip, i) => (
              <li key={i} className="flex min-h-7 items-center gap-2 text-sm leading-loose text-ink">
                <span className="shrink-0 self-start leading-7 font-bold text-brand-red">{i + 1}.</span>
                <span>{L(tip)}</span>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </GuidePageLayout>
  )
}
