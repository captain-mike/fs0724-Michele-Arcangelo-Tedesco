import { Component, OnInit } from '@angular/core';
import { iJSONresponse } from '../../Model/jsonresponse';
import { iPost } from '../../Model/i-post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  featuredPost!:iPost//post in evidenza
  postArr:iPost[] = []

  constructor(
    private postSvc:PostService
  ){}

  ngOnInit(): void {

      this.postArr = this.postSvc.postArr
      this.featuredPost = this.postSvc.postArr[0]

  }



}
