import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Download, Trash2, RefreshCw, BarChart3, MousePointer, Eye, Timer } from 'lucide-react'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { useAnalyticsContext } from '../hooks/useAnalyticsContext'
import { usePageAnalytics, useScrollDepth } from '../hooks/useAnalytics'
import { exportAnalyticsJSON, clearAnalytics } from '../lib/analyticsEngine'
import { formatDuration } from '../lib/utils'

function StatCard({ label, value, icon: Icon }) {
  return (
    <div className="bg-forge-900/60 border border-forge-800 rounded-xl p-6 flex items-center gap-4 card-hover">
      <div className="w-10 h-10 bg-ember-500/10 rounded-lg flex items-center justify-center text-ember-500">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="text-2xl font-semibold text-forge-100">{value}</div>
        <div className="text-xs text-forge-500 uppercase tracking-wide">{label}</div>
      </div>
    </div>
  )
}

function BarRow({ label, value, max }) {
  const pct = max ? Math.round((value / max) * 100) : 0
  return (
    <div className="mb-3">
      <div className="flex items-center justify-between text-sm mb-1.5">
        <span className="text-forge-300">{label}</span>
        <span className="text-forge-100 font-medium">{value.toLocaleString()}</span>
      </div>
      <div className="w-full h-2 bg-forge-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-ember-600 to-ember-500 rounded-full transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

export function AnalyticsPage() {
  usePageAnalytics()
  useScrollDepth()
  const { stats, refresh } = useAnalyticsContext()
  const [cleared, setCleared] = useState(false)

  const handleClear = () => {
    if (window.confirm('Clear all local analytics data?')) {
      clearAnalytics()
      refresh()
      setCleared(true)
      setTimeout(() => setCleared(false), 2000)
    }
  }

  const topClickMax = stats.topClicks.length
    ? Math.max(...stats.topClicks.map((c) => c[1]))
    : 1

  const topPageMax = stats.topPages.length
    ? Math.max(...stats.topPages.map((p) => p[1]))
    : 1

  const scrollEntries = Object.entries(stats.scrollCounts || {}).sort(
    (a, b) => parseInt(a[0]) - parseInt(b[0])
  )
  const scrollMax = scrollEntries.length
    ? Math.max(...scrollEntries.map((s) => s[1]))
    : 1

  const abEntries = Object.entries(stats.abTests || {})

  return (
    <>
      <Helmet>
        <title>Analytics Dashboard — The Forge</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <SectionHeader
              number="Stats"
              title="Engagement Analytics"
              subtitle="Real-time client-side tracking. Data persists in localStorage for this session."
            />
            <div className="flex items-center gap-3">
              <button
                onClick={refresh}
                className="inline-flex items-center gap-2 bg-forge-900/60 border border-forge-800 hover:border-forge-600 text-forge-300 text-sm font-medium px-4 py-2 rounded-lg transition-all"
              >
                <RefreshCw className="w-4 h-4" />
                Refresh
              </button>
              <button
                onClick={() => exportAnalyticsJSON()}
                className="inline-flex items-center gap-2 bg-forge-800 hover:bg-forge-700 text-forge-100 text-sm font-medium px-4 py-2 rounded-lg transition-all border border-forge-700 hover:border-forge-600"
              >
                <Download className="w-4 h-4" />
                Export JSON
              </button>
              <button
                onClick={handleClear}
                className="inline-flex items-center gap-2 bg-red-500/10 hover:bg-red-500/15 border border-red-500/20 text-red-400 text-sm font-medium px-4 py-2 rounded-lg transition-all"
              >
                <Trash2 className="w-4 h-4" />
                Clear
              </button>
            </div>
          </div>

          {cleared && (
            <div className="mb-6 text-sm text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-lg">
              Analytics data cleared.
            </div>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <ScrollReveal>
              <StatCard label="Sessions" value={stats.totalSessions.toLocaleString()} icon={Eye} />
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <StatCard label="Page Views" value={stats.totalPageViews.toLocaleString()} icon={BarChart3} />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <StatCard label="Clicks" value={stats.totalClicks.toLocaleString()} icon={MousePointer} />
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <StatCard label="Avg Time" value={formatDuration(stats.avgTimeOnPage)} icon={Timer} />
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <ScrollReveal>
              <div className="bg-forge-900/60 border border-forge-800 rounded-xl p-6">
                <h3 className="font-serif text-lg font-semibold text-forge-100 mb-4">Top Pages</h3>
                {stats.topPages.length === 0 && (
                  <p className="text-sm text-forge-500">No data yet. Browse the site to populate.</p>
                )}
                {stats.topPages.map(([path, count]) => (
                  <BarRow key={path} label={path} value={count} max={topPageMax} />
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="bg-forge-900/60 border border-forge-800 rounded-xl p-6">
                <h3 className="font-serif text-lg font-semibold text-forge-100 mb-4">Top Clicks</h3>
                {stats.topClicks.length === 0 && (
                  <p className="text-sm text-forge-500">No data yet. Click around to populate.</p>
                )}
                {stats.topClicks.map(([name, count]) => (
                  <BarRow key={name} label={name} value={count} max={topClickMax} />
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <ScrollReveal>
              <div className="bg-forge-900/60 border border-forge-800 rounded-xl p-6">
                <h3 className="font-serif text-lg font-semibold text-forge-100 mb-4">Scroll Depth</h3>
                {scrollEntries.length === 0 && (
                  <p className="text-sm text-forge-500">Scroll the site to track depth milestones.</p>
                )}
                {scrollEntries.map(([pct, count]) => (
                  <BarRow key={pct} label={pct} value={count} max={scrollMax} />
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="bg-forge-900/60 border border-forge-800 rounded-xl p-6">
                <h3 className="font-serif text-lg font-semibold text-forge-100 mb-4">Conversions</h3>
                {stats.topConversions.length === 0 && (
                  <p className="text-sm text-forge-500">No conversions yet. Click CTAs to log them.</p>
                )}
                {stats.topConversions.map(([name, count]) => (
                  <div key={name} className="flex items-center justify-between py-2.5 border-b border-forge-800/50 last:border-0">
                    <span className="text-sm text-forge-300">{name}</span>
                    <span className="text-sm font-medium text-forge-100">{count}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="bg-forge-900/60 border border-forge-800 rounded-xl p-6">
              <h3 className="font-serif text-lg font-semibold text-forge-100 mb-4">A/B Test Results</h3>
              {abEntries.length === 0 && (
                <p className="text-sm text-forge-500">No active tests. Tests run automatically on Home.</p>
              )}
              <div className="space-y-4">
                {abEntries.map(([testName, data]) => {
                  const impressions = data.impressions || 0
                  const conversions = data.conversions || 0
                  const rate = impressions > 0 ? ((conversions / impressions) * 100).toFixed(1) : '0.0'
                  return (
                    <div key={testName} className="border border-forge-800 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-forge-100">{testName}</span>
                        <span className="text-xs text-forge-500">Variant: {data.variant}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="text-forge-500 text-xs">Impressions</div>
                          <div className="font-medium text-forge-100">{impressions}</div>
                        </div>
                        <div>
                          <div className="text-forge-500 text-xs">Conversions</div>
                          <div className="font-medium text-forge-100">{conversions}</div>
                        </div>
                        <div>
                          <div className="text-forge-500 text-xs">Conversion Rate</div>
                          <div className="font-medium text-ember-500">{rate}%</div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </>
  )
}
