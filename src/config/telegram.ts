/**
 * Configuración de Telegram
 * 
 * Mapeo de slugs a URLs del bot de Telegram
 */
export const TELEGRAM_URLS: Record<string, string> = {
  'cr1-a1f1': 'https://t.me/vicentetipstertelegrambot?start=w48325544',
  'cr2-a1f1': 'https://t.me/vicentetipstertelegrambot?start=w48325588',
  'cr3-a1f1': 'https://t.me/vicentetipstertelegrambot?start=w48325589',
  'cr1-a1f2': 'https://t.me/vicentetipstertelegrambot?start=w48325594',
  'cr2-a1f2': 'https://t.me/vicentetipstertelegrambot?start=w48325595',
  'cr3-a1f2': 'https://t.me/vicentetipstertelegrambot?start=w48325596',
  'cr1-a3f1': 'https://t.me/vicentetipstertelegrambot?start=w48325614',
  'cr2-a3f1': 'https://t.me/vicentetipstertelegrambot?start=w48325615',
  'cr3-a3f1': 'https://t.me/vicentetipstertelegrambot?start=w48325616',
  'cr1-a3f2': 'https://t.me/vicentetipstertelegrambot?start=w48325877',
  'cr2-a3f2': 'https://t.me/vicentetipstertelegrambot?start=w48325876',
  'cr3-a3f2': 'https://t.me/vicentetipstertelegrambot?start=w48325875',
  'cr1-a6f1': 'https://t.me/vicentetipstertelegrambot?start=w48325545',
  'cr2-a6f1': 'https://t.me/vicentetipstertelegrambot?start=w48325613',
  'cr3-a6f1': 'https://t.me/vicentetipstertelegrambot?start=w48325612',
  'cr1-a7f1': 'https://t.me/vicentetipstertelegrambot?start=w48325611',
  'cr2-a7f1': 'https://t.me/vicentetipstertelegrambot?start=w48325623',
  'cr3-a7f1': 'https://t.me/vicentetipstertelegrambot?start=w48325622',
}

/**
 * URL padrão do Telegram (usada quando não há slug ou slug não encontrado)
 */
export const DEFAULT_TELEGRAM_URL = 'https://t.me/vicentetipstertelegrambot?start=w48325544'

/**
 * Obtiene la URL del Telegram basada en el slug
 * @param slug El slug de la URL actual
 * @returns La URL del bot de Telegram correspondiente
 */
export function getTelegramUrl(slug: string | null): string {
  if (!slug) {
    return DEFAULT_TELEGRAM_URL
  }
  
  return TELEGRAM_URLS[slug] || DEFAULT_TELEGRAM_URL
}


