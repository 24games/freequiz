/**
 * Configuração de fontes
 * 
 * Como estamos usando Vite (não Next.js), as fontes são carregadas via:
 * 1. Google Fonts no index.html (link tags)
 * 2. CSS Variables no tailwind.config.ts
 * 
 * As fontes Inter e JetBrains Mono estão configuradas e disponíveis via:
 * - font-sans (Inter)
 * - font-mono (JetBrains Mono)
 */

// Variáveis CSS para uso em componentes
export const fontVariables = {
  inter: 'var(--font-inter)',
  jetbrainsMono: 'var(--font-jetbrains-mono)',
}

