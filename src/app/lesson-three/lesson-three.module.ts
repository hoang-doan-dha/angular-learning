import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LessonThreeRoutingModule } from "./lesson-three-routing.module";
import { LessonThreeComponent } from "./lesson-three.component";


@NgModule({
  declarations: [
    LessonThreeComponent,
  ],
  imports: [
    CommonModule,
    LessonThreeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class LessonThreeModule { }