import { Component } from '@angular/core';
import { Deck } from '../../services/deck/deck';

@Component({
  selector: 'app-mayormenor',
  imports: [],
  templateUrl: './mayormenor.html',
  styleUrl: './mayormenor.css',
})
export class Mayormenor {
  valorCarta: number = 0
  imagenCarta: string = ''
  valorCartaPrevia: number = 0
  constructor(private deck: Deck) { }

  ngOnInit() {
    this.darCarta()
  }

  darCarta() {
    if (this.valorCarta !== 0) {
      this.valorCartaPrevia = this.valorCarta
    }
    this.deck.getCards().subscribe((data) => {
      if (data) {
        console.log(data.cards);
        this.imagenCarta = data.cards[0].image;
      }
    });
  }

  verificarValor(value: string): number {
    let numero = 0
    if (value == "ACE") {
      numero = 13
    } else if (value == "KING") {
      numero = 12
    } else if (value == "JACK") {
      numero = 11
    }
    return numero
  }

  verificarEstado() {

  }

}
