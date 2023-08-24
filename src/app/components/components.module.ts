import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizMakerSearchBarComponent } from './quiz-maker-search-bar/quiz-maker-search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [QuizMakerSearchBarComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [QuizMakerSearchBarComponent],
})
export class ComponentsModule {}
