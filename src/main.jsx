import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserSettingsProvider } from './UserSettingsContext'  // 🔥 import the context provider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserSettingsProvider>    {/* Wrap your whole app here */}
      <App />
    </UserSettingsProvider>
  </StrictMode>,
)