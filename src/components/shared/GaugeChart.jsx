import { healthHex } from '../../utils/colors'

export default function GaugeChart({ value, max = 100, size = 160, label, sub }) {
  const pct = Math.min(value / max, 1)
  const radius = 45
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - pct * 0.75)
  const color = healthHex(value)

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} viewBox="0 0 100 100" className="transform -rotate-135">
        <circle cx="50" cy="50" r={radius} fill="none" stroke="#1e293b" strokeWidth="8" strokeLinecap="round"
          strokeDasharray={`${circumference * 0.75} ${circumference * 0.25}`} />
        <circle cx="50" cy="50" r={radius} fill="none" stroke={color} strokeWidth="8" strokeLinecap="round"
          strokeDasharray={`${circumference * 0.75} ${circumference * 0.25}`}
          strokeDashoffset={offset}
          className="transition-all duration-1000 ease-out"
          style={{ filter: `drop-shadow(0 0 6px ${color}40)` }} />
      </svg>
      <div className="text-center -mt-8">
        <div className="text-3xl font-extrabold" style={{ color }}>{value}</div>
        {label && <div className="text-xs text-surface-500 font-medium mt-0.5">{label}</div>}
        {sub && <div className="text-[10px] text-surface-600">{sub}</div>}
      </div>
    </div>
  )
}
