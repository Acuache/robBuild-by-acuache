# RobBuild - Plataforma de Donaciones

Website de RobBuild con sistema de donaciones integrado con PayPal.

## 🚀 Desarrollo

```bash
npm install
npm run dev
```

## 🔧 Configuración de PayPal

### Para desarrollo:

1. Crea archivo `.env`:
   ```bash
   VITE_PAYPAL_CLIENT_ID=tu_sandbox_client_id
   VITE_PAYPAL_ENVIRONMENT=sandbox
   ```

### Para producción:

1. Sigue las instrucciones en [`PAYPAL_SETUP.md`](./PAYPAL_SETUP.md)
2. Configura variables de entorno en tu hosting

## 📦 Build para producción

```bash
# Verificar configuración antes del build
npm run check-paypal

# Build con verificación automática
npm run build:production
```

## 🌐 Características

- ✅ Sistema de donaciones con PayPal
- ✅ Conversión automática PEN → USD
- ✅ Interfaz responsive
- ✅ Validaciones de monto
- ✅ Modal de confirmación
- ✅ Configuración ambiente sandbox/live

## 💰 Sistema de Donaciones

### Conversión de moneda

- Los usuarios ven montos en **soles peruanos (PEN)**
- PayPal procesa pagos en **dólares americanos (USD)**
- Conversión automática con tasa actualizable

### Montos predefinidos

- S/ 30 soles (≈ $8.10 USD)
- S/ 50 soles (≈ $13.50 USD)
- S/ 100 soles (≈ $27.00 USD)
- S/ 200 soles (≈ $54.00 USD)
- Monto personalizado (S/ 1 - S/ 50,000)

## 📋 Antes de publicar

- [ ] Configurar PayPal Live App
- [ ] Añadir dominios autorizados
- [ ] Configurar variables de entorno
- [ ] Actualizar tasa de cambio PEN/USD
- [ ] Probar transacciones en sandbox

## 🔧 Stack Tecnológico

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Pagos**: PayPal React SDK
- **Routing**: React Router DOM
- **Build**: Vite + TypeScript

## 📁 Estructura del proyecto

```
src/
├── components/          # Componentes reutilizables
├── pages/              # Páginas principales
│   └── Donar.tsx       # Sistema de donaciones
├── data/               # Datos estáticos (JSON)
├── assets/             # Imágenes y recursos
└── routers/            # Configuración de rutas
```

## 🚀 Scripts disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build básico
- `npm run build:production` - Build con verificación PayPal
- `npm run check-paypal` - Verificar configuración PayPal
- `npm run preview` - Preview del build
- `npm run lint` - Linting del código

## 📞 Soporte

Para problemas con PayPal, consulta [`PAYPAL_SETUP.md`](./PAYPAL_SETUP.md) o contacta al soporte técnico.
