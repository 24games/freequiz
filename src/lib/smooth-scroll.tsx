import { useEffect, useRef } from "react"
import Lenis from "lenis"

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    try {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      })

      lenisRef.current = lenis

      function raf(time: number) {
        if (lenisRef.current) {
          lenisRef.current.raf(time)
          rafRef.current = requestAnimationFrame(raf)
        }
      }

      rafRef.current = requestAnimationFrame(raf)

      return () => {
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current)
        }
        if (lenisRef.current) {
          try {
            lenisRef.current.destroy()
          } catch (error) {
            console.warn('Error destroying Lenis:', error)
          }
          lenisRef.current = null
        }
      }
    } catch (error) {
      console.warn('Error initializing Lenis:', error)
    }
  }, [])

  return <>{children}</>
}

