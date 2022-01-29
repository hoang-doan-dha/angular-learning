import { ArticleModel } from './../../models/ArticleModel';
import { LessonOneService } from './../../services/lesson-one-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  article: ArticleModel = null;

  constructor(private lessonOneSvc: LessonOneService) { }

  ngOnInit(): void {
    console.log('ParentComponent ngOnInit');
    // this.getArticle();
  }

  getArticle() {
    const id = 1;
    this.lessonOneSvc.getArticleById(id).subscribe((response: ArticleModel) => {
      this.article = response;
    })
  }
}
