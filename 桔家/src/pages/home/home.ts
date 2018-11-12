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

  icon = "tuijian";
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
