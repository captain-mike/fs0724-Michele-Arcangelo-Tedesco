import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iPost } from './ipost';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrl:string = 'https://jsonplaceholder.typicode.fsdgacom/posts';

  constructor(
    private http:HttpClient
  ) { }

  getAllPosts(){
    return this.http.get<iPost[]>(this.apiUrl)
  }

}
