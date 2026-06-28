import type { EvolutionStage, Pokemon } from '../../types/pokemon'

function sprite(id: number) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}

function artwork(id: number) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
}

export const SAMPLE_POKEMON: Pokemon[] = [
  {
    id: 1,
    nameKo: '이상해씨',
    nameEn: 'Bulbasaur',
    types: ['풀', '독'],
    stats: { hp: 45, attack: 49, defense: 49, specialAttack: 65, specialDefense: 65, speed: 45 },
    category: '씨앗 포켓몬',
    heightM: 0.7,
    weightKg: 6.9,
    spriteUrl: sprite(1),
    artworkUrl: artwork(1),
  },
  {
    id: 2,
    nameKo: '이상해풀',
    nameEn: 'Ivysaur',
    types: ['풀', '독'],
    stats: { hp: 60, attack: 62, defense: 63, specialAttack: 80, specialDefense: 80, speed: 60 },
    category: '씨앗 포켓몬',
    heightM: 1.0,
    weightKg: 13.0,
    spriteUrl: sprite(2),
    artworkUrl: artwork(2),
  },
  {
    id: 3,
    nameKo: '이상해꽃',
    nameEn: 'Venusaur',
    types: ['풀', '독'],
    stats: { hp: 80, attack: 82, defense: 83, specialAttack: 100, specialDefense: 100, speed: 80 },
    category: '씨앗 포켓몬',
    heightM: 2.0,
    weightKg: 100.0,
    spriteUrl: sprite(3),
    artworkUrl: artwork(3),
  },
  {
    id: 4,
    nameKo: '파이리',
    nameEn: 'Charmander',
    types: ['불꽃'],
    stats: { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 },
    category: '도마뱀 포켓몬',
    heightM: 0.6,
    weightKg: 8.5,
    spriteUrl: sprite(4),
    artworkUrl: artwork(4),
  },
  {
    id: 5,
    nameKo: '리자드',
    nameEn: 'Charmeleon',
    types: ['불꽃'],
    stats: { hp: 58, attack: 64, defense: 58, specialAttack: 80, specialDefense: 65, speed: 80 },
    category: '도마뱀 포켓몬',
    heightM: 1.1,
    weightKg: 19.0,
    spriteUrl: sprite(5),
    artworkUrl: artwork(5),
  },
  {
    id: 6,
    nameKo: '리자몽',
    nameEn: 'Charizard',
    types: ['불꽃', '비행'],
    stats: { hp: 78, attack: 84, defense: 78, specialAttack: 109, specialDefense: 85, speed: 100 },
    category: '화염 포켓몬',
    heightM: 1.7,
    weightKg: 90.5,
    spriteUrl: sprite(6),
    artworkUrl: artwork(6),
  },
  {
    id: 7,
    nameKo: '꼬부기',
    nameEn: 'Squirtle',
    types: ['물'],
    stats: { hp: 44, attack: 48, defense: 65, specialAttack: 50, specialDefense: 64, speed: 43 },
    category: '꼬마거북 포켓몬',
    heightM: 0.5,
    weightKg: 9.0,
    spriteUrl: sprite(7),
    artworkUrl: artwork(7),
  },
  {
    id: 25,
    nameKo: '피카츄',
    nameEn: 'Pikachu',
    types: ['전기'],
    stats: { hp: 35, attack: 55, defense: 40, specialAttack: 50, specialDefense: 50, speed: 90 },
    category: '쥐 포켓몬',
    heightM: 0.4,
    weightKg: 6.0,
    spriteUrl: sprite(25),
    artworkUrl: artwork(25),
  },
  {
    id: 133,
    nameKo: '이브이',
    nameEn: 'Eevee',
    types: ['노말'],
    stats: { hp: 55, attack: 55, defense: 50, specialAttack: 45, specialDefense: 65, speed: 55 },
    category: '진화 포켓몬',
    heightM: 0.3,
    weightKg: 6.5,
    spriteUrl: sprite(133),
    artworkUrl: artwork(133),
  },
  {
    id: 134,
    nameKo: '샤미드',
    nameEn: 'Vaporeon',
    types: ['물'],
    stats: { hp: 130, attack: 65, defense: 60, specialAttack: 110, specialDefense: 95, speed: 65 },
    category: '거품 포켓몬',
    heightM: 1.0,
    weightKg: 29.0,
    spriteUrl: sprite(134),
    artworkUrl: artwork(134),
  },
  {
    id: 135,
    nameKo: '쥬피썬더',
    nameEn: 'Jolteon',
    types: ['전기'],
    stats: { hp: 65, attack: 65, defense: 60, specialAttack: 110, specialDefense: 95, speed: 130 },
    category: '번개 포켓몬',
    heightM: 0.8,
    weightKg: 24.5,
    spriteUrl: sprite(135),
    artworkUrl: artwork(135),
  },
  {
    id: 136,
    nameKo: '부스터',
    nameEn: 'Flareon',
    types: ['불꽃'],
    stats: { hp: 65, attack: 130, defense: 60, specialAttack: 95, specialDefense: 110, speed: 65 },
    category: '불꽃 포켓몬',
    heightM: 0.9,
    weightKg: 25.0,
    spriteUrl: sprite(136),
    artworkUrl: artwork(136),
  },
  {
    id: 150,
    nameKo: '뮤츠',
    nameEn: 'Mewtwo',
    types: ['에스퍼'],
    stats: { hp: 106, attack: 110, defense: 90, specialAttack: 154, specialDefense: 90, speed: 130 },
    category: '유전자 포켓몬',
    heightM: 2.0,
    weightKg: 122.0,
    spriteUrl: sprite(150),
    artworkUrl: artwork(150),
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

export const CHARMANDER_LINE: EvolutionStage[] = [
  {
    pokemonId: 4,
    children: [
      {
        pokemonId: 5,
        trigger: '레벨 16',
        children: [{ pokemonId: 6, trigger: '레벨 36' }],
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
  return { nameKo: pokemon?.nameKo ?? '???', spriteUrl: pokemon?.spriteUrl, artworkUrl: pokemon?.artworkUrl }
}

const EVOLUTION_LINES = [BULBASAUR_LINE, CHARMANDER_LINE, EEVEE_LINE]

function containsId(stage: EvolutionStage, id: number): boolean {
  if (stage.pokemonId === id) return true
  return stage.children?.some((child) => containsId(child, id)) ?? false
}

/** 주어진 포켓몬 ID가 속한 진화 체인을 찾는다. 없으면 undefined. */
export function findEvolutionLine(pokemonId: number): EvolutionStage[] | undefined {
  return EVOLUTION_LINES.find((line) => line.some((stage) => containsId(stage, pokemonId)))
}
