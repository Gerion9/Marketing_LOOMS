import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { useSection } from '../../hooks/usePayload'
import { CHART_COLORS } from '../../utils/colors'

export default function ModelLeaderboard() {
  const { data: forecast } = useSection('forecast')
  if (!forecast?.backtest_models) return null

  const models = forecast.backtest_models.map(m => ({
    ...m,
    fill: m.mase < 0.75 ? CHART_COLORS.success : m.mase < 1 ? CHART_COLORS.warning : CHART_COLORS.danger
  }))

  return (
    <div className="glass-card p-5">
      <h3 className="text-sm font-bold text-surface-200 mb-1">Leaderboard de Modelos</h3>
      <p className="text-xs text-surface-500 mb-3">MASE por modelo (menor = mejor, &lt;1 supera baseline)</p>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={models} layout="vertical" margin={{ left: 20, right: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} horizontal={false} />
          <XAxis type="number" tick={{ fontSize: 10, fill: '#94a3b8' }} domain={[0, 'auto']} />
          <YAxis type="category" dataKey="name" tick={{ fontSize: 10, fill: '#cbd5e1' }} width={110} />
          <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 8, fontSize: 11 }}
            formatter={(v) => [v.toFixed(3), 'MASE']} />
          <Bar dataKey="mase" radius={[0, 4, 4, 0]} barSize={16}>
            {models.map((m, i) => <Cell key={i} fill={m.fill} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
