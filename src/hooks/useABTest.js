import { useMemo, useCallback } from 'react'
import { assignABVariant, trackABImpression, trackABConversion } from '../lib/analyticsEngine'

export function useABTest(testName, variants) {
  const variant = useMemo(() => assignABVariant(testName, variants), [testName, variants])

  const recordImpression = useCallback(() => {
    trackABImpression(testName)
  }, [testName])

  const recordConversion = useCallback(() => {
    trackABConversion(testName)
  }, [testName])

  return { variant, recordImpression, recordConversion }
}
