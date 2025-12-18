import { motion } from 'framer-motion'

/**
 * Componente de background com gradiente animado e padrões
 * Design moderno e sofisticado para landing page premium
 */
export function BackgroundGradient() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient - múltiplas camadas */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] via-[#0a1a0a] via-[#0a2a0a] to-[#0a3d0a]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60" />
      
      {/* Animated gradient orbs - múltiplas camadas animadas */}
      <motion.div
        className="absolute w-[600px] h-[600px] md:w-[900px] md:h-[900px] bg-green-500/25 rounded-full blur-3xl -top-[300px] -right-[300px] md:-top-[450px] md:-right-[450px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4],
          x: [0, 60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-green-400/20 rounded-full blur-3xl -bottom-[250px] -left-[250px] md:-bottom-[350px] md:-left-[350px]"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
      
      <motion.div
        className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-emerald-500/15 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
      
      {/* Orb adicional para profundidade */}
      <motion.div
        className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-cyan-500/10 rounded-full blur-3xl top-[20%] right-[10%]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      />
      
      {/* Grid pattern overlay - sutil */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 0, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 0, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Diagonal lines pattern - mais sutil */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 15px,
            rgba(0, 255, 0, 0.08) 15px,
            rgba(0, 255, 0, 0.08) 30px
          )`,
        }}
      />
      
      {/* Radial gradient overlay para profundidade */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/80" />
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40" />
    </div>
  )
}

