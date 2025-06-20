import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Index from './index.jsx'
import './styles/styles.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
		<Index/>
  </BrowserRouter>,
)

