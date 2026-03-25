import { STATUS_COLORS } from '../../utils/colors'

export default function StatusBadge({ color, label, className = '' }) {
  const sc = STATUS_COLORS[color] || STATUS_COLORS.verde
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${sc.bg} ${className}`}>
      <span className={`status-dot ${sc.dot}`} />
      <span className={`text-xs font-semibold ${sc.text}`}>{label}</span>
    </div>
  )
}
