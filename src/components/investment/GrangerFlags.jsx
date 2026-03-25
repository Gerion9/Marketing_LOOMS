import { useSection } from '../../hooks/usePayload'
import { CheckCircle, XCircle } from 'lucide-react'

export default function GrangerFlags() {
  const { data: inv } = useSection('investment')
  if (!inv?.mmm?.available) {
    return (
      <div className="glass-card p-4 text-center text-surface-500 text-sm">
        Marketing Mix Model no disponible con los datos actuales
      </div>
    )
  }

  const mmm = inv.mmm
  const causal = mmm.causal_campaigns || []
  const nonCausal = mmm.non_causal_campaigns || []

  return (
    <div className="glass-card p-5">
      <h3 className="text-sm font-bold text-surface-200 mb-1">Causalidad Granger</h3>
      <p className="text-xs text-surface-500 mb-3">Campanas con/sin evidencia de impacto causal en leads</p>
      <div className="space-y-2">
        {causal.map((c, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            <CheckCircle className="w-4 h-4 text-ok shrink-0" />
            <span className="text-surface-200">{c}</span>
            <span className="badge badge-ok text-[9px] ml-auto">Causal</span>
          </div>
        ))}
        {nonCausal.map((c, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            <XCircle className="w-4 h-4 text-danger shrink-0" />
            <span className="text-surface-400">{c}</span>
            <span className="badge badge-danger text-[9px] ml-auto">No causal</span>
          </div>
        ))}
      </div>
    </div>
  )
}
