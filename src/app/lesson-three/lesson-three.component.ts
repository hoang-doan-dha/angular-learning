import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap, tap } from 'rxjs/operators';
import { Todo } from './models/todo.model';
import { LessonThreeService } from './services/lesson-three.service';

@Component({
  selector: 'app-lesson-three',
  templateUrl: './lesson-three.component.html',
  styleUrls: ['./lesson-three.component.css']
})
export class LessonThreeComponent implements OnInit {
  searchInput = new FormControl('');
  todos$: Observable<Todo[]>;
  loading = false;

  constructor(private lessonThreeService: LessonThreeService) { }

  ngOnInit(): void {
    this.todos$ = this.lessonThreeService.todo$;
    this.searchInput.valueChanges
      .pipe(
        filter(search => !search || search?.length > 2),
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => {
          this.loading = true;
        }),
        switchMap(s => this.lessonThreeService.getTodos(s))
      )
      .subscribe(res => {
        this.loading = false;
        this.lessonThreeService.todo$.next(res);
      })
  }
}
