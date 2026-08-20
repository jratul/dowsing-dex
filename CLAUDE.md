# 다우징덱스 (Dowsing Dex) — 개발 가이드

포켓몬 한국어 팬 도감 사이트. 1~9세대 전 포켓몬의 도감 정보, 타입 상성, 기술 학습셋, 공략을 제공한다.

> 파일별 기술 상세 → [TECH.md](./TECH.md) | 설정·패키지 역할 → [PROJECT.md](./PROJECT.md)

## 기술 스택

- **프레임워크**: Vite + React 19 + TypeScript
- **라우팅**: React Router v7 (createBrowserRouter)
- **스타일**: Tailwind CSS v4 (`@tailwindcss/vite` 플러그인, `src/styles/index.css`에 `@theme` 블록으로 토큰 정의)
- **UI 프리미티브**: Radix UI (Tabs, ToggleGroup, Slot)
- **클래스 합성**: `clsx` + `tailwind-merge` → `lib/cn.ts`의 `cn()`; variant는 `cva` (class-variance-authority)
- **린터**: oxlint (`npm run lint`)

## 주요 명령어

```bash
npm run dev                    # 개발 서버 (Vite HMR)
npm run build                  # 프로덕션 빌드
npm run lint                   # 린트 (oxlint)
npm run fetch:pokedex          # PokeAPI + 한국어 위키에서 데이터 생성 (수 시간 소요)
npm run build:tm-index         # by-id/*.generated.ts → tm-index.generated.ts 역인덱스 생성
npm run build:move-index       # by-id/*.generated.ts → move-index.generated.ts (기술 → 학습 포켓몬)
npm run build:move-descriptions  # PokeAPI에서 기술 한국어 설명 수집 → move-descriptions.generated.ts
npm run build:abilities        # PokeAPI에서 특성 한국어 데이터 수집 → abilities.generated.ts
```

> `scripts/build-items.mjs`(items.generated.ts 생성)는 npm script 미등록 상태다.
> 필요하면 `node scripts/build-items.mjs` 로 직접 실행한다.

## 폴더 구조

```
src/
  components/
    ui/           # Button, Card
    pokemon/      # TypeBadge, PokemonCard, SpriteImage, StatChart, MoveList, TypeDefense,
                  #   EncounterLocationList, EvolutionTree, EvolutionMoveComparison, GenerationFilter
    type-chart/   # TypeFilter, TypeCalculator, TypeChartGrid, TypeOffense, TypePill
    guide/        # GuideCard, GuideTable, GuidePageLayout, PokemonLink, MoveLink
    layout/       # SiteHeader(모바일 햄버거 메뉴 포함), Layout, Hero, HeroCarousel, RouteErrorBoundary
  pages/          # 라우트별 페이지 컴포넌트
    HomePage.tsx  # 홈만 최상위
    pokedex/      # PokedexPage, PokemonDetailPage
    reference/    # TypeChartPage, MovesPage, TmListPage, EncounterPage, NaturesPage, AbilitiesPage, ItemsPage
    guides/       # GuideListPage, GuideDetailPage, Pokemon*GuidePage (13종)
  lib/
    cn.ts                  # clsx + tailwind-merge 헬퍼
    typeChart.ts           # 18타입 CHART, mult(), profile(), COLOR, TYPE_BG_CLASS
    guideCategory.ts       # 공략 카테고리 스타일 매핑
    linkifyPokemonNames.tsx # 텍스트 속 포켓몬 이름 → PokemonLink 자동 변환
  types/          # TypeScript 인터페이스 (pokemon.ts, move.ts, guide.ts, type-chart.ts)
  data/
    pokedex/pokedex.generated.ts      # ALL_POKEMON (1082종+), ALL_EVOLUTION_LINES — scripts/ 자동 생성
    moves/all-moves.generated.ts      # ALL_MOVES 목록
    moves/by-id/*.generated.ts        # 포켓몬별 세대/버전별 학습셋 (1082개 파일, lazy 로드)
    moves/tm-index.generated.ts       # TM/HM 역인덱스 (기술머신 → 배울 수 있는 포켓몬 ID 목록)
    moves/move-index.generated.ts     # 기술 → 학습 포켓몬 역인덱스 (레벨업/머신/가르침, MovesPage 사용)
    moves/move-descriptions.generated.ts  # 기술 한국어 설명 (727종, build-move-descriptions.mjs 생성)
    natures.data.ts                   # 25개 성격 정적 데이터 (NaturesPage 사용)
    abilities.generated.ts            # 특성 313종 (build-abilities.mjs 생성)
    items.generated.ts                # 진화/배틀 아이템 (build-items.mjs 생성)
    guides/hgss-collection.md         # HGSS·기라티나PT 수집 가이드 원문 (?raw 임포트 후 런타임 파싱)
    sample/                           # 도우미 함수 (findSamplePokemon, findMove 등) + 공략 데이터
      flavorTexts.ts                  # PokeAPI 도감 설명 온디맨드 fetch 유틸
      pokemonHeartgoldWalkthrough.data.ts  # 하트골드 최고효율 진행 공략 데이터 (11 Phase)
  router.tsx      # 라우트 정의
  styles/index.css  # @theme 디자인 토큰
scripts/
  fetch-pokedex.mjs           # PokeAPI + 한국어 위키 스크래핑 → 생성 파일 출력
  build-tm-index.mjs          # by-id/*.generated.ts 파싱 → tm-index.generated.ts 출력
  build-move-descriptions.mjs # PokeAPI 기술 한국어 설명 수집 → move-descriptions.generated.ts 출력
  build-abilities.mjs         # PokeAPI 특성 한국어 데이터 수집 → abilities.generated.ts 출력
  build-items.mjs             # PokeAPI 진화/배틀 아이템 데이터 수집 → items.generated.ts 출력
```

## 데이터 생성 흐름

1. `scripts/fetch-pokedex.mjs` 실행 → PokeAPI에서 포켓몬·기술·특성 데이터를 받고, 포켓몬 갤러리 한국어 위키(pokemon.fandom.com/ko)에서 출현 장소 데이터를 스크래핑
2. `src/data/pokedex/pokedex.generated.ts` 및 `src/data/moves/` 하위 파일 생성
3. 생성된 파일은 직접 수정하지 않는다 (`// 이 파일은 scripts/ 로 생성됩니다. 직접 수정하지 마세요.` 주석)

**데이터 생성은 10만 건 이상의 PokeAPI 요청 + 위키 스크래핑을 포함하므로 수 시간이 걸린다.** 포켓몬 추가/필드 변경이 없으면 재실행 불필요.

## 라우트 구조

| 경로 | 컴포넌트 | 비고 |
|---|---|---|
| `/` | HomePage | 대표 포켓몬 캐러셀 |
| `/pokedex` | PokedexPage | 타입·세대 필터 + 전체 목록 |
| `/pokemon/:id` | PokemonDetailPage | 도감 상세 (스탯·기술·출현) |
| `/types` | TypeChartPage | 18×18 타입 상성표 + 계산기 |
| `/tm` | TmListPage | 세대·버전별 TM/HM 목록 + 배울 수 있는 포켓몬 |
| `/encounter` | EncounterPage | 세대·버전별 야생 출현 및 포획 불가 포켓몬 |
| `/natures` | NaturesPage | 25종 성격 5×5 매트릭스 + 전체 표 |
| `/abilities` | AbilitiesPage | 특성 313종 세대 필터·검색 |
| `/items` | ItemsPage | 진화 아이템·배틀 지니기 탭 분리 |
| `/guides` | GuideListPage | 공략 카드 목록 |
| `/guides/pokemon-gold-story` | PokemonGoldStoryGuidePage | 정적 전용 라우트 (표/이미지 중심) |
| `/guides/pokemon-red-story` | PokemonRedStoryGuidePage | 정적 전용 라우트 |
| `/guides/pokemon-firered-story` | PokemonFireredStoryGuidePage | 정적 전용 라우트 |
| `/guides/pokemon-firered-sevii-islands` | PokemonFireredSeviiIslandsGuidePage | 정적 전용 라우트 |
| `/guides/pokemon-red-evolution` | PokemonRedEvolutionGuidePage | 정적 전용 라우트 |
| `/guides/pokemon-heartgold-story` | PokemonHeartgoldStoryGuidePage | 정적 전용 라우트 |
| `/guides/pokemon-heartgold-walkthrough` | PokemonHeartgoldWalkthroughGuidePage | 정적 전용 라우트 |
| `/guides/pokemon-heartgold-stones` | PokemonHeartgoldStonesGuidePage | 정적 전용 라우트 |
| `/guides/pokemon-hgss-collection` | PokemonHGSSCollectionGuidePage | 정적 전용 라우트 (마크다운 원문 파싱) |
| `/guides/pokemon-heartgold-moves` | PokemonHeartgoldMovesGuidePage | 정적 전용 라우트 (TM/HM 관리) |
| `/guides/pokemon-unown` | PokemonUnownGuidePage | 정적 전용 라우트 (안농 28종 종합) |
| `/guides/pokemon-emerald-story` | PokemonEmeraldStoryGuidePage | 정적 전용 라우트 |
| `/guides/pokemon-platinum-story` | PokemonPlatinumStoryGuidePage | 정적 전용 라우트 |
| `/guides/pokemon-platinum-progress` | PokemonPlatinumProgressGuidePage | 정적 전용 라우트 |
| `/guides/:slug` | GuideDetailPage | 마크다운 기반 범용 공략 |

> 정적 전용 라우트는 `:slug` 동적 라우트 **앞에** 선언해야 React Router가 올바르게 매칭한다.

## 페이지 콘텐츠 너비 패턴

모든 페이지·가이드 최상위 컨테이너는 아래 클래스를 사용한다:

```tsx
<div className="mx-auto w-full lg:w-4/5 px-4 py-6">
```

모바일은 full width, lg(1024px) 이상에서 부모의 80%로 중앙 정렬된다.

## 배포 오류 — 스테일 청크 자동 복구

Vercel에 새 버전을 배포하면 Vite 청크의 파일명(content hash)이 바뀐다.
구 버전 앱을 열어둔 사용자가 lazy route에 진입하면 사라진 청크를 요청해
"Failed to fetch dynamically imported module" 오류가 발생한다.

`src/components/layout/RouteErrorBoundary.tsx`에서 이 오류를 감지해
`window.location.reload()`로 자동 복구한다. `sessionStorage` 플래그로
무한 새로고침을 방지한다. 루트 라우트에 `errorElement: <RouteErrorBoundary />`로
등록돼 있다 (`router.tsx`).

## 대용량 데이터 처리 패턴

- **학습셋 lazy 로드**: `by-id/*.generated.ts` 1082개 파일은 `import.meta.glob`으로 등록하고, 상세 페이지 진입 시에만 해당 포켓몬 1개 파일을 동적 import한다 (`data/sample/moves.sample.ts`의 `loadLearnsets()`).
- **TM 역인덱스**: `tm-index.generated.ts`(3.3MB)는 `TmListPage`를 lazy route로 처리해 해당 페이지에서만 로드. `// @ts-nocheck` + 별도 타입 파일(`types/move.ts`의 `TmEntry`)로 TS2590(union type too complex) 우회.
- **Map 활용**: 배열 기반 선형 탐색 대신 모듈 레벨 `Map`으로 O(1) 조회. `TmListPage`의 `MOVE_MAP`/`POKEMON_MAP`, `moves.sample.ts`의 `MOVE_MAP`이 그 예.

## 디자인 토큰

모든 색상·라운드·그림자는 `src/styles/index.css`의 `@theme` 블록에 CSS 변수로 정의되어 있다. Tailwind v4는 이 변수를 자동으로 유틸리티 클래스로 노출한다.

- 색상: `--color-brand-red`, `--color-ink`, `--color-ink-muted`, `--color-ink-faint`, `--color-border`, `--color-border-strong`, `--color-surface-hover`
- 18타입: `--color-type-{normal|fire|water|...}`
- 공략 카테고리: `--color-category-{intro|strategy|battle|capture|evolution}`
- 종족값: `--color-stat-{hp|attack|defense|special-attack|special-defense|speed}`
- 레이아웃: `--radius-card`, `--radius-button`, `--radius-chip`, `--shadow-card`
- 폰트: `--text-xxs` (10px) — Tailwind 기본 `text-xs`(12px)보다 작은 라벨용

임의값(`text-[10px]`, `h-[300px]` 등) 대신 반드시 위 토큰 기반 유틸리티 클래스를 사용한다.

## 포켓몬 한국어 명칭 규칙

한국 정식 발매판 한글 명칭을 사용한다. 일본어 음역 사용 금지.

호연·신오·하나·칼로스·알로라·가라르·팔데아는 이미 정식 한글 명칭.

### WORD.md — 용어 사전 (필수 참조)

**공략·설명에 포켓몬 명칭·지역명·NPC명·기술명을 쓰기 전에 반드시 [`WORD.md`](./WORD.md)를 먼저 확인한다.**

- 사전에 없는 명칭은 생성 데이터(`pokedex.generated.ts`의 `nameKo`/`location`, `all-moves.generated.ts`의 `nameKo`)를 grep으로 직접 검증한 뒤 사용한다.
- 실수가 발생하면 즉시 `WORD.md`에 추가한다 — 같은 실수를 두 번 허용하지 않는다.
- 영어 원문·일본어 음역·비공식 번역을 추측으로 쓰지 않는다.

대표 오류 이력 (상세는 WORD.md 참조):

| 틀린 표기 | 올바른 표기 | 분류 |
|---|---|---|
| 칸토 | 관동 | 지역명 |
| 조토 | 성도 | 지역명 |
| 마운트실버 | 은빛산 | 지역명 |
| 야도리개 우물 | 야돈우물 | 지역명 |
| 소용돌이 섬 | 소용돌이섬 | 지역명 |
| 쌍섬 | 쌍둥이섬 | 지역명 |
| 쌍둥이섬 | 진청시티 (Cianwood City) | 지역명 |
| 종각탑 | 방울탑 | 지역명 |
| 황금빛시티 | 금빛시티 | 지역명 |
| 에크루테크 | 인주시티 (Ecruteak City) | 지역명 |
| 마호가니마을 | 황토마을 (Mahogany Town) | 지역명 |
| 진영 | 비상 (Falkner) | 관장명 — 도라지체육관 1관 |
| 조약배지, 비상배지 | 윙배지 | 배지명 (성도 1관) |
| 벌레배지 | 인섹트배지 | 배지명 (성도 2관) |
| 플레인배지 | 레귤러배지 | 배지명 (성도 3관) |
| 안개배지 | 팬텀배지 | 배지명 (성도 4관) |
| 폭풍배지 | 쇼크배지 | 배지명 (성도 5관) |
| 광물배지 | 스틸배지 | 배지명 (성도 6관) |
| 서리배지 | 아이스배지 | 배지명 (성도 7관) |
| 오름배지 | 라이징배지 | 배지명 (성도 8관) |
| 에스피온 | 에브이 (#196) | 포켓몬명 |
| 하리케인 | 무장조 (#227) | 포켓몬명 |
| 스타미 | 아쿠스타 (#121) | 포켓몬명 |
| 빠오 | 메꾸리 (#221) | 포켓몬명 |
| 드래피어 | 신뇽 (#148) | 포켓몬명 |
| 드릴부리 | 회전부리 | 기술명 (Drill Peck) |
| 클로즈컴뱃/닫기 | 인파이트 | 기술명 |
| 빌 | 이수재 | NPC명 |

## 공략 본문의 링크 규칙 — PokemonLink / MoveLink

공략에 나오는 **포켓몬 이름과 기술 이름은 모두 링크**로 만든다.

```tsx
<PokemonLink id={157} />              // → /pokemon/157, 스프라이트 + 이름
<MoveLink name="화염방사" />           // → /moves?move=53, 해당 기술을 펼친 상태로 연다
```

- `MoveLink`는 `findMoveByName()`으로 기술을 찾고, **데이터에 없는 이름은 링크를 만들지 않고
  글자만 남긴다.** 덕분에 비공식 기술명이 링크 누락으로 드러난다 — 공략을 추가한 뒤
  기술명이 링크가 안 걸렸다면 표기가 틀렸다는 신호다.
- `MovesPage`는 `?move=<id>` 쿼리를 받아 그 기술을 검색·펼침 상태로 연다. 목록이 797종이라
  링크만으로는 찾을 수 없기 때문이다.
- 큰 스프라이트(`SpriteImage`) 옆에 `PokemonLink`를 같이 두지 않는다. 스프라이트가 두 번
  노출된다. 둘 중 하나만 쓰되, 본문 안에서는 `PokemonLink` 하나로 충분하다.

### 스프라이트 수직 정렬 (건드리기 전에 읽을 것)

`PokemonLink`의 스프라이트는 `2em` 크기에 `vertical-align: -0.21em`으로 맞춰져 있다.

- `align-middle`은 "요소 중심을 텍스트 중심에" 맞추는 게 아니라 **"baseline + x-height/2"**에
  맞춘다. x-height는 라틴 소문자 기준이라 한글에서는 글자 중심보다 낮게 잡혀 스프라이트가
  아래로 처진다(실측 2.23px).
- 실측한 한글 텍스트의 시각적 중심은 **baseline 위 0.457em**이다. 따라서
  `vertical-align = 0.457em - (스프라이트 크기 / 2)`. 크기를 바꾸면 이 식으로 다시 구한다.
- 크기·정렬을 모두 `em`으로 두면 폰트 크기가 다른 사용처에서도 같은 비율로 맞는다.

### 목록 항목 높이 — leading-loose + min-h

스프라이트가 들어간 줄만 높아져 목록 간격이 들쭉날쭉해지는 것을 막는다.

- `leading-loose`(=2.0)는 스프라이트 크기(`2em`)와 정확히 같아, 폰트 크기와 무관하게
  줄 상자 안에 스프라이트가 들어간다. 여러 줄로 접히는 항목까지 균일해진다.
- 한 줄짜리 항목은 `min-h-7`(text-sm) / `min-h-6`(text-xs)로 최소 높이를 함께 보장한다.
- 마커(`▸` `✓` 번호)는 `self-start` + `leading-7`/`leading-6`으로 첫 줄 중앙에 고정한다.

## 타입 상성 로직

`src/lib/typeChart.ts`에 18타입 전체 `CHART`, `mult(atk, def)`, `profile(defTypes)` 함수가 있다. `TypeDefense`(상세 화면)와 `TypeCalculator`(계산기)가 `profile()` 하나를 공유한다.

## 공략 페이지 패턴

`GuideTable` + `PokemonLink` + `linkifyPokemonNames()` 조합으로 구성한다.

- `linkifyPokemonNames(text, nameToId)`: 텍스트 내 포켓몬 이름을 자동 링크로 변환. `nameToId`는 긴 이름이 먼저 매칭되도록 길이 내림차순 정렬된 Map이어야 한다.
- 공략 전용 데이터는 `src/data/sample/` 하위에 별도 파일로 분리한다 (예: `pokemonGoldStory.data.ts`).
- 커스텀 레이아웃이 필요한 공략은 `src/pages/`에 전용 페이지 컴포넌트를 만들고 `router.tsx`에 정적 라우트로 등록한다.

### 공략 썸네일 이미지 (필수)

새 공략을 추가할 때는 **반드시** `guides.sample.ts`의 해당 공략에 `bannerImageUrl`을 추가한다.

- 이미지 파일은 `public/images/guides/` 에 저장한다 (예: `platinum-boxart.png`).
- 소스: Bulbapedia Archives(`https://archives.bulbagarden.net/wiki/File:XXX_EN_boxart.png`)에서 해당 게임 박스아트를 다운로드. File 페이지에서 원본 `media/upload/` URL 확인 후 `Invoke-WebRequest`로 저장.
- `bannerImageUrl` 값은 `/images/guides/파일명` 형식의 퍼블릭 경로.

### 공략 페이지 내 인게임 이미지 (권장)

커스텀 공략 페이지(`src/pages/Pokemon*GuidePage.tsx`)에는 해당 게임의 인게임 스크린샷을 추가한다.

- 마을·도시 스크린샷: `public/images/guides/{게임명}/` 하위에 저장 (예: `platinum/hearthome.png`).
- Bulbapedia Archives에서 `{CityName}_{버전약자}.png` 패턴으로 검색 (예: `Hearthome_City_Pt.png`).
- 페이지 상단 제목 아래에 가로 스크롤 갤러리로 삽입한다.

### 공략 페이지 내 이미지 표시 방식 (필수)

커스텀 공략 페이지에서 인게임 이미지를 표시할 때는 **자연 비율**을 유지한다.
`w-full`로 이미지를 옆으로 늘리거나 고정 높이 배너로 만들지 않는다.

```tsx
// ✅ 자연 비율 중앙 배치
<div className="flex justify-center bg-surface-hover p-2">
  <img src={imgUrl} alt="" className="max-h-56 w-auto max-w-full" />
</div>

// ❌ w-full로 강제 확장 금지
<img src={imgUrl} className="w-full h-48 object-cover" />
```

### 포켓몬별 기술 배치 moveTable — how 필드 + HowBadge (필수)

공략 데이터 파일(`src/data/sample/pokemon*.data.ts`)의 `MoveSetSection.moveTable` 인터페이스에는 반드시 `how` 필드를 포함한다:

```ts
moveTable: { move: string; how: string; usage: string }[]
```

`how` 값 규칙:
- 레벨업 습득: `'Lv.N'` (정확한 레벨 알면 숫자, 불명확하면 `'Lv.습득'`)
- 기술머신: `'TM26'` 형태 (번호 불명확하면 `'TM'`)
- 비전머신: `'HM03'` 형태
- 기술가르침 NPC: `'기술가르침'`
- 번식기술: `'번식기술'`

공략 페이지 컴포넌트(`src/pages/Pokemon*GuidePage.tsx`)에는 HowBadge 함수를 추가하고 기술 배치 GuideTable에 `'습득'` 열을 삽입한다:

```tsx
function HowBadge({ how }: { how: string }) {
  if (how.startsWith('HM')) return <span className="inline-block rounded bg-red-100 px-1.5 py-0.5 text-xxs font-bold text-red-700 dark:bg-red-900/40 dark:text-red-300">{how}</span>
  if (how.startsWith('TM')) return <span className="inline-block rounded bg-blue-100 px-1.5 py-0.5 text-xxs font-bold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">{how}</span>
  if (how.startsWith('Lv.')) return <span className="inline-block rounded bg-green-100 px-1.5 py-0.5 text-xxs font-bold text-green-700 dark:bg-green-900/40 dark:text-green-300">{how}</span>
  if (how === '기술가르침') return <span className="inline-block rounded bg-purple-100 px-1.5 py-0.5 text-xxs font-bold text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">{how}</span>
  if (how === '번식기술') return <span className="inline-block rounded bg-orange-100 px-1.5 py-0.5 text-xxs font-bold text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">{how}</span>
  return <span className="inline-block rounded bg-surface-hover px-1.5 py-0.5 text-xxs font-bold text-ink-muted">{how}</span>
}

// GuideTable 사용 예
<GuideTable
  headers={['기술', '습득', '용도']}
  rows={s.moveTable.map((m) => [m.move, <HowBadge key={m.move} how={m.how} />, m.usage])}
/>
```

## 진화 계열 기술 비교

`src/components/pokemon/EvolutionMoveComparison.tsx` — 포켓몬 상세 페이지에서 진화 가족이 2명 이상일 때 자동 노출되는 전체 비교 테이블.

- `PokemonDetailPage`에서 `evolutionFamilyIds`를 추출하고, 각 포켓몬의 학습셋을 병렬 로드해 `Map<number, { learnsets, recommended }>` 형태로 넘긴다.
- 세대·버전 탭 → 레벨업 / 기술머신·비전머신 / 가르침 섹션으로 분류.
- 훅 순서 규칙: `evolutionLine` / `evolutionFamilyIds` useMemo는 반드시 `if (!pokemon)` 조기 반환 **앞에** 선언해야 한다 (rules-of-hooks).
