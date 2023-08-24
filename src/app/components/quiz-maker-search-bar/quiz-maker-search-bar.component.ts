import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuizMakerSelectOption } from '../../models/QuizMakerSelectOption.model';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'quiz-maker-search-bar',
  templateUrl: './quiz-maker-search-bar.component.html',
  styleUrls: ['./quiz-maker-search-bar.component.scss'],
})
export class QuizMakerSearchBarComponent implements OnInit {
  quizMakerForm: FormGroup;

  categories: QuizMakerSelectOption[];
  difficulties: QuizMakerSelectOption[];

  constructor(
    private _formBuilder: FormBuilder,
    private _quizService: QuizService
  ) {
    this.quizMakerForm = this._formBuilder.group({
      category: ['', [Validators.required]],
      difficulty: ['', [Validators.required]],
    });

    this.categories = [];
    this.difficulties = [
      {
        optionValue: 'easy',
        visualValue: 'Easy',
      },
      {
        optionValue: 'medium',
        visualValue: 'Medium',
      },
      {
        optionValue: 'hard',
        visualValue: 'Hard',
      },
    ];
  }

  ngOnInit(): void {
    this._quizService.getCategories().subscribe((apiResponse) => {
      apiResponse.trivia_categories.forEach((cat) =>
        this.categories.push({
          optionValue: cat.id.toString(),
          visualValue: cat.name,
        })
      );
    });
  }

  createQuiz(): void {
    console.log('---', this.quizMakerForm);
  }
}
