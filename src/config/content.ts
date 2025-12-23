/**
 * Configuração de conteúdo textual da página
 * Textos em espanhol chileno coloquial
 */

/**
 * Headline principal da página
 */
export const mainHeadline = "Gana 100 lucas todos los días en mi grupo de análisis"

/**
 * Perguntas do quiz
 */
export interface QuizQuestion {
  id: number
  question: string
  options: string[]
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "¿Apostái seguido?",
    options: [
      "Sí, me gusta",
      "De repente",
      "No mucho"
    ]
  },
  {
    id: 2,
    question: "¿Cuánto quieres ganar al mes?",
    options: [
      "$50.000 - $200.000 CLP",
      "$200.000 - $500.000 CLP",
      "Más de $500.000 CLP"
    ]
  },
  {
    id: 3,
    question: "¿Puedes empezar hoy?",
    options: [
      "Sí, ahora mismo",
      "En los próximos días",
      "Solo estoy viendo"
    ]
  }
]

