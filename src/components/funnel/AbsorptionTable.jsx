import { useSection } from '../../hooks/usePayload'
import { fmtPctPlain } from '../../utils/formatters'

function probColor(p) {
  if (p >= 0.2) return 'text-ok'
  if (p >= 0.1) return 'text-warn'
  if (p >= 0.05) return 'text-surface-300'
  return 'text-danger'
}

export default function AbsorptionTable() {
  const { data: funnel } = useSection('funnel')
  if (!funnel?.absorption_probabilities?.length) return null

  return (
    <div className="glass-card p-5 overflow-x-auto">
      <h3 className="text-sm font-bold text-surface-200 mb-1">Probabilidades de Absorcion</h3>
      <p className="text-xs text-surface-500 mb-3">Markov: P(conversion) y pasos esperados desde cada estado</p>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-surface-700">
            <th className="text-left py-2 px-3 text-xs font-semibold text-surface-400 uppercase">Estado</th>
            <th className="text-right py-2 px-3 text-xs font-semibold text-surface-400 uppercase">P(Conv)</th>
            <th className="text-right py-2 px-3 text-xs font-semibold text-surface-400 uppercase">P(Loss)</th>
            <th className="text-right py-2 px-3 text-xs font-semibold text-surface-400 uppercase">Pasos</th>
            <th className="text-right py-2 px-3 text-xs font-semibold text-surface-400 uppercase">StdDev</th>
          </tr>
        </thead>
        <tbody>
          {funnel.absorption_probabilities.map((ap, i) => (
            <tr key={i} className="border-b border-surface-800/50 hover:bg-surface-800/30 transition-colors">
              <td className="py-2.5 px-3 font-medium text-surface-200">{ap.state}</td>
              <td className={`py-2.5 px-3 text-right font-bold ${probColor(ap.prob_conversion)}`}>
                {fmtPctPlain(ap.prob_conversion * 100)}
              </td>
              <td className="py-2.5 px-3 text-right text-surface-500">
                {fmtPctPlain(ap.prob_loss * 100)}
              </td>
              <td className="py-2.5 px-3 text-right text-surface-300">{ap.expected_steps}</td>
              <td className="py-2.5 px-3 text-right text-surface-500">{ap.step_stddev}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
