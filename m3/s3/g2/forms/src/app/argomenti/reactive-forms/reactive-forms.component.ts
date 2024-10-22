import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {

  form!:FormGroup

  constructor(
    private fb:FormBuilder
  ){}

  ngOnInit(){
    this.form = this.fb.group({
      nome: this.fb.control('', [Validators.required]),
      authData: this.fb.group({
        email: this.fb.control('',[Validators.required,Validators.email, this.emailProibiteValidator]),
        password: this.fb.control('')
      })
    })
  }

  send(){
    console.log(this.form.value);
    this.getMessage('nome')
    this.getMessage('authData.email')
  }

  /**
   * metodi per validazione booleani
   */

  isValid(fieldName:string){
    return this.form.get(fieldName)?.valid
  }

  isTouched(fieldName:string){
    return this.form.get(fieldName)?.touched
  }

  isInValidTouched(fieldName:string){
    return !this.isValid(fieldName) && this.isTouched(fieldName)
  }

  getMessage(fieldName:string){
    return this.form.get(fieldName)?.errors!['message']
  }


  emailProibite:string[] = ['andrea.ceccarelli@esempio.it','gianmarco@esempio.it','federico.peralta@esempio.it']

  emailProibiteValidator = (formC:FormControl):ValidationErrors|null =>{

    if(this.emailProibite.includes(formC.value)){
      return {
        invalid:true,
        message:'Email non utilizzabile'
      }
    }

    return null

  }


}
