import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from './product-service.service';
import {Product} from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
message='';
products:Product[]=[];
dt:Date= new Date();

input:any=10;




constructor(private productService:ProductServiceService){


}

ngOnInit(): void {
  
  //console.log(this.productService);
this.message=this.productService.greetingMessage();
this.productService.getData().subscribe((data)=>{
 this.products=data;
})
}



}
