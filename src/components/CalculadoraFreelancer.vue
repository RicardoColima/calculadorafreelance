<template>
  <div class="w-screen min-h-screen m-0 p-0">
    <!-- Header -->
    <HeaderComponent />

    <!-- Hero Section -->
    <HeroSection />

    <!-- Main Content -->
    <section class="w-screen py-16 bg-gray-50">
      <div class="w-screen px-0">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            <!-- Formulario -->
            <FormularioCalculadora
              v-model:nombre="nombre"
              v-model:gastos="gastos"
              v-model:horas="horas"
              v-model:objetivo="objetivo"
              v-model:experiencia="experiencia"
              v-model:tipoTrabajo="tipoTrabajo"
              v-model:imprevistos="imprevistos"
              v-model:moneda="moneda"
              @calcular="calcular"
            />
            
            <!-- Panel Informativo -->
            <PanelInformativo :moneda="moneda" />
          </div>
        </div>
      </div>
    </section>

    <!-- Resultados Section -->
    <SeccionResultados
      :simboloMoneda="simboloMoneda"
      :tarifaHora="tarifaHora"
      :tarifaMinima="tarifaMinima"
      :experiencia="experiencia"
      :proyectoChico="proyectoChico"
      :proyectoMedio="proyectoMedio"
      :proyectoGrande="proyectoGrande"
      :objetivo="objetivo"
      :horasNecesarias="horasNecesarias"
      :fondoEmergencia="fondoEmergencia"
      :ingresosAnuales="ingresosAnuales"
      @descargarPDF="descargarPDF"
    />

    <!-- Estadísticas Section -->
    <SeccionEstadisticas :usuariosCalculados="usuariosCalculados" />

    <!-- Tips Section -->
    <SeccionConsejos />

    <!-- Footer -->
    <FooterComponent />
    
    <!-- Toast de Validación -->
    <ToastNotification
      :mostrar="mostrarToast"
      :mensaje="mensajeToast"
      @cerrar="mostrarToast = false"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import HeaderComponent from './HeaderComponent.vue'
import HeroSection from './HeroSection.vue'
import FormularioCalculadora from './FormularioCalculadora.vue'
import PanelInformativo from './PanelInformativo.vue'
import SeccionResultados from './SeccionResultados.vue'
import SeccionEstadisticas from './SeccionEstadisticas.vue'
import SeccionConsejos from './SeccionConsejos.vue'
import FooterComponent from './FooterComponent.vue'
import ToastNotification from './ToastNotification.vue'

// Datos del formulario
const nombre = ref('')
const gastos = ref(0)
const horas = ref(0)
const objetivo = ref(0)
const experiencia = ref('medio')
const tipoTrabajo = ref('programacion')
const imprevistos = ref(0)
const moneda = ref('USD')

// Contador de usuarios que han calculado
const usuariosCalculados = ref(10000)

// Estado del toast de validación
const mostrarToast = ref(false)
const mensajeToast = ref('')

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
const simboloMoneda = computed(() => monedas[moneda.value].simbolo)

// Multiplicadores por experiencia
const multiplicadoresExperiencia = {
  principiante: 1.0,
  medio: 1.3,
  experto: 1.8
}

// Multiplicadores por tipo de trabajo
const multiplicadoresTrabajo = {
  diseno: 1.0,
  programacion: 1.2,
  redes: 0.9,
  marketing: 1.1,
  redaccion: 0.8,
  consultoria: 1.5,
  otro: 1.0
}

// Texto de experiencia
const experienciaTexto = computed(() => {
  const textos = {
    principiante: '🌱 Principiante',
    medio: '🚀 Intermedio',
    experto: '👑 Experto'
  }
  return textos[experiencia.value]
})

// Cálculos principales
const tarifaMinima = computed(() => {
  if (!gastos.value || !horas.value) return 0
  const horasMes = horas.value * 4.33
  return Math.ceil(gastos.value / horasMes)
})

const tarifaHora = computed(() => {
  if (!gastos.value || !horas.value || !objetivo.value) return 0
  const horasMes = horas.value * 4.33
  const gastosPorHora = gastos.value / horasMes
  
  // Aplicar multiplicadores
  let tarifa = gastosPorHora
  tarifa *= multiplicadoresExperiencia[experiencia.value]
  tarifa *= multiplicadoresTrabajo[tipoTrabajo.value]
  
  // Agregar margen de imprevistos
  tarifa *= (1 + imprevistos.value / 100)
  
  // Calcular para alcanzar objetivo
  const tarifaObjetivo = objetivo.value / horasMes
  
  return Math.ceil(Math.max(tarifa, tarifaObjetivo))
})

const proyectoChico = computed(() => tarifaHora.value * 5)
const proyectoMedio = computed(() => tarifaHora.value * 20)
const proyectoGrande = computed(() => tarifaHora.value * 50)

const horasNecesarias = computed(() => {
  if (!objetivo.value || !tarifaHora.value) return 0
  return Math.ceil(objetivo.value / tarifaHora.value)
})

const fondoEmergencia = computed(() => {
  if (!gastos.value || !imprevistos.value) return 0
  return Math.ceil(gastos.value * (imprevistos.value / 100))
})

const ingresosAnuales = computed(() => {
  if (!objetivo.value) return 0
  return objetivo.value * 12
})

const mostrarToastValidacion = (mensaje) => {
  mensajeToast.value = mensaje
  mostrarToast.value = true
  
  // Auto-ocultar después de 4 segundos
  setTimeout(() => {
    mostrarToast.value = false
  }, 4000)
}

const calcular = () => {
  // Validar campos requeridos
  const camposRequeridos = [
    { campo: nombre.value, nombre: 'Nombre' },
    { campo: gastos.value, nombre: 'Gastos mensuales' },
    { campo: horas.value, nombre: 'Disponibilidad de tiempo' },
    { campo: objetivo.value, nombre: 'Objetivo financiero' }
  ]
  
  const camposFaltantes = camposRequeridos.filter(item => !item.campo || item.campo === 0)
  
  if (camposFaltantes.length > 0) {
    // Mostrar toast elegante de validación
    const mensaje = camposFaltantes.length === 1 
      ? `¡Oops! 😊 Falta completar: ${camposFaltantes[0].nombre}`
      : `¡Hey! 🌟 Faltan: ${camposFaltantes.map(item => item.nombre).join(', ')}`
    
    mostrarToastValidacion(mensaje)
    return
  }
  
  // Incrementar contador de usuarios
  usuariosCalculados.value++
  
  // Hacer scroll suave hacia los resultados después de un pequeño delay
  setTimeout(() => {
    const resultadosSection = document.querySelector('#resultados')
    if (resultadosSection) {
      resultadosSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      })
    }
  }, 300)
  
  console.log('Tarifas calculadas profesionalmente')
}

const descargarPDF = () => {
  // Validar que haya datos para generar el PDF
  if (!nombre.value || !gastos.value || !horas.value || !objetivo.value) {
    mostrarToastValidacion('¡Primero calcula tus tarifas para generar el PDF! 📊')
    return
  }
  
  // Crear el PDF usando jsPDF
  import('jspdf').then(({ default: jsPDF }) => {
    const doc = new jsPDF()
    
    // Paleta de colores profesional
     const azulPrimario = [30, 64, 175]     // Azul oscuro elegante
     const azulSecundario = [59, 130, 246]  // Azul medio
     const verdeExito = [16, 185, 129]      // Verde éxito
     const grisTexto = [55, 65, 81]         // Gris para texto
     const grisClaro = [248, 250, 252]      // Gris muy claro para fondos
     const naranjaAccento = [251, 146, 60]  // Naranja para acentos
     const blancoCard = [255, 255, 255]     // Blanco para tarjetas
     
     // === ENCABEZADO PRINCIPAL MEJORADO ===
     // Fondo principal del encabezado
     doc.setFillColor(...azulPrimario)
     doc.rect(0, 0, 210, 55, 'F')
     
     // Línea decorativa superior con gradiente simulado
     doc.setFillColor(...naranjaAccento)
     doc.rect(0, 0, 210, 4, 'F')
     
     // Borde inferior del encabezado
     doc.setDrawColor(200, 200, 200)
     doc.setLineWidth(0.5)
     doc.line(0, 55, 210, 55)
     
     // Título principal con mejor espaciado
     doc.setTextColor(255, 255, 255)
     doc.setFontSize(26)
     doc.setFont('helvetica', 'bold')
     doc.text('CALCULADORA FREELANCER', 20, 28)
     
     // Subtítulo mejorado
     doc.setFontSize(12)
     doc.setFont('helvetica', 'normal')
     doc.text('Reporte Profesional de Tarifas y Analisis Financiero', 20, 38)
     
     // Fecha con mejor formato
     const fechaActual = new Date()
     const fechaFormateada = fechaActual.toLocaleDateString('es-ES', { 
       year: 'numeric', month: 'long', day: 'numeric' 
     })
     doc.setFontSize(9)
     doc.setTextColor(220, 220, 220)
     doc.text(`Generado el ${fechaFormateada}`, 20, 48)
    
    // === SECCIÓN INFORMACIÓN PERSONAL ===
     let yPos = 75
     
     // Tarjeta con borde para información personal
     doc.setFillColor(...blancoCard)
     doc.rect(15, yPos - 8, 180, 38, 'F')
     doc.setDrawColor(220, 220, 220)
     doc.setLineWidth(0.5)
     doc.rect(15, yPos - 8, 180, 38, 'S')
     
     // Título de sección moderno
     doc.setTextColor(...azulPrimario)
     doc.setFontSize(14)
     doc.setFont('helvetica', 'bold')
     doc.text('INFORMACION PERSONAL', 20, yPos + 2)
     
     // Línea decorativa más sutil
     doc.setDrawColor(...naranjaAccento)
     doc.setLineWidth(1.5)
     doc.line(20, yPos + 5, 90, yPos + 5)
     
     // Datos en formato más estructurado
     doc.setTextColor(...grisTexto)
     doc.setFontSize(10)
     doc.setFont('helvetica', 'normal')
     
     yPos += 15
     doc.text('Nombre:', 20, yPos)
     doc.setFont('helvetica', 'bold')
     doc.text(nombre.value, 45, yPos)
     
     doc.setFont('helvetica', 'normal')
     doc.text('Moneda:', 110, yPos)
     doc.setFont('helvetica', 'bold')
     doc.text(monedas[moneda.value].nombre, 135, yPos)
     
     yPos += 12
     doc.setFont('helvetica', 'normal')
     doc.text('Experiencia:', 20, yPos)
     doc.setFont('helvetica', 'bold')
     doc.text(experiencia.value, 55, yPos)
     
     doc.setFont('helvetica', 'normal')
     doc.text('Tipo de trabajo:', 110, yPos)
     doc.setFont('helvetica', 'bold')
     doc.text(tipoTrabajo.value, 155, yPos)
    
    // === SECCIÓN DATOS DE NEGOCIO ===
     yPos += 20
     
     // Tarjeta para datos de negocio
     doc.setFillColor(...blancoCard)
     doc.rect(15, yPos - 8, 180, 48, 'F')
     doc.setDrawColor(220, 220, 220)
     doc.setLineWidth(0.5)
     doc.rect(15, yPos - 8, 180, 48, 'S')
     
     // Título de sección
     doc.setTextColor(...azulPrimario)
     doc.setFontSize(14)
     doc.setFont('helvetica', 'bold')
     doc.text('DATOS DE NEGOCIO', 20, yPos + 2)
     
     // Línea decorativa
     doc.setDrawColor(...naranjaAccento)
     doc.setLineWidth(1.5)
     doc.line(20, yPos + 5, 80, yPos + 5)
     
     // Datos en formato estructurado
     doc.setTextColor(...grisTexto)
     doc.setFontSize(10)
     doc.setFont('helvetica', 'normal')
     
     yPos += 15
     doc.text('Gastos mensuales:', 20, yPos)
     doc.setFont('helvetica', 'bold')
     doc.text(`${simboloMoneda.value}${gastos.value.toLocaleString()}`, 75, yPos)
     
     doc.setFont('helvetica', 'normal')
     doc.text('Disponibilidad:', 110, yPos)
     doc.setFont('helvetica', 'bold')
     doc.text(`${horas.value} hrs/semana`, 155, yPos)
     
     yPos += 12
     doc.setFont('helvetica', 'normal')
     doc.text('Objetivo financiero:', 20, yPos)
     doc.setFont('helvetica', 'bold')
     doc.text(`${simboloMoneda.value}${objetivo.value.toLocaleString()}`, 75, yPos)
     
     doc.setFont('helvetica', 'normal')
     doc.text('Imprevistos:', 110, yPos)
     doc.setFont('helvetica', 'bold')
     doc.text(`${imprevistos.value}%`, 155, yPos)
    
    // === SECCIÓN RESULTADOS DESTACADOS ===
     yPos += 25
     
     // Título de resultados con fondo
     doc.setFillColor(...verdeExito)
     doc.rect(15, yPos - 8, 180, 25, 'F')
     doc.setTextColor(255, 255, 255)
     doc.setFontSize(16)
     doc.setFont('helvetica', 'bold')
     doc.text('RESULTADOS CALCULADOS', 20, yPos + 5)
     
     yPos += 30
     
     // Tarjetas de resultados principales
     // Tarifa por hora
     doc.setFillColor(...blancoCard)
     doc.rect(20, yPos - 5, 75, 25, 'F')
     doc.setDrawColor(...verdeExito)
     doc.setLineWidth(1)
     doc.rect(20, yPos - 5, 75, 25, 'S')
     
     doc.setTextColor(...verdeExito)
     doc.setFontSize(10)
     doc.setFont('helvetica', 'bold')
     doc.text('TARIFA POR HORA', 25, yPos + 2)
     doc.setFontSize(14)
     doc.text(`${simboloMoneda.value}${tarifaHora.value.toLocaleString()}`, 25, yPos + 12)
     
     // Tarifa mensual
     doc.setFillColor(...blancoCard)
     doc.rect(105, yPos - 5, 75, 25, 'F')
     doc.setDrawColor(...verdeExito)
     doc.setLineWidth(1)
     doc.rect(105, yPos - 5, 75, 25, 'S')
     
     doc.setTextColor(...verdeExito)
     doc.setFontSize(10)
     doc.setFont('helvetica', 'bold')
     doc.text('TARIFA MENSUAL', 110, yPos + 2)
     doc.setFontSize(14)
     doc.text(`${simboloMoneda.value}${tarifaMinima.value.toLocaleString()}`, 110, yPos + 12)
     
     yPos += 35
     
     // Sección de detalles adicionales
     doc.setFillColor(...grisClaro)
     doc.rect(15, yPos - 5, 180, 35, 'F')
     doc.setDrawColor(200, 200, 200)
     doc.setLineWidth(0.5)
     doc.rect(15, yPos - 5, 180, 35, 'S')
     
     doc.setTextColor(...azulPrimario)
     doc.setFontSize(12)
     doc.setFont('helvetica', 'bold')
     doc.text('DETALLES ADICIONALES', 20, yPos + 5)
     
     doc.setTextColor(...grisTexto)
     doc.setFontSize(10)
     doc.setFont('helvetica', 'normal')
     
     yPos += 15
     doc.text('Horas necesarias/mes:', 20, yPos)
     doc.setFont('helvetica', 'bold')
     doc.text(`${horasNecesarias.value}`, 80, yPos)
     
     doc.setFont('helvetica', 'normal')
     doc.text('Fondo de emergencia:', 110, yPos)
     doc.setFont('helvetica', 'bold')
     doc.text(`${simboloMoneda.value}${fondoEmergencia.value.toLocaleString()}`, 165, yPos)
     
     yPos += 12
     doc.setFont('helvetica', 'normal')
     doc.text('Ingresos anuales proyectados:', 20, yPos)
     doc.setFont('helvetica', 'bold')
     doc.text(`${simboloMoneda.value}${ingresosAnuales.value.toLocaleString()}`, 95, yPos)
    
    // === PIE DE PÁGINA PROFESIONAL ===
    yPos = 280
    
    // Línea separadora
    doc.setDrawColor(...grisClaro)
    doc.setLineWidth(1)
    doc.line(20, yPos, 190, yPos)
    
    // Información del pie
    doc.setTextColor(120, 120, 120)
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    doc.text('Generado por Calculadora Freelancer Professional', 20, yPos + 8)
    doc.text('www.calculadorafreelancer.com', 20, yPos + 15)
    
    // Número de página
    doc.text('Página 1 de 1', 170, yPos + 8)
    
    // Disclaimer
    doc.setFontSize(8)
    doc.text('* Los cálculos son estimaciones basadas en los datos proporcionados', 20, yPos + 22)
    
    // Descargar el PDF
    doc.save(`Tarifas_${nombre.value.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`)
  }).catch(error => {
    console.error('Error al cargar jsPDF:', error)
    mostrarToastValidacion('Error al generar el PDF. Inténtalo de nuevo.')
  })
}
</script>