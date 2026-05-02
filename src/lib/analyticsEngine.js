const STORAGE_KEY = 'forge_analytics_v1'
const SESSION_TIMEOUT_MS = 30 * 60 * 1000

function getStore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : defaultStore()
  } catch {
    return defaultStore()
  }
}

function defaultStore() {
  return {
    sessions: [],
    events: [],
    abTests: {},
    sessionStart: null,
    currentSessionId: null,
  }
}

function saveStore(store) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store))
  } catch {
    // ignore storage errors
  }
}

function generateId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
}

function ensureSession() {
  const store = getStore()
  const now = Date.now()
  const lastSession = store.sessions[store.sessions.length - 1]
  const isNewSession = !lastSession || (now - lastSession.lastActivity > SESSION_TIMEOUT_MS)

  if (isNewSession) {
    const sessionId = generateId()
    store.sessions.push({
      id: sessionId,
      start: now,
      lastActivity: now,
      pageViews: [],
      totalTime: 0,
    })
    store.currentSessionId = sessionId
    store.sessionStart = now
  } else {
    lastSession.lastActivity = now
    store.currentSessionId = lastSession.id
  }

  saveStore(store)
  return store.currentSessionId
}

export function trackEvent(type, payload = {}) {
  const sessionId = ensureSession()
  const store = getStore()
  const event = {
    id: generateId(),
    sessionId,
    type,
    timestamp: Date.now(),
    payload,
  }
  store.events.push(event)

  // Keep only last 5000 events to avoid bloat
  if (store.events.length > 5000) {
    store.events = store.events.slice(-5000)
  }

  saveStore(store)
}

export function trackPageView(path) {
  const sessionId = ensureSession()
  const store = getStore()
  const session = store.sessions.find((s) => s.id === sessionId)
  if (session) {
    session.pageViews.push({ path, timestamp: Date.now() })
    session.lastActivity = Date.now()
  }
  saveStore(store)
  trackEvent('page_view', { path })
}

export function trackScrollDepth(depthPercent) {
  const sessionId = ensureSession()
  const store = getStore()
  const alreadyReported = store.events.some(
    (e) =>
      e.type === 'scroll_depth' &&
      e.payload.percent === depthPercent &&
      e.sessionId === sessionId
  )
  if (!alreadyReported) {
    trackEvent('scroll_depth', { percent: depthPercent })
  }
}

export function trackTimeOnPage(startTime) {
  const duration = Date.now() - startTime
  trackEvent('time_on_page', { duration })
  const store = getStore()
  const session = store.sessions.find((s) => s.id === store.currentSessionId)
  if (session) {
    session.totalTime += duration
    session.lastActivity = Date.now()
    saveStore(store)
  }
}

export function trackConversion(name, value = 1) {
  trackEvent('conversion', { name, value })
}

export function trackClick(element, context = {}) {
  trackEvent('click', { element, ...context })
}

export function getAnalyticsData() {
  return getStore()
}

export function exportAnalyticsJSON() {
  const data = getAnalyticsData()
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `forge-analytics-${new Date().toISOString().slice(0, 10)}.json`
  a.click()
  URL.revokeObjectURL(url)
}

export function clearAnalytics() {
  localStorage.removeItem(STORAGE_KEY)
}

export function getAggregatedStats() {
  const store = getStore()
  const events = store.events || []
  const sessions = store.sessions || []

  const pageViews = events.filter((e) => e.type === 'page_view')
  const clicks = events.filter((e) => e.type === 'click')
  const conversions = events.filter((e) => e.type === 'conversion')
  const scrollDepths = events.filter((e) => e.type === 'scroll_depth')
  const timeOnPages = events.filter((e) => e.type === 'time_on_page')

  const clickCounts = {}
  clicks.forEach((c) => {
    const key = c.payload.element || 'unknown'
    clickCounts[key] = (clickCounts[key] || 0) + 1
  })
  const topClicks = Object.entries(clickCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)

  const pageCounts = {}
  pageViews.forEach((p) => {
    const key = p.payload.path || '/'
    pageCounts[key] = (pageCounts[key] || 0) + 1
  })
  const topPages = Object.entries(pageCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)

  const scrollCounts = {}
  scrollDepths.forEach((s) => {
    const key = `${s.payload.percent}%`
    scrollCounts[key] = (scrollCounts[key] || 0) + 1
  })

  const avgTime = timeOnPages.length
    ? timeOnPages.reduce((sum, e) => sum + (e.payload.duration || 0), 0) / timeOnPages.length
    : 0

  const conversionCounts = {}
  conversions.forEach((c) => {
    const key = c.payload.name || 'unknown'
    conversionCounts[key] = (conversionCounts[key] || 0) + 1
  })
  const topConversions = Object.entries(conversionCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)

  return {
    totalSessions: sessions.length,
    totalPageViews: pageViews.length,
    totalClicks: clicks.length,
    totalConversions: conversions.length,
    avgTimeOnPage: avgTime,
    topClicks,
    topPages,
    scrollCounts,
    topConversions,
    abTests: store.abTests || {},
    raw: store,
  }
}

export function assignABVariant(testName, variants) {
  const store = getStore()
  if (!store.abTests) store.abTests = {}
  if (store.abTests[testName]) {
    return store.abTests[testName].variant
  }
  const variant = variants[Math.floor(Math.random() * variants.length)]
  store.abTests[testName] = { variant, impressions: 0, conversions: 0 }
  saveStore(store)
  return variant
}

export function trackABImpression(testName) {
  const store = getStore()
  if (store.abTests?.[testName]) {
    store.abTests[testName].impressions += 1
    saveStore(store)
  }
}

export function trackABConversion(testName) {
  const store = getStore()
  if (store.abTests?.[testName]) {
    store.abTests[testName].conversions += 1
    saveStore(store)
  }
}
