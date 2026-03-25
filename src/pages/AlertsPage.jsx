import { useState } from 'react'
import { usePayload } from '../hooks/usePayload'
import AlertCard from '../components/shared/AlertCard'
import ActionCard from '../components/shared/ActionCard'
import SectionHeader from '../components/shared/SectionHeader'

const SEV_TABS = ['all', 'critical', 'warning', 'info']
const CAT_TABS = ['all', 'funnel', 'operations', 'projections', 'investment']

export default function AlertsPage() {
  const { data } = usePayload()
  const [sevFilter, setSevFilter] = useState('all')
  const [catFilter, setCatFilter] = useState('all')

  if (!data) return null

  const alerts = data.system.alerts.filter(a => {
    if (sevFilter !== 'all' && a.severity !== sevFilter) return false
    if (catFilter !== 'all' && a.cat !== catFilter) return false
    return true
  })

  return (
    <div className="space-y-6 animate-slide-up">
      <SectionHeader title="Alertas y Acciones" subtitle={`${data.system.alerts.length} alertas · ${data.system.actions.length} acciones`} />

      <div className="flex flex-wrap gap-2">
        {SEV_TABS.map(s => (
          <button key={s} onClick={() => setSevFilter(s)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              sevFilter === s ? 'bg-accent text-white' : 'bg-surface-800 text-surface-400 hover:text-surface-200'
            }`}>
            {s === 'all' ? 'Todas' : s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
        <span className="w-px h-6 bg-surface-700 self-center mx-1" />
        {CAT_TABS.map(c => (
          <button key={c} onClick={() => setCatFilter(c)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              catFilter === c ? 'bg-accent text-white' : 'bg-surface-800 text-surface-400 hover:text-surface-200'
            }`}>
            {c === 'all' ? 'Todas' : c.charAt(0).toUpperCase() + c.slice(1)}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {alerts.length === 0 ? (
          <div className="glass-card p-8 text-center text-surface-500">Sin alertas con estos filtros</div>
        ) : (
          alerts.map(a => <AlertCard key={a.id} alert={a} />)
        )}
      </div>

      <SectionHeader title="Plan de Accion" subtitle={`${data.system.actions.length} acciones priorizadas`} />
      <div className="space-y-2">
        {data.system.actions.map((a, i) => <ActionCard key={a.id} action={a} index={i} />)}
      </div>
    </div>
  )
}
