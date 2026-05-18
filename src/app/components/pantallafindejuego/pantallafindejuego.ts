import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-pantallafindejuego',
  standalone: true,
  imports: [NgClass, ButtonModule],
  templateUrl: './pantallafindejuego.html',
  styleUrl: './pantallafindejuego.css',
})
export class Pantallafindejuego {
  @Input() puntaje: number = 0;
  @Input() victoria: boolean = false;
  @Input() mensaje: string = '';
  @Input() juegoTerminado: boolean = false;
  @Input() reiniciar!: () => void;
  @Input() abandonar: () => void = () => {};
}
