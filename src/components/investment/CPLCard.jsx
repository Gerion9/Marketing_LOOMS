import { useSection } from '../../hooks/usePayload'
import { fmtCurrency, fmtNumber } from '../../utils/formatters'
import { DollarSign } from 'lucide-react'

export default function CPLCard() {
  const { data: inv } = useSection('investment')
  if (!inv?.cpl?.available) return null

  const cpl = inv.cpl

  return (
    <div className="glass-card p-4">
      <div className="flex items-center gap-2 mb-2">
        <DollarSign className="w-4 h-4 text-ok" />
        <span className="text-[10px] text-surface-500 uppercase tracking-wider font-semibold">CPL Implicito</span>
      </div>
      <p className="text-2xl font-extrabold text-ok">{fmtCurrency(cpl.global_cpl, 2)}</p>
      <p className="text-[10px] text-surface-600 mt-1">
        {fmtNumber(cpl.total_leads)} leads / {fmtCurrency(cpl.total_spend)} gasto
      </p>
    </div>
  )
}
