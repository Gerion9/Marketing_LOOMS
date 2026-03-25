import { SEVERITY_COLORS } from '../../utils/colors'
import { AlertTriangle, AlertCircle, Info } from 'lucide-react'

const ICONS = { critical: AlertTriangle, warning: AlertCircle, info: Info }

export default function AlertCard({ alert, compact = false }) {
  const sc = SEVERITY_COLORS[alert.severity] || SEVERITY_COLORS.info
  const Icon = ICONS[alert.severity] || Info

  return (
    <div className={`glass-card p-4 border-l-4 ${sc.border} ${sc.bg}`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-4 h-4 mt-0.5 shrink-0 ${sc.text}`} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`badge ${sc.badge} text-[10px]`}>
              {alert.severity === 'critical' ? 'CRITICO' : alert.severity === 'warning' ? 'ALERTA' : 'INFO'}
            </span>
            {alert.rpn_score > 1 && (
              <span className="text-[10px] text-surface-600">RPN: {alert.rpn_score}</span>
            )}
          </div>
          <p className="text-sm font-semibold text-surface-200 leading-tight">{alert.title}</p>
          {!compact && alert.impact && (
            <p className="text-xs text-surface-500 mt-1 leading-relaxed">{alert.impact}</p>
          )}
        </div>
      </div>
    </div>
  )
}
