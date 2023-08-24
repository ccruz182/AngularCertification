import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizMakerComponent } from './quiz-maker/quiz-maker.component';
const routes: Routes = [
  {
    path: '',
    component: QuizMakerComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizesPageRoutingModule {}
