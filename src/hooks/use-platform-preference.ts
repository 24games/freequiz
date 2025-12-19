import { useState, useEffect, useCallback } from 'react'

export type PlatformPreference = 'telegram' | 'wpp' | null

const STORAGE_KEY = 'vicente_platform_preference'

/**
 * Hook para gerenciar a preferência de plataforma do usuário
 * Persiste a escolha no localStorage
 */
export function usePlatformPreference() {
  const [chosenPlatform, setChosenPlatform] = useState<PlatformPreference>(null)

  // Carregar preferência do localStorage ao montar
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored === 'telegram' || stored === 'wpp') {
        setChosenPlatform(stored as PlatformPreference)
      }
    }
  }, [])

  // Função para salvar a preferência
  const choosePlatform = useCallback((platform: 'telegram' | 'wpp') => {
    setChosenPlatform(platform)
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, platform)
    }
  }, [])

  // Função para limpar a preferência
  const clearPreference = useCallback(() => {
    setChosenPlatform(null)
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY)
    }
  }, [])

  return {
    chosenPlatform,
    choosePlatform,
    clearPreference,
  }
}

