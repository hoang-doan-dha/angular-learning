import { LessonOneComponent } from './lesson-one/lesson-one.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'lesson-one',
    loadChildren: () =>
      import('../app/lesson-one/lesson-one.module').then((m) => m.LessonOneModule),
  },
  { path: '', redirectTo: 'lesson-one', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
