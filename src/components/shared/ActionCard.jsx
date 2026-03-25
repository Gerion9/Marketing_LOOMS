import { URGENCY_COLORS } from '../../utils/colors'
import { Zap, Clock, CalendarDays } from 'lucide-react'

const ICONS = { immediate: Zap, this_week: Clock, this_month: CalendarDays }

export default function ActionCard({ action, index }) {
  const uc = URGENCY_COLORS[action.urgency] || URGENCY_COLORS.this_week
  const Icon = ICONS[action.urgency] || Clock

  return (
    <div className={`glass-card p-4 border-l-4 ${action.urgency === 'immediate' ? 'border-l-danger' : 'border-l-warn'}`}>
      <div className="flex items-start gap-3">
        <div className="flex items-center justify-center w-7 h-7 rounded-full bg-accent/20 text-accent text-xs font-bold shrink-0">
          {index + 1}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`badge ${uc.badge} text-[10px]`}>{uc.label}</span>
          </div>
          <p className="text-sm font-semibold text-surface-200 leading-tight">{action.action}</p>
          <p className="text-xs text-surface-500 mt-1">{action.reason}</p>
          <div className="flex items-center gap-4 mt-2 text-[10px] text-surface-600">
            <span>{action.owner}</span>
            <span>{action.horizon}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
