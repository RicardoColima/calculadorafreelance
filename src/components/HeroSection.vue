<template>
  <section class="w-screen bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 text-white py-24 relative overflow-hidden">
    <!-- Elementos decorativos de fondo -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-48 h-48 bg-yellow-300 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-300 rounded-full blur-3xl"></div>
    </div>
    
    <div class="w-screen px-4 md:px-8 text-center relative z-10">
      <div class="max-w-5xl mx-auto">
        <!-- Badge -->
        <div class="inline-flex items-center px-6 py-3 bg-white bg-opacity-20 rounded-full backdrop-blur-sm mb-8">
          <span class="text-sm font-semibold">✨ Gratis • Profesional • Instantáneo</span>
        </div>
        
        <!-- Título principal -->
        <h2 class="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          Calcula tu 
          <span class="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
            Tarifa Ideal
          </span>
        </h2>
        
        <!-- Subtítulo -->
        <p class="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Herramienta profesional para freelancers que quieren establecer precios justos, rentables y competitivos en el mercado
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Este componente no necesita lógica adicional por ahora
</script>