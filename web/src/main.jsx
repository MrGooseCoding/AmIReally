import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Index from './index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Index />
  </StrictMode>,
)
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' // Asegúrate de tener este archivo o cámbialo por el que uses

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
