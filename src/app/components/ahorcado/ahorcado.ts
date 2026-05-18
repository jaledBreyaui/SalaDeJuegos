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
  errores = signal<number>(7);
  victoria = signal<boolean>(false);
  juegoTerminado = signal<boolean>(false);
  puntajeAcumulado = signal<number>(0);
  puntaje = signal<number>(0);
  mensajeFinDejuego: string = '';
  dataUsuario: User | undefined;
  mostrarPalabra = computed(() => {
    return this.palabraSecreta()
      .split('')
      .map((letra) => (this.letrasElegidas().includes(letra) ? letra : '_'));
  });

  imagenAhorcado = computed(() => {
    return `media/juegos/ahorcado/ahorcado-${this.errores()}.png`;
  });

  localStoragekey: string = 'estado-ahorcado';

  constructor(
    private router: Router,
    private sb: Supabase,
  ) {}

  ngOnInit() {
    this.traerEstado();
    if (!this.palabraSecreta()) {
      this.sortearPalabra();
    }
    console.log(this.palabraSecreta());
  }

  elegirLetra(letra: string): void {
    this.letrasElegidas.update((letras) => [...letras, letra]);
    if (!this.palabraSecreta().includes(letra)) {
      this.errores.update((errores) => errores - 1);
    } else {
      this.puntaje.set(this.puntaje() + 1000);
    }
    this.guardarLocalStorage();
    this.verificarEstado();
  }

  sortearPalabra(): void {
    const indiceAleatorio = Math.floor(Math.random() * this.palabras.length);
    const palabraSorteada = this.palabras[indiceAleatorio];
    this.palabraSecreta.set(palabraSorteada);
  }

  verificarEstado(): void {
    const palabraCompleta = this.mostrarPalabra().join('');
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
    this.borrarLocalStorage();
  };

  abandonarJuego = () => {
    this.borrarLocalStorage();
    if (this.puntaje() > 0) {
      this.sb.guardarPuntajes('ahorcado', this.puntajeAcumulado());
    }
    this.router.navigate(['/home']);
  };

  private guardarLocalStorage(): void {
    const partidaEmpezada = {
      palabraSecreta: this.palabraSecreta(),
      letrasElegidas: this.letrasElegidas(),
      errores: this.errores(),
      puntajeAcumulado: this.puntajeAcumulado(),
      puntaje: this.puntaje(),
    };
    localStorage.setItem(this.localStoragekey, JSON.stringify(partidaEmpezada));
  }

  private traerEstado(): void {
    const estadoGuardado = localStorage.getItem(this.localStoragekey);
    if (!estadoGuardado) return;
    const estadoRetriveado = JSON.parse(estadoGuardado);

    this.palabraSecreta.set(estadoRetriveado.palabraSecreta);
    this.letrasElegidas.set(estadoRetriveado.letrasElegidas);
    this.errores.set(estadoRetriveado.errores);
    this.puntajeAcumulado.set(estadoRetriveado.puntajeAcumulado);
    this.puntaje.set(estadoRetriveado.puntaje);
  }

  private borrarLocalStorage(): void {
    localStorage.removeItem(this.localStoragekey);
  }
}
