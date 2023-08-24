import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizQuestion } from '../../models/QuizQuestion.model';
import { QuizResult, QuizResultAnswer } from '../../models/QuizResult.model';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'quiz-maker-results',
  templateUrl: './quiz-maker-results.component.html',
  styleUrls: ['./quiz-maker-results.component.scss'],
})
export class QuizMakerResultsComponent implements OnInit {
  finalResults: QuizResult[];
  finalScore: number;
  finalScoreClass: string;

  constructor(private _quizService: QuizService, private _router: Router) {
    this.finalResults = [];
    this.finalScore = 0;
    this.finalScoreClass = '';
  }

  ngOnInit(): void {
    this.generateResults(this._quizService.getTry());
  }

  generateResults(questionsTry: QuizQuestion[]) {
    questionsTry.forEach((qt) => {
      let point = 0;
      let answers: QuizResultAnswer[] = qt.possibleAnswers.map((pa) => ({
        text: pa.text,
        guiClass: 'is-success is-outlined',
      }));

      answers.filter((a) => a.text === qt.correctAnswer)[0].guiClass =
        'is-success';

      if (qt.correctAnswer === qt.selectedAnswer) {
        point = 1;
      } else {
        answers.filter((a) => a.text === qt.selectedAnswer)[0].guiClass =
          'is-danger';
      }

      this.finalResults.push({
        question: qt.question,
        point: point,
        answers: answers,
      });
    });

    this.finalScore = this.finalResults.reduce(
      (total, i) => total + i.point,
      0
    );

    if (this.finalScore >= 0 && this.finalScore <= 1) {
      this.finalScoreClass = 'is-danger';
    } else if (this.finalScore >= 2 && this.finalScore <= 3) {
      this.finalScoreClass = 'is-warning';
    } else {
      this.finalScoreClass = 'is-success';
    }
  }

  newQuiz(): void {
    this._router.navigate(['quizes', 'new-quiz']);
  }
}
