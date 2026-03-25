import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { useSection } from '../../hooks/usePayload'
import { CAMPAIGN_PALETTE } from '../../utils/colors'
import { fmtCurrency } from '../../utils/formatters'

export default function CampaignBreakdown() {
  const { data: inv } = useSection('investment')
  if (!inv?.campaigns?.length) return null

  return (
    <div className="glass-card p-5">
      <h3 className="text-sm font-bold text-surface-200 mb-1">Gasto por Campana</h3>
      <p className="text-xs text-surface-500 mb-3">{inv.campaign_count} campanas · Total: {fmtCurrency(inv.total_spend)}</p>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={inv.campaigns} layout="vertical" margin={{ left: 10, right: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
          <XAxis type="number" tick={{ fontSize: 10, fill: '#94a3b8' }} tickFormatter={v => `$${(v/1000).toFixed(0)}K`} />
          <YAxis type="category" dataKey="name" tick={{ fontSize: 10, fill: '#cbd5e1' }} width={140} />
          <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 8, fontSize: 11 }}
            formatter={v => [fmtCurrency(v), 'Gasto']} />
          <Bar dataKey="spend" radius={[0, 4, 4, 0]} barSize={20}>
            {inv.campaigns.map((_, i) => <Cell key={i} fill={CAMPAIGN_PALETTE[i % CAMPAIGN_PALETTE.length]} opacity={0.8} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
