import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PersistenceModule } from 'angular-persistence';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PersistenceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
