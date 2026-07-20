import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  selectedCourseId:number=0;

  courses=[

    {
      id:101,
      name:'Angular',
      code:'ANG201',
      credits:4
    },

    {
      id:102,
      name:'Java',
      code:'JAVA301',
      credits:3
    },

    {
      id:103,
      name:'Spring Boot',
      code:'SB401',
      credits:4
    },

    {
      id:104,
      name:'React',
      code:'RE201',
      credits:3
    },

    {
      id:105,
      name:'Database',
      code:'DB101',
      credits:4
    }

  ];

  onEnroll(courseId:number){

    console.log(
      'Enrolling in course: '+courseId
    );

    this.selectedCourseId=courseId;

  }

}