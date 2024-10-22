import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ng-model-view-child',
  templateUrl: './ng-model-view-child.component.html',
  styleUrl: './ng-model-view-child.component.scss'
})
export class NgModelViewChildComponent {

  @ViewChild('f') form!:NgForm//cerco l'elemento identificato da #f grazie al decoratore viewChild e lo inserisco nella variabile form

  generi:string[] = [
    'uomo',
    'donna',
    'altro'
  ]//dati che uso solo per costruire una parte del form con un ngFor nell'html

  ngAfterViewInit(): void {

    console.log(this.form.form.value);//qui ci sono tutti i valori sotto forma di oggetto unico


    //esegue una operazione ad ogni cambio di valore del form
    this.form.form.valueChanges
    .subscribe(console.log)

    //esegue una operazione ad ogni cambio di stato del form
    this.form.form.statusChanges
    .subscribe(console.log)
  }

  //Se voglio posso anche leggere il valore del Form attraverso il metodo submit.
  submit(form:NgForm){
    console.log('form inviato al submit',form);
    console.log(form.form.value);//qui ci sono tutti i valori sotto forma di oggetto unico

    form.reset();//resetto tutti i campi che hanno la direttiva ngModel

  }

  setDati(){

    //questo metodo, se lanciato andrà a valorizzare i campi del form

    //L'oggetto deve ricalcare la struttura del form
    //i campi che hanno la direttiva ngModel hanno anche un name, questi name compongono l'oggetto sottostante
    let datiDaInserire = {
      authData:{
        email:'esempio@esempio.it',
        password:'password'
      }
    }

    this.form.form.patchValue(datiDaInserire);
  }



}
