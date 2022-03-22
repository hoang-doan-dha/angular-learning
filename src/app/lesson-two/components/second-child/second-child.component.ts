import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Book } from '../../models/book.model';
import { LessonTwoService } from '../../services/lesson-two.service';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent implements OnInit, OnDestroy {
  books: Book[] = [];
  
  outerSubscription: Subscription;
  innerSubscription: Subscription;

  constructor(private lessonTwoSvc: LessonTwoService) { }

  ngOnInit(): void {
    // Nested Subscription
    this.outerSubscription = this.lessonTwoSvc.genreChangeSubject
       .subscribe((genreId: number) => {
        this.innerSubscription = this.lessonTwoSvc
          .getBooksByGenre(genreId)
          .subscribe((books: Book[]) => {
            this.books = books;
          }
        );
      })
  }

  ngOnDestroy(): void {
    this.outerSubscription.unsubscribe();
    this.innerSubscription.unsubscribe();
  }
}
