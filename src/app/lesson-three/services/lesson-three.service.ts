import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Todo } from '../models/todo.model';

const BASE_URL: string = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class LessonThreeService {
  public todo$ = new Subject<Todo[]>();

  constructor(public http: HttpClient) { }

  getTodos(searchTerm: string): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${BASE_URL}/todos?q=${searchTerm}`);
  }
}
