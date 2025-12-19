import { useLocation } from 'react-router-dom'

/**
 * Hook para obter o slug da URL atual
 * Retorna o slug ou null se estiver na rota principal
 */
export function useSlug(): string | null {
  const location = useLocation()
  const pathname = location.pathname
  
  // Remove a barra inicial e retorna o slug
  const slug = pathname.replace(/^\//, '')
  
  // Se for rota vazia ou apenas '/', retorna null
  if (!slug || slug === '') {
    return null
  }
  
  return slug
}


