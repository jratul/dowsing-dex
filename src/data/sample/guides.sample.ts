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
  {
    slug: 'pokemon-gold-story',
    category: '공략',
    title: '포켓몬 골드버전 스토리 엔트리 공략',
    iconPokemonId: 157,
    relatedPokemonIds: [157, 181, 130, 64, 169, 93],
    summary: '성도 스토리부터 사천왕, 관동, 레드전까지 추천 엔트리와 기술 배치 정리.',
  },
  {
    slug: 'pokemon-red-story',
    category: '공략',
    title: '포켓몬 레드버전 스토리 엔트리 공략',
    iconPokemonId: 6,
    relatedPokemonIds: [6, 34, 135, 131, 64, 85],
    summary: '1세대 파이리 스타팅 기준. 두트리오·윤겔라를 포함한 6마리 엔트리와 HM/TM 배분 정리.',
  },
  {
    slug: 'pokemon-firered-story',
    category: '공략',
    title: '포켓몬 파이어레드 스토리 엔트리 공략',
    iconPokemonId: 6,
    relatedPokemonIds: [6, 34, 135, 131, 143, 103],
    summary: '3세대 파이리 스타팅 기준. 잠만보·나시를 포함한 6마리 엔트리와 돌 진화 타이밍 정리.',
  },
  {
    slug: 'pokemon-red-evolution',
    category: '진화',
    title: '포켓몬스터 1세대 돌 진화·교환 진화 추천 타이밍 가이드',
    iconPokemonId: 34,
    relatedPokemonIds: [34, 135, 121, 65, 94, 103],
    summary: '1세대 레드/블루 기준 돌 진화·교환 진화 추천 타이밍, 기술 배치, 스토리 추천도 정리.',
  },
]
