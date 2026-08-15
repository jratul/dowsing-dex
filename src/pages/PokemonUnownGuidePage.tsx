import { Link } from 'react-router-dom'
import { Card } from '../components/ui/Card'
import { GuideTable } from '../components/guide/GuideTable'
import { PokemonLink } from '../components/guide/PokemonLink'
import { SpriteImage } from '../components/pokemon/SpriteImage'
import { TypeBadge } from '../components/pokemon/TypeBadge'
import { findSamplePokemon } from '../data/sample/pokemon.sample'
import { CATEGORY_STYLE } from '../lib/guideCategory'
import { cn } from '../lib/cn'
import {
  UNOWN_ABSENT_GAMES,
  UNOWN_AVAILABILITY,
  UNOWN_BASE_STATS,
  UNOWN_BASE_STAT_TOTAL,
  UNOWN_FAQ,
  UNOWN_FORMS,
  UNOWN_SPECIAL_FORMS_STEPS,
  UNOWN_SPECIES_FACTS,
  UNOWN_SPOTS,
} from '../data/sample/pokemonUnown.data'

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-3 text-lg font-black text-ink">{children}</h2>
}

function KindBadge({ kind }: { kind: 'wild' | 'transfer' }) {
  return kind === 'wild' ? (
    <span className="inline-block whitespace-nowrap rounded bg-green-100 px-1.5 py-0.5 text-xxs font-bold text-green-700 dark:bg-green-900/40 dark:text-green-300">
      야생 포획
    </span>
  ) : (
    <span className="inline-block whitespace-nowrap rounded bg-stone-100 px-1.5 py-0.5 text-xxs font-bold text-stone-600 dark:bg-stone-800 dark:text-stone-400">
      이전 전용
    </span>
  )
}

const STAT_COLOR: Record<string, string> = {
  hp: 'bg-stat-hp',
  attack: 'bg-stat-attack',
  defense: 'bg-stat-defense',
  'special-attack': 'bg-stat-special-attack',
  'special-defense': 'bg-stat-special-defense',
  speed: 'bg-stat-speed',
}

export function PokemonUnownGuidePage() {
  const style = CATEGORY_STYLE['포획']
  const unown = findSamplePokemon(201)
  const wildCount = UNOWN_AVAILABILITY.filter((g) => g.kind === 'wild').length

  return (
    <div className="mx-auto w-full lg:w-4/5 px-4 py-6">
      {/* 헤더 */}
      <div className="mb-2 flex items-center gap-2">
        <Link to="/guides" className="text-sm font-bold text-ink-muted hover:text-ink">
          ← 공략 목록
        </Link>
        <span className={cn('rounded-chip bg-white px-2 py-0.5 text-xs font-bold', style.pillClass)}>포획</span>
      </div>

      <h1 className="mb-1 text-2xl font-black text-ink">안농 종합 가이드 — 28종 전체와 출현 조건</h1>
      <p className="mb-6 text-sm text-ink-muted">
        알파벳 형태로만 존재하는 심볼 포켓몬. 어느 게임에 나오고, 어디서 어떻게 잡으며, 왜 28종인지 정리했다.
      </p>

      {/* 한눈에 보기 */}
      <Card className="mb-6 p-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex shrink-0 justify-center">
            <SpriteImage
              src={unown.artworkUrl ?? unown.spriteUrl}
              alt="안농"
              width={140}
              height={140}
              pixelated={false}
              rounded="none"
              className="h-32 w-32"
            />
          </div>
          <div className="flex-1">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xs font-bold text-ink-faint">#201</span>
              <PokemonLink id={201} />
              <TypeBadge type="에스퍼" />
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-3">
              {UNOWN_SPECIES_FACTS.map((f) => (
                <div key={f.label} className="text-xs">
                  <span className="text-ink-faint">{f.label}</span>
                  <div className="font-semibold text-ink">{f.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* 핵심 숫자 */}
      <div className="mb-6 grid grid-cols-3 gap-3">
        {[
          { n: '28종', d: 'A~Z + ! + ?' },
          { n: '1개', d: '배우는 기술 (잠재파워)' },
          { n: `${wildCount}곳`, d: '야생으로 잡을 수 있는 버전' },
        ].map((s) => (
          <Card key={s.d} className="p-3 text-center">
            <div className="text-xl font-black text-brand-red">{s.n}</div>
            <div className="mt-0.5 text-xxs text-ink-muted">{s.d}</div>
          </Card>
        ))}
      </div>

      {/* 28종 전체 */}
      <Card className="mb-6 p-4">
        <SectionHeading>28종 전체 형태</SectionHeading>
        <p className="mb-3 text-sm text-ink">
          A부터 Z까지 26종은 <strong>2세대</strong>부터, <strong>!</strong> 와 <strong>?</strong> 2종은{' '}
          <strong>3세대</strong>부터 추가되어 총 28종이다. 형태가 달라도 종족값·타입·특성은 모두 같고 도감에는
          한 종류로만 기록된다.
        </p>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(56px,1fr))] gap-2">
          {UNOWN_FORMS.map((form) => (
            <div
              key={form.label}
              className={cn(
                'flex flex-col items-center rounded-card border p-1.5',
                form.sinceGeneration === 3 ? 'border-amber-300 bg-amber-50/60 dark:bg-amber-950/20' : 'border-border',
              )}
            >
              <img
                src={form.spriteUrl}
                alt={`안농 ${form.label}`}
                width={48}
                height={48}
                loading="lazy"
                style={{ imageRendering: 'pixelated' }}
              />
              <span className="text-xs font-black text-ink">{form.label}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xxs text-ink-muted">
          <span className="mr-1 inline-block h-2 w-2 rounded-full bg-amber-300 align-middle" />
          노란 배경은 3세대부터 추가된 형태
        </p>
      </Card>

      {/* 게임별 등장 */}
      <Card className="mb-6 p-4">
        <SectionHeading>어느 게임에 나오나</SectionHeading>
        <p className="mb-3 text-sm text-ink">
          <strong>야생 포획</strong>은 그 게임 안에서 직접 잡을 수 있다는 뜻이고, <strong>이전 전용</strong>은
          안농이 데이터상 존재하지만 야생으로는 나오지 않아 다른 게임에서 데려와야 하는 경우다.
        </p>
        <GuideTable
          headers={['세대', '게임', '구분', '입수처']}
          rows={UNOWN_AVAILABILITY.map((g) => [
            `${g.generation}세대`,
            g.version,
            <KindBadge key={g.version} kind={g.kind} />,
            g.note ? `${g.where} (${g.note})` : g.where,
          ])}
        />
        <div className="mt-3 rounded-card border border-border bg-surface-hover/40 p-3 text-xs text-ink-muted">
          <strong className="text-ink">미등장:</strong> {UNOWN_ABSENT_GAMES.join(' / ')} — 이 게임들에는 안농이
          아예 존재하지 않아 다른 게임에서 데려올 수도 없다.
        </div>
      </Card>

      {/* 출현 장소 상세 */}
      <Card className="mb-6 p-4">
        <SectionHeading>출현 장소와 조건</SectionHeading>
        <div className="space-y-3">
          {UNOWN_SPOTS.map((spot) => (
            <div key={spot.title} className="rounded-card border border-border p-3">
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <h3 className="text-sm font-black text-ink">{spot.title}</h3>
                <span className="rounded bg-surface-hover px-1.5 py-0.5 text-xxs font-semibold text-ink-muted">
                  {spot.games}
                </span>
                {spot.levels && <span className="text-xxs text-ink-muted">{spot.levels}</span>}
              </div>
              <p className="text-xs leading-relaxed text-ink">{spot.body}</p>
              {spot.steps && (
                <ol className="mt-2 list-decimal space-y-0.5 pl-4 text-xs text-ink">
                  {spot.steps.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ol>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* ! ? 해금 */}
      <Card className="mb-6 p-4">
        <SectionHeading>하트골드·소울실버에서 ! 와 ? 얻기</SectionHeading>
        <p className="mb-3 text-sm text-ink">
          HGSS에서는 <strong>!</strong> 와 <strong>?</strong> 가 처음부터 나오지 않는다. 나머지 26종을 다 모아야
          비로소 나타나는 숨겨진 형태다.
        </p>
        <ol className="space-y-2">
          {UNOWN_SPECIAL_FORMS_STEPS.map((step, i) => (
            <li key={i} className="flex gap-2 text-sm text-ink">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red text-xxs font-black text-white">
                {i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <div className="mt-3 flex items-center gap-3 rounded-card border border-amber-200 bg-amber-50 p-3 dark:border-amber-800 dark:bg-amber-900/20">
          {UNOWN_FORMS.slice(26).map((f) => (
            <div key={f.label} className="flex items-center gap-1">
              <img src={f.spriteUrl} alt="" width={32} height={32} style={{ imageRendering: 'pixelated' }} />
              <span className="text-lg font-black text-amber-900 dark:text-amber-200">{f.label}</span>
            </div>
          ))}
          <span className="text-xs text-amber-900 dark:text-amber-200">
            26종을 다 모은 뒤에야 만날 수 있는 두 형태
          </span>
        </div>
      </Card>

      {/* 성능 */}
      <Card className="mb-6 p-4">
        <SectionHeading>종족값과 배틀 성능</SectionHeading>
        <div className="mb-4 space-y-1.5">
          {UNOWN_BASE_STATS.map((s) => (
            <div key={s.key} className="flex items-center gap-2">
              <span className="w-16 shrink-0 text-xs text-ink-muted">{s.label}</span>
              <span className="w-8 shrink-0 text-right text-xs font-bold text-ink">{s.value}</span>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-hover">
                <div className={cn('h-full rounded-full', STAT_COLOR[s.key])} style={{ width: `${(s.value / 160) * 100}%` }} />
              </div>
            </div>
          ))}
          <div className="flex items-center gap-2 pt-1">
            <span className="w-16 shrink-0 text-xs font-bold text-ink">합계</span>
            <span className="w-8 shrink-0 text-right text-xs font-black text-brand-red">{UNOWN_BASE_STAT_TOTAL}</span>
          </div>
        </div>
        <div className="rounded-card border border-border bg-surface-hover/40 p-3 text-xs leading-relaxed text-ink">
          안농은 <strong>어느 세대에서도 잠재파워 단 하나</strong>만 배운다. 기술머신·기술가르침·번식기술이
          전부 없어 기술 구성을 바꿀 수 없고, 종족값 합계도 {UNOWN_BASE_STAT_TOTAL}에 그친다. 배틀용이 아니라
          <strong> 모으는 재미를 위한 포켓몬</strong>으로 보는 것이 맞다.
        </div>
      </Card>

      {/* FAQ */}
      <Card className="p-4">
        <SectionHeading>자주 묻는 것</SectionHeading>
        <div className="space-y-3">
          {UNOWN_FAQ.map((item) => (
            <div key={item.q} className="rounded-card border border-border p-3">
              <div className="mb-1 text-sm font-bold text-ink">Q. {item.q}</div>
              <p className="text-xs leading-relaxed text-ink">{item.a}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
