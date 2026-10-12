import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './styles/theme.css'
import './styles/global.css'

import App from './App.jsx'

// GitHub Pages serves the app from /portfolio/, so the router must know its
// basename — otherwise in-app links and refreshes resolve to the wrong paths.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/portfolio">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
