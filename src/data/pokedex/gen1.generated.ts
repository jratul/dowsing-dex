// 이 파일은 scripts/fetch-gen1.mjs 로 PokeAPI에서 생성됩니다. 직접 수정하지 마세요.
import type { EvolutionStage, Pokemon } from '../../types/pokemon'

export const GEN1_POKEMON: Pokemon[] = [
  {
    "id": 1,
    "nameKo": "이상해씨",
    "nameEn": "Bulbasaur",
    "types": [
      "풀",
      "독"
    ],
    "stats": {
      "hp": 45,
      "attack": 49,
      "defense": 49,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 45
    },
    "category": "씨앗 포켓몬",
    "heightM": 0.7,
    "weightKg": 6.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
  },
  {
    "id": 2,
    "nameKo": "이상해풀",
    "nameEn": "Ivysaur",
    "types": [
      "풀",
      "독"
    ],
    "stats": {
      "hp": 60,
      "attack": 62,
      "defense": 63,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 60
    },
    "category": "씨앗 포켓몬",
    "heightM": 1,
    "weightKg": 13,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
  },
  {
    "id": 3,
    "nameKo": "이상해꽃",
    "nameEn": "Venusaur",
    "types": [
      "풀",
      "독"
    ],
    "stats": {
      "hp": 80,
      "attack": 82,
      "defense": 83,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 80
    },
    "category": "씨앗 포켓몬",
    "heightM": 2,
    "weightKg": 100,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
  },
  {
    "id": 4,
    "nameKo": "파이리",
    "nameEn": "Charmander",
    "types": [
      "불꽃"
    ],
    "stats": {
      "hp": 39,
      "attack": 52,
      "defense": 43,
      "specialAttack": 60,
      "specialDefense": 50,
      "speed": 65
    },
    "category": "도롱뇽 포켓몬",
    "heightM": 0.6,
    "weightKg": 8.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
  },
  {
    "id": 5,
    "nameKo": "리자드",
    "nameEn": "Charmeleon",
    "types": [
      "불꽃"
    ],
    "stats": {
      "hp": 58,
      "attack": 64,
      "defense": 58,
      "specialAttack": 80,
      "specialDefense": 65,
      "speed": 80
    },
    "category": "화염 포켓몬",
    "heightM": 1.1,
    "weightKg": 19,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"
  },
  {
    "id": 6,
    "nameKo": "리자몽",
    "nameEn": "Charizard",
    "types": [
      "불꽃",
      "비행"
    ],
    "stats": {
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "specialAttack": 109,
      "specialDefense": 85,
      "speed": 100
    },
    "category": "화염 포켓몬",
    "heightM": 1.7,
    "weightKg": 90.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
  },
  {
    "id": 7,
    "nameKo": "꼬부기",
    "nameEn": "Squirtle",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 44,
      "attack": 48,
      "defense": 65,
      "specialAttack": 50,
      "specialDefense": 64,
      "speed": 43
    },
    "category": "꼬마거북 포켓몬",
    "heightM": 0.5,
    "weightKg": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
  },
  {
    "id": 8,
    "nameKo": "어니부기",
    "nameEn": "Wartortle",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 59,
      "attack": 63,
      "defense": 80,
      "specialAttack": 65,
      "specialDefense": 80,
      "speed": 58
    },
    "category": "거북 포켓몬",
    "heightM": 1,
    "weightKg": 22.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png"
  },
  {
    "id": 9,
    "nameKo": "거북왕",
    "nameEn": "Blastoise",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 79,
      "attack": 83,
      "defense": 100,
      "specialAttack": 85,
      "specialDefense": 105,
      "speed": 78
    },
    "category": "껍질 포켓몬",
    "heightM": 1.6,
    "weightKg": 85.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
  },
  {
    "id": 10,
    "nameKo": "캐터피",
    "nameEn": "Caterpie",
    "types": [
      "벌레"
    ],
    "stats": {
      "hp": 45,
      "attack": 30,
      "defense": 35,
      "specialAttack": 20,
      "specialDefense": 20,
      "speed": 45
    },
    "category": "애벌레 포켓몬",
    "heightM": 0.3,
    "weightKg": 2.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png"
  },
  {
    "id": 11,
    "nameKo": "단데기",
    "nameEn": "Metapod",
    "types": [
      "벌레"
    ],
    "stats": {
      "hp": 50,
      "attack": 20,
      "defense": 55,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 30
    },
    "category": "번데기 포켓몬",
    "heightM": 0.7,
    "weightKg": 9.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png"
  },
  {
    "id": 12,
    "nameKo": "버터플",
    "nameEn": "Butterfree",
    "types": [
      "벌레",
      "비행"
    ],
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 50,
      "specialAttack": 90,
      "specialDefense": 80,
      "speed": 70
    },
    "category": "나비 포켓몬",
    "heightM": 1.1,
    "weightKg": 32,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png"
  },
  {
    "id": 13,
    "nameKo": "뿔충이",
    "nameEn": "Weedle",
    "types": [
      "벌레",
      "독"
    ],
    "stats": {
      "hp": 40,
      "attack": 35,
      "defense": 30,
      "specialAttack": 20,
      "specialDefense": 20,
      "speed": 50
    },
    "category": "송충이 포켓몬",
    "heightM": 0.3,
    "weightKg": 3.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png"
  },
  {
    "id": 14,
    "nameKo": "딱충이",
    "nameEn": "Kakuna",
    "types": [
      "벌레",
      "독"
    ],
    "stats": {
      "hp": 45,
      "attack": 25,
      "defense": 50,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 35
    },
    "category": "번데기 포켓몬",
    "heightM": 0.6,
    "weightKg": 10,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png"
  },
  {
    "id": 15,
    "nameKo": "독침붕",
    "nameEn": "Beedrill",
    "types": [
      "벌레",
      "독"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 40,
      "specialAttack": 45,
      "specialDefense": 80,
      "speed": 75
    },
    "category": "독벌 포켓몬",
    "heightM": 1,
    "weightKg": 29.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png"
  },
  {
    "id": 16,
    "nameKo": "구구",
    "nameEn": "Pidgey",
    "types": [
      "노말",
      "비행"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 56
    },
    "category": "아기새 포켓몬",
    "heightM": 0.3,
    "weightKg": 1.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png"
  },
  {
    "id": 17,
    "nameKo": "피죤",
    "nameEn": "Pidgeotto",
    "types": [
      "노말",
      "비행"
    ],
    "stats": {
      "hp": 63,
      "attack": 60,
      "defense": 55,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 71
    },
    "category": "새 포켓몬",
    "heightM": 1.1,
    "weightKg": 30,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png"
  },
  {
    "id": 18,
    "nameKo": "피죤투",
    "nameEn": "Pidgeot",
    "types": [
      "노말",
      "비행"
    ],
    "stats": {
      "hp": 83,
      "attack": 80,
      "defense": 75,
      "specialAttack": 70,
      "specialDefense": 70,
      "speed": 101
    },
    "category": "새 포켓몬",
    "heightM": 1.5,
    "weightKg": 39.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png"
  },
  {
    "id": 19,
    "nameKo": "꼬렛",
    "nameEn": "Rattata",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 30,
      "attack": 56,
      "defense": 35,
      "specialAttack": 25,
      "specialDefense": 35,
      "speed": 72
    },
    "category": "쥐 포켓몬",
    "heightM": 0.3,
    "weightKg": 3.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png"
  },
  {
    "id": 20,
    "nameKo": "레트라",
    "nameEn": "Raticate",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 55,
      "attack": 81,
      "defense": 60,
      "specialAttack": 50,
      "specialDefense": 70,
      "speed": 97
    },
    "category": "쥐 포켓몬",
    "heightM": 0.7,
    "weightKg": 18.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png"
  },
  {
    "id": 21,
    "nameKo": "깨비참",
    "nameEn": "Spearow",
    "types": [
      "노말",
      "비행"
    ],
    "stats": {
      "hp": 40,
      "attack": 60,
      "defense": 30,
      "specialAttack": 31,
      "specialDefense": 31,
      "speed": 70
    },
    "category": "아기새 포켓몬",
    "heightM": 0.3,
    "weightKg": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png"
  },
  {
    "id": 22,
    "nameKo": "깨비드릴조",
    "nameEn": "Fearow",
    "types": [
      "노말",
      "비행"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 65,
      "specialAttack": 61,
      "specialDefense": 61,
      "speed": 100
    },
    "category": "부리 포켓몬",
    "heightM": 1.2,
    "weightKg": 38,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png"
  },
  {
    "id": 23,
    "nameKo": "아보",
    "nameEn": "Ekans",
    "types": [
      "독"
    ],
    "stats": {
      "hp": 35,
      "attack": 60,
      "defense": 44,
      "specialAttack": 40,
      "specialDefense": 54,
      "speed": 55
    },
    "category": "뱀 포켓몬",
    "heightM": 2,
    "weightKg": 6.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png"
  },
  {
    "id": 24,
    "nameKo": "아보크",
    "nameEn": "Arbok",
    "types": [
      "독"
    ],
    "stats": {
      "hp": 60,
      "attack": 95,
      "defense": 69,
      "specialAttack": 65,
      "specialDefense": 79,
      "speed": 80
    },
    "category": "코브라 포켓몬",
    "heightM": 3.5,
    "weightKg": 65,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png"
  },
  {
    "id": 25,
    "nameKo": "피카츄",
    "nameEn": "Pikachu",
    "types": [
      "전기"
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 90
    },
    "category": "쥐 포켓몬",
    "heightM": 0.4,
    "weightKg": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
  },
  {
    "id": 26,
    "nameKo": "라이츄",
    "nameEn": "Raichu",
    "types": [
      "전기"
    ],
    "stats": {
      "hp": 60,
      "attack": 90,
      "defense": 55,
      "specialAttack": 90,
      "specialDefense": 80,
      "speed": 110
    },
    "category": "쥐 포켓몬",
    "heightM": 0.8,
    "weightKg": 30,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png"
  },
  {
    "id": 27,
    "nameKo": "모래두지",
    "nameEn": "Sandshrew",
    "types": [
      "땅"
    ],
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 85,
      "specialAttack": 20,
      "specialDefense": 30,
      "speed": 40
    },
    "category": "쥐 포켓몬",
    "heightM": 0.6,
    "weightKg": 12,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png"
  },
  {
    "id": 28,
    "nameKo": "고지",
    "nameEn": "Sandslash",
    "types": [
      "땅"
    ],
    "stats": {
      "hp": 75,
      "attack": 100,
      "defense": 110,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 65
    },
    "category": "쥐 포켓몬",
    "heightM": 1,
    "weightKg": 29.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png"
  },
  {
    "id": 29,
    "nameKo": "니드런♀",
    "nameEn": "Nidoran♀",
    "types": [
      "독"
    ],
    "stats": {
      "hp": 55,
      "attack": 47,
      "defense": 52,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 41
    },
    "category": "독침 포켓몬",
    "heightM": 0.4,
    "weightKg": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png"
  },
  {
    "id": 30,
    "nameKo": "니드리나",
    "nameEn": "Nidorina",
    "types": [
      "독"
    ],
    "stats": {
      "hp": 70,
      "attack": 62,
      "defense": 67,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 56
    },
    "category": "독침 포켓몬",
    "heightM": 0.8,
    "weightKg": 20,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png"
  },
  {
    "id": 31,
    "nameKo": "니드퀸",
    "nameEn": "Nidoqueen",
    "types": [
      "독",
      "땅"
    ],
    "stats": {
      "hp": 90,
      "attack": 92,
      "defense": 87,
      "specialAttack": 75,
      "specialDefense": 85,
      "speed": 76
    },
    "category": "드릴 포켓몬",
    "heightM": 1.3,
    "weightKg": 60,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png"
  },
  {
    "id": 32,
    "nameKo": "니드런♂",
    "nameEn": "Nidoran♂",
    "types": [
      "독"
    ],
    "stats": {
      "hp": 46,
      "attack": 57,
      "defense": 40,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 50
    },
    "category": "독침 포켓몬",
    "heightM": 0.5,
    "weightKg": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png"
  },
  {
    "id": 33,
    "nameKo": "니드리노",
    "nameEn": "Nidorino",
    "types": [
      "독"
    ],
    "stats": {
      "hp": 61,
      "attack": 72,
      "defense": 57,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 65
    },
    "category": "독침 포켓몬",
    "heightM": 0.9,
    "weightKg": 19.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png"
  },
  {
    "id": 34,
    "nameKo": "니드킹",
    "nameEn": "Nidoking",
    "types": [
      "독",
      "땅"
    ],
    "stats": {
      "hp": 81,
      "attack": 102,
      "defense": 77,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 85
    },
    "category": "드릴 포켓몬",
    "heightM": 1.4,
    "weightKg": 62,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png"
  },
  {
    "id": 35,
    "nameKo": "삐삐",
    "nameEn": "Clefairy",
    "types": [
      "페어리"
    ],
    "stats": {
      "hp": 70,
      "attack": 45,
      "defense": 48,
      "specialAttack": 60,
      "specialDefense": 65,
      "speed": 35
    },
    "category": "요정 포켓몬",
    "heightM": 0.6,
    "weightKg": 7.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png"
  },
  {
    "id": 36,
    "nameKo": "픽시",
    "nameEn": "Clefable",
    "types": [
      "페어리"
    ],
    "stats": {
      "hp": 95,
      "attack": 70,
      "defense": 73,
      "specialAttack": 95,
      "specialDefense": 90,
      "speed": 60
    },
    "category": "요정 포켓몬",
    "heightM": 1.3,
    "weightKg": 40,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png"
  },
  {
    "id": 37,
    "nameKo": "식스테일",
    "nameEn": "Vulpix",
    "types": [
      "불꽃"
    ],
    "stats": {
      "hp": 38,
      "attack": 41,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 65,
      "speed": 65
    },
    "category": "여우 포켓몬",
    "heightM": 0.6,
    "weightKg": 9.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png"
  },
  {
    "id": 38,
    "nameKo": "나인테일",
    "nameEn": "Ninetales",
    "types": [
      "불꽃"
    ],
    "stats": {
      "hp": 73,
      "attack": 76,
      "defense": 75,
      "specialAttack": 81,
      "specialDefense": 100,
      "speed": 100
    },
    "category": "여우 포켓몬",
    "heightM": 1.1,
    "weightKg": 19.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png"
  },
  {
    "id": 39,
    "nameKo": "푸린",
    "nameEn": "Jigglypuff",
    "types": [
      "노말",
      "페어리"
    ],
    "stats": {
      "hp": 115,
      "attack": 45,
      "defense": 20,
      "specialAttack": 45,
      "specialDefense": 25,
      "speed": 20
    },
    "category": "풍선 포켓몬",
    "heightM": 0.5,
    "weightKg": 5.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png"
  },
  {
    "id": 40,
    "nameKo": "푸크린",
    "nameEn": "Wigglytuff",
    "types": [
      "노말",
      "페어리"
    ],
    "stats": {
      "hp": 140,
      "attack": 70,
      "defense": 45,
      "specialAttack": 85,
      "specialDefense": 50,
      "speed": 45
    },
    "category": "풍선 포켓몬",
    "heightM": 1,
    "weightKg": 12,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png"
  },
  {
    "id": 41,
    "nameKo": "주뱃",
    "nameEn": "Zubat",
    "types": [
      "독",
      "비행"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "specialAttack": 30,
      "specialDefense": 40,
      "speed": 55
    },
    "category": "박쥐 포켓몬",
    "heightM": 0.8,
    "weightKg": 7.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png"
  },
  {
    "id": 42,
    "nameKo": "골뱃",
    "nameEn": "Golbat",
    "types": [
      "독",
      "비행"
    ],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 70,
      "specialAttack": 65,
      "specialDefense": 75,
      "speed": 90
    },
    "category": "박쥐 포켓몬",
    "heightM": 1.6,
    "weightKg": 55,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png"
  },
  {
    "id": 43,
    "nameKo": "뚜벅쵸",
    "nameEn": "Oddish",
    "types": [
      "풀",
      "독"
    ],
    "stats": {
      "hp": 45,
      "attack": 50,
      "defense": 55,
      "specialAttack": 75,
      "specialDefense": 65,
      "speed": 30
    },
    "category": "잡초 포켓몬",
    "heightM": 0.5,
    "weightKg": 5.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png"
  },
  {
    "id": 44,
    "nameKo": "냄새꼬",
    "nameEn": "Gloom",
    "types": [
      "풀",
      "독"
    ],
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 70,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 40
    },
    "category": "잡초 포켓몬",
    "heightM": 0.8,
    "weightKg": 8.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png"
  },
  {
    "id": 45,
    "nameKo": "라플레시아",
    "nameEn": "Vileplume",
    "types": [
      "풀",
      "독"
    ],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 85,
      "specialAttack": 110,
      "specialDefense": 90,
      "speed": 50
    },
    "category": "꽃 포켓몬",
    "heightM": 1.2,
    "weightKg": 18.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png"
  },
  {
    "id": 46,
    "nameKo": "파라스",
    "nameEn": "Paras",
    "types": [
      "벌레",
      "풀"
    ],
    "stats": {
      "hp": 35,
      "attack": 70,
      "defense": 55,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 25
    },
    "category": "버섯 포켓몬",
    "heightM": 0.3,
    "weightKg": 5.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png"
  },
  {
    "id": 47,
    "nameKo": "파라섹트",
    "nameEn": "Parasect",
    "types": [
      "벌레",
      "풀"
    ],
    "stats": {
      "hp": 60,
      "attack": 95,
      "defense": 80,
      "specialAttack": 60,
      "specialDefense": 80,
      "speed": 30
    },
    "category": "버섯 포켓몬",
    "heightM": 1,
    "weightKg": 29.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png"
  },
  {
    "id": 48,
    "nameKo": "콘팡",
    "nameEn": "Venonat",
    "types": [
      "벌레",
      "독"
    ],
    "stats": {
      "hp": 60,
      "attack": 55,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 55,
      "speed": 45
    },
    "category": "곤충 포켓몬",
    "heightM": 1,
    "weightKg": 30,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png"
  },
  {
    "id": 49,
    "nameKo": "도나리",
    "nameEn": "Venomoth",
    "types": [
      "벌레",
      "독"
    ],
    "stats": {
      "hp": 70,
      "attack": 65,
      "defense": 60,
      "specialAttack": 90,
      "specialDefense": 75,
      "speed": 90
    },
    "category": "독나방 포켓몬",
    "heightM": 1.5,
    "weightKg": 12.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png"
  },
  {
    "id": 50,
    "nameKo": "디그다",
    "nameEn": "Diglett",
    "types": [
      "땅"
    ],
    "stats": {
      "hp": 10,
      "attack": 55,
      "defense": 25,
      "specialAttack": 35,
      "specialDefense": 45,
      "speed": 95
    },
    "category": "두더지 포켓몬",
    "heightM": 0.2,
    "weightKg": 0.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png"
  },
  {
    "id": 51,
    "nameKo": "닥트리오",
    "nameEn": "Dugtrio",
    "types": [
      "땅"
    ],
    "stats": {
      "hp": 35,
      "attack": 100,
      "defense": 50,
      "specialAttack": 50,
      "specialDefense": 70,
      "speed": 120
    },
    "category": "두더지 포켓몬",
    "heightM": 0.7,
    "weightKg": 33.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png"
  },
  {
    "id": 52,
    "nameKo": "나옹",
    "nameEn": "Meowth",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 90
    },
    "category": "요괴고양이 포켓몬",
    "heightM": 0.4,
    "weightKg": 4.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png"
  },
  {
    "id": 53,
    "nameKo": "페르시온",
    "nameEn": "Persian",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 65,
      "attack": 70,
      "defense": 60,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 115
    },
    "category": "샴고양이 포켓몬",
    "heightM": 1,
    "weightKg": 32,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png"
  },
  {
    "id": 54,
    "nameKo": "고라파덕",
    "nameEn": "Psyduck",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 50,
      "attack": 52,
      "defense": 48,
      "specialAttack": 65,
      "specialDefense": 50,
      "speed": 55
    },
    "category": "오리 포켓몬",
    "heightM": 0.8,
    "weightKg": 19.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png"
  },
  {
    "id": 55,
    "nameKo": "골덕",
    "nameEn": "Golduck",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 80,
      "attack": 82,
      "defense": 78,
      "specialAttack": 95,
      "specialDefense": 80,
      "speed": 85
    },
    "category": "오리 포켓몬",
    "heightM": 1.7,
    "weightKg": 76.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png"
  },
  {
    "id": 56,
    "nameKo": "망키",
    "nameEn": "Mankey",
    "types": [
      "격투"
    ],
    "stats": {
      "hp": 40,
      "attack": 80,
      "defense": 35,
      "specialAttack": 35,
      "specialDefense": 45,
      "speed": 70
    },
    "category": "돈숭이 포켓몬",
    "heightM": 0.5,
    "weightKg": 28,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png"
  },
  {
    "id": 57,
    "nameKo": "성원숭",
    "nameEn": "Primeape",
    "types": [
      "격투"
    ],
    "stats": {
      "hp": 65,
      "attack": 105,
      "defense": 60,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 95
    },
    "category": "돈숭이 포켓몬",
    "heightM": 1,
    "weightKg": 32,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png"
  },
  {
    "id": 58,
    "nameKo": "가디",
    "nameEn": "Growlithe",
    "types": [
      "불꽃"
    ],
    "stats": {
      "hp": 55,
      "attack": 70,
      "defense": 45,
      "specialAttack": 70,
      "specialDefense": 50,
      "speed": 60
    },
    "category": "강아지 포켓몬",
    "heightM": 0.7,
    "weightKg": 19,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png"
  },
  {
    "id": 59,
    "nameKo": "윈디",
    "nameEn": "Arcanine",
    "types": [
      "불꽃"
    ],
    "stats": {
      "hp": 90,
      "attack": 110,
      "defense": 80,
      "specialAttack": 100,
      "specialDefense": 80,
      "speed": 95
    },
    "category": "전설 포켓몬",
    "heightM": 1.9,
    "weightKg": 155,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png"
  },
  {
    "id": 60,
    "nameKo": "발챙이",
    "nameEn": "Poliwag",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 40,
      "attack": 50,
      "defense": 40,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 90
    },
    "category": "올챙이 포켓몬",
    "heightM": 0.6,
    "weightKg": 12.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png"
  },
  {
    "id": 61,
    "nameKo": "슈륙챙이",
    "nameEn": "Poliwhirl",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 65,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 90
    },
    "category": "올챙이 포켓몬",
    "heightM": 1,
    "weightKg": 20,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png"
  },
  {
    "id": 62,
    "nameKo": "강챙이",
    "nameEn": "Poliwrath",
    "types": [
      "물",
      "격투"
    ],
    "stats": {
      "hp": 90,
      "attack": 95,
      "defense": 95,
      "specialAttack": 70,
      "specialDefense": 90,
      "speed": 70
    },
    "category": "올챙이 포켓몬",
    "heightM": 1.3,
    "weightKg": 54,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png"
  },
  {
    "id": 63,
    "nameKo": "캐이시",
    "nameEn": "Abra",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 25,
      "attack": 20,
      "defense": 15,
      "specialAttack": 105,
      "specialDefense": 55,
      "speed": 90
    },
    "category": "초능력 포켓몬",
    "heightM": 0.9,
    "weightKg": 19.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png"
  },
  {
    "id": 64,
    "nameKo": "윤겔라",
    "nameEn": "Kadabra",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 40,
      "attack": 35,
      "defense": 30,
      "specialAttack": 120,
      "specialDefense": 70,
      "speed": 105
    },
    "category": "초능력 포켓몬",
    "heightM": 1.3,
    "weightKg": 56.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png"
  },
  {
    "id": 65,
    "nameKo": "후딘",
    "nameEn": "Alakazam",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 55,
      "attack": 50,
      "defense": 45,
      "specialAttack": 135,
      "specialDefense": 95,
      "speed": 120
    },
    "category": "초능력 포켓몬",
    "heightM": 1.5,
    "weightKg": 48,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png"
  },
  {
    "id": 66,
    "nameKo": "알통몬",
    "nameEn": "Machop",
    "types": [
      "격투"
    ],
    "stats": {
      "hp": 70,
      "attack": 80,
      "defense": 50,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 35
    },
    "category": "괴력 포켓몬",
    "heightM": 0.8,
    "weightKg": 19.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png"
  },
  {
    "id": 67,
    "nameKo": "근육몬",
    "nameEn": "Machoke",
    "types": [
      "격투"
    ],
    "stats": {
      "hp": 80,
      "attack": 100,
      "defense": 70,
      "specialAttack": 50,
      "specialDefense": 60,
      "speed": 45
    },
    "category": "괴력 포켓몬",
    "heightM": 1.5,
    "weightKg": 70.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png"
  },
  {
    "id": 68,
    "nameKo": "괴력몬",
    "nameEn": "Machamp",
    "types": [
      "격투"
    ],
    "stats": {
      "hp": 90,
      "attack": 130,
      "defense": 80,
      "specialAttack": 65,
      "specialDefense": 85,
      "speed": 55
    },
    "category": "괴력 포켓몬",
    "heightM": 1.6,
    "weightKg": 130,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png"
  },
  {
    "id": 69,
    "nameKo": "모다피",
    "nameEn": "Bellsprout",
    "types": [
      "풀",
      "독"
    ],
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 35,
      "specialAttack": 70,
      "specialDefense": 30,
      "speed": 40
    },
    "category": "꽃 포켓몬",
    "heightM": 0.7,
    "weightKg": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png"
  },
  {
    "id": 70,
    "nameKo": "우츠동",
    "nameEn": "Weepinbell",
    "types": [
      "풀",
      "독"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 50,
      "specialAttack": 85,
      "specialDefense": 45,
      "speed": 55
    },
    "category": "파리잡이 포켓몬",
    "heightM": 1,
    "weightKg": 6.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png"
  },
  {
    "id": 71,
    "nameKo": "우츠보트",
    "nameEn": "Victreebel",
    "types": [
      "풀",
      "독"
    ],
    "stats": {
      "hp": 80,
      "attack": 105,
      "defense": 65,
      "specialAttack": 100,
      "specialDefense": 70,
      "speed": 70
    },
    "category": "파리잡이 포켓몬",
    "heightM": 1.7,
    "weightKg": 15.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png"
  },
  {
    "id": 72,
    "nameKo": "왕눈해",
    "nameEn": "Tentacool",
    "types": [
      "물",
      "독"
    ],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 35,
      "specialAttack": 50,
      "specialDefense": 100,
      "speed": 70
    },
    "category": "해파리 포켓몬",
    "heightM": 0.9,
    "weightKg": 45.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png"
  },
  {
    "id": 73,
    "nameKo": "독파리",
    "nameEn": "Tentacruel",
    "types": [
      "물",
      "독"
    ],
    "stats": {
      "hp": 80,
      "attack": 70,
      "defense": 65,
      "specialAttack": 80,
      "specialDefense": 120,
      "speed": 100
    },
    "category": "해파리 포켓몬",
    "heightM": 1.6,
    "weightKg": 55,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png"
  },
  {
    "id": 74,
    "nameKo": "꼬마돌",
    "nameEn": "Geodude",
    "types": [
      "바위",
      "땅"
    ],
    "stats": {
      "hp": 40,
      "attack": 80,
      "defense": 100,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 20
    },
    "category": "암석 포켓몬",
    "heightM": 0.4,
    "weightKg": 20,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png"
  },
  {
    "id": 75,
    "nameKo": "데구리",
    "nameEn": "Graveler",
    "types": [
      "바위",
      "땅"
    ],
    "stats": {
      "hp": 55,
      "attack": 95,
      "defense": 115,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 35
    },
    "category": "암석 포켓몬",
    "heightM": 1,
    "weightKg": 105,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png"
  },
  {
    "id": 76,
    "nameKo": "딱구리",
    "nameEn": "Golem",
    "types": [
      "바위",
      "땅"
    ],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 130,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 45
    },
    "category": "메가톤 포켓몬",
    "heightM": 1.4,
    "weightKg": 300,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png"
  },
  {
    "id": 77,
    "nameKo": "포니타",
    "nameEn": "Ponyta",
    "types": [
      "불꽃"
    ],
    "stats": {
      "hp": 50,
      "attack": 85,
      "defense": 55,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 90
    },
    "category": "불의말 포켓몬",
    "heightM": 1,
    "weightKg": 30,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png"
  },
  {
    "id": 78,
    "nameKo": "날쌩마",
    "nameEn": "Rapidash",
    "types": [
      "불꽃"
    ],
    "stats": {
      "hp": 65,
      "attack": 100,
      "defense": 70,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 105
    },
    "category": "불의말 포켓몬",
    "heightM": 1.7,
    "weightKg": 95,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png"
  },
  {
    "id": 79,
    "nameKo": "야돈",
    "nameEn": "Slowpoke",
    "types": [
      "물",
      "에스퍼"
    ],
    "stats": {
      "hp": 90,
      "attack": 65,
      "defense": 65,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 15
    },
    "category": "얼간이 포켓몬",
    "heightM": 1.2,
    "weightKg": 36,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png"
  },
  {
    "id": 80,
    "nameKo": "야도란",
    "nameEn": "Slowbro",
    "types": [
      "물",
      "에스퍼"
    ],
    "stats": {
      "hp": 95,
      "attack": 75,
      "defense": 110,
      "specialAttack": 100,
      "specialDefense": 80,
      "speed": 30
    },
    "category": "기생 포켓몬",
    "heightM": 1.6,
    "weightKg": 78.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png"
  },
  {
    "id": 81,
    "nameKo": "코일",
    "nameEn": "Magnemite",
    "types": [
      "전기",
      "강철"
    ],
    "stats": {
      "hp": 25,
      "attack": 35,
      "defense": 70,
      "specialAttack": 95,
      "specialDefense": 55,
      "speed": 45
    },
    "category": "자석 포켓몬",
    "heightM": 0.3,
    "weightKg": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png"
  },
  {
    "id": 82,
    "nameKo": "레어코일",
    "nameEn": "Magneton",
    "types": [
      "전기",
      "강철"
    ],
    "stats": {
      "hp": 50,
      "attack": 60,
      "defense": 95,
      "specialAttack": 120,
      "specialDefense": 70,
      "speed": 70
    },
    "category": "자석 포켓몬",
    "heightM": 1,
    "weightKg": 60,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png"
  },
  {
    "id": 83,
    "nameKo": "파오리",
    "nameEn": "Farfetch’d",
    "types": [
      "노말",
      "비행"
    ],
    "stats": {
      "hp": 52,
      "attack": 90,
      "defense": 55,
      "specialAttack": 58,
      "specialDefense": 62,
      "speed": 60
    },
    "category": "청둥오리 포켓몬",
    "heightM": 0.8,
    "weightKg": 15,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png"
  },
  {
    "id": 84,
    "nameKo": "두두",
    "nameEn": "Doduo",
    "types": [
      "노말",
      "비행"
    ],
    "stats": {
      "hp": 35,
      "attack": 85,
      "defense": 45,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 75
    },
    "category": "쌍둥이새 포켓몬",
    "heightM": 1.4,
    "weightKg": 39.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png"
  },
  {
    "id": 85,
    "nameKo": "두트리오",
    "nameEn": "Dodrio",
    "types": [
      "노말",
      "비행"
    ],
    "stats": {
      "hp": 60,
      "attack": 110,
      "defense": 70,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 110
    },
    "category": "세쌍둥이새 포켓몬",
    "heightM": 1.8,
    "weightKg": 85.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png"
  },
  {
    "id": 86,
    "nameKo": "쥬쥬",
    "nameEn": "Seel",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 65,
      "attack": 45,
      "defense": 55,
      "specialAttack": 45,
      "specialDefense": 70,
      "speed": 45
    },
    "category": "강치 포켓몬",
    "heightM": 1.1,
    "weightKg": 90,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png"
  },
  {
    "id": 87,
    "nameKo": "쥬레곤",
    "nameEn": "Dewgong",
    "types": [
      "물",
      "얼음"
    ],
    "stats": {
      "hp": 90,
      "attack": 70,
      "defense": 80,
      "specialAttack": 70,
      "specialDefense": 95,
      "speed": 70
    },
    "category": "강치 포켓몬",
    "heightM": 1.7,
    "weightKg": 120,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png"
  },
  {
    "id": 88,
    "nameKo": "질퍽이",
    "nameEn": "Grimer",
    "types": [
      "독"
    ],
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 25
    },
    "category": "진흙 포켓몬",
    "heightM": 0.9,
    "weightKg": 30,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png"
  },
  {
    "id": 89,
    "nameKo": "질뻐기",
    "nameEn": "Muk",
    "types": [
      "독"
    ],
    "stats": {
      "hp": 105,
      "attack": 105,
      "defense": 75,
      "specialAttack": 65,
      "specialDefense": 100,
      "speed": 50
    },
    "category": "진흙 포켓몬",
    "heightM": 1.2,
    "weightKg": 30,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png"
  },
  {
    "id": 90,
    "nameKo": "셀러",
    "nameEn": "Shellder",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 30,
      "attack": 65,
      "defense": 100,
      "specialAttack": 45,
      "specialDefense": 25,
      "speed": 40
    },
    "category": "두조개 포켓몬",
    "heightM": 0.3,
    "weightKg": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png"
  },
  {
    "id": 91,
    "nameKo": "파르셀",
    "nameEn": "Cloyster",
    "types": [
      "물",
      "얼음"
    ],
    "stats": {
      "hp": 50,
      "attack": 95,
      "defense": 180,
      "specialAttack": 85,
      "specialDefense": 45,
      "speed": 70
    },
    "category": "두조개 포켓몬",
    "heightM": 1.5,
    "weightKg": 132.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png"
  },
  {
    "id": 92,
    "nameKo": "고오스",
    "nameEn": "Gastly",
    "types": [
      "고스트",
      "독"
    ],
    "stats": {
      "hp": 30,
      "attack": 35,
      "defense": 30,
      "specialAttack": 100,
      "specialDefense": 35,
      "speed": 80
    },
    "category": "가스 포켓몬",
    "heightM": 1.3,
    "weightKg": 0.1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png"
  },
  {
    "id": 93,
    "nameKo": "고우스트",
    "nameEn": "Haunter",
    "types": [
      "고스트",
      "독"
    ],
    "stats": {
      "hp": 45,
      "attack": 50,
      "defense": 45,
      "specialAttack": 115,
      "specialDefense": 55,
      "speed": 95
    },
    "category": "가스 포켓몬",
    "heightM": 1.6,
    "weightKg": 0.1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png"
  },
  {
    "id": 94,
    "nameKo": "팬텀",
    "nameEn": "Gengar",
    "types": [
      "고스트",
      "독"
    ],
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 60,
      "specialAttack": 130,
      "specialDefense": 75,
      "speed": 110
    },
    "category": "그림자 포켓몬",
    "heightM": 1.5,
    "weightKg": 40.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png"
  },
  {
    "id": 95,
    "nameKo": "롱스톤",
    "nameEn": "Onix",
    "types": [
      "바위",
      "땅"
    ],
    "stats": {
      "hp": 35,
      "attack": 45,
      "defense": 160,
      "specialAttack": 30,
      "specialDefense": 45,
      "speed": 70
    },
    "category": "돌뱀 포켓몬",
    "heightM": 8.8,
    "weightKg": 210,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png"
  },
  {
    "id": 96,
    "nameKo": "슬리프",
    "nameEn": "Drowzee",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 60,
      "attack": 48,
      "defense": 45,
      "specialAttack": 43,
      "specialDefense": 90,
      "speed": 42
    },
    "category": "최면 포켓몬",
    "heightM": 1,
    "weightKg": 32.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png"
  },
  {
    "id": 97,
    "nameKo": "슬리퍼",
    "nameEn": "Hypno",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 85,
      "attack": 73,
      "defense": 70,
      "specialAttack": 73,
      "specialDefense": 115,
      "speed": 67
    },
    "category": "최면 포켓몬",
    "heightM": 1.6,
    "weightKg": 75.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png"
  },
  {
    "id": 98,
    "nameKo": "크랩",
    "nameEn": "Krabby",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 30,
      "attack": 105,
      "defense": 90,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 50
    },
    "category": "게 포켓몬",
    "heightM": 0.4,
    "weightKg": 6.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png"
  },
  {
    "id": 99,
    "nameKo": "킹크랩",
    "nameEn": "Kingler",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 55,
      "attack": 130,
      "defense": 115,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 75
    },
    "category": "집게 포켓몬",
    "heightM": 1.3,
    "weightKg": 60,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png"
  },
  {
    "id": 100,
    "nameKo": "찌리리공",
    "nameEn": "Voltorb",
    "types": [
      "전기"
    ],
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 50,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 100
    },
    "category": "볼 포켓몬",
    "heightM": 0.5,
    "weightKg": 10.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png"
  },
  {
    "id": 101,
    "nameKo": "붐볼",
    "nameEn": "Electrode",
    "types": [
      "전기"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 70,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 150
    },
    "category": "볼 포켓몬",
    "heightM": 1.2,
    "weightKg": 66.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png"
  },
  {
    "id": 102,
    "nameKo": "아라리",
    "nameEn": "Exeggcute",
    "types": [
      "풀",
      "에스퍼"
    ],
    "stats": {
      "hp": 60,
      "attack": 40,
      "defense": 80,
      "specialAttack": 60,
      "specialDefense": 45,
      "speed": 40
    },
    "category": "알 포켓몬",
    "heightM": 0.4,
    "weightKg": 2.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png"
  },
  {
    "id": 103,
    "nameKo": "나시",
    "nameEn": "Exeggutor",
    "types": [
      "풀",
      "에스퍼"
    ],
    "stats": {
      "hp": 95,
      "attack": 95,
      "defense": 85,
      "specialAttack": 125,
      "specialDefense": 75,
      "speed": 55
    },
    "category": "야자열매 포켓몬",
    "heightM": 2,
    "weightKg": 120,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png"
  },
  {
    "id": 104,
    "nameKo": "탕구리",
    "nameEn": "Cubone",
    "types": [
      "땅"
    ],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 95,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 35
    },
    "category": "고독 포켓몬",
    "heightM": 0.4,
    "weightKg": 6.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png"
  },
  {
    "id": 105,
    "nameKo": "텅구리",
    "nameEn": "Marowak",
    "types": [
      "땅"
    ],
    "stats": {
      "hp": 60,
      "attack": 80,
      "defense": 110,
      "specialAttack": 50,
      "specialDefense": 80,
      "speed": 45
    },
    "category": "뼈다귀 포켓몬",
    "heightM": 1,
    "weightKg": 45,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png"
  },
  {
    "id": 106,
    "nameKo": "시라소몬",
    "nameEn": "Hitmonlee",
    "types": [
      "격투"
    ],
    "stats": {
      "hp": 50,
      "attack": 120,
      "defense": 53,
      "specialAttack": 35,
      "specialDefense": 110,
      "speed": 87
    },
    "category": "킥 포켓몬",
    "heightM": 1.5,
    "weightKg": 49.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png"
  },
  {
    "id": 107,
    "nameKo": "홍수몬",
    "nameEn": "Hitmonchan",
    "types": [
      "격투"
    ],
    "stats": {
      "hp": 50,
      "attack": 105,
      "defense": 79,
      "specialAttack": 35,
      "specialDefense": 110,
      "speed": 76
    },
    "category": "펀치 포켓몬",
    "heightM": 1.4,
    "weightKg": 50.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png"
  },
  {
    "id": 108,
    "nameKo": "내루미",
    "nameEn": "Lickitung",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 90,
      "attack": 55,
      "defense": 75,
      "specialAttack": 60,
      "specialDefense": 75,
      "speed": 30
    },
    "category": "핥기 포켓몬",
    "heightM": 1.2,
    "weightKg": 65.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png"
  },
  {
    "id": 109,
    "nameKo": "또가스",
    "nameEn": "Koffing",
    "types": [
      "독"
    ],
    "stats": {
      "hp": 40,
      "attack": 65,
      "defense": 95,
      "specialAttack": 60,
      "specialDefense": 45,
      "speed": 35
    },
    "category": "독가스 포켓몬",
    "heightM": 0.6,
    "weightKg": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png"
  },
  {
    "id": 110,
    "nameKo": "또도가스",
    "nameEn": "Weezing",
    "types": [
      "독"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 120,
      "specialAttack": 85,
      "specialDefense": 70,
      "speed": 60
    },
    "category": "독가스 포켓몬",
    "heightM": 1.2,
    "weightKg": 9.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png"
  },
  {
    "id": 111,
    "nameKo": "뿔카노",
    "nameEn": "Rhyhorn",
    "types": [
      "땅",
      "바위"
    ],
    "stats": {
      "hp": 80,
      "attack": 85,
      "defense": 95,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 25
    },
    "category": "뿔 포켓몬",
    "heightM": 1,
    "weightKg": 115,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png"
  },
  {
    "id": 112,
    "nameKo": "코뿌리",
    "nameEn": "Rhydon",
    "types": [
      "땅",
      "바위"
    ],
    "stats": {
      "hp": 105,
      "attack": 130,
      "defense": 120,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 40
    },
    "category": "드릴 포켓몬",
    "heightM": 1.9,
    "weightKg": 120,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png"
  },
  {
    "id": 113,
    "nameKo": "럭키",
    "nameEn": "Chansey",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 250,
      "attack": 5,
      "defense": 5,
      "specialAttack": 35,
      "specialDefense": 105,
      "speed": 50
    },
    "category": "알 포켓몬",
    "heightM": 1.1,
    "weightKg": 34.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png"
  },
  {
    "id": 114,
    "nameKo": "덩쿠리",
    "nameEn": "Tangela",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 65,
      "attack": 55,
      "defense": 115,
      "specialAttack": 100,
      "specialDefense": 40,
      "speed": 60
    },
    "category": "넝쿨 포켓몬",
    "heightM": 1,
    "weightKg": 35,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png"
  },
  {
    "id": 115,
    "nameKo": "캥카",
    "nameEn": "Kangaskhan",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 105,
      "attack": 95,
      "defense": 80,
      "specialAttack": 40,
      "specialDefense": 80,
      "speed": 90
    },
    "category": "가족 포켓몬",
    "heightM": 2.2,
    "weightKg": 80,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png"
  },
  {
    "id": 116,
    "nameKo": "쏘드라",
    "nameEn": "Horsea",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 30,
      "attack": 40,
      "defense": 70,
      "specialAttack": 70,
      "specialDefense": 25,
      "speed": 60
    },
    "category": "드래곤 포켓몬",
    "heightM": 0.4,
    "weightKg": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png"
  },
  {
    "id": 117,
    "nameKo": "시드라",
    "nameEn": "Seadra",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 55,
      "attack": 65,
      "defense": 95,
      "specialAttack": 95,
      "specialDefense": 45,
      "speed": 85
    },
    "category": "드래곤 포켓몬",
    "heightM": 1.2,
    "weightKg": 25,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png"
  },
  {
    "id": 118,
    "nameKo": "콘치",
    "nameEn": "Goldeen",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 45,
      "attack": 67,
      "defense": 60,
      "specialAttack": 35,
      "specialDefense": 50,
      "speed": 63
    },
    "category": "금붕어 포켓몬",
    "heightM": 0.6,
    "weightKg": 15,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png"
  },
  {
    "id": 119,
    "nameKo": "왕콘치",
    "nameEn": "Seaking",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 80,
      "attack": 92,
      "defense": 65,
      "specialAttack": 65,
      "specialDefense": 80,
      "speed": 68
    },
    "category": "금붕어 포켓몬",
    "heightM": 1.3,
    "weightKg": 39,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png"
  },
  {
    "id": 120,
    "nameKo": "별가사리",
    "nameEn": "Staryu",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 30,
      "attack": 45,
      "defense": 55,
      "specialAttack": 70,
      "specialDefense": 55,
      "speed": 85
    },
    "category": "별 포켓몬",
    "heightM": 0.8,
    "weightKg": 34.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png"
  },
  {
    "id": 121,
    "nameKo": "아쿠스타",
    "nameEn": "Starmie",
    "types": [
      "물",
      "에스퍼"
    ],
    "stats": {
      "hp": 60,
      "attack": 75,
      "defense": 85,
      "specialAttack": 100,
      "specialDefense": 85,
      "speed": 115
    },
    "category": "수수께끼 포켓몬",
    "heightM": 1.1,
    "weightKg": 80,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png"
  },
  {
    "id": 122,
    "nameKo": "마임맨",
    "nameEn": "Mr. Mime",
    "types": [
      "에스퍼",
      "페어리"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 65,
      "specialAttack": 100,
      "specialDefense": 120,
      "speed": 90
    },
    "category": "배리어 포켓몬",
    "heightM": 1.3,
    "weightKg": 54.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png"
  },
  {
    "id": 123,
    "nameKo": "스라크",
    "nameEn": "Scyther",
    "types": [
      "벌레",
      "비행"
    ],
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 80,
      "specialAttack": 55,
      "specialDefense": 80,
      "speed": 105
    },
    "category": "버마재비 포켓몬",
    "heightM": 1.5,
    "weightKg": 56,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png"
  },
  {
    "id": 124,
    "nameKo": "루주라",
    "nameEn": "Jynx",
    "types": [
      "얼음",
      "에스퍼"
    ],
    "stats": {
      "hp": 65,
      "attack": 50,
      "defense": 35,
      "specialAttack": 115,
      "specialDefense": 95,
      "speed": 95
    },
    "category": "인간형태 포켓몬",
    "heightM": 1.4,
    "weightKg": 40.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png"
  },
  {
    "id": 125,
    "nameKo": "에레브",
    "nameEn": "Electabuzz",
    "types": [
      "전기"
    ],
    "stats": {
      "hp": 65,
      "attack": 83,
      "defense": 57,
      "specialAttack": 95,
      "specialDefense": 85,
      "speed": 105
    },
    "category": "전기 포켓몬",
    "heightM": 1.1,
    "weightKg": 30,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png"
  },
  {
    "id": 126,
    "nameKo": "마그마",
    "nameEn": "Magmar",
    "types": [
      "불꽃"
    ],
    "stats": {
      "hp": 65,
      "attack": 95,
      "defense": 57,
      "specialAttack": 100,
      "specialDefense": 85,
      "speed": 93
    },
    "category": "불뿜기 포켓몬",
    "heightM": 1.3,
    "weightKg": 44.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png"
  },
  {
    "id": 127,
    "nameKo": "쁘사이저",
    "nameEn": "Pinsir",
    "types": [
      "벌레"
    ],
    "stats": {
      "hp": 65,
      "attack": 125,
      "defense": 100,
      "specialAttack": 55,
      "specialDefense": 70,
      "speed": 85
    },
    "category": "뿔집게 포켓몬",
    "heightM": 1.5,
    "weightKg": 55,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png"
  },
  {
    "id": 128,
    "nameKo": "켄타로스",
    "nameEn": "Tauros",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 75,
      "attack": 100,
      "defense": 95,
      "specialAttack": 40,
      "specialDefense": 70,
      "speed": 110
    },
    "category": "성난소 포켓몬",
    "heightM": 1.4,
    "weightKg": 88.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png"
  },
  {
    "id": 129,
    "nameKo": "잉어킹",
    "nameEn": "Magikarp",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 20,
      "attack": 10,
      "defense": 55,
      "specialAttack": 15,
      "specialDefense": 20,
      "speed": 80
    },
    "category": "물고기 포켓몬",
    "heightM": 0.9,
    "weightKg": 10,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png"
  },
  {
    "id": 130,
    "nameKo": "갸라도스",
    "nameEn": "Gyarados",
    "types": [
      "물",
      "비행"
    ],
    "stats": {
      "hp": 95,
      "attack": 125,
      "defense": 79,
      "specialAttack": 60,
      "specialDefense": 100,
      "speed": 81
    },
    "category": "흉악 포켓몬",
    "heightM": 6.5,
    "weightKg": 235,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png"
  },
  {
    "id": 131,
    "nameKo": "라프라스",
    "nameEn": "Lapras",
    "types": [
      "물",
      "얼음"
    ],
    "stats": {
      "hp": 130,
      "attack": 85,
      "defense": 80,
      "specialAttack": 85,
      "specialDefense": 95,
      "speed": 60
    },
    "category": "탈것 포켓몬",
    "heightM": 2.5,
    "weightKg": 220,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png"
  },
  {
    "id": 132,
    "nameKo": "메타몽",
    "nameEn": "Ditto",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 48,
      "attack": 48,
      "defense": 48,
      "specialAttack": 48,
      "specialDefense": 48,
      "speed": 48
    },
    "category": "변신 포켓몬",
    "heightM": 0.3,
    "weightKg": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
  },
  {
    "id": 133,
    "nameKo": "이브이",
    "nameEn": "Eevee",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 55,
      "attack": 55,
      "defense": 50,
      "specialAttack": 45,
      "specialDefense": 65,
      "speed": 55
    },
    "category": "진화 포켓몬",
    "heightM": 0.3,
    "weightKg": 6.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png"
  },
  {
    "id": 134,
    "nameKo": "샤미드",
    "nameEn": "Vaporeon",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 130,
      "attack": 65,
      "defense": 60,
      "specialAttack": 110,
      "specialDefense": 95,
      "speed": 65
    },
    "category": "거품뿜기 포켓몬",
    "heightM": 1,
    "weightKg": 29,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png"
  },
  {
    "id": 135,
    "nameKo": "쥬피썬더",
    "nameEn": "Jolteon",
    "types": [
      "전기"
    ],
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 60,
      "specialAttack": 110,
      "specialDefense": 95,
      "speed": 130
    },
    "category": "번개 포켓몬",
    "heightM": 0.8,
    "weightKg": 24.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png"
  },
  {
    "id": 136,
    "nameKo": "부스터",
    "nameEn": "Flareon",
    "types": [
      "불꽃"
    ],
    "stats": {
      "hp": 65,
      "attack": 130,
      "defense": 60,
      "specialAttack": 95,
      "specialDefense": 110,
      "speed": 65
    },
    "category": "불꽃 포켓몬",
    "heightM": 0.9,
    "weightKg": 25,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png"
  },
  {
    "id": 137,
    "nameKo": "폴리곤",
    "nameEn": "Porygon",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 65,
      "attack": 60,
      "defense": 70,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 40
    },
    "category": "가상 포켓몬",
    "heightM": 0.8,
    "weightKg": 36.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png"
  },
  {
    "id": 138,
    "nameKo": "암나이트",
    "nameEn": "Omanyte",
    "types": [
      "바위",
      "물"
    ],
    "stats": {
      "hp": 35,
      "attack": 40,
      "defense": 100,
      "specialAttack": 90,
      "specialDefense": 55,
      "speed": 35
    },
    "category": "소용돌이 포켓몬",
    "heightM": 0.4,
    "weightKg": 7.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png"
  },
  {
    "id": 139,
    "nameKo": "암스타",
    "nameEn": "Omastar",
    "types": [
      "바위",
      "물"
    ],
    "stats": {
      "hp": 70,
      "attack": 60,
      "defense": 125,
      "specialAttack": 115,
      "specialDefense": 70,
      "speed": 55
    },
    "category": "소용돌이 포켓몬",
    "heightM": 1,
    "weightKg": 35,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png"
  },
  {
    "id": 140,
    "nameKo": "투구",
    "nameEn": "Kabuto",
    "types": [
      "바위",
      "물"
    ],
    "stats": {
      "hp": 30,
      "attack": 80,
      "defense": 90,
      "specialAttack": 55,
      "specialDefense": 45,
      "speed": 55
    },
    "category": "껍질 포켓몬",
    "heightM": 0.5,
    "weightKg": 11.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png"
  },
  {
    "id": 141,
    "nameKo": "투구푸스",
    "nameEn": "Kabutops",
    "types": [
      "바위",
      "물"
    ],
    "stats": {
      "hp": 60,
      "attack": 115,
      "defense": 105,
      "specialAttack": 65,
      "specialDefense": 70,
      "speed": 80
    },
    "category": "껍질 포켓몬",
    "heightM": 1.3,
    "weightKg": 40.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png"
  },
  {
    "id": 142,
    "nameKo": "프테라",
    "nameEn": "Aerodactyl",
    "types": [
      "바위",
      "비행"
    ],
    "stats": {
      "hp": 80,
      "attack": 105,
      "defense": 65,
      "specialAttack": 60,
      "specialDefense": 75,
      "speed": 130
    },
    "category": "화석 포켓몬",
    "heightM": 1.8,
    "weightKg": 59,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png"
  },
  {
    "id": 143,
    "nameKo": "잠만보",
    "nameEn": "Snorlax",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 160,
      "attack": 110,
      "defense": 65,
      "specialAttack": 65,
      "specialDefense": 110,
      "speed": 30
    },
    "category": "졸음 포켓몬",
    "heightM": 2.1,
    "weightKg": 460,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png"
  },
  {
    "id": 144,
    "nameKo": "프리져",
    "nameEn": "Articuno",
    "types": [
      "얼음",
      "비행"
    ],
    "stats": {
      "hp": 90,
      "attack": 85,
      "defense": 100,
      "specialAttack": 95,
      "specialDefense": 125,
      "speed": 85
    },
    "category": "냉동 포켓몬",
    "heightM": 1.7,
    "weightKg": 55.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png"
  },
  {
    "id": 145,
    "nameKo": "썬더",
    "nameEn": "Zapdos",
    "types": [
      "전기",
      "비행"
    ],
    "stats": {
      "hp": 90,
      "attack": 90,
      "defense": 85,
      "specialAttack": 125,
      "specialDefense": 90,
      "speed": 100
    },
    "category": "전기 포켓몬",
    "heightM": 1.6,
    "weightKg": 52.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png"
  },
  {
    "id": 146,
    "nameKo": "파이어",
    "nameEn": "Moltres",
    "types": [
      "불꽃",
      "비행"
    ],
    "stats": {
      "hp": 90,
      "attack": 100,
      "defense": 90,
      "specialAttack": 125,
      "specialDefense": 85,
      "speed": 90
    },
    "category": "화염 포켓몬",
    "heightM": 2,
    "weightKg": 60,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png"
  },
  {
    "id": 147,
    "nameKo": "미뇽",
    "nameEn": "Dratini",
    "types": [
      "드래곤"
    ],
    "stats": {
      "hp": 41,
      "attack": 64,
      "defense": 45,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 50
    },
    "category": "드래곤 포켓몬",
    "heightM": 1.8,
    "weightKg": 3.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png"
  },
  {
    "id": 148,
    "nameKo": "신뇽",
    "nameEn": "Dragonair",
    "types": [
      "드래곤"
    ],
    "stats": {
      "hp": 61,
      "attack": 84,
      "defense": 65,
      "specialAttack": 70,
      "specialDefense": 70,
      "speed": 70
    },
    "category": "드래곤 포켓몬",
    "heightM": 4,
    "weightKg": 16.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png"
  },
  {
    "id": 149,
    "nameKo": "망나뇽",
    "nameEn": "Dragonite",
    "types": [
      "드래곤",
      "비행"
    ],
    "stats": {
      "hp": 91,
      "attack": 134,
      "defense": 95,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 80
    },
    "category": "드래곤 포켓몬",
    "heightM": 2.2,
    "weightKg": 210,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png"
  },
  {
    "id": 150,
    "nameKo": "뮤츠",
    "nameEn": "Mewtwo",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 106,
      "attack": 110,
      "defense": 90,
      "specialAttack": 154,
      "specialDefense": 90,
      "speed": 130
    },
    "category": "유전 포켓몬",
    "heightM": 2,
    "weightKg": 122,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
  },
  {
    "id": 151,
    "nameKo": "뮤",
    "nameEn": "Mew",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 100
    },
    "category": "신종 포켓몬",
    "heightM": 0.4,
    "weightKg": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png"
  }
]

export const GEN1_EVOLUTION_LINES: EvolutionStage[][] = [
  [
    {
      "pokemonId": 1,
      "children": [
        {
          "pokemonId": 2,
          "children": [
            {
              "pokemonId": 3,
              "trigger": "레벨 32"
            }
          ],
          "trigger": "레벨 16"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 4,
      "children": [
        {
          "pokemonId": 5,
          "children": [
            {
              "pokemonId": 6,
              "trigger": "레벨 36"
            }
          ],
          "trigger": "레벨 16"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 7,
      "children": [
        {
          "pokemonId": 8,
          "children": [
            {
              "pokemonId": 9,
              "trigger": "레벨 36"
            }
          ],
          "trigger": "레벨 16"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 10,
      "children": [
        {
          "pokemonId": 11,
          "children": [
            {
              "pokemonId": 12,
              "trigger": "레벨 10"
            }
          ],
          "trigger": "레벨 7"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 13,
      "children": [
        {
          "pokemonId": 14,
          "children": [
            {
              "pokemonId": 15,
              "trigger": "레벨 10"
            }
          ],
          "trigger": "레벨 7"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 16,
      "children": [
        {
          "pokemonId": 17,
          "children": [
            {
              "pokemonId": 18,
              "trigger": "레벨 36"
            }
          ],
          "trigger": "레벨 18"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 19,
      "children": [
        {
          "pokemonId": 20,
          "trigger": "레벨 20"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 21,
      "children": [
        {
          "pokemonId": 22,
          "trigger": "레벨 20"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 23,
      "children": [
        {
          "pokemonId": 24,
          "trigger": "레벨 22"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 27,
      "children": [
        {
          "pokemonId": 28,
          "trigger": "레벨 22"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 29,
      "children": [
        {
          "pokemonId": 30,
          "children": [
            {
              "pokemonId": 31,
              "trigger": "달의돌",
              "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/moon-stone.png"
            }
          ],
          "trigger": "레벨 16"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 32,
      "children": [
        {
          "pokemonId": 33,
          "children": [
            {
              "pokemonId": 34,
              "trigger": "달의돌",
              "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/moon-stone.png"
            }
          ],
          "trigger": "레벨 16"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 37,
      "children": [
        {
          "pokemonId": 38,
          "trigger": "불의돌",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/fire-stone.png"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 41,
      "children": [
        {
          "pokemonId": 42,
          "trigger": "레벨 22"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 43,
      "children": [
        {
          "pokemonId": 44,
          "children": [
            {
              "pokemonId": 45,
              "trigger": "잎의돌",
              "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/leaf-stone.png"
            }
          ],
          "trigger": "레벨 21"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 46,
      "children": [
        {
          "pokemonId": 47,
          "trigger": "레벨 24"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 48,
      "children": [
        {
          "pokemonId": 49,
          "trigger": "레벨 31"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 50,
      "children": [
        {
          "pokemonId": 51,
          "trigger": "레벨 26"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 52,
      "children": [
        {
          "pokemonId": 53,
          "trigger": "레벨 28"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 54,
      "children": [
        {
          "pokemonId": 55,
          "trigger": "레벨 33"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 56,
      "children": [
        {
          "pokemonId": 57,
          "trigger": "레벨 28"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 58,
      "children": [
        {
          "pokemonId": 59,
          "trigger": "불의돌",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/fire-stone.png"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 60,
      "children": [
        {
          "pokemonId": 61,
          "children": [
            {
              "pokemonId": 62,
              "trigger": "물의돌",
              "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/water-stone.png"
            }
          ],
          "trigger": "레벨 25"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 63,
      "children": [
        {
          "pokemonId": 64,
          "children": [
            {
              "pokemonId": 65,
              "trigger": "교환"
            }
          ],
          "trigger": "레벨 16"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 66,
      "children": [
        {
          "pokemonId": 67,
          "children": [
            {
              "pokemonId": 68,
              "trigger": "교환"
            }
          ],
          "trigger": "레벨 28"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 69,
      "children": [
        {
          "pokemonId": 70,
          "children": [
            {
              "pokemonId": 71,
              "trigger": "잎의돌",
              "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/leaf-stone.png"
            }
          ],
          "trigger": "레벨 21"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 72,
      "children": [
        {
          "pokemonId": 73,
          "trigger": "레벨 30"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 74,
      "children": [
        {
          "pokemonId": 75,
          "children": [
            {
              "pokemonId": 76,
              "trigger": "교환"
            }
          ],
          "trigger": "레벨 25"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 77,
      "children": [
        {
          "pokemonId": 78,
          "trigger": "레벨 40"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 79,
      "children": [
        {
          "pokemonId": 80,
          "trigger": "레벨 37"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 81,
      "children": [
        {
          "pokemonId": 82,
          "trigger": "레벨 30"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 84,
      "children": [
        {
          "pokemonId": 85,
          "trigger": "레벨 31"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 86,
      "children": [
        {
          "pokemonId": 87,
          "trigger": "레벨 34"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 88,
      "children": [
        {
          "pokemonId": 89,
          "trigger": "레벨 38"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 90,
      "children": [
        {
          "pokemonId": 91,
          "trigger": "물의돌",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/water-stone.png"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 92,
      "children": [
        {
          "pokemonId": 93,
          "children": [
            {
              "pokemonId": 94,
              "trigger": "교환"
            }
          ],
          "trigger": "레벨 25"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 96,
      "children": [
        {
          "pokemonId": 97,
          "trigger": "레벨 26"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 98,
      "children": [
        {
          "pokemonId": 99,
          "trigger": "레벨 28"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 100,
      "children": [
        {
          "pokemonId": 101,
          "trigger": "레벨 30"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 102,
      "children": [
        {
          "pokemonId": 103,
          "trigger": "잎의돌",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/leaf-stone.png"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 104,
      "children": [
        {
          "pokemonId": 105,
          "trigger": "레벨 28"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 109,
      "children": [
        {
          "pokemonId": 110,
          "trigger": "레벨 35"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 111,
      "children": [
        {
          "pokemonId": 112,
          "trigger": "레벨 42"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 116,
      "children": [
        {
          "pokemonId": 117,
          "trigger": "레벨 32"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 118,
      "children": [
        {
          "pokemonId": 119,
          "trigger": "레벨 33"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 120,
      "children": [
        {
          "pokemonId": 121,
          "trigger": "물의돌",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/water-stone.png"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 129,
      "children": [
        {
          "pokemonId": 130,
          "trigger": "레벨 20"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 133,
      "children": [
        {
          "pokemonId": 134,
          "trigger": "물의돌",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/water-stone.png"
        },
        {
          "pokemonId": 135,
          "trigger": "번개의돌",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/thunder-stone.png"
        },
        {
          "pokemonId": 136,
          "trigger": "불의돌",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/fire-stone.png"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 138,
      "children": [
        {
          "pokemonId": 139,
          "trigger": "레벨 40"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 140,
      "children": [
        {
          "pokemonId": 141,
          "trigger": "레벨 40"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 147,
      "children": [
        {
          "pokemonId": 148,
          "children": [
            {
              "pokemonId": 149,
              "trigger": "레벨 55"
            }
          ],
          "trigger": "레벨 30"
        }
      ]
    }
  ]
]
