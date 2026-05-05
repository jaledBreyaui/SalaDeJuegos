import { Component } from '@angular/core';
import { Login } from '../login/login';
import { About } from '../about/about';
import { Animatedbg } from '../animatedbg/animatedbg';

@Component({
  selector: 'app-home',
  imports: [Animatedbg, About ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home { }
