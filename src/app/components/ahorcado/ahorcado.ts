import { Component, signal, OnInit, computed } from '@angular/core';
import { PALABRAS } from '../../../../public/data/palabrasAhorcado';
import { Modal } from './components/modal/modal';

@Component({
  selector: 'app-ahorcado',
  imports: [],
  templateUrl: './ahorcado.html',
  styleUrl: './ahorcado.css',
})
export class Ahorcado implements OnInit {
  palabras = PALABRAS;
  palabraSecreta = signal<string>('');
  letrasElegidas = signal<string[]>([])
  errores = signal(7);
  ganar = signal(false)
  juegoPerdido = signal(false)
  puntaje = 0

  mostrarPalabra = computed(() => {
    return this.palabraSecreta()
      .split('')
      .map(letra => this.letrasElegidas().includes(letra) ? letra : '_');
  });

  imagenAhorcado = computed(() => {
    return `media/juegos/ahorcado/ahorcado-${this.errores()}.png`;
  });

  constructor() { }

  ngOnInit() {
    this.sortearPalabra();
  }

  elegirLetra(letra: string) {
    this.letrasElegidas.update(letras => [...letras, letra]);
    if (!this.palabraSecreta().includes(letra)) {
      this.errores.update(errores => errores - 1)
    }
    this.verificarEstado()
  }

  sortearPalabra() {
    const indiceAleatorio = Math.floor(Math.random() * this.palabras.length);
    const palabraSorteada = this.palabras[indiceAleatorio];
    this.palabraSecreta.set(palabraSorteada);
  }

  verificarEstado() {
    const palabraCompleta = this.mostrarPalabra().join('')
    if (palabraCompleta == this.palabraSecreta()) {
      this.ganar.set(true)
      this.reiniciarJuego()
    }
    if (this.errores() == 0) {
      this.juegoPerdido.set(true)
      this.reiniciarJuego()
    }

    console.log(this.errores());
  }

  reiniciarJuego() {
    this.errores.set(7);
    this.sortearPalabra()
    this.letrasElegidas.set([])
    this.ganar.set(false);
    this.juegoPerdido.set(false);
  }



}
