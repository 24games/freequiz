import { motion } from 'framer-motion'
import { CTAButton } from '../cta-button'

const results = [
  { value: '2.847', label: 'Miembros Activos' },
  { value: '73%', label: 'Tasa de Acierto' },
  { value: '24/7', label: 'Análisis Diarios' },
]

export function ResultsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-black relative overflow-hidden">
      {/* Glow verde sutil atrás da seção */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-4xl h-full bg-green-500/5 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-8 sm:mb-12 md:mb-16 text-green-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Resultados Reales
        </motion.h2>

        {/* Desktop: flex-row | Mobile: carrossel horizontal com snap */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:flex flex-row gap-6 md:gap-8">
            {results.map((result, index) => (
              <motion.div
                key={result.label}
                className="flex-1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="bg-zinc-900/50 backdrop-blur-xl border border-green-500/20 rounded-2xl p-6 sm:p-8 text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-green-500 mb-2 sm:mb-3 font-mono">
                    {result.value}
                  </div>
                  <div className="text-gray-300 text-sm sm:text-base md:text-lg">{result.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: Carrossel horizontal com snap */}
          <div className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
            <div className="flex gap-4 w-max">
              {results.map((result, index) => (
                <motion.div
                  key={result.label}
                  className="w-[280px] flex-shrink-0 snap-center"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="bg-zinc-900/50 backdrop-blur-xl border border-green-500/20 rounded-2xl p-8 text-center h-full">
                    <div className="text-4xl font-black text-green-500 mb-3 font-mono">
                      {result.value}
                    </div>
                    <div className="text-gray-300 text-base">{result.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Botão CTA após Resultados */}
        <motion.div
          className="mt-12 sm:mt-16 md:mt-20 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <CTAButton size="lg" animate />
        </motion.div>
      </div>
    </section>
  )
}

