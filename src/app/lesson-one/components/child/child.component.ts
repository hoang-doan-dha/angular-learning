import { AuthorModel } from './../../models/AuthorModel';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('author') author: AuthorModel;

  constructor() { }

  ngOnInit(): void {
  }

}
