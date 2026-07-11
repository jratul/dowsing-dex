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
