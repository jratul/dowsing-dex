// 이 파일은 scripts/fetch-pokedex.mjs 로 PokeAPI에서 생성됩니다. 직접 수정하지 마세요.
import type { Learnset } from '../../../types/move'

export const LEARNSETS: Learnset[] = [
  {
    "generation": "4세대",
    "version": "다이아몬드·펄",
    "levelUp": [
      {
        "moveId": 45,
        "level": 1
      },
      {
        "moveId": 117,
        "level": 1
      }
    ],
    "machines": []
  },
  {
    "generation": "5세대",
    "version": "블랙·화이트",
    "levelUp": [
      {
        "moveId": 45,
        "level": 1
      },
      {
        "moveId": 117,
        "level": 1
      },
      {
        "moveId": 450,
        "level": 16
      },
      {
        "moveId": 522,
        "level": 6
      }
    ],
    "machines": []
  },
  {
    "generation": "6세대",
    "version": "X·Y",
    "levelUp": [
      {
        "moveId": 45,
        "level": 1
      },
      {
        "moveId": 117,
        "level": 1
      },
      {
        "moveId": 450,
        "level": 16
      },
      {
        "moveId": 522,
        "level": 6
      }
    ],
    "machines": []
  },
  {
    "generation": "7세대",
    "version": "썬·문",
    "levelUp": [
      {
        "moveId": 45,
        "level": 1
      },
      {
        "moveId": 117,
        "level": 1
      },
      {
        "moveId": 450,
        "level": 16
      },
      {
        "moveId": 522,
        "level": 6
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
        "moveId": 45,
        "level": 1
      },
      {
        "moveId": 450,
        "level": 16
      },
      {
        "moveId": 522,
        "level": 6
      }
    ],
    "machines": [
      {
        "moveId": 283,
        "machine": "TM",
        "number": 205
      },
      {
        "moveId": 679,
        "machine": "TM",
        "number": 185
      },
      {
        "moveId": 806,
        "machine": "TM",
        "number": 219
      },
      {
        "moveId": 851,
        "machine": "TM",
        "number": 171
      }
    ]
  }
]

export const RECOMMENDED_MOVESET: number[] = [
  679,
  851,
  806,
  450
]
