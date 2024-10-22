import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModelComponent } from './argomenti/ng-model/ng-model.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModelViewChildComponent } from './argomenti/ng-model-view-child/ng-model-view-child.component';
import { ReactiveFormsComponent } from './argomenti/reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NgModelComponent,
    NgModelViewChildComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
