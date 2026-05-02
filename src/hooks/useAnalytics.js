import { useEffect, useRef, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import {
  trackPageView,
  trackTimeOnPage,
  trackEvent,
  trackClick as engineTrackClick,
  trackConversion as engineTrackConversion,
} from '../lib/analyticsEngine'

export function usePageAnalytics() {
  const location = useLocation()
  const startTimeRef = useRef(null)

  useEffect(() => {
    startTimeRef.current = Date.now()
    trackPageView(location.pathname + location.search)
    return () => {
      if (startTimeRef.current) {
        trackTimeOnPage(startTimeRef.current)
      }
    }
  }, [location.pathname, location.search])
}

export function useScrollDepth() {
  const reportedRef = useRef(new Set())

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight <= 0) return
      const percent = Math.floor((scrollTop / docHeight) * 100)
      const milestones = [25, 50, 75, 100]
      milestones.forEach((m) => {
        if (percent >= m && !reportedRef.current.has(m)) {
          reportedRef.current.add(m)
          trackEvent('scroll_depth', { percent: m })
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}

export function useClickTracker(elementName) {
  const handleClick = useCallback(
    (context = {}) => {
      engineTrackClick(elementName, context)
    },
    [elementName]
  )
  return handleClick
}

export function useConversionTracker(conversionName) {
  const track = useCallback(
    (value = 1) => {
      engineTrackConversion(conversionName, value)
    },
    [conversionName]
  )
  return track
}
