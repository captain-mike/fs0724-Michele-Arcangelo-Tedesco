import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {

  form!:FormGroup

  constructor(
    private fb:FormBuilder//formBuilder permette di creare forms reattivi
  ){}

  ngOnInit(){
    this.form = this.fb.group({//il form
      nome: this.fb.control('', [Validators.required]),//campo nome
      authData: this.fb.group({
        email: this.fb.control(//campo e-mail
          '',//valore del campo
          [Validators.required,Validators.email, this.emailProibiteValidator],//validatori sincroni
          this.emailEsistente//validatore asincrono
        ),
        password: this.fb.control('')//il campo password
      })
    })
  }

  send(){
    console.log(this.form.value);//mostra i valori inseriti
    this.getMessage('nome')
    this.getMessage('authData.email')
  }

  /**
   * metodi per validazione booleani
   */

  isValid(fieldName: string) {
    return this.form.get(fieldName)?.valid //true se il campo cercato è valido
   }
   isTouched(fieldName: string) {
     return this.form.get(fieldName)?.touched //true se il campo cercato ha subito interazioni dall'utente
   }

   getMessage(fieldName: string) {
       return this.form.get(fieldName)?.errors!['message']//restituisce il messaggio di errore dei custom validators
   }

  isInValidTouched(fieldName:string){
    return !this.isValid(fieldName) && this.isTouched(fieldName)
  }




  emailProibite:string[] = ['mario@gmail.com','mirko@gmail.com'];

  //validatore custom sincrono
  //verifica l'inserimento di e-mails presenti nell'array della riga 85
  emailProibiteValidator = (formC:FormControl):ValidationErrors|null => {//formC sarà il campo a cui si collega il validatore

    if(this.emailProibite.includes(formC.value)){//se la mail inserita dall'utente viene trovata anche nell'array della riga 85
      return {//restituisce un oggetto contenente dettagli della validazione
        invalid:true,
        message:'Email non utilizzabile'
      }
    }

    return null;//altrimnenti restituisce null
    //null significa che non ci sono errori di inserimento da parte dell'utente

  }


  emailEsistente = (formC:AbstractControl) => {

    return new Promise<ValidationErrors|null>((resolve, reject)=>{

      setTimeout(() => {

        if(formC.value === 'prova@test.it'){
          resolve({
            invalid:true,
            message:'Email già presente'
          })
        }else{
          reject(null)
        }

      },2000)

    })

  }


}
