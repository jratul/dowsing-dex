import { Link } from 'react-router-dom'
import { findMoveByName } from '../../data/sample/moves.sample'
import { cn } from '../../lib/cn'

export interface MoveLinkProps {
  /** 한국어 기술명. 정식 명칭이어야 데이터에서 찾을 수 있다. */
  name: string
  /** 화면에 보일 텍스트. 생략하면 name 을 그대로 쓴다. */
  label?: string
  className?: string
}

/**
 * 공략 본문의 기술명을 기술 목록(/moves)의 해당 기술로 연결한다.
 *
 * - 기술 목록은 1,000종이 넘어 단순 이동으로는 찾기 어렵다. `?move=<id>`를 붙여
 *   MovesPage가 그 기술을 검색·펼친 상태로 열도록 한다.
 * - 데이터에 없는 이름(비공식 표기, "보조 기술" 같은 서술)은 링크로 만들지 않고
 *   글자만 그대로 둔다. 죽은 링크를 만드는 것보다 낫다.
 */
export function MoveLink({ name, label, className }: MoveLinkProps) {
  const move = findMoveByName(name)
  const text = label ?? name

  if (!move) return <>{text}</>

  return (
    <Link
      to={`/moves?move=${move.id}`}
      title={`${move.nameKo} — ${move.type} / ${move.category}${move.power ? ` / 위력 ${move.power}` : ''}`}
      className={cn('underline decoration-border underline-offset-2 hover:decoration-current', className)}
    >
      {text}
    </Link>
  )
}
