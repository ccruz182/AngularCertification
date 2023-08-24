export interface QuizQuestion {
  question: string;
  correctAnswer: string;
  possibleAnswers: QuizQuestionPossibleAnswer[];
  selectedAnswer?: string;
}

export interface QuizQuestionPossibleAnswer {
  text: string;
  isSelected: boolean;
}
