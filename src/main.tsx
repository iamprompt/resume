import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ModeProvider } from './hooks/useMode'

import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ModeProvider>
      <App />
    </ModeProvider>
  </React.StrictMode>
)
