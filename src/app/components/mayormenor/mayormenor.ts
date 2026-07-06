import { Component, signal } from '@angular/core';
import { Deck } from '../../services/deck/deck';
import { ButtonModule } from 'primeng/button';
import { Contador } from '../contador/contador';
import { Pantallafindejuego } from '../pantallafindejuego/pantallafindejuego';
import { Router } from '@angular/router';

import { NgClass } from '@angular/common';
import { NgxGradientTextComponent } from '@omnedia/ngx-gradient-text';
import { carta } from '../../interfaces/carta';
import { Supabase } from '../../services/supabase/supabase';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-mayormenor',
  standalone: true,
  imports: [ButtonModule, NgClass, NgxGradientTextComponent, Contador, Pantallafindejuego],
  templateUrl: './mayormenor.html',
  styleUrl: './mayormenor.css',
})
export class Mayormenor {
  mazo = signal<carta[]>([]);
  valorCarta: number = 0;
  valorCartaPrevia: number = 0;
  imagenCarta = signal<string>('');
  imagenCartaPrevia = signal<string>('');
  animarCarta = signal<boolean>(false);

  puntaje = signal<number>(0);
  puntajeAcumulado = signal<number>(0);

  juegoTerminado = signal<boolean>(false);
  victoria = signal<boolean>(false);

  eleccionJugador = signal<string>('');
  contadorCarta: number = 0;

  deshabilitarBotones = signal<boolean>(false);
  private salidaConfirmada = false;

  constructor(
    private deck: Deck,
    private sb: Supabase,
    private router: Router,
    private confirmationService: ConfirmationService,
  ) {}

  ngOnInit() {
    this.deck.getCards().subscribe((data) => {
      if (data) {
        this.mazo.set(data.cards);
        this.darCarta();
      }
    });
  }

  darCarta(eleccion?: string) {
    const cartaActual = this.mazo()[this.contadorCarta];
    if (this.contadorCarta > 0) {
      this.valorCartaPrevia = this.valorCarta;
      this.imagenCartaPrevia.set(this.imagenCarta());
      this.animarCarta.set(false);
      setTimeout(() => this.animarCarta.set(true));
    }
    this.imagenCarta.set(cartaActual.image);
    this.valorCarta = this.verificarValor(cartaActual.value);

    if (eleccion === 'mayor' && this.valorCarta <= this.valorCartaPrevia) {
      this.deshabilitarBotones.set(true);
      setTimeout(() => {
        this.juegoTerminado.set(true);
        this.victoria.set(false);
      }, 1000);
    } else if (eleccion === 'menor' && this.valorCarta >= this.valorCartaPrevia) {
      this.deshabilitarBotones.set(true);
      setTimeout(() => {
        this.juegoTerminado.set(true);
        this.victoria.set(false);
      }, 1000);
    } else {
      if (this.valorCartaPrevia > 0) {
        this.puntaje.set(this.puntaje() + 250);
      }
    }
    this.contadorCarta++;
  }

  elijeMayor() {
    this.darCarta('mayor');
  }

  elijeMenor() {
    this.darCarta('menor');
  }

  verificarValor(value: string): number {
    if (!isNaN(Number(value))) {
      return Number(value);
    }

    if (value === 'ACE') {
      return 14;
    } else if (value === 'KING') {
      return 13;
    } else if (value === 'QUEEN') {
      return 12;
    } else if (value === 'JACK') {
      return 11;
    }

    return 0;
  }

  reiniciarJuego = () => {
    this.salidaConfirmada = false;
    this.guardarPuntos;
    this.ngOnInit();
    this.puntaje.set(0);
    this.valorCartaPrevia = 0;
    this.juegoTerminado.set(false);
    this.victoria.set(false);
    this.imagenCartaPrevia.set('');
    this.imagenCarta.set('');
    this.deshabilitarBotones.set(false);
  };

  abandonarJuego = async () => {
    if (!(await this.puedeSalirDePartida())) {
      return;
    }

    if (this.puntaje() > 1500) {
      this.guardarPuntos();
    }
    this.router.navigate(['/home']);
  };

  finalizarAnimacionCartaPrevia() {
    this.animarCarta.set(false);
  }

  guardarPuntos() {
    if (this.puntaje() > 1500) {
      this.sb.guardarPuntajes('mayormenor', this.puntaje());
    }
  }

  verificarEstado() {}

  puedeSalirDePartida(): boolean | Promise<boolean> {
    if (this.salidaConfirmada || this.juegoTerminado() || this.contadorCarta <= 1) {
      return true;
    }

    return this.confirmarSalida();
  }

  private confirmarSalida(): Promise<boolean> {
    return new Promise((resolve) => {
      this.confirmationService.confirm({
        header: 'Abandonar partida',
        message: 'Si salis ahora vas a perder el progreso de la partida.',
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'Abandonar',
        rejectLabel: 'Seguir jugando',
        accept: () => {
          this.salidaConfirmada = true;
          resolve(true);
        },
        reject: () => resolve(false),
      });
    });
  }
}
