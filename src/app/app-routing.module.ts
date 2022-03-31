import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'lesson-one',
    loadChildren: () =>
      import('../app/lesson-one/lesson-one.module').then((m) => m.LessonOneModule),
  },
  {
    path: 'lesson-two',
    loadChildren: () =>
      import('../app/lesson-two/lesson-two.module').then((m) => m.LessonTwoModule),
  },
  {
    path: 'lesson-three',
    loadChildren: () =>
      import('../app/lesson-three/lesson-three.module').then((m) => m.LessonThreeModule),
  },
  { path: '', redirectTo: 'lesson-three', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
