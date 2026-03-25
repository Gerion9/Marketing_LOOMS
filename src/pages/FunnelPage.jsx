import TransitionSankey from '../components/funnel/TransitionSankey'
import AbsorptionTable from '../components/funnel/AbsorptionTable'
import FeederCards from '../components/funnel/FeederCards'
import LeakCards from '../components/funnel/LeakCards'
import RevenueAtRisk from '../components/funnel/RevenueAtRisk'
import SectionHeader from '../components/shared/SectionHeader'
import { useSection } from '../hooks/usePayload'
import { fmtPctPlain } from '../utils/formatters'

export default function FunnelPage() {
  const { data: funnel } = useSection('funnel')

  return (
    <div className="space-y-6 animate-slide-up">
      <SectionHeader
        title="Funnel & Markov"
        subtitle={funnel ? `Conversion global: ${fmtPctPlain(funnel.conversion_pct)} · Target: ${funnel.conversion_target}` : 'Cargando...'}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <TransitionSankey />
        </div>
        <RevenueAtRisk />
      </div>
      <FeederCards />
      <LeakCards />
      <AbsorptionTable />
    </div>
  )
}
