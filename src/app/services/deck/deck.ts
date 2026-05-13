import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Deck {
  private url = "https://deckofcardsapi.com/api/deck/new/draw/?count=2"


  constructor(private http: HttpClient) { }


  getCards() {
    return this.http.get(this.url);
  }
}
