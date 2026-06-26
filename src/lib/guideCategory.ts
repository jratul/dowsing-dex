import type { GuideCategory } from '../types/guide'

export interface CategoryStyle {
  bannerClass: string
  pillClass: string
}

// 카테고리별 배너 배경색 + 칩 텍스트 색상. 카테고리 칩 자체는 항상 흰 배경(참고 디자인 기준).
export const CATEGORY_STYLE: Record<GuideCategory, CategoryStyle> = {
  입문: { bannerClass: 'bg-category-intro', pillClass: 'text-category-intro-ink' },
  공략: { bannerClass: 'bg-category-strategy', pillClass: 'text-category-strategy-ink' },
  대전: { bannerClass: 'bg-category-battle', pillClass: 'text-category-battle-ink' },
  포획: { bannerClass: 'bg-category-capture', pillClass: 'text-category-capture-ink' },
  진화: { bannerClass: 'bg-category-evolution', pillClass: 'text-category-evolution-ink' },
}
