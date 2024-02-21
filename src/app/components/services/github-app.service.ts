import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubAppService {
  constructor(private httpClient: HttpClient) {}

  getUser(username: string): Observable<any> {
    return this.httpClient.get(
      'https://api.github.com/users/' + 'Yashsavinamdev'
    );
  }

  getUserRepositories(username: string): Observable<any> {
    return this.httpClient.get(
      `https://api.github.com/users/${username}/repos`
    );
  }
}
