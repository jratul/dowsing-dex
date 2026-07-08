# PROJECT.md — 다우징덱스 설정 및 패키지

설정 파일 역할 해설과 `package.json` 패키지 목록.
기술 상세는 [TECH.md](./TECH.md), 개발 규칙은 [CLAUDE.md](./CLAUDE.md) 참조.

---

## 설정 파일

### `vite.config.ts`

```ts
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

| 플러그인 | 역할 |
|---|---|
| `@vitejs/plugin-react` | JSX transform (React 17+ automatic), Fast Refresh |
| `@tailwindcss/vite` | 빌드 타임에 `src/styles/index.css`의 `@theme` 블록을 파싱해 유틸리티 클래스 생성. `tailwind.config.js` 없이 동작하는 Tailwind v4 네이티브 방식 |

### `tsconfig.json`

프로젝트 루트 진입점. 직접 컴파일 옵션 없이 두 하위 설정을 참조한다.

```json
{ "files": [], "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
]}
```

### `tsconfig.app.json` — 앱 소스 (`src/`)

| 옵션 | 값 | 의미 |
|---|---|---|
| `target` | `ES2023` | 최신 문법 그대로 출력 (Vite/esbuild가 하향 트랜스파일) |
| `moduleResolution` | `bundler` | Vite 환경에 최적화. 확장자 없는 import 허용 |
| `allowImportingTsExtensions` | `true` | `.ts`/`.tsx` 확장자 그대로 import 가능 |
| `noEmit` | `true` | tsc는 타입 체크만; 실제 빌드는 Vite가 담당 |
| `jsx` | `react-jsx` | React 17+ automatic JSX transform |
| `noUnusedLocals` / `noUnusedParameters` | `true` | 미사용 변수·파라미터 오류로 처리 |
| `erasableSyntaxOnly` | `true` | `enum`·`namespace` 등 TS 전용 런타임 구문 금지 |

### `tsconfig.node.json` — Vite 설정 파일 (`vite.config.ts`)

`module: nodenext`로 Node.js ESM 환경에 맞게 처리. 앱 소스와 분리해 서로 다른 모듈 모드가 충돌하지 않도록 한다.

### `vercel.json`

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

React Router가 클라이언트 사이드 라우팅을 담당하므로, Vercel이 모르는 경로에 직접 접근하거나 새로고침해도 `/index.html`을 반환해 앱이 정상 부팅되도록 한다.

---

## 패키지 목록

### dependencies — 런타임에 포함되는 패키지

| 패키지 | 버전 | 사용 위치 |
|---|---|---|
| `react` | 19.x | 앱 전체 UI 렌더링 |
| `react-dom` | 19.x | `src/main.tsx`의 `createRoot` |
| `react-router-dom` | 7.x | `src/router.tsx` `createBrowserRouter`, 모든 페이지 lazy import |
| `tailwindcss` | 4.x | `src/styles/index.css` `@import "tailwindcss"` — `@tailwindcss/vite` 플러그인이 빌드 시 처리 |
| `@tailwindcss/vite` | 4.x | `vite.config.ts` 플러그인으로 등록 |
| `@radix-ui/react-slot` | 1.x | `Button.tsx`, `Card.tsx`의 `asChild` prop (Polymorphic 합성) |
| `@radix-ui/react-tabs` | 1.x | 공략 페이지 스타터 탭, 세대·버전 탭 |
| `@radix-ui/react-toggle-group` | 1.x | `TypeFilter.tsx`, `GenerationFilter.tsx` |
| `class-variance-authority` | 0.7.x | `Button.tsx`, `TypeBadge.tsx` variant 클래스 분기 |
| `clsx` | 2.x | 조건부 클래스명 합성 (`lib/cn.ts`의 `cn()`) |
| `tailwind-merge` | 3.x | Tailwind 클래스 충돌 제거 (`lib/cn.ts`의 `cn()`) |
| `embla-carousel-react` | 8.x | `HeroCarousel.tsx` 슬라이더 |
| `embla-carousel-autoplay` | 8.x | `HeroCarousel.tsx` 자동재생 플러그인 |

### devDependencies — 빌드·개발 도구

| 패키지 | 버전 | 사용 위치 |
|---|---|---|
| `vite` | 8.x | 개발 서버 HMR + 프로덕션 번들링 |
| `@vitejs/plugin-react` | 6.x | `vite.config.ts` — JSX transform + Fast Refresh |
| `typescript` | ~6.x | `npm run build`에서 `tsc -b`로 타입 체크. 트랜스파일은 Vite/esbuild가 담당 |
| `@types/react` | 19.x | React JSX 타입 정의 |
| `@types/react-dom` | 19.x | `createRoot` 등 react-dom 타입 |
| `@types/node` | 24.x | `scripts/*.mjs`(fetch-pokedex, build-tm-index)에서 `fs`, `path` 등 Node 내장 모듈 타입 |
| `oxlint` | 1.x | `npm run lint` — Rust 기반 고속 린터. error·warning 0 목표 |
