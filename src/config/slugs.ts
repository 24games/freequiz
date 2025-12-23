/**
 * Configuração de slugs e links do Telegram
 * Mapeia cada slug para seu respectivo link do Telegram
 */

export interface SlugConfig {
  slug: string
  telegramLink: string
}

export const slugsConfig: SlugConfig[] = [
  {
    slug: 'cr1-a1f2',
    telegramLink: 'https://t.me/vicentetipstertelegrambot?start=w48454161'
  },
  {
    slug: 'cr4-a1f1',
    telegramLink: 'https://t.me/vicentetipstertelegrambot?start=w48450811'
  },
  {
    slug: 'cr5-a1f1',
    telegramLink: 'https://t.me/vicentetipstertelegrambot?start=w48451069'
  },
  {
    slug: 'cr6-a1f1',
    telegramLink: 'https://t.me/vicentetipstertelegrambot?start=w48451079'
  },
  {
    slug: 'cr7-a1f1',
    telegramLink: 'https://t.me/vicentetipstertelegrambot?start=w48451098'
  },
  {
    slug: 'cr8-a1f1',
    telegramLink: 'https://t.me/vicentetipstertelegrambot?start=w48451120'
  },
  {
    slug: 'cr9-a1f1',
    telegramLink: 'https://t.me/vicentetipstertelegrambot?start=w48451137'
  },
  {
    slug: 'cr10-a1f1',
    telegramLink: 'https://t.me/vicentetipstertelegrambot?start=w48451227'
  },
  {
    slug: 'cr11-a1f1',
    telegramLink: 'https://t.me/vicentetipstertelegrambot?start=w48451276'
  },
  {
    slug: 'cr12-a1f1',
    telegramLink: 'https://t.me/vicentetipstertelegrambot?start=w48451295'
  }
]

/**
 * Função auxiliar para buscar o link do Telegram por slug
 */
export function getTelegramLinkBySlug(slug: string): string | undefined {
  const config = slugsConfig.find(s => s.slug === slug)
  return config?.telegramLink
}

/**
 * Função auxiliar para verificar se um slug existe
 */
export function slugExists(slug: string): boolean {
  return slugsConfig.some(s => s.slug === slug)
}

