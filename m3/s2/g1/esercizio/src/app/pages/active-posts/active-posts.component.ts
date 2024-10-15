import { Component } from '@angular/core';
import { iPost } from '../../Model/i-post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss'
})
export class ActivePostsComponent {

  postArr:iPost[] = []

  constructor(
    private postSvc:PostService
  ){}

  ngOnInit(): void {
      this.postArr = this.postSvc.postArr.filter(p => p.active);
  }



}
