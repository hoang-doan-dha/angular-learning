import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ArticleModel } from '../models/ArticleModel';

const BASE_URL: string = 'http://localhost:3000';


@Injectable({
  providedIn: 'root'
})
export class LessonOneService {
  articleSubject = new Subject<ArticleModel>();

  constructor(private http: HttpClient) { }

  public getArticleById(id: number): Observable<ArticleModel> {
    return this.http
      .get<ArticleModel>(`${BASE_URL}/articles/${id}`)
      .pipe(
        tap((article) => this.articleSubject.next(article))
      );
  }


  public getArticleAsObservable() {
    return this.articleSubject.asObservable();
  }
}
