import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';


const routes: Routes = [
  { path: '', component: CoursesComponent},
  { path: 'new', component: NewCourseFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
