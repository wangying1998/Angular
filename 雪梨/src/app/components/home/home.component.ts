import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) {
  }

  course;
  Headers = new HttpHeaders({});
  ngOnInit() {
    this.http.get('/api/course').subscribe((data)=>{    //代理
      // this.course = data;
      console.log(data);
    });

    // this.http.post('/api/course',null).subscribe((data)=>{
    // this.http.post('/api/course',{name:'wy',pwd:'123123'},{headers:this.Headers}).subscribe((data)=>{
    //   console.log(data);
    // });
  }

  ngOnDestroy(){
    
  }

}
