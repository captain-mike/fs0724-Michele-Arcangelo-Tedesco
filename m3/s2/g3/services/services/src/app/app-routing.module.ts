import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewPizzaComponent } from './pages/new-pizza/new-pizza.component';
import { EditPizzaComponent } from './pages/edit-pizza/edit-pizza.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'new-pizza',
    component: NewPizzaComponent
  },
  {
    path: 'edit-pizza/:id',
    component: EditPizzaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
