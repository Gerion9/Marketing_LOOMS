import VolumeTimeSeries from '../components/forecast/VolumeTimeSeries'
import SeasonalRadar from '../components/forecast/SeasonalRadar'
import ModelLeaderboard from '../components/forecast/ModelLeaderboard'
import ForecastHorizons from '../components/forecast/ForecastHorizons'
import ChangepointBanner from '../components/forecast/ChangepointBanner'
import SectionHeader from '../components/shared/SectionHeader'
import { useSection } from '../hooks/usePayload'

export default function ForecastPage() {
  const { data: forecast } = useSection('forecast')

  return (
    <div className="space-y-6 animate-slide-up">
      <SectionHeader
        title="Forecast"
        subtitle={forecast ? `Modelo: ${forecast.method} · Confianza: ${forecast.confidence}` : 'Cargando...'}
      />

      <ChangepointBanner />
      <ForecastHorizons />
      <VolumeTimeSeries />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ModelLeaderboard />
        <SeasonalRadar />
      </div>
    </div>
  )
}
