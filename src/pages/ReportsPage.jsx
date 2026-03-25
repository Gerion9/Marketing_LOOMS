import ReportViewer from '../components/reports/ReportViewer'
import SectionHeader from '../components/shared/SectionHeader'

export default function ReportsPage() {
  return (
    <div className="space-y-4 animate-slide-up">
      <SectionHeader
        title="Reportes IA"
        subtitle="Reportes HTML generados automaticamente por el pipeline de IA"
      />
      <ReportViewer />
    </div>
  )
}
