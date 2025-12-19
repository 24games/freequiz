import { Button } from './ui/button'
import { FaWhatsapp } from 'react-icons/fa'
import { getWhatsAppUrl } from '@/config/whatsapp'

interface WhatsAppButtonProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  onClick?: () => void
}

export function WhatsAppButton({ size = 'lg', className = '', onClick }: WhatsAppButtonProps) {
  const whatsappUrl = getWhatsAppUrl()

  // Design "gordinho" - Verde do WhatsApp
  // py-5 px-10, font-black, box-shadow direto no botão, animação ultra-rápida
  const baseClasses = "bg-[#22c55e] hover:bg-[#16a34a] text-white font-black text-xl uppercase tracking-wider rounded-full flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 hover:-translate-y-1 active:scale-95 py-5 px-10 border-0 outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 shadow-[0_0_25px_rgba(34,197,94,0.6)] animate-quick"

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
      variant={undefined}
      className={`${baseClasses} ${sizeClasses[size]} ${className}`}
      style={{ backgroundColor: '#22c55e' }}
    >
      <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
      EMPEZAR AHORA
    </Button>
  ) : (
    <Button
      asChild
      size={buttonSize}
      variant={undefined}
      className={`${baseClasses} ${sizeClasses[size]} ${className}`}
      style={{ backgroundColor: '#22c55e' }}
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
        EMPEZAR AHORA
      </a>
    </Button>
  )

  // Container totalmente transparente, sem bordas pretas
  const button = (
    <div className="inline-block bg-transparent" style={{ backgroundColor: 'transparent' }}>
      {buttonContent}
    </div>
  )

  return button
}

