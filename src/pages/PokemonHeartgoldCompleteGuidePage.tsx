import { Link } from 'react-router-dom'
import { GuidePageLayout } from '../components/guide/GuidePageLayout'
import { Card } from '../components/ui/Card'
import { SpriteImage } from '../components/pokemon/SpriteImage'
import { GuideTable } from '../components/guide/GuideTable'
import { PokemonLink } from '../components/guide/PokemonLink'
import { linkifyPokemonNames } from '../lib/linkifyPokemonNames'
import { SAMPLE_POKEMON } from '../data/sample/pokemon.sample'
import { CATEGORY_STYLE } from '../lib/guideCategory'
import {
  HGC_PARTY,
  HGC_SUPPORT,
  HGC_STARTER_PICKS,
  HGC_CANDIDATES,
  HGC_HM_TABLE,
  HGC_TM_TABLE,
  HGC_LEVEL_MILESTONES,
  HGC_PHASES,
  HGC_FINAL_MOVESETS,
  HGC_ALTERNATIVES,
  HGC_IMPORTANT_ITEMS,
  HGC_CHECKLIST,
  HGC_NAME_TO_ID,
} from '../data/sample/pokemonHeartgoldComplete.data'

function L(text: string) {
  return linkifyPokemonNames(text, HGC_NAME_TO_ID)
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-3 text-lg font-black text-ink">{children}</h2>
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-2 text-sm font-black text-ink">{children}</h3>
}

function VerdictBadge({ verdict }: { verdict: 'best' | 'good' | 'ok' }) {
  if (verdict === 'best')
    return (
      <span className="inline-block rounded bg-green-100 px-1.5 py-0.5 text-xxs font-bold text-green-700 dark:bg-green-900/40 dark:text-green-300">
        최추천
      </span>
    )
  if (verdict === 'good')
    return (
      <span className="inline-block rounded bg-blue-100 px-1.5 py-0.5 text-xxs font-bold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
        추천
      </span>
    )
  return (
    <span className="inline-block rounded bg-surface-hover px-1.5 py-0.5 text-xxs font-bold text-ink-muted">
      선택
    </span>
  )
}

export function PokemonHeartgoldCompleteGuidePage() {
  const style = CATEGORY_STYLE['공략']
  const partyIds = HGC_PARTY.map((m) => m.pokemonId)
  const partyPokemon = partyIds.map((id) => SAMPLE_POKEMON.find((p) => p.id === id)).filter(Boolean)

  return (
    <GuidePageLayout>
      <div className="mb-2 flex items-center gap-2">
        <Link to="/guides" className="text-sm font-bold text-ink-muted hover:text-ink">
          ← 공략 목록
        </Link>
        <span className={`rounded-chip bg-white px-2 py-0.5 text-xs font-bold ${style.pillClass}`}>공략</span>
      </div>

      <h1 className="mb-1 text-2xl font-black text-ink">포켓몬스터 하트골드 — 스토리 최적화 완전 공략</h1>
      <p className="mb-4 text-sm text-ink-muted">연두마을 시작 → 성도 8배지 → 포켓몬리그 1차 → 관동 8배지 → 은빛산 레드</p>

      {/* 파티 배너 */}
      <div className={`mb-6 grid grid-cols-6 gap-2 rounded-card px-4 py-4 ${style.bannerClass}`}>
        {partyPokemon.map(
          (p) =>
            p && (
              <div key={p.id} className="flex flex-col items-center gap-1">
                <SpriteImage
                  src={p.artworkUrl ?? p.spriteUrl}
                  alt={p.nameKo}
                  width={80}
                  height={80}
                  pixelated={false}
                  rounded="none"
                  className="h-16 w-16 sm:h-20 sm:w-20"
                />
                <span className="text-center text-xxs font-bold text-ink">{p.nameKo}</span>
              </div>
            ),
        )}
      </div>

      {/* 1. 효율 기준 */}
      <Card className="mb-6 p-4">
        <SectionHeading>이 공략에서 말하는 "효율"의 기준</SectionHeading>
        <p className="mb-3 text-sm text-ink-muted">
          종족값 높은 포켓몬을 고르는 것보다 <strong>언제 합류하고, 합류 직후 얼마나 빨리 강해지고, 기술머신을 얼마나 적게 먹는지</strong>가
          훨씬 중요하다.
        </p>
        <div className="mb-3">
          <p className="mb-1 text-xs font-bold text-ink">최우선</p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-ink">
            <li>스토리 중 자연스럽게 얻을 수 있을 것</li>
            <li>합류 직후부터 활약할 수 있을 것</li>
            <li>레벨업으로 배우는 기술이 좋아 일회용 기술머신 소비가 적을 것</li>
            <li>관장·사천왕·목호·레드까지 담당 상대가 명확할 것</li>
            <li>반복적인 레벨 올리기가 적을 것</li>
            <li>비전머신 배치가 깔끔할 것</li>
          </ul>
        </div>
        <div>
          <p className="mb-1 text-xs font-bold text-ink-muted">배제 항목</p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-ink-muted">
            <li>성격·개체값·노력치 반복 작업, 알까기</li>
            <li>외부 통신교환을 전제로 한 진화</li>
            <li>게임코너 코인 대량 반복 작업</li>
            <li>특정 요일만 가능한 포켓몬을 필수 전력으로 지정</li>
            <li>희귀 도구 획득을 위한 반복 파밍</li>
          </ul>
        </div>
      </Card>

      {/* 2. 추천 파티 */}
      <Card className="mb-6 p-4">
        <SectionHeading>최종 추천 파티 (브케인 기준)</SectionHeading>
        <GuideTable
          headers={['포켓몬', '합류 시점', '역할', '핵심 기술']}
          rows={HGC_PARTY.map((m) => [
            <PokemonLink key={m.pokemonId} id={m.pokemonId} label={m.pokemon} />,
            m.catchTiming,
            L(m.role),
            m.keyMoves.join(' / '),
          ])}
        />
        <div className="mt-4 rounded-lg bg-surface-hover p-3">
          <p className="mb-1 text-xs font-bold text-ink">탐색 전담 보조</p>
          <p className="text-sm text-ink">
            <PokemonLink id={HGC_SUPPORT.pokemonId} label={HGC_SUPPORT.pokemon} /> — {HGC_SUPPORT.role}
          </p>
          <p className="mt-1 text-xs text-ink-muted">기술 구성: {HGC_SUPPORT.hmSet}</p>
        </div>
      </Card>

      {/* 3. 스타팅별 변형 구성 */}
      <Card className="mb-6 p-4">
        <SectionHeading>처음 선택하는 포켓몬별 추천 구성</SectionHeading>
        <div className="space-y-4">
          {HGC_STARTER_PICKS.map((pick) => {
            const p = SAMPLE_POKEMON.find((pk) => pk.id === pick.pokemonId)
            return (
              <div key={pick.pokemonId} className="rounded-card border border-border p-3">
                <div className="mb-2 flex items-center gap-2">
                  {p && (
                    <SpriteImage src={p.spriteUrl} alt={p.nameKo} width={36} height={36} className="h-9 w-9" />
                  )}
                  <Link to={`/pokemon/${pick.pokemonId}`} className="font-black text-ink hover:underline">
                    {pick.pokemon}
                  </Link>
                </div>
                <div className="mb-2 flex flex-wrap gap-1">
                  {pick.team.map((name) => {
                    const id = HGC_NAME_TO_ID.get(name)
                    return id ? (
                      <PokemonLink key={name} id={id} label={name} />
                    ) : (
                      <span key={name} className="rounded-chip border border-border-strong px-2 py-0.5 text-xs text-ink">
                        {name}
                      </span>
                    )
                  })}
                </div>
                <p className="text-xs text-ink-muted">{pick.summary}</p>
              </div>
            )
          })}
        </div>
      </Card>

      {/* 4. 후보 비교 */}
      <Card className="mb-6 p-4">
        <SectionHeading>후보 포켓몬 전체 비교</SectionHeading>
        <div className="space-y-5">
          {Object.entries(HGC_CANDIDATES).map(([role, candidates]) => (
            <div key={role}>
              <SubHeading>{role}</SubHeading>
              <GuideTable
                headers={['포켓몬', '추천도', '평가']}
                rows={candidates.map((c) => [
                  <PokemonLink key={c.pokemonId} id={c.pokemonId} label={c.pokemon} />,
                  <VerdictBadge key={c.pokemon} verdict={c.verdict} />,
                  c.summary,
                ])}
              />
            </div>
          ))}
        </div>
      </Card>

      {/* 5. HM 배분 */}
      <Card className="mb-6 p-4">
        <SectionHeading>비전머신 완전 배분표</SectionHeading>
        <GuideTable
          headers={['HM', '기술', '담당', '획득처', '전투 가치']}
          rows={HGC_HM_TABLE.map((r) => [r.hm, r.move, L(r.holder), r.obtainedAt, r.battleValue])}
        />
        <div className="mt-3 rounded-lg bg-surface-hover p-3">
          <p className="text-xs font-bold text-ink">핵심 포인트</p>
          <p className="mt-1 text-xs text-ink-muted">
            다꼬리의 최종 탐색 구성: <strong>풀베기 / 괴력 / 바다회오리 / 바위깨기</strong>. 바다회오리는 이향 격파 후
            용의굴 사당 진입에 파도타기와 함께 반드시 필요하다.
          </p>
        </div>
      </Card>

      {/* 6. TM 원칙 */}
      <Card className="mb-6 p-4">
        <SectionHeading>기술머신 사용 원칙 (4세대 — 대부분 일회용)</SectionHeading>
        <GuideTable
          headers={['TM', '기술', '권장 대상', '판단']}
          rows={HGC_TM_TABLE.map((r) => [r.tm, r.move, L(r.target), r.judgment])}
        />
        <div className="mt-3 rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
          <p className="text-xs font-bold text-amber-800 dark:text-amber-300">TM26 지진 — 가장 중요한 결정</p>
          <p className="mt-1 text-xs text-amber-700 dark:text-amber-400">
            챔피언로드에서 얻은 TM26을 1차 리그에서 맘모꾸리에 사용하지 않는다. 맘모꾸리는 Lv.40에 지진을 자력 습득한다.
            관동지방 이후 갸라도스·헤라크로스 중 하나에 투자하면 더 큰 효과를 얻는다.
          </p>
        </div>
      </Card>

      {/* 7. 핵심 레벨 임계점 */}
      <Card className="mb-6 p-4">
        <SectionHeading>핵심 레벨 임계점</SectionHeading>
        <p className="mb-3 text-xs text-ink-muted">
          다음 강력한 기술을 배우는 포켓몬에게 경험치를 우선 배분한다. 전체를 균등하게 맞추려 하지 않는다.
        </p>
        <GuideTable
          headers={['포켓몬', '레벨', '핵심 변화']}
          rows={HGC_LEVEL_MILESTONES.map((m) => [
            <PokemonLink key={`${m.pokemonId}-${m.level}`} id={m.pokemonId} label={m.pokemon} />,
            `Lv.${m.level}`,
            m.event,
          ])}
        />
      </Card>

      {/* 8. 단계별 공략 */}
      <Card className="mb-6 p-4">
        <SectionHeading>단계별 완전 공략</SectionHeading>
        <div className="space-y-4">
          {HGC_PHASES.map((phase) => (
            <div key={phase.num} className="rounded-card border border-border p-4">
              <p className="mb-3 text-sm font-black text-ink">{phase.title}</p>

              {/* 해야 할 일 */}
              <div className="mb-3">
                <p className="mb-1 text-xs font-bold text-ink-muted">진행</p>
                <ul className="list-disc space-y-1 pl-5 text-xs text-ink">
                  {phase.tasks.map((t, i) => (
                    <li key={i}>{L(t)}</li>
                  ))}
                </ul>
              </div>

              {/* 포획 */}
              {phase.catches && phase.catches.length > 0 && (
                <div className="mb-3">
                  <p className="mb-1 text-xs font-bold text-green-700 dark:text-green-400">포획 목표</p>
                  <ul className="list-disc space-y-1 pl-5 text-xs text-ink-muted">
                    {phase.catches.map((c, i) => (
                      <li key={i}>{L(c)}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* HM */}
              {phase.hm && phase.hm.length > 0 && (
                <div className="mb-3">
                  <p className="mb-1 text-xs font-bold text-red-700 dark:text-red-400">HM 획득</p>
                  <ul className="list-disc space-y-1 pl-5 text-xs text-ink-muted">
                    {phase.hm.map((h, i) => (
                      <li key={i}>{L(h)}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 보스 */}
              {phase.boss && (
                <div className="mb-3 rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
                  <p className="mb-1 text-xs font-bold text-red-700 dark:text-red-300">{phase.boss.name}</p>
                  <p className="mb-1 text-xxs text-red-600 dark:text-red-400">파티: {phase.boss.party}</p>
                  <p className="mb-1 text-xxs text-ink">담당: {L(phase.boss.lead)}</p>
                  {phase.boss.tip && <p className="text-xxs text-ink-muted">{phase.boss.tip}</p>}
                </div>
              )}

              {/* 권장 레벨 */}
              {phase.levelGoal && (
                <p className="mb-3 text-xxs text-ink-muted">
                  <span className="font-bold text-ink">권장 레벨:</span> {phase.levelGoal}
                </p>
              )}

              {/* 체크리스트 */}
              <div>
                <p className="mb-1 text-xs font-bold text-ink-muted">체크</p>
                <ul className="space-y-0.5">
                  {phase.checklist.map((item, i) => (
                    <li key={i} className="flex items-center gap-1.5 text-xxs text-ink">
                      <span className="shrink-0 text-ink-faint">□</span>
                      {L(item)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* 9. 최종 기술 배치 */}
      <Card className="mb-6 p-4">
        <SectionHeading>최종 기술 배치</SectionHeading>
        <p className="mb-3 text-xs text-ink-muted">스토리·레드 공략 기준. 대전용 기술 구성이 아님.</p>
        <div className="space-y-6">
          {HGC_FINAL_MOVESETS.map((entry) => {
            const p = SAMPLE_POKEMON.find((pk) => pk.id === entry.pokemonId)
            return (
              <div key={entry.pokemonId}>
                <div className="mb-2 flex items-center gap-2">
                  {p && (
                    <SpriteImage src={p.spriteUrl} alt={p.nameKo} width={36} height={36} className="h-9 w-9" />
                  )}
                  <Link to={`/pokemon/${entry.pokemonId}`} className="font-black text-ink hover:underline">
                    {entry.pokemon}
                  </Link>
                </div>
                <div className="space-y-2">
                  {entry.phases.map((ph) => (
                    <div key={ph.phase} className="rounded-lg bg-surface-hover p-2">
                      <p className="mb-1 text-xxs font-bold text-ink-muted">{ph.phase}</p>
                      <div className="mb-1 flex flex-wrap gap-1">
                        {ph.moves.map((mv) => (
                          <span
                            key={mv}
                            className="rounded-chip bg-brand-red/10 px-2 py-0.5 text-xxs font-bold text-brand-red"
                          >
                            {mv}
                          </span>
                        ))}
                      </div>
                      {ph.note && <p className="text-xxs text-ink-muted">{ph.note}</p>}
                    </div>
                  ))}
                </div>
                {entry.avoidTMs && entry.avoidTMs.length > 0 && (
                  <ul className="mt-1 list-disc space-y-0.5 pl-5 text-xxs text-ink-muted">
                    {entry.avoidTMs.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
      </Card>

      {/* 10. 대체 포켓몬 */}
      <Card className="mb-6 p-4">
        <SectionHeading>대체 포켓몬을 실제로 넣는다면</SectionHeading>
        <div className="space-y-3">
          {HGC_ALTERNATIVES.map((alt) => (
            <div key={alt.pokemonId} className="rounded-card border border-border p-3">
              <div className="mb-1 flex items-center gap-2">
                <PokemonLink id={alt.pokemonId} label={alt.pokemon} />
                <span className="text-xxs text-ink-muted">→ {alt.replaces} 대체</span>
              </div>
              <p className="mb-0.5 text-xxs text-ink-muted">합류: {alt.catchTiming}</p>
              <p className="text-xxs text-green-700 dark:text-green-400">+ {alt.pro}</p>
              <p className="text-xxs text-red-600 dark:text-red-400">- {alt.con}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* 11. 중요 아이템 */}
      <Card className="mb-6 p-4">
        <SectionHeading>절대 놓치기 아까운 아이템·장소</SectionHeading>

        <SubHeading>성도지방</SubHeading>
        <GuideTable
          headers={['시점', '장소', '대상', '중요도', '이유']}
          rows={HGC_IMPORTANT_ITEMS.johto.map((item) => [
            item.timing,
            item.location,
            L(item.target),
            item.importance,
            item.reason,
          ])}
        />

        <SubHeading>관동지방</SubHeading>
        <GuideTable
          headers={['시점', '장소', '대상', '중요도', '이유']}
          rows={HGC_IMPORTANT_ITEMS.kanto.map((item) => [
            item.timing,
            item.location,
            L(item.target),
            item.importance,
            item.reason,
          ])}
        />
      </Card>

      {/* 12. 초압축 체크리스트 */}
      <Card className="mb-6 p-4">
        <SectionHeading>초압축 진행 체크리스트</SectionHeading>
        <div className="space-y-5">
          {Object.entries(HGC_CHECKLIST).map(([section, items]) => (
            <div key={section}>
              <SubHeading>{section}</SubHeading>
              <ul className="grid grid-cols-1 gap-0.5 sm:grid-cols-2">
                {items.map((item, i) => (
                  <li key={i} className="flex items-center gap-1.5 text-xs text-ink">
                    <span className="shrink-0 text-ink-faint">□</span>
                    {L(item)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>
    </GuidePageLayout>
  )
}
