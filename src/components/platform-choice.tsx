import { motion } from 'framer-motion'
import { TelegramButton } from './telegram-button'
import { WhatsAppButton } from './whatsapp-button'

interface PlatformChoiceProps {
  slug?: string | null
  onChoose?: () => void
}

export function PlatformChoice({ slug = null, onChoose }: PlatformChoiceProps) {
  const handleTelegramClick = () => {
    if (onChoose) onChoose()
  }

  const handleWhatsAppClick = () => {
    if (onChoose) onChoose()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-4 sm:space-y-6"
    >
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-6 sm:mb-8">
        Elige tu plataforma
      </h3>
      
      {/* Desktop: botões lado a lado | Mobile: botões empilhados */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch sm:items-center justify-center">
        <div className="flex-1 sm:flex-none w-full sm:w-auto">
          <div onClick={handleTelegramClick}>
            <TelegramButton size="lg" className="w-full sm:w-auto" slug={slug} />
          </div>
        </div>
        
        <div className="flex-1 sm:flex-none w-full sm:w-auto">
          <div onClick={handleWhatsAppClick}>
            <WhatsAppButton size="lg" className="w-full sm:w-auto" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

