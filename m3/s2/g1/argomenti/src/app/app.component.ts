import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  @ViewChild('paragrafo',{static:true}) ref!:ElementRef

  title = 'argomenti';

  ngOnInit(){
      console.log(this.ref.nativeElement.innerText)
      this.ref.nativeElement.style.color = 'red'
  }

  // ngAfterViewInit(){
  //   console.log(this.ref.nativeElement.innerText)
  //   this.ref.nativeElement.style.color = 'red'
  // }

  verifica(){
    console.log('cliccato');
  }
}
