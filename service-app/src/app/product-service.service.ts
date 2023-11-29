import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private url:any='../assets/db.json';

  constructor(private  http:HttpClient){
    
    console.log('--inside the ProductService');
  //  console.log(this.http.get(this.url));
  }


greetingMessage():string{
  return "From Product-Service";
}

getData():Observable<Product[]>{
return this.http.get<Product[]>(this.url);
}
}