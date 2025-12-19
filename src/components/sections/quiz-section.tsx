import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '../ui/card'
import { useState } from 'react'
import { useSlug } from '@/hooks/use-slug'
import { trackLead } from '@/lib/meta-pixel'
import { getTelegramUrl } from '@/config/telegram'

interface QuizSectionProps {
  currentQuestion: number
  onAnswer: (questionNum: number) => void
}

const questions = [
  {
    id: 1,
    question: '¿Ves fútbol regularmente?',
    options: ['Sí, soy fanático', 'A veces', 'No mucho'],
  },
  {
    id: 2,
    question: '¿Cuánto quieres ganar al mes?',
    options: ['$50.000 - $200.000 CLP', '$200.000 - $500.000 CLP', 'Más de $500.000 CLP'],
  },
  {
    id: 3,
    question: '¿Puedes empezar hoy?',
    options: ['Sí, ahora mismo', 'En los próximos días', 'Solo estoy viendo'],
  },
]

export function QuizSection({ currentQuestion, onAnswer }: QuizSectionProps) {
  const currentQ = questions.find((q) => q.id === currentQuestion)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const slug = useSlug()

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    
    // Se for a última pergunta (pergunta 3), redireciona imediatamente para Telegram
    if (currentQ!.id === 3) {
      // Dispara evento Lead do Meta Pixel antes de redirecionar
      trackLead(slug || undefined)
      
      // Redireciona para o bot do Telegram baseado no slug
      const telegramUrl = getTelegramUrl(slug)
      window.location.href = telegramUrl
      return
    }
    
    // Para outras perguntas, continua o fluxo normal
    setTimeout(() => {
      onAnswer(currentQ!.id)
      setSelectedOption(null)
    }, 200)
  }

  return (
    <section className="min-h-[100dvh] flex items-center justify-center relative px-4 sm:px-5 py-8 pt-24 sm:pt-28 md:pt-32 bg-black">
      <Card className="max-w-lg w-full bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
        <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
          {/* Progress Bar - Elegante e fina */}
          <div className="flex gap-2 mb-8 sm:mb-10 md:mb-12">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className={`flex-1 h-1 rounded-full transition-all duration-500 ${
                  num <= currentQuestion
                    ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]'
                    : 'bg-white/10'
                }`}
              />
            ))}
          </div>

          {/* Questions */}
          <AnimatePresence mode="wait">
            {currentQ && (
              <motion.div
                key={currentQ.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 sm:mb-10 md:mb-12 font-bold text-white leading-tight">
                  {currentQ.question}
                </h3>

                <div className="space-y-4 sm:space-y-5">
                  {currentQ.options.map((option, index) => {
                    const isSelected = selectedOption === option
                    return (
                      <motion.button
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        className={`w-full text-left px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 rounded-2xl text-base sm:text-lg md:text-xl font-medium text-white transition-all duration-300 touch-manipulation ${
                          isSelected
                            ? 'bg-green-500/20 border-2 border-green-500 text-green-50 shadow-[0_0_20px_rgba(34,197,94,0.4)]'
                            : 'bg-white/5 border-2 border-white/10 hover:bg-green-500/10 hover:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]'
                        }`}
                        whileTap={{ scale: 0.98 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        {option}
                      </motion.button>
                    )
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </CardContent>
      </Card>
    </section>
  )
}

