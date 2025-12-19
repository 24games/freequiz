import { Button } from './ui/button'
import { FaWhatsapp } from 'react-icons/fa'
import { getWhatsAppUrl } from '@/config/whatsapp'
import { motion } from 'framer-motion'

interface WhatsAppButtonProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  animate?: boolean
  onClick?: () => void
}

export function WhatsAppButton({ size = 'lg', className = '', animate = false, onClick }: WhatsAppButtonProps) {
  const whatsappUrl = getWhatsAppUrl()

  // Design "gordinho" - Verde do WhatsApp
  // Mesma altura, mesmo padding, mesmo arredondamento, mesma fonte
  const baseClasses = "bg-[#22c55e] hover:bg-[#16a34a] text-white font-black text-xl uppercase tracking-wider rounded-full flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 hover:-translate-y-1 active:scale-95 py-5 px-8"

  const sizeClasses = {
    sm: 'text-lg px-8 py-4',
    md: 'text-xl px-8 py-5',
    lg: 'text-xl px-8 py-5',
    xl: 'text-xl px-8 py-5'
  }

  // Mapear tamanhos customizados para tamanhos aceitos pelo Button
  const buttonSize = size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'default'

  const buttonContent = onClick ? (
    <Button
      onClick={onClick}
      size={buttonSize}
      className={`${baseClasses} ${sizeClasses[size]} ${className}`}
    >
      <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
      EMPEZAR AHORA
    </Button>
  ) : (
    <Button
      asChild
      size={buttonSize}
      className={`${baseClasses} ${sizeClasses[size]} ${className}`}
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
        EMPEZAR AHORA
      </a>
    </Button>
  )

  // Wrapper com animação pulsante de escala e shadow pulse - Verde do WhatsApp
  const pulseAnimation = {
    scale: [1, 1.05, 1],
    boxShadow: [
      '0 0 20px rgba(34, 197, 94, 0.6)',
      '0 0 40px rgba(34, 197, 94, 0.8)',
      '0 0 20px rgba(34, 197, 94, 0.6)',
    ],
  }

  const button = (
    <motion.div
      animate={pulseAnimation}
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
      {buttonContent}
    </motion.div>
  )

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {button}
      </motion.div>
    )
  }

  return button
}

