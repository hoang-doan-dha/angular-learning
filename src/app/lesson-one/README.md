# Angular Learning
## _Useful Practice Lessions_

### 1. Lesson One: _Pass data from a parent component into grandchild components using Subject_
- Run fake API first:
```sh
json-server --watch ./src/app/lesson-one/data/db.json
```
- Structure folder:
```sh
parent-component
|-- child-component
    |-- grandchild-component
```

In `parent-component`, it contains all data of the article that we need to display on 3 components.
```sh
{
  "articles": [
    {
      "id": 1,
      "title": "How to use json-server?",
      "author": {
        "authorId": 1,
        "firstName": "typi",
        "lastName": "code"
      },
      "description": "Help front-end developer to create Fake API services"
    }
  ]
}
```
- Parent: Show the title of article
- Child: Show the author name
- Grandchild: Show the description of article

**Problem:** How to pass the `article` data from `parent-component` to `grandchild-component`?
- First, we create a **articleSubject** subject in the service as a middleman to handle transport the data among components
```sh
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
```
- Subject is a special kind of Observable, so we convert it to Observable to easily get data later.
- Secondly, we inject the service to `grandchild-component` to get the article data
```sh
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
    this.article$ = this.lessonOneSvc.getArticleAsObservable();
    this.lessonOneSvc.getArticleAsObservable().subscribe((article) => {
      this.article = article;
    });
  }
}
```
- Depending on what your favorites, you can use Observable or Subscription to get the data from the service
```sh
<div>
  <label>Grandchild Component</label>
  <div *ngIf="article$ | async as art">
    <h3>Async Description: {{ art.description }}</h3>
  </div>
  <h3>Description: {{ article?.description }}</h3>
</div>
```
### Summary
- The final structure:
```sh
<parent-component>
    <child-component [author]="author">
        <grandchild-component></granchild-component>
    </child-component>
</parent-component>    
```
