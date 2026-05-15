import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-pantallafindejuego',
  imports: [NgClass, ButtonModule],
  templateUrl: './pantallafindejuego.html',
  styleUrl: './pantallafindejuego.css',
})
export class Pantallafindejuego {
  @Input() puntaje: number = 0;
  @Input() victoria: boolean = false;
  @Input() reiniciar!: () => void;
  @Input() abandonar!: () => void;

}
