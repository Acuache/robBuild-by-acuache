import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

// Validar configuración de PayPal
const paypalClientId = import.meta.env.VITE_PAYPAL_CLIENT_ID
const paypalEnvironment = import.meta.env.VITE_PAYPAL_ENVIRONMENT || "sandbox"

if (!paypalClientId) {
  console.error("❌ VITE_PAYPAL_CLIENT_ID no está configurado. PayPal no funcionará.")
}

// Configuración inicial de PayPal
const initialOptions = {
  clientId: paypalClientId || "",
  currency: "USD",  // USD es requerido (PEN no está soportado)
  intent: "capture",
  locale: "es_PE",  // Español - Perú
  "disable-funding": "card,credit,paylater,venmo",
  "data-environment": paypalEnvironment,
  components: "buttons,marks,messages",
}

createRoot(document.getElementById('root')!).render(
  <PayPalScriptProvider options={initialOptions}>
    <App />
  </PayPalScriptProvider>
)
