// 이 파일은 scripts/fetch-pokedex.mjs 로 PokeAPI에서 생성됩니다. 직접 수정하지 마세요.
import type { Learnset } from '../../../types/move'

export const LEARNSETS: Learnset[] = [
  {
    "generation": "8세대",
    "version": "소드·실드",
    "levelUp": [
      {
        "moveId": 110,
        "level": 1
      },
      {
        "moveId": 310,
        "level": 1
      }
    ],
    "machines": [
      {
        "moveId": 213,
        "machine": "TM",
        "number": 31
      }
    ]
  },
  {
    "generation": "9세대",
    "version": "스칼렛·바이올렛",
    "levelUp": [
      {
        "moveId": 110,
        "level": 1
      },
      {
        "moveId": 310,
        "level": 1
      }
    ],
    "machines": [
      {
        "moveId": 851,
        "machine": "TM",
        "number": 171
      },
      {
        "moveId": 884,
        "machine": "TM",
        "number": 21
      }
    ]
  }
]

export const RECOMMENDED_MOVESET: number[] = [
  851,
  884,
  310,
  110
]
