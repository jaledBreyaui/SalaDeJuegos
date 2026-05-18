import { Component, signal, OnInit } from '@angular/core';
import { NgxRetroGridComponent } from '@omnedia/ngx-retro-grid';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { Login } from '../login/login';
import { RouterLink } from '@angular/router';
import { Supabase } from '../../services/supabase/supabase';
import { AccesoJuego } from '../acceso-juego/acceso-juego';

@Component({
  selector: 'app-animatedbg',
  imports: [NgxRetroGridComponent, ButtonModule, ToastModule, Login, RouterLink, AccesoJuego],
  templateUrl: './animatedbg.html',
  styleUrl: './animatedbg.css',
  standalone: true,
})
export class Animatedbg implements OnInit {
  nombre = signal<string>('');
  nombreGuardado = sessionStorage.getItem('nombreJugador');
  constructor(public sb: Supabase) {}

  ngOnInit() {
    if (this.nombreGuardado) {
      this.nombre.set(this.nombreGuardado);
    } else {
      this.obtenerNombreUsuario();
      sessionStorage.setItem('nombreJugador', this.nombre());
    }
  }

  async obtenerNombreUsuario(): Promise<void> {
    const data = await this.sb.obtenerUsuarioPorMail(this.sb.dataUsuario?.email || '');
    if (data) {
      this.nombre.set(data?.nombre || '');
    }
  }
}
