import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.scss'],
})
export class NewCourseFormComponent {
  private _snackBar = inject(MatSnackBar);
  newCourseForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: CoursesService,
    private location: Location
  ) {
    this.newCourseForm = this.formBuilder.group({
      name: [null],
      category: [null],
    });
  }

  onSubmit() {
    this.service.save(this.newCourseForm.value).subscribe(
      (result) => console.log(result),
      (error) => this.openSnackBar("We couldn`t save the course.", error.status)
    );
  }

  onCancel(){
    this.location.back();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action), { duration: 1000 };
  }
}
