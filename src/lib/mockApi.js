export function submitContactForm(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('[MockAPI] Contact form submitted:', data)
      resolve({ success: true, id: `msg_${Date.now()}`, timestamp: new Date().toISOString() })
    }, 1200)
  })
}

export function rsvpToEvent(eventName, email) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('[MockAPI] RSVP:', eventName, email)
      resolve({ success: true, event: eventName, email })
    }, 800)
  })
}

export function fetchAnalyticsSummary() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        totalSessions: 1247,
        totalPageViews: 3892,
        avgTimeOnPage: '2m 14s',
        topPages: [
          { path: '/', views: 1890 },
          { path: '/gallery', views: 643 },
          { path: '/contact', views: 521 },
          { path: '/about', views: 438 },
          { path: '/events', views: 400 },
        ],
      })
    }, 600)
  })
}
