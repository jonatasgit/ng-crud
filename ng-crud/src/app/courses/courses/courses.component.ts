import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { CoursesService } from './../services/courses.service';
import { Course } from './../model/course';
import { Component } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category', 'actions'];

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private actualRoute: ActivatedRoute
  ) {
    this.courses$ = coursesService.getAllCourses().pipe(
      catchError((error) => {
        this.openDialog('erro ao caregar curssos');
        return of([]);
      })
    );
  }

  openDialog(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }

  onAdd() {
    console.log(this.actualRoute);

    this.router.navigate(['new'], { relativeTo: this.actualRoute });
  }
}
