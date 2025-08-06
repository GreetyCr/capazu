# 🎓 CTP Ing. Carlos Pascua Zúñiga - Sitio Web Oficial

Sitio web estático desarrollado con **Astro** para el Colegio Técnico Profesional Ing. Carlos Pascua Zúñiga, una institución pública ubicada en Heredia, Costa Rica. 

## 🎯 Objetivo

Atraer estudiantes de último año de primaria y convencer a sus encargados de que el CTP ofrece una formación académica + técnica integral, valores, acceso gratuito y proyección profesional.

## 🛠️ Stack Técnico

- **Framework**: Astro v5
- **Frontend**: React 19 para componentes interactivos
- **Estilos**: TailwindCSS v4
- **Animaciones**: Framer Motion
- **Deployment**: Vercel

## 🏗️ Estructura del Proyecto

```
src/
├── components/           # Componentes React y Astro reutilizables
│   ├── HeroSection.tsx
│   ├── BeneficiosSection.tsx
│   ├── EspecialidadesSection.tsx
│   ├── EspecialidadCard.astro    # Tarjetas con enlaces funcionales
│   ├── BeneficioCard.astro
│   ├── EstadisticasSection.astro
│   ├── SeccionInstitucional.astro
│   └── SectionTitle.astro
├── data/                # Datos estáticos
│   ├── beneficios.ts
│   └── especialidades.ts        # Incluye IDs para navegación
├── layouts/             # Layouts de Astro
│   └── LayoutBase.astro
├── pages/               # Páginas del sitio
│   ├── index.astro             # Página principal
│   ├── especialidades.astro           # Catálogo de especialidades
│   ├── gestion-de-la-calidad.astro    # Especialidad 1
│   ├── banca-finanzas.astro           # Especialidad 2
│   ├── contabilidad.astro             # Especialidad 3 - Contabilidad y Control Interno
│   ├── desarrollo-apps.astro          # Especialidad 4 - Desarrollo de Aplicaciones de Software
│   ├── construccion-civil.astro       # Especialidad 5 - Construcción Civil
│   └── dibujo-modelado-edificaciones.astro # Especialidad 6 - Dibujo y Modelado para Edificaciones
└── styles/              # Estilos globales
    └── global.css
```

## ✨ Características

### 🎨 Diseño
- Mobile-first responsive [[memoria:3947569]]
- Colores institucionales: azul, rojo, amarillo
- Cards redondeadas con sombra suave
- Jerarquía tipográfica clara
- Elementos decorativos y animaciones suaves
- Diseño profesional y serio con énfasis educacional

### 📱 Componentes
- **Hero Section**: Mensaje aspiracional con estadísticas destacadas
- **Beneficios**: 6 ventajas principales del CTP con íconos
- **Especialidades**: 6 carreras técnicas con información detallada
- **Navegación funcional**: Enlaces directos a páginas dedicadas de especialidades
- **Footer optimizado**: Información institucional y contacto funcional

### 🔗 Sistema de Navegación
- **Página dedicada**: `/especialidades` con catálogo completo
- **Enlaces funcionales**: Todas las tarjetas incluyen enlaces directos
- **Páginas individuales**: Cada especialidad tiene su propia página detallada
- **Breadcrumbs mejorados**: Navegación contextual con diseño elegante
- **Estructura coherente**: URLs amigables y semánticas

### 🎓 Especialidades Técnicas

#### Catálogo principal: `/especialidades`
Página dedicada que incluye:
- Catálogo completo de las 6 especialidades
- Información comparativa de programas
- Estadísticas generales del CTP
- Panel de información institucional
- Enlaces de contacto telefónico funcionales

#### Páginas individuales de especialidades:
Cada especialidad cuenta con su propia página dedicada que incluye:
- Perfil del técnico egresado con competencias específicas
- Estructura curricular oficial completa (todas implementadas)
- Contenidos y herramientas especializadas por área
- Estadísticas institucionales y acreditaciones MEP
- Información de matrícula y contacto directo

#### Especialidades disponibles:
1. **Gestión de la Calidad** (Acreditada MEP) - `/gestion-de-la-calidad`
2. **Banca y Finanzas** (Acreditada MEP) - `/banca-finanzas`
3. **Contabilidad y Control Interno** (Acreditada MEP) - `/contabilidad`
4. **Desarrollo de Aplicaciones de Software** (Acreditada MEP) - `/desarrollo-apps`
5. **Construcción Civil** (Acreditada MEP) - `/construccion-civil`
6. **Dibujo y Modelado para Edificaciones** (Acreditada MEP) - `/dibujo-modelado-edificaciones`

## 🚀 Comandos Disponibles

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📋 Reglas de Desarrollo

- **Componentes**: PascalCase
- **Archivos**: kebab-case
- **Estilos**: Solo clases TailwindCSS
- **Semántica**: HTML semántico y ARIA
- **Código**: Autodescriptivo, DRY y estructurado
- **Enlaces**: URLs amigables y navegación coherente

## 🔧 Implementaciones Recientes

### ✅ Eliminación de Información de Empleabilidad
- **Páginas actualizadas**: Eliminación completa de datos de inserción laboral
- **Enfoque académico**: Reorientación hacia preparación profesional y universitaria
- **Estadísticas realistas**: Solo datos institucionales verificables
- **Testimonios actualizados**: Enfoque en continuidad educativa

### ✅ Página Dedicada de Especialidades
- **Nueva página**: `/especialidades` con catálogo completo
- **Navegación mejorada**: Navbar actualizado para apuntar a página dedicada
- **Diseño premium**: Hero section expansivo con estadísticas generales
- **Breadcrumbs elegantes**: Diseño semi-transparente con efectos blur

### ✅ Sistema de Enlaces Funcionales
- **EspecialidadCard.astro**: Convertido de botón a enlace funcional
- **EspecialidadesSection.tsx**: Enlaces actualizados en componente React
- **Datos estructurados**: IDs únicos para cada especialidad

### ✅ Páginas de Especialidades Individuales
- **6 páginas dedicadas** con contenido específico y detallado
- **Estructura curricular completa**: Tablas oficiales MEP para todas las especialidades
- **Breadcrumbs elegantes**: Navegación contextual con diseño profesional
- **Colores temáticos** específicos para cada especialidad
- **SEO optimizado** con metadatos únicos y descriptivos
- **Secciones de matrícula**: Información práctica con contacto directo

### ✅ Mejoras en UX/UI
- **Navegación intuitiva** con breadcrumbs elegantes
- **Diseño responsivo** optimizado para móviles
- **Animaciones suaves** y transiciones profesionales
- **Accesibilidad mejorada** con ARIA labels y roles
- **Menú móvil funcional** con diseño profesional
- **Footer optimizado** con información útil y enlaces funcionales

### ✅ Implementación Curricular Completa
- **6 especialidades con currícula oficial**: Todas las especialidades técnicas incluyen sus planes de estudio detallados
- **Tablas curriculares responsive**: Información académica organizada por nivel y subárea
- **Horas académicas exactas**: Datos oficiales MEP para cada programa
- **Diseño consistente**: Colores temáticos y estructura unificada
- **Especialidad nueva agregada**: Dibujo y Modelado para Edificaciones

### ✅ Contacto y Enlaces Funcionales
- **Enlaces de llamada**: Teléfono institucional funcional (tel:22372710)
- **Facebook oficial**: Enlace actualizado a [@paginawebcapazu](https://www.facebook.com/paginawebcapazu/)
- **Email institucional**: Contacto directo con administración
- **Ubicación interactiva**: Enlace a Google Maps para direcciones
- **Botones de contacto**: Reemplazados enlaces rotos por contacto telefónico

## 📊 Análisis y Mejoras Pendientes

Para un análisis detallado del sitio web, incluyendo links no funcionales identificados y recomendaciones específicas de contenido, consultar:

**📋 [ANALISIS-SITIO-WEB.md](./ANALISIS-SITIO-WEB.md)**

## 🌟 Próximas Mejoras

### **Prioridad Alta:**
- [ ] Crear página de contacto (`/contacto`)
- [ ] Implementar sección de matrícula (`/matricula`)
- [ ] Desarrollar página de requisitos (`/requisitos`)
- [ ] Crear sección de instalaciones (`/instalaciones`)
- [x] ~~Agregar estructura curricular a todas las especialidades~~ **✅ Completado**

### **Prioridad Media:**
- [ ] Desarrollar página "Sobre Nosotros"
- [ ] Implementar calendario académico
- [ ] Crear sección para padres de familia
- [ ] Desarrollar galería multimedia
- [ ] Agregar testimonios de estudiantes

### **Prioridad Baja:**
- [ ] Portal estudiantil online
- [ ] Sistema de noticias dinámico
- [ ] Tours virtuales interactivos
- [ ] Optimizar imágenes y SEO avanzado
- [ ] Agregar modo oscuro
- [ ] Implementar búsqueda de especialidades

## 📧 Contacto

**Colegio Técnico Profesional Ing. Carlos Pascua Zúñiga**
- 📍 C. 11, Heredia, San Rafael ([Ver mapa](https://maps.app.goo.gl/XUfi3envF2GWCaak7))
- 📞 2237-2710
- ✉️ lic.ingcarlospascua@mep.go.cr

---

*Desarrollado con ❤️ para la educación técnica costarricense*
