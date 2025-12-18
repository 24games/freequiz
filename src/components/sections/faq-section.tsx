import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CTAButton } from '../cta-button'

const faqs = [
  {
    question: 'O grupo é realmente gratuito?',
    answer: 'Sim! É 100% gratuito. Não cobramos nada para você fazer parte do grupo e receber as análises.',
  },
  {
    question: 'Preciso entender de futebol?',
    answer: 'Não! Nossa equipe faz toda a análise técnica. Você só precisa seguir as recomendações que enviamos prontas no grupo.',
  },
  {
    question: 'Quanto preciso investir para começar?',
    answer: 'Você pode começar com valores a partir de R$100. O importante é seguir a gestão de banca que ensinamos no grupo.',
  },
  {
    question: 'É garantido que vou ganhar?',
    answer: 'Apostas esportivas envolvem riscos. Não podemos garantir lucros, mas oferecemos análises profissionais baseadas em estatísticas e anos de experiência.',
  },
  {
    question: 'Posso sair do grupo quando quiser?',
    answer: 'Sim! Você pode entrar e sair do grupo quando desejar, sem nenhum tipo de compromisso ou fidelidade.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
          Perguntas Frequentes
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className="bg-zinc-900/50 backdrop-blur-xl border border-green-500/20 rounded-xl cursor-pointer touch-manipulation transition-all duration-300 hover:border-green-500/40"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-3 sm:gap-4">
                    <h3 className="text-base sm:text-lg font-semibold text-white flex-1 leading-tight">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={cn(
                        'w-5 h-5 text-green-500 transition-transform duration-300 flex-shrink-0 mt-0.5',
                        openIndex === index && 'rotate-180'
                      )}
                    />
                  </div>
                  {openIndex === index && (
                    <motion.p
                      className="text-sm sm:text-base text-gray-300 mt-3 sm:mt-4 leading-relaxed"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botão CTA final após FAQ */}
        <motion.div
          className="mt-12 sm:mt-16 md:mt-20 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <CTAButton size="xl" animate />
        </motion.div>
      </div>
    </section>
  )
}

