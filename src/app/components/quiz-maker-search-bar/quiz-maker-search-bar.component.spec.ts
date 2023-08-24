import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizMakerSearchBarComponent } from './quiz-maker-search-bar.component';

describe('QuizMakerSearchBarComponent', () => {
  let component: QuizMakerSearchBarComponent;
  let fixture: ComponentFixture<QuizMakerSearchBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizMakerSearchBarComponent]
    });
    fixture = TestBed.createComponent(QuizMakerSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
