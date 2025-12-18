import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CTAButton } from './cta-button'

export function StickyCTAButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Mostra o botão após passar da primeira dobra (aproximadamente 100vh)
      const scrollPosition = window.scrollY || window.pageYOffset
      const viewportHeight = window.innerHeight
      setIsVisible(scrollPosition > viewportHeight * 0.8)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Verifica na montagem inicial

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 px-4 py-3 sm:py-4 bg-black/90 sm:bg-black/80 backdrop-blur-xl border-t border-green-500/20"
        >
          <div className="container mx-auto max-w-6xl">
            <motion.div
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-full sm:w-auto mx-auto"
            >
              <CTAButton size="lg" className="w-full sm:w-auto mx-auto" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

