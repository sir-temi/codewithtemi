import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './static/css/index.css'
import "./static/css/bootstrap.min.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
