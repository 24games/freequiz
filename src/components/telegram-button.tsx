import { Button } from './ui/button'
import { Send } from 'lucide-react'
import { getTelegramUrl } from '@/config/telegram'

interface TelegramButtonProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  slug?: string | null
  onClick?: () => void
}

export function TelegramButton({ size = 'lg', className = '', slug = null, onClick }: TelegramButtonProps) {
  const telegramUrl = getTelegramUrl(slug)

  // Design "gordinho" - Azul oficial do Telegram
  // py-4 px-8, font-black, box-shadow suave direto no botão
  const baseClasses = "bg-[#24A1DE] hover:bg-[#1E8FC7] text-white font-black text-xl uppercase tracking-wider rounded-full flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 hover:-translate-y-1 active:scale-95 py-4 px-8 border-0 outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 shadow-[0_0_20px_rgba(36,161,222,0.5)] animate-simple-pulse"

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
      style={{ backgroundColor: '#24A1DE' }}
    >
      <Send className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
      EMPEZAR AHORA
    </Button>
  ) : (
    <Button
      asChild
      size={buttonSize}
      variant={undefined}
      className={`${baseClasses} ${sizeClasses[size]} ${className}`}
      style={{ backgroundColor: '#24A1DE' }}
    >
      <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
        <Send className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
        EMPEZAR AHORA
      </a>
    </Button>
  )

  // Retornar botão diretamente, sem container extra
  return buttonContent
}

