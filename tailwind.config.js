/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#0f172a',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617'
        },
        card: {
          DEFAULT: '#1e293b',
          hover: '#263548'
        },
        accent: {
          DEFAULT: '#3b82f6',
          light: '#60a5fa',
          dark: '#2563eb'
        },
        ok: { DEFAULT: '#22c55e', light: '#4ade80', bg: 'rgba(34,197,94,.1)' },
        warn: { DEFAULT: '#f59e0b', light: '#fbbf24', bg: 'rgba(245,158,11,.1)' },
        danger: { DEFAULT: '#ef4444', light: '#f87171', bg: 'rgba(239,68,68,.1)' },
        info: { DEFAULT: '#3b82f6', light: '#60a5fa', bg: 'rgba(59,130,246,.1)' }
      },
      borderRadius: {
        xl: '16px',
        '2xl': '20px'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,.12)',
        card: '0 1px 3px rgba(0,0,0,.2), 0 1px 2px rgba(0,0,0,.12)',
        'card-hover': '0 4px 16px rgba(0,0,0,.25)'
      },
      backdropBlur: {
        glass: '16px'
      },
      animation: {
        'gauge-fill': 'gaugeFill 1.2s ease-out forwards',
        'fade-in': 'fadeIn .4s ease-out',
        'slide-up': 'slideUp .4s ease-out',
        'pulse-dot': 'pulseDot 2s infinite'
      },
      keyframes: {
        gaugeFill: {
          '0%': { strokeDashoffset: '283' },
          '100%': { strokeDashoffset: 'var(--gauge-offset)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.35' }
        }
      }
    }
  },
  plugins: []
}
