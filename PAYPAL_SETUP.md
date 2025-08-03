# Configuración de PayPal para Producción

## 📋 Checklist antes de ir a producción

- [ ] Crear cuenta PayPal Business
- [ ] Configurar aplicación Live en PayPal Developer
- [ ] Agregar dominios autorizados
- [ ] Configurar variables de entorno
- [ ] Probar en sandbox primero
- [ ] Verificar conversión de moneda

## 🔧 Paso 1: Crear aplicación en PayPal Developer

1. Ve a [developer.paypal.com](https://developer.paypal.com)
2. Inicia sesión con tu cuenta PayPal Business
3. Ve a **"My Apps & Credentials"**
4. Click en **"Create App"**

### Configuración de la aplicación:

```
App Name: RobBuild Donations
Merchant: tu-cuenta@paypal.com
Platform: Web
Intent: Capture
Features: ☑️ Accept Payments
Environment: Live (IMPORTANTE: NO Sandbox)
```

5. Click **"Create App"**
6. Copia tu **Client ID** (lo necesitarás después)

## 🌐 Paso 2: Configurar dominios autorizados (si es necesario)

En tu aplicación de PayPal Live:

1. Ve a **"My Apps & Credentials"**
2. **Selecciona tu aplicación Live**
3. Busca la sección **"Features"** → **"Accept Payments"**
4. Click en **"Add Domain"** o **"Configure"**
5. Añade tus dominios:
   ```
   https://tudominio.com
   https://www.tudominio.com
   ```
6. Guarda los cambios

**⚠️ NOTA**: En aplicaciones nuevas de PayPal, esto puede no ser necesario ya que valida automáticamente desde el referrer del navegador. Prueba primero sin configurar dominios.

## 🔑 Paso 3: Variables de entorno

### Para desarrollo (.env):

```bash
VITE_PAYPAL_CLIENT_ID=tu_sandbox_client_id
VITE_PAYPAL_ENVIRONMENT=sandbox
```

### Para producción (.env.production):

```bash
VITE_PAYPAL_CLIENT_ID=AQkquBDf1zctJOWGKWUEtKXm6qVhueUEMvXO_8BrRoG6aBDJy...
VITE_PAYPAL_ENVIRONMENT=live
```

## 🚀 Paso 4: Configurar en tu hosting

### En Vercel:

1. Ve a tu proyecto → **Settings** → **Environment Variables**
2. Añade:
   ```
   VITE_PAYPAL_CLIENT_ID = tu_client_id_live
   VITE_PAYPAL_ENVIRONMENT = live
   ```

### En Netlify:

1. **Site Settings** → **Environment Variables**
2. Añade las mismas variables

### En otros hostings:

Busca la sección de "Environment Variables" o "Config Vars"

## 💰 Paso 5: Verificar conversión de moneda

La aplicación convierte soles peruanos a USD automáticamente:

- **Tasa actual**: 1 PEN = 0.27 USD (aproximada)
- **Actualizar**: Revisa la tasa en `src/pages/Donar.tsx` línea 6

```typescript
const PEN_TO_USD = 0.27; // Actualizar según tasa actual
```

## 🧪 Paso 6: Probar antes de producción

1. **En sandbox**: Usa credenciales de prueba
2. **Transacciones de prueba**: Usa cuentas PayPal de prueba
3. **Verificar amounts**: Confirma que los montos se conviertan correctamente

## ✅ Verificación final

Antes de lanzar, confirma:

- [ ] Client ID live configurado
- [ ] Dominios autorizados en PayPal
- [ ] Variables de entorno en hosting
- [ ] Cuenta PayPal Business verificada
- [ ] Pruebas en sandbox exitosas

## 🚨 Problemas comunes

### "PayPal button not loading"

- Verifica que `VITE_PAYPAL_CLIENT_ID` esté configurado
- Revisa la consola del navegador para errores

### "Transaction failed"

- Confirma que tu dominio esté autorizado en PayPal
- Verifica que uses credenciales Live (no Sandbox)

### "Invalid amount"

- Revisa la conversión PEN → USD
- Confirma que el monto esté en rango válido

## 📞 Soporte

Si tienes problemas:

1. Revisa los logs de PayPal Developer Console
2. Verifica la configuración paso a paso
3. Contacta al soporte de PayPal si es necesario

## 🔄 Mantener actualizado

- **Tasa de cambio**: Actualizar mensualmente
- **Credenciales**: Revisar anualmente
- **Dominios**: Actualizar si cambias hosting
