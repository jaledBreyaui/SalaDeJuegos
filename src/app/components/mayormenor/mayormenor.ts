import { Component, signal } from '@angular/core';
import { Deck } from '../../services/deck/deck';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { NgClass } from "@angular/common";
@Component({
  selector: 'app-mayormenor',
  imports: [ButtonModule, NgClass],
  templateUrl: './mayormenor.html',
  styleUrl: './mayormenor.css',
})
export class Mayormenor {
  valorCarta: number = 0
  imagenCarta = signal('')
  valorCartaPrevia: number = 0
  puntaje = signal(0)
  juegoPerdido = signal(false)
  eleccionJugador = signal('')
  mostrarAnimacionError = signal(false)
  mostrarAnimacionAcierto = signal(false)

  constructor(private deck: Deck) { }

  ngOnInit() {
    this.darCarta()
  }

  darCarta(eleccion?: string) {
    this.deck.getCards().subscribe((data) => {
      if (data) {
        this.valorCartaPrevia = this.valorCarta
        this.imagenCarta.set(data.cards[0].image);
        this.valorCarta = this.verificarValor(data.cards[0].value)

        if (eleccion === 'mayor' && this.valorCarta <= this.valorCartaPrevia) {
          this.juegoPerdido.set(true)
          this.mostrarAnimacionError.set(true)
        }

        if (eleccion === 'menor' && this.valorCarta >= this.valorCartaPrevia) {
          this.juegoPerdido.set(true)
          this.mostrarAnimacionError.set(true)
        }

        if (this.valorCartaPrevia > 0) {
          this.puntaje.set(this.puntaje() + 250)
        }


      }
    });
  }

  elijeMayor() {
    this.darCarta('mayor')
  }

  elijeMenor() {
    this.darCarta('menor')
  }

  verificarValor(value: string): number {
    if (!isNaN(Number(value))) {
      return Number(value);
    }

    if (value === "ACE") {
      return 14;
    } else if (value === "KING") {
      return 13;
    } else if (value === "QUEEN") {
      return 12;
    } else if (value === "JACK") {
      return 11;
    }

    return 0;
  }

  verificarEstado() {

  }

}
