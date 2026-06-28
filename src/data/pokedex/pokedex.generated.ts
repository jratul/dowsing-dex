// 이 파일은 scripts/fetch-pokedex.mjs 로 PokeAPI에서 생성됩니다. 직접 수정하지 마세요.
import type { EvolutionStage, Pokemon } from '../../types/pokemon'

export const ALL_POKEMON: Pokemon[] = [
  {
    "id": 1,
    "dexNumber": 1,
    "generation": 1,
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
    "dexNumber": 2,
    "generation": 1,
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
    "dexNumber": 3,
    "generation": 1,
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
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    "megaForms": [
      {
        "label": "메가이상해꽃",
        "types": [
          "풀",
          "독"
        ],
        "stats": {
          "hp": 80,
          "attack": 100,
          "defense": 123,
          "specialAttack": 122,
          "specialDefense": 120,
          "speed": 80
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10033.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10033.png"
      }
    ]
  },
  {
    "id": 4,
    "dexNumber": 4,
    "generation": 1,
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
    "dexNumber": 5,
    "generation": 1,
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
    "dexNumber": 6,
    "generation": 1,
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
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    "megaForms": [
      {
        "label": "메가리자몽 X",
        "types": [
          "불꽃",
          "드래곤"
        ],
        "stats": {
          "hp": 78,
          "attack": 130,
          "defense": 111,
          "specialAttack": 130,
          "specialDefense": 85,
          "speed": 100
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10034.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10034.png"
      },
      {
        "label": "메가리자몽 Y",
        "types": [
          "불꽃",
          "비행"
        ],
        "stats": {
          "hp": 78,
          "attack": 104,
          "defense": 78,
          "specialAttack": 159,
          "specialDefense": 115,
          "speed": 100
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10035.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10035.png"
      }
    ]
  },
  {
    "id": 7,
    "dexNumber": 7,
    "generation": 1,
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
    "dexNumber": 8,
    "generation": 1,
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
    "dexNumber": 9,
    "generation": 1,
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
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
    "megaForms": [
      {
        "label": "메가거북왕",
        "types": [
          "물"
        ],
        "stats": {
          "hp": 79,
          "attack": 103,
          "defense": 120,
          "specialAttack": 135,
          "specialDefense": 115,
          "speed": 78
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10036.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10036.png"
      }
    ]
  },
  {
    "id": 10,
    "dexNumber": 10,
    "generation": 1,
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
    "dexNumber": 11,
    "generation": 1,
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
    "dexNumber": 12,
    "generation": 1,
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
    "dexNumber": 13,
    "generation": 1,
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
    "dexNumber": 14,
    "generation": 1,
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
    "dexNumber": 15,
    "generation": 1,
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
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
    "megaForms": [
      {
        "label": "메가독침붕",
        "types": [
          "벌레",
          "독"
        ],
        "stats": {
          "hp": 65,
          "attack": 150,
          "defense": 40,
          "specialAttack": 15,
          "specialDefense": 80,
          "speed": 145
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10090.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10090.png"
      }
    ]
  },
  {
    "id": 16,
    "dexNumber": 16,
    "generation": 1,
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
    "dexNumber": 17,
    "generation": 1,
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
    "dexNumber": 18,
    "generation": 1,
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
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png",
    "megaForms": [
      {
        "label": "메가피죤투",
        "types": [
          "노말",
          "비행"
        ],
        "stats": {
          "hp": 83,
          "attack": 80,
          "defense": 80,
          "specialAttack": 135,
          "specialDefense": 80,
          "speed": 121
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10073.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10073.png"
      }
    ]
  },
  {
    "id": 19,
    "dexNumber": 19,
    "generation": 1,
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
    "dexNumber": 20,
    "generation": 1,
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
    "dexNumber": 21,
    "generation": 1,
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
    "dexNumber": 22,
    "generation": 1,
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
    "dexNumber": 23,
    "generation": 1,
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
    "dexNumber": 24,
    "generation": 1,
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
    "dexNumber": 25,
    "generation": 1,
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
    "dexNumber": 26,
    "generation": 1,
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
    "dexNumber": 27,
    "generation": 1,
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
    "dexNumber": 28,
    "generation": 1,
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
    "dexNumber": 29,
    "generation": 1,
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
    "dexNumber": 30,
    "generation": 1,
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
    "dexNumber": 31,
    "generation": 1,
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
    "dexNumber": 32,
    "generation": 1,
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
    "dexNumber": 33,
    "generation": 1,
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
    "dexNumber": 34,
    "generation": 1,
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
    "dexNumber": 35,
    "generation": 1,
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
    "dexNumber": 36,
    "generation": 1,
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
    "dexNumber": 37,
    "generation": 1,
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
    "dexNumber": 38,
    "generation": 1,
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
    "dexNumber": 39,
    "generation": 1,
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
    "dexNumber": 40,
    "generation": 1,
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
    "dexNumber": 41,
    "generation": 1,
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
    "dexNumber": 42,
    "generation": 1,
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
    "dexNumber": 43,
    "generation": 1,
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
    "dexNumber": 44,
    "generation": 1,
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
    "dexNumber": 45,
    "generation": 1,
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
    "dexNumber": 46,
    "generation": 1,
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
    "dexNumber": 47,
    "generation": 1,
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
    "dexNumber": 48,
    "generation": 1,
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
    "dexNumber": 49,
    "generation": 1,
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
    "dexNumber": 50,
    "generation": 1,
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
    "dexNumber": 51,
    "generation": 1,
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
    "dexNumber": 52,
    "generation": 1,
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
    "dexNumber": 53,
    "generation": 1,
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
    "dexNumber": 54,
    "generation": 1,
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
    "dexNumber": 55,
    "generation": 1,
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
    "dexNumber": 56,
    "generation": 1,
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
    "dexNumber": 57,
    "generation": 1,
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
    "dexNumber": 58,
    "generation": 1,
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
    "dexNumber": 59,
    "generation": 1,
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
    "dexNumber": 60,
    "generation": 1,
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
    "dexNumber": 61,
    "generation": 1,
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
    "dexNumber": 62,
    "generation": 1,
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
    "dexNumber": 63,
    "generation": 1,
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
    "dexNumber": 64,
    "generation": 1,
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
    "dexNumber": 65,
    "generation": 1,
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
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png",
    "megaForms": [
      {
        "label": "메가후딘",
        "types": [
          "에스퍼"
        ],
        "stats": {
          "hp": 55,
          "attack": 50,
          "defense": 65,
          "specialAttack": 175,
          "specialDefense": 105,
          "speed": 150
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10037.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10037.png"
      }
    ]
  },
  {
    "id": 66,
    "dexNumber": 66,
    "generation": 1,
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
    "dexNumber": 67,
    "generation": 1,
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
    "dexNumber": 68,
    "generation": 1,
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
    "dexNumber": 69,
    "generation": 1,
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
    "dexNumber": 70,
    "generation": 1,
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
    "dexNumber": 71,
    "generation": 1,
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
    "dexNumber": 72,
    "generation": 1,
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
    "dexNumber": 73,
    "generation": 1,
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
    "dexNumber": 74,
    "generation": 1,
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
    "dexNumber": 75,
    "generation": 1,
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
    "dexNumber": 76,
    "generation": 1,
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
    "dexNumber": 77,
    "generation": 1,
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
    "dexNumber": 78,
    "generation": 1,
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
    "dexNumber": 79,
    "generation": 1,
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
    "dexNumber": 80,
    "generation": 1,
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
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png",
    "megaForms": [
      {
        "label": "메가야도란",
        "types": [
          "물",
          "에스퍼"
        ],
        "stats": {
          "hp": 95,
          "attack": 75,
          "defense": 180,
          "specialAttack": 130,
          "specialDefense": 80,
          "speed": 30
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10071.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10071.png"
      }
    ]
  },
  {
    "id": 81,
    "dexNumber": 81,
    "generation": 1,
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
    "dexNumber": 82,
    "generation": 1,
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
    "dexNumber": 83,
    "generation": 1,
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
    "dexNumber": 84,
    "generation": 1,
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
    "dexNumber": 85,
    "generation": 1,
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
    "dexNumber": 86,
    "generation": 1,
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
    "dexNumber": 87,
    "generation": 1,
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
    "dexNumber": 88,
    "generation": 1,
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
    "dexNumber": 89,
    "generation": 1,
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
    "dexNumber": 90,
    "generation": 1,
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
    "dexNumber": 91,
    "generation": 1,
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
    "dexNumber": 92,
    "generation": 1,
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
    "dexNumber": 93,
    "generation": 1,
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
    "dexNumber": 94,
    "generation": 1,
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
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
    "megaForms": [
      {
        "label": "메가팬텀",
        "types": [
          "고스트",
          "독"
        ],
        "stats": {
          "hp": 60,
          "attack": 65,
          "defense": 80,
          "specialAttack": 170,
          "specialDefense": 95,
          "speed": 130
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10038.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10038.png"
      }
    ]
  },
  {
    "id": 95,
    "dexNumber": 95,
    "generation": 1,
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
    "dexNumber": 96,
    "generation": 1,
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
    "dexNumber": 97,
    "generation": 1,
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
    "dexNumber": 98,
    "generation": 1,
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
    "dexNumber": 99,
    "generation": 1,
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
    "dexNumber": 100,
    "generation": 1,
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
    "dexNumber": 101,
    "generation": 1,
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
    "dexNumber": 102,
    "generation": 1,
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
    "dexNumber": 103,
    "generation": 1,
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
    "dexNumber": 104,
    "generation": 1,
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
    "dexNumber": 105,
    "generation": 1,
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
    "dexNumber": 106,
    "generation": 1,
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
    "dexNumber": 107,
    "generation": 1,
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
    "dexNumber": 108,
    "generation": 1,
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
    "dexNumber": 109,
    "generation": 1,
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
    "dexNumber": 110,
    "generation": 1,
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
    "dexNumber": 111,
    "generation": 1,
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
    "dexNumber": 112,
    "generation": 1,
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
    "dexNumber": 113,
    "generation": 1,
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
    "dexNumber": 114,
    "generation": 1,
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
    "dexNumber": 115,
    "generation": 1,
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
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png",
    "megaForms": [
      {
        "label": "메가캥카",
        "types": [
          "노말"
        ],
        "stats": {
          "hp": 105,
          "attack": 125,
          "defense": 100,
          "specialAttack": 60,
          "specialDefense": 100,
          "speed": 100
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10039.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10039.png"
      }
    ]
  },
  {
    "id": 116,
    "dexNumber": 116,
    "generation": 1,
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
    "dexNumber": 117,
    "generation": 1,
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
    "dexNumber": 118,
    "generation": 1,
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
    "dexNumber": 119,
    "generation": 1,
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
    "dexNumber": 120,
    "generation": 1,
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
    "dexNumber": 121,
    "generation": 1,
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
    "dexNumber": 122,
    "generation": 1,
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
    "dexNumber": 123,
    "generation": 1,
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
    "dexNumber": 124,
    "generation": 1,
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
    "dexNumber": 125,
    "generation": 1,
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
    "dexNumber": 126,
    "generation": 1,
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
    "dexNumber": 127,
    "generation": 1,
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
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png",
    "megaForms": [
      {
        "label": "메가쁘사이저",
        "types": [
          "벌레",
          "비행"
        ],
        "stats": {
          "hp": 65,
          "attack": 155,
          "defense": 120,
          "specialAttack": 65,
          "specialDefense": 90,
          "speed": 105
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10040.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10040.png"
      }
    ]
  },
  {
    "id": 128,
    "dexNumber": 128,
    "generation": 1,
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
    "dexNumber": 129,
    "generation": 1,
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
    "dexNumber": 130,
    "generation": 1,
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
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png",
    "megaForms": [
      {
        "label": "메가갸라도스",
        "types": [
          "물",
          "악"
        ],
        "stats": {
          "hp": 95,
          "attack": 155,
          "defense": 109,
          "specialAttack": 70,
          "specialDefense": 130,
          "speed": 81
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10041.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10041.png"
      }
    ]
  },
  {
    "id": 131,
    "dexNumber": 131,
    "generation": 1,
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
    "dexNumber": 132,
    "generation": 1,
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
    "dexNumber": 133,
    "generation": 1,
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
    "dexNumber": 134,
    "generation": 1,
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
    "dexNumber": 135,
    "generation": 1,
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
    "dexNumber": 136,
    "generation": 1,
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
    "dexNumber": 137,
    "generation": 1,
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
    "dexNumber": 138,
    "generation": 1,
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
    "dexNumber": 139,
    "generation": 1,
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
    "dexNumber": 140,
    "generation": 1,
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
    "dexNumber": 141,
    "generation": 1,
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
    "dexNumber": 142,
    "generation": 1,
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
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png",
    "megaForms": [
      {
        "label": "메가프테라",
        "types": [
          "바위",
          "비행"
        ],
        "stats": {
          "hp": 80,
          "attack": 135,
          "defense": 85,
          "specialAttack": 70,
          "specialDefense": 95,
          "speed": 150
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10042.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10042.png"
      }
    ]
  },
  {
    "id": 143,
    "dexNumber": 143,
    "generation": 1,
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
    "dexNumber": 144,
    "generation": 1,
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
    "dexNumber": 145,
    "generation": 1,
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
    "dexNumber": 146,
    "generation": 1,
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
    "dexNumber": 147,
    "generation": 1,
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
    "dexNumber": 148,
    "generation": 1,
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
    "dexNumber": 149,
    "generation": 1,
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
    "dexNumber": 150,
    "generation": 1,
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
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
    "megaForms": [
      {
        "label": "메가뮤츠 X",
        "types": [
          "에스퍼",
          "격투"
        ],
        "stats": {
          "hp": 106,
          "attack": 190,
          "defense": 100,
          "specialAttack": 154,
          "specialDefense": 100,
          "speed": 130
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10043.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10043.png"
      },
      {
        "label": "메가뮤츠 Y",
        "types": [
          "에스퍼"
        ],
        "stats": {
          "hp": 106,
          "attack": 150,
          "defense": 70,
          "specialAttack": 194,
          "specialDefense": 120,
          "speed": 140
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10044.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10044.png"
      }
    ]
  },
  {
    "id": 151,
    "dexNumber": 151,
    "generation": 1,
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
  },
  {
    "id": 152,
    "dexNumber": 152,
    "generation": 2,
    "nameKo": "치코리타",
    "nameEn": "Chikorita",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 45,
      "attack": 49,
      "defense": 65,
      "specialAttack": 49,
      "specialDefense": 65,
      "speed": 45
    },
    "category": "잎사귀 포켓몬",
    "heightM": 0.9,
    "weightKg": 6.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png"
  },
  {
    "id": 153,
    "dexNumber": 153,
    "generation": 2,
    "nameKo": "베이리프",
    "nameEn": "Bayleef",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 60,
      "attack": 62,
      "defense": 80,
      "specialAttack": 63,
      "specialDefense": 80,
      "speed": 60
    },
    "category": "잎사귀 포켓몬",
    "heightM": 1.2,
    "weightKg": 15.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/153.png"
  },
  {
    "id": 154,
    "dexNumber": 154,
    "generation": 2,
    "nameKo": "메가니움",
    "nameEn": "Meganium",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 80,
      "attack": 82,
      "defense": 100,
      "specialAttack": 83,
      "specialDefense": 100,
      "speed": 80
    },
    "category": "허브 포켓몬",
    "heightM": 1.8,
    "weightKg": 100.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/154.png"
  },
  {
    "id": 155,
    "dexNumber": 155,
    "generation": 2,
    "nameKo": "브케인",
    "nameEn": "Cyndaquil",
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
    "category": "불쥐 포켓몬",
    "heightM": 0.5,
    "weightKg": 7.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/155.png"
  },
  {
    "id": 156,
    "dexNumber": 156,
    "generation": 2,
    "nameKo": "마그케인",
    "nameEn": "Quilava",
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
    "category": "화산 포켓몬",
    "heightM": 0.9,
    "weightKg": 19,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/156.png"
  },
  {
    "id": 157,
    "dexNumber": 157,
    "generation": 2,
    "nameKo": "블레이범",
    "nameEn": "Typhlosion",
    "types": [
      "불꽃"
    ],
    "stats": {
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "specialAttack": 109,
      "specialDefense": 85,
      "speed": 100
    },
    "category": "화산 포켓몬",
    "heightM": 1.7,
    "weightKg": 79.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/157.png"
  },
  {
    "id": 158,
    "dexNumber": 158,
    "generation": 2,
    "nameKo": "리아코",
    "nameEn": "Totodile",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 64,
      "specialAttack": 44,
      "specialDefense": 48,
      "speed": 43
    },
    "category": "큰턱 포켓몬",
    "heightM": 0.6,
    "weightKg": 9.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/158.png"
  },
  {
    "id": 159,
    "dexNumber": 159,
    "generation": 2,
    "nameKo": "엘리게이",
    "nameEn": "Croconaw",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 65,
      "attack": 80,
      "defense": 80,
      "specialAttack": 59,
      "specialDefense": 63,
      "speed": 58
    },
    "category": "큰턱 포켓몬",
    "heightM": 1.1,
    "weightKg": 25,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/159.png"
  },
  {
    "id": 160,
    "dexNumber": 160,
    "generation": 2,
    "nameKo": "장크로다일",
    "nameEn": "Feraligatr",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 85,
      "attack": 105,
      "defense": 100,
      "specialAttack": 79,
      "specialDefense": 83,
      "speed": 78
    },
    "category": "큰턱 포켓몬",
    "heightM": 2.3,
    "weightKg": 88.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/160.png"
  },
  {
    "id": 161,
    "dexNumber": 161,
    "generation": 2,
    "nameKo": "꼬리선",
    "nameEn": "Sentret",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 35,
      "attack": 46,
      "defense": 34,
      "specialAttack": 35,
      "specialDefense": 45,
      "speed": 20
    },
    "category": "망보기 포켓몬",
    "heightM": 0.8,
    "weightKg": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/161.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/161.png"
  },
  {
    "id": 162,
    "dexNumber": 162,
    "generation": 2,
    "nameKo": "다꼬리",
    "nameEn": "Furret",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 85,
      "attack": 76,
      "defense": 64,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 90
    },
    "category": "긴몸통 포켓몬",
    "heightM": 1.8,
    "weightKg": 32.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/162.png"
  },
  {
    "id": 163,
    "dexNumber": 163,
    "generation": 2,
    "nameKo": "부우부",
    "nameEn": "Hoothoot",
    "types": [
      "노말",
      "비행"
    ],
    "stats": {
      "hp": 60,
      "attack": 30,
      "defense": 30,
      "specialAttack": 36,
      "specialDefense": 56,
      "speed": 50
    },
    "category": "부엉이 포켓몬",
    "heightM": 0.7,
    "weightKg": 21.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/163.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/163.png"
  },
  {
    "id": 164,
    "dexNumber": 164,
    "generation": 2,
    "nameKo": "야부엉",
    "nameEn": "Noctowl",
    "types": [
      "노말",
      "비행"
    ],
    "stats": {
      "hp": 100,
      "attack": 50,
      "defense": 50,
      "specialAttack": 86,
      "specialDefense": 96,
      "speed": 70
    },
    "category": "부엉이 포켓몬",
    "heightM": 1.6,
    "weightKg": 40.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/164.png"
  },
  {
    "id": 165,
    "dexNumber": 165,
    "generation": 2,
    "nameKo": "레디바",
    "nameEn": "Ledyba",
    "types": [
      "벌레",
      "비행"
    ],
    "stats": {
      "hp": 40,
      "attack": 20,
      "defense": 30,
      "specialAttack": 40,
      "specialDefense": 80,
      "speed": 55
    },
    "category": "별다섯 포켓몬",
    "heightM": 1,
    "weightKg": 10.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/165.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/165.png"
  },
  {
    "id": 166,
    "dexNumber": 166,
    "generation": 2,
    "nameKo": "레디안",
    "nameEn": "Ledian",
    "types": [
      "벌레",
      "비행"
    ],
    "stats": {
      "hp": 55,
      "attack": 35,
      "defense": 50,
      "specialAttack": 55,
      "specialDefense": 110,
      "speed": 85
    },
    "category": "별다섯 포켓몬",
    "heightM": 1.4,
    "weightKg": 35.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/166.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/166.png"
  },
  {
    "id": 167,
    "dexNumber": 167,
    "generation": 2,
    "nameKo": "페이검",
    "nameEn": "Spinarak",
    "types": [
      "벌레",
      "독"
    ],
    "stats": {
      "hp": 40,
      "attack": 60,
      "defense": 40,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 30
    },
    "category": "실뿜기 포켓몬",
    "heightM": 0.5,
    "weightKg": 8.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/167.png"
  },
  {
    "id": 168,
    "dexNumber": 168,
    "generation": 2,
    "nameKo": "아리아도스",
    "nameEn": "Ariados",
    "types": [
      "벌레",
      "독"
    ],
    "stats": {
      "hp": 70,
      "attack": 90,
      "defense": 70,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 40
    },
    "category": "롱다리 포켓몬",
    "heightM": 1.1,
    "weightKg": 33.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/168.png"
  },
  {
    "id": 169,
    "dexNumber": 169,
    "generation": 2,
    "nameKo": "크로뱃",
    "nameEn": "Crobat",
    "types": [
      "독",
      "비행"
    ],
    "stats": {
      "hp": 85,
      "attack": 90,
      "defense": 80,
      "specialAttack": 70,
      "specialDefense": 80,
      "speed": 130
    },
    "category": "박쥐 포켓몬",
    "heightM": 1.8,
    "weightKg": 75,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/169.png"
  },
  {
    "id": 170,
    "dexNumber": 170,
    "generation": 2,
    "nameKo": "초라기",
    "nameEn": "Chinchou",
    "types": [
      "물",
      "전기"
    ],
    "stats": {
      "hp": 75,
      "attack": 38,
      "defense": 38,
      "specialAttack": 56,
      "specialDefense": 56,
      "speed": 67
    },
    "category": "아귀 포켓몬",
    "heightM": 0.5,
    "weightKg": 12,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/170.png"
  },
  {
    "id": 171,
    "dexNumber": 171,
    "generation": 2,
    "nameKo": "랜턴",
    "nameEn": "Lanturn",
    "types": [
      "물",
      "전기"
    ],
    "stats": {
      "hp": 125,
      "attack": 58,
      "defense": 58,
      "specialAttack": 76,
      "specialDefense": 76,
      "speed": 67
    },
    "category": "라이트 포켓몬",
    "heightM": 1.2,
    "weightKg": 22.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/171.png"
  },
  {
    "id": 172,
    "dexNumber": 172,
    "generation": 2,
    "nameKo": "피츄",
    "nameEn": "Pichu",
    "types": [
      "전기"
    ],
    "stats": {
      "hp": 20,
      "attack": 40,
      "defense": 15,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 60
    },
    "category": "아기쥐 포켓몬",
    "heightM": 0.3,
    "weightKg": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png"
  },
  {
    "id": 173,
    "dexNumber": 173,
    "generation": 2,
    "nameKo": "삐",
    "nameEn": "Cleffa",
    "types": [
      "페어리"
    ],
    "stats": {
      "hp": 50,
      "attack": 25,
      "defense": 28,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 15
    },
    "category": "별 포켓몬",
    "heightM": 0.3,
    "weightKg": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/173.png"
  },
  {
    "id": 174,
    "dexNumber": 174,
    "generation": 2,
    "nameKo": "푸푸린",
    "nameEn": "Igglybuff",
    "types": [
      "노말",
      "페어리"
    ],
    "stats": {
      "hp": 90,
      "attack": 30,
      "defense": 15,
      "specialAttack": 40,
      "specialDefense": 20,
      "speed": 15
    },
    "category": "풍선 포켓몬",
    "heightM": 0.3,
    "weightKg": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/174.png"
  },
  {
    "id": 175,
    "dexNumber": 175,
    "generation": 2,
    "nameKo": "토게피",
    "nameEn": "Togepi",
    "types": [
      "페어리"
    ],
    "stats": {
      "hp": 35,
      "attack": 20,
      "defense": 65,
      "specialAttack": 40,
      "specialDefense": 65,
      "speed": 20
    },
    "category": "바늘알 포켓몬",
    "heightM": 0.3,
    "weightKg": 1.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/175.png"
  },
  {
    "id": 176,
    "dexNumber": 176,
    "generation": 2,
    "nameKo": "토게틱",
    "nameEn": "Togetic",
    "types": [
      "페어리",
      "비행"
    ],
    "stats": {
      "hp": 55,
      "attack": 40,
      "defense": 85,
      "specialAttack": 80,
      "specialDefense": 105,
      "speed": 40
    },
    "category": "행복 포켓몬",
    "heightM": 0.6,
    "weightKg": 3.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/176.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/176.png"
  },
  {
    "id": 177,
    "dexNumber": 177,
    "generation": 2,
    "nameKo": "네이티",
    "nameEn": "Natu",
    "types": [
      "에스퍼",
      "비행"
    ],
    "stats": {
      "hp": 40,
      "attack": 50,
      "defense": 45,
      "specialAttack": 70,
      "specialDefense": 45,
      "speed": 70
    },
    "category": "아기새 포켓몬",
    "heightM": 0.2,
    "weightKg": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/177.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/177.png"
  },
  {
    "id": 178,
    "dexNumber": 178,
    "generation": 2,
    "nameKo": "네이티오",
    "nameEn": "Xatu",
    "types": [
      "에스퍼",
      "비행"
    ],
    "stats": {
      "hp": 65,
      "attack": 75,
      "defense": 70,
      "specialAttack": 95,
      "specialDefense": 70,
      "speed": 95
    },
    "category": "정령 포켓몬",
    "heightM": 1.5,
    "weightKg": 15,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/178.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/178.png"
  },
  {
    "id": 179,
    "dexNumber": 179,
    "generation": 2,
    "nameKo": "메리프",
    "nameEn": "Mareep",
    "types": [
      "전기"
    ],
    "stats": {
      "hp": 55,
      "attack": 40,
      "defense": 40,
      "specialAttack": 65,
      "specialDefense": 45,
      "speed": 35
    },
    "category": "솜털 포켓몬",
    "heightM": 0.6,
    "weightKg": 7.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/179.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/179.png"
  },
  {
    "id": 180,
    "dexNumber": 180,
    "generation": 2,
    "nameKo": "보송송",
    "nameEn": "Flaaffy",
    "types": [
      "전기"
    ],
    "stats": {
      "hp": 70,
      "attack": 55,
      "defense": 55,
      "specialAttack": 80,
      "specialDefense": 60,
      "speed": 45
    },
    "category": "솜털 포켓몬",
    "heightM": 0.8,
    "weightKg": 13.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/180.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/180.png"
  },
  {
    "id": 181,
    "dexNumber": 181,
    "generation": 2,
    "nameKo": "전룡",
    "nameEn": "Ampharos",
    "types": [
      "전기"
    ],
    "stats": {
      "hp": 90,
      "attack": 75,
      "defense": 85,
      "specialAttack": 115,
      "specialDefense": 90,
      "speed": 55
    },
    "category": "라이트 포켓몬",
    "heightM": 1.4,
    "weightKg": 61.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/181.png",
    "megaForms": [
      {
        "label": "메가전룡",
        "types": [
          "전기",
          "드래곤"
        ],
        "stats": {
          "hp": 90,
          "attack": 95,
          "defense": 105,
          "specialAttack": 165,
          "specialDefense": 110,
          "speed": 45
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10045.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10045.png"
      }
    ]
  },
  {
    "id": 182,
    "dexNumber": 182,
    "generation": 2,
    "nameKo": "아르코",
    "nameEn": "Bellossom",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 95,
      "specialAttack": 90,
      "specialDefense": 100,
      "speed": 50
    },
    "category": "꽃 포켓몬",
    "heightM": 0.4,
    "weightKg": 5.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/182.png"
  },
  {
    "id": 183,
    "dexNumber": 183,
    "generation": 2,
    "nameKo": "마릴",
    "nameEn": "Marill",
    "types": [
      "물",
      "페어리"
    ],
    "stats": {
      "hp": 70,
      "attack": 20,
      "defense": 50,
      "specialAttack": 20,
      "specialDefense": 50,
      "speed": 40
    },
    "category": "물쥐 포켓몬",
    "heightM": 0.4,
    "weightKg": 8.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/183.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/183.png"
  },
  {
    "id": 184,
    "dexNumber": 184,
    "generation": 2,
    "nameKo": "마릴리",
    "nameEn": "Azumarill",
    "types": [
      "물",
      "페어리"
    ],
    "stats": {
      "hp": 100,
      "attack": 50,
      "defense": 80,
      "specialAttack": 60,
      "specialDefense": 80,
      "speed": 50
    },
    "category": "물토끼 포켓몬",
    "heightM": 0.8,
    "weightKg": 28.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/184.png"
  },
  {
    "id": 185,
    "dexNumber": 185,
    "generation": 2,
    "nameKo": "꼬지모",
    "nameEn": "Sudowoodo",
    "types": [
      "바위"
    ],
    "stats": {
      "hp": 70,
      "attack": 100,
      "defense": 115,
      "specialAttack": 30,
      "specialDefense": 65,
      "speed": 30
    },
    "category": "흉내 포켓몬",
    "heightM": 1.2,
    "weightKg": 38,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/185.png"
  },
  {
    "id": 186,
    "dexNumber": 186,
    "generation": 2,
    "nameKo": "왕구리",
    "nameEn": "Politoed",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 90,
      "attack": 75,
      "defense": 75,
      "specialAttack": 90,
      "specialDefense": 100,
      "speed": 70
    },
    "category": "개구리 포켓몬",
    "heightM": 1.1,
    "weightKg": 33.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/186.png"
  },
  {
    "id": 187,
    "dexNumber": 187,
    "generation": 2,
    "nameKo": "통통코",
    "nameEn": "Hoppip",
    "types": [
      "풀",
      "비행"
    ],
    "stats": {
      "hp": 35,
      "attack": 35,
      "defense": 40,
      "specialAttack": 35,
      "specialDefense": 55,
      "speed": 50
    },
    "category": "솜풀 포켓몬",
    "heightM": 0.4,
    "weightKg": 0.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/187.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/187.png"
  },
  {
    "id": 188,
    "dexNumber": 188,
    "generation": 2,
    "nameKo": "두코",
    "nameEn": "Skiploom",
    "types": [
      "풀",
      "비행"
    ],
    "stats": {
      "hp": 55,
      "attack": 45,
      "defense": 50,
      "specialAttack": 45,
      "specialDefense": 65,
      "speed": 80
    },
    "category": "솜풀 포켓몬",
    "heightM": 0.6,
    "weightKg": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/188.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/188.png"
  },
  {
    "id": 189,
    "dexNumber": 189,
    "generation": 2,
    "nameKo": "솜솜코",
    "nameEn": "Jumpluff",
    "types": [
      "풀",
      "비행"
    ],
    "stats": {
      "hp": 75,
      "attack": 55,
      "defense": 70,
      "specialAttack": 55,
      "specialDefense": 95,
      "speed": 110
    },
    "category": "솜풀 포켓몬",
    "heightM": 0.8,
    "weightKg": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/189.png"
  },
  {
    "id": 190,
    "dexNumber": 190,
    "generation": 2,
    "nameKo": "에이팜",
    "nameEn": "Aipom",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 55,
      "attack": 70,
      "defense": 55,
      "specialAttack": 40,
      "specialDefense": 55,
      "speed": 85
    },
    "category": "긴꼬리 포켓몬",
    "heightM": 0.8,
    "weightKg": 11.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/190.png"
  },
  {
    "id": 191,
    "dexNumber": 191,
    "generation": 2,
    "nameKo": "해너츠",
    "nameEn": "Sunkern",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 30,
      "attack": 30,
      "defense": 30,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 30
    },
    "category": "씨앗 포켓몬",
    "heightM": 0.3,
    "weightKg": 1.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/191.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/191.png"
  },
  {
    "id": 192,
    "dexNumber": 192,
    "generation": 2,
    "nameKo": "해루미",
    "nameEn": "Sunflora",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 75,
      "attack": 75,
      "defense": 55,
      "specialAttack": 105,
      "specialDefense": 85,
      "speed": 30
    },
    "category": "태양 포켓몬",
    "heightM": 0.8,
    "weightKg": 8.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/192.png"
  },
  {
    "id": 193,
    "dexNumber": 193,
    "generation": 2,
    "nameKo": "왕자리",
    "nameEn": "Yanma",
    "types": [
      "벌레",
      "비행"
    ],
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 45,
      "specialAttack": 75,
      "specialDefense": 45,
      "speed": 95
    },
    "category": "얇은날개 포켓몬",
    "heightM": 1.2,
    "weightKg": 38,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/193.png"
  },
  {
    "id": 194,
    "dexNumber": 194,
    "generation": 2,
    "nameKo": "우파",
    "nameEn": "Wooper",
    "types": [
      "물",
      "땅"
    ],
    "stats": {
      "hp": 55,
      "attack": 45,
      "defense": 45,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 15
    },
    "category": "수어 포켓몬",
    "heightM": 0.4,
    "weightKg": 8.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/194.png"
  },
  {
    "id": 195,
    "dexNumber": 195,
    "generation": 2,
    "nameKo": "누오",
    "nameEn": "Quagsire",
    "types": [
      "물",
      "땅"
    ],
    "stats": {
      "hp": 95,
      "attack": 85,
      "defense": 85,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 35
    },
    "category": "수어 포켓몬",
    "heightM": 1.4,
    "weightKg": 75,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/195.png"
  },
  {
    "id": 196,
    "dexNumber": 196,
    "generation": 2,
    "nameKo": "에브이",
    "nameEn": "Espeon",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 60,
      "specialAttack": 130,
      "specialDefense": 95,
      "speed": 110
    },
    "category": "태양 포켓몬",
    "heightM": 0.9,
    "weightKg": 26.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/196.png"
  },
  {
    "id": 197,
    "dexNumber": 197,
    "generation": 2,
    "nameKo": "블래키",
    "nameEn": "Umbreon",
    "types": [
      "악"
    ],
    "stats": {
      "hp": 95,
      "attack": 65,
      "defense": 110,
      "specialAttack": 60,
      "specialDefense": 130,
      "speed": 65
    },
    "category": "달빛 포켓몬",
    "heightM": 1,
    "weightKg": 27,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png"
  },
  {
    "id": 198,
    "dexNumber": 198,
    "generation": 2,
    "nameKo": "니로우",
    "nameEn": "Murkrow",
    "types": [
      "악",
      "비행"
    ],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 42,
      "specialAttack": 85,
      "specialDefense": 42,
      "speed": 91
    },
    "category": "어둠 포켓몬",
    "heightM": 0.5,
    "weightKg": 2.1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/198.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/198.png"
  },
  {
    "id": 199,
    "dexNumber": 199,
    "generation": 2,
    "nameKo": "야도킹",
    "nameEn": "Slowking",
    "types": [
      "물",
      "에스퍼"
    ],
    "stats": {
      "hp": 95,
      "attack": 75,
      "defense": 80,
      "specialAttack": 100,
      "specialDefense": 110,
      "speed": 30
    },
    "category": "임금 포켓몬",
    "heightM": 2,
    "weightKg": 79.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/199.png"
  },
  {
    "id": 200,
    "dexNumber": 200,
    "generation": 2,
    "nameKo": "무우마",
    "nameEn": "Misdreavus",
    "types": [
      "고스트"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "specialAttack": 85,
      "specialDefense": 85,
      "speed": 85
    },
    "category": "야명 포켓몬",
    "heightM": 0.7,
    "weightKg": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/200.png"
  },
  {
    "id": 201,
    "dexNumber": 201,
    "generation": 2,
    "nameKo": "안농",
    "nameEn": "Unown",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 48,
      "attack": 72,
      "defense": 48,
      "specialAttack": 72,
      "specialDefense": 48,
      "speed": 48
    },
    "category": "심볼 포켓몬",
    "heightM": 0.5,
    "weightKg": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/201.png"
  },
  {
    "id": 202,
    "dexNumber": 202,
    "generation": 2,
    "nameKo": "마자용",
    "nameEn": "Wobbuffet",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 190,
      "attack": 33,
      "defense": 58,
      "specialAttack": 33,
      "specialDefense": 58,
      "speed": 33
    },
    "category": "참기 포켓몬",
    "heightM": 1.3,
    "weightKg": 28.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/202.png"
  },
  {
    "id": 203,
    "dexNumber": 203,
    "generation": 2,
    "nameKo": "키링키",
    "nameEn": "Girafarig",
    "types": [
      "노말",
      "에스퍼"
    ],
    "stats": {
      "hp": 70,
      "attack": 80,
      "defense": 65,
      "specialAttack": 90,
      "specialDefense": 65,
      "speed": 85
    },
    "category": "긴목 포켓몬",
    "heightM": 1.5,
    "weightKg": 41.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/203.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/203.png"
  },
  {
    "id": 204,
    "dexNumber": 204,
    "generation": 2,
    "nameKo": "피콘",
    "nameEn": "Pineco",
    "types": [
      "벌레"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 90,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 15
    },
    "category": "도롱이벌레 포켓몬",
    "heightM": 0.6,
    "weightKg": 7.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/204.png"
  },
  {
    "id": 205,
    "dexNumber": 205,
    "generation": 2,
    "nameKo": "쏘콘",
    "nameEn": "Forretress",
    "types": [
      "벌레",
      "강철"
    ],
    "stats": {
      "hp": 75,
      "attack": 90,
      "defense": 140,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 40
    },
    "category": "도롱이벌레 포켓몬",
    "heightM": 1.2,
    "weightKg": 125.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/205.png"
  },
  {
    "id": 206,
    "dexNumber": 206,
    "generation": 2,
    "nameKo": "노고치",
    "nameEn": "Dunsparce",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 100,
      "attack": 70,
      "defense": 70,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 45
    },
    "category": "땅뱀 포켓몬",
    "heightM": 1.5,
    "weightKg": 14,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/206.png"
  },
  {
    "id": 207,
    "dexNumber": 207,
    "generation": 2,
    "nameKo": "글라이거",
    "nameEn": "Gligar",
    "types": [
      "땅",
      "비행"
    ],
    "stats": {
      "hp": 65,
      "attack": 75,
      "defense": 105,
      "specialAttack": 35,
      "specialDefense": 65,
      "speed": 85
    },
    "category": "날전갈 포켓몬",
    "heightM": 1.1,
    "weightKg": 64.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/207.png"
  },
  {
    "id": 208,
    "dexNumber": 208,
    "generation": 2,
    "nameKo": "강철톤",
    "nameEn": "Steelix",
    "types": [
      "강철",
      "땅"
    ],
    "stats": {
      "hp": 75,
      "attack": 85,
      "defense": 200,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 30
    },
    "category": "철뱀 포켓몬",
    "heightM": 9.2,
    "weightKg": 400,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/208.png",
    "megaForms": [
      {
        "label": "메가강철톤",
        "types": [
          "강철",
          "땅"
        ],
        "stats": {
          "hp": 75,
          "attack": 125,
          "defense": 230,
          "specialAttack": 55,
          "specialDefense": 95,
          "speed": 30
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10072.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10072.png"
      }
    ]
  },
  {
    "id": 209,
    "dexNumber": 209,
    "generation": 2,
    "nameKo": "블루",
    "nameEn": "Snubbull",
    "types": [
      "페어리"
    ],
    "stats": {
      "hp": 60,
      "attack": 80,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 30
    },
    "category": "요정 포켓몬",
    "heightM": 0.6,
    "weightKg": 7.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/209.png"
  },
  {
    "id": 210,
    "dexNumber": 210,
    "generation": 2,
    "nameKo": "그랑블루",
    "nameEn": "Granbull",
    "types": [
      "페어리"
    ],
    "stats": {
      "hp": 90,
      "attack": 120,
      "defense": 75,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 45
    },
    "category": "요정 포켓몬",
    "heightM": 1.4,
    "weightKg": 48.7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/210.png"
  },
  {
    "id": 211,
    "dexNumber": 211,
    "generation": 2,
    "nameKo": "침바루",
    "nameEn": "Qwilfish",
    "types": [
      "물",
      "독"
    ],
    "stats": {
      "hp": 65,
      "attack": 95,
      "defense": 85,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 85
    },
    "category": "풍선 포켓몬",
    "heightM": 0.5,
    "weightKg": 3.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/211.png"
  },
  {
    "id": 212,
    "dexNumber": 212,
    "generation": 2,
    "nameKo": "핫삼",
    "nameEn": "Scizor",
    "types": [
      "벌레",
      "강철"
    ],
    "stats": {
      "hp": 70,
      "attack": 130,
      "defense": 100,
      "specialAttack": 55,
      "specialDefense": 80,
      "speed": 65
    },
    "category": "집게 포켓몬",
    "heightM": 1.8,
    "weightKg": 118,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/212.png",
    "megaForms": [
      {
        "label": "메가핫삼",
        "types": [
          "벌레",
          "강철"
        ],
        "stats": {
          "hp": 70,
          "attack": 150,
          "defense": 140,
          "specialAttack": 65,
          "specialDefense": 100,
          "speed": 75
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10046.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10046.png"
      }
    ]
  },
  {
    "id": 213,
    "dexNumber": 213,
    "generation": 2,
    "nameKo": "단단지",
    "nameEn": "Shuckle",
    "types": [
      "벌레",
      "바위"
    ],
    "stats": {
      "hp": 20,
      "attack": 10,
      "defense": 230,
      "specialAttack": 10,
      "specialDefense": 230,
      "speed": 5
    },
    "category": "발효 포켓몬",
    "heightM": 0.6,
    "weightKg": 20.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/213.png"
  },
  {
    "id": 214,
    "dexNumber": 214,
    "generation": 2,
    "nameKo": "헤라크로스",
    "nameEn": "Heracross",
    "types": [
      "벌레",
      "격투"
    ],
    "stats": {
      "hp": 80,
      "attack": 125,
      "defense": 75,
      "specialAttack": 40,
      "specialDefense": 95,
      "speed": 85
    },
    "category": "외뿔 포켓몬",
    "heightM": 1.5,
    "weightKg": 54,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/214.png",
    "megaForms": [
      {
        "label": "메가헤라크로스",
        "types": [
          "벌레",
          "격투"
        ],
        "stats": {
          "hp": 80,
          "attack": 185,
          "defense": 115,
          "specialAttack": 40,
          "specialDefense": 105,
          "speed": 75
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10047.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10047.png"
      }
    ]
  },
  {
    "id": 215,
    "dexNumber": 215,
    "generation": 2,
    "nameKo": "포푸니",
    "nameEn": "Sneasel",
    "types": [
      "악",
      "얼음"
    ],
    "stats": {
      "hp": 55,
      "attack": 95,
      "defense": 55,
      "specialAttack": 35,
      "specialDefense": 75,
      "speed": 115
    },
    "category": "갈고리손톱 포켓몬",
    "heightM": 0.9,
    "weightKg": 28,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/215.png"
  },
  {
    "id": 216,
    "dexNumber": 216,
    "generation": 2,
    "nameKo": "깜지곰",
    "nameEn": "Teddiursa",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 60,
      "attack": 80,
      "defense": 50,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 40
    },
    "category": "아기곰 포켓몬",
    "heightM": 0.6,
    "weightKg": 8.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/216.png"
  },
  {
    "id": 217,
    "dexNumber": 217,
    "generation": 2,
    "nameKo": "링곰",
    "nameEn": "Ursaring",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 90,
      "attack": 130,
      "defense": 75,
      "specialAttack": 75,
      "specialDefense": 75,
      "speed": 55
    },
    "category": "동면 포켓몬",
    "heightM": 1.8,
    "weightKg": 125.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/217.png"
  },
  {
    "id": 218,
    "dexNumber": 218,
    "generation": 2,
    "nameKo": "마그마그",
    "nameEn": "Slugma",
    "types": [
      "불꽃"
    ],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 40,
      "specialAttack": 70,
      "specialDefense": 40,
      "speed": 20
    },
    "category": "용암 포켓몬",
    "heightM": 0.7,
    "weightKg": 35,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/218.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/218.png"
  },
  {
    "id": 219,
    "dexNumber": 219,
    "generation": 2,
    "nameKo": "마그카르고",
    "nameEn": "Magcargo",
    "types": [
      "불꽃",
      "바위"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 120,
      "specialAttack": 90,
      "specialDefense": 80,
      "speed": 30
    },
    "category": "용암 포켓몬",
    "heightM": 0.8,
    "weightKg": 55,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/219.png"
  },
  {
    "id": 220,
    "dexNumber": 220,
    "generation": 2,
    "nameKo": "꾸꾸리",
    "nameEn": "Swinub",
    "types": [
      "얼음",
      "땅"
    ],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 40,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 50
    },
    "category": "산돼지 포켓몬",
    "heightM": 0.4,
    "weightKg": 6.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/220.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/220.png"
  },
  {
    "id": 221,
    "dexNumber": 221,
    "generation": 2,
    "nameKo": "메꾸리",
    "nameEn": "Piloswine",
    "types": [
      "얼음",
      "땅"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 80,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 50
    },
    "category": "멧돼지 포켓몬",
    "heightM": 1.1,
    "weightKg": 55.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/221.png"
  },
  {
    "id": 222,
    "dexNumber": 222,
    "generation": 2,
    "nameKo": "코산호",
    "nameEn": "Corsola",
    "types": [
      "물",
      "바위"
    ],
    "stats": {
      "hp": 65,
      "attack": 55,
      "defense": 95,
      "specialAttack": 65,
      "specialDefense": 95,
      "speed": 35
    },
    "category": "산호 포켓몬",
    "heightM": 0.6,
    "weightKg": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/222.png"
  },
  {
    "id": 223,
    "dexNumber": 223,
    "generation": 2,
    "nameKo": "총어",
    "nameEn": "Remoraid",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 35,
      "attack": 65,
      "defense": 35,
      "specialAttack": 65,
      "specialDefense": 35,
      "speed": 65
    },
    "category": "분사 포켓몬",
    "heightM": 0.6,
    "weightKg": 12,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/223.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/223.png"
  },
  {
    "id": 224,
    "dexNumber": 224,
    "generation": 2,
    "nameKo": "대포무노",
    "nameEn": "Octillery",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 75,
      "attack": 105,
      "defense": 75,
      "specialAttack": 105,
      "specialDefense": 75,
      "speed": 45
    },
    "category": "분사 포켓몬",
    "heightM": 0.9,
    "weightKg": 28.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/224.png"
  },
  {
    "id": 225,
    "dexNumber": 225,
    "generation": 2,
    "nameKo": "딜리버드",
    "nameEn": "Delibird",
    "types": [
      "얼음",
      "비행"
    ],
    "stats": {
      "hp": 45,
      "attack": 55,
      "defense": 45,
      "specialAttack": 65,
      "specialDefense": 45,
      "speed": 75
    },
    "category": "배달 포켓몬",
    "heightM": 0.9,
    "weightKg": 16,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/225.png"
  },
  {
    "id": 226,
    "dexNumber": 226,
    "generation": 2,
    "nameKo": "만타인",
    "nameEn": "Mantine",
    "types": [
      "물",
      "비행"
    ],
    "stats": {
      "hp": 85,
      "attack": 40,
      "defense": 70,
      "specialAttack": 80,
      "specialDefense": 140,
      "speed": 70
    },
    "category": "연 포켓몬",
    "heightM": 2.1,
    "weightKg": 220,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/226.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/226.png"
  },
  {
    "id": 227,
    "dexNumber": 227,
    "generation": 2,
    "nameKo": "무장조",
    "nameEn": "Skarmory",
    "types": [
      "강철",
      "비행"
    ],
    "stats": {
      "hp": 65,
      "attack": 80,
      "defense": 140,
      "specialAttack": 40,
      "specialDefense": 70,
      "speed": 70
    },
    "category": "갑옷새 포켓몬",
    "heightM": 1.7,
    "weightKg": 50.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/227.png"
  },
  {
    "id": 228,
    "dexNumber": 228,
    "generation": 2,
    "nameKo": "델빌",
    "nameEn": "Houndour",
    "types": [
      "악",
      "불꽃"
    ],
    "stats": {
      "hp": 45,
      "attack": 60,
      "defense": 30,
      "specialAttack": 80,
      "specialDefense": 50,
      "speed": 65
    },
    "category": "다크 포켓몬",
    "heightM": 0.6,
    "weightKg": 10.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/228.png"
  },
  {
    "id": 229,
    "dexNumber": 229,
    "generation": 2,
    "nameKo": "헬가",
    "nameEn": "Houndoom",
    "types": [
      "악",
      "불꽃"
    ],
    "stats": {
      "hp": 75,
      "attack": 90,
      "defense": 50,
      "specialAttack": 110,
      "specialDefense": 80,
      "speed": 95
    },
    "category": "다크 포켓몬",
    "heightM": 1.4,
    "weightKg": 35,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/229.png",
    "megaForms": [
      {
        "label": "메가헬가",
        "types": [
          "악",
          "불꽃"
        ],
        "stats": {
          "hp": 75,
          "attack": 90,
          "defense": 90,
          "specialAttack": 140,
          "specialDefense": 90,
          "speed": 115
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10048.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10048.png"
      }
    ]
  },
  {
    "id": 230,
    "dexNumber": 230,
    "generation": 2,
    "nameKo": "킹드라",
    "nameEn": "Kingdra",
    "types": [
      "물",
      "드래곤"
    ],
    "stats": {
      "hp": 75,
      "attack": 95,
      "defense": 95,
      "specialAttack": 95,
      "specialDefense": 95,
      "speed": 85
    },
    "category": "드래곤 포켓몬",
    "heightM": 1.8,
    "weightKg": 152,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/230.png"
  },
  {
    "id": 231,
    "dexNumber": 231,
    "generation": 2,
    "nameKo": "코코리",
    "nameEn": "Phanpy",
    "types": [
      "땅"
    ],
    "stats": {
      "hp": 90,
      "attack": 60,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 40
    },
    "category": "긴코 포켓몬",
    "heightM": 0.5,
    "weightKg": 33.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/231.png"
  },
  {
    "id": 232,
    "dexNumber": 232,
    "generation": 2,
    "nameKo": "코리갑",
    "nameEn": "Donphan",
    "types": [
      "땅"
    ],
    "stats": {
      "hp": 90,
      "attack": 120,
      "defense": 120,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 50
    },
    "category": "갑옷 포켓몬",
    "heightM": 1.1,
    "weightKg": 120,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/232.png"
  },
  {
    "id": 233,
    "dexNumber": 233,
    "generation": 2,
    "nameKo": "폴리곤2",
    "nameEn": "Porygon2",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 85,
      "attack": 80,
      "defense": 90,
      "specialAttack": 105,
      "specialDefense": 95,
      "speed": 60
    },
    "category": "가상 포켓몬",
    "heightM": 0.6,
    "weightKg": 32.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/233.png"
  },
  {
    "id": 234,
    "dexNumber": 234,
    "generation": 2,
    "nameKo": "노라키",
    "nameEn": "Stantler",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 73,
      "attack": 95,
      "defense": 62,
      "specialAttack": 85,
      "specialDefense": 65,
      "speed": 85
    },
    "category": "큰뿔 포켓몬",
    "heightM": 1.4,
    "weightKg": 71.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/234.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/234.png"
  },
  {
    "id": 235,
    "dexNumber": 235,
    "generation": 2,
    "nameKo": "루브도",
    "nameEn": "Smeargle",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 55,
      "attack": 20,
      "defense": 35,
      "specialAttack": 20,
      "specialDefense": 45,
      "speed": 75
    },
    "category": "그림장이 포켓몬",
    "heightM": 1.2,
    "weightKg": 58,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/235.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/235.png"
  },
  {
    "id": 236,
    "dexNumber": 236,
    "generation": 2,
    "nameKo": "배루키",
    "nameEn": "Tyrogue",
    "types": [
      "격투"
    ],
    "stats": {
      "hp": 35,
      "attack": 35,
      "defense": 35,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 35
    },
    "category": "싸움 포켓몬",
    "heightM": 0.7,
    "weightKg": 21,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/236.png"
  },
  {
    "id": 237,
    "dexNumber": 237,
    "generation": 2,
    "nameKo": "카포에라",
    "nameEn": "Hitmontop",
    "types": [
      "격투"
    ],
    "stats": {
      "hp": 50,
      "attack": 95,
      "defense": 95,
      "specialAttack": 35,
      "specialDefense": 110,
      "speed": 70
    },
    "category": "물구나무 포켓몬",
    "heightM": 1.4,
    "weightKg": 48,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/237.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/237.png"
  },
  {
    "id": 238,
    "dexNumber": 238,
    "generation": 2,
    "nameKo": "뽀뽀라",
    "nameEn": "Smoochum",
    "types": [
      "얼음",
      "에스퍼"
    ],
    "stats": {
      "hp": 45,
      "attack": 30,
      "defense": 15,
      "specialAttack": 85,
      "specialDefense": 65,
      "speed": 65
    },
    "category": "뽀뽀 포켓몬",
    "heightM": 0.4,
    "weightKg": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/238.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/238.png"
  },
  {
    "id": 239,
    "dexNumber": 239,
    "generation": 2,
    "nameKo": "에레키드",
    "nameEn": "Elekid",
    "types": [
      "전기"
    ],
    "stats": {
      "hp": 45,
      "attack": 63,
      "defense": 37,
      "specialAttack": 65,
      "specialDefense": 55,
      "speed": 95
    },
    "category": "전류 포켓몬",
    "heightM": 0.6,
    "weightKg": 23.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/239.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/239.png"
  },
  {
    "id": 240,
    "dexNumber": 240,
    "generation": 2,
    "nameKo": "마그비",
    "nameEn": "Magby",
    "types": [
      "불꽃"
    ],
    "stats": {
      "hp": 45,
      "attack": 75,
      "defense": 37,
      "specialAttack": 70,
      "specialDefense": 55,
      "speed": 83
    },
    "category": "불씨 포켓몬",
    "heightM": 0.7,
    "weightKg": 21.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/240.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/240.png"
  },
  {
    "id": 241,
    "dexNumber": 241,
    "generation": 2,
    "nameKo": "밀탱크",
    "nameEn": "Miltank",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 95,
      "attack": 80,
      "defense": 105,
      "specialAttack": 40,
      "specialDefense": 70,
      "speed": 100
    },
    "category": "젖소 포켓몬",
    "heightM": 1.2,
    "weightKg": 75.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/241.png"
  },
  {
    "id": 242,
    "dexNumber": 242,
    "generation": 2,
    "nameKo": "해피너스",
    "nameEn": "Blissey",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 255,
      "attack": 10,
      "defense": 10,
      "specialAttack": 75,
      "specialDefense": 135,
      "speed": 55
    },
    "category": "행복 포켓몬",
    "heightM": 1.5,
    "weightKg": 46.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/242.png"
  },
  {
    "id": 243,
    "dexNumber": 243,
    "generation": 2,
    "nameKo": "라이코",
    "nameEn": "Raikou",
    "types": [
      "전기"
    ],
    "stats": {
      "hp": 90,
      "attack": 85,
      "defense": 75,
      "specialAttack": 115,
      "specialDefense": 100,
      "speed": 115
    },
    "category": "우뢰 포켓몬",
    "heightM": 1.9,
    "weightKg": 178,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/243.png"
  },
  {
    "id": 244,
    "dexNumber": 244,
    "generation": 2,
    "nameKo": "앤테이",
    "nameEn": "Entei",
    "types": [
      "불꽃"
    ],
    "stats": {
      "hp": 115,
      "attack": 115,
      "defense": 85,
      "specialAttack": 90,
      "specialDefense": 75,
      "speed": 100
    },
    "category": "화산 포켓몬",
    "heightM": 2.1,
    "weightKg": 198,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/244.png"
  },
  {
    "id": 245,
    "dexNumber": 245,
    "generation": 2,
    "nameKo": "스이쿤",
    "nameEn": "Suicune",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 100,
      "attack": 75,
      "defense": 115,
      "specialAttack": 90,
      "specialDefense": 115,
      "speed": 85
    },
    "category": "오로라 포켓몬",
    "heightM": 2,
    "weightKg": 187,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/245.png"
  },
  {
    "id": 246,
    "dexNumber": 246,
    "generation": 2,
    "nameKo": "애버라스",
    "nameEn": "Larvitar",
    "types": [
      "바위",
      "땅"
    ],
    "stats": {
      "hp": 50,
      "attack": 64,
      "defense": 50,
      "specialAttack": 45,
      "specialDefense": 50,
      "speed": 41
    },
    "category": "바위표면 포켓몬",
    "heightM": 0.6,
    "weightKg": 72,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/246.png"
  },
  {
    "id": 247,
    "dexNumber": 247,
    "generation": 2,
    "nameKo": "데기라스",
    "nameEn": "Pupitar",
    "types": [
      "바위",
      "땅"
    ],
    "stats": {
      "hp": 70,
      "attack": 84,
      "defense": 70,
      "specialAttack": 65,
      "specialDefense": 70,
      "speed": 51
    },
    "category": "탄환 포켓몬",
    "heightM": 1.2,
    "weightKg": 152,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/247.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/247.png"
  },
  {
    "id": 248,
    "dexNumber": 248,
    "generation": 2,
    "nameKo": "마기라스",
    "nameEn": "Tyranitar",
    "types": [
      "바위",
      "악"
    ],
    "stats": {
      "hp": 100,
      "attack": 134,
      "defense": 110,
      "specialAttack": 95,
      "specialDefense": 100,
      "speed": 61
    },
    "category": "갑옷 포켓몬",
    "heightM": 2,
    "weightKg": 202,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png",
    "megaForms": [
      {
        "label": "메가마기라스",
        "types": [
          "바위",
          "악"
        ],
        "stats": {
          "hp": 100,
          "attack": 164,
          "defense": 150,
          "specialAttack": 95,
          "specialDefense": 120,
          "speed": 71
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10049.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10049.png"
      }
    ]
  },
  {
    "id": 249,
    "dexNumber": 249,
    "generation": 2,
    "nameKo": "루기아",
    "nameEn": "Lugia",
    "types": [
      "에스퍼",
      "비행"
    ],
    "stats": {
      "hp": 106,
      "attack": 90,
      "defense": 130,
      "specialAttack": 90,
      "specialDefense": 154,
      "speed": 110
    },
    "category": "잠수 포켓몬",
    "heightM": 5.2,
    "weightKg": 216,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png"
  },
  {
    "id": 250,
    "dexNumber": 250,
    "generation": 2,
    "nameKo": "칠색조",
    "nameEn": "Ho-Oh",
    "types": [
      "불꽃",
      "비행"
    ],
    "stats": {
      "hp": 106,
      "attack": 130,
      "defense": 90,
      "specialAttack": 110,
      "specialDefense": 154,
      "speed": 90
    },
    "category": "무지개색 포켓몬",
    "heightM": 3.8,
    "weightKg": 199,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/250.png"
  },
  {
    "id": 251,
    "dexNumber": 251,
    "generation": 2,
    "nameKo": "세레비",
    "nameEn": "Celebi",
    "types": [
      "에스퍼",
      "풀"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 100
    },
    "category": "시간이동 포켓몬",
    "heightM": 0.6,
    "weightKg": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/251.png"
  },
  {
    "id": 252,
    "dexNumber": 252,
    "generation": 3,
    "nameKo": "나무지기",
    "nameEn": "Treecko",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "specialAttack": 65,
      "specialDefense": 55,
      "speed": 70
    },
    "category": "숲도마뱀 포켓몬",
    "heightM": 0.5,
    "weightKg": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/252.png"
  },
  {
    "id": 253,
    "dexNumber": 253,
    "generation": 3,
    "nameKo": "나무돌이",
    "nameEn": "Grovyle",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 45,
      "specialAttack": 85,
      "specialDefense": 65,
      "speed": 95
    },
    "category": "숲도마뱀 포켓몬",
    "heightM": 0.9,
    "weightKg": 21.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/253.png"
  },
  {
    "id": 254,
    "dexNumber": 254,
    "generation": 3,
    "nameKo": "나무킹",
    "nameEn": "Sceptile",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 65,
      "specialAttack": 105,
      "specialDefense": 85,
      "speed": 120
    },
    "category": "밀림 포켓몬",
    "heightM": 1.7,
    "weightKg": 52.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/254.png",
    "megaForms": [
      {
        "label": "메가나무킹",
        "types": [
          "풀",
          "드래곤"
        ],
        "stats": {
          "hp": 70,
          "attack": 110,
          "defense": 75,
          "specialAttack": 145,
          "specialDefense": 85,
          "speed": 145
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10065.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10065.png"
      }
    ]
  },
  {
    "id": 255,
    "dexNumber": 255,
    "generation": 3,
    "nameKo": "아차모",
    "nameEn": "Torchic",
    "types": [
      "불꽃"
    ],
    "stats": {
      "hp": 45,
      "attack": 60,
      "defense": 40,
      "specialAttack": 70,
      "specialDefense": 50,
      "speed": 45
    },
    "category": "풋내기 포켓몬",
    "heightM": 0.4,
    "weightKg": 2.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/255.png"
  },
  {
    "id": 256,
    "dexNumber": 256,
    "generation": 3,
    "nameKo": "영치코",
    "nameEn": "Combusken",
    "types": [
      "불꽃",
      "격투"
    ],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 60,
      "specialAttack": 85,
      "specialDefense": 60,
      "speed": 55
    },
    "category": "꼬마닭 포켓몬",
    "heightM": 0.9,
    "weightKg": 19.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/256.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/256.png"
  },
  {
    "id": 257,
    "dexNumber": 257,
    "generation": 3,
    "nameKo": "번치코",
    "nameEn": "Blaziken",
    "types": [
      "불꽃",
      "격투"
    ],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 70,
      "specialAttack": 110,
      "specialDefense": 70,
      "speed": 80
    },
    "category": "맹화 포켓몬",
    "heightM": 1.9,
    "weightKg": 52,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/257.png",
    "megaForms": [
      {
        "label": "메가번치코",
        "types": [
          "불꽃",
          "격투"
        ],
        "stats": {
          "hp": 80,
          "attack": 160,
          "defense": 80,
          "specialAttack": 130,
          "specialDefense": 80,
          "speed": 100
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10050.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10050.png"
      }
    ]
  },
  {
    "id": 258,
    "dexNumber": 258,
    "generation": 3,
    "nameKo": "물짱이",
    "nameEn": "Mudkip",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 50,
      "attack": 70,
      "defense": 50,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 40
    },
    "category": "늪물고기 포켓몬",
    "heightM": 0.4,
    "weightKg": 7.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/258.png"
  },
  {
    "id": 259,
    "dexNumber": 259,
    "generation": 3,
    "nameKo": "늪짱이",
    "nameEn": "Marshtomp",
    "types": [
      "물",
      "땅"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 70,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 50
    },
    "category": "늪물고기 포켓몬",
    "heightM": 0.7,
    "weightKg": 28,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/259.png"
  },
  {
    "id": 260,
    "dexNumber": 260,
    "generation": 3,
    "nameKo": "대짱이",
    "nameEn": "Swampert",
    "types": [
      "물",
      "땅"
    ],
    "stats": {
      "hp": 100,
      "attack": 110,
      "defense": 90,
      "specialAttack": 85,
      "specialDefense": 90,
      "speed": 60
    },
    "category": "늪물고기 포켓몬",
    "heightM": 1.5,
    "weightKg": 81.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/260.png",
    "megaForms": [
      {
        "label": "메가대짱이",
        "types": [
          "물",
          "땅"
        ],
        "stats": {
          "hp": 100,
          "attack": 150,
          "defense": 110,
          "specialAttack": 95,
          "specialDefense": 110,
          "speed": 70
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10064.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10064.png"
      }
    ]
  },
  {
    "id": 261,
    "dexNumber": 261,
    "generation": 3,
    "nameKo": "포챠나",
    "nameEn": "Poochyena",
    "types": [
      "악"
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 35,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 35
    },
    "category": "물어뜯기 포켓몬",
    "heightM": 0.5,
    "weightKg": 13.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/261.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/261.png"
  },
  {
    "id": 262,
    "dexNumber": 262,
    "generation": 3,
    "nameKo": "그라에나",
    "nameEn": "Mightyena",
    "types": [
      "악"
    ],
    "stats": {
      "hp": 70,
      "attack": 90,
      "defense": 70,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 70
    },
    "category": "물어뜯기 포켓몬",
    "heightM": 1,
    "weightKg": 37,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/262.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/262.png"
  },
  {
    "id": 263,
    "dexNumber": 263,
    "generation": 3,
    "nameKo": "지그제구리",
    "nameEn": "Zigzagoon",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 38,
      "attack": 30,
      "defense": 41,
      "specialAttack": 30,
      "specialDefense": 41,
      "speed": 60
    },
    "category": "앙증너구리 포켓몬",
    "heightM": 0.4,
    "weightKg": 17.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/263.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/263.png"
  },
  {
    "id": 264,
    "dexNumber": 264,
    "generation": 3,
    "nameKo": "직구리",
    "nameEn": "Linoone",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 78,
      "attack": 70,
      "defense": 61,
      "specialAttack": 50,
      "specialDefense": 61,
      "speed": 100
    },
    "category": "돌진 포켓몬",
    "heightM": 0.5,
    "weightKg": 32.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/264.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/264.png"
  },
  {
    "id": 265,
    "dexNumber": 265,
    "generation": 3,
    "nameKo": "개무소",
    "nameEn": "Wurmple",
    "types": [
      "벌레"
    ],
    "stats": {
      "hp": 45,
      "attack": 45,
      "defense": 35,
      "specialAttack": 20,
      "specialDefense": 30,
      "speed": 20
    },
    "category": "애벌레 포켓몬",
    "heightM": 0.3,
    "weightKg": 3.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/265.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/265.png"
  },
  {
    "id": 266,
    "dexNumber": 266,
    "generation": 3,
    "nameKo": "실쿤",
    "nameEn": "Silcoon",
    "types": [
      "벌레"
    ],
    "stats": {
      "hp": 50,
      "attack": 35,
      "defense": 55,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 15
    },
    "category": "번데기 포켓몬",
    "heightM": 0.6,
    "weightKg": 10,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/266.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/266.png"
  },
  {
    "id": 267,
    "dexNumber": 267,
    "generation": 3,
    "nameKo": "뷰티플라이",
    "nameEn": "Beautifly",
    "types": [
      "벌레",
      "비행"
    ],
    "stats": {
      "hp": 60,
      "attack": 70,
      "defense": 50,
      "specialAttack": 100,
      "specialDefense": 50,
      "speed": 65
    },
    "category": "나비 포켓몬",
    "heightM": 1,
    "weightKg": 28.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/267.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/267.png"
  },
  {
    "id": 268,
    "dexNumber": 268,
    "generation": 3,
    "nameKo": "카스쿤",
    "nameEn": "Cascoon",
    "types": [
      "벌레"
    ],
    "stats": {
      "hp": 50,
      "attack": 35,
      "defense": 55,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 15
    },
    "category": "번데기 포켓몬",
    "heightM": 0.7,
    "weightKg": 11.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/268.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/268.png"
  },
  {
    "id": 269,
    "dexNumber": 269,
    "generation": 3,
    "nameKo": "독케일",
    "nameEn": "Dustox",
    "types": [
      "벌레",
      "독"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 70,
      "specialAttack": 50,
      "specialDefense": 90,
      "speed": 65
    },
    "category": "독나방 포켓몬",
    "heightM": 1.2,
    "weightKg": 31.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/269.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/269.png"
  },
  {
    "id": 270,
    "dexNumber": 270,
    "generation": 3,
    "nameKo": "연꽃몬",
    "nameEn": "Lotad",
    "types": [
      "물",
      "풀"
    ],
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 30,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 30
    },
    "category": "개구리밥 포켓몬",
    "heightM": 0.5,
    "weightKg": 2.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/270.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/270.png"
  },
  {
    "id": 271,
    "dexNumber": 271,
    "generation": 3,
    "nameKo": "로토스",
    "nameEn": "Lombre",
    "types": [
      "물",
      "풀"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 50,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 50
    },
    "category": "명랑함 포켓몬",
    "heightM": 1.2,
    "weightKg": 32.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/271.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/271.png"
  },
  {
    "id": 272,
    "dexNumber": 272,
    "generation": 3,
    "nameKo": "로파파",
    "nameEn": "Ludicolo",
    "types": [
      "물",
      "풀"
    ],
    "stats": {
      "hp": 80,
      "attack": 70,
      "defense": 70,
      "specialAttack": 90,
      "specialDefense": 100,
      "speed": 70
    },
    "category": "행복하기 포켓몬",
    "heightM": 1.5,
    "weightKg": 55,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/272.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/272.png"
  },
  {
    "id": 273,
    "dexNumber": 273,
    "generation": 3,
    "nameKo": "도토링",
    "nameEn": "Seedot",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 50,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 30
    },
    "category": "도토리 포켓몬",
    "heightM": 0.5,
    "weightKg": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/273.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/273.png"
  },
  {
    "id": 274,
    "dexNumber": 274,
    "generation": 3,
    "nameKo": "잎새코",
    "nameEn": "Nuzleaf",
    "types": [
      "풀",
      "악"
    ],
    "stats": {
      "hp": 70,
      "attack": 70,
      "defense": 40,
      "specialAttack": 60,
      "specialDefense": 40,
      "speed": 60
    },
    "category": "꾀부리기 포켓몬",
    "heightM": 1,
    "weightKg": 28,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/274.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/274.png"
  },
  {
    "id": 275,
    "dexNumber": 275,
    "generation": 3,
    "nameKo": "다탱구",
    "nameEn": "Shiftry",
    "types": [
      "풀",
      "악"
    ],
    "stats": {
      "hp": 90,
      "attack": 100,
      "defense": 60,
      "specialAttack": 90,
      "specialDefense": 60,
      "speed": 80
    },
    "category": "부정하기 포켓몬",
    "heightM": 1.3,
    "weightKg": 59.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/275.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/275.png"
  },
  {
    "id": 276,
    "dexNumber": 276,
    "generation": 3,
    "nameKo": "테일로",
    "nameEn": "Taillow",
    "types": [
      "노말",
      "비행"
    ],
    "stats": {
      "hp": 40,
      "attack": 55,
      "defense": 30,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 85
    },
    "category": "아기제비 포켓몬",
    "heightM": 0.3,
    "weightKg": 2.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/276.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/276.png"
  },
  {
    "id": 277,
    "dexNumber": 277,
    "generation": 3,
    "nameKo": "스왈로",
    "nameEn": "Swellow",
    "types": [
      "노말",
      "비행"
    ],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 60,
      "specialAttack": 75,
      "specialDefense": 50,
      "speed": 125
    },
    "category": "제비 포켓몬",
    "heightM": 0.7,
    "weightKg": 19.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/277.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/277.png"
  },
  {
    "id": 278,
    "dexNumber": 278,
    "generation": 3,
    "nameKo": "갈모매",
    "nameEn": "Wingull",
    "types": [
      "물",
      "비행"
    ],
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 30,
      "specialAttack": 55,
      "specialDefense": 30,
      "speed": 85
    },
    "category": "괭이갈매기 포켓몬",
    "heightM": 0.6,
    "weightKg": 9.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/278.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/278.png"
  },
  {
    "id": 279,
    "dexNumber": 279,
    "generation": 3,
    "nameKo": "패리퍼",
    "nameEn": "Pelipper",
    "types": [
      "물",
      "비행"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 100,
      "specialAttack": 95,
      "specialDefense": 70,
      "speed": 65
    },
    "category": "물새 포켓몬",
    "heightM": 1.2,
    "weightKg": 28,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/279.png"
  },
  {
    "id": 280,
    "dexNumber": 280,
    "generation": 3,
    "nameKo": "랄토스",
    "nameEn": "Ralts",
    "types": [
      "에스퍼",
      "페어리"
    ],
    "stats": {
      "hp": 28,
      "attack": 25,
      "defense": 25,
      "specialAttack": 45,
      "specialDefense": 35,
      "speed": 40
    },
    "category": "느낌 포켓몬",
    "heightM": 0.4,
    "weightKg": 6.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/280.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/280.png"
  },
  {
    "id": 281,
    "dexNumber": 281,
    "generation": 3,
    "nameKo": "킬리아",
    "nameEn": "Kirlia",
    "types": [
      "에스퍼",
      "페어리"
    ],
    "stats": {
      "hp": 38,
      "attack": 35,
      "defense": 35,
      "specialAttack": 65,
      "specialDefense": 55,
      "speed": 50
    },
    "category": "감정 포켓몬",
    "heightM": 0.8,
    "weightKg": 20.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/281.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/281.png"
  },
  {
    "id": 282,
    "dexNumber": 282,
    "generation": 3,
    "nameKo": "가디안",
    "nameEn": "Gardevoir",
    "types": [
      "에스퍼",
      "페어리"
    ],
    "stats": {
      "hp": 68,
      "attack": 65,
      "defense": 65,
      "specialAttack": 125,
      "specialDefense": 115,
      "speed": 80
    },
    "category": "포용 포켓몬",
    "heightM": 1.6,
    "weightKg": 48.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png",
    "megaForms": [
      {
        "label": "메가가디안",
        "types": [
          "에스퍼",
          "페어리"
        ],
        "stats": {
          "hp": 68,
          "attack": 85,
          "defense": 65,
          "specialAttack": 165,
          "specialDefense": 135,
          "speed": 100
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10051.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10051.png"
      }
    ]
  },
  {
    "id": 283,
    "dexNumber": 283,
    "generation": 3,
    "nameKo": "비구술",
    "nameEn": "Surskit",
    "types": [
      "벌레",
      "물"
    ],
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 32,
      "specialAttack": 50,
      "specialDefense": 52,
      "speed": 65
    },
    "category": "소금쟁이 포켓몬",
    "heightM": 0.5,
    "weightKg": 1.7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/283.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/283.png"
  },
  {
    "id": 284,
    "dexNumber": 284,
    "generation": 3,
    "nameKo": "비나방",
    "nameEn": "Masquerain",
    "types": [
      "벌레",
      "비행"
    ],
    "stats": {
      "hp": 70,
      "attack": 60,
      "defense": 62,
      "specialAttack": 100,
      "specialDefense": 82,
      "speed": 80
    },
    "category": "안구 포켓몬",
    "heightM": 0.8,
    "weightKg": 3.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/284.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/284.png"
  },
  {
    "id": 285,
    "dexNumber": 285,
    "generation": 3,
    "nameKo": "버섯꼬",
    "nameEn": "Shroomish",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 60,
      "attack": 40,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 60,
      "speed": 35
    },
    "category": "버섯 포켓몬",
    "heightM": 0.4,
    "weightKg": 4.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/285.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/285.png"
  },
  {
    "id": 286,
    "dexNumber": 286,
    "generation": 3,
    "nameKo": "버섯모",
    "nameEn": "Breloom",
    "types": [
      "풀",
      "격투"
    ],
    "stats": {
      "hp": 60,
      "attack": 130,
      "defense": 80,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 70
    },
    "category": "버섯 포켓몬",
    "heightM": 1.2,
    "weightKg": 39.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/286.png"
  },
  {
    "id": 287,
    "dexNumber": 287,
    "generation": 3,
    "nameKo": "게을로",
    "nameEn": "Slakoth",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 30
    },
    "category": "게으름뱅이 포켓몬",
    "heightM": 0.8,
    "weightKg": 24,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/287.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/287.png"
  },
  {
    "id": 288,
    "dexNumber": 288,
    "generation": 3,
    "nameKo": "발바로",
    "nameEn": "Vigoroth",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 80,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 90
    },
    "category": "성난원숭이 포켓몬",
    "heightM": 1.4,
    "weightKg": 46.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/288.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/288.png"
  },
  {
    "id": 289,
    "dexNumber": 289,
    "generation": 3,
    "nameKo": "게을킹",
    "nameEn": "Slaking",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 150,
      "attack": 160,
      "defense": 100,
      "specialAttack": 95,
      "specialDefense": 65,
      "speed": 100
    },
    "category": "나태함 포켓몬",
    "heightM": 2,
    "weightKg": 130.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/289.png"
  },
  {
    "id": 290,
    "dexNumber": 290,
    "generation": 3,
    "nameKo": "토중몬",
    "nameEn": "Nincada",
    "types": [
      "벌레",
      "땅"
    ],
    "stats": {
      "hp": 31,
      "attack": 45,
      "defense": 90,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 40
    },
    "category": "신참 포켓몬",
    "heightM": 0.5,
    "weightKg": 5.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/290.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/290.png"
  },
  {
    "id": 291,
    "dexNumber": 291,
    "generation": 3,
    "nameKo": "아이스크",
    "nameEn": "Ninjask",
    "types": [
      "벌레",
      "비행"
    ],
    "stats": {
      "hp": 61,
      "attack": 90,
      "defense": 45,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 160
    },
    "category": "시노비 포켓몬",
    "heightM": 0.8,
    "weightKg": 12,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/291.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/291.png"
  },
  {
    "id": 292,
    "dexNumber": 292,
    "generation": 3,
    "nameKo": "껍질몬",
    "nameEn": "Shedinja",
    "types": [
      "벌레",
      "고스트"
    ],
    "stats": {
      "hp": 1,
      "attack": 90,
      "defense": 45,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 40
    },
    "category": "허물 포켓몬",
    "heightM": 0.8,
    "weightKg": 1.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/292.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/292.png"
  },
  {
    "id": 293,
    "dexNumber": 293,
    "generation": 3,
    "nameKo": "소곤룡",
    "nameEn": "Whismur",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 64,
      "attack": 51,
      "defense": 23,
      "specialAttack": 51,
      "specialDefense": 23,
      "speed": 28
    },
    "category": "속삭임 포켓몬",
    "heightM": 0.6,
    "weightKg": 16.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/293.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/293.png"
  },
  {
    "id": 294,
    "dexNumber": 294,
    "generation": 3,
    "nameKo": "노공룡",
    "nameEn": "Loudred",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 84,
      "attack": 71,
      "defense": 43,
      "specialAttack": 71,
      "specialDefense": 43,
      "speed": 48
    },
    "category": "큰목소리 포켓몬",
    "heightM": 1,
    "weightKg": 40.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/294.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/294.png"
  },
  {
    "id": 295,
    "dexNumber": 295,
    "generation": 3,
    "nameKo": "폭음룡",
    "nameEn": "Exploud",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 104,
      "attack": 91,
      "defense": 63,
      "specialAttack": 91,
      "specialDefense": 73,
      "speed": 68
    },
    "category": "소음 포켓몬",
    "heightM": 1.5,
    "weightKg": 84,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/295.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/295.png"
  },
  {
    "id": 296,
    "dexNumber": 296,
    "generation": 3,
    "nameKo": "마크탕",
    "nameEn": "Makuhita",
    "types": [
      "격투"
    ],
    "stats": {
      "hp": 72,
      "attack": 60,
      "defense": 30,
      "specialAttack": 20,
      "specialDefense": 30,
      "speed": 25
    },
    "category": "근성 포켓몬",
    "heightM": 1,
    "weightKg": 86.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/296.png"
  },
  {
    "id": 297,
    "dexNumber": 297,
    "generation": 3,
    "nameKo": "하리뭉",
    "nameEn": "Hariyama",
    "types": [
      "격투"
    ],
    "stats": {
      "hp": 144,
      "attack": 120,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 60,
      "speed": 50
    },
    "category": "손바닥치기 포켓몬",
    "heightM": 2.3,
    "weightKg": 253.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/297.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/297.png"
  },
  {
    "id": 298,
    "dexNumber": 298,
    "generation": 3,
    "nameKo": "루리리",
    "nameEn": "Azurill",
    "types": [
      "노말",
      "페어리"
    ],
    "stats": {
      "hp": 50,
      "attack": 20,
      "defense": 40,
      "specialAttack": 20,
      "specialDefense": 40,
      "speed": 20
    },
    "category": "물방울 포켓몬",
    "heightM": 0.2,
    "weightKg": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/298.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/298.png"
  },
  {
    "id": 299,
    "dexNumber": 299,
    "generation": 3,
    "nameKo": "코코파스",
    "nameEn": "Nosepass",
    "types": [
      "바위"
    ],
    "stats": {
      "hp": 30,
      "attack": 45,
      "defense": 135,
      "specialAttack": 45,
      "specialDefense": 90,
      "speed": 30
    },
    "category": "콤파스 포켓몬",
    "heightM": 1,
    "weightKg": 97,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/299.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/299.png"
  },
  {
    "id": 300,
    "dexNumber": 300,
    "generation": 3,
    "nameKo": "에나비",
    "nameEn": "Skitty",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 50,
      "attack": 45,
      "defense": 45,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 50
    },
    "category": "작은고양이 포켓몬",
    "heightM": 0.6,
    "weightKg": 11,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/300.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/300.png"
  },
  {
    "id": 301,
    "dexNumber": 301,
    "generation": 3,
    "nameKo": "델케티",
    "nameEn": "Delcatty",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 70,
      "attack": 65,
      "defense": 65,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 90
    },
    "category": "새침떼기 포켓몬",
    "heightM": 1.1,
    "weightKg": 32.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/301.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/301.png"
  },
  {
    "id": 302,
    "dexNumber": 302,
    "generation": 3,
    "nameKo": "깜까미",
    "nameEn": "Sableye",
    "types": [
      "악",
      "고스트"
    ],
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 75,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 50
    },
    "category": "어둠 포켓몬",
    "heightM": 0.5,
    "weightKg": 11,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/302.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/302.png",
    "megaForms": [
      {
        "label": "메가깜까미",
        "types": [
          "악",
          "고스트"
        ],
        "stats": {
          "hp": 50,
          "attack": 85,
          "defense": 125,
          "specialAttack": 85,
          "specialDefense": 115,
          "speed": 20
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10066.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10066.png"
      }
    ]
  },
  {
    "id": 303,
    "dexNumber": 303,
    "generation": 3,
    "nameKo": "입치트",
    "nameEn": "Mawile",
    "types": [
      "강철",
      "페어리"
    ],
    "stats": {
      "hp": 50,
      "attack": 85,
      "defense": 85,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 50
    },
    "category": "배반 포켓몬",
    "heightM": 0.6,
    "weightKg": 11.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/303.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/303.png",
    "megaForms": [
      {
        "label": "메가입치트",
        "types": [
          "강철",
          "페어리"
        ],
        "stats": {
          "hp": 50,
          "attack": 105,
          "defense": 125,
          "specialAttack": 55,
          "specialDefense": 95,
          "speed": 50
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10052.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10052.png"
      }
    ]
  },
  {
    "id": 304,
    "dexNumber": 304,
    "generation": 3,
    "nameKo": "가보리",
    "nameEn": "Aron",
    "types": [
      "강철",
      "바위"
    ],
    "stats": {
      "hp": 50,
      "attack": 70,
      "defense": 100,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 30
    },
    "category": "철갑옷 포켓몬",
    "heightM": 0.4,
    "weightKg": 60,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/304.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/304.png"
  },
  {
    "id": 305,
    "dexNumber": 305,
    "generation": 3,
    "nameKo": "갱도라",
    "nameEn": "Lairon",
    "types": [
      "강철",
      "바위"
    ],
    "stats": {
      "hp": 60,
      "attack": 90,
      "defense": 140,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 40
    },
    "category": "철갑옷 포켓몬",
    "heightM": 0.9,
    "weightKg": 120,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/305.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/305.png"
  },
  {
    "id": 306,
    "dexNumber": 306,
    "generation": 3,
    "nameKo": "보스로라",
    "nameEn": "Aggron",
    "types": [
      "강철",
      "바위"
    ],
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 180,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 50
    },
    "category": "철갑옷 포켓몬",
    "heightM": 2.1,
    "weightKg": 360,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/306.png",
    "megaForms": [
      {
        "label": "메가보스로라",
        "types": [
          "강철"
        ],
        "stats": {
          "hp": 70,
          "attack": 140,
          "defense": 230,
          "specialAttack": 60,
          "specialDefense": 80,
          "speed": 50
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10053.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10053.png"
      }
    ]
  },
  {
    "id": 307,
    "dexNumber": 307,
    "generation": 3,
    "nameKo": "요가랑",
    "nameEn": "Meditite",
    "types": [
      "격투",
      "에스퍼"
    ],
    "stats": {
      "hp": 30,
      "attack": 40,
      "defense": 55,
      "specialAttack": 40,
      "specialDefense": 55,
      "speed": 60
    },
    "category": "명상 포켓몬",
    "heightM": 0.6,
    "weightKg": 11.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/307.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/307.png"
  },
  {
    "id": 308,
    "dexNumber": 308,
    "generation": 3,
    "nameKo": "요가램",
    "nameEn": "Medicham",
    "types": [
      "격투",
      "에스퍼"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 75,
      "specialAttack": 60,
      "specialDefense": 75,
      "speed": 80
    },
    "category": "명상 포켓몬",
    "heightM": 1.3,
    "weightKg": 31.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/308.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/308.png",
    "megaForms": [
      {
        "label": "메가요가램",
        "types": [
          "격투",
          "에스퍼"
        ],
        "stats": {
          "hp": 60,
          "attack": 100,
          "defense": 85,
          "specialAttack": 80,
          "specialDefense": 85,
          "speed": 100
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10054.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10054.png"
      }
    ]
  },
  {
    "id": 309,
    "dexNumber": 309,
    "generation": 3,
    "nameKo": "썬더라이",
    "nameEn": "Electrike",
    "types": [
      "전기"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "specialAttack": 65,
      "specialDefense": 40,
      "speed": 65
    },
    "category": "천둥번개 포켓몬",
    "heightM": 0.6,
    "weightKg": 15.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/309.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/309.png"
  },
  {
    "id": 310,
    "dexNumber": 310,
    "generation": 3,
    "nameKo": "썬더볼트",
    "nameEn": "Manectric",
    "types": [
      "전기"
    ],
    "stats": {
      "hp": 70,
      "attack": 75,
      "defense": 60,
      "specialAttack": 105,
      "specialDefense": 60,
      "speed": 105
    },
    "category": "방전 포켓몬",
    "heightM": 1.5,
    "weightKg": 40.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/310.png",
    "megaForms": [
      {
        "label": "메가썬더볼트",
        "types": [
          "전기"
        ],
        "stats": {
          "hp": 70,
          "attack": 75,
          "defense": 80,
          "specialAttack": 135,
          "specialDefense": 80,
          "speed": 135
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10055.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10055.png"
      }
    ]
  },
  {
    "id": 311,
    "dexNumber": 311,
    "generation": 3,
    "nameKo": "플러시",
    "nameEn": "Plusle",
    "types": [
      "전기"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 40,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 95
    },
    "category": "응원 포켓몬",
    "heightM": 0.4,
    "weightKg": 4.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/311.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/311.png"
  },
  {
    "id": 312,
    "dexNumber": 312,
    "generation": 3,
    "nameKo": "마이농",
    "nameEn": "Minun",
    "types": [
      "전기"
    ],
    "stats": {
      "hp": 60,
      "attack": 40,
      "defense": 50,
      "specialAttack": 75,
      "specialDefense": 85,
      "speed": 95
    },
    "category": "응원 포켓몬",
    "heightM": 0.4,
    "weightKg": 4.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/312.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/312.png"
  },
  {
    "id": 313,
    "dexNumber": 313,
    "generation": 3,
    "nameKo": "볼비트",
    "nameEn": "Volbeat",
    "types": [
      "벌레"
    ],
    "stats": {
      "hp": 65,
      "attack": 73,
      "defense": 75,
      "specialAttack": 47,
      "specialDefense": 85,
      "speed": 85
    },
    "category": "반딧불 포켓몬",
    "heightM": 0.7,
    "weightKg": 17.7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/313.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/313.png"
  },
  {
    "id": 314,
    "dexNumber": 314,
    "generation": 3,
    "nameKo": "네오비트",
    "nameEn": "Illumise",
    "types": [
      "벌레"
    ],
    "stats": {
      "hp": 65,
      "attack": 47,
      "defense": 75,
      "specialAttack": 73,
      "specialDefense": 85,
      "speed": 85
    },
    "category": "반딧불 포켓몬",
    "heightM": 0.6,
    "weightKg": 17.7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/314.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/314.png"
  },
  {
    "id": 315,
    "dexNumber": 315,
    "generation": 3,
    "nameKo": "로젤리아",
    "nameEn": "Roselia",
    "types": [
      "풀",
      "독"
    ],
    "stats": {
      "hp": 50,
      "attack": 60,
      "defense": 45,
      "specialAttack": 100,
      "specialDefense": 80,
      "speed": 65
    },
    "category": "가시 포켓몬",
    "heightM": 0.3,
    "weightKg": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/315.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/315.png"
  },
  {
    "id": 316,
    "dexNumber": 316,
    "generation": 3,
    "nameKo": "꼴깍몬",
    "nameEn": "Gulpin",
    "types": [
      "독"
    ],
    "stats": {
      "hp": 70,
      "attack": 43,
      "defense": 53,
      "specialAttack": 43,
      "specialDefense": 53,
      "speed": 40
    },
    "category": "밥통 포켓몬",
    "heightM": 0.4,
    "weightKg": 10.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/316.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/316.png"
  },
  {
    "id": 317,
    "dexNumber": 317,
    "generation": 3,
    "nameKo": "꿀꺽몬",
    "nameEn": "Swalot",
    "types": [
      "독"
    ],
    "stats": {
      "hp": 100,
      "attack": 73,
      "defense": 83,
      "specialAttack": 73,
      "specialDefense": 83,
      "speed": 55
    },
    "category": "독봉지 포켓몬",
    "heightM": 1.7,
    "weightKg": 80,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/317.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/317.png"
  },
  {
    "id": 318,
    "dexNumber": 318,
    "generation": 3,
    "nameKo": "샤프니아",
    "nameEn": "Carvanha",
    "types": [
      "물",
      "악"
    ],
    "stats": {
      "hp": 45,
      "attack": 90,
      "defense": 20,
      "specialAttack": 65,
      "specialDefense": 20,
      "speed": 65
    },
    "category": "사나움 포켓몬",
    "heightM": 0.8,
    "weightKg": 20.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/318.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/318.png"
  },
  {
    "id": 319,
    "dexNumber": 319,
    "generation": 3,
    "nameKo": "샤크니아",
    "nameEn": "Sharpedo",
    "types": [
      "물",
      "악"
    ],
    "stats": {
      "hp": 70,
      "attack": 120,
      "defense": 40,
      "specialAttack": 95,
      "specialDefense": 40,
      "speed": 95
    },
    "category": "난폭 포켓몬",
    "heightM": 1.8,
    "weightKg": 88.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/319.png",
    "megaForms": [
      {
        "label": "메가샤크니아",
        "types": [
          "물",
          "악"
        ],
        "stats": {
          "hp": 70,
          "attack": 140,
          "defense": 70,
          "specialAttack": 110,
          "specialDefense": 65,
          "speed": 105
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10070.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10070.png"
      }
    ]
  },
  {
    "id": 320,
    "dexNumber": 320,
    "generation": 3,
    "nameKo": "고래왕자",
    "nameEn": "Wailmer",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 130,
      "attack": 70,
      "defense": 35,
      "specialAttack": 70,
      "specialDefense": 35,
      "speed": 60
    },
    "category": "둥근고래 포켓몬",
    "heightM": 2,
    "weightKg": 130,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/320.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/320.png"
  },
  {
    "id": 321,
    "dexNumber": 321,
    "generation": 3,
    "nameKo": "고래왕",
    "nameEn": "Wailord",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 170,
      "attack": 90,
      "defense": 45,
      "specialAttack": 90,
      "specialDefense": 45,
      "speed": 60
    },
    "category": "뜸고래 포켓몬",
    "heightM": 14.5,
    "weightKg": 398,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/321.png"
  },
  {
    "id": 322,
    "dexNumber": 322,
    "generation": 3,
    "nameKo": "둔타",
    "nameEn": "Numel",
    "types": [
      "불꽃",
      "땅"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 40,
      "specialAttack": 65,
      "specialDefense": 45,
      "speed": 35
    },
    "category": "둔감 포켓몬",
    "heightM": 0.7,
    "weightKg": 24,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/322.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/322.png"
  },
  {
    "id": 323,
    "dexNumber": 323,
    "generation": 3,
    "nameKo": "폭타",
    "nameEn": "Camerupt",
    "types": [
      "불꽃",
      "땅"
    ],
    "stats": {
      "hp": 70,
      "attack": 100,
      "defense": 70,
      "specialAttack": 105,
      "specialDefense": 75,
      "speed": 40
    },
    "category": "분화 포켓몬",
    "heightM": 1.9,
    "weightKg": 220,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/323.png",
    "megaForms": [
      {
        "label": "메가폭타",
        "types": [
          "불꽃",
          "땅"
        ],
        "stats": {
          "hp": 70,
          "attack": 120,
          "defense": 100,
          "specialAttack": 145,
          "specialDefense": 105,
          "speed": 20
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10087.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10087.png"
      }
    ]
  },
  {
    "id": 324,
    "dexNumber": 324,
    "generation": 3,
    "nameKo": "코터스",
    "nameEn": "Torkoal",
    "types": [
      "불꽃"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 140,
      "specialAttack": 85,
      "specialDefense": 70,
      "speed": 20
    },
    "category": "석탄 포켓몬",
    "heightM": 0.5,
    "weightKg": 80.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/324.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/324.png"
  },
  {
    "id": 325,
    "dexNumber": 325,
    "generation": 3,
    "nameKo": "피그점프",
    "nameEn": "Spoink",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 60,
      "attack": 25,
      "defense": 35,
      "specialAttack": 70,
      "specialDefense": 80,
      "speed": 60
    },
    "category": "튀다 포켓몬",
    "heightM": 0.7,
    "weightKg": 30.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/325.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/325.png"
  },
  {
    "id": 326,
    "dexNumber": 326,
    "generation": 3,
    "nameKo": "피그킹",
    "nameEn": "Grumpig",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 80,
      "attack": 45,
      "defense": 65,
      "specialAttack": 90,
      "specialDefense": 110,
      "speed": 80
    },
    "category": "조작 포켓몬",
    "heightM": 0.9,
    "weightKg": 71.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/326.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/326.png"
  },
  {
    "id": 327,
    "dexNumber": 327,
    "generation": 3,
    "nameKo": "얼루기",
    "nameEn": "Spinda",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 60
    },
    "category": "얼룩팬더 포켓몬",
    "heightM": 1.1,
    "weightKg": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/327.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/327.png"
  },
  {
    "id": 328,
    "dexNumber": 328,
    "generation": 3,
    "nameKo": "톱치",
    "nameEn": "Trapinch",
    "types": [
      "땅"
    ],
    "stats": {
      "hp": 45,
      "attack": 100,
      "defense": 45,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 10
    },
    "category": "개미지옥 포켓몬",
    "heightM": 0.7,
    "weightKg": 15,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/328.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/328.png"
  },
  {
    "id": 329,
    "dexNumber": 329,
    "generation": 3,
    "nameKo": "비브라바",
    "nameEn": "Vibrava",
    "types": [
      "땅",
      "드래곤"
    ],
    "stats": {
      "hp": 50,
      "attack": 70,
      "defense": 50,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 70
    },
    "category": "진동 포켓몬",
    "heightM": 1.1,
    "weightKg": 15.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/329.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/329.png"
  },
  {
    "id": 330,
    "dexNumber": 330,
    "generation": 3,
    "nameKo": "플라이곤",
    "nameEn": "Flygon",
    "types": [
      "땅",
      "드래곤"
    ],
    "stats": {
      "hp": 80,
      "attack": 100,
      "defense": 80,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 100
    },
    "category": "정령 포켓몬",
    "heightM": 2,
    "weightKg": 82,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/330.png"
  },
  {
    "id": 331,
    "dexNumber": 331,
    "generation": 3,
    "nameKo": "선인왕",
    "nameEn": "Cacnea",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 50,
      "attack": 85,
      "defense": 40,
      "specialAttack": 85,
      "specialDefense": 40,
      "speed": 35
    },
    "category": "선인장 포켓몬",
    "heightM": 0.4,
    "weightKg": 51.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/331.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/331.png"
  },
  {
    "id": 332,
    "dexNumber": 332,
    "generation": 3,
    "nameKo": "밤선인",
    "nameEn": "Cacturne",
    "types": [
      "풀",
      "악"
    ],
    "stats": {
      "hp": 70,
      "attack": 115,
      "defense": 60,
      "specialAttack": 115,
      "specialDefense": 60,
      "speed": 55
    },
    "category": "허수아비 포켓몬",
    "heightM": 1.3,
    "weightKg": 77.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/332.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/332.png"
  },
  {
    "id": 333,
    "dexNumber": 333,
    "generation": 3,
    "nameKo": "파비코",
    "nameEn": "Swablu",
    "types": [
      "노말",
      "비행"
    ],
    "stats": {
      "hp": 45,
      "attack": 40,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 75,
      "speed": 50
    },
    "category": "솜새 포켓몬",
    "heightM": 0.4,
    "weightKg": 1.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/333.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/333.png"
  },
  {
    "id": 334,
    "dexNumber": 334,
    "generation": 3,
    "nameKo": "파비코리",
    "nameEn": "Altaria",
    "types": [
      "드래곤",
      "비행"
    ],
    "stats": {
      "hp": 75,
      "attack": 70,
      "defense": 90,
      "specialAttack": 70,
      "specialDefense": 105,
      "speed": 80
    },
    "category": "허밍 포켓몬",
    "heightM": 1.1,
    "weightKg": 20.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/334.png",
    "megaForms": [
      {
        "label": "메가파비코리",
        "types": [
          "드래곤",
          "페어리"
        ],
        "stats": {
          "hp": 75,
          "attack": 110,
          "defense": 110,
          "specialAttack": 110,
          "specialDefense": 105,
          "speed": 80
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10067.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10067.png"
      }
    ]
  },
  {
    "id": 335,
    "dexNumber": 335,
    "generation": 3,
    "nameKo": "쟝고",
    "nameEn": "Zangoose",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 73,
      "attack": 115,
      "defense": 60,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 90
    },
    "category": "고양이족제비 포켓몬",
    "heightM": 1.3,
    "weightKg": 40.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/335.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/335.png"
  },
  {
    "id": 336,
    "dexNumber": 336,
    "generation": 3,
    "nameKo": "세비퍼",
    "nameEn": "Seviper",
    "types": [
      "독"
    ],
    "stats": {
      "hp": 73,
      "attack": 100,
      "defense": 60,
      "specialAttack": 100,
      "specialDefense": 60,
      "speed": 65
    },
    "category": "송곳뱀 포켓몬",
    "heightM": 2.7,
    "weightKg": 52.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/336.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/336.png"
  },
  {
    "id": 337,
    "dexNumber": 337,
    "generation": 3,
    "nameKo": "루나톤",
    "nameEn": "Lunatone",
    "types": [
      "바위",
      "에스퍼"
    ],
    "stats": {
      "hp": 90,
      "attack": 55,
      "defense": 65,
      "specialAttack": 95,
      "specialDefense": 85,
      "speed": 70
    },
    "category": "별똥별 포켓몬",
    "heightM": 1,
    "weightKg": 168,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/337.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/337.png"
  },
  {
    "id": 338,
    "dexNumber": 338,
    "generation": 3,
    "nameKo": "솔록",
    "nameEn": "Solrock",
    "types": [
      "바위",
      "에스퍼"
    ],
    "stats": {
      "hp": 90,
      "attack": 95,
      "defense": 85,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 70
    },
    "category": "별똥별 포켓몬",
    "heightM": 1.2,
    "weightKg": 154,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/338.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/338.png"
  },
  {
    "id": 339,
    "dexNumber": 339,
    "generation": 3,
    "nameKo": "미꾸리",
    "nameEn": "Barboach",
    "types": [
      "물",
      "땅"
    ],
    "stats": {
      "hp": 50,
      "attack": 48,
      "defense": 43,
      "specialAttack": 46,
      "specialDefense": 41,
      "speed": 60
    },
    "category": "수염물고기 포켓몬",
    "heightM": 0.4,
    "weightKg": 1.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/339.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/339.png"
  },
  {
    "id": 340,
    "dexNumber": 340,
    "generation": 3,
    "nameKo": "메깅",
    "nameEn": "Whiscash",
    "types": [
      "물",
      "땅"
    ],
    "stats": {
      "hp": 110,
      "attack": 78,
      "defense": 73,
      "specialAttack": 76,
      "specialDefense": 71,
      "speed": 60
    },
    "category": "수염물고기 포켓몬",
    "heightM": 0.9,
    "weightKg": 23.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/340.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/340.png"
  },
  {
    "id": 341,
    "dexNumber": 341,
    "generation": 3,
    "nameKo": "가재군",
    "nameEn": "Corphish",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 43,
      "attack": 80,
      "defense": 65,
      "specialAttack": 50,
      "specialDefense": 35,
      "speed": 35
    },
    "category": "건달 포켓몬",
    "heightM": 0.6,
    "weightKg": 11.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/341.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/341.png"
  },
  {
    "id": 342,
    "dexNumber": 342,
    "generation": 3,
    "nameKo": "가재장군",
    "nameEn": "Crawdaunt",
    "types": [
      "물",
      "악"
    ],
    "stats": {
      "hp": 63,
      "attack": 120,
      "defense": 85,
      "specialAttack": 90,
      "specialDefense": 55,
      "speed": 55
    },
    "category": "불량배 포켓몬",
    "heightM": 1.1,
    "weightKg": 32.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/342.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/342.png"
  },
  {
    "id": 343,
    "dexNumber": 343,
    "generation": 3,
    "nameKo": "오뚝군",
    "nameEn": "Baltoy",
    "types": [
      "땅",
      "에스퍼"
    ],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 55,
      "specialAttack": 40,
      "specialDefense": 70,
      "speed": 55
    },
    "category": "토우 포켓몬",
    "heightM": 0.5,
    "weightKg": 21.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/343.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/343.png"
  },
  {
    "id": 344,
    "dexNumber": 344,
    "generation": 3,
    "nameKo": "점토도리",
    "nameEn": "Claydol",
    "types": [
      "땅",
      "에스퍼"
    ],
    "stats": {
      "hp": 60,
      "attack": 70,
      "defense": 105,
      "specialAttack": 70,
      "specialDefense": 120,
      "speed": 75
    },
    "category": "토우 포켓몬",
    "heightM": 1.5,
    "weightKg": 108,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/344.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/344.png"
  },
  {
    "id": 345,
    "dexNumber": 345,
    "generation": 3,
    "nameKo": "릴링",
    "nameEn": "Lileep",
    "types": [
      "바위",
      "풀"
    ],
    "stats": {
      "hp": 66,
      "attack": 41,
      "defense": 77,
      "specialAttack": 61,
      "specialDefense": 87,
      "speed": 23
    },
    "category": "바다나리 포켓몬",
    "heightM": 1,
    "weightKg": 23.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/345.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/345.png"
  },
  {
    "id": 346,
    "dexNumber": 346,
    "generation": 3,
    "nameKo": "릴리요",
    "nameEn": "Cradily",
    "types": [
      "바위",
      "풀"
    ],
    "stats": {
      "hp": 86,
      "attack": 81,
      "defense": 97,
      "specialAttack": 81,
      "specialDefense": 107,
      "speed": 43
    },
    "category": "바위단지 포켓몬",
    "heightM": 1.5,
    "weightKg": 60.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/346.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/346.png"
  },
  {
    "id": 347,
    "dexNumber": 347,
    "generation": 3,
    "nameKo": "아노딥스",
    "nameEn": "Anorith",
    "types": [
      "바위",
      "벌레"
    ],
    "stats": {
      "hp": 45,
      "attack": 95,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 75
    },
    "category": "고대새우 포켓몬",
    "heightM": 0.7,
    "weightKg": 12.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/347.png"
  },
  {
    "id": 348,
    "dexNumber": 348,
    "generation": 3,
    "nameKo": "아말도",
    "nameEn": "Armaldo",
    "types": [
      "바위",
      "벌레"
    ],
    "stats": {
      "hp": 75,
      "attack": 125,
      "defense": 100,
      "specialAttack": 70,
      "specialDefense": 80,
      "speed": 45
    },
    "category": "갑주 포켓몬",
    "heightM": 1.5,
    "weightKg": 68.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/348.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/348.png"
  },
  {
    "id": 349,
    "dexNumber": 349,
    "generation": 3,
    "nameKo": "빈티나",
    "nameEn": "Feebas",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 20,
      "attack": 15,
      "defense": 20,
      "specialAttack": 10,
      "specialDefense": 55,
      "speed": 80
    },
    "category": "물고기 포켓몬",
    "heightM": 0.6,
    "weightKg": 7.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/349.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/349.png"
  },
  {
    "id": 350,
    "dexNumber": 350,
    "generation": 3,
    "nameKo": "밀로틱",
    "nameEn": "Milotic",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 95,
      "attack": 60,
      "defense": 79,
      "specialAttack": 100,
      "specialDefense": 125,
      "speed": 81
    },
    "category": "사랑 포켓몬",
    "heightM": 6.2,
    "weightKg": 162,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/350.png"
  },
  {
    "id": 351,
    "dexNumber": 351,
    "generation": 3,
    "nameKo": "캐스퐁",
    "nameEn": "Castform",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 70,
      "attack": 70,
      "defense": 70,
      "specialAttack": 70,
      "specialDefense": 70,
      "speed": 70
    },
    "category": "날씨 포켓몬",
    "heightM": 0.3,
    "weightKg": 0.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/351.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/351.png"
  },
  {
    "id": 352,
    "dexNumber": 352,
    "generation": 3,
    "nameKo": "켈리몬",
    "nameEn": "Kecleon",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 60,
      "attack": 90,
      "defense": 70,
      "specialAttack": 60,
      "specialDefense": 120,
      "speed": 40
    },
    "category": "색변화 포켓몬",
    "heightM": 1,
    "weightKg": 22,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/352.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/352.png"
  },
  {
    "id": 353,
    "dexNumber": 353,
    "generation": 3,
    "nameKo": "어둠대신",
    "nameEn": "Shuppet",
    "types": [
      "고스트"
    ],
    "stats": {
      "hp": 44,
      "attack": 75,
      "defense": 35,
      "specialAttack": 63,
      "specialDefense": 33,
      "speed": 45
    },
    "category": "인형 포켓몬",
    "heightM": 0.6,
    "weightKg": 2.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/353.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/353.png"
  },
  {
    "id": 354,
    "dexNumber": 354,
    "generation": 3,
    "nameKo": "다크펫",
    "nameEn": "Banette",
    "types": [
      "고스트"
    ],
    "stats": {
      "hp": 64,
      "attack": 115,
      "defense": 65,
      "specialAttack": 83,
      "specialDefense": 63,
      "speed": 65
    },
    "category": "봉제인형 포켓몬",
    "heightM": 1.1,
    "weightKg": 12.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/354.png",
    "megaForms": [
      {
        "label": "메가다크펫",
        "types": [
          "고스트"
        ],
        "stats": {
          "hp": 64,
          "attack": 165,
          "defense": 75,
          "specialAttack": 93,
          "specialDefense": 83,
          "speed": 75
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10056.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10056.png"
      }
    ]
  },
  {
    "id": 355,
    "dexNumber": 355,
    "generation": 3,
    "nameKo": "해골몽",
    "nameEn": "Duskull",
    "types": [
      "고스트"
    ],
    "stats": {
      "hp": 20,
      "attack": 40,
      "defense": 90,
      "specialAttack": 30,
      "specialDefense": 90,
      "speed": 25
    },
    "category": "마중 포켓몬",
    "heightM": 0.8,
    "weightKg": 15,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/355.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/355.png"
  },
  {
    "id": 356,
    "dexNumber": 356,
    "generation": 3,
    "nameKo": "미라몽",
    "nameEn": "Dusclops",
    "types": [
      "고스트"
    ],
    "stats": {
      "hp": 40,
      "attack": 70,
      "defense": 130,
      "specialAttack": 60,
      "specialDefense": 130,
      "speed": 25
    },
    "category": "손짓 포켓몬",
    "heightM": 1.6,
    "weightKg": 30.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/356.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/356.png"
  },
  {
    "id": 357,
    "dexNumber": 357,
    "generation": 3,
    "nameKo": "트로피우스",
    "nameEn": "Tropius",
    "types": [
      "풀",
      "비행"
    ],
    "stats": {
      "hp": 99,
      "attack": 68,
      "defense": 83,
      "specialAttack": 72,
      "specialDefense": 87,
      "speed": 51
    },
    "category": "후르츠 포켓몬",
    "heightM": 2,
    "weightKg": 100,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/357.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/357.png"
  },
  {
    "id": 358,
    "dexNumber": 358,
    "generation": 3,
    "nameKo": "치렁",
    "nameEn": "Chimecho",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 75,
      "attack": 50,
      "defense": 80,
      "specialAttack": 95,
      "specialDefense": 90,
      "speed": 65
    },
    "category": "풍경 포켓몬",
    "heightM": 0.6,
    "weightKg": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/358.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/358.png"
  },
  {
    "id": 359,
    "dexNumber": 359,
    "generation": 3,
    "nameKo": "앱솔",
    "nameEn": "Absol",
    "types": [
      "악"
    ],
    "stats": {
      "hp": 65,
      "attack": 130,
      "defense": 60,
      "specialAttack": 75,
      "specialDefense": 60,
      "speed": 75
    },
    "category": "재난 포켓몬",
    "heightM": 1.2,
    "weightKg": 47,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/359.png",
    "megaForms": [
      {
        "label": "메가앱솔",
        "types": [
          "악"
        ],
        "stats": {
          "hp": 65,
          "attack": 150,
          "defense": 60,
          "specialAttack": 115,
          "specialDefense": 60,
          "speed": 115
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10057.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10057.png"
      }
    ]
  },
  {
    "id": 360,
    "dexNumber": 360,
    "generation": 3,
    "nameKo": "마자",
    "nameEn": "Wynaut",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 95,
      "attack": 23,
      "defense": 48,
      "specialAttack": 23,
      "specialDefense": 48,
      "speed": 23
    },
    "category": "명랑 포켓몬",
    "heightM": 0.6,
    "weightKg": 14,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/360.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/360.png"
  },
  {
    "id": 361,
    "dexNumber": 361,
    "generation": 3,
    "nameKo": "눈꼬마",
    "nameEn": "Snorunt",
    "types": [
      "얼음"
    ],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 50,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 50
    },
    "category": "눈우산 포켓몬",
    "heightM": 0.7,
    "weightKg": 16.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/361.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/361.png"
  },
  {
    "id": 362,
    "dexNumber": 362,
    "generation": 3,
    "nameKo": "얼음귀신",
    "nameEn": "Glalie",
    "types": [
      "얼음"
    ],
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 80,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 80
    },
    "category": "얼굴 포켓몬",
    "heightM": 1.5,
    "weightKg": 256.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/362.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/362.png",
    "megaForms": [
      {
        "label": "메가얼음귀신",
        "types": [
          "얼음"
        ],
        "stats": {
          "hp": 80,
          "attack": 120,
          "defense": 80,
          "specialAttack": 120,
          "specialDefense": 80,
          "speed": 100
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10074.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10074.png"
      }
    ]
  },
  {
    "id": 363,
    "dexNumber": 363,
    "generation": 3,
    "nameKo": "대굴레오",
    "nameEn": "Spheal",
    "types": [
      "얼음",
      "물"
    ],
    "stats": {
      "hp": 70,
      "attack": 40,
      "defense": 50,
      "specialAttack": 55,
      "specialDefense": 50,
      "speed": 25
    },
    "category": "손뼉 포켓몬",
    "heightM": 0.8,
    "weightKg": 39.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/363.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/363.png"
  },
  {
    "id": 364,
    "dexNumber": 364,
    "generation": 3,
    "nameKo": "씨레오",
    "nameEn": "Sealeo",
    "types": [
      "얼음",
      "물"
    ],
    "stats": {
      "hp": 90,
      "attack": 60,
      "defense": 70,
      "specialAttack": 75,
      "specialDefense": 70,
      "speed": 45
    },
    "category": "공돌리기 포켓몬",
    "heightM": 1.1,
    "weightKg": 87.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/364.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/364.png"
  },
  {
    "id": 365,
    "dexNumber": 365,
    "generation": 3,
    "nameKo": "씨카이저",
    "nameEn": "Walrein",
    "types": [
      "얼음",
      "물"
    ],
    "stats": {
      "hp": 110,
      "attack": 80,
      "defense": 90,
      "specialAttack": 95,
      "specialDefense": 90,
      "speed": 65
    },
    "category": "얼음깨기 포켓몬",
    "heightM": 1.4,
    "weightKg": 150.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/365.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/365.png"
  },
  {
    "id": 366,
    "dexNumber": 366,
    "generation": 3,
    "nameKo": "진주몽",
    "nameEn": "Clamperl",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 35,
      "attack": 64,
      "defense": 85,
      "specialAttack": 74,
      "specialDefense": 55,
      "speed": 32
    },
    "category": "두조개 포켓몬",
    "heightM": 0.4,
    "weightKg": 52.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/366.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/366.png"
  },
  {
    "id": 367,
    "dexNumber": 367,
    "generation": 3,
    "nameKo": "헌테일",
    "nameEn": "Huntail",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 55,
      "attack": 104,
      "defense": 105,
      "specialAttack": 94,
      "specialDefense": 75,
      "speed": 52
    },
    "category": "깊은바다 포켓몬",
    "heightM": 1.7,
    "weightKg": 27,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/367.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/367.png"
  },
  {
    "id": 368,
    "dexNumber": 368,
    "generation": 3,
    "nameKo": "분홍장이",
    "nameEn": "Gorebyss",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 55,
      "attack": 84,
      "defense": 105,
      "specialAttack": 114,
      "specialDefense": 75,
      "speed": 52
    },
    "category": "남해 포켓몬",
    "heightM": 1.8,
    "weightKg": 22.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/368.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/368.png"
  },
  {
    "id": 369,
    "dexNumber": 369,
    "generation": 3,
    "nameKo": "시라칸",
    "nameEn": "Relicanth",
    "types": [
      "물",
      "바위"
    ],
    "stats": {
      "hp": 100,
      "attack": 90,
      "defense": 130,
      "specialAttack": 45,
      "specialDefense": 65,
      "speed": 55
    },
    "category": "장수 포켓몬",
    "heightM": 1,
    "weightKg": 23.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/369.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/369.png"
  },
  {
    "id": 370,
    "dexNumber": 370,
    "generation": 3,
    "nameKo": "사랑동이",
    "nameEn": "Luvdisc",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 43,
      "attack": 30,
      "defense": 55,
      "specialAttack": 40,
      "specialDefense": 65,
      "speed": 97
    },
    "category": "랑데부 포켓몬",
    "heightM": 0.6,
    "weightKg": 8.7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/370.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/370.png"
  },
  {
    "id": 371,
    "dexNumber": 371,
    "generation": 3,
    "nameKo": "아공이",
    "nameEn": "Bagon",
    "types": [
      "드래곤"
    ],
    "stats": {
      "hp": 45,
      "attack": 75,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 30,
      "speed": 50
    },
    "category": "돌머리 포켓몬",
    "heightM": 0.6,
    "weightKg": 42.1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/371.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/371.png"
  },
  {
    "id": 372,
    "dexNumber": 372,
    "generation": 3,
    "nameKo": "쉘곤",
    "nameEn": "Shelgon",
    "types": [
      "드래곤"
    ],
    "stats": {
      "hp": 65,
      "attack": 95,
      "defense": 100,
      "specialAttack": 60,
      "specialDefense": 50,
      "speed": 50
    },
    "category": "인내 포켓몬",
    "heightM": 1.1,
    "weightKg": 110.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/372.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/372.png"
  },
  {
    "id": 373,
    "dexNumber": 373,
    "generation": 3,
    "nameKo": "보만다",
    "nameEn": "Salamence",
    "types": [
      "드래곤",
      "비행"
    ],
    "stats": {
      "hp": 95,
      "attack": 135,
      "defense": 80,
      "specialAttack": 110,
      "specialDefense": 80,
      "speed": 100
    },
    "category": "드래곤 포켓몬",
    "heightM": 1.5,
    "weightKg": 102.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/373.png",
    "megaForms": [
      {
        "label": "메가보만다",
        "types": [
          "드래곤",
          "비행"
        ],
        "stats": {
          "hp": 95,
          "attack": 145,
          "defense": 130,
          "specialAttack": 120,
          "specialDefense": 90,
          "speed": 120
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10089.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10089.png"
      }
    ]
  },
  {
    "id": 374,
    "dexNumber": 374,
    "generation": 3,
    "nameKo": "메탕",
    "nameEn": "Beldum",
    "types": [
      "강철",
      "에스퍼"
    ],
    "stats": {
      "hp": 40,
      "attack": 55,
      "defense": 80,
      "specialAttack": 35,
      "specialDefense": 60,
      "speed": 30
    },
    "category": "철공 포켓몬",
    "heightM": 0.6,
    "weightKg": 95.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/374.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/374.png"
  },
  {
    "id": 375,
    "dexNumber": 375,
    "generation": 3,
    "nameKo": "메탕구",
    "nameEn": "Metang",
    "types": [
      "강철",
      "에스퍼"
    ],
    "stats": {
      "hp": 60,
      "attack": 75,
      "defense": 100,
      "specialAttack": 55,
      "specialDefense": 80,
      "speed": 50
    },
    "category": "철발톱 포켓몬",
    "heightM": 1.2,
    "weightKg": 202.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/375.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/375.png"
  },
  {
    "id": 376,
    "dexNumber": 376,
    "generation": 3,
    "nameKo": "메타그로스",
    "nameEn": "Metagross",
    "types": [
      "강철",
      "에스퍼"
    ],
    "stats": {
      "hp": 80,
      "attack": 135,
      "defense": 130,
      "specialAttack": 95,
      "specialDefense": 90,
      "speed": 70
    },
    "category": "무쇠다리 포켓몬",
    "heightM": 1.6,
    "weightKg": 550,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/376.png",
    "megaForms": [
      {
        "label": "메가메타그로스",
        "types": [
          "강철",
          "에스퍼"
        ],
        "stats": {
          "hp": 80,
          "attack": 145,
          "defense": 150,
          "specialAttack": 105,
          "specialDefense": 110,
          "speed": 110
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10076.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10076.png"
      }
    ]
  },
  {
    "id": 377,
    "dexNumber": 377,
    "generation": 3,
    "nameKo": "레지락",
    "nameEn": "Regirock",
    "types": [
      "바위"
    ],
    "stats": {
      "hp": 80,
      "attack": 100,
      "defense": 200,
      "specialAttack": 50,
      "specialDefense": 100,
      "speed": 50
    },
    "category": "바위산 포켓몬",
    "heightM": 1.7,
    "weightKg": 230,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/377.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/377.png"
  },
  {
    "id": 378,
    "dexNumber": 378,
    "generation": 3,
    "nameKo": "레지아이스",
    "nameEn": "Regice",
    "types": [
      "얼음"
    ],
    "stats": {
      "hp": 80,
      "attack": 50,
      "defense": 100,
      "specialAttack": 100,
      "specialDefense": 200,
      "speed": 50
    },
    "category": "빙산 포켓몬",
    "heightM": 1.8,
    "weightKg": 175,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/378.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/378.png"
  },
  {
    "id": 379,
    "dexNumber": 379,
    "generation": 3,
    "nameKo": "레지스틸",
    "nameEn": "Registeel",
    "types": [
      "강철"
    ],
    "stats": {
      "hp": 80,
      "attack": 75,
      "defense": 150,
      "specialAttack": 75,
      "specialDefense": 150,
      "speed": 50
    },
    "category": "쇠철 포켓몬",
    "heightM": 1.9,
    "weightKg": 205,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/379.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/379.png"
  },
  {
    "id": 380,
    "dexNumber": 380,
    "generation": 3,
    "nameKo": "라티아스",
    "nameEn": "Latias",
    "types": [
      "드래곤",
      "에스퍼"
    ],
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 90,
      "specialAttack": 110,
      "specialDefense": 130,
      "speed": 110
    },
    "category": "무한 포켓몬",
    "heightM": 1.4,
    "weightKg": 40,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/380.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/380.png",
    "megaForms": [
      {
        "label": "메가라티아스",
        "types": [
          "드래곤",
          "에스퍼"
        ],
        "stats": {
          "hp": 80,
          "attack": 100,
          "defense": 120,
          "specialAttack": 140,
          "specialDefense": 150,
          "speed": 110
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10062.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10062.png"
      }
    ]
  },
  {
    "id": 381,
    "dexNumber": 381,
    "generation": 3,
    "nameKo": "라티오스",
    "nameEn": "Latios",
    "types": [
      "드래곤",
      "에스퍼"
    ],
    "stats": {
      "hp": 80,
      "attack": 90,
      "defense": 80,
      "specialAttack": 130,
      "specialDefense": 110,
      "speed": 110
    },
    "category": "무한 포켓몬",
    "heightM": 2,
    "weightKg": 60,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/381.png",
    "megaForms": [
      {
        "label": "메가라티오스",
        "types": [
          "드래곤",
          "에스퍼"
        ],
        "stats": {
          "hp": 80,
          "attack": 130,
          "defense": 100,
          "specialAttack": 160,
          "specialDefense": 120,
          "speed": 110
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10063.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10063.png"
      }
    ]
  },
  {
    "id": 382,
    "dexNumber": 382,
    "generation": 3,
    "nameKo": "가이오가",
    "nameEn": "Kyogre",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 90,
      "specialAttack": 150,
      "specialDefense": 140,
      "speed": 90
    },
    "category": "해저 포켓몬",
    "heightM": 4.5,
    "weightKg": 352,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/382.png"
  },
  {
    "id": 383,
    "dexNumber": 383,
    "generation": 3,
    "nameKo": "그란돈",
    "nameEn": "Groudon",
    "types": [
      "땅"
    ],
    "stats": {
      "hp": 100,
      "attack": 150,
      "defense": 140,
      "specialAttack": 100,
      "specialDefense": 90,
      "speed": 90
    },
    "category": "대륙 포켓몬",
    "heightM": 3.5,
    "weightKg": 950,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/383.png"
  },
  {
    "id": 384,
    "dexNumber": 384,
    "generation": 3,
    "nameKo": "레쿠쟈",
    "nameEn": "Rayquaza",
    "types": [
      "드래곤",
      "비행"
    ],
    "stats": {
      "hp": 105,
      "attack": 150,
      "defense": 90,
      "specialAttack": 150,
      "specialDefense": 90,
      "speed": 95
    },
    "category": "천공 포켓몬",
    "heightM": 7,
    "weightKg": 206.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png",
    "megaForms": [
      {
        "label": "메가레쿠쟈",
        "types": [
          "드래곤",
          "비행"
        ],
        "stats": {
          "hp": 105,
          "attack": 180,
          "defense": 100,
          "specialAttack": 180,
          "specialDefense": 100,
          "speed": 115
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10079.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10079.png"
      }
    ]
  },
  {
    "id": 385,
    "dexNumber": 385,
    "generation": 3,
    "nameKo": "지라치",
    "nameEn": "Jirachi",
    "types": [
      "강철",
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
    "category": "희망사항 포켓몬",
    "heightM": 0.3,
    "weightKg": 1.1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/385.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/385.png"
  },
  {
    "id": 386,
    "dexNumber": 386,
    "generation": 3,
    "nameKo": "테오키스",
    "nameEn": "Deoxys",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 50,
      "attack": 150,
      "defense": 50,
      "specialAttack": 150,
      "specialDefense": 50,
      "speed": 150
    },
    "category": "DNA 포켓몬",
    "heightM": 1.7,
    "weightKg": 60.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/386.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/386.png"
  },
  {
    "id": 387,
    "dexNumber": 387,
    "generation": 4,
    "nameKo": "모부기",
    "nameEn": "Turtwig",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 55,
      "attack": 68,
      "defense": 64,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 31
    },
    "category": "어린잎 포켓몬",
    "heightM": 0.4,
    "weightKg": 10.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/387.png"
  },
  {
    "id": 388,
    "dexNumber": 388,
    "generation": 4,
    "nameKo": "수풀부기",
    "nameEn": "Grotle",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 75,
      "attack": 89,
      "defense": 85,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 36
    },
    "category": "나무숲 포켓몬",
    "heightM": 1.1,
    "weightKg": 97,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/388.png"
  },
  {
    "id": 389,
    "dexNumber": 389,
    "generation": 4,
    "nameKo": "토대부기",
    "nameEn": "Torterra",
    "types": [
      "풀",
      "땅"
    ],
    "stats": {
      "hp": 95,
      "attack": 109,
      "defense": 105,
      "specialAttack": 75,
      "specialDefense": 85,
      "speed": 56
    },
    "category": "대륙 포켓몬",
    "heightM": 2.2,
    "weightKg": 310,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/389.png"
  },
  {
    "id": 390,
    "dexNumber": 390,
    "generation": 4,
    "nameKo": "불꽃숭이",
    "nameEn": "Chimchar",
    "types": [
      "불꽃"
    ],
    "stats": {
      "hp": 44,
      "attack": 58,
      "defense": 44,
      "specialAttack": 58,
      "specialDefense": 44,
      "speed": 61
    },
    "category": "꼬마원숭이 포켓몬",
    "heightM": 0.5,
    "weightKg": 6.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/390.png"
  },
  {
    "id": 391,
    "dexNumber": 391,
    "generation": 4,
    "nameKo": "파이숭이",
    "nameEn": "Monferno",
    "types": [
      "불꽃",
      "격투"
    ],
    "stats": {
      "hp": 64,
      "attack": 78,
      "defense": 52,
      "specialAttack": 78,
      "specialDefense": 52,
      "speed": 81
    },
    "category": "개구쟁이 포켓몬",
    "heightM": 0.9,
    "weightKg": 22,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/391.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/391.png"
  },
  {
    "id": 392,
    "dexNumber": 392,
    "generation": 4,
    "nameKo": "초염몽",
    "nameEn": "Infernape",
    "types": [
      "불꽃",
      "격투"
    ],
    "stats": {
      "hp": 76,
      "attack": 104,
      "defense": 71,
      "specialAttack": 104,
      "specialDefense": 71,
      "speed": 108
    },
    "category": "화염 포켓몬",
    "heightM": 1.2,
    "weightKg": 55,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/392.png"
  },
  {
    "id": 393,
    "dexNumber": 393,
    "generation": 4,
    "nameKo": "팽도리",
    "nameEn": "Piplup",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 53,
      "attack": 51,
      "defense": 53,
      "specialAttack": 61,
      "specialDefense": 56,
      "speed": 40
    },
    "category": "펭귄 포켓몬",
    "heightM": 0.4,
    "weightKg": 5.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/393.png"
  },
  {
    "id": 394,
    "dexNumber": 394,
    "generation": 4,
    "nameKo": "팽태자",
    "nameEn": "Prinplup",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 64,
      "attack": 66,
      "defense": 68,
      "specialAttack": 81,
      "specialDefense": 76,
      "speed": 50
    },
    "category": "펭귄 포켓몬",
    "heightM": 0.8,
    "weightKg": 23,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/394.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/394.png"
  },
  {
    "id": 395,
    "dexNumber": 395,
    "generation": 4,
    "nameKo": "엠페르트",
    "nameEn": "Empoleon",
    "types": [
      "물",
      "강철"
    ],
    "stats": {
      "hp": 84,
      "attack": 86,
      "defense": 88,
      "specialAttack": 111,
      "specialDefense": 101,
      "speed": 60
    },
    "category": "황제 포켓몬",
    "heightM": 1.7,
    "weightKg": 84.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/395.png"
  },
  {
    "id": 396,
    "dexNumber": 396,
    "generation": 4,
    "nameKo": "찌르꼬",
    "nameEn": "Starly",
    "types": [
      "노말",
      "비행"
    ],
    "stats": {
      "hp": 40,
      "attack": 55,
      "defense": 30,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 60
    },
    "category": "찌르레기 포켓몬",
    "heightM": 0.3,
    "weightKg": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/396.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/396.png"
  },
  {
    "id": 397,
    "dexNumber": 397,
    "generation": 4,
    "nameKo": "찌르버드",
    "nameEn": "Staravia",
    "types": [
      "노말",
      "비행"
    ],
    "stats": {
      "hp": 55,
      "attack": 75,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 80
    },
    "category": "찌르레기 포켓몬",
    "heightM": 0.6,
    "weightKg": 15.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/397.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/397.png"
  },
  {
    "id": 398,
    "dexNumber": 398,
    "generation": 4,
    "nameKo": "찌르호크",
    "nameEn": "Staraptor",
    "types": [
      "노말",
      "비행"
    ],
    "stats": {
      "hp": 85,
      "attack": 120,
      "defense": 70,
      "specialAttack": 50,
      "specialDefense": 60,
      "speed": 100
    },
    "category": "맹금 포켓몬",
    "heightM": 1.2,
    "weightKg": 24.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/398.png"
  },
  {
    "id": 399,
    "dexNumber": 399,
    "generation": 4,
    "nameKo": "비버니",
    "nameEn": "Bidoof",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 59,
      "attack": 45,
      "defense": 40,
      "specialAttack": 35,
      "specialDefense": 40,
      "speed": 31
    },
    "category": "둥글쥐 포켓몬",
    "heightM": 0.5,
    "weightKg": 20,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/399.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/399.png"
  },
  {
    "id": 400,
    "dexNumber": 400,
    "generation": 4,
    "nameKo": "비버통",
    "nameEn": "Bibarel",
    "types": [
      "노말",
      "물"
    ],
    "stats": {
      "hp": 79,
      "attack": 85,
      "defense": 60,
      "specialAttack": 55,
      "specialDefense": 60,
      "speed": 71
    },
    "category": "비버 포켓몬",
    "heightM": 1,
    "weightKg": 31.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/400.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/400.png"
  },
  {
    "id": 401,
    "dexNumber": 401,
    "generation": 4,
    "nameKo": "귀뚤뚜기",
    "nameEn": "Kricketot",
    "types": [
      "벌레"
    ],
    "stats": {
      "hp": 37,
      "attack": 25,
      "defense": 41,
      "specialAttack": 25,
      "specialDefense": 41,
      "speed": 25
    },
    "category": "귀뚜라미 포켓몬",
    "heightM": 0.3,
    "weightKg": 2.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/401.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/401.png"
  },
  {
    "id": 402,
    "dexNumber": 402,
    "generation": 4,
    "nameKo": "귀뚤톡크",
    "nameEn": "Kricketune",
    "types": [
      "벌레"
    ],
    "stats": {
      "hp": 77,
      "attack": 85,
      "defense": 51,
      "specialAttack": 55,
      "specialDefense": 51,
      "speed": 65
    },
    "category": "귀뚜라미 포켓몬",
    "heightM": 1,
    "weightKg": 25.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/402.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/402.png"
  },
  {
    "id": 403,
    "dexNumber": 403,
    "generation": 4,
    "nameKo": "꼬링크",
    "nameEn": "Shinx",
    "types": [
      "전기"
    ],
    "stats": {
      "hp": 45,
      "attack": 65,
      "defense": 34,
      "specialAttack": 40,
      "specialDefense": 34,
      "speed": 45
    },
    "category": "섬광 포켓몬",
    "heightM": 0.5,
    "weightKg": 9.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/403.png"
  },
  {
    "id": 404,
    "dexNumber": 404,
    "generation": 4,
    "nameKo": "럭시오",
    "nameEn": "Luxio",
    "types": [
      "전기"
    ],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 49,
      "specialAttack": 60,
      "specialDefense": 49,
      "speed": 60
    },
    "category": "전광 포켓몬",
    "heightM": 0.9,
    "weightKg": 30.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/404.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/404.png"
  },
  {
    "id": 405,
    "dexNumber": 405,
    "generation": 4,
    "nameKo": "렌트라",
    "nameEn": "Luxray",
    "types": [
      "전기"
    ],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 79,
      "specialAttack": 95,
      "specialDefense": 79,
      "speed": 70
    },
    "category": "안광 포켓몬",
    "heightM": 1.4,
    "weightKg": 42,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/405.png"
  },
  {
    "id": 406,
    "dexNumber": 406,
    "generation": 4,
    "nameKo": "꼬몽울",
    "nameEn": "Budew",
    "types": [
      "풀",
      "독"
    ],
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 35,
      "specialAttack": 50,
      "specialDefense": 70,
      "speed": 55
    },
    "category": "꽃봉오리 포켓몬",
    "heightM": 0.2,
    "weightKg": 1.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/406.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/406.png"
  },
  {
    "id": 407,
    "dexNumber": 407,
    "generation": 4,
    "nameKo": "로즈레이드",
    "nameEn": "Roserade",
    "types": [
      "풀",
      "독"
    ],
    "stats": {
      "hp": 60,
      "attack": 70,
      "defense": 65,
      "specialAttack": 125,
      "specialDefense": 105,
      "speed": 90
    },
    "category": "부케 포켓몬",
    "heightM": 0.9,
    "weightKg": 14.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/407.png"
  },
  {
    "id": 408,
    "dexNumber": 408,
    "generation": 4,
    "nameKo": "두개도스",
    "nameEn": "Cranidos",
    "types": [
      "바위"
    ],
    "stats": {
      "hp": 67,
      "attack": 125,
      "defense": 40,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 58
    },
    "category": "박치기 포켓몬",
    "heightM": 0.9,
    "weightKg": 31.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/408.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/408.png"
  },
  {
    "id": 409,
    "dexNumber": 409,
    "generation": 4,
    "nameKo": "램펄드",
    "nameEn": "Rampardos",
    "types": [
      "바위"
    ],
    "stats": {
      "hp": 97,
      "attack": 165,
      "defense": 60,
      "specialAttack": 65,
      "specialDefense": 50,
      "speed": 58
    },
    "category": "박치기 포켓몬",
    "heightM": 1.6,
    "weightKg": 102.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/409.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/409.png"
  },
  {
    "id": 410,
    "dexNumber": 410,
    "generation": 4,
    "nameKo": "방패톱스",
    "nameEn": "Shieldon",
    "types": [
      "바위",
      "강철"
    ],
    "stats": {
      "hp": 30,
      "attack": 42,
      "defense": 118,
      "specialAttack": 42,
      "specialDefense": 88,
      "speed": 30
    },
    "category": "실드 포켓몬",
    "heightM": 0.5,
    "weightKg": 57,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/410.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/410.png"
  },
  {
    "id": 411,
    "dexNumber": 411,
    "generation": 4,
    "nameKo": "바리톱스",
    "nameEn": "Bastiodon",
    "types": [
      "바위",
      "강철"
    ],
    "stats": {
      "hp": 60,
      "attack": 52,
      "defense": 168,
      "specialAttack": 47,
      "specialDefense": 138,
      "speed": 30
    },
    "category": "실드 포켓몬",
    "heightM": 1.3,
    "weightKg": 149.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/411.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/411.png"
  },
  {
    "id": 412,
    "dexNumber": 412,
    "generation": 4,
    "nameKo": "도롱충이",
    "nameEn": "Burmy",
    "types": [
      "벌레"
    ],
    "stats": {
      "hp": 40,
      "attack": 29,
      "defense": 45,
      "specialAttack": 29,
      "specialDefense": 45,
      "speed": 36
    },
    "category": "도롱이벌레 포켓몬",
    "heightM": 0.2,
    "weightKg": 3.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/412.png"
  },
  {
    "id": 413,
    "dexNumber": 413,
    "generation": 4,
    "nameKo": "도롱마담",
    "nameEn": "Wormadam",
    "types": [
      "벌레",
      "풀"
    ],
    "stats": {
      "hp": 60,
      "attack": 59,
      "defense": 85,
      "specialAttack": 79,
      "specialDefense": 105,
      "speed": 36
    },
    "category": "도롱이벌레 포켓몬",
    "heightM": 0.5,
    "weightKg": 6.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/413.png"
  },
  {
    "id": 414,
    "dexNumber": 414,
    "generation": 4,
    "nameKo": "나메일",
    "nameEn": "Mothim",
    "types": [
      "벌레",
      "비행"
    ],
    "stats": {
      "hp": 70,
      "attack": 94,
      "defense": 50,
      "specialAttack": 94,
      "specialDefense": 50,
      "speed": 66
    },
    "category": "나방 포켓몬",
    "heightM": 0.9,
    "weightKg": 23.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/414.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/414.png"
  },
  {
    "id": 415,
    "dexNumber": 415,
    "generation": 4,
    "nameKo": "세꿀버리",
    "nameEn": "Combee",
    "types": [
      "벌레",
      "비행"
    ],
    "stats": {
      "hp": 30,
      "attack": 30,
      "defense": 42,
      "specialAttack": 30,
      "specialDefense": 42,
      "speed": 70
    },
    "category": "꼬마벌 포켓몬",
    "heightM": 0.3,
    "weightKg": 5.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/415.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/415.png"
  },
  {
    "id": 416,
    "dexNumber": 416,
    "generation": 4,
    "nameKo": "비퀸",
    "nameEn": "Vespiquen",
    "types": [
      "벌레",
      "비행"
    ],
    "stats": {
      "hp": 70,
      "attack": 80,
      "defense": 102,
      "specialAttack": 80,
      "specialDefense": 102,
      "speed": 40
    },
    "category": "벌집 포켓몬",
    "heightM": 1.2,
    "weightKg": 38.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/416.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/416.png"
  },
  {
    "id": 417,
    "dexNumber": 417,
    "generation": 4,
    "nameKo": "파치리스",
    "nameEn": "Pachirisu",
    "types": [
      "전기"
    ],
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 70,
      "specialAttack": 45,
      "specialDefense": 90,
      "speed": 95
    },
    "category": "전기다람쥐 포켓몬",
    "heightM": 0.4,
    "weightKg": 3.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/417.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/417.png"
  },
  {
    "id": 418,
    "dexNumber": 418,
    "generation": 4,
    "nameKo": "브이젤",
    "nameEn": "Buizel",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 55,
      "attack": 65,
      "defense": 35,
      "specialAttack": 60,
      "specialDefense": 30,
      "speed": 85
    },
    "category": "바다족제비 포켓몬",
    "heightM": 0.7,
    "weightKg": 29.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/418.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/418.png"
  },
  {
    "id": 419,
    "dexNumber": 419,
    "generation": 4,
    "nameKo": "플로젤",
    "nameEn": "Floatzel",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 85,
      "attack": 105,
      "defense": 55,
      "specialAttack": 85,
      "specialDefense": 50,
      "speed": 115
    },
    "category": "바다족제비 포켓몬",
    "heightM": 1.1,
    "weightKg": 33.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/419.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/419.png"
  },
  {
    "id": 420,
    "dexNumber": 420,
    "generation": 4,
    "nameKo": "체리버",
    "nameEn": "Cherubi",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 45,
      "attack": 35,
      "defense": 45,
      "specialAttack": 62,
      "specialDefense": 53,
      "speed": 35
    },
    "category": "버찌 포켓몬",
    "heightM": 0.4,
    "weightKg": 3.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/420.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/420.png"
  },
  {
    "id": 421,
    "dexNumber": 421,
    "generation": 4,
    "nameKo": "체리꼬",
    "nameEn": "Cherrim",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 70,
      "attack": 60,
      "defense": 70,
      "specialAttack": 87,
      "specialDefense": 78,
      "speed": 85
    },
    "category": "벚꽃 포켓몬",
    "heightM": 0.5,
    "weightKg": 9.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/421.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/421.png"
  },
  {
    "id": 422,
    "dexNumber": 422,
    "generation": 4,
    "nameKo": "깝질무",
    "nameEn": "Shellos",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 76,
      "attack": 48,
      "defense": 48,
      "specialAttack": 57,
      "specialDefense": 62,
      "speed": 34
    },
    "category": "갯민숭달팽이 포켓몬",
    "heightM": 0.3,
    "weightKg": 6.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/422.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/422.png"
  },
  {
    "id": 423,
    "dexNumber": 423,
    "generation": 4,
    "nameKo": "트리토돈",
    "nameEn": "Gastrodon",
    "types": [
      "물",
      "땅"
    ],
    "stats": {
      "hp": 111,
      "attack": 83,
      "defense": 68,
      "specialAttack": 92,
      "specialDefense": 82,
      "speed": 39
    },
    "category": "갯민숭달팽이 포켓몬",
    "heightM": 0.9,
    "weightKg": 29.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/423.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/423.png"
  },
  {
    "id": 424,
    "dexNumber": 424,
    "generation": 4,
    "nameKo": "겟핸보숭",
    "nameEn": "Ambipom",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 75,
      "attack": 100,
      "defense": 66,
      "specialAttack": 60,
      "specialDefense": 66,
      "speed": 115
    },
    "category": "긴꼬리 포켓몬",
    "heightM": 1.2,
    "weightKg": 20.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/424.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/424.png"
  },
  {
    "id": 425,
    "dexNumber": 425,
    "generation": 4,
    "nameKo": "흔들풍손",
    "nameEn": "Drifloon",
    "types": [
      "고스트",
      "비행"
    ],
    "stats": {
      "hp": 90,
      "attack": 50,
      "defense": 34,
      "specialAttack": 60,
      "specialDefense": 44,
      "speed": 70
    },
    "category": "풍선 포켓몬",
    "heightM": 0.4,
    "weightKg": 1.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/425.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/425.png"
  },
  {
    "id": 426,
    "dexNumber": 426,
    "generation": 4,
    "nameKo": "둥실라이드",
    "nameEn": "Drifblim",
    "types": [
      "고스트",
      "비행"
    ],
    "stats": {
      "hp": 150,
      "attack": 80,
      "defense": 44,
      "specialAttack": 90,
      "specialDefense": 54,
      "speed": 80
    },
    "category": "기구 포켓몬",
    "heightM": 1.2,
    "weightKg": 15,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/426.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/426.png"
  },
  {
    "id": 427,
    "dexNumber": 427,
    "generation": 4,
    "nameKo": "이어롤",
    "nameEn": "Buneary",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 55,
      "attack": 66,
      "defense": 44,
      "specialAttack": 44,
      "specialDefense": 56,
      "speed": 85
    },
    "category": "토끼 포켓몬",
    "heightM": 0.4,
    "weightKg": 5.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/427.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/427.png"
  },
  {
    "id": 428,
    "dexNumber": 428,
    "generation": 4,
    "nameKo": "이어롭",
    "nameEn": "Lopunny",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 65,
      "attack": 76,
      "defense": 84,
      "specialAttack": 54,
      "specialDefense": 96,
      "speed": 105
    },
    "category": "토끼 포켓몬",
    "heightM": 1.2,
    "weightKg": 33.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/428.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/428.png",
    "megaForms": [
      {
        "label": "메가이어롭",
        "types": [
          "노말",
          "격투"
        ],
        "stats": {
          "hp": 65,
          "attack": 136,
          "defense": 94,
          "specialAttack": 54,
          "specialDefense": 96,
          "speed": 135
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10088.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10088.png"
      }
    ]
  },
  {
    "id": 429,
    "dexNumber": 429,
    "generation": 4,
    "nameKo": "무우마직",
    "nameEn": "Mismagius",
    "types": [
      "고스트"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "specialAttack": 105,
      "specialDefense": 105,
      "speed": 105
    },
    "category": "매지컬 포켓몬",
    "heightM": 0.9,
    "weightKg": 4.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/429.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/429.png"
  },
  {
    "id": 430,
    "dexNumber": 430,
    "generation": 4,
    "nameKo": "돈크로우",
    "nameEn": "Honchkrow",
    "types": [
      "악",
      "비행"
    ],
    "stats": {
      "hp": 100,
      "attack": 125,
      "defense": 52,
      "specialAttack": 105,
      "specialDefense": 52,
      "speed": 71
    },
    "category": "큰형님 포켓몬",
    "heightM": 0.9,
    "weightKg": 27.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/430.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/430.png"
  },
  {
    "id": 431,
    "dexNumber": 431,
    "generation": 4,
    "nameKo": "나옹마",
    "nameEn": "Glameow",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 49,
      "attack": 55,
      "defense": 42,
      "specialAttack": 42,
      "specialDefense": 37,
      "speed": 85
    },
    "category": "내숭 포켓몬",
    "heightM": 0.5,
    "weightKg": 3.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/431.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/431.png"
  },
  {
    "id": 432,
    "dexNumber": 432,
    "generation": 4,
    "nameKo": "몬냥이",
    "nameEn": "Purugly",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 71,
      "attack": 82,
      "defense": 64,
      "specialAttack": 64,
      "specialDefense": 59,
      "speed": 112
    },
    "category": "얼룩고양이 포켓몬",
    "heightM": 1,
    "weightKg": 43.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/432.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/432.png"
  },
  {
    "id": 433,
    "dexNumber": 433,
    "generation": 4,
    "nameKo": "랑딸랑",
    "nameEn": "Chingling",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 45,
      "attack": 30,
      "defense": 50,
      "specialAttack": 65,
      "specialDefense": 50,
      "speed": 45
    },
    "category": "방울 포켓몬",
    "heightM": 0.2,
    "weightKg": 0.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/433.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/433.png"
  },
  {
    "id": 434,
    "dexNumber": 434,
    "generation": 4,
    "nameKo": "스컹뿡",
    "nameEn": "Stunky",
    "types": [
      "독",
      "악"
    ],
    "stats": {
      "hp": 63,
      "attack": 63,
      "defense": 47,
      "specialAttack": 41,
      "specialDefense": 41,
      "speed": 74
    },
    "category": "스컹크 포켓몬",
    "heightM": 0.4,
    "weightKg": 19.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/434.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/434.png"
  },
  {
    "id": 435,
    "dexNumber": 435,
    "generation": 4,
    "nameKo": "스컹탱크",
    "nameEn": "Skuntank",
    "types": [
      "독",
      "악"
    ],
    "stats": {
      "hp": 103,
      "attack": 93,
      "defense": 67,
      "specialAttack": 71,
      "specialDefense": 61,
      "speed": 84
    },
    "category": "스컹크 포켓몬",
    "heightM": 1,
    "weightKg": 38,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/435.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/435.png"
  },
  {
    "id": 436,
    "dexNumber": 436,
    "generation": 4,
    "nameKo": "동미러",
    "nameEn": "Bronzor",
    "types": [
      "강철",
      "에스퍼"
    ],
    "stats": {
      "hp": 57,
      "attack": 24,
      "defense": 86,
      "specialAttack": 24,
      "specialDefense": 86,
      "speed": 23
    },
    "category": "청동 포켓몬",
    "heightM": 0.5,
    "weightKg": 60.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/436.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/436.png"
  },
  {
    "id": 437,
    "dexNumber": 437,
    "generation": 4,
    "nameKo": "동탁군",
    "nameEn": "Bronzong",
    "types": [
      "강철",
      "에스퍼"
    ],
    "stats": {
      "hp": 67,
      "attack": 89,
      "defense": 116,
      "specialAttack": 79,
      "specialDefense": 116,
      "speed": 33
    },
    "category": "동탁 포켓몬",
    "heightM": 1.3,
    "weightKg": 187,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/437.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/437.png"
  },
  {
    "id": 438,
    "dexNumber": 438,
    "generation": 4,
    "nameKo": "꼬지지",
    "nameEn": "Bonsly",
    "types": [
      "바위"
    ],
    "stats": {
      "hp": 50,
      "attack": 80,
      "defense": 95,
      "specialAttack": 10,
      "specialDefense": 45,
      "speed": 10
    },
    "category": "분재 포켓몬",
    "heightM": 0.5,
    "weightKg": 15,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/438.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/438.png"
  },
  {
    "id": 439,
    "dexNumber": 439,
    "generation": 4,
    "nameKo": "흉내내",
    "nameEn": "Mime Jr.",
    "types": [
      "에스퍼",
      "페어리"
    ],
    "stats": {
      "hp": 20,
      "attack": 25,
      "defense": 45,
      "specialAttack": 70,
      "specialDefense": 90,
      "speed": 60
    },
    "category": "따라하기 포켓몬",
    "heightM": 0.6,
    "weightKg": 13,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/439.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/439.png"
  },
  {
    "id": 440,
    "dexNumber": 440,
    "generation": 4,
    "nameKo": "핑복",
    "nameEn": "Happiny",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 100,
      "attack": 5,
      "defense": 5,
      "specialAttack": 15,
      "specialDefense": 65,
      "speed": 30
    },
    "category": "소꿉놀이 포켓몬",
    "heightM": 0.6,
    "weightKg": 24.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/440.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/440.png"
  },
  {
    "id": 441,
    "dexNumber": 441,
    "generation": 4,
    "nameKo": "페라페",
    "nameEn": "Chatot",
    "types": [
      "노말",
      "비행"
    ],
    "stats": {
      "hp": 76,
      "attack": 65,
      "defense": 45,
      "specialAttack": 92,
      "specialDefense": 42,
      "speed": 91
    },
    "category": "음표 포켓몬",
    "heightM": 0.5,
    "weightKg": 1.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/441.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/441.png"
  },
  {
    "id": 442,
    "dexNumber": 442,
    "generation": 4,
    "nameKo": "화강돌",
    "nameEn": "Spiritomb",
    "types": [
      "고스트",
      "악"
    ],
    "stats": {
      "hp": 50,
      "attack": 92,
      "defense": 108,
      "specialAttack": 92,
      "specialDefense": 108,
      "speed": 35
    },
    "category": "봉인 포켓몬",
    "heightM": 1,
    "weightKg": 108,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/442.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/442.png"
  },
  {
    "id": 443,
    "dexNumber": 443,
    "generation": 4,
    "nameKo": "딥상어동",
    "nameEn": "Gible",
    "types": [
      "드래곤",
      "땅"
    ],
    "stats": {
      "hp": 58,
      "attack": 70,
      "defense": 45,
      "specialAttack": 40,
      "specialDefense": 45,
      "speed": 42
    },
    "category": "육지상어 포켓몬",
    "heightM": 0.7,
    "weightKg": 20.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/443.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/443.png"
  },
  {
    "id": 444,
    "dexNumber": 444,
    "generation": 4,
    "nameKo": "한바이트",
    "nameEn": "Gabite",
    "types": [
      "드래곤",
      "땅"
    ],
    "stats": {
      "hp": 68,
      "attack": 90,
      "defense": 65,
      "specialAttack": 50,
      "specialDefense": 55,
      "speed": 82
    },
    "category": "동굴 포켓몬",
    "heightM": 1.4,
    "weightKg": 56,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/444.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/444.png"
  },
  {
    "id": 445,
    "dexNumber": 445,
    "generation": 4,
    "nameKo": "한카리아스",
    "nameEn": "Garchomp",
    "types": [
      "드래곤",
      "땅"
    ],
    "stats": {
      "hp": 108,
      "attack": 130,
      "defense": 95,
      "specialAttack": 80,
      "specialDefense": 85,
      "speed": 102
    },
    "category": "마하 포켓몬",
    "heightM": 1.9,
    "weightKg": 95,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/445.png",
    "megaForms": [
      {
        "label": "메가한카리아스",
        "types": [
          "드래곤",
          "땅"
        ],
        "stats": {
          "hp": 108,
          "attack": 170,
          "defense": 115,
          "specialAttack": 120,
          "specialDefense": 95,
          "speed": 92
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10058.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10058.png"
      }
    ]
  },
  {
    "id": 446,
    "dexNumber": 446,
    "generation": 4,
    "nameKo": "먹고자",
    "nameEn": "Munchlax",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 135,
      "attack": 85,
      "defense": 40,
      "specialAttack": 40,
      "specialDefense": 85,
      "speed": 5
    },
    "category": "대식가 포켓몬",
    "heightM": 0.6,
    "weightKg": 105,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/446.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/446.png"
  },
  {
    "id": 447,
    "dexNumber": 447,
    "generation": 4,
    "nameKo": "리오르",
    "nameEn": "Riolu",
    "types": [
      "격투"
    ],
    "stats": {
      "hp": 40,
      "attack": 70,
      "defense": 40,
      "specialAttack": 35,
      "specialDefense": 40,
      "speed": 60
    },
    "category": "파문 포켓몬",
    "heightM": 0.7,
    "weightKg": 20.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/447.png"
  },
  {
    "id": 448,
    "dexNumber": 448,
    "generation": 4,
    "nameKo": "루카리오",
    "nameEn": "Lucario",
    "types": [
      "격투",
      "강철"
    ],
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 70,
      "specialAttack": 115,
      "specialDefense": 70,
      "speed": 90
    },
    "category": "파동 포켓몬",
    "heightM": 1.2,
    "weightKg": 54,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png",
    "megaForms": [
      {
        "label": "메가루카리오",
        "types": [
          "격투",
          "강철"
        ],
        "stats": {
          "hp": 70,
          "attack": 145,
          "defense": 88,
          "specialAttack": 140,
          "specialDefense": 70,
          "speed": 112
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10059.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10059.png"
      }
    ]
  },
  {
    "id": 449,
    "dexNumber": 449,
    "generation": 4,
    "nameKo": "히포포타스",
    "nameEn": "Hippopotas",
    "types": [
      "땅"
    ],
    "stats": {
      "hp": 68,
      "attack": 72,
      "defense": 78,
      "specialAttack": 38,
      "specialDefense": 42,
      "speed": 32
    },
    "category": "하마 포켓몬",
    "heightM": 0.8,
    "weightKg": 49.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/449.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/449.png"
  },
  {
    "id": 450,
    "dexNumber": 450,
    "generation": 4,
    "nameKo": "하마돈",
    "nameEn": "Hippowdon",
    "types": [
      "땅"
    ],
    "stats": {
      "hp": 108,
      "attack": 112,
      "defense": 118,
      "specialAttack": 68,
      "specialDefense": 72,
      "speed": 47
    },
    "category": "중량 포켓몬",
    "heightM": 2,
    "weightKg": 300,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/450.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/450.png"
  },
  {
    "id": 451,
    "dexNumber": 451,
    "generation": 4,
    "nameKo": "스콜피",
    "nameEn": "Skorupi",
    "types": [
      "독",
      "벌레"
    ],
    "stats": {
      "hp": 40,
      "attack": 50,
      "defense": 90,
      "specialAttack": 30,
      "specialDefense": 55,
      "speed": 65
    },
    "category": "전갈 포켓몬",
    "heightM": 0.8,
    "weightKg": 12,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/451.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/451.png"
  },
  {
    "id": 452,
    "dexNumber": 452,
    "generation": 4,
    "nameKo": "드래피온",
    "nameEn": "Drapion",
    "types": [
      "독",
      "악"
    ],
    "stats": {
      "hp": 70,
      "attack": 90,
      "defense": 110,
      "specialAttack": 60,
      "specialDefense": 75,
      "speed": 95
    },
    "category": "요괴전갈 포켓몬",
    "heightM": 1.3,
    "weightKg": 61.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/452.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/452.png"
  },
  {
    "id": 453,
    "dexNumber": 453,
    "generation": 4,
    "nameKo": "삐딱구리",
    "nameEn": "Croagunk",
    "types": [
      "독",
      "격투"
    ],
    "stats": {
      "hp": 48,
      "attack": 61,
      "defense": 40,
      "specialAttack": 61,
      "specialDefense": 40,
      "speed": 50
    },
    "category": "독설 포켓몬",
    "heightM": 0.7,
    "weightKg": 23,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/453.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/453.png"
  },
  {
    "id": 454,
    "dexNumber": 454,
    "generation": 4,
    "nameKo": "독개굴",
    "nameEn": "Toxicroak",
    "types": [
      "독",
      "격투"
    ],
    "stats": {
      "hp": 83,
      "attack": 106,
      "defense": 65,
      "specialAttack": 86,
      "specialDefense": 65,
      "speed": 85
    },
    "category": "독설 포켓몬",
    "heightM": 1.3,
    "weightKg": 44.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/454.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/454.png"
  },
  {
    "id": 455,
    "dexNumber": 455,
    "generation": 4,
    "nameKo": "무스틈니",
    "nameEn": "Carnivine",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 74,
      "attack": 100,
      "defense": 72,
      "specialAttack": 90,
      "specialDefense": 72,
      "speed": 46
    },
    "category": "벌레잡이 포켓몬",
    "heightM": 1.4,
    "weightKg": 27,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/455.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/455.png"
  },
  {
    "id": 456,
    "dexNumber": 456,
    "generation": 4,
    "nameKo": "형광어",
    "nameEn": "Finneon",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 49,
      "attack": 49,
      "defense": 56,
      "specialAttack": 49,
      "specialDefense": 61,
      "speed": 66
    },
    "category": "비어 포켓몬",
    "heightM": 0.4,
    "weightKg": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/456.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/456.png"
  },
  {
    "id": 457,
    "dexNumber": 457,
    "generation": 4,
    "nameKo": "네오라이트",
    "nameEn": "Lumineon",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 69,
      "attack": 69,
      "defense": 76,
      "specialAttack": 69,
      "specialDefense": 86,
      "speed": 91
    },
    "category": "네온 포켓몬",
    "heightM": 1.2,
    "weightKg": 24,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/457.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/457.png"
  },
  {
    "id": 458,
    "dexNumber": 458,
    "generation": 4,
    "nameKo": "타만타",
    "nameEn": "Mantyke",
    "types": [
      "물",
      "비행"
    ],
    "stats": {
      "hp": 45,
      "attack": 20,
      "defense": 50,
      "specialAttack": 60,
      "specialDefense": 120,
      "speed": 50
    },
    "category": "연 포켓몬",
    "heightM": 1,
    "weightKg": 65,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/458.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/458.png"
  },
  {
    "id": 459,
    "dexNumber": 459,
    "generation": 4,
    "nameKo": "눈쓰개",
    "nameEn": "Snover",
    "types": [
      "풀",
      "얼음"
    ],
    "stats": {
      "hp": 60,
      "attack": 62,
      "defense": 50,
      "specialAttack": 62,
      "specialDefense": 60,
      "speed": 40
    },
    "category": "얼음나무 포켓몬",
    "heightM": 1,
    "weightKg": 50.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/459.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/459.png"
  },
  {
    "id": 460,
    "dexNumber": 460,
    "generation": 4,
    "nameKo": "눈설왕",
    "nameEn": "Abomasnow",
    "types": [
      "풀",
      "얼음"
    ],
    "stats": {
      "hp": 90,
      "attack": 92,
      "defense": 75,
      "specialAttack": 92,
      "specialDefense": 85,
      "speed": 60
    },
    "category": "얼음나무 포켓몬",
    "heightM": 2.2,
    "weightKg": 135.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/460.png",
    "megaForms": [
      {
        "label": "메가눈설왕",
        "types": [
          "풀",
          "얼음"
        ],
        "stats": {
          "hp": 90,
          "attack": 132,
          "defense": 105,
          "specialAttack": 132,
          "specialDefense": 105,
          "speed": 30
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10060.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10060.png"
      }
    ]
  },
  {
    "id": 461,
    "dexNumber": 461,
    "generation": 4,
    "nameKo": "포푸니라",
    "nameEn": "Weavile",
    "types": [
      "악",
      "얼음"
    ],
    "stats": {
      "hp": 70,
      "attack": 120,
      "defense": 65,
      "specialAttack": 45,
      "specialDefense": 85,
      "speed": 125
    },
    "category": "갈고리손톱 포켓몬",
    "heightM": 1.1,
    "weightKg": 34,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/461.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/461.png"
  },
  {
    "id": 462,
    "dexNumber": 462,
    "generation": 4,
    "nameKo": "자포코일",
    "nameEn": "Magnezone",
    "types": [
      "전기",
      "강철"
    ],
    "stats": {
      "hp": 70,
      "attack": 70,
      "defense": 115,
      "specialAttack": 130,
      "specialDefense": 90,
      "speed": 60
    },
    "category": "자기장 포켓몬",
    "heightM": 1.2,
    "weightKg": 180,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/462.png"
  },
  {
    "id": 463,
    "dexNumber": 463,
    "generation": 4,
    "nameKo": "내룸벨트",
    "nameEn": "Lickilicky",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 110,
      "attack": 85,
      "defense": 95,
      "specialAttack": 80,
      "specialDefense": 95,
      "speed": 50
    },
    "category": "핥기 포켓몬",
    "heightM": 1.7,
    "weightKg": 140,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/463.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/463.png"
  },
  {
    "id": 464,
    "dexNumber": 464,
    "generation": 4,
    "nameKo": "거대코뿌리",
    "nameEn": "Rhyperior",
    "types": [
      "땅",
      "바위"
    ],
    "stats": {
      "hp": 115,
      "attack": 140,
      "defense": 130,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 40
    },
    "category": "드릴 포켓몬",
    "heightM": 2.4,
    "weightKg": 282.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/464.png"
  },
  {
    "id": 465,
    "dexNumber": 465,
    "generation": 4,
    "nameKo": "덩쿠림보",
    "nameEn": "Tangrowth",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 125,
      "specialAttack": 110,
      "specialDefense": 50,
      "speed": 50
    },
    "category": "넝쿨 포켓몬",
    "heightM": 2,
    "weightKg": 128.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/465.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/465.png"
  },
  {
    "id": 466,
    "dexNumber": 466,
    "generation": 4,
    "nameKo": "에레키블",
    "nameEn": "Electivire",
    "types": [
      "전기"
    ],
    "stats": {
      "hp": 75,
      "attack": 123,
      "defense": 67,
      "specialAttack": 95,
      "specialDefense": 85,
      "speed": 95
    },
    "category": "뇌전 포켓몬",
    "heightM": 1.8,
    "weightKg": 138.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/466.png"
  },
  {
    "id": 467,
    "dexNumber": 467,
    "generation": 4,
    "nameKo": "마그마번",
    "nameEn": "Magmortar",
    "types": [
      "불꽃"
    ],
    "stats": {
      "hp": 75,
      "attack": 95,
      "defense": 67,
      "specialAttack": 125,
      "specialDefense": 95,
      "speed": 83
    },
    "category": "폭염 포켓몬",
    "heightM": 1.6,
    "weightKg": 68,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/467.png"
  },
  {
    "id": 468,
    "dexNumber": 468,
    "generation": 4,
    "nameKo": "토게키스",
    "nameEn": "Togekiss",
    "types": [
      "페어리",
      "비행"
    ],
    "stats": {
      "hp": 85,
      "attack": 50,
      "defense": 95,
      "specialAttack": 120,
      "specialDefense": 115,
      "speed": 80
    },
    "category": "축복 포켓몬",
    "heightM": 1.5,
    "weightKg": 38,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/468.png"
  },
  {
    "id": 469,
    "dexNumber": 469,
    "generation": 4,
    "nameKo": "메가자리",
    "nameEn": "Yanmega",
    "types": [
      "벌레",
      "비행"
    ],
    "stats": {
      "hp": 86,
      "attack": 76,
      "defense": 86,
      "specialAttack": 116,
      "specialDefense": 56,
      "speed": 95
    },
    "category": "깨비잠자리 포켓몬",
    "heightM": 1.9,
    "weightKg": 51.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/469.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/469.png"
  },
  {
    "id": 470,
    "dexNumber": 470,
    "generation": 4,
    "nameKo": "리피아",
    "nameEn": "Leafeon",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 65,
      "attack": 110,
      "defense": 130,
      "specialAttack": 60,
      "specialDefense": 65,
      "speed": 95
    },
    "category": "심록 포켓몬",
    "heightM": 1,
    "weightKg": 25.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/470.png"
  },
  {
    "id": 471,
    "dexNumber": 471,
    "generation": 4,
    "nameKo": "글레이시아",
    "nameEn": "Glaceon",
    "types": [
      "얼음"
    ],
    "stats": {
      "hp": 65,
      "attack": 60,
      "defense": 110,
      "specialAttack": 130,
      "specialDefense": 95,
      "speed": 65
    },
    "category": "신설 포켓몬",
    "heightM": 0.8,
    "weightKg": 25.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/471.png"
  },
  {
    "id": 472,
    "dexNumber": 472,
    "generation": 4,
    "nameKo": "글라이온",
    "nameEn": "Gliscor",
    "types": [
      "땅",
      "비행"
    ],
    "stats": {
      "hp": 75,
      "attack": 95,
      "defense": 125,
      "specialAttack": 45,
      "specialDefense": 75,
      "speed": 95
    },
    "category": "송곳니전갈 포켓몬",
    "heightM": 2,
    "weightKg": 42.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/472.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/472.png"
  },
  {
    "id": 473,
    "dexNumber": 473,
    "generation": 4,
    "nameKo": "맘모꾸리",
    "nameEn": "Mamoswine",
    "types": [
      "얼음",
      "땅"
    ],
    "stats": {
      "hp": 110,
      "attack": 130,
      "defense": 80,
      "specialAttack": 70,
      "specialDefense": 60,
      "speed": 80
    },
    "category": "2개송곳니 포켓몬",
    "heightM": 2.5,
    "weightKg": 291,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/473.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/473.png"
  },
  {
    "id": 474,
    "dexNumber": 474,
    "generation": 4,
    "nameKo": "폴리곤Z",
    "nameEn": "Porygon-Z",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 85,
      "attack": 80,
      "defense": 70,
      "specialAttack": 135,
      "specialDefense": 75,
      "speed": 90
    },
    "category": "가상 포켓몬",
    "heightM": 0.9,
    "weightKg": 34,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/474.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/474.png"
  },
  {
    "id": 475,
    "dexNumber": 475,
    "generation": 4,
    "nameKo": "엘레이드",
    "nameEn": "Gallade",
    "types": [
      "에스퍼",
      "격투"
    ],
    "stats": {
      "hp": 68,
      "attack": 125,
      "defense": 65,
      "specialAttack": 65,
      "specialDefense": 115,
      "speed": 80
    },
    "category": "검 포켓몬",
    "heightM": 1.6,
    "weightKg": 52,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/475.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/475.png",
    "megaForms": [
      {
        "label": "메가엘레이드",
        "types": [
          "에스퍼",
          "격투"
        ],
        "stats": {
          "hp": 68,
          "attack": 165,
          "defense": 95,
          "specialAttack": 65,
          "specialDefense": 115,
          "speed": 110
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10068.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10068.png"
      }
    ]
  },
  {
    "id": 476,
    "dexNumber": 476,
    "generation": 4,
    "nameKo": "대코파스",
    "nameEn": "Probopass",
    "types": [
      "바위",
      "강철"
    ],
    "stats": {
      "hp": 60,
      "attack": 55,
      "defense": 145,
      "specialAttack": 75,
      "specialDefense": 150,
      "speed": 40
    },
    "category": "콤파스 포켓몬",
    "heightM": 1.4,
    "weightKg": 340,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/476.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/476.png"
  },
  {
    "id": 477,
    "dexNumber": 477,
    "generation": 4,
    "nameKo": "야느와르몽",
    "nameEn": "Dusknoir",
    "types": [
      "고스트"
    ],
    "stats": {
      "hp": 45,
      "attack": 100,
      "defense": 135,
      "specialAttack": 65,
      "specialDefense": 135,
      "speed": 45
    },
    "category": "움켜쥠 포켓몬",
    "heightM": 2.2,
    "weightKg": 106.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/477.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/477.png"
  },
  {
    "id": 478,
    "dexNumber": 478,
    "generation": 4,
    "nameKo": "눈여아",
    "nameEn": "Froslass",
    "types": [
      "얼음",
      "고스트"
    ],
    "stats": {
      "hp": 70,
      "attack": 80,
      "defense": 70,
      "specialAttack": 80,
      "specialDefense": 70,
      "speed": 110
    },
    "category": "설국 포켓몬",
    "heightM": 1.3,
    "weightKg": 26.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/478.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/478.png"
  },
  {
    "id": 479,
    "dexNumber": 479,
    "generation": 4,
    "nameKo": "로토무",
    "nameEn": "Rotom",
    "types": [
      "전기",
      "고스트"
    ],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 77,
      "specialAttack": 95,
      "specialDefense": 77,
      "speed": 91
    },
    "category": "플라스마 포켓몬",
    "heightM": 0.3,
    "weightKg": 0.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/479.png"
  },
  {
    "id": 480,
    "dexNumber": 480,
    "generation": 4,
    "nameKo": "유크시",
    "nameEn": "Uxie",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 75,
      "attack": 75,
      "defense": 130,
      "specialAttack": 75,
      "specialDefense": 130,
      "speed": 95
    },
    "category": "지식 포켓몬",
    "heightM": 0.3,
    "weightKg": 0.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/480.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/480.png"
  },
  {
    "id": 481,
    "dexNumber": 481,
    "generation": 4,
    "nameKo": "엠라이트",
    "nameEn": "Mesprit",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 80,
      "attack": 105,
      "defense": 105,
      "specialAttack": 105,
      "specialDefense": 105,
      "speed": 80
    },
    "category": "감정 포켓몬",
    "heightM": 0.3,
    "weightKg": 0.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/481.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/481.png"
  },
  {
    "id": 482,
    "dexNumber": 482,
    "generation": 4,
    "nameKo": "아그놈",
    "nameEn": "Azelf",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 75,
      "attack": 125,
      "defense": 70,
      "specialAttack": 125,
      "specialDefense": 70,
      "speed": 115
    },
    "category": "의지 포켓몬",
    "heightM": 0.3,
    "weightKg": 0.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/482.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/482.png"
  },
  {
    "id": 483,
    "dexNumber": 483,
    "generation": 4,
    "nameKo": "디아루가",
    "nameEn": "Dialga",
    "types": [
      "강철",
      "드래곤"
    ],
    "stats": {
      "hp": 100,
      "attack": 120,
      "defense": 120,
      "specialAttack": 150,
      "specialDefense": 100,
      "speed": 90
    },
    "category": "시간 포켓몬",
    "heightM": 5.4,
    "weightKg": 683,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/483.png"
  },
  {
    "id": 484,
    "dexNumber": 484,
    "generation": 4,
    "nameKo": "펄기아",
    "nameEn": "Palkia",
    "types": [
      "물",
      "드래곤"
    ],
    "stats": {
      "hp": 90,
      "attack": 120,
      "defense": 100,
      "specialAttack": 150,
      "specialDefense": 120,
      "speed": 100
    },
    "category": "공간 포켓몬",
    "heightM": 4.2,
    "weightKg": 336,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/484.png"
  },
  {
    "id": 485,
    "dexNumber": 485,
    "generation": 4,
    "nameKo": "히드런",
    "nameEn": "Heatran",
    "types": [
      "불꽃",
      "강철"
    ],
    "stats": {
      "hp": 91,
      "attack": 90,
      "defense": 106,
      "specialAttack": 130,
      "specialDefense": 106,
      "speed": 77
    },
    "category": "화구 포켓몬",
    "heightM": 1.7,
    "weightKg": 430,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/485.png"
  },
  {
    "id": 486,
    "dexNumber": 486,
    "generation": 4,
    "nameKo": "레지기가스",
    "nameEn": "Regigigas",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 110,
      "attack": 160,
      "defense": 110,
      "specialAttack": 80,
      "specialDefense": 110,
      "speed": 100
    },
    "category": "거대 포켓몬",
    "heightM": 3.7,
    "weightKg": 420,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/486.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/486.png"
  },
  {
    "id": 487,
    "dexNumber": 487,
    "generation": 4,
    "nameKo": "기라티나",
    "nameEn": "Giratina",
    "types": [
      "고스트",
      "드래곤"
    ],
    "stats": {
      "hp": 150,
      "attack": 100,
      "defense": 120,
      "specialAttack": 100,
      "specialDefense": 120,
      "speed": 90
    },
    "category": "반골 포켓몬",
    "heightM": 4.5,
    "weightKg": 750,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/487.png"
  },
  {
    "id": 488,
    "dexNumber": 488,
    "generation": 4,
    "nameKo": "크레세리아",
    "nameEn": "Cresselia",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 120,
      "attack": 70,
      "defense": 110,
      "specialAttack": 75,
      "specialDefense": 120,
      "speed": 85
    },
    "category": "초승달 포켓몬",
    "heightM": 1.5,
    "weightKg": 85.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/488.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/488.png"
  },
  {
    "id": 489,
    "dexNumber": 489,
    "generation": 4,
    "nameKo": "피오네",
    "nameEn": "Phione",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 80,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 80
    },
    "category": "해양 포켓몬",
    "heightM": 0.4,
    "weightKg": 3.1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/489.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/489.png"
  },
  {
    "id": 490,
    "dexNumber": 490,
    "generation": 4,
    "nameKo": "마나피",
    "nameEn": "Manaphy",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 100
    },
    "category": "회유 포켓몬",
    "heightM": 0.3,
    "weightKg": 1.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/490.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/490.png"
  },
  {
    "id": 491,
    "dexNumber": 491,
    "generation": 4,
    "nameKo": "다크라이",
    "nameEn": "Darkrai",
    "types": [
      "악"
    ],
    "stats": {
      "hp": 70,
      "attack": 90,
      "defense": 90,
      "specialAttack": 135,
      "specialDefense": 90,
      "speed": 125
    },
    "category": "암흑 포켓몬",
    "heightM": 1.5,
    "weightKg": 50.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/491.png"
  },
  {
    "id": 492,
    "dexNumber": 492,
    "generation": 4,
    "nameKo": "쉐이미",
    "nameEn": "Shaymin",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 100
    },
    "category": "감사 포켓몬",
    "heightM": 0.2,
    "weightKg": 2.1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/492.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/492.png"
  },
  {
    "id": 493,
    "dexNumber": 493,
    "generation": 4,
    "nameKo": "아르세우스",
    "nameEn": "Arceus",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 120,
      "attack": 120,
      "defense": 120,
      "specialAttack": 120,
      "specialDefense": 120,
      "speed": 120
    },
    "category": "창조 포켓몬",
    "heightM": 3.2,
    "weightKg": 320,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png"
  },
  {
    "id": 494,
    "dexNumber": 494,
    "generation": 5,
    "nameKo": "비크티니",
    "nameEn": "Victini",
    "types": [
      "에스퍼",
      "불꽃"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 100
    },
    "category": "승리 포켓몬",
    "heightM": 0.4,
    "weightKg": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/494.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/494.png"
  },
  {
    "id": 495,
    "dexNumber": 495,
    "generation": 5,
    "nameKo": "주리비얀",
    "nameEn": "Snivy",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 45,
      "attack": 45,
      "defense": 55,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 63
    },
    "category": "풀뱀 포켓몬",
    "heightM": 0.6,
    "weightKg": 8.1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/495.png"
  },
  {
    "id": 496,
    "dexNumber": 496,
    "generation": 5,
    "nameKo": "샤비",
    "nameEn": "Servine",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 75,
      "specialAttack": 60,
      "specialDefense": 75,
      "speed": 83
    },
    "category": "풀뱀 포켓몬",
    "heightM": 0.8,
    "weightKg": 16,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/496.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/496.png"
  },
  {
    "id": 497,
    "dexNumber": 497,
    "generation": 5,
    "nameKo": "샤로다",
    "nameEn": "Serperior",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 75,
      "attack": 75,
      "defense": 95,
      "specialAttack": 75,
      "specialDefense": 95,
      "speed": 113
    },
    "category": "로열 포켓몬",
    "heightM": 3.3,
    "weightKg": 63,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/497.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/497.png"
  },
  {
    "id": 498,
    "dexNumber": 498,
    "generation": 5,
    "nameKo": "뚜꾸리",
    "nameEn": "Tepig",
    "types": [
      "불꽃"
    ],
    "stats": {
      "hp": 65,
      "attack": 63,
      "defense": 45,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 45
    },
    "category": "불돼지 포켓몬",
    "heightM": 0.5,
    "weightKg": 9.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/498.png"
  },
  {
    "id": 499,
    "dexNumber": 499,
    "generation": 5,
    "nameKo": "차오꿀",
    "nameEn": "Pignite",
    "types": [
      "불꽃",
      "격투"
    ],
    "stats": {
      "hp": 90,
      "attack": 93,
      "defense": 55,
      "specialAttack": 70,
      "specialDefense": 55,
      "speed": 55
    },
    "category": "불돼지 포켓몬",
    "heightM": 1,
    "weightKg": 55.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/499.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/499.png"
  },
  {
    "id": 500,
    "dexNumber": 500,
    "generation": 5,
    "nameKo": "염무왕",
    "nameEn": "Emboar",
    "types": [
      "불꽃",
      "격투"
    ],
    "stats": {
      "hp": 110,
      "attack": 123,
      "defense": 65,
      "specialAttack": 100,
      "specialDefense": 65,
      "speed": 65
    },
    "category": "큰불돼지 포켓몬",
    "heightM": 1.6,
    "weightKg": 150,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/500.png"
  },
  {
    "id": 501,
    "dexNumber": 501,
    "generation": 5,
    "nameKo": "수댕이",
    "nameEn": "Oshawott",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 55,
      "attack": 55,
      "defense": 45,
      "specialAttack": 63,
      "specialDefense": 45,
      "speed": 45
    },
    "category": "해달 포켓몬",
    "heightM": 0.5,
    "weightKg": 5.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/501.png"
  },
  {
    "id": 502,
    "dexNumber": 502,
    "generation": 5,
    "nameKo": "쌍검자비",
    "nameEn": "Dewott",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 75,
      "attack": 75,
      "defense": 60,
      "specialAttack": 83,
      "specialDefense": 60,
      "speed": 60
    },
    "category": "수행 포켓몬",
    "heightM": 0.8,
    "weightKg": 24.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/502.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/502.png"
  },
  {
    "id": 503,
    "dexNumber": 503,
    "generation": 5,
    "nameKo": "대검귀",
    "nameEn": "Samurott",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 95,
      "attack": 100,
      "defense": 85,
      "specialAttack": 108,
      "specialDefense": 70,
      "speed": 70
    },
    "category": "관록 포켓몬",
    "heightM": 1.5,
    "weightKg": 94.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/503.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/503.png"
  },
  {
    "id": 504,
    "dexNumber": 504,
    "generation": 5,
    "nameKo": "보르쥐",
    "nameEn": "Patrat",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 45,
      "attack": 55,
      "defense": 39,
      "specialAttack": 35,
      "specialDefense": 39,
      "speed": 42
    },
    "category": "망보기 포켓몬",
    "heightM": 0.5,
    "weightKg": 11.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/504.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/504.png"
  },
  {
    "id": 505,
    "dexNumber": 505,
    "generation": 5,
    "nameKo": "보르그",
    "nameEn": "Watchog",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 69,
      "specialAttack": 60,
      "specialDefense": 69,
      "speed": 77
    },
    "category": "경계 포켓몬",
    "heightM": 1.1,
    "weightKg": 27,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/505.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/505.png"
  },
  {
    "id": 506,
    "dexNumber": 506,
    "generation": 5,
    "nameKo": "요테리",
    "nameEn": "Lillipup",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 45,
      "attack": 60,
      "defense": 45,
      "specialAttack": 25,
      "specialDefense": 45,
      "speed": 55
    },
    "category": "강아지 포켓몬",
    "heightM": 0.4,
    "weightKg": 4.1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/506.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/506.png"
  },
  {
    "id": 507,
    "dexNumber": 507,
    "generation": 5,
    "nameKo": "하데리어",
    "nameEn": "Herdier",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 65,
      "attack": 80,
      "defense": 65,
      "specialAttack": 35,
      "specialDefense": 65,
      "speed": 60
    },
    "category": "충견 포켓몬",
    "heightM": 0.9,
    "weightKg": 14.7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/507.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/507.png"
  },
  {
    "id": 508,
    "dexNumber": 508,
    "generation": 5,
    "nameKo": "바랜드",
    "nameEn": "Stoutland",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 85,
      "attack": 110,
      "defense": 90,
      "specialAttack": 45,
      "specialDefense": 90,
      "speed": 80
    },
    "category": "관대 포켓몬",
    "heightM": 1.2,
    "weightKg": 61,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/508.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/508.png"
  },
  {
    "id": 509,
    "dexNumber": 509,
    "generation": 5,
    "nameKo": "쌔비냥",
    "nameEn": "Purrloin",
    "types": [
      "악"
    ],
    "stats": {
      "hp": 41,
      "attack": 50,
      "defense": 37,
      "specialAttack": 50,
      "specialDefense": 37,
      "speed": 66
    },
    "category": "성악 포켓몬",
    "heightM": 0.4,
    "weightKg": 10.1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/509.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/509.png"
  },
  {
    "id": 510,
    "dexNumber": 510,
    "generation": 5,
    "nameKo": "레파르다스",
    "nameEn": "Liepard",
    "types": [
      "악"
    ],
    "stats": {
      "hp": 64,
      "attack": 88,
      "defense": 50,
      "specialAttack": 88,
      "specialDefense": 50,
      "speed": 106
    },
    "category": "냉혹 포켓몬",
    "heightM": 1.1,
    "weightKg": 37.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/510.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/510.png"
  },
  {
    "id": 511,
    "dexNumber": 511,
    "generation": 5,
    "nameKo": "야나프",
    "nameEn": "Pansage",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 50,
      "attack": 53,
      "defense": 48,
      "specialAttack": 53,
      "specialDefense": 48,
      "speed": 64
    },
    "category": "풀원숭이 포켓몬",
    "heightM": 0.6,
    "weightKg": 10.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/511.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/511.png"
  },
  {
    "id": 512,
    "dexNumber": 512,
    "generation": 5,
    "nameKo": "야나키",
    "nameEn": "Simisage",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 75,
      "attack": 98,
      "defense": 63,
      "specialAttack": 98,
      "specialDefense": 63,
      "speed": 101
    },
    "category": "가시원숭이 포켓몬",
    "heightM": 1.1,
    "weightKg": 30.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/512.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/512.png"
  },
  {
    "id": 513,
    "dexNumber": 513,
    "generation": 5,
    "nameKo": "바오프",
    "nameEn": "Pansear",
    "types": [
      "불꽃"
    ],
    "stats": {
      "hp": 50,
      "attack": 53,
      "defense": 48,
      "specialAttack": 53,
      "specialDefense": 48,
      "speed": 64
    },
    "category": "고온 포켓몬",
    "heightM": 0.6,
    "weightKg": 11,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/513.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/513.png"
  },
  {
    "id": 514,
    "dexNumber": 514,
    "generation": 5,
    "nameKo": "바오키",
    "nameEn": "Simisear",
    "types": [
      "불꽃"
    ],
    "stats": {
      "hp": 75,
      "attack": 98,
      "defense": 63,
      "specialAttack": 98,
      "specialDefense": 63,
      "speed": 101
    },
    "category": "불티 포켓몬",
    "heightM": 1,
    "weightKg": 28,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/514.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/514.png"
  },
  {
    "id": 515,
    "dexNumber": 515,
    "generation": 5,
    "nameKo": "앗차프",
    "nameEn": "Panpour",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 50,
      "attack": 53,
      "defense": 48,
      "specialAttack": 53,
      "specialDefense": 48,
      "speed": 64
    },
    "category": "물뿌리기 포켓몬",
    "heightM": 0.6,
    "weightKg": 13.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/515.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/515.png"
  },
  {
    "id": 516,
    "dexNumber": 516,
    "generation": 5,
    "nameKo": "앗차키",
    "nameEn": "Simipour",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 75,
      "attack": 98,
      "defense": 63,
      "specialAttack": 98,
      "specialDefense": 63,
      "speed": 101
    },
    "category": "방수 포켓몬",
    "heightM": 1,
    "weightKg": 29,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/516.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/516.png"
  },
  {
    "id": 517,
    "dexNumber": 517,
    "generation": 5,
    "nameKo": "몽나",
    "nameEn": "Munna",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 76,
      "attack": 25,
      "defense": 45,
      "specialAttack": 67,
      "specialDefense": 55,
      "speed": 24
    },
    "category": "꿈먹기 포켓몬",
    "heightM": 0.6,
    "weightKg": 23.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/517.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/517.png"
  },
  {
    "id": 518,
    "dexNumber": 518,
    "generation": 5,
    "nameKo": "몽얌나",
    "nameEn": "Musharna",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 116,
      "attack": 55,
      "defense": 85,
      "specialAttack": 107,
      "specialDefense": 95,
      "speed": 29
    },
    "category": "꿈결 포켓몬",
    "heightM": 1.1,
    "weightKg": 60.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/518.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/518.png"
  },
  {
    "id": 519,
    "dexNumber": 519,
    "generation": 5,
    "nameKo": "콩둘기",
    "nameEn": "Pidove",
    "types": [
      "노말",
      "비행"
    ],
    "stats": {
      "hp": 50,
      "attack": 55,
      "defense": 50,
      "specialAttack": 36,
      "specialDefense": 30,
      "speed": 43
    },
    "category": "아기비둘기 포켓몬",
    "heightM": 0.3,
    "weightKg": 2.1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/519.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/519.png"
  },
  {
    "id": 520,
    "dexNumber": 520,
    "generation": 5,
    "nameKo": "유토브",
    "nameEn": "Tranquill",
    "types": [
      "노말",
      "비행"
    ],
    "stats": {
      "hp": 62,
      "attack": 77,
      "defense": 62,
      "specialAttack": 50,
      "specialDefense": 42,
      "speed": 65
    },
    "category": "들비둘기 포켓몬",
    "heightM": 0.6,
    "weightKg": 15,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/520.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/520.png"
  },
  {
    "id": 521,
    "dexNumber": 521,
    "generation": 5,
    "nameKo": "켄호로우",
    "nameEn": "Unfezant",
    "types": [
      "노말",
      "비행"
    ],
    "stats": {
      "hp": 80,
      "attack": 115,
      "defense": 80,
      "specialAttack": 65,
      "specialDefense": 55,
      "speed": 93
    },
    "category": "프라이드 포켓몬",
    "heightM": 1.2,
    "weightKg": 29,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/521.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/521.png"
  },
  {
    "id": 522,
    "dexNumber": 522,
    "generation": 5,
    "nameKo": "줄뮤마",
    "nameEn": "Blitzle",
    "types": [
      "전기"
    ],
    "stats": {
      "hp": 45,
      "attack": 60,
      "defense": 32,
      "specialAttack": 50,
      "specialDefense": 32,
      "speed": 76
    },
    "category": "하전 포켓몬",
    "heightM": 0.8,
    "weightKg": 29.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/522.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/522.png"
  },
  {
    "id": 523,
    "dexNumber": 523,
    "generation": 5,
    "nameKo": "제브라이카",
    "nameEn": "Zebstrika",
    "types": [
      "전기"
    ],
    "stats": {
      "hp": 75,
      "attack": 100,
      "defense": 63,
      "specialAttack": 80,
      "specialDefense": 63,
      "speed": 116
    },
    "category": "뇌전 포켓몬",
    "heightM": 1.6,
    "weightKg": 79.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/523.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/523.png"
  },
  {
    "id": 524,
    "dexNumber": 524,
    "generation": 5,
    "nameKo": "단굴",
    "nameEn": "Roggenrola",
    "types": [
      "바위"
    ],
    "stats": {
      "hp": 55,
      "attack": 75,
      "defense": 85,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 15
    },
    "category": "맨틀 포켓몬",
    "heightM": 0.4,
    "weightKg": 18,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/524.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/524.png"
  },
  {
    "id": 525,
    "dexNumber": 525,
    "generation": 5,
    "nameKo": "암트르",
    "nameEn": "Boldore",
    "types": [
      "바위"
    ],
    "stats": {
      "hp": 70,
      "attack": 105,
      "defense": 105,
      "specialAttack": 50,
      "specialDefense": 40,
      "speed": 20
    },
    "category": "광석 포켓몬",
    "heightM": 0.9,
    "weightKg": 102,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/525.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/525.png"
  },
  {
    "id": 526,
    "dexNumber": 526,
    "generation": 5,
    "nameKo": "기가이어스",
    "nameEn": "Gigalith",
    "types": [
      "바위"
    ],
    "stats": {
      "hp": 85,
      "attack": 135,
      "defense": 130,
      "specialAttack": 60,
      "specialDefense": 80,
      "speed": 25
    },
    "category": "고압 포켓몬",
    "heightM": 1.7,
    "weightKg": 260,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/526.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/526.png"
  },
  {
    "id": 527,
    "dexNumber": 527,
    "generation": 5,
    "nameKo": "또르박쥐",
    "nameEn": "Woobat",
    "types": [
      "에스퍼",
      "비행"
    ],
    "stats": {
      "hp": 65,
      "attack": 45,
      "defense": 43,
      "specialAttack": 55,
      "specialDefense": 43,
      "speed": 72
    },
    "category": "박쥐 포켓몬",
    "heightM": 0.4,
    "weightKg": 2.1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/527.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/527.png"
  },
  {
    "id": 528,
    "dexNumber": 528,
    "generation": 5,
    "nameKo": "맘박쥐",
    "nameEn": "Swoobat",
    "types": [
      "에스퍼",
      "비행"
    ],
    "stats": {
      "hp": 67,
      "attack": 57,
      "defense": 55,
      "specialAttack": 77,
      "specialDefense": 55,
      "speed": 114
    },
    "category": "구애 포켓몬",
    "heightM": 0.9,
    "weightKg": 10.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/528.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/528.png"
  },
  {
    "id": 529,
    "dexNumber": 529,
    "generation": 5,
    "nameKo": "두더류",
    "nameEn": "Drilbur",
    "types": [
      "땅"
    ],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 40,
      "specialAttack": 30,
      "specialDefense": 45,
      "speed": 68
    },
    "category": "두더지 포켓몬",
    "heightM": 0.3,
    "weightKg": 8.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/529.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/529.png"
  },
  {
    "id": 530,
    "dexNumber": 530,
    "generation": 5,
    "nameKo": "몰드류",
    "nameEn": "Excadrill",
    "types": [
      "땅",
      "강철"
    ],
    "stats": {
      "hp": 110,
      "attack": 135,
      "defense": 60,
      "specialAttack": 50,
      "specialDefense": 65,
      "speed": 88
    },
    "category": "땅밑 포켓몬",
    "heightM": 0.7,
    "weightKg": 40.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/530.png"
  },
  {
    "id": 531,
    "dexNumber": 531,
    "generation": 5,
    "nameKo": "다부니",
    "nameEn": "Audino",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 103,
      "attack": 60,
      "defense": 86,
      "specialAttack": 60,
      "specialDefense": 86,
      "speed": 50
    },
    "category": "히어링 포켓몬",
    "heightM": 1.1,
    "weightKg": 31,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/531.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/531.png",
    "megaForms": [
      {
        "label": "메가다부니",
        "types": [
          "노말",
          "페어리"
        ],
        "stats": {
          "hp": 103,
          "attack": 60,
          "defense": 126,
          "specialAttack": 80,
          "specialDefense": 126,
          "speed": 50
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10069.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10069.png"
      }
    ]
  },
  {
    "id": 532,
    "dexNumber": 532,
    "generation": 5,
    "nameKo": "으랏차",
    "nameEn": "Timburr",
    "types": [
      "격투"
    ],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 55,
      "specialAttack": 25,
      "specialDefense": 35,
      "speed": 35
    },
    "category": "근골 포켓몬",
    "heightM": 0.6,
    "weightKg": 12.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/532.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/532.png"
  },
  {
    "id": 533,
    "dexNumber": 533,
    "generation": 5,
    "nameKo": "토쇠골",
    "nameEn": "Gurdurr",
    "types": [
      "격투"
    ],
    "stats": {
      "hp": 85,
      "attack": 105,
      "defense": 85,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 40
    },
    "category": "근골 포켓몬",
    "heightM": 1.2,
    "weightKg": 40,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/533.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/533.png"
  },
  {
    "id": 534,
    "dexNumber": 534,
    "generation": 5,
    "nameKo": "노보청",
    "nameEn": "Conkeldurr",
    "types": [
      "격투"
    ],
    "stats": {
      "hp": 105,
      "attack": 140,
      "defense": 95,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 45
    },
    "category": "근골 포켓몬",
    "heightM": 1.4,
    "weightKg": 87,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/534.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/534.png"
  },
  {
    "id": 535,
    "dexNumber": 535,
    "generation": 5,
    "nameKo": "동챙이",
    "nameEn": "Tympole",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 40,
      "speed": 64
    },
    "category": "올챙이 포켓몬",
    "heightM": 0.5,
    "weightKg": 4.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/535.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/535.png"
  },
  {
    "id": 536,
    "dexNumber": 536,
    "generation": 5,
    "nameKo": "두까비",
    "nameEn": "Palpitoad",
    "types": [
      "물",
      "땅"
    ],
    "stats": {
      "hp": 75,
      "attack": 65,
      "defense": 55,
      "specialAttack": 65,
      "specialDefense": 55,
      "speed": 69
    },
    "category": "진동 포켓몬",
    "heightM": 0.8,
    "weightKg": 17,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/536.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/536.png"
  },
  {
    "id": 537,
    "dexNumber": 537,
    "generation": 5,
    "nameKo": "두빅굴",
    "nameEn": "Seismitoad",
    "types": [
      "물",
      "땅"
    ],
    "stats": {
      "hp": 105,
      "attack": 95,
      "defense": 75,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 74
    },
    "category": "진동 포켓몬",
    "heightM": 1.5,
    "weightKg": 62,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/537.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/537.png"
  },
  {
    "id": 538,
    "dexNumber": 538,
    "generation": 5,
    "nameKo": "던지미",
    "nameEn": "Throh",
    "types": [
      "격투"
    ],
    "stats": {
      "hp": 120,
      "attack": 100,
      "defense": 85,
      "specialAttack": 30,
      "specialDefense": 85,
      "speed": 45
    },
    "category": "유도 포켓몬",
    "heightM": 1.3,
    "weightKg": 55.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/538.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/538.png"
  },
  {
    "id": 539,
    "dexNumber": 539,
    "generation": 5,
    "nameKo": "타격귀",
    "nameEn": "Sawk",
    "types": [
      "격투"
    ],
    "stats": {
      "hp": 75,
      "attack": 125,
      "defense": 75,
      "specialAttack": 30,
      "specialDefense": 75,
      "speed": 85
    },
    "category": "태권도 포켓몬",
    "heightM": 1.4,
    "weightKg": 51,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/539.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/539.png"
  },
  {
    "id": 540,
    "dexNumber": 540,
    "generation": 5,
    "nameKo": "두르보",
    "nameEn": "Sewaddle",
    "types": [
      "벌레",
      "풀"
    ],
    "stats": {
      "hp": 45,
      "attack": 53,
      "defense": 70,
      "specialAttack": 40,
      "specialDefense": 60,
      "speed": 42
    },
    "category": "재봉 포켓몬",
    "heightM": 0.3,
    "weightKg": 2.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/540.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/540.png"
  },
  {
    "id": 541,
    "dexNumber": 541,
    "generation": 5,
    "nameKo": "두르쿤",
    "nameEn": "Swadloon",
    "types": [
      "벌레",
      "풀"
    ],
    "stats": {
      "hp": 55,
      "attack": 63,
      "defense": 90,
      "specialAttack": 50,
      "specialDefense": 80,
      "speed": 42
    },
    "category": "잎숨기 포켓몬",
    "heightM": 0.5,
    "weightKg": 7.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/541.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/541.png"
  },
  {
    "id": 542,
    "dexNumber": 542,
    "generation": 5,
    "nameKo": "모아머",
    "nameEn": "Leavanny",
    "types": [
      "벌레",
      "풀"
    ],
    "stats": {
      "hp": 75,
      "attack": 103,
      "defense": 80,
      "specialAttack": 70,
      "specialDefense": 80,
      "speed": 92
    },
    "category": "육아 포켓몬",
    "heightM": 1.2,
    "weightKg": 20.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/542.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/542.png"
  },
  {
    "id": 543,
    "dexNumber": 543,
    "generation": 5,
    "nameKo": "마디네",
    "nameEn": "Venipede",
    "types": [
      "벌레",
      "독"
    ],
    "stats": {
      "hp": 30,
      "attack": 45,
      "defense": 59,
      "specialAttack": 30,
      "specialDefense": 39,
      "speed": 57
    },
    "category": "지네 포켓몬",
    "heightM": 0.4,
    "weightKg": 5.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/543.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/543.png"
  },
  {
    "id": 544,
    "dexNumber": 544,
    "generation": 5,
    "nameKo": "휠구",
    "nameEn": "Whirlipede",
    "types": [
      "벌레",
      "독"
    ],
    "stats": {
      "hp": 40,
      "attack": 55,
      "defense": 99,
      "specialAttack": 40,
      "specialDefense": 79,
      "speed": 47
    },
    "category": "눈썹지네 포켓몬",
    "heightM": 1.2,
    "weightKg": 58.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/544.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/544.png"
  },
  {
    "id": 545,
    "dexNumber": 545,
    "generation": 5,
    "nameKo": "펜드라",
    "nameEn": "Scolipede",
    "types": [
      "벌레",
      "독"
    ],
    "stats": {
      "hp": 60,
      "attack": 100,
      "defense": 89,
      "specialAttack": 55,
      "specialDefense": 69,
      "speed": 112
    },
    "category": "메가지네 포켓몬",
    "heightM": 2.5,
    "weightKg": 200.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/545.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/545.png"
  },
  {
    "id": 546,
    "dexNumber": 546,
    "generation": 5,
    "nameKo": "소미안",
    "nameEn": "Cottonee",
    "types": [
      "풀",
      "페어리"
    ],
    "stats": {
      "hp": 40,
      "attack": 27,
      "defense": 60,
      "specialAttack": 37,
      "specialDefense": 50,
      "speed": 66
    },
    "category": "솜뭉치 포켓몬",
    "heightM": 0.3,
    "weightKg": 0.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/546.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/546.png"
  },
  {
    "id": 547,
    "dexNumber": 547,
    "generation": 5,
    "nameKo": "엘풍",
    "nameEn": "Whimsicott",
    "types": [
      "풀",
      "페어리"
    ],
    "stats": {
      "hp": 60,
      "attack": 67,
      "defense": 85,
      "specialAttack": 77,
      "specialDefense": 75,
      "speed": 116
    },
    "category": "바람숨기 포켓몬",
    "heightM": 0.7,
    "weightKg": 6.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/547.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/547.png"
  },
  {
    "id": 548,
    "dexNumber": 548,
    "generation": 5,
    "nameKo": "치릴리",
    "nameEn": "Petilil",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 45,
      "attack": 35,
      "defense": 50,
      "specialAttack": 70,
      "specialDefense": 50,
      "speed": 30
    },
    "category": "뿌리 포켓몬",
    "heightM": 0.5,
    "weightKg": 6.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/548.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/548.png"
  },
  {
    "id": 549,
    "dexNumber": 549,
    "generation": 5,
    "nameKo": "드레디어",
    "nameEn": "Lilligant",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 70,
      "attack": 60,
      "defense": 75,
      "specialAttack": 110,
      "specialDefense": 75,
      "speed": 90
    },
    "category": "꽃장식 포켓몬",
    "heightM": 1.1,
    "weightKg": 16.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/549.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/549.png"
  },
  {
    "id": 550,
    "dexNumber": 550,
    "generation": 5,
    "nameKo": "배쓰나이",
    "nameEn": "Basculin",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 70,
      "attack": 92,
      "defense": 65,
      "specialAttack": 80,
      "specialDefense": 55,
      "speed": 98
    },
    "category": "흉포 포켓몬",
    "heightM": 1,
    "weightKg": 18,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/550.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/550.png"
  },
  {
    "id": 551,
    "dexNumber": 551,
    "generation": 5,
    "nameKo": "깜눈크",
    "nameEn": "Sandile",
    "types": [
      "땅",
      "악"
    ],
    "stats": {
      "hp": 50,
      "attack": 72,
      "defense": 35,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 65
    },
    "category": "사막악어 포켓몬",
    "heightM": 0.7,
    "weightKg": 15.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/551.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/551.png"
  },
  {
    "id": 552,
    "dexNumber": 552,
    "generation": 5,
    "nameKo": "악비르",
    "nameEn": "Krokorok",
    "types": [
      "땅",
      "악"
    ],
    "stats": {
      "hp": 60,
      "attack": 82,
      "defense": 45,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 74
    },
    "category": "사막악어 포켓몬",
    "heightM": 1,
    "weightKg": 33.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/552.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/552.png"
  },
  {
    "id": 553,
    "dexNumber": 553,
    "generation": 5,
    "nameKo": "악비아르",
    "nameEn": "Krookodile",
    "types": [
      "땅",
      "악"
    ],
    "stats": {
      "hp": 95,
      "attack": 117,
      "defense": 80,
      "specialAttack": 65,
      "specialDefense": 70,
      "speed": 92
    },
    "category": "위협 포켓몬",
    "heightM": 1.5,
    "weightKg": 96.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/553.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/553.png"
  },
  {
    "id": 554,
    "dexNumber": 554,
    "generation": 5,
    "nameKo": "달막화",
    "nameEn": "Darumaka",
    "types": [
      "불꽃"
    ],
    "stats": {
      "hp": 70,
      "attack": 90,
      "defense": 45,
      "specialAttack": 15,
      "specialDefense": 45,
      "speed": 50
    },
    "category": "달마 포켓몬",
    "heightM": 0.6,
    "weightKg": 37.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/554.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/554.png"
  },
  {
    "id": 555,
    "dexNumber": 555,
    "generation": 5,
    "nameKo": "불비달마",
    "nameEn": "Darmanitan",
    "types": [
      "불꽃"
    ],
    "stats": {
      "hp": 105,
      "attack": 140,
      "defense": 55,
      "specialAttack": 30,
      "specialDefense": 55,
      "speed": 95
    },
    "category": "염상 포켓몬",
    "heightM": 1.3,
    "weightKg": 92.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/555.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/555.png"
  },
  {
    "id": 556,
    "dexNumber": 556,
    "generation": 5,
    "nameKo": "마라카치",
    "nameEn": "Maractus",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 75,
      "attack": 86,
      "defense": 67,
      "specialAttack": 106,
      "specialDefense": 67,
      "speed": 60
    },
    "category": "선인장 포켓몬",
    "heightM": 1,
    "weightKg": 28,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/556.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/556.png"
  },
  {
    "id": 557,
    "dexNumber": 557,
    "generation": 5,
    "nameKo": "돌살이",
    "nameEn": "Dwebble",
    "types": [
      "벌레",
      "바위"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 85,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 55
    },
    "category": "돌집 포켓몬",
    "heightM": 0.3,
    "weightKg": 14.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/557.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/557.png"
  },
  {
    "id": 558,
    "dexNumber": 558,
    "generation": 5,
    "nameKo": "암팰리스",
    "nameEn": "Crustle",
    "types": [
      "벌레",
      "바위"
    ],
    "stats": {
      "hp": 70,
      "attack": 105,
      "defense": 125,
      "specialAttack": 65,
      "specialDefense": 75,
      "speed": 45
    },
    "category": "바위집 포켓몬",
    "heightM": 1.4,
    "weightKg": 200,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/558.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/558.png"
  },
  {
    "id": 559,
    "dexNumber": 559,
    "generation": 5,
    "nameKo": "곤율랭",
    "nameEn": "Scraggy",
    "types": [
      "악",
      "격투"
    ],
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 70,
      "specialAttack": 35,
      "specialDefense": 70,
      "speed": 48
    },
    "category": "탈피 포켓몬",
    "heightM": 0.6,
    "weightKg": 11.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/559.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/559.png"
  },
  {
    "id": 560,
    "dexNumber": 560,
    "generation": 5,
    "nameKo": "곤율거니",
    "nameEn": "Scrafty",
    "types": [
      "악",
      "격투"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 115,
      "specialAttack": 45,
      "specialDefense": 115,
      "speed": 58
    },
    "category": "악당 포켓몬",
    "heightM": 1.1,
    "weightKg": 30,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/560.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/560.png"
  },
  {
    "id": 561,
    "dexNumber": 561,
    "generation": 5,
    "nameKo": "심보러",
    "nameEn": "Sigilyph",
    "types": [
      "에스퍼",
      "비행"
    ],
    "stats": {
      "hp": 72,
      "attack": 58,
      "defense": 80,
      "specialAttack": 103,
      "specialDefense": 80,
      "speed": 97
    },
    "category": "흡사새 포켓몬",
    "heightM": 1.4,
    "weightKg": 14,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/561.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/561.png"
  },
  {
    "id": 562,
    "dexNumber": 562,
    "generation": 5,
    "nameKo": "데스마스",
    "nameEn": "Yamask",
    "types": [
      "고스트"
    ],
    "stats": {
      "hp": 38,
      "attack": 30,
      "defense": 85,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 30
    },
    "category": "영혼 포켓몬",
    "heightM": 0.5,
    "weightKg": 1.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/562.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/562.png"
  },
  {
    "id": 563,
    "dexNumber": 563,
    "generation": 5,
    "nameKo": "데스니칸",
    "nameEn": "Cofagrigus",
    "types": [
      "고스트"
    ],
    "stats": {
      "hp": 58,
      "attack": 50,
      "defense": 145,
      "specialAttack": 95,
      "specialDefense": 105,
      "speed": 30
    },
    "category": "관 포켓몬",
    "heightM": 1.7,
    "weightKg": 76.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/563.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/563.png"
  },
  {
    "id": 564,
    "dexNumber": 564,
    "generation": 5,
    "nameKo": "프로토가",
    "nameEn": "Tirtouga",
    "types": [
      "물",
      "바위"
    ],
    "stats": {
      "hp": 54,
      "attack": 78,
      "defense": 103,
      "specialAttack": 53,
      "specialDefense": 45,
      "speed": 22
    },
    "category": "옛날거북 포켓몬",
    "heightM": 0.7,
    "weightKg": 16.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/564.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/564.png"
  },
  {
    "id": 565,
    "dexNumber": 565,
    "generation": 5,
    "nameKo": "늑골라",
    "nameEn": "Carracosta",
    "types": [
      "물",
      "바위"
    ],
    "stats": {
      "hp": 74,
      "attack": 108,
      "defense": 133,
      "specialAttack": 83,
      "specialDefense": 65,
      "speed": 32
    },
    "category": "옛날거북 포켓몬",
    "heightM": 1.2,
    "weightKg": 81,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/565.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/565.png"
  },
  {
    "id": 566,
    "dexNumber": 566,
    "generation": 5,
    "nameKo": "아켄",
    "nameEn": "Archen",
    "types": [
      "바위",
      "비행"
    ],
    "stats": {
      "hp": 55,
      "attack": 112,
      "defense": 45,
      "specialAttack": 74,
      "specialDefense": 45,
      "speed": 70
    },
    "category": "최초새 포켓몬",
    "heightM": 0.5,
    "weightKg": 9.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/566.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/566.png"
  },
  {
    "id": 567,
    "dexNumber": 567,
    "generation": 5,
    "nameKo": "아케오스",
    "nameEn": "Archeops",
    "types": [
      "바위",
      "비행"
    ],
    "stats": {
      "hp": 75,
      "attack": 140,
      "defense": 65,
      "specialAttack": 112,
      "specialDefense": 65,
      "speed": 110
    },
    "category": "최초새 포켓몬",
    "heightM": 1.4,
    "weightKg": 32,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/567.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/567.png"
  },
  {
    "id": 568,
    "dexNumber": 568,
    "generation": 5,
    "nameKo": "깨봉이",
    "nameEn": "Trubbish",
    "types": [
      "독"
    ],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 62,
      "specialAttack": 40,
      "specialDefense": 62,
      "speed": 65
    },
    "category": "쓰레기봉투 포켓몬",
    "heightM": 0.6,
    "weightKg": 31,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/568.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/568.png"
  },
  {
    "id": 569,
    "dexNumber": 569,
    "generation": 5,
    "nameKo": "더스트나",
    "nameEn": "Garbodor",
    "types": [
      "독"
    ],
    "stats": {
      "hp": 80,
      "attack": 95,
      "defense": 82,
      "specialAttack": 60,
      "specialDefense": 82,
      "speed": 75
    },
    "category": "쓰레기장 포켓몬",
    "heightM": 1.9,
    "weightKg": 107.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/569.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/569.png"
  },
  {
    "id": 570,
    "dexNumber": 570,
    "generation": 5,
    "nameKo": "조로아",
    "nameEn": "Zorua",
    "types": [
      "악"
    ],
    "stats": {
      "hp": 40,
      "attack": 65,
      "defense": 40,
      "specialAttack": 80,
      "specialDefense": 40,
      "speed": 65
    },
    "category": "나쁜여우 포켓몬",
    "heightM": 0.7,
    "weightKg": 12.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/570.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/570.png"
  },
  {
    "id": 571,
    "dexNumber": 571,
    "generation": 5,
    "nameKo": "조로아크",
    "nameEn": "Zoroark",
    "types": [
      "악"
    ],
    "stats": {
      "hp": 60,
      "attack": 105,
      "defense": 60,
      "specialAttack": 120,
      "specialDefense": 60,
      "speed": 105
    },
    "category": "요괴여우 포켓몬",
    "heightM": 1.6,
    "weightKg": 81.1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/571.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/571.png"
  },
  {
    "id": 572,
    "dexNumber": 572,
    "generation": 5,
    "nameKo": "치라미",
    "nameEn": "Minccino",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 55,
      "attack": 50,
      "defense": 40,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 75
    },
    "category": "친칠라 포켓몬",
    "heightM": 0.4,
    "weightKg": 5.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/572.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/572.png"
  },
  {
    "id": 573,
    "dexNumber": 573,
    "generation": 5,
    "nameKo": "치라치노",
    "nameEn": "Cinccino",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 75,
      "attack": 95,
      "defense": 60,
      "specialAttack": 65,
      "specialDefense": 60,
      "speed": 115
    },
    "category": "스카프 포켓몬",
    "heightM": 0.5,
    "weightKg": 7.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/573.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/573.png"
  },
  {
    "id": 574,
    "dexNumber": 574,
    "generation": 5,
    "nameKo": "고디탱",
    "nameEn": "Gothita",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 45,
      "attack": 30,
      "defense": 50,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 45
    },
    "category": "응시 포켓몬",
    "heightM": 0.4,
    "weightKg": 5.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/574.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/574.png"
  },
  {
    "id": 575,
    "dexNumber": 575,
    "generation": 5,
    "nameKo": "고디보미",
    "nameEn": "Gothorita",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 70,
      "specialAttack": 75,
      "specialDefense": 85,
      "speed": 55
    },
    "category": "조작 포켓몬",
    "heightM": 0.7,
    "weightKg": 18,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/575.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/575.png"
  },
  {
    "id": 576,
    "dexNumber": 576,
    "generation": 5,
    "nameKo": "고디모아젤",
    "nameEn": "Gothitelle",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 70,
      "attack": 55,
      "defense": 95,
      "specialAttack": 95,
      "specialDefense": 110,
      "speed": 65
    },
    "category": "천체 포켓몬",
    "heightM": 1.5,
    "weightKg": 44,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/576.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/576.png"
  },
  {
    "id": 577,
    "dexNumber": 577,
    "generation": 5,
    "nameKo": "유니란",
    "nameEn": "Solosis",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 45,
      "attack": 30,
      "defense": 40,
      "specialAttack": 105,
      "specialDefense": 50,
      "speed": 20
    },
    "category": "세포 포켓몬",
    "heightM": 0.3,
    "weightKg": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/577.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/577.png"
  },
  {
    "id": 578,
    "dexNumber": 578,
    "generation": 5,
    "nameKo": "듀란",
    "nameEn": "Duosion",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 65,
      "attack": 40,
      "defense": 50,
      "specialAttack": 125,
      "specialDefense": 60,
      "speed": 30
    },
    "category": "분할 포켓몬",
    "heightM": 0.6,
    "weightKg": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/578.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/578.png"
  },
  {
    "id": 579,
    "dexNumber": 579,
    "generation": 5,
    "nameKo": "란쿨루스",
    "nameEn": "Reuniclus",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 110,
      "attack": 65,
      "defense": 75,
      "specialAttack": 125,
      "specialDefense": 85,
      "speed": 30
    },
    "category": "증폭 포켓몬",
    "heightM": 1,
    "weightKg": 20.1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/579.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/579.png"
  },
  {
    "id": 580,
    "dexNumber": 580,
    "generation": 5,
    "nameKo": "꼬지보리",
    "nameEn": "Ducklett",
    "types": [
      "물",
      "비행"
    ],
    "stats": {
      "hp": 62,
      "attack": 44,
      "defense": 50,
      "specialAttack": 44,
      "specialDefense": 50,
      "speed": 55
    },
    "category": "물새 포켓몬",
    "heightM": 0.5,
    "weightKg": 5.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/580.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/580.png"
  },
  {
    "id": 581,
    "dexNumber": 581,
    "generation": 5,
    "nameKo": "스완나",
    "nameEn": "Swanna",
    "types": [
      "물",
      "비행"
    ],
    "stats": {
      "hp": 75,
      "attack": 87,
      "defense": 63,
      "specialAttack": 87,
      "specialDefense": 63,
      "speed": 98
    },
    "category": "백조 포켓몬",
    "heightM": 1.3,
    "weightKg": 24.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/581.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/581.png"
  },
  {
    "id": 582,
    "dexNumber": 582,
    "generation": 5,
    "nameKo": "바닐프티",
    "nameEn": "Vanillite",
    "types": [
      "얼음"
    ],
    "stats": {
      "hp": 36,
      "attack": 50,
      "defense": 50,
      "specialAttack": 65,
      "specialDefense": 60,
      "speed": 44
    },
    "category": "신설 포켓몬",
    "heightM": 0.4,
    "weightKg": 5.7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/582.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/582.png"
  },
  {
    "id": 583,
    "dexNumber": 583,
    "generation": 5,
    "nameKo": "바닐리치",
    "nameEn": "Vanillish",
    "types": [
      "얼음"
    ],
    "stats": {
      "hp": 51,
      "attack": 65,
      "defense": 65,
      "specialAttack": 80,
      "specialDefense": 75,
      "speed": 59
    },
    "category": "빙설 포켓몬",
    "heightM": 1.1,
    "weightKg": 41,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/583.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/583.png"
  },
  {
    "id": 584,
    "dexNumber": 584,
    "generation": 5,
    "nameKo": "배바닐라",
    "nameEn": "Vanilluxe",
    "types": [
      "얼음"
    ],
    "stats": {
      "hp": 71,
      "attack": 95,
      "defense": 85,
      "specialAttack": 110,
      "specialDefense": 95,
      "speed": 79
    },
    "category": "블리자드 포켓몬",
    "heightM": 1.3,
    "weightKg": 57.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/584.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/584.png"
  },
  {
    "id": 585,
    "dexNumber": 585,
    "generation": 5,
    "nameKo": "사철록",
    "nameEn": "Deerling",
    "types": [
      "노말",
      "풀"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 75
    },
    "category": "계절 포켓몬",
    "heightM": 0.6,
    "weightKg": 19.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/585.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/585.png"
  },
  {
    "id": 586,
    "dexNumber": 586,
    "generation": 5,
    "nameKo": "바라철록",
    "nameEn": "Sawsbuck",
    "types": [
      "노말",
      "풀"
    ],
    "stats": {
      "hp": 80,
      "attack": 100,
      "defense": 70,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 95
    },
    "category": "계절 포켓몬",
    "heightM": 1.9,
    "weightKg": 92.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/586.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/586.png"
  },
  {
    "id": 587,
    "dexNumber": 587,
    "generation": 5,
    "nameKo": "에몽가",
    "nameEn": "Emolga",
    "types": [
      "전기",
      "비행"
    ],
    "stats": {
      "hp": 55,
      "attack": 75,
      "defense": 60,
      "specialAttack": 75,
      "specialDefense": 60,
      "speed": 103
    },
    "category": "하늘다람쥐 포켓몬",
    "heightM": 0.4,
    "weightKg": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/587.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/587.png"
  },
  {
    "id": 588,
    "dexNumber": 588,
    "generation": 5,
    "nameKo": "딱정곤",
    "nameEn": "Karrablast",
    "types": [
      "벌레"
    ],
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 45,
      "specialAttack": 40,
      "specialDefense": 45,
      "speed": 60
    },
    "category": "덥석물기 포켓몬",
    "heightM": 0.5,
    "weightKg": 5.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/588.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/588.png"
  },
  {
    "id": 589,
    "dexNumber": 589,
    "generation": 5,
    "nameKo": "슈바르고",
    "nameEn": "Escavalier",
    "types": [
      "벌레",
      "강철"
    ],
    "stats": {
      "hp": 70,
      "attack": 135,
      "defense": 105,
      "specialAttack": 60,
      "specialDefense": 105,
      "speed": 20
    },
    "category": "기병 포켓몬",
    "heightM": 1,
    "weightKg": 33,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/589.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/589.png"
  },
  {
    "id": 590,
    "dexNumber": 590,
    "generation": 5,
    "nameKo": "깜놀버슬",
    "nameEn": "Foongus",
    "types": [
      "풀",
      "독"
    ],
    "stats": {
      "hp": 69,
      "attack": 55,
      "defense": 45,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 15
    },
    "category": "버섯 포켓몬",
    "heightM": 0.2,
    "weightKg": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/590.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/590.png"
  },
  {
    "id": 591,
    "dexNumber": 591,
    "generation": 5,
    "nameKo": "뽀록나",
    "nameEn": "Amoonguss",
    "types": [
      "풀",
      "독"
    ],
    "stats": {
      "hp": 114,
      "attack": 85,
      "defense": 70,
      "specialAttack": 85,
      "specialDefense": 80,
      "speed": 30
    },
    "category": "버섯 포켓몬",
    "heightM": 0.6,
    "weightKg": 10.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/591.png"
  },
  {
    "id": 592,
    "dexNumber": 592,
    "generation": 5,
    "nameKo": "탱그릴",
    "nameEn": "Frillish",
    "types": [
      "물",
      "고스트"
    ],
    "stats": {
      "hp": 55,
      "attack": 40,
      "defense": 50,
      "specialAttack": 65,
      "specialDefense": 85,
      "speed": 40
    },
    "category": "부유 포켓몬",
    "heightM": 1.2,
    "weightKg": 33,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/592.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/592.png"
  },
  {
    "id": 593,
    "dexNumber": 593,
    "generation": 5,
    "nameKo": "탱탱겔",
    "nameEn": "Jellicent",
    "types": [
      "물",
      "고스트"
    ],
    "stats": {
      "hp": 100,
      "attack": 60,
      "defense": 70,
      "specialAttack": 85,
      "specialDefense": 105,
      "speed": 60
    },
    "category": "부유 포켓몬",
    "heightM": 2.2,
    "weightKg": 135,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/593.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/593.png"
  },
  {
    "id": 594,
    "dexNumber": 594,
    "generation": 5,
    "nameKo": "맘복치",
    "nameEn": "Alomomola",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 165,
      "attack": 75,
      "defense": 80,
      "specialAttack": 40,
      "specialDefense": 45,
      "speed": 65
    },
    "category": "돌보기 포켓몬",
    "heightM": 1.2,
    "weightKg": 31.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/594.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/594.png"
  },
  {
    "id": 595,
    "dexNumber": 595,
    "generation": 5,
    "nameKo": "파쪼옥",
    "nameEn": "Joltik",
    "types": [
      "벌레",
      "전기"
    ],
    "stats": {
      "hp": 50,
      "attack": 47,
      "defense": 50,
      "specialAttack": 57,
      "specialDefense": 50,
      "speed": 65
    },
    "category": "들러붙기 포켓몬",
    "heightM": 0.1,
    "weightKg": 0.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/595.png"
  },
  {
    "id": 596,
    "dexNumber": 596,
    "generation": 5,
    "nameKo": "전툴라",
    "nameEn": "Galvantula",
    "types": [
      "벌레",
      "전기"
    ],
    "stats": {
      "hp": 70,
      "attack": 77,
      "defense": 60,
      "specialAttack": 97,
      "specialDefense": 60,
      "speed": 108
    },
    "category": "전기거미 포켓몬",
    "heightM": 0.8,
    "weightKg": 14.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/596.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/596.png"
  },
  {
    "id": 597,
    "dexNumber": 597,
    "generation": 5,
    "nameKo": "철시드",
    "nameEn": "Ferroseed",
    "types": [
      "풀",
      "강철"
    ],
    "stats": {
      "hp": 44,
      "attack": 50,
      "defense": 91,
      "specialAttack": 24,
      "specialDefense": 86,
      "speed": 10
    },
    "category": "가시열매 포켓몬",
    "heightM": 0.6,
    "weightKg": 18.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/597.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/597.png"
  },
  {
    "id": 598,
    "dexNumber": 598,
    "generation": 5,
    "nameKo": "너트령",
    "nameEn": "Ferrothorn",
    "types": [
      "풀",
      "강철"
    ],
    "stats": {
      "hp": 74,
      "attack": 94,
      "defense": 131,
      "specialAttack": 54,
      "specialDefense": 116,
      "speed": 20
    },
    "category": "가시공 포켓몬",
    "heightM": 1,
    "weightKg": 110,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/598.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/598.png"
  },
  {
    "id": 599,
    "dexNumber": 599,
    "generation": 5,
    "nameKo": "기어르",
    "nameEn": "Klink",
    "types": [
      "강철"
    ],
    "stats": {
      "hp": 40,
      "attack": 55,
      "defense": 70,
      "specialAttack": 45,
      "specialDefense": 60,
      "speed": 30
    },
    "category": "톱니바퀴 포켓몬",
    "heightM": 0.3,
    "weightKg": 21,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/599.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/599.png"
  },
  {
    "id": 600,
    "dexNumber": 600,
    "generation": 5,
    "nameKo": "기기어르",
    "nameEn": "Klang",
    "types": [
      "강철"
    ],
    "stats": {
      "hp": 60,
      "attack": 80,
      "defense": 95,
      "specialAttack": 70,
      "specialDefense": 85,
      "speed": 50
    },
    "category": "톱니바퀴 포켓몬",
    "heightM": 0.6,
    "weightKg": 51,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/600.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/600.png"
  },
  {
    "id": 601,
    "dexNumber": 601,
    "generation": 5,
    "nameKo": "기기기어르",
    "nameEn": "Klinklang",
    "types": [
      "강철"
    ],
    "stats": {
      "hp": 60,
      "attack": 100,
      "defense": 115,
      "specialAttack": 70,
      "specialDefense": 85,
      "speed": 90
    },
    "category": "톱니바퀴 포켓몬",
    "heightM": 0.6,
    "weightKg": 81,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/601.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/601.png"
  },
  {
    "id": 602,
    "dexNumber": 602,
    "generation": 5,
    "nameKo": "저리어",
    "nameEn": "Tynamo",
    "types": [
      "전기"
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "specialAttack": 45,
      "specialDefense": 40,
      "speed": 60
    },
    "category": "전기물고기 포켓몬",
    "heightM": 0.2,
    "weightKg": 0.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/602.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/602.png"
  },
  {
    "id": 603,
    "dexNumber": 603,
    "generation": 5,
    "nameKo": "저리릴",
    "nameEn": "Eelektrik",
    "types": [
      "전기"
    ],
    "stats": {
      "hp": 65,
      "attack": 85,
      "defense": 70,
      "specialAttack": 75,
      "specialDefense": 70,
      "speed": 40
    },
    "category": "전기물고기 포켓몬",
    "heightM": 1.2,
    "weightKg": 22,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/603.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/603.png"
  },
  {
    "id": 604,
    "dexNumber": 604,
    "generation": 5,
    "nameKo": "저리더프",
    "nameEn": "Eelektross",
    "types": [
      "전기"
    ],
    "stats": {
      "hp": 85,
      "attack": 115,
      "defense": 80,
      "specialAttack": 105,
      "specialDefense": 80,
      "speed": 50
    },
    "category": "전기물고기 포켓몬",
    "heightM": 2.1,
    "weightKg": 80.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/604.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/604.png"
  },
  {
    "id": 605,
    "dexNumber": 605,
    "generation": 5,
    "nameKo": "리그레",
    "nameEn": "Elgyem",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 55,
      "attack": 55,
      "defense": 55,
      "specialAttack": 85,
      "specialDefense": 55,
      "speed": 30
    },
    "category": "브레인 포켓몬",
    "heightM": 0.5,
    "weightKg": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/605.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/605.png"
  },
  {
    "id": 606,
    "dexNumber": 606,
    "generation": 5,
    "nameKo": "벰크",
    "nameEn": "Beheeyem",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 75,
      "attack": 75,
      "defense": 75,
      "specialAttack": 125,
      "specialDefense": 95,
      "speed": 40
    },
    "category": "브레인 포켓몬",
    "heightM": 1,
    "weightKg": 34.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/606.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/606.png"
  },
  {
    "id": 607,
    "dexNumber": 607,
    "generation": 5,
    "nameKo": "불켜미",
    "nameEn": "Litwick",
    "types": [
      "고스트",
      "불꽃"
    ],
    "stats": {
      "hp": 50,
      "attack": 30,
      "defense": 55,
      "specialAttack": 65,
      "specialDefense": 55,
      "speed": 20
    },
    "category": "양초 포켓몬",
    "heightM": 0.3,
    "weightKg": 3.1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/607.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/607.png"
  },
  {
    "id": 608,
    "dexNumber": 608,
    "generation": 5,
    "nameKo": "램프라",
    "nameEn": "Lampent",
    "types": [
      "고스트",
      "불꽃"
    ],
    "stats": {
      "hp": 60,
      "attack": 40,
      "defense": 60,
      "specialAttack": 95,
      "specialDefense": 60,
      "speed": 55
    },
    "category": "램프 포켓몬",
    "heightM": 0.6,
    "weightKg": 13,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/608.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/608.png"
  },
  {
    "id": 609,
    "dexNumber": 609,
    "generation": 5,
    "nameKo": "샹델라",
    "nameEn": "Chandelure",
    "types": [
      "고스트",
      "불꽃"
    ],
    "stats": {
      "hp": 60,
      "attack": 55,
      "defense": 90,
      "specialAttack": 145,
      "specialDefense": 90,
      "speed": 80
    },
    "category": "권유 포켓몬",
    "heightM": 1,
    "weightKg": 34.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/609.png"
  },
  {
    "id": 610,
    "dexNumber": 610,
    "generation": 5,
    "nameKo": "터검니",
    "nameEn": "Axew",
    "types": [
      "드래곤"
    ],
    "stats": {
      "hp": 46,
      "attack": 87,
      "defense": 60,
      "specialAttack": 30,
      "specialDefense": 40,
      "speed": 57
    },
    "category": "이빨 포켓몬",
    "heightM": 0.6,
    "weightKg": 18,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/610.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/610.png"
  },
  {
    "id": 611,
    "dexNumber": 611,
    "generation": 5,
    "nameKo": "액슨도",
    "nameEn": "Fraxure",
    "types": [
      "드래곤"
    ],
    "stats": {
      "hp": 66,
      "attack": 117,
      "defense": 70,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 67
    },
    "category": "도끼턱 포켓몬",
    "heightM": 1,
    "weightKg": 36,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/611.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/611.png"
  },
  {
    "id": 612,
    "dexNumber": 612,
    "generation": 5,
    "nameKo": "액스라이즈",
    "nameEn": "Haxorus",
    "types": [
      "드래곤"
    ],
    "stats": {
      "hp": 76,
      "attack": 147,
      "defense": 90,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 97
    },
    "category": "도끼턱 포켓몬",
    "heightM": 1.8,
    "weightKg": 105.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/612.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/612.png"
  },
  {
    "id": 613,
    "dexNumber": 613,
    "generation": 5,
    "nameKo": "코고미",
    "nameEn": "Cubchoo",
    "types": [
      "얼음"
    ],
    "stats": {
      "hp": 55,
      "attack": 70,
      "defense": 40,
      "specialAttack": 60,
      "specialDefense": 40,
      "speed": 40
    },
    "category": "빙결 포켓몬",
    "heightM": 0.5,
    "weightKg": 8.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/613.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/613.png"
  },
  {
    "id": 614,
    "dexNumber": 614,
    "generation": 5,
    "nameKo": "툰베어",
    "nameEn": "Beartic",
    "types": [
      "얼음"
    ],
    "stats": {
      "hp": 95,
      "attack": 130,
      "defense": 80,
      "specialAttack": 70,
      "specialDefense": 80,
      "speed": 50
    },
    "category": "동결 포켓몬",
    "heightM": 2.6,
    "weightKg": 260,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/614.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/614.png"
  },
  {
    "id": 615,
    "dexNumber": 615,
    "generation": 5,
    "nameKo": "프리지오",
    "nameEn": "Cryogonal",
    "types": [
      "얼음"
    ],
    "stats": {
      "hp": 80,
      "attack": 50,
      "defense": 50,
      "specialAttack": 95,
      "specialDefense": 135,
      "speed": 105
    },
    "category": "결정 포켓몬",
    "heightM": 1.1,
    "weightKg": 148,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/615.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/615.png"
  },
  {
    "id": 616,
    "dexNumber": 616,
    "generation": 5,
    "nameKo": "쪼마리",
    "nameEn": "Shelmet",
    "types": [
      "벌레"
    ],
    "stats": {
      "hp": 50,
      "attack": 40,
      "defense": 85,
      "specialAttack": 40,
      "specialDefense": 65,
      "speed": 25
    },
    "category": "달팽이 포켓몬",
    "heightM": 0.4,
    "weightKg": 7.7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/616.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/616.png"
  },
  {
    "id": 617,
    "dexNumber": 617,
    "generation": 5,
    "nameKo": "어지리더",
    "nameEn": "Accelgor",
    "types": [
      "벌레"
    ],
    "stats": {
      "hp": 80,
      "attack": 70,
      "defense": 40,
      "specialAttack": 100,
      "specialDefense": 60,
      "speed": 145
    },
    "category": "탈껍질 포켓몬",
    "heightM": 0.8,
    "weightKg": 25.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/617.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/617.png"
  },
  {
    "id": 618,
    "dexNumber": 618,
    "generation": 5,
    "nameKo": "메더",
    "nameEn": "Stunfisk",
    "types": [
      "땅",
      "전기"
    ],
    "stats": {
      "hp": 109,
      "attack": 66,
      "defense": 84,
      "specialAttack": 81,
      "specialDefense": 99,
      "speed": 32
    },
    "category": "트랩 포켓몬",
    "heightM": 0.7,
    "weightKg": 11,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/618.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/618.png"
  },
  {
    "id": 619,
    "dexNumber": 619,
    "generation": 5,
    "nameKo": "비조푸",
    "nameEn": "Mienfoo",
    "types": [
      "격투"
    ],
    "stats": {
      "hp": 45,
      "attack": 85,
      "defense": 50,
      "specialAttack": 55,
      "specialDefense": 50,
      "speed": 65
    },
    "category": "무술 포켓몬",
    "heightM": 0.9,
    "weightKg": 20,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/619.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/619.png"
  },
  {
    "id": 620,
    "dexNumber": 620,
    "generation": 5,
    "nameKo": "비조도",
    "nameEn": "Mienshao",
    "types": [
      "격투"
    ],
    "stats": {
      "hp": 65,
      "attack": 125,
      "defense": 60,
      "specialAttack": 95,
      "specialDefense": 60,
      "speed": 105
    },
    "category": "무술 포켓몬",
    "heightM": 1.4,
    "weightKg": 35.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/620.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/620.png"
  },
  {
    "id": 621,
    "dexNumber": 621,
    "generation": 5,
    "nameKo": "크리만",
    "nameEn": "Druddigon",
    "types": [
      "드래곤"
    ],
    "stats": {
      "hp": 77,
      "attack": 120,
      "defense": 90,
      "specialAttack": 60,
      "specialDefense": 90,
      "speed": 48
    },
    "category": "동굴 포켓몬",
    "heightM": 1.6,
    "weightKg": 139,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/621.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/621.png"
  },
  {
    "id": 622,
    "dexNumber": 622,
    "generation": 5,
    "nameKo": "골비람",
    "nameEn": "Golett",
    "types": [
      "땅",
      "고스트"
    ],
    "stats": {
      "hp": 59,
      "attack": 74,
      "defense": 50,
      "specialAttack": 35,
      "specialDefense": 50,
      "speed": 35
    },
    "category": "골렘 포켓몬",
    "heightM": 1,
    "weightKg": 92,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/622.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/622.png"
  },
  {
    "id": 623,
    "dexNumber": 623,
    "generation": 5,
    "nameKo": "골루그",
    "nameEn": "Golurk",
    "types": [
      "땅",
      "고스트"
    ],
    "stats": {
      "hp": 89,
      "attack": 124,
      "defense": 80,
      "specialAttack": 55,
      "specialDefense": 80,
      "speed": 55
    },
    "category": "골렘 포켓몬",
    "heightM": 2.8,
    "weightKg": 330,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/623.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/623.png"
  },
  {
    "id": 624,
    "dexNumber": 624,
    "generation": 5,
    "nameKo": "자망칼",
    "nameEn": "Pawniard",
    "types": [
      "악",
      "강철"
    ],
    "stats": {
      "hp": 45,
      "attack": 85,
      "defense": 70,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 60
    },
    "category": "날붙이 포켓몬",
    "heightM": 0.5,
    "weightKg": 10.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/624.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/624.png"
  },
  {
    "id": 625,
    "dexNumber": 625,
    "generation": 5,
    "nameKo": "절각참",
    "nameEn": "Bisharp",
    "types": [
      "악",
      "강철"
    ],
    "stats": {
      "hp": 65,
      "attack": 125,
      "defense": 100,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 70
    },
    "category": "도인 포켓몬",
    "heightM": 1.6,
    "weightKg": 70,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/625.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/625.png"
  },
  {
    "id": 626,
    "dexNumber": 626,
    "generation": 5,
    "nameKo": "버프론",
    "nameEn": "Bouffalant",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 95,
      "attack": 110,
      "defense": 95,
      "specialAttack": 40,
      "specialDefense": 95,
      "speed": 55
    },
    "category": "박치기소 포켓몬",
    "heightM": 1.6,
    "weightKg": 94.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/626.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/626.png"
  },
  {
    "id": 627,
    "dexNumber": 627,
    "generation": 5,
    "nameKo": "수리둥보",
    "nameEn": "Rufflet",
    "types": [
      "노말",
      "비행"
    ],
    "stats": {
      "hp": 70,
      "attack": 83,
      "defense": 50,
      "specialAttack": 37,
      "specialDefense": 50,
      "speed": 60
    },
    "category": "새끼독수리 포켓몬",
    "heightM": 0.5,
    "weightKg": 10.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/627.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/627.png"
  },
  {
    "id": 628,
    "dexNumber": 628,
    "generation": 5,
    "nameKo": "워글",
    "nameEn": "Braviary",
    "types": [
      "노말",
      "비행"
    ],
    "stats": {
      "hp": 100,
      "attack": 123,
      "defense": 75,
      "specialAttack": 57,
      "specialDefense": 75,
      "speed": 80
    },
    "category": "용맹 포켓몬",
    "heightM": 1.5,
    "weightKg": 41,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/628.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/628.png"
  },
  {
    "id": 629,
    "dexNumber": 629,
    "generation": 5,
    "nameKo": "벌차이",
    "nameEn": "Vullaby",
    "types": [
      "악",
      "비행"
    ],
    "stats": {
      "hp": 70,
      "attack": 55,
      "defense": 75,
      "specialAttack": 45,
      "specialDefense": 65,
      "speed": 60
    },
    "category": "기저귀 포켓몬",
    "heightM": 0.5,
    "weightKg": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/629.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/629.png"
  },
  {
    "id": 630,
    "dexNumber": 630,
    "generation": 5,
    "nameKo": "버랜지나",
    "nameEn": "Mandibuzz",
    "types": [
      "악",
      "비행"
    ],
    "stats": {
      "hp": 110,
      "attack": 65,
      "defense": 105,
      "specialAttack": 55,
      "specialDefense": 95,
      "speed": 80
    },
    "category": "뼈독수리 포켓몬",
    "heightM": 1.2,
    "weightKg": 39.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/630.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/630.png"
  },
  {
    "id": 631,
    "dexNumber": 631,
    "generation": 5,
    "nameKo": "앤티골",
    "nameEn": "Heatmor",
    "types": [
      "불꽃"
    ],
    "stats": {
      "hp": 85,
      "attack": 97,
      "defense": 66,
      "specialAttack": 105,
      "specialDefense": 66,
      "speed": 65
    },
    "category": "개미핥기 포켓몬",
    "heightM": 1.4,
    "weightKg": 58,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/631.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/631.png"
  },
  {
    "id": 632,
    "dexNumber": 632,
    "generation": 5,
    "nameKo": "아이앤트",
    "nameEn": "Durant",
    "types": [
      "벌레",
      "강철"
    ],
    "stats": {
      "hp": 58,
      "attack": 109,
      "defense": 112,
      "specialAttack": 48,
      "specialDefense": 48,
      "speed": 109
    },
    "category": "철개미 포켓몬",
    "heightM": 0.3,
    "weightKg": 33,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/632.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/632.png"
  },
  {
    "id": 633,
    "dexNumber": 633,
    "generation": 5,
    "nameKo": "모노두",
    "nameEn": "Deino",
    "types": [
      "악",
      "드래곤"
    ],
    "stats": {
      "hp": 52,
      "attack": 65,
      "defense": 50,
      "specialAttack": 45,
      "specialDefense": 50,
      "speed": 38
    },
    "category": "폭거 포켓몬",
    "heightM": 0.8,
    "weightKg": 17.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/633.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/633.png"
  },
  {
    "id": 634,
    "dexNumber": 634,
    "generation": 5,
    "nameKo": "디헤드",
    "nameEn": "Zweilous",
    "types": [
      "악",
      "드래곤"
    ],
    "stats": {
      "hp": 72,
      "attack": 85,
      "defense": 70,
      "specialAttack": 65,
      "specialDefense": 70,
      "speed": 58
    },
    "category": "흉포 포켓몬",
    "heightM": 1.4,
    "weightKg": 50,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/634.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/634.png"
  },
  {
    "id": 635,
    "dexNumber": 635,
    "generation": 5,
    "nameKo": "삼삼드래",
    "nameEn": "Hydreigon",
    "types": [
      "악",
      "드래곤"
    ],
    "stats": {
      "hp": 92,
      "attack": 105,
      "defense": 90,
      "specialAttack": 125,
      "specialDefense": 90,
      "speed": 98
    },
    "category": "난폭 포켓몬",
    "heightM": 1.8,
    "weightKg": 160,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/635.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/635.png"
  },
  {
    "id": 636,
    "dexNumber": 636,
    "generation": 5,
    "nameKo": "활화르바",
    "nameEn": "Larvesta",
    "types": [
      "벌레",
      "불꽃"
    ],
    "stats": {
      "hp": 55,
      "attack": 85,
      "defense": 55,
      "specialAttack": 50,
      "specialDefense": 55,
      "speed": 60
    },
    "category": "횃불 포켓몬",
    "heightM": 1.1,
    "weightKg": 28.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/636.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/636.png"
  },
  {
    "id": 637,
    "dexNumber": 637,
    "generation": 5,
    "nameKo": "불카모스",
    "nameEn": "Volcarona",
    "types": [
      "벌레",
      "불꽃"
    ],
    "stats": {
      "hp": 85,
      "attack": 60,
      "defense": 65,
      "specialAttack": 135,
      "specialDefense": 105,
      "speed": 100
    },
    "category": "태양 포켓몬",
    "heightM": 1.6,
    "weightKg": 46,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/637.png"
  },
  {
    "id": 638,
    "dexNumber": 638,
    "generation": 5,
    "nameKo": "코바르온",
    "nameEn": "Cobalion",
    "types": [
      "강철",
      "격투"
    ],
    "stats": {
      "hp": 91,
      "attack": 90,
      "defense": 129,
      "specialAttack": 90,
      "specialDefense": 72,
      "speed": 108
    },
    "category": "철심 포켓몬",
    "heightM": 2.1,
    "weightKg": 250,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/638.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/638.png"
  },
  {
    "id": 639,
    "dexNumber": 639,
    "generation": 5,
    "nameKo": "테라키온",
    "nameEn": "Terrakion",
    "types": [
      "바위",
      "격투"
    ],
    "stats": {
      "hp": 91,
      "attack": 129,
      "defense": 90,
      "specialAttack": 72,
      "specialDefense": 90,
      "speed": 108
    },
    "category": "암굴 포켓몬",
    "heightM": 1.9,
    "weightKg": 260,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/639.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/639.png"
  },
  {
    "id": 640,
    "dexNumber": 640,
    "generation": 5,
    "nameKo": "비리디온",
    "nameEn": "Virizion",
    "types": [
      "풀",
      "격투"
    ],
    "stats": {
      "hp": 91,
      "attack": 90,
      "defense": 72,
      "specialAttack": 90,
      "specialDefense": 129,
      "speed": 108
    },
    "category": "초원 포켓몬",
    "heightM": 2,
    "weightKg": 200,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/640.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/640.png"
  },
  {
    "id": 641,
    "dexNumber": 641,
    "generation": 5,
    "nameKo": "토네로스",
    "nameEn": "Tornadus",
    "types": [
      "비행"
    ],
    "stats": {
      "hp": 79,
      "attack": 115,
      "defense": 70,
      "specialAttack": 125,
      "specialDefense": 80,
      "speed": 111
    },
    "category": "선풍 포켓몬",
    "heightM": 1.5,
    "weightKg": 63,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/641.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/641.png"
  },
  {
    "id": 642,
    "dexNumber": 642,
    "generation": 5,
    "nameKo": "볼트로스",
    "nameEn": "Thundurus",
    "types": [
      "전기",
      "비행"
    ],
    "stats": {
      "hp": 79,
      "attack": 115,
      "defense": 70,
      "specialAttack": 125,
      "specialDefense": 80,
      "speed": 111
    },
    "category": "뇌격 포켓몬",
    "heightM": 1.5,
    "weightKg": 61,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/642.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/642.png"
  },
  {
    "id": 643,
    "dexNumber": 643,
    "generation": 5,
    "nameKo": "레시라무",
    "nameEn": "Reshiram",
    "types": [
      "드래곤",
      "불꽃"
    ],
    "stats": {
      "hp": 100,
      "attack": 120,
      "defense": 100,
      "specialAttack": 150,
      "specialDefense": 120,
      "speed": 90
    },
    "category": "백양 포켓몬",
    "heightM": 3.2,
    "weightKg": 330,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/643.png"
  },
  {
    "id": 644,
    "dexNumber": 644,
    "generation": 5,
    "nameKo": "제크로무",
    "nameEn": "Zekrom",
    "types": [
      "드래곤",
      "전기"
    ],
    "stats": {
      "hp": 100,
      "attack": 150,
      "defense": 120,
      "specialAttack": 120,
      "specialDefense": 100,
      "speed": 90
    },
    "category": "흑음 포켓몬",
    "heightM": 2.9,
    "weightKg": 345,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/644.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/644.png"
  },
  {
    "id": 645,
    "dexNumber": 645,
    "generation": 5,
    "nameKo": "랜드로스",
    "nameEn": "Landorus",
    "types": [
      "땅",
      "비행"
    ],
    "stats": {
      "hp": 89,
      "attack": 125,
      "defense": 90,
      "specialAttack": 115,
      "specialDefense": 80,
      "speed": 101
    },
    "category": "풍요 포켓몬",
    "heightM": 1.5,
    "weightKg": 68,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/645.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/645.png"
  },
  {
    "id": 646,
    "dexNumber": 646,
    "generation": 5,
    "nameKo": "큐레무",
    "nameEn": "Kyurem",
    "types": [
      "드래곤",
      "얼음"
    ],
    "stats": {
      "hp": 125,
      "attack": 130,
      "defense": 90,
      "specialAttack": 130,
      "specialDefense": 90,
      "speed": 95
    },
    "category": "경계 포켓몬",
    "heightM": 3,
    "weightKg": 325,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/646.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/646.png"
  },
  {
    "id": 647,
    "dexNumber": 647,
    "generation": 5,
    "nameKo": "케르디오",
    "nameEn": "Keldeo",
    "types": [
      "물",
      "격투"
    ],
    "stats": {
      "hp": 91,
      "attack": 72,
      "defense": 90,
      "specialAttack": 129,
      "specialDefense": 90,
      "speed": 108
    },
    "category": "망아지 포켓몬",
    "heightM": 1.4,
    "weightKg": 48.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/647.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/647.png"
  },
  {
    "id": 648,
    "dexNumber": 648,
    "generation": 5,
    "nameKo": "메로엣타",
    "nameEn": "Meloetta",
    "types": [
      "노말",
      "에스퍼"
    ],
    "stats": {
      "hp": 100,
      "attack": 77,
      "defense": 77,
      "specialAttack": 128,
      "specialDefense": 128,
      "speed": 90
    },
    "category": "선율 포켓몬",
    "heightM": 0.6,
    "weightKg": 6.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/648.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/648.png"
  },
  {
    "id": 649,
    "dexNumber": 649,
    "generation": 5,
    "nameKo": "게노세크트",
    "nameEn": "Genesect",
    "types": [
      "벌레",
      "강철"
    ],
    "stats": {
      "hp": 71,
      "attack": 120,
      "defense": 95,
      "specialAttack": 120,
      "specialDefense": 95,
      "speed": 99
    },
    "category": "고생대 포켓몬",
    "heightM": 1.5,
    "weightKg": 82.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/649.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/649.png"
  },
  {
    "id": 650,
    "dexNumber": 650,
    "generation": 6,
    "nameKo": "도치마론",
    "nameEn": "Chespin",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 56,
      "attack": 61,
      "defense": 65,
      "specialAttack": 48,
      "specialDefense": 45,
      "speed": 38
    },
    "category": "밤송이 포켓몬",
    "heightM": 0.4,
    "weightKg": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/650.png"
  },
  {
    "id": 651,
    "dexNumber": 651,
    "generation": 6,
    "nameKo": "도치보구",
    "nameEn": "Quilladin",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 61,
      "attack": 78,
      "defense": 95,
      "specialAttack": 56,
      "specialDefense": 58,
      "speed": 57
    },
    "category": "가시갑옷 포켓몬",
    "heightM": 0.7,
    "weightKg": 29,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/651.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/651.png"
  },
  {
    "id": 652,
    "dexNumber": 652,
    "generation": 6,
    "nameKo": "브리가론",
    "nameEn": "Chesnaught",
    "types": [
      "풀",
      "격투"
    ],
    "stats": {
      "hp": 88,
      "attack": 107,
      "defense": 122,
      "specialAttack": 74,
      "specialDefense": 75,
      "speed": 64
    },
    "category": "가시갑옷 포켓몬",
    "heightM": 1.6,
    "weightKg": 90,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/652.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/652.png"
  },
  {
    "id": 653,
    "dexNumber": 653,
    "generation": 6,
    "nameKo": "푸호꼬",
    "nameEn": "Fennekin",
    "types": [
      "불꽃"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "specialAttack": 62,
      "specialDefense": 60,
      "speed": 60
    },
    "category": "여우 포켓몬",
    "heightM": 0.4,
    "weightKg": 9.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/653.png"
  },
  {
    "id": 654,
    "dexNumber": 654,
    "generation": 6,
    "nameKo": "테르나",
    "nameEn": "Braixen",
    "types": [
      "불꽃"
    ],
    "stats": {
      "hp": 59,
      "attack": 59,
      "defense": 58,
      "specialAttack": 90,
      "specialDefense": 70,
      "speed": 73
    },
    "category": "여우 포켓몬",
    "heightM": 1,
    "weightKg": 14.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/654.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/654.png"
  },
  {
    "id": 655,
    "dexNumber": 655,
    "generation": 6,
    "nameKo": "마폭시",
    "nameEn": "Delphox",
    "types": [
      "불꽃",
      "에스퍼"
    ],
    "stats": {
      "hp": 75,
      "attack": 69,
      "defense": 72,
      "specialAttack": 114,
      "specialDefense": 100,
      "speed": 104
    },
    "category": "여우 포켓몬",
    "heightM": 1.5,
    "weightKg": 39,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/655.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/655.png"
  },
  {
    "id": 656,
    "dexNumber": 656,
    "generation": 6,
    "nameKo": "개구마르",
    "nameEn": "Froakie",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 41,
      "attack": 56,
      "defense": 40,
      "specialAttack": 62,
      "specialDefense": 44,
      "speed": 71
    },
    "category": "거품개구리 포켓몬",
    "heightM": 0.3,
    "weightKg": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/656.png"
  },
  {
    "id": 657,
    "dexNumber": 657,
    "generation": 6,
    "nameKo": "개굴반장",
    "nameEn": "Frogadier",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 54,
      "attack": 63,
      "defense": 52,
      "specialAttack": 83,
      "specialDefense": 56,
      "speed": 97
    },
    "category": "거품개구리 포켓몬",
    "heightM": 0.6,
    "weightKg": 10.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/657.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/657.png"
  },
  {
    "id": 658,
    "dexNumber": 658,
    "generation": 6,
    "nameKo": "개굴닌자",
    "nameEn": "Greninja",
    "types": [
      "물",
      "악"
    ],
    "stats": {
      "hp": 72,
      "attack": 95,
      "defense": 67,
      "specialAttack": 103,
      "specialDefense": 71,
      "speed": 122
    },
    "category": "시노비 포켓몬",
    "heightM": 1.5,
    "weightKg": 40,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png"
  },
  {
    "id": 659,
    "dexNumber": 659,
    "generation": 6,
    "nameKo": "파르빗",
    "nameEn": "Bunnelby",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 38,
      "attack": 36,
      "defense": 38,
      "specialAttack": 32,
      "specialDefense": 36,
      "speed": 57
    },
    "category": "땅구멍파기 포켓몬",
    "heightM": 0.4,
    "weightKg": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/659.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/659.png"
  },
  {
    "id": 660,
    "dexNumber": 660,
    "generation": 6,
    "nameKo": "파르토",
    "nameEn": "Diggersby",
    "types": [
      "노말",
      "땅"
    ],
    "stats": {
      "hp": 85,
      "attack": 56,
      "defense": 77,
      "specialAttack": 50,
      "specialDefense": 77,
      "speed": 78
    },
    "category": "땅구멍파기 포켓몬",
    "heightM": 1,
    "weightKg": 42.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/660.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/660.png"
  },
  {
    "id": 661,
    "dexNumber": 661,
    "generation": 6,
    "nameKo": "화살꼬빈",
    "nameEn": "Fletchling",
    "types": [
      "노말",
      "비행"
    ],
    "stats": {
      "hp": 45,
      "attack": 50,
      "defense": 43,
      "specialAttack": 40,
      "specialDefense": 38,
      "speed": 62
    },
    "category": "울새 포켓몬",
    "heightM": 0.3,
    "weightKg": 1.7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/661.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/661.png"
  },
  {
    "id": 662,
    "dexNumber": 662,
    "generation": 6,
    "nameKo": "불화살빈",
    "nameEn": "Fletchinder",
    "types": [
      "불꽃",
      "비행"
    ],
    "stats": {
      "hp": 62,
      "attack": 73,
      "defense": 55,
      "specialAttack": 56,
      "specialDefense": 52,
      "speed": 84
    },
    "category": "불티 포켓몬",
    "heightM": 0.7,
    "weightKg": 16,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/662.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/662.png"
  },
  {
    "id": 663,
    "dexNumber": 663,
    "generation": 6,
    "nameKo": "파이어로",
    "nameEn": "Talonflame",
    "types": [
      "불꽃",
      "비행"
    ],
    "stats": {
      "hp": 78,
      "attack": 81,
      "defense": 71,
      "specialAttack": 74,
      "specialDefense": 69,
      "speed": 126
    },
    "category": "열화 포켓몬",
    "heightM": 1.2,
    "weightKg": 24.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/663.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/663.png"
  },
  {
    "id": 664,
    "dexNumber": 664,
    "generation": 6,
    "nameKo": "분이벌레",
    "nameEn": "Scatterbug",
    "types": [
      "벌레"
    ],
    "stats": {
      "hp": 38,
      "attack": 35,
      "defense": 40,
      "specialAttack": 27,
      "specialDefense": 25,
      "speed": 35
    },
    "category": "가루뿜기 포켓몬",
    "heightM": 0.3,
    "weightKg": 2.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/664.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/664.png"
  },
  {
    "id": 665,
    "dexNumber": 665,
    "generation": 6,
    "nameKo": "분떠도리",
    "nameEn": "Spewpa",
    "types": [
      "벌레"
    ],
    "stats": {
      "hp": 45,
      "attack": 22,
      "defense": 60,
      "specialAttack": 27,
      "specialDefense": 30,
      "speed": 29
    },
    "category": "가루뿜기 포켓몬",
    "heightM": 0.3,
    "weightKg": 8.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/665.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/665.png"
  },
  {
    "id": 666,
    "dexNumber": 666,
    "generation": 6,
    "nameKo": "비비용",
    "nameEn": "Vivillon",
    "types": [
      "벌레",
      "비행"
    ],
    "stats": {
      "hp": 80,
      "attack": 52,
      "defense": 50,
      "specialAttack": 90,
      "specialDefense": 50,
      "speed": 89
    },
    "category": "인분 포켓몬",
    "heightM": 1.2,
    "weightKg": 17,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/666.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/666.png"
  },
  {
    "id": 667,
    "dexNumber": 667,
    "generation": 6,
    "nameKo": "레오꼬",
    "nameEn": "Litleo",
    "types": [
      "불꽃",
      "노말"
    ],
    "stats": {
      "hp": 62,
      "attack": 50,
      "defense": 58,
      "specialAttack": 73,
      "specialDefense": 54,
      "speed": 72
    },
    "category": "어린사자 포켓몬",
    "heightM": 0.6,
    "weightKg": 13.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/667.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/667.png"
  },
  {
    "id": 668,
    "dexNumber": 668,
    "generation": 6,
    "nameKo": "화염레오",
    "nameEn": "Pyroar",
    "types": [
      "불꽃",
      "노말"
    ],
    "stats": {
      "hp": 86,
      "attack": 68,
      "defense": 72,
      "specialAttack": 109,
      "specialDefense": 66,
      "speed": 106
    },
    "category": "임금 포켓몬",
    "heightM": 1.5,
    "weightKg": 81.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/668.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/668.png"
  },
  {
    "id": 669,
    "dexNumber": 669,
    "generation": 6,
    "nameKo": "플라베베",
    "nameEn": "Flabébé",
    "types": [
      "페어리"
    ],
    "stats": {
      "hp": 44,
      "attack": 38,
      "defense": 39,
      "specialAttack": 61,
      "specialDefense": 79,
      "speed": 42
    },
    "category": "한송이 포켓몬",
    "heightM": 0.1,
    "weightKg": 0.1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/669.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/669.png"
  },
  {
    "id": 670,
    "dexNumber": 670,
    "generation": 6,
    "nameKo": "플라엣테",
    "nameEn": "Floette",
    "types": [
      "페어리"
    ],
    "stats": {
      "hp": 54,
      "attack": 45,
      "defense": 47,
      "specialAttack": 75,
      "specialDefense": 98,
      "speed": 52
    },
    "category": "한송이 포켓몬",
    "heightM": 0.2,
    "weightKg": 0.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/670.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/670.png"
  },
  {
    "id": 671,
    "dexNumber": 671,
    "generation": 6,
    "nameKo": "플라제스",
    "nameEn": "Florges",
    "types": [
      "페어리"
    ],
    "stats": {
      "hp": 78,
      "attack": 65,
      "defense": 68,
      "specialAttack": 112,
      "specialDefense": 154,
      "speed": 75
    },
    "category": "가든 포켓몬",
    "heightM": 1.1,
    "weightKg": 10,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/671.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/671.png"
  },
  {
    "id": 672,
    "dexNumber": 672,
    "generation": 6,
    "nameKo": "메이클",
    "nameEn": "Skiddo",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 66,
      "attack": 65,
      "defense": 48,
      "specialAttack": 62,
      "specialDefense": 57,
      "speed": 52
    },
    "category": "라이드 포켓몬",
    "heightM": 0.9,
    "weightKg": 31,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/672.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/672.png"
  },
  {
    "id": 673,
    "dexNumber": 673,
    "generation": 6,
    "nameKo": "고고트",
    "nameEn": "Gogoat",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 123,
      "attack": 100,
      "defense": 62,
      "specialAttack": 97,
      "specialDefense": 81,
      "speed": 68
    },
    "category": "라이드 포켓몬",
    "heightM": 1.7,
    "weightKg": 91,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/673.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/673.png"
  },
  {
    "id": 674,
    "dexNumber": 674,
    "generation": 6,
    "nameKo": "판짱",
    "nameEn": "Pancham",
    "types": [
      "격투"
    ],
    "stats": {
      "hp": 67,
      "attack": 82,
      "defense": 62,
      "specialAttack": 46,
      "specialDefense": 48,
      "speed": 43
    },
    "category": "개구쟁이 포켓몬",
    "heightM": 0.6,
    "weightKg": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/674.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/674.png"
  },
  {
    "id": 675,
    "dexNumber": 675,
    "generation": 6,
    "nameKo": "부란다",
    "nameEn": "Pangoro",
    "types": [
      "격투",
      "악"
    ],
    "stats": {
      "hp": 95,
      "attack": 124,
      "defense": 78,
      "specialAttack": 69,
      "specialDefense": 71,
      "speed": 58
    },
    "category": "무서운얼굴 포켓몬",
    "heightM": 2.1,
    "weightKg": 136,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/675.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/675.png"
  },
  {
    "id": 676,
    "dexNumber": 676,
    "generation": 6,
    "nameKo": "트리미앙",
    "nameEn": "Furfrou",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 60,
      "specialAttack": 65,
      "specialDefense": 90,
      "speed": 102
    },
    "category": "푸들 포켓몬",
    "heightM": 1.2,
    "weightKg": 28,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/676.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/676.png"
  },
  {
    "id": 677,
    "dexNumber": 677,
    "generation": 6,
    "nameKo": "냐스퍼",
    "nameEn": "Espurr",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 62,
      "attack": 48,
      "defense": 54,
      "specialAttack": 63,
      "specialDefense": 60,
      "speed": 68
    },
    "category": "자제 포켓몬",
    "heightM": 0.3,
    "weightKg": 3.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/677.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/677.png"
  },
  {
    "id": 678,
    "dexNumber": 678,
    "generation": 6,
    "nameKo": "냐오닉스",
    "nameEn": "Meowstic",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 74,
      "attack": 48,
      "defense": 76,
      "specialAttack": 83,
      "specialDefense": 81,
      "speed": 104
    },
    "category": "억제 포켓몬",
    "heightM": 0.6,
    "weightKg": 8.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/678.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/678.png"
  },
  {
    "id": 679,
    "dexNumber": 679,
    "generation": 6,
    "nameKo": "단칼빙",
    "nameEn": "Honedge",
    "types": [
      "강철",
      "고스트"
    ],
    "stats": {
      "hp": 45,
      "attack": 80,
      "defense": 100,
      "specialAttack": 35,
      "specialDefense": 37,
      "speed": 28
    },
    "category": "도검 포켓몬",
    "heightM": 0.8,
    "weightKg": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/679.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/679.png"
  },
  {
    "id": 680,
    "dexNumber": 680,
    "generation": 6,
    "nameKo": "쌍검킬",
    "nameEn": "Doublade",
    "types": [
      "강철",
      "고스트"
    ],
    "stats": {
      "hp": 59,
      "attack": 110,
      "defense": 150,
      "specialAttack": 45,
      "specialDefense": 49,
      "speed": 35
    },
    "category": "도검 포켓몬",
    "heightM": 0.8,
    "weightKg": 4.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/680.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/680.png"
  },
  {
    "id": 681,
    "dexNumber": 681,
    "generation": 6,
    "nameKo": "킬가르도",
    "nameEn": "Aegislash",
    "types": [
      "강철",
      "고스트"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 140,
      "specialAttack": 50,
      "specialDefense": 140,
      "speed": 60
    },
    "category": "왕검 포켓몬",
    "heightM": 1.7,
    "weightKg": 53,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/681.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/681.png"
  },
  {
    "id": 682,
    "dexNumber": 682,
    "generation": 6,
    "nameKo": "슈쁘",
    "nameEn": "Spritzee",
    "types": [
      "페어리"
    ],
    "stats": {
      "hp": 78,
      "attack": 52,
      "defense": 60,
      "specialAttack": 63,
      "specialDefense": 65,
      "speed": 23
    },
    "category": "향수 포켓몬",
    "heightM": 0.2,
    "weightKg": 0.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/682.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/682.png"
  },
  {
    "id": 683,
    "dexNumber": 683,
    "generation": 6,
    "nameKo": "프레프티르",
    "nameEn": "Aromatisse",
    "types": [
      "페어리"
    ],
    "stats": {
      "hp": 101,
      "attack": 72,
      "defense": 72,
      "specialAttack": 99,
      "specialDefense": 89,
      "speed": 29
    },
    "category": "방향 포켓몬",
    "heightM": 0.8,
    "weightKg": 15.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/683.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/683.png"
  },
  {
    "id": 684,
    "dexNumber": 684,
    "generation": 6,
    "nameKo": "나룸퍼프",
    "nameEn": "Swirlix",
    "types": [
      "페어리"
    ],
    "stats": {
      "hp": 62,
      "attack": 48,
      "defense": 66,
      "specialAttack": 59,
      "specialDefense": 57,
      "speed": 49
    },
    "category": "솜사탕 포켓몬",
    "heightM": 0.4,
    "weightKg": 3.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/684.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/684.png"
  },
  {
    "id": 685,
    "dexNumber": 685,
    "generation": 6,
    "nameKo": "나루림",
    "nameEn": "Slurpuff",
    "types": [
      "페어리"
    ],
    "stats": {
      "hp": 82,
      "attack": 80,
      "defense": 86,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 72
    },
    "category": "휩 포켓몬",
    "heightM": 0.8,
    "weightKg": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/685.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/685.png"
  },
  {
    "id": 686,
    "dexNumber": 686,
    "generation": 6,
    "nameKo": "오케이징",
    "nameEn": "Inkay",
    "types": [
      "악",
      "에스퍼"
    ],
    "stats": {
      "hp": 53,
      "attack": 54,
      "defense": 53,
      "specialAttack": 37,
      "specialDefense": 46,
      "speed": 45
    },
    "category": "회전 포켓몬",
    "heightM": 0.4,
    "weightKg": 3.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/686.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/686.png"
  },
  {
    "id": 687,
    "dexNumber": 687,
    "generation": 6,
    "nameKo": "칼라마네로",
    "nameEn": "Malamar",
    "types": [
      "악",
      "에스퍼"
    ],
    "stats": {
      "hp": 86,
      "attack": 92,
      "defense": 88,
      "specialAttack": 68,
      "specialDefense": 75,
      "speed": 73
    },
    "category": "역전 포켓몬",
    "heightM": 1.5,
    "weightKg": 47,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/687.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/687.png"
  },
  {
    "id": 688,
    "dexNumber": 688,
    "generation": 6,
    "nameKo": "거북손손",
    "nameEn": "Binacle",
    "types": [
      "바위",
      "물"
    ],
    "stats": {
      "hp": 42,
      "attack": 52,
      "defense": 67,
      "specialAttack": 39,
      "specialDefense": 56,
      "speed": 50
    },
    "category": "두손 포켓몬",
    "heightM": 0.5,
    "weightKg": 31,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/688.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/688.png"
  },
  {
    "id": 689,
    "dexNumber": 689,
    "generation": 6,
    "nameKo": "거북손데스",
    "nameEn": "Barbaracle",
    "types": [
      "바위",
      "물"
    ],
    "stats": {
      "hp": 72,
      "attack": 105,
      "defense": 115,
      "specialAttack": 54,
      "specialDefense": 86,
      "speed": 68
    },
    "category": "집합 포켓몬",
    "heightM": 1.3,
    "weightKg": 96,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/689.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/689.png"
  },
  {
    "id": 690,
    "dexNumber": 690,
    "generation": 6,
    "nameKo": "수레기",
    "nameEn": "Skrelp",
    "types": [
      "독",
      "물"
    ],
    "stats": {
      "hp": 50,
      "attack": 60,
      "defense": 60,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 30
    },
    "category": "풀모방 포켓몬",
    "heightM": 0.5,
    "weightKg": 7.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/690.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/690.png"
  },
  {
    "id": 691,
    "dexNumber": 691,
    "generation": 6,
    "nameKo": "드래캄",
    "nameEn": "Dragalge",
    "types": [
      "독",
      "드래곤"
    ],
    "stats": {
      "hp": 65,
      "attack": 75,
      "defense": 90,
      "specialAttack": 97,
      "specialDefense": 123,
      "speed": 44
    },
    "category": "풀모방 포켓몬",
    "heightM": 1.8,
    "weightKg": 81.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/691.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/691.png"
  },
  {
    "id": 692,
    "dexNumber": 692,
    "generation": 6,
    "nameKo": "완철포",
    "nameEn": "Clauncher",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 50,
      "attack": 53,
      "defense": 62,
      "specialAttack": 58,
      "specialDefense": 63,
      "speed": 44
    },
    "category": "물대포 포켓몬",
    "heightM": 0.5,
    "weightKg": 8.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/692.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/692.png"
  },
  {
    "id": 693,
    "dexNumber": 693,
    "generation": 6,
    "nameKo": "블로스터",
    "nameEn": "Clawitzer",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 71,
      "attack": 73,
      "defense": 88,
      "specialAttack": 120,
      "specialDefense": 89,
      "speed": 59
    },
    "category": "런처 포켓몬",
    "heightM": 1.3,
    "weightKg": 35.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/693.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/693.png"
  },
  {
    "id": 694,
    "dexNumber": 694,
    "generation": 6,
    "nameKo": "목도리키텔",
    "nameEn": "Helioptile",
    "types": [
      "전기",
      "노말"
    ],
    "stats": {
      "hp": 44,
      "attack": 38,
      "defense": 33,
      "specialAttack": 61,
      "specialDefense": 43,
      "speed": 70
    },
    "category": "발전 포켓몬",
    "heightM": 0.5,
    "weightKg": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/694.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/694.png"
  },
  {
    "id": 695,
    "dexNumber": 695,
    "generation": 6,
    "nameKo": "일레도리자드",
    "nameEn": "Heliolisk",
    "types": [
      "전기",
      "노말"
    ],
    "stats": {
      "hp": 62,
      "attack": 55,
      "defense": 52,
      "specialAttack": 109,
      "specialDefense": 94,
      "speed": 109
    },
    "category": "발전 포켓몬",
    "heightM": 1,
    "weightKg": 21,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/695.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/695.png"
  },
  {
    "id": 696,
    "dexNumber": 696,
    "generation": 6,
    "nameKo": "티고라스",
    "nameEn": "Tyrunt",
    "types": [
      "바위",
      "드래곤"
    ],
    "stats": {
      "hp": 58,
      "attack": 89,
      "defense": 77,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 48
    },
    "category": "유군 포켓몬",
    "heightM": 0.8,
    "weightKg": 26,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/696.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/696.png"
  },
  {
    "id": 697,
    "dexNumber": 697,
    "generation": 6,
    "nameKo": "견고라스",
    "nameEn": "Tyrantrum",
    "types": [
      "바위",
      "드래곤"
    ],
    "stats": {
      "hp": 82,
      "attack": 121,
      "defense": 119,
      "specialAttack": 69,
      "specialDefense": 59,
      "speed": 71
    },
    "category": "폭군 포켓몬",
    "heightM": 2.5,
    "weightKg": 270,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/697.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/697.png"
  },
  {
    "id": 698,
    "dexNumber": 698,
    "generation": 6,
    "nameKo": "아마루스",
    "nameEn": "Amaura",
    "types": [
      "바위",
      "얼음"
    ],
    "stats": {
      "hp": 77,
      "attack": 59,
      "defense": 50,
      "specialAttack": 67,
      "specialDefense": 63,
      "speed": 46
    },
    "category": "툰드라 포켓몬",
    "heightM": 1.3,
    "weightKg": 25.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/698.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/698.png"
  },
  {
    "id": 699,
    "dexNumber": 699,
    "generation": 6,
    "nameKo": "아마루르가",
    "nameEn": "Aurorus",
    "types": [
      "바위",
      "얼음"
    ],
    "stats": {
      "hp": 123,
      "attack": 77,
      "defense": 72,
      "specialAttack": 99,
      "specialDefense": 92,
      "speed": 58
    },
    "category": "툰드라 포켓몬",
    "heightM": 2.7,
    "weightKg": 225,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/699.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/699.png"
  },
  {
    "id": 700,
    "dexNumber": 700,
    "generation": 6,
    "nameKo": "님피아",
    "nameEn": "Sylveon",
    "types": [
      "페어리"
    ],
    "stats": {
      "hp": 95,
      "attack": 65,
      "defense": 65,
      "specialAttack": 110,
      "specialDefense": 130,
      "speed": 60
    },
    "category": "연결 포켓몬",
    "heightM": 1,
    "weightKg": 23.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/700.png"
  },
  {
    "id": 701,
    "dexNumber": 701,
    "generation": 6,
    "nameKo": "루차불",
    "nameEn": "Hawlucha",
    "types": [
      "격투",
      "비행"
    ],
    "stats": {
      "hp": 78,
      "attack": 92,
      "defense": 75,
      "specialAttack": 74,
      "specialDefense": 63,
      "speed": 118
    },
    "category": "레슬링 포켓몬",
    "heightM": 0.8,
    "weightKg": 21.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/701.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/701.png"
  },
  {
    "id": 702,
    "dexNumber": 702,
    "generation": 6,
    "nameKo": "데덴네",
    "nameEn": "Dedenne",
    "types": [
      "전기",
      "페어리"
    ],
    "stats": {
      "hp": 67,
      "attack": 58,
      "defense": 57,
      "specialAttack": 81,
      "specialDefense": 67,
      "speed": 101
    },
    "category": "안테나 포켓몬",
    "heightM": 0.2,
    "weightKg": 2.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/702.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/702.png"
  },
  {
    "id": 703,
    "dexNumber": 703,
    "generation": 6,
    "nameKo": "멜리시",
    "nameEn": "Carbink",
    "types": [
      "바위",
      "페어리"
    ],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 150,
      "specialAttack": 50,
      "specialDefense": 150,
      "speed": 50
    },
    "category": "보석 포켓몬",
    "heightM": 0.3,
    "weightKg": 5.7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/703.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/703.png"
  },
  {
    "id": 704,
    "dexNumber": 704,
    "generation": 6,
    "nameKo": "미끄메라",
    "nameEn": "Goomy",
    "types": [
      "드래곤"
    ],
    "stats": {
      "hp": 45,
      "attack": 50,
      "defense": 35,
      "specialAttack": 55,
      "specialDefense": 75,
      "speed": 40
    },
    "category": "연체 포켓몬",
    "heightM": 0.3,
    "weightKg": 2.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/704.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/704.png"
  },
  {
    "id": 705,
    "dexNumber": 705,
    "generation": 6,
    "nameKo": "미끄네일",
    "nameEn": "Sliggoo",
    "types": [
      "드래곤"
    ],
    "stats": {
      "hp": 68,
      "attack": 75,
      "defense": 53,
      "specialAttack": 83,
      "specialDefense": 113,
      "speed": 60
    },
    "category": "연체 포켓몬",
    "heightM": 0.8,
    "weightKg": 17.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/705.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/705.png"
  },
  {
    "id": 706,
    "dexNumber": 706,
    "generation": 6,
    "nameKo": "미끄래곤",
    "nameEn": "Goodra",
    "types": [
      "드래곤"
    ],
    "stats": {
      "hp": 90,
      "attack": 100,
      "defense": 70,
      "specialAttack": 110,
      "specialDefense": 150,
      "speed": 80
    },
    "category": "드래곤 포켓몬",
    "heightM": 2,
    "weightKg": 150.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/706.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/706.png"
  },
  {
    "id": 707,
    "dexNumber": 707,
    "generation": 6,
    "nameKo": "클레피",
    "nameEn": "Klefki",
    "types": [
      "강철",
      "페어리"
    ],
    "stats": {
      "hp": 57,
      "attack": 80,
      "defense": 91,
      "specialAttack": 80,
      "specialDefense": 87,
      "speed": 75
    },
    "category": "열쇠꾸러미 포켓몬",
    "heightM": 0.2,
    "weightKg": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/707.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/707.png"
  },
  {
    "id": 708,
    "dexNumber": 708,
    "generation": 6,
    "nameKo": "나목령",
    "nameEn": "Phantump",
    "types": [
      "고스트",
      "풀"
    ],
    "stats": {
      "hp": 43,
      "attack": 70,
      "defense": 48,
      "specialAttack": 50,
      "specialDefense": 60,
      "speed": 38
    },
    "category": "그루터기 포켓몬",
    "heightM": 0.4,
    "weightKg": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/708.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/708.png"
  },
  {
    "id": 709,
    "dexNumber": 709,
    "generation": 6,
    "nameKo": "대로트",
    "nameEn": "Trevenant",
    "types": [
      "고스트",
      "풀"
    ],
    "stats": {
      "hp": 85,
      "attack": 110,
      "defense": 76,
      "specialAttack": 65,
      "specialDefense": 82,
      "speed": 56
    },
    "category": "고목 포켓몬",
    "heightM": 1.5,
    "weightKg": 71,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/709.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/709.png"
  },
  {
    "id": 710,
    "dexNumber": 710,
    "generation": 6,
    "nameKo": "호바귀",
    "nameEn": "Pumpkaboo",
    "types": [
      "고스트",
      "풀"
    ],
    "stats": {
      "hp": 49,
      "attack": 66,
      "defense": 70,
      "specialAttack": 44,
      "specialDefense": 55,
      "speed": 51
    },
    "category": "호박 포켓몬",
    "heightM": 0.4,
    "weightKg": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/710.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/710.png"
  },
  {
    "id": 711,
    "dexNumber": 711,
    "generation": 6,
    "nameKo": "펌킨인",
    "nameEn": "Gourgeist",
    "types": [
      "고스트",
      "풀"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 122,
      "specialAttack": 58,
      "specialDefense": 75,
      "speed": 84
    },
    "category": "호박 포켓몬",
    "heightM": 0.9,
    "weightKg": 12.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/711.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/711.png"
  },
  {
    "id": 712,
    "dexNumber": 712,
    "generation": 6,
    "nameKo": "꽁어름",
    "nameEn": "Bergmite",
    "types": [
      "얼음"
    ],
    "stats": {
      "hp": 55,
      "attack": 69,
      "defense": 85,
      "specialAttack": 32,
      "specialDefense": 35,
      "speed": 28
    },
    "category": "얼음덩이 포켓몬",
    "heightM": 1,
    "weightKg": 99.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/712.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/712.png"
  },
  {
    "id": 713,
    "dexNumber": 713,
    "generation": 6,
    "nameKo": "크레베이스",
    "nameEn": "Avalugg",
    "types": [
      "얼음"
    ],
    "stats": {
      "hp": 95,
      "attack": 117,
      "defense": 184,
      "specialAttack": 44,
      "specialDefense": 46,
      "speed": 28
    },
    "category": "빙산 포켓몬",
    "heightM": 2,
    "weightKg": 505,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/713.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/713.png"
  },
  {
    "id": 714,
    "dexNumber": 714,
    "generation": 6,
    "nameKo": "음뱃",
    "nameEn": "Noibat",
    "types": [
      "비행",
      "드래곤"
    ],
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 35,
      "specialAttack": 45,
      "specialDefense": 40,
      "speed": 55
    },
    "category": "음파 포켓몬",
    "heightM": 0.5,
    "weightKg": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/714.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/714.png"
  },
  {
    "id": 715,
    "dexNumber": 715,
    "generation": 6,
    "nameKo": "음번",
    "nameEn": "Noivern",
    "types": [
      "비행",
      "드래곤"
    ],
    "stats": {
      "hp": 85,
      "attack": 70,
      "defense": 80,
      "specialAttack": 97,
      "specialDefense": 80,
      "speed": 123
    },
    "category": "음파 포켓몬",
    "heightM": 1.5,
    "weightKg": 85,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/715.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/715.png"
  },
  {
    "id": 716,
    "dexNumber": 716,
    "generation": 6,
    "nameKo": "제르네아스",
    "nameEn": "Xerneas",
    "types": [
      "페어리"
    ],
    "stats": {
      "hp": 126,
      "attack": 131,
      "defense": 95,
      "specialAttack": 131,
      "specialDefense": 98,
      "speed": 99
    },
    "category": "생명 포켓몬",
    "heightM": 3,
    "weightKg": 215,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/716.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/716.png"
  },
  {
    "id": 717,
    "dexNumber": 717,
    "generation": 6,
    "nameKo": "이벨타르",
    "nameEn": "Yveltal",
    "types": [
      "악",
      "비행"
    ],
    "stats": {
      "hp": 126,
      "attack": 131,
      "defense": 95,
      "specialAttack": 131,
      "specialDefense": 98,
      "speed": 99
    },
    "category": "파괴 포켓몬",
    "heightM": 5.8,
    "weightKg": 203,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/717.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/717.png"
  },
  {
    "id": 718,
    "dexNumber": 718,
    "generation": 6,
    "nameKo": "지가르데",
    "nameEn": "Zygarde",
    "types": [
      "드래곤",
      "땅"
    ],
    "stats": {
      "hp": 108,
      "attack": 100,
      "defense": 121,
      "specialAttack": 81,
      "specialDefense": 95,
      "speed": 95
    },
    "category": "질서 포켓몬",
    "heightM": 5,
    "weightKg": 305,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/718.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/718.png"
  },
  {
    "id": 719,
    "dexNumber": 719,
    "generation": 6,
    "nameKo": "디안시",
    "nameEn": "Diancie",
    "types": [
      "바위",
      "페어리"
    ],
    "stats": {
      "hp": 50,
      "attack": 100,
      "defense": 150,
      "specialAttack": 100,
      "specialDefense": 150,
      "speed": 50
    },
    "category": "보석 포켓몬",
    "heightM": 0.7,
    "weightKg": 8.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/719.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/719.png",
    "megaForms": [
      {
        "label": "메가디안시",
        "types": [
          "바위",
          "페어리"
        ],
        "stats": {
          "hp": 50,
          "attack": 160,
          "defense": 110,
          "specialAttack": 160,
          "specialDefense": 110,
          "speed": 110
        },
        "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10075.png",
        "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10075.png"
      }
    ]
  },
  {
    "id": 720,
    "dexNumber": 720,
    "generation": 6,
    "nameKo": "후파",
    "nameEn": "Hoopa",
    "types": [
      "에스퍼",
      "고스트"
    ],
    "stats": {
      "hp": 80,
      "attack": 110,
      "defense": 60,
      "specialAttack": 150,
      "specialDefense": 130,
      "speed": 70
    },
    "category": "장난 포켓몬",
    "heightM": 0.5,
    "weightKg": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/720.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/720.png"
  },
  {
    "id": 721,
    "dexNumber": 721,
    "generation": 6,
    "nameKo": "볼케니온",
    "nameEn": "Volcanion",
    "types": [
      "불꽃",
      "물"
    ],
    "stats": {
      "hp": 80,
      "attack": 110,
      "defense": 120,
      "specialAttack": 130,
      "specialDefense": 90,
      "speed": 70
    },
    "category": "스팀 포켓몬",
    "heightM": 1.7,
    "weightKg": 195,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/721.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/721.png"
  },
  {
    "id": 722,
    "dexNumber": 722,
    "generation": 7,
    "nameKo": "나몰빼미",
    "nameEn": "Rowlet",
    "types": [
      "풀",
      "비행"
    ],
    "stats": {
      "hp": 68,
      "attack": 55,
      "defense": 55,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 42
    },
    "category": "풀깃 포켓몬",
    "heightM": 0.3,
    "weightKg": 1.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/722.png"
  },
  {
    "id": 723,
    "dexNumber": 723,
    "generation": 7,
    "nameKo": "빼미스로우",
    "nameEn": "Dartrix",
    "types": [
      "풀",
      "비행"
    ],
    "stats": {
      "hp": 78,
      "attack": 75,
      "defense": 75,
      "specialAttack": 70,
      "specialDefense": 70,
      "speed": 52
    },
    "category": "칼날깃 포켓몬",
    "heightM": 0.7,
    "weightKg": 16,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/723.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/723.png"
  },
  {
    "id": 724,
    "dexNumber": 724,
    "generation": 7,
    "nameKo": "모크나이퍼",
    "nameEn": "Decidueye",
    "types": [
      "풀",
      "고스트"
    ],
    "stats": {
      "hp": 78,
      "attack": 107,
      "defense": 75,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 70
    },
    "category": "화살깃 포켓몬",
    "heightM": 1.6,
    "weightKg": 36.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/724.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/724.png"
  },
  {
    "id": 725,
    "dexNumber": 725,
    "generation": 7,
    "nameKo": "냐오불",
    "nameEn": "Litten",
    "types": [
      "불꽃"
    ],
    "stats": {
      "hp": 45,
      "attack": 65,
      "defense": 40,
      "specialAttack": 60,
      "specialDefense": 40,
      "speed": 70
    },
    "category": "불고양이 포켓몬",
    "heightM": 0.4,
    "weightKg": 4.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/725.png"
  },
  {
    "id": 726,
    "dexNumber": 726,
    "generation": 7,
    "nameKo": "냐오히트",
    "nameEn": "Torracat",
    "types": [
      "불꽃"
    ],
    "stats": {
      "hp": 65,
      "attack": 85,
      "defense": 50,
      "specialAttack": 80,
      "specialDefense": 50,
      "speed": 90
    },
    "category": "불고양이 포켓몬",
    "heightM": 0.7,
    "weightKg": 25,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/726.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/726.png"
  },
  {
    "id": 727,
    "dexNumber": 727,
    "generation": 7,
    "nameKo": "어흥염",
    "nameEn": "Incineroar",
    "types": [
      "불꽃",
      "악"
    ],
    "stats": {
      "hp": 95,
      "attack": 115,
      "defense": 90,
      "specialAttack": 80,
      "specialDefense": 90,
      "speed": 60
    },
    "category": "힐 포켓몬",
    "heightM": 1.8,
    "weightKg": 83,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/727.png"
  },
  {
    "id": 728,
    "dexNumber": 728,
    "generation": 7,
    "nameKo": "누리공",
    "nameEn": "Popplio",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 50,
      "attack": 54,
      "defense": 54,
      "specialAttack": 66,
      "specialDefense": 56,
      "speed": 40
    },
    "category": "강치 포켓몬",
    "heightM": 0.4,
    "weightKg": 7.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/728.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/728.png"
  },
  {
    "id": 729,
    "dexNumber": 729,
    "generation": 7,
    "nameKo": "키요공",
    "nameEn": "Brionne",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 60,
      "attack": 69,
      "defense": 69,
      "specialAttack": 91,
      "specialDefense": 81,
      "speed": 50
    },
    "category": "아이돌 포켓몬",
    "heightM": 0.6,
    "weightKg": 17.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/729.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/729.png"
  },
  {
    "id": 730,
    "dexNumber": 730,
    "generation": 7,
    "nameKo": "누리레느",
    "nameEn": "Primarina",
    "types": [
      "물",
      "페어리"
    ],
    "stats": {
      "hp": 80,
      "attack": 74,
      "defense": 74,
      "specialAttack": 126,
      "specialDefense": 116,
      "speed": 60
    },
    "category": "솔리스트 포켓몬",
    "heightM": 1.8,
    "weightKg": 44,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/730.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/730.png"
  },
  {
    "id": 731,
    "dexNumber": 731,
    "generation": 7,
    "nameKo": "콕코구리",
    "nameEn": "Pikipek",
    "types": [
      "노말",
      "비행"
    ],
    "stats": {
      "hp": 35,
      "attack": 75,
      "defense": 30,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 65
    },
    "category": "딱따구리 포켓몬",
    "heightM": 0.3,
    "weightKg": 1.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/731.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/731.png"
  },
  {
    "id": 732,
    "dexNumber": 732,
    "generation": 7,
    "nameKo": "크라파",
    "nameEn": "Trumbeak",
    "types": [
      "노말",
      "비행"
    ],
    "stats": {
      "hp": 55,
      "attack": 85,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 75
    },
    "category": "나팔입 포켓몬",
    "heightM": 0.6,
    "weightKg": 14.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/732.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/732.png"
  },
  {
    "id": 733,
    "dexNumber": 733,
    "generation": 7,
    "nameKo": "왕큰부리",
    "nameEn": "Toucannon",
    "types": [
      "노말",
      "비행"
    ],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 75,
      "specialAttack": 75,
      "specialDefense": 75,
      "speed": 60
    },
    "category": "대포 포켓몬",
    "heightM": 1.1,
    "weightKg": 26,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/733.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/733.png"
  },
  {
    "id": 734,
    "dexNumber": 734,
    "generation": 7,
    "nameKo": "영구스",
    "nameEn": "Yungoos",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 48,
      "attack": 70,
      "defense": 30,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 45
    },
    "category": "순회 포켓몬",
    "heightM": 0.4,
    "weightKg": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/734.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/734.png"
  },
  {
    "id": 735,
    "dexNumber": 735,
    "generation": 7,
    "nameKo": "형사구스",
    "nameEn": "Gumshoos",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 88,
      "attack": 110,
      "defense": 60,
      "specialAttack": 55,
      "specialDefense": 60,
      "speed": 45
    },
    "category": "잠복 포켓몬",
    "heightM": 0.7,
    "weightKg": 14.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/735.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/735.png"
  },
  {
    "id": 736,
    "dexNumber": 736,
    "generation": 7,
    "nameKo": "턱지충이",
    "nameEn": "Grubbin",
    "types": [
      "벌레"
    ],
    "stats": {
      "hp": 47,
      "attack": 62,
      "defense": 45,
      "specialAttack": 55,
      "specialDefense": 45,
      "speed": 46
    },
    "category": "유충 포켓몬",
    "heightM": 0.4,
    "weightKg": 4.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/736.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/736.png"
  },
  {
    "id": 737,
    "dexNumber": 737,
    "generation": 7,
    "nameKo": "전지충이",
    "nameEn": "Charjabug",
    "types": [
      "벌레",
      "전기"
    ],
    "stats": {
      "hp": 57,
      "attack": 82,
      "defense": 95,
      "specialAttack": 55,
      "specialDefense": 75,
      "speed": 36
    },
    "category": "배터리 포켓몬",
    "heightM": 0.5,
    "weightKg": 10.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/737.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/737.png"
  },
  {
    "id": 738,
    "dexNumber": 738,
    "generation": 7,
    "nameKo": "투구뿌논",
    "nameEn": "Vikavolt",
    "types": [
      "벌레",
      "전기"
    ],
    "stats": {
      "hp": 77,
      "attack": 70,
      "defense": 90,
      "specialAttack": 145,
      "specialDefense": 75,
      "speed": 43
    },
    "category": "뿔집게 포켓몬",
    "heightM": 1.5,
    "weightKg": 45,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/738.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/738.png"
  },
  {
    "id": 739,
    "dexNumber": 739,
    "generation": 7,
    "nameKo": "오기지게",
    "nameEn": "Crabrawler",
    "types": [
      "격투"
    ],
    "stats": {
      "hp": 47,
      "attack": 82,
      "defense": 57,
      "specialAttack": 42,
      "specialDefense": 47,
      "speed": 63
    },
    "category": "권투 포켓몬",
    "heightM": 0.6,
    "weightKg": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/739.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/739.png"
  },
  {
    "id": 740,
    "dexNumber": 740,
    "generation": 7,
    "nameKo": "모단단게",
    "nameEn": "Crabominable",
    "types": [
      "격투",
      "얼음"
    ],
    "stats": {
      "hp": 97,
      "attack": 132,
      "defense": 77,
      "specialAttack": 62,
      "specialDefense": 67,
      "speed": 43
    },
    "category": "털게 포켓몬",
    "heightM": 1.7,
    "weightKg": 180,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/740.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/740.png"
  },
  {
    "id": 741,
    "dexNumber": 741,
    "generation": 7,
    "nameKo": "춤추새",
    "nameEn": "Oricorio",
    "types": [
      "불꽃",
      "비행"
    ],
    "stats": {
      "hp": 75,
      "attack": 70,
      "defense": 70,
      "specialAttack": 98,
      "specialDefense": 70,
      "speed": 93
    },
    "category": "댄스 포켓몬",
    "heightM": 0.6,
    "weightKg": 3.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/741.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/741.png"
  },
  {
    "id": 742,
    "dexNumber": 742,
    "generation": 7,
    "nameKo": "에블리",
    "nameEn": "Cutiefly",
    "types": [
      "벌레",
      "페어리"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "specialAttack": 55,
      "specialDefense": 40,
      "speed": 84
    },
    "category": "재니등에 포켓몬",
    "heightM": 0.1,
    "weightKg": 0.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/742.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/742.png"
  },
  {
    "id": 743,
    "dexNumber": 743,
    "generation": 7,
    "nameKo": "에리본",
    "nameEn": "Ribombee",
    "types": [
      "벌레",
      "페어리"
    ],
    "stats": {
      "hp": 60,
      "attack": 55,
      "defense": 60,
      "specialAttack": 95,
      "specialDefense": 70,
      "speed": 124
    },
    "category": "재니등에 포켓몬",
    "heightM": 0.2,
    "weightKg": 0.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/743.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/743.png"
  },
  {
    "id": 744,
    "dexNumber": 744,
    "generation": 7,
    "nameKo": "암멍이",
    "nameEn": "Rockruff",
    "types": [
      "바위"
    ],
    "stats": {
      "hp": 45,
      "attack": 65,
      "defense": 40,
      "specialAttack": 30,
      "specialDefense": 40,
      "speed": 60
    },
    "category": "강아지 포켓몬",
    "heightM": 0.5,
    "weightKg": 9.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/744.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/744.png"
  },
  {
    "id": 745,
    "dexNumber": 745,
    "generation": 7,
    "nameKo": "루가루암",
    "nameEn": "Lycanroc",
    "types": [
      "바위"
    ],
    "stats": {
      "hp": 75,
      "attack": 115,
      "defense": 65,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 112
    },
    "category": "늑대 포켓몬",
    "heightM": 0.8,
    "weightKg": 25,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/745.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/745.png"
  },
  {
    "id": 746,
    "dexNumber": 746,
    "generation": 7,
    "nameKo": "약어리",
    "nameEn": "Wishiwashi",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 45,
      "attack": 20,
      "defense": 20,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 40
    },
    "category": "잔물고기 포켓몬",
    "heightM": 0.2,
    "weightKg": 0.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/746.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/746.png"
  },
  {
    "id": 747,
    "dexNumber": 747,
    "generation": 7,
    "nameKo": "시마사리",
    "nameEn": "Mareanie",
    "types": [
      "독",
      "물"
    ],
    "stats": {
      "hp": 50,
      "attack": 53,
      "defense": 62,
      "specialAttack": 43,
      "specialDefense": 52,
      "speed": 45
    },
    "category": "깨비사리 포켓몬",
    "heightM": 0.4,
    "weightKg": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/747.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/747.png"
  },
  {
    "id": 748,
    "dexNumber": 748,
    "generation": 7,
    "nameKo": "더시마사리",
    "nameEn": "Toxapex",
    "types": [
      "독",
      "물"
    ],
    "stats": {
      "hp": 50,
      "attack": 63,
      "defense": 152,
      "specialAttack": 53,
      "specialDefense": 142,
      "speed": 35
    },
    "category": "깨비사리 포켓몬",
    "heightM": 0.7,
    "weightKg": 14.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/748.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/748.png"
  },
  {
    "id": 749,
    "dexNumber": 749,
    "generation": 7,
    "nameKo": "머드나기",
    "nameEn": "Mudbray",
    "types": [
      "땅"
    ],
    "stats": {
      "hp": 70,
      "attack": 100,
      "defense": 70,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 45
    },
    "category": "당나귀 포켓몬",
    "heightM": 1,
    "weightKg": 110,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/749.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/749.png"
  },
  {
    "id": 750,
    "dexNumber": 750,
    "generation": 7,
    "nameKo": "만마드",
    "nameEn": "Mudsdale",
    "types": [
      "땅"
    ],
    "stats": {
      "hp": 100,
      "attack": 125,
      "defense": 100,
      "specialAttack": 55,
      "specialDefense": 85,
      "speed": 35
    },
    "category": "만마 포켓몬",
    "heightM": 2.5,
    "weightKg": 920,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/750.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/750.png"
  },
  {
    "id": 751,
    "dexNumber": 751,
    "generation": 7,
    "nameKo": "물거미",
    "nameEn": "Dewpider",
    "types": [
      "물",
      "벌레"
    ],
    "stats": {
      "hp": 38,
      "attack": 40,
      "defense": 52,
      "specialAttack": 40,
      "specialDefense": 72,
      "speed": 27
    },
    "category": "수포 포켓몬",
    "heightM": 0.3,
    "weightKg": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/751.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/751.png"
  },
  {
    "id": 752,
    "dexNumber": 752,
    "generation": 7,
    "nameKo": "깨비물거미",
    "nameEn": "Araquanid",
    "types": [
      "물",
      "벌레"
    ],
    "stats": {
      "hp": 68,
      "attack": 70,
      "defense": 92,
      "specialAttack": 50,
      "specialDefense": 132,
      "speed": 42
    },
    "category": "수포 포켓몬",
    "heightM": 1.8,
    "weightKg": 82,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/752.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/752.png"
  },
  {
    "id": 753,
    "dexNumber": 753,
    "generation": 7,
    "nameKo": "짜랑랑",
    "nameEn": "Fomantis",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 40,
      "attack": 55,
      "defense": 35,
      "specialAttack": 50,
      "specialDefense": 35,
      "speed": 35
    },
    "category": "풀사마귀 포켓몬",
    "heightM": 0.3,
    "weightKg": 1.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/753.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/753.png"
  },
  {
    "id": 754,
    "dexNumber": 754,
    "generation": 7,
    "nameKo": "라란티스",
    "nameEn": "Lurantis",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 70,
      "attack": 105,
      "defense": 90,
      "specialAttack": 80,
      "specialDefense": 90,
      "speed": 45
    },
    "category": "꽃사마귀 포켓몬",
    "heightM": 0.9,
    "weightKg": 18.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/754.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/754.png"
  },
  {
    "id": 755,
    "dexNumber": 755,
    "generation": 7,
    "nameKo": "자마슈",
    "nameEn": "Morelull",
    "types": [
      "풀",
      "페어리"
    ],
    "stats": {
      "hp": 40,
      "attack": 35,
      "defense": 55,
      "specialAttack": 65,
      "specialDefense": 75,
      "speed": 15
    },
    "category": "발광 포켓몬",
    "heightM": 0.2,
    "weightKg": 1.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/755.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/755.png"
  },
  {
    "id": 756,
    "dexNumber": 756,
    "generation": 7,
    "nameKo": "마셰이드",
    "nameEn": "Shiinotic",
    "types": [
      "풀",
      "페어리"
    ],
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 80,
      "specialAttack": 90,
      "specialDefense": 100,
      "speed": 30
    },
    "category": "발광 포켓몬",
    "heightM": 1,
    "weightKg": 11.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/756.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/756.png"
  },
  {
    "id": 757,
    "dexNumber": 757,
    "generation": 7,
    "nameKo": "야도뇽",
    "nameEn": "Salandit",
    "types": [
      "독",
      "불꽃"
    ],
    "stats": {
      "hp": 48,
      "attack": 44,
      "defense": 40,
      "specialAttack": 71,
      "specialDefense": 40,
      "speed": 77
    },
    "category": "독도마뱀 포켓몬",
    "heightM": 0.6,
    "weightKg": 4.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/757.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/757.png"
  },
  {
    "id": 758,
    "dexNumber": 758,
    "generation": 7,
    "nameKo": "염뉴트",
    "nameEn": "Salazzle",
    "types": [
      "독",
      "불꽃"
    ],
    "stats": {
      "hp": 68,
      "attack": 64,
      "defense": 60,
      "specialAttack": 111,
      "specialDefense": 60,
      "speed": 117
    },
    "category": "독도마뱀 포켓몬",
    "heightM": 1.2,
    "weightKg": 22.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/758.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/758.png"
  },
  {
    "id": 759,
    "dexNumber": 759,
    "generation": 7,
    "nameKo": "포곰곰",
    "nameEn": "Stufful",
    "types": [
      "노말",
      "격투"
    ],
    "stats": {
      "hp": 70,
      "attack": 75,
      "defense": 50,
      "specialAttack": 45,
      "specialDefense": 50,
      "speed": 50
    },
    "category": "바둥바둥 포켓몬",
    "heightM": 0.5,
    "weightKg": 6.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/759.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/759.png"
  },
  {
    "id": 760,
    "dexNumber": 760,
    "generation": 7,
    "nameKo": "이븐곰",
    "nameEn": "Bewear",
    "types": [
      "노말",
      "격투"
    ],
    "stats": {
      "hp": 120,
      "attack": 125,
      "defense": 80,
      "specialAttack": 55,
      "specialDefense": 60,
      "speed": 60
    },
    "category": "강한완력 포켓몬",
    "heightM": 2.1,
    "weightKg": 135,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/760.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/760.png"
  },
  {
    "id": 761,
    "dexNumber": 761,
    "generation": 7,
    "nameKo": "달콤아",
    "nameEn": "Bounsweet",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 42,
      "attack": 30,
      "defense": 38,
      "specialAttack": 30,
      "specialDefense": 38,
      "speed": 32
    },
    "category": "후르츠 포켓몬",
    "heightM": 0.3,
    "weightKg": 3.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/761.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/761.png"
  },
  {
    "id": 762,
    "dexNumber": 762,
    "generation": 7,
    "nameKo": "달무리나",
    "nameEn": "Steenee",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 52,
      "attack": 40,
      "defense": 48,
      "specialAttack": 40,
      "specialDefense": 48,
      "speed": 62
    },
    "category": "후르츠 포켓몬",
    "heightM": 0.7,
    "weightKg": 8.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/762.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/762.png"
  },
  {
    "id": 763,
    "dexNumber": 763,
    "generation": 7,
    "nameKo": "달코퀸",
    "nameEn": "Tsareena",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 72,
      "attack": 120,
      "defense": 98,
      "specialAttack": 50,
      "specialDefense": 98,
      "speed": 72
    },
    "category": "후르츠 포켓몬",
    "heightM": 1.2,
    "weightKg": 21.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/763.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/763.png"
  },
  {
    "id": 764,
    "dexNumber": 764,
    "generation": 7,
    "nameKo": "큐아링",
    "nameEn": "Comfey",
    "types": [
      "페어리"
    ],
    "stats": {
      "hp": 51,
      "attack": 52,
      "defense": 90,
      "specialAttack": 82,
      "specialDefense": 110,
      "speed": 100
    },
    "category": "꽃따기 포켓몬",
    "heightM": 0.1,
    "weightKg": 0.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/764.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/764.png"
  },
  {
    "id": 765,
    "dexNumber": 765,
    "generation": 7,
    "nameKo": "하랑우탄",
    "nameEn": "Oranguru",
    "types": [
      "노말",
      "에스퍼"
    ],
    "stats": {
      "hp": 90,
      "attack": 60,
      "defense": 80,
      "specialAttack": 90,
      "specialDefense": 110,
      "speed": 60
    },
    "category": "현자 포켓몬",
    "heightM": 1.5,
    "weightKg": 76,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/765.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/765.png"
  },
  {
    "id": 766,
    "dexNumber": 766,
    "generation": 7,
    "nameKo": "내던숭이",
    "nameEn": "Passimian",
    "types": [
      "격투"
    ],
    "stats": {
      "hp": 100,
      "attack": 120,
      "defense": 90,
      "specialAttack": 40,
      "specialDefense": 60,
      "speed": 80
    },
    "category": "연계 포켓몬",
    "heightM": 2,
    "weightKg": 82.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/766.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/766.png"
  },
  {
    "id": 767,
    "dexNumber": 767,
    "generation": 7,
    "nameKo": "꼬시레",
    "nameEn": "Wimpod",
    "types": [
      "벌레",
      "물"
    ],
    "stats": {
      "hp": 25,
      "attack": 35,
      "defense": 40,
      "specialAttack": 20,
      "specialDefense": 30,
      "speed": 80
    },
    "category": "주행 포켓몬",
    "heightM": 0.5,
    "weightKg": 12,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/767.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/767.png"
  },
  {
    "id": 768,
    "dexNumber": 768,
    "generation": 7,
    "nameKo": "갑주무사",
    "nameEn": "Golisopod",
    "types": [
      "벌레",
      "물"
    ],
    "stats": {
      "hp": 75,
      "attack": 125,
      "defense": 140,
      "specialAttack": 60,
      "specialDefense": 90,
      "speed": 40
    },
    "category": "장갑 포켓몬",
    "heightM": 2,
    "weightKg": 108,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/768.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/768.png"
  },
  {
    "id": 769,
    "dexNumber": 769,
    "generation": 7,
    "nameKo": "모래꿍",
    "nameEn": "Sandygast",
    "types": [
      "고스트",
      "땅"
    ],
    "stats": {
      "hp": 55,
      "attack": 55,
      "defense": 80,
      "specialAttack": 70,
      "specialDefense": 45,
      "speed": 15
    },
    "category": "모래산 포켓몬",
    "heightM": 0.5,
    "weightKg": 70,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/769.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/769.png"
  },
  {
    "id": 770,
    "dexNumber": 770,
    "generation": 7,
    "nameKo": "모래성이당",
    "nameEn": "Palossand",
    "types": [
      "고스트",
      "땅"
    ],
    "stats": {
      "hp": 85,
      "attack": 75,
      "defense": 110,
      "specialAttack": 100,
      "specialDefense": 75,
      "speed": 35
    },
    "category": "모래성 포켓몬",
    "heightM": 1.3,
    "weightKg": 250,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/770.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/770.png"
  },
  {
    "id": 771,
    "dexNumber": 771,
    "generation": 7,
    "nameKo": "해무기",
    "nameEn": "Pyukumuku",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 55,
      "attack": 60,
      "defense": 130,
      "specialAttack": 30,
      "specialDefense": 130,
      "speed": 5
    },
    "category": "해삼 포켓몬",
    "heightM": 0.3,
    "weightKg": 1.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/771.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/771.png"
  },
  {
    "id": 772,
    "dexNumber": 772,
    "generation": 7,
    "nameKo": "타입:널",
    "nameEn": "Type: Null",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 95,
      "attack": 95,
      "defense": 95,
      "specialAttack": 95,
      "specialDefense": 95,
      "speed": 59
    },
    "category": "인공 포켓몬",
    "heightM": 1.9,
    "weightKg": 120.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/772.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/772.png"
  },
  {
    "id": 773,
    "dexNumber": 773,
    "generation": 7,
    "nameKo": "실버디",
    "nameEn": "Silvally",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 95,
      "attack": 95,
      "defense": 95,
      "specialAttack": 95,
      "specialDefense": 95,
      "speed": 95
    },
    "category": "인공 포켓몬",
    "heightM": 2.3,
    "weightKg": 100.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/773.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/773.png"
  },
  {
    "id": 774,
    "dexNumber": 774,
    "generation": 7,
    "nameKo": "메테노",
    "nameEn": "Minior",
    "types": [
      "바위",
      "비행"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 100,
      "specialAttack": 60,
      "specialDefense": 100,
      "speed": 60
    },
    "category": "유성 포켓몬",
    "heightM": 0.3,
    "weightKg": 40,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/774.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/774.png"
  },
  {
    "id": 775,
    "dexNumber": 775,
    "generation": 7,
    "nameKo": "자말라",
    "nameEn": "Komala",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 65,
      "attack": 115,
      "defense": 65,
      "specialAttack": 75,
      "specialDefense": 95,
      "speed": 65
    },
    "category": "꿈결 포켓몬",
    "heightM": 0.4,
    "weightKg": 19.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/775.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/775.png"
  },
  {
    "id": 776,
    "dexNumber": 776,
    "generation": 7,
    "nameKo": "폭거북스",
    "nameEn": "Turtonator",
    "types": [
      "불꽃",
      "드래곤"
    ],
    "stats": {
      "hp": 60,
      "attack": 78,
      "defense": 135,
      "specialAttack": 91,
      "specialDefense": 85,
      "speed": 36
    },
    "category": "폭발거북 포켓몬",
    "heightM": 2,
    "weightKg": 212,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/776.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/776.png"
  },
  {
    "id": 777,
    "dexNumber": 777,
    "generation": 7,
    "nameKo": "토게데마루",
    "nameEn": "Togedemaru",
    "types": [
      "전기",
      "강철"
    ],
    "stats": {
      "hp": 65,
      "attack": 98,
      "defense": 63,
      "specialAttack": 40,
      "specialDefense": 73,
      "speed": 96
    },
    "category": "동글동글 포켓몬",
    "heightM": 0.3,
    "weightKg": 3.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/777.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/777.png"
  },
  {
    "id": 778,
    "dexNumber": 778,
    "generation": 7,
    "nameKo": "따라큐",
    "nameEn": "Mimikyu",
    "types": [
      "고스트",
      "페어리"
    ],
    "stats": {
      "hp": 55,
      "attack": 90,
      "defense": 80,
      "specialAttack": 50,
      "specialDefense": 105,
      "speed": 96
    },
    "category": "탈 포켓몬",
    "heightM": 0.2,
    "weightKg": 0.7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/778.png"
  },
  {
    "id": 779,
    "dexNumber": 779,
    "generation": 7,
    "nameKo": "치갈기",
    "nameEn": "Bruxish",
    "types": [
      "물",
      "에스퍼"
    ],
    "stats": {
      "hp": 68,
      "attack": 105,
      "defense": 70,
      "specialAttack": 70,
      "specialDefense": 70,
      "speed": 92
    },
    "category": "이갈기 포켓몬",
    "heightM": 0.9,
    "weightKg": 19,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/779.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/779.png"
  },
  {
    "id": 780,
    "dexNumber": 780,
    "generation": 7,
    "nameKo": "할비롱",
    "nameEn": "Drampa",
    "types": [
      "노말",
      "드래곤"
    ],
    "stats": {
      "hp": 78,
      "attack": 60,
      "defense": 85,
      "specialAttack": 135,
      "specialDefense": 91,
      "speed": 36
    },
    "category": "느긋누긋 포켓몬",
    "heightM": 3,
    "weightKg": 185,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/780.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/780.png"
  },
  {
    "id": 781,
    "dexNumber": 781,
    "generation": 7,
    "nameKo": "타타륜",
    "nameEn": "Dhelmise",
    "types": [
      "고스트",
      "풀"
    ],
    "stats": {
      "hp": 70,
      "attack": 131,
      "defense": 100,
      "specialAttack": 86,
      "specialDefense": 90,
      "speed": 40
    },
    "category": "해초조각 포켓몬",
    "heightM": 3.9,
    "weightKg": 210,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/781.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/781.png"
  },
  {
    "id": 782,
    "dexNumber": 782,
    "generation": 7,
    "nameKo": "짜랑꼬",
    "nameEn": "Jangmo-o",
    "types": [
      "드래곤"
    ],
    "stats": {
      "hp": 45,
      "attack": 55,
      "defense": 65,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 45
    },
    "category": "비늘 포켓몬",
    "heightM": 0.6,
    "weightKg": 29.7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/782.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/782.png"
  },
  {
    "id": 783,
    "dexNumber": 783,
    "generation": 7,
    "nameKo": "짜랑고우",
    "nameEn": "Hakamo-o",
    "types": [
      "드래곤",
      "격투"
    ],
    "stats": {
      "hp": 55,
      "attack": 75,
      "defense": 90,
      "specialAttack": 65,
      "specialDefense": 70,
      "speed": 65
    },
    "category": "비늘 포켓몬",
    "heightM": 1.2,
    "weightKg": 47,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/783.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/783.png"
  },
  {
    "id": 784,
    "dexNumber": 784,
    "generation": 7,
    "nameKo": "짜랑고우거",
    "nameEn": "Kommo-o",
    "types": [
      "드래곤",
      "격투"
    ],
    "stats": {
      "hp": 75,
      "attack": 110,
      "defense": 125,
      "specialAttack": 100,
      "specialDefense": 105,
      "speed": 85
    },
    "category": "비늘 포켓몬",
    "heightM": 1.6,
    "weightKg": 78.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/784.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/784.png"
  },
  {
    "id": 785,
    "dexNumber": 785,
    "generation": 7,
    "nameKo": "카푸꼬꼬꼭",
    "nameEn": "Tapu Koko",
    "types": [
      "전기",
      "페어리"
    ],
    "stats": {
      "hp": 70,
      "attack": 115,
      "defense": 85,
      "specialAttack": 95,
      "specialDefense": 75,
      "speed": 130
    },
    "category": "토속신 포켓몬",
    "heightM": 1.8,
    "weightKg": 20.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/785.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/785.png"
  },
  {
    "id": 786,
    "dexNumber": 786,
    "generation": 7,
    "nameKo": "카푸나비나",
    "nameEn": "Tapu Lele",
    "types": [
      "에스퍼",
      "페어리"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 75,
      "specialAttack": 130,
      "specialDefense": 115,
      "speed": 95
    },
    "category": "토속신 포켓몬",
    "heightM": 1.2,
    "weightKg": 18.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/786.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/786.png"
  },
  {
    "id": 787,
    "dexNumber": 787,
    "generation": 7,
    "nameKo": "카푸브루루",
    "nameEn": "Tapu Bulu",
    "types": [
      "풀",
      "페어리"
    ],
    "stats": {
      "hp": 70,
      "attack": 130,
      "defense": 115,
      "specialAttack": 85,
      "specialDefense": 95,
      "speed": 75
    },
    "category": "토속신 포켓몬",
    "heightM": 1.9,
    "weightKg": 45.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/787.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/787.png"
  },
  {
    "id": 788,
    "dexNumber": 788,
    "generation": 7,
    "nameKo": "카푸느지느",
    "nameEn": "Tapu Fini",
    "types": [
      "물",
      "페어리"
    ],
    "stats": {
      "hp": 70,
      "attack": 75,
      "defense": 115,
      "specialAttack": 95,
      "specialDefense": 130,
      "speed": 85
    },
    "category": "토속신 포켓몬",
    "heightM": 1.3,
    "weightKg": 21.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/788.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/788.png"
  },
  {
    "id": 789,
    "dexNumber": 789,
    "generation": 7,
    "nameKo": "코스모그",
    "nameEn": "Cosmog",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 43,
      "attack": 29,
      "defense": 31,
      "specialAttack": 29,
      "specialDefense": 31,
      "speed": 37
    },
    "category": "성운 포켓몬",
    "heightM": 0.2,
    "weightKg": 0.1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/789.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/789.png"
  },
  {
    "id": 790,
    "dexNumber": 790,
    "generation": 7,
    "nameKo": "코스모움",
    "nameEn": "Cosmoem",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 43,
      "attack": 29,
      "defense": 131,
      "specialAttack": 29,
      "specialDefense": 131,
      "speed": 37
    },
    "category": "원시성 포켓몬",
    "heightM": 0.1,
    "weightKg": 999.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/790.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/790.png"
  },
  {
    "id": 791,
    "dexNumber": 791,
    "generation": 7,
    "nameKo": "솔가레오",
    "nameEn": "Solgaleo",
    "types": [
      "에스퍼",
      "강철"
    ],
    "stats": {
      "hp": 137,
      "attack": 137,
      "defense": 107,
      "specialAttack": 113,
      "specialDefense": 89,
      "speed": 97
    },
    "category": "일륜 포켓몬",
    "heightM": 3.4,
    "weightKg": 230,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/791.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/791.png"
  },
  {
    "id": 792,
    "dexNumber": 792,
    "generation": 7,
    "nameKo": "루나아라",
    "nameEn": "Lunala",
    "types": [
      "에스퍼",
      "고스트"
    ],
    "stats": {
      "hp": 137,
      "attack": 113,
      "defense": 89,
      "specialAttack": 137,
      "specialDefense": 107,
      "speed": 97
    },
    "category": "월륜 포켓몬",
    "heightM": 4,
    "weightKg": 120,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/792.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/792.png"
  },
  {
    "id": 793,
    "dexNumber": 793,
    "generation": 7,
    "nameKo": "텅비드",
    "nameEn": "Nihilego",
    "types": [
      "바위",
      "독"
    ],
    "stats": {
      "hp": 109,
      "attack": 53,
      "defense": 47,
      "specialAttack": 127,
      "specialDefense": 131,
      "speed": 103
    },
    "category": "기생 포켓몬",
    "heightM": 1.2,
    "weightKg": 55.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/793.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/793.png"
  },
  {
    "id": 794,
    "dexNumber": 794,
    "generation": 7,
    "nameKo": "매시붕",
    "nameEn": "Buzzwole",
    "types": [
      "벌레",
      "격투"
    ],
    "stats": {
      "hp": 107,
      "attack": 139,
      "defense": 139,
      "specialAttack": 53,
      "specialDefense": 53,
      "speed": 79
    },
    "category": "팽창 포켓몬",
    "heightM": 2.4,
    "weightKg": 333.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/794.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/794.png"
  },
  {
    "id": 795,
    "dexNumber": 795,
    "generation": 7,
    "nameKo": "페로코체",
    "nameEn": "Pheromosa",
    "types": [
      "벌레",
      "격투"
    ],
    "stats": {
      "hp": 71,
      "attack": 137,
      "defense": 37,
      "specialAttack": 137,
      "specialDefense": 37,
      "speed": 151
    },
    "category": "염미 포켓몬",
    "heightM": 1.8,
    "weightKg": 25,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/795.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/795.png"
  },
  {
    "id": 796,
    "dexNumber": 796,
    "generation": 7,
    "nameKo": "전수목",
    "nameEn": "Xurkitree",
    "types": [
      "전기"
    ],
    "stats": {
      "hp": 83,
      "attack": 89,
      "defense": 71,
      "specialAttack": 173,
      "specialDefense": 71,
      "speed": 83
    },
    "category": "전기장식 포켓몬",
    "heightM": 3.8,
    "weightKg": 100,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/796.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/796.png"
  },
  {
    "id": 797,
    "dexNumber": 797,
    "generation": 7,
    "nameKo": "철화구야",
    "nameEn": "Celesteela",
    "types": [
      "강철",
      "비행"
    ],
    "stats": {
      "hp": 97,
      "attack": 101,
      "defense": 103,
      "specialAttack": 107,
      "specialDefense": 101,
      "speed": 61
    },
    "category": "쏴올리기 포켓몬",
    "heightM": 9.2,
    "weightKg": 999.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/797.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/797.png"
  },
  {
    "id": 798,
    "dexNumber": 798,
    "generation": 7,
    "nameKo": "종이신도",
    "nameEn": "Kartana",
    "types": [
      "풀",
      "강철"
    ],
    "stats": {
      "hp": 59,
      "attack": 181,
      "defense": 131,
      "specialAttack": 59,
      "specialDefense": 31,
      "speed": 109
    },
    "category": "발도 포켓몬",
    "heightM": 0.3,
    "weightKg": 0.1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/798.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/798.png"
  },
  {
    "id": 799,
    "dexNumber": 799,
    "generation": 7,
    "nameKo": "악식킹",
    "nameEn": "Guzzlord",
    "types": [
      "악",
      "드래곤"
    ],
    "stats": {
      "hp": 223,
      "attack": 101,
      "defense": 53,
      "specialAttack": 97,
      "specialDefense": 53,
      "speed": 43
    },
    "category": "악식성 포켓몬",
    "heightM": 5.5,
    "weightKg": 888,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/799.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/799.png"
  },
  {
    "id": 800,
    "dexNumber": 800,
    "generation": 7,
    "nameKo": "네크로즈마",
    "nameEn": "Necrozma",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 97,
      "attack": 107,
      "defense": 101,
      "specialAttack": 127,
      "specialDefense": 89,
      "speed": 79
    },
    "category": "프리즘 포켓몬",
    "heightM": 2.4,
    "weightKg": 230,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/800.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/800.png"
  },
  {
    "id": 801,
    "dexNumber": 801,
    "generation": 7,
    "nameKo": "마기아나",
    "nameEn": "Magearna",
    "types": [
      "강철",
      "페어리"
    ],
    "stats": {
      "hp": 80,
      "attack": 95,
      "defense": 115,
      "specialAttack": 130,
      "specialDefense": 115,
      "speed": 65
    },
    "category": "인조 포켓몬",
    "heightM": 1,
    "weightKg": 80.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/801.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/801.png"
  },
  {
    "id": 802,
    "dexNumber": 802,
    "generation": 7,
    "nameKo": "마샤도",
    "nameEn": "Marshadow",
    "types": [
      "격투",
      "고스트"
    ],
    "stats": {
      "hp": 90,
      "attack": 125,
      "defense": 80,
      "specialAttack": 90,
      "specialDefense": 90,
      "speed": 125
    },
    "category": "그림자살이 포켓몬",
    "heightM": 0.7,
    "weightKg": 22.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/802.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/802.png"
  },
  {
    "id": 803,
    "dexNumber": 803,
    "generation": 7,
    "nameKo": "베베놈",
    "nameEn": "Poipole",
    "types": [
      "독"
    ],
    "stats": {
      "hp": 67,
      "attack": 73,
      "defense": 67,
      "specialAttack": 73,
      "specialDefense": 67,
      "speed": 73
    },
    "category": "독침 포켓몬",
    "heightM": 0.6,
    "weightKg": 1.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/803.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/803.png"
  },
  {
    "id": 804,
    "dexNumber": 804,
    "generation": 7,
    "nameKo": "아고용",
    "nameEn": "Naganadel",
    "types": [
      "독",
      "드래곤"
    ],
    "stats": {
      "hp": 73,
      "attack": 73,
      "defense": 73,
      "specialAttack": 127,
      "specialDefense": 73,
      "speed": 121
    },
    "category": "독침 포켓몬",
    "heightM": 3.6,
    "weightKg": 150,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/804.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/804.png"
  },
  {
    "id": 805,
    "dexNumber": 805,
    "generation": 7,
    "nameKo": "차곡차곡",
    "nameEn": "Stakataka",
    "types": [
      "바위",
      "강철"
    ],
    "stats": {
      "hp": 61,
      "attack": 131,
      "defense": 211,
      "specialAttack": 53,
      "specialDefense": 101,
      "speed": 13
    },
    "category": "돌담 포켓몬",
    "heightM": 5.5,
    "weightKg": 820,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/805.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/805.png"
  },
  {
    "id": 806,
    "dexNumber": 806,
    "generation": 7,
    "nameKo": "두파팡",
    "nameEn": "Blacephalon",
    "types": [
      "불꽃",
      "고스트"
    ],
    "stats": {
      "hp": 53,
      "attack": 127,
      "defense": 53,
      "specialAttack": 151,
      "specialDefense": 79,
      "speed": 107
    },
    "category": "불꽃놀이 포켓몬",
    "heightM": 1.8,
    "weightKg": 13,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/806.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/806.png"
  },
  {
    "id": 807,
    "dexNumber": 807,
    "generation": 7,
    "nameKo": "제라오라",
    "nameEn": "Zeraora",
    "types": [
      "전기"
    ],
    "stats": {
      "hp": 88,
      "attack": 112,
      "defense": 75,
      "specialAttack": 102,
      "specialDefense": 80,
      "speed": 143
    },
    "category": "신뢰 포켓몬",
    "heightM": 1.5,
    "weightKg": 44.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/807.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/807.png"
  },
  {
    "id": 808,
    "dexNumber": 808,
    "generation": 7,
    "nameKo": "멜탄",
    "nameEn": "Meltan",
    "types": [
      "강철"
    ],
    "stats": {
      "hp": 46,
      "attack": 65,
      "defense": 65,
      "specialAttack": 55,
      "specialDefense": 35,
      "speed": 34
    },
    "category": "너트 포켓몬",
    "heightM": 0.2,
    "weightKg": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/808.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/808.png"
  },
  {
    "id": 809,
    "dexNumber": 809,
    "generation": 7,
    "nameKo": "멜메탈",
    "nameEn": "Melmetal",
    "types": [
      "강철"
    ],
    "stats": {
      "hp": 135,
      "attack": 143,
      "defense": 143,
      "specialAttack": 80,
      "specialDefense": 65,
      "speed": 34
    },
    "category": "너트 포켓몬",
    "heightM": 2.5,
    "weightKg": 800,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/809.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/809.png"
  },
  {
    "id": 810,
    "dexNumber": 810,
    "generation": 8,
    "nameKo": "흥나숭",
    "nameEn": "Grookey",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 65
    },
    "category": "꼬마원숭이 포켓몬",
    "heightM": 0.3,
    "weightKg": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/810.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/810.png"
  },
  {
    "id": 811,
    "dexNumber": 811,
    "generation": 8,
    "nameKo": "채키몽",
    "nameEn": "Thwackey",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 70,
      "specialAttack": 55,
      "specialDefense": 60,
      "speed": 80
    },
    "category": "비트 포켓몬",
    "heightM": 0.7,
    "weightKg": 14,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/811.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/811.png"
  },
  {
    "id": 812,
    "dexNumber": 812,
    "generation": 8,
    "nameKo": "고릴타",
    "nameEn": "Rillaboom",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 100,
      "attack": 125,
      "defense": 90,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 85
    },
    "category": "드러머 포켓몬",
    "heightM": 2.1,
    "weightKg": 90,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/812.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/812.png"
  },
  {
    "id": 813,
    "dexNumber": 813,
    "generation": 8,
    "nameKo": "염버니",
    "nameEn": "Scorbunny",
    "types": [
      "불꽃"
    ],
    "stats": {
      "hp": 50,
      "attack": 71,
      "defense": 40,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 69
    },
    "category": "토끼 포켓몬",
    "heightM": 0.3,
    "weightKg": 4.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/813.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/813.png"
  },
  {
    "id": 814,
    "dexNumber": 814,
    "generation": 8,
    "nameKo": "래비풋",
    "nameEn": "Raboot",
    "types": [
      "불꽃"
    ],
    "stats": {
      "hp": 65,
      "attack": 86,
      "defense": 60,
      "specialAttack": 55,
      "specialDefense": 60,
      "speed": 94
    },
    "category": "토끼 포켓몬",
    "heightM": 0.6,
    "weightKg": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/814.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/814.png"
  },
  {
    "id": 815,
    "dexNumber": 815,
    "generation": 8,
    "nameKo": "에이스번",
    "nameEn": "Cinderace",
    "types": [
      "불꽃"
    ],
    "stats": {
      "hp": 80,
      "attack": 116,
      "defense": 75,
      "specialAttack": 65,
      "specialDefense": 75,
      "speed": 119
    },
    "category": "스트라이커 포켓몬",
    "heightM": 1.4,
    "weightKg": 33,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/815.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/815.png"
  },
  {
    "id": 816,
    "dexNumber": 816,
    "generation": 8,
    "nameKo": "울머기",
    "nameEn": "Sobble",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 50,
      "attack": 40,
      "defense": 40,
      "specialAttack": 70,
      "specialDefense": 40,
      "speed": 70
    },
    "category": "물도마뱀 포켓몬",
    "heightM": 0.3,
    "weightKg": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/816.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/816.png"
  },
  {
    "id": 817,
    "dexNumber": 817,
    "generation": 8,
    "nameKo": "누겔레온",
    "nameEn": "Drizzile",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 65,
      "attack": 60,
      "defense": 55,
      "specialAttack": 95,
      "specialDefense": 55,
      "speed": 90
    },
    "category": "물도마뱀 포켓몬",
    "heightM": 0.7,
    "weightKg": 11.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/817.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/817.png"
  },
  {
    "id": 818,
    "dexNumber": 818,
    "generation": 8,
    "nameKo": "인텔리레온",
    "nameEn": "Inteleon",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 65,
      "specialAttack": 125,
      "specialDefense": 65,
      "speed": 120
    },
    "category": "에이전트 포켓몬",
    "heightM": 1.9,
    "weightKg": 45.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/818.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/818.png"
  },
  {
    "id": 819,
    "dexNumber": 819,
    "generation": 8,
    "nameKo": "탐리스",
    "nameEn": "Skwovet",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 70,
      "attack": 55,
      "defense": 55,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 25
    },
    "category": "볼가득 포켓몬",
    "heightM": 0.3,
    "weightKg": 2.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/819.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/819.png"
  },
  {
    "id": 820,
    "dexNumber": 820,
    "generation": 8,
    "nameKo": "요씽리스",
    "nameEn": "Greedent",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 120,
      "attack": 95,
      "defense": 95,
      "specialAttack": 55,
      "specialDefense": 75,
      "speed": 20
    },
    "category": "욕심쟁이 포켓몬",
    "heightM": 0.6,
    "weightKg": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/820.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/820.png"
  },
  {
    "id": 821,
    "dexNumber": 821,
    "generation": 8,
    "nameKo": "파라꼬",
    "nameEn": "Rookidee",
    "types": [
      "비행"
    ],
    "stats": {
      "hp": 38,
      "attack": 47,
      "defense": 35,
      "specialAttack": 33,
      "specialDefense": 35,
      "speed": 57
    },
    "category": "아기새 포켓몬",
    "heightM": 0.2,
    "weightKg": 1.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/821.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/821.png"
  },
  {
    "id": 822,
    "dexNumber": 822,
    "generation": 8,
    "nameKo": "파크로우",
    "nameEn": "Corvisquire",
    "types": [
      "비행"
    ],
    "stats": {
      "hp": 68,
      "attack": 67,
      "defense": 55,
      "specialAttack": 43,
      "specialDefense": 55,
      "speed": 77
    },
    "category": "까마귀 포켓몬",
    "heightM": 0.8,
    "weightKg": 16,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/822.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/822.png"
  },
  {
    "id": 823,
    "dexNumber": 823,
    "generation": 8,
    "nameKo": "아머까오",
    "nameEn": "Corviknight",
    "types": [
      "비행",
      "강철"
    ],
    "stats": {
      "hp": 98,
      "attack": 87,
      "defense": 105,
      "specialAttack": 53,
      "specialDefense": 85,
      "speed": 67
    },
    "category": "까마귀 포켓몬",
    "heightM": 2.2,
    "weightKg": 75,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/823.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/823.png"
  },
  {
    "id": 824,
    "dexNumber": 824,
    "generation": 8,
    "nameKo": "두루지벌레",
    "nameEn": "Blipbug",
    "types": [
      "벌레"
    ],
    "stats": {
      "hp": 25,
      "attack": 20,
      "defense": 20,
      "specialAttack": 25,
      "specialDefense": 45,
      "speed": 45
    },
    "category": "유충 포켓몬",
    "heightM": 0.4,
    "weightKg": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/824.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/824.png"
  },
  {
    "id": 825,
    "dexNumber": 825,
    "generation": 8,
    "nameKo": "레돔벌레",
    "nameEn": "Dottler",
    "types": [
      "벌레",
      "에스퍼"
    ],
    "stats": {
      "hp": 50,
      "attack": 35,
      "defense": 80,
      "specialAttack": 50,
      "specialDefense": 90,
      "speed": 30
    },
    "category": "레이돔 포켓몬",
    "heightM": 0.4,
    "weightKg": 19.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/825.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/825.png"
  },
  {
    "id": 826,
    "dexNumber": 826,
    "generation": 8,
    "nameKo": "이올브",
    "nameEn": "Orbeetle",
    "types": [
      "벌레",
      "에스퍼"
    ],
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 110,
      "specialAttack": 80,
      "specialDefense": 120,
      "speed": 90
    },
    "category": "칠성 포켓몬",
    "heightM": 0.4,
    "weightKg": 40.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/826.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/826.png"
  },
  {
    "id": 827,
    "dexNumber": 827,
    "generation": 8,
    "nameKo": "훔처우",
    "nameEn": "Nickit",
    "types": [
      "악"
    ],
    "stats": {
      "hp": 40,
      "attack": 28,
      "defense": 28,
      "specialAttack": 47,
      "specialDefense": 52,
      "speed": 50
    },
    "category": "여우 포켓몬",
    "heightM": 0.6,
    "weightKg": 8.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/827.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/827.png"
  },
  {
    "id": 828,
    "dexNumber": 828,
    "generation": 8,
    "nameKo": "폭슬라이",
    "nameEn": "Thievul",
    "types": [
      "악"
    ],
    "stats": {
      "hp": 70,
      "attack": 58,
      "defense": 58,
      "specialAttack": 87,
      "specialDefense": 92,
      "speed": 90
    },
    "category": "여우 포켓몬",
    "heightM": 1.2,
    "weightKg": 19.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/828.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/828.png"
  },
  {
    "id": 829,
    "dexNumber": 829,
    "generation": 8,
    "nameKo": "꼬모카",
    "nameEn": "Gossifleur",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 60,
      "speed": 10
    },
    "category": "꽃장식 포켓몬",
    "heightM": 0.4,
    "weightKg": 2.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/829.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/829.png"
  },
  {
    "id": 830,
    "dexNumber": 830,
    "generation": 8,
    "nameKo": "백솜모카",
    "nameEn": "Eldegoss",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 90,
      "specialAttack": 80,
      "specialDefense": 120,
      "speed": 60
    },
    "category": "솜장식 포켓몬",
    "heightM": 0.5,
    "weightKg": 2.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/830.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/830.png"
  },
  {
    "id": 831,
    "dexNumber": 831,
    "generation": 8,
    "nameKo": "우르",
    "nameEn": "Wooloo",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 42,
      "attack": 40,
      "defense": 55,
      "specialAttack": 40,
      "specialDefense": 45,
      "speed": 48
    },
    "category": "양 포켓몬",
    "heightM": 0.6,
    "weightKg": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/831.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/831.png"
  },
  {
    "id": 832,
    "dexNumber": 832,
    "generation": 8,
    "nameKo": "배우르",
    "nameEn": "Dubwool",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 72,
      "attack": 80,
      "defense": 100,
      "specialAttack": 60,
      "specialDefense": 90,
      "speed": 88
    },
    "category": "양 포켓몬",
    "heightM": 1.3,
    "weightKg": 43,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/832.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/832.png"
  },
  {
    "id": 833,
    "dexNumber": 833,
    "generation": 8,
    "nameKo": "깨물부기",
    "nameEn": "Chewtle",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 50,
      "attack": 64,
      "defense": 50,
      "specialAttack": 38,
      "specialDefense": 38,
      "speed": 44
    },
    "category": "물고늘어지기 포켓몬",
    "heightM": 0.3,
    "weightKg": 8.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/833.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/833.png"
  },
  {
    "id": 834,
    "dexNumber": 834,
    "generation": 8,
    "nameKo": "갈가부기",
    "nameEn": "Drednaw",
    "types": [
      "물",
      "바위"
    ],
    "stats": {
      "hp": 90,
      "attack": 115,
      "defense": 90,
      "specialAttack": 48,
      "specialDefense": 68,
      "speed": 74
    },
    "category": "물어뜯기 포켓몬",
    "heightM": 1,
    "weightKg": 115.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/834.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/834.png"
  },
  {
    "id": 835,
    "dexNumber": 835,
    "generation": 8,
    "nameKo": "멍파치",
    "nameEn": "Yamper",
    "types": [
      "전기"
    ],
    "stats": {
      "hp": 59,
      "attack": 45,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 26
    },
    "category": "강아지 포켓몬",
    "heightM": 0.3,
    "weightKg": 13.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/835.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/835.png"
  },
  {
    "id": 836,
    "dexNumber": 836,
    "generation": 8,
    "nameKo": "펄스멍",
    "nameEn": "Boltund",
    "types": [
      "전기"
    ],
    "stats": {
      "hp": 69,
      "attack": 90,
      "defense": 60,
      "specialAttack": 90,
      "specialDefense": 60,
      "speed": 121
    },
    "category": "개 포켓몬",
    "heightM": 1,
    "weightKg": 34,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/836.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/836.png"
  },
  {
    "id": 837,
    "dexNumber": 837,
    "generation": 8,
    "nameKo": "탄동",
    "nameEn": "Rolycoly",
    "types": [
      "바위"
    ],
    "stats": {
      "hp": 30,
      "attack": 40,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 30
    },
    "category": "석탄 포켓몬",
    "heightM": 0.3,
    "weightKg": 12,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/837.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/837.png"
  },
  {
    "id": 838,
    "dexNumber": 838,
    "generation": 8,
    "nameKo": "탄차곤",
    "nameEn": "Carkol",
    "types": [
      "바위",
      "불꽃"
    ],
    "stats": {
      "hp": 80,
      "attack": 60,
      "defense": 90,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 50
    },
    "category": "석탄 포켓몬",
    "heightM": 1.1,
    "weightKg": 78,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/838.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/838.png"
  },
  {
    "id": 839,
    "dexNumber": 839,
    "generation": 8,
    "nameKo": "석탄산",
    "nameEn": "Coalossal",
    "types": [
      "바위",
      "불꽃"
    ],
    "stats": {
      "hp": 110,
      "attack": 80,
      "defense": 120,
      "specialAttack": 80,
      "specialDefense": 90,
      "speed": 30
    },
    "category": "석탄 포켓몬",
    "heightM": 2.8,
    "weightKg": 310.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/839.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/839.png"
  },
  {
    "id": 840,
    "dexNumber": 840,
    "generation": 8,
    "nameKo": "과사삭벌레",
    "nameEn": "Applin",
    "types": [
      "풀",
      "드래곤"
    ],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 80,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 20
    },
    "category": "사과살이 포켓몬",
    "heightM": 0.2,
    "weightKg": 0.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/840.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/840.png"
  },
  {
    "id": 841,
    "dexNumber": 841,
    "generation": 8,
    "nameKo": "애프룡",
    "nameEn": "Flapple",
    "types": [
      "풀",
      "드래곤"
    ],
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 80,
      "specialAttack": 95,
      "specialDefense": 60,
      "speed": 70
    },
    "category": "사과날개 포켓몬",
    "heightM": 0.3,
    "weightKg": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/841.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/841.png"
  },
  {
    "id": 842,
    "dexNumber": 842,
    "generation": 8,
    "nameKo": "단지래플",
    "nameEn": "Appletun",
    "types": [
      "풀",
      "드래곤"
    ],
    "stats": {
      "hp": 110,
      "attack": 85,
      "defense": 80,
      "specialAttack": 100,
      "specialDefense": 80,
      "speed": 30
    },
    "category": "사과즙 포켓몬",
    "heightM": 0.4,
    "weightKg": 13,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/842.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/842.png"
  },
  {
    "id": 843,
    "dexNumber": 843,
    "generation": 8,
    "nameKo": "모래뱀",
    "nameEn": "Silicobra",
    "types": [
      "땅"
    ],
    "stats": {
      "hp": 52,
      "attack": 57,
      "defense": 75,
      "specialAttack": 35,
      "specialDefense": 50,
      "speed": 46
    },
    "category": "모래뱀 포켓몬",
    "heightM": 2.2,
    "weightKg": 7.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/843.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/843.png"
  },
  {
    "id": 844,
    "dexNumber": 844,
    "generation": 8,
    "nameKo": "사다이사",
    "nameEn": "Sandaconda",
    "types": [
      "땅"
    ],
    "stats": {
      "hp": 72,
      "attack": 107,
      "defense": 125,
      "specialAttack": 65,
      "specialDefense": 70,
      "speed": 71
    },
    "category": "모래뱀 포켓몬",
    "heightM": 3.8,
    "weightKg": 65.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/844.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/844.png"
  },
  {
    "id": 845,
    "dexNumber": 845,
    "generation": 8,
    "nameKo": "윽우지",
    "nameEn": "Cramorant",
    "types": [
      "비행",
      "물"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 55,
      "specialAttack": 85,
      "specialDefense": 95,
      "speed": 85
    },
    "category": "그대로삼키기 포켓몬",
    "heightM": 0.8,
    "weightKg": 18,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/845.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/845.png"
  },
  {
    "id": 846,
    "dexNumber": 846,
    "generation": 8,
    "nameKo": "찌로꼬치",
    "nameEn": "Arrokuda",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 41,
      "attack": 63,
      "defense": 40,
      "specialAttack": 40,
      "specialDefense": 30,
      "speed": 66
    },
    "category": "돌격 포켓몬",
    "heightM": 0.5,
    "weightKg": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/846.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/846.png"
  },
  {
    "id": 847,
    "dexNumber": 847,
    "generation": 8,
    "nameKo": "꼬치조",
    "nameEn": "Barraskewda",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 61,
      "attack": 123,
      "defense": 60,
      "specialAttack": 60,
      "specialDefense": 50,
      "speed": 136
    },
    "category": "꼬치 포켓몬",
    "heightM": 1.3,
    "weightKg": 30,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/847.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/847.png"
  },
  {
    "id": 848,
    "dexNumber": 848,
    "generation": 8,
    "nameKo": "일레즌",
    "nameEn": "Toxel",
    "types": [
      "전기",
      "독"
    ],
    "stats": {
      "hp": 40,
      "attack": 38,
      "defense": 35,
      "specialAttack": 54,
      "specialDefense": 35,
      "speed": 40
    },
    "category": "젖먹이 포켓몬",
    "heightM": 0.4,
    "weightKg": 11,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/848.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/848.png"
  },
  {
    "id": 849,
    "dexNumber": 849,
    "generation": 8,
    "nameKo": "스트린더",
    "nameEn": "Toxtricity",
    "types": [
      "전기",
      "독"
    ],
    "stats": {
      "hp": 75,
      "attack": 98,
      "defense": 70,
      "specialAttack": 114,
      "specialDefense": 70,
      "speed": 75
    },
    "category": "펑크 포켓몬",
    "heightM": 1.6,
    "weightKg": 40,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/849.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/849.png"
  },
  {
    "id": 850,
    "dexNumber": 850,
    "generation": 8,
    "nameKo": "태우지네",
    "nameEn": "Sizzlipede",
    "types": [
      "불꽃",
      "벌레"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 45,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 45
    },
    "category": "발열 포켓몬",
    "heightM": 0.7,
    "weightKg": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/850.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/850.png"
  },
  {
    "id": 851,
    "dexNumber": 851,
    "generation": 8,
    "nameKo": "다태우지네",
    "nameEn": "Centiskorch",
    "types": [
      "불꽃",
      "벌레"
    ],
    "stats": {
      "hp": 100,
      "attack": 115,
      "defense": 65,
      "specialAttack": 90,
      "specialDefense": 90,
      "speed": 65
    },
    "category": "발열 포켓몬",
    "heightM": 3,
    "weightKg": 120,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/851.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/851.png"
  },
  {
    "id": 852,
    "dexNumber": 852,
    "generation": 8,
    "nameKo": "때때무노",
    "nameEn": "Clobbopus",
    "types": [
      "격투"
    ],
    "stats": {
      "hp": 50,
      "attack": 68,
      "defense": 60,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 32
    },
    "category": "떼쟁이 포켓몬",
    "heightM": 0.6,
    "weightKg": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/852.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/852.png"
  },
  {
    "id": 853,
    "dexNumber": 853,
    "generation": 8,
    "nameKo": "케오퍼스",
    "nameEn": "Grapploct",
    "types": [
      "격투"
    ],
    "stats": {
      "hp": 80,
      "attack": 118,
      "defense": 90,
      "specialAttack": 70,
      "specialDefense": 80,
      "speed": 42
    },
    "category": "유술 포켓몬",
    "heightM": 1.6,
    "weightKg": 39,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/853.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/853.png"
  },
  {
    "id": 854,
    "dexNumber": 854,
    "generation": 8,
    "nameKo": "데인차",
    "nameEn": "Sinistea",
    "types": [
      "고스트"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 45,
      "specialAttack": 74,
      "specialDefense": 54,
      "speed": 50
    },
    "category": "홍차 포켓몬",
    "heightM": 0.1,
    "weightKg": 0.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/854.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/854.png"
  },
  {
    "id": 855,
    "dexNumber": 855,
    "generation": 8,
    "nameKo": "포트데스",
    "nameEn": "Polteageist",
    "types": [
      "고스트"
    ],
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 65,
      "specialAttack": 134,
      "specialDefense": 114,
      "speed": 70
    },
    "category": "홍차 포켓몬",
    "heightM": 0.2,
    "weightKg": 0.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/855.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/855.png"
  },
  {
    "id": 856,
    "dexNumber": 856,
    "generation": 8,
    "nameKo": "몸지브림",
    "nameEn": "Hatenna",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 42,
      "attack": 30,
      "defense": 45,
      "specialAttack": 56,
      "specialDefense": 53,
      "speed": 39
    },
    "category": "차분 포켓몬",
    "heightM": 0.4,
    "weightKg": 3.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/856.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/856.png"
  },
  {
    "id": 857,
    "dexNumber": 857,
    "generation": 8,
    "nameKo": "손지브림",
    "nameEn": "Hattrem",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 57,
      "attack": 40,
      "defense": 65,
      "specialAttack": 86,
      "specialDefense": 73,
      "speed": 49
    },
    "category": "정숙 포켓몬",
    "heightM": 0.6,
    "weightKg": 4.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/857.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/857.png"
  },
  {
    "id": 858,
    "dexNumber": 858,
    "generation": 8,
    "nameKo": "브리무음",
    "nameEn": "Hatterene",
    "types": [
      "에스퍼",
      "페어리"
    ],
    "stats": {
      "hp": 57,
      "attack": 90,
      "defense": 95,
      "specialAttack": 136,
      "specialDefense": 103,
      "speed": 29
    },
    "category": "정적 포켓몬",
    "heightM": 2.1,
    "weightKg": 5.1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/858.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/858.png"
  },
  {
    "id": 859,
    "dexNumber": 859,
    "generation": 8,
    "nameKo": "메롱꿍",
    "nameEn": "Impidimp",
    "types": [
      "악",
      "페어리"
    ],
    "stats": {
      "hp": 45,
      "attack": 45,
      "defense": 30,
      "specialAttack": 55,
      "specialDefense": 40,
      "speed": 50
    },
    "category": "꾀부리기 포켓몬",
    "heightM": 0.4,
    "weightKg": 5.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/859.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/859.png"
  },
  {
    "id": 860,
    "dexNumber": 860,
    "generation": 8,
    "nameKo": "쏘겨모",
    "nameEn": "Morgrem",
    "types": [
      "악",
      "페어리"
    ],
    "stats": {
      "hp": 65,
      "attack": 60,
      "defense": 45,
      "specialAttack": 75,
      "specialDefense": 55,
      "speed": 70
    },
    "category": "성악 포켓몬",
    "heightM": 0.8,
    "weightKg": 12.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/860.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/860.png"
  },
  {
    "id": 861,
    "dexNumber": 861,
    "generation": 8,
    "nameKo": "오롱털",
    "nameEn": "Grimmsnarl",
    "types": [
      "악",
      "페어리"
    ],
    "stats": {
      "hp": 95,
      "attack": 120,
      "defense": 65,
      "specialAttack": 95,
      "specialDefense": 75,
      "speed": 60
    },
    "category": "벌크업 포켓몬",
    "heightM": 1.5,
    "weightKg": 61,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/861.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/861.png"
  },
  {
    "id": 862,
    "dexNumber": 862,
    "generation": 8,
    "nameKo": "가로막구리",
    "nameEn": "Obstagoon",
    "types": [
      "악",
      "노말"
    ],
    "stats": {
      "hp": 93,
      "attack": 90,
      "defense": 101,
      "specialAttack": 60,
      "specialDefense": 81,
      "speed": 95
    },
    "category": "정지 포켓몬",
    "heightM": 1.6,
    "weightKg": 46,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/862.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/862.png"
  },
  {
    "id": 863,
    "dexNumber": 863,
    "generation": 8,
    "nameKo": "나이킹",
    "nameEn": "Perrserker",
    "types": [
      "강철"
    ],
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 100,
      "specialAttack": 50,
      "specialDefense": 60,
      "speed": 50
    },
    "category": "바이킹 포켓몬",
    "heightM": 0.8,
    "weightKg": 28,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/863.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/863.png"
  },
  {
    "id": 864,
    "dexNumber": 864,
    "generation": 8,
    "nameKo": "산호르곤",
    "nameEn": "Cursola",
    "types": [
      "고스트"
    ],
    "stats": {
      "hp": 60,
      "attack": 95,
      "defense": 50,
      "specialAttack": 145,
      "specialDefense": 130,
      "speed": 30
    },
    "category": "산호 포켓몬",
    "heightM": 1,
    "weightKg": 0.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/864.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/864.png"
  },
  {
    "id": 865,
    "dexNumber": 865,
    "generation": 8,
    "nameKo": "창파나이트",
    "nameEn": "Sirfetch’d",
    "types": [
      "격투"
    ],
    "stats": {
      "hp": 62,
      "attack": 135,
      "defense": 95,
      "specialAttack": 68,
      "specialDefense": 82,
      "speed": 65
    },
    "category": "청둥오리 포켓몬",
    "heightM": 0.8,
    "weightKg": 117,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/865.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/865.png"
  },
  {
    "id": 866,
    "dexNumber": 866,
    "generation": 8,
    "nameKo": "마임꽁꽁",
    "nameEn": "Mr. Rime",
    "types": [
      "얼음",
      "에스퍼"
    ],
    "stats": {
      "hp": 80,
      "attack": 85,
      "defense": 75,
      "specialAttack": 110,
      "specialDefense": 100,
      "speed": 70
    },
    "category": "코미디언 포켓몬",
    "heightM": 1.5,
    "weightKg": 58.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/866.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/866.png"
  },
  {
    "id": 867,
    "dexNumber": 867,
    "generation": 8,
    "nameKo": "데스판",
    "nameEn": "Runerigus",
    "types": [
      "땅",
      "고스트"
    ],
    "stats": {
      "hp": 58,
      "attack": 95,
      "defense": 145,
      "specialAttack": 50,
      "specialDefense": 105,
      "speed": 30
    },
    "category": "원념 포켓몬",
    "heightM": 1.6,
    "weightKg": 66.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/867.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/867.png"
  },
  {
    "id": 868,
    "dexNumber": 868,
    "generation": 8,
    "nameKo": "마빌크",
    "nameEn": "Milcery",
    "types": [
      "페어리"
    ],
    "stats": {
      "hp": 45,
      "attack": 40,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 61,
      "speed": 34
    },
    "category": "크림 포켓몬",
    "heightM": 0.2,
    "weightKg": 0.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/868.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/868.png"
  },
  {
    "id": 869,
    "dexNumber": 869,
    "generation": 8,
    "nameKo": "마휘핑",
    "nameEn": "Alcremie",
    "types": [
      "페어리"
    ],
    "stats": {
      "hp": 65,
      "attack": 60,
      "defense": 75,
      "specialAttack": 110,
      "specialDefense": 121,
      "speed": 64
    },
    "category": "크림 포켓몬",
    "heightM": 0.3,
    "weightKg": 0.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/869.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/869.png"
  },
  {
    "id": 870,
    "dexNumber": 870,
    "generation": 8,
    "nameKo": "대여르",
    "nameEn": "Falinks",
    "types": [
      "격투"
    ],
    "stats": {
      "hp": 65,
      "attack": 100,
      "defense": 100,
      "specialAttack": 70,
      "specialDefense": 60,
      "speed": 75
    },
    "category": "진형 포켓몬",
    "heightM": 3,
    "weightKg": 62,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/870.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/870.png"
  },
  {
    "id": 871,
    "dexNumber": 871,
    "generation": 8,
    "nameKo": "찌르성게",
    "nameEn": "Pincurchin",
    "types": [
      "전기"
    ],
    "stats": {
      "hp": 48,
      "attack": 101,
      "defense": 95,
      "specialAttack": 91,
      "specialDefense": 85,
      "speed": 15
    },
    "category": "성게 포켓몬",
    "heightM": 0.3,
    "weightKg": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/871.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/871.png"
  },
  {
    "id": 872,
    "dexNumber": 872,
    "generation": 8,
    "nameKo": "누니머기",
    "nameEn": "Snom",
    "types": [
      "얼음",
      "벌레"
    ],
    "stats": {
      "hp": 30,
      "attack": 25,
      "defense": 35,
      "specialAttack": 45,
      "specialDefense": 30,
      "speed": 20
    },
    "category": "애벌레 포켓몬",
    "heightM": 0.3,
    "weightKg": 3.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/872.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/872.png"
  },
  {
    "id": 873,
    "dexNumber": 873,
    "generation": 8,
    "nameKo": "모스노우",
    "nameEn": "Frosmoth",
    "types": [
      "얼음",
      "벌레"
    ],
    "stats": {
      "hp": 70,
      "attack": 65,
      "defense": 60,
      "specialAttack": 125,
      "specialDefense": 90,
      "speed": 65
    },
    "category": "얼음나방 포켓몬",
    "heightM": 1.3,
    "weightKg": 42,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/873.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/873.png"
  },
  {
    "id": 874,
    "dexNumber": 874,
    "generation": 8,
    "nameKo": "돌헨진",
    "nameEn": "Stonjourner",
    "types": [
      "바위"
    ],
    "stats": {
      "hp": 100,
      "attack": 125,
      "defense": 135,
      "specialAttack": 20,
      "specialDefense": 20,
      "speed": 70
    },
    "category": "거석 포켓몬",
    "heightM": 2.5,
    "weightKg": 520,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/874.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/874.png"
  },
  {
    "id": 875,
    "dexNumber": 875,
    "generation": 8,
    "nameKo": "빙큐보",
    "nameEn": "Eiscue",
    "types": [
      "얼음"
    ],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 110,
      "specialAttack": 65,
      "specialDefense": 90,
      "speed": 50
    },
    "category": "펭귄 포켓몬",
    "heightM": 1.4,
    "weightKg": 89,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/875.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/875.png"
  },
  {
    "id": 876,
    "dexNumber": 876,
    "generation": 8,
    "nameKo": "에써르",
    "nameEn": "Indeedee",
    "types": [
      "에스퍼",
      "노말"
    ],
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 55,
      "specialAttack": 105,
      "specialDefense": 95,
      "speed": 95
    },
    "category": "감정 포켓몬",
    "heightM": 0.9,
    "weightKg": 28,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/876.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/876.png"
  },
  {
    "id": 877,
    "dexNumber": 877,
    "generation": 8,
    "nameKo": "모르페코",
    "nameEn": "Morpeko",
    "types": [
      "전기",
      "악"
    ],
    "stats": {
      "hp": 58,
      "attack": 95,
      "defense": 58,
      "specialAttack": 70,
      "specialDefense": 58,
      "speed": 97
    },
    "category": "양면 포켓몬",
    "heightM": 0.3,
    "weightKg": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/877.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/877.png"
  },
  {
    "id": 878,
    "dexNumber": 878,
    "generation": 8,
    "nameKo": "끼리동",
    "nameEn": "Cufant",
    "types": [
      "강철"
    ],
    "stats": {
      "hp": 72,
      "attack": 80,
      "defense": 49,
      "specialAttack": 40,
      "specialDefense": 49,
      "speed": 40
    },
    "category": "동상 포켓몬",
    "heightM": 1.2,
    "weightKg": 100,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/878.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/878.png"
  },
  {
    "id": 879,
    "dexNumber": 879,
    "generation": 8,
    "nameKo": "대왕끼리동",
    "nameEn": "Copperajah",
    "types": [
      "강철"
    ],
    "stats": {
      "hp": 122,
      "attack": 130,
      "defense": 69,
      "specialAttack": 80,
      "specialDefense": 69,
      "speed": 30
    },
    "category": "동상 포켓몬",
    "heightM": 3,
    "weightKg": 650,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/879.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/879.png"
  },
  {
    "id": 880,
    "dexNumber": 880,
    "generation": 8,
    "nameKo": "파치래곤",
    "nameEn": "Dracozolt",
    "types": [
      "전기",
      "드래곤"
    ],
    "stats": {
      "hp": 90,
      "attack": 100,
      "defense": 90,
      "specialAttack": 80,
      "specialDefense": 70,
      "speed": 75
    },
    "category": "화석 포켓몬",
    "heightM": 1.8,
    "weightKg": 190,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/880.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/880.png"
  },
  {
    "id": 881,
    "dexNumber": 881,
    "generation": 8,
    "nameKo": "파치르돈",
    "nameEn": "Arctozolt",
    "types": [
      "전기",
      "얼음"
    ],
    "stats": {
      "hp": 90,
      "attack": 100,
      "defense": 90,
      "specialAttack": 90,
      "specialDefense": 80,
      "speed": 55
    },
    "category": "화석 포켓몬",
    "heightM": 2.3,
    "weightKg": 150,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/881.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/881.png"
  },
  {
    "id": 882,
    "dexNumber": 882,
    "generation": 8,
    "nameKo": "어래곤",
    "nameEn": "Dracovish",
    "types": [
      "물",
      "드래곤"
    ],
    "stats": {
      "hp": 90,
      "attack": 90,
      "defense": 100,
      "specialAttack": 70,
      "specialDefense": 80,
      "speed": 75
    },
    "category": "화석 포켓몬",
    "heightM": 2.3,
    "weightKg": 215,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/882.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/882.png"
  },
  {
    "id": 883,
    "dexNumber": 883,
    "generation": 8,
    "nameKo": "어치르돈",
    "nameEn": "Arctovish",
    "types": [
      "물",
      "얼음"
    ],
    "stats": {
      "hp": 90,
      "attack": 90,
      "defense": 100,
      "specialAttack": 80,
      "specialDefense": 90,
      "speed": 55
    },
    "category": "화석 포켓몬",
    "heightM": 2,
    "weightKg": 175,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/883.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/883.png"
  },
  {
    "id": 884,
    "dexNumber": 884,
    "generation": 8,
    "nameKo": "두랄루돈",
    "nameEn": "Duraludon",
    "types": [
      "강철",
      "드래곤"
    ],
    "stats": {
      "hp": 70,
      "attack": 95,
      "defense": 115,
      "specialAttack": 120,
      "specialDefense": 50,
      "speed": 85
    },
    "category": "합금 포켓몬",
    "heightM": 1.8,
    "weightKg": 40,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/884.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/884.png"
  },
  {
    "id": 885,
    "dexNumber": 885,
    "generation": 8,
    "nameKo": "드라꼰",
    "nameEn": "Dreepy",
    "types": [
      "드래곤",
      "고스트"
    ],
    "stats": {
      "hp": 28,
      "attack": 60,
      "defense": 30,
      "specialAttack": 40,
      "specialDefense": 30,
      "speed": 82
    },
    "category": "원망 포켓몬",
    "heightM": 0.5,
    "weightKg": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/885.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/885.png"
  },
  {
    "id": 886,
    "dexNumber": 886,
    "generation": 8,
    "nameKo": "드래런치",
    "nameEn": "Drakloak",
    "types": [
      "드래곤",
      "고스트"
    ],
    "stats": {
      "hp": 68,
      "attack": 80,
      "defense": 50,
      "specialAttack": 60,
      "specialDefense": 50,
      "speed": 102
    },
    "category": "돌보미 포켓몬",
    "heightM": 1.4,
    "weightKg": 11,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/886.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/886.png"
  },
  {
    "id": 887,
    "dexNumber": 887,
    "generation": 8,
    "nameKo": "드래펄트",
    "nameEn": "Dragapult",
    "types": [
      "드래곤",
      "고스트"
    ],
    "stats": {
      "hp": 88,
      "attack": 120,
      "defense": 75,
      "specialAttack": 100,
      "specialDefense": 75,
      "speed": 142
    },
    "category": "스텔스 포켓몬",
    "heightM": 3,
    "weightKg": 50,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/887.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/887.png"
  },
  {
    "id": 888,
    "dexNumber": 888,
    "generation": 8,
    "nameKo": "자시안",
    "nameEn": "Zacian",
    "types": [
      "페어리"
    ],
    "stats": {
      "hp": 92,
      "attack": 120,
      "defense": 115,
      "specialAttack": 80,
      "specialDefense": 115,
      "speed": 138
    },
    "category": "강자 포켓몬",
    "heightM": 2.8,
    "weightKg": 110,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/888.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/888.png"
  },
  {
    "id": 889,
    "dexNumber": 889,
    "generation": 8,
    "nameKo": "자마젠타",
    "nameEn": "Zamazenta",
    "types": [
      "격투"
    ],
    "stats": {
      "hp": 92,
      "attack": 120,
      "defense": 115,
      "specialAttack": 80,
      "specialDefense": 115,
      "speed": 138
    },
    "category": "강자 포켓몬",
    "heightM": 2.9,
    "weightKg": 210,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/889.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/889.png"
  },
  {
    "id": 890,
    "dexNumber": 890,
    "generation": 8,
    "nameKo": "무한다이노",
    "nameEn": "Eternatus",
    "types": [
      "독",
      "드래곤"
    ],
    "stats": {
      "hp": 140,
      "attack": 85,
      "defense": 95,
      "specialAttack": 145,
      "specialDefense": 95,
      "speed": 130
    },
    "category": "거대 포켓몬",
    "heightM": 20,
    "weightKg": 950,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/890.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/890.png"
  },
  {
    "id": 891,
    "dexNumber": 891,
    "generation": 8,
    "nameKo": "치고마",
    "nameEn": "Kubfu",
    "types": [
      "격투"
    ],
    "stats": {
      "hp": 60,
      "attack": 90,
      "defense": 60,
      "specialAttack": 53,
      "specialDefense": 50,
      "speed": 72
    },
    "category": "권법 포켓몬",
    "heightM": 0.6,
    "weightKg": 12,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/891.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/891.png"
  },
  {
    "id": 892,
    "dexNumber": 892,
    "generation": 8,
    "nameKo": "우라오스",
    "nameEn": "Urshifu",
    "types": [
      "격투",
      "악"
    ],
    "stats": {
      "hp": 100,
      "attack": 130,
      "defense": 100,
      "specialAttack": 63,
      "specialDefense": 60,
      "speed": 97
    },
    "category": "권법 포켓몬",
    "heightM": 1.9,
    "weightKg": 105,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/892.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/892.png"
  },
  {
    "id": 893,
    "dexNumber": 893,
    "generation": 8,
    "nameKo": "자루도",
    "nameEn": "Zarude",
    "types": [
      "악",
      "풀"
    ],
    "stats": {
      "hp": 105,
      "attack": 120,
      "defense": 105,
      "specialAttack": 70,
      "specialDefense": 95,
      "speed": 105
    },
    "category": "나쁜원숭이 포켓몬",
    "heightM": 1.8,
    "weightKg": 70,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/893.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/893.png"
  },
  {
    "id": 894,
    "dexNumber": 894,
    "generation": 8,
    "nameKo": "레지에레키",
    "nameEn": "Regieleki",
    "types": [
      "전기"
    ],
    "stats": {
      "hp": 80,
      "attack": 100,
      "defense": 50,
      "specialAttack": 100,
      "specialDefense": 50,
      "speed": 200
    },
    "category": "일렉트론 포켓몬",
    "heightM": 1.2,
    "weightKg": 145,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/894.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/894.png"
  },
  {
    "id": 895,
    "dexNumber": 895,
    "generation": 8,
    "nameKo": "레지드래고",
    "nameEn": "Regidrago",
    "types": [
      "드래곤"
    ],
    "stats": {
      "hp": 200,
      "attack": 100,
      "defense": 50,
      "specialAttack": 100,
      "specialDefense": 50,
      "speed": 80
    },
    "category": "용옥 포켓몬",
    "heightM": 2.1,
    "weightKg": 200,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/895.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/895.png"
  },
  {
    "id": 896,
    "dexNumber": 896,
    "generation": 8,
    "nameKo": "블리자포스",
    "nameEn": "Glastrier",
    "types": [
      "얼음"
    ],
    "stats": {
      "hp": 100,
      "attack": 145,
      "defense": 130,
      "specialAttack": 65,
      "specialDefense": 110,
      "speed": 30
    },
    "category": "사나운말 포켓몬",
    "heightM": 2.2,
    "weightKg": 800,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/896.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/896.png"
  },
  {
    "id": 897,
    "dexNumber": 897,
    "generation": 8,
    "nameKo": "레이스포스",
    "nameEn": "Spectrier",
    "types": [
      "고스트"
    ],
    "stats": {
      "hp": 100,
      "attack": 65,
      "defense": 60,
      "specialAttack": 145,
      "specialDefense": 80,
      "speed": 130
    },
    "category": "빠른말 포켓몬",
    "heightM": 2,
    "weightKg": 44.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/897.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/897.png"
  },
  {
    "id": 898,
    "dexNumber": 898,
    "generation": 8,
    "nameKo": "버드렉스",
    "nameEn": "Calyrex",
    "types": [
      "에스퍼",
      "풀"
    ],
    "stats": {
      "hp": 100,
      "attack": 80,
      "defense": 80,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 80
    },
    "category": "킹 포켓몬",
    "heightM": 1.1,
    "weightKg": 7.7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/898.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/898.png"
  },
  {
    "id": 899,
    "dexNumber": 899,
    "generation": 8,
    "nameKo": "신비록",
    "nameEn": "Wyrdeer",
    "types": [
      "노말",
      "에스퍼"
    ],
    "stats": {
      "hp": 103,
      "attack": 105,
      "defense": 72,
      "specialAttack": 105,
      "specialDefense": 75,
      "speed": 65
    },
    "category": "큰뿔 포켓몬",
    "heightM": 1.8,
    "weightKg": 95.1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/899.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/899.png"
  },
  {
    "id": 900,
    "dexNumber": 900,
    "generation": 8,
    "nameKo": "사마자르",
    "nameEn": "Kleavor",
    "types": [
      "벌레",
      "바위"
    ],
    "stats": {
      "hp": 70,
      "attack": 135,
      "defense": 95,
      "specialAttack": 45,
      "specialDefense": 70,
      "speed": 85
    },
    "category": "큰도끼 포켓몬",
    "heightM": 1.8,
    "weightKg": 89,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/900.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/900.png"
  },
  {
    "id": 901,
    "dexNumber": 901,
    "generation": 8,
    "nameKo": "다투곰",
    "nameEn": "Ursaluna",
    "types": [
      "땅",
      "노말"
    ],
    "stats": {
      "hp": 130,
      "attack": 140,
      "defense": 105,
      "specialAttack": 45,
      "specialDefense": 80,
      "speed": 50
    },
    "category": "이탄 포켓몬",
    "heightM": 2.4,
    "weightKg": 290,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/901.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/901.png"
  },
  {
    "id": 902,
    "dexNumber": 902,
    "generation": 8,
    "nameKo": "대쓰여너",
    "nameEn": "Basculegion",
    "types": [
      "물",
      "고스트"
    ],
    "stats": {
      "hp": 120,
      "attack": 112,
      "defense": 65,
      "specialAttack": 80,
      "specialDefense": 75,
      "speed": 78
    },
    "category": "큰물고기 포켓몬",
    "heightM": 3,
    "weightKg": 110,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/902.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/902.png"
  },
  {
    "id": 903,
    "dexNumber": 903,
    "generation": 8,
    "nameKo": "포푸니크",
    "nameEn": "Sneasler",
    "types": [
      "격투",
      "독"
    ],
    "stats": {
      "hp": 80,
      "attack": 130,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 80,
      "speed": 120
    },
    "category": "클라이밍 포켓몬",
    "heightM": 1.3,
    "weightKg": 43,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/903.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/903.png"
  },
  {
    "id": 904,
    "dexNumber": 904,
    "generation": 8,
    "nameKo": "장침바루",
    "nameEn": "Overqwil",
    "types": [
      "악",
      "독"
    ],
    "stats": {
      "hp": 85,
      "attack": 115,
      "defense": 95,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 85
    },
    "category": "침붕포켓몬몬 포켓몬",
    "heightM": 2.5,
    "weightKg": 60.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/904.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/904.png"
  },
  {
    "id": 905,
    "dexNumber": 905,
    "generation": 8,
    "nameKo": "러브로스",
    "nameEn": "Enamorus",
    "types": [
      "페어리",
      "비행"
    ],
    "stats": {
      "hp": 74,
      "attack": 115,
      "defense": 70,
      "specialAttack": 135,
      "specialDefense": 80,
      "speed": 106
    },
    "category": "애증 포켓몬",
    "heightM": 1.6,
    "weightKg": 48,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/905.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/905.png"
  },
  {
    "id": 906,
    "dexNumber": 906,
    "generation": 9,
    "nameKo": "나오하",
    "nameEn": "Sprigatito",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 40,
      "attack": 61,
      "defense": 54,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 65
    },
    "category": "풀고양이 포켓몬",
    "heightM": 0.4,
    "weightKg": 4.1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/906.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/906.png"
  },
  {
    "id": 907,
    "dexNumber": 907,
    "generation": 9,
    "nameKo": "나로테",
    "nameEn": "Floragato",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 61,
      "attack": 80,
      "defense": 63,
      "specialAttack": 60,
      "specialDefense": 63,
      "speed": 83
    },
    "category": "풀고양이 포켓몬",
    "heightM": 0.9,
    "weightKg": 12.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/907.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/907.png"
  },
  {
    "id": 908,
    "dexNumber": 908,
    "generation": 9,
    "nameKo": "마스카나",
    "nameEn": "Meowscarada",
    "types": [
      "풀",
      "악"
    ],
    "stats": {
      "hp": 76,
      "attack": 110,
      "defense": 70,
      "specialAttack": 81,
      "specialDefense": 70,
      "speed": 123
    },
    "category": "매지션 포켓몬",
    "heightM": 1.5,
    "weightKg": 31.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/908.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/908.png"
  },
  {
    "id": 909,
    "dexNumber": 909,
    "generation": 9,
    "nameKo": "뜨아거",
    "nameEn": "Fuecoco",
    "types": [
      "불꽃"
    ],
    "stats": {
      "hp": 67,
      "attack": 45,
      "defense": 59,
      "specialAttack": 63,
      "specialDefense": 40,
      "speed": 36
    },
    "category": "불꽃악어 포켓몬",
    "heightM": 0.4,
    "weightKg": 9.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/909.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/909.png"
  },
  {
    "id": 910,
    "dexNumber": 910,
    "generation": 9,
    "nameKo": "악뜨거",
    "nameEn": "Crocalor",
    "types": [
      "불꽃"
    ],
    "stats": {
      "hp": 81,
      "attack": 55,
      "defense": 78,
      "specialAttack": 90,
      "specialDefense": 58,
      "speed": 49
    },
    "category": "불꽃악어 포켓몬",
    "heightM": 1,
    "weightKg": 30.7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/910.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/910.png"
  },
  {
    "id": 911,
    "dexNumber": 911,
    "generation": 9,
    "nameKo": "라우드본",
    "nameEn": "Skeledirge",
    "types": [
      "불꽃",
      "고스트"
    ],
    "stats": {
      "hp": 104,
      "attack": 75,
      "defense": 100,
      "specialAttack": 110,
      "specialDefense": 75,
      "speed": 66
    },
    "category": "싱어 포켓몬",
    "heightM": 1.6,
    "weightKg": 326.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/911.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/911.png"
  },
  {
    "id": 912,
    "dexNumber": 912,
    "generation": 9,
    "nameKo": "꾸왁스",
    "nameEn": "Quaxly",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 55,
      "attack": 65,
      "defense": 45,
      "specialAttack": 50,
      "specialDefense": 45,
      "speed": 50
    },
    "category": "꼬마오리 포켓몬",
    "heightM": 0.5,
    "weightKg": 6.1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/912.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/912.png"
  },
  {
    "id": 913,
    "dexNumber": 913,
    "generation": 9,
    "nameKo": "아꾸왁",
    "nameEn": "Quaxwell",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 65,
      "specialAttack": 65,
      "specialDefense": 60,
      "speed": 65
    },
    "category": "레슨 포켓몬",
    "heightM": 1.2,
    "weightKg": 21.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/913.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/913.png"
  },
  {
    "id": 914,
    "dexNumber": 914,
    "generation": 9,
    "nameKo": "웨이니발",
    "nameEn": "Quaquaval",
    "types": [
      "물",
      "격투"
    ],
    "stats": {
      "hp": 85,
      "attack": 120,
      "defense": 80,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 85
    },
    "category": "댄서 포켓몬",
    "heightM": 1.8,
    "weightKg": 61.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/914.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/914.png"
  },
  {
    "id": 915,
    "dexNumber": 915,
    "generation": 9,
    "nameKo": "맛보돈",
    "nameEn": "Lechonk",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 54,
      "attack": 45,
      "defense": 40,
      "specialAttack": 35,
      "specialDefense": 45,
      "speed": 35
    },
    "category": "돼지 포켓몬",
    "heightM": 0.5,
    "weightKg": 10.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/915.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/915.png"
  },
  {
    "id": 916,
    "dexNumber": 916,
    "generation": 9,
    "nameKo": "퍼퓨돈",
    "nameEn": "Oinkologne",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 110,
      "attack": 100,
      "defense": 75,
      "specialAttack": 59,
      "specialDefense": 80,
      "speed": 65
    },
    "category": "돼지 포켓몬",
    "heightM": 1,
    "weightKg": 120,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/916.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/916.png"
  },
  {
    "id": 917,
    "dexNumber": 917,
    "generation": 9,
    "nameKo": "타랜툴라",
    "nameEn": "Tarountula",
    "types": [
      "벌레"
    ],
    "stats": {
      "hp": 35,
      "attack": 41,
      "defense": 45,
      "specialAttack": 29,
      "specialDefense": 40,
      "speed": 20
    },
    "category": "실타래 포켓몬",
    "heightM": 0.3,
    "weightKg": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/917.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/917.png"
  },
  {
    "id": 918,
    "dexNumber": 918,
    "generation": 9,
    "nameKo": "트래피더",
    "nameEn": "Spidops",
    "types": [
      "벌레"
    ],
    "stats": {
      "hp": 60,
      "attack": 79,
      "defense": 92,
      "specialAttack": 52,
      "specialDefense": 86,
      "speed": 35
    },
    "category": "트랩 포켓몬",
    "heightM": 1,
    "weightKg": 16.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/918.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/918.png"
  },
  {
    "id": 919,
    "dexNumber": 919,
    "generation": 9,
    "nameKo": "콩알뚜기",
    "nameEn": "Nymble",
    "types": [
      "벌레"
    ],
    "stats": {
      "hp": 33,
      "attack": 46,
      "defense": 40,
      "specialAttack": 21,
      "specialDefense": 25,
      "speed": 45
    },
    "category": "메뚜기 포켓몬",
    "heightM": 0.2,
    "weightKg": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/919.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/919.png"
  },
  {
    "id": 920,
    "dexNumber": 920,
    "generation": 9,
    "nameKo": "엑스레그",
    "nameEn": "Lokix",
    "types": [
      "벌레",
      "악"
    ],
    "stats": {
      "hp": 71,
      "attack": 102,
      "defense": 78,
      "specialAttack": 52,
      "specialDefense": 55,
      "speed": 92
    },
    "category": "메뚜기 포켓몬",
    "heightM": 1,
    "weightKg": 17.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/920.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/920.png"
  },
  {
    "id": 921,
    "dexNumber": 921,
    "generation": 9,
    "nameKo": "빠모",
    "nameEn": "Pawmi",
    "types": [
      "전기"
    ],
    "stats": {
      "hp": 45,
      "attack": 50,
      "defense": 20,
      "specialAttack": 40,
      "specialDefense": 25,
      "speed": 60
    },
    "category": "쥐 포켓몬",
    "heightM": 0.3,
    "weightKg": 2.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/921.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/921.png"
  },
  {
    "id": 922,
    "dexNumber": 922,
    "generation": 9,
    "nameKo": "빠모트",
    "nameEn": "Pawmo",
    "types": [
      "전기",
      "격투"
    ],
    "stats": {
      "hp": 60,
      "attack": 75,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 40,
      "speed": 85
    },
    "category": "쥐 포켓몬",
    "heightM": 0.4,
    "weightKg": 6.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/922.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/922.png"
  },
  {
    "id": 923,
    "dexNumber": 923,
    "generation": 9,
    "nameKo": "빠르모트",
    "nameEn": "Pawmot",
    "types": [
      "전기",
      "격투"
    ],
    "stats": {
      "hp": 70,
      "attack": 115,
      "defense": 70,
      "specialAttack": 70,
      "specialDefense": 60,
      "speed": 105
    },
    "category": "손길 포켓몬",
    "heightM": 0.9,
    "weightKg": 41,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/923.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/923.png"
  },
  {
    "id": 924,
    "dexNumber": 924,
    "generation": 9,
    "nameKo": "두리쥐",
    "nameEn": "Tandemaus",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 45,
      "specialAttack": 40,
      "specialDefense": 45,
      "speed": 75
    },
    "category": "커플 포켓몬",
    "heightM": 0.3,
    "weightKg": 1.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/924.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/924.png"
  },
  {
    "id": 925,
    "dexNumber": 925,
    "generation": 9,
    "nameKo": "파밀리쥐",
    "nameEn": "Maushold",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 74,
      "attack": 75,
      "defense": 70,
      "specialAttack": 65,
      "specialDefense": 75,
      "speed": 111
    },
    "category": "패밀리 포켓몬",
    "heightM": 0.3,
    "weightKg": 2.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/925.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/925.png"
  },
  {
    "id": 926,
    "dexNumber": 926,
    "generation": 9,
    "nameKo": "쫀도기",
    "nameEn": "Fidough",
    "types": [
      "페어리"
    ],
    "stats": {
      "hp": 37,
      "attack": 55,
      "defense": 70,
      "specialAttack": 30,
      "specialDefense": 55,
      "speed": 65
    },
    "category": "강아지 포켓몬",
    "heightM": 0.3,
    "weightKg": 10.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/926.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/926.png"
  },
  {
    "id": 927,
    "dexNumber": 927,
    "generation": 9,
    "nameKo": "바우첼",
    "nameEn": "Dachsbun",
    "types": [
      "페어리"
    ],
    "stats": {
      "hp": 57,
      "attack": 80,
      "defense": 115,
      "specialAttack": 50,
      "specialDefense": 80,
      "speed": 95
    },
    "category": "개 포켓몬",
    "heightM": 0.5,
    "weightKg": 14.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/927.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/927.png"
  },
  {
    "id": 928,
    "dexNumber": 928,
    "generation": 9,
    "nameKo": "미니브",
    "nameEn": "Smoliv",
    "types": [
      "풀",
      "노말"
    ],
    "stats": {
      "hp": 41,
      "attack": 35,
      "defense": 45,
      "specialAttack": 58,
      "specialDefense": 51,
      "speed": 30
    },
    "category": "올리브 포켓몬",
    "heightM": 0.3,
    "weightKg": 6.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/928.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/928.png"
  },
  {
    "id": 929,
    "dexNumber": 929,
    "generation": 9,
    "nameKo": "올리뇨",
    "nameEn": "Dolliv",
    "types": [
      "풀",
      "노말"
    ],
    "stats": {
      "hp": 52,
      "attack": 53,
      "defense": 60,
      "specialAttack": 78,
      "specialDefense": 78,
      "speed": 33
    },
    "category": "올리브 포켓몬",
    "heightM": 0.6,
    "weightKg": 11.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/929.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/929.png"
  },
  {
    "id": 930,
    "dexNumber": 930,
    "generation": 9,
    "nameKo": "올리르바",
    "nameEn": "Arboliva",
    "types": [
      "풀",
      "노말"
    ],
    "stats": {
      "hp": 78,
      "attack": 69,
      "defense": 90,
      "specialAttack": 125,
      "specialDefense": 109,
      "speed": 39
    },
    "category": "올리브 포켓몬",
    "heightM": 1.4,
    "weightKg": 48.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/930.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/930.png"
  },
  {
    "id": 931,
    "dexNumber": 931,
    "generation": 9,
    "nameKo": "시비꼬",
    "nameEn": "Squawkabilly",
    "types": [
      "노말",
      "비행"
    ],
    "stats": {
      "hp": 82,
      "attack": 96,
      "defense": 51,
      "specialAttack": 45,
      "specialDefense": 51,
      "speed": 92
    },
    "category": "잉꼬 포켓몬",
    "heightM": 0.6,
    "weightKg": 2.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/931.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/931.png"
  },
  {
    "id": 932,
    "dexNumber": 932,
    "generation": 9,
    "nameKo": "베베솔트",
    "nameEn": "Nacli",
    "types": [
      "바위"
    ],
    "stats": {
      "hp": 55,
      "attack": 55,
      "defense": 75,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 25
    },
    "category": "암염 포켓몬",
    "heightM": 0.4,
    "weightKg": 16,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/932.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/932.png"
  },
  {
    "id": 933,
    "dexNumber": 933,
    "generation": 9,
    "nameKo": "스태솔트",
    "nameEn": "Naclstack",
    "types": [
      "바위"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 100,
      "specialAttack": 35,
      "specialDefense": 65,
      "speed": 35
    },
    "category": "암염 포켓몬",
    "heightM": 0.6,
    "weightKg": 105,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/933.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/933.png"
  },
  {
    "id": 934,
    "dexNumber": 934,
    "generation": 9,
    "nameKo": "콜로솔트",
    "nameEn": "Garganacl",
    "types": [
      "바위"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 130,
      "specialAttack": 45,
      "specialDefense": 90,
      "speed": 35
    },
    "category": "암염 포켓몬",
    "heightM": 2.3,
    "weightKg": 240,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/934.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/934.png"
  },
  {
    "id": 935,
    "dexNumber": 935,
    "generation": 9,
    "nameKo": "카르본",
    "nameEn": "Charcadet",
    "types": [
      "불꽃"
    ],
    "stats": {
      "hp": 40,
      "attack": 50,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 40,
      "speed": 35
    },
    "category": "불의아이 포켓몬",
    "heightM": 0.6,
    "weightKg": 10.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/935.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/935.png"
  },
  {
    "id": 936,
    "dexNumber": 936,
    "generation": 9,
    "nameKo": "카디나르마",
    "nameEn": "Armarouge",
    "types": [
      "불꽃",
      "에스퍼"
    ],
    "stats": {
      "hp": 85,
      "attack": 60,
      "defense": 100,
      "specialAttack": 125,
      "specialDefense": 80,
      "speed": 75
    },
    "category": "불의전사 포켓몬",
    "heightM": 1.5,
    "weightKg": 85,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/936.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/936.png"
  },
  {
    "id": 937,
    "dexNumber": 937,
    "generation": 9,
    "nameKo": "파라블레이즈",
    "nameEn": "Ceruledge",
    "types": [
      "불꽃",
      "고스트"
    ],
    "stats": {
      "hp": 75,
      "attack": 125,
      "defense": 80,
      "specialAttack": 60,
      "specialDefense": 100,
      "speed": 85
    },
    "category": "불의검사 포켓몬",
    "heightM": 1.6,
    "weightKg": 62,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/937.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/937.png"
  },
  {
    "id": 938,
    "dexNumber": 938,
    "generation": 9,
    "nameKo": "빈나두",
    "nameEn": "Tadbulb",
    "types": [
      "전기"
    ],
    "stats": {
      "hp": 61,
      "attack": 31,
      "defense": 41,
      "specialAttack": 59,
      "specialDefense": 35,
      "speed": 45
    },
    "category": "전기올챙이 포켓몬",
    "heightM": 0.3,
    "weightKg": 0.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/938.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/938.png"
  },
  {
    "id": 939,
    "dexNumber": 939,
    "generation": 9,
    "nameKo": "찌리배리",
    "nameEn": "Bellibolt",
    "types": [
      "전기"
    ],
    "stats": {
      "hp": 109,
      "attack": 64,
      "defense": 91,
      "specialAttack": 103,
      "specialDefense": 83,
      "speed": 45
    },
    "category": "전기개구리 포켓몬",
    "heightM": 1.2,
    "weightKg": 113,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/939.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/939.png"
  },
  {
    "id": 940,
    "dexNumber": 940,
    "generation": 9,
    "nameKo": "찌리비",
    "nameEn": "Wattrel",
    "types": [
      "전기",
      "비행"
    ],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 35,
      "specialAttack": 55,
      "specialDefense": 40,
      "speed": 70
    },
    "category": "바다제비 포켓몬",
    "heightM": 0.4,
    "weightKg": 3.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/940.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/940.png"
  },
  {
    "id": 941,
    "dexNumber": 941,
    "generation": 9,
    "nameKo": "찌리비크",
    "nameEn": "Kilowattrel",
    "types": [
      "전기",
      "비행"
    ],
    "stats": {
      "hp": 70,
      "attack": 70,
      "defense": 60,
      "specialAttack": 105,
      "specialDefense": 60,
      "speed": 125
    },
    "category": "군함조 포켓몬",
    "heightM": 1.4,
    "weightKg": 38.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/941.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/941.png"
  },
  {
    "id": 942,
    "dexNumber": 942,
    "generation": 9,
    "nameKo": "오라티프",
    "nameEn": "Maschiff",
    "types": [
      "악"
    ],
    "stats": {
      "hp": 60,
      "attack": 78,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 51,
      "speed": 51
    },
    "category": "애송이 포켓몬",
    "heightM": 0.5,
    "weightKg": 16,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/942.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/942.png"
  },
  {
    "id": 943,
    "dexNumber": 943,
    "generation": 9,
    "nameKo": "마피티프",
    "nameEn": "Mabosstiff",
    "types": [
      "악"
    ],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 90,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 85
    },
    "category": "두목 포켓몬",
    "heightM": 1.1,
    "weightKg": 61,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/943.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/943.png"
  },
  {
    "id": 944,
    "dexNumber": 944,
    "generation": 9,
    "nameKo": "땃쭈르",
    "nameEn": "Shroodle",
    "types": [
      "독",
      "노말"
    ],
    "stats": {
      "hp": 40,
      "attack": 65,
      "defense": 35,
      "specialAttack": 40,
      "specialDefense": 35,
      "speed": 75
    },
    "category": "독쥐 포켓몬",
    "heightM": 0.2,
    "weightKg": 0.7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/944.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/944.png"
  },
  {
    "id": 945,
    "dexNumber": 945,
    "generation": 9,
    "nameKo": "태깅구르",
    "nameEn": "Grafaiai",
    "types": [
      "독",
      "노말"
    ],
    "stats": {
      "hp": 63,
      "attack": 95,
      "defense": 65,
      "specialAttack": 80,
      "specialDefense": 72,
      "speed": 110
    },
    "category": "독원숭이 포켓몬",
    "heightM": 0.7,
    "weightKg": 27.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/945.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/945.png"
  },
  {
    "id": 946,
    "dexNumber": 946,
    "generation": 9,
    "nameKo": "그푸리",
    "nameEn": "Bramblin",
    "types": [
      "풀",
      "고스트"
    ],
    "stats": {
      "hp": 40,
      "attack": 65,
      "defense": 30,
      "specialAttack": 45,
      "specialDefense": 35,
      "speed": 60
    },
    "category": "회전초 포켓몬",
    "heightM": 0.6,
    "weightKg": 0.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/946.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/946.png"
  },
  {
    "id": 947,
    "dexNumber": 947,
    "generation": 9,
    "nameKo": "공푸리",
    "nameEn": "Brambleghast",
    "types": [
      "풀",
      "고스트"
    ],
    "stats": {
      "hp": 55,
      "attack": 115,
      "defense": 70,
      "specialAttack": 80,
      "specialDefense": 70,
      "speed": 90
    },
    "category": "회전초 포켓몬",
    "heightM": 1.2,
    "weightKg": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/947.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/947.png"
  },
  {
    "id": 948,
    "dexNumber": 948,
    "generation": 9,
    "nameKo": "들눈해",
    "nameEn": "Toedscool",
    "types": [
      "땅",
      "풀"
    ],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 35,
      "specialAttack": 50,
      "specialDefense": 100,
      "speed": 70
    },
    "category": "목이버섯 포켓몬",
    "heightM": 0.9,
    "weightKg": 33,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/948.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/948.png"
  },
  {
    "id": 949,
    "dexNumber": 949,
    "generation": 9,
    "nameKo": "육파리",
    "nameEn": "Toedscruel",
    "types": [
      "땅",
      "풀"
    ],
    "stats": {
      "hp": 80,
      "attack": 70,
      "defense": 65,
      "specialAttack": 80,
      "specialDefense": 120,
      "speed": 100
    },
    "category": "목이버섯 포켓몬",
    "heightM": 1.9,
    "weightKg": 58,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/949.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/949.png"
  },
  {
    "id": 950,
    "dexNumber": 950,
    "generation": 9,
    "nameKo": "절벼게",
    "nameEn": "Klawf",
    "types": [
      "바위"
    ],
    "stats": {
      "hp": 70,
      "attack": 100,
      "defense": 115,
      "specialAttack": 35,
      "specialDefense": 55,
      "speed": 75
    },
    "category": "매복 포켓몬",
    "heightM": 1.3,
    "weightKg": 79,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/950.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/950.png"
  },
  {
    "id": 951,
    "dexNumber": 951,
    "generation": 9,
    "nameKo": "캡싸이",
    "nameEn": "Capsakid",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 50,
      "attack": 62,
      "defense": 40,
      "specialAttack": 62,
      "specialDefense": 40,
      "speed": 50
    },
    "category": "하바네로 포켓몬",
    "heightM": 0.3,
    "weightKg": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/951.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/951.png"
  },
  {
    "id": 952,
    "dexNumber": 952,
    "generation": 9,
    "nameKo": "스코빌런",
    "nameEn": "Scovillain",
    "types": [
      "풀",
      "불꽃"
    ],
    "stats": {
      "hp": 65,
      "attack": 108,
      "defense": 65,
      "specialAttack": 108,
      "specialDefense": 65,
      "speed": 75
    },
    "category": "하바네로 포켓몬",
    "heightM": 0.9,
    "weightKg": 15,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/952.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/952.png"
  },
  {
    "id": 953,
    "dexNumber": 953,
    "generation": 9,
    "nameKo": "구르데",
    "nameEn": "Rellor",
    "types": [
      "벌레"
    ],
    "stats": {
      "hp": 41,
      "attack": 50,
      "defense": 60,
      "specialAttack": 31,
      "specialDefense": 58,
      "speed": 30
    },
    "category": "굴리기 포켓몬",
    "heightM": 0.2,
    "weightKg": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/953.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/953.png"
  },
  {
    "id": 954,
    "dexNumber": 954,
    "generation": 9,
    "nameKo": "베라카스",
    "nameEn": "Rabsca",
    "types": [
      "벌레",
      "에스퍼"
    ],
    "stats": {
      "hp": 75,
      "attack": 50,
      "defense": 85,
      "specialAttack": 115,
      "specialDefense": 100,
      "speed": 45
    },
    "category": "굴리기 포켓몬",
    "heightM": 0.3,
    "weightKg": 3.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/954.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/954.png"
  },
  {
    "id": 955,
    "dexNumber": 955,
    "generation": 9,
    "nameKo": "하느라기",
    "nameEn": "Flittle",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 30,
      "attack": 35,
      "defense": 30,
      "specialAttack": 55,
      "specialDefense": 30,
      "speed": 75
    },
    "category": "프릴 포켓몬",
    "heightM": 0.2,
    "weightKg": 1.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/955.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/955.png"
  },
  {
    "id": 956,
    "dexNumber": 956,
    "generation": 9,
    "nameKo": "클레스퍼트라",
    "nameEn": "Espathra",
    "types": [
      "에스퍼"
    ],
    "stats": {
      "hp": 95,
      "attack": 60,
      "defense": 60,
      "specialAttack": 101,
      "specialDefense": 60,
      "speed": 105
    },
    "category": "타조 포켓몬",
    "heightM": 1.9,
    "weightKg": 90,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/956.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/956.png"
  },
  {
    "id": 957,
    "dexNumber": 957,
    "generation": 9,
    "nameKo": "어리짱",
    "nameEn": "Tinkatink",
    "types": [
      "페어리",
      "강철"
    ],
    "stats": {
      "hp": 50,
      "attack": 45,
      "defense": 45,
      "specialAttack": 35,
      "specialDefense": 64,
      "speed": 58
    },
    "category": "대장장이 포켓몬",
    "heightM": 0.4,
    "weightKg": 8.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/957.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/957.png"
  },
  {
    "id": 958,
    "dexNumber": 958,
    "generation": 9,
    "nameKo": "벼리짱",
    "nameEn": "Tinkatuff",
    "types": [
      "페어리",
      "강철"
    ],
    "stats": {
      "hp": 65,
      "attack": 55,
      "defense": 55,
      "specialAttack": 45,
      "specialDefense": 82,
      "speed": 78
    },
    "category": "해머 포켓몬",
    "heightM": 0.7,
    "weightKg": 59.1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/958.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/958.png"
  },
  {
    "id": 959,
    "dexNumber": 959,
    "generation": 9,
    "nameKo": "두드리짱",
    "nameEn": "Tinkaton",
    "types": [
      "페어리",
      "강철"
    ],
    "stats": {
      "hp": 85,
      "attack": 75,
      "defense": 77,
      "specialAttack": 70,
      "specialDefense": 105,
      "speed": 94
    },
    "category": "해머 포켓몬",
    "heightM": 0.7,
    "weightKg": 112.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/959.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/959.png"
  },
  {
    "id": 960,
    "dexNumber": 960,
    "generation": 9,
    "nameKo": "바다그다",
    "nameEn": "Wiglett",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 10,
      "attack": 55,
      "defense": 25,
      "specialAttack": 35,
      "specialDefense": 25,
      "speed": 95
    },
    "category": "정원장어 포켓몬",
    "heightM": 1.2,
    "weightKg": 1.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/960.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/960.png"
  },
  {
    "id": 961,
    "dexNumber": 961,
    "generation": 9,
    "nameKo": "바닥트리오",
    "nameEn": "Wugtrio",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 35,
      "attack": 100,
      "defense": 50,
      "specialAttack": 50,
      "specialDefense": 70,
      "speed": 120
    },
    "category": "정원장어 포켓몬",
    "heightM": 1.2,
    "weightKg": 5.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/961.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/961.png"
  },
  {
    "id": 962,
    "dexNumber": 962,
    "generation": 9,
    "nameKo": "떨구새",
    "nameEn": "Bombirdier",
    "types": [
      "비행",
      "악"
    ],
    "stats": {
      "hp": 70,
      "attack": 103,
      "defense": 85,
      "specialAttack": 60,
      "specialDefense": 85,
      "speed": 82
    },
    "category": "낙하물 포켓몬",
    "heightM": 1.5,
    "weightKg": 42.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/962.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/962.png"
  },
  {
    "id": 963,
    "dexNumber": 963,
    "generation": 9,
    "nameKo": "맨돌핀",
    "nameEn": "Finizen",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 70,
      "attack": 45,
      "defense": 40,
      "specialAttack": 45,
      "specialDefense": 40,
      "speed": 75
    },
    "category": "돌고래 포켓몬",
    "heightM": 1.3,
    "weightKg": 60.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/963.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/963.png"
  },
  {
    "id": 964,
    "dexNumber": 964,
    "generation": 9,
    "nameKo": "돌핀맨",
    "nameEn": "Palafin",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 100,
      "attack": 70,
      "defense": 72,
      "specialAttack": 53,
      "specialDefense": 62,
      "speed": 100
    },
    "category": "돌고래 포켓몬",
    "heightM": 1.3,
    "weightKg": 60.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/964.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/964.png"
  },
  {
    "id": 965,
    "dexNumber": 965,
    "generation": 9,
    "nameKo": "부르롱",
    "nameEn": "Varoom",
    "types": [
      "강철",
      "독"
    ],
    "stats": {
      "hp": 45,
      "attack": 70,
      "defense": 63,
      "specialAttack": 30,
      "specialDefense": 45,
      "speed": 47
    },
    "category": "단기통 포켓몬",
    "heightM": 1,
    "weightKg": 35,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/965.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/965.png"
  },
  {
    "id": 966,
    "dexNumber": 966,
    "generation": 9,
    "nameKo": "부르르룸",
    "nameEn": "Revavroom",
    "types": [
      "강철",
      "독"
    ],
    "stats": {
      "hp": 80,
      "attack": 119,
      "defense": 90,
      "specialAttack": 54,
      "specialDefense": 67,
      "speed": 90
    },
    "category": "다기통 포켓몬",
    "heightM": 1.8,
    "weightKg": 120,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/966.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/966.png"
  },
  {
    "id": 967,
    "dexNumber": 967,
    "generation": 9,
    "nameKo": "모토마",
    "nameEn": "Cyclizar",
    "types": [
      "드래곤",
      "노말"
    ],
    "stats": {
      "hp": 70,
      "attack": 95,
      "defense": 65,
      "specialAttack": 85,
      "specialDefense": 65,
      "speed": 121
    },
    "category": "라이드 포켓몬",
    "heightM": 1.6,
    "weightKg": 63,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/967.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/967.png"
  },
  {
    "id": 968,
    "dexNumber": 968,
    "generation": 9,
    "nameKo": "꿈트렁",
    "nameEn": "Orthworm",
    "types": [
      "강철"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 145,
      "specialAttack": 60,
      "specialDefense": 55,
      "speed": 65
    },
    "category": "지렁이 포켓몬",
    "heightM": 2.5,
    "weightKg": 310,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/968.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/968.png"
  },
  {
    "id": 969,
    "dexNumber": 969,
    "generation": 9,
    "nameKo": "초롱순",
    "nameEn": "Glimmet",
    "types": [
      "바위",
      "독"
    ],
    "stats": {
      "hp": 48,
      "attack": 35,
      "defense": 42,
      "specialAttack": 105,
      "specialDefense": 60,
      "speed": 60
    },
    "category": "광석 포켓몬",
    "heightM": 0.7,
    "weightKg": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/969.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/969.png"
  },
  {
    "id": 970,
    "dexNumber": 970,
    "generation": 9,
    "nameKo": "킬라플로르",
    "nameEn": "Glimmora",
    "types": [
      "바위",
      "독"
    ],
    "stats": {
      "hp": 83,
      "attack": 55,
      "defense": 90,
      "specialAttack": 130,
      "specialDefense": 81,
      "speed": 86
    },
    "category": "광석 포켓몬",
    "heightM": 1.5,
    "weightKg": 45,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/970.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/970.png"
  },
  {
    "id": 971,
    "dexNumber": 971,
    "generation": 9,
    "nameKo": "망망이",
    "nameEn": "Greavard",
    "types": [
      "고스트"
    ],
    "stats": {
      "hp": 50,
      "attack": 61,
      "defense": 60,
      "specialAttack": 30,
      "specialDefense": 55,
      "speed": 34
    },
    "category": "유령개 포켓몬",
    "heightM": 0.6,
    "weightKg": 35,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/971.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/971.png"
  },
  {
    "id": 972,
    "dexNumber": 972,
    "generation": 9,
    "nameKo": "묘두기",
    "nameEn": "Houndstone",
    "types": [
      "고스트"
    ],
    "stats": {
      "hp": 72,
      "attack": 101,
      "defense": 100,
      "specialAttack": 50,
      "specialDefense": 97,
      "speed": 68
    },
    "category": "유령개 포켓몬",
    "heightM": 2,
    "weightKg": 15,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/972.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/972.png"
  },
  {
    "id": 973,
    "dexNumber": 973,
    "generation": 9,
    "nameKo": "꼬이밍고",
    "nameEn": "Flamigo",
    "types": [
      "비행",
      "격투"
    ],
    "stats": {
      "hp": 82,
      "attack": 115,
      "defense": 74,
      "specialAttack": 75,
      "specialDefense": 64,
      "speed": 90
    },
    "category": "싱크로 포켓몬",
    "heightM": 1.6,
    "weightKg": 37,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/973.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/973.png"
  },
  {
    "id": 974,
    "dexNumber": 974,
    "generation": 9,
    "nameKo": "터벅고래",
    "nameEn": "Cetoddle",
    "types": [
      "얼음"
    ],
    "stats": {
      "hp": 108,
      "attack": 68,
      "defense": 45,
      "specialAttack": 30,
      "specialDefense": 40,
      "speed": 43
    },
    "category": "육지고래 포켓몬",
    "heightM": 1.2,
    "weightKg": 45,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/974.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/974.png"
  },
  {
    "id": 975,
    "dexNumber": 975,
    "generation": 9,
    "nameKo": "우락고래",
    "nameEn": "Cetitan",
    "types": [
      "얼음"
    ],
    "stats": {
      "hp": 170,
      "attack": 113,
      "defense": 65,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 73
    },
    "category": "육지고래 포켓몬",
    "heightM": 4.5,
    "weightKg": 700,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/975.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/975.png"
  },
  {
    "id": 976,
    "dexNumber": 976,
    "generation": 9,
    "nameKo": "가비루사",
    "nameEn": "Veluza",
    "types": [
      "물",
      "에스퍼"
    ],
    "stats": {
      "hp": 90,
      "attack": 102,
      "defense": 73,
      "specialAttack": 78,
      "specialDefense": 65,
      "speed": 70
    },
    "category": "분리 포켓몬",
    "heightM": 2.5,
    "weightKg": 90,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/976.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/976.png"
  },
  {
    "id": 977,
    "dexNumber": 977,
    "generation": 9,
    "nameKo": "어써러셔",
    "nameEn": "Dondozo",
    "types": [
      "물"
    ],
    "stats": {
      "hp": 150,
      "attack": 100,
      "defense": 115,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 35
    },
    "category": "큰메기 포켓몬",
    "heightM": 12,
    "weightKg": 220,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/977.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/977.png"
  },
  {
    "id": 978,
    "dexNumber": 978,
    "generation": 9,
    "nameKo": "싸리용",
    "nameEn": "Tatsugiri",
    "types": [
      "드래곤",
      "물"
    ],
    "stats": {
      "hp": 68,
      "attack": 50,
      "defense": 60,
      "specialAttack": 120,
      "specialDefense": 95,
      "speed": 82
    },
    "category": "의태 포켓몬",
    "heightM": 0.3,
    "weightKg": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/978.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/978.png"
  },
  {
    "id": 979,
    "dexNumber": 979,
    "generation": 9,
    "nameKo": "저승갓숭",
    "nameEn": "Annihilape",
    "types": [
      "격투",
      "고스트"
    ],
    "stats": {
      "hp": 110,
      "attack": 115,
      "defense": 80,
      "specialAttack": 50,
      "specialDefense": 90,
      "speed": 90
    },
    "category": "분노숭이 포켓몬",
    "heightM": 1.2,
    "weightKg": 56,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/979.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/979.png"
  },
  {
    "id": 980,
    "dexNumber": 980,
    "generation": 9,
    "nameKo": "토오",
    "nameEn": "Clodsire",
    "types": [
      "독",
      "땅"
    ],
    "stats": {
      "hp": 130,
      "attack": 75,
      "defense": 60,
      "specialAttack": 45,
      "specialDefense": 100,
      "speed": 20
    },
    "category": "가시물고기 포켓몬",
    "heightM": 1.8,
    "weightKg": 223,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/980.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/980.png"
  },
  {
    "id": 981,
    "dexNumber": 981,
    "generation": 9,
    "nameKo": "키키링",
    "nameEn": "Farigiraf",
    "types": [
      "노말",
      "에스퍼"
    ],
    "stats": {
      "hp": 120,
      "attack": 90,
      "defense": 70,
      "specialAttack": 110,
      "specialDefense": 70,
      "speed": 60
    },
    "category": "긴목 포켓몬",
    "heightM": 3.2,
    "weightKg": 160,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/981.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/981.png"
  },
  {
    "id": 982,
    "dexNumber": 982,
    "generation": 9,
    "nameKo": "노고고치",
    "nameEn": "Dudunsparce",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 125,
      "attack": 100,
      "defense": 80,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 55
    },
    "category": "땅뱀 포켓몬",
    "heightM": 3.6,
    "weightKg": 39.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/982.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/982.png"
  },
  {
    "id": 983,
    "dexNumber": 983,
    "generation": 9,
    "nameKo": "대도각참",
    "nameEn": "Kingambit",
    "types": [
      "악",
      "강철"
    ],
    "stats": {
      "hp": 100,
      "attack": 135,
      "defense": 120,
      "specialAttack": 60,
      "specialDefense": 85,
      "speed": 50
    },
    "category": "대도 포켓몬",
    "heightM": 2,
    "weightKg": 120,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/983.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/983.png"
  },
  {
    "id": 984,
    "dexNumber": 984,
    "generation": 9,
    "nameKo": "위대한엄니",
    "nameEn": "Great Tusk",
    "types": [
      "땅",
      "격투"
    ],
    "stats": {
      "hp": 115,
      "attack": 131,
      "defense": 131,
      "specialAttack": 53,
      "specialDefense": 53,
      "speed": 87
    },
    "category": "패러독스 포켓몬",
    "heightM": 2.2,
    "weightKg": 320,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/984.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/984.png"
  },
  {
    "id": 985,
    "dexNumber": 985,
    "generation": 9,
    "nameKo": "우렁찬꼬리",
    "nameEn": "Scream Tail",
    "types": [
      "페어리",
      "에스퍼"
    ],
    "stats": {
      "hp": 115,
      "attack": 65,
      "defense": 99,
      "specialAttack": 65,
      "specialDefense": 115,
      "speed": 111
    },
    "category": "패러독스 포켓몬",
    "heightM": 1.2,
    "weightKg": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/985.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/985.png"
  },
  {
    "id": 986,
    "dexNumber": 986,
    "generation": 9,
    "nameKo": "사나운버섯",
    "nameEn": "Brute Bonnet",
    "types": [
      "풀",
      "악"
    ],
    "stats": {
      "hp": 111,
      "attack": 127,
      "defense": 99,
      "specialAttack": 79,
      "specialDefense": 99,
      "speed": 55
    },
    "category": "패러독스 포켓몬",
    "heightM": 1.2,
    "weightKg": 21,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/986.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/986.png"
  },
  {
    "id": 987,
    "dexNumber": 987,
    "generation": 9,
    "nameKo": "날개치는머리",
    "nameEn": "Flutter Mane",
    "types": [
      "고스트",
      "페어리"
    ],
    "stats": {
      "hp": 55,
      "attack": 55,
      "defense": 55,
      "specialAttack": 135,
      "specialDefense": 135,
      "speed": 135
    },
    "category": "패러독스 포켓몬",
    "heightM": 1.4,
    "weightKg": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/987.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/987.png"
  },
  {
    "id": 988,
    "dexNumber": 988,
    "generation": 9,
    "nameKo": "땅을기는날개",
    "nameEn": "Slither Wing",
    "types": [
      "벌레",
      "격투"
    ],
    "stats": {
      "hp": 85,
      "attack": 135,
      "defense": 79,
      "specialAttack": 85,
      "specialDefense": 105,
      "speed": 81
    },
    "category": "패러독스 포켓몬",
    "heightM": 3.2,
    "weightKg": 92,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/988.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/988.png"
  },
  {
    "id": 989,
    "dexNumber": 989,
    "generation": 9,
    "nameKo": "모래털가죽",
    "nameEn": "Sandy Shocks",
    "types": [
      "전기",
      "땅"
    ],
    "stats": {
      "hp": 85,
      "attack": 81,
      "defense": 97,
      "specialAttack": 121,
      "specialDefense": 85,
      "speed": 101
    },
    "category": "패러독스 포켓몬",
    "heightM": 2.3,
    "weightKg": 60,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/989.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/989.png"
  },
  {
    "id": 990,
    "dexNumber": 990,
    "generation": 9,
    "nameKo": "무쇠바퀴",
    "nameEn": "Iron Treads",
    "types": [
      "땅",
      "강철"
    ],
    "stats": {
      "hp": 90,
      "attack": 112,
      "defense": 120,
      "specialAttack": 72,
      "specialDefense": 70,
      "speed": 106
    },
    "category": "패러독스 포켓몬",
    "heightM": 0.9,
    "weightKg": 240,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/990.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/990.png"
  },
  {
    "id": 991,
    "dexNumber": 991,
    "generation": 9,
    "nameKo": "무쇠보따리",
    "nameEn": "Iron Bundle",
    "types": [
      "얼음",
      "물"
    ],
    "stats": {
      "hp": 56,
      "attack": 80,
      "defense": 114,
      "specialAttack": 124,
      "specialDefense": 60,
      "speed": 136
    },
    "category": "패러독스 포켓몬",
    "heightM": 0.6,
    "weightKg": 11,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/991.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/991.png"
  },
  {
    "id": 992,
    "dexNumber": 992,
    "generation": 9,
    "nameKo": "무쇠손",
    "nameEn": "Iron Hands",
    "types": [
      "격투",
      "전기"
    ],
    "stats": {
      "hp": 154,
      "attack": 140,
      "defense": 108,
      "specialAttack": 50,
      "specialDefense": 68,
      "speed": 50
    },
    "category": "패러독스 포켓몬",
    "heightM": 1.8,
    "weightKg": 380.7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/992.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/992.png"
  },
  {
    "id": 993,
    "dexNumber": 993,
    "generation": 9,
    "nameKo": "무쇠머리",
    "nameEn": "Iron Jugulis",
    "types": [
      "악",
      "비행"
    ],
    "stats": {
      "hp": 94,
      "attack": 80,
      "defense": 86,
      "specialAttack": 122,
      "specialDefense": 80,
      "speed": 108
    },
    "category": "패러독스 포켓몬",
    "heightM": 1.3,
    "weightKg": 111,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/993.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/993.png"
  },
  {
    "id": 994,
    "dexNumber": 994,
    "generation": 9,
    "nameKo": "무쇠독나방",
    "nameEn": "Iron Moth",
    "types": [
      "불꽃",
      "독"
    ],
    "stats": {
      "hp": 80,
      "attack": 70,
      "defense": 60,
      "specialAttack": 140,
      "specialDefense": 110,
      "speed": 110
    },
    "category": "패러독스 포켓몬",
    "heightM": 1.2,
    "weightKg": 36,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/994.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/994.png"
  },
  {
    "id": 995,
    "dexNumber": 995,
    "generation": 9,
    "nameKo": "무쇠가시",
    "nameEn": "Iron Thorns",
    "types": [
      "바위",
      "전기"
    ],
    "stats": {
      "hp": 100,
      "attack": 134,
      "defense": 110,
      "specialAttack": 70,
      "specialDefense": 84,
      "speed": 72
    },
    "category": "패러독스 포켓몬",
    "heightM": 1.6,
    "weightKg": 303,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/995.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/995.png"
  },
  {
    "id": 996,
    "dexNumber": 996,
    "generation": 9,
    "nameKo": "드니차",
    "nameEn": "Frigibax",
    "types": [
      "드래곤",
      "얼음"
    ],
    "stats": {
      "hp": 65,
      "attack": 75,
      "defense": 45,
      "specialAttack": 35,
      "specialDefense": 45,
      "speed": 55
    },
    "category": "얼음지느러미 포켓몬",
    "heightM": 0.5,
    "weightKg": 17,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/996.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/996.png"
  },
  {
    "id": 997,
    "dexNumber": 997,
    "generation": 9,
    "nameKo": "드니꽁",
    "nameEn": "Arctibax",
    "types": [
      "드래곤",
      "얼음"
    ],
    "stats": {
      "hp": 90,
      "attack": 95,
      "defense": 66,
      "specialAttack": 45,
      "specialDefense": 65,
      "speed": 62
    },
    "category": "얼음지느러미 포켓몬",
    "heightM": 0.8,
    "weightKg": 30,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/997.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/997.png"
  },
  {
    "id": 998,
    "dexNumber": 998,
    "generation": 9,
    "nameKo": "드닐레이브",
    "nameEn": "Baxcalibur",
    "types": [
      "드래곤",
      "얼음"
    ],
    "stats": {
      "hp": 115,
      "attack": 145,
      "defense": 92,
      "specialAttack": 75,
      "specialDefense": 86,
      "speed": 87
    },
    "category": "빙룡 포켓몬",
    "heightM": 2.1,
    "weightKg": 210,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/998.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/998.png"
  },
  {
    "id": 999,
    "dexNumber": 999,
    "generation": 9,
    "nameKo": "모으령",
    "nameEn": "Gimmighoul",
    "types": [
      "고스트"
    ],
    "stats": {
      "hp": 45,
      "attack": 30,
      "defense": 70,
      "specialAttack": 75,
      "specialDefense": 70,
      "speed": 10
    },
    "category": "보물상자 포켓몬",
    "heightM": 0.3,
    "weightKg": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/999.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/999.png"
  },
  {
    "id": 1000,
    "dexNumber": 1000,
    "generation": 9,
    "nameKo": "타부자고",
    "nameEn": "Gholdengo",
    "types": [
      "강철",
      "고스트"
    ],
    "stats": {
      "hp": 87,
      "attack": 60,
      "defense": 95,
      "specialAttack": 133,
      "specialDefense": 91,
      "speed": 84
    },
    "category": "보물생명체 포켓몬",
    "heightM": 1.2,
    "weightKg": 30,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1000.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1000.png"
  },
  {
    "id": 1001,
    "dexNumber": 1001,
    "generation": 9,
    "nameKo": "총지엔",
    "nameEn": "Wo-Chien",
    "types": [
      "악",
      "풀"
    ],
    "stats": {
      "hp": 85,
      "attack": 85,
      "defense": 100,
      "specialAttack": 95,
      "specialDefense": 135,
      "speed": 70
    },
    "category": "재액 포켓몬",
    "heightM": 1.5,
    "weightKg": 74.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1001.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1001.png"
  },
  {
    "id": 1002,
    "dexNumber": 1002,
    "generation": 9,
    "nameKo": "파오젠",
    "nameEn": "Chien-Pao",
    "types": [
      "악",
      "얼음"
    ],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 80,
      "specialAttack": 90,
      "specialDefense": 65,
      "speed": 135
    },
    "category": "재액 포켓몬",
    "heightM": 1.9,
    "weightKg": 152.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1002.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1002.png"
  },
  {
    "id": 1003,
    "dexNumber": 1003,
    "generation": 9,
    "nameKo": "딩루",
    "nameEn": "Ting-Lu",
    "types": [
      "악",
      "땅"
    ],
    "stats": {
      "hp": 155,
      "attack": 110,
      "defense": 125,
      "specialAttack": 55,
      "specialDefense": 80,
      "speed": 45
    },
    "category": "재액 포켓몬",
    "heightM": 2.7,
    "weightKg": 699.7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1003.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1003.png"
  },
  {
    "id": 1004,
    "dexNumber": 1004,
    "generation": 9,
    "nameKo": "위유이",
    "nameEn": "Chi-Yu",
    "types": [
      "악",
      "불꽃"
    ],
    "stats": {
      "hp": 55,
      "attack": 80,
      "defense": 80,
      "specialAttack": 135,
      "specialDefense": 120,
      "speed": 100
    },
    "category": "재액 포켓몬",
    "heightM": 0.4,
    "weightKg": 4.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1004.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1004.png"
  },
  {
    "id": 1005,
    "dexNumber": 1005,
    "generation": 9,
    "nameKo": "고동치는달",
    "nameEn": "Roaring Moon",
    "types": [
      "드래곤",
      "악"
    ],
    "stats": {
      "hp": 105,
      "attack": 139,
      "defense": 71,
      "specialAttack": 55,
      "specialDefense": 101,
      "speed": 119
    },
    "category": "패러독스 포켓몬",
    "heightM": 2,
    "weightKg": 380,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1005.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1005.png"
  },
  {
    "id": 1006,
    "dexNumber": 1006,
    "generation": 9,
    "nameKo": "무쇠무인",
    "nameEn": "Iron Valiant",
    "types": [
      "페어리",
      "격투"
    ],
    "stats": {
      "hp": 74,
      "attack": 130,
      "defense": 90,
      "specialAttack": 120,
      "specialDefense": 60,
      "speed": 116
    },
    "category": "패러독스 포켓몬",
    "heightM": 1.4,
    "weightKg": 35,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1006.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1006.png"
  },
  {
    "id": 1007,
    "dexNumber": 1007,
    "generation": 9,
    "nameKo": "코라이돈",
    "nameEn": "Koraidon",
    "types": [
      "격투",
      "드래곤"
    ],
    "stats": {
      "hp": 100,
      "attack": 135,
      "defense": 115,
      "specialAttack": 85,
      "specialDefense": 100,
      "speed": 135
    },
    "category": "패러독스 포켓몬",
    "heightM": 2.5,
    "weightKg": 303,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1007.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1007.png"
  },
  {
    "id": 1008,
    "dexNumber": 1008,
    "generation": 9,
    "nameKo": "미라이돈",
    "nameEn": "Miraidon",
    "types": [
      "전기",
      "드래곤"
    ],
    "stats": {
      "hp": 100,
      "attack": 85,
      "defense": 100,
      "specialAttack": 135,
      "specialDefense": 115,
      "speed": 135
    },
    "category": "패러독스 포켓몬",
    "heightM": 3.5,
    "weightKg": 240,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1008.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1008.png"
  },
  {
    "id": 1009,
    "dexNumber": 1009,
    "generation": 9,
    "nameKo": "굽이치는물결",
    "nameEn": "Walking Wake",
    "types": [
      "물",
      "드래곤"
    ],
    "stats": {
      "hp": 99,
      "attack": 83,
      "defense": 91,
      "specialAttack": 125,
      "specialDefense": 83,
      "speed": 109
    },
    "category": "패러독스 포켓몬",
    "heightM": 3.5,
    "weightKg": 280,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1009.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1009.png"
  },
  {
    "id": 1010,
    "dexNumber": 1010,
    "generation": 9,
    "nameKo": "무쇠잎새",
    "nameEn": "Iron Leaves",
    "types": [
      "풀",
      "에스퍼"
    ],
    "stats": {
      "hp": 90,
      "attack": 130,
      "defense": 88,
      "specialAttack": 70,
      "specialDefense": 108,
      "speed": 104
    },
    "category": "패러독스 포켓몬",
    "heightM": 1.5,
    "weightKg": 125,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1010.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1010.png"
  },
  {
    "id": 1011,
    "dexNumber": 1011,
    "generation": 9,
    "nameKo": "과미르",
    "nameEn": "Dipplin",
    "types": [
      "풀",
      "드래곤"
    ],
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 110,
      "specialAttack": 95,
      "specialDefense": 80,
      "speed": 40
    },
    "category": "사과사탕 포켓몬",
    "heightM": 0.4,
    "weightKg": 9.7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1011.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1011.png"
  },
  {
    "id": 1012,
    "dexNumber": 1012,
    "generation": 9,
    "nameKo": "차데스",
    "nameEn": "Poltchageist",
    "types": [
      "풀",
      "고스트"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 45,
      "specialAttack": 74,
      "specialDefense": 54,
      "speed": 50
    },
    "category": "말차 포켓몬",
    "heightM": 0.1,
    "weightKg": 1.1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1012.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1012.png"
  },
  {
    "id": 1013,
    "dexNumber": 1013,
    "generation": 9,
    "nameKo": "그우린차",
    "nameEn": "Sinistcha",
    "types": [
      "풀",
      "고스트"
    ],
    "stats": {
      "hp": 71,
      "attack": 60,
      "defense": 106,
      "specialAttack": 121,
      "specialDefense": 80,
      "speed": 70
    },
    "category": "말차 포켓몬",
    "heightM": 0.2,
    "weightKg": 2.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1013.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1013.png"
  },
  {
    "id": 1014,
    "dexNumber": 1014,
    "generation": 9,
    "nameKo": "조타구",
    "nameEn": "Okidogi",
    "types": [
      "독",
      "격투"
    ],
    "stats": {
      "hp": 88,
      "attack": 128,
      "defense": 115,
      "specialAttack": 58,
      "specialDefense": 86,
      "speed": 80
    },
    "category": "수하 포켓몬",
    "heightM": 1.8,
    "weightKg": 92.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1014.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1014.png"
  },
  {
    "id": 1015,
    "dexNumber": 1015,
    "generation": 9,
    "nameKo": "이야후",
    "nameEn": "Munkidori",
    "types": [
      "독",
      "에스퍼"
    ],
    "stats": {
      "hp": 88,
      "attack": 75,
      "defense": 66,
      "specialAttack": 130,
      "specialDefense": 90,
      "speed": 106
    },
    "category": "수하 포켓몬",
    "heightM": 1,
    "weightKg": 12.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1015.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1015.png"
  },
  {
    "id": 1016,
    "dexNumber": 1016,
    "generation": 9,
    "nameKo": "기로치",
    "nameEn": "Fezandipiti",
    "types": [
      "독",
      "페어리"
    ],
    "stats": {
      "hp": 88,
      "attack": 91,
      "defense": 82,
      "specialAttack": 70,
      "specialDefense": 125,
      "speed": 99
    },
    "category": "수하 포켓몬",
    "heightM": 1.4,
    "weightKg": 30.1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1016.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1016.png"
  },
  {
    "id": 1017,
    "dexNumber": 1017,
    "generation": 9,
    "nameKo": "오거폰",
    "nameEn": "Ogerpon",
    "types": [
      "풀"
    ],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 84,
      "specialAttack": 60,
      "specialDefense": 96,
      "speed": 110
    },
    "category": "가면 포켓몬",
    "heightM": 1.2,
    "weightKg": 39.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1017.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1017.png"
  },
  {
    "id": 1018,
    "dexNumber": 1018,
    "generation": 9,
    "nameKo": "브리두라스",
    "nameEn": "Archaludon",
    "types": [
      "강철",
      "드래곤"
    ],
    "stats": {
      "hp": 90,
      "attack": 105,
      "defense": 130,
      "specialAttack": 125,
      "specialDefense": 65,
      "speed": 85
    },
    "category": "합금 포켓몬",
    "heightM": 2,
    "weightKg": 60,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1018.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1018.png"
  },
  {
    "id": 1019,
    "dexNumber": 1019,
    "generation": 9,
    "nameKo": "과미드라",
    "nameEn": "Hydrapple",
    "types": [
      "풀",
      "드래곤"
    ],
    "stats": {
      "hp": 106,
      "attack": 80,
      "defense": 110,
      "specialAttack": 120,
      "specialDefense": 80,
      "speed": 44
    },
    "category": "사과이무기 포켓몬",
    "heightM": 1.8,
    "weightKg": 93,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1019.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1019.png"
  },
  {
    "id": 1020,
    "dexNumber": 1020,
    "generation": 9,
    "nameKo": "꿰뚫는화염",
    "nameEn": "Gouging Fire",
    "types": [
      "불꽃",
      "드래곤"
    ],
    "stats": {
      "hp": 105,
      "attack": 115,
      "defense": 121,
      "specialAttack": 65,
      "specialDefense": 93,
      "speed": 91
    },
    "category": "패러독스 포켓몬",
    "heightM": 3.5,
    "weightKg": 590,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1020.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1020.png"
  },
  {
    "id": 1021,
    "dexNumber": 1021,
    "generation": 9,
    "nameKo": "날뛰는우레",
    "nameEn": "Raging Bolt",
    "types": [
      "전기",
      "드래곤"
    ],
    "stats": {
      "hp": 125,
      "attack": 73,
      "defense": 91,
      "specialAttack": 137,
      "specialDefense": 89,
      "speed": 75
    },
    "category": "패러독스 포켓몬",
    "heightM": 5.2,
    "weightKg": 480,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1021.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1021.png"
  },
  {
    "id": 1022,
    "dexNumber": 1022,
    "generation": 9,
    "nameKo": "무쇠암석",
    "nameEn": "Iron Boulder",
    "types": [
      "바위",
      "에스퍼"
    ],
    "stats": {
      "hp": 90,
      "attack": 120,
      "defense": 80,
      "specialAttack": 68,
      "specialDefense": 108,
      "speed": 124
    },
    "category": "패러독스 포켓몬",
    "heightM": 1.5,
    "weightKg": 162.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1022.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1022.png"
  },
  {
    "id": 1023,
    "dexNumber": 1023,
    "generation": 9,
    "nameKo": "무쇠감투",
    "nameEn": "Iron Crown",
    "types": [
      "강철",
      "에스퍼"
    ],
    "stats": {
      "hp": 90,
      "attack": 72,
      "defense": 100,
      "specialAttack": 122,
      "specialDefense": 108,
      "speed": 98
    },
    "category": "패러독스 포켓몬",
    "heightM": 1.6,
    "weightKg": 156,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1023.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1023.png"
  },
  {
    "id": 1024,
    "dexNumber": 1024,
    "generation": 9,
    "nameKo": "테라파고스",
    "nameEn": "Terapagos",
    "types": [
      "노말"
    ],
    "stats": {
      "hp": 90,
      "attack": 65,
      "defense": 85,
      "specialAttack": 65,
      "specialDefense": 85,
      "speed": 60
    },
    "category": "테라스탈 포켓몬",
    "heightM": 0.2,
    "weightKg": 6.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1024.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1024.png"
  },
  {
    "id": 1025,
    "dexNumber": 1025,
    "generation": 9,
    "nameKo": "복숭악동",
    "nameEn": "Pecharunt",
    "types": [
      "독",
      "고스트"
    ],
    "stats": {
      "hp": 88,
      "attack": 88,
      "defense": 160,
      "specialAttack": 88,
      "specialDefense": 88,
      "speed": 88
    },
    "category": "지배 포켓몬",
    "heightM": 0.3,
    "weightKg": 0.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1025.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1025.png"
  },
  {
    "id": 10091,
    "dexNumber": 19,
    "generation": 7,
    "nameKo": "꼬렛",
    "nameEn": "Rattata",
    "formLabel": "알로라",
    "types": [
      "악",
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
    "weightKg": 3.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10091.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10091.png"
  },
  {
    "id": 10092,
    "dexNumber": 20,
    "generation": 7,
    "nameKo": "레트라",
    "nameEn": "Raticate",
    "formLabel": "알로라",
    "types": [
      "악",
      "노말"
    ],
    "stats": {
      "hp": 75,
      "attack": 71,
      "defense": 70,
      "specialAttack": 40,
      "specialDefense": 80,
      "speed": 77
    },
    "category": "쥐 포켓몬",
    "heightM": 0.7,
    "weightKg": 25.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10092.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10092.png"
  },
  {
    "id": 10100,
    "dexNumber": 26,
    "generation": 7,
    "nameKo": "라이츄",
    "nameEn": "Raichu",
    "formLabel": "알로라",
    "types": [
      "전기",
      "에스퍼"
    ],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 50,
      "specialAttack": 95,
      "specialDefense": 85,
      "speed": 110
    },
    "category": "쥐 포켓몬",
    "heightM": 0.7,
    "weightKg": 21,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10100.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10100.png"
  },
  {
    "id": 10101,
    "dexNumber": 27,
    "generation": 7,
    "nameKo": "모래두지",
    "nameEn": "Sandshrew",
    "formLabel": "알로라",
    "types": [
      "얼음",
      "강철"
    ],
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 90,
      "specialAttack": 10,
      "specialDefense": 35,
      "speed": 40
    },
    "category": "쥐 포켓몬",
    "heightM": 0.7,
    "weightKg": 40,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10101.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10101.png"
  },
  {
    "id": 10102,
    "dexNumber": 28,
    "generation": 7,
    "nameKo": "고지",
    "nameEn": "Sandslash",
    "formLabel": "알로라",
    "types": [
      "얼음",
      "강철"
    ],
    "stats": {
      "hp": 75,
      "attack": 100,
      "defense": 120,
      "specialAttack": 25,
      "specialDefense": 65,
      "speed": 65
    },
    "category": "쥐 포켓몬",
    "heightM": 1.2,
    "weightKg": 55,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10102.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10102.png"
  },
  {
    "id": 10103,
    "dexNumber": 37,
    "generation": 7,
    "nameKo": "식스테일",
    "nameEn": "Vulpix",
    "formLabel": "알로라",
    "types": [
      "얼음"
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
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10103.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10103.png"
  },
  {
    "id": 10104,
    "dexNumber": 38,
    "generation": 7,
    "nameKo": "나인테일",
    "nameEn": "Ninetales",
    "formLabel": "알로라",
    "types": [
      "얼음",
      "페어리"
    ],
    "stats": {
      "hp": 73,
      "attack": 67,
      "defense": 75,
      "specialAttack": 81,
      "specialDefense": 100,
      "speed": 109
    },
    "category": "여우 포켓몬",
    "heightM": 1.1,
    "weightKg": 19.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10104.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10104.png"
  },
  {
    "id": 10105,
    "dexNumber": 50,
    "generation": 7,
    "nameKo": "디그다",
    "nameEn": "Diglett",
    "formLabel": "알로라",
    "types": [
      "땅",
      "강철"
    ],
    "stats": {
      "hp": 10,
      "attack": 55,
      "defense": 30,
      "specialAttack": 35,
      "specialDefense": 45,
      "speed": 90
    },
    "category": "두더지 포켓몬",
    "heightM": 0.2,
    "weightKg": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10105.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10105.png"
  },
  {
    "id": 10106,
    "dexNumber": 51,
    "generation": 7,
    "nameKo": "닥트리오",
    "nameEn": "Dugtrio",
    "formLabel": "알로라",
    "types": [
      "땅",
      "강철"
    ],
    "stats": {
      "hp": 35,
      "attack": 100,
      "defense": 60,
      "specialAttack": 50,
      "specialDefense": 70,
      "speed": 110
    },
    "category": "두더지 포켓몬",
    "heightM": 0.7,
    "weightKg": 66.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10106.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10106.png"
  },
  {
    "id": 10107,
    "dexNumber": 52,
    "generation": 7,
    "nameKo": "나옹",
    "nameEn": "Meowth",
    "formLabel": "알로라",
    "types": [
      "악"
    ],
    "stats": {
      "hp": 40,
      "attack": 35,
      "defense": 35,
      "specialAttack": 50,
      "specialDefense": 40,
      "speed": 90
    },
    "category": "요괴고양이 포켓몬",
    "heightM": 0.4,
    "weightKg": 4.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10107.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10107.png"
  },
  {
    "id": 10108,
    "dexNumber": 53,
    "generation": 7,
    "nameKo": "페르시온",
    "nameEn": "Persian",
    "formLabel": "알로라",
    "types": [
      "악"
    ],
    "stats": {
      "hp": 65,
      "attack": 60,
      "defense": 60,
      "specialAttack": 75,
      "specialDefense": 65,
      "speed": 115
    },
    "category": "샴고양이 포켓몬",
    "heightM": 1.1,
    "weightKg": 33,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10108.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10108.png"
  },
  {
    "id": 10109,
    "dexNumber": 74,
    "generation": 7,
    "nameKo": "꼬마돌",
    "nameEn": "Geodude",
    "formLabel": "알로라",
    "types": [
      "바위",
      "전기"
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
    "weightKg": 20.3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10109.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10109.png"
  },
  {
    "id": 10110,
    "dexNumber": 75,
    "generation": 7,
    "nameKo": "데구리",
    "nameEn": "Graveler",
    "formLabel": "알로라",
    "types": [
      "바위",
      "전기"
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
    "weightKg": 110,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10110.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10110.png"
  },
  {
    "id": 10111,
    "dexNumber": 76,
    "generation": 7,
    "nameKo": "딱구리",
    "nameEn": "Golem",
    "formLabel": "알로라",
    "types": [
      "바위",
      "전기"
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
    "heightM": 1.7,
    "weightKg": 316,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10111.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10111.png"
  },
  {
    "id": 10112,
    "dexNumber": 88,
    "generation": 7,
    "nameKo": "질퍽이",
    "nameEn": "Grimer",
    "formLabel": "알로라",
    "types": [
      "독",
      "악"
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
    "heightM": 0.7,
    "weightKg": 42,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10112.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10112.png"
  },
  {
    "id": 10113,
    "dexNumber": 89,
    "generation": 7,
    "nameKo": "질뻐기",
    "nameEn": "Muk",
    "formLabel": "알로라",
    "types": [
      "독",
      "악"
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
    "heightM": 1,
    "weightKg": 52,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10113.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10113.png"
  },
  {
    "id": 10114,
    "dexNumber": 103,
    "generation": 7,
    "nameKo": "나시",
    "nameEn": "Exeggutor",
    "formLabel": "알로라",
    "types": [
      "풀",
      "드래곤"
    ],
    "stats": {
      "hp": 95,
      "attack": 105,
      "defense": 85,
      "specialAttack": 125,
      "specialDefense": 75,
      "speed": 45
    },
    "category": "야자열매 포켓몬",
    "heightM": 10.9,
    "weightKg": 415.6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10114.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10114.png"
  },
  {
    "id": 10115,
    "dexNumber": 105,
    "generation": 7,
    "nameKo": "텅구리",
    "nameEn": "Marowak",
    "formLabel": "알로라",
    "types": [
      "불꽃",
      "고스트"
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
    "weightKg": 34,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10115.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10115.png"
  },
  {
    "id": 10161,
    "dexNumber": 52,
    "generation": 8,
    "nameKo": "나옹",
    "nameEn": "Meowth",
    "formLabel": "가라르",
    "types": [
      "강철"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 55,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 40
    },
    "category": "요괴고양이 포켓몬",
    "heightM": 0.4,
    "weightKg": 7.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10161.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10161.png"
  },
  {
    "id": 10162,
    "dexNumber": 77,
    "generation": 8,
    "nameKo": "포니타",
    "nameEn": "Ponyta",
    "formLabel": "가라르",
    "types": [
      "에스퍼"
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
    "heightM": 0.8,
    "weightKg": 24,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10162.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10162.png"
  },
  {
    "id": 10163,
    "dexNumber": 78,
    "generation": 8,
    "nameKo": "날쌩마",
    "nameEn": "Rapidash",
    "formLabel": "가라르",
    "types": [
      "에스퍼",
      "페어리"
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
    "weightKg": 80,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10163.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10163.png"
  },
  {
    "id": 10164,
    "dexNumber": 79,
    "generation": 8,
    "nameKo": "야돈",
    "nameEn": "Slowpoke",
    "formLabel": "가라르",
    "types": [
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
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10164.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10164.png"
  },
  {
    "id": 10165,
    "dexNumber": 80,
    "generation": 8,
    "nameKo": "야도란",
    "nameEn": "Slowbro",
    "formLabel": "가라르",
    "types": [
      "독",
      "에스퍼"
    ],
    "stats": {
      "hp": 95,
      "attack": 100,
      "defense": 95,
      "specialAttack": 100,
      "specialDefense": 70,
      "speed": 30
    },
    "category": "기생 포켓몬",
    "heightM": 1.6,
    "weightKg": 70.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10165.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10165.png"
  },
  {
    "id": 10166,
    "dexNumber": 83,
    "generation": 8,
    "nameKo": "파오리",
    "nameEn": "Farfetch’d",
    "formLabel": "가라르",
    "types": [
      "격투"
    ],
    "stats": {
      "hp": 52,
      "attack": 95,
      "defense": 55,
      "specialAttack": 58,
      "specialDefense": 62,
      "speed": 55
    },
    "category": "청둥오리 포켓몬",
    "heightM": 0.8,
    "weightKg": 42,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10166.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10166.png"
  },
  {
    "id": 10167,
    "dexNumber": 110,
    "generation": 8,
    "nameKo": "또도가스",
    "nameEn": "Weezing",
    "formLabel": "가라르",
    "types": [
      "독",
      "페어리"
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
    "heightM": 3,
    "weightKg": 16,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10167.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10167.png"
  },
  {
    "id": 10168,
    "dexNumber": 122,
    "generation": 8,
    "nameKo": "마임맨",
    "nameEn": "Mr. Mime",
    "formLabel": "가라르",
    "types": [
      "얼음",
      "에스퍼"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 65,
      "specialAttack": 90,
      "specialDefense": 90,
      "speed": 100
    },
    "category": "배리어 포켓몬",
    "heightM": 1.4,
    "weightKg": 56.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10168.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10168.png"
  },
  {
    "id": 10169,
    "dexNumber": 144,
    "generation": 8,
    "nameKo": "프리져",
    "nameEn": "Articuno",
    "formLabel": "가라르",
    "types": [
      "에스퍼",
      "비행"
    ],
    "stats": {
      "hp": 90,
      "attack": 85,
      "defense": 85,
      "specialAttack": 125,
      "specialDefense": 100,
      "speed": 95
    },
    "category": "냉동 포켓몬",
    "heightM": 1.7,
    "weightKg": 50.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10169.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10169.png"
  },
  {
    "id": 10170,
    "dexNumber": 145,
    "generation": 8,
    "nameKo": "썬더",
    "nameEn": "Zapdos",
    "formLabel": "가라르",
    "types": [
      "격투",
      "비행"
    ],
    "stats": {
      "hp": 90,
      "attack": 125,
      "defense": 90,
      "specialAttack": 85,
      "specialDefense": 90,
      "speed": 100
    },
    "category": "전기 포켓몬",
    "heightM": 1.6,
    "weightKg": 58.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10170.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10170.png"
  },
  {
    "id": 10171,
    "dexNumber": 146,
    "generation": 8,
    "nameKo": "파이어",
    "nameEn": "Moltres",
    "formLabel": "가라르",
    "types": [
      "악",
      "비행"
    ],
    "stats": {
      "hp": 90,
      "attack": 85,
      "defense": 90,
      "specialAttack": 100,
      "specialDefense": 125,
      "speed": 90
    },
    "category": "화염 포켓몬",
    "heightM": 2,
    "weightKg": 66,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10171.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10171.png"
  },
  {
    "id": 10172,
    "dexNumber": 199,
    "generation": 8,
    "nameKo": "야도킹",
    "nameEn": "Slowking",
    "formLabel": "가라르",
    "types": [
      "독",
      "에스퍼"
    ],
    "stats": {
      "hp": 95,
      "attack": 65,
      "defense": 80,
      "specialAttack": 110,
      "specialDefense": 110,
      "speed": 30
    },
    "category": "임금 포켓몬",
    "heightM": 1.8,
    "weightKg": 79.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10172.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10172.png"
  },
  {
    "id": 10173,
    "dexNumber": 222,
    "generation": 8,
    "nameKo": "코산호",
    "nameEn": "Corsola",
    "formLabel": "가라르",
    "types": [
      "고스트"
    ],
    "stats": {
      "hp": 60,
      "attack": 55,
      "defense": 100,
      "specialAttack": 65,
      "specialDefense": 100,
      "speed": 30
    },
    "category": "산호 포켓몬",
    "heightM": 0.6,
    "weightKg": 0.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10173.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10173.png"
  },
  {
    "id": 10174,
    "dexNumber": 263,
    "generation": 8,
    "nameKo": "지그제구리",
    "nameEn": "Zigzagoon",
    "formLabel": "가라르",
    "types": [
      "악",
      "노말"
    ],
    "stats": {
      "hp": 38,
      "attack": 30,
      "defense": 41,
      "specialAttack": 30,
      "specialDefense": 41,
      "speed": 60
    },
    "category": "앙증너구리 포켓몬",
    "heightM": 0.4,
    "weightKg": 17.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10174.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10174.png"
  },
  {
    "id": 10175,
    "dexNumber": 264,
    "generation": 8,
    "nameKo": "직구리",
    "nameEn": "Linoone",
    "formLabel": "가라르",
    "types": [
      "악",
      "노말"
    ],
    "stats": {
      "hp": 78,
      "attack": 70,
      "defense": 61,
      "specialAttack": 50,
      "specialDefense": 61,
      "speed": 100
    },
    "category": "돌진 포켓몬",
    "heightM": 0.5,
    "weightKg": 32.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10175.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10175.png"
  },
  {
    "id": 10176,
    "dexNumber": 554,
    "generation": 8,
    "nameKo": "달막화",
    "nameEn": "Darumaka",
    "formLabel": "가라르",
    "types": [
      "얼음"
    ],
    "stats": {
      "hp": 70,
      "attack": 90,
      "defense": 45,
      "specialAttack": 15,
      "specialDefense": 45,
      "speed": 50
    },
    "category": "달마 포켓몬",
    "heightM": 0.7,
    "weightKg": 40,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10176.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10176.png"
  },
  {
    "id": 10177,
    "dexNumber": 555,
    "generation": 8,
    "nameKo": "불비달마",
    "nameEn": "Darmanitan",
    "formLabel": "가라르",
    "types": [
      "얼음"
    ],
    "stats": {
      "hp": 105,
      "attack": 140,
      "defense": 55,
      "specialAttack": 30,
      "specialDefense": 55,
      "speed": 95
    },
    "category": "염상 포켓몬",
    "heightM": 1.7,
    "weightKg": 120,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10177.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10177.png"
  },
  {
    "id": 10179,
    "dexNumber": 562,
    "generation": 8,
    "nameKo": "데스마스",
    "nameEn": "Yamask",
    "formLabel": "가라르",
    "types": [
      "땅",
      "고스트"
    ],
    "stats": {
      "hp": 38,
      "attack": 55,
      "defense": 85,
      "specialAttack": 30,
      "specialDefense": 65,
      "speed": 30
    },
    "category": "영혼 포켓몬",
    "heightM": 0.5,
    "weightKg": 1.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10179.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10179.png"
  },
  {
    "id": 10180,
    "dexNumber": 618,
    "generation": 8,
    "nameKo": "메더",
    "nameEn": "Stunfisk",
    "formLabel": "가라르",
    "types": [
      "땅",
      "강철"
    ],
    "stats": {
      "hp": 109,
      "attack": 81,
      "defense": 99,
      "specialAttack": 66,
      "specialDefense": 84,
      "speed": 32
    },
    "category": "트랩 포켓몬",
    "heightM": 0.7,
    "weightKg": 20.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10180.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10180.png"
  },
  {
    "id": 10229,
    "dexNumber": 58,
    "generation": 8,
    "nameKo": "가디",
    "nameEn": "Growlithe",
    "formLabel": "히스이",
    "types": [
      "불꽃",
      "바위"
    ],
    "stats": {
      "hp": 60,
      "attack": 75,
      "defense": 45,
      "specialAttack": 65,
      "specialDefense": 50,
      "speed": 55
    },
    "category": "강아지 포켓몬",
    "heightM": 0.8,
    "weightKg": 22.7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10229.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10229.png"
  },
  {
    "id": 10230,
    "dexNumber": 59,
    "generation": 8,
    "nameKo": "윈디",
    "nameEn": "Arcanine",
    "formLabel": "히스이",
    "types": [
      "불꽃",
      "바위"
    ],
    "stats": {
      "hp": 95,
      "attack": 115,
      "defense": 80,
      "specialAttack": 95,
      "specialDefense": 80,
      "speed": 90
    },
    "category": "전설 포켓몬",
    "heightM": 2,
    "weightKg": 168,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10230.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10230.png"
  },
  {
    "id": 10231,
    "dexNumber": 100,
    "generation": 8,
    "nameKo": "찌리리공",
    "nameEn": "Voltorb",
    "formLabel": "히스이",
    "types": [
      "전기",
      "풀"
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
    "weightKg": 13,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10231.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10231.png"
  },
  {
    "id": 10232,
    "dexNumber": 101,
    "generation": 8,
    "nameKo": "붐볼",
    "nameEn": "Electrode",
    "formLabel": "히스이",
    "types": [
      "전기",
      "풀"
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
    "weightKg": 71,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10232.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10232.png"
  },
  {
    "id": 10233,
    "dexNumber": 157,
    "generation": 8,
    "nameKo": "블레이범",
    "nameEn": "Typhlosion",
    "formLabel": "히스이",
    "types": [
      "불꽃",
      "고스트"
    ],
    "stats": {
      "hp": 73,
      "attack": 84,
      "defense": 78,
      "specialAttack": 119,
      "specialDefense": 85,
      "speed": 95
    },
    "category": "화산 포켓몬",
    "heightM": 1.6,
    "weightKg": 69.8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10233.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10233.png"
  },
  {
    "id": 10234,
    "dexNumber": 211,
    "generation": 8,
    "nameKo": "침바루",
    "nameEn": "Qwilfish",
    "formLabel": "히스이",
    "types": [
      "악",
      "독"
    ],
    "stats": {
      "hp": 65,
      "attack": 95,
      "defense": 85,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 85
    },
    "category": "풍선 포켓몬",
    "heightM": 0.5,
    "weightKg": 3.9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10234.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10234.png"
  },
  {
    "id": 10235,
    "dexNumber": 215,
    "generation": 8,
    "nameKo": "포푸니",
    "nameEn": "Sneasel",
    "formLabel": "히스이",
    "types": [
      "격투",
      "독"
    ],
    "stats": {
      "hp": 55,
      "attack": 95,
      "defense": 55,
      "specialAttack": 35,
      "specialDefense": 75,
      "speed": 115
    },
    "category": "갈고리손톱 포켓몬",
    "heightM": 0.9,
    "weightKg": 27,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10235.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10235.png"
  },
  {
    "id": 10236,
    "dexNumber": 503,
    "generation": 8,
    "nameKo": "대검귀",
    "nameEn": "Samurott",
    "formLabel": "히스이",
    "types": [
      "물",
      "악"
    ],
    "stats": {
      "hp": 90,
      "attack": 108,
      "defense": 80,
      "specialAttack": 100,
      "specialDefense": 65,
      "speed": 85
    },
    "category": "관록 포켓몬",
    "heightM": 1.5,
    "weightKg": 58.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10236.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10236.png"
  },
  {
    "id": 10237,
    "dexNumber": 549,
    "generation": 8,
    "nameKo": "드레디어",
    "nameEn": "Lilligant",
    "formLabel": "히스이",
    "types": [
      "풀",
      "격투"
    ],
    "stats": {
      "hp": 70,
      "attack": 105,
      "defense": 75,
      "specialAttack": 50,
      "specialDefense": 75,
      "speed": 105
    },
    "category": "꽃장식 포켓몬",
    "heightM": 1.2,
    "weightKg": 19.2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10237.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10237.png"
  },
  {
    "id": 10238,
    "dexNumber": 570,
    "generation": 8,
    "nameKo": "조로아",
    "nameEn": "Zorua",
    "formLabel": "히스이",
    "types": [
      "노말",
      "고스트"
    ],
    "stats": {
      "hp": 35,
      "attack": 60,
      "defense": 40,
      "specialAttack": 85,
      "specialDefense": 40,
      "speed": 70
    },
    "category": "나쁜여우 포켓몬",
    "heightM": 0.7,
    "weightKg": 12.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10238.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10238.png"
  },
  {
    "id": 10239,
    "dexNumber": 571,
    "generation": 8,
    "nameKo": "조로아크",
    "nameEn": "Zoroark",
    "formLabel": "히스이",
    "types": [
      "노말",
      "고스트"
    ],
    "stats": {
      "hp": 55,
      "attack": 100,
      "defense": 60,
      "specialAttack": 125,
      "specialDefense": 60,
      "speed": 110
    },
    "category": "요괴여우 포켓몬",
    "heightM": 1.6,
    "weightKg": 73,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10239.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10239.png"
  },
  {
    "id": 10240,
    "dexNumber": 628,
    "generation": 8,
    "nameKo": "워글",
    "nameEn": "Braviary",
    "formLabel": "히스이",
    "types": [
      "에스퍼",
      "비행"
    ],
    "stats": {
      "hp": 110,
      "attack": 83,
      "defense": 70,
      "specialAttack": 112,
      "specialDefense": 70,
      "speed": 65
    },
    "category": "용맹 포켓몬",
    "heightM": 1.7,
    "weightKg": 43.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10240.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10240.png"
  },
  {
    "id": 10241,
    "dexNumber": 705,
    "generation": 8,
    "nameKo": "미끄네일",
    "nameEn": "Sliggoo",
    "formLabel": "히스이",
    "types": [
      "강철",
      "드래곤"
    ],
    "stats": {
      "hp": 58,
      "attack": 75,
      "defense": 83,
      "specialAttack": 83,
      "specialDefense": 113,
      "speed": 40
    },
    "category": "연체 포켓몬",
    "heightM": 0.7,
    "weightKg": 68.5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10241.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10241.png"
  },
  {
    "id": 10242,
    "dexNumber": 706,
    "generation": 8,
    "nameKo": "미끄래곤",
    "nameEn": "Goodra",
    "formLabel": "히스이",
    "types": [
      "강철",
      "드래곤"
    ],
    "stats": {
      "hp": 80,
      "attack": 100,
      "defense": 100,
      "specialAttack": 110,
      "specialDefense": 150,
      "speed": 60
    },
    "category": "드래곤 포켓몬",
    "heightM": 1.7,
    "weightKg": 334.1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10242.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10242.png"
  },
  {
    "id": 10243,
    "dexNumber": 713,
    "generation": 8,
    "nameKo": "크레베이스",
    "nameEn": "Avalugg",
    "formLabel": "히스이",
    "types": [
      "얼음",
      "바위"
    ],
    "stats": {
      "hp": 95,
      "attack": 127,
      "defense": 184,
      "specialAttack": 34,
      "specialDefense": 36,
      "speed": 38
    },
    "category": "빙산 포켓몬",
    "heightM": 1.4,
    "weightKg": 262.4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10243.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10243.png"
  },
  {
    "id": 10244,
    "dexNumber": 724,
    "generation": 8,
    "nameKo": "모크나이퍼",
    "nameEn": "Decidueye",
    "formLabel": "히스이",
    "types": [
      "풀",
      "격투"
    ],
    "stats": {
      "hp": 88,
      "attack": 112,
      "defense": 80,
      "specialAttack": 95,
      "specialDefense": 95,
      "speed": 60
    },
    "category": "화살깃 포켓몬",
    "heightM": 1.6,
    "weightKg": 37,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10244.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10244.png"
  },
  {
    "id": 10250,
    "dexNumber": 128,
    "generation": 9,
    "nameKo": "켄타로스",
    "nameEn": "Tauros",
    "formLabel": "팔데아(전투종)",
    "types": [
      "격투"
    ],
    "stats": {
      "hp": 75,
      "attack": 110,
      "defense": 105,
      "specialAttack": 30,
      "specialDefense": 70,
      "speed": 100
    },
    "category": "성난소 포켓몬",
    "heightM": 1.4,
    "weightKg": 115,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10250.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10250.png"
  },
  {
    "id": 10251,
    "dexNumber": 128,
    "generation": 9,
    "nameKo": "켄타로스",
    "nameEn": "Tauros",
    "formLabel": "팔데아(불꽃종)",
    "types": [
      "격투",
      "불꽃"
    ],
    "stats": {
      "hp": 75,
      "attack": 110,
      "defense": 105,
      "specialAttack": 30,
      "specialDefense": 70,
      "speed": 100
    },
    "category": "성난소 포켓몬",
    "heightM": 1.4,
    "weightKg": 85,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10251.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10251.png"
  },
  {
    "id": 10252,
    "dexNumber": 128,
    "generation": 9,
    "nameKo": "켄타로스",
    "nameEn": "Tauros",
    "formLabel": "팔데아(파도종)",
    "types": [
      "격투",
      "물"
    ],
    "stats": {
      "hp": 75,
      "attack": 110,
      "defense": 105,
      "specialAttack": 30,
      "specialDefense": 70,
      "speed": 100
    },
    "category": "성난소 포켓몬",
    "heightM": 1.4,
    "weightKg": 110,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10252.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10252.png"
  },
  {
    "id": 10253,
    "dexNumber": 194,
    "generation": 9,
    "nameKo": "우파",
    "nameEn": "Wooper",
    "formLabel": "팔데아",
    "types": [
      "독",
      "땅"
    ],
    "stats": {
      "hp": 55,
      "attack": 45,
      "defense": 45,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 15
    },
    "category": "수어 포켓몬",
    "heightM": 0.4,
    "weightKg": 11,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10253.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10253.png"
  }
]

export const ALL_EVOLUTION_LINES: EvolutionStage[][] = [
  [
    {
      "pokemonId": 7,
      "children": [
        {
          "pokemonId": 8,
          "trigger": "레벨 16",
          "children": [
            {
              "pokemonId": 9,
              "trigger": "레벨 36"
            }
          ]
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
          "trigger": "레벨 18",
          "children": [
            {
              "pokemonId": 18,
              "trigger": "레벨 36"
            }
          ]
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
          "trigger": "레벨 16",
          "children": [
            {
              "pokemonId": 6,
              "trigger": "레벨 36"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 1,
      "children": [
        {
          "pokemonId": 2,
          "trigger": "레벨 16",
          "children": [
            {
              "pokemonId": 3,
              "trigger": "레벨 32"
            }
          ]
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
          "trigger": "레벨 7",
          "children": [
            {
              "pokemonId": 12,
              "trigger": "레벨 10"
            }
          ]
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
          "trigger": "레벨 7",
          "children": [
            {
              "pokemonId": 15,
              "trigger": "레벨 10"
            }
          ]
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
      "pokemonId": 10091,
      "children": [
        {
          "pokemonId": 10092,
          "trigger": "레벨 20 · 밤"
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
      "pokemonId": 10101,
      "children": [
        {
          "pokemonId": 10102,
          "trigger": "얼음의돌 사용",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ice-stone.png"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 172,
      "children": [
        {
          "pokemonId": 25,
          "trigger": "레벨업 · 친밀도 220 이상",
          "children": [
            {
              "pokemonId": 26,
              "trigger": "천둥의돌 사용",
              "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/thunder-stone.png"
            },
            {
              "pokemonId": 10100,
              "trigger": "천둥의돌 사용",
              "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/thunder-stone.png"
            }
          ]
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
          "trigger": "레벨 16",
          "children": [
            {
              "pokemonId": 31,
              "trigger": "달의돌 사용",
              "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/moon-stone.png"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 174,
      "children": [
        {
          "pokemonId": 39,
          "trigger": "레벨업 · 친밀도 160 이상",
          "children": [
            {
              "pokemonId": 40,
              "trigger": "달의돌 사용",
              "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/moon-stone.png"
            }
          ]
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
          "trigger": "레벨 22",
          "children": [
            {
              "pokemonId": 169,
              "trigger": "레벨업 · 친밀도 160 이상"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 173,
      "children": [
        {
          "pokemonId": 35,
          "trigger": "레벨업 · 친밀도 160 이상",
          "children": [
            {
              "pokemonId": 36,
              "trigger": "달의돌 사용",
              "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/moon-stone.png"
            }
          ]
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
          "trigger": "레벨 16",
          "children": [
            {
              "pokemonId": 34,
              "trigger": "달의돌 사용",
              "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/moon-stone.png"
            }
          ]
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
          "trigger": "불꽃의돌 사용",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/fire-stone.png"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 10103,
      "children": [
        {
          "pokemonId": 10104,
          "trigger": "얼음의돌 사용",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ice-stone.png"
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
      "pokemonId": 10105,
      "children": [
        {
          "pokemonId": 10106,
          "trigger": "레벨 26"
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
          "trigger": "레벨 28",
          "children": [
            {
              "pokemonId": 979,
              "trigger": "특정 기술 사용"
            }
          ]
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
          "trigger": "레벨 16",
          "children": [
            {
              "pokemonId": 65,
              "trigger": "교환"
            }
          ]
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
          "trigger": "불꽃의돌 사용",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/fire-stone.png"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 10229,
      "children": [
        {
          "pokemonId": 10230,
          "trigger": "불꽃의돌 사용",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/fire-stone.png"
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
      "pokemonId": 10107,
      "children": [
        {
          "pokemonId": 10108,
          "trigger": "레벨업 · 친밀도 160 이상"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 10161,
      "children": [
        {
          "pokemonId": 863,
          "trigger": "레벨 28"
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
          "trigger": "레벨 21",
          "children": [
            {
              "pokemonId": 45,
              "trigger": "리프의돌 사용",
              "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/leaf-stone.png"
            },
            {
              "pokemonId": 182,
              "trigger": "태양의돌 사용",
              "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sun-stone.png"
            }
          ]
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
          "trigger": "레벨 21",
          "children": [
            {
              "pokemonId": 71,
              "trigger": "리프의돌 사용",
              "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/leaf-stone.png"
            }
          ]
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
          "trigger": "레벨 28",
          "children": [
            {
              "pokemonId": 68,
              "trigger": "교환"
            }
          ]
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
          "trigger": "레벨 25",
          "children": [
            {
              "pokemonId": 76,
              "trigger": "교환"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 10109,
      "children": [
        {
          "pokemonId": 10110,
          "trigger": "레벨 25",
          "children": [
            {
              "pokemonId": 10111,
              "trigger": "교환"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 10110,
      "children": [
        {
          "pokemonId": 10111,
          "trigger": "교환"
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
          "trigger": "레벨 30",
          "children": [
            {
              "pokemonId": 462,
              "trigger": "레벨업"
            }
          ]
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
      "pokemonId": 10162,
      "children": [
        {
          "pokemonId": 10163,
          "trigger": "레벨 40"
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
      "pokemonId": 60,
      "children": [
        {
          "pokemonId": 61,
          "trigger": "레벨 25",
          "children": [
            {
              "pokemonId": 62,
              "trigger": "물의돌 사용",
              "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/water-stone.png"
            },
            {
              "pokemonId": 186,
              "trigger": "교환 · 소지: 왕의징표석"
            }
          ]
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
        },
        {
          "pokemonId": 199,
          "trigger": "교환 · 소지: 왕의징표석"
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
      "pokemonId": 10166,
      "children": [
        {
          "pokemonId": 865,
          "trigger": "한 전투에서 급소 3회"
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
          "trigger": "물의돌 사용",
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
          "trigger": "레벨 25",
          "children": [
            {
              "pokemonId": 94,
              "trigger": "교환"
            }
          ]
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
      "pokemonId": 10112,
      "children": [
        {
          "pokemonId": 10113,
          "trigger": "레벨 38"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 95,
      "children": [
        {
          "pokemonId": 208,
          "trigger": "교환 · 소지: 금속코트"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 10164,
      "children": [
        {
          "pokemonId": 10165,
          "trigger": "가라두구팔찌 사용"
        },
        {
          "pokemonId": 10172,
          "trigger": "가라두구머리장식 사용"
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
      "pokemonId": 10231,
      "children": [
        {
          "pokemonId": 10232,
          "trigger": "리프의돌 사용",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/leaf-stone.png"
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
          "trigger": "리프의돌 사용",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/leaf-stone.png"
        },
        {
          "pokemonId": 10114,
          "trigger": "리프의돌 사용",
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
        },
        {
          "pokemonId": 10115,
          "trigger": "레벨 28 · 밤"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 236,
      "children": [
        {
          "pokemonId": 106,
          "trigger": "레벨 20 · 공격>방어"
        },
        {
          "pokemonId": 107,
          "trigger": "레벨 20 · 공격<방어"
        },
        {
          "pokemonId": 237,
          "trigger": "레벨 20 · 공격=방어"
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
        },
        {
          "pokemonId": 10167,
          "trigger": "레벨 35"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 108,
      "children": [
        {
          "pokemonId": 463,
          "trigger": "레벨업 · 구르기 습득"
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
          "trigger": "레벨 42",
          "children": [
            {
              "pokemonId": 464,
              "trigger": "교환 · 소지: 프로텍터"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 440,
      "children": [
        {
          "pokemonId": 113,
          "trigger": "레벨업 · 낮 · 소지: 동글동글돌",
          "children": [
            {
              "pokemonId": 242,
              "trigger": "레벨업 · 친밀도 160 이상"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 114,
      "children": [
        {
          "pokemonId": 465,
          "trigger": "레벨업 · 원시의힘 습득"
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
          "trigger": "레벨 32",
          "children": [
            {
              "pokemonId": 230,
              "trigger": "교환 · 소지: 용의비늘"
            }
          ]
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
          "trigger": "물의돌 사용",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/water-stone.png"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 238,
      "children": [
        {
          "pokemonId": 124,
          "trigger": "레벨 30"
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
      "pokemonId": 123,
      "children": [
        {
          "pokemonId": 212,
          "trigger": "교환 · 소지: 금속코트"
        },
        {
          "pokemonId": 900,
          "trigger": "black-augurite 사용"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 239,
      "children": [
        {
          "pokemonId": 125,
          "trigger": "레벨 30",
          "children": [
            {
              "pokemonId": 466,
              "trigger": "교환 · 소지: 에레키부스터"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 240,
      "children": [
        {
          "pokemonId": 126,
          "trigger": "레벨 30",
          "children": [
            {
              "pokemonId": 467,
              "trigger": "교환 · 소지: 마그마부스터"
            }
          ]
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
          "trigger": "물의돌 사용",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/water-stone.png"
        },
        {
          "pokemonId": 135,
          "trigger": "천둥의돌 사용",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/thunder-stone.png"
        },
        {
          "pokemonId": 136,
          "trigger": "불꽃의돌 사용",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/fire-stone.png"
        },
        {
          "pokemonId": 196,
          "trigger": "레벨업 · 친밀도 160 이상 · 낮"
        },
        {
          "pokemonId": 197,
          "trigger": "레벨업 · 친밀도 160 이상 · 밤"
        },
        {
          "pokemonId": 470,
          "trigger": "레벨업"
        },
        {
          "pokemonId": 471,
          "trigger": "레벨업"
        },
        {
          "pokemonId": 700,
          "trigger": "레벨업 · 어픽션 2 이상 · 페어리 타입 기술 습득"
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
      "pokemonId": 439,
      "children": [
        {
          "pokemonId": 122,
          "trigger": "레벨업 · 흉내내기 습득"
        },
        {
          "pokemonId": 10168,
          "trigger": "레벨업 · 흉내내기 습득",
          "children": [
            {
              "pokemonId": 866,
              "trigger": "레벨 42"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 10168,
      "children": [
        {
          "pokemonId": 866,
          "trigger": "레벨 42"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 446,
      "children": [
        {
          "pokemonId": 143,
          "trigger": "레벨업 · 친밀도 160 이상"
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
          "trigger": "레벨 30",
          "children": [
            {
              "pokemonId": 149,
              "trigger": "레벨 55"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 137,
      "children": [
        {
          "pokemonId": 233,
          "trigger": "교환 · 소지: 업그레이드",
          "children": [
            {
              "pokemonId": 474,
              "trigger": "교환 · 소지: 괴상한패치"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 155,
      "children": [
        {
          "pokemonId": 156,
          "trigger": "레벨 14",
          "children": [
            {
              "pokemonId": 157,
              "trigger": "레벨 36"
            },
            {
              "pokemonId": 10233,
              "trigger": "레벨 36"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 152,
      "children": [
        {
          "pokemonId": 153,
          "trigger": "레벨 16",
          "children": [
            {
              "pokemonId": 154,
              "trigger": "레벨 32"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 161,
      "children": [
        {
          "pokemonId": 162,
          "trigger": "레벨 15"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 158,
      "children": [
        {
          "pokemonId": 159,
          "trigger": "레벨 18",
          "children": [
            {
              "pokemonId": 160,
              "trigger": "레벨 30"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 163,
      "children": [
        {
          "pokemonId": 164,
          "trigger": "레벨 20"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 165,
      "children": [
        {
          "pokemonId": 166,
          "trigger": "레벨 18"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 167,
      "children": [
        {
          "pokemonId": 168,
          "trigger": "레벨 22"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 170,
      "children": [
        {
          "pokemonId": 171,
          "trigger": "레벨 27"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 177,
      "children": [
        {
          "pokemonId": 178,
          "trigger": "레벨 25"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 179,
      "children": [
        {
          "pokemonId": 180,
          "trigger": "레벨 15",
          "children": [
            {
              "pokemonId": 181,
              "trigger": "레벨 30"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 298,
      "children": [
        {
          "pokemonId": 183,
          "trigger": "레벨업 · 친밀도 160 이상",
          "children": [
            {
              "pokemonId": 184,
              "trigger": "레벨 18"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 438,
      "children": [
        {
          "pokemonId": 185,
          "trigger": "레벨업 · 흉내내기 습득"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 187,
      "children": [
        {
          "pokemonId": 188,
          "trigger": "레벨 18",
          "children": [
            {
              "pokemonId": 189,
              "trigger": "레벨 27"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 175,
      "children": [
        {
          "pokemonId": 176,
          "trigger": "레벨업 · 친밀도 160 이상",
          "children": [
            {
              "pokemonId": 468,
              "trigger": "빛의돌 사용",
              "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/shiny-stone.png"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 191,
      "children": [
        {
          "pokemonId": 192,
          "trigger": "태양의돌 사용",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sun-stone.png"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 193,
      "children": [
        {
          "pokemonId": 469,
          "trigger": "레벨업 · 원시의힘 습득"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 194,
      "children": [
        {
          "pokemonId": 195,
          "trigger": "레벨 20"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 10253,
      "children": [
        {
          "pokemonId": 980,
          "trigger": "레벨 20"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 190,
      "children": [
        {
          "pokemonId": 424,
          "trigger": "레벨업 · 더블어택 습득"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 204,
      "children": [
        {
          "pokemonId": 205,
          "trigger": "레벨 31"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 200,
      "children": [
        {
          "pokemonId": 429,
          "trigger": "어둠의돌 사용",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dusk-stone.png"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 198,
      "children": [
        {
          "pokemonId": 430,
          "trigger": "어둠의돌 사용",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dusk-stone.png"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 360,
      "children": [
        {
          "pokemonId": 202,
          "trigger": "레벨 15"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 203,
      "children": [
        {
          "pokemonId": 981,
          "trigger": "레벨업 · twin-beam 습득"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 209,
      "children": [
        {
          "pokemonId": 210,
          "trigger": "레벨 23"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 206,
      "children": [
        {
          "pokemonId": 982,
          "trigger": "레벨업 · hyper-drill 습득"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 207,
      "children": [
        {
          "pokemonId": 472,
          "trigger": "레벨업 · 밤 · 소지: 예리한이빨"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 10234,
      "children": [
        {
          "pokemonId": 904,
          "trigger": "강함 스타일 기술 사용"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 218,
      "children": [
        {
          "pokemonId": 219,
          "trigger": "레벨 38"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 220,
      "children": [
        {
          "pokemonId": 221,
          "trigger": "레벨 33",
          "children": [
            {
              "pokemonId": 473,
              "trigger": "레벨업 · 원시의힘 습득"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 223,
      "children": [
        {
          "pokemonId": 224,
          "trigger": "레벨 25"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 216,
      "children": [
        {
          "pokemonId": 217,
          "trigger": "레벨 30",
          "children": [
            {
              "pokemonId": 901,
              "trigger": "peat-block 사용 · 밤"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 458,
      "children": [
        {
          "pokemonId": 226,
          "trigger": "레벨업 · 파티에 특정 포켓몬 동반"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 228,
      "children": [
        {
          "pokemonId": 229,
          "trigger": "레벨 24"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 231,
      "children": [
        {
          "pokemonId": 232,
          "trigger": "레벨 25"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 215,
      "children": [
        {
          "pokemonId": 461,
          "trigger": "레벨업 · 밤 · 소지: 예리한손톱"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 10235,
      "children": [
        {
          "pokemonId": 903,
          "trigger": "레벨업 · 낮 · 소지: 예리한손톱"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 234,
      "children": [
        {
          "pokemonId": 899,
          "trigger": "민첩 스타일 기술 사용"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 246,
      "children": [
        {
          "pokemonId": 247,
          "trigger": "레벨 30",
          "children": [
            {
              "pokemonId": 248,
              "trigger": "레벨 55"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 252,
      "children": [
        {
          "pokemonId": 253,
          "trigger": "레벨 16",
          "children": [
            {
              "pokemonId": 254,
              "trigger": "레벨 36"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 255,
      "children": [
        {
          "pokemonId": 256,
          "trigger": "레벨 16",
          "children": [
            {
              "pokemonId": 257,
              "trigger": "레벨 36"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 258,
      "children": [
        {
          "pokemonId": 259,
          "trigger": "레벨 16",
          "children": [
            {
              "pokemonId": 260,
              "trigger": "레벨 36"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 261,
      "children": [
        {
          "pokemonId": 262,
          "trigger": "레벨 18"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 265,
      "children": [
        {
          "pokemonId": 266,
          "trigger": "레벨 7",
          "children": [
            {
              "pokemonId": 267,
              "trigger": "레벨 10"
            }
          ]
        },
        {
          "pokemonId": 268,
          "trigger": "레벨 7",
          "children": [
            {
              "pokemonId": 269,
              "trigger": "레벨 10"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 270,
      "children": [
        {
          "pokemonId": 271,
          "trigger": "레벨 14",
          "children": [
            {
              "pokemonId": 272,
              "trigger": "물의돌 사용",
              "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/water-stone.png"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 263,
      "children": [
        {
          "pokemonId": 264,
          "trigger": "레벨 20"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 10174,
      "children": [
        {
          "pokemonId": 10175,
          "trigger": "레벨 20",
          "children": [
            {
              "pokemonId": 862,
              "trigger": "레벨 35 · 밤"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 10175,
      "children": [
        {
          "pokemonId": 862,
          "trigger": "레벨 35 · 밤"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 273,
      "children": [
        {
          "pokemonId": 274,
          "trigger": "레벨 14",
          "children": [
            {
              "pokemonId": 275,
              "trigger": "리프의돌 사용",
              "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/leaf-stone.png"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 276,
      "children": [
        {
          "pokemonId": 277,
          "trigger": "레벨 22"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 278,
      "children": [
        {
          "pokemonId": 279,
          "trigger": "레벨 25"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 283,
      "children": [
        {
          "pokemonId": 284,
          "trigger": "레벨 22"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 285,
      "children": [
        {
          "pokemonId": 286,
          "trigger": "레벨 23"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 287,
      "children": [
        {
          "pokemonId": 288,
          "trigger": "레벨 18",
          "children": [
            {
              "pokemonId": 289,
              "trigger": "레벨 36"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 10173,
      "children": [
        {
          "pokemonId": 864,
          "trigger": "레벨 38"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 290,
      "children": [
        {
          "pokemonId": 291,
          "trigger": "레벨 20"
        },
        {
          "pokemonId": 292,
          "trigger": "레벨업(빈 자리+몬스터볼 필요)"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 280,
      "children": [
        {
          "pokemonId": 281,
          "trigger": "레벨 20",
          "children": [
            {
              "pokemonId": 282,
              "trigger": "레벨 30"
            },
            {
              "pokemonId": 475,
              "trigger": "각성의돌 사용 · 수컷",
              "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dawn-stone.png"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 293,
      "children": [
        {
          "pokemonId": 294,
          "trigger": "레벨 20",
          "children": [
            {
              "pokemonId": 295,
              "trigger": "레벨 40"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 296,
      "children": [
        {
          "pokemonId": 297,
          "trigger": "레벨 24"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 299,
      "children": [
        {
          "pokemonId": 476,
          "trigger": "레벨업"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 300,
      "children": [
        {
          "pokemonId": 301,
          "trigger": "달의돌 사용",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/moon-stone.png"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 304,
      "children": [
        {
          "pokemonId": 305,
          "trigger": "레벨 32",
          "children": [
            {
              "pokemonId": 306,
              "trigger": "레벨 42"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 309,
      "children": [
        {
          "pokemonId": 310,
          "trigger": "레벨 26"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 307,
      "children": [
        {
          "pokemonId": 308,
          "trigger": "레벨 37"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 406,
      "children": [
        {
          "pokemonId": 315,
          "trigger": "레벨업 · 친밀도 160 이상 · 낮",
          "children": [
            {
              "pokemonId": 407,
              "trigger": "빛의돌 사용",
              "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/shiny-stone.png"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 316,
      "children": [
        {
          "pokemonId": 317,
          "trigger": "레벨 26"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 318,
      "children": [
        {
          "pokemonId": 319,
          "trigger": "레벨 30"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 322,
      "children": [
        {
          "pokemonId": 323,
          "trigger": "레벨 33"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 320,
      "children": [
        {
          "pokemonId": 321,
          "trigger": "레벨 40"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 325,
      "children": [
        {
          "pokemonId": 326,
          "trigger": "레벨 32"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 328,
      "children": [
        {
          "pokemonId": 329,
          "trigger": "레벨 35",
          "children": [
            {
              "pokemonId": 330,
              "trigger": "레벨 45"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 331,
      "children": [
        {
          "pokemonId": 332,
          "trigger": "레벨 32"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 333,
      "children": [
        {
          "pokemonId": 334,
          "trigger": "레벨 35"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 339,
      "children": [
        {
          "pokemonId": 340,
          "trigger": "레벨 30"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 343,
      "children": [
        {
          "pokemonId": 344,
          "trigger": "레벨 36"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 341,
      "children": [
        {
          "pokemonId": 342,
          "trigger": "레벨 30"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 347,
      "children": [
        {
          "pokemonId": 348,
          "trigger": "레벨 40"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 345,
      "children": [
        {
          "pokemonId": 346,
          "trigger": "레벨 40"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 349,
      "children": [
        {
          "pokemonId": 350,
          "trigger": "레벨업 · 아름다움 170 이상"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 353,
      "children": [
        {
          "pokemonId": 354,
          "trigger": "레벨 37"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 433,
      "children": [
        {
          "pokemonId": 358,
          "trigger": "레벨업 · 친밀도 220 이상 · 밤"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 361,
      "children": [
        {
          "pokemonId": 362,
          "trigger": "레벨 42"
        },
        {
          "pokemonId": 478,
          "trigger": "각성의돌 사용 · 암컷",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dawn-stone.png"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 363,
      "children": [
        {
          "pokemonId": 364,
          "trigger": "레벨 32",
          "children": [
            {
              "pokemonId": 365,
              "trigger": "레벨 44"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 355,
      "children": [
        {
          "pokemonId": 356,
          "trigger": "레벨 37",
          "children": [
            {
              "pokemonId": 477,
              "trigger": "교환 · 소지: 영계의천"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 374,
      "children": [
        {
          "pokemonId": 375,
          "trigger": "레벨 20",
          "children": [
            {
              "pokemonId": 376,
              "trigger": "레벨 45"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 371,
      "children": [
        {
          "pokemonId": 372,
          "trigger": "레벨 30",
          "children": [
            {
              "pokemonId": 373,
              "trigger": "레벨 50"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 366,
      "children": [
        {
          "pokemonId": 367,
          "trigger": "교환 · 소지: 심해의이빨"
        },
        {
          "pokemonId": 368,
          "trigger": "교환 · 소지: 심해의비늘"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 387,
      "children": [
        {
          "pokemonId": 388,
          "trigger": "레벨 18",
          "children": [
            {
              "pokemonId": 389,
              "trigger": "레벨 32"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 390,
      "children": [
        {
          "pokemonId": 391,
          "trigger": "레벨 14",
          "children": [
            {
              "pokemonId": 392,
              "trigger": "레벨 36"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 393,
      "children": [
        {
          "pokemonId": 394,
          "trigger": "레벨 16",
          "children": [
            {
              "pokemonId": 395,
              "trigger": "레벨 36"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 396,
      "children": [
        {
          "pokemonId": 397,
          "trigger": "레벨 14",
          "children": [
            {
              "pokemonId": 398,
              "trigger": "레벨 34"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 399,
      "children": [
        {
          "pokemonId": 400,
          "trigger": "레벨 15"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 403,
      "children": [
        {
          "pokemonId": 404,
          "trigger": "레벨 15",
          "children": [
            {
              "pokemonId": 405,
              "trigger": "레벨 30"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 401,
      "children": [
        {
          "pokemonId": 402,
          "trigger": "레벨 10"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 408,
      "children": [
        {
          "pokemonId": 409,
          "trigger": "레벨 30"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 410,
      "children": [
        {
          "pokemonId": 411,
          "trigger": "레벨 30"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 412,
      "children": [
        {
          "pokemonId": 413,
          "trigger": "레벨 20 · 암컷"
        },
        {
          "pokemonId": 414,
          "trigger": "레벨 20 · 수컷"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 415,
      "children": [
        {
          "pokemonId": 416,
          "trigger": "레벨 21 · 암컷"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 420,
      "children": [
        {
          "pokemonId": 421,
          "trigger": "레벨 25"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 418,
      "children": [
        {
          "pokemonId": 419,
          "trigger": "레벨 26"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 422,
      "children": [
        {
          "pokemonId": 423,
          "trigger": "레벨 30"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 425,
      "children": [
        {
          "pokemonId": 426,
          "trigger": "레벨 28"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 431,
      "children": [
        {
          "pokemonId": 432,
          "trigger": "레벨 38"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 434,
      "children": [
        {
          "pokemonId": 435,
          "trigger": "레벨 34"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 427,
      "children": [
        {
          "pokemonId": 428,
          "trigger": "레벨업 · 친밀도 160 이상"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 436,
      "children": [
        {
          "pokemonId": 437,
          "trigger": "레벨 33"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 443,
      "children": [
        {
          "pokemonId": 444,
          "trigger": "레벨 24",
          "children": [
            {
              "pokemonId": 445,
              "trigger": "레벨 48"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 449,
      "children": [
        {
          "pokemonId": 450,
          "trigger": "레벨 34"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 447,
      "children": [
        {
          "pokemonId": 448,
          "trigger": "레벨업 · 친밀도 160 이상 · 낮"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 451,
      "children": [
        {
          "pokemonId": 452,
          "trigger": "레벨 40"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 453,
      "children": [
        {
          "pokemonId": 454,
          "trigger": "레벨 37"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 456,
      "children": [
        {
          "pokemonId": 457,
          "trigger": "레벨 31"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 459,
      "children": [
        {
          "pokemonId": 460,
          "trigger": "레벨 40"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 495,
      "children": [
        {
          "pokemonId": 496,
          "trigger": "레벨 17",
          "children": [
            {
              "pokemonId": 497,
              "trigger": "레벨 36"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 498,
      "children": [
        {
          "pokemonId": 499,
          "trigger": "레벨 17",
          "children": [
            {
              "pokemonId": 500,
              "trigger": "레벨 36"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 501,
      "children": [
        {
          "pokemonId": 502,
          "trigger": "레벨 17",
          "children": [
            {
              "pokemonId": 503,
              "trigger": "레벨 36"
            },
            {
              "pokemonId": 10236,
              "trigger": "레벨 36"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 506,
      "children": [
        {
          "pokemonId": 507,
          "trigger": "레벨 16",
          "children": [
            {
              "pokemonId": 508,
              "trigger": "레벨 32"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 504,
      "children": [
        {
          "pokemonId": 505,
          "trigger": "레벨 20"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 509,
      "children": [
        {
          "pokemonId": 510,
          "trigger": "레벨 20"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 511,
      "children": [
        {
          "pokemonId": 512,
          "trigger": "리프의돌 사용",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/leaf-stone.png"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 513,
      "children": [
        {
          "pokemonId": 514,
          "trigger": "불꽃의돌 사용",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/fire-stone.png"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 515,
      "children": [
        {
          "pokemonId": 516,
          "trigger": "물의돌 사용",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/water-stone.png"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 517,
      "children": [
        {
          "pokemonId": 518,
          "trigger": "달의돌 사용",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/moon-stone.png"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 519,
      "children": [
        {
          "pokemonId": 520,
          "trigger": "레벨 21",
          "children": [
            {
              "pokemonId": 521,
              "trigger": "레벨 32"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 522,
      "children": [
        {
          "pokemonId": 523,
          "trigger": "레벨 27"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 524,
      "children": [
        {
          "pokemonId": 525,
          "trigger": "레벨 25",
          "children": [
            {
              "pokemonId": 526,
              "trigger": "교환"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 527,
      "children": [
        {
          "pokemonId": 528,
          "trigger": "레벨업 · 친밀도 160 이상"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 532,
      "children": [
        {
          "pokemonId": 533,
          "trigger": "레벨 25",
          "children": [
            {
              "pokemonId": 534,
              "trigger": "교환"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 529,
      "children": [
        {
          "pokemonId": 530,
          "trigger": "레벨 31"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 535,
      "children": [
        {
          "pokemonId": 536,
          "trigger": "레벨 25",
          "children": [
            {
              "pokemonId": 537,
              "trigger": "레벨 36"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 540,
      "children": [
        {
          "pokemonId": 541,
          "trigger": "레벨 20",
          "children": [
            {
              "pokemonId": 542,
              "trigger": "레벨업 · 친밀도 220 이상"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 543,
      "children": [
        {
          "pokemonId": 544,
          "trigger": "레벨 22",
          "children": [
            {
              "pokemonId": 545,
              "trigger": "레벨 30"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 546,
      "children": [
        {
          "pokemonId": 547,
          "trigger": "태양의돌 사용",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sun-stone.png"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 548,
      "children": [
        {
          "pokemonId": 549,
          "trigger": "태양의돌 사용",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sun-stone.png"
        },
        {
          "pokemonId": 10237,
          "trigger": "태양의돌 사용",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sun-stone.png"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 551,
      "children": [
        {
          "pokemonId": 552,
          "trigger": "레벨 29",
          "children": [
            {
              "pokemonId": 553,
              "trigger": "레벨 40"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 557,
      "children": [
        {
          "pokemonId": 558,
          "trigger": "레벨 34"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 559,
      "children": [
        {
          "pokemonId": 560,
          "trigger": "레벨 39"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 554,
      "children": [
        {
          "pokemonId": 555,
          "trigger": "레벨 35"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 10176,
      "children": [
        {
          "pokemonId": 10177,
          "trigger": "얼음의돌 사용",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ice-stone.png"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 564,
      "children": [
        {
          "pokemonId": 565,
          "trigger": "레벨 37"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 566,
      "children": [
        {
          "pokemonId": 567,
          "trigger": "레벨 37"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 562,
      "children": [
        {
          "pokemonId": 563,
          "trigger": "레벨 34"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 10179,
      "children": [
        {
          "pokemonId": 867,
          "trigger": "데미지 49 이상 받고 특정 장소 통과"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 568,
      "children": [
        {
          "pokemonId": 569,
          "trigger": "레벨 36"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 572,
      "children": [
        {
          "pokemonId": 573,
          "trigger": "빛의돌 사용",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/shiny-stone.png"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 574,
      "children": [
        {
          "pokemonId": 575,
          "trigger": "레벨 32",
          "children": [
            {
              "pokemonId": 576,
              "trigger": "레벨 41"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 577,
      "children": [
        {
          "pokemonId": 578,
          "trigger": "레벨 32",
          "children": [
            {
              "pokemonId": 579,
              "trigger": "레벨 41"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 570,
      "children": [
        {
          "pokemonId": 571,
          "trigger": "레벨 30"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 10238,
      "children": [
        {
          "pokemonId": 10239,
          "trigger": "레벨 30"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 580,
      "children": [
        {
          "pokemonId": 581,
          "trigger": "레벨 35"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 582,
      "children": [
        {
          "pokemonId": 583,
          "trigger": "레벨 35",
          "children": [
            {
              "pokemonId": 584,
              "trigger": "레벨 47"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 585,
      "children": [
        {
          "pokemonId": 586,
          "trigger": "레벨 34"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 588,
      "children": [
        {
          "pokemonId": 589,
          "trigger": "교환"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 590,
      "children": [
        {
          "pokemonId": 591,
          "trigger": "레벨 39"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 592,
      "children": [
        {
          "pokemonId": 593,
          "trigger": "레벨 40"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 595,
      "children": [
        {
          "pokemonId": 596,
          "trigger": "레벨 36"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 597,
      "children": [
        {
          "pokemonId": 598,
          "trigger": "레벨 40"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 599,
      "children": [
        {
          "pokemonId": 600,
          "trigger": "레벨 38",
          "children": [
            {
              "pokemonId": 601,
              "trigger": "레벨 49"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 602,
      "children": [
        {
          "pokemonId": 603,
          "trigger": "레벨 39",
          "children": [
            {
              "pokemonId": 604,
              "trigger": "천둥의돌 사용",
              "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/thunder-stone.png"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 605,
      "children": [
        {
          "pokemonId": 606,
          "trigger": "레벨 42"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 607,
      "children": [
        {
          "pokemonId": 608,
          "trigger": "레벨 41",
          "children": [
            {
              "pokemonId": 609,
              "trigger": "어둠의돌 사용",
              "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dusk-stone.png"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 610,
      "children": [
        {
          "pokemonId": 611,
          "trigger": "레벨 38",
          "children": [
            {
              "pokemonId": 612,
              "trigger": "레벨 48"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 613,
      "children": [
        {
          "pokemonId": 614,
          "trigger": "레벨 37"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 616,
      "children": [
        {
          "pokemonId": 617,
          "trigger": "교환"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 619,
      "children": [
        {
          "pokemonId": 620,
          "trigger": "레벨 50"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 622,
      "children": [
        {
          "pokemonId": 623,
          "trigger": "레벨 43"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 624,
      "children": [
        {
          "pokemonId": 625,
          "trigger": "레벨 52",
          "children": [
            {
              "pokemonId": 983,
              "trigger": "리더의 마음가짐' 소지 비스듬 3회 격파"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 629,
      "children": [
        {
          "pokemonId": 630,
          "trigger": "레벨 54"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 627,
      "children": [
        {
          "pokemonId": 628,
          "trigger": "레벨 54"
        },
        {
          "pokemonId": 10240,
          "trigger": "레벨 54"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 633,
      "children": [
        {
          "pokemonId": 634,
          "trigger": "레벨 50",
          "children": [
            {
              "pokemonId": 635,
              "trigger": "레벨 64"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 636,
      "children": [
        {
          "pokemonId": 637,
          "trigger": "레벨 59"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 650,
      "children": [
        {
          "pokemonId": 651,
          "trigger": "레벨 16",
          "children": [
            {
              "pokemonId": 652,
              "trigger": "레벨 36"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 656,
      "children": [
        {
          "pokemonId": 657,
          "trigger": "레벨 16",
          "children": [
            {
              "pokemonId": 658,
              "trigger": "레벨 36"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 653,
      "children": [
        {
          "pokemonId": 654,
          "trigger": "레벨 16",
          "children": [
            {
              "pokemonId": 655,
              "trigger": "레벨 36"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 659,
      "children": [
        {
          "pokemonId": 660,
          "trigger": "레벨 20"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 661,
      "children": [
        {
          "pokemonId": 662,
          "trigger": "레벨 17",
          "children": [
            {
              "pokemonId": 663,
              "trigger": "레벨 35"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 664,
      "children": [
        {
          "pokemonId": 665,
          "trigger": "레벨 9",
          "children": [
            {
              "pokemonId": 666,
              "trigger": "레벨 12"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 667,
      "children": [
        {
          "pokemonId": 668,
          "trigger": "레벨 35"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 669,
      "children": [
        {
          "pokemonId": 670,
          "trigger": "레벨 19",
          "children": [
            {
              "pokemonId": 671,
              "trigger": "빛의돌 사용",
              "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/shiny-stone.png"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 674,
      "children": [
        {
          "pokemonId": 675,
          "trigger": "레벨 32 · 파티에 악 타입 동반"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 672,
      "children": [
        {
          "pokemonId": 673,
          "trigger": "레벨 32"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 677,
      "children": [
        {
          "pokemonId": 678,
          "trigger": "레벨 25"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 679,
      "children": [
        {
          "pokemonId": 680,
          "trigger": "레벨 35",
          "children": [
            {
              "pokemonId": 681,
              "trigger": "어둠의돌 사용",
              "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dusk-stone.png"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 688,
      "children": [
        {
          "pokemonId": 689,
          "trigger": "레벨 39"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 686,
      "children": [
        {
          "pokemonId": 687,
          "trigger": "레벨 30 · 기기를 거꾸로"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 690,
      "children": [
        {
          "pokemonId": 691,
          "trigger": "레벨 48"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 692,
      "children": [
        {
          "pokemonId": 693,
          "trigger": "레벨 37"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 682,
      "children": [
        {
          "pokemonId": 683,
          "trigger": "교환 · 소지: 향기주머니"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 694,
      "children": [
        {
          "pokemonId": 695,
          "trigger": "태양의돌 사용",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sun-stone.png"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 684,
      "children": [
        {
          "pokemonId": 685,
          "trigger": "교환 · 소지: 휘핑팝"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 696,
      "children": [
        {
          "pokemonId": 697,
          "trigger": "레벨 39 · 낮"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 698,
      "children": [
        {
          "pokemonId": 699,
          "trigger": "레벨 39 · 밤"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 704,
      "children": [
        {
          "pokemonId": 705,
          "trigger": "레벨 40",
          "children": [
            {
              "pokemonId": 706,
              "trigger": "레벨 50 · 비가 올 때"
            }
          ]
        },
        {
          "pokemonId": 10241,
          "trigger": "레벨 40",
          "children": [
            {
              "pokemonId": 10242,
              "trigger": "레벨 50 · 비가 올 때"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 10241,
      "children": [
        {
          "pokemonId": 10242,
          "trigger": "레벨 50 · 비가 올 때"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 710,
      "children": [
        {
          "pokemonId": 711,
          "trigger": "교환"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 708,
      "children": [
        {
          "pokemonId": 709,
          "trigger": "교환"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 712,
      "children": [
        {
          "pokemonId": 713,
          "trigger": "레벨 37"
        },
        {
          "pokemonId": 10243,
          "trigger": "레벨 37"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 714,
      "children": [
        {
          "pokemonId": 715,
          "trigger": "레벨 48"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 722,
      "children": [
        {
          "pokemonId": 723,
          "trigger": "레벨 17",
          "children": [
            {
              "pokemonId": 724,
              "trigger": "레벨 34"
            },
            {
              "pokemonId": 10244,
              "trigger": "레벨 36"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 725,
      "children": [
        {
          "pokemonId": 726,
          "trigger": "레벨 17",
          "children": [
            {
              "pokemonId": 727,
              "trigger": "레벨 34"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 728,
      "children": [
        {
          "pokemonId": 729,
          "trigger": "레벨 17",
          "children": [
            {
              "pokemonId": 730,
              "trigger": "레벨 34"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 731,
      "children": [
        {
          "pokemonId": 732,
          "trigger": "레벨 14",
          "children": [
            {
              "pokemonId": 733,
              "trigger": "레벨 28"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 734,
      "children": [
        {
          "pokemonId": 735,
          "trigger": "레벨 20 · 낮"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 739,
      "children": [
        {
          "pokemonId": 740,
          "trigger": "레벨업"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 736,
      "children": [
        {
          "pokemonId": 737,
          "trigger": "레벨 20",
          "children": [
            {
              "pokemonId": 738,
              "trigger": "레벨업"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 742,
      "children": [
        {
          "pokemonId": 743,
          "trigger": "레벨 25"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 744,
      "children": [
        {
          "pokemonId": 745,
          "trigger": "레벨 25 · 낮"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 747,
      "children": [
        {
          "pokemonId": 748,
          "trigger": "레벨 38"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 749,
      "children": [
        {
          "pokemonId": 750,
          "trigger": "레벨 30"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 751,
      "children": [
        {
          "pokemonId": 752,
          "trigger": "레벨 22"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 753,
      "children": [
        {
          "pokemonId": 754,
          "trigger": "레벨 34 · 낮"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 755,
      "children": [
        {
          "pokemonId": 756,
          "trigger": "레벨 24"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 757,
      "children": [
        {
          "pokemonId": 758,
          "trigger": "레벨 33 · 암컷"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 759,
      "children": [
        {
          "pokemonId": 760,
          "trigger": "레벨 27"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 767,
      "children": [
        {
          "pokemonId": 768,
          "trigger": "레벨 30"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 769,
      "children": [
        {
          "pokemonId": 770,
          "trigger": "레벨 42"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 761,
      "children": [
        {
          "pokemonId": 762,
          "trigger": "레벨 18",
          "children": [
            {
              "pokemonId": 763,
              "trigger": "레벨업 · 짓밟기 습득"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 772,
      "children": [
        {
          "pokemonId": 773,
          "trigger": "레벨업 · 친밀도 160 이상"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 782,
      "children": [
        {
          "pokemonId": 783,
          "trigger": "레벨 35",
          "children": [
            {
              "pokemonId": 784,
              "trigger": "레벨 45"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 789,
      "children": [
        {
          "pokemonId": 790,
          "trigger": "레벨 43",
          "children": [
            {
              "pokemonId": 791,
              "trigger": "레벨 53"
            },
            {
              "pokemonId": 792,
              "trigger": "레벨 53"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 803,
      "children": [
        {
          "pokemonId": 804,
          "trigger": "레벨업 · 용의파동 습득"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 810,
      "children": [
        {
          "pokemonId": 811,
          "trigger": "레벨 16",
          "children": [
            {
              "pokemonId": 812,
              "trigger": "레벨 35"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 813,
      "children": [
        {
          "pokemonId": 814,
          "trigger": "레벨 16",
          "children": [
            {
              "pokemonId": 815,
              "trigger": "레벨 35"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 819,
      "children": [
        {
          "pokemonId": 820,
          "trigger": "레벨 24"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 816,
      "children": [
        {
          "pokemonId": 817,
          "trigger": "레벨 16",
          "children": [
            {
              "pokemonId": 818,
              "trigger": "레벨 35"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 821,
      "children": [
        {
          "pokemonId": 822,
          "trigger": "레벨 18",
          "children": [
            {
              "pokemonId": 823,
              "trigger": "레벨 38"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 824,
      "children": [
        {
          "pokemonId": 825,
          "trigger": "레벨 10",
          "children": [
            {
              "pokemonId": 826,
              "trigger": "레벨 30"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 827,
      "children": [
        {
          "pokemonId": 828,
          "trigger": "레벨 18"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 829,
      "children": [
        {
          "pokemonId": 830,
          "trigger": "레벨 20"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 831,
      "children": [
        {
          "pokemonId": 832,
          "trigger": "레벨 24"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 833,
      "children": [
        {
          "pokemonId": 834,
          "trigger": "레벨 22"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 835,
      "children": [
        {
          "pokemonId": 836,
          "trigger": "레벨 25"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 837,
      "children": [
        {
          "pokemonId": 838,
          "trigger": "레벨 18",
          "children": [
            {
              "pokemonId": 839,
              "trigger": "레벨 34"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 843,
      "children": [
        {
          "pokemonId": 844,
          "trigger": "레벨 36"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 846,
      "children": [
        {
          "pokemonId": 847,
          "trigger": "레벨 26"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 850,
      "children": [
        {
          "pokemonId": 851,
          "trigger": "레벨 28"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 848,
      "children": [
        {
          "pokemonId": 849,
          "trigger": "레벨 30"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 856,
      "children": [
        {
          "pokemonId": 857,
          "trigger": "레벨 32",
          "children": [
            {
              "pokemonId": 858,
              "trigger": "레벨 42"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 868,
      "children": [
        {
          "pokemonId": 869,
          "trigger": "특정 동작(스핀)"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 859,
      "children": [
        {
          "pokemonId": 860,
          "trigger": "레벨 32",
          "children": [
            {
              "pokemonId": 861,
              "trigger": "레벨 42"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 852,
      "children": [
        {
          "pokemonId": 853,
          "trigger": "레벨업 · 도발 습득"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 854,
      "children": [
        {
          "pokemonId": 855,
          "trigger": "깨진포트 사용"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 872,
      "children": [
        {
          "pokemonId": 873,
          "trigger": "레벨업 · 친밀도 160 이상 · 밤"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 878,
      "children": [
        {
          "pokemonId": 879,
          "trigger": "레벨 34"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 840,
      "children": [
        {
          "pokemonId": 841,
          "trigger": "새콤한사과 사용"
        },
        {
          "pokemonId": 842,
          "trigger": "달콤한사과 사용"
        },
        {
          "pokemonId": 1011,
          "trigger": "syrupy-apple 사용",
          "children": [
            {
              "pokemonId": 1019,
              "trigger": "레벨업 · 드래곤옐 습득"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 885,
      "children": [
        {
          "pokemonId": 886,
          "trigger": "레벨 50",
          "children": [
            {
              "pokemonId": 887,
              "trigger": "레벨 60"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 891,
      "children": [
        {
          "pokemonId": 892,
          "trigger": "특정 장소를 데미지 입은 채 통과"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 884,
      "children": [
        {
          "pokemonId": 1018,
          "trigger": "metal-alloy 사용"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 906,
      "children": [
        {
          "pokemonId": 907,
          "trigger": "레벨 16",
          "children": [
            {
              "pokemonId": 908,
              "trigger": "레벨 36"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 909,
      "children": [
        {
          "pokemonId": 910,
          "trigger": "레벨 16",
          "children": [
            {
              "pokemonId": 911,
              "trigger": "레벨 36"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 912,
      "children": [
        {
          "pokemonId": 913,
          "trigger": "레벨 16",
          "children": [
            {
              "pokemonId": 914,
              "trigger": "레벨 36"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 917,
      "children": [
        {
          "pokemonId": 918,
          "trigger": "레벨 15"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 915,
      "children": [
        {
          "pokemonId": 916,
          "trigger": "레벨 18"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 919,
      "children": [
        {
          "pokemonId": 920,
          "trigger": "레벨 24"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 921,
      "children": [
        {
          "pokemonId": 922,
          "trigger": "레벨 18",
          "children": [
            {
              "pokemonId": 923,
              "trigger": "레벨업"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 926,
      "children": [
        {
          "pokemonId": 927,
          "trigger": "레벨 26"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 924,
      "children": [
        {
          "pokemonId": 925,
          "trigger": "특수 조건"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 928,
      "children": [
        {
          "pokemonId": 929,
          "trigger": "레벨 25",
          "children": [
            {
              "pokemonId": 930,
              "trigger": "레벨 35"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 932,
      "children": [
        {
          "pokemonId": 933,
          "trigger": "레벨 24",
          "children": [
            {
              "pokemonId": 934,
              "trigger": "레벨 38"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 942,
      "children": [
        {
          "pokemonId": 943,
          "trigger": "레벨 30"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 938,
      "children": [
        {
          "pokemonId": 939,
          "trigger": "천둥의돌 사용",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/thunder-stone.png"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 944,
      "children": [
        {
          "pokemonId": 945,
          "trigger": "레벨 28"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 946,
      "children": [
        {
          "pokemonId": 947,
          "trigger": "레벨업"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 940,
      "children": [
        {
          "pokemonId": 941,
          "trigger": "레벨 25"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 948,
      "children": [
        {
          "pokemonId": 949,
          "trigger": "레벨 30"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 951,
      "children": [
        {
          "pokemonId": 952,
          "trigger": "불꽃의돌 사용",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/fire-stone.png"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 953,
      "children": [
        {
          "pokemonId": 954,
          "trigger": "레벨업"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 935,
      "children": [
        {
          "pokemonId": 936,
          "trigger": "auspicious-armor 사용"
        },
        {
          "pokemonId": 937,
          "trigger": "malicious-armor 사용"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 957,
      "children": [
        {
          "pokemonId": 958,
          "trigger": "레벨 24",
          "children": [
            {
              "pokemonId": 959,
              "trigger": "레벨 38"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 955,
      "children": [
        {
          "pokemonId": 956,
          "trigger": "레벨 35"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 960,
      "children": [
        {
          "pokemonId": 961,
          "trigger": "레벨 26"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 963,
      "children": [
        {
          "pokemonId": 964,
          "trigger": "레벨 38"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 965,
      "children": [
        {
          "pokemonId": 966,
          "trigger": "레벨 40"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 969,
      "children": [
        {
          "pokemonId": 970,
          "trigger": "레벨 35"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 971,
      "children": [
        {
          "pokemonId": 972,
          "trigger": "레벨 30 · 밤"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 974,
      "children": [
        {
          "pokemonId": 975,
          "trigger": "얼음의돌 사용",
          "triggerIconUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ice-stone.png"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 996,
      "children": [
        {
          "pokemonId": 997,
          "trigger": "레벨 35",
          "children": [
            {
              "pokemonId": 998,
              "trigger": "레벨 54"
            }
          ]
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 999,
      "children": [
        {
          "pokemonId": 1000,
          "trigger": "코인 999개 모으기"
        }
      ]
    }
  ],
  [
    {
      "pokemonId": 1012,
      "children": [
        {
          "pokemonId": 1013,
          "trigger": "unremarkable-teacup 사용"
        }
      ]
    }
  ]
]
