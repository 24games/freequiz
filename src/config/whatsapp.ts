/**
 * Configuración de WhatsApp
 * 
 * IMPORTANTE: Reemplaza el número de abajo por el número real de WhatsApp
 * Formato: código del país + número (sin espacios o caracteres especiales)
 * Ejemplo: 56912345678 (Chile: 56, número: 912345678)
 */
export const WHATSAPP_CONFIG = {
  number: '56912345678', // ⚠️ CAMBIA AQUÍ
  defaultMessage: '¡Hola! Quiero entrar al grupo gratis de análisis!',
}

/**
 * Gera URL do WhatsApp com mensagem pré-formatada
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || WHATSAPP_CONFIG.defaultMessage
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodedMessage}`
}


