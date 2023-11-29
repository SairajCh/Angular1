import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  parentMessage:string  = "Data From Parent";
  childDataReceive:string ='';


  receiveData(data:any):void{
    this.childDataReceive=data;




  }

}
