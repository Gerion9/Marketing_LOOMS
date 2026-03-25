import GaugeChart from '../shared/GaugeChart'
import { useSection } from '../../hooks/usePayload'
import { fmtNumber } from '../../utils/formatters'

export default function CapacityGauge() {
  const { data: ops } = useSection('operations')
  if (!ops?.littles_law?.available) {
    return (
      <div className="glass-card p-6 text-center text-surface-500 text-sm">
        Little's Law no disponible
      </div>
    )
  }

  const ll = ops.littles_law
  return (
    <div className="glass-card p-5 flex flex-col items-center">
      <h3 className="text-sm font-bold text-surface-200 mb-3">Capacidad Operativa</h3>
      <GaugeChart
        value={Math.round(ll.capacity_utilization_pct)}
        label={`${fmtNumber(ll.L_wip)} / ${fmtNumber(ll.max_capacity)} WIP`}
        sub={ll.saturated ? 'SATURADO' : 'Dentro de capacidad'}
      />
      <div className="mt-3 grid grid-cols-2 gap-4 text-center text-xs">
        <div>
          <p className="text-surface-500">Entrada</p>
          <p className="font-bold text-surface-200">{fmtNumber(ll.lambda)} leads/dia</p>
        </div>
        <div>
          <p className="text-surface-500">Permanencia</p>
          <p className="font-bold text-surface-200">{ll.W_steps} pasos</p>
        </div>
      </div>
    </div>
  )
}
