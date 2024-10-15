import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColora]'
})
export class ColoraDirective {

  constructor(
    private ref: ElementRef//l'elemento su cui viene applicata la direttiva
  ) { }

  @Input() colore:string = 'red'

  ngOnInit(){
    console.dir(this.ref.nativeElement);

    this.ref.nativeElement.style.color = this.colore
  }

  @HostListener('click') onClick(){//associo l'evento click all'elemento su cui è applicata la direttiva
    this.ref.nativeElement.textContent = 'Evento scatenato'//una volta cliccato, il testo del bottone cambia
  }

}
