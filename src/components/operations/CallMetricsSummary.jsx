import { useSection } from '../../hooks/usePayload'
import { fmtNumber } from '../../utils/formatters'
import { Phone, Clock, Users, Hash } from 'lucide-react'

export default function CallMetricsSummary() {
  const { data: ops } = useSection('operations')
  if (!ops?.call_metrics) return null

  const cm = ops.call_metrics
  const items = [
    { icon: Phone, label: 'Registros', value: fmtNumber(cm.total_records), sub: 'llamadas totales' },
    { icon: Users, label: 'Contactos', value: fmtNumber(cm.unique_contacts), sub: 'leads unicos' },
    { icon: Hash, label: 'Intentos avg', value: cm.call_rank.avg, sub: `rango: ${cm.call_rank.min}-${cm.call_rank.max}`, warn: cm.call_rank.avg > 7 },
    { icon: Clock, label: 'Intervalo avg', value: `${fmtNumber(cm.minutes_since_prev.avg)} min`, sub: '~36h entre intentos', warn: cm.minutes_since_prev.avg > 60 }
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {items.map(({ icon: Icon, label, value, sub, warn }, i) => (
        <div key={i} className="glass-card p-4">
          <div className="flex items-center gap-2 mb-2">
            <Icon className={`w-4 h-4 ${warn ? 'text-danger' : 'text-surface-500'}`} />
            <span className="text-[10px] text-surface-500 uppercase tracking-wider font-semibold">{label}</span>
          </div>
          <p className={`text-lg font-extrabold ${warn ? 'text-danger' : 'text-surface-100'}`}>{value}</p>
          <p className="text-[10px] text-surface-600 mt-0.5">{sub}</p>
        </div>
      ))}
    </div>
  )
}
