// 이 파일은 scripts/fetch-pokedex.mjs 로 PokeAPI에서 생성됩니다. 직접 수정하지 마세요.
import type { Learnset } from '../../../types/move'

export const LEARNSETS: Learnset[] = [
  {
    "generation": "6세대",
    "version": "X·Y",
    "levelUp": [
      {
        "moveId": 33,
        "level": 1
      },
      {
        "moveId": 78,
        "level": 6
      },
      {
        "moveId": 81,
        "level": 1
      },
      {
        "moveId": 450,
        "level": 15
      }
    ],
    "machines": []
  },
  {
    "generation": "7세대",
    "version": "썬·문",
    "levelUp": [
      {
        "moveId": 33,
        "level": 1
      },
      {
        "moveId": 78,
        "level": 6
      },
      {
        "moveId": 81,
        "level": 1
      },
      {
        "moveId": 450,
        "level": 15
      }
    ],
    "machines": []
  },
  {
    "generation": "9세대",
    "version": "스칼렛·바이올렛",
    "levelUp": [
      {
        "moveId": 33,
        "level": 1
      },
      {
        "moveId": 78,
        "level": 6
      },
      {
        "moveId": 81,
        "level": 1
      },
      {
        "moveId": 450,
        "level": 15
      }
    ],
    "machines": [
      {
        "moveId": 522,
        "machine": "TM",
        "number": 15
      },
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
  450,
  522,
  884
]
