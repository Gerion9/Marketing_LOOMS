import AlertCard from '../shared/AlertCard'
import SectionHeader from '../shared/SectionHeader'
import { usePayload } from '../../hooks/usePayload'
import { Link } from 'react-router-dom'

export default function AlertSummary() {
  const { data } = usePayload()
  if (!data?.system?.alerts) return null

  const meaningful = data.system.alerts.filter(a => a.severity !== 'info')
  const top = meaningful.slice(0, 3)

  if (top.length === 0) {
    return (
      <div>
        <SectionHeader title="Alertas" subtitle="Sin alertas activas" />
        <div className="glass-card p-6 text-center text-surface-500 text-sm">
          El sistema opera dentro de parametros normales.
        </div>
      </div>
    )
  }

  return (
    <div>
      <SectionHeader
        title="Alertas"
        subtitle={`${meaningful.length} activas`}
        action={
          <Link to="/alerts" className="text-xs text-accent hover:text-accent-light transition-colors">
            Ver todas →
          </Link>
        }
      />
      <div className="space-y-2">
        {top.map(a => <AlertCard key={a.id} alert={a} compact />)}
      </div>
    </div>
  )
}
