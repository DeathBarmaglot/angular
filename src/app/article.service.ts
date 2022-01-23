import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './Article';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl =environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getPosts(): Observable<Article[]>{
    return this.http.get<Article[]>(`${this.apiUrl}`);
  }

  public addPost(article:Article): Observable<Article>{
    return this.http.post<Article>(`${this.apiUrl}`, article);
  }

  public update(article:Article): Observable<Article>{
    return this.http.put<Article>(`${this.apiUrl}`, article);
  }

  public delete(articleId:number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${articleId}`);
  }

}
