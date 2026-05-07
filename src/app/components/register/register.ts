import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { confirmarClaveValidator } from '../../validators/clave.validator';
import { Supabase } from '../../services/supabase/supabase';
import { Toast } from '../toast/toast';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,
    RouterLink,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    ButtonModule,
    Toast],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register implements OnInit {
  @ViewChild(Toast) toast!: Toast;

  formularioRegistro!: FormGroup;

  constructor(private fb: FormBuilder, private sb: Supabase, private router: Router) {
  }


  ngOnInit(): void {
    this.formularioRegistro = this.fb.group(
      {
        correo: ["", [Validators.required, Validators.email]],
        nombre: ["", [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
        apellido: ["", [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
        edad: ["", [Validators.required, Validators.min(18), Validators.max(99)]],
        password: ["", [Validators.required, Validators.minLength(4)]],
        repitePassword: ["", Validators.required]

      }, { validators: confirmarClaveValidator() });
  }



  async registrarUsuario() {
    if (!this.validarFormulario()) {
      return
    }
    const { correo, password, nombre, apellido, edad } = this.formularioRegistro.getRawValue();
    const { data, error } = await this.sb.registrar(correo, password)
    if (error) {
      this.toast.mostrar('Error al registrar', error.message, 'error');
    } else {
      const datosGuardados = await this.sb.guardarDatosUsuario(correo, nombre, Number(edad), apellido);
      if (datosGuardados) {
        this.toast.mostrar('Registro exitoso', 'Ya estás registrado', 'success');
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1500);
      } else {
        this.toast.mostrar('Error al guardar datos', 'No se pudieron guardar los datos del usuario', 'error');
      }
    }
  }

  validarFormulario(): boolean {
    let isValid = true
    if (this.formularioRegistro.invalid) {
      this.formularioRegistro.markAllAsTouched();
      isValid = false;
    }
    return isValid
  }
}
