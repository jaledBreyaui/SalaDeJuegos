import { Component, signal } from '@angular/core';
import { Trivia } from '../../services/trivia/trivia';
import { Pregunta } from '../../interfaces/pregunta';
import { NgClass } from '@angular/common';
import { NgxGradientTextComponent } from '@omnedia/ngx-gradient-text';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-preguntados',
  imports: [ButtonModule, NgClass, NgxGradientTextComponent],
  templateUrl: './preguntados.html',
  styleUrl: './preguntados.css',
})
export class Preguntados {
  preguntas: Pregunta[] = [];
  categoriaSeleccionada: string = '';
  ocultarCategoria = signal<boolean>(false);

  preguntaActual = signal<string>('');
  respuestaActual = signal<string>('');
  arrayRespuestas: string[] = [];
  contadorPregunta = signal<number>(0);
  constructor(private trivia: Trivia) {}

  elegirCategoria(categoria: string) {
    this.trivia.getPreguntas(categoria).subscribe((data: { results: Pregunta[] }) => {
      this.preguntas = data.results;
      this.ocultarCategoria.set(true);
      console.log(this.preguntas);
      this.configurarRonda();
    });
  }

  configurarRonda() {
    let preg = this.preguntas[this.contadorPregunta()].question;
    this.preguntaActual.set(this.parsearPregunta(preg));
    let rta = this.preguntas[this.contadorPregunta()].correct_answer;
    this.respuestaActual.set(this.parsearPregunta(rta));
    this.armarRespuestas();
  }

  armarRespuestas() {
    this.arrayRespuestas.push(this.respuestaActual());
    this.preguntas[this.contadorPregunta()].incorrect_answers.map((rta) => {
      this.arrayRespuestas.push(rta);
    });
    this.arrayRespuestas.sort(() => Math.random() - 0.5);
    console.log(this.arrayRespuestas);
  }

  verificarRespuesta(respuesta: string) {
    if (respuesta === this.respuestaActual()) {
      this.contadorPregunta.set(this.contadorPregunta() + 1);
      this.arrayRespuestas = [];
      this.configurarRonda();
    }
  }

  parsearPregunta(pregunta: string): string {
    const txt = document.createElement('textarea');
    txt.innerHTML = pregunta;
    return txt.value;
  }
}
