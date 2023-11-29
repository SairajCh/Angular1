import { Directive,ElementRef,OnInit,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderCustomizedstyledirective]'
})
export class RenderCustomizedstyledirectiveDirective implements OnInit {

  constructor(private e:ElementRef, private renderer:Renderer2) {
    console.log(renderer);

   }

   ngOnInit(): void {
     

    this.renderer.setStyle(this.e.nativeElement,"backgroundColor","pink");
    this.renderer.setStyle(this.e.nativeElement,"color","red");
    this.renderer.setStyle(this.e.nativeElement,"font-size","30px");
    this.renderer.setStyle(this.e.nativeElement,"text-align","center");
    
   }
}
