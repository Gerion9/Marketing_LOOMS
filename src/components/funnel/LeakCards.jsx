import { useSection } from '../../hooks/usePayload'
import { TrendingDown } from 'lucide-react'

export default function LeakCards() {
  const { data: funnel } = useSection('funnel')

  const leaks = funnel?.transitions?.filter(t => {
    const to = (t.to || '').toLowerCase()
    return to.includes('lost') || to.includes('no show') || to.includes('disqualif')
  }).sort((a, b) => b.cnt - a.cnt).slice(0, 5) || []

  if (leaks.length === 0) {
    return (
      <div className="glass-card p-4 text-center text-surface-500 text-sm">
        Sin fugas significativas detectadas
      </div>
    )
  }

  return (
    <div>
      <h3 className="text-sm font-bold text-surface-200 mb-3 flex items-center gap-2">
        <TrendingDown className="w-4 h-4 text-danger" /> Principales Fugas
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {leaks.map((l, i) => (
          <div key={i} className="glass-card p-4 border-l-4 border-l-danger">
            <p className="text-xs text-surface-500">{l.from}</p>
            <p className="text-sm font-semibold text-surface-200 flex items-center gap-1">
              → {l.to}
            </p>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-xl font-extrabold text-danger">{l.pct}%</span>
              <span className="text-xs text-surface-500">{l.cnt} leads</span>
            </div>
            <div className="mt-2 h-1.5 bg-surface-800 rounded-full overflow-hidden">
              <div className="h-full bg-danger/60 rounded-full transition-all duration-700"
                style={{ width: `${Math.min(l.pct, 100)}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
