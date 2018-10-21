import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lcourse',
  templateUrl: './lcourse.component.html',
  styleUrls: ['./lcourse.component.css']
})
export class LcourseComponent implements OnInit {

  constructor(private http:HttpClient) { }

  lcourses;
  ngOnInit() {
    this.http.get('/api/lcourse').subscribe(data=>{
      console.log(data);
      this.lcourses = data;
    })
  }

}
