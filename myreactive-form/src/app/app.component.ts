import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myreactive-form';
  form: FormGroup;

  constructor(){

    this.form = new FormGroup({
      username:new FormControl( "",[Validators.required,Validators.pattern("^[a-zA-Z0-9]+"),Validators.minLength(3)] )

      //for password 
    

    });
  }

  get u(){
    return this.form.controls;
  }

  login():void{
    console.log(this.form.value)
    let username = this.form.value.username;

    let password = this.form.value.password;

    if(username===password){
      alert('valid')
    }else{
      alert('invalid')
    }
  }

}
