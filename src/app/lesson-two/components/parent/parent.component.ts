import { Component, OnInit } from '@angular/core';
import { Genre } from '../../models/genre.model';
import { LessonTwoService } from '../../services/lesson-two.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  genres: Genre[] = [];
  selectedGenreId: number;

  constructor(private lessonTwoSvc: LessonTwoService) { }

  ngOnInit(): void {
    this.lessonTwoSvc.getGenres().subscribe(genres => {
      this.genres = genres;
      this.selectedGenreId = genres[0].id;
    });
  }

  onGenreChange(event: any) {
    console.log('onGenreChange', event.target.value);
    this.lessonTwoSvc.genreChangeSubject.next(event.target.value);
  }

}
