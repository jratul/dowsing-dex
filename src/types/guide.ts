export type GuideCategory = '입문' | '공략' | '대전' | '포획' | '진화'

export interface Guide {
  slug: string
  category: GuideCategory
  title: string
  iconPokemonId: number
  relatedPokemonIds?: number[]
  body?: string[]
  summary?: string
  bannerImageUrl?: string
}

/**
 * HGSS·기라티나PT 수집 가이드의 야생 출현 확률.
 * 버전 → 가이드 지역명 → 가이드 방법 라벨 → 포켓몬 id → 확률(%).
 */
export type HgssEncounterRates = Record<string, Record<string, Record<string, Record<number, number>>>>
