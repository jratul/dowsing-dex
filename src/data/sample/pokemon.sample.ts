import type { EvolutionStage, Pokemon } from '../../types/pokemon'

function sprite(id: number) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}

export const SAMPLE_POKEMON: Pokemon[] = [
  {
    id: 1,
    nameKo: '이상해씨',
    nameEn: 'Bulbasaur',
    types: ['풀', '독'],
    stats: { hp: 45, attack: 49, defense: 49, specialAttack: 65, specialDefense: 65, speed: 45 },
    category: '씨앗 포켓몬',
    spriteUrl: sprite(1),
  },
  {
    id: 2,
    nameKo: '이상해풀',
    nameEn: 'Ivysaur',
    types: ['풀', '독'],
    stats: { hp: 60, attack: 62, defense: 63, specialAttack: 80, specialDefense: 80, speed: 60 },
    category: '씨앗 포켓몬',
    spriteUrl: sprite(2),
  },
  {
    id: 3,
    nameKo: '이상해꽃',
    nameEn: 'Venusaur',
    types: ['풀', '독'],
    stats: { hp: 80, attack: 82, defense: 83, specialAttack: 100, specialDefense: 100, speed: 80 },
    category: '씨앗 포켓몬',
    spriteUrl: sprite(3),
  },
  {
    id: 4,
    nameKo: '파이리',
    nameEn: 'Charmander',
    types: ['불꽃'],
    stats: { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 },
    category: '도마뱀 포켓몬',
    spriteUrl: sprite(4),
  },
  {
    id: 7,
    nameKo: '꼬부기',
    nameEn: 'Squirtle',
    types: ['물'],
    stats: { hp: 44, attack: 48, defense: 65, specialAttack: 50, specialDefense: 64, speed: 43 },
    category: '꼬마거북 포켓몬',
    spriteUrl: sprite(7),
  },
  {
    id: 25,
    nameKo: '피카츄',
    nameEn: 'Pikachu',
    types: ['전기'],
    stats: { hp: 35, attack: 55, defense: 40, specialAttack: 50, specialDefense: 50, speed: 90 },
    category: '쥐 포켓몬',
    spriteUrl: sprite(25),
  },
  {
    id: 133,
    nameKo: '이브이',
    nameEn: 'Eevee',
    types: ['노말'],
    stats: { hp: 55, attack: 55, defense: 50, specialAttack: 45, specialDefense: 65, speed: 55 },
    category: '진화 포켓몬',
    spriteUrl: sprite(133),
  },
  {
    id: 134,
    nameKo: '샤미드',
    nameEn: 'Vaporeon',
    types: ['물'],
    stats: { hp: 130, attack: 65, defense: 60, specialAttack: 110, specialDefense: 95, speed: 65 },
    category: '거품 포켓몬',
    spriteUrl: sprite(134),
  },
  {
    id: 135,
    nameKo: '쥬피썬더',
    nameEn: 'Jolteon',
    types: ['전기'],
    stats: { hp: 65, attack: 65, defense: 60, specialAttack: 110, specialDefense: 95, speed: 130 },
    category: '번개 포켓몬',
    spriteUrl: sprite(135),
  },
  {
    id: 136,
    nameKo: '부스터',
    nameEn: 'Flareon',
    types: ['불꽃'],
    stats: { hp: 65, attack: 130, defense: 60, specialAttack: 95, specialDefense: 110, speed: 65 },
    category: '불꽃 포켓몬',
    spriteUrl: sprite(136),
  },
]

export const BULBASAUR_LINE: EvolutionStage[] = [
  {
    pokemonId: 1,
    children: [
      {
        pokemonId: 2,
        trigger: '레벨 16',
        children: [{ pokemonId: 3, trigger: '레벨 32' }],
      },
    ],
  },
]

export const EEVEE_LINE: EvolutionStage[] = [
  {
    pokemonId: 133,
    children: [
      { pokemonId: 134, trigger: '물의돌' },
      { pokemonId: 135, trigger: '번개의돌' },
      { pokemonId: 136, trigger: '불의돌' },
    ],
  },
]

export function findSamplePokemon(id: number) {
  const pokemon = SAMPLE_POKEMON.find((p) => p.id === id)
  return { nameKo: pokemon?.nameKo ?? '???', spriteUrl: pokemon?.spriteUrl }
}

const EVOLUTION_LINES = [BULBASAUR_LINE, EEVEE_LINE]

function containsId(stage: EvolutionStage, id: number): boolean {
  if (stage.pokemonId === id) return true
  return stage.children?.some((child) => containsId(child, id)) ?? false
}

/** 주어진 포켓몬 ID가 속한 진화 체인을 찾는다. 없으면 undefined. */
export function findEvolutionLine(pokemonId: number): EvolutionStage[] | undefined {
  return EVOLUTION_LINES.find((line) => line.some((stage) => containsId(stage, pokemonId)))
}
