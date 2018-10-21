import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private http:HttpClient) { }

  lcourses;
  ngOnInit() {
    this.http.get('/api/lcourse').subscribe(data=>{
      console.log(data);
      this.lcourses = data;
    })
  }

}