import { useSection } from '../../hooks/usePayload'
import { AlertTriangle, TrendingUp, TrendingDown } from 'lucide-react'
import { fmtPct } from '../../utils/formatters'

export default function ChangepointBanner() {
  const { data: forecast } = useSection('forecast')
  if (!forecast?.changepoint?.detected) return null

  const cp = forecast.changepoint
  const isUp = cp.direction === 'upward'
  const Icon = isUp ? TrendingUp : TrendingDown

  return (
    <div className={`glass-card p-4 border-l-4 ${isUp ? 'border-l-warn bg-warn/5' : 'border-l-danger bg-danger/5'}`}>
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg ${isUp ? 'bg-warn/10' : 'bg-danger/10'}`}>
          <Icon className={`w-5 h-5 ${isUp ? 'text-warn' : 'text-danger'}`} />
        </div>
        <div>
          <p className="text-sm font-bold text-surface-200">
            Cambio de Regimen Detectado — {cp.direction === 'upward' ? 'Incremento' : 'Descenso'}
          </p>
          <p className="text-xs text-surface-400 mt-0.5">
            {cp.change_date} · Media pre: {cp.pre_mean} → post: {cp.post_mean} leads/dia ({fmtPct(cp.shift_pct, 0)})
          </p>
        </div>
      </div>
    </div>
  )
}
