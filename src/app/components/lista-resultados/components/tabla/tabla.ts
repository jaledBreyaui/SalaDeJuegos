import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [TableModule, NgClass],
  templateUrl: './tabla.html',
  styleUrl: './tabla.css',
})
export class Tabla {
  @Input() juego = '';
  @Input() resultado: any[] = [];
}
