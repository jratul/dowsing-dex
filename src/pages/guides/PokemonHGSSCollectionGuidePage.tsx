import { useState, useMemo, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import * as Tabs from '@radix-ui/react-tabs'
import rawMd from '../../data/guides/hgss-collection.md?raw'
import { SAMPLE_POKEMON } from '../../data/sample/pokemon.sample'
import { PokemonLink } from '../../components/guide/PokemonLink'
import { Card } from '../../components/ui/Card'
import { linkifyPokemonNames } from '../../lib/linkifyPokemonNames'
import { cn } from '../../lib/cn'
import { CATEGORY_STYLE } from '../../lib/guideCategory'
import { HGSS_ENCOUNTER_RATES } from '../../data/guides/hgss-encounter-rates.generated'

/** 가이드 탭 순서와 확률 데이터의 버전 키 순서를 맞춘다. */
const VERSION_KEYS = ['heartgold', 'soulsilver', 'platinum']

/** 지역+방법 안에서 포켓몬 id → 출현 확률(%) */
type RateMap = Record<number, number> | undefined

/**
 * 출현 확률 배지. 희귀할수록 눈에 띄게 색을 올린다 — 목록에서 찾는 건 보통
 * "몇 %인가"가 아니라 "이거 잘 안 나오나"라서.
 */
function RateBadge({ chance }: { chance: number }) {
  const tone =
    chance >= 20
      ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300'
      : chance >= 10
        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300'
        : chance >= 4
          ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300'
          : 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300'
  return (
    <span
      title={`출현 확률 약 ${chance}%`}
      className={cn('ml-0.5 rounded px-1 py-0.5 text-xxs font-bold whitespace-nowrap', tone)}
    >
      {chance}%
    </span>
  )
}

// --- 타입 ---
interface LocationSection {
  name: string
  lines: string[]
}

interface ChapterSection {
  title: string
  locations: LocationSection[]
}

interface GameSection {
  title: string
  chapters: ChapterSection[]
}

interface SummaryGroup {
  title: string
  lines: string[]
}

interface ParsedGuide {
  games: GameSection[]
  summary: SummaryGroup[]
}

// 게임 본문 뒤에 붙는 부록 섹션. 게임 챕터로 섞이지 않도록 여기서 파싱을 끊는다.
const SUMMARY_HEADING = '놓치기 쉬운 핵심 수집 포인트 요약'
const REFERENCE_HEADING = '데이터 및 검증 자료'

// --- MD 파서 ---
function parseMd(md: string): ParsedGuide {
  const lines = md.split('\n')
  const games: GameSection[] = []
  const summary: SummaryGroup[] = []
  let currentGame: GameSection | null = null
  let currentChapter: ChapterSection | null = null
  let currentLocation: LocationSection | null = null
  let currentSummary: SummaryGroup | null = null
  let inAppendix = false

  const flushLocation = () => {
    if (currentLocation && currentChapter) {
      currentChapter.locations.push(currentLocation)
    }
    currentLocation = null
  }
  const flushChapter = () => {
    flushLocation()
    if (currentChapter && currentGame) {
      currentGame.chapters.push(currentChapter)
    }
    currentChapter = null
  }
  const flushGame = () => {
    flushChapter()
    if (currentGame) games.push(currentGame)
    currentGame = null
  }
  const flushSummary = () => {
    if (currentSummary) summary.push(currentSummary)
    currentSummary = null
  }

  for (const line of lines) {
    // H1 — "N부 — 게임명"만 게임 섹션. 문서 머리말 H1은 무시한다.
    if (/^# [^#]/.test(line)) {
      flushGame()
      const title = line.slice(2).trim()
      if (/^\d+부\s*—/.test(title)) currentGame = { title, chapters: [] }
      continue
    }

    if (line.startsWith('## ')) {
      const title = line.slice(3).trim()
      if (title === SUMMARY_HEADING || title === REFERENCE_HEADING) {
        flushGame()
        inAppendix = title === SUMMARY_HEADING
        continue
      }
      flushSummary()
      flushChapter()
      if (currentGame) currentChapter = { title, locations: [] }
      continue
    }

    if (line.startsWith('### ')) {
      const title = line.slice(4).trim()
      if (inAppendix) {
        flushSummary()
        currentSummary = { title, lines: [] }
      } else {
        flushLocation()
        if (currentChapter) currentLocation = { name: title, lines: [] }
      }
      continue
    }

    if (!line.trim()) continue
    if (currentSummary) currentSummary.lines.push(line)
    else if (currentLocation) currentLocation.lines.push(line)
  }

  flushGame()
  flushSummary()
  return { games, summary }
}

// --- 줄 그룹 타입 ---
type LineGroup =
  | { type: 'category'; emoji: string; header: string; entries: string[] }
  | { type: 'note'; emoji: string; content: string }
  | { type: 'plain'; content: string }

const CATEGORY_EMOJIS = ['🟢', '🔁', '🎁⭐', '🏁', '🔌']
const NOTE_EMOJIS = ['🎁', '🔄', '⭐']

function groupLines(lines: string[]): LineGroup[] {
  const groups: LineGroup[] = []
  let cur: Extract<LineGroup, { type: 'category' }> | null = null

  const flush = () => {
    if (cur) {
      groups.push(cur)
      cur = null
    }
  }

  for (const line of lines) {
    if (line.startsWith('  - ')) {
      if (cur) cur.entries.push(line.slice(4))
      continue
    }

    if (line.startsWith('- ')) {
      const content = line.slice(2)
      // 카테고리 헤더 (서브불릿을 포함하는 그룹)
      const catEmoji = CATEGORY_EMOJIS.find((e) => content.startsWith(e))
      if (catEmoji) {
        flush()
        const header = content.slice(catEmoji.length).trim().replace(/\*\*/g, '')
        cur = { type: 'category', emoji: catEmoji, header, entries: [] }
        continue
      }
      // 독립 노트 줄 (선물 설명, NPC 교환 등)
      flush()
      const noteEmoji = NOTE_EMOJIS.find((e) => content.startsWith(e))
      if (noteEmoji) {
        groups.push({ type: 'note', emoji: noteEmoji, content: content.slice(noteEmoji.length).trim() })
      } else {
        groups.push({ type: 'plain', content })
      }
      continue
    }

    // blockquote, 기타 줄 무시
  }

  flush()
  return groups
}

// --- 인라인 렌더러 (** 포켓몬명 ** → 스프라이트 링크) ---
function RenderInline({
  text,
  nameToId,
  rates,
}: {
  text: string
  nameToId: Map<string, number>
  rates?: RateMap
}) {
  const parts: ReactNode[] = []
  const regex = /\*\*([^*]+)\*\*/g
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(<span key={`t-${lastIndex}`}>{text.slice(lastIndex, match.index)}</span>)
    }
    const boldText = match[1]
    const pokemonId = nameToId.get(boldText)
    if (pokemonId) {
      parts.push(<PokemonLink key={`p-${match.index}`} id={pokemonId} label={boldText} />)
      const chance = rates?.[pokemonId]
      if (chance !== undefined) parts.push(<RateBadge key={`r-${match.index}`} chance={chance} />)
    } else {
      // "스이쿤 Lv.40", "디아루가/펄기아 Lv.70:"처럼 이름에 레벨·조건이 붙은 볼드도
      // 안쪽의 포켓몬 이름만 링크가 되도록 한 번 더 훑는다.
      parts.push(
        <strong key={`b-${match.index}`} className="font-semibold text-ink">
          {linkifyPokemonNames(boldText, nameToId)}
        </strong>,
      )
    }
    lastIndex = regex.lastIndex
  }

  if (lastIndex < text.length) {
    parts.push(<span key={`t-end`}>{text.slice(lastIndex)}</span>)
  }

  return <>{parts}</>
}

// --- 카테고리 스타일 맵 ---
const CAT_STYLE: Record<string, { pill: string; bg: string }> = {
  '🟢': {
    pill: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
    bg: 'bg-green-50/50 dark:bg-green-950/20',
  },
  '🔁': {
    pill: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
    bg: 'bg-blue-50/50 dark:bg-blue-950/20',
  },
  '🎁⭐': {
    pill: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
    bg: 'bg-amber-50/50 dark:bg-amber-950/20',
  },
  '🏁': {
    pill: 'bg-stone-100 text-stone-600 dark:bg-stone-800 dark:text-stone-400',
    bg: 'bg-stone-50/50 dark:bg-stone-900/20',
  },
  '🔌': {
    pill: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400',
    bg: 'bg-slate-50/50 dark:bg-slate-900/20',
  },
}

const NOTE_STYLE: Record<string, string> = {
  '🎁': 'text-amber-700 dark:text-amber-400',
  '🔄': 'text-purple-700 dark:text-purple-400',
  '⭐': 'text-yellow-600 dark:text-yellow-400',
}

/** "**낡은낚싯대:** **잉어킹** Lv.10" 처럼 엔트리 앞머리에 붙는 방법 라벨을 떼어낸다. */
function methodLabelOf(entry: string): string | undefined {
  return /^\*\*([^:*]+):\*\*/.exec(entry)?.[1].trim()
}

// --- LocationSection 렌더러 ---
function LocationView({
  location,
  nameToId,
  imgUrl,
  locationRates,
}: {
  location: LocationSection
  nameToId: Map<string, number>
  imgUrl?: string
  locationRates?: Record<string, Record<number, number>>
}) {
  const groups = useMemo(() => groupLines(location.lines), [location.lines])

  return (
    <div className="defer-offscreen border-b border-border pb-4 pt-3 last:border-0">
      <div className="mb-2 flex items-start gap-3">
        {imgUrl && (
          <div className="flex shrink-0 justify-center rounded bg-surface-hover p-1">
            {/* 바로 옆 제목이 같은 지역명을 읽어주므로 스크린리더에는 중복 노출하지 않는다 */}
            <img src={imgUrl} alt="" className="max-h-28 w-auto max-w-36 object-contain" loading="lazy" />
          </div>
        )}
        <h4 className="mt-0.5 text-sm font-black text-ink">{location.name}</h4>
      </div>

      <div className="space-y-2">
        {groups.map((group, gi) => {
          if (group.type === 'category') {
            const style = CAT_STYLE[group.emoji] ?? CAT_STYLE['🏁']
            return (
              <div key={gi} className={cn('rounded-card p-2', style.bg)}>
                <div className="mb-1 flex items-center gap-1.5">
                  <span className={cn('rounded px-1.5 py-0.5 text-xxs font-bold', style.pill)}>
                    {group.emoji} {group.header}
                  </span>
                </div>
                {group.entries.length > 0 && (
                  <div className="space-y-0.5 pl-1">
                    {group.entries.map((entry, ei) => (
                      // min-h-6 = PokemonLink 스프라이트(2em=24px)가 들어간 줄의 높이.
                      // 없으면 포켓몬이 언급되지 않은 줄만 낮아져 간격이 들쭉날쭉해진다.
                      // flex로 감싸면 RenderInline이 돌려주는 조각들이 각각 flex 항목이 되어
                      // 문장 중간 줄바꿈이 깨지므로, 블록 그대로 두고 min-h만 준다.
                      <div key={ei} className="min-h-6 text-xs leading-loose text-ink">
                        <RenderInline
                          text={entry}
                          nameToId={nameToId}
                          rates={locationRates?.[methodLabelOf(entry) ?? '']}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          }

          if (group.type === 'note') {
            const textClass = NOTE_STYLE[group.emoji] ?? 'text-ink-muted'
            return (
              <div key={gi} className={cn('min-h-6 text-xs leading-loose', textClass)}>
                <span className="mr-1">{group.emoji}</span>
                <RenderInline text={group.content} nameToId={nameToId} />
              </div>
            )
          }

          return (
            <div key={gi} className="min-h-6 text-xs leading-loose text-ink-muted">
              <RenderInline text={group.content} nameToId={nameToId} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

// --- 챕터 렌더러 ---
function ChapterView({
  chapter,
  nameToId,
  locationImages,
  gameRates,
}: {
  chapter: ChapterSection
  nameToId: Map<string, number>
  locationImages: Record<string, string>
  gameRates?: Record<string, Record<string, Record<number, number>>>
}) {
  return (
    <div>
      <h3 className="border-b border-border px-4 py-3 text-sm font-bold text-ink">{chapter.title}</h3>
      <div className="px-4 pb-2">
        {chapter.locations.map((loc) => (
          <LocationView
            key={loc.name}
            location={loc}
            nameToId={nameToId}
            imgUrl={locationImages[loc.name]}
            locationRates={gameRates?.[loc.name]}
          />
        ))}
      </div>
    </div>
  )
}

// --- 지역 이미지 맵 (성도·관동은 HG/SS 공용) ---
const JOHTO_KANTO_IMAGES: Record<string, string> = {
  연두마을: '/images/guides/hgss/new-bark-town.png',
  무궁시티: '/images/guides/hgss/cherrygrove-city.png',
  도라지시티: '/images/guides/hgss/violet-city.png',
  고동마을: '/images/guides/hgss/azalea-town.png',
  금빛시티: '/images/guides/hgss/goldenrod-city.png',
  인주시티: '/images/guides/hgss/ecruteak-city.png',
  담청시티: '/images/guides/hgss/olivine-city.png',
  진청시티: '/images/guides/hgss/cianwood-city.png',
  검은먹시티: '/images/guides/hgss/blackthorn-city.png',
  태초마을: '/images/guides/hgss/pallet-town.png',
  상록시티: '/images/guides/hgss/viridian-city.png',
  회색시티: '/images/guides/hgss/pewter-city.png',
  블루시티: '/images/guides/hgss/cerulean-city.png',
  갈색시티: '/images/guides/hgss/vermilion-city.png',
  무지개시티: '/images/guides/hgss/celadon-city.png',
  노랑시티: '/images/guides/hgss/saffron-city.png',
  연분홍시티: '/images/guides/hgss/fuchsia-city.png',
}

// 신오 지역명 → 이미지. 파일명은 영문 도시명 기준이며 한글 명칭 대응은
// PokemonPlatinumStoryGuidePage에서 검증된 매핑을 그대로 따른다.
const SINNOH_IMAGES: Record<string, string> = {
  무쇠시티: '/images/guides/platinum/oreburgh.png',
  영원시티: '/images/guides/platinum/eterna.png',
  봉신마을: '/images/guides/platinum/solaceon.png',
  운하시티: '/images/guides/platinum/canalave.png',
  연고시티: '/images/guides/platinum/hearthome.png',
  장막시티: '/images/guides/platinum/veilstone.png',
  들판시티: '/images/guides/platinum/pastoria.png',
  선단시티: '/images/guides/platinum/snowpoint.png',
  물가시티: '/images/guides/platinum/sunyshore.png',
}

const GAME_LOCATION_IMAGES = [JOHTO_KANTO_IMAGES, JOHTO_KANTO_IMAGES, SINNOH_IMAGES]

// --- 메인 페이지 ---
export function PokemonHGSSCollectionGuidePage() {
  const [activeTab, setActiveTab] = useState('0')
  const style = CATEGORY_STYLE['포획']

  // 리전폼(알로라·가라르·히스이·팔데아, id 10000번대)은 원종과 한글명이 완전히 같다.
  // 그냥 덮어쓰면 나중에 오는 리전폼이 이겨서 4세대 가이드인데 "꼬렛"이 알로라꼬렛으로,
  // "가디"가 히스이가디로 링크된다. 항상 id가 작은 원종을 쓴다.
  const nameToId = useMemo(() => {
    const map = new Map<string, number>()
    for (const p of SAMPLE_POKEMON) {
      if (!p.nameKo) continue
      const prev = map.get(p.nameKo)
      if (prev === undefined || p.id < prev) map.set(p.nameKo, p.id)
    }
    return map
  }, [])

  const { games, summary } = useMemo(() => parseMd(rawMd), [])

  const TAB_LABELS = [
    { label: '하트골드', color: 'data-[state=active]:bg-red-600 data-[state=active]:border-red-600' },
    { label: '소울실버', color: 'data-[state=active]:bg-indigo-600 data-[state=active]:border-indigo-600' },
    { label: '기라티나PT', color: 'data-[state=active]:bg-violet-600 data-[state=active]:border-violet-600' },
  ]

  return (
    <div className="mx-auto w-full lg:w-4/5 px-4 py-6">
      {/* 헤더 */}
      <div className="mb-2 flex items-center gap-2">
        <Link to="/guides" className="text-sm font-bold text-ink-muted hover:text-ink">
          ← 공략 목록
        </Link>
        <span className={cn('rounded-chip bg-white px-2 py-0.5 text-xs font-bold', style.pillClass)}>포획</span>
      </div>

      <h1 className="mb-1 text-2xl font-black text-ink">
        하트골드·소울실버·기라티나PT 스토리 수집 가이드
      </h1>
      <p className="mb-5 text-sm text-ink-muted">
        DS 2대 병행 기준 — 스토리 순서대로 잡을 수 있는 포켓몬, NPC 교환, 선물, 고정 조우 일람
      </p>

      {/* 범례 */}
      <Card className="mb-5 p-3">
        <p className="mb-2 text-xs font-bold text-ink-muted">아이콘 안내</p>
        <div className="flex flex-wrap gap-2 text-xs">
          {[
            { emoji: '🟢', label: '이 시점에 포획 가능' },
            { emoji: '🔁', label: '도구/기술 획득 후 재방문' },
            { emoji: '🎁⭐', label: '선물·고정 조우·특수 입수' },
            { emoji: '🔄', label: 'NPC 교환' },
            { emoji: '🏁', label: '전국도감/엔드게임 이후' },
            { emoji: '🔌', label: '외부 연동 (GBA 슬롯 등)' },
          ].map(({ emoji, label }) => (
            <span key={emoji} className="flex items-center gap-1 text-ink-muted">
              <span>{emoji}</span>
              <span>{label}</span>
            </span>
          ))}
        </div>

        <p className="mt-3 mb-2 text-xs font-bold text-ink-muted">출현 확률</p>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          {[
            { chance: 30, label: '흔함' },
            { chance: 15, label: '보통' },
            { chance: 5, label: '적음' },
            { chance: 1, label: '희귀' },
          ].map(({ chance, label }) => (
            <span key={label} className="flex items-center gap-1 text-ink-muted">
              <RateBadge chance={chance} />
              <span>{label}</span>
            </span>
          ))}
        </div>
        <p className="mt-2 text-xxs leading-relaxed text-ink-muted">
          PokeAPI의 4세대 조우 데이터 기준. 같은 조건에서 여러 슬롯을 차지하면 확률을 더했고,
          시간대처럼 동시에 성립하지 않는 조건이 여러 개면 그중 가장 높은 값을 적었다.
          낚시·파도타기처럼 조건이 하나뿐인 방법은 한 지역의 합이 정확히 100%가 된다.
        </p>
      </Card>

      {/* 게임 탭 */}
      <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
        <Tabs.List className="mb-4 flex gap-2 overflow-x-auto border-b border-border pb-2">
          {TAB_LABELS.slice(0, games.length).map((tab, i) => (
            <Tabs.Trigger
              key={i}
              value={String(i)}
              className={cn(
                'shrink-0 rounded-chip border border-border-strong px-4 py-1.5 text-sm font-bold text-ink transition-colors',
                'data-[state=active]:text-white',
                tab.color,
              )}
            >
              {tab.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {games.map((game, gi) => (
          <Tabs.Content key={gi} value={String(gi)}>
            <div className="space-y-1">
              {game.chapters.map((chapter, ci) => (
                <Card key={ci} className="overflow-hidden p-0">
                  <ChapterView
                    chapter={chapter}
                    nameToId={nameToId}
                    locationImages={GAME_LOCATION_IMAGES[gi] ?? {}}
                    gameRates={HGSS_ENCOUNTER_RATES[VERSION_KEYS[gi]]}
                  />
                </Card>
              ))}
            </div>
          </Tabs.Content>
        ))}
      </Tabs.Root>

      {/* 놓치기 쉬운 핵심 수집 포인트 */}
      {summary.length > 0 && (
        <Card className="mt-6 p-4">
          <h2 className="mb-3 text-lg font-black text-ink">놓치기 쉬운 핵심 수집 포인트</h2>
          <div className="space-y-4">
            {summary.map((group) => (
              <div key={group.title}>
                <h3 className="mb-1.5 text-sm font-bold text-ink">{group.title}</h3>
                <ul className="space-y-1">
                  {group.lines.map((line, li) => (
                    <li key={li} className="min-h-6 text-xs leading-loose text-ink">
                      <RenderInline text={line.replace(/^-\s*/, '')} nameToId={nameToId} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  )
}
