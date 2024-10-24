import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(
    private http:HttpClient
  ){}
  title = 'auth';

  ngOnInit(){
    // this.http.get('http://localhost:3000/pizze').subscribe()
  }
}
