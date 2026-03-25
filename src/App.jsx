import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Shell from './components/layout/Shell'
import { Loader2 } from 'lucide-react'

const OverviewPage = lazy(() => import('./pages/OverviewPage'))
const ForecastPage = lazy(() => import('./pages/ForecastPage'))
const FunnelPage = lazy(() => import('./pages/FunnelPage'))
const OperationsPage = lazy(() => import('./pages/OperationsPage'))
const InvestmentPage = lazy(() => import('./pages/InvestmentPage'))
const ReportsPage = lazy(() => import('./pages/ReportsPage'))
const AlertsPage = lazy(() => import('./pages/AlertsPage'))

function PageLoader() {
  return (
    <div className="flex items-center justify-center py-24">
      <Loader2 className="w-6 h-6 text-accent animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<Shell />}>
          <Route index element={<OverviewPage />} />
          <Route path="forecast" element={<ForecastPage />} />
          <Route path="funnel" element={<FunnelPage />} />
          <Route path="operations" element={<OperationsPage />} />
          <Route path="investment" element={<InvestmentPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="alerts" element={<AlertsPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
