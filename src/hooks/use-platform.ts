import { useParams } from 'react-router-dom'

export type Platform = 'telegram' | 'wpp' | 'telegramwpp'

/**
 * Hook para obtener la plataforma y el slug de la URL actual
 * Retorna la plataforma y el slug, o null si no están presentes
 */
export function usePlatform(): { platform: Platform | null; slug: string | null } {
  const params = useParams<{ platform?: string; slug?: string }>()
  
  const platform = params.platform as Platform | undefined
  const slug = params.slug || null

  // Validar que la plataforma sea una de las válidas
  if (platform && ['telegram', 'wpp', 'telegramwpp'].includes(platform)) {
    return { platform: platform as Platform, slug }
  }

  // Si no hay plataforma válida, retorna null
  return { platform: null, slug }
}

