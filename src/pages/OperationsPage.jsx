import DailyVolumeChart from '../components/operations/DailyVolumeChart'
import HourlyDistribution from '../components/operations/HourlyDistribution'
import ContactDistribution from '../components/operations/ContactDistribution'
import CapacityGauge from '../components/operations/CapacityGauge'
import CallMetricsSummary from '../components/operations/CallMetricsSummary'
import SectionHeader from '../components/shared/SectionHeader'
import { useSection } from '../hooks/usePayload'
import { fmtNumber, fmtPct } from '../utils/formatters'

export default function OperationsPage() {
  const { data: ops } = useSection('operations')

  return (
    <div className="space-y-6 animate-slide-up">
      <SectionHeader
        title="Operations"
        subtitle={ops ? `${fmtNumber(ops.total_leads)} leads · ${ops.total_days}d · WoW: ${fmtPct(ops.wow_change_pct)}` : 'Cargando...'}
      />
      <CallMetricsSummary />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2"><DailyVolumeChart /></div>
        <CapacityGauge />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <HourlyDistribution />
        <ContactDistribution />
      </div>
    </div>
  )
}
