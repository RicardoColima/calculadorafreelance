<template>
  <div class="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-2xl w-full border border-blue-100 hover:shadow-3xl transition-all duration-300">
    <div class="text-center mb-8">
      <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
        <span class="text-3xl text-white">📊</span>
      </div>
      <h3 class="text-3xl font-bold text-gray-800 mb-2">Datos de tu negocio</h3>
      <p class="text-gray-600">Completa la información para calcular tus tarifas ideales</p>
    </div>
    
    <form @submit.prevent="$emit('calcular')" class="space-y-8">
      <!-- Nombre -->
      <div class="group">
        <label class="block text-sm font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">👤 Nombre completo</label>
        <input 
          :value="nombre" 
          @input="$emit('update:nombre', $event.target.value)"
          type="text" 
          placeholder="Ej: Juan Pérez"
          class="w-full p-4 border-2 border-gray-300 rounded-xl text-lg text-gray-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-300 hover:border-blue-400 bg-white shadow-sm"
        >
      </div>
      
      <!-- Gastos mensuales -->
      <div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div class="md:col-span-2 group">
            <label class="block text-sm font-bold mb-3 text-gray-800 group-hover:text-green-600 transition-colors">🧾 1. Gastos mensuales ({{ simboloMoneda }})</label>
            <input 
              :value="gastos" 
              @input="$emit('update:gastos', Number($event.target.value))"
              type="number" 
              placeholder="2000"
              class="w-full p-4 border-2 border-gray-300 rounded-xl text-lg text-gray-900 focus:border-green-500 focus:ring-4 focus:ring-green-100 focus:outline-none transition-all duration-300 hover:border-green-400 bg-white shadow-sm"
              required
            >
          </div>
          <div class="group">
            <label class="block text-sm font-bold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors">💱 Moneda</label>
            <select 
              :value="moneda" 
              @change="$emit('update:moneda', $event.target.value)"
              class="w-full p-4 border-2 border-gray-300 rounded-xl text-lg text-gray-900 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 focus:outline-none transition-all duration-300 hover:border-purple-400 bg-white shadow-sm"
            >
              <option v-for="(info, codigo) in monedas" :key="codigo" :value="codigo">
                {{ info.simbolo }} {{ codigo }} - {{ info.nombre }}
              </option>
            </select>
          </div>
        </div>
        <p class="text-xs text-gray-600 mt-1">Incluye renta, comida, servicios, transporte, etc.</p>
      </div>
      
      <!-- Disponibilidad de tiempo -->
      <div class="group">
        <label class="block text-sm font-bold mb-3 text-gray-800 group-hover:text-orange-600 transition-colors">🕒 2. Disponibilidad de tiempo (horas/semana)</label>
        <input 
          :value="horas" 
          @input="$emit('update:horas', Number($event.target.value))"
          type="number" 
          placeholder="40"
          class="w-full p-4 border-2 border-gray-300 rounded-xl text-lg text-gray-900 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 focus:outline-none transition-all duration-300 hover:border-orange-400 bg-white shadow-sm"
          required
        >
        <p class="text-sm text-gray-600 mt-2 bg-orange-50 p-3 rounded-lg border-l-4 border-orange-300">💡 ¿Cuántas horas puedes dedicar al trabajo freelance?</p>
      </div>
      
      <!-- Objetivo financiero -->
      <div class="group">
        <label class="block text-sm font-bold mb-3 text-gray-800 group-hover:text-emerald-600 transition-colors">🎯 3. Objetivo financiero mensual ({{ simboloMoneda }})</label>
        <input 
          :value="objetivo" 
          @input="$emit('update:objetivo', Number($event.target.value))"
          type="number" 
          placeholder="3000"
          class="w-full p-4 border-2 border-gray-300 rounded-xl text-lg text-gray-900 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 focus:outline-none transition-all duration-300 hover:border-emerald-400 bg-white shadow-sm"
          required
        >
        <p class="text-sm text-gray-600 mt-2 bg-emerald-50 p-3 rounded-lg border-l-4 border-emerald-300">💰 ¿Cuánto quieres ganar mensualmente?</p>
      </div>
      
      <!-- Nivel de experiencia -->
      <div class="group">
        <label class="block text-sm font-bold mb-3 text-gray-800 group-hover:text-yellow-600 transition-colors">⭐ Nivel de experiencia</label>
        <select 
          :value="experiencia" 
          @change="$emit('update:experiencia', $event.target.value)"
          class="w-full p-4 border-2 border-gray-300 rounded-xl text-lg text-gray-900 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 focus:outline-none transition-all duration-300 hover:border-yellow-400 bg-white shadow-sm"
        >
          <option value="principiante">🌱 Principiante (0-1 años)</option>
          <option value="medio">🚀 Intermedio (1-3 años)</option>
          <option value="experto">👑 Experto (3+ años)</option>
        </select>
      </div>
      
      <!-- Tipo de trabajo -->
      <div class="group">
        <label class="block text-sm font-bold mb-3 text-gray-800 group-hover:text-indigo-600 transition-colors">💼 Tipo de trabajo</label>
        <select 
          :value="tipoTrabajo" 
          @change="$emit('update:tipoTrabajo', $event.target.value)"
          class="w-full p-4 border-2 border-gray-300 rounded-xl text-lg text-gray-900 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 focus:outline-none transition-all duration-300 hover:border-indigo-400 bg-white shadow-sm"
        >
          <option value="diseno">🎨 Diseño Gráfico</option>
          <option value="programacion">💻 Programación</option>
          <option value="redes">🌐 Redes Sociales</option>
          <option value="marketing">📈 Marketing Digital</option>
          <option value="redaccion">✍️ Redacción</option>
          <option value="consultoria">🎯 Consultoría</option>
          <option value="otro">🔧 Otro</option>
        </select>
      </div>
      
      <!-- % de imprevistos -->
      <div class="group">
        <label class="block text-sm font-bold mb-3 text-gray-800 group-hover:text-red-600 transition-colors">🛡️ % de imprevistos o ahorro</label>
        <input 
          :value="imprevistos" 
          @input="$emit('update:imprevistos', Number($event.target.value))"
          type="number" 
          placeholder="20"
          class="w-full p-4 border-2 border-gray-300 rounded-xl text-lg text-gray-900 focus:border-red-500 focus:ring-4 focus:ring-red-100 focus:outline-none transition-all duration-300 hover:border-red-400 bg-white shadow-sm"
        >
        <p class="text-sm text-gray-600 mt-2 bg-red-50 p-3 rounded-lg border-l-4 border-red-300">🔒 Recomendado: 15-25% para emergencias y ahorros</p>
      </div>
      
      <div class="pt-4">
        <button 
          type="submit" 
          class="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-5 px-8 rounded-2xl text-xl font-bold hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-xl relative overflow-hidden group"
        >
          <span class="relative z-10 flex items-center justify-center gap-3">
            <span class="text-2xl group-hover:animate-bounce">🚀</span>
            Calcular Tarifas Profesionales
            <span class="text-2xl group-hover:animate-pulse">✨</span>
          </span>
          <div class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Props
const props = defineProps({
  nombre: String,
  gastos: Number,
  horas: Number,
  objetivo: Number,
  experiencia: String,
  tipoTrabajo: String,
  imprevistos: Number,
  moneda: String
})

// Emits
defineEmits([
  'update:nombre',
  'update:gastos',
  'update:horas',
  'update:objetivo',
  'update:experiencia',
  'update:tipoTrabajo',
  'update:imprevistos',
  'update:moneda',
  'calcular'
])

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
</script>