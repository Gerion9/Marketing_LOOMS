import KPICard from '../shared/KPICard'
import { usePayload } from '../../hooks/usePayload'

export default function KPIGrid() {
  const { data } = usePayload()
  if (!data?.kpis) return null

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      {data.kpis.map((k, i) => (
        <KPICard key={i} {...k} />
      ))}
    </div>
  )
}
