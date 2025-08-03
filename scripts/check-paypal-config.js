#!/usr/bin/env node

/**
 * Script para verificar la configuración de PayPal antes del build
 * Ejecutar con: node scripts/check-paypal-config.js
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("🔍 Verificando configuración de PayPal...\n");

// Verificar variables de entorno
const requiredEnvVars = ["VITE_PAYPAL_CLIENT_ID", "VITE_PAYPAL_ENVIRONMENT"];

let hasErrors = false;

// Leer archivo .env si existe
const envPath = path.join(process.cwd(), ".env");
const envVars = {};

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf8");
  envContent.split("\n").forEach((line) => {
    const [key, value] = line.split("=");
    if (key && value) {
      envVars[key.trim()] = value.trim();
    }
  });
}

// Verificar cada variable requerida
requiredEnvVars.forEach((varName) => {
  const value = process.env[varName] || envVars[varName];

  if (!value) {
    console.log(`❌ ${varName}: NO CONFIGURADO`);
    hasErrors = true;
  } else if (varName === "VITE_PAYPAL_CLIENT_ID") {
    if (value === "sb" || value.length < 10) {
      console.log(`⚠️  ${varName}: Parece ser un valor de prueba/inválido`);
      console.log(`   Valor actual: ${value}`);
      hasErrors = true;
    } else {
      console.log(`✅ ${varName}: Configurado correctamente`);
    }
  } else if (varName === "VITE_PAYPAL_ENVIRONMENT") {
    if (value === "live") {
      console.log(`✅ ${varName}: ${value} (PRODUCCIÓN)`);
    } else if (value === "sandbox") {
      console.log(
        `⚠️  ${varName}: ${value} (DESARROLLO - cambiar a 'live' para producción)`
      );
    } else {
      console.log(
        `❌ ${varName}: Valor inválido '${value}' (debe ser 'live' o 'sandbox')`
      );
      hasErrors = true;
    }
  }
});

console.log("\n📋 Checklist de producción:");
console.log("- [ ] Cuenta PayPal Business creada y verificada");
console.log("- [ ] Aplicación Live creada en developer.paypal.com");
console.log("- [ ] Variables de entorno configuradas en hosting");
console.log("- [ ] Pruebas en sandbox completadas");

if (hasErrors) {
  console.log("\n🚨 ERRORES ENCONTRADOS");
  console.log("No proceder con el build hasta resolver los problemas arriba.");
  console.log("Consulta PAYPAL_SETUP.md para instrucciones detalladas.");
  process.exit(1);
} else {
  console.log("\n✅ Configuración de PayPal verificada correctamente");
  console.log("Puedes proceder con el build para producción.");
}
