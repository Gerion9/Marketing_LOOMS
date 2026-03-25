import { useSection } from '../../hooks/usePayload'

export default function HHIIndicator() {
  const { data: inv } = useSection('investment')
  if (!inv?.hhi) return null

  const hhi = inv.hhi
  const pct = Math.min(hhi.index / 0.5 * 100, 100)
  const color = hhi.index > 0.25 ? 'text-danger' : hhi.index > 0.15 ? 'text-warn' : 'text-ok'
  const bg = hhi.index > 0.25 ? 'bg-danger' : hhi.index > 0.15 ? 'bg-warn' : 'bg-ok'

  return (
    <div className="glass-card p-4">
      <p className="text-[10px] text-surface-500 uppercase tracking-wider font-semibold mb-2">Indice HHI</p>
      <div className="flex items-baseline gap-2">
        <span className={`text-2xl font-extrabold ${color}`}>{hhi.index}</span>
        <span className={`badge ${hhi.index > 0.25 ? 'badge-danger' : hhi.index > 0.15 ? 'badge-warn' : 'badge-ok'} text-[10px]`}>
          {hhi.label}
        </span>
      </div>
      <div className="mt-3 h-2 bg-surface-800 rounded-full overflow-hidden">
        <div className={`h-full ${bg} rounded-full transition-all duration-700`} style={{ width: `${pct}%`, opacity: 0.7 }} />
      </div>
      <p className="text-[10px] text-surface-600 mt-2">
        {hhi.index > 0.25 ? 'Alta concentracion: diversificar' : hhi.index > 0.15 ? 'Concentracion moderada' : 'Diversificada'}
      </p>
    </div>
  )
}
