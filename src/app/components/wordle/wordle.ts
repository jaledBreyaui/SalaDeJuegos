import { Component, ElementRef, OnInit, QueryList, ViewChildren, signal } from '@angular/core';
import { PALABRAS_WORDLE } from '../../../../public/data/palabras-wordle';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Pantallafindejuego } from '../pantallafindejuego/pantallafindejuego';
import { NgxGradientTextComponent } from '@omnedia/ngx-gradient-text';
import { Router } from '@angular/router';
import { Supabase } from '../../services/supabase/supabase';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-wordle',
  imports: [
    InputTextModule,
    ReactiveFormsModule,
    NgClass,
    Pantallafindejuego,
    NgxGradientTextComponent,
    DialogModule,
    ButtonModule,
  ],
  templateUrl: './wordle.html',
  standalone: true,
  styleUrl: './wordle.css',
})
export class Wordle implements OnInit {
  @ViewChildren('casillero') casilleros!: QueryList<ElementRef<HTMLInputElement>>;

  palabras = PALABRAS_WORDLE;
  palabraSecreta = signal<string>('');
  puntaje = signal(0);

  letras = ['letra1', 'letra2', 'letra3', 'letra4', 'letra5'];
  letrasElegidas: string[] = [];
  intentos: FormGroup[] = [];

  intentoActual = 0;
  clasesLetrasProbadas: string[][] = [];

  juegoTerminado = signal(false);
  victoria = signal(false);
  mensajeJuegoTerminado = '';

  visible: boolean = false;

  constructor(
    private fb: FormBuilder,
    private sb: Supabase,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.intentos = Array.from({ length: 6 }, () => this.crearIntento());
    this.clasesLetrasProbadas = Array.from({ length: 6 }, () => ['', '', '', '', '']);
    this.sortearPalabra();
    console.log(this.palabraSecreta());
  }

  sortearPalabra() {
    const indiceAleatorio = Math.floor(Math.random() * this.palabras.length);
    const palabraSorteada = this.palabras[indiceAleatorio].toLocaleUpperCase('es-AR');
    this.palabraSecreta.set(palabraSorteada);
  }

  crearIntento(): FormGroup {
    return this.fb.group({
      letra1: [''],
      letra2: [''],
      letra3: [''],
      letra4: [''],
      letra5: [''],
    });
  }

  normalizarLetra(
    intento: FormGroup,
    control: string,
    intentoIndex: number,
    letraIndex: number,
    event: Event,
  ): void {
    const input = event.target as HTMLInputElement;
    const letra = input.value
      .replace(/[^\p{L}]/gu, '')
      .slice(0, 1)
      .toLocaleUpperCase('es-AR');

    intento.get(control)?.setValue(letra, { emitEvent: false });
    input.value = letra;

    if (letra) {
      this.enfocarCasillero(intentoIndex, letraIndex + 1);
    }
  }

  obtenerLetras(intento: FormGroup): string[] {
    return this.letras.map((letra) => intento.get(letra)?.value ?? '');
  }

  intentoCompleto(intento: FormGroup): boolean {
    return this.obtenerLetras(intento).every((letra) => letra.length === 1);
  }

  verificarIntento(intento: FormGroup, index: number, event?: Event): void {
    event?.preventDefault();

    if (index !== this.intentoActual || !this.intentoCompleto(intento)) {
      return;
    }
    const palabraIngresada = this.obtenerLetras(intento).join('');
    const palabraSecreta = this.palabraSecreta();

    for (let i = 0; i < palabraIngresada.length; i++) {
      this.letrasElegidas.push(palabraIngresada[i]);
      if (palabraIngresada[i] === palabraSecreta[i]) {
        this.clasesLetrasProbadas[this.intentoActual][i] = 'correcta';
      } else if (palabraSecreta.includes(palabraIngresada[i])) {
        this.clasesLetrasProbadas[this.intentoActual][i] = 'presente';
      } else {
        this.clasesLetrasProbadas[this.intentoActual][i] = 'incorrecta';
      }
    }

    this.intentoActual++;

    if (this.intentoActual >= 6) {
      this.juegoTerminado.set(true);
      this.victoria.set(false);
      this.puntaje.set(0);
    }
    if (this.palabraSecreta() === palabraIngresada) {
      this.juegoTerminado.set(true);
      this.victoria.set(true);
      this.puntaje.set(this.puntaje() + (7 - this.intentoActual) * 1000);
      console.log(this.puntaje());
    }
  }

  abandonarJuego = () => {
    if (this.puntaje() > 0) {
      this.sb.guardarPuntajes('wordle', this.puntaje());
    }
    this.router.navigate(['/home']);
  };

  reiniciarJuego = () => {
    this.juegoTerminado.set(false);
    this.intentoActual = 0;
    this.clasesLetrasProbadas = [];
    this.letrasElegidas = [];
    this.ngOnInit();
  };

  mostrarFinJuego() {
    this.juegoTerminado.set(true);
  }

  manejarBackspace(
    intento: FormGroup,
    control: string,
    intentoIndex: number,
    letraIndex: number,
  ): void {
    const valorActual = intento.get(control)?.value;

    if (!valorActual) {
      this.enfocarCasillero(intentoIndex, letraIndex - 1);
    }
  }

  enfocarCasillero(intentoIndex: number, letraIndex: number): void {
    if (letraIndex < 0 || letraIndex >= this.letras.length) {
      return;
    }

    const indexGlobal = intentoIndex * this.letras.length + letraIndex;
    this.casilleros.get(indexGlobal)?.nativeElement.focus();
  }

  showDialog() {
    this.visible = true;
  }

  //   private guardarLocalStorage(): void {
  //   const partidaEmpezada = {
  //     palabraSecreta: this.palabraSecreta(),
  //     letrasElegidas: this.letrasElegidas(),
  //     errores: this.errores(),
  //     puntajeAcumulado: this.puntajeAcumulado(),
  //     puntaje: this.puntaje(),
  //   };
  //   localStorage.setItem(this.localStoragekey, JSON.stringify(partidaEmpezada));
  // }

  // private traerEstado(): void {
  //   const estadoGuardado = localStorage.getItem(this.localStoragekey);
  //   if (!estadoGuardado) return;
  //   const estadoRetriveado = JSON.parse(estadoGuardado);

  //   this.palabraSecreta.set(estadoRetriveado.palabraSecreta);
  //   this.letrasElegidas.set(estadoRetriveado.letrasElegidas);
  //   this.errores.set(estadoRetriveado.errores);
  //   this.puntajeAcumulado.set(estadoRetriveado.puntajeAcumulado);
  //   this.puntaje.set(estadoRetriveado.puntaje);
  // }
}
