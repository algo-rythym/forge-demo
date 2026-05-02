import { useState, useCallback, useEffect } from 'react'
import { AnalyticsContext } from './analyticsContext'
import { getAggregatedStats } from '../lib/analyticsEngine'

export function AnalyticsProvider({ children }) {
  const [stats, setStats] = useState(() => getAggregatedStats())

  const refresh = useCallback(() => {
    setStats(getAggregatedStats())
  }, [])

  useEffect(() => {
    const id = setInterval(refresh, 2000)
    return () => clearInterval(id)
  }, [refresh])

  return (
    <AnalyticsContext.Provider value={{ stats, refresh }}>
      {children}
    </AnalyticsContext.Provider>
  )
}
