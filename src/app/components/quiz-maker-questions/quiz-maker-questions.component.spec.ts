import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizMakerQuestionsComponent } from './quiz-maker-questions.component';

describe('QuizMakerQuestionsComponent', () => {
  let component: QuizMakerQuestionsComponent;
  let fixture: ComponentFixture<QuizMakerQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizMakerQuestionsComponent]
    });
    fixture = TestBed.createComponent(QuizMakerQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
