import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestGuard } from './guards/test.guard';
import { StatusGuard } from './guards/status.guard';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    title:'Home'
  },
  {
    path:'chi-siamo',
    loadChildren: () => import('./pages/chi-siamo/chi-siamo.module').then(m => m.ChiSiamoModule),
    canActivate: [TestGuard],
    canActivateChild: [TestGuard],
    title:'Chi Siamo'
  },
  {
    path: 'contatti',
    loadChildren: () => import('./pages/contatti/contatti.module').then(m => m.ContattiModule),
    canActivate: [StatusGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
