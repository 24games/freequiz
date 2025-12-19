import { TelegramButton } from './telegram-button'
import { WhatsAppButton } from './whatsapp-button'
import { PlatformChoice } from './platform-choice'
import { usePlatform } from '@/hooks/use-platform'

interface CTAButtonProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  animate?: boolean
  onClick?: () => void
}

export function CTAButton({ size = 'lg', className = '', animate = false, onClick }: CTAButtonProps) {
  const { platform, slug } = usePlatform()

  // Se não houver plataforma definida, usa Telegram como padrão
  if (!platform || platform === 'telegram') {
    return <TelegramButton size={size} className={className} animate={animate} slug={slug} onClick={onClick} />
  }

  if (platform === 'wpp') {
    return <WhatsAppButton size={size} className={className} animate={animate} onClick={onClick} />
  }

  if (platform === 'telegramwpp') {
    return <PlatformChoice slug={slug} />
  }

  // Fallback para Telegram
  return <TelegramButton size={size} className={className} animate={animate} slug={slug} onClick={onClick} />
}

