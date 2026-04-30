import { Component } from '@angular/core';
import { GithubApi } from '../../services/github-api';
import { GithubUser } from '../../interfaces/github-user';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  usuario: GithubUser | null = null;
  constructor(private githubApi: GithubApi) { }
  ngOnInit() {
    this.githubApi.getUserInfo('jaledBreyaui').subscribe((data: GithubUser) => {
      console.log(data.name);
      this.usuario = data;
    });
  }
}
