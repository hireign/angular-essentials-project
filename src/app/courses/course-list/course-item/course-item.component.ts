import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../courses.model'; 

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() course: Course; 

}
