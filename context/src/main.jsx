import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CounterProvider } from './context/CounterContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
    <CounterProvider>
      <App />
    </CounterProvider>
    </CartProvider>
  </StrictMode>,
)
