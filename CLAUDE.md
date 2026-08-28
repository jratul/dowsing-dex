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
npm run fetch:pokedex          # PokeAPI + 한국어 위키에서 데이터 생성 (약 3분)
npm run build:tm-index         # by-id/*.generated.ts → tm-index.generated.ts 역인덱스 생성
npm run build:move-index       # by-id/*.generated.ts → move-index.generated.ts (기술 → 학습 포켓몬)
npm run build:move-descriptions  # PokeAPI에서 기술 한국어 설명 수집 → move-descriptions.generated.ts
npm run build:abilities        # PokeAPI에서 특성 한국어 데이터 수집 → abilities.generated.ts
```

> `scripts/build-hgss-encounter-rates.mjs`(HGSS 수집 가이드의 야생 출현 확률)도 npm script
> 미등록 상태다. `node scripts/build-hgss-encounter-rates.mjs` 로 직접 실행한다.
> `hgss-collection.md`의 지역·방법 라벨을 파싱해 PokeAPI 4세대 조우 확률을 붙인다.
> 지역 매핑은 스크립트 안 `LOCATION_MAP`에 **명시한 것만** 쓴다 — 포켓몬 목록이 겹치는
> 정도로 자동 추정하면 조우 종류가 적은 지역이 엉뚱한 곳에 100% 일치로 붙는다
> (검은먹시티가 `unknown-all-poliwag`에, 담청시티가 `johto-sea-route-40`에 붙었다).
> 실행 후 "4246개 중 4246개에 확률을 붙였다(100%)"처럼 커버리지가 찍히는데, 매핑이
> 틀리면 그 지역이 통째로 0건이 되므로 이 수치가 매핑 검증을 겸한다.

> `scripts/check-guide-pokemon-ids.mjs`는 공략 데이터의 `pokemonId: N, pokemon: '이름'` 쌍과
> `['이름', N]` 링크 매핑을 도감과 대조한다. **공략을 추가·수정하면 반드시 돌린다** —
> 어긋나도 화면에는 이름이 멀쩡히 보이고 링크만 엉뚱한 포켓몬으로 가서 눈으로는 안 잡힌다.
> 불일치는 "이름이 틀린 경우"와 "ID가 틀린 경우"가 같은 형태로 보고되므로, 주변 `note`의
> 타입·진화·입수처 설명을 읽고 어느 쪽이 의도인지 정해서 고친다.
>
> ```bash
> node scripts/check-guide-pokemon-ids.mjs
> ```

> `scripts/check-guide-machines.mjs`는 공략 본문의 `TM26 지진` / `HM08 락클라임` 표기를
> `tm-index.generated.ts`와 대조한다. **TM 번호는 세대마다 다른 기술에 붙으므로**
> (HM05가 플래티넘은 안개제거, HGSS는 바다회오리) 다른 게임 공략에서 문장을 복사해 오면
> 조용히 틀린다. 데이터에 없는 `MoveLink` 이름도 함께 잡는다 — 그쪽은 링크가 아예
> 안 걸려서 눈으로는 더 안 보인다.
>
> ```bash
> node scripts/check-guide-machines.mjs
> ```
>
> 공략 파일과 게임의 대응은 스크립트 안 `GUIDE_GAME`에 있다 — `GuidePageLayout`에
> 넘기는 `generation`·`version`과 같은 값이어야 하므로 공략을 추가하면 함께 갱신한다.
> `HM02 담당`처럼 번호 뒤에 일반 명사가 오는 문장은 오탐이니 `PROSE`에 추가한다.

> `scripts/check-guide-levels.mjs`는 `꾸꾸리 Lv.28 원시의힘` 같은 레벨업 습득 주장을
> by-id 학습셋과 대조한다. **같은 기술도 세대마다 습득 레벨이 다르다**
> (식스테일 화염방사: 레드·블루 Lv.35, 파이어레드 Lv.29). 다른 세대 자료를 보고 쓰면
> 조용히 틀린다 — 실제로 파이어레드 공략의 돌 진화 표가 통째로 1세대 레벨이었다.
>
> `scripts/check-guide-items.mjs`는 공략의 아이템 이름을 `items.generated.ts`와 대조한다.
> 진화용 돌 이름이 특히 자주 틀린다 — 빛나는돌·황혼의돌·번개의돌은 각각
> **빛의돌·어둠의돌·천둥의돌**이 맞다. 꼬마돌·화강돌처럼 이름이 `돌`로 끝나는
> 포켓몬은 자동으로 제외된다.
>
> `scripts/check-guide-roster.mjs`는 공략에 나오는 포켓몬 이름이 실존하는지, 그리고
> **그 게임 세대에 존재할 수 있는지**를 본다. 3세대 에메랄드 공략에 삼삼드래(5세대)가
> 적혀 있어도 화면에는 멀쩡히 보이므로 눈으로는 안 잡힌다.
>
> ```bash
> node scripts/check-guide-levels.mjs
> node scripts/check-guide-roster.mjs
> node scripts/check-guide-items.mjs
> ```
>
> 공략을 추가·수정하면 위 다섯 스크립트(`pokemon-ids`·`machines`·`levels`·`roster`·`items`)를
> 모두 돌린다. 2026-08 전수 점검에서 이 검사들이 잡아낸 것: 파이어레드 돌 진화 표의
> 1세대 레벨, 에메랄드 공략의 세대 초과 포켓몬(삼삼드래·불비달마·미끄래곤), 하트골드
> 스토리 공략의 관동 체육관 명단 전체, 플래티넘 공략의 비공식 기술명 39건.

> 검사 대상 파일은 `scripts/guide-sources.mjs` 한 곳에서 열거한다 — 공략 데이터
> (`.data.ts`), 가이드 페이지(`.tsx`), 마크다운 원문(`.md`) 29개다. 페이지의 게임은
> `GuidePageLayout` 에 넘긴 `generation`·`version` prop 에서 자동으로 읽으므로 따로
> 적을 필요가 없다. 새 `.data.ts` 나 `.md` 를 추가하면 이 모듈의 표에 넣어야 하고,
> 안 넣으면 검사기가 즉시 에러를 낸다(조용히 빠지지 않는다).
>
> **처음엔 `.data.ts` 12개만 검사하고 있었다.** 가이드 페이지 16개와 마크다운 1개가
> 검사 밖이라, 데이터 파일에서 고친 오류가 페이지 파일에 그대로 남아 있었다
> (파이어레드 페이지의 "킹의돌" → 왕의징표석). 커버리지를 넓히자마자 바로 잡혔다.

> `scripts/build-items.mjs`(items.generated.ts 생성)는 npm script 미등록 상태다.
> 필요하면 `node scripts/build-items.mjs` 로 직접 실행한다.

> `scripts/refresh-levelup-learnsets.mjs`는 by-id 파일의 `levelUp` 배열만 PokeAPI에서
> 다시 받아 덧씌운다. `fetch:pokedex` 전체 실행(위키 스크래핑 포함, 약 3분)을 돌리지 않고
> 레벨업 학습셋만 최신화할 때 쓴다 — 1,082종에 약 1~2분. `machines`/`tutor`/
> `RECOMMENDED_MOVESET`은 건드리지 않는다.
>
> ```bash
> node scripts/refresh-levelup-learnsets.mjs --dry-run   # 쓰지 않고 증감만 확인
> node scripts/refresh-levelup-learnsets.mjs
> ```
>
> 출력의 **포맷 왕복 불일치**가 0이 아니면 이 스크립트의 출력 형식이
> `fetch-pokedex.mjs`와 어긋났다는 뜻이다 — 그대로 두면 다음 전체 재생성 때
> 의미 없는 diff가 통째로 생기므로 먼저 맞춘다. **사라진 기존 항목**이 0이 아니면
> PokeAPI 쪽 데이터가 바뀐 것이니 내용을 확인하고 진행한다.
>
> 실행 후 `npm run build:move-index`를 함께 돌린다(레벨업에 의존하는 역인덱스).
> `tm-index`는 `machines`만 쓰므로 재생성 불필요.
>
> **한 기술을 여러 레벨에서 배우는 포켓몬이 있다**(HGSS 전룡의 울음소리 Lv.1·Lv.5).
> 전체 3,272개 학습셋에서 7,345건이 그렇다. 이 목록을 렌더하는 쪽은 `moveId`만으로
> React key를 만들면 안 된다 — `MoveList`는 `moveId-level`을 쓴다.

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
    guides/hgss-encounter-rates.generated.ts  # 위 가이드의 야생 출현 확률 (build-hgss-encounter-rates.mjs 생성)
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
  refresh-levelup-learnsets.mjs # by-id/*.generated.ts 의 levelUp만 PokeAPI에서 재동기화
  version-groups.mjs          # 세대별 게임판 라벨 ↔ PokeAPI version group 매핑 (위 두 스크립트가 공유)
```

## 데이터 생성 흐름

1. `scripts/fetch-pokedex.mjs` 실행 → PokeAPI에서 포켓몬·기술·특성 데이터를 받고, 포켓몬 갤러리 한국어 위키(pokemon.fandom.com/ko)에서 출현 장소 데이터를 스크래핑
2. `src/data/pokedex/pokedex.generated.ts` 및 `src/data/moves/` 하위 파일 생성
3. 생성된 파일은 직접 수정하지 않는다 (`// 이 파일은 scripts/ 로 생성됩니다. 직접 수정하지 마세요.` 주석)

**전체 재생성은 약 3분 걸린다.** 동시성 14로 PokeAPI와 한국어 위키를 함께 훑는다.
실행하면 10종마다 `[진행] 300/1,025종 (29.27%) · 경과 · 남은 예상`이 stderr 로 찍힌다.
파일은 모든 수집이 끝난 뒤 한 번에 쓰므로, 중간에 죽어도 기존 생성 파일은 손상되지 않는다.

재생성 뒤에는 `build:move-index`·`build:tm-index`·`build-move-descriptions.mjs`를 이어서
돌리고, 공략 검사 다섯 종을 다시 실행한다. **PokeAPI 의 기술 한글명이 갱신되면
공략의 기술명이 통째로 낡는다** — 2026-08 재생성에서 47종이 바뀌어(락클라임→록클라임,
얼다바람→얼어붙은바람, 메가폰→메가혼 등) 공략 164곳을 함께 고쳐야 했다.
`check-guide-machines`가 이걸 잡아준다.

**출현 장소 표기는 포켓몬 문서 기준이다.** 위키가 장소 문서명을 바꿔도(보물의 해변 →
보물만, 아스카나 유적 → 옥포그리 유적) 포켓몬 문서의 출현장소 칸은 옛 이름을 유지해서,
재생성해도 도감 값은 그대로다. 공략도 도감과 같은 어휘를 써야 상세 페이지와 어긋나지 않는다.

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
- **긴 페이지 스크롤**: HGSS 수집 가이드는 한 탭에 DOM 9,600노드 + 스프라이트 1,700장이
  깔린다. `PokemonLink` 스프라이트의 `loading="lazy"`와 지역 섹션의 `.defer-offscreen`
  (`content-visibility: auto`)으로 처리한다 — CDP로 실측했을 때 최악 프레임이
  40~48ms → 33ms로 줄었다.
  **여기에 무한 스크롤(챕터 단위 점진 렌더링)을 얹으면 오히려 나빠진다.** 초기 DOM은
  2,543노드로 줄지만 청크를 붙이는 순간 React 렌더가 한 프레임에 몰려 최악 프레임이
  171~183ms까지 튄다(청크를 1개로 줄여도 68ms). `content-visibility`는 화면 밖 요소의
  레이아웃·페인트만 건너뛰고 DOM은 유지하므로 브라우저 기본 검색(Ctrl+F)도 계속 된다.

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
- 공략 페이지는 `GuidePageLayout`에 `generation`·`version`을 넘겨 **그 공략이 어느 게임인지**를
  알린다(`GuideVersionProvider` → `useGuideVersion`). 그러면 본문의 `PokemonLink`가 도감 링크에
  버전 쿼리를 자동으로 달아, 하트골드 공략에서 전룡을 누르면 2세대가 아니라 하트골드·소울실버
  탭이 바로 열린다. **본문 링크는 하나도 고칠 필요가 없다** — 컨텍스트로만 전달된다.
  여러 게임을 한데 묶은 공략(안농 종합)은 넘기지 않으면 기존 동작 그대로다. HGSS 수집
  가이드처럼 게임별 탭이 있는 공략은 활성 탭에 따라 `version`을 바꿔 넘긴다.

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
- 레벨업 / 기술머신·비전머신 / 가르침 섹션으로 분류. 비교표가 레벨업을 이미 보여주므로 그 아래 `MoveList`는 `hideLevelUp`으로 레벨업을 뺀다.
- 훅 순서 규칙: `evolutionLine` / `evolutionFamilyIds` useMemo는 반드시 `if (!pokemon)` 조기 반환 **앞에** 선언해야 한다 (rules-of-hooks).

### 세대·버전 탭은 PokemonDetailPage가 단독으로 소유한다

`EvolutionMoveComparison` / `MoveList` / `EncounterLocationList`는 **탭을 그리지 않는다.**
셋 다 한 카드 안에 들어가므로 각자 탭을 가지면 같은 화면에 세대 탭이 세 벌 생긴다.

- 페이지가 활성 세대·버전을 정해 `generation`·`version`(비교표는 `activeGen`·`activeVersion`)으로
  내려준다. 탭 상태는 로컬 state가 아니라 **URL 쿼리**(`?gen=4&ver=하트골드·소울실버`)에 있다.
- **탭을 바꾸는 `setSearchParams`에는 `preventScrollReset: true`가 반드시 있어야 한다.**
  탭 전환도 navigation이라, 없으면 `Layout`의 `<ScrollRestoration />`이 `window.scrollTo(0, 0)`을
  호출해 기술 목록을 한참 내려보다가 세대만 바꿔도 화면 맨 위로 튄다. 뒤로가기 복원은
  이 옵션보다 앞단에서 처리되므로 영향받지 않는다. 탭 상태를 로컬 state에서 URL로 옮기면서
  실제로 터졌던 회귀다.
- 세대 목록은 **본인 기술 ∪ 진화 계열 기술 ∪ 출현 장소**의 합집합이다. 알로라꼬렛처럼
  원종보다 늦게 나온 폼이 계열에 있으면 목록이 넓어진다.
- **탭 선택 우선순위: URL 쿼리 → 마지막으로 직접 고른 버전(localStorage) → 기본 탭.**
  기본 탭은 계열의 첫 세대가 아니라 **본인이 처음 등장하는 세대**(`moveGenerations[0]`)다 —
  안 그러면 알로라꼬렛을 열었는데 원종 때문에 1세대가 잡혀 본인 기술이 안 보인다.
  앞의 두 값이 이 포켓몬에 없는 세대·버전이면 조용히 기본 탭으로 떨어진다.
- **자동으로 정해진 기본 탭은 절대 저장하지 않는다.** 저장하면 전룡(기본 2세대)을 한 번
  열어보는 것만으로 사용자가 고른 하트골드 설정이 덮인다. `lib/learnsetVersion.ts`의
  `writeLearnsetVersion`은 탭을 직접 누를 때와 버전을 단 링크로 들어왔을 때만 호출한다.
- 버전 목록은 **학습셋에서만** 모은다. 출현 장소 데이터는 같은 게임을 `금·은`으로,
  학습셋은 `골드·실버`로 적어 두 목록을 합칠 수 없다. 그래서 출현 장소는 세대만 따른다.
- 세 컴포넌트 모두 `title`을 prop으로 받아 **제목까지 자기가 렌더**하고, 그 세대·버전에
  보여줄 게 없으면 `null`을 반환한다. 페이지가 제목을 그리면 내용 없는 빈 섹션이 남는다.
