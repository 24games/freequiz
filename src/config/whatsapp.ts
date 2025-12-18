/**
 * Configuração do WhatsApp
 * 
 * IMPORTANTE: Substitua o número abaixo pelo número real do WhatsApp
 * Formato: código do país + DDD + número (sem espaços ou caracteres especiais)
 * Exemplo: 5511999999999 (Brasil: 55, DDD: 11, número: 999999999)
 */
export const WHATSAPP_CONFIG = {
  number: '5511999999999', // ⚠️ ALTERE AQUI
  defaultMessage: 'Olá! Quero entrar no grupo Free de análises!',
}

/**
 * Gera URL do WhatsApp com mensagem pré-formatada
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || WHATSAPP_CONFIG.defaultMessage
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodedMessage}`
}


