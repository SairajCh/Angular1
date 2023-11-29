import { Directive ,ElementRef,Renderer2,HostListener} from '@angular/core';
import { EventType } from '@angular/router';

@Directive({
  selector: '[appMyeventdirective]'
})
export class MyeventdirectiveDirective {

  constructor(private e:ElementRef,private renderer:Renderer2) 
  {


   }

   @HostListener ("mouseover") method1(event:Event){
    //console.log(event);
    this.e.nativeElement.style.color='red';
  } 


  @HostListener('mouseout') method2(event:Event){
   
    //this.e.nativeElement.style.color="yellow";
    this.renderer.setStyle(this.e.nativeElement,'backgroundColor','black');
    this.renderer.setStyle(this.e.nativeElement,'color','white');
  }
}
