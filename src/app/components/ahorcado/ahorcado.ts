import { Component, signal, OnInit, computed } from '@angular/core';
import { PALABRAS } from '../../../../public/data/palabrasAhorcado';
import { Contador } from '../contador/contador';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { Supabase } from '../../services/supabase/supabase';
import { User } from '@supabase/supabase-js';


@Component({
  selector: 'app-ahorcado',
  imports: [Contador, DialogModule, ButtonModule],
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
  puntaje = signal(0)
  visible = signal(false);
  mensajeFinDejuego = '';
  dataUsuario: User | undefined
  mostrarPalabra = computed(() => {
    return this.palabraSecreta()
      .split('')
      .map(letra => this.letrasElegidas().includes(letra) ? letra : '_');
  });

  imagenAhorcado = computed(() => {
    return `media/juegos/ahorcado/ahorcado-${this.errores()}.png`;
  });

  constructor(private router: Router, private sb: Supabase) { }

  ngOnInit() {
    this.sortearPalabra();
  }

  elegirLetra(letra: string) {
    this.letrasElegidas.update(letras => [...letras, letra]);
    if (!this.palabraSecreta().includes(letra)) {
      this.errores.update(errores => errores - 1)
    } else {
      this.puntaje.set(this.puntaje() + 100)
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
      this.puntaje.set(this.puntaje() + (this.errores() * 100))
      this.mensajeFinDejuego = `Adivinaste!`
      this.showDialog()
    }
    if (this.errores() == 0) {
      this.juegoPerdido.set(true)
      this.mensajeFinDejuego = `Perdiste!`
      this.showDialog()
    }

  }

  reiniciarJuego() {
    if (!this.ganar()) {
      this.puntaje.set(0)
    }
    this.errores.set(7);
    this.sortearPalabra()
    this.letrasElegidas.set([])
    this.ganar.set(false);
    this.juegoPerdido.set(false);
    this.closeDialog()
  }

  abandonarjuego() {
    if (this.puntaje() > 0) {
      this.sb.guardarPuntajes('ahorcado', this.puntaje())
    }
    this.router.navigate(['/home']);
    this.closeDialog()
  }


  ////Modal
  showDialog() {
    this.visible.set(true);
  }

  closeDialog() {
    this.visible.set(false);
  }

}
