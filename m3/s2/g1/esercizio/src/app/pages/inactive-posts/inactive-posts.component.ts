import { Component } from '@angular/core';
import { iPost } from '../../Model/i-post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss'
})
export class InactivePostsComponent {
  postArr:iPost[] = []

  constructor(
    private postSvc:PostService
  ){}

  ngOnInit(): void {
      this.postArr = this.postSvc.postArr.filter(p => !p.active);
  }
}
