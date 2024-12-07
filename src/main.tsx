import React from 'react'
import ReactDOM from 'react-dom/client'
import { SpotifuApp } from './SpotifuApp'

import './styles.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <SpotifuApp />
    </BrowserRouter>
  </React.StrictMode>,
)
