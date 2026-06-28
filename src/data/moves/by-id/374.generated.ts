// 이 파일은 scripts/fetch-pokedex.mjs 로 PokeAPI에서 생성됩니다. 직접 수정하지 마세요.
import type { Learnset } from '../../../types/move'

export const LEARNSETS: Learnset[] = [
  {
    "generation": "3세대",
    "version": "루비·사파이어",
    "levelUp": [
      {
        "moveId": 36,
        "level": 1
      }
    ],
    "machines": []
  },
  {
    "generation": "4세대",
    "version": "다이아몬드·펄",
    "levelUp": [
      {
        "moveId": 36,
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
        "moveId": 36,
        "level": 1
      }
    ],
    "machines": []
  },
  {
    "generation": "6세대",
    "version": "X·Y",
    "levelUp": [
      {
        "moveId": 36,
        "level": 1
      }
    ],
    "machines": []
  },
  {
    "generation": "7세대",
    "version": "썬·문",
    "levelUp": [
      {
        "moveId": 36,
        "level": 1
      }
    ],
    "machines": []
  },
  {
    "generation": "8세대",
    "version": "소드·실드",
    "levelUp": [
      {
        "moveId": 33,
        "level": 1
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
      }
    ],
    "machines": [
      {
        "moveId": 36,
        "machine": "TM",
        "number": 1
      },
      {
        "moveId": 334,
        "machine": "TM",
        "number": 104
      },
      {
        "moveId": 428,
        "machine": "TM",
        "number": 59
      },
      {
        "moveId": 442,
        "machine": "TM",
        "number": 99
      },
      {
        "moveId": 796,
        "machine": "TM",
        "number": 170
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
  796,
  36,
  428,
  442
]
