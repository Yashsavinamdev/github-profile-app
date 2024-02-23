import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GithubAPIRes } from 'src/app/interfaces/gitHubApiRes';
import { ReposList } from 'src/app/interfaces/reposList.model';

@Injectable({
  providedIn: 'root',
})
export class GithubAppService {
  token = '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';
  constructor(private httpClient: HttpClient) {}

  getUser(username: string) {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this.httpClient.get<GithubAPIRes>(
      'https://api.github.com/users/' + username
      // { headers: headers }
    );
  }

  getUserRepositories(username: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this.httpClient.get<ReposList[]>(
      `https://api.github.com/users/${username}/repos`
      // { headers: headers }
    );
  }
}
