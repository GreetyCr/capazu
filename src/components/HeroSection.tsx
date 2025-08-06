import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Tu futuro profesional
              <span className="text-blue-600 block">empieza aquí</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              En el <strong>CTP Carlos Pascua Zúñiga</strong> combinamos educación académica de calidad 
              con formación técnica especializada. Preparate para un futuro lleno de oportunidades 
              con educación <strong>100% gratuita</strong> y formación competitiva.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                Ver Especialidades
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
                Proceso de Matrícula
              </button>
            </motion.div>

            {/* Estadísticas destacadas */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">5</div>
                <div className="text-sm text-gray-600">Especialidades</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">100%</div>
                <div className="text-sm text-gray-600">Gratuito</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Imagen/Ilustración */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 lg:p-12">
              {/* Placeholder para imagen - será reemplazada más adelante */}
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="text-6xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Formación Integral
                </h3>
                <p className="text-gray-600">
                  Académica + Técnica + Valores
                </p>
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full w-8 h-8"></div>
              <div className="absolute -bottom-4 -left-4 bg-red-400 rounded-full w-6 h-6"></div>
              <div className="absolute top-1/2 -right-2 bg-blue-400 rounded-full w-4 h-4"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 