import { Component } from '@angular/core';
import { NgxRetroGridComponent } from '@omnedia/ngx-retro-grid';
import { ButtonModule } from 'primeng/button';
import { Login } from '../login/login';
import { RouterLink } from "@angular/router";
import { Supabase } from '../../services/supabase/supabase';
import { AccesoJuego } from '../acceso-juego/acceso-juego';
import { Toast } from '../toast/toast';

@Component({
  selector: 'app-animatedbg',
  imports: [NgxRetroGridComponent, ButtonModule, Login, RouterLink, AccesoJuego, Toast],
  templateUrl: './animatedbg.html',
  styleUrl: './animatedbg.css',
  standalone: true
})
export class Animatedbg {
  constructor(public sb: Supabase) { }

}
