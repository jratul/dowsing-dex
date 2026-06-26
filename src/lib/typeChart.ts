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

export function mult(atk: TypeName, def: TypeName): number {
  const r = CHART[atk]
  if (r.n.includes(def)) return 0
  if (r.s.includes(def)) return 2
  if (r.w.includes(def)) return 0.5
  return 1
}

export function profile(defTypes: TypeName[]): TypeMatchup[] {
  return TYPE_ORDER.map((atk) => ({
    type: atk,
    m: defTypes.reduce((acc, def) => acc * mult(atk, def), 1),
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
