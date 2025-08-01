<template>
  <div class="space-y-6">
    <!-- Guía Rápida -->
    <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-300">
      <div class="text-center mb-6">
        <div class="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-3">
          <span class="text-2xl text-white">💡</span>
        </div>
        <h3 class="text-xl font-bold text-gray-800 mb-2">Guía Rápida</h3>
        <p class="text-gray-600 text-sm">Tips para calcular tus tarifas correctamente</p>
      </div>
      
      <div class="space-y-4">
        <div class="flex items-start gap-3 p-3 bg-white rounded-lg border border-green-200">
          <span class="text-lg">📊</span>
          <div>
            <h4 class="font-semibold text-gray-800 text-sm">Gastos Reales</h4>
            <p class="text-gray-600 text-xs">Incluye todos tus gastos: renta, comida, servicios, herramientas</p>
          </div>
        </div>
        
        <div class="flex items-start gap-3 p-3 bg-white rounded-lg border border-green-200">
          <span class="text-lg">⏰</span>
          <div>
            <h4 class="font-semibold text-gray-800 text-sm">Tiempo Realista</h4>
            <p class="text-gray-600 text-xs">Considera tiempo para administración, ventas y descanso</p>
          </div>
        </div>
        
        <div class="flex items-start gap-3 p-3 bg-white rounded-lg border border-green-200">
          <span class="text-lg">🎯</span>
          <div>
            <h4 class="font-semibold text-gray-800 text-sm">Meta Clara</h4>
            <p class="text-gray-600 text-xs">Define objetivos específicos y alcanzables</p>
          </div>
        </div>
        
        <div class="flex items-start gap-3 p-3 bg-white rounded-lg border border-green-200">
          <span class="text-lg">🛡️</span>
          <div>
            <h4 class="font-semibold text-gray-800 text-sm">Fondo de Emergencia</h4>
            <p class="text-gray-600 text-xs">Siempre incluye un 15-25% para imprevistos</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Calculadora de Proyectos -->
    <div class="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-2xl shadow-xl border border-purple-100 hover:shadow-2xl transition-all duration-300">
      <div class="text-center mb-6">
        <div class="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full mb-3">
          <span class="text-2xl text-white">🧮</span>
        </div>
        <h3 class="text-xl font-bold text-gray-800 mb-2">Estimador Rápido</h3>
        <p class="text-gray-600 text-sm">Calcula proyectos según tu experiencia</p>
      </div>
      
      <div class="space-y-4">
        <div class="bg-white p-4 rounded-lg border border-purple-200">
          <h4 class="font-semibold text-gray-800 mb-3 text-sm">🌱 Principiante (0-1 años)</h4>
          <div class="grid grid-cols-2 gap-2 text-xs">
            <div class="text-gray-600">Logo simple:</div>
            <div class="font-semibold text-purple-600">{{ simboloMoneda }}{{ formatearNumero(preciosConvertidos.principiante.logoSimple.min) }}-{{ formatearNumero(preciosConvertidos.principiante.logoSimple.max) }} {{ moneda }}</div>
            <div class="text-gray-600">Web básica:</div>
            <div class="font-semibold text-purple-600">{{ simboloMoneda }}{{ formatearNumero(preciosConvertidos.principiante.webBasica.min) }}-{{ formatearNumero(preciosConvertidos.principiante.webBasica.max) }} {{ moneda }}</div>
          </div>
        </div>
        
        <div class="bg-white p-4 rounded-lg border border-purple-200">
          <h4 class="font-semibold text-gray-800 mb-3 text-sm">🚀 Intermedio (1-3 años)</h4>
          <div class="grid grid-cols-2 gap-2 text-xs">
            <div class="text-gray-600">Identidad completa:</div>
            <div class="font-semibold text-purple-600">{{ simboloMoneda }}{{ formatearNumero(preciosConvertidos.intermedio.identidadCompleta.min) }}-{{ formatearNumero(preciosConvertidos.intermedio.identidadCompleta.max) }} {{ moneda }}</div>
            <div class="text-gray-600">E-commerce:</div>
            <div class="font-semibold text-purple-600">{{ simboloMoneda }}{{ formatearNumero(preciosConvertidos.intermedio.ecommerce.min) }}-{{ formatearNumero(preciosConvertidos.intermedio.ecommerce.max) }} {{ moneda }}</div>
          </div>
        </div>
        
        <div class="bg-white p-4 rounded-lg border border-purple-200">
          <h4 class="font-semibold text-gray-800 mb-3 text-sm">👑 Experto (3+ años)</h4>
          <div class="grid grid-cols-2 gap-2 text-xs">
            <div class="text-gray-600">Consultoría:</div>
            <div class="font-semibold text-purple-600">{{ simboloMoneda }}{{ formatearNumero(preciosConvertidos.experto.consultoria.min) }}+ {{ moneda }}</div>
            <div class="text-gray-600">App completa:</div>
            <div class="font-semibold text-purple-600">{{ simboloMoneda }}{{ formatearNumero(preciosConvertidos.experto.appCompleta.min) }}+ {{ moneda }}</div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Métricas de Éxito -->
    <div class="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-2xl shadow-xl border border-orange-100 hover:shadow-2xl transition-all duration-300">
      <div class="text-center mb-6">
        <div class="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-full mb-3">
          <span class="text-2xl text-white">📈</span>
        </div>
        <h3 class="text-xl font-bold text-gray-800 mb-2">Métricas Clave</h3>
        <p class="text-gray-600 text-sm">Indicadores de un freelancer exitoso</p>
      </div>
      
      <div class="space-y-3">
        <div class="flex justify-between items-center p-3 bg-white rounded-lg border border-orange-200">
          <span class="text-sm font-medium text-gray-700">📊 Tasa de conversión</span>
          <span class="text-sm font-bold text-orange-600">20-30%</span>
        </div>
        
        <div class="flex justify-between items-center p-3 bg-white rounded-lg border border-orange-200">
          <span class="text-sm font-medium text-gray-700">⭐ Satisfacción cliente</span>
          <span class="text-sm font-bold text-orange-600">95%+</span>
        </div>
        
        <div class="flex justify-between items-center p-3 bg-white rounded-lg border border-orange-200">
          <span class="text-sm font-medium text-gray-700">🔄 Clientes recurrentes</span>
          <span class="text-sm font-bold text-orange-600">60%+</span>
        </div>
        
        <div class="flex justify-between items-center p-3 bg-white rounded-lg border border-orange-200">
          <span class="text-sm font-medium text-gray-700">💰 Incremento anual</span>
          <span class="text-sm font-bold text-orange-600">15-25%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Props
const props = defineProps({
  moneda: {
    type: String,
    required: true
  }
})

// Configuración de monedas
const monedas = {
  'USD': { simbolo: '$', nombre: 'Dólar Estadounidense' },
  'MXN': { simbolo: '$', nombre: 'Peso Mexicano' },
  'ARS': { simbolo: '$', nombre: 'Peso Argentino' },
  'COP': { simbolo: '$', nombre: 'Peso Colombiano' },
  'CLP': { simbolo: '$', nombre: 'Peso Chileno' },
  'PEN': { simbolo: 'S/', nombre: 'Sol Peruano' },
  'BRL': { simbolo: 'R$', nombre: 'Real Brasileño' },
  'UYU': { simbolo: '$', nombre: 'Peso Uruguayo' },
  'BOB': { simbolo: 'Bs', nombre: 'Boliviano' },
  'PYG': { simbolo: '₲', nombre: 'Guaraní Paraguayo' }
}

// Símbolo de moneda reactivo
const simboloMoneda = computed(() => monedas[props.moneda].simbolo)

// Tipos de cambio aproximados (base USD)
const tiposCambio = {
  'USD': 1,
  'MXN': 17,
  'ARS': 350,
  'COP': 4000,
  'CLP': 900,
  'PEN': 3.7,
  'BRL': 5,
  'UYU': 39,
  'BOB': 6.9,
  'PYG': 7300
}

// Precios base en USD
const preciosBase = {
  principiante: {
    logoSimple: { min: 200, max: 500 },
    webBasica: { min: 800, max: 1500 }
  },
  intermedio: {
    identidadCompleta: { min: 1000, max: 3000 },
    ecommerce: { min: 3000, max: 8000 }
  },
  experto: {
    consultoria: { min: 5000, max: null },
    appCompleta: { min: 15000, max: null }
  }
}

// Función para convertir precios
const convertirPrecio = (precioUSD) => {
  const cambio = tiposCambio[props.moneda] || 1
  const precioConvertido = Math.round(precioUSD * cambio)
  
  // Redondear a números más "amigables"
  if (precioConvertido < 100) return precioConvertido
  if (precioConvertido < 1000) return Math.round(precioConvertido / 10) * 10
  if (precioConvertido < 10000) return Math.round(precioConvertido / 100) * 100
  return Math.round(precioConvertido / 1000) * 1000
}

// Precios convertidos dinámicamente
const preciosConvertidos = computed(() => {
  return {
    principiante: {
      logoSimple: {
        min: convertirPrecio(preciosBase.principiante.logoSimple.min),
        max: convertirPrecio(preciosBase.principiante.logoSimple.max)
      },
      webBasica: {
        min: convertirPrecio(preciosBase.principiante.webBasica.min),
        max: convertirPrecio(preciosBase.principiante.webBasica.max)
      }
    },
    intermedio: {
      identidadCompleta: {
        min: convertirPrecio(preciosBase.intermedio.identidadCompleta.min),
        max: convertirPrecio(preciosBase.intermedio.identidadCompleta.max)
      },
      ecommerce: {
        min: convertirPrecio(preciosBase.intermedio.ecommerce.min),
        max: convertirPrecio(preciosBase.intermedio.ecommerce.max)
      }
    },
    experto: {
      consultoria: {
        min: convertirPrecio(preciosBase.experto.consultoria.min)
      },
      appCompleta: {
        min: convertirPrecio(preciosBase.experto.appCompleta.min)
      }
    }
  }
})

// Función para formatear números con separadores
const formatearNumero = (numero) => {
  return numero.toLocaleString()
}
</script>