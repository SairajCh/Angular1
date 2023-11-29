import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input('y') y:string='';

 @Output() myEvent:EventEmitter<string> = new EventEmitter(); // we created eventemitter object
  

  sendData():void{


    this.myEvent.emit('Hello, Good morning!');



  }


}
