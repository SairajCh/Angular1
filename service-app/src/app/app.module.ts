import { ProductServiceService } from './product-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductPriceDetailsComponent } from './product-price-details/product-price-details.component';
import { SqrPipe } from './sqr.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    ProductPriceDetailsComponent,
    SqrPipe
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
