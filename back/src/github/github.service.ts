import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class GithubService {
  constructor(private http: HttpService) {}

    getRepos(): Observable<any> {
      return this.http.get('https://api.github.com/users/timur-khakhalev/repos')
      .pipe(map((res) => {
          return res.data.sort((a, b) => {
              if (a.updated_at > b.updated_at) return -1
              if (a.updated_at < b.updated_at) return 1
              return 0
          })
      }))
  }
}
