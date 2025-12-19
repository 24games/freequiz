import { motion } from 'framer-motion'
import { CTAButton } from '../cta-button'

const steps = [
  {
    icon: '📱',
    title: 'Entró',
    description: 'Acceso inmediato al canal VIP en Telegram.',
  },
  {
    icon: '📊',
    title: 'Copió',
    description: 'Recibe los análisis con estadísticas.',
  },
  {
    icon: '💰',
    title: 'Lucró',
    description: 'Solo sigue la gestión.',
  },
]

export function HowItWorksSection() {
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
          Cómo Funciona
        </motion.h2>

        {/* Grid com 3 cards quadrados em linha horizontal */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop: grid-cols-3 | Mobile: overflow-x-auto para scroll horizontal se necessário */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 min-w-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="aspect-square bg-zinc-900/50 backdrop-blur-xl border border-green-500/20 rounded-xl flex flex-col items-center justify-center text-center p-4 sm:p-6 min-w-0"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                {/* Ícone no topo */}
                <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">
                  {step.icon}
                </div>
                
                {/* Título em negrito */}
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                
                {/* Descrição em fonte menor */}
                <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Botão CTA após Como Funciona */}
        <motion.div
          className="mt-12 sm:mt-16 md:mt-20 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <CTAButton size="lg" />
        </motion.div>
      </div>
    </section>
  )
}

