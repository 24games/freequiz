import { useState } from 'react'
import { Toaster } from 'sonner'
import { SmoothScroll } from './lib/smooth-scroll'
import { Header } from './components/header'
import { StickyCTAButton } from './components/sticky-cta-button'
import { HeroSection } from './components/sections/hero-section'
import { QuizSection } from './components/sections/quiz-section'
import { Footer } from './components/sections/footer'
import './index.css'

function App() {
  const [currentSection, setCurrentSection] = useState<'hero' | 'quiz'>('hero')
  const [currentQuestion, setCurrentQuestion] = useState(1)

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

export default App
