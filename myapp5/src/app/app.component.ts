import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';

  msg:string='Default value';

  constructor(){
    //here we write the ccode of the fillowing things:
    //it is used to intialize the some value into the property
    //inside the constructor we also write the code to invoke the services

    this.title='welcome to lifecycle hook methods';

    console.log('inside the constructor');


  }

  someChange(){
    this.msg='Sairaj';
  }



  
}
