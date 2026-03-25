import GaugeChart from '../shared/GaugeChart'
import StatusBadge from '../shared/StatusBadge'
import { usePayload } from '../../hooks/usePayload'

export default function HealthGauge() {
  const { data } = usePayload()
  if (!data) return null
  const { system } = data

  return (
    <div className="glass-card p-6 flex flex-col items-center">
      <GaugeChart
        value={system.health_score}
        label="Health Score"
        sub={system.status.label}
      />
      <StatusBadge color={system.status.color} label={system.status.label} className="mt-4" />
    </div>
  )
}
