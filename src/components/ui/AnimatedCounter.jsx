import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'

export function AnimatedCounter({ value, suffix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const numericRef = useRef(0)
  const [display, setDisplay] = useState(() => {
    const numeric = parseFloat(value.replace(/[^0-9.]/g, ''))
    if (Number.isNaN(numeric)) return value
    return '0'
  })

  useEffect(() => {
    if (!isInView) return
    const numeric = parseFloat(value.replace(/[^0-9.]/g, ''))
    if (Number.isNaN(numeric)) return
    numericRef.current = numeric
    const duration = 1500
    const start = performance.now()
    let rafId
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(numericRef.current * eased)
      setDisplay(String(current))
      if (progress < 1) {
        rafId = requestAnimationFrame(tick)
      }
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}
