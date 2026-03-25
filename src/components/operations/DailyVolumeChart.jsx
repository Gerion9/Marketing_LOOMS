import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'
import { useSection } from '../../hooks/usePayload'
import { CHART_COLORS } from '../../utils/colors'
import { fmtDate, fmtNumber } from '../../utils/formatters'

export default function DailyVolumeChart() {
  const { data: ops } = useSection('operations')
  if (!ops?.daily_volumes) return null

  const data = ops.daily_volumes.map(d => ({ ...d, dateLabel: fmtDate(d.date) }))

  return (
    <div className="glass-card p-5">
      <h3 className="text-sm font-bold text-surface-200 mb-1">Volumen Diario</h3>
      <p className="text-xs text-surface-500 mb-3">{ops.total_days} dias · Promedio: {fmtNumber(ops.avg_daily)} leads/dia</p>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} margin={{ top: 5, right: 5, bottom: 0, left: -15 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
          <XAxis dataKey="dateLabel" tick={{ fontSize: 9, fill: '#94a3b8' }} interval={6} />
          <YAxis tick={{ fontSize: 10, fill: '#94a3b8' }} />
          <Tooltip
            contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 8, fontSize: 11 }}
            formatter={v => [fmtNumber(v), 'Leads']}
          />
          <ReferenceLine y={ops.avg_daily} stroke={CHART_COLORS.warning} strokeDasharray="4 4"
            label={{ value: `Avg: ${fmtNumber(ops.avg_daily)}`, fill: CHART_COLORS.warning, fontSize: 10, position: 'right' }} />
          <Bar dataKey="leads" fill={CHART_COLORS.primary} opacity={0.7} radius={[2, 2, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
