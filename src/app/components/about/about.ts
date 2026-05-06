import { Component, signal } from '@angular/core';
import { GithubApi } from '../../services/github/github-api';
import { GithubUser } from '../../interfaces/github-user';
import { Spinner } from '../spinner/spinner';

@Component({
  selector: 'app-about',
  imports: [Spinner],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  usuario = signal<GithubUser | null>(null);

  constructor(private githubApi: GithubApi) { }
  ngOnInit() {
    this.githubApi.getUserInfo('jaledBreyaui').subscribe((data: GithubUser) => {
      this.usuario.set(data);
    });
  }
}
