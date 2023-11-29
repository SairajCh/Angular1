import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {

  @Input('msg') msg:string='';

  constructor(){
    console.log('--inside the child constructor--');
  }

  // demoFunc(){
  //   this.msg='changed in child';
  //   {{this.msg}};
  //   console.log(this.msg);
  // }
  
  ngOnChanges(): void {
    
    console.log('inside the ngOnchanges');
  }
    
  

}
