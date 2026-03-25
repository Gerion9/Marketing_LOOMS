import { useSection } from '../../hooks/usePayload'
import { fmtNumber } from '../../utils/formatters'
import { Clock, Calendar, CalendarDays } from 'lucide-react'

const HORIZON_META = {
  next_1d: { icon: Clock, label: 'Manana', color: 'text-accent' },
  next_7d: { icon: Calendar, label: 'Proximos 7d', color: 'text-ok' },
  next_14d: { icon: CalendarDays, label: 'Proximos 14d', color: 'text-warn' }
}

export default function ForecastHorizons() {
  const { data: forecast } = useSection('forecast')
  if (!forecast?.horizons) return null

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {Object.entries(forecast.horizons).map(([key, h]) => {
        const meta = HORIZON_META[key]
        if (!meta) return null
        const Icon = meta.icon
        return (
          <div key={key} className="glass-card p-4">
            <div className="flex items-center gap-2 mb-2">
              <Icon className={`w-4 h-4 ${meta.color}`} />
              <span className="text-xs font-semibold text-surface-400">{meta.label}</span>
            </div>
            <p className="text-xl font-extrabold text-surface-100">{fmtNumber(h.forecast)}</p>
            <p className="text-[10px] text-surface-500 mt-1">
              Rango: {fmtNumber(h.band_low)} – {fmtNumber(h.band_high)}
            </p>
          </div>
        )
      })}
    </div>
  )
}
