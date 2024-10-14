import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenitoreComponent } from './genitore/genitore.component';
import { FiglioComponent } from './figlio/figlio.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { ContentProjectionMultiComponent } from './content-projection-multi/content-projection-multi.component';

@NgModule({
  declarations: [
    AppComponent,
    GenitoreComponent,
    FiglioComponent,
    ContentProjectionComponent,
    ContentProjectionMultiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
