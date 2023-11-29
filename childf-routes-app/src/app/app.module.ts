import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnlineapplicationComponent } from './onlineapplication/onlineapplication.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { LoginComponent } from './login/login.component';
import { FashionComponent } from './fashion/fashion.component';
import { LightingComponent } from './lighting/lighting.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { MobileComponent } from './mobile/mobile.component';
import { LaptopComponent } from './laptop/laptop.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';

@NgModule({
  declarations: [
    AppComponent,
    OnlineapplicationComponent,
    AppliancesComponent,
    ElectronicsComponent,
    LoginComponent,
    FashionComponent,
    LightingComponent,
    FurnitureComponent,
    MobileComponent,
    LaptopComponent,
    MenComponent,
    WomenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
