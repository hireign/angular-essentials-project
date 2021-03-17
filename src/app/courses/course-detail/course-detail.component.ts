import {
  Component,
  OnInit
} from '@angular/core';
import {
  Course
} from '../courses.model';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  course: Course;

}
