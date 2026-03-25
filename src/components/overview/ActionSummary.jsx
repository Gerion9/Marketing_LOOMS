import ActionCard from '../shared/ActionCard'
import SectionHeader from '../shared/SectionHeader'
import { usePayload } from '../../hooks/usePayload'

export default function ActionSummary() {
  const { data } = usePayload()
  if (!data?.system?.actions) return null

  const top = data.system.actions.slice(0, 3)

  if (top.length === 0) {
    return (
      <div>
        <SectionHeader title="Acciones" subtitle="Sin acciones pendientes" />
        <div className="glass-card p-6 text-center text-surface-500 text-sm">
          No hay acciones urgentes en este momento.
        </div>
      </div>
    )
  }

  return (
    <div>
      <SectionHeader title="Acciones Prioritarias" subtitle={`${data.system.actions.length} pendientes`} />
      <div className="space-y-2">
        {top.map((a, i) => <ActionCard key={a.id} action={a} index={i} />)}
      </div>
    </div>
  )
}
