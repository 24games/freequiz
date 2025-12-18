import { useState } from 'react'
import { Toaster } from 'sonner'
import { SmoothScroll } from './lib/smooth-scroll'
import { Header } from './components/header'
import { StickyCTAButton } from './components/sticky-cta-button'
import { HeroSection } from './components/sections/hero-section'
import { QuizSection } from './components/sections/quiz-section'
import { ResultSection } from './components/sections/result-section'
import { VicenteSection } from './components/sections/vicente-section'
import { HowItWorksSection } from './components/sections/how-it-works-section'
import { ResultsSection } from './components/sections/results-section'
import { FAQSection } from './components/sections/faq-section'
import { Footer } from './components/sections/footer'
import './index.css'

type QuizAnswers = {
  question1?: string
  question2?: string
  question3?: string
}

function App() {
  const [currentSection, setCurrentSection] = useState<'hero' | 'quiz' | 'result'>('hero')
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswers>({})
  const [currentQuestion, setCurrentQuestion] = useState(1)

  const handleStartQuiz = () => {
    setCurrentSection('quiz')
    setCurrentQuestion(1)
    setQuizAnswers({})
  }

  const handleAnswer = (questionNum: number, answer: string) => {
    const newAnswers = {
      ...quizAnswers,
      [`question${questionNum}`]: answer,
    }
    setQuizAnswers(newAnswers)

    if (questionNum < 3) {
      setTimeout(() => {
        setCurrentQuestion(questionNum + 1)
      }, 300)
    } else {
      setTimeout(() => {
        setCurrentSection('result')
      }, 2000)
    }
  }

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden relative">
        {/* Header fixo com logo VICENTE TIPS */}
        <Header />
        
        {currentSection === 'hero' && (
          <HeroSection onStartQuiz={handleStartQuiz} />
        )}

        {currentSection === 'quiz' && (
          <QuizSection
            currentQuestion={currentQuestion}
            onAnswer={handleAnswer}
          />
        )}

        {currentSection === 'result' && (
          <>
            <ResultSection />
            <VicenteSection />
            <HowItWorksSection />
            <ResultsSection />
            <FAQSection />
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
