import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, Validators, FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { confirmarClaveValidator } from '../../validators/clave.validator';
@Component({
  selector: 'app-register',
  imports: [ ReactiveFormsModule,
    RouterLink,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    ButtonModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register implements OnInit{
  formularioRegistro!: FormGroup;

  constructor(private fb: FormBuilder){}


  ngOnInit(): void {

    this.formularioRegistro = this.fb.group(
      {
      usuario: [''],
      nombre: ["", [Validators.pattern('^[a-zA-Z]+$')]],
      apellido: ["", [Validators.pattern('^[a-zA-Z]+$')]],
      edad: ["", [Validators.min(18), Validators.max(99)]],
      correo: ["", Validators.email],
      password: ["", Validators.minLength(4)],
      repiteClave: [null, Validators.required]

    }, { validators: confirmarClaveValidator() });
  }
  loguearCampos(){
    console.log(this.formularioRegistro)
  }
}
