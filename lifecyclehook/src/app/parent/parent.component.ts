import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,OnDestroy {
  flag:any=false;

  constructor(){

    console.log('inside the parent class constructor--parent');
  }


  ngOnInit(): void {
    console.log('inside the parent component oninit--parent');
  }

  performSomeAction():void{

    this.flag=!this.flag;
  }

  ngOnDestroy(): void {
    
    console.log('inside the onDestroy method');
  }

  


}
