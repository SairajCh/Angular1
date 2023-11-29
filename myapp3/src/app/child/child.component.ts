import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

@ViewChild('boxId') boxId:ElementRef={} as ElementRef;

  uname:string = "Ashok"

  constructor(private renderer:Renderer2){



  }

  clickMe():void{
    alert('yes it is working');
   // console.log(this.boxId);
    //this.boxId.nativeElement.style.color='red';
    //this.boxId.nativeElement.style.backgroundColor='yellow';

    this.renderer.setStyle(this.boxId.nativeElement,'color','white');
    this.renderer.setStyle(this.boxId.nativeElement,'backgroundColor','red'); 1
  }

}
