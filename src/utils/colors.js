export const STATUS_COLORS = {
  verde: { bg: 'bg-ok/10', text: 'text-ok-light', border: 'border-ok', dot: 'bg-ok', label: 'Estable' },
  amarillo: { bg: 'bg-warn/10', text: 'text-warn-light', border: 'border-warn', dot: 'bg-warn', label: 'Bajo Presion' },
  rojo: { bg: 'bg-danger/10', text: 'text-danger-light', border: 'border-danger', dot: 'bg-danger', label: 'En Riesgo' }
}

export const SEVERITY_COLORS = {
  critical: { bg: 'bg-danger/10', text: 'text-danger-light', border: 'border-l-danger', badge: 'badge-danger', hex: '#ef4444' },
  warning: { bg: 'bg-warn/10', text: 'text-warn-light', border: 'border-l-warn', badge: 'badge-warn', hex: '#f59e0b' },
  info: { bg: 'bg-info/10', text: 'text-info-light', border: 'border-l-info', badge: 'badge-info', hex: '#3b82f6' }
}

export const URGENCY_COLORS = {
  immediate: { bg: 'bg-danger/10', text: 'text-danger-light', badge: 'badge-danger', label: 'Inmediato' },
  this_week: { bg: 'bg-warn/10', text: 'text-warn-light', badge: 'badge-warn', label: 'Esta Semana' },
  this_month: { bg: 'bg-ok/10', text: 'text-ok-light', badge: 'badge-ok', label: 'Este Mes' }
}

export const CHART_COLORS = {
  primary: '#3b82f6',
  secondary: '#8b5cf6',
  tertiary: '#06b6d4',
  success: '#22c55e',
  warning: '#f59e0b',
  danger: '#ef4444',
  muted: '#64748b',
  band: 'rgba(59,130,246,.15)',
  bandStroke: 'rgba(59,130,246,.3)',
  grid: '#1e293b',
  axis: '#475569'
}

export function healthColor(score) {
  if (score >= 80) return 'ok'
  if (score >= 65) return 'warn'
  return 'danger'
}

export function healthHex(score) {
  if (score >= 80) return '#22c55e'
  if (score >= 65) return '#f59e0b'
  return '#ef4444'
}

export const CAMPAIGN_PALETTE = [
  '#3b82f6', '#8b5cf6', '#06b6d4', '#f59e0b', '#ef4444', '#22c55e',
  '#ec4899', '#f97316', '#14b8a6', '#a855f7'
]
