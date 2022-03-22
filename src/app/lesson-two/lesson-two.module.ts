import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LessonTwoRoutingModule } from "./lesson-two-routing.module";
import { LessonTwoComponent } from "./lesson-two.component";
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { FormsModule } from "@angular/forms";
import { SecondChildComponent } from './components/second-child/second-child.component';
import { ThirdChildComponent } from './components/third-child/third-child.component';

@NgModule({
  declarations: [
    LessonTwoComponent,
    ParentComponent,
    ChildComponent,
    SecondChildComponent,
    ThirdChildComponent
  ],
  imports: [
    CommonModule,
    LessonTwoRoutingModule,
    FormsModule,
  ],
  providers: [],
})
export class LessonTwoModule { }