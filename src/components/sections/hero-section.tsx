import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { CTAButton } from '../cta-button'

interface HeroSectionProps {
  onStartQuiz: () => void
  onPlatformChoice?: (platform: 'telegram' | 'wpp') => void
  chosenPlatform?: 'telegram' | 'wpp' | null
}

export function HeroSection({ onStartQuiz, onPlatformChoice }: HeroSectionProps) {
  const handleButtonClick = () => {
    onStartQuiz()
  }

  return (
    <section 
      className="flex flex-col items-center text-center relative w-full"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Container principal com gap-6 entre elementos */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-24 sm:pt-28 md:pt-32 pb-0 flex flex-col items-center text-center gap-6">
        
        {/* Badge Superior - Grupo 100% Gratuito */}
        <motion.div
          className="inline-flex items-center gap-2 bg-transparent border border-[#22c55e] px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-semibold"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-5 h-5 md:w-6 md:h-6 bg-[#22c55e] rounded-full flex items-center justify-center flex-shrink-0">
            <Check className="w-3 h-3 md:w-4 md:h-4 text-black" />
          </div>
          <span className="text-white whitespace-nowrap">Grupo 100% Gratis</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight px-2 text-white"
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.5)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Gana{' '}
          <span className="text-[#22c55e]" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(34, 197, 94, 0.3)' }}>
            100 lucas
          </span>
          {' '}todos los días en mi grupo profesional de{' '}
          <span className="text-[#22c55e]" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(34, 197, 94, 0.3)' }}>
            análisis de fútbol
          </span>
        </motion.h1>

        {/* Texto 'Elige tu plataforma' (apenas para telegramwpp) */}
        {/* Este texto será renderizado pelo CTAButton quando necessário */}

        {/* CTA Button - Container transparente, sem sombra */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-transparent"
          style={{ backgroundColor: 'transparent' }}
        >
          <CTAButton 
            size="lg" 
            onClick={handleButtonClick}
            onPlatformChoice={onPlatformChoice}
          />
        </motion.div>

      </div>

      {/* Imagem - Sem max-height, fluir naturalmente */}
      <div className="w-full pb-0">
        <img
          src="/textos-vicente-imagens-no-ombro.webp"
          alt="Vicente - Análisis Profesionales de Fútbol"
          className="w-full h-auto"
        />
      </div>
    </section>
  )
}
