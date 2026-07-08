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
│   ├── fetch-pokedex.mjs      # PokeAPI + 포켓몬갤러리 위키 스크래핑 → 생성 파일 출력
│   └── build-tm-index.mjs     # by-id/*.generated.ts → tm-index.generated.ts 역인덱스 생성
├── src/
│   ├── main.tsx               # React 진입점, StrictMode + RouterProvider
│   ├── router.tsx             # 전체 라우트 정의 (모두 lazy)
│   ├── styles/
│   │   └── index.css          # Tailwind 진입점 + @theme 디자인 토큰 전체
│   ├── types/                 # TypeScript 인터페이스
│   ├── lib/                   # 순수 유틸 함수
│   ├── data/                  # 정적 데이터 (스크립트 생성 + 수작업)
│   ├── components/            # UI 컴포넌트
│   ├── pages/                 # 라우트별 페이지
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

### 3-4. 유틸 라이브러리 (`src/lib/`)

| 파일 | 역할 |
|---|---|
| `cn.ts` | `clsx` + `tailwind-merge` 합성. 모든 컴포넌트에서 클래스 합성 시 사용 |
| `typeChart.ts` | 18타입 `CHART`, `mult(atk, def)`, `profile(defTypes)`, `COLOR`, `TYPE_BG_CLASS` 등. 타입 상성 로직 전체 |
| `linkifyPokemonNames.tsx` | 텍스트 속 포켓몬 이름 → `<PokemonLink>` 자동 변환. 이름 길이 내림차순 매칭 |
| `guideCategory.ts` | 공략 카테고리(입문/공략/대전/포획/진화) → 배지·배너 CSS 클래스 매핑 |
| `statColors.ts` | 종족값 6종 → `bg-stat-*` 클래스 매핑 |

### 3-5. 데이터 (`src/data/`)

#### 생성 파일 (직접 수정 금지)

| 파일 | 크기 | 내용 |
|---|---|---|
| `pokedex/pokedex.generated.ts` | ~2.5 MB | `ALL_POKEMON`(1082종+), `ALL_EVOLUTION_LINES`. `scripts/fetch-pokedex.mjs`가 생성 |
| `moves/all-moves.generated.ts` | ~83 KB | `ALL_MOVES` 전체 기술 목록 |
| `moves/by-id/*.generated.ts` | 1082개 파일 | 포켓몬별 세대/버전별 학습셋. 라우트 진입 시 동적 import |
| `moves/tm-index.generated.ts` | ~3.3 MB | TM/HM → 배울 수 있는 포켓몬 ID 역인덱스. `scripts/build-tm-index.mjs`가 생성 |

#### 수작업 데이터 (`src/data/sample/`)

| 파일 | 내용 |
|---|---|
| `pokemon.sample.ts` | `SAMPLE_POKEMON` (= ALL_POKEMON에서 이미지 URL jsDelivr 변환 적용), `findSamplePokemon()`, `findEvolutionLine()` |
| `moves.sample.ts` | `loadLearnsets()` (lazy import 래퍼), `findMove()`, `MOVE_MAP` |
| `guides.sample.ts` | `SAMPLE_GUIDES` — 공략 목록 카드 데이터 |
| `pokemonRedStory.data.ts` | 레드버전 스토리 공략 데이터 |
| `pokemonFireredStory.data.ts` | 파이어레드 스토리 공략 데이터 (돌·교환 진화 전체 포함) |
| `pokemonFireredSeviiIslands.data.ts` | 파이어레드 일곱섬 클리어 후 공략 데이터 |
| `pokemonGoldStory.data.ts` | 골드버전 스토리 공략 데이터 |
| `pokemonHeartgoldStory.data.ts` | 하트골드버전 스토리 공략 데이터 |
| `pokemonEmeraldStory.data.ts` | 에메랄드버전 스토리 공략 데이터 (스타팅 3종 분기) |
| `pokemonPlatinumStory.data.ts` | 플래티넘버전 스토리 공략 데이터 (스타팅 3종 분기) |
| `pokemonRedEvolution.data.ts` | 1세대 돌·교환 진화 타이밍 가이드 데이터 |

### 3-6. 컴포넌트 (`src/components/`)

#### `ui/` — 범용 프리미티브

| 파일 | Radix | 역할 |
|---|---|---|
| `Button.tsx` | Slot | `variant`(primary/secondary/ghost), `size`, `asChild` 지원 |
| `Card.tsx` | Slot | 흰 배경 + `rounded-card` + `shadow-card`. `asChild`로 Link 합성 가능 |

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

#### `type-chart/` — 타입 상성 컴포넌트

| 파일 | 역할 |
|---|---|
| `TypeFilter.tsx` | Radix ToggleGroup 래핑. 단일/다중 타입 선택 |
| `TypeCalculator.tsx` | 방어 타입 조합 입력 → `profile()` 결과 실시간 표시 |
| `TypeChartGrid.tsx` | 18×18 전체 타입 상성 표. 공격·방어 타입 강조 |
| `TypeOffense.tsx` | 공격 타입 → 약점/반감 포켓몬 목록 |
| `TypePill.tsx` | 타입 상성 배율 표시 칩 (×2 / ×0.5 / ×0 / ×4 등) |

#### `guide/` — 공략 페이지 컴포넌트

| 파일 | 역할 |
|---|---|
| `GuidePageLayout.tsx` | 공략 페이지 2컬럼 레이아웃 + 우측 sticky 목차(TOC). h2 자동 감지, IntersectionObserver 현재 섹션 하이라이트, smooth scroll |
| `GuideCard.tsx` | 공략 목록 카드 (아이콘 + 카테고리 배지 + 제목 + 요약) |
| `GuideTable.tsx` | 공략용 반응형 테이블. 모바일에서 `overflow-x-auto` 가로 스크롤 |
| `PokemonLink.tsx` | 인라인 스프라이트 + 이름 링크 컴포넌트. 공략 텍스트 내 포켓몬 참조에 사용 |

#### `layout/` — 전체 레이아웃 컴포넌트

| 파일 | 역할 |
|---|---|
| `Layout.tsx` | `<Outlet>` + `sticky` 헤더(md 이상) + `fixed` 하단 탭바(md 미만). `ScrollRestoration` 포함 |
| `SiteHeader.tsx` | 상단 네비게이션. `sticky top-0 z-50 h-14` |
| `MobileTabBar.tsx` | 모바일 하단 탭 네비게이션 (홈/도감/공략/타입상성/기술머신/출현) |
| `Hero.tsx` | 히어로 섹션 (eyebrow + 제목 + 부제 + 이미지 + CTA) |
| `HeroCarousel.tsx` | Embla Carousel 기반 자동재생 히어로 캐러셀 |

### 3-7. 페이지 (`src/pages/`)

| 파일 | 경로 | 특이사항 |
|---|---|---|
| `HomePage.tsx` | `/` | 히어로 캐러셀 + 공략 카드 그리드 |
| `PokedexPage.tsx` | `/pokedex` | 타입·세대 필터 + 가상 스크롤 카드 목록 |
| `PokemonDetailPage.tsx` | `/pokemon/:id` | 아트워크·종족값·타입 상성·진화·기술·출현. `SAMPLE_POKEMON`으로 탐색 |
| `TypeChartPage.tsx` | `/types` | `TypeChartGrid` + `TypeCalculator` + `TypeOffense` |
| `TmListPage.tsx` | `/tm` | 세대·버전별 TM/HM 목록. `tm-index.generated.ts`(3.3MB) lazy 로드. `SAMPLE_POKEMON` 사용 |
| `EncounterPage.tsx` | `/encounter` | 세대·버전별 야생 출현 목록. `SAMPLE_POKEMON` 사용 |
| `GuideListPage.tsx` | `/guides` | `SAMPLE_GUIDES` 기반 공략 카드 목록. `Link`로 Ctrl+클릭 새탭 지원 |
| `GuideDetailPage.tsx` | `/guides/:slug` | 마크다운 기반 범용 공략 (현재 미사용, 정적 라우트 우선) |
| `PokemonRedStoryGuidePage.tsx` | `/guides/pokemon-red-story` | 레드버전 스토리 공략 |
| `PokemonFireredStoryGuidePage.tsx` | `/guides/pokemon-firered-story` | 파이어레드 스토리 공략 (돌·교환 진화 전체 포함) |
| `PokemonFireredSeviiIslandsGuidePage.tsx` | `/guides/pokemon-firered-sevii-islands` | 파이어레드 일곱섬 클리어 후 공략 |
| `PokemonGoldStoryGuidePage.tsx` | `/guides/pokemon-gold-story` | 골드버전 스토리 공략 |
| `PokemonHeartgoldStoryGuidePage.tsx` | `/guides/pokemon-heartgold-story` | 하트골드버전 스토리 공략 |
| `PokemonEmeraldStoryGuidePage.tsx` | `/guides/pokemon-emerald-story` | 에메랄드버전 공략 (스타팅 탭 전환) |
| `PokemonPlatinumStoryGuidePage.tsx` | `/guides/pokemon-platinum-story` | 플래티넘버전 공략 (스타팅 탭 전환) |
| `PokemonRedEvolutionGuidePage.tsx` | `/guides/pokemon-red-evolution` | 1세대 진화 타이밍 가이드 |

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
/guides/pokemon-heartgold-story     PokemonHeartgoldStoryGuidePage
/guides/pokemon-emerald-story       PokemonEmeraldStoryGuidePage
/guides/pokemon-platinum-story      PokemonPlatinumStoryGuidePage
/guides/:slug              GuideDetailPage                        ← 동적 (마지막)
/dev/showcase              ShowcasePage                           ← 개발용
```

---

## 8. 배포

- **플랫폼**: Vercel (자동 배포, main 브랜치 push 트리거)
- **SPA fallback**: `vercel.json`의 `rewrites`로 모든 경로를 `/index.html`로 리다이렉트
- **환경 변수**: 없음 (모든 데이터는 빌드 타임 정적 파일)

---

## 9. 스크립트 명령어

```bash
npm run dev             # Vite 개발 서버 (HMR)
npm run build           # tsc 타입 체크 + Vite 프로덕션 빌드
npm run lint            # oxlint 린트 (error·warning 0 유지)
npm run preview         # 빌드 결과 로컬 미리보기
npm run fetch:pokedex   # PokeAPI + 위키 스크래핑 → 생성 파일 (수 시간 소요)
npm run build:tm-index  # by-id/*.generated.ts → tm-index.generated.ts 생성
```
