import { motion } from 'framer-motion';
import { especialidades, type Especialidad } from '../data/especialidades';

interface EspecialidadCardProps {
  especialidad: Especialidad;
  index: number;
}

const EspecialidadCard = ({ especialidad, index }: EspecialidadCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className={`${especialidad.colores.bg} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer`}
    >
      <div className="p-8">
        {/* Header de la card */}
        <div className="flex items-center justify-between mb-6">
          <div className={`text-5xl group-hover:scale-110 transition-transform duration-300`}>
            {especialidad.icono}
          </div>
          <div className={`${especialidad.colores.accent} text-right`}>
            <div className="text-sm font-medium uppercase tracking-wide">
              Acreditación
            </div>
            <div className="text-2xl font-bold">
              {especialidad.empleabilidad}
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {especialidad.nombre}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            {especialidad.descripcion}
          </p>
        </div>

        {/* Información adicional */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-sm text-gray-600">
            <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
            <span className="font-medium">Duración:</span>
            <span className="ml-2">{especialidad.duracion}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
            <span className="font-medium">Modalidad:</span>
            <span className="ml-2">{especialidad.modalidad}</span>
          </div>
        </div>

        {/* Enlace de acción */}
        <a 
          href={`/${especialidad.id}`}
          className={`w-full ${especialidad.colores.accent} border-2 border-current px-6 py-3 rounded-lg font-semibold text-sm hover:bg-current hover:text-white transition-all duration-300 group-hover:shadow-lg inline-block text-center no-underline`}
        >
          Más Información
        </a>
      </div>
    </motion.div>
  );
};

const EspecialidadesSection = () => {
  return (
    <section id="especialidades" className="py-20 bg-gray-50">
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
            Nuestras <span className="text-blue-600">Especialidades Técnicas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Elegí la especialidad que más se adapte a tus intereses y proyecciones profesionales. 
            Todas nuestras carreras técnicas están diseñadas para brindarte una formación integral y competitiva.
          </p>
        </motion.div>

        {/* Grid de especialidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {especialidades.map((especialidad, index) => (
            <EspecialidadCard 
              key={especialidad.id} 
              especialidad={especialidad} 
              index={index}
            />
          ))}
        </div>

        {/* Sección de información adicional */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                ¿Por qué estudiar una carrera técnica?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Experiencia práctica real</h4>
                    <p className="text-gray-600">Desarrollá competencias profesionales con nuestro programa de prácticas en empresas del sector.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Formación especializada</h4>
                    <p className="text-gray-600">Conocimientos técnicos específicos que te brindan ventaja competitiva profesional.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-100 rounded-full p-2 mr-4 mt-1">
                    <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Continuidad universitaria</h4>
                    <p className="text-gray-600">Podés continuar tus estudios universitarios con ventajas y convalidaciones.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-8 text-center">
              <div className="text-6xl mb-4">💼</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                ¿Necesitás orientación?
              </h4>
              <p className="text-gray-600 mb-6">
                Nuestros orientadores académicos te ayudan a elegir la especialidad perfecta para vos.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Solicitar Orientación
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EspecialidadesSection; 