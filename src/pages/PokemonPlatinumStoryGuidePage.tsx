import { useState } from 'react'
import { Link } from 'react-router-dom'
import { GuidePageLayout } from '../components/guide/GuidePageLayout'
import { Card } from '../components/ui/Card'
import { PokemonCard } from '../components/pokemon/PokemonCard'
import { SpriteImage } from '../components/pokemon/SpriteImage'
import { GuideTable } from '../components/guide/GuideTable'
import { PokemonLink } from '../components/guide/PokemonLink'
import { linkifyPokemonNames } from '../lib/linkifyPokemonNames'
import { SAMPLE_POKEMON, findSamplePokemon } from '../data/sample/pokemon.sample'
import { CATEGORY_STYLE } from '../lib/guideCategory'
import { cn } from '../lib/cn'
import type { StarterGuideData } from '../data/sample/pokemonPlatinumStory.data'
import {
  PLATINUM_EVOLUTION_TIMING,
  PLATINUM_GOALS,
  PLATINUM_HM_TABLE,
  PLATINUM_NAME_TO_ID,
  PLATINUM_STARTERS,
  PLATINUM_TM_NOTES,
} from '../data/sample/pokemonPlatinumStory.data'

function L(text: string) {
  return linkifyPokemonNames(text, PLATINUM_NAME_TO_ID)
}

function HowBadge({ how }: { how: string }) {
  if (how.startsWith('HM')) return <span className="inline-block rounded bg-red-100 px-1.5 py-0.5 text-xxs font-bold text-red-700 dark:bg-red-900/40 dark:text-red-300">{how}</span>
  if (how.startsWith('TM')) return <span className="inline-block rounded bg-blue-100 px-1.5 py-0.5 text-xxs font-bold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">{how}</span>
  if (how.startsWith('Lv.')) return <span className="inline-block rounded bg-green-100 px-1.5 py-0.5 text-xxs font-bold text-green-700 dark:bg-green-900/40 dark:text-green-300">{how}</span>
  if (how === '기술가르침') return <span className="inline-block rounded bg-purple-100 px-1.5 py-0.5 text-xxs font-bold text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">{how}</span>
  if (how === '번식기술') return <span className="inline-block rounded bg-orange-100 px-1.5 py-0.5 text-xxs font-bold text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">{how}</span>
  return <span className="inline-block rounded bg-surface-hover px-1.5 py-0.5 text-xxs font-bold text-ink-muted">{how}</span>
}

const GYM_CITY_IMAGE: Record<string, string> = {
  '연고시티': '/images/guides/platinum/hearthome.png',
  '장막시티': '/images/guides/platinum/veilstone.png',
  '들판시티': '/images/guides/platinum/pastoria.png',
  '선단시티': '/images/guides/platinum/snowpoint.png',
  '물가시티': '/images/guides/platinum/sunyshore.png',
}

function getGymCityImage(title: string): string | undefined {
  const city = title.match(/\(([^)]+)\)/)?.[1]
  return city ? GYM_CITY_IMAGE[city] : undefined
}

function SectionHeading({ children }: { children: string }) {
  return <h2 className="mb-3 text-lg font-black text-ink">{children}</h2>
}

function StarterContent({ starter }: { starter: StarterGuideData }) {
  const finalParty = starter.finalPartyIds.map((id) => SAMPLE_POKEMON.find((p) => p.id === id)).filter(Boolean)

  return (
    <div>
      {/* 최종 파티 배너 */}
      <div className="mb-6 grid grid-cols-3 gap-2 rounded-card bg-surface-hover px-4 py-4 sm:grid-cols-6">
        {finalParty.map(
          (p) =>
            p && (
              <div key={p.id} className="flex items-center justify-center">
                <SpriteImage src={p.artworkUrl ?? p.spriteUrl} alt={p.nameKo} width={96} height={96} pixelated={false} rounded="none" className="h-20 w-20 sm:h-24 sm:w-24" />
              </div>
            ),
        )}
      </div>

      {/* 최종 추천 엔트리 */}
      <Card className="mb-6 p-4">
        <SectionHeading>최종 추천 엔트리</SectionHeading>
        <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {finalParty.map((p) => p && <PokemonCard key={p.id} pokemon={p} to={`/pokemon/${p.id}`} />)}
        </div>
        <GuideTable
          headers={['포켓몬', '주요 역할']}
          rows={starter.finalRoles.map((r) => [L(r.pokemon), r.role])}
        />
      </Card>

      {/* 포획 시점 */}
      <Card className="mb-6 p-4">
        <SectionHeading>포획 시점</SectionHeading>
        <GuideTable
          headers={['시점', '포켓몬', '설명']}
          rows={starter.catchTable.map((r) => [
            r.timing,
            <PokemonLink key={r.pokemonId} id={r.pokemonId} label={r.pokemon} />,
            r.note,
          ])}
        />
      </Card>

      {/* 기술 배치 */}
      <Card className="mb-6 p-4">
        <SectionHeading>기술 배치</SectionHeading>
        <div className="space-y-6">
          {starter.movesets.map((s) => (
            <div key={s.pokemonId}>
              <div className="mb-2 flex items-center gap-2">
                <SpriteImage src={findSamplePokemon(s.pokemonId).spriteUrl} alt={s.pokemon} width={40} height={40} className="h-10 w-10" />
                <span className="font-black text-ink">{s.pokemon}</span>
                <span className="text-xs text-ink-faint">최종 기술 구성</span>
              </div>
              <div className="mb-3 flex flex-wrap gap-2">
                {s.finalMoves.map((m) => (
                  <span key={m} className="rounded-chip bg-brand-red/10 px-3 py-1 text-xs font-bold text-brand-red">
                    {m}
                  </span>
                ))}
              </div>
              <GuideTable
                headers={['기술', '습득', '용도']}
                rows={s.moveTable.map((m) => [m.move, <HowBadge key={m.move} how={m.how} />, m.usage])}
              />
              {s.notes.length > 0 && (
                <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-ink-muted">
                  {s.notes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* 단계별 파티 */}
      <Card className="mb-6 p-4">
        <SectionHeading>단계별 파티</SectionHeading>
        <div className="space-y-4">
          {starter.stages.map((stage) => (
            <div key={stage.title} className="rounded-card border border-border p-3">
              <p className="mb-2 text-sm font-black text-ink">{stage.title}</p>
              <div className="mb-2 flex flex-wrap gap-1">
                {stage.members.map((m) => (
                  <span key={m} className="rounded-chip border border-border-strong px-2 py-0.5 text-xs text-ink">
                    {m}
                  </span>
                ))}
              </div>
              <ul className="list-disc space-y-1 pl-5 text-xs text-ink-muted">
                {stage.goals.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      {/* 체육관 대응 */}
      <Card className="mb-6 p-4">
        <SectionHeading>체육관 대응</SectionHeading>
        <div className="space-y-4">
          {starter.gymMatchups.map((boss) => {
            const cityImg = getGymCityImage(boss.title)
            return (
              <div key={boss.title} className="overflow-hidden rounded-card border border-border">
                <div className="border-b border-border bg-surface-hover px-3 py-2">
                  <p className="text-sm font-black text-ink">{boss.title}</p>
                </div>
                {cityImg && (
                  <div className="flex justify-center bg-surface-hover p-2">
                    <img src={cityImg} alt="" className="max-h-56 w-auto max-w-full" />
                  </div>
                )}
                <div className="p-3">
                  <p className="mb-2 text-xs text-ink-muted">{boss.note}</p>
                  <GuideTable
                    headers={['상대 포켓몬', '대응책']}
                    rows={boss.rows.map((r) => [r.opponent, L(r.answer)])}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </Card>

      {/* 사천왕 */}
      <Card className="mb-6 p-4">
        <SectionHeading>사천왕</SectionHeading>
        <div className="space-y-4">
          {starter.elite4.map((boss) => (
            <div key={boss.title} className="rounded-card border border-border p-3">
              <p className="mb-1 text-sm font-black text-ink">{boss.title}</p>
              <p className="mb-2 text-xs text-ink-muted">{boss.note}</p>
              <GuideTable
                headers={['상대 포켓몬', '대응책']}
                rows={boss.rows.map((r) => [r.opponent, L(r.answer)])}
              />
            </div>
          ))}
        </div>
      </Card>

      {/* 챔피언 */}
      <Card className="mb-6 p-4">
        <SectionHeading>{starter.champion.title}</SectionHeading>
        <p className="mb-3 text-sm text-ink-muted">{starter.champion.note}</p>
        <GuideTable
          headers={['상대 포켓몬', '대응책']}
          rows={starter.champion.rows.map((r) => [r.opponent, L(r.answer)])}
        />
      </Card>

      {/* 요약 */}
      <Card className="mb-6 p-4">
        <SectionHeading>요약</SectionHeading>
        <GuideTable
          headers={['구간', '전략']}
          rows={starter.summary.map((r) => [r.stage, r.strategy])}
        />
      </Card>

      {/* 보조 포켓몬 */}
      {starter.support.length > 0 && (
        <Card className="mb-6 p-4">
          <SectionHeading>보조 포켓몬 (선택)</SectionHeading>
          <GuideTable
            headers={['포켓몬', '역할', '획득 시점']}
            rows={starter.support.map((r) => [
              <PokemonLink key={r.pokemonId} id={r.pokemonId} label={r.pokemon} />,
              r.role,
              r.obtainedAt,
            ])}
          />
        </Card>
      )}

      {/* 주의사항 */}
      <Card className="mb-6 p-4">
        <SectionHeading>주의사항</SectionHeading>
        <ul className="list-disc space-y-2 pl-5 text-sm text-ink">
          {starter.cautions.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </Card>
    </div>
  )
}

export function PokemonPlatinumStoryGuidePage() {
  const style = CATEGORY_STYLE['공략']
  const [selectedId, setSelectedId] = useState(PLATINUM_STARTERS[0].id)
  const activeStarter = PLATINUM_STARTERS.find((s) => s.id === selectedId) ?? PLATINUM_STARTERS[0]

  return (
    <GuidePageLayout refreshKey={selectedId}>
      {/* 페이지 헤더 — 쌍둥이마을 배경 */}
      <div className="relative mb-6 h-44 overflow-hidden rounded-card sm:h-52">
        <img
          src="/images/guides/platinum/twinleaf.png"
          alt="쌍둥이마을"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <Link to="/guides" className="rounded-chip bg-black/40 px-2 py-1 text-xs font-bold text-white/80 hover:text-white">
            ← 공략 목록
          </Link>
          <span className={`rounded-chip bg-white px-2 py-0.5 text-xs font-bold ${style.pillClass}`}>공략</span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h1 className="text-xl font-black text-white sm:text-2xl">포켓몬 플래티넘(기라티나)버전 스토리 엔트리 공략</h1>
          <p className="mt-1 text-xs text-white/70">다우징덱스 편집부 · 4세대(다이아몬드·펄·플래티넘) 공략</p>
        </div>
      </div>

      {/* 기준 */}
      <Card className="mb-6 p-4">
        <SectionHeading>기준</SectionHeading>
        <ul className="list-disc space-y-1 pl-5 text-sm text-ink">
          <li>대상 게임: 포켓몬스터 플래티넘 (기라티나 버전)</li>
          <li>세대 기준: 4세대(다이아몬드·펄·플래티넘). 브릴리언트 다이아몬드·샤이닝 펄 제외</li>
          <li>특이사항: 4세대에서 물리/특수 분리가 기술 단위로 적용됨. 격투 기술 = 물리, 에스퍼 기술 = 특수 등</li>
          <li>챔피언 난천(Cynthia)은 신오지방 역사상 가장 어려운 챔피언 중 하나. 한카리아스에 주의</li>
        </ul>
        <p className="mt-3 text-sm font-bold text-ink-faint">목적</p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-ink">
          {PLATINUM_GOALS.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </Card>

      {/* 모래내마을 — 게임 시작 지점 */}
      <div className="mb-6 overflow-hidden rounded-card border border-border">
        <div className="border-b border-border bg-surface-hover px-3 py-2">
          <p className="text-xs font-bold text-ink-faint">게임 시작 지점</p>
          <p className="text-sm font-black text-ink">모래내마을 — 박사 연구소 · 포켓몬 도감 입수</p>
        </div>
        <div className="flex justify-center bg-surface-hover p-2">
          <img src="/images/guides/platinum/sandgem.png" alt="모래내마을" className="max-h-56 w-auto max-w-full" />
        </div>
      </div>

      {/* 스타터 선택 탭 */}
      <div className="mb-6">
        <p className="mb-2 text-sm font-bold text-ink-faint">스타팅 포켓몬 선택</p>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {PLATINUM_STARTERS.map((s) => {
            const p = SAMPLE_POKEMON.find((pk) => pk.id === s.starterPokemonId)
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelectedId(s.id)}
                className={cn(
                  'flex shrink-0 items-center gap-2 rounded-chip border px-3 py-1.5 text-sm font-bold transition-colors',
                  selectedId === s.id
                    ? 'border-brand-red bg-brand-red text-white'
                    : 'border-border-strong text-ink hover:border-brand-red hover:text-brand-red',
                )}
              >
                {p && (
                  <img src={p.spriteUrl} alt="" width={24} height={24} style={{ imageRendering: 'pixelated' }} className="h-6 w-6" />
                )}
                {s.id === 'yunjinseok' ? s.nameKo : `${s.nameKo} 스타팅`}
              </button>
            )
          })}
        </div>
      </div>

      {/* 공통 HM */}
      <Card className="mb-6 p-4">
        <SectionHeading>HM 배분 (공통)</SectionHeading>
        <GuideTable
          headers={['HM', '기술', '담당', '획득처', '필요배지', '메모']}
          rows={PLATINUM_HM_TABLE.map((r) => [r.hm, r.move, L(r.pokemon), r.location, r.badge, r.note])}
        />
        <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-ink-muted">
          {PLATINUM_TM_NOTES.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </Card>

      {/* 진화 타이밍 */}
      <Card className="mb-6 p-4">
        <SectionHeading>돌 진화·친밀도 진화·교환 진화 적정 타이밍</SectionHeading>
        <GuideTable
          headers={['포켓몬', '진화 조건', '적정 타이밍', '적용 스타팅', '비고']}
          rows={PLATINUM_EVOLUTION_TIMING.map((r) => [
            r.pokemon,
            r.condition,
            r.timing,
            <span key={r.pokemon} className={cn(
              'rounded-chip px-2 py-0.5 text-xxs font-bold',
              r.starters === '공통' ? 'bg-brand-red/10 text-brand-red' :
              r.starters === '해당없음' ? 'bg-surface-hover text-ink-faint' :
              'bg-surface-hover text-ink-muted',
            )}>{r.starters}</span>,
            r.note,
          ])}
        />
      </Card>

      {/* 스타터별 콘텐츠 */}
      <StarterContent key={activeStarter.id} starter={activeStarter} />
    </GuidePageLayout>
  )
}
