export interface QuizResult {
  question: string;
  point: number;
  answers: QuizResultAnswer[]
}

export interface QuizResultAnswer {
  text: string;
  guiClass: string;
}
