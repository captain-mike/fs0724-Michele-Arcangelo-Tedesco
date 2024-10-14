import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecicles',
  template: '',
  styles: ['']
})
export class LifeciclesComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{



  ngOnChanges(changes: SimpleChanges): void {
    /*
    Questo metodo viene chiamato quando le proprietà di input del componente cambiano. Puoi utilizzarlo per rispondere alle modifiche nelle proprietà e aggiornare il componente di conseguenza.
    */
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    // Viene chiamato una volta quando il componente è stato inizializzato e le proprietà di input sono state assegnate. È il posto ideale per inizializzare le variabili e svolgere altre operazioni di setup.
    throw new Error('Method not implemented.');
  }
  ngDoCheck(): void {
    // Questo metodo viene chiamato ad ogni ciclo di rilevamento dei cambiamenti. Puoi utilizzarlo per eseguire controlli personalizzati per rilevare modifiche che Angular potrebbe non aver rilevato automaticamente.
    throw new Error('Method not implemented.');
  }
  ngAfterContentInit(): void {
    // Viene chiamato dopo che il contenuto del componente (tranne il proprio template) è stato proiettato nel componente. È utile per eseguire operazioni basate sul contenuto proiettato.
    throw new Error('Method not implemented.');
  }
  ngAfterContentChecked(): void {
    // Questo metodo viene chiamato dopo che il contenuto del componente è stato controllato per eventuali modifiche. Può essere utilizzato per eseguire azioni dopo che il contenuto è stato verificato.
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    // Viene chiamato quando il componente e la sua vista sono stati inizializzati. Può essere utilizzato per eseguire operazioni basate sulla vista.
    throw new Error('Method not implemented.');
  }
  ngAfterViewChecked(): void {
    // Viene chiamato quando il componente e la sua vista sono stati inizializzati. Può essere utilizzato per eseguire operazioni basate sulla vista.
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    // Viene chiamato prima che il componente venga distrutto. Può essere utilizzato per pulire risorse o annullare sottoscrizioni prima che il componente sia rimosso.
    throw new Error('Method not implemented.');
  }



}
