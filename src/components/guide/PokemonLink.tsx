import { Link } from 'react-router-dom'
import { findSamplePokemon } from '../../data/sample/pokemon.sample'

export interface PokemonLinkProps {
  id: number
  label?: string
  /** 바로 옆에서 이미 스프라이트를 크게 보여주는 자리에서는 꺼서 중복 노출을 막는다. */
  showSprite?: boolean
}

/**
 * 본문 중간에 끼워 넣는 인라인 포켓몬 링크. 아이콘 스프라이트 + 이름을 함께 보여준다.
 *
 * 정렬 주의:
 * - inline-flex로 감싸면 스프라이트가 인라인 박스를 키워 링크 전체가 주변 문장보다 위로
 *   밀린다. 링크는 순수 인라인으로 두고 스프라이트만 vertical-align으로 맞춘다.
 * - `align-middle`은 "요소 중심을 텍스트 중심에" 맞추는 게 아니라 "baseline + x-height/2"에
 *   맞춘다. x-height는 라틴 소문자 x 기준이라 한글에서는 글자 중심보다 낮게 잡혀 스프라이트가
 *   아래로 처진다. 그래서 baseline 기준값을 직접 준다.
 * - 실측 결과 한글 텍스트의 시각적 중심은 baseline 위 0.457em이므로,
 *   `vertical-align = 0.457em - (스프라이트 크기 / 2)`. 크기를 바꾸면 이 식으로 다시 구한다.
 *   현재 2em(=폰트 12px에서 24px) → 0.457 - 1 = -0.543em.
 * - 크기·정렬 모두 em이라 폰트 크기가 다른 사용처에서도 같은 비율로 맞는다.
 */
export function PokemonLink({ id, label, showSprite = true }: PokemonLinkProps) {
  const pokemon = findSamplePokemon(id)
  return (
    <Link to={`/pokemon/${id}`} className="font-bold text-brand-red hover:underline">
      {showSprite && pokemon.spriteUrl && (
        <img
          src={pokemon.spriteUrl}
          alt=""
          width={24}
          height={24}
          // 수집 가이드 한 페이지에 이 링크가 1,700개 가까이 깔린다. eager 로 두면
          // 스프라이트를 전부 즉시 받아 스크롤이 끊긴다. 폭·높이가 고정이라
          // lazy 로 바꿔도 레이아웃이 밀리지 않는다.
          loading="lazy"
          decoding="async"
          style={{ imageRendering: 'pixelated' }}
          className="mr-0.5 inline-block h-[2em] w-[2em] align-[-0.543em]"
        />
      )}
      {label ?? pokemon.nameKo}
    </Link>
  )
}
