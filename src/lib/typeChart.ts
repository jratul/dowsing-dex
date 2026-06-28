import { TYPE_ORDER, type MatchupClass, type TypeChart, type TypeMatchup, type TypeName } from '../types/type-chart'

export { TYPE_ORDER }
export type { TypeName }

// 18타입 전체 상성표 (페어리 포함 현행 표준). s=효과 굉장(×2) / w=효과 별로(×0.5) / n=효과 없음(×0)
export const CHART: TypeChart = {
  노말: { s: [], w: ['바위', '강철'], n: ['고스트'] },
  불꽃: { s: ['풀', '얼음', '벌레', '강철'], w: ['불꽃', '물', '바위', '드래곤'], n: [] },
  물: { s: ['불꽃', '땅', '바위'], w: ['물', '풀', '드래곤'], n: [] },
  전기: { s: ['물', '비행'], w: ['전기', '풀', '드래곤'], n: ['땅'] },
  풀: { s: ['물', '땅', '바위'], w: ['불꽃', '풀', '독', '비행', '벌레', '드래곤', '강철'], n: [] },
  얼음: { s: ['풀', '땅', '비행', '드래곤'], w: ['불꽃', '물', '얼음', '강철'], n: [] },
  격투: { s: ['노말', '얼음', '바위', '악', '강철'], w: ['독', '비행', '에스퍼', '벌레', '페어리'], n: ['고스트'] },
  독: { s: ['풀', '페어리'], w: ['독', '땅', '바위', '고스트'], n: ['강철'] },
  땅: { s: ['불꽃', '전기', '독', '바위', '강철'], w: ['풀', '벌레'], n: ['비행'] },
  비행: { s: ['풀', '격투', '벌레'], w: ['전기', '바위', '강철'], n: [] },
  에스퍼: { s: ['격투', '독'], w: ['에스퍼', '강철'], n: ['악'] },
  벌레: { s: ['풀', '에스퍼', '악'], w: ['불꽃', '격투', '독', '비행', '고스트', '강철', '페어리'], n: [] },
  바위: { s: ['불꽃', '얼음', '비행', '벌레'], w: ['격투', '땅', '강철'], n: [] },
  고스트: { s: ['에스퍼', '고스트'], w: ['악'], n: ['노말'] },
  드래곤: { s: ['드래곤'], w: ['강철'], n: ['페어리'] },
  악: { s: ['에스퍼', '고스트'], w: ['격투', '악', '페어리'], n: [] },
  강철: { s: ['얼음', '바위', '페어리'], w: ['불꽃', '물', '전기', '강철'], n: [] },
  페어리: { s: ['격투', '드래곤', '악'], w: ['불꽃', '독', '강철'], n: [] },
}

/**
 * 타입 상성은 세대에 따라 달라진다 (참고: https://namu.wiki/w/포켓몬스터/타입#s-5.3).
 * - 1세대: 악·강철·페어리 타입이 아직 없고, 고스트→에스퍼 효과없음 / 벌레↔독 서로 효과굉장함 /
 *   얼음→불꽃 보통 데미지였던 버그성 상성이 적용된다.
 * - 2~5세대: 페어리 타입이 없고, 고스트·악→강철이 효과 별로(0.5배)였다.
 * - 6세대 이후: 현재 표준(CHART)과 동일 — 페어리 추가, 강철의 고스트·악 내성 제거.
 */
export type TypeEra = '1세대' | '2~5세대' | '6세대 이후'

const GEN1_EXCLUDED: TypeName[] = ['악', '강철', '페어리']
const GEN2_5_EXCLUDED: TypeName[] = ['페어리']

export const TYPES_BY_ERA: Record<TypeEra, TypeName[]> = {
  '1세대': TYPE_ORDER.filter((t) => !GEN1_EXCLUDED.includes(t)),
  '2~5세대': TYPE_ORDER.filter((t) => !GEN2_5_EXCLUDED.includes(t)),
  '6세대 이후': [...TYPE_ORDER],
}

// 베이스(CHART=6세대 이후)와 다른 부분만 명시한다. 목록에 없는 타입은 베이스에서 그대로 가져와
// 그 세대에 존재하는 타입만 걸러 쓴다.
const ERA_OVERRIDES: Record<'1세대' | '2~5세대', Partial<TypeChart>> = {
  '1세대': {
    고스트: { s: ['고스트'], w: [], n: ['노말', '에스퍼'] }, // 에스퍼에 효과 없음(버그)
    벌레: { s: ['풀', '에스퍼', '독'], w: ['불꽃', '격투', '비행', '고스트'], n: [] }, // 독에 효과 굉장함
    독: { s: ['풀', '벌레'], w: ['독', '땅', '바위', '고스트'], n: [] }, // 벌레에 효과 굉장함
    얼음: { s: ['풀', '땅', '비행', '드래곤'], w: ['물', '얼음'], n: [] }, // 불꽃에 보통 데미지
  },
  '2~5세대': {
    고스트: { s: ['에스퍼', '고스트'], w: ['악', '강철'], n: ['노말'] }, // 강철에 효과 별로
    악: { s: ['에스퍼', '고스트'], w: ['격투', '악', '강철'], n: [] }, // 강철에 효과 별로
  },
}

function buildEraChart(era: TypeEra): TypeChart {
  const validTypes = new Set(TYPES_BY_ERA[era])
  const filterValid = (types: TypeName[]) => types.filter((t) => validTypes.has(t))
  const overrides = era === '6세대 이후' ? {} : ERA_OVERRIDES[era]

  const chart = {} as TypeChart
  for (const atk of TYPES_BY_ERA[era]) {
    const relation = overrides[atk] ?? CHART[atk]
    chart[atk] = { s: filterValid(relation.s), w: filterValid(relation.w), n: filterValid(relation.n) }
  }
  return chart
}

export const CHART_BY_ERA: Record<TypeEra, TypeChart> = {
  '1세대': buildEraChart('1세대'),
  '2~5세대': buildEraChart('2~5세대'),
  '6세대 이후': CHART,
}

export function mult(atk: TypeName, def: TypeName, era: TypeEra = '6세대 이후'): number {
  const r = CHART_BY_ERA[era][atk]
  if (r.n.includes(def)) return 0
  if (r.s.includes(def)) return 2
  if (r.w.includes(def)) return 0.5
  return 1
}

export function profile(defTypes: TypeName[], era: TypeEra = '6세대 이후'): TypeMatchup[] {
  return TYPES_BY_ERA[era].map((atk) => ({
    type: atk,
    m: defTypes.reduce((acc, def) => acc * mult(atk, def, era), 1),
  }))
}

export function classifyMatchup(m: number): MatchupClass {
  if (m === 0) return 'immune'
  if (m > 1) return 'weak'
  if (m < 1) return 'resist'
  return 'neutral'
}

// 밝은 배경 타입 → 칩/배지 글자색을 어둡게 처리
export const LIGHT: ReadonlySet<TypeName> = new Set(['전기', '얼음', '강철', '페어리', '땅'])

export const COLOR: Record<TypeName, string> = {
  노말: '#a8a878',
  불꽃: '#f08030',
  물: '#6890f0',
  전기: '#f8d030',
  풀: '#78c850',
  얼음: '#98d8d8',
  격투: '#c03028',
  독: '#a040a0',
  땅: '#e0c068',
  비행: '#a890f0',
  에스퍼: '#f85888',
  벌레: '#a8b820',
  바위: '#b8a038',
  고스트: '#705898',
  드래곤: '#7038f8',
  악: '#705848',
  강철: '#b8b8d0',
  페어리: '#ee99ac',
}

// Tailwind는 동적으로 조합된 클래스명(`` `bg-type-${slug}` ``)을 정적 분석으로 추출하지 못하므로,
// 완성된 클래스명 리터럴을 그대로 매핑해둔다 (CSS @theme의 --color-type-* 변수와 1:1 대응).
export const TYPE_BG_CLASS: Record<TypeName, string> = {
  노말: 'bg-type-normal',
  불꽃: 'bg-type-fire',
  물: 'bg-type-water',
  전기: 'bg-type-electric',
  풀: 'bg-type-grass',
  얼음: 'bg-type-ice',
  격투: 'bg-type-fighting',
  독: 'bg-type-poison',
  땅: 'bg-type-ground',
  비행: 'bg-type-flying',
  에스퍼: 'bg-type-psychic',
  벌레: 'bg-type-bug',
  바위: 'bg-type-rock',
  고스트: 'bg-type-ghost',
  드래곤: 'bg-type-dragon',
  악: 'bg-type-dark',
  강철: 'bg-type-steel',
  페어리: 'bg-type-fairy',
}

export const TYPE_TEXT_CLASS: Record<TypeName, string> = {
  노말: 'text-white',
  불꽃: 'text-white',
  물: 'text-white',
  전기: 'text-ink',
  풀: 'text-white',
  얼음: 'text-ink',
  격투: 'text-white',
  독: 'text-white',
  땅: 'text-ink',
  비행: 'text-white',
  에스퍼: 'text-white',
  벌레: 'text-white',
  바위: 'text-white',
  고스트: 'text-white',
  드래곤: 'text-white',
  악: 'text-white',
  강철: 'text-ink',
  페어리: 'text-ink',
}
