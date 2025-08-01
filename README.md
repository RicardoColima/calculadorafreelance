# 💰 Calculadora Freelancer

> **Herramienta profesional para calcular tarifas freelancer y generar reportes en PDF**

Una aplicación web moderna y elegante diseñada específicamente para freelancers de Latinoamérica que necesitan calcular sus tarifas por hora de manera profesional y generar reportes detallados.

![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Características Principales

### 🎯 **Cálculo Inteligente de Tarifas**
- Algoritmo avanzado que considera gastos mensuales, disponibilidad y objetivos financieros
- Multiplicadores automáticos según nivel de experiencia y tipo de trabajo
- Cálculo de fondo de emergencia y proyecciones anuales
- Estimación de horas necesarias por mes

### 💱 **Soporte Multi-Moneda**
- **10 monedas latinoamericanas** soportadas
- Conversión automática con tipos de cambio actualizados
- Estimador rápido con precios dinámicos por región
- Formateo inteligente de números según la moneda

### 📊 **Generación de Reportes PDF**
- Reportes profesionales con diseño corporativo
- Información completa del freelancer y cálculos
- Descarga instantánea con nombre personalizado
- Diseño optimizado para presentaciones a clientes

### 🎨 **Interfaz Moderna y Responsiva**
- Diseño elegante con gradientes y animaciones
- Completamente responsiva para todos los dispositivos
- Notificaciones toast para mejor UX
- Scroll automático a resultados

### 🔧 **Funcionalidades Avanzadas**
- Validación inteligente de formularios
- Panel informativo con guías y consejos
- Métricas clave y estadísticas de la comunidad
- Arquitectura modular con componentes reutilizables

## 🚀 Tecnologías Utilizadas

### **Frontend**
- **Vue.js 3** - Framework progresivo con Composition API
- **Tailwind CSS** - Framework de utilidades CSS
- **Vite** - Build tool ultrarrápido
- **JavaScript ES6+** - Sintaxis moderna

### **Librerías Especializadas**
- **jsPDF** - Generación de documentos PDF
- **DOMPurify** - Sanitización de contenido
- **HTML2Canvas** - Captura de elementos DOM

### **Herramientas de Desarrollo**
- **PostCSS** - Procesamiento de CSS
- **ESLint** - Linting de código
- **Prettier** - Formateo de código

## 📦 Instalación

### **Prerrequisitos**
- Node.js 16+ 
- npm o yarn

### **Pasos de Instalación**

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/calculadora-freelancer.git
cd calculadora-freelancer

# 2. Instalar dependencias
npm install

# 3. Ejecutar en modo desarrollo
npm run dev

# 4. Abrir en el navegador
# http://localhost:3000
```

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run preview      # Preview del build

# Utilidades
npm run lint         # Verificar código
npm run format       # Formatear código
```

## 📁 Estructura del Proyecto

```
calculadorFree/
├── 📁 src/
│   ├── 📁 components/          # Componentes Vue
│   │   ├── CalculadoraFreelancer.vue    # Componente principal
│   │   ├── HeaderComponent.vue          # Encabezado
│   │   ├── HeroSection.vue              # Sección hero
│   │   ├── FormularioCalculadora.vue    # Formulario principal
│   │   ├── PanelInformativo.vue         # Panel lateral
│   │   ├── SeccionResultados.vue        # Resultados
│   │   ├── SeccionEstadisticas.vue      # Estadísticas
│   │   ├── SeccionConsejos.vue          # Consejos
│   │   ├── FooterComponent.vue          # Pie de página
│   │   └── ToastNotification.vue        # Notificaciones
│   ├── 📁 assets/              # Recursos estáticos
│   ├── 📁 stores/              # Estado global
│   ├── App.vue                 # Componente raíz
│   └── main.js                 # Punto de entrada
├── 📁 public/                  # Archivos públicos
├── 📁 dist/                    # Build de producción
├── package.json                # Dependencias
├── vite.config.js             # Configuración Vite
├── tailwind.config.js         # Configuración Tailwind
└── README.md                  # Documentación
```

## 🎯 Uso de la Aplicación

### **1. Completar Información Personal**
- Nombre del freelancer
- Seleccionar moneda de trabajo
- Nivel de experiencia (Principiante, Intermedio, Experto)
- Tipo de trabajo (Tiempo completo, Medio tiempo, Por proyectos)

### **2. Configurar Datos Financieros**
- Gastos mensuales totales
- Disponibilidad de tiempo (horas por semana)
- Objetivo financiero mensual
- Porcentaje para imprevistos

### **3. Obtener Resultados**
- **Tarifa por hora** calculada automáticamente
- **Tarifa mínima mensual** recomendada
- **Estimaciones de proyectos** por tamaño
- **Análisis financiero** completo

### **4. Generar Reporte PDF**
- Descargar reporte profesional
- Compartir con clientes potenciales
- Usar como base para cotizaciones

## 🌍 Monedas Soportadas

| Moneda | Código | País/Región |
|--------|--------|-------------|
| 🇺🇸 Dólar Estadounidense | USD | Estados Unidos |
| 🇲🇽 Peso Mexicano | MXN | México |
| 🇦🇷 Peso Argentino | ARS | Argentina |
| 🇨🇴 Peso Colombiano | COP | Colombia |
| 🇨🇱 Peso Chileno | CLP | Chile |
| 🇵🇪 Sol Peruano | PEN | Perú |
| 🇧🇷 Real Brasileño | BRL | Brasil |
| 🇺🇾 Peso Uruguayo | UYU | Uruguay |
| 🇧🇴 Boliviano | BOB | Bolivia |
| 🇵🇾 Guaraní Paraguayo | PYG | Paraguay |

## 🚀 Despliegue

### **Netlify (Recomendado)**
```bash
# 1. Generar build
npm run build

# 2. Arrastrar carpeta 'dist' a netlify.com/drop
# ¡Listo! URL automática generada
```

### **Vercel**
```bash
# 1. Conectar repositorio GitHub
# 2. Deploy automático
# 3. URL personalizada incluida
```

### **GitHub Pages**
```bash
# 1. Instalar gh-pages
npm install --save-dev gh-pages

# 2. Agregar script en package.json
"deploy": "gh-pages -d dist"

# 3. Desplegar
npm run build && npm run deploy
```

## 🔒 Seguridad

- ✅ **Vulnerabilidades corregidas** - 0 vulnerabilidades conocidas
- ✅ **Sanitización de datos** - DOMPurify integrado
- ✅ **Validación de entrada** - Validación completa de formularios
- ✅ **HTTPS Ready** - Compatible con certificados SSL

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Tu Nombre**
- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- LinkedIn: [Tu Perfil](https://linkedin.com/in/tu-perfil)
- Email: tu-email@ejemplo.com

## 🙏 Agradecimientos

- Comunidad de Vue.js por el excelente framework
- Tailwind CSS por las utilidades de diseño
- Todos los freelancers que inspiraron este proyecto

---

<div align="center">
  <strong>💰 Calculadora Freelancer - Calcula tu valor profesional</strong>
  <br>
  <em>Hecho con ❤️ para la comunidad freelancer de Latinoamérica</em>
</div>