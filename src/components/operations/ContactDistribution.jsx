import { useSection } from '../../hooks/usePayload'
import { fmtNumber, fmtPctPlain } from '../../utils/formatters'
import { Phone, PhoneOff } from 'lucide-react'

export default function ContactDistribution() {
  const { data: ops } = useSection('operations')
  if (!ops?.contact_distribution) return null

  const cd = ops.contact_distribution
  const total = ops.call_metrics?.total_records || 1
  const segments = [
    { label: '1er intento', value: cd.first_attempts, color: 'bg-ok', pct: (cd.first_attempts / total * 100) },
    { label: '1-3 intentos', value: cd.attempts_1_to_3, color: 'bg-accent', pct: (cd.attempts_1_to_3 / total * 100) },
    { label: '1-5 intentos', value: cd.attempts_1_to_5, color: 'bg-warn', pct: (cd.attempts_1_to_5 / total * 100) },
    { label: '>7 (sobre-contacto)', value: cd.overcontact_calls, color: 'bg-danger', pct: cd.overcontact_pct }
  ]

  return (
    <div className="glass-card p-5">
      <h3 className="text-sm font-bold text-surface-200 mb-1">Distribucion de Contacto</h3>
      <p className="text-xs text-surface-500 mb-4">{fmtNumber(total)} llamadas totales</p>
      <div className="space-y-3">
        {segments.map((s, i) => (
          <div key={i}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-surface-300">{s.label}</span>
              <span className="text-xs font-semibold text-surface-200">{fmtNumber(s.value)} <span className="text-surface-500">({fmtPctPlain(s.pct)})</span></span>
            </div>
            <div className="h-2 bg-surface-800 rounded-full overflow-hidden">
              <div className={`h-full ${s.color} rounded-full transition-all duration-700`}
                style={{ width: `${Math.min(s.pct, 100)}%`, opacity: 0.7 }} />
            </div>
          </div>
        ))}
      </div>
      {cd.overcontact_pct > 15 && (
        <div className="mt-4 flex items-center gap-2 text-danger text-xs">
          <PhoneOff className="w-3.5 h-3.5" />
          <span className="font-semibold">{fmtPctPlain(cd.overcontact_pct)} de llamadas exceden el sweet spot</span>
        </div>
      )}
    </div>
  )
}
