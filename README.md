# 다우징덱스 (Dowsing Dex)

포켓몬 한국어 팬 도감 사이트. 1~9세대 전 포켓몬의 도감 정보, 타입 상성, 기술 학습셋, 야생 출현 데이터, 공략을 제공합니다.

## 주요 기능

| 페이지 | 경로 | 내용 |
|---|---|---|
| 홈 | `/` | 대표 포켓몬 캐러셀 |
| 도감 | `/pokedex` | 1082종+ 전국도감. 타입·세대 필터 + 이름·번호 검색 |
| 포켓몬 상세 | `/pokemon/:id` | 종족값·타입 상성·기술 학습셋·출현 장소·진화 체인·메가진화·진화 계열 기술 비교 |
| 타입 상성 | `/types` | 18×18 상성표 + 1세대/2~5세대/6세대 이후 계산기 |
| 기술머신 | `/tm` | 세대·버전별 TM/HM 목록과 배울 수 있는 포켓몬 필터 |
| 출현 포켓몬 | `/encounter` | 세대·버전별 야생 출현 및 포획 불가 포켓몬 목록 |
| 공략 | `/guides` | 스토리 공략, 진화 타이밍 등 카테고리별 공략집 |

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
npm run build    # TypeScript 타입 체크 + Vite 빌드
npm run preview  # 빌드 결과물 미리보기
```

## 데이터 재생성

포켓몬 데이터는 `scripts/fetch-pokedex.mjs`가 PokeAPI와 한국어 위키에서 수집해 `src/data/` 하위에 TypeScript 파일로 생성한다. **수 시간이 걸린다.**

```bash
npm run fetch:pokedex    # 포켓몬·기술·특성·출현 장소 전체 재수집
npm run build:tm-index   # 기술머신 역인덱스 재생성 (fetch:pokedex 후 실행)
```

생성 파일(`*.generated.ts`)은 직접 수정하지 않는다.

## 문서

| 문서 | 내용 |
|---|---|
| [CLAUDE.md](./CLAUDE.md) | 폴더 구조, 디자인 토큰, 라우트 패턴, 데이터 모델, 컴포넌트 패턴 |
| [TECH.md](./TECH.md) | 파일별 기술 상세, 데이터 흐름, 이미지 CDN, 배포 |
| [PROJECT.md](./PROJECT.md) | 설정 파일 해설, 패키지 목록 및 사용 위치 |
