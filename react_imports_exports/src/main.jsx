import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Child } from './App.jsx'
import { Audio } from './components/Media.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Child/>
    <Audio/>
  </StrictMode>,
)
