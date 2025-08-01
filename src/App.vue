<script setup>
import { createPinia } from 'pinia'
import CalculadoraFreelancer from './components/CalculadoraFreelancer.vue'

const pinia = createPinia()
</script>

<template>
  <div class="w-full">
    <CalculadoraFreelancer />
  </div>
</template>

<style scoped>
/* Estilos adicionales si son necesarios */
</style>
