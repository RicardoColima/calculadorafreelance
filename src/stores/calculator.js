import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCalculatorStore = defineStore('calculator', () => {
  // Estado reactivo
  const formData = ref({
    gastosMensuales: 0,
    horasSemanales: 0,
    objetivoIngresos: 0,
    diasVacaciones: 0,
    nivelExperiencia: 'junior',
    tipoServicio: 'diseno',
    nombreUsuario: '',
    moneda: 'USD'
  })

  const resultados = ref({
    tarifaMinimaPorHora: 0,
    tarifaRecomendadaPorHora: 0,
    tarifaSemana: 0,
    tarifaProyectoChico: 0,
    tarifaProyectoMedio: 0,
    tarifaProyectoGrande: 0,
    tarifaMensual: 0
  })

  // Multiplicadores por experiencia
  const multiplicadoresExperiencia = {
    junior: 1.0,
    intermedio: 1.3,
    senior: 1.6,
    experto: 2.0
  }

  // Multiplicadores por tipo de servicio
  const multiplicadoresServicio = {
    diseno: 1.0,
    programacion: 1.2,
    marketing: 0.9,
    redaccion: 0.8,
    fotografia: 1.1,
    consultoria: 1.4,
    otro: 1.0
  }

  // Cálculos computados
  const calcularTarifas = () => {
    const { gastosMensuales, horasSemanales, objetivoIngresos, diasVacaciones, nivelExperiencia, tipoServicio } = formData.value
    
    if (!gastosMensuales || !horasSemanales || !objetivoIngresos) {
      return
    }

    // Calcular semanas trabajadas al año (52 semanas - vacaciones)
    const semanasVacaciones = Math.ceil(diasVacaciones / 7)
    const semanasTrabajadas = 52 - semanasVacaciones
    
    // Horas totales trabajadas al año
    const horasTotalesAnuales = horasSemanales * semanasTrabajadas
    
    // Ingresos anuales necesarios (gastos + objetivo)
    const ingresosAnualesNecesarios = (gastosMensuales * 12) + (objetivoIngresos * 12)
    
    // Tarifa mínima por hora (solo para cubrir gastos)
    const tarifaMinima = (gastosMensuales * 12) / horasTotalesAnuales
    
    // Tarifa recomendada por hora (gastos + objetivo + margen)
    let tarifaRecomendada = ingresosAnualesNecesarios / horasTotalesAnuales
    
    // Aplicar multiplicadores
    tarifaRecomendada *= multiplicadoresExperiencia[nivelExperiencia]
    tarifaRecomendada *= multiplicadoresServicio[tipoServicio]
    
    // Agregar margen de seguridad del 20%
    tarifaRecomendada *= 1.2
    
    // Calcular tarifas por proyecto
    const tarifaSemana = tarifaRecomendada * horasSemanales
    const tarifaProyectoChico = tarifaRecomendada * 8  // 8 horas
    const tarifaProyectoMedio = tarifaRecomendada * 20 // 20 horas
    const tarifaProyectoGrande = tarifaRecomendada * 40 // 40 horas
    const tarifaMensual = tarifaRecomendada * (horasSemanales * 4.33) // 4.33 semanas promedio por mes
    
    resultados.value = {
      tarifaMinimaPorHora: Math.round(tarifaMinima),
      tarifaRecomendadaPorHora: Math.round(tarifaRecomendada),
      tarifaSemana: Math.round(tarifaSemana),
      tarifaProyectoChico: Math.round(tarifaProyectoChico),
      tarifaProyectoMedio: Math.round(tarifaProyectoMedio),
      tarifaProyectoGrande: Math.round(tarifaProyectoGrande),
      tarifaMensual: Math.round(tarifaMensual)
    }
  }

  // Función para actualizar datos del formulario
  const actualizarFormData = (nuevosDatos) => {
    formData.value = { ...formData.value, ...nuevosDatos }
    calcularTarifas()
  }

  // Función para resetear el formulario
  const resetearFormulario = () => {
    formData.value = {
      gastosMensuales: 0,
      horasSemanales: 0,
      objetivoIngresos: 0,
      diasVacaciones: 0,
      nivelExperiencia: 'junior',
      tipoServicio: 'diseno',
      nombreUsuario: '',
      moneda: 'USD'
    }
    resultados.value = {
      tarifaMinimaPorHora: 0,
      tarifaRecomendadaPorHora: 0,
      tarifaSemana: 0,
      tarifaProyectoChico: 0,
      tarifaProyectoMedio: 0,
      tarifaProyectoGrande: 0,
      tarifaMensual: 0
    }
  }

  // Computed para verificar si el formulario está completo
  const formularioCompleto = computed(() => {
    return formData.value.gastosMensuales > 0 && 
           formData.value.horasSemanales > 0 && 
           formData.value.objetivoIngresos > 0
  })

  return {
    formData,
    resultados,
    actualizarFormData,
    calcularTarifas,
    resetearFormulario,
    formularioCompleto
  }
})