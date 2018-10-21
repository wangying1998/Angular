import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { ShequComponent } from './components/shequ/shequ.component';
import { HomeComponent } from './components/home/home.component'
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TongbudetailComponent } from './components/tongbudetail/tongbudetail.component';
import { LtbComponent } from './components/ltb/ltb.component';
import { LcourseComponent } from './components/lcourse/lcourse.component';
import { LtalkComponent } from './components/ltalk/ltalk.component';
import { LtzComponent } from './components/ltz/ltz.component';
import { LtaskComponent } from './components/ltask/ltask.component';
import { Pipe1Pipe } from './pipes/pipe1.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TongbuComponent,
    CourseComponent,
    ShequComponent,
    HomeComponent,
    TongbudetailComponent,
    LtbComponent,
    LcourseComponent,
    LtalkComponent,
    LtzComponent,
    LtaskComponent,
    Pipe1Pipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent,children:[
        {path:'ltask',component:LtaskComponent},
        {path:'ltb',component:LtbComponent},
        {path:'ltb/:courseId',component:TongbudetailComponent},
        {path:'lcourse',component:LcourseComponent}, 
        // {path:'lcourse/:lcourseId',component:LcourseComponent},       
        {path:'ltz',component:LtzComponent},
        {path:'ltalk',component:LtalkComponent},
        {path:'',redirectTo:'ltask',pathMatch:'full'},
        {path:'**',component:LtaskComponent}
      ]},
      {path:'tongbu',component:TongbuComponent},
      {path:'tongbu/:courseId',component:TongbudetailComponent},
      {path:'course',component:CourseComponent},
      {path:'shequ',component:ShequComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:ShequComponent}
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
