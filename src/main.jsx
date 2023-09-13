import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'//cant use HasRouter without importing

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)
