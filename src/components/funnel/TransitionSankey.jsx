import { Sankey, Tooltip, ResponsiveContainer } from 'recharts'
import { useSection } from '../../hooks/usePayload'
import { CHART_COLORS, CAMPAIGN_PALETTE } from '../../utils/colors'
import { useMemo } from 'react'

export default function TransitionSankey() {
  const { data: funnel } = useSection('funnel')

  const sankeyData = useMemo(() => {
    if (!funnel?.transitions?.length) return null
    const stateSet = new Set()
    funnel.transitions.forEach(t => { stateSet.add(t.from); stateSet.add(t.to) })
    const states = [...stateSet]
    const nodes = states.map(s => ({ name: s }))
    const links = funnel.transitions
      .filter(t => t.cnt >= 5)
      .map(t => ({
        source: states.indexOf(t.from),
        target: states.indexOf(t.to),
        value: t.cnt
      }))
      .filter(l => l.source >= 0 && l.target >= 0 && l.source !== l.target)
    return { nodes, links }
  }, [funnel])

  if (!sankeyData || sankeyData.links.length === 0) {
    return (
      <div className="glass-card p-6 text-center text-surface-500 text-sm">
        Sin datos suficientes para el diagrama Sankey
      </div>
    )
  }

  return (
    <div className="glass-card p-5">
      <h3 className="text-sm font-bold text-surface-200 mb-1">Flujo de Transiciones</h3>
      <p className="text-xs text-surface-500 mb-3">Sankey: desde entrada hasta absorcion</p>
      <ResponsiveContainer width="100%" height={400}>
        <Sankey
          data={sankeyData}
          nodeWidth={12}
          nodePadding={24}
          linkCurvature={0.5}
          iterations={64}
          node={{
            fill: CHART_COLORS.primary,
            opacity: 0.9
          }}
          link={{
            stroke: CHART_COLORS.primary,
            opacity: 0.15
          }}
        >
          <Tooltip
            contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 8, fontSize: 11 }}
          />
        </Sankey>
      </ResponsiveContainer>
    </div>
  )
}
