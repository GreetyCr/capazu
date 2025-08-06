export interface Especialidad {
  id: string;
  nombre: string;
  descripcion: string;
  duracion: string;
  modalidad: string;
  empleabilidad: string;
  icono: string;
  colores: {
    bg: string;
    accent: string;
  };
}

export const especialidades: Especialidad[] = [
  {
    id: "gestion-de-la-calidad",
    nombre: "Gestión de la Calidad",
    descripcion: "Formación especializada en sistemas de gestión, control de procesos y mejora continua. Preparación para liderar proyectos de optimización en organizaciones modernas.",
    duracion: "3 años",
    modalidad: "Presencial",
    empleabilidad: "Certificación MEP",
    icono: "🏆",
    colores: {
      bg: "bg-blue-50",
      accent: "text-blue-600"
    }
  },
  {
    id: "banca-finanzas",
    nombre: "Banca y Finanzas",
    descripcion: "Competencias profesionales en servicios financieros, análisis crediticio y gestión bancaria. Formación integral para el sector financiero costarricense.",
    duracion: "3 años",
    modalidad: "Presencial",
    empleabilidad: "Certificación MEP",
    icono: "💰",
    colores: {
      bg: "bg-green-50",
      accent: "text-green-600"
    }
  },
  {
    id: "contabilidad",
    nombre: "Contabilidad y Control Interno",
    descripcion: "Preparación técnica en contabilidad general, tributación y análisis financiero. Base sólida para el ejercicio profesional contable y continuidad universitaria.",
    duracion: "3 años",
    modalidad: "Presencial",
    empleabilidad: "Certificación MEP",
    icono: "📊",
    colores: {
      bg: "bg-yellow-50",
      accent: "text-yellow-600"
    }
  },
  {
    id: "desarrollo-apps",
    nombre: "Desarrollo de Aplicaciones de Software",
    descripcion: "Formación técnica en programación, desarrollo móvil y aplicaciones de software. Preparación para la industria tecnológica en constante crecimiento.",
    duracion: "3 años",
    modalidad: "Presencial",
    empleabilidad: "Certificación MEP",
    icono: "💻",
    colores: {
      bg: "bg-purple-50",
      accent: "text-purple-600"
    }
  },
  {
    id: "construccion-civil",
    nombre: "Construcción Civil",
    descripcion: "Conocimientos técnicos en materiales, procesos constructivos y supervisión de obras. Formación práctica para el sector de la construcción e infraestructura.",
    duracion: "3 años",
    modalidad: "Presencial",
    empleabilidad: "Certificación MEP",
    icono: "🏗️",
    colores: {
      bg: "bg-orange-50",
      accent: "text-orange-600"
    }
  },
  {
    id: "dibujo-modelado-edificaciones",
    nombre: "Dibujo y Modelado para Edificaciones",
    descripcion: "Formación técnica en diseño arquitectónico, modelado 3D y dibujo técnico para edificaciones. Preparación integral en tecnologías CAD y diseño urbanístico moderno.",
    duracion: "3 años",
    modalidad: "Presencial",
    empleabilidad: "Certificación MEP",
    icono: "📐",
    colores: {
      bg: "bg-teal-50",
      accent: "text-teal-600"
    }
  }
]; 