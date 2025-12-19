import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { CTAButton } from '../cta-button'

interface HeroSectionProps {
  onStartQuiz: () => void
  onPlatformChoice?: (platform: 'telegram' | 'wpp') => void
  chosenPlatform?: 'telegram' | 'wpp' | null
}

export function HeroSection({ onStartQuiz, onPlatformChoice }: HeroSectionProps) {
  // O botão deve iniciar o quiz (não redirecionar diretamente)
  const handleButtonClick = () => {
    onStartQuiz()
  }

  return (
    <section className="h-auto flex flex-col items-center justify-start relative overflow-visible bg-black pb-4">
      {/* Background imersivo com radial gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse at center, #061a0c 0%, #04140a 40%, #000000 100%)'
        }}
      />
      
      {/* Glow radial verde esmeralda com blur suave e opacidade baixa */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/30 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/20 rounded-full blur-3xl opacity-20" />
      </div>

      {/* Container superior com conteúdo centralizado (badge, título, botão) */}
      {/* Padding-top compensa o header fixo (h-16 sm:h-20 md:h-24) */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 w-full max-w-5xl flex flex-col items-center justify-start pt-24 sm:pt-28 md:pt-32">
        <motion.div
          className="text-center w-full flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge Superior - Grupo 100% Gratuito */}
          <motion.div
            className="inline-flex items-center gap-2 bg-transparent border border-[#22c55e] px-4 py-2 md:px-6 md:py-2.5 rounded-full mb-6 md:mb-8 text-xs md:text-sm font-semibold"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-5 h-5 md:w-6 md:h-6 bg-[#22c55e] rounded-full flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 md:w-4 md:h-4 text-black" />
            </div>
            <span className="text-white whitespace-nowrap">Grupo 100% Gratis</span>
          </motion.div>

          {/* Main Heading com destaque em verde */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6 sm:mb-8 md:mb-10 px-2 text-white"
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.5)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
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

          {/* CTA Button - Usa CTAButton mas com onClick para iniciar quiz */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-4 sm:mb-6 md:mb-8 flex justify-center bg-transparent"
            style={{ backgroundColor: 'transparent' }}
          >
            <CTAButton 
              size="lg" 
              onClick={handleButtonClick}
              onPlatformChoice={onPlatformChoice}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Seção da Imagem - Ocupa toda largura, sem padding lateral e sem margem inferior */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative z-10 w-full mt-4 sm:mt-6 md:mt-8 mb-0"
      >
        <img
          src="/textos-vicente-imagens-no-ombro.webp"
          alt="Vicente - Análisis Profesionales de Fútbol"
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </section>
  )
}

