<template>
  <section class="w-screen bg-white py-16">
    <div class="w-screen px-4 md:px-8">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h3 class="text-4xl font-bold text-gray-800 mb-4">📊 Nuestra Comunidad</h3>
          <p class="text-xl text-gray-600">Miles de freelancers ya confían en nuestra herramienta</p>
        </div>
        
        <!-- Estadísticas -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center border border-blue-200 hover:shadow-lg transition-shadow">
            <div class="text-5xl font-bold text-blue-600 mb-3">{{ usuariosCalculados.toLocaleString() }}+</div>
            <div class="text-lg text-blue-800 font-medium">Freelancers confían en nosotros</div>
            <div class="text-sm text-blue-600 mt-2">Y creciendo cada día</div>
          </div>
          <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center border border-green-200 hover:shadow-lg transition-shadow">
            <div class="text-5xl font-bold text-green-600 mb-3">95%</div>
            <div class="text-lg text-green-800 font-medium">Precisión en cálculos</div>
            <div class="text-sm text-green-600 mt-2">Algoritmos probados</div>
          </div>
          <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center border border-purple-200 hover:shadow-lg transition-shadow">
            <div class="text-5xl font-bold text-purple-600 mb-3">24/7</div>
            <div class="text-lg text-purple-800 font-medium">Disponible siempre</div>
            <div class="text-sm text-purple-600 mt-2">Sin interrupciones</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Props
defineProps({
  usuariosCalculados: {
    type: Number,
    required: true
  }
})
</script>