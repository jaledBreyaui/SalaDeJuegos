import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mazoCarta } from '../../interfaces/mazoCarta';

@Injectable({
  providedIn: 'root',
})
export class Deck {
  private url = 'https://deckofcardsapi.com/api/deck/new/draw/?count=52';
  constructor(private http: HttpClient) {}

  getCards() {
    return this.http.get<mazoCarta>(this.url);
  }
}
