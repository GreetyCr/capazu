export interface Beneficio {
  id: string;
  titulo: string;
  descripcion: string;
  icono: string;
  colores: {
    bg: string;
    icon: string;
  };
}

export const beneficios: Beneficio[] = [
  {
    id: "educacion-gratuita",
    titulo: "Educación Pública de Calidad",
    descripcion: "Acceso completo a formación técnica especializada sin costo. Educación pública que garantiza igualdad de oportunidades para el desarrollo profesional.",
    icono: "🎓",
    colores: {
      bg: "bg-blue-50",
      icon: "text-blue-600"
    }
  },
  {
    id: "formacion-integral",
    titulo: "Formación Integral y Competitiva",
    descripcion: "Educación técnica de alta calidad que combina teoría y práctica empresarial. Preparación completa para el desarrollo profesional y continuidad universitaria.",
    icono: "🎯",
    colores: {
      bg: "bg-green-50",
      icon: "text-green-600"
    }
  },
  {
    id: "certificacion-reconocida",
    titulo: "Acreditación Oficial MEP",
    descripcion: "Títulos técnicos oficialmente reconocidos por el Ministerio de Educación Pública y valorados por el sector empresarial costarricense.",
    icono: "🏅",
    colores: {
      bg: "bg-yellow-50",
      icon: "text-yellow-600"
    }
  },
  {
    id: "practicas-profesionales",
    titulo: "Experiencia Laboral Real",
    descripcion: "Prácticas profesionales supervisadas en empresas del sector. Conexión directa entre la formación académica y el entorno laboral profesional.",
    icono: "🏢",
    colores: {
      bg: "bg-purple-50",
      icon: "text-purple-600"
    }
  },
  {
    id: "tecnologia-actualizada",
    titulo: "Recursos Tecnológicos Modernos",
    descripcion: "Laboratorios especializados equipados con tecnología actualizada. Formación práctica con herramientas utilizadas en el sector profesional.",
    icono: "💻",
    colores: {
      bg: "bg-red-50",
      icon: "text-red-600"
    }
  },
  {
    id: "desarrollo-integral",
    titulo: "Formación Integral y Valores",
    descripcion: "Desarrollo académico, técnico y personal basado en principios éticos, responsabilidad social y excelencia profesional.",
    icono: "⭐",
    colores: {
      bg: "bg-indigo-50",
      icon: "text-indigo-600"
    }
  }
]; 