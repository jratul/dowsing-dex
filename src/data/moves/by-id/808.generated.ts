// 이 파일은 scripts/fetch-pokedex.mjs 로 PokeAPI에서 생성됩니다. 직접 수정하지 마세요.
import type { Learnset } from '../../../types/move'

export const LEARNSETS: Learnset[] = [
  {
    "generation": "8세대",
    "version": "소드·실드",
    "levelUp": [
      {
        "moveId": 29,
        "level": 16
      },
      {
        "moveId": 39,
        "level": 8
      },
      {
        "moveId": 84,
        "level": 1
      },
      {
        "moveId": 86,
        "level": 24
      },
      {
        "moveId": 106,
        "level": 1
      },
      {
        "moveId": 151,
        "level": 32
      },
      {
        "moveId": 430,
        "level": 40
      }
    ],
    "machines": [
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
  430,
  29,
  263,
  496
]
