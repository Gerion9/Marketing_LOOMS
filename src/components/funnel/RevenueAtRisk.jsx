import { useSection } from '../../hooks/usePayload'
import { fmtCurrency } from '../../utils/formatters'
import { DollarSign } from 'lucide-react'

export default function RevenueAtRisk() {
  const { data: funnel } = useSection('funnel')
  if (!funnel?.revenue_at_risk?.length) {
    return (
      <div className="glass-card p-4">
        <div className="flex items-center gap-2 mb-2">
          <DollarSign className="w-4 h-4 text-surface-500" />
          <span className="text-xs font-semibold text-surface-400">Revenue at Risk</span>
        </div>
        <p className="text-sm text-surface-500">Sin fugas con revenue at risk significativo en este periodo</p>
      </div>
    )
  }

  const total = funnel.revenue_at_risk.reduce((s, r) => s + (r.revenue_at_risk || 0), 0)

  return (
    <div className="glass-card p-5 border-l-4 border-l-danger">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-danger" />
          <span className="text-sm font-bold text-surface-200">Revenue at Risk</span>
        </div>
        <span className="text-xl font-extrabold text-danger">{fmtCurrency(total)}</span>
      </div>
      <div className="space-y-2">
        {funnel.revenue_at_risk.map((r, i) => (
          <div key={i} className="flex items-center justify-between py-1.5 border-t border-surface-800/50">
            <span className="text-xs text-surface-400">{r.from} → {r.to}</span>
            <div className="text-right">
              <span className="text-sm font-bold text-danger">{fmtCurrency(r.revenue_at_risk)}</span>
              <span className="text-[10px] text-surface-600 ml-2">{r.leads_lost} leads</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
