/**
 * Quiz Question TypeScript Interface
 * Ensures type safety for all quiz questions across course data files
 */

export interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export interface CourseModule {
  id: number
  title: string
  content: string
  quiz?: {
    title: string
    questions: QuizQuestion[]
  }
}

/**
 * Validation utility to catch quiz data errors during development
 */
export function validateQuizQuestions(questions: unknown[]): questions is QuizQuestion[] {
  return questions.every((q) => {
    if (typeof q !== 'object' || q === null) return false
    const question = q as Record<string, unknown>
    
    return (
      typeof question.id === 'number' &&
      typeof question.question === 'string' &&
      Array.isArray(question.options) &&
      question.options.every((opt) => typeof opt === 'string') &&
      typeof question.correctAnswer === 'number' &&
      typeof question.explanation === 'string' &&
      question.correctAnswer >= 0 &&
      question.correctAnswer < (question.options as string[]).length
    )
  })
}
