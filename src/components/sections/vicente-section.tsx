import { motion } from 'framer-motion'

export function VicenteSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-black relative overflow-hidden">
      {/* Glow verde sutil atrás da seção */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-4xl h-full bg-green-500/5 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Foto Container - Circular com gradiente */}
            <motion.div
              className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[280px] aspect-square rounded-full bg-gradient-to-br from-green-500/20 to-green-600/20 p-1 flex items-center justify-center relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                <img
                  src="/vicente-foto.png"
                  alt="Vicente Silva - Expert em Análise Esportiva"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              className="text-center md:text-left flex-1"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Vicente Silva: <span className="text-green-500">8 Anos de Mercado</span>
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                Líder de uma equipe de tipsters que monitora o futebol mundial 24h por dia. Nossa missão é encontrar o lucro onde outros não enxergam.
              </p>

              {/* Badges como tags elegantes */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
                {['8+ anos', '24/7', 'Global'].map((badge, index) => (
                  <motion.span
                    key={badge}
                    className="inline-block bg-green-500/10 border border-green-500/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm text-green-400 font-medium"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {badge}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

