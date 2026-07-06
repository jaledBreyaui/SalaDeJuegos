import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { Supabase } from '../../services/supabase/supabase';
import { opcionExclusivaValidator } from '../../validators/opcion-exclusiva.validator';
import { UsuarioRegistrado } from '../../interfaces/usuario-registrado';

@Component({
  selector: 'app-encuesta',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    RadioButtonModule,
    CheckboxModule,
  ],
  templateUrl: './encuesta.html',
  styleUrl: './encuesta.css',
})
export class Encuesta implements OnInit {
  formularioEncuesta!: FormGroup;
  cargandoUsuario = true;
  enviandoEncuesta = false;

  juegos = [
    { label: 'Ahorcado', value: 'ahorcado' },
    { label: 'Mayor o Menor', value: 'mayormenor' },
    { label: 'Preguntados', value: 'preguntados' },
    { label: 'Wordle', value: 'wordle' },
  ];

  constructor(
    private fb: FormBuilder,
    private sb: Supabase,
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
    this.formularioEncuesta = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern("^[a-zA-ZÀ-ÿ\\s'-]+$")]],
      apellido: ['', [Validators.required, Validators.pattern("^[a-zA-ZÀ-ÿ\\s'-]+$")]],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      telefono: [
        '',
        [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(10)],
      ],
      preguntaUno: ['', [Validators.required, Validators.minLength(4)]],
      preguntaDos: ['', Validators.required],
      conformidad: this.fb.group(
        {
          si: [false],
          no: [false],
        },
        { validators: opcionExclusivaValidator('si', 'no') },
      ),
    });

    this.cargarDatosUsuario();
  }

  get conformidadGroup(): FormGroup {
    return this.formularioEncuesta.get('conformidad') as FormGroup;
  }

  campoInvalido(nombreCampo: string): boolean {
    const control = this.formularioEncuesta.get(nombreCampo);
    return !!control && control.invalid && control.touched;
  }

  conformidadInvalida(): boolean {
    return this.conformidadGroup.invalid && this.conformidadGroup.touched;
  }

  seleccionarConformidad(opcionSeleccionada: 'si' | 'no'): void {
    const opcionContraria = opcionSeleccionada === 'si' ? 'no' : 'si';
    const valorActual = this.conformidadGroup.get(opcionSeleccionada)?.value;

    if (valorActual) {
      this.conformidadGroup.get(opcionContraria)?.setValue(false, { emitEvent: false });
    }

    this.conformidadGroup.markAsTouched();
    this.conformidadGroup.updateValueAndValidity();
  }

  async enviarEncuesta(): Promise<void> {
    if (this.formularioEncuesta.invalid) {
      this.formularioEncuesta.markAllAsTouched();
      this.conformidadGroup.markAsTouched();
      this.messageService.add({
        severity: 'warn',
        summary: 'Formulario incompleto',
        detail: `Revisa: ${this.obtenerCamposInvalidos()}.`,
      });
      return;
    }

    this.enviandoEncuesta = true;

    try {
      const usuarioActual = await this.sb.obtenerUsuarioActual();
      if (!usuarioActual) {
        this.messageService.add({
          severity: 'error',
          summary: 'Sesion invalida',
          detail: 'No se encontro el usuario logueado para registrar la encuesta.',
        });
        return;
      }

      if (!this.datosPersonalesCoinciden(usuarioActual)) {
        this.messageService.add({
          severity: 'error',
          summary: 'Datos no coinciden',
          detail: 'Nombre, apellido o edad no coinciden con los datos de tu cuenta.',
        });
        return;
      }

      const respuestaTres = this.conformidadGroup.get('si')?.value ? 'si' : 'no';
      const { preguntaUno, preguntaDos } = this.formularioEncuesta.getRawValue();
      const respuesta = await this.sb.guardarEncuesta(preguntaUno.trim(), preguntaDos, respuestaTres);

      this.messageService.add({
        severity: respuesta.ok ? 'success' : 'warn',
        summary: respuesta.ok ? 'Encuesta enviada' : 'No se pudo enviar',
        detail: respuesta.mensaje,
      });

      if (respuesta.ok) {
        this.formularioEncuesta.reset();
        this.conformidadGroup.patchValue({ si: false, no: false });
        await this.cargarDatosUsuario();
      }
    } catch (error) {
      console.error('Error al enviar encuesta:', error);
      this.messageService.add({
        severity: 'error',
        summary: 'Error inesperado',
        detail: 'La encuesta no pudo enviarse. Intenta nuevamente.',
      });
    } finally {
      this.enviandoEncuesta = false;
    }
  }

  private async cargarDatosUsuario(): Promise<void> {
    this.cargandoUsuario = true;

    try {
      const usuarioActual = await this.sb.obtenerUsuarioActual();

      if (!usuarioActual) {
        this.messageService.add({
          severity: 'error',
          summary: 'Sesion invalida',
          detail: 'No se pudieron cargar los datos del usuario actual.',
        });
        return;
      }

      this.formularioEncuesta.patchValue({
        nombre: usuarioActual.nombre,
        apellido: usuarioActual.apellido,
        edad: usuarioActual.edad,
      });
    } catch (error) {
      console.error('Error al cargar usuario:', error);
      this.cargandoUsuario = false;
      this.messageService.add({
        severity: 'error',
        summary: 'Sesion invalida',
        detail: 'No se pudieron cargar los datos del usuario actual.',
      });
      return;
    } finally {
      this.cargandoUsuario = false;
    }
  }

  private datosPersonalesCoinciden(usuario: UsuarioRegistrado): boolean {
    const { nombre, apellido, edad } = this.formularioEncuesta.getRawValue();

    return (
      this.normalizarTexto(nombre) === this.normalizarTexto(usuario.nombre) &&
      this.normalizarTexto(apellido) === this.normalizarTexto(usuario.apellido) &&
      Number(edad) === Number(usuario.edad)
    );
  }

  private normalizarTexto(valor: string): string {
    return valor.trim().toLowerCase();
  }

  private obtenerCamposInvalidos(): string {
    const nombresCampos: Record<string, string> = {
      nombre: 'nombre',
      apellido: 'apellido',
      edad: 'edad',
      telefono: 'telefono',
      preguntaUno: 'como nos conociste',
      preguntaDos: 'juego favorito',
      conformidad: 'conformidad con el diseno',
    };

    return (
      Object.keys(this.formularioEncuesta.controls)
        .filter((campo) => this.formularioEncuesta.get(campo)?.invalid)
        .map((campo) => nombresCampos[campo] ?? campo)
        .join(', ') || 'los campos obligatorios'
    );
  }
}
