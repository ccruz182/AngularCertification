import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { QuizSelection } from '../../models/QuizSelection.model';
import { APIQuestionResponse } from '../../models/APIQuestionResponse.model';
import { APIQuestionResultResponse } from '../../models/APIQuestionResponse.model';
import {
  QuizQuestion,
  QuizQuestionPossibleAnswer,
} from '../../models/QuizQuestion.model';
import { Router } from '@angular/router';

@Component({
  selector: 'quiz-maker-questions',
  templateUrl: './quiz-maker-questions.component.html',
  styleUrls: ['./quiz-maker-questions.component.scss'],
})
export class QuizMakerQuestionsComponent implements OnInit {
  showFlag: boolean;
  quizQuestions: QuizQuestion[];
  answersFG: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _quizService: QuizService
  ) {
    this.showFlag = false;
    this.quizQuestions = [];
    this.answersFG = this._formBuilder.group({
      0: ['', [Validators.required]],
      1: ['', [Validators.required]],
      2: ['', [Validators.required]],
      3: ['', [Validators.required]],
      4: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this._quizService.selection$.subscribe((selection: QuizSelection) => {
      this.showFlag = true;
      this.quizQuestions = []; // Restart everytime a click is received.
      this._quizService
        .getQuestions(selection)
        .subscribe((questions: APIQuestionResponse) => {
          this.generateQuestionsGUI(questions.results);
        });
    });
  }

  generateQuestionsGUI(results: APIQuestionResultResponse[]) {
    results.forEach((r: APIQuestionResultResponse) => {
      const pAnswers = [r.correct_answer, ...r.incorrect_answers].sort((a, b) =>
        Math.random() < 0.5 ? -1 : 1
      );

      this.quizQuestions.push({
        correctAnswer: r.correct_answer,
        possibleAnswers: [...pAnswers].map<QuizQuestionPossibleAnswer>((p) => ({
          text: p,
          isSelected: false,
        })),
        question: r.question,
      });
    });
  }

  answerClick(numQuestion: number, answer: QuizQuestionPossibleAnswer) {
    // GUI
    this.quizQuestions[numQuestion].possibleAnswers.forEach(
      (qqpa) => (qqpa.isSelected = false)
    );
    answer.isSelected = !answer.isSelected;
    this.answersFG.controls[numQuestion].setValue(answer.text);
  }

  submitQuiz(): void {
    for (let i = 0; i < this.quizQuestions.length; i++) {
      this.quizQuestions[i].selectedAnswer = this.answersFG.controls[i].value;
    }
    this._quizService.setTry(this.quizQuestions);
    this._router.navigate(['quizes', 'results']);
  }
}
