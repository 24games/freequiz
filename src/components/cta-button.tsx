import { Button } from './ui/button'
import { Send } from 'lucide-react'
import { getTelegramUrl } from '@/config/telegram'
import { useSlug } from '@/hooks/use-slug'
import { motion } from 'framer-motion'

interface CTAButtonProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  animate?: boolean
}

export function CTAButton({ size = 'lg', className = '', animate = false }: CTAButtonProps) {
  const slug = useSlug()
  const telegramUrl = getTelegramUrl(slug)

  // Design "gordinho" com padding aumentado e fonte maior - Azul oficial do Telegram
  const baseClasses = "bg-[#24A1DE] hover:bg-[#1E8FC7] text-white font-black uppercase tracking-wider rounded-full flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 hover:-translate-y-1 active:scale-95"

  const sizeClasses = {
    sm: 'text-lg px-8 py-4',
    md: 'text-xl px-10 py-5',
    lg: 'text-xl sm:text-2xl px-10 sm:px-12 md:px-14 py-5 sm:py-6',
    xl: 'text-2xl sm:text-3xl px-12 sm:px-16 md:px-20 py-6 sm:py-7 md:py-8'
  }

  // Mapear tamanhos customizados para tamanhos aceitos pelo Button
  const buttonSize = size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'default'

  const buttonContent = (
    <Button
      asChild
      size={buttonSize}
      className={`${baseClasses} ${sizeClasses[size]} ${className}`}
    >
      <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
        <Send className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
        EMPEZAR AHORA
      </a>
    </Button>
  )

  // Wrapper com animação pulsante de escala e shadow pulse - Azul do Telegram
  const pulseAnimation = {
    scale: [1, 1.05, 1],
    boxShadow: [
      '0 0 20px rgba(36, 161, 222, 0.6)',
      '0 0 40px rgba(36, 161, 222, 0.8)',
      '0 0 20px rgba(36, 161, 222, 0.6)',
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
        filter: 'drop-shadow(0 0 20px rgba(36, 161, 222, 0.6))',
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

