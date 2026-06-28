// 이 파일은 scripts/fetch-pokedex.mjs 로 PokeAPI에서 생성됩니다. 직접 수정하지 마세요.
import type { Learnset } from '../../../types/move'

export const LEARNSETS: Learnset[] = [
  {
    "generation": "8세대",
    "version": "소드·실드",
    "levelUp": [
      {
        "moveId": 31,
        "level": 7
      },
      {
        "moveId": 45,
        "level": 1
      },
      {
        "moveId": 51,
        "level": 1
      },
      {
        "moveId": 64,
        "level": 1
      },
      {
        "moveId": 92,
        "level": 63
      },
      {
        "moveId": 204,
        "level": 21
      },
      {
        "moveId": 270,
        "level": 1
      },
      {
        "moveId": 380,
        "level": 56
      },
      {
        "moveId": 398,
        "level": 49
      },
      {
        "moveId": 406,
        "level": 1
      },
      {
        "moveId": 417,
        "level": 42
      },
      {
        "moveId": 474,
        "level": 28
      },
      {
        "moveId": 565,
        "level": 14
      },
      {
        "moveId": 599,
        "level": 35
      }
    ],
    "machines": [
      {
        "moveId": 42,
        "machine": "TM",
        "number": 7
      },
      {
        "moveId": 156,
        "machine": "TM",
        "number": 21
      },
      {
        "moveId": 173,
        "machine": "TM",
        "number": 24
      },
      {
        "moveId": 182,
        "machine": "TM",
        "number": 25
      },
      {
        "moveId": 263,
        "machine": "TM",
        "number": 39
      },
      {
        "moveId": 496,
        "machine": "TM",
        "number": 76
      }
    ]
  }
]

export const RECOMMENDED_MOVESET: number[] = [
  406,
  398,
  263,
  474
]
