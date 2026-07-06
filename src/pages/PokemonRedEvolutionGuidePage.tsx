import { Link } from 'react-router-dom'
import { GuidePageLayout } from '../components/guide/GuidePageLayout'
import { Card } from '../components/ui/Card'
import { SpriteImage } from '../components/pokemon/SpriteImage'
import { GuideTable } from '../components/guide/GuideTable'
import { PokemonLink } from '../components/guide/PokemonLink'
import { linkifyPokemonNames } from '../lib/linkifyPokemonNames'
import { findSamplePokemon } from '../data/sample/pokemon.sample'
import { CATEGORY_STYLE } from '../lib/guideCategory'
import {
  MOVE_CHOICE_GUIDE,
  PRIORITY_FOR_CHARMANDER,
  RECOMMENDED_COMBO_1,
  RECOMMENDED_COMBO_2,
  RED_EVO_NAME_TO_ID,
  STONE_EVO_DETAILS,
  STONE_EVO_SUMMARY,
  STONE_EVO_TIER,
  TRADE_EVO_DETAILS,
  TRADE_EVO_SUMMARY,
  TRADE_EVO_TIER,
} from '../data/sample/pokemonRedEvolution.data'

function L(text: string) {
  return linkifyPokemonNames(text, RED_EVO_NAME_TO_ID)
}

function SectionHeading({ children }: { children: string }) {
  return <h2 className="mb-3 text-lg font-black text-ink">{children}</h2>
}

function SubHeading({ children }: { children: string }) {
  return <h3 className="mb-2 text-sm font-black text-ink">{children}</h3>
}

const TIER_COLOR: Record<string, string> = {
  '최상급': 'bg-brand-red/10 text-brand-red border-brand-red/30',
  '좋음': 'bg-blue-50 text-blue-700 border-blue-200',
  '취향에 따라 좋음': 'bg-surface-hover text-ink-faint border-border-strong',
  '애정픽': 'bg-surface-hover text-ink-faint border-border-strong',
}

export function PokemonRedEvolutionGuidePage() {
  const style = CATEGORY_STYLE['진화']

  return (
    <GuidePageLayout>
      <div className="mb-2 flex items-center gap-2">
        <Link to="/guides" className="text-sm font-bold text-ink-muted hover:text-ink">
          ← 공략 목록
        </Link>
        <span className={`rounded-chip bg-white px-2 py-0.5 text-xs font-bold ${style.pillClass}`}>진화</span>
      </div>

      <h1 className="text-2xl font-black text-ink">포켓몬스터 1세대 돌 진화·교환 진화 추천 타이밍 가이드</h1>
      <p className="mb-4 text-sm text-ink-faint">다우징덱스 편집부 · 레드/블루 1세대 / 스토리 기준</p>

      {/* 1. 기준 */}
      <Card className="mb-6 p-4">
        <SectionHeading>기준</SectionHeading>
        <ul className="list-disc space-y-1 pl-5 text-sm text-ink">
          <li>대상 버전: 포켓몬스터 레드/블루 1세대</li>
          <li>플레이 기준: 레드버전 단독 플레이 + 필요 시 통신교환 가능</li>
          <li>목적: 스토리 진행 기준으로 진화 타이밍, 추천 기술 배치, 기술 선택 기준 정리</li>
        </ul>
        <div className="mt-3 rounded-card border border-border-strong bg-surface-hover p-3 text-sm text-ink-muted">
          <strong className="text-ink">1세대 주의사항</strong>
          <ul className="mt-1 list-disc space-y-0.5 pl-5">
            <li>기술머신은 대부분 1회용이다.</li>
            <li>돌 진화 포켓몬은 진화 후 레벨업 기술이 끊기거나 크게 달라지는 경우가 많다.</li>
            <li>통신교환 진화는 후대처럼 지닌물건 조건이 없고, 교환만으로 바로 진화한다.</li>
          </ul>
        </div>
      </Card>

      {/* 2. 돌 진화 요약 표 */}
      <Card className="mb-6 p-4">
        <SectionHeading>돌 진화 추천 타이밍 요약</SectionHeading>
        <GuideTable
          headers={['포켓몬', '진화의 돌', '레드버전 입수', '추천 진화 타이밍', '핵심 이유']}
          rows={STONE_EVO_SUMMARY.map((r) => [
            <span key={r.pokemonId} className="flex items-center gap-2">
              <SpriteImage src={findSamplePokemon(r.pokemonId).spriteUrl} alt={r.after} width={28} height={28} className="h-7 w-7" />
              <span className="text-sm font-bold">
                {L(r.before)} → {L(r.after)}
              </span>
            </span>,
            r.stone,
            <span key="avail" className={r.available === '가능' ? 'text-ink' : 'text-ink-faint'}>{r.available}</span>,
            r.timing,
            r.reason,
          ])}
        />
      </Card>

      {/* 3. 교환 진화 요약 표 */}
      <Card className="mb-6 p-4">
        <SectionHeading>통신교환 진화 추천 타이밍 요약</SectionHeading>
        <GuideTable
          headers={['포켓몬', '레드버전 입수', '추천 교환 타이밍', '핵심 이유']}
          rows={TRADE_EVO_SUMMARY.map((r) => [
            <span key={r.pokemonId} className="flex items-center gap-2">
              <SpriteImage src={findSamplePokemon(r.pokemonId).spriteUrl} alt={r.after} width={28} height={28} className="h-7 w-7" />
              <span className="text-sm font-bold">
                {L(r.before)} → {L(r.after)}
              </span>
            </span>,
            '가능',
            r.timing,
            r.reason,
          ])}
        />
      </Card>

      {/* 4. 돌 진화 상세 */}
      <Card className="mb-6 p-4">
        <SectionHeading>돌 진화 포켓몬별 상세 정리</SectionHeading>
        <div className="flex flex-col gap-6">
          {STONE_EVO_DETAILS.map((detail) => {
            const pokemon = findSamplePokemon(detail.pokemonId)
            return (
              <div key={detail.pokemonId} className="rounded-card border border-border-strong p-3">
                <div className="mb-2 flex items-center gap-3">
                  <Link to={`/pokemon/${detail.pokemonId}`} className="flex items-center gap-2">
                    <SpriteImage src={pokemon.spriteUrl} alt={pokemon.nameKo} width={40} height={40} className="h-10 w-10" />
                    <span className="text-base font-black text-ink hover:underline">{detail.pokemon}</span>
                  </Link>
                  <span className={`rounded-chip border px-2 py-0.5 text-xs font-bold ${TIER_COLOR[detail.tier]}`}>{detail.tier}</span>
                </div>

                <p className="mb-2 text-sm text-ink-muted">{detail.heading}</p>

                <p className="mb-1 text-xs font-bold text-ink-faint">추천 진화 타이밍</p>
                <p className="mb-1 text-sm font-bold text-ink">{detail.timing}</p>
                <p className="mb-3 text-sm text-ink-muted">{L(detail.timingReason)}</p>

                <p className="mb-1 text-xs font-bold text-ink-faint">추천 기술 배치</p>
                <div className="mb-3 flex flex-col gap-2">
                  {detail.moveTables.map((mt) => (
                    <div key={mt.label}>
                      <p className="mb-0.5 text-xs text-ink-faint">{mt.label}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {mt.moves.map((move) => (
                          <span key={move} className="rounded-chip bg-surface-hover px-2 py-0.5 text-xs font-bold text-ink">
                            {move}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {detail.moveComparisons.length > 0 && (
                  <>
                    <p className="mb-1 text-xs font-bold text-ink-faint">기술 비교</p>
                    <GuideTable
                      headers={['기술', '설명']}
                      rows={detail.moveComparisons.map((mc) => [mc.move, L(mc.desc)])}
                    />
                  </>
                )}

                {detail.notes.length > 0 && (
                  <ul className="mt-3 list-disc space-y-0.5 pl-5 text-xs text-ink-muted">
                    {detail.notes.map((n, i) => (
                      <li key={i}>{L(n)}</li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
      </Card>

      {/* 5. 교환 진화 상세 */}
      <Card className="mb-6 p-4">
        <SectionHeading>통신교환 진화 포켓몬별 상세 정리</SectionHeading>
        <div className="flex flex-col gap-6">
          {TRADE_EVO_DETAILS.map((detail) => {
            const pokemon = findSamplePokemon(detail.pokemonId)
            return (
              <div key={detail.pokemonId} className="rounded-card border border-border-strong p-3">
                <div className="mb-2 flex items-center gap-3">
                  <Link to={`/pokemon/${detail.pokemonId}`} className="flex items-center gap-2">
                    <SpriteImage src={pokemon.spriteUrl} alt={pokemon.nameKo} width={40} height={40} className="h-10 w-10" />
                    <span className="text-base font-black text-ink hover:underline">{detail.pokemon}</span>
                  </Link>
                  <span className={`rounded-chip border px-2 py-0.5 text-xs font-bold ${TIER_COLOR[detail.tier]}`}>{detail.tier}</span>
                </div>

                <p className="mb-2 text-sm text-ink-muted">{detail.heading}</p>

                <p className="mb-1 text-xs font-bold text-ink-faint">추천 교환 타이밍</p>
                <p className="mb-1 text-sm font-bold text-ink">{detail.timing}</p>
                <p className="mb-3 text-sm text-ink-muted">{L(detail.timingReason)}</p>

                <p className="mb-1 text-xs font-bold text-ink-faint">추천 기술 배치</p>
                <div className="mb-3 flex flex-col gap-2">
                  {detail.moveTables.map((mt) => (
                    <div key={mt.label}>
                      <p className="mb-0.5 text-xs text-ink-faint">{mt.label}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {mt.moves.map((move) => (
                          <span key={move} className="rounded-chip bg-surface-hover px-2 py-0.5 text-xs font-bold text-ink">
                            {move}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {detail.moveComparisons.length > 0 && (
                  <>
                    <p className="mb-1 text-xs font-bold text-ink-faint">기술 비교</p>
                    <GuideTable
                      headers={['기술', '설명']}
                      rows={detail.moveComparisons.map((mc) => [mc.move, L(mc.desc)])}
                    />
                  </>
                )}

                {detail.notes.length > 0 && (
                  <ul className="mt-3 list-disc space-y-0.5 pl-5 text-xs text-ink-muted">
                    {detail.notes.map((n, i) => (
                      <li key={i}>{L(n)}</li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
      </Card>

      {/* 6. 기술 선택 기준 */}
      <Card className="mb-6 p-4">
        <SectionHeading>기술 선택 기준</SectionHeading>
        <div className="flex flex-col gap-6">
          {MOVE_CHOICE_GUIDE.map((guide) => (
            <div key={guide.title}>
              <SubHeading>{guide.title}</SubHeading>
              <GuideTable
                headers={['기술', '장점', '단점']}
                rows={guide.options.map((o) => [o.move, o.pros, o.cons])}
              />
              <p className="mt-2 text-sm font-bold text-ink">{guide.recommendation}</p>
              <p className="mt-1 text-xs text-ink-faint">
                추천 대상: {guide.targets.map((t) => L(t)).join(', ')}
              </p>
            </div>
          ))}
        </div>
      </Card>

      {/* 7. 추천도 티어리스트 */}
      <Card className="mb-6 p-4">
        <SectionHeading>스토리 추천도 티어리스트</SectionHeading>
        <p className="mb-3 text-sm font-bold text-ink-faint">돌 진화</p>
        <div className="mb-4 flex flex-col gap-3">
          {STONE_EVO_TIER.map((tier) => (
            <div key={tier.tier} className="flex items-start gap-3">
              <span className={`shrink-0 rounded-chip border px-2.5 py-1 text-xs font-black ${TIER_COLOR[tier.tier]}`}>{tier.tier}</span>
              <div className="flex flex-wrap gap-2 pt-0.5">
                {tier.pokemon.map((p) => (
                  <PokemonLink key={p.pokemonId} id={p.pokemonId} label={p.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mb-3 text-sm font-bold text-ink-faint">통신교환 진화</p>
        <div className="flex flex-col gap-3">
          {TRADE_EVO_TIER.map((tier) => (
            <div key={tier.tier} className="flex items-start gap-3">
              <span className={`shrink-0 rounded-chip border px-2.5 py-1 text-xs font-black ${TIER_COLOR[tier.tier]}`}>{tier.tier}</span>
              <div className="flex flex-wrap gap-2 pt-0.5">
                {tier.pokemon.map((p) => (
                  <PokemonLink key={p.pokemonId} id={p.pokemonId} label={p.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* 8. 파이리 스타팅 추천 조합 */}
      <Card className="mb-6 p-4">
        <SectionHeading>파이리 스타팅 기준 추천 조합</SectionHeading>
        <p className="mb-3 text-sm text-ink-muted">
          파이리 스타팅이면 불꽃 타입은 리자몽이 담당하므로, 돌 진화·교환 진화 포켓몬은 다른 역할을 보완하는 쪽이 좋다.
        </p>

        <SubHeading>조합 1: 효율 중심 (통신교환 가능)</SubHeading>
        <GuideTable
          headers={['역할', '포켓몬']}
          rows={RECOMMENDED_COMBO_1.map((r) => [r.role, L(r.pokemon)])}
        />
        <div className="mt-2 mb-4 flex flex-col gap-1 text-xs text-ink-muted">
          <p><span className="font-bold text-ink">장점</span> — 타입 견제폭이 넓고 스토리 진행 속도가 빠르다.</p>
          <p><span className="font-bold text-ink">단점</span> — 기술머신 경쟁이 심하고 통신교환이 필요하다.</p>
        </div>

        <SubHeading>조합 2: 레드 단독 플레이 중심</SubHeading>
        <GuideTable
          headers={['역할', '포켓몬']}
          rows={RECOMMENDED_COMBO_2.map((r) => [r.role, L(r.pokemon)])}
        />
        <div className="mt-2 mb-4 flex flex-col gap-1 text-xs text-ink-muted">
          <p><span className="font-bold text-ink">장점</span> — 교환 없이 구성 가능하고 돌 진화 포켓몬만으로도 충분히 강하다.</p>
          <p><span className="font-bold text-ink">단점</span> — 후딘·팬텀을 못 쓰면 에스퍼·고스트 고성능 선택지가 줄어든다.</p>
        </div>

        <SubHeading>파이리 스타팅 최우선 추천 순위</SubHeading>
        <GuideTable
          headers={['순위', '포켓몬']}
          rows={PRIORITY_FOR_CHARMANDER.map((r) => [
            `${r.rank}위`,
            <span key={r.pokemonId} className="flex items-center gap-2">
              {r.pokemonId > 0 && (
                <SpriteImage src={findSamplePokemon(r.pokemonId).spriteUrl} alt={r.pokemon} width={28} height={28} className="h-7 w-7" />
              )}
              <span className="font-bold">{L(r.pokemon)}</span>
            </span>,
          ])}
        />
      </Card>
    </GuidePageLayout>
  )
}
