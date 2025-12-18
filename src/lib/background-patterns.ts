import miniSvgDataUri from 'mini-svg-data-uri'

/**
 * Gera padrões de background usando mini-svg-data-uri
 * Essenciais para o visual "Tech/Security"
 */

export const backgroundPatterns = {
  // Grid pattern - estilo tech
  grid: miniSvgDataUri(`
    <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" stroke-width="1" opacity="0.1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  `),

  // Dots pattern - estilo moderno
  dots: miniSvgDataUri(`
    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
      <circle cx="2" cy="2" r="1" fill="currentColor" opacity="0.1"/>
    </svg>
  `),

  // Diagonal lines - estilo security
  diagonal: miniSvgDataUri(`
    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
      <path d="M 0 20 L 20 0" stroke="currentColor" stroke-width="0.5" opacity="0.1"/>
    </svg>
  `),
}

/**
 * Hook para usar padrões de background
 */
export function useBackgroundPattern(pattern: keyof typeof backgroundPatterns) {
  return {
    backgroundImage: backgroundPatterns[pattern],
    backgroundRepeat: 'repeat' as const,
  }
}

