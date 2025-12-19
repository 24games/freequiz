import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { Check } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

interface HeroSectionProps {
  onStartQuiz: () => void
}

export function HeroSection({ onStartQuiz }: HeroSectionProps) {
  return (
    <section className="min-h-[100dvh] flex flex-col items-center justify-center relative overflow-hidden bg-black">
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
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 w-full max-w-5xl flex flex-col items-center justify-center pt-24 sm:pt-28 md:pt-32">
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
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-8 md:mb-10 px-2 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Únete al Grupo{' '}
            <span className="text-[#22c55e]">Gratis</span>
            {' '}de Análisis{' '}
            <span className="text-[#22c55e]">Profesionales de Fútbol</span>
          </motion.h1>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12 md:mb-16 flex justify-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="inline-block"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.6))',
              }}
            >
              <Button
                onClick={onStartQuiz}
                size="lg"
                className="w-full sm:w-auto bg-[#22c55e] hover:bg-[#16a34a] text-white font-black text-xl sm:text-2xl px-10 sm:px-12 md:px-14 py-5 sm:py-6 rounded-full uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 sm:gap-3 mx-auto"
              >
                <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
                EMPEZAR AHORA
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Seção da Imagem - Ocupa toda largura, sem padding lateral */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative z-10 w-full mt-auto"
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

