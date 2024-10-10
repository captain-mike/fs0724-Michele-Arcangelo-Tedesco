import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ChiSiamoComponent } from './pages/chi-siamo/chi-siamo.component';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { DettaglioComponent } from './pages/dettaglio/dettaglio.component';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    component: HomeComponent,
  },
  {
    path:'chi-siamo',
    component: ChiSiamoComponent
  },
  {
    path:'contatti',
    component: ContattiComponent
  },
  {
    path:'dettaglio/:id',
    component: DettaglioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
