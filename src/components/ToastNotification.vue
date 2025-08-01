<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 transform translate-y-2 scale-95"
    enter-to-class="opacity-100 transform translate-y-0 scale-100"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 transform translate-y-0 scale-100"
    leave-to-class="opacity-0 transform translate-y-2 scale-95"
  >
    <div 
      v-if="mostrar"
      class="fixed top-6 right-6 z-50 max-w-md"
    >
      <div class="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-2xl shadow-2xl border border-orange-300">
        <div class="flex items-start gap-3">
          <div class="flex-shrink-0">
            <div class="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <span class="text-lg">⚠️</span>
            </div>
          </div>
          <div class="flex-1">
            <h4 class="font-bold text-sm mb-1">Campos Requeridos</h4>
            <p class="text-sm opacity-90">{{ mensaje }}</p>
            <p class="text-xs opacity-75 mt-2">💡 Completa todos los campos para continuar</p>
          </div>
          <button 
            @click="$emit('cerrar')"
            class="flex-shrink-0 text-white hover:text-orange-200 transition-colors"
          >
            <span class="text-lg">✕</span>
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
// Props
defineProps({
  mostrar: {
    type: Boolean,
    required: true
  },
  mensaje: {
    type: String,
    required: true
  }
})

// Emits
defineEmits(['cerrar'])
</script>