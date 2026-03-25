import CampaignBreakdown from '../components/investment/CampaignBreakdown'
import HHIIndicator from '../components/investment/HHIIndicator'
import CPLCard from '../components/investment/CPLCard'
import GrangerFlags from '../components/investment/GrangerFlags'
import AttributionChart from '../components/investment/AttributionChart'
import SectionHeader from '../components/shared/SectionHeader'
import { useSection } from '../hooks/usePayload'
import { fmtCurrency } from '../utils/formatters'

export default function InvestmentPage() {
  const { data: inv } = useSection('investment')

  return (
    <div className="space-y-6 animate-slide-up">
      <SectionHeader
        title="Investment"
        subtitle={inv ? `${inv.campaign_count} campanas · Total: ${fmtCurrency(inv.total_spend)}` : 'Cargando...'}
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <CPLCard />
        <HHIIndicator />
        <GrangerFlags />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <CampaignBreakdown />
        <AttributionChart />
      </div>
    </div>
  )
}
