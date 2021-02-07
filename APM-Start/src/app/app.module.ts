import { BrowserModule } from '@angular/platform-browser'; // this defines important services like logging for the web-app
import { NgModule } from '@angular/core'; // this is to register as an angular module 

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule], // for external dependencies
  bootstrap: [AppComponent]
})
export class AppModule { }
