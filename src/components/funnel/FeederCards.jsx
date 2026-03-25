import { useSection } from '../../hooks/usePayload'
import { TrendingUp } from 'lucide-react'

export default function FeederCards() {
  const { data: funnel } = useSection('funnel')
  if (!funnel?.feeders?.length) return null

  return (
    <div>
      <h3 className="text-sm font-bold text-surface-200 mb-3 flex items-center gap-2">
        <TrendingUp className="w-4 h-4 text-ok" /> Feeders a Conversion
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {funnel.feeders.map((f, i) => (
          <div key={i} className="glass-card p-4 border-l-4 border-l-ok">
            <p className="text-sm font-semibold text-surface-200">{f.from}</p>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-xl font-extrabold text-ok">{f.pct}%</span>
              <span className="text-xs text-surface-500">→ Conversion</span>
            </div>
            <p className="text-[10px] text-surface-600 mt-1">{f.cnt} leads convierten desde aqui</p>
            <div className="mt-2 h-1.5 bg-surface-800 rounded-full overflow-hidden">
              <div className="h-full bg-ok/60 rounded-full transition-all duration-700"
                style={{ width: `${Math.min(f.pct * 2.5, 100)}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
