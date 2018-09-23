import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { _appIdRandomProviderFactory } from '@angular/core/src/application_tokens';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  constructor(private local:CommonService) { }

  ngOnInit() {  
    var arrs = this.local.get("key");
    if(arrs){
      this.arr = JSON.parse(arrs);
    }
    else  this.arr = [];
  }

  txt;
  arr = [];
  @Output() arr1 = new EventEmitter();


  getValue(e){
    if(e.keyCode==13){
      this.arr.push(new Msg(this.txt,false));
      this.arr1.emit(this.arr);
      this.txt="";
    }
  }

}
export class Msg{
  constructor(title,done){
    this.title = title;
    this.done = done;
  }
  title:string;
  done:boolean;
}