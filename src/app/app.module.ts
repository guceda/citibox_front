import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { CitiboxService } from './citibox.service';
import { HttpModule } from '@angular/http';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule, HttpModule
  ],
  providers: [CitiboxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
