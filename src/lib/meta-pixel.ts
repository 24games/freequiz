/**
 * Meta Pixel Helper Functions
 * Dispara eventos do Facebook Pixel
 */

declare global {
  interface Window {
    fbq?: (
      action: string,
      event: string,
      params?: Record<string, unknown>
    ) => void
  }
}

/**
 * Dispara evento Lead do Meta Pixel
 * @param slug - Slug da URL (opcional)
 * @param platform - Plataforma escolhida pelo usuário (opcional)
 */
export function trackLead(slug?: string, platform?: string) {
  if (typeof window !== 'undefined' && window.fbq) {
    const params: Record<string, unknown> = {}
    
    if (slug) {
      params.content_name = slug
    }
    
    if (platform) {
      params.platform = platform
    }
    
    window.fbq('track', 'Lead', params)
    
    // Debug log
    if (import.meta.env.DEV) {
      console.log('📊 Meta Pixel - Lead event fired:', params)
    }
  }
}

/**
 * Dispara evento PageView do Meta Pixel
 */
export function trackPageView() {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView')
  }
}



