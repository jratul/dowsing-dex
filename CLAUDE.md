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
npm run dev             # 개발 서버 (Vite HMR)
npm run build           # 프로덕션 빌드
npm run lint            # 린트 (oxlint)
npm run fetch:pokedex   # PokeAPI + 한국어 위키에서 데이터 생성 (수 시간 소요)
npm run build:tm-index  # by-id/*.generated.ts → tm-index.generated.ts 역인덱스 생성
```

## 폴더 구조

```
src/
  components/
    ui/           # Button, Card 등 범용 프리미티브
    pokemon/      # TypeBadge, PokemonCard, StatChart, MoveList, EncounterLocationList, EvolutionMoveComparison 등
    type-chart/   # TypeFilter, TypeCalculator, TypeChartGrid
    guide/        # GuideCard, GuideTable, PokemonLink
    layout/       # SiteHeader, MobileTabBar, Hero, RouteErrorBoundary
  pages/          # 라우트별 페이지 컴포넌트
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
    sample/                           # 도우미 함수 (findSamplePokemon, findMove 등) + 공략 데이터
  router.tsx      # 라우트 정의
  styles/index.css  # @theme 디자인 토큰
scripts/
  fetch-pokedex.mjs    # PokeAPI + 한국어 위키 스크래핑 → 생성 파일 출력
  build-tm-index.mjs   # by-id/*.generated.ts 파싱 → tm-index.generated.ts 출력
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
| `/guides` | GuideListPage | 공략 카드 목록 |
| `/guides/pokemon-gold-story` | PokemonGoldStoryGuidePage | 정적 전용 라우트 (표/이미지 중심) |
| `/guides/pokemon-red-story` | PokemonRedStoryGuidePage | 정적 전용 라우트 |
| `/guides/pokemon-firered-story` | PokemonFireredStoryGuidePage | 정적 전용 라우트 |
| `/guides/pokemon-firered-sevii-islands` | PokemonFireredSeviiIslandsGuidePage | 정적 전용 라우트 |
| `/guides/pokemon-red-evolution` | PokemonRedEvolutionGuidePage | 정적 전용 라우트 |
| `/guides/pokemon-heartgold-story` | PokemonHeartgoldStoryGuidePage | 정적 전용 라우트 |
| `/guides/pokemon-emerald-story` | PokemonEmeraldStoryGuidePage | 정적 전용 라우트 |
| `/guides/pokemon-platinum-story` | PokemonPlatinumStoryGuidePage | 정적 전용 라우트 |
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

| 틀린 표기 | 올바른 표기 |
|---|---|
| 칸토 | 관동 |
| 조토 | 성도 |

호연·신오·하나·칼로스·알로라·가라르·팔데아는 이미 정식 한글 명칭.

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
