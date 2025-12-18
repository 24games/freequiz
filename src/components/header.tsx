import { motion } from 'framer-motion'
import { useState } from 'react'

export function Header() {
  const [imageError, setImageError] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-green-500/10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-center">
          {/* Logo Container com Glow */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Glow verde atrás do logo */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-full h-full bg-green-500/20 rounded-lg blur-xl opacity-60" />
            </div>
            
            {/* Logo */}
            <div className="relative">
              {!imageError ? (
                <img
                  src="/vicente-tips-logo.png"
                  alt="VICENTE TIPS"
                  className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div 
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-green-400 leading-tight"
                  style={{ 
                    textShadow: '0 0 20px rgba(34, 197, 94, 0.8), 0 0 40px rgba(34, 197, 94, 0.4)',
                    letterSpacing: '0.1em'
                  }}
                >
                  <div>VICENTE</div>
                  <div className="text-center">TIPS</div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  )
}

