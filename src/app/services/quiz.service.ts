import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APICategoryResponse } from '../models/APICategoryResponse.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private _httpClient: HttpClient) {}

  getCategories(): Observable<APICategoryResponse> {
    return this._httpClient.get<APICategoryResponse>(
      `${environment.triviaAPIBaseUrl}/api_category.php`
    );
  }
}
