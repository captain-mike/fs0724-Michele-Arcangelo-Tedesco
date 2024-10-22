import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgModelComponent } from './argomenti/ng-model/ng-model.component';
import { NgModelViewChildComponent } from './argomenti/ng-model-view-child/ng-model-view-child.component';
import { ReactiveFormsComponent } from './argomenti/reactive-forms/reactive-forms.component';

const routes: Routes = [
  {
    path:'',
    component: NgModelComponent
  },
  {
    path: 'ngmodel2',
    component: NgModelViewChildComponent
  },
  {
    path: 'reactive-forms',
    component: ReactiveFormsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
