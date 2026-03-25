import { useState, useEffect, createContext, useContext } from 'react'

const PayloadContext = createContext(null)

export function PayloadProvider({ children }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/data/dashboard_payload.json')
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.json()
      })
      .then(d => { setData(d); setLoading(false) })
      .catch(e => { setError(e.message); setLoading(false) })
  }, [])

  return (
    <PayloadContext.Provider value={{ data, loading, error }}>
      {children}
    </PayloadContext.Provider>
  )
}

export function usePayload() {
  const ctx = useContext(PayloadContext)
  if (!ctx) throw new Error('usePayload must be inside PayloadProvider')
  return ctx
}

export function useSection(key) {
  const { data, loading, error } = usePayload()
  return { data: data?.[key] ?? null, loading, error }
}
