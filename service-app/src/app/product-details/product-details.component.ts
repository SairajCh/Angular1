import { Component } from '@angular/core';

import productData from '../mydata.json';





@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  products:Product[]=productData;

  constructor(){
    console.log(productData);

  }

}

interface Product{
  pid:number;
  pname:string;
  price:number;

}
