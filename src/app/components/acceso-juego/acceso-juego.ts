import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Supabase } from '../../services/supabase/supabase';

@Component({
  selector: 'app-acceso-juego',
  templateUrl: './acceso-juego.html',
  styleUrl: './acceso-juego.css',
  standalone: true
})
export class AccesoJuego {
  @Input({ required: true }) ruta = '';
  @Input({ required: true }) imagen = '';

  constructor(
    private router: Router,
    private messageService: MessageService,
    public sb: Supabase
  ) {}

  acceder(): void {
    if (!this.sb.usuarioLogueado()) {
      this.messageService.add({
        severity: 'error',
        summary: 'Acceso denegado',
        detail: 'Inicia sesion para jugar'
      });
      return;
    }

    this.router.navigateByUrl(this.ruta);
  }
}
