import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Book } from '../../models/book.model';
import { LessonTwoService } from '../../services/lesson-two.service';

@Component({
  selector: 'app-third-child',
  templateUrl: './third-child.component.html',
  styleUrls: ['./third-child.component.css']
})
export class ThirdChildComponent implements OnInit, OnDestroy {
  books: Book[] = [];
  
  sub: Subscription;

  constructor(private lessonTwoSvc: LessonTwoService) { }

  ngOnInit(): void {
    this.lessonTwoSvc.genreChangeSubject
      .pipe(
        switchMap((value: number) => this.lessonTwoSvc.getBooksByGenre(value))
      )
      .subscribe((books: Book[]) => {
        this.books = books;
      })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
