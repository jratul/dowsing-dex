/**
 * 진화 조건 문자열을 보고 있는 세대에 맞게 정규화한다.
 *
 * 친밀도 진화 기준은 **종이 아니라 세대에 따라** 갈린다 — 2~7세대는 220, 8세대부터는 160이다
 * (Bulbapedia Friendship: "at least 220 friendship from Generations II to VII, or 160
 * friendship from Generation VIII onwards").
 *
 * 그런데 PokeAPI 의 evolution chain 은 세대 구분 없이 값을 하나만 주고, 그 값이 종마다
 * 갱신 시점이 달라 **160 과 220 이 섞여** 들어온다. 실제로 생성 데이터에는 크로뱃·에브이가
 * 160, 피카츄·치렁·모아머가 220 으로 적혀 있다 — 종별 차이처럼 보이지만 사실이 아니다.
 *
 * 생성 파일을 직접 고치면 재생성 때 되돌아오므로, 화면에 그릴 때 세대에 맞춰 바꾼다.
 */
export function normalizeEvolutionTrigger(trigger: string, generation?: number): string {
  if (generation === undefined) return trigger
  const threshold = generation >= 8 ? 160 : 220
  return trigger.replace(/친밀도\s*\d+\s*이상/g, `친밀도 ${threshold} 이상`)
}
