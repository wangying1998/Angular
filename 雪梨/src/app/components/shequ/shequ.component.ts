import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shequ',
  templateUrl: './shequ.component.html',
  styleUrls: ['./shequ.component.css']
})
export class ShequComponent implements OnInit {

  constructor(private router:ActivatedRoute,private http:HttpClient) { }

  shequ;
  ngOnInit() {
    // console.log(this.router.snapshot.queryParams['id']);
    this.http.get('/api/shequ').subscribe((data)=>{
      this.shequ = data;
    })
  }

}
