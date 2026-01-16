export function severityLabel(score: number) {
  if (score >= 8) return 'high'
  if (score >= 4) return 'medium'
  return 'low'
}
