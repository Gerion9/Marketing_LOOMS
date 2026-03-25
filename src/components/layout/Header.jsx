import { usePayload } from '../../hooks/usePayload'
import { STATUS_COLORS } from '../../utils/colors'
import { fmtDateFull } from '../../utils/formatters'
import { Activity } from 'lucide-react'

export default function Header() {
  const { data } = usePayload()
  if (!data) return null

  const { system, meta } = data
  const sc = STATUS_COLORS[system.status.color] || STATUS_COLORS.verde

  return (
    <header className="sticky top-0 z-30 backdrop-blur-xl bg-surface/80 border-b border-surface-800/50">
      <div className="flex items-center justify-between h-14 px-6">
        <div className="flex items-center gap-4">
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${sc.bg}`}>
            <span className={`status-dot ${sc.dot}`} />
            <span className={`text-xs font-semibold ${sc.text}`}>
              {system.status.label}
            </span>
          </div>
          <span className="text-xs text-surface-500 hidden sm:inline">
            Health: {system.health_score}/100
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs text-surface-500">
          <span className="hidden md:inline">{fmtDateFull(meta.generated_at)}</span>
          <span className="badge badge-info">v{meta.version}</span>
        </div>
      </div>
    </header>
  )
}
