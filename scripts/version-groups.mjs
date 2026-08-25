// 세대별 게임판 라벨 ↔ PokeAPI version group 매핑.
// fetch-pokedex.mjs(전체 생성)와 refresh-levelup-learnsets.mjs(레벨업만 재동기화)가
// 같은 정의를 써야 두 스크립트의 산출물이 어긋나지 않으므로 여기 한 곳에만 둔다.
export const VERSIONS_BY_GEN = {
  1: [
    { label: '레드·블루', groups: ['red-blue'] },
    { label: '옐로우', groups: ['yellow'] },
  ],
  2: [
    { label: '골드·실버', groups: ['gold-silver'] },
    { label: '크리스탈', groups: ['crystal'] },
  ],
  3: [
    { label: '루비·사파이어', groups: ['ruby-sapphire'] },
    { label: '에메랄드', groups: ['emerald'] },
    { label: '파이어레드·리프그린', groups: ['firered-leafgreen'] },
  ],
  4: [
    { label: '다이아몬드·펄', groups: ['diamond-pearl'] },
    { label: '플래티넘', groups: ['platinum'] },
    { label: '하트골드·소울실버', groups: ['heartgold-soulsilver'] },
  ],
  5: [
    { label: '블랙·화이트', groups: ['black-white'] },
    { label: '블랙2·화이트2', groups: ['black-2-white-2'] },
  ],
  6: [
    { label: 'X·Y', groups: ['x-y'] },
    { label: '오메가루비·알파사파이어', groups: ['omega-ruby-alpha-sapphire'] },
  ],
  7: [
    { label: '썬·문', groups: ['sun-moon'] },
    { label: '울트라썬·울트라문', groups: ['ultra-sun-ultra-moon'] },
    { label: '레츠고 피카츄·이브이', groups: ['lets-go-pikachu-lets-go-eevee'] },
  ],
  8: [
    { label: '소드·실드', groups: ['sword-shield', 'the-isle-of-armor', 'the-crown-tundra'] },
    { label: '브릴리언트다이아몬드·샤이닝펄', groups: ['brilliant-diamond-shining-pearl'] },
    { label: '레전드 아르세우스', groups: ['legends-arceus'] },
  ],
  9: [{ label: '스칼렛·바이올렛', groups: ['scarlet-violet', 'the-teal-mask', 'the-indigo-disk'] }],
}

// 한 기술을 여러 레벨에서 배우는 포켓몬이 있다(HGSS 전룡의 울음소리 Lv.1·Lv.5).
// label이 version group을 여러 개 묶는 경우(소드·실드 등) 같은 레벨이 중복되므로 레벨 기준으로 추린다.
export function levelUpLevelsFor(versionGroupDetails, groups) {
  return [
    ...new Set(
      versionGroupDetails
        .filter((d) => groups.includes(d.version_group.name))
        .filter((d) => d.move_learn_method.name === 'level-up' && d.level_learned_at > 0)
        .map((d) => d.level_learned_at),
    ),
  ].sort((a, b) => a - b)
}
