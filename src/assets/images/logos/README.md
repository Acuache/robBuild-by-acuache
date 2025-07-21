# 📁 Carpeta de Logos

Esta carpeta contiene todos los logos de la aplicación organizados con un sistema de "barrel exports" usando `index.ts`.

## 🎯 ¿Cómo funciona?

### 1. Agregar nuevos logos

```bash
# Simplemente arrastra tus imágenes aquí:
src/assets/images/logos/
  ├── logo1.png
  ├── logo2.png
  ├── logo-empresa.png
  └── index.ts
```

### 2. Registrar en index.ts

```typescript
// Agrega esta línea por cada nueva imagen:
export { default as miNuevoLogo } from "./mi-nuevo-logo.png";
```

### 3. Usar en componentes

```typescript
// Una sola importación para múltiples logos:
import { logo1, logo2, logoEmpresa } from "../assets/images/logos";

// Usar en JSX:
<img src={logo1} alt="Logo 1" className="h-12 w-auto" />;
```

## ✅ Ventajas

- **Limpio**: Una sola línea de importación
- **Organizado**: Todos los logos centralizados
- **Fácil**: Cambiar nombres o rutas desde un solo lugar
- **Autocompletado**: Tu editor te ayuda con las sugerencias

## 🔧 Ejemplo completo

```typescript
// En tu componente
import { logo1, logo2 } from "../assets/images/logos";

const MiComponente = () => {
  return (
    <div>
      <img src={logo1} alt="Logo principal" />
      <img src={logo2} alt="Logo secundario" />
    </div>
  );
};
```

¡Ahora puedes ver el ejemplo en acción en tu navegador! 🚀
