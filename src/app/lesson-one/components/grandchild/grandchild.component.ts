import { Observable } from 'rxjs';
import { ArticleModel } from './../../models/ArticleModel';
import { Component, OnInit } from '@angular/core';
import { LessonOneService } from '../../services/lesson-one-service.service';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css']
})
export class GrandchildComponent implements OnInit {
  article$: Observable<ArticleModel>;
  article: ArticleModel;

  constructor(private lessonOneSvc: LessonOneService) { }

  ngOnInit(): void {
    console.log('GrandchildComponent ngOnInit');
    this.article$ = this.lessonOneSvc.getArticleAsObservable();
    this.lessonOneSvc.getArticleAsObservable().subscribe((article) => {
      this.article = article;
    });
  }
}
