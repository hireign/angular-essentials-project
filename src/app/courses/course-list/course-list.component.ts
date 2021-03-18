import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Course } from '../../shared/course.model';
import { CourseService } from '../../shared/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[];
  selectedRow: number; 

  constructor(private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute) {
  }
  
  setHoveredRow(index){
    this.selectedRow = index;
    }; 
  ngOnInit() {
    this.courses = this.courseService.getCourses();
  }
  onNewCourse() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}