import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iPost } from '../../Model/i-post';
import { iJSONresponse } from '../../Model/jsonresponse';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent {

  post!:iPost

  constructor(private route:ActivatedRoute){}


  ngOnInit(){

    this.route.params.subscribe(params => {

      fetch('/assets/db.json')
      .then(res => <Promise<iJSONresponse>> res.json())
      .then(res => {

        const found = res.posts.find(p => p.id == params['id'])

        if(found){
          this.post = found
        }
      })

    })

  }

}
