# 다우징덱스 (Dowsing Dex)

포켓몬 한국어 팬 도감 사이트. 1~9세대 전 포켓몬의 도감 정보, 타입 상성, 세대별 기술 학습셋, 특성/숨겨진 특성, 출현 장소, 공략을 제공한다.

## 주요 기능

- **도감 목록**: 타입 필터 + 전 포켓몬(1082종+, 리전폼 포함) 목록
- **포켓몬 상세**: 스탯 막대, 타입 상성, 세대·버전별 기술 학습셋(레벨업/기술머신/가르침), 특성/숨겨진 특성, 출현 장소, 진화 체인, 메가진화
- **타입 상성표**: 18×18 타입 매트릭스 + 타입 계산기
- **공략**: 포켓몬 링크가 연결된 리치 공략 페이지 (현재: 포켓몬 골드버전 스토리 엔트리 공략)

## 기술 스택

| 분류 | 기술 |
|---|---|
| 프레임워크 | Vite + React 19 + TypeScript |
| 라우팅 | React Router v7 |
| 스타일 | Tailwind CSS v4 |
| UI 프리미티브 | Radix UI |
| 데이터 출처 | PokeAPI + 포켓몬 갤러리 한국어 위키 |

## 시작하기

```bash
npm install
npm run dev     # http://localhost:5173
```

## 빌드

```bash
npm run build
npm run preview  # 빌드 결과물 미리보기
```

## 데이터 재생성

포켓몬 데이터는 `scripts/fetch-pokedex.mjs`가 PokeAPI와 한국어 위키에서 수집해 `src/data/` 하위에 TypeScript 파일로 생성한다. **수 시간이 걸린다.**

```bash
npm run fetch:pokedex
```

생성 파일(`*.generated.ts`)은 직접 수정하지 않는다.

## 개발 가이드

자세한 폴더 구조, 디자인 토큰, 라우트 패턴, 데이터 모델은 [CLAUDE.md](./CLAUDE.md)를 참조한다.
