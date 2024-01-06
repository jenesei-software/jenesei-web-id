import App from './app.tsx'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@styles/index.css'
import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import ReactDOM from 'react-dom/client'
import 'react-ripple-click/dist/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
