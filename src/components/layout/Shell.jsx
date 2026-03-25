import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import { usePayload } from '../../hooks/usePayload'
import { Loader2 } from 'lucide-react'

export default function Shell() {
  const { loading, error } = usePayload()

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-surface">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 text-accent animate-spin" />
          <span className="text-sm text-surface-400">Cargando dashboard...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center bg-surface">
        <div className="glass-card p-8 max-w-md text-center">
          <p className="text-danger font-semibold mb-2">Error al cargar datos</p>
          <p className="text-sm text-surface-400">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-surface">
      <Sidebar />
      <div className="pl-56 transition-all duration-300">
        <Header />
        <main className="p-6 animate-fade-in">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
