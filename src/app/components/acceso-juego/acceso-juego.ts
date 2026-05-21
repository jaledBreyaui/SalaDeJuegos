import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceso-juego',
  templateUrl: './acceso-juego.html',
  styleUrl: './acceso-juego.css',
  standalone: true
})
export class AccesoJuego {
  @Input({ required: true }) ruta = '';
  @Input({ required: true }) imagen = '';
  @Input({ required: true }) titulo = '';
  @Input({ required: true }) descripcion = '';

  constructor(private router: Router) {}

  acceder(): void {
    this.router.navigateByUrl(this.ruta);
  }
}
