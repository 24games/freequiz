/**
 * Configuração de links do Telegram por slug
 * Este objeto é usado pelo código compilado para mapear slugs para links do Telegram
 */

export const telegramLinks: Record<string, string> = {
  'cr1-a1f1': 'https://t.me/vicentetipstertelegrambot?start=w48325544',
  'cr2-a1f1': 'https://t.me/vicentetipstertelegrambot?start=w48325588',
  'cr3-a1f1': 'https://t.me/vicentetipstertelegrambot?start=w48325589',
  'cr1-a1f2': 'https://t.me/vicentetipstertelegrambot?start=w48454161',
  'cr2-a1f2': 'https://t.me/vicentetipstertelegrambot?start=w48325595',
  'cr3-a1f2': 'https://t.me/vicentetipstertelegrambot?start=w48325596',
  'cr1-a1f3': 'https://t.me/vicentetipstertelegrambot?start=w48361953',
  'cr2-a1f3': 'https://t.me/vicentetipstertelegrambot?start=w48362012',
  'cr3-a1f3': 'https://t.me/vicentetipstertelegrambot?start=w48386056',
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
  'cr4-a1f1': 'https://t.me/vicentetipstertelegrambot?start=w48450811',
  'cr5-a1f1': 'https://t.me/vicentetipstertelegrambot?start=w48451069',
  'cr6-a1f1': 'https://t.me/vicentetipstertelegrambot?start=w48451079',
  'cr7-a1f1': 'https://t.me/vicentetipstertelegrambot?start=w48451098',
  'cr8-a1f1': 'https://t.me/vicentetipstertelegrambot?start=w48451120',
  'cr9-a1f1': 'https://t.me/vicentetipstertelegrambot?start=w48451137',
  'cr10-a1f1': 'https://t.me/vicentetipstertelegrambot?start=w48451227',
  'cr11-a1f1': 'https://t.me/vicentetipstertelegrambot?start=w48451276',
  'cr12-a1f1': 'https://t.me/vicentetipstertelegrambot?start=w48451295'
}

/**
 * Link padrão do Telegram caso o slug não seja encontrado
 */
export const defaultTelegramLink = 'https://t.me/vicentetipstertelegrambot?start=w48325544'

/**
 * Função para obter o link do Telegram por slug
 */
export function getTelegramLink(slug: string | null): string {
  if (!slug) return defaultTelegramLink
  return telegramLinks[slug] || defaultTelegramLink
}

