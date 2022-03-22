import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from '../../models/book.model';
import { Genre } from '../../models/genre.model';
import { LessonTwoService } from '../../services/lesson-two.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges, OnInit, OnDestroy {
  @Input()
  genreId: number;

  books: Book[] = [];

  sub: Subscription;

  constructor(private lessonTwoSvc: LessonTwoService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.genreId?.currentValue) {
      this.lessonTwoSvc.getBooksByGenre(this.genreId).subscribe(b => {
        this.books = b;
      });
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
