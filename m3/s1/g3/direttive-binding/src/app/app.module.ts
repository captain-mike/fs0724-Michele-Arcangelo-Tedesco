import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributiComponent } from './attributi/attributi.component';
import { PropComponent } from './prop/prop.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { StyleClassComponent } from './style-class/style-class.component';
import { NgForComponent } from './ng-for/ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributiComponent,
    PropComponent,
    FormComponent,
    StyleClassComponent,
    NgForComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
