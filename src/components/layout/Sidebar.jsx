import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard, TrendingUp, GitBranch, Headphones,
  DollarSign, FileText, AlertTriangle, ChevronLeft, ChevronRight, Activity
} from 'lucide-react'
import { useState } from 'react'

const NAV = [
  { to: '/', icon: LayoutDashboard, label: 'Overview' },
  { to: '/forecast', icon: TrendingUp, label: 'Forecast' },
  { to: '/funnel', icon: GitBranch, label: 'Funnel' },
  { to: '/operations', icon: Headphones, label: 'Operations' },
  { to: '/investment', icon: DollarSign, label: 'Investment' },
  { to: '/reports', icon: FileText, label: 'Reports' },
  { to: '/alerts', icon: AlertTriangle, label: 'Alerts' }
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside className={`
      fixed top-0 left-0 h-screen z-40 flex flex-col
      bg-surface-950/80 backdrop-blur-xl border-r border-surface-800/50
      transition-all duration-300 ${collapsed ? 'w-16' : 'w-56'}
    `}>
      <div className="flex items-center gap-2 px-4 h-16 border-b border-surface-800/50">
        <Activity className="w-6 h-6 text-accent shrink-0" />
        {!collapsed && (
          <span className="text-sm font-bold text-surface-100 tracking-tight whitespace-nowrap">
            Mkt BI IA
          </span>
        )}
      </div>

      <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
        {NAV.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `nav-item ${isActive ? 'active' : ''} ${collapsed ? 'justify-center px-0' : ''}`
            }
          >
            <Icon className="w-5 h-5 shrink-0" />
            {!collapsed && <span>{label}</span>}
          </NavLink>
        ))}
      </nav>

      <button
        onClick={() => setCollapsed(c => !c)}
        className="flex items-center justify-center h-12 border-t border-surface-800/50
                   text-surface-500 hover:text-surface-300 transition-colors"
      >
        {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </button>
    </aside>
  )
}

export function useSidebarWidth() {
  return 'pl-56'
}
