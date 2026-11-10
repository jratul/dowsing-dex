import { useEffect, useState } from 'react'

/**
 * `active` 가 `delay` 밀리초 넘게 이어질 때만 true 가 된다.
 *
 * 로딩 표시에 쓴다. 청크가 캐시에 있으면 전환이 수십 ms 만에 끝나는데, 그때마다 스피너를
 * 띄우면 화면이 깜빡이기만 하고 오히려 거슬린다. 느릴 때만 보여 주려고 한 박자 늦춘다.
 */
export function useDelayedFlag(active: boolean, delay = 150): boolean {
  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (!active) {
      setShown(false)
      return
    }
    const timer = setTimeout(() => setShown(true), delay)
    return () => clearTimeout(timer)
  }, [active, delay])

  return shown
}
