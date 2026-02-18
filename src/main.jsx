import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import FormSkills from './FormSkills.jsx'
import Conditional from './Conditional'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Conditional  />
  </StrictMode>,
)
