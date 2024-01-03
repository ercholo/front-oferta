import React from 'react'
import ReactDOM from 'react-dom/client'
import { OfertaApp } from './OfertaApp.jsx'
import { PantallaOfertas } from './pantallas/PantallaOfertas.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PantallaOfertas />
  </React.StrictMode>,
)
