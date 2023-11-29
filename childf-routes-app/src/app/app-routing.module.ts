import { ChildComponent } from './../../../lifecyclehook/src/app/child/child.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { OnlineapplicationComponent } from './onlineapplication/onlineapplication.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FashionComponent } from './fashion/fashion.component';
import { LoginComponent } from './login/login.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { LightingComponent } from './lighting/lighting.component';
import { MobileComponent } from './mobile/mobile.component';
import { LaptopComponent } from './laptop/laptop.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
  { path: '', component: OnlineapplicationComponent },
  {
    path: 'appliances', component: AppliancesComponent, children: [
      { path: 'furniture', component: FurnitureComponent },
      { path: 'lighting', component: LightingComponent }
    ]
  },
  {
    path: 'electronic', component: ElectronicsComponent, children: [
      { path: 'mobile', component: MobileComponent },
      { path: 'laptop', component: LaptopComponent }
    ]
  },
  {
    path: 'fashion', component: FashionComponent, children: [
      { path: 'men', component: MenComponent },
      { path: 'women', component: WomenComponent }
    ]
  },
  { path: 'login', component: LoginComponent },



];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
