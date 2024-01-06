import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.tsx'

import '@styles/index.css'
import '@styles/fonts.css'
import 'react-ripple-click/dist/index.css'
import 'react-datepicker/dist/react-datepicker.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
