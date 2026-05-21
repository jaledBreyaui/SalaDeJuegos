import { Component, signal } from '@angular/core';
import { GithubApi } from '../../services/github/github-api';
import { GithubUser } from '../../interfaces/github-user';
import { Spinner } from '../spinner/spinner';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [Spinner],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  usuario = signal<GithubUser | null>(null);
  cargando = signal(true);
  errorCarga = signal(false);

  constructor(private githubApi: GithubApi) { }
  ngOnInit() {
    this.githubApi.getUserInfo('jaledBreyaui').subscribe({
      next: (data: GithubUser) => {
        this.usuario.set(data);
        this.cargando.set(false);
      },
      error: () => {
        this.errorCarga.set(true);
        this.cargando.set(false);
      },
    });
  }
}
