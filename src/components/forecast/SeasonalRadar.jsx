import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts'
import { useSection } from '../../hooks/usePayload'
import { CHART_COLORS } from '../../utils/colors'

export default function SeasonalRadar() {
  const { data: forecast } = useSection('forecast')
  if (!forecast?.seasonal_indices) return null

  return (
    <div className="glass-card p-5">
      <h3 className="text-sm font-bold text-surface-200 mb-1">Estacionalidad Semanal</h3>
      <p className="text-xs text-surface-500 mb-3">Indice por dia de semana (1.0 = promedio)</p>
      <ResponsiveContainer width="100%" height={240}>
        <RadarChart data={forecast.seasonal_indices} outerRadius={80}>
          <PolarGrid stroke={CHART_COLORS.grid} />
          <PolarAngleAxis dataKey="day" tick={{ fontSize: 11, fill: '#cbd5e1' }} />
          <PolarRadiusAxis tick={{ fontSize: 9, fill: '#64748b' }} domain={[0, 'auto']} />
          <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 8, fontSize: 11 }} />
          <Radar dataKey="index" stroke={CHART_COLORS.secondary} fill={CHART_COLORS.secondary} fillOpacity={0.25} strokeWidth={2} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
