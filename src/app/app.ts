import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { About } from './components/about/about';
import { Navbar } from './components/navbar/navbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, ConfirmDialogModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('tp_juegos');
  animarEntradaJuego = signal(false);
  animarEntradaComunidad = signal(false);

  constructor(private router: Router) {}

  activarRuta(): void {
    this.animarEntradaJuego.set(false);
    this.animarEntradaComunidad.set(false);

    if (this.router.url.startsWith('/juegos/')) {
      requestAnimationFrame(() => this.animarEntradaJuego.set(true));
      return;
    }

    if (this.router.url.startsWith('/comunidad/')) {
      requestAnimationFrame(() => this.animarEntradaComunidad.set(true));
    }
  }
}
