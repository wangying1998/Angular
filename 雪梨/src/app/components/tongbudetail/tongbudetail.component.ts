import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { filter,map } from 'rxjs/operators';


@Component({
  selector: 'app-tongbudetail',
  templateUrl: './tongbudetail.component.html',
  styleUrls: ['./tongbudetail.component.css']
})
export class TongbudetailComponent implements OnInit {

  constructor(private router:ActivatedRoute,private http:HttpClient) { }
  courseId:number;
  course;

  // flag:boolean = true;
  // num;
  // date = new Date();
  // jsonObject:Object = {"foo":'bar',"baz":'qux',"nested":{'xyz':3,'name':'wy'}};

  // change(event){
  //   // this.num = i;
  //   this.num = event.target.value;
  // }

  ngOnInit() {
    this.courseId = this.router.snapshot.params['courseId'];
    this.http.get('/api/course/'+this.courseId).subscribe((data)=>{
      this.course = data;
    });


    // this.http.get('/api/course/'+this.courseId).pipe(map(data=>{
    //   data.name = 'wy';
    //   return data;
    // })).pipe(filter(data=>{
    //   // return data.id == 1;
    //   return true;
    // })).subscribe((data)=>{
    //   this.course = data;
    // });
  }


}