export interface APIQuestionResponse {
  response_code: number;
  results: APIQuestionResultResponse[];
}

export interface APIQuestionResultResponse {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string
}
