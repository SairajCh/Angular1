import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomizedstyledirective]'
})
export class CustomizedstyledirectiveDirective implements OnInit{

  constructor(private e:ElementRef) {
    console.log(e);
   }
  
   ngOnInit(): void {
    //this.e.nativeElement.style.color='red';
    //this.e.nativeElement.style.backgroundColor='cyan';
   }



}
