import { Component, signal } from '@angular/core';
import { TabsModule } from 'primeng/tabs'
import { Supabase } from '../../services/supabase/supabase';
import { Tabla } from "./components/tabla/tabla";
@Component({
  selector: 'app-lista-resultados',
  standalone: true,
  imports: [TabsModule, Tabla],
  templateUrl: './lista-resultados.html',
  styleUrl: './lista-resultados.css',
})
export class ListaResultados {
  ahorcado = signal<any[]>([]);
  mayormenor = signal<any[]>([]);
  preguntados = signal<any[]>([]);
  wordle = signal<any[]>([]);


  constructor(private sb: Supabase){}

  async ngOnInit(): Promise<void>{
    this.ahorcado.set(await this.sb.obtenerPuntajesPorJuego('ahorcado') ?? [])
    this.mayormenor.set(await this.sb.obtenerPuntajesPorJuego('mayormenor') ?? [])
    this.preguntados.set(await this.sb.obtenerPuntajesPorJuego('preguntados') ?? [])
    this.wordle.set(await this.sb.obtenerPuntajesPorJuego('wordle') ?? [])
  }

}

