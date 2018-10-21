import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-ltb',
  templateUrl: './ltb.component.html',
  styleUrls: ['./ltb.component.css']
})
export class LtbComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router,private http:HttpClient) { }

  courses;

  ngOnInit() {
    this.http.get('/api/ltb').subscribe((data)=>{
      this.courses = data;
    });
  }

}
