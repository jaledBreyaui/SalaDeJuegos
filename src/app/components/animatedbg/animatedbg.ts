import { Component, OnInit, signal } from '@angular/core';
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
  nombre = signal('');

  constructor(public sb: Supabase) {}

  async ngOnInit(): Promise<void> {
    await this.cargarNombreUsuario();
  }

  async cargarNombreUsuario(): Promise<void> {
    const usuario = await this.sb.obtenerUsuarioActual();
    this.nombre.set(usuario?.nombre ?? '');

    if (!usuario?.nombre) {
      console.error('No se pudo cargar el nombre del usuario para el home.', usuario);
    }
  }
}
