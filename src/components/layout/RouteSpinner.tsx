/**
 * 페이지 전환 중 컨텐츠 영역에 띄우는 로딩 표시.
 *
 * 화면 높이를 어느 정도 차지해야 헤더만 남고 본문이 사라진 것처럼 보이지 않는다.
 */
export function RouteSpinner() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3" role="status" aria-live="polite">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-border border-t-brand-red" />
      <span className="text-sm font-bold text-ink-muted">불러오는 중...</span>
    </div>
  )
}
