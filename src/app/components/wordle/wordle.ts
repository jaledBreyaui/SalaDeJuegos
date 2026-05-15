import { Component, ElementRef, OnInit, QueryList, ViewChildren, signal } from '@angular/core';
import { PALABRAS_WORDLE } from '../../../../public/data/palabras-wordle';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Pantallafindejuego } from '../pantallafindejuego/pantallafindejuego';
@Component({
  selector: 'app-wordle',
  imports: [InputTextModule, ReactiveFormsModule, NgClass, Pantallafindejuego],
  templateUrl: './wordle.html',
  standalone: true,
  styleUrl: './wordle.css',
})
export class Wordle implements OnInit {
  @ViewChildren('casillero') casilleros!: QueryList<ElementRef<HTMLInputElement>>;

  palabras = PALABRAS_WORDLE;
  palabraSecreta = signal<string>('');
  letras = ['letra1', 'letra2', 'letra3', 'letra4', 'letra5'];
  intentos: FormGroup[] = [];
  intentoActual = 0;
  juegoTerminado = signal(false);
  victoria = signal(false);
  mensajeJuegoTerminado = '';
  clasesLetrasProbadas: string[][] = [];
  puntaje = signal(0);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.intentos = Array.from({ length: 5 }, () => this.crearIntento());
    this.clasesLetrasProbadas = Array.from({ length: 5 }, () => ['', '', '', '', '']);
    this.sortearPalabra();
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
      console.log('palabra ingresada[i] :', palabraIngresada[i]);
      console.log('palabra secreta[i] :', palabraSecreta[i]);
      if (palabraIngresada[i] === palabraSecreta[i]) {
        this.clasesLetrasProbadas[this.intentoActual][i] = 'correcta';
      } else if (palabraSecreta.includes(palabraIngresada[i])) {
        this.clasesLetrasProbadas[this.intentoActual][i] = 'presente';
      } else {
        this.clasesLetrasProbadas[this.intentoActual][i] = 'incorrecta';
      }
    }

    if (this.intentoActual < this.intentos.length - 1) {
      this.intentoActual++;
    }

    if (this.intentoActual > 6) {
      this.juegoTerminado.set(true);
    }
    if (this.palabraSecreta() === palabraIngresada) {
      this.juegoTerminado.set;
    }
  }

  mostrarFinJuego() {
    this.juegoTerminado.set(true)
  }
  claseletra() { }
}
