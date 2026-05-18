import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTrivia } from '../../interfaces/respuetaTrivia';
@Injectable({
  providedIn: 'root',
})
export class Trivia {
  private url = 'https://opentdb.com/api.php?amount=10&category=9&type=multiple';
  private urlConociminetoGeneral = 'https://opentdb.com/api.php?amount=10&category=9';
  private urlDeportes = 'https://opentdb.com/api.php?amount=10&category=21';
  private urlMusica = 'https://opentdb.com/api.php?amount=10&category=12';
  private urlHistoria =
    'https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple';
  constructor(private http: HttpClient) {}

  getPreguntas(categoria: string) {
    console.log(categoria);
    if (categoria === 'general') {
      return this.http.get<RespuestaTrivia>(this.urlConociminetoGeneral);
    }
    if (categoria === 'deportes') {
      return this.http.get<RespuestaTrivia>(this.urlDeportes);
    }
    if (categoria === 'musica') {
      return this.http.get<RespuestaTrivia>(this.urlMusica);
    }
    if (categoria === 'historia') {
      return this.http.get<RespuestaTrivia>(this.urlHistoria);
    } else {
      return this.http.get<RespuestaTrivia>(this.url);
    }
  }
}
