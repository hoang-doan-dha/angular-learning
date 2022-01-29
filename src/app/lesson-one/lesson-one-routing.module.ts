import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LessonOneComponent } from './lesson-one.component';

const routes: Routes = [
  { path: '', component: LessonOneComponent, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonOneRoutingModule { }
