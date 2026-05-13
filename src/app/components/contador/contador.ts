import { Component, Input, Signal, signal } from '@angular/core';
import { NgxNumberTickerComponent } from '@omnedia/ngx-number-ticker';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [NgxNumberTickerComponent],
  templateUrl: './contador.html',
  styleUrl: './contador.css',
})
export class Contador {
  @Input() puntaje: Signal<number> = signal(0);
}
