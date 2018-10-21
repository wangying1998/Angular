import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-tongbu',
  templateUrl: './tongbu.component.html',
  styleUrls: ['./tongbu.component.css']
})
export class TongbuComponent implements OnInit {
  
  constructor(private router:ActivatedRoute,private route:Router,private http:HttpClient) { }
  // courseId:number;
  
  courses;

  ngOnInit() {
    this.http.get('/api/course').subscribe((data)=>{
      this.courses = data;
    });

    

    // 参数快照
    // this.courseId = this.router.snapshot.params['courseId']; // ngOnInit 只会执行一遍，如果同时跳转到同一页面，courseId的值已经锁定，不会改变

    //响应式编程 观察者 参数订阅
    // this.router.params.subscribe((params) => {
    //   this.courseId = params['courseId'];
    // });
  }

  // go(){
  //   this.route.navigate(['/tongbu',600],{queryParams:{id:1000}});
  // }

}
class Course{
  constructor(public id: any,public courseName:string,
              public images:string,
              public task:number,
              public person:number
          ){}
}