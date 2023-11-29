import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomizedstyledirectiveDirective } from './customizedstyledirective.directive';
import { RenderCustomizedstyledirectiveDirective } from './render-customizedstyledirective.directive';
import { MyeventdirectiveDirective } from './myeventdirective.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomizedstyledirectiveDirective,
    RenderCustomizedstyledirectiveDirective,
    MyeventdirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
