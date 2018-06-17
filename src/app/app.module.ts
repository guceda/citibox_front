import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { CitiboxService } from './citibox.service';
import { HttpModule } from '@angular/http';

import { appRoutes } from './app.routing';
import { ContactoComponent } from './contacto/contacto.component';

import { NewcodeComponent } from './newcode/newcode.component';
import { SixComponent } from './six/six.component';
import { TwelveComponent } from './twelve/twelve.component';
import { TenComponent } from './ten/ten.component';
import { FourComponent } from './four/four.component';
import { NineComponent } from './nine/nine.component';
import { TwoBComponent } from './two-b/two-b.component';
import { ElevenComponent } from './eleven/eleven.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TwoComponent } from './two/two.component';
import { ThirteenComponent } from './thirteen/thirteen.component';
import { FourteenComponent } from './fourteen/fourteen.component';
import { FifteenComponent } from './fifteen/fifteen.component';
import { InitComponent } from './init/init.component';


@NgModule({
  declarations: [
    AppComponent,
   
    ContactoComponent,
    
    NewcodeComponent,
    SixComponent,
    TwelveComponent,
    TenComponent,
    FourComponent,
    NineComponent,
    TwoBComponent,
    ElevenComponent,
    TwoComponent,
    ThirteenComponent,
    FourteenComponent,
    FifteenComponent,
    InitComponent,
   
  ],
  imports: [
    BrowserModule,
    RouterModule, HttpModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule
  ],
  providers: [CitiboxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
