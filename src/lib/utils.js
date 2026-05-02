export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function formatDuration(ms) {
  const totalSeconds = Math.floor(ms / 1000)
  const mins = Math.floor(totalSeconds / 60)
  const secs = totalSeconds % 60
  if (mins === 0) return `${secs}s`
  return `${mins}m ${secs}s`
}

export function formatNumber(n) {
  return n.toLocaleString()
}
