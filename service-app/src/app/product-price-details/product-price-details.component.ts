import { Component } from '@angular/core';

import productData from '../mydata.json';

@Component({
  selector: 'app-product-price-details',
  templateUrl: './product-price-details.component.html',
  styleUrls: ['./product-price-details.component.css']
})
export class ProductPriceDetailsComponent {

  constructor() {
    console.log('');


  }


  products: Product[] = productData;
}

interface Product {
  pid: number;
  pname: string;
  price: number;

}


