import { Component,inject, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { routes } from '../../app.routes';
import { CommonModule } from '@angular/common';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { GetpostService } from '../features/getpost.service';


export interface ArticlePost {
  title: string;
  content: string;
  author: string;
}

@Component({
  selector: 'app-home',
  template: `
  <div *ngFor="let article of articles">
    <h3>{{ article.title }}</h3>
    <p>{{ article.content }}</p>
    <span>Author: {{ article.author }}</span>
  </div>
`,
  standalone: true,
  imports: [routes,RouterOutlet,RouterLink,RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  private firestore: Firestore = inject(Firestore); // inject Cloud Firestore
  article$: Observable<ArticlePost[]>;
  articles: any[] = [];

  constructor(public getIt:GetpostService) {
      // get a reference to the user-profile collection
      const PostProperties = collection(this.firestore, 'article');

      // get documents (data) from the collection using collectionData
      this.article$ = collectionData(PostProperties) as Observable<ArticlePost[]>;
  }

  ngOnInit() {
    this.getArticles();
  }

  async getArticles() {
    this.articles = await this.getIt.getData();
  }
}

