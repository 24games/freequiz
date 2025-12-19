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

  // Debug: log para diagnóstico
  if (typeof window !== 'undefined' && import.meta.env.DEV) {
    console.log('🔘 CTAButton - Platform:', platform, '| Slug:', slug)
  }

  // Early Return: Lógica limpa e clara
  // Se platform === 'wpp', mostrar APENAS WhatsApp
  if (platform === 'wpp') {
    return <WhatsAppButton size={size} className={className} animate={animate} onClick={onClick} />
  }

  // Se platform === 'telegram', mostrar APENAS Telegram
  if (platform === 'telegram') {
    return <TelegramButton size={size} className={className} animate={animate} slug={slug} onClick={onClick} />
  }

  // Se platform === 'telegramwpp', mostrar AMBOS os botões
  if (platform === 'telegramwpp') {
    return <PlatformChoice slug={slug} animate={animate} onChoose={onClick} />
  }

  // Fallback: Se não houver plataforma definida, usa Telegram como padrão
  return <TelegramButton size={size} className={className} animate={animate} slug={slug} onClick={onClick} />
}

