import { PostService } from './post.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(
    private postSvc:PostService
  ){}

  ngOnInit(){

    this.postSvc.getAllPosts()
    .subscribe()

  }

}
