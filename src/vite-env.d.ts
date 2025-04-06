
/// <reference types="vite/client" />

// Extend Window interface to include quizAttempts and mockQuizzes
interface Window {
  quizAttempts: any[];
  mockQuizzes: any[];
}
