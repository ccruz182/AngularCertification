import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizMakerSearchBarComponent } from './quiz-maker-search-bar/quiz-maker-search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuizMakerQuestionsComponent } from './quiz-maker-questions/quiz-maker-questions.component';
import { QuizMakerResultsComponent } from './quiz-maker-results/quiz-maker-results.component';

@NgModule({
  declarations: [
    QuizMakerSearchBarComponent,
    QuizMakerQuestionsComponent,
    QuizMakerResultsComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    QuizMakerSearchBarComponent,
    QuizMakerQuestionsComponent,
    QuizMakerResultsComponent,
  ],
})
export class ComponentsModule {}
