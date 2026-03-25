import { useSection } from '../../hooks/usePayload'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { CAMPAIGN_PALETTE } from '../../utils/colors'
import { fmtCurrency, fmtPctPlain } from '../../utils/formatters'

export default function AttributionChart() {
  const { data: inv } = useSection('investment')
  if (!inv?.campaigns?.length) return null

  const data = inv.campaigns.map(c => ({
    name: c.name.replace('MAR_', ''),
    value: c.spend,
    pct: c.pct_of_total
  }))

  return (
    <div className="glass-card p-5">
      <h3 className="text-sm font-bold text-surface-200 mb-1">Distribucion de Inversion</h3>
      <p className="text-xs text-surface-500 mb-3">Share of spend por campana</p>
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%"
            innerRadius={55} outerRadius={90} strokeWidth={0}>
            {data.map((_, i) => <Cell key={i} fill={CAMPAIGN_PALETTE[i % CAMPAIGN_PALETTE.length]} opacity={0.8} />)}
          </Pie>
          <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 8, fontSize: 11 }}
            formatter={(v, name) => [fmtCurrency(v), name]} />
          <Legend wrapperStyle={{ fontSize: 11 }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
