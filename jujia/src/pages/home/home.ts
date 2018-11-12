import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { App } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public app: App) {

  }

  title:string = 'angular';
  txt:string;
  arr:number[] = [1,2,3,4,5];
  fun(e){
    this.title = 'hello angular';
    if(e.keyCode==13){
      // this.arr.push(this.txt) //这句话会报错，因为数组元素的类型不一致
    };
  }
  del(idx:number){
    this.arr.splice(idx,1);
  }
  
  icon;
  ch1(){
    this.icon = "tuijian";
    return this.icon;
  }
  ch2(){
    this.icon = "jiaju";
    return this.icon;
  }
  ch3(){
    this.icon = "canchu";
    return this.icon;
  }
  ch4(){
    this.icon = "csyp";
    return this.icon;
  }

}
