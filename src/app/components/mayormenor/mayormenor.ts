import { Component, signal } from '@angular/core';
import { Deck } from '../../services/deck/deck';

@Component({
  selector: 'app-mayormenor',
  imports: [],
  templateUrl: './mayormenor.html',
  styleUrl: './mayormenor.css',
})
export class Mayormenor {
  valorCarta: number = 0
  imagenCarta = signal('')
  valorCartaPrevia: number = 0
  constructor(private deck: Deck) { }

  ngOnInit() {
    this.darCarta()
  }

  darCarta() {
    this.deck.getCards().subscribe((data) => {
      if (data) {
        this.imagenCarta.set(data.cards[0].image);
        this.valorCarta = this.verificarValor(data.cards[0].value)
        console.log(this.valorCarta);
      }
    });
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
