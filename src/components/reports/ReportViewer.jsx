import { useState, useEffect } from 'react'
import { FileText, ExternalLink } from 'lucide-react'

const AUDIENCES = [
  { key: 'executive', label: 'Executive', file: '/reports/reporte_executive.html', color: '#2b6cb0' },
  { key: 'manager', label: 'Manager', file: '/reports/reporte_manager.html', color: '#2f855a' },
  { key: 'analyst', label: 'Analyst', file: '/reports/reporte_analyst.html', color: '#6b46c1' },
  { key: 'operations', label: 'Operations', file: '/reports/reporte_operations.html', color: '#c05621' }
]

export default function ReportViewer() {
  const [active, setActive] = useState('executive')
  const [html, setHtml] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const audience = AUDIENCES.find(a => a.key === active)
    fetch(audience.file)
      .then(r => r.ok ? r.text() : '')
      .then(text => { setHtml(text); setLoading(false) })
      .catch(() => { setHtml('<p style="color:#ef4444;padding:20px">Error cargando reporte</p>'); setLoading(false) })
  }, [active])

  const current = AUDIENCES.find(a => a.key === active)

  return (
    <div>
      <div className="flex items-center gap-1 bg-card rounded-xl p-1 mb-4">
        {AUDIENCES.map(a => (
          <button
            key={a.key}
            onClick={() => setActive(a.key)}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold transition-all ${
              active === a.key
                ? 'text-white shadow-lg'
                : 'text-surface-400 hover:text-surface-200 hover:bg-surface-800'
            }`}
            style={active === a.key ? { background: a.color } : {}}
          >
            <FileText className="w-3.5 h-3.5" />
            {a.label}
          </button>
        ))}
      </div>

      <div className="glass-card overflow-hidden" style={{ minHeight: 600 }}>
        {loading ? (
          <div className="flex items-center justify-center py-24">
            <div className="w-5 h-5 border-2 border-accent border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <iframe
            srcDoc={html}
            title={`Reporte ${current.label}`}
            className="w-full border-0"
            style={{ minHeight: 800, background: '#f4f6f9' }}
            sandbox="allow-scripts"
          />
        )}
      </div>
    </div>
  )
}
