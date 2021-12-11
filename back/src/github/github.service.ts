import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common';
import { map, switchMap, Observable, delay, concat, of, toArray, mergeMap } from 'rxjs';

@Injectable()
export class GithubService {
  constructor(private http: HttpService) {}
    getRepos(): Observable<any> {
      return this.http.get('https://api.github.com/users/timur-khakhalev/repos', { headers: { 'Authorization': `token ${process.env.GITHUB_TOKEN}`}})
      .pipe(
      switchMap((res: any) => {
          if (res.length > 0) {
            return of([])
          } else {
            return concat(...res.data.sort((a, b) => {
              if (a.updated_at > b.updated_at) return -1
              if (a.updated_at < b.updated_at) return 1
              return 0
            }).map(res => {
              return of(null).pipe(delay(1000), mergeMap(() => {
                return this.getCommits(res)
            }))
            }
            )).pipe(toArray())
          }
      })
      )}

  getCommits(result: {commits_url: string}): Observable<any> {
    const link = result.commits_url.replace(/{\/sha}/, '')
    return this.http.get(link)
    .pipe(map((res) => {
      return [res.data.length, result]
    }))
  }
}
