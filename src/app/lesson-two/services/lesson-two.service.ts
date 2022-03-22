import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Book } from '../models/book.model';
import { Genre } from '../models/genre.model';

const BASE_URL: string = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class LessonTwoService {
  genreChangeSubject = new Subject<number>();

  constructor(public http: HttpClient) { }

  getGenreChangeSubject() {
    return this.genreChangeSubject;
  }

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(`${BASE_URL}/genres`)
  }

  getBooksByGenre(genreId: number): Observable<Book[]> {
    return this.http.get<Book[]>(`${BASE_URL}/books?genreId=${genreId}`);
  }
}
