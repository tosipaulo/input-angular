import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formUser: FormGroup;
  configInput: any = {
    label: "Nome",
    key: "name",
    messagens: {
      required: 'Campo obrigatório',
      minlength: 'Preencher pelo menos dois caractres',
      email: 'precisar ser um e-mail valido'
    }
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formUser = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [ Validators.required]]
    })
  }

  onSubmit() {
    console.log('submit', this.formUser)
  }

}
