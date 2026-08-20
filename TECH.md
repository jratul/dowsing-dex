# TECH.md — 다우징덱스 기술 문서

포켓몬 한국어 팬 도감 사이트(https://dowsing-dex.vercel.app)의 구조, 파일, 사용 기술 정리.

---

## 1. 기술 스택

| 분류 | 기술 | 버전 | 비고 |
|---|---|---|---|
| 빌드 도구 | Vite | 8.x | `@vitejs/plugin-react` + `@tailwindcss/vite` |
| UI 프레임워크 | React | 19.x | `react-dom` JSX transform |
| 언어 | TypeScript | 6.x | `target: ES2023`, bundler 모드 |
| 라우팅 | React Router | 7.x | `createBrowserRouter`, 모든 라우트 lazy import |
| 스타일 | Tailwind CSS | 4.x | `@tailwindcss/vite` 플러그인, `@theme` 블록 기반 |
| UI 프리미티브 | Radix UI | 최신 | Tabs, ToggleGroup, Slot |
| 클래스 합성 | clsx + tailwind-merge | 최신 | `lib/cn.ts`의 `cn()` 헬퍼로 통합 |
| Variant 관리 | class-variance-authority (cva) | 최신 | Button, TypeBadge 등에 사용 |
| 캐러셀 | Embla Carousel | 8.x | HeroCarousel 자동재생 |
| 린터 | oxlint | 1.x | `npm run lint` |
| 배포 | Vercel | — | SPA fallback: `vercel.json` rewrites |
| 폰트 | Noto Sans KR | — | Google Fonts CDN 비동기 로드 |
| 이미지 CDN | jsDelivr | — | `cdn.jsdelivr.net/gh/PokeAPI/sprites@master/…` |

---

## 2. 폴더 구조

```
dowsing-dex/
├── public/                    # 정적 파일 (favicon 등)
├── scripts/
│   ├── fetch-pokedex.mjs           # PokeAPI + 포켓몬갤러리 위키 스크래핑 → 생성 파일 출력
│   ├── build-tm-index.mjs          # by-id/*.generated.ts → tm-index.generated.ts 역인덱스 생성
│   ├── build-move-index.mjs        # by-id/*.generated.ts → move-index.generated.ts (기술 → 학습 포켓몬)
│   ├── build-move-descriptions.mjs # PokeAPI 기술 한국어 설명 수집 → move-descriptions.generated.ts 출력
│   ├── build-abilities.mjs         # PokeAPI 특성 한국어 데이터 → abilities.generated.ts 출력
│   └── build-items.mjs             # PokeAPI 진화·배틀 아이템 → items.generated.ts (npm script 미등록)
├── src/
│   ├── main.tsx               # React 진입점, StrictMode + RouterProvider
│   ├── router.tsx             # 전체 라우트 정의 (모두 lazy)
│   ├── styles/
│   │   └── index.css          # Tailwind 진입점 + @theme 디자인 토큰 전체
│   ├── types/                 # TypeScript 인터페이스
│   ├── lib/                   # 순수 유틸 함수
│   ├── data/                  # 정적 데이터 (스크립트 생성 + 수작업)
│   ├── components/            # UI 컴포넌트
│   ├── pages/                 # 라우트별 페이지 (pokedex/ reference/ guides/ 로 분류)
│   └── dev/                   # 개발용 쇼케이스 페이지
├── vercel.json                # SPA fallback rewrite 설정
├── vite.config.ts
├── tsconfig.app.json
└── package.json
```

---

## 3. 파일별 역할

### 3-1. 진입점 / 라우팅

| 파일 | 역할 |
|---|---|
| `src/main.tsx` | React 앱 진입점. `RouterProvider`에 router 주입 |
| `src/router.tsx` | `createBrowserRouter`로 전체 라우트 정의. 모든 페이지를 `lazy()`로 code-split |

```tsx
// src/main.tsx
createRoot(document.getElementById('root')!).render(
  <StrictMode><RouterProvider router={router} /></StrictMode>
)

// src/router.tsx — lazy 패턴 (모든 페이지 공통)
{ path: '/pokedex', lazy: () => import('./pages/PokedexPage').then((m) => ({ Component: m.PokedexPage })) }
```

### 3-2. 스타일 (`src/styles/index.css`)

Tailwind v4 방식. `@theme {}` 블록 하나로 CSS 변수와 Tailwind 유틸리티 클래스를 동시에 선언한다.

| 토큰 그룹 | CSS 변수 예시 | 유틸리티 클래스 예시 |
|---|---|---|
| 브랜드 색상 | `--color-brand-red: #e3350d` | `bg-brand-red`, `text-brand-red` |
| 텍스트/테두리 | `--color-ink`, `--color-border` | `text-ink`, `border-border` |
| 18타입 색상 | `--color-type-fire: #f08030` | `bg-type-fire`, `text-type-fire` |
| 공략 카테고리 | `--color-category-strategy` | `bg-category-strategy` |
| 종족값 스탯 | `--color-stat-hp: #f08030` | `bg-stat-hp` |
| 타입 상성 | `--color-matchup-weak` | `bg-matchup-weak` |
| 레이아웃 | `--radius-card: 13px`, `--shadow-card` | `rounded-card`, `shadow-card` |
| 폰트 | `--text-xxs: 0.625rem` | `text-xxs` (10px) |

### 3-3. 타입 정의 (`src/types/`)

| 파일 | 주요 타입 |
|---|---|
| `pokemon.ts` | `Pokemon`, `PokemonStats`, `EvolutionStage`, `MegaForm` |
| `move.ts` | `Move`, `Learnset`, `TmEntry`, `Generation` |
| `guide.ts` | `Guide`, `GuideCategory` |
| `type-chart.ts` | `TypeName`, `TypeChart`, `TypeMatchup`, `MatchupClass` |

```ts
// pokemon.ts (발췌)
export interface Pokemon {
  id: number; nameKo: string; nameEn: string; types: TypeName[]
  stats: PokemonStats; spriteUrl: string; artworkUrl?: string
  evolutionLine?: EvolutionStage[]; encounterLocations?: EncounterLocation[]
}
// move.ts (발췌)
export interface Move { id: number; nameKo: string; type: TypeName; power: number | null; pp: number; effectKo?: string }
export interface Learnset { versionGroup: string; generation: number; levelUp: LevelUpMove[]; machine: MachineMove[]; tutor: TutorMove[] }
```

### 3-4. 유틸 라이브러리 (`src/lib/`)

| 파일 | 역할 |
|---|---|
| `cn.ts` | `clsx` + `tailwind-merge` 합성. 모든 컴포넌트에서 클래스 합성 시 사용 |
| `typeChart.ts` | 18타입 `CHART`, `mult(atk, def)`, `profile(defTypes)`, `COLOR`, `TYPE_BG_CLASS` 등. 타입 상성 로직 전체 |
| `linkifyPokemonNames.tsx` | 텍스트 속 포켓몬 이름 → `<PokemonLink>` 자동 변환. 이름 길이 내림차순 매칭 |
| `guideCategory.ts` | 공략 카테고리(입문/공략/대전/포획/진화) → 배지·배너 CSS 클래스 매핑 |
| `statColors.ts` | 종족값 6종 → `bg-stat-*` 클래스 매핑 |

```ts
// cn.ts
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)) }

// typeChart.ts — 단일/복합 타입 방어 프로필 계산
export function mult(atk: TypeName, def: TypeName): number { /* CHART 조회 */ }
export function profile(defTypes: TypeName[]): Record<TypeName, number> {
  // 모든 공격 타입에 대해 defTypes 전체의 배율을 곱해 최종 배율 반환
}

// linkifyPokemonNames.tsx — 긴 이름 먼저 매칭 (이름 길이 내림차순 정렬 Map 필요)
export function linkifyPokemonNames(text: string, nameToId: Map<string, number>): ReactNode[]
```

### 3-5. 데이터 (`src/data/`)

#### 생성 파일 (직접 수정 금지)

| 파일 | 크기 | 내용 |
|---|---|---|
| `pokedex/pokedex.generated.ts` | ~2.5 MB | `ALL_POKEMON`(1082종+), `ALL_EVOLUTION_LINES`. `scripts/fetch-pokedex.mjs`가 생성 |
| `moves/all-moves.generated.ts` | ~83 KB | `ALL_MOVES` 전체 기술 목록 |
| `moves/by-id/*.generated.ts` | 1082개 파일 | 포켓몬별 세대/버전별 학습셋. 라우트 진입 시 동적 import |
| `moves/tm-index.generated.ts` | ~3.3 MB | TM/HM → 배울 수 있는 포켓몬 ID 역인덱스. `scripts/build-tm-index.mjs`가 생성 |
| `moves/move-descriptions.generated.ts` | ~200 KB | 기술별 한국어 설명 텍스트(727종). `scripts/build-move-descriptions.mjs`가 생성 |

```ts
// loadLearnsets — import.meta.glob으로 1082개 파일 등록, 상세 진입 시 1개만 로드
const learnsetModules = import.meta.glob('../moves/by-id/*.generated.ts')
export async function loadLearnsets(pokemonId: number): Promise<Learnset[]> {
  const mod = await learnsetModules[`../moves/by-id/${pokemonId}.generated.ts`]()
  return (mod as { default: Learnset[] }).default
}
// MOVE_MAP — move-descriptions 병합 후 id 기반 O(1) 조회
const MOVE_MAP = new Map(ALL_MOVES.map((m) => [m.id, MOVE_DESCRIPTIONS[m.id] ? { ...m, effectKo: MOVE_DESCRIPTIONS[m.id] } : m]))
```

#### 수작업 데이터 (`src/data/sample/`)

| 파일 | 내용 |
|---|---|
| `pokemon.sample.ts` | `SAMPLE_POKEMON` (= ALL_POKEMON에서 이미지 URL jsDelivr 변환 적용), `findSamplePokemon()`, `findEvolutionLine()` |
| `moves.sample.ts` | `loadLearnsets()` (lazy import 래퍼), `findMove()`, `MOVE_MAP` (move-descriptions 병합) |
| `guides.sample.ts` | `SAMPLE_GUIDES` — 공략 목록 카드 데이터 |
| `flavorTexts.ts` | PokeAPI 도감 설명 온디맨드 fetch 유틸. 버전별 한국어 텍스트를 런타임에 가져온다 |
| `pokemonRedStory.data.ts` | 레드버전 스토리 공략 데이터 |
| `pokemonFireredStory.data.ts` | 파이어레드 스토리 공략 데이터 (돌·교환 진화 전체 포함) |
| `pokemonFireredSeviiIslands.data.ts` | 파이어레드 일곱섬 클리어 후 공략 데이터 |
| `pokemonGoldStory.data.ts` | 골드버전 스토리 공략 데이터 |
| `pokemonHeartgoldStory.data.ts` | 하트골드버전 스토리 공략 데이터 |
| `pokemonHeartgoldWalkthrough.data.ts` | 하트골드버전 최고효율 진행 공략 데이터 (11 Phase 구조, 윤가놈 추천 파티 분석 포함) |
| `pokemonEmeraldStory.data.ts` | 에메랄드버전 스토리 공략 데이터 (스타팅 3종 분기) |
| `pokemonPlatinumStory.data.ts` | 플래티넘버전 스토리 공략 데이터 (스타팅 3종 분기) |
| `pokemonRedEvolution.data.ts` | 1세대 돌·교환 진화 타이밍 가이드 데이터 |

### 3-6. 컴포넌트 (`src/components/`)

#### `ui/` — 범용 프리미티브

| 파일 | Radix | 역할 |
|---|---|---|
| `Button.tsx` | Slot | `variant`(primary/secondary/ghost), `size`, `asChild` 지원 |
| `Card.tsx` | Slot | 흰 배경 + `rounded-card` + `shadow-card`. `asChild`로 Link 합성 가능 |

```tsx
// Button.tsx — cva variant 패턴
const buttonVariants = cva('inline-flex items-center rounded-button font-medium transition-colors', {
  variants: {
    variant: { primary: 'bg-brand-red text-white', secondary: 'border border-border', ghost: 'hover:bg-surface-hover' },
    size: { sm: 'h-8 px-3 text-sm', md: 'h-10 px-4' },
  },
  defaultVariants: { variant: 'primary', size: 'md' },
})
export function Button({ variant, size, asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  return <Comp className={cn(buttonVariants({ variant, size }), props.className)} {...props} />
}
```

#### `pokemon/` — 포켓몬 도메인 컴포넌트

| 파일 | 역할 |
|---|---|
| `SpriteImage.tsx` | 이미지 로딩 스켈레톤 + 페이드인 + 에러 폴백. `fixUrl()`로 jsDelivr CDN 변환 내장 |
| `PokemonCard.tsx` | 도감 카드 (스프라이트 + 번호 + 이름 + 타입 배지). `to` prop으로 Link 연결 |
| `TypeBadge.tsx` | 타입 이름 → 색상 배지. `size`(sm/md), `variant`(solid/outline) |
| `StatChart.tsx` | 종족값 6종 가로 막대 차트. 비교 모드(`compareStats`) 지원 |
| `TypeDefense.tsx` | 단일·복합 타입 방어 상성 표시. `typeChart.ts`의 `profile()` 활용 |
| `EvolutionTree.tsx` | 재귀 트리 구조 진화 체인 렌더링. 분기 진화(이브이 등) 동일 코드로 처리 |
| `MoveList.tsx` | 세대/버전별 학습셋 표. 레벨업/기술머신/교배기 구분 |
| `EncounterLocationList.tsx` | 출현 장소 세대·버전별 목록 |
| `GenerationFilter.tsx` | 세대 필터 칩 (ToggleGroup 기반) |
| `EvolutionMoveComparison.tsx` | 진화 가족 전체 기술 비교 테이블. 세대·버전 탭, 레벨업/TM·HM/가르침 섹션별로 가족 멤버 열 나열. `Map<number, {learnsets, recommended}>` 병렬 로드 |

```tsx
// EvolutionMoveComparison.tsx — rules-of-hooks 준수: useMemo는 조기 반환 앞에 선언
const evolutionFamilyIds = useMemo(() => extractFamilyIds(evolutionLine), [evolutionLine])
if (!pokemon) return null  // useMemo 뒤에 선언해야 Hook 순서 위반 없음

// StatChart.tsx — 최대값(255) 기준 너비 비율 + 색상 토큰
<div className="h-2 rounded-full bg-stat-hp" style={{ width: `${(value / 255) * 100}%` }} />
```

#### `type-chart/` — 타입 상성 컴포넌트

| 파일 | 역할 |
|---|---|
| `TypeFilter.tsx` | Radix ToggleGroup 래핑. 단일/다중 타입 선택 |
| `TypeCalculator.tsx` | 방어 타입 조합 입력 → `profile()` 결과 실시간 표시 |
| `TypeChartGrid.tsx` | 18×18 전체 타입 상성 표. 공격·방어 타입 강조 |
| `TypeOffense.tsx` | 공격 타입 → 약점/반감 포켓몬 목록 |
| `TypePill.tsx` | 타입 상성 배율 표시 칩 (×2 / ×0.5 / ×0 / ×4 등) |

```tsx
// TypeCalculator.tsx — profile() 공유 (TypeDefense와 동일 함수)
const matchup = useMemo(() => profile(selectedTypes as TypeName[]), [selectedTypes])
// TypeChartGrid.tsx — 18×18 셀 클래스 결정
const cellClass = mult(atk, def) > 1 ? 'bg-matchup-weak' : mult(atk, def) < 1 ? 'bg-matchup-resist' : ''
```

#### `guide/` — 공략 페이지 컴포넌트

| 파일 | 역할 |
|---|---|
| `GuidePageLayout.tsx` | 공략 페이지 2컬럼 레이아웃 + 우측 sticky 목차(TOC). h2 자동 감지, IntersectionObserver 현재 섹션 하이라이트, smooth scroll |
| `GuideCard.tsx` | 공략 목록 카드 (아이콘 + 카테고리 배지 + 제목 + 요약) |
| `GuideTable.tsx` | 공략용 반응형 테이블. 모바일에서 `overflow-x-auto` 가로 스크롤 |
| `PokemonLink.tsx` | 인라인 스프라이트 + 이름 링크. 공략 텍스트 내 포켓몬 참조에 사용 |
| `MoveLink.tsx` | 기술명을 `/moves?move=<id>` 로 연결. 데이터에 없는 이름은 링크를 만들지 않고 글자만 남긴다 |

```tsx
// GuideTable.tsx
<div className="overflow-x-auto">
  <table className="min-w-full text-sm">
    <thead><tr>{headers.map((h) => <th key={h} className="whitespace-nowrap px-3 py-2">{h}</th>)}</tr></thead>
    <tbody>{rows.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j} className="px-3 py-2">{cell}</td>)}</tr>)}</tbody>
  </table>
</div>

// PokemonLink.tsx — 순수 인라인 링크 + 스프라이트만 vertical-align 으로 보정
// inline-flex 로 감싸면 스프라이트가 인라인 박스를 키워 링크 전체가 문장보다 위로 밀린다.
// align-middle 은 baseline + x-height/2 기준이라 한글에서 2.23px 처진다(실측).
<Link to={`/pokemon/${id}`} className="font-bold text-brand-red hover:underline">
  <img src={spriteUrl} className="mr-0.5 inline-block h-[2em] w-[2em] align-[-0.21em]" />
  {label ?? nameKo}
</Link>

// MoveLink.tsx — 기술명 → 기술 목록. 못 찾으면 링크를 만들지 않는다
const move = findMoveByName(name)
if (!move) return <>{text}</>
return <Link to={`/moves?move=${move.id}`}>{text}</Link>
```

#### `layout/` — 전체 레이아웃 컴포넌트

| 파일 | 역할 |
|---|---|
| `Layout.tsx` | `<Outlet>` + `sticky` 헤더(md 이상) + `fixed` 하단 탭바(md 미만). `ScrollRestoration` 포함 |
| `SiteHeader.tsx` | 상단 네비게이션. `sticky top-0 z-50 h-14` |
| `MobileTabBar.tsx` | 모바일 하단 탭 네비게이션 (홈/도감/공략/타입상성/기술머신/출현) |
| `Hero.tsx` | 히어로 섹션 (eyebrow + 제목 + 부제 + 이미지 + CTA) |
| `HeroCarousel.tsx` | Embla Carousel 기반 자동재생 히어로 캐러셀 |
| `RouteErrorBoundary.tsx` | 루트 `errorElement`. "Failed to fetch dynamically imported module" 감지 → `window.location.reload()` 자동 복구. `sessionStorage` 플래그로 무한 새로고침 방지 |

```tsx
// RouteErrorBoundary.tsx — 스테일 청크 자동 복구
const isChunkError = error?.message?.includes('Failed to fetch dynamically imported module')
if (isChunkError && !sessionStorage.getItem('chunk-reload')) {
  sessionStorage.setItem('chunk-reload', '1')
  window.location.reload()
}
```

### 3-7. 페이지 (`src/pages/`)

26개 파일이 평평하게 쌓여 찾기 어려워 역할별 폴더로 나눴다. 페이지 간 상호 참조는 없고
`router.tsx`만 이들을 참조한다.

| 파일 | 경로 | 특이사항 |
|---|---|---|
| `HomePage.tsx` | `/` | 히어로 캐러셀 + 공략 카드 그리드 |
| `pokedex/PokedexPage.tsx` | `/pokedex` | 타입·세대 필터 + 검색. 카드 1,082장을 한 번에 렌더하므로 입력 반응성 처리가 들어가 있다(아래 참고) |
| `pokedex/PokemonDetailPage.tsx` | `/pokemon/:id` | 아트워크·종족값·타입 상성·진화·기술·출현. 진화 가족 2명 이상 시 `EvolutionMoveComparison` 자동 표시 (병렬 학습셋 로드) |
| `reference/TypeChartPage.tsx` | `/types` | `TypeChartGrid` + `TypeCalculator` + `TypeOffense` |
| `reference/MovesPage.tsx` | `/moves` | 전 세대 기술 목록. `?move=<id>` 로 특정 기술을 검색·펼침 상태로 연다 |
| `reference/TmListPage.tsx` | `/tm` | 세대·버전별 TM/HM 목록. `tm-index.generated.ts`(3.3MB) lazy 로드 |
| `reference/EncounterPage.tsx` | `/encounter` | 세대·버전별 야생 출현 목록 |
| `reference/NaturesPage.tsx` | `/natures` | 25종 성격 5×5 매트릭스 + 전체 표 |
| `reference/AbilitiesPage.tsx` | `/abilities` | 특성 313종 세대 필터·검색 |
| `reference/ItemsPage.tsx` | `/items` | 진화 아이템·배틀 지니기 탭 분리 |
| `guides/GuideListPage.tsx` | `/guides` | `SAMPLE_GUIDES` 기반 공략 카드 목록 |
| `guides/GuideDetailPage.tsx` | `/guides/:slug` | 마크다운 기반 범용 공략 (현재 모든 공략이 정적 라우트라 폴백 역할) |
| `guides/PokemonRedStoryGuidePage.tsx` | `/guides/pokemon-red-story` | 레드버전 스토리 공략 |
| `guides/PokemonRedEvolutionGuidePage.tsx` | `/guides/pokemon-red-evolution` | 1세대 진화 타이밍 가이드 |
| `guides/PokemonFireredStoryGuidePage.tsx` | `/guides/pokemon-firered-story` | 파이어레드 스토리 공략 (돌·교환 진화 전체 포함) |
| `guides/PokemonFireredSeviiIslandsGuidePage.tsx` | `/guides/pokemon-firered-sevii-islands` | 파이어레드 일곱섬 클리어 후 공략 |
| `guides/PokemonGoldStoryGuidePage.tsx` | `/guides/pokemon-gold-story` | 골드버전 스토리 공략 |
| `guides/PokemonHeartgoldStoryGuidePage.tsx` | `/guides/pokemon-heartgold-story` | 하트골드버전 스토리 공략 |
| `guides/PokemonHeartgoldWalkthroughGuidePage.tsx` | `/guides/pokemon-heartgold-walkthrough` | 하트골드 최고효율 진행 공략 (11 Phase) |
| `guides/PokemonHeartgoldStonesGuidePage.tsx` | `/guides/pokemon-heartgold-stones` | 하트골드 진화의 돌 9종 입수 |
| `guides/PokemonHeartgoldMovesGuidePage.tsx` | `/guides/pokemon-heartgold-moves` | 하트골드 기술 관리 (TM 보존·HM 배정·포획 요원) |
| `guides/PokemonHGSSCollectionGuidePage.tsx` | `/guides/pokemon-hgss-collection` | HGSS·기라티나PT 수집 가이드. 마크다운 원문을 `?raw` 임포트 후 런타임 파싱 |
| `guides/PokemonUnownGuidePage.tsx` | `/guides/pokemon-unown` | 안농 28종 종합 (폼 전체·세대별 등장·출현 조건) |
| `guides/PokemonEmeraldStoryGuidePage.tsx` | `/guides/pokemon-emerald-story` | 에메랄드버전 공략 (스타팅 탭 전환) |
| `guides/PokemonPlatinumStoryGuidePage.tsx` | `/guides/pokemon-platinum-story` | 플래티넘버전 공략 (스타팅 탭 전환) |
| `guides/PokemonPlatinumProgressGuidePage.tsx` | `/guides/pokemon-platinum-progress` | 플래티넘 진행 조건 가이드 |

```tsx
// 공략 페이지 공통 패턴 — HowBadge + GuideTable + MoveLink
function HowBadge({ how }: { how: string }) {
  if (how.startsWith('Lv.')) return <span className="rounded bg-green-100 px-1.5 py-0.5 text-xxs font-bold text-green-700">{how}</span>
  if (how.startsWith('TM')) return <span className="rounded bg-blue-100 px-1.5 py-0.5 text-xxs font-bold text-blue-700">{how}</span>
  if (how.startsWith('HM')) return <span className="rounded bg-red-100 px-1.5 py-0.5 text-xxs font-bold text-red-700">{how}</span>
}
<GuideTable
  headers={['기술', '타입', '습득', '용도']}
  rows={m.moveTable.map((t) => {
    const mv = findMoveByName(t.move)
    return [
      <MoveLink key={`${t.move}-link`} name={t.move} />,          // 기술 목록으로 연결
      mv ? <TypeBadge key={t.move} type={mv.type} size="sm" /> : '—',
      <HowBadge key={t.move} how={t.how} />,
      t.usage,
    ]
  })}
/>
```

**PokedexPage — 검색 입력 반응성**

검색어를 URL 쿼리에 직접 물리면 한 글자마다 라우터가 갱신되고 카드 1,082장이 통째로
다시 그려진다. 입력은 로컬 state 로 즉시 받고, 무거운 일만 뒤로 미룬다.

```tsx
const [inputValue, setInputValue] = useState(urlQuery)
const deferredQuery = useDeferredValue(inputValue)      // 목록 필터링을 비긴급 작업으로

useEffect(() => {                                        // 타이핑이 멎으면 그때 주소에 반영
  if (inputValue === urlQuery) return
  const timer = setTimeout(() => updateParams({ q: inputValue }), 300)
  return () => clearTimeout(timer)
}, [inputValue, urlQuery])

const cardState = useMemo(                               // 매번 새 객체면 카드 memo가 깨진다
  () => ({ backTo: location.pathname + location.search }),
  [location.pathname, location.search],
)
```

`PokemonCard`는 `memo`로 감싸져 있다. 위 `cardState`처럼 참조가 고정된 props를 넘겨야
효과가 있다.

---

## 4. 데이터 흐름

### 포켓몬 데이터 생성 파이프라인

```
PokeAPI (10만+ 요청)
+ 포켓몬갤러리 위키 스크래핑
        ↓
scripts/fetch-pokedex.mjs
        ↓
src/data/pokedex/pokedex.generated.ts     ← ALL_POKEMON, ALL_EVOLUTION_LINES
src/data/moves/all-moves.generated.ts     ← ALL_MOVES
src/data/moves/by-id/{id}.generated.ts   ← 포켓몬별 학습셋 (1082개)
        ↓
scripts/build-tm-index.mjs
        ↓
src/data/moves/tm-index.generated.ts     ← TM/HM 역인덱스
```

> 생성에 수 시간 소요. 포켓몬 추가·필드 변경이 없으면 재실행 불필요.

### 런타임 데이터 접근 패턴

```
ALL_POKEMON
    ↓ pokemon.sample.ts (jsDelivr URL 변환 + findSamplePokemon/findEvolutionLine)
    ↓
컴포넌트 (SpriteImage, PokemonCard, EvolutionTree 등)

by-id/{id}.generated.ts
    ↓ import.meta.glob + 동적 import (loadLearnsets)
    ↓
MoveList (상세 페이지 진입 시에만 해당 1개 파일 로드)

tm-index.generated.ts
    ↓ lazy route로 TmListPage 자체를 분리
    ↓
TmListPage (해당 페이지 진입 시에만 3.3MB 로드)
```

---

## 5. 대용량 데이터 처리 기법

| 기법 | 적용 위치 | 목적 |
|---|---|---|
| Lazy route | 모든 페이지 | 초기 번들 분리. 진입 시에만 청크 로드 |
| `import.meta.glob` + 동적 import | `moves.sample.ts` | 학습셋 1082개 파일 → 상세 페이지 진입 시 1개만 로드 |
| Lazy route (TmListPage) | `router.tsx` | `tm-index.generated.ts`(3.3MB)를 TM 페이지 전용 청크로 분리 |
| `Map` O(1) 조회 | `TmListPage`, `moves.sample.ts` | 배열 선형 탐색 대신 모듈 레벨 Map으로 즉시 조회 |
| `// @ts-nocheck` + 별도 타입 파일 | `tm-index.generated.ts` | TS2590 (union type too complex) 컴파일 오류 우회 |

---

## 6. 이미지 CDN

모든 포켓몬 스프라이트·아트워크는 PokeAPI GitHub 저장소를 jsDelivr CDN으로 서빙한다.

```
원본 생성 URL:  https://cdn.statically.io/gh/PokeAPI/sprites/master/…
실제 요청 URL:  https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/…
```

변환 위치: `src/data/sample/pokemon.sample.ts`의 `fixSpriteUrl()` — `SAMPLE_POKEMON` export 시 한 번에 적용.
`SpriteImage.tsx`에도 동일 변환이 fallback으로 내장되어 있어, `SAMPLE_POKEMON`을 거치지 않는 경로도 커버된다.

---

## 7. 라우트 구조 및 규칙

정적 전용 라우트(공략 페이지)는 동적 `:slug` 라우트보다 **앞에** 선언해야 React Router가 올바르게 매칭한다.

```
/                          HomePage
/pokedex                   PokedexPage
/pokemon/:id               PokemonDetailPage
/types                     TypeChartPage
/tm                        TmListPage
/encounter                 EncounterPage
/guides                    GuideListPage
/guides/pokemon-gold-story          PokemonGoldStoryGuidePage     ← 정적 (먼저)
/guides/pokemon-red-story           PokemonRedStoryGuidePage
/guides/pokemon-firered-story       PokemonFireredStoryGuidePage
/guides/pokemon-firered-sevii-islands  PokemonFireredSeviiIslandsGuidePage
/guides/pokemon-red-evolution       PokemonRedEvolutionGuidePage
/guides/pokemon-heartgold-story         PokemonHeartgoldStoryGuidePage
/guides/pokemon-heartgold-walkthrough   PokemonHeartgoldWalkthroughGuidePage
/guides/pokemon-emerald-story           PokemonEmeraldStoryGuidePage
/guides/pokemon-platinum-story          PokemonPlatinumStoryGuidePage
/guides/pokemon-platinum-progress       PokemonPlatinumProgressGuidePage
/guides/:slug              GuideDetailPage                        ← 동적 (마지막)
/dev/showcase              ShowcasePage                           ← 개발용
```

---

## 8. 배포

- **플랫폼**: Vercel (자동 배포, main 브랜치 push 트리거)
- **SPA fallback**: `vercel.json`의 `rewrites`로 모든 경로를 `/index.html`로 리다이렉트
- **스테일 청크 복구**: 새 배포 후 Vite 청크 해시가 바뀌어 구 청크를 로드하지 못할 때 `RouteErrorBoundary`가 오류를 감지해 자동 새로고침 (`router.tsx`의 루트 `errorElement`)
- **환경 변수**: 없음 (모든 데이터는 빌드 타임 정적 파일)

---

## 9. 스크립트 명령어

```bash
npm run dev             # Vite 개발 서버 (HMR)
npm run build           # tsc 타입 체크 + Vite 프로덕션 빌드
npm run lint            # oxlint 린트 (error·warning 0 유지)
npm run preview         # 빌드 결과 로컬 미리보기
npm run fetch:pokedex   # PokeAPI + 위키 스크래핑 → 생성 파일 (수 시간 소요)
npm run build:tm-index          # by-id/*.generated.ts → tm-index.generated.ts 생성
npm run build:move-index        # by-id/*.generated.ts → move-index.generated.ts (기술 → 학습 포켓몬)
npm run build:move-descriptions # PokeAPI 기술 한국어 설명 수집 → move-descriptions.generated.ts 생성
npm run build:abilities         # PokeAPI 특성 한국어 데이터 → abilities.generated.ts 생성
```

`scripts/build-items.mjs`(items.generated.ts 생성)는 npm script 로 등록돼 있지 않다.
필요하면 `node scripts/build-items.mjs` 로 직접 실행한다.

---

설정 파일 및 패키지별 상세 역할은 [PROJECT.md](./PROJECT.md)를 참조한다.
