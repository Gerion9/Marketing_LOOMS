import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { useSection } from '../../hooks/usePayload'
import { CHART_COLORS } from '../../utils/colors'

export default function HourlyDistribution() {
  const { data: ops } = useSection('operations')
  if (!ops?.hourly_distribution) return null

  const maxP = Math.max(...ops.hourly_distribution.map(h => h.probability))

  return (
    <div className="glass-card p-5">
      <h3 className="text-sm font-bold text-surface-200 mb-1">Distribucion por Hora</h3>
      <p className="text-xs text-surface-500 mb-3">Pico: {ops.peak_hour}:00 · Valle: {ops.valley_hour}:00</p>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={ops.hourly_distribution} margin={{ top: 5, right: 5, bottom: 0, left: -15 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} vertical={false} />
          <XAxis dataKey="label" tick={{ fontSize: 9, fill: '#94a3b8' }} interval={2} />
          <YAxis tick={{ fontSize: 10, fill: '#94a3b8' }} tickFormatter={v => `${(v*100).toFixed(0)}%`} />
          <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 8, fontSize: 11 }}
            formatter={v => [`${(v*100).toFixed(1)}%`, 'Probabilidad']} />
          <Bar dataKey="probability" radius={[2, 2, 0, 0]}>
            {ops.hourly_distribution.map((h, i) => (
              <Cell key={i} fill={h.probability === maxP ? CHART_COLORS.warning : CHART_COLORS.tertiary} opacity={0.7 + (h.probability / maxP) * 0.3} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
