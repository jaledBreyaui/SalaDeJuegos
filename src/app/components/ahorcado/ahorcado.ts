import { Component, signal, OnInit, computed } from '@angular/core';
import { PALABRAS } from '../../../../public/data/palabrasAhorcado';
import { Contador } from '../contador/contador';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { Supabase } from '../../services/supabase/supabase';
import { User } from '@supabase/supabase-js';
import { Pantallafindejuego } from '../pantallafindejuego/pantallafindejuego';
import { NgClass } from '@angular/common';
import { NgxGradientTextComponent } from '@omnedia/ngx-gradient-text';

@Component({
  selector: 'app-ahorcado',
  imports: [
    Contador,
    DialogModule,
    ButtonModule,
    Pantallafindejuego,
    NgClass,
    NgxGradientTextComponent,
  ],
  standalone: true,
  templateUrl: './ahorcado.html',
  styleUrl: './ahorcado.css',
})
export class Ahorcado implements OnInit {
  palabras = PALABRAS;
  palabraSecreta = signal<string>('');
  letrasElegidas = signal<string[]>([]);
  errores = signal(7);
  victoria = signal(false);
  juegoTerminado = signal(false);
  puntajeAcumulado = signal(0);
  puntaje = signal(0);
  mensajeFinDejuego = '';
  dataUsuario: User | undefined;
  mostrarPalabra = computed(() => {
    return this.palabraSecreta()
      .split('')
      .map((letra) => (this.letrasElegidas().includes(letra) ? letra : '_'));
  });

  imagenAhorcado = computed(() => {
    return `media/juegos/ahorcado/ahorcado-${this.errores()}.png`;
  });

  constructor(
    private router: Router,
    private sb: Supabase,
  ) {}

  ngOnInit() {
    this.sortearPalabra();
    console.log(this.palabraSecreta());
  }

  elegirLetra(letra: string) {
    this.letrasElegidas.update((letras) => [...letras, letra]);
    console.log(this.errores());
    if (!this.palabraSecreta().includes(letra)) {
      this.errores.update((errores) => errores - 1);
    } else {
      this.puntaje.set(this.puntaje() + 1000);
    }
    console.log(this.errores());
    this.verificarEstado();
  }

  sortearPalabra() {
    const indiceAleatorio = Math.floor(Math.random() * this.palabras.length);
    const palabraSorteada = this.palabras[indiceAleatorio];
    this.palabraSecreta.set(palabraSorteada);
  }

  verificarEstado() {
    const palabraCompleta = this.mostrarPalabra().join('');
    console.log(palabraCompleta, this.palabraSecreta());
    if (palabraCompleta == this.palabraSecreta()) {
      this.victoria.set(true);
      this.juegoTerminado.set(true);
      this.puntajeAcumulado.set(this.puntajeAcumulado() + this.puntaje());
      this.puntaje.set(this.puntaje() + this.errores() * 100);
    }
    if (this.errores() == 0) {
      this.juegoTerminado.set(true);
      this.puntaje.set(0);
    }
  }

  reiniciarJuego = () => {
    if (!this.victoria()) {
      this.puntaje.set(0);
      this.puntajeAcumulado.set(0);
    }
    this.errores.set(7);
    this.sortearPalabra();
    this.letrasElegidas.set([]);
    this.victoria.set(false);
    this.juegoTerminado.set(false);
  };

  abandonarJuego = () => {
    if (this.puntaje() > 0) {
      this.sb.guardarPuntajes('ahorcado', this.puntajeAcumulado());
    }
    this.router.navigate(['/home']);
  };
}
