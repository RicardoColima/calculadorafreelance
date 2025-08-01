<template>
  <section id="resultados" class="w-screen py-16 bg-gray-100">
    <div class="w-screen px-0">
      <div class="max-w-7xl mx-auto px-4">
        <div class="space-y-6 w-full">
          
          <!-- Tarifa por hora -->
          <div class="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-xl shadow-xl border">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-2xl font-bold">💰 Tu tarifa por hora</h3>
              <div class="text-3xl">⏰</div>
            </div>
            <div class="text-5xl font-bold mb-2">{{ simboloMoneda }}{{ tarifaHora }}</div>
            <p class="text-blue-100 text-lg">Mínimo: {{ simboloMoneda }}{{ tarifaMinima }}</p>
            <div class="mt-4 p-3 bg-blue-500 bg-opacity-50 rounded-lg">
              <p class="text-sm text-blue-100">Basado en tu experiencia: {{ experienciaTexto }}</p>
            </div>
          </div>
          
          <!-- Proyectos -->
          <div class="bg-white p-8 rounded-xl shadow-xl border">
            <h3 class="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <span class="mr-3">📋</span> Tarifas por proyecto
            </h3>
            <div class="space-y-4">
              <div class="flex justify-between items-center p-5 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                <div>
                  <span class="font-semibold text-gray-800">Proyecto pequeño</span>
                  <p class="text-sm text-gray-600">~5 horas</p>
                </div>
                <span class="font-bold text-2xl text-blue-600">{{ simboloMoneda }}{{ proyectoChico }}</span>
              </div>
              <div class="flex justify-between items-center p-5 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                <div>
                  <span class="font-semibold text-gray-800">Proyecto mediano</span>
                  <p class="text-sm text-gray-600">~20 horas</p>
                </div>
                <span class="font-bold text-2xl text-purple-600">{{ simboloMoneda }}{{ proyectoMedio }}</span>
              </div>
              <div class="flex justify-between items-center p-5 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200">
                <div>
                  <span class="font-semibold text-gray-800">Proyecto grande</span>
                  <p class="text-sm text-gray-600">~50 horas</p>
                </div>
                <span class="font-bold text-2xl text-green-600">{{ simboloMoneda }}{{ proyectoGrande }}</span>
              </div>
            </div>
          </div>
          
          <!-- Objetivos -->
          <div class="bg-gradient-to-br from-purple-600 to-purple-700 text-white p-8 rounded-xl shadow-xl">
            <h3 class="text-2xl font-bold mb-6 flex items-center">
              <span class="mr-3">🎯</span> Análisis financiero
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-purple-500 bg-opacity-50 p-4 rounded-lg">
                <p class="text-purple-100 text-sm">Objetivo mensual</p>
                <p class="text-3xl font-bold">{{ simboloMoneda }}{{ objetivo }}</p>
              </div>
              <div class="bg-purple-500 bg-opacity-50 p-4 rounded-lg">
                <p class="text-purple-100 text-sm">Horas necesarias</p>
                <p class="text-3xl font-bold">{{ horasNecesarias }}h</p>
              </div>
              <div class="bg-purple-500 bg-opacity-50 p-4 rounded-lg">
                <p class="text-purple-100 text-sm">Fondo de emergencia</p>
                <p class="text-3xl font-bold">{{ simboloMoneda }}{{ fondoEmergencia }}</p>
              </div>
              <div class="bg-purple-500 bg-opacity-50 p-4 rounded-lg">
                <p class="text-purple-100 text-sm">Ingresos anuales</p>
                <p class="text-3xl font-bold">{{ simboloMoneda }}{{ ingresosAnuales }}</p>
              </div>
            </div>
          </div>
          
          <!-- Botón PDF -->
          <button 
            @click="$emit('descargarPDF')" 
            class="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-6 rounded-xl text-xl font-bold hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-xl flex items-center justify-center space-x-3"
          >
            <span class="text-2xl">📄</span>
            <span>Descargar Reporte PDF</span>
            <span class="text-2xl">⬇️</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

// Props
const props = defineProps({
  simboloMoneda: String,
  tarifaHora: Number,
  tarifaMinima: Number,
  experiencia: String,
  proyectoChico: Number,
  proyectoMedio: Number,
  proyectoGrande: Number,
  objetivo: Number,
  horasNecesarias: Number,
  fondoEmergencia: Number,
  ingresosAnuales: Number
})

// Emits
defineEmits(['descargarPDF'])

// Texto de experiencia
const experienciaTexto = computed(() => {
  const textos = {
    principiante: '🌱 Principiante',
    medio: '🚀 Intermedio',
    experto: '👑 Experto'
  }
  return textos[props.experiencia]
})
</script>