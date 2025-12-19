import { useParams, useLocation } from 'react-router-dom'

export type Platform = 'telegram' | 'wpp' | 'telegramwpp'

/**
 * Hook para obtener la plataforma y el slug de la URL actual
 * Retorna la plataforma y el slug, o null si no están presentes
 */
export function usePlatform(): { platform: Platform | null; slug: string | null } {
  const params = useParams<{ platform?: string; slug?: string }>()
  const location = useLocation()
  
  // Normalizar platform e slug dos params
  let platform: Platform | null = null
  let slug: string | null = null

  // Primeiro, tentar pegar dos params do React Router
  if (params.platform) {
    const normalizedPlatform = params.platform.toLowerCase().trim()
    if (['telegram', 'wpp', 'telegramwpp'].includes(normalizedPlatform)) {
      platform = normalizedPlatform as Platform
    }
  }

  if (params.slug) {
    slug = params.slug.trim()
  }

  // Se não encontrou nos params, extrair da URL diretamente
  if (!platform) {
    const pathParts = location.pathname.split('/').filter(Boolean)
    
    if (pathParts.length >= 2) {
      // Formato: /platform/slug
      const possiblePlatform = pathParts[0].toLowerCase().trim()
      if (['telegram', 'wpp', 'telegramwpp'].includes(possiblePlatform)) {
        platform = possiblePlatform as Platform
        slug = pathParts[1]?.trim() || null
      }
    } else if (pathParts.length === 1) {
      // Pode ser apenas slug sem platform
      const singlePart = pathParts[0].toLowerCase().trim()
      if (!['telegram', 'wpp', 'telegramwpp'].includes(singlePart)) {
        slug = pathParts[0]
      }
    }
  }

  // Debug: log para diagnóstico
  if (typeof window !== 'undefined' && import.meta.env.DEV) {
    console.log('🔍 usePlatform - Platform atual:', platform, '| Slug:', slug, '| Pathname:', location.pathname)
  }

  return { platform, slug }
}

