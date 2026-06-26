import type { PokemonStats } from '../types/pokemon'

// 완성된 클래스명을 그대로 매핑 (Tailwind 정적 추출 안전성, typeChart.ts의 TYPE_BG_CLASS와 동일한 이유)
export const STAT_BG_CLASS: Record<keyof PokemonStats, string> = {
  hp: 'bg-stat-hp',
  attack: 'bg-stat-attack',
  defense: 'bg-stat-defense',
  specialAttack: 'bg-stat-special-attack',
  specialDefense: 'bg-stat-special-defense',
  speed: 'bg-stat-speed',
}
