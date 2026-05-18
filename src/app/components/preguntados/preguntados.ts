import { Component, signal } from '@angular/core';
import { Trivia } from '../../services/trivia/trivia';
import { Pregunta } from '../../interfaces/pregunta';
import { NgClass } from '@angular/common';
import { NgxGradientTextComponent } from '@omnedia/ngx-gradient-text';
import { ButtonModule } from 'primeng/button';
import { Pantallafindejuego } from '../pantallafindejuego/pantallafindejuego';
import { Router } from '@angular/router';
import { Supabase } from '../../services/supabase/supabase';

@Component({
  selector: 'app-preguntados',
  imports: [ButtonModule, NgClass, NgxGradientTextComponent, Pantallafindejuego],
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

  victoria = signal<boolean>(false);
  juegoTerminado = signal<boolean>(false);
  puntaje = signal<number>(0);

  respuestasCorrectas = signal<number>(0);
  respuestasIncorrectas = signal<number>(0);

  constructor(
    private trivia: Trivia,
    private sb: Supabase,
    private router: Router,
  ) {}

  elegirCategoria(categoria: string) {
    this.trivia.getPreguntas(categoria).subscribe((data: { results: Pregunta[] }) => {
      this.preguntas = data.results;
      this.ocultarCategoria.set(true);
      console.log(this.preguntas);
      this.configurarRonda();
    });
  }

  configurarRonda() {
    console.log(this.contadorPregunta());
    if (this.contadorPregunta() > 9) {
      this.juegoTerminado.set(true);
      if (this.respuestasCorrectas() === 10) {
        this.victoria.set(true);
      } else {
        this.victoria.set(false);
      }
    } else {
      let preg = this.preguntas[this.contadorPregunta()].question;
      this.preguntaActual.set(this.parsearPregunta(preg));
      let rta = this.preguntas[this.contadorPregunta()].correct_answer;
      this.respuestaActual.set(this.parsearPregunta(rta));
      this.armarRespuestas();
    }
  }

  armarRespuestas() {
    this.arrayRespuestas.push(this.respuestaActual());
    this.preguntas[this.contadorPregunta()].incorrect_answers.map((rta) => {
      let rtaParseada = this.parsearPregunta(rta);
      this.arrayRespuestas.push(rtaParseada);
    });
    this.arrayRespuestas.sort(() => Math.random() - 0.5);
    console.log(this.arrayRespuestas);
  }

  verificarRespuesta(respuesta: string) {
    let dificultad = this.preguntas[this.contadorPregunta()].difficulty;
    if (respuesta === this.respuestaActual()) {
      this.sumarPuntaje(dificultad);
      this.respuestasCorrectas.update((r) => r + 1);
    } else {
      this.respuestasIncorrectas.update((r) => r + 1);
    }
    this.contadorPregunta.set(this.contadorPregunta() + 1);
    this.arrayRespuestas = [];
    this.configurarRonda();
  }

  sumarPuntaje(dificultad: string) {
    if (dificultad === 'easy') {
      this.puntaje.set(this.puntaje() + 1000);
    }
    if (dificultad === 'medium') {
      this.puntaje.set(this.puntaje() + 1500);
    }
    if (dificultad === 'hard') {
      this.puntaje.set(this.puntaje() + 2000);
    }
  }

  reiniciarJuego = () => {
    this.puntaje.set(0);
    this.juegoTerminado.set(false);
    this.victoria.set(false);
    this.ocultarCategoria.set(false);
    this.contadorPregunta.set(0);
    this.respuestasCorrectas.set(0);
    this.respuestasIncorrectas.set(0);
  };
  abandonarJuego = () => {
    this.guardarPuntos();
    this.router.navigate(['/home']);
  };

  guardarPuntos() {
    if (this.puntaje() > 0) {
      this.sb.guardarPuntajes('preguntados', this.puntaje());
    }
  }
  parsearPregunta(pregunta: string): string {
    const txt = document.createElement('textarea');
    txt.innerHTML = pregunta;
    return txt.value;
  }
}
