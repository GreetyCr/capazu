import { motion } from 'framer-motion';
import { beneficios, type Beneficio } from '../data/beneficios';

interface BeneficioCardProps {
  beneficio: Beneficio;
  index: number;
}

const BeneficioCard = ({ beneficio, index }: BeneficioCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`${beneficio.colores.bg} rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group cursor-pointer`}
    >
      <div className="text-center">
        <div className={`text-4xl mb-4 ${beneficio.colores.icon} group-hover:scale-110 transition-transform duration-300`}>
          {beneficio.icono}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {beneficio.titulo}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {beneficio.descripcion}
        </p>
      </div>
    </motion.div>
  );
};

const BeneficiosSection = () => {
  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de la sección */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir el <span className="text-blue-600">CTP Ing. Carlos Pascua Zúñiga</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubrí las ventajas de estudiar en una institución que combina excelencia académica, 
            formación técnica especializada y valores humanos para tu desarrollo integral.
          </p>
        </motion.div>

        {/* Grid de beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beneficios.map((beneficio, index) => (
            <BeneficioCard 
              key={beneficio.id} 
              beneficio={beneficio} 
              index={index}
            />
          ))}
        </div>

        {/* Call to action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              ¿Listo para transformar tu futuro?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Unite a miles de estudiantes que ya están construyendo su carrera profesional 
              con nosotros. El primer paso hacia tu éxito empieza hoy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                Información de Matrícula
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors">
                Descargar Brochure
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeneficiosSection; 