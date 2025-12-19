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
 */
export function trackLead(slug?: string) {
  if (typeof window !== 'undefined' && window.fbq) {
    const params: Record<string, unknown> = {}
    
    if (slug) {
      params.content_name = slug
    }
    
    window.fbq('track', 'Lead', params)
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

