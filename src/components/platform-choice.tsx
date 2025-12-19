import { motion } from 'framer-motion'
import { TelegramButton } from './telegram-button'
import { WhatsAppButton } from './whatsapp-button'

interface PlatformChoiceProps {
  slug?: string | null
  onChoose?: () => void
  animate?: boolean
  onPlatformChoice?: (platform: 'telegram' | 'wpp') => void
}

export function PlatformChoice({ slug = null, onChoose, animate = false, onPlatformChoice }: PlatformChoiceProps) {
  const handleTelegramClick = () => {
    // Salva a escolha e faz scroll suave até o quiz
    if (onPlatformChoice) {
      onPlatformChoice('telegram')
    } else if (onChoose) {
      onChoose()
    }
  }

  const handleWhatsAppClick = () => {
    // Salva a escolha e faz scroll suave até o quiz
    if (onPlatformChoice) {
      onPlatformChoice('wpp')
    } else if (onChoose) {
      onChoose()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-4 sm:space-y-6 w-full bg-transparent"
      style={{ backgroundColor: 'transparent' }}
    >
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-6 sm:mb-8">
        Elige tu plataforma
      </h3>
      
      {/* Desktop: botões lado a lado (flex-row) | Mobile: botões empilhados (flex-col) */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch sm:items-center justify-center w-full bg-transparent" style={{ backgroundColor: 'transparent' }}>
        <div className="flex-1 sm:flex-none w-full sm:w-auto bg-transparent" style={{ backgroundColor: 'transparent' }}>
          <TelegramButton size="lg" className="w-full sm:w-auto" slug={slug} animate={animate} onClick={handleTelegramClick} />
        </div>
        
        <div className="flex-1 sm:flex-none w-full sm:w-auto bg-transparent" style={{ backgroundColor: 'transparent' }}>
          <WhatsAppButton size="lg" className="w-full sm:w-auto" animate={animate} onClick={handleWhatsAppClick} />
        </div>
      </div>
    </motion.div>
  )
}

