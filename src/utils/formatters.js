export function fmtNumber(n, decimals = 0) {
  if (n == null || isNaN(n)) return '-'
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(n)
}

export function fmtCurrency(n, decimals = 0) {
  if (n == null || isNaN(n)) return '-'
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(n)
}

export function fmtPct(n, decimals = 1) {
  if (n == null || isNaN(n)) return '-'
  const sign = n > 0 ? '+' : ''
  return `${sign}${n.toFixed(decimals)}%`
}

export function fmtPctPlain(n, decimals = 1) {
  if (n == null || isNaN(n)) return '-'
  return `${n.toFixed(decimals)}%`
}

export function fmtDate(dateStr) {
  if (!dateStr) return '-'
  const d = new Date(dateStr)
  return d.toLocaleDateString('es-MX', { day: '2-digit', month: 'short' })
}

export function fmtDateFull(dateStr) {
  if (!dateStr) return '-'
  const d = new Date(dateStr)
  return d.toLocaleDateString('es-MX', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  })
}

export function fmtHour(h) {
  if (h == null) return '-'
  return `${String(h).padStart(2, '0')}:00`
}

export function abbreviate(n) {
  if (n == null) return '-'
  if (n >= 1e6) return `${(n / 1e6).toFixed(1)}M`
  if (n >= 1e3) return `${(n / 1e3).toFixed(1)}K`
  return String(n)
}
