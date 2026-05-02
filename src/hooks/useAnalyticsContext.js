import { useContext } from 'react'
import { AnalyticsContext } from '../context/analyticsContext'

export function useAnalyticsContext() {
  const ctx = useContext(AnalyticsContext)
  if (!ctx) throw new Error('useAnalyticsContext must be used within AnalyticsProvider')
  return ctx
}
