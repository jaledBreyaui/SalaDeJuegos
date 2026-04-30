import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GithubUser } from '../interfaces/github-user';

@Injectable({
  providedIn: 'root',
})
export class GithubApi {
  url = 'https://api.github.com/users/';

  constructor(private http: HttpClient) { }

  getUserInfo(username: string): Observable<GithubUser> {
    return this.http.get<GithubUser>(this.url + username);
  }

}
