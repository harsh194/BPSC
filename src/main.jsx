import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { BPSCProvider } from './context/BPSCContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <BPSCProvider>
        <App />
      </BPSCProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
