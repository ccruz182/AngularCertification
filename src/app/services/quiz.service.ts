import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { APICategoryResponse } from '../models/APICategoryResponse.model';
import { environment } from 'src/environments/environment';
import { QuizSelection } from '../models/QuizSelection.model';
import { APIQuestionResponse } from '../models/APIQuestionResponse.model';
import { QuizQuestion } from '../models/QuizQuestion.model';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private _selectionBS: Subject<QuizSelection>;
  selection$: Observable<QuizSelection>;

  private _quizTry: QuizQuestion[];

  constructor(private _httpClient: HttpClient) {
    this._selectionBS = new Subject<QuizSelection>();
    this.selection$ = this._selectionBS.asObservable();
    this._quizTry = [];
  }

  getCategories(): Observable<APICategoryResponse> {
    return this._httpClient.get<APICategoryResponse>(
      `${environment.triviaAPIBaseUrl}/api_category.php`
    );
  }

  getQuestions(selection: QuizSelection): Observable<APIQuestionResponse> {
    let params = new HttpParams()
      .set('amount', 5)
      .set('category', selection.category)
      .set('difficulty', selection.difficulty)
      .set('type', 'multiple');
    return this._httpClient.get<APIQuestionResponse>(
      `${environment.triviaAPIBaseUrl}/api.php`,
      { params }
    );
  }

  setSelection(quizSelection: QuizSelection): void {
    this._selectionBS.next(quizSelection);
  }

  setTry(quizQuestionTry: QuizQuestion[]) {
    this._quizTry = [...quizQuestionTry];
  }

  getTry(): QuizQuestion[] {
    return this._quizTry;
  }
}
