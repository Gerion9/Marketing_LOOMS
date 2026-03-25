import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts'
import { useSection } from '../../hooks/usePayload'
import { CHART_COLORS } from '../../utils/colors'
import { fmtDate } from '../../utils/formatters'

export default function MiniForecast() {
  const { data: forecast } = useSection('forecast')
  if (!forecast?.time_series) return null

  const series = forecast.time_series.slice(-14)

  return (
    <div className="glass-card p-4">
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-xs text-surface-500 uppercase tracking-wider font-semibold">Volumen 14d</p>
          <p className="text-lg font-bold text-surface-100">~{forecast.recommended_value} <span className="text-xs text-surface-500 font-normal">leads/dia</span></p>
        </div>
        <span className="badge badge-ok text-[10px]">MASE {forecast.mase}</span>
      </div>
      <ResponsiveContainer width="100%" height={80}>
        <AreaChart data={series}>
          <defs>
            <linearGradient id="miniGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={CHART_COLORS.primary} stopOpacity={0.3} />
              <stop offset="100%" stopColor={CHART_COLORS.primary} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip
            contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 8, fontSize: 11 }}
            labelFormatter={v => fmtDate(v)}
          />
          <Area type="monotone" dataKey="value" stroke={CHART_COLORS.primary} fill="url(#miniGrad)" strokeWidth={2} dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
