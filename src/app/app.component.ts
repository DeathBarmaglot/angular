import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Article } from './Article';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  public articles: Article[] = [];

  constructor(private atricleService: ArticleService) {}
  ngOnInit(): void {
    this.getPosts();
  }

  public onOpenModal(article: Article, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if(mode === 'add'){
      button.setAttribute('data-target', '#addArticleModal');
    }
    if(mode === 'edit'){
      button.setAttribute('data-target', '#updateArticleModal');
    }
    if(mode === 'delete'){
      button.setAttribute('data-target', '#deleteArticleModal');
    }
    container?.appendChild(button);
    button.click();

  }

  public getPosts(): void {
    this.atricleService.getPosts().subscribe(
      (response: Article[]) => {
        this.articles = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
