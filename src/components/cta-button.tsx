import { Button } from './ui/button'
import { FaWhatsapp } from 'react-icons/fa'
import { getWhatsAppUrl } from '@/config/whatsapp'
import { motion } from 'framer-motion'

interface CTAButtonProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  animate?: boolean
}

export function CTAButton({ size = 'lg', className = '', animate = false }: CTAButtonProps) {
  const whatsappUrl = getWhatsAppUrl()

  const baseClasses = "bg-[#22c55e] hover:bg-[#16a34a] text-white font-black uppercase tracking-wider shadow-lg shadow-[#22c55e]/50 hover:shadow-xl hover:shadow-[#22c55e]/60 transition-all duration-300 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 sm:gap-3 rounded-full"

  const sizeClasses = {
    sm: 'text-xs px-4 py-2',
    md: 'text-sm px-6 py-3',
    lg: 'text-sm sm:text-base md:text-lg lg:text-xl px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6',
    xl: 'text-base sm:text-lg md:text-xl lg:text-2xl px-10 sm:px-14 md:px-20 py-5 sm:py-6 md:py-7'
  }

  // Mapear tamanhos customizados para tamanhos aceitos pelo Button
  const buttonSize = size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'default'

  const button = (
    <Button
      asChild
      size={buttonSize}
      className={`${baseClasses} ${sizeClasses[size]} ${className}`}
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
        QUERO ENTRAR NO GRUPO
      </a>
    </Button>
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

