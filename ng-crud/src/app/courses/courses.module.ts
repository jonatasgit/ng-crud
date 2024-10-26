import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { SharedModule } from '../shared/shared.module';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CoursesComponent, NewCourseFormComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
})
export class CoursesModule {}
