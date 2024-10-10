import { Component } from '@angular/core';
import { iPost } from '../../Model/i-post';
import { iJSONresponse } from '../../Model/jsonresponse';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss'
})
export class ActivePostsComponent {

  postArr:iPost[] = []//tutti i post

  ngOnInit(): void {

    fetch('/assets/db.json')
    .then(res => <Promise<iJSONresponse>> res.json())
    .then(res => {

      this.postArr = res.posts.filter(p => !p.active);

    })

  }

}
