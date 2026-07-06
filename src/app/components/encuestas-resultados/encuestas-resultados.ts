import { Component, computed, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TableModule } from 'primeng/table';
import { Encuesta } from '../../interfaces/encuesta';
import { Supabase } from '../../services/supabase/supabase';

@Component({
  selector: 'app-encuestas-resultados',
  standalone: true,
  imports: [TableModule, DatePipe],
  templateUrl: './encuestas-resultados.html',
  styleUrl: './encuestas-resultados.css',
})
export class EncuestasResultados {
  encuestas = signal<Encuesta[]>([]);

  totalEncuestas = computed(() => this.encuestas().length);
  cantidadConformes = computed(
    () => this.encuestas().filter((encuesta) => encuesta.pregunta_tres === 'si').length,
  );
  juegoMasElegido = computed(() => {
    const contador = this.encuestas().reduce(
      (acc, encuesta) => {
        acc[encuesta.pregunta_dos] = (acc[encuesta.pregunta_dos] ?? 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );

    const juego = Object.entries(contador).sort((a, b) => b[1] - a[1])[0]?.[0];
    return this.formatearJuego(juego ?? 'sin datos');
  });

  constructor(private sb: Supabase) {}

  async ngOnInit(): Promise<void> {
    this.encuestas.set(await this.sb.obtenerEncuestas());
  }

  formatearJuego(juego: string): string {
    switch (juego) {
      case 'ahorcado':
        return 'Ahorcado';
      case 'mayormenor':
        return 'Mayor o Menor';
      case 'preguntados':
        return 'Preguntados';
      case 'wordle':
        return 'Wordle';
      default:
        return 'Sin datos';
    }
  }
}
