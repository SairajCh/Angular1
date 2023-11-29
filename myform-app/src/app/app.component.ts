import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

fname:string='';
pwd:string='';
valid(input:any):void{
  if(input.valid){
    alert('welcome to dashboard');
  }else{
    alert('some errors');
  }
}

}
