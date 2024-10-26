import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../model/course';
import { delay, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = '/api/courses';

  constructor(private httpClient: HttpClient) {}

  getAllCourses() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      take(1),
      //delay(5000),
      tap((courses) => console.log(courses))
    );
  }

  save(course: Course) {
    return this.httpClient.post<Course>(this.API, course);
  }
}
