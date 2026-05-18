import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { Supabase } from '../../services/supabase/supabase';
import { MessageService } from 'primeng/api';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    DialogModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    NgClass,
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  private readonly correoLoginRapido = 'admin@admin.com';
  private readonly passwordLoginRapido = 'admin123';

  formularioLogin!: FormGroup;
  visible = signal<boolean>(false);
  errorAlIngresar = signal<boolean>(false);
  constructor(
    private fb: FormBuilder,
    private sb: Supabase,
    private toast: MessageService,
  ) {}

  ngOnInit(): void {
    this.formularioLogin = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      loginRapido: [false],
    });

    this.formularioLogin.get('loginRapido')?.valueChanges.subscribe((loginRapido: boolean) => {
      this.aplicarLoginRapido(loginRapido);
    });
  }

  showDialog() {
    this.visible.set(true);
  }

  closeDialog() {
    this.visible.set(false);
  }

  async iniciarSesion() {
    if (!this.validarFormulario()) {
      return;
    }

    const { correo, password } = this.formularioLogin.getRawValue();
    const { data, error } = await this.sb.iniciarSesion(correo, password);
    if (error) {
      this.toast.add({
        severity: 'error',
        summary: 'Usuario o Contraseña incorrectas',
      });
      this.errorAlIngresar.set(true);
    }
  }

  aplicarLoginRapido(loginRapido: boolean): void {
    if (loginRapido) {
      this.formularioLogin.patchValue({
        correo: this.correoLoginRapido,
        password: this.passwordLoginRapido,
      });
      return;
    }

    const { correo, password } = this.formularioLogin.getRawValue();
    if (correo === this.correoLoginRapido && password === this.passwordLoginRapido) {
      this.formularioLogin.patchValue({
        correo: '',
        password: '',
      });
    }
  }

  validarFormulario(): boolean {
    let isValid = true;
    if (this.formularioLogin.invalid) {
      this.formularioLogin.markAllAsTouched();
      isValid = false;
    }
    return isValid;
  }
}
