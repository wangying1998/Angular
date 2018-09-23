import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor(private local:CommonService) { }

  ngOnInit() {  
    var arrs = this.local.get("key");
    if(arrs){
      this.arr1 = JSON.parse(arrs);
    }
    else  this.arr1 = [];
  }

  arr1;
  arrAccept(array){
    this.arr1 = array;
    this.local.set('key',JSON.stringify(this.arr1));
  }
  
  
}
