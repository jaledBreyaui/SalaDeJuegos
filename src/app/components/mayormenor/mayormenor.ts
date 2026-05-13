import { Component } from '@angular/core';
import { Deck } from '../../services/deck/deck';
@Component({
  selector: 'app-mayormenor',
  imports: [],
  templateUrl: './mayormenor.html',
  styleUrl: './mayormenor.css',
})
export class Mayormenor {
  constructor(private deck: Deck) { }

  ngOnInit() {
    this.deck.getCards().subscribe((data) => {
      console.log(data);
    });
  }
}
