import { ComposedChart, Area, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, ReferenceArea } from 'recharts'
import { useSection } from '../../hooks/usePayload'
import { CHART_COLORS } from '../../utils/colors'
import { fmtDate, fmtNumber } from '../../utils/formatters'

export default function VolumeTimeSeries() {
  const { data: forecast } = useSection('forecast')
  if (!forecast?.time_series) return null

  const cp = forecast.changepoint
  const series = forecast.time_series.map(d => ({
    ...d,
    dateLabel: fmtDate(d.date)
  }))

  const lastPoint = series[series.length - 1]
  const fcPoint = {
    date: 'forecast',
    dateLabel: 'Forecast',
    value: forecast.recommended_value,
    bandLow: forecast.intervals.band_80.low,
    bandHigh: forecast.intervals.band_80.high,
    isForecast: true
  }

  const chartData = [...series, fcPoint]

  return (
    <div className="glass-card p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-bold text-surface-200">Volumen Diario + Forecast</h3>
          <p className="text-xs text-surface-500">42 dias de historia + prevision</p>
        </div>
        <div className="flex items-center gap-3 text-[10px] text-surface-500">
          <span className="flex items-center gap-1"><span className="w-3 h-0.5 bg-accent rounded" /> Historico</span>
          <span className="flex items-center gap-1"><span className="w-3 h-0.5 bg-ok rounded" /> Forecast</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 bg-accent/15 rounded" /> Banda 80%</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={320}>
        <ComposedChart data={chartData} margin={{ top: 10, right: 10, bottom: 0, left: -10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
          <XAxis dataKey="dateLabel" tick={{ fontSize: 10, fill: '#94a3b8' }} interval="preserveStartEnd" />
          <YAxis tick={{ fontSize: 10, fill: '#94a3b8' }} />
          <Tooltip
            contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 10, fontSize: 12 }}
            formatter={(v, name) => [fmtNumber(v), name === 'value' ? 'Leads' : name]}
            labelFormatter={l => l}
          />
          {cp?.detected && (
            <ReferenceLine
              x={fmtDate(cp.change_date)}
              stroke={CHART_COLORS.warning}
              strokeDasharray="4 4"
              label={{ value: 'Cambio', fill: CHART_COLORS.warning, fontSize: 10, position: 'top' }}
            />
          )}
          <Bar dataKey="value" fill={CHART_COLORS.primary} opacity={0.6} radius={[2, 2, 0, 0]} />
          <Line type="monotone" dataKey="value" stroke={CHART_COLORS.primary} strokeWidth={2} dot={false} connectNulls />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}
