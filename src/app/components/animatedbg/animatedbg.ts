import { Component, OnInit, computed } from '@angular/core';
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
  nombre = computed(() => this.sb.nombreUsuario());
  constructor(public sb: Supabase) {}

  async ngOnInit(): Promise<void> {
    await this.sb.obtenerUsuarioActual();
  }
}
