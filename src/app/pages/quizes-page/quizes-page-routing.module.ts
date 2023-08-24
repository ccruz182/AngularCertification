import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizMakerComponent } from './quiz-maker/quiz-maker.component';
import { QuizResultsComponent } from './quiz-results/quiz-results.component';
const routes: Routes = [
  {
    path: 'new-quiz',
    component: QuizMakerComponent,
  },
  {
    path: 'results',
    component: QuizResultsComponent,
  },
  {
    path: '**',
    component: QuizMakerComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizesPageRoutingModule {}
