import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizMakerComponent } from './quiz-maker/quiz-maker.component';
import { QuizesPageRoutingModule } from './quizes-page-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [QuizMakerComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    QuizesPageRoutingModule,
    HttpClientModule,
  ],
})
export class QuizesPageModule {}
