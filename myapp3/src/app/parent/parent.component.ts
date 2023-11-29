import { Component,ViewChild,ElementRef,AfterViewInit, OnInit} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit,OnInit{
  @ViewChild(ChildComponent) boxId:ChildComponent={} as ChildComponent;

  constructor(){

   
  
   console.log('inside the constructor');
  }
  


  accessProperty():void{

    this.boxId.clickMe();
    this.boxId.uname='Sairaj Ch Ch ';
  }

  ngAfterViewInit(): void {
    
    console.log('inside the afterviewinit');
    console.log(this.boxId.uname);      
  // this.boxId.uname='afterinit'
    
  }
ngOnInit(): void {
 
  this.boxId.uname='onnit';
  console.log('inside the oninitinit');
  console.log(this.boxId.uname); 
  

  
}



}
