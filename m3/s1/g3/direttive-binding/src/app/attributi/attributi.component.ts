import { Component } from '@angular/core';

@Component({
  selector: 'app-attributi',
  templateUrl: './attributi.component.html',
  styleUrl: './attributi.component.scss'
})
export class AttributiComponent {

  numero:number = 0
  stringa:string = 'Mario'
  array:string[] = ['a','b','c','d','e','f']
  oggetto:{prop1:string} = {
    prop1 : 'ciao'
  }

  image:string = 'https://picsum.photos/200/300'

  indice:number = 0
  imageArray:string[] = [
    'https://picsum.photos/200/300?random=1',
    'https://picsum.photos/200/300?random=2',
    'https://picsum.photos/200/300?random=3',
    'https://picsum.photos/200/300?random=4'
  ]

  currentImage:string = this.imageArray[0];


  //Si avvia in automatico quando il componente viene avviato.
  ngOnInit(){

    //Dopo tre secondi cambia il valore della proprietà image.
    setTimeout(() => {
      this.image = "https://picsum.photos/200/300?random=2"
    }, 3000)


    //Ogni tre secondi cambia l'immagine del carosello.
    setInterval(()=>{
      this.currentImage = this.imageArray[this.indice]
      this.indice++
    },3000)

  }


}
