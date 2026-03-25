import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PayloadProvider } from './hooks/usePayload'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PayloadProvider>
        <App />
      </PayloadProvider>
    </BrowserRouter>
  </React.StrictMode>
)
