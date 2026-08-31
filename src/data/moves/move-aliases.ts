// 세대가 바뀌면서 한국어 정식 명칭이 달라진 기술.
//
// 생성 데이터(all-moves.generated.ts)는 PokeAPI 를 따르므로 **가장 최근 명칭**만 담는다.
// 그런데 공략은 그 게임이 나온 세대의 표기를 써야 한다 — 하트골드를 하는 사람의 화면에는
// 「락클라임」이라고 뜨는데 공략이 「록클라임」이라고 적혀 있으면 그게 오히려 오표기다.
//
// 그래서 공략 본문은 세대에 맞는 이름을 쓰고, 링크·검사기는 이 표로 현재 이름을 되찾는다.
// (아이템에도 같은 일이 있다 — 무지갯빛날개/은빛날개가 9세대에서 …깃털로 바뀌었다.
//  WORD.md 의 「전설 관련 아이템」 표 참고.)

export interface MoveAlias {
  /** 생성 데이터에 들어 있는 현재 이름 */
  canonical: string
  /** 이 옛 이름을 쓰는 세대 */
  gens: number[]
  note: string
}

export const MOVE_NAME_ALIASES: Readonly<Record<string, MoveAlias>> = {
  락클라임: {
    canonical: '록클라임',
    gens: [4, 5, 6, 7, 8],
    note: 'Rock Climb — 4~8세대는 락클라임, 9세대부터 록클라임',
  },
}

/** 옛 표기면 현재 이름을, 아니면 입력 그대로 돌려준다. */
export function canonicalMoveName(nameKo: string): string {
  return MOVE_NAME_ALIASES[nameKo]?.canonical ?? nameKo
}
