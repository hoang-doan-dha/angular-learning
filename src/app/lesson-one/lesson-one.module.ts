import { LessonOneService } from './services/lesson-one-service.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LessonOneComponent } from './lesson-one.component';
import { LessonOneRoutingModule } from './lesson-one-routing.module';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { GrandchildComponent } from './components/grandchild/grandchild.component';


@NgModule({
  declarations: [
    LessonOneComponent,
    ParentComponent,
    ChildComponent,
    GrandchildComponent
  ],
  imports: [
    CommonModule,
    LessonOneRoutingModule
  ],
  providers: [
    LessonOneService
  ],
})
export class LessonOneModule { }
