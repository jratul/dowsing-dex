// 세대에 따라 종족값이 바뀐 포켓몬.
//
// 종족값은 한 번 정해지면 끝이 아니다 — 6세대와 7세대에 여러 종이 상향됐고, 9세대에서
// 크레세리아가 하향됐다. 그런데 PokeAPI 는 **현재 값만** 준다. 그대로 두면 도감에서
// 2세대 탭을 열어도 9세대 수치가 나온다.
//
// 만드는 데 쓴 자료
// - 이전 값: pret/pokeheartgold 의 files/poketool/personal/personal.json (4세대 게임 원본)
// - 바뀐 시점: Bulbapedia 각 포켓몬 문서의 Base stats 섹션 세대 구간
//
// 두 자료를 서로 대조해 42종 전부 구값이 게임 원본과, 신값이 현재 도감과 일치하는 것을
// 확인했다. 피카츄·라이츄는 문서 헤딩에 위키 링크가 섞여 자동 파싱이 안 돼 손으로 넣었다
// (둘 다 6세대부터 현재값).
//
// fromGeneration 미만 세대를 보고 있으면 previous 를 쓴다.

export interface BaseStatChange {
  /** 이 세대부터 현재 종족값이 적용된다. */
  fromGeneration: number
  previous: {
    hp: number
    attack: number
    defense: number
    specialAttack: number
    specialDefense: number
    speed: number
  }
}

/** 전국도감 번호 → 종족값 변경 이력. 여기 없는 종은 전 세대 동일하다. */
export const BASE_STAT_HISTORY: Record<number, BaseStatChange> = {
  12: { fromGeneration: 6, previous: { hp: 60, attack: 45, defense: 50, specialAttack: 80, specialDefense: 80, speed: 70 } }, // 버터플
  15: { fromGeneration: 6, previous: { hp: 65, attack: 80, defense: 40, specialAttack: 45, specialDefense: 80, speed: 75 } }, // 독침붕
  18: { fromGeneration: 6, previous: { hp: 83, attack: 80, defense: 75, specialAttack: 70, specialDefense: 70, speed: 91 } }, // 피죤투
  24: { fromGeneration: 7, previous: { hp: 60, attack: 85, defense: 69, specialAttack: 65, specialDefense: 79, speed: 80 } }, // 아보크
  25: { fromGeneration: 6, previous: { hp: 35, attack: 55, defense: 30, specialAttack: 50, specialDefense: 40, speed: 90 } }, // 피카츄
  26: { fromGeneration: 6, previous: { hp: 60, attack: 90, defense: 55, specialAttack: 90, specialDefense: 80, speed: 100 } }, // 라이츄
  31: { fromGeneration: 6, previous: { hp: 90, attack: 82, defense: 87, specialAttack: 75, specialDefense: 85, speed: 76 } }, // 니드퀸
  34: { fromGeneration: 6, previous: { hp: 81, attack: 92, defense: 77, specialAttack: 85, specialDefense: 75, speed: 85 } }, // 니드킹
  36: { fromGeneration: 6, previous: { hp: 95, attack: 70, defense: 73, specialAttack: 85, specialDefense: 90, speed: 60 } }, // 픽시
  40: { fromGeneration: 6, previous: { hp: 140, attack: 70, defense: 45, specialAttack: 75, specialDefense: 50, speed: 45 } }, // 푸크린
  45: { fromGeneration: 6, previous: { hp: 75, attack: 80, defense: 85, specialAttack: 100, specialDefense: 90, speed: 50 } }, // 라플레시아
  51: { fromGeneration: 7, previous: { hp: 35, attack: 80, defense: 50, specialAttack: 50, specialDefense: 70, speed: 120 } }, // 닥트리오
  62: { fromGeneration: 6, previous: { hp: 90, attack: 85, defense: 95, specialAttack: 70, specialDefense: 90, speed: 70 } }, // 강챙이
  65: { fromGeneration: 6, previous: { hp: 55, attack: 50, defense: 45, specialAttack: 135, specialDefense: 85, speed: 120 } }, // 후딘
  71: { fromGeneration: 6, previous: { hp: 80, attack: 105, defense: 65, specialAttack: 100, specialDefense: 60, speed: 70 } }, // 우츠보트
  76: { fromGeneration: 6, previous: { hp: 80, attack: 110, defense: 130, specialAttack: 55, specialDefense: 65, speed: 45 } }, // 딱구리
  83: { fromGeneration: 7, previous: { hp: 52, attack: 65, defense: 55, specialAttack: 58, specialDefense: 62, speed: 60 } }, // 파오리
  85: { fromGeneration: 7, previous: { hp: 60, attack: 110, defense: 70, specialAttack: 60, specialDefense: 60, speed: 100 } }, // 두트리오
  101: { fromGeneration: 7, previous: { hp: 60, attack: 50, defense: 70, specialAttack: 80, specialDefense: 80, speed: 140 } }, // 붐볼
  103: { fromGeneration: 7, previous: { hp: 95, attack: 95, defense: 85, specialAttack: 125, specialDefense: 65, speed: 55 } }, // 나시
  164: { fromGeneration: 7, previous: { hp: 100, attack: 50, defense: 50, specialAttack: 76, specialDefense: 96, speed: 70 } }, // 야부엉
  168: { fromGeneration: 7, previous: { hp: 70, attack: 90, defense: 70, specialAttack: 60, specialDefense: 60, speed: 40 } }, // 아리아도스
  181: { fromGeneration: 6, previous: { hp: 90, attack: 75, defense: 75, specialAttack: 115, specialDefense: 90, speed: 55 } }, // 전룡
  182: { fromGeneration: 6, previous: { hp: 75, attack: 80, defense: 85, specialAttack: 90, specialDefense: 100, speed: 50 } }, // 아르코
  184: { fromGeneration: 6, previous: { hp: 100, attack: 50, defense: 80, specialAttack: 50, specialDefense: 80, speed: 50 } }, // 마릴리
  189: { fromGeneration: 6, previous: { hp: 75, attack: 55, defense: 70, specialAttack: 55, specialDefense: 85, speed: 110 } }, // 솜솜코
  211: { fromGeneration: 7, previous: { hp: 65, attack: 95, defense: 75, specialAttack: 55, specialDefense: 55, speed: 85 } }, // 침바루
  219: { fromGeneration: 7, previous: { hp: 50, attack: 50, defense: 120, specialAttack: 80, specialDefense: 80, speed: 30 } }, // 마그카르고
  222: { fromGeneration: 7, previous: { hp: 55, attack: 55, defense: 85, specialAttack: 65, specialDefense: 85, speed: 35 } }, // 코산호
  226: { fromGeneration: 7, previous: { hp: 65, attack: 40, defense: 70, specialAttack: 80, specialDefense: 140, speed: 70 } }, // 만타인
  267: { fromGeneration: 6, previous: { hp: 60, attack: 70, defense: 50, specialAttack: 90, specialDefense: 50, speed: 65 } }, // 뷰티플라이
  277: { fromGeneration: 7, previous: { hp: 60, attack: 85, defense: 60, specialAttack: 50, specialDefense: 50, speed: 125 } }, // 스왈로
  279: { fromGeneration: 7, previous: { hp: 60, attack: 50, defense: 100, specialAttack: 85, specialDefense: 70, speed: 65 } }, // 패리퍼
  284: { fromGeneration: 7, previous: { hp: 70, attack: 60, defense: 62, specialAttack: 80, specialDefense: 82, speed: 60 } }, // 비나방
  295: { fromGeneration: 6, previous: { hp: 104, attack: 91, defense: 63, specialAttack: 91, specialDefense: 63, speed: 68 } }, // 폭음룡
  301: { fromGeneration: 7, previous: { hp: 70, attack: 65, defense: 65, specialAttack: 55, specialDefense: 55, speed: 70 } }, // 델케티
  313: { fromGeneration: 7, previous: { hp: 65, attack: 73, defense: 55, specialAttack: 47, specialDefense: 75, speed: 85 } }, // 볼비트
  314: { fromGeneration: 7, previous: { hp: 65, attack: 47, defense: 55, specialAttack: 73, specialDefense: 75, speed: 85 } }, // 네오비트
  337: { fromGeneration: 7, previous: { hp: 70, attack: 55, defense: 65, specialAttack: 95, specialDefense: 85, speed: 70 } }, // 루나톤
  338: { fromGeneration: 7, previous: { hp: 70, attack: 95, defense: 85, specialAttack: 55, specialDefense: 65, speed: 70 } }, // 솔록
  358: { fromGeneration: 7, previous: { hp: 65, attack: 50, defense: 70, specialAttack: 95, specialDefense: 80, speed: 65 } }, // 치렁
  398: { fromGeneration: 6, previous: { hp: 85, attack: 120, defense: 70, specialAttack: 50, specialDefense: 50, speed: 100 } }, // 찌르호크
  407: { fromGeneration: 6, previous: { hp: 60, attack: 70, defense: 55, specialAttack: 125, specialDefense: 105, speed: 90 } }, // 로즈레이드
  488: { fromGeneration: 9, previous: { hp: 120, attack: 70, defense: 120, specialAttack: 75, specialDefense: 130, speed: 85 } }, // 크레세리아
}
