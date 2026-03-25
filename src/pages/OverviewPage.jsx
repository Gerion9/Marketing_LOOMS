import HealthGauge from '../components/overview/HealthGauge'
import KPIGrid from '../components/overview/KPIGrid'
import AlertSummary from '../components/overview/AlertSummary'
import ActionSummary from '../components/overview/ActionSummary'
import MiniForecast from '../components/overview/MiniForecast'
import SectionHeader from '../components/shared/SectionHeader'

export default function OverviewPage() {
  return (
    <div className="space-y-6 animate-slide-up">
      <SectionHeader title="Overview" subtitle="Estado general del sistema" />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-1">
          <HealthGauge />
        </div>
        <div className="lg:col-span-3">
          <KPIGrid />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <MiniForecast />
        <div className="lg:col-span-2">
          <AlertSummary />
        </div>
      </div>

      <ActionSummary />
    </div>
  )
}
