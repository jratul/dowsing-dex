# 포켓몬 공식 한국어 용어 사전

이 파일은 공략·설명 작성 시 오기 방지를 위한 **정식 한국어 표기 사전**이다.
새로운 오류가 발견될 때마다 즉시 추가한다.

> **검증 기준**: `src/data/pokedex/pokedex.generated.ts`의 `nameKo`·`location` 필드가 최우선 정본.
> 기술명은 `src/data/moves/all-moves.generated.ts`의 `nameKo` 필드 기준.

---

## 규칙

- **새 포켓몬·지역·기술·NPC 명칭을 작성하기 전에 반드시 이 파일을 먼저 확인한다.**
- 이 사전에 없는 명칭은 생성 데이터(`grep`)로 직접 검증한 뒤 사용하고, 동시에 이 파일에 추가한다.
- 영어 원문·일본어 음역·비공식 번역을 그대로 쓰지 않는다.
- 실수가 발생하면 즉시 해당 항목을 이 파일에 추가한다.

---

## 지역명

| 잘못된 표기 | 올바른 표기 | 원문 | 비고 |
|---|---|---|---|
| 칸토 | 관동 | Kanto | 1세대 무대 |
| 조토 | 성도 | Johto | 2세대 무대 |
| 마운트실버 | 은빛산 | Mt. Silver | 레드가 있는 산 |
| 야도리개 우물 | 야돈우물 | Slowpoke Well | 붙여쓰기, 띄어쓰기 없음 |
| 용의소굴 | 용의 굴 | Dragon's Den | 띄어쓰기 있음 |
| 소용돌이 섬 | 소용돌이섬 | Whirl Islands | 붙여쓰기 |
| 쌍섬 | 쌍둥이섬 | Cianwood City | 5관 마루가 있는 섬 도시 |
| 종각탑 | 방울탑 | Bell Tower | 에크루테크 탑 (칠색조 이벤트) |

---

## 포켓몬 명칭

| 잘못된 표기 | 올바른 표기 | 번호 | 원문 | 비고 |
|---|---|---|---|---|
| 에스피온 | 에브이 | #196 | Espeon | 이상해→에스퍼 이브이 진화형 |
| 하리케인 | 무장조 | #227 | Skarmory | 강철/비행 |
| 시라소몬 | 성원숭 | #57 | Primeape | 망키 진화형 |
| 마프리카 | 망키 | #56 | Mankey | 격투 타입 |
| 스타미 | 아쿠스타 | #121 | Starmie | 별가사리 진화형 |
| 야도리개 | 야돈 | #79 | Slowpoke | 야도란·야도킹 진화 전 |
| 빠오 | 메꾸리 | #221 | Piloswine | 꾸꾸리 진화형 |
| 드래피어 | 신뇽 | #148 | Dragonair | 미뇽→신뇽→망나뇽 |
| 악귀번 | 윈디 | #59 | Arcanine | 강아지캉 진화형 |
| 에이르 | 프테라 | #142 | Aerodactyl | 화석 부활 |
| 샤미드 (에스퍼) | 샤미드는 물 타입 (#134 Vaporeon) | #134 | Vaporeon | 에스퍼 이브이 진화형은 에브이(#196) |

---

## 배지 이름 (성도)

| 잘못된 표기 | 올바른 표기 | 관장 | 체육관 | 원문 |
|---|---|---|---|---|
| 조약배지 | 비상배지 | 진영 | 체육관1 은빛체육관 | Zephyr Badge |

---

## 기술명

| 잘못된 표기 | 올바른 표기 | 원문 | 비고 |
|---|---|---|---|
| 닫기 | 인파이트 | Close Combat | 격투 물리기 |
| 클로즈컴뱃 | 인파이트 | Close Combat | 격투 물리기 |

---

## NPC명

| 잘못된 표기 | 올바른 표기 | 원문 | 비고 |
|---|---|---|---|
| 빌 | 이수재 | Bill | 금빛시티 포켓몬 교환 NPC |

---

## 검증 명령어

```powershell
# 포켓몬 한국어 명칭 확인 (ID로 조회)
$content = Get-Content src/data/pokedex/pokedex.generated.ts -Raw
if ($content -match '"id":\s*248,[\s\S]{1,200}?"nameKo":\s*"([^"]+)"') { $Matches[1] }

# 지역명 검색
$m = [regex]::Matches($content, '"location":\s*"([^"]*검색어[^"]*)"')
$m | ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique

# 기술명 확인
$moves = Get-Content src/data/moves/all-moves.generated.ts -Raw
if ($moves -match '"nameKo":\s*"인파이트"') { '확인됨' }
```
