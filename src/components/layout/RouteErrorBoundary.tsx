import { useEffect } from 'react'
import { useRouteError } from 'react-router-dom'

function isChunkError(error: unknown): boolean {
  return (
    error instanceof TypeError &&
    error.message.includes('Failed to fetch dynamically imported module')
  )
}

export function RouteErrorBoundary() {
  const error = useRouteError()
  const chunkFailed = isChunkError(error)

  useEffect(() => {
    if (!chunkFailed) return
    // 무한 새로고침 방지: 이미 reload를 한 번 시도했으면 멈춘다.
    const already = sessionStorage.getItem('chunk-reload')
    if (!already) {
      sessionStorage.setItem('chunk-reload', '1')
      window.location.reload()
    } else {
      sessionStorage.removeItem('chunk-reload')
    }
  }, [chunkFailed])

  if (chunkFailed) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center gap-3 p-8 text-center">
        <p className="text-sm text-ink-faint">새 버전이 배포되었습니다. 잠시 후 새로고침합니다…</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-3 p-8 text-center">
      <p className="text-sm font-bold text-ink">페이지를 불러오지 못했습니다.</p>
      <a href="/" className="text-sm font-bold text-brand-red hover:underline">
        홈으로 돌아가기
      </a>
    </div>
  )
}
