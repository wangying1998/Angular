import { Component, OnInit, Input, Output } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private local:CommonService) { }

  ngOnInit() {
    var arrs = this.local.get("key");
    if(arrs){
      this.arr = JSON.parse(arrs);
      this.counter = Number(this.local.get('counter'));
    }
    else  {
      this.arr = [];
      this.counter = 0;
    }
  }

  @Input() arr;
  counter = 0;
  count(){
    this.counter = 0;
    this.arr.forEach( (value)=>{
      if(value.done){
        this.counter++;
      }
    });
  }
  delete(idx){
    this.arr.splice(idx,1);
    this.count();    
    this.local.set('key',JSON.stringify(this.arr));
    this.local.set('counter',this.count());
  }
  change(idx){
    this.arr[idx].done = !this.arr[idx].done;
    this.count();
    this.local.set('key',JSON.stringify(this.arr));
    this.local.set('counter',this.counter);
  }

  
}
