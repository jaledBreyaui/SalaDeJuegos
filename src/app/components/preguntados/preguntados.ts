import { Component, OnDestroy, signal } from '@angular/core';
import { Trivia } from '../../services/trivia/trivia';
import { Pregunta } from '../../interfaces/pregunta';
import { NgClass } from '@angular/common';
import { NgxGradientTextComponent } from '@omnedia/ngx-gradient-text';
import { ButtonModule } from 'primeng/button';
import { Pantallafindejuego } from '../pantallafindejuego/pantallafindejuego';
import { Router } from '@angular/router';
import { Supabase } from '../../services/supabase/supabase';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-preguntados',
  imports: [ButtonModule, NgClass, NgxGradientTextComponent, Pantallafindejuego],
  templateUrl: './preguntados.html',
  styleUrl: './preguntados.css',
})
export class Preguntados implements OnDestroy {
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
  mostrandoResultado = signal<boolean>(false);
  respuestaSeleccionada = signal<string | null>(null);
  private timeoutRespuesta?: ReturnType<typeof setTimeout>;
  private salidaConfirmada = false;

  constructor(
    private trivia: Trivia,
    private sb: Supabase,
    private router: Router,
    private confirmationService: ConfirmationService,
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
    this.arrayRespuestas = [this.respuestaActual()];
    this.preguntas[this.contadorPregunta()].incorrect_answers.map((rta) => {
      let rtaParseada = this.parsearPregunta(rta);
      this.arrayRespuestas.push(rtaParseada);
    });
    this.arrayRespuestas.sort(() => Math.random() - 0.5);
    console.log(this.arrayRespuestas);
  }

  verificarRespuesta(respuesta: string) {
    if (this.mostrandoResultado()) {
      return;
    }

    this.respuestaSeleccionada.set(respuesta);
    this.mostrandoResultado.set(true);

    let dificultad = this.preguntas[this.contadorPregunta()].difficulty;
    if (respuesta === this.respuestaActual()) {
      this.sumarPuntaje(dificultad);
      this.respuestasCorrectas.update((r) => r + 1);
    } else {
      this.respuestasIncorrectas.update((r) => r + 1);
    }

    this.timeoutRespuesta = setTimeout(() => {
      this.contadorPregunta.set(this.contadorPregunta() + 1);
      this.arrayRespuestas = [];
      this.respuestaSeleccionada.set(null);
      this.mostrandoResultado.set(false);
      this.configurarRonda();
    }, 2000);
  }

  claseRespuesta(respuesta: string): string {
    if (!this.mostrandoResultado()) {
      return '';
    }

    if (respuesta === this.respuestaActual()) {
      return 'respuesta-correcta';
    }

    if (respuesta === this.respuestaSeleccionada()) {
      return 'respuesta-incorrecta';
    }

    return 'respuesta-bloqueada';
  }

  private limpiarTimeoutRespuesta(): void {
    if (this.timeoutRespuesta) {
      clearTimeout(this.timeoutRespuesta);
      this.timeoutRespuesta = undefined;
    }
  }

  private limpiarEstadoRespuesta(): void {
    this.limpiarTimeoutRespuesta();
    this.arrayRespuestas = [];
    this.respuestaSeleccionada.set(null);
    this.mostrandoResultado.set(false);
  }

  ngOnDestroy(): void {
    this.limpiarTimeoutRespuesta();
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
    this.salidaConfirmada = false;
    this.limpiarEstadoRespuesta();
    this.puntaje.set(0);
    this.juegoTerminado.set(false);
    this.victoria.set(false);
    this.ocultarCategoria.set(false);
    this.contadorPregunta.set(0);
    this.respuestasCorrectas.set(0);
    this.respuestasIncorrectas.set(0);
  };
  abandonarJuego = async () => {
    if (!(await this.puedeSalirDePartida())) {
      return;
    }

    this.limpiarTimeoutRespuesta();
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

  puedeSalirDePartida(): boolean | Promise<boolean> {
    if (this.salidaConfirmada || this.juegoTerminado() || !this.ocultarCategoria()) {
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
