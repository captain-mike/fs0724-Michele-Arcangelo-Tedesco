import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InactivePostsComponent } from './pages/inactive-posts/inactive-posts.component';
import { ActivePostsComponent } from './pages/active-posts/active-posts.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'inactive-posts',
    component: InactivePostsComponent
  },
  {
    path: 'active-posts',
    component: ActivePostsComponent
  },
  {
    path: 'post-detail/:id',
    component: PostDetailComponent
  },
  {
    path:'**',
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
