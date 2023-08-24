import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-maker',
  templateUrl: './quiz-maker.component.html',
  styleUrls: ['./quiz-maker.component.scss']
})
export class QuizMakerComponent implements OnInit {

  constructor(private _quizService: QuizService) {

  }

  ngOnInit(): void {
      const q = this._quizService.getCategories();
      console.log("q --> ", q);
  }


}
