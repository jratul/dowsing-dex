// 이 파일은 scripts/fetch-pokedex.mjs 로 PokeAPI에서 생성됩니다. 직접 수정하지 마세요.
import type { Move } from '../../types/move'

export const ALL_MOVES: Move[] = [
  {
    "id": 1,
    "nameKo": "막치기",
    "nameEn": "pound",
    "type": "노말",
    "category": "물리",
    "power": 40,
    "accuracy": 100,
    "pp": 35
  },
  {
    "id": 2,
    "nameKo": "태권당수",
    "nameEn": "karate-chop",
    "type": "격투",
    "category": "물리",
    "power": 50,
    "accuracy": 100,
    "pp": 25
  },
  {
    "id": 3,
    "nameKo": "연속뺨치기",
    "nameEn": "double-slap",
    "type": "노말",
    "category": "물리",
    "power": 15,
    "accuracy": 85,
    "pp": 10
  },
  {
    "id": 4,
    "nameKo": "연속펀치",
    "nameEn": "comet-punch",
    "type": "노말",
    "category": "물리",
    "power": 18,
    "accuracy": 85,
    "pp": 15
  },
  {
    "id": 5,
    "nameKo": "메가톤펀치",
    "nameEn": "mega-punch",
    "type": "노말",
    "category": "물리",
    "power": 80,
    "accuracy": 85,
    "pp": 20
  },
  {
    "id": 6,
    "nameKo": "고양이돈받기",
    "nameEn": "pay-day",
    "type": "노말",
    "category": "물리",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 7,
    "nameKo": "불꽃펀치",
    "nameEn": "fire-punch",
    "type": "불꽃",
    "category": "물리",
    "power": 75,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 8,
    "nameKo": "냉동펀치",
    "nameEn": "ice-punch",
    "type": "얼음",
    "category": "물리",
    "power": 75,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 9,
    "nameKo": "번개펀치",
    "nameEn": "thunder-punch",
    "type": "전기",
    "category": "물리",
    "power": 75,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 10,
    "nameKo": "할퀴기",
    "nameEn": "scratch",
    "type": "노말",
    "category": "물리",
    "power": 40,
    "accuracy": 100,
    "pp": 35
  },
  {
    "id": 11,
    "nameKo": "찝기",
    "nameEn": "vice-grip",
    "type": "노말",
    "category": "물리",
    "power": 55,
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 12,
    "nameKo": "가위자르기",
    "nameEn": "guillotine",
    "type": "노말",
    "category": "물리",
    "accuracy": 30,
    "pp": 5
  },
  {
    "id": 13,
    "nameKo": "칼바람",
    "nameEn": "razor-wind",
    "type": "노말",
    "category": "특수",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 14,
    "nameKo": "칼춤",
    "nameEn": "swords-dance",
    "type": "노말",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 15,
    "nameKo": "풀베기",
    "nameEn": "cut",
    "type": "노말",
    "category": "물리",
    "power": 50,
    "accuracy": 95,
    "pp": 30
  },
  {
    "id": 16,
    "nameKo": "바람일으키기",
    "nameEn": "gust",
    "type": "비행",
    "category": "특수",
    "power": 40,
    "accuracy": 100,
    "pp": 35
  },
  {
    "id": 17,
    "nameKo": "날개치기",
    "nameEn": "wing-attack",
    "type": "비행",
    "category": "물리",
    "power": 60,
    "accuracy": 100,
    "pp": 35
  },
  {
    "id": 18,
    "nameKo": "날려버리기",
    "nameEn": "whirlwind",
    "type": "노말",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 19,
    "nameKo": "공중날기",
    "nameEn": "fly",
    "type": "비행",
    "category": "물리",
    "power": 90,
    "accuracy": 95,
    "pp": 15
  },
  {
    "id": 20,
    "nameKo": "조이기",
    "nameEn": "bind",
    "type": "노말",
    "category": "물리",
    "power": 15,
    "accuracy": 85,
    "pp": 20
  },
  {
    "id": 21,
    "nameKo": "힘껏치기",
    "nameEn": "slam",
    "type": "노말",
    "category": "물리",
    "power": 80,
    "accuracy": 75,
    "pp": 20
  },
  {
    "id": 22,
    "nameKo": "덩굴채찍",
    "nameEn": "vine-whip",
    "type": "풀",
    "category": "물리",
    "power": 45,
    "accuracy": 100,
    "pp": 25
  },
  {
    "id": 23,
    "nameKo": "짓밟기",
    "nameEn": "stomp",
    "type": "노말",
    "category": "물리",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 24,
    "nameKo": "두번치기",
    "nameEn": "double-kick",
    "type": "격투",
    "category": "물리",
    "power": 30,
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 25,
    "nameKo": "메가톤킥",
    "nameEn": "mega-kick",
    "type": "노말",
    "category": "물리",
    "power": 120,
    "accuracy": 75,
    "pp": 5
  },
  {
    "id": 26,
    "nameKo": "점프킥",
    "nameEn": "jump-kick",
    "type": "격투",
    "category": "물리",
    "power": 100,
    "accuracy": 95,
    "pp": 10
  },
  {
    "id": 27,
    "nameKo": "돌려차기",
    "nameEn": "rolling-kick",
    "type": "격투",
    "category": "물리",
    "power": 60,
    "accuracy": 85,
    "pp": 15
  },
  {
    "id": 28,
    "nameKo": "모래뿌리기",
    "nameEn": "sand-attack",
    "type": "땅",
    "category": "상태",
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 29,
    "nameKo": "박치기",
    "nameEn": "headbutt",
    "type": "노말",
    "category": "물리",
    "power": 70,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 30,
    "nameKo": "뿔찌르기",
    "nameEn": "horn-attack",
    "type": "노말",
    "category": "물리",
    "power": 65,
    "accuracy": 100,
    "pp": 25
  },
  {
    "id": 31,
    "nameKo": "마구찌르기",
    "nameEn": "fury-attack",
    "type": "노말",
    "category": "물리",
    "power": 15,
    "accuracy": 85,
    "pp": 20
  },
  {
    "id": 32,
    "nameKo": "뿔드릴",
    "nameEn": "horn-drill",
    "type": "노말",
    "category": "물리",
    "accuracy": 30,
    "pp": 5
  },
  {
    "id": 33,
    "nameKo": "몸통박치기",
    "nameEn": "tackle",
    "type": "노말",
    "category": "물리",
    "power": 40,
    "accuracy": 100,
    "pp": 35
  },
  {
    "id": 34,
    "nameKo": "누르기",
    "nameEn": "body-slam",
    "type": "노말",
    "category": "물리",
    "power": 85,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 35,
    "nameKo": "김밥말이",
    "nameEn": "wrap",
    "type": "노말",
    "category": "물리",
    "power": 15,
    "accuracy": 90,
    "pp": 20
  },
  {
    "id": 36,
    "nameKo": "돌진",
    "nameEn": "take-down",
    "type": "노말",
    "category": "물리",
    "power": 90,
    "accuracy": 85,
    "pp": 20
  },
  {
    "id": 37,
    "nameKo": "난동부리기",
    "nameEn": "thrash",
    "type": "노말",
    "category": "물리",
    "power": 120,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 38,
    "nameKo": "이판사판태클",
    "nameEn": "double-edge",
    "type": "노말",
    "category": "물리",
    "power": 120,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 39,
    "nameKo": "꼬리흔들기",
    "nameEn": "tail-whip",
    "type": "노말",
    "category": "상태",
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 40,
    "nameKo": "독침",
    "nameEn": "poison-sting",
    "type": "독",
    "category": "물리",
    "power": 15,
    "accuracy": 100,
    "pp": 35
  },
  {
    "id": 41,
    "nameKo": "더블니들",
    "nameEn": "twineedle",
    "type": "벌레",
    "category": "물리",
    "power": 25,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 42,
    "nameKo": "바늘미사일",
    "nameEn": "pin-missile",
    "type": "벌레",
    "category": "물리",
    "power": 25,
    "accuracy": 95,
    "pp": 20
  },
  {
    "id": 43,
    "nameKo": "째려보기",
    "nameEn": "leer",
    "type": "노말",
    "category": "상태",
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 44,
    "nameKo": "물기",
    "nameEn": "bite",
    "type": "악",
    "category": "물리",
    "power": 60,
    "accuracy": 100,
    "pp": 25
  },
  {
    "id": 45,
    "nameKo": "울음소리",
    "nameEn": "growl",
    "type": "노말",
    "category": "상태",
    "accuracy": 100,
    "pp": 40
  },
  {
    "id": 46,
    "nameKo": "울부짖기",
    "nameEn": "roar",
    "type": "노말",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 47,
    "nameKo": "노래하기",
    "nameEn": "sing",
    "type": "노말",
    "category": "상태",
    "accuracy": 55,
    "pp": 15
  },
  {
    "id": 48,
    "nameKo": "초음파",
    "nameEn": "supersonic",
    "type": "노말",
    "category": "상태",
    "accuracy": 55,
    "pp": 20
  },
  {
    "id": 49,
    "nameKo": "소닉붐",
    "nameEn": "sonic-boom",
    "type": "노말",
    "category": "특수",
    "accuracy": 90,
    "pp": 20
  },
  {
    "id": 50,
    "nameKo": "사슬묶기",
    "nameEn": "disable",
    "type": "노말",
    "category": "상태",
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 51,
    "nameKo": "용해액",
    "nameEn": "acid",
    "type": "독",
    "category": "특수",
    "power": 40,
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 52,
    "nameKo": "불꽃세례",
    "nameEn": "ember",
    "type": "불꽃",
    "category": "특수",
    "power": 40,
    "accuracy": 100,
    "pp": 25
  },
  {
    "id": 53,
    "nameKo": "화염방사",
    "nameEn": "flamethrower",
    "type": "불꽃",
    "category": "특수",
    "power": 90,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 54,
    "nameKo": "흰안개",
    "nameEn": "mist",
    "type": "얼음",
    "category": "상태",
    "pp": 30
  },
  {
    "id": 55,
    "nameKo": "물대포",
    "nameEn": "water-gun",
    "type": "물",
    "category": "특수",
    "power": 40,
    "accuracy": 100,
    "pp": 25
  },
  {
    "id": 56,
    "nameKo": "하이드로펌프",
    "nameEn": "hydro-pump",
    "type": "물",
    "category": "특수",
    "power": 110,
    "accuracy": 80,
    "pp": 5
  },
  {
    "id": 57,
    "nameKo": "파도타기",
    "nameEn": "surf",
    "type": "물",
    "category": "특수",
    "power": 90,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 58,
    "nameKo": "냉동빔",
    "nameEn": "ice-beam",
    "type": "얼음",
    "category": "특수",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 59,
    "nameKo": "눈보라",
    "nameEn": "blizzard",
    "type": "얼음",
    "category": "특수",
    "power": 110,
    "accuracy": 70,
    "pp": 5
  },
  {
    "id": 60,
    "nameKo": "환상빔",
    "nameEn": "psybeam",
    "type": "에스퍼",
    "category": "특수",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 61,
    "nameKo": "거품광선",
    "nameEn": "bubble-beam",
    "type": "물",
    "category": "특수",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 62,
    "nameKo": "오로라빔",
    "nameEn": "aurora-beam",
    "type": "얼음",
    "category": "특수",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 63,
    "nameKo": "파괴광선",
    "nameEn": "hyper-beam",
    "type": "노말",
    "category": "특수",
    "power": 150,
    "accuracy": 90,
    "pp": 5
  },
  {
    "id": 64,
    "nameKo": "쪼기",
    "nameEn": "peck",
    "type": "비행",
    "category": "물리",
    "power": 35,
    "accuracy": 100,
    "pp": 35
  },
  {
    "id": 65,
    "nameKo": "회전부리",
    "nameEn": "drill-peck",
    "type": "비행",
    "category": "물리",
    "power": 80,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 66,
    "nameKo": "지옥의바퀴",
    "nameEn": "submission",
    "type": "격투",
    "category": "물리",
    "power": 80,
    "accuracy": 80,
    "pp": 20
  },
  {
    "id": 67,
    "nameKo": "안다리걸기",
    "nameEn": "low-kick",
    "type": "격투",
    "category": "물리",
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 68,
    "nameKo": "카운터",
    "nameEn": "counter",
    "type": "격투",
    "category": "물리",
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 69,
    "nameKo": "지구던지기",
    "nameEn": "seismic-toss",
    "type": "격투",
    "category": "물리",
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 70,
    "nameKo": "괴력",
    "nameEn": "strength",
    "type": "노말",
    "category": "물리",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 71,
    "nameKo": "흡수",
    "nameEn": "absorb",
    "type": "풀",
    "category": "특수",
    "power": 20,
    "accuracy": 100,
    "pp": 25
  },
  {
    "id": 72,
    "nameKo": "메가드레인",
    "nameEn": "mega-drain",
    "type": "풀",
    "category": "특수",
    "power": 40,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 73,
    "nameKo": "씨뿌리기",
    "nameEn": "leech-seed",
    "type": "풀",
    "category": "상태",
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 74,
    "nameKo": "성장",
    "nameEn": "growth",
    "type": "노말",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 75,
    "nameKo": "잎날가르기",
    "nameEn": "razor-leaf",
    "type": "풀",
    "category": "물리",
    "power": 55,
    "accuracy": 95,
    "pp": 25
  },
  {
    "id": 76,
    "nameKo": "솔라빔",
    "nameEn": "solar-beam",
    "type": "풀",
    "category": "특수",
    "power": 120,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 77,
    "nameKo": "독가루",
    "nameEn": "poison-powder",
    "type": "독",
    "category": "상태",
    "accuracy": 75,
    "pp": 35
  },
  {
    "id": 78,
    "nameKo": "저리가루",
    "nameEn": "stun-spore",
    "type": "풀",
    "category": "상태",
    "accuracy": 75,
    "pp": 30
  },
  {
    "id": 79,
    "nameKo": "수면가루",
    "nameEn": "sleep-powder",
    "type": "풀",
    "category": "상태",
    "accuracy": 75,
    "pp": 15
  },
  {
    "id": 80,
    "nameKo": "꽃잎댄스",
    "nameEn": "petal-dance",
    "type": "풀",
    "category": "특수",
    "power": 120,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 81,
    "nameKo": "실뿜기",
    "nameEn": "string-shot",
    "type": "벌레",
    "category": "상태",
    "accuracy": 95,
    "pp": 40
  },
  {
    "id": 82,
    "nameKo": "용의분노",
    "nameEn": "dragon-rage",
    "type": "드래곤",
    "category": "특수",
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 83,
    "nameKo": "회오리불꽃",
    "nameEn": "fire-spin",
    "type": "불꽃",
    "category": "특수",
    "power": 35,
    "accuracy": 85,
    "pp": 15
  },
  {
    "id": 84,
    "nameKo": "전기쇼크",
    "nameEn": "thunder-shock",
    "type": "전기",
    "category": "특수",
    "power": 40,
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 85,
    "nameKo": "10만볼트",
    "nameEn": "thunderbolt",
    "type": "전기",
    "category": "특수",
    "power": 90,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 86,
    "nameKo": "전기자석파",
    "nameEn": "thunder-wave",
    "type": "전기",
    "category": "상태",
    "accuracy": 90,
    "pp": 20
  },
  {
    "id": 87,
    "nameKo": "번개",
    "nameEn": "thunder",
    "type": "전기",
    "category": "특수",
    "power": 110,
    "accuracy": 70,
    "pp": 10
  },
  {
    "id": 88,
    "nameKo": "돌떨구기",
    "nameEn": "rock-throw",
    "type": "바위",
    "category": "물리",
    "power": 50,
    "accuracy": 90,
    "pp": 15
  },
  {
    "id": 89,
    "nameKo": "지진",
    "nameEn": "earthquake",
    "type": "땅",
    "category": "물리",
    "power": 100,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 90,
    "nameKo": "땅가르기",
    "nameEn": "fissure",
    "type": "땅",
    "category": "물리",
    "accuracy": 30,
    "pp": 5
  },
  {
    "id": 91,
    "nameKo": "구멍파기",
    "nameEn": "dig",
    "type": "땅",
    "category": "물리",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 92,
    "nameKo": "맹독",
    "nameEn": "toxic",
    "type": "독",
    "category": "상태",
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 93,
    "nameKo": "염동력",
    "nameEn": "confusion",
    "type": "에스퍼",
    "category": "특수",
    "power": 50,
    "accuracy": 100,
    "pp": 25
  },
  {
    "id": 94,
    "nameKo": "사이코키네시스",
    "nameEn": "psychic",
    "type": "에스퍼",
    "category": "특수",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 95,
    "nameKo": "최면술",
    "nameEn": "hypnosis",
    "type": "에스퍼",
    "category": "상태",
    "accuracy": 60,
    "pp": 20
  },
  {
    "id": 96,
    "nameKo": "요가포즈",
    "nameEn": "meditate",
    "type": "에스퍼",
    "category": "상태",
    "pp": 40
  },
  {
    "id": 97,
    "nameKo": "고속이동",
    "nameEn": "agility",
    "type": "에스퍼",
    "category": "상태",
    "pp": 30
  },
  {
    "id": 98,
    "nameKo": "전광석화",
    "nameEn": "quick-attack",
    "type": "노말",
    "category": "물리",
    "power": 40,
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 99,
    "nameKo": "분노",
    "nameEn": "rage",
    "type": "노말",
    "category": "물리",
    "power": 20,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 100,
    "nameKo": "순간이동",
    "nameEn": "teleport",
    "type": "에스퍼",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 101,
    "nameKo": "나이트헤드",
    "nameEn": "night-shade",
    "type": "고스트",
    "category": "특수",
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 102,
    "nameKo": "흉내내기",
    "nameEn": "mimic",
    "type": "노말",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 103,
    "nameKo": "싫은소리",
    "nameEn": "screech",
    "type": "노말",
    "category": "상태",
    "accuracy": 85,
    "pp": 40
  },
  {
    "id": 104,
    "nameKo": "그림자분신",
    "nameEn": "double-team",
    "type": "노말",
    "category": "상태",
    "pp": 15
  },
  {
    "id": 105,
    "nameKo": "HP회복",
    "nameEn": "recover",
    "type": "노말",
    "category": "상태",
    "pp": 5
  },
  {
    "id": 106,
    "nameKo": "단단해지기",
    "nameEn": "harden",
    "type": "노말",
    "category": "상태",
    "pp": 30
  },
  {
    "id": 107,
    "nameKo": "작아지기",
    "nameEn": "minimize",
    "type": "노말",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 108,
    "nameKo": "연막",
    "nameEn": "smokescreen",
    "type": "노말",
    "category": "상태",
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 109,
    "nameKo": "이상한빛",
    "nameEn": "confuse-ray",
    "type": "고스트",
    "category": "상태",
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 110,
    "nameKo": "껍질에숨기",
    "nameEn": "withdraw",
    "type": "물",
    "category": "상태",
    "pp": 40
  },
  {
    "id": 111,
    "nameKo": "웅크리기",
    "nameEn": "defense-curl",
    "type": "노말",
    "category": "상태",
    "pp": 40
  },
  {
    "id": 112,
    "nameKo": "배리어",
    "nameEn": "barrier",
    "type": "에스퍼",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 113,
    "nameKo": "빛의장막",
    "nameEn": "light-screen",
    "type": "에스퍼",
    "category": "상태",
    "pp": 30
  },
  {
    "id": 114,
    "nameKo": "흑안개",
    "nameEn": "haze",
    "type": "얼음",
    "category": "상태",
    "pp": 30
  },
  {
    "id": 115,
    "nameKo": "리플렉터",
    "nameEn": "reflect",
    "type": "에스퍼",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 116,
    "nameKo": "기충전",
    "nameEn": "focus-energy",
    "type": "노말",
    "category": "상태",
    "pp": 30
  },
  {
    "id": 117,
    "nameKo": "참기",
    "nameEn": "bide",
    "type": "노말",
    "category": "물리",
    "pp": 10
  },
  {
    "id": 118,
    "nameKo": "손가락흔들기",
    "nameEn": "metronome",
    "type": "노말",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 119,
    "nameKo": "따라하기",
    "nameEn": "mirror-move",
    "type": "비행",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 120,
    "nameKo": "자폭",
    "nameEn": "self-destruct",
    "type": "노말",
    "category": "물리",
    "power": 200,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 121,
    "nameKo": "알폭탄",
    "nameEn": "egg-bomb",
    "type": "노말",
    "category": "물리",
    "power": 100,
    "accuracy": 75,
    "pp": 10
  },
  {
    "id": 122,
    "nameKo": "핥기",
    "nameEn": "lick",
    "type": "고스트",
    "category": "물리",
    "power": 30,
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 123,
    "nameKo": "스모그",
    "nameEn": "smog",
    "type": "독",
    "category": "특수",
    "power": 30,
    "accuracy": 70,
    "pp": 20
  },
  {
    "id": 124,
    "nameKo": "오물공격",
    "nameEn": "sludge",
    "type": "독",
    "category": "특수",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 125,
    "nameKo": "뼈다귀치기",
    "nameEn": "bone-club",
    "type": "땅",
    "category": "물리",
    "power": 65,
    "accuracy": 85,
    "pp": 20
  },
  {
    "id": 126,
    "nameKo": "불대문자",
    "nameEn": "fire-blast",
    "type": "불꽃",
    "category": "특수",
    "power": 110,
    "accuracy": 85,
    "pp": 5
  },
  {
    "id": 127,
    "nameKo": "폭포오르기",
    "nameEn": "waterfall",
    "type": "물",
    "category": "물리",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 128,
    "nameKo": "껍질끼우기",
    "nameEn": "clamp",
    "type": "물",
    "category": "물리",
    "power": 35,
    "accuracy": 85,
    "pp": 15
  },
  {
    "id": 129,
    "nameKo": "스피드스타",
    "nameEn": "swift",
    "type": "노말",
    "category": "특수",
    "power": 60,
    "pp": 20
  },
  {
    "id": 130,
    "nameKo": "로케트박치기",
    "nameEn": "skull-bash",
    "type": "노말",
    "category": "물리",
    "power": 130,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 131,
    "nameKo": "가시대포",
    "nameEn": "spike-cannon",
    "type": "노말",
    "category": "물리",
    "power": 20,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 132,
    "nameKo": "휘감기",
    "nameEn": "constrict",
    "type": "노말",
    "category": "물리",
    "power": 10,
    "accuracy": 100,
    "pp": 35
  },
  {
    "id": 133,
    "nameKo": "망각술",
    "nameEn": "amnesia",
    "type": "에스퍼",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 134,
    "nameKo": "숟가락휘기",
    "nameEn": "kinesis",
    "type": "에스퍼",
    "category": "상태",
    "accuracy": 80,
    "pp": 15
  },
  {
    "id": 135,
    "nameKo": "알낳기",
    "nameEn": "soft-boiled",
    "type": "노말",
    "category": "상태",
    "pp": 5
  },
  {
    "id": 136,
    "nameKo": "무릎차기",
    "nameEn": "high-jump-kick",
    "type": "격투",
    "category": "물리",
    "power": 130,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 137,
    "nameKo": "뱀눈초리",
    "nameEn": "glare",
    "type": "노말",
    "category": "상태",
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 138,
    "nameKo": "꿈먹기",
    "nameEn": "dream-eater",
    "type": "에스퍼",
    "category": "특수",
    "power": 100,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 139,
    "nameKo": "독가스",
    "nameEn": "poison-gas",
    "type": "독",
    "category": "상태",
    "accuracy": 90,
    "pp": 40
  },
  {
    "id": 140,
    "nameKo": "구슬던지기",
    "nameEn": "barrage",
    "type": "노말",
    "category": "물리",
    "power": 15,
    "accuracy": 85,
    "pp": 20
  },
  {
    "id": 141,
    "nameKo": "흡혈",
    "nameEn": "leech-life",
    "type": "벌레",
    "category": "물리",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 142,
    "nameKo": "악마의키스",
    "nameEn": "lovely-kiss",
    "type": "노말",
    "category": "상태",
    "accuracy": 75,
    "pp": 10
  },
  {
    "id": 143,
    "nameKo": "불새",
    "nameEn": "sky-attack",
    "type": "비행",
    "category": "물리",
    "power": 140,
    "accuracy": 90,
    "pp": 5
  },
  {
    "id": 144,
    "nameKo": "변신",
    "nameEn": "transform",
    "type": "노말",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 145,
    "nameKo": "거품",
    "nameEn": "bubble",
    "type": "물",
    "category": "특수",
    "power": 40,
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 146,
    "nameKo": "잼잼펀치",
    "nameEn": "dizzy-punch",
    "type": "노말",
    "category": "물리",
    "power": 70,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 147,
    "nameKo": "버섯포자",
    "nameEn": "spore",
    "type": "풀",
    "category": "상태",
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 148,
    "nameKo": "플래시",
    "nameEn": "flash",
    "type": "노말",
    "category": "상태",
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 149,
    "nameKo": "사이코웨이브",
    "nameEn": "psywave",
    "type": "에스퍼",
    "category": "특수",
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 150,
    "nameKo": "튀어오르기",
    "nameEn": "splash",
    "type": "노말",
    "category": "상태",
    "pp": 40
  },
  {
    "id": 151,
    "nameKo": "녹기",
    "nameEn": "acid-armor",
    "type": "독",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 152,
    "nameKo": "찝게햄머",
    "nameEn": "crabhammer",
    "type": "물",
    "category": "물리",
    "power": 100,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 153,
    "nameKo": "대폭발",
    "nameEn": "explosion",
    "type": "노말",
    "category": "물리",
    "power": 250,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 154,
    "nameKo": "마구할퀴기",
    "nameEn": "fury-swipes",
    "type": "노말",
    "category": "물리",
    "power": 18,
    "accuracy": 80,
    "pp": 15
  },
  {
    "id": 155,
    "nameKo": "뼈다귀부메랑",
    "nameEn": "bonemerang",
    "type": "땅",
    "category": "물리",
    "power": 50,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 156,
    "nameKo": "잠자기",
    "nameEn": "rest",
    "type": "에스퍼",
    "category": "상태",
    "pp": 5
  },
  {
    "id": 157,
    "nameKo": "스톤샤워",
    "nameEn": "rock-slide",
    "type": "바위",
    "category": "물리",
    "power": 75,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 158,
    "nameKo": "필살앞니",
    "nameEn": "hyper-fang",
    "type": "노말",
    "category": "물리",
    "power": 80,
    "accuracy": 90,
    "pp": 15
  },
  {
    "id": 159,
    "nameKo": "각지기",
    "nameEn": "sharpen",
    "type": "노말",
    "category": "상태",
    "pp": 30
  },
  {
    "id": 160,
    "nameKo": "텍스처",
    "nameEn": "conversion",
    "type": "노말",
    "category": "상태",
    "pp": 30
  },
  {
    "id": 161,
    "nameKo": "트라이어택",
    "nameEn": "tri-attack",
    "type": "노말",
    "category": "특수",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 162,
    "nameKo": "분노의앞니",
    "nameEn": "super-fang",
    "type": "노말",
    "category": "물리",
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 163,
    "nameKo": "베어가르기",
    "nameEn": "slash",
    "type": "노말",
    "category": "물리",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 164,
    "nameKo": "대타출동",
    "nameEn": "substitute",
    "type": "노말",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 166,
    "nameKo": "스케치",
    "nameEn": "sketch",
    "type": "노말",
    "category": "상태",
    "pp": 1
  },
  {
    "id": 167,
    "nameKo": "트리플킥",
    "nameEn": "triple-kick",
    "type": "격투",
    "category": "물리",
    "power": 10,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 168,
    "nameKo": "도둑질",
    "nameEn": "thief",
    "type": "악",
    "category": "물리",
    "power": 60,
    "accuracy": 100,
    "pp": 25
  },
  {
    "id": 169,
    "nameKo": "거미집",
    "nameEn": "spider-web",
    "type": "벌레",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 170,
    "nameKo": "마음의눈",
    "nameEn": "mind-reader",
    "type": "노말",
    "category": "상태",
    "pp": 5
  },
  {
    "id": 171,
    "nameKo": "악몽",
    "nameEn": "nightmare",
    "type": "고스트",
    "category": "상태",
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 172,
    "nameKo": "화염자동차",
    "nameEn": "flame-wheel",
    "type": "불꽃",
    "category": "물리",
    "power": 60,
    "accuracy": 100,
    "pp": 25
  },
  {
    "id": 173,
    "nameKo": "코골기",
    "nameEn": "snore",
    "type": "노말",
    "category": "특수",
    "power": 50,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 174,
    "nameKo": "저주",
    "nameEn": "curse",
    "type": "고스트",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 175,
    "nameKo": "바둥바둥",
    "nameEn": "flail",
    "type": "노말",
    "category": "물리",
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 176,
    "nameKo": "텍스처2",
    "nameEn": "conversion-2",
    "type": "노말",
    "category": "상태",
    "pp": 30
  },
  {
    "id": 177,
    "nameKo": "에어로블라스트",
    "nameEn": "aeroblast",
    "type": "비행",
    "category": "특수",
    "power": 100,
    "accuracy": 95,
    "pp": 5
  },
  {
    "id": 178,
    "nameKo": "목화포자",
    "nameEn": "cotton-spore",
    "type": "풀",
    "category": "상태",
    "accuracy": 100,
    "pp": 40
  },
  {
    "id": 179,
    "nameKo": "기사회생",
    "nameEn": "reversal",
    "type": "격투",
    "category": "물리",
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 180,
    "nameKo": "원한",
    "nameEn": "spite",
    "type": "고스트",
    "category": "상태",
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 181,
    "nameKo": "눈싸라기",
    "nameEn": "powder-snow",
    "type": "얼음",
    "category": "특수",
    "power": 40,
    "accuracy": 100,
    "pp": 25
  },
  {
    "id": 182,
    "nameKo": "방어",
    "nameEn": "protect",
    "type": "노말",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 183,
    "nameKo": "마하펀치",
    "nameEn": "mach-punch",
    "type": "격투",
    "category": "물리",
    "power": 40,
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 184,
    "nameKo": "겁나는얼굴",
    "nameEn": "scary-face",
    "type": "노말",
    "category": "상태",
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 185,
    "nameKo": "속여때리기",
    "nameEn": "feint-attack",
    "type": "악",
    "category": "물리",
    "power": 60,
    "pp": 20
  },
  {
    "id": 186,
    "nameKo": "천사의키스",
    "nameEn": "sweet-kiss",
    "type": "페어리",
    "category": "상태",
    "accuracy": 75,
    "pp": 10
  },
  {
    "id": 187,
    "nameKo": "배북",
    "nameEn": "belly-drum",
    "type": "노말",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 188,
    "nameKo": "오물폭탄",
    "nameEn": "sludge-bomb",
    "type": "독",
    "category": "특수",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 189,
    "nameKo": "진흙뿌리기",
    "nameEn": "mud-slap",
    "type": "땅",
    "category": "특수",
    "power": 20,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 190,
    "nameKo": "대포무노포",
    "nameEn": "octazooka",
    "type": "물",
    "category": "특수",
    "power": 65,
    "accuracy": 85,
    "pp": 10
  },
  {
    "id": 191,
    "nameKo": "압정뿌리기",
    "nameEn": "spikes",
    "type": "땅",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 192,
    "nameKo": "전자포",
    "nameEn": "zap-cannon",
    "type": "전기",
    "category": "특수",
    "power": 120,
    "accuracy": 50,
    "pp": 5
  },
  {
    "id": 193,
    "nameKo": "꿰뚫어보기",
    "nameEn": "foresight",
    "type": "노말",
    "category": "상태",
    "pp": 40
  },
  {
    "id": 194,
    "nameKo": "길동무",
    "nameEn": "destiny-bond",
    "type": "고스트",
    "category": "상태",
    "pp": 5
  },
  {
    "id": 195,
    "nameKo": "멸망의노래",
    "nameEn": "perish-song",
    "type": "노말",
    "category": "상태",
    "pp": 5
  },
  {
    "id": 196,
    "nameKo": "얼다바람",
    "nameEn": "icy-wind",
    "type": "얼음",
    "category": "특수",
    "power": 55,
    "accuracy": 95,
    "pp": 15
  },
  {
    "id": 197,
    "nameKo": "판별",
    "nameEn": "detect",
    "type": "격투",
    "category": "상태",
    "pp": 5
  },
  {
    "id": 198,
    "nameKo": "본러쉬",
    "nameEn": "bone-rush",
    "type": "땅",
    "category": "물리",
    "power": 25,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 199,
    "nameKo": "록온",
    "nameEn": "lock-on",
    "type": "노말",
    "category": "상태",
    "pp": 5
  },
  {
    "id": 200,
    "nameKo": "역린",
    "nameEn": "outrage",
    "type": "드래곤",
    "category": "물리",
    "power": 120,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 201,
    "nameKo": "모래바람",
    "nameEn": "sandstorm",
    "type": "바위",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 202,
    "nameKo": "기가드레인",
    "nameEn": "giga-drain",
    "type": "풀",
    "category": "특수",
    "power": 75,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 203,
    "nameKo": "버티기",
    "nameEn": "endure",
    "type": "노말",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 204,
    "nameKo": "애교부리기",
    "nameEn": "charm",
    "type": "페어리",
    "category": "상태",
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 205,
    "nameKo": "구르기",
    "nameEn": "rollout",
    "type": "바위",
    "category": "물리",
    "power": 30,
    "accuracy": 90,
    "pp": 20
  },
  {
    "id": 206,
    "nameKo": "칼등치기",
    "nameEn": "false-swipe",
    "type": "노말",
    "category": "물리",
    "power": 40,
    "accuracy": 100,
    "pp": 40
  },
  {
    "id": 207,
    "nameKo": "뽐내기",
    "nameEn": "swagger",
    "type": "노말",
    "category": "상태",
    "accuracy": 85,
    "pp": 15
  },
  {
    "id": 208,
    "nameKo": "우유마시기",
    "nameEn": "milk-drink",
    "type": "노말",
    "category": "상태",
    "pp": 5
  },
  {
    "id": 209,
    "nameKo": "스파크",
    "nameEn": "spark",
    "type": "전기",
    "category": "물리",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 210,
    "nameKo": "연속자르기",
    "nameEn": "fury-cutter",
    "type": "벌레",
    "category": "물리",
    "power": 40,
    "accuracy": 95,
    "pp": 20
  },
  {
    "id": 211,
    "nameKo": "강철날개",
    "nameEn": "steel-wing",
    "type": "강철",
    "category": "물리",
    "power": 70,
    "accuracy": 90,
    "pp": 25
  },
  {
    "id": 212,
    "nameKo": "검은눈빛",
    "nameEn": "mean-look",
    "type": "노말",
    "category": "상태",
    "pp": 5
  },
  {
    "id": 213,
    "nameKo": "헤롱헤롱",
    "nameEn": "attract",
    "type": "노말",
    "category": "상태",
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 214,
    "nameKo": "잠꼬대",
    "nameEn": "sleep-talk",
    "type": "노말",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 215,
    "nameKo": "치료방울",
    "nameEn": "heal-bell",
    "type": "노말",
    "category": "상태",
    "pp": 5
  },
  {
    "id": 216,
    "nameKo": "은혜갚기",
    "nameEn": "return",
    "type": "노말",
    "category": "물리",
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 217,
    "nameKo": "프레젠트",
    "nameEn": "present",
    "type": "노말",
    "category": "물리",
    "accuracy": 90,
    "pp": 15
  },
  {
    "id": 218,
    "nameKo": "화풀이",
    "nameEn": "frustration",
    "type": "노말",
    "category": "물리",
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 219,
    "nameKo": "신비의부적",
    "nameEn": "safeguard",
    "type": "노말",
    "category": "상태",
    "pp": 25
  },
  {
    "id": 220,
    "nameKo": "아픔나누기",
    "nameEn": "pain-split",
    "type": "노말",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 221,
    "nameKo": "성스러운불꽃",
    "nameEn": "sacred-fire",
    "type": "불꽃",
    "category": "물리",
    "power": 100,
    "accuracy": 95,
    "pp": 5
  },
  {
    "id": 222,
    "nameKo": "매그니튜드",
    "nameEn": "magnitude",
    "type": "땅",
    "category": "물리",
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 223,
    "nameKo": "폭발펀치",
    "nameEn": "dynamic-punch",
    "type": "격투",
    "category": "물리",
    "power": 100,
    "accuracy": 50,
    "pp": 5
  },
  {
    "id": 224,
    "nameKo": "메가폰",
    "nameEn": "megahorn",
    "type": "벌레",
    "category": "물리",
    "power": 120,
    "accuracy": 85,
    "pp": 10
  },
  {
    "id": 225,
    "nameKo": "용의숨결",
    "nameEn": "dragon-breath",
    "type": "드래곤",
    "category": "특수",
    "power": 60,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 226,
    "nameKo": "바톤터치",
    "nameEn": "baton-pass",
    "type": "노말",
    "category": "상태",
    "pp": 40
  },
  {
    "id": 227,
    "nameKo": "앵콜",
    "nameEn": "encore",
    "type": "노말",
    "category": "상태",
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 228,
    "nameKo": "따라가때리기",
    "nameEn": "pursuit",
    "type": "악",
    "category": "물리",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 229,
    "nameKo": "고속스핀",
    "nameEn": "rapid-spin",
    "type": "노말",
    "category": "물리",
    "power": 50,
    "accuracy": 100,
    "pp": 40
  },
  {
    "id": 230,
    "nameKo": "달콤한향기",
    "nameEn": "sweet-scent",
    "type": "노말",
    "category": "상태",
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 231,
    "nameKo": "아이언테일",
    "nameEn": "iron-tail",
    "type": "강철",
    "category": "물리",
    "power": 100,
    "accuracy": 75,
    "pp": 15
  },
  {
    "id": 232,
    "nameKo": "메탈크로우",
    "nameEn": "metal-claw",
    "type": "강철",
    "category": "물리",
    "power": 50,
    "accuracy": 95,
    "pp": 35
  },
  {
    "id": 233,
    "nameKo": "받아던지기",
    "nameEn": "vital-throw",
    "type": "격투",
    "category": "물리",
    "power": 70,
    "pp": 10
  },
  {
    "id": 234,
    "nameKo": "아침햇살",
    "nameEn": "morning-sun",
    "type": "노말",
    "category": "상태",
    "pp": 5
  },
  {
    "id": 235,
    "nameKo": "광합성",
    "nameEn": "synthesis",
    "type": "풀",
    "category": "상태",
    "pp": 5
  },
  {
    "id": 236,
    "nameKo": "달의불빛",
    "nameEn": "moonlight",
    "type": "페어리",
    "category": "상태",
    "pp": 5
  },
  {
    "id": 237,
    "nameKo": "잠재파워",
    "nameEn": "hidden-power",
    "type": "노말",
    "category": "특수",
    "power": 60,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 238,
    "nameKo": "크로스촙",
    "nameEn": "cross-chop",
    "type": "격투",
    "category": "물리",
    "power": 100,
    "accuracy": 80,
    "pp": 5
  },
  {
    "id": 239,
    "nameKo": "회오리",
    "nameEn": "twister",
    "type": "드래곤",
    "category": "특수",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 240,
    "nameKo": "비바라기",
    "nameEn": "rain-dance",
    "type": "물",
    "category": "상태",
    "pp": 5
  },
  {
    "id": 241,
    "nameKo": "쾌청",
    "nameEn": "sunny-day",
    "type": "불꽃",
    "category": "상태",
    "pp": 5
  },
  {
    "id": 242,
    "nameKo": "깨물어부수기",
    "nameEn": "crunch",
    "type": "악",
    "category": "물리",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 243,
    "nameKo": "미러코트",
    "nameEn": "mirror-coat",
    "type": "에스퍼",
    "category": "특수",
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 244,
    "nameKo": "자기암시",
    "nameEn": "psych-up",
    "type": "노말",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 245,
    "nameKo": "신속",
    "nameEn": "extreme-speed",
    "type": "노말",
    "category": "물리",
    "power": 80,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 246,
    "nameKo": "원시의힘",
    "nameEn": "ancient-power",
    "type": "바위",
    "category": "특수",
    "power": 60,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 247,
    "nameKo": "섀도볼",
    "nameEn": "shadow-ball",
    "type": "고스트",
    "category": "특수",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 248,
    "nameKo": "미래예지",
    "nameEn": "future-sight",
    "type": "에스퍼",
    "category": "특수",
    "power": 120,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 249,
    "nameKo": "바위깨기",
    "nameEn": "rock-smash",
    "type": "격투",
    "category": "물리",
    "power": 40,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 250,
    "nameKo": "바다회오리",
    "nameEn": "whirlpool",
    "type": "물",
    "category": "특수",
    "power": 35,
    "accuracy": 85,
    "pp": 15
  },
  {
    "id": 251,
    "nameKo": "집단구타",
    "nameEn": "beat-up",
    "type": "악",
    "category": "물리",
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 252,
    "nameKo": "속이다",
    "nameEn": "fake-out",
    "type": "노말",
    "category": "물리",
    "power": 40,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 253,
    "nameKo": "소란피기",
    "nameEn": "uproar",
    "type": "노말",
    "category": "특수",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 254,
    "nameKo": "비축하기",
    "nameEn": "stockpile",
    "type": "노말",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 255,
    "nameKo": "토해내기",
    "nameEn": "spit-up",
    "type": "노말",
    "category": "특수",
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 256,
    "nameKo": "꿀꺽",
    "nameEn": "swallow",
    "type": "노말",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 257,
    "nameKo": "열풍",
    "nameEn": "heat-wave",
    "type": "불꽃",
    "category": "특수",
    "power": 95,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 258,
    "nameKo": "싸라기눈",
    "nameEn": "hail",
    "type": "얼음",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 259,
    "nameKo": "트집",
    "nameEn": "torment",
    "type": "악",
    "category": "상태",
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 260,
    "nameKo": "부추기기",
    "nameEn": "flatter",
    "type": "악",
    "category": "상태",
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 261,
    "nameKo": "도깨비불",
    "nameEn": "will-o-wisp",
    "type": "불꽃",
    "category": "상태",
    "accuracy": 85,
    "pp": 15
  },
  {
    "id": 262,
    "nameKo": "추억의선물",
    "nameEn": "memento",
    "type": "악",
    "category": "상태",
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 263,
    "nameKo": "객기",
    "nameEn": "facade",
    "type": "노말",
    "category": "물리",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 264,
    "nameKo": "힘껏펀치",
    "nameEn": "focus-punch",
    "type": "격투",
    "category": "물리",
    "power": 150,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 265,
    "nameKo": "정신차리기",
    "nameEn": "smelling-salts",
    "type": "노말",
    "category": "물리",
    "power": 70,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 266,
    "nameKo": "날따름",
    "nameEn": "follow-me",
    "type": "노말",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 267,
    "nameKo": "자연의힘",
    "nameEn": "nature-power",
    "type": "노말",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 268,
    "nameKo": "충전",
    "nameEn": "charge",
    "type": "전기",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 269,
    "nameKo": "도발",
    "nameEn": "taunt",
    "type": "악",
    "category": "상태",
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 270,
    "nameKo": "도우미",
    "nameEn": "helping-hand",
    "type": "노말",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 271,
    "nameKo": "트릭",
    "nameEn": "trick",
    "type": "에스퍼",
    "category": "상태",
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 272,
    "nameKo": "역할",
    "nameEn": "role-play",
    "type": "에스퍼",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 273,
    "nameKo": "희망사항",
    "nameEn": "wish",
    "type": "노말",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 274,
    "nameKo": "조수",
    "nameEn": "assist",
    "type": "노말",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 275,
    "nameKo": "뿌리박기",
    "nameEn": "ingrain",
    "type": "풀",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 276,
    "nameKo": "엄청난힘",
    "nameEn": "superpower",
    "type": "격투",
    "category": "물리",
    "power": 120,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 277,
    "nameKo": "매직코트",
    "nameEn": "magic-coat",
    "type": "에스퍼",
    "category": "상태",
    "pp": 15
  },
  {
    "id": 278,
    "nameKo": "리사이클",
    "nameEn": "recycle",
    "type": "노말",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 279,
    "nameKo": "리벤지",
    "nameEn": "revenge",
    "type": "격투",
    "category": "물리",
    "power": 60,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 280,
    "nameKo": "깨트리다",
    "nameEn": "brick-break",
    "type": "격투",
    "category": "물리",
    "power": 75,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 281,
    "nameKo": "하품",
    "nameEn": "yawn",
    "type": "노말",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 282,
    "nameKo": "탁쳐서떨구기",
    "nameEn": "knock-off",
    "type": "악",
    "category": "물리",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 283,
    "nameKo": "죽기살기",
    "nameEn": "endeavor",
    "type": "노말",
    "category": "물리",
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 284,
    "nameKo": "분화",
    "nameEn": "eruption",
    "type": "불꽃",
    "category": "특수",
    "power": 150,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 285,
    "nameKo": "스킬스웹",
    "nameEn": "skill-swap",
    "type": "에스퍼",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 286,
    "nameKo": "봉인",
    "nameEn": "imprison",
    "type": "에스퍼",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 287,
    "nameKo": "리프레쉬",
    "nameEn": "refresh",
    "type": "노말",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 288,
    "nameKo": "원념",
    "nameEn": "grudge",
    "type": "고스트",
    "category": "상태",
    "pp": 5
  },
  {
    "id": 289,
    "nameKo": "가로챔",
    "nameEn": "snatch",
    "type": "악",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 290,
    "nameKo": "비밀의힘",
    "nameEn": "secret-power",
    "type": "노말",
    "category": "물리",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 291,
    "nameKo": "다이빙",
    "nameEn": "dive",
    "type": "물",
    "category": "물리",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 292,
    "nameKo": "손바닥치기",
    "nameEn": "arm-thrust",
    "type": "격투",
    "category": "물리",
    "power": 15,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 293,
    "nameKo": "보호색",
    "nameEn": "camouflage",
    "type": "노말",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 294,
    "nameKo": "반딧불",
    "nameEn": "tail-glow",
    "type": "벌레",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 295,
    "nameKo": "라스트버지",
    "nameEn": "luster-purge",
    "type": "에스퍼",
    "category": "특수",
    "power": 95,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 296,
    "nameKo": "미스트볼",
    "nameEn": "mist-ball",
    "type": "에스퍼",
    "category": "특수",
    "power": 95,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 297,
    "nameKo": "깃털댄스",
    "nameEn": "feather-dance",
    "type": "비행",
    "category": "상태",
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 298,
    "nameKo": "흔들흔들댄스",
    "nameEn": "teeter-dance",
    "type": "노말",
    "category": "상태",
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 299,
    "nameKo": "브레이즈킥",
    "nameEn": "blaze-kick",
    "type": "불꽃",
    "category": "물리",
    "power": 85,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 300,
    "nameKo": "흙놀이",
    "nameEn": "mud-sport",
    "type": "땅",
    "category": "상태",
    "pp": 15
  },
  {
    "id": 301,
    "nameKo": "아이스볼",
    "nameEn": "ice-ball",
    "type": "얼음",
    "category": "물리",
    "power": 30,
    "accuracy": 90,
    "pp": 20
  },
  {
    "id": 302,
    "nameKo": "바늘팔",
    "nameEn": "needle-arm",
    "type": "풀",
    "category": "물리",
    "power": 60,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 303,
    "nameKo": "태만함",
    "nameEn": "slack-off",
    "type": "노말",
    "category": "상태",
    "pp": 5
  },
  {
    "id": 304,
    "nameKo": "하이퍼보이스",
    "nameEn": "hyper-voice",
    "type": "노말",
    "category": "특수",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 305,
    "nameKo": "독엄니",
    "nameEn": "poison-fang",
    "type": "독",
    "category": "물리",
    "power": 50,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 306,
    "nameKo": "브레이크크루",
    "nameEn": "crush-claw",
    "type": "노말",
    "category": "물리",
    "power": 75,
    "accuracy": 95,
    "pp": 10
  },
  {
    "id": 307,
    "nameKo": "블러스트번",
    "nameEn": "blast-burn",
    "type": "불꽃",
    "category": "특수",
    "power": 150,
    "accuracy": 90,
    "pp": 5
  },
  {
    "id": 308,
    "nameKo": "하이드로캐논",
    "nameEn": "hydro-cannon",
    "type": "물",
    "category": "특수",
    "power": 150,
    "accuracy": 90,
    "pp": 5
  },
  {
    "id": 309,
    "nameKo": "코멧펀치",
    "nameEn": "meteor-mash",
    "type": "강철",
    "category": "물리",
    "power": 90,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 310,
    "nameKo": "놀래키기",
    "nameEn": "astonish",
    "type": "고스트",
    "category": "물리",
    "power": 30,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 311,
    "nameKo": "웨더볼",
    "nameEn": "weather-ball",
    "type": "노말",
    "category": "특수",
    "power": 50,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 312,
    "nameKo": "아로마테라피",
    "nameEn": "aromatherapy",
    "type": "풀",
    "category": "상태",
    "pp": 5
  },
  {
    "id": 313,
    "nameKo": "거짓울음",
    "nameEn": "fake-tears",
    "type": "악",
    "category": "상태",
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 314,
    "nameKo": "에어컷터",
    "nameEn": "air-cutter",
    "type": "비행",
    "category": "특수",
    "power": 60,
    "accuracy": 95,
    "pp": 25
  },
  {
    "id": 315,
    "nameKo": "오버히트",
    "nameEn": "overheat",
    "type": "불꽃",
    "category": "특수",
    "power": 130,
    "accuracy": 90,
    "pp": 5
  },
  {
    "id": 316,
    "nameKo": "냄새구별",
    "nameEn": "odor-sleuth",
    "type": "노말",
    "category": "상태",
    "pp": 40
  },
  {
    "id": 317,
    "nameKo": "암석봉인",
    "nameEn": "rock-tomb",
    "type": "바위",
    "category": "물리",
    "power": 60,
    "accuracy": 95,
    "pp": 15
  },
  {
    "id": 318,
    "nameKo": "은빛바람",
    "nameEn": "silver-wind",
    "type": "벌레",
    "category": "특수",
    "power": 60,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 319,
    "nameKo": "금속음",
    "nameEn": "metal-sound",
    "type": "강철",
    "category": "상태",
    "accuracy": 85,
    "pp": 40
  },
  {
    "id": 320,
    "nameKo": "풀피리",
    "nameEn": "grass-whistle",
    "type": "풀",
    "category": "상태",
    "accuracy": 55,
    "pp": 15
  },
  {
    "id": 321,
    "nameKo": "간지르기",
    "nameEn": "tickle",
    "type": "노말",
    "category": "상태",
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 322,
    "nameKo": "코스믹파워",
    "nameEn": "cosmic-power",
    "type": "에스퍼",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 323,
    "nameKo": "해수스파우팅",
    "nameEn": "water-spout",
    "type": "물",
    "category": "특수",
    "power": 150,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 324,
    "nameKo": "시그널빔",
    "nameEn": "signal-beam",
    "type": "벌레",
    "category": "특수",
    "power": 75,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 325,
    "nameKo": "섀도펀치",
    "nameEn": "shadow-punch",
    "type": "고스트",
    "category": "물리",
    "power": 60,
    "pp": 20
  },
  {
    "id": 326,
    "nameKo": "신통력",
    "nameEn": "extrasensory",
    "type": "에스퍼",
    "category": "특수",
    "power": 80,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 327,
    "nameKo": "스카이업퍼",
    "nameEn": "sky-uppercut",
    "type": "격투",
    "category": "물리",
    "power": 85,
    "accuracy": 90,
    "pp": 15
  },
  {
    "id": 328,
    "nameKo": "모래지옥",
    "nameEn": "sand-tomb",
    "type": "땅",
    "category": "물리",
    "power": 35,
    "accuracy": 85,
    "pp": 15
  },
  {
    "id": 329,
    "nameKo": "절대영도",
    "nameEn": "sheer-cold",
    "type": "얼음",
    "category": "특수",
    "accuracy": 30,
    "pp": 5
  },
  {
    "id": 330,
    "nameKo": "탁류",
    "nameEn": "muddy-water",
    "type": "물",
    "category": "특수",
    "power": 90,
    "accuracy": 85,
    "pp": 10
  },
  {
    "id": 331,
    "nameKo": "기관총",
    "nameEn": "bullet-seed",
    "type": "풀",
    "category": "물리",
    "power": 25,
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 332,
    "nameKo": "제비반환",
    "nameEn": "aerial-ace",
    "type": "비행",
    "category": "물리",
    "power": 60,
    "pp": 20
  },
  {
    "id": 333,
    "nameKo": "고드름침",
    "nameEn": "icicle-spear",
    "type": "얼음",
    "category": "물리",
    "power": 25,
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 334,
    "nameKo": "철벽",
    "nameEn": "iron-defense",
    "type": "강철",
    "category": "상태",
    "pp": 15
  },
  {
    "id": 335,
    "nameKo": "블록",
    "nameEn": "block",
    "type": "노말",
    "category": "상태",
    "pp": 5
  },
  {
    "id": 336,
    "nameKo": "멀리짖음",
    "nameEn": "howl",
    "type": "노말",
    "category": "상태",
    "pp": 40
  },
  {
    "id": 337,
    "nameKo": "드래곤크루",
    "nameEn": "dragon-claw",
    "type": "드래곤",
    "category": "물리",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 338,
    "nameKo": "하드플랜트",
    "nameEn": "frenzy-plant",
    "type": "풀",
    "category": "특수",
    "power": 150,
    "accuracy": 90,
    "pp": 5
  },
  {
    "id": 339,
    "nameKo": "벌크업",
    "nameEn": "bulk-up",
    "type": "격투",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 340,
    "nameKo": "뛰어오르다",
    "nameEn": "bounce",
    "type": "비행",
    "category": "물리",
    "power": 85,
    "accuracy": 85,
    "pp": 5
  },
  {
    "id": 341,
    "nameKo": "머드숏",
    "nameEn": "mud-shot",
    "type": "땅",
    "category": "특수",
    "power": 55,
    "accuracy": 95,
    "pp": 15
  },
  {
    "id": 342,
    "nameKo": "포이즌테일",
    "nameEn": "poison-tail",
    "type": "독",
    "category": "물리",
    "power": 50,
    "accuracy": 100,
    "pp": 25
  },
  {
    "id": 343,
    "nameKo": "탐내다",
    "nameEn": "covet",
    "type": "노말",
    "category": "물리",
    "power": 60,
    "accuracy": 100,
    "pp": 25
  },
  {
    "id": 345,
    "nameKo": "메지컬리프",
    "nameEn": "magical-leaf",
    "type": "풀",
    "category": "특수",
    "power": 60,
    "pp": 20
  },
  {
    "id": 346,
    "nameKo": "물놀이",
    "nameEn": "water-sport",
    "type": "물",
    "category": "상태",
    "pp": 15
  },
  {
    "id": 347,
    "nameKo": "명상",
    "nameEn": "calm-mind",
    "type": "에스퍼",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 348,
    "nameKo": "리프블레이드",
    "nameEn": "leaf-blade",
    "type": "풀",
    "category": "물리",
    "power": 90,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 349,
    "nameKo": "용의춤",
    "nameEn": "dragon-dance",
    "type": "드래곤",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 350,
    "nameKo": "락블레스트",
    "nameEn": "rock-blast",
    "type": "바위",
    "category": "물리",
    "power": 25,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 351,
    "nameKo": "전격파",
    "nameEn": "shock-wave",
    "type": "전기",
    "category": "특수",
    "power": 60,
    "pp": 20
  },
  {
    "id": 352,
    "nameKo": "물의파동",
    "nameEn": "water-pulse",
    "type": "물",
    "category": "특수",
    "power": 60,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 353,
    "nameKo": "파멸의소원",
    "nameEn": "doom-desire",
    "type": "강철",
    "category": "특수",
    "power": 140,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 354,
    "nameKo": "사이코부스트",
    "nameEn": "psycho-boost",
    "type": "에스퍼",
    "category": "특수",
    "power": 140,
    "accuracy": 90,
    "pp": 5
  },
  {
    "id": 355,
    "nameKo": "날개쉬기",
    "nameEn": "roost",
    "type": "비행",
    "category": "상태",
    "pp": 5
  },
  {
    "id": 356,
    "nameKo": "중력",
    "nameEn": "gravity",
    "type": "에스퍼",
    "category": "상태",
    "pp": 5
  },
  {
    "id": 357,
    "nameKo": "미라클아이",
    "nameEn": "miracle-eye",
    "type": "에스퍼",
    "category": "상태",
    "pp": 40
  },
  {
    "id": 358,
    "nameKo": "잠깨움뺨치기",
    "nameEn": "wake-up-slap",
    "type": "격투",
    "category": "물리",
    "power": 70,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 359,
    "nameKo": "암해머",
    "nameEn": "hammer-arm",
    "type": "격투",
    "category": "물리",
    "power": 100,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 360,
    "nameKo": "자이로볼",
    "nameEn": "gyro-ball",
    "type": "강철",
    "category": "물리",
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 361,
    "nameKo": "치유소원",
    "nameEn": "healing-wish",
    "type": "에스퍼",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 362,
    "nameKo": "소금물",
    "nameEn": "brine",
    "type": "물",
    "category": "특수",
    "power": 65,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 363,
    "nameKo": "자연의은혜",
    "nameEn": "natural-gift",
    "type": "노말",
    "category": "물리",
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 364,
    "nameKo": "페인트",
    "nameEn": "feint",
    "type": "노말",
    "category": "물리",
    "power": 30,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 365,
    "nameKo": "쪼아대기",
    "nameEn": "pluck",
    "type": "비행",
    "category": "물리",
    "power": 60,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 366,
    "nameKo": "순풍",
    "nameEn": "tailwind",
    "type": "비행",
    "category": "상태",
    "pp": 15
  },
  {
    "id": 367,
    "nameKo": "경혈찌르기",
    "nameEn": "acupressure",
    "type": "노말",
    "category": "상태",
    "pp": 30
  },
  {
    "id": 368,
    "nameKo": "메탈버스트",
    "nameEn": "metal-burst",
    "type": "강철",
    "category": "물리",
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 369,
    "nameKo": "유턴",
    "nameEn": "u-turn",
    "type": "벌레",
    "category": "물리",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 370,
    "nameKo": "인파이트",
    "nameEn": "close-combat",
    "type": "격투",
    "category": "물리",
    "power": 120,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 371,
    "nameKo": "보복",
    "nameEn": "payback",
    "type": "악",
    "category": "물리",
    "power": 50,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 372,
    "nameKo": "승부굳히기",
    "nameEn": "assurance",
    "type": "악",
    "category": "물리",
    "power": 60,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 373,
    "nameKo": "금제",
    "nameEn": "embargo",
    "type": "악",
    "category": "상태",
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 374,
    "nameKo": "내던지기",
    "nameEn": "fling",
    "type": "악",
    "category": "물리",
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 375,
    "nameKo": "사이코시프트",
    "nameEn": "psycho-shift",
    "type": "에스퍼",
    "category": "상태",
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 376,
    "nameKo": "마지막수단",
    "nameEn": "trump-card",
    "type": "노말",
    "category": "특수",
    "pp": 5
  },
  {
    "id": 377,
    "nameKo": "회복봉인",
    "nameEn": "heal-block",
    "type": "에스퍼",
    "category": "상태",
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 378,
    "nameKo": "쥐어짜기",
    "nameEn": "wring-out",
    "type": "노말",
    "category": "특수",
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 379,
    "nameKo": "파워트릭",
    "nameEn": "power-trick",
    "type": "에스퍼",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 380,
    "nameKo": "위액",
    "nameEn": "gastro-acid",
    "type": "독",
    "category": "상태",
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 381,
    "nameKo": "주술",
    "nameEn": "lucky-chant",
    "type": "노말",
    "category": "상태",
    "pp": 30
  },
  {
    "id": 382,
    "nameKo": "선취",
    "nameEn": "me-first",
    "type": "노말",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 383,
    "nameKo": "흉내쟁이",
    "nameEn": "copycat",
    "type": "노말",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 384,
    "nameKo": "파워스웹",
    "nameEn": "power-swap",
    "type": "에스퍼",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 385,
    "nameKo": "가드스웹",
    "nameEn": "guard-swap",
    "type": "에스퍼",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 386,
    "nameKo": "혼내기",
    "nameEn": "punishment",
    "type": "악",
    "category": "물리",
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 387,
    "nameKo": "뒀다쓰기",
    "nameEn": "last-resort",
    "type": "노말",
    "category": "물리",
    "power": 140,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 388,
    "nameKo": "고민씨",
    "nameEn": "worry-seed",
    "type": "풀",
    "category": "상태",
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 389,
    "nameKo": "기습",
    "nameEn": "sucker-punch",
    "type": "악",
    "category": "물리",
    "power": 70,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 390,
    "nameKo": "독압정",
    "nameEn": "toxic-spikes",
    "type": "독",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 391,
    "nameKo": "하트스웹",
    "nameEn": "heart-swap",
    "type": "에스퍼",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 392,
    "nameKo": "아쿠아링",
    "nameEn": "aqua-ring",
    "type": "물",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 393,
    "nameKo": "전자부유",
    "nameEn": "magnet-rise",
    "type": "전기",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 394,
    "nameKo": "플레어드라이브",
    "nameEn": "flare-blitz",
    "type": "불꽃",
    "category": "물리",
    "power": 120,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 395,
    "nameKo": "발경",
    "nameEn": "force-palm",
    "type": "격투",
    "category": "물리",
    "power": 60,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 396,
    "nameKo": "파동탄",
    "nameEn": "aura-sphere",
    "type": "격투",
    "category": "특수",
    "power": 80,
    "pp": 20
  },
  {
    "id": 397,
    "nameKo": "록커트",
    "nameEn": "rock-polish",
    "type": "바위",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 398,
    "nameKo": "독찌르기",
    "nameEn": "poison-jab",
    "type": "독",
    "category": "물리",
    "power": 80,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 399,
    "nameKo": "악의파동",
    "nameEn": "dark-pulse",
    "type": "악",
    "category": "특수",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 400,
    "nameKo": "깜짝베기",
    "nameEn": "night-slash",
    "type": "악",
    "category": "물리",
    "power": 70,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 401,
    "nameKo": "아쿠아테일",
    "nameEn": "aqua-tail",
    "type": "물",
    "category": "물리",
    "power": 90,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 402,
    "nameKo": "씨폭탄",
    "nameEn": "seed-bomb",
    "type": "풀",
    "category": "물리",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 403,
    "nameKo": "에어슬래시",
    "nameEn": "air-slash",
    "type": "비행",
    "category": "특수",
    "power": 75,
    "accuracy": 95,
    "pp": 15
  },
  {
    "id": 404,
    "nameKo": "시저크로스",
    "nameEn": "x-scissor",
    "type": "벌레",
    "category": "물리",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 405,
    "nameKo": "벌레의야단법석",
    "nameEn": "bug-buzz",
    "type": "벌레",
    "category": "특수",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 406,
    "nameKo": "용의파동",
    "nameEn": "dragon-pulse",
    "type": "드래곤",
    "category": "특수",
    "power": 85,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 407,
    "nameKo": "드래곤다이브",
    "nameEn": "dragon-rush",
    "type": "드래곤",
    "category": "물리",
    "power": 100,
    "accuracy": 75,
    "pp": 10
  },
  {
    "id": 408,
    "nameKo": "파워젬",
    "nameEn": "power-gem",
    "type": "바위",
    "category": "특수",
    "power": 80,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 409,
    "nameKo": "드레인펀치",
    "nameEn": "drain-punch",
    "type": "격투",
    "category": "물리",
    "power": 75,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 410,
    "nameKo": "진공파",
    "nameEn": "vacuum-wave",
    "type": "격투",
    "category": "특수",
    "power": 40,
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 411,
    "nameKo": "기합구슬",
    "nameEn": "focus-blast",
    "type": "격투",
    "category": "특수",
    "power": 120,
    "accuracy": 70,
    "pp": 5
  },
  {
    "id": 412,
    "nameKo": "에너지볼",
    "nameEn": "energy-ball",
    "type": "풀",
    "category": "특수",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 413,
    "nameKo": "브레이브버드",
    "nameEn": "brave-bird",
    "type": "비행",
    "category": "물리",
    "power": 120,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 414,
    "nameKo": "대지의힘",
    "nameEn": "earth-power",
    "type": "땅",
    "category": "특수",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 415,
    "nameKo": "바꿔치기",
    "nameEn": "switcheroo",
    "type": "악",
    "category": "상태",
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 416,
    "nameKo": "기가임팩트",
    "nameEn": "giga-impact",
    "type": "노말",
    "category": "물리",
    "power": 150,
    "accuracy": 90,
    "pp": 5
  },
  {
    "id": 417,
    "nameKo": "나쁜음모",
    "nameEn": "nasty-plot",
    "type": "악",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 418,
    "nameKo": "불릿펀치",
    "nameEn": "bullet-punch",
    "type": "강철",
    "category": "물리",
    "power": 40,
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 419,
    "nameKo": "눈사태",
    "nameEn": "avalanche",
    "type": "얼음",
    "category": "물리",
    "power": 60,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 420,
    "nameKo": "얼음뭉치",
    "nameEn": "ice-shard",
    "type": "얼음",
    "category": "물리",
    "power": 40,
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 421,
    "nameKo": "섀도크루",
    "nameEn": "shadow-claw",
    "type": "고스트",
    "category": "물리",
    "power": 70,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 422,
    "nameKo": "번개엄니",
    "nameEn": "thunder-fang",
    "type": "전기",
    "category": "물리",
    "power": 65,
    "accuracy": 95,
    "pp": 15
  },
  {
    "id": 423,
    "nameKo": "얼음엄니",
    "nameEn": "ice-fang",
    "type": "얼음",
    "category": "물리",
    "power": 65,
    "accuracy": 95,
    "pp": 15
  },
  {
    "id": 424,
    "nameKo": "불꽃엄니",
    "nameEn": "fire-fang",
    "type": "불꽃",
    "category": "물리",
    "power": 65,
    "accuracy": 95,
    "pp": 15
  },
  {
    "id": 425,
    "nameKo": "야습",
    "nameEn": "shadow-sneak",
    "type": "고스트",
    "category": "물리",
    "power": 40,
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 426,
    "nameKo": "진흙폭탄",
    "nameEn": "mud-bomb",
    "type": "땅",
    "category": "특수",
    "power": 65,
    "accuracy": 85,
    "pp": 10
  },
  {
    "id": 427,
    "nameKo": "사이코커터",
    "nameEn": "psycho-cut",
    "type": "에스퍼",
    "category": "물리",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 428,
    "nameKo": "사념의박치기",
    "nameEn": "zen-headbutt",
    "type": "에스퍼",
    "category": "물리",
    "power": 80,
    "accuracy": 90,
    "pp": 15
  },
  {
    "id": 429,
    "nameKo": "미러숏",
    "nameEn": "mirror-shot",
    "type": "강철",
    "category": "특수",
    "power": 65,
    "accuracy": 85,
    "pp": 10
  },
  {
    "id": 430,
    "nameKo": "러스터캐논",
    "nameEn": "flash-cannon",
    "type": "강철",
    "category": "특수",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 431,
    "nameKo": "락클라임",
    "nameEn": "rock-climb",
    "type": "노말",
    "category": "물리",
    "power": 90,
    "accuracy": 85,
    "pp": 20
  },
  {
    "id": 432,
    "nameKo": "안개제거",
    "nameEn": "defog",
    "type": "비행",
    "category": "상태",
    "pp": 15
  },
  {
    "id": 433,
    "nameKo": "트릭룸",
    "nameEn": "trick-room",
    "type": "에스퍼",
    "category": "상태",
    "pp": 5
  },
  {
    "id": 434,
    "nameKo": "용성군",
    "nameEn": "draco-meteor",
    "type": "드래곤",
    "category": "특수",
    "power": 130,
    "accuracy": 90,
    "pp": 5
  },
  {
    "id": 435,
    "nameKo": "방전",
    "nameEn": "discharge",
    "type": "전기",
    "category": "특수",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 436,
    "nameKo": "분연",
    "nameEn": "lava-plume",
    "type": "불꽃",
    "category": "특수",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 437,
    "nameKo": "리프스톰",
    "nameEn": "leaf-storm",
    "type": "풀",
    "category": "특수",
    "power": 130,
    "accuracy": 90,
    "pp": 5
  },
  {
    "id": 438,
    "nameKo": "파워휩",
    "nameEn": "power-whip",
    "type": "풀",
    "category": "물리",
    "power": 120,
    "accuracy": 85,
    "pp": 10
  },
  {
    "id": 439,
    "nameKo": "암석포",
    "nameEn": "rock-wrecker",
    "type": "바위",
    "category": "물리",
    "power": 150,
    "accuracy": 90,
    "pp": 5
  },
  {
    "id": 440,
    "nameKo": "크로스포이즌",
    "nameEn": "cross-poison",
    "type": "독",
    "category": "물리",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 441,
    "nameKo": "더스트슈트",
    "nameEn": "gunk-shot",
    "type": "독",
    "category": "물리",
    "power": 120,
    "accuracy": 80,
    "pp": 5
  },
  {
    "id": 442,
    "nameKo": "아이언헤드",
    "nameEn": "iron-head",
    "type": "강철",
    "category": "물리",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 443,
    "nameKo": "마그넷봄",
    "nameEn": "magnet-bomb",
    "type": "강철",
    "category": "물리",
    "power": 60,
    "pp": 20
  },
  {
    "id": 444,
    "nameKo": "스톤에지",
    "nameEn": "stone-edge",
    "type": "바위",
    "category": "물리",
    "power": 100,
    "accuracy": 80,
    "pp": 5
  },
  {
    "id": 445,
    "nameKo": "유혹",
    "nameEn": "captivate",
    "type": "노말",
    "category": "상태",
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 446,
    "nameKo": "스텔스록",
    "nameEn": "stealth-rock",
    "type": "바위",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 447,
    "nameKo": "풀묶기",
    "nameEn": "grass-knot",
    "type": "풀",
    "category": "특수",
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 448,
    "nameKo": "수다",
    "nameEn": "chatter",
    "type": "비행",
    "category": "특수",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 449,
    "nameKo": "심판의뭉치",
    "nameEn": "judgment",
    "type": "노말",
    "category": "특수",
    "power": 100,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 450,
    "nameKo": "벌레먹음",
    "nameEn": "bug-bite",
    "type": "벌레",
    "category": "물리",
    "power": 60,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 451,
    "nameKo": "차지빔",
    "nameEn": "charge-beam",
    "type": "전기",
    "category": "특수",
    "power": 50,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 452,
    "nameKo": "우드해머",
    "nameEn": "wood-hammer",
    "type": "풀",
    "category": "물리",
    "power": 120,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 453,
    "nameKo": "아쿠아제트",
    "nameEn": "aqua-jet",
    "type": "물",
    "category": "물리",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 454,
    "nameKo": "공격지령",
    "nameEn": "attack-order",
    "type": "벌레",
    "category": "물리",
    "power": 90,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 455,
    "nameKo": "방어지령",
    "nameEn": "defend-order",
    "type": "벌레",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 456,
    "nameKo": "회복지령",
    "nameEn": "heal-order",
    "type": "벌레",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 457,
    "nameKo": "양날박치기",
    "nameEn": "head-smash",
    "type": "바위",
    "category": "물리",
    "power": 150,
    "accuracy": 80,
    "pp": 5
  },
  {
    "id": 458,
    "nameKo": "더블어택",
    "nameEn": "double-hit",
    "type": "노말",
    "category": "물리",
    "power": 35,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 459,
    "nameKo": "시간의포효",
    "nameEn": "roar-of-time",
    "type": "드래곤",
    "category": "특수",
    "power": 150,
    "accuracy": 90,
    "pp": 5
  },
  {
    "id": 460,
    "nameKo": "공간절단",
    "nameEn": "spacial-rend",
    "type": "드래곤",
    "category": "특수",
    "power": 100,
    "accuracy": 95,
    "pp": 5
  },
  {
    "id": 461,
    "nameKo": "초승달춤",
    "nameEn": "lunar-dance",
    "type": "에스퍼",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 462,
    "nameKo": "묵사발",
    "nameEn": "crush-grip",
    "type": "노말",
    "category": "물리",
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 463,
    "nameKo": "마그마스톰",
    "nameEn": "magma-storm",
    "type": "불꽃",
    "category": "특수",
    "power": 100,
    "accuracy": 75,
    "pp": 5
  },
  {
    "id": 464,
    "nameKo": "다크홀",
    "nameEn": "dark-void",
    "type": "악",
    "category": "상태",
    "accuracy": 50,
    "pp": 10
  },
  {
    "id": 465,
    "nameKo": "시드플레어",
    "nameEn": "seed-flare",
    "type": "풀",
    "category": "특수",
    "power": 120,
    "accuracy": 85,
    "pp": 5
  },
  {
    "id": 466,
    "nameKo": "괴상한바람",
    "nameEn": "ominous-wind",
    "type": "고스트",
    "category": "특수",
    "power": 60,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 467,
    "nameKo": "섀도다이브",
    "nameEn": "shadow-force",
    "type": "고스트",
    "category": "물리",
    "power": 120,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 468,
    "nameKo": "손톱갈기",
    "nameEn": "hone-claws",
    "type": "악",
    "category": "상태",
    "pp": 15
  },
  {
    "id": 469,
    "nameKo": "와이드가드",
    "nameEn": "wide-guard",
    "type": "바위",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 470,
    "nameKo": "가드셰어",
    "nameEn": "guard-split",
    "type": "에스퍼",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 471,
    "nameKo": "파워셰어",
    "nameEn": "power-split",
    "type": "에스퍼",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 472,
    "nameKo": "원더룸",
    "nameEn": "wonder-room",
    "type": "에스퍼",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 473,
    "nameKo": "사이코쇼크",
    "nameEn": "psyshock",
    "type": "에스퍼",
    "category": "특수",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 474,
    "nameKo": "베놈쇼크",
    "nameEn": "venoshock",
    "type": "독",
    "category": "특수",
    "power": 65,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 475,
    "nameKo": "바디퍼지",
    "nameEn": "autotomize",
    "type": "강철",
    "category": "상태",
    "pp": 15
  },
  {
    "id": 476,
    "nameKo": "분노가루",
    "nameEn": "rage-powder",
    "type": "벌레",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 477,
    "nameKo": "텔레키네시스",
    "nameEn": "telekinesis",
    "type": "에스퍼",
    "category": "상태",
    "pp": 15
  },
  {
    "id": 478,
    "nameKo": "매직룸",
    "nameEn": "magic-room",
    "type": "에스퍼",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 479,
    "nameKo": "떨어뜨리기",
    "nameEn": "smack-down",
    "type": "바위",
    "category": "물리",
    "power": 50,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 480,
    "nameKo": "업어후리기",
    "nameEn": "storm-throw",
    "type": "격투",
    "category": "물리",
    "power": 60,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 481,
    "nameKo": "불꽃튀기기",
    "nameEn": "flame-burst",
    "type": "불꽃",
    "category": "특수",
    "power": 70,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 482,
    "nameKo": "오물웨이브",
    "nameEn": "sludge-wave",
    "type": "독",
    "category": "특수",
    "power": 95,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 483,
    "nameKo": "나비춤",
    "nameEn": "quiver-dance",
    "type": "벌레",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 484,
    "nameKo": "헤비봄버",
    "nameEn": "heavy-slam",
    "type": "강철",
    "category": "물리",
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 485,
    "nameKo": "싱크로노이즈",
    "nameEn": "synchronoise",
    "type": "에스퍼",
    "category": "특수",
    "power": 120,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 486,
    "nameKo": "일렉트릭볼",
    "nameEn": "electro-ball",
    "type": "전기",
    "category": "특수",
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 487,
    "nameKo": "물붓기",
    "nameEn": "soak",
    "type": "물",
    "category": "상태",
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 488,
    "nameKo": "니트로차지",
    "nameEn": "flame-charge",
    "type": "불꽃",
    "category": "물리",
    "power": 50,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 489,
    "nameKo": "똬리틀기",
    "nameEn": "coil",
    "type": "독",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 490,
    "nameKo": "로킥",
    "nameEn": "low-sweep",
    "type": "격투",
    "category": "물리",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 491,
    "nameKo": "애시드봄",
    "nameEn": "acid-spray",
    "type": "독",
    "category": "특수",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 492,
    "nameKo": "속임수",
    "nameEn": "foul-play",
    "type": "악",
    "category": "물리",
    "power": 95,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 493,
    "nameKo": "심플빔",
    "nameEn": "simple-beam",
    "type": "노말",
    "category": "상태",
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 494,
    "nameKo": "동료만들기",
    "nameEn": "entrainment",
    "type": "노말",
    "category": "상태",
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 495,
    "nameKo": "당신먼저",
    "nameEn": "after-you",
    "type": "노말",
    "category": "상태",
    "pp": 15
  },
  {
    "id": 496,
    "nameKo": "돌림노래",
    "nameEn": "round",
    "type": "노말",
    "category": "특수",
    "power": 60,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 497,
    "nameKo": "에코보이스",
    "nameEn": "echoed-voice",
    "type": "노말",
    "category": "특수",
    "power": 40,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 498,
    "nameKo": "야금야금",
    "nameEn": "chip-away",
    "type": "노말",
    "category": "물리",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 499,
    "nameKo": "클리어스모그",
    "nameEn": "clear-smog",
    "type": "독",
    "category": "특수",
    "power": 50,
    "pp": 15
  },
  {
    "id": 500,
    "nameKo": "어시스트파워",
    "nameEn": "stored-power",
    "type": "에스퍼",
    "category": "특수",
    "power": 20,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 501,
    "nameKo": "퍼스트가드",
    "nameEn": "quick-guard",
    "type": "격투",
    "category": "상태",
    "pp": 15
  },
  {
    "id": 502,
    "nameKo": "사이드체인지",
    "nameEn": "ally-switch",
    "type": "에스퍼",
    "category": "상태",
    "pp": 15
  },
  {
    "id": 503,
    "nameKo": "열탕",
    "nameEn": "scald",
    "type": "물",
    "category": "특수",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 504,
    "nameKo": "껍질깨기",
    "nameEn": "shell-smash",
    "type": "노말",
    "category": "상태",
    "pp": 15
  },
  {
    "id": 505,
    "nameKo": "치유파동",
    "nameEn": "heal-pulse",
    "type": "에스퍼",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 506,
    "nameKo": "병상첨병",
    "nameEn": "hex",
    "type": "고스트",
    "category": "특수",
    "power": 65,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 507,
    "nameKo": "프리폴",
    "nameEn": "sky-drop",
    "type": "비행",
    "category": "물리",
    "power": 60,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 508,
    "nameKo": "기어체인지",
    "nameEn": "shift-gear",
    "type": "강철",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 509,
    "nameKo": "배대뒤치기",
    "nameEn": "circle-throw",
    "type": "격투",
    "category": "물리",
    "power": 60,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 510,
    "nameKo": "불태우기",
    "nameEn": "incinerate",
    "type": "불꽃",
    "category": "특수",
    "power": 60,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 511,
    "nameKo": "순서미루기",
    "nameEn": "quash",
    "type": "악",
    "category": "상태",
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 512,
    "nameKo": "애크러뱃",
    "nameEn": "acrobatics",
    "type": "비행",
    "category": "물리",
    "power": 55,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 513,
    "nameKo": "미러타입",
    "nameEn": "reflect-type",
    "type": "노말",
    "category": "상태",
    "pp": 15
  },
  {
    "id": 514,
    "nameKo": "원수갚기",
    "nameEn": "retaliate",
    "type": "노말",
    "category": "물리",
    "power": 70,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 515,
    "nameKo": "목숨걸기",
    "nameEn": "final-gambit",
    "type": "격투",
    "category": "특수",
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 516,
    "nameKo": "기프트패스",
    "nameEn": "bestow",
    "type": "노말",
    "category": "상태",
    "pp": 15
  },
  {
    "id": 517,
    "nameKo": "연옥",
    "nameEn": "inferno",
    "type": "불꽃",
    "category": "특수",
    "power": 100,
    "accuracy": 50,
    "pp": 5
  },
  {
    "id": 518,
    "nameKo": "물의맹세",
    "nameEn": "water-pledge",
    "type": "물",
    "category": "특수",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 519,
    "nameKo": "불꽃의맹세",
    "nameEn": "fire-pledge",
    "type": "불꽃",
    "category": "특수",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 520,
    "nameKo": "풀의맹세",
    "nameEn": "grass-pledge",
    "type": "풀",
    "category": "특수",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 521,
    "nameKo": "볼트체인지",
    "nameEn": "volt-switch",
    "type": "전기",
    "category": "특수",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 522,
    "nameKo": "벌레의저항",
    "nameEn": "struggle-bug",
    "type": "벌레",
    "category": "특수",
    "power": 50,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 523,
    "nameKo": "땅고르기",
    "nameEn": "bulldoze",
    "type": "땅",
    "category": "물리",
    "power": 60,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 524,
    "nameKo": "얼음숨결",
    "nameEn": "frost-breath",
    "type": "얼음",
    "category": "특수",
    "power": 60,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 525,
    "nameKo": "드래곤테일",
    "nameEn": "dragon-tail",
    "type": "드래곤",
    "category": "물리",
    "power": 60,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 526,
    "nameKo": "분발",
    "nameEn": "work-up",
    "type": "노말",
    "category": "상태",
    "pp": 30
  },
  {
    "id": 527,
    "nameKo": "일렉트릭네트",
    "nameEn": "electroweb",
    "type": "전기",
    "category": "특수",
    "power": 55,
    "accuracy": 95,
    "pp": 15
  },
  {
    "id": 528,
    "nameKo": "와일드볼트",
    "nameEn": "wild-charge",
    "type": "전기",
    "category": "물리",
    "power": 90,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 529,
    "nameKo": "드릴라이너",
    "nameEn": "drill-run",
    "type": "땅",
    "category": "물리",
    "power": 80,
    "accuracy": 95,
    "pp": 10
  },
  {
    "id": 530,
    "nameKo": "더블촙",
    "nameEn": "dual-chop",
    "type": "드래곤",
    "category": "물리",
    "power": 40,
    "accuracy": 90,
    "pp": 15
  },
  {
    "id": 531,
    "nameKo": "하트스탬프",
    "nameEn": "heart-stamp",
    "type": "에스퍼",
    "category": "물리",
    "power": 60,
    "accuracy": 100,
    "pp": 25
  },
  {
    "id": 532,
    "nameKo": "우드호른",
    "nameEn": "horn-leech",
    "type": "풀",
    "category": "물리",
    "power": 75,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 533,
    "nameKo": "성스러운칼",
    "nameEn": "sacred-sword",
    "type": "격투",
    "category": "물리",
    "power": 90,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 534,
    "nameKo": "셸블레이드",
    "nameEn": "razor-shell",
    "type": "물",
    "category": "물리",
    "power": 75,
    "accuracy": 95,
    "pp": 10
  },
  {
    "id": 535,
    "nameKo": "히트스탬프",
    "nameEn": "heat-crash",
    "type": "불꽃",
    "category": "물리",
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 536,
    "nameKo": "그래스믹서",
    "nameEn": "leaf-tornado",
    "type": "풀",
    "category": "특수",
    "power": 65,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 537,
    "nameKo": "하드롤러",
    "nameEn": "steamroller",
    "type": "벌레",
    "category": "물리",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 538,
    "nameKo": "코튼가드",
    "nameEn": "cotton-guard",
    "type": "풀",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 539,
    "nameKo": "나이트버스트",
    "nameEn": "night-daze",
    "type": "악",
    "category": "특수",
    "power": 85,
    "accuracy": 95,
    "pp": 10
  },
  {
    "id": 540,
    "nameKo": "사이코브레이크",
    "nameEn": "psystrike",
    "type": "에스퍼",
    "category": "특수",
    "power": 100,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 541,
    "nameKo": "스위프뺨치기",
    "nameEn": "tail-slap",
    "type": "노말",
    "category": "물리",
    "power": 25,
    "accuracy": 85,
    "pp": 10
  },
  {
    "id": 542,
    "nameKo": "폭풍",
    "nameEn": "hurricane",
    "type": "비행",
    "category": "특수",
    "power": 110,
    "accuracy": 70,
    "pp": 10
  },
  {
    "id": 543,
    "nameKo": "아프로브레이크",
    "nameEn": "head-charge",
    "type": "노말",
    "category": "물리",
    "power": 120,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 544,
    "nameKo": "기어소서",
    "nameEn": "gear-grind",
    "type": "강철",
    "category": "물리",
    "power": 50,
    "accuracy": 85,
    "pp": 15
  },
  {
    "id": 545,
    "nameKo": "화염탄",
    "nameEn": "searing-shot",
    "type": "불꽃",
    "category": "특수",
    "power": 100,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 546,
    "nameKo": "테크노버스터",
    "nameEn": "techno-blast",
    "type": "노말",
    "category": "특수",
    "power": 120,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 547,
    "nameKo": "옛노래",
    "nameEn": "relic-song",
    "type": "노말",
    "category": "특수",
    "power": 75,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 548,
    "nameKo": "신비의칼",
    "nameEn": "secret-sword",
    "type": "격투",
    "category": "특수",
    "power": 85,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 549,
    "nameKo": "얼다세계",
    "nameEn": "glaciate",
    "type": "얼음",
    "category": "특수",
    "power": 65,
    "accuracy": 95,
    "pp": 10
  },
  {
    "id": 550,
    "nameKo": "뇌격",
    "nameEn": "bolt-strike",
    "type": "전기",
    "category": "물리",
    "power": 130,
    "accuracy": 85,
    "pp": 5
  },
  {
    "id": 551,
    "nameKo": "푸른불꽃",
    "nameEn": "blue-flare",
    "type": "불꽃",
    "category": "특수",
    "power": 130,
    "accuracy": 85,
    "pp": 5
  },
  {
    "id": 552,
    "nameKo": "불꽃춤",
    "nameEn": "fiery-dance",
    "type": "불꽃",
    "category": "특수",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 555,
    "nameKo": "바크아웃",
    "nameEn": "snarl",
    "type": "악",
    "category": "특수",
    "power": 55,
    "accuracy": 95,
    "pp": 15
  },
  {
    "id": 556,
    "nameKo": "고드름떨구기",
    "nameEn": "icicle-crash",
    "type": "얼음",
    "category": "물리",
    "power": 85,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 557,
    "nameKo": "V제너레이트",
    "nameEn": "v-create",
    "type": "불꽃",
    "category": "물리",
    "power": 180,
    "accuracy": 95,
    "pp": 5
  },
  {
    "id": 558,
    "nameKo": "크로스플레임",
    "nameEn": "fusion-flare",
    "type": "불꽃",
    "category": "특수",
    "power": 100,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 559,
    "nameKo": "크로스썬더",
    "nameEn": "fusion-bolt",
    "type": "전기",
    "category": "물리",
    "power": 100,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 560,
    "nameKo": "플라잉프레스",
    "nameEn": "flying-press",
    "type": "격투",
    "category": "물리",
    "power": 100,
    "accuracy": 95,
    "pp": 10
  },
  {
    "id": 561,
    "nameKo": "마룻바닥세워막기",
    "nameEn": "mat-block",
    "type": "격투",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 562,
    "nameKo": "트림",
    "nameEn": "belch",
    "type": "독",
    "category": "특수",
    "power": 120,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 563,
    "nameKo": "일구기",
    "nameEn": "rototiller",
    "type": "땅",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 564,
    "nameKo": "끈적끈적네트",
    "nameEn": "sticky-web",
    "type": "벌레",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 565,
    "nameKo": "마지막일침",
    "nameEn": "fell-stinger",
    "type": "벌레",
    "category": "물리",
    "power": 50,
    "accuracy": 100,
    "pp": 25
  },
  {
    "id": 566,
    "nameKo": "고스트다이브",
    "nameEn": "phantom-force",
    "type": "고스트",
    "category": "물리",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 567,
    "nameKo": "핼러윈",
    "nameEn": "trick-or-treat",
    "type": "고스트",
    "category": "상태",
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 568,
    "nameKo": "부르짖기",
    "nameEn": "noble-roar",
    "type": "노말",
    "category": "상태",
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 569,
    "nameKo": "플라스마샤워",
    "nameEn": "ion-deluge",
    "type": "전기",
    "category": "상태",
    "pp": 25
  },
  {
    "id": 570,
    "nameKo": "파라볼라차지",
    "nameEn": "parabolic-charge",
    "type": "전기",
    "category": "특수",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 571,
    "nameKo": "숲의저주",
    "nameEn": "forests-curse",
    "type": "풀",
    "category": "상태",
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 572,
    "nameKo": "꽃보라",
    "nameEn": "petal-blizzard",
    "type": "풀",
    "category": "물리",
    "power": 90,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 573,
    "nameKo": "프리즈드라이",
    "nameEn": "freeze-dry",
    "type": "얼음",
    "category": "특수",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 574,
    "nameKo": "차밍보이스",
    "nameEn": "disarming-voice",
    "type": "페어리",
    "category": "특수",
    "power": 40,
    "pp": 15
  },
  {
    "id": 575,
    "nameKo": "막말내뱉기",
    "nameEn": "parting-shot",
    "type": "악",
    "category": "상태",
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 576,
    "nameKo": "뒤집어엎기",
    "nameEn": "topsy-turvy",
    "type": "악",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 577,
    "nameKo": "드레인키스",
    "nameEn": "draining-kiss",
    "type": "페어리",
    "category": "특수",
    "power": 50,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 578,
    "nameKo": "트릭가드",
    "nameEn": "crafty-shield",
    "type": "페어리",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 579,
    "nameKo": "플라워가드",
    "nameEn": "flower-shield",
    "type": "페어리",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 580,
    "nameKo": "그래스필드",
    "nameEn": "grassy-terrain",
    "type": "풀",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 581,
    "nameKo": "미스트필드",
    "nameEn": "misty-terrain",
    "type": "페어리",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 582,
    "nameKo": "송전",
    "nameEn": "electrify",
    "type": "전기",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 583,
    "nameKo": "치근거리기",
    "nameEn": "play-rough",
    "type": "페어리",
    "category": "물리",
    "power": 90,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 584,
    "nameKo": "요정의바람",
    "nameEn": "fairy-wind",
    "type": "페어리",
    "category": "특수",
    "power": 40,
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 585,
    "nameKo": "문포스",
    "nameEn": "moonblast",
    "type": "페어리",
    "category": "특수",
    "power": 95,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 586,
    "nameKo": "폭음파",
    "nameEn": "boomburst",
    "type": "노말",
    "category": "특수",
    "power": 140,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 587,
    "nameKo": "페어리록",
    "nameEn": "fairy-lock",
    "type": "페어리",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 588,
    "nameKo": "킹실드",
    "nameEn": "kings-shield",
    "type": "강철",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 589,
    "nameKo": "친해지기",
    "nameEn": "play-nice",
    "type": "노말",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 590,
    "nameKo": "비밀이야기",
    "nameEn": "confide",
    "type": "노말",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 591,
    "nameKo": "다이아스톰",
    "nameEn": "diamond-storm",
    "type": "바위",
    "category": "물리",
    "power": 100,
    "accuracy": 95,
    "pp": 5
  },
  {
    "id": 592,
    "nameKo": "스팀버스트",
    "nameEn": "steam-eruption",
    "type": "물",
    "category": "특수",
    "power": 110,
    "accuracy": 95,
    "pp": 5
  },
  {
    "id": 593,
    "nameKo": "다른차원홀",
    "nameEn": "hyperspace-hole",
    "type": "에스퍼",
    "category": "특수",
    "power": 80,
    "pp": 5
  },
  {
    "id": 594,
    "nameKo": "물수리검",
    "nameEn": "water-shuriken",
    "type": "물",
    "category": "특수",
    "power": 15,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 595,
    "nameKo": "매지컬플레임",
    "nameEn": "mystical-fire",
    "type": "불꽃",
    "category": "특수",
    "power": 75,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 596,
    "nameKo": "니들가드",
    "nameEn": "spiky-shield",
    "type": "풀",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 597,
    "nameKo": "아로마미스트",
    "nameEn": "aromatic-mist",
    "type": "페어리",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 598,
    "nameKo": "괴전파",
    "nameEn": "eerie-impulse",
    "type": "전기",
    "category": "상태",
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 599,
    "nameKo": "베놈트랩",
    "nameEn": "venom-drench",
    "type": "독",
    "category": "상태",
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 600,
    "nameKo": "분진",
    "nameEn": "powder",
    "type": "벌레",
    "category": "상태",
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 601,
    "nameKo": "지오컨트롤",
    "nameEn": "geomancy",
    "type": "페어리",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 602,
    "nameKo": "자기장조작",
    "nameEn": "magnetic-flux",
    "type": "전기",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 604,
    "nameKo": "일렉트릭필드",
    "nameEn": "electric-terrain",
    "type": "전기",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 605,
    "nameKo": "매지컬샤인",
    "nameEn": "dazzling-gleam",
    "type": "페어리",
    "category": "특수",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 608,
    "nameKo": "초롱초롱눈동자",
    "nameEn": "baby-doll-eyes",
    "type": "페어리",
    "category": "상태",
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 609,
    "nameKo": "볼부비부비",
    "nameEn": "nuzzle",
    "type": "전기",
    "category": "물리",
    "power": 20,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 611,
    "nameKo": "엉겨붙기",
    "nameEn": "infestation",
    "type": "벌레",
    "category": "특수",
    "power": 20,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 612,
    "nameKo": "그로우펀치",
    "nameEn": "power-up-punch",
    "type": "격투",
    "category": "물리",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 613,
    "nameKo": "데스윙",
    "nameEn": "oblivion-wing",
    "type": "비행",
    "category": "특수",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 614,
    "nameKo": "사우전드애로",
    "nameEn": "thousand-arrows",
    "type": "땅",
    "category": "물리",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 615,
    "nameKo": "사우전드웨이브",
    "nameEn": "thousand-waves",
    "type": "땅",
    "category": "물리",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 616,
    "nameKo": "그라운드포스",
    "nameEn": "lands-wrath",
    "type": "땅",
    "category": "물리",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 618,
    "nameKo": "근원의파동",
    "nameEn": "origin-pulse",
    "type": "물",
    "category": "특수",
    "power": 110,
    "accuracy": 85,
    "pp": 10
  },
  {
    "id": 619,
    "nameKo": "단애의칼",
    "nameEn": "precipice-blades",
    "type": "땅",
    "category": "물리",
    "power": 120,
    "accuracy": 85,
    "pp": 10
  },
  {
    "id": 620,
    "nameKo": "화룡점정",
    "nameEn": "dragon-ascent",
    "type": "비행",
    "category": "물리",
    "power": 120,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 659,
    "nameKo": "모래모으기",
    "nameEn": "shore-up",
    "type": "땅",
    "category": "상태",
    "pp": 5
  },
  {
    "id": 660,
    "nameKo": "만나자마자",
    "nameEn": "first-impression",
    "type": "벌레",
    "category": "물리",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 665,
    "nameKo": "아이스해머",
    "nameEn": "ice-hammer",
    "type": "얼음",
    "category": "물리",
    "power": 100,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 666,
    "nameKo": "플라워힐",
    "nameEn": "floral-healing",
    "type": "페어리",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 667,
    "nameKo": "10만마력",
    "nameEn": "high-horsepower",
    "type": "땅",
    "category": "물리",
    "power": 95,
    "accuracy": 95,
    "pp": 10
  },
  {
    "id": 668,
    "nameKo": "힘흡수",
    "nameEn": "strength-sap",
    "type": "풀",
    "category": "상태",
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 669,
    "nameKo": "솔라블레이드",
    "nameEn": "solar-blade",
    "type": "풀",
    "category": "물리",
    "power": 125,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 670,
    "nameKo": "나뭇잎",
    "nameEn": "leafage",
    "type": "풀",
    "category": "물리",
    "power": 40,
    "accuracy": 100,
    "pp": 40
  },
  {
    "id": 671,
    "nameKo": "스포트라이트",
    "nameEn": "spotlight",
    "type": "노말",
    "category": "상태",
    "pp": 15
  },
  {
    "id": 672,
    "nameKo": "독실",
    "nameEn": "toxic-thread",
    "type": "독",
    "category": "상태",
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 673,
    "nameKo": "예민해지기",
    "nameEn": "laser-focus",
    "type": "노말",
    "category": "상태",
    "pp": 30
  },
  {
    "id": 674,
    "nameKo": "어시스트기어",
    "nameEn": "gear-up",
    "type": "강철",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 675,
    "nameKo": "지옥찌르기",
    "nameEn": "throat-chop",
    "type": "악",
    "category": "물리",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 676,
    "nameKo": "꽃가루경단",
    "nameEn": "pollen-puff",
    "type": "벌레",
    "category": "특수",
    "power": 90,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 677,
    "nameKo": "앵커숏",
    "nameEn": "anchor-shot",
    "type": "강철",
    "category": "물리",
    "power": 80,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 678,
    "nameKo": "사이코필드",
    "nameEn": "psychic-terrain",
    "type": "에스퍼",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 679,
    "nameKo": "덤벼들기",
    "nameEn": "lunge",
    "type": "벌레",
    "category": "물리",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 680,
    "nameKo": "불꽃채찍",
    "nameEn": "fire-lash",
    "type": "불꽃",
    "category": "물리",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 681,
    "nameKo": "기어오르기",
    "nameEn": "power-trip",
    "type": "악",
    "category": "물리",
    "power": 20,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 682,
    "nameKo": "불사르기",
    "nameEn": "burn-up",
    "type": "불꽃",
    "category": "특수",
    "power": 130,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 683,
    "nameKo": "스피드스웹",
    "nameEn": "speed-swap",
    "type": "에스퍼",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 684,
    "nameKo": "스마트호른",
    "nameEn": "smart-strike",
    "type": "강철",
    "category": "물리",
    "power": 70,
    "pp": 10
  },
  {
    "id": 685,
    "nameKo": "정화",
    "nameEn": "purify",
    "type": "독",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 686,
    "nameKo": "잠재댄스",
    "nameEn": "revelation-dance",
    "type": "노말",
    "category": "특수",
    "power": 90,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 687,
    "nameKo": "코어퍼니셔",
    "nameEn": "core-enforcer",
    "type": "드래곤",
    "category": "특수",
    "power": 100,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 689,
    "nameKo": "지휘",
    "nameEn": "instruct",
    "type": "에스퍼",
    "category": "상태",
    "pp": 15
  },
  {
    "id": 692,
    "nameKo": "드래곤해머",
    "nameEn": "dragon-hammer",
    "type": "드래곤",
    "category": "물리",
    "power": 90,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 693,
    "nameKo": "세차게휘두르기",
    "nameEn": "brutal-swing",
    "type": "악",
    "category": "물리",
    "power": 60,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 694,
    "nameKo": "오로라베일",
    "nameEn": "aurora-veil",
    "type": "얼음",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 704,
    "nameKo": "트랩셸",
    "nameEn": "shell-trap",
    "type": "불꽃",
    "category": "특수",
    "power": 150,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 705,
    "nameKo": "플뢰르캐논",
    "nameEn": "fleur-cannon",
    "type": "페어리",
    "category": "특수",
    "power": 130,
    "accuracy": 90,
    "pp": 5
  },
  {
    "id": 706,
    "nameKo": "사이코팽",
    "nameEn": "psychic-fangs",
    "type": "에스퍼",
    "category": "물리",
    "power": 85,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 707,
    "nameKo": "분함의발구르기",
    "nameEn": "stomping-tantrum",
    "type": "땅",
    "category": "물리",
    "power": 75,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 708,
    "nameKo": "섀도본",
    "nameEn": "shadow-bone",
    "type": "고스트",
    "category": "물리",
    "power": 85,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 709,
    "nameKo": "액셀록",
    "nameEn": "accelerock",
    "type": "바위",
    "category": "물리",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 710,
    "nameKo": "아쿠아브레이크",
    "nameEn": "liquidation",
    "type": "물",
    "category": "물리",
    "power": 85,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 711,
    "nameKo": "프리즘레이저",
    "nameEn": "prismatic-laser",
    "type": "에스퍼",
    "category": "특수",
    "power": 160,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 712,
    "nameKo": "섀도스틸",
    "nameEn": "spectral-thief",
    "type": "고스트",
    "category": "물리",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 715,
    "nameKo": "눈물그렁그렁",
    "nameEn": "tearful-look",
    "type": "노말",
    "category": "상태",
    "pp": 20
  },
  {
    "id": 716,
    "nameKo": "찌리리따끔따끔",
    "nameEn": "zing-zap",
    "type": "전기",
    "category": "물리",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 717,
    "nameKo": "자연의분노",
    "nameEn": "natures-madness",
    "type": "페어리",
    "category": "특수",
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 720,
    "nameKo": "깜짝헤드",
    "nameEn": "mind-blown",
    "type": "불꽃",
    "category": "특수",
    "power": 150,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 721,
    "nameKo": "플라스마피스트",
    "nameEn": "plasma-fists",
    "type": "전기",
    "category": "물리",
    "power": 100,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 722,
    "nameKo": "포톤가이저",
    "nameEn": "photon-geyser",
    "type": "에스퍼",
    "category": "특수",
    "power": 100,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 742,
    "nameKo": "더블펀처",
    "nameEn": "double-iron-bash",
    "type": "강철",
    "category": "물리",
    "power": 60,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 744,
    "nameKo": "다이맥스포",
    "nameEn": "dynamax-cannon",
    "type": "드래곤",
    "category": "특수",
    "power": 100,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 746,
    "nameKo": "물고버티기",
    "nameEn": "jaw-lock",
    "type": "악",
    "category": "물리",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 747,
    "nameKo": "볼가득넣기",
    "nameEn": "stuff-cheeks",
    "type": "노말",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 748,
    "nameKo": "배수의진",
    "nameEn": "no-retreat",
    "type": "격투",
    "category": "상태",
    "pp": 5
  },
  {
    "id": 750,
    "nameKo": "마법가루",
    "nameEn": "magic-powder",
    "type": "에스퍼",
    "category": "상태",
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 754,
    "nameKo": "전격부리",
    "nameEn": "bolt-beak",
    "type": "전기",
    "category": "물리",
    "power": 85,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 755,
    "nameKo": "아가미물기",
    "nameEn": "fishious-rend",
    "type": "물",
    "category": "물리",
    "power": 85,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 756,
    "nameKo": "코트체인지",
    "nameEn": "court-change",
    "type": "노말",
    "category": "상태",
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 775,
    "nameKo": "소울비트",
    "nameEn": "clangorous-soul",
    "type": "드래곤",
    "category": "상태",
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 776,
    "nameKo": "바디프레스",
    "nameEn": "body-press",
    "type": "격투",
    "category": "물리",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 779,
    "nameKo": "집게덫",
    "nameEn": "snap-trap",
    "type": "풀",
    "category": "물리",
    "power": 35,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 783,
    "nameKo": "오라휠",
    "nameEn": "aura-wheel",
    "type": "전기",
    "category": "물리",
    "power": 110,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 784,
    "nameKo": "와이드브레이커",
    "nameEn": "breaking-swipe",
    "type": "드래곤",
    "category": "물리",
    "power": 60,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 785,
    "nameKo": "가지찌르기",
    "nameEn": "branch-poke",
    "type": "풀",
    "category": "물리",
    "power": 40,
    "accuracy": 100,
    "pp": 40
  },
  {
    "id": 786,
    "nameKo": "오버드라이브",
    "nameEn": "overdrive",
    "type": "전기",
    "category": "특수",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 787,
    "nameKo": "사과산",
    "nameEn": "apple-acid",
    "type": "풀",
    "category": "특수",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 788,
    "nameKo": "G의힘",
    "nameEn": "grav-apple",
    "type": "풀",
    "category": "물리",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 789,
    "nameKo": "소울크래시",
    "nameEn": "spirit-break",
    "type": "페어리",
    "category": "물리",
    "power": 75,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 790,
    "nameKo": "원더스팀",
    "nameEn": "strange-steam",
    "type": "페어리",
    "category": "특수",
    "power": 90,
    "accuracy": 95,
    "pp": 10
  },
  {
    "id": 791,
    "nameKo": "생명의물방울",
    "nameEn": "life-dew",
    "type": "물",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 793,
    "nameKo": "사죄의찌르기",
    "nameEn": "false-surrender",
    "type": "악",
    "category": "물리",
    "power": 80,
    "pp": 10
  },
  {
    "id": 794,
    "nameKo": "스타어설트",
    "nameEn": "meteor-assault",
    "type": "격투",
    "category": "물리",
    "power": 150,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 795,
    "nameKo": "무한다이빔",
    "nameEn": "eternabeam",
    "type": "드래곤",
    "category": "특수",
    "power": 160,
    "accuracy": 90,
    "pp": 5
  },
  {
    "id": 796,
    "nameKo": "철제광선",
    "nameEn": "steel-beam",
    "type": "강철",
    "category": "특수",
    "power": 140,
    "accuracy": 95,
    "pp": 5
  },
  {
    "id": 797,
    "nameKo": "와이드포스",
    "nameEn": "expanding-force",
    "type": "에스퍼",
    "category": "특수",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 798,
    "nameKo": "아이언롤러",
    "nameEn": "steel-roller",
    "type": "강철",
    "category": "물리",
    "power": 130,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 799,
    "nameKo": "스케일샷",
    "nameEn": "scale-shot",
    "type": "드래곤",
    "category": "물리",
    "power": 25,
    "accuracy": 90,
    "pp": 20
  },
  {
    "id": 800,
    "nameKo": "메테오빔",
    "nameEn": "meteor-beam",
    "type": "바위",
    "category": "특수",
    "power": 120,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 802,
    "nameKo": "미스트버스트",
    "nameEn": "misty-explosion",
    "type": "페어리",
    "category": "특수",
    "power": 100,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 803,
    "nameKo": "그래스슬라이더",
    "nameEn": "grassy-glide",
    "type": "풀",
    "category": "물리",
    "power": 55,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 804,
    "nameKo": "라이징볼트",
    "nameEn": "rising-voltage",
    "type": "전기",
    "category": "특수",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 805,
    "nameKo": "대지의파동",
    "nameEn": "terrain-pulse",
    "type": "노말",
    "category": "특수",
    "power": 50,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 806,
    "nameKo": "엄습하는일격",
    "nameEn": "skitter-smack",
    "type": "벌레",
    "category": "물리",
    "power": 70,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 807,
    "nameKo": "질투의불꽃",
    "nameEn": "burning-jealousy",
    "type": "불꽃",
    "category": "특수",
    "power": 70,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 808,
    "nameKo": "분풀이",
    "nameEn": "lash-out",
    "type": "악",
    "category": "물리",
    "power": 75,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 809,
    "nameKo": "폴터가이스트",
    "nameEn": "poltergeist",
    "type": "고스트",
    "category": "물리",
    "power": 110,
    "accuracy": 90,
    "pp": 5
  },
  {
    "id": 811,
    "nameKo": "코칭",
    "nameEn": "coaching",
    "type": "격투",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 812,
    "nameKo": "퀵턴",
    "nameEn": "flip-turn",
    "type": "물",
    "category": "물리",
    "power": 60,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 813,
    "nameKo": "트리플악셀",
    "nameEn": "triple-axel",
    "type": "얼음",
    "category": "물리",
    "power": 20,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 814,
    "nameKo": "더블윙",
    "nameEn": "dual-wingbeat",
    "type": "비행",
    "category": "물리",
    "power": 40,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 815,
    "nameKo": "열사의대지",
    "nameEn": "scorching-sands",
    "type": "땅",
    "category": "특수",
    "power": 70,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 816,
    "nameKo": "정글힐",
    "nameEn": "jungle-healing",
    "type": "풀",
    "category": "상태",
    "pp": 10
  },
  {
    "id": 819,
    "nameKo": "썬더프리즌",
    "nameEn": "thunder-cage",
    "type": "전기",
    "category": "특수",
    "power": 80,
    "accuracy": 90,
    "pp": 15
  },
  {
    "id": 820,
    "nameKo": "드래곤에너지",
    "nameEn": "dragon-energy",
    "type": "드래곤",
    "category": "특수",
    "power": 150,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 821,
    "nameKo": "얼어붙는시선",
    "nameEn": "freezing-glare",
    "type": "에스퍼",
    "category": "특수",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 822,
    "nameKo": "타오르는분노",
    "nameEn": "fiery-wrath",
    "type": "악",
    "category": "특수",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 823,
    "nameKo": "천둥차기",
    "nameEn": "thunderous-kick",
    "type": "격투",
    "category": "물리",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 831,
    "nameKo": "springtide-storm",
    "nameEn": "springtide-storm",
    "type": "페어리",
    "category": "특수",
    "power": 100,
    "accuracy": 80,
    "pp": 5
  },
  {
    "id": 832,
    "nameKo": "mystical-power",
    "nameEn": "mystical-power",
    "type": "에스퍼",
    "category": "특수",
    "power": 70,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 833,
    "nameKo": "raging-fury",
    "nameEn": "raging-fury",
    "type": "불꽃",
    "category": "물리",
    "power": 120,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 834,
    "nameKo": "wave-crash",
    "nameEn": "wave-crash",
    "type": "물",
    "category": "물리",
    "power": 120,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 836,
    "nameKo": "mountain-gale",
    "nameEn": "mountain-gale",
    "type": "얼음",
    "category": "물리",
    "power": 100,
    "accuracy": 85,
    "pp": 10
  },
  {
    "id": 838,
    "nameKo": "headlong-rush",
    "nameEn": "headlong-rush",
    "type": "땅",
    "category": "물리",
    "power": 120,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 839,
    "nameKo": "barb-barrage",
    "nameEn": "barb-barrage",
    "type": "독",
    "category": "물리",
    "power": 60,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 841,
    "nameKo": "bitter-malice",
    "nameEn": "bitter-malice",
    "type": "고스트",
    "category": "특수",
    "power": 75,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 842,
    "nameKo": "shelter",
    "nameEn": "shelter",
    "type": "강철",
    "category": "상태",
    "power": 0,
    "pp": 10
  },
  {
    "id": 846,
    "nameKo": "bleakwind-storm",
    "nameEn": "bleakwind-storm",
    "type": "비행",
    "category": "특수",
    "power": 100,
    "accuracy": 80,
    "pp": 10
  },
  {
    "id": 847,
    "nameKo": "wildbolt-storm",
    "nameEn": "wildbolt-storm",
    "type": "전기",
    "category": "특수",
    "power": 100,
    "accuracy": 80,
    "pp": 10
  },
  {
    "id": 848,
    "nameKo": "sandsear-storm",
    "nameEn": "sandsear-storm",
    "type": "땅",
    "category": "특수",
    "power": 100,
    "accuracy": 80,
    "pp": 10
  },
  {
    "id": 849,
    "nameKo": "lunar-blessing",
    "nameEn": "lunar-blessing",
    "type": "에스퍼",
    "category": "상태",
    "power": 0,
    "pp": 5
  },
  {
    "id": 850,
    "nameKo": "take-heart",
    "nameEn": "take-heart",
    "type": "에스퍼",
    "category": "상태",
    "power": 0,
    "pp": 10
  },
  {
    "id": 851,
    "nameKo": "tera-blast",
    "nameEn": "tera-blast",
    "type": "노말",
    "category": "특수",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 853,
    "nameKo": "axe-kick",
    "nameEn": "axe-kick",
    "type": "격투",
    "category": "물리",
    "power": 120,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 856,
    "nameKo": "order-up",
    "nameEn": "order-up",
    "type": "드래곤",
    "category": "물리",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 857,
    "nameKo": "jet-punch",
    "nameEn": "jet-punch",
    "type": "물",
    "category": "물리",
    "power": 60,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 859,
    "nameKo": "spin-out",
    "nameEn": "spin-out",
    "type": "강철",
    "category": "물리",
    "power": 100,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 860,
    "nameKo": "population-bomb",
    "nameEn": "population-bomb",
    "type": "노말",
    "category": "물리",
    "power": 20,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 861,
    "nameKo": "ice-spinner",
    "nameEn": "ice-spinner",
    "type": "얼음",
    "category": "물리",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 864,
    "nameKo": "salt-cure",
    "nameEn": "salt-cure",
    "type": "바위",
    "category": "물리",
    "power": 40,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 865,
    "nameKo": "triple-dive",
    "nameEn": "triple-dive",
    "type": "물",
    "category": "물리",
    "power": 30,
    "accuracy": 95,
    "pp": 10
  },
  {
    "id": 868,
    "nameKo": "fillet-away",
    "nameEn": "fillet-away",
    "type": "노말",
    "category": "상태",
    "power": 0,
    "pp": 10
  },
  {
    "id": 873,
    "nameKo": "raging-bull",
    "nameEn": "raging-bull",
    "type": "노말",
    "category": "물리",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 874,
    "nameKo": "make-it-rain",
    "nameEn": "make-it-rain",
    "type": "강철",
    "category": "특수",
    "power": 120,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 875,
    "nameKo": "사이코블레이드",
    "nameEn": "psyblade",
    "type": "에스퍼",
    "category": "물리",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 876,
    "nameKo": "하이드로스팀",
    "nameEn": "hydro-steam",
    "type": "물",
    "category": "특수",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 877,
    "nameKo": "ruination",
    "nameEn": "ruination",
    "type": "악",
    "category": "특수",
    "power": 1,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 878,
    "nameKo": "collision-course",
    "nameEn": "collision-course",
    "type": "격투",
    "category": "물리",
    "power": 100,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 879,
    "nameKo": "electro-drift",
    "nameEn": "electro-drift",
    "type": "전기",
    "category": "특수",
    "power": 100,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 880,
    "nameKo": "shed-tail",
    "nameEn": "shed-tail",
    "type": "노말",
    "category": "상태",
    "power": 0,
    "pp": 10
  },
  {
    "id": 882,
    "nameKo": "tidy-up",
    "nameEn": "tidy-up",
    "type": "노말",
    "category": "상태",
    "power": 0,
    "pp": 10
  },
  {
    "id": 883,
    "nameKo": "snowscape",
    "nameEn": "snowscape",
    "type": "얼음",
    "category": "상태",
    "power": 0,
    "pp": 10
  },
  {
    "id": 884,
    "nameKo": "pounce",
    "nameEn": "pounce",
    "type": "벌레",
    "category": "물리",
    "power": 50,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 885,
    "nameKo": "trailblaze",
    "nameEn": "trailblaze",
    "type": "풀",
    "category": "물리",
    "power": 50,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 886,
    "nameKo": "chilling-water",
    "nameEn": "chilling-water",
    "type": "물",
    "category": "특수",
    "power": 50,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 887,
    "nameKo": "hyper-drill",
    "nameEn": "hyper-drill",
    "type": "노말",
    "category": "물리",
    "power": 100,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 888,
    "nameKo": "twin-beam",
    "nameEn": "twin-beam",
    "type": "에스퍼",
    "category": "특수",
    "power": 40,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 889,
    "nameKo": "rage-fist",
    "nameEn": "rage-fist",
    "type": "고스트",
    "category": "물리",
    "power": 50,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 890,
    "nameKo": "armor-cannon",
    "nameEn": "armor-cannon",
    "type": "불꽃",
    "category": "특수",
    "power": 120,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 891,
    "nameKo": "bitter-blade",
    "nameEn": "bitter-blade",
    "type": "불꽃",
    "category": "물리",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 892,
    "nameKo": "double-shock",
    "nameEn": "double-shock",
    "type": "전기",
    "category": "물리",
    "power": 120,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 894,
    "nameKo": "comeuppance",
    "nameEn": "comeuppance",
    "type": "악",
    "category": "물리",
    "power": 1,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 895,
    "nameKo": "aqua-cutter",
    "nameEn": "aqua-cutter",
    "type": "물",
    "category": "물리",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 903,
    "nameKo": "syrup-bomb",
    "nameEn": "syrup-bomb",
    "type": "풀",
    "category": "특수",
    "power": 60,
    "accuracy": 85,
    "pp": 10
  },
  {
    "id": 904,
    "nameKo": "ivy-cudgel",
    "nameEn": "ivy-cudgel",
    "type": "풀",
    "category": "물리",
    "power": 100,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 906,
    "nameKo": "테라클러스터",
    "nameEn": "tera-starstorm",
    "type": "노말",
    "category": "특수",
    "power": 120,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 908,
    "nameKo": "화염의수호",
    "nameEn": "burning-bulwark",
    "type": "불꽃",
    "category": "상태",
    "power": 0,
    "accuracy": 0,
    "pp": 10
  },
  {
    "id": 909,
    "nameKo": "질풍신뢰",
    "nameEn": "thunderclap",
    "type": "전기",
    "category": "특수",
    "power": 70,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 910,
    "nameKo": "파워풀에지",
    "nameEn": "mighty-cleave",
    "type": "바위",
    "category": "물리",
    "power": 95,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 911,
    "nameKo": "타키온커터",
    "nameEn": "tachyon-cutter",
    "type": "강철",
    "category": "특수",
    "power": 50,
    "accuracy": 0,
    "pp": 10
  },
  {
    "id": 912,
    "nameKo": "하드프레스",
    "nameEn": "hard-press",
    "type": "강철",
    "category": "물리",
    "power": 0,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 913,
    "nameKo": "드래곤옐",
    "nameEn": "dragon-cheer",
    "type": "드래곤",
    "category": "상태",
    "power": 0,
    "accuracy": 0,
    "pp": 15
  },
  {
    "id": 914,
    "nameKo": "매혹의보이스",
    "nameEn": "alluring-voice",
    "type": "페어리",
    "category": "특수",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 915,
    "nameKo": "열불내기",
    "nameEn": "temper-flare",
    "type": "불꽃",
    "category": "물리",
    "power": 75,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 916,
    "nameKo": "썬더다이브",
    "nameEn": "supercell-slam",
    "type": "전기",
    "category": "물리",
    "power": 100,
    "accuracy": 95,
    "pp": 15
  },
  {
    "id": 917,
    "nameKo": "사이코노이즈",
    "nameEn": "psychic-noise",
    "type": "에스퍼",
    "category": "특수",
    "power": 75,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 918,
    "nameKo": "기선제압",
    "nameEn": "upper-hand",
    "type": "격투",
    "category": "물리",
    "power": 65,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 919,
    "nameKo": "악독사슬",
    "nameEn": "malignant-chain",
    "type": "독",
    "category": "특수",
    "power": 100,
    "accuracy": 100,
    "pp": 5
  }
]
