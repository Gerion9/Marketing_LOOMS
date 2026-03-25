export default function KPICard({ value, label, sub, color, icon: Icon }) {
  const valColor = color === 'red' ? 'text-danger' : color === 'green' ? 'text-ok' : 'text-surface-100'
  return (
    <div className="glass-card p-4 text-center group">
      {Icon && <Icon className="w-4 h-4 text-surface-500 mx-auto mb-2" />}
      <div className={`kpi-value ${valColor}`}>{value || '-'}</div>
      <div className="text-[10px] uppercase tracking-wider text-surface-500 font-semibold mt-1">
        {label}
      </div>
      {sub && <div className="text-[10px] text-surface-600 mt-0.5">{sub}</div>}
    </div>
  )
}
