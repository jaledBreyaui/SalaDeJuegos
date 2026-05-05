import { Component } from '@angular/core';
import { NgxRetroGridComponent } from '@omnedia/ngx-retro-grid';
import { ButtonModule } from 'primeng/button';
import { Login } from '../login/login';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-animatedbg',
  imports: [NgxRetroGridComponent, ButtonModule, Login, RouterLink],
  templateUrl: './animatedbg.html',
  styleUrl: './animatedbg.css',
  standalone: true
})
export class Animatedbg {}
