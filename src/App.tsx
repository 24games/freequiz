import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from 'sonner'
import { SmoothScroll } from './lib/smooth-scroll'
import { Header } from './components/header'
import { StickyCTAButton } from './components/sticky-cta-button'
import { HeroSection } from './components/sections/hero-section'
import { QuizSection } from './components/sections/quiz-section'
import { Footer } from './components/sections/footer'
import { trackPageView } from './lib/meta-pixel'
import './index.css'

// Lista de slugs válidos
const VALID_SLUGS = [
  'cr1-a1f1', 'cr2-a1f1', 'cr3-a1f1',
  'cr1-a1f2', 'cr2-a1f2', 'cr3-a1f2',
  'cr1-a3f1', 'cr2-a3f1', 'cr3-a3f1',
  'cr1-a3f2', 'cr2-a3f2', 'cr3-a3f2',
  'cr1-a6f1', 'cr2-a6f1', 'cr3-a6f1',
  'cr1-a7f1', 'cr2-a7f1', 'cr3-a7f1',
]

// Lista de plataformas válidas
const VALID_PLATFORMS = ['telegram', 'wpp', 'telegramwpp']

function LandingPage() {
  const [currentSection, setCurrentSection] = useState<'hero' | 'quiz'>('hero')
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const location = useLocation()

  // Track page view quando a rota muda
  useEffect(() => {
    trackPageView()
  }, [location.pathname])

  const handleStartQuiz = () => {
    setCurrentSection('quiz')
    setCurrentQuestion(1)
  }

  const handleAnswer = (questionNum: number) => {
    if (questionNum < 3) {
      setTimeout(() => {
        setCurrentQuestion(questionNum + 1)
      }, 300)
    }
    // Se for a última pergunta, o redirecionamento é feito diretamente no QuizSection
  }

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden relative" style={{ backgroundColor: '#000000' }}>
        {/* Header fixo com logo VICENTE TIPS */}
        <Header />
        
        {currentSection === 'hero' && (
          <HeroSection onStartQuiz={handleStartQuiz} />
        )}

        {currentSection === 'quiz' && (
          <>
            <QuizSection
              currentQuestion={currentQuestion}
              onAnswer={handleAnswer}
            />
            <Footer />
          </>
        )}

        {/* Botão CTA Sticky - aparece após primeira dobra em qualquer seção */}
        <StickyCTAButton />

        <Toaster position="top-center" className="sm:top-right" />
      </div>
    </SmoothScroll>
  )
}

function App() {
  return (
    <Routes>
      {/* Rota principal */}
      <Route path="/" element={<LandingPage />} />
      
      {/* Rotas dinâmicas aninhadas: /:platform/:slug */}
      {VALID_PLATFORMS.map((platform) => (
        VALID_SLUGS.map((slug) => (
          <Route 
            key={`${platform}-${slug}`} 
            path={`/${platform}/${slug}`} 
            element={<LandingPage />} 
          />
        ))
      ))}
      
      {/* Rotas dinâmicas para slugs válidos (sem plataforma - fallback para Telegram) */}
      {VALID_SLUGS.map((slug) => (
        <Route key={slug} path={`/${slug}`} element={<LandingPage />} />
      ))}
      
      {/* Fallback: qualquer outra rota também renderiza a landing page */}
      <Route path="*" element={<LandingPage />} />
    </Routes>
  )
}

export default App
