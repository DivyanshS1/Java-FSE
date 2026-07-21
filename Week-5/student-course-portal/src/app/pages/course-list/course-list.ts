import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';
import { HighlightDirective } from '../../directives/highlight';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard, HighlightDirective],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit{

  selectedCourseId:number=0;
  isLoading = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }


  courses=[

{
id:101,
name:'Angular',
code:'ANG201',
credits:4,
gradeStatus:'passed'
},

{
id:102,
name:'Java',
code:'JAVA301',
credits:3,
gradeStatus:'failed'
},

{
id:103,
name:'React',
code:'RE401',
credits:4,
gradeStatus:'pending'
}

];

  onEnroll(courseId:number){

    console.log(
      'Enrolling in course: '+courseId
    );

    this.selectedCourseId=courseId;

  }
  // trackBy lets Angular reuse an unchanged course's DOM node instead of recreating every card.
  trackByCourseId(index: number, course: { id: number }): number {
    return course.id;
  }

}
