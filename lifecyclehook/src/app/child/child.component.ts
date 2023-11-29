import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnDestroy {

  constructor(){

    console.log('inside the child component constructor--Child');

  }
 
  ngOnInit(): void {
    console.log('inside the ngOnit from --Child');
  }

  ngOnDestroy(): void {
    
    console.log('inside child component ONDESTROY--CHILD');
  }
}
