import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { CheckCircle2 } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { getWhatsAppUrl } from '@/config/whatsapp'

export function ResultSection() {
  const whatsappUrl = getWhatsAppUrl()

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-5 py-12 sm:py-16 md:py-20 pt-24 sm:pt-28 md:pt-32 text-center bg-black">
      <motion.div
        className="max-w-3xl mx-auto w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Success Icon */}
        <motion.div
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 10,
            delay: 0.2,
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-black" />
          </motion.div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 text-green-500 leading-tight px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          PERFEITO! Você está qualificado para o Grupo Free
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Seu perfil é ideal para aproveitar nossas análises profissionais. Entre agora no grupo VIP e receba as melhores oportunidades em tempo real, completamente grátis.
        </motion.p>

        {/* WhatsApp Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="px-2 flex justify-center"
        >
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-[#22c55e] hover:bg-[#16a34a] text-white font-black text-sm sm:text-base md:text-lg lg:text-xl px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 rounded-full uppercase tracking-wider shadow-lg shadow-[#22c55e]/50 hover:shadow-xl hover:shadow-[#22c55e]/60 transition-all duration-300 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 sm:gap-3 mx-auto mb-4 sm:mb-6"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 sm:gap-3">
              <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              QUERO ENTRAR NO GRUPO
            </a>
          </Button>
        </motion.div>

        {/* Subtext */}
        <motion.p
          className="text-xs sm:text-sm md:text-base text-gray-600 px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          ✓ 100% Gratuito • ✓ Sem compromisso • ✓ Pode sair quando quiser
        </motion.p>
      </motion.div>
    </section>
  )
}

