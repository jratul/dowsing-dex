import type { Guide } from '../../types/guide'

export const SAMPLE_GUIDES: Guide[] = [
  {
    slug: 'starter-pokemon',
    category: '입문',
    title: '3마리 스타팅 포켓몬, 누구를 골라야 할까?',
    iconPokemonId: 1,
    summary: '이상해씨·파이리·꼬부기의 장단점을 비교합니다.',
  },
  {
    slug: 'eevee-evolution',
    category: '진화',
    title: '이브이를 원하는 타입으로 진화시키는 법',
    iconPokemonId: 133,
    relatedPokemonIds: [134, 135, 136],
    summary: '진화의돌 종류별로 어떤 타입이 되는지 정리했습니다.',
  },
]
