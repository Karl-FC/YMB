import { Component,inject, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { routes } from '../../app.routes';
import { CommonModule } from '@angular/common';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { GetpostService } from '../features/getpost.service';
import { NewPostService } from '../features/new-post.service';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

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
  imports: [routes,RouterOutlet,RouterLink,RouterModule, CommonModule, FormsModule, ReactiveFormsModule,
    MatCardModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})



export class HomeComponent {
  private firestore: Firestore = inject(Firestore); // inject Cloud Firestore
  article$: Observable<ArticlePost[]>;
  articles: any[] = [];
    //Ito yun sa forms
      insertTitle = new FormControl('');
      addContent = new FormControl('');

  constructor(public getIt:GetpostService, public NewPost:NewPostService) {
      // get a reference to the user-profile collection
      const PostProperties = collection(this.firestore, 'article');

      // get documents (data) from the collection using collectionData
      this.article$ = collectionData(PostProperties) as Observable<ArticlePost[]>;
  }

  ngOnInit() {
    this.getArticles(10); //Sa pag open mismo ng page, dapat may makikita ang user na 10 articles
  }

  reLoad(event: Event) {
    event.preventDefault();
    location.reload();
  }

  async getArticles(ilanNga: number) {
    this.articles = await this.getIt.getData(ilanNga);
  }

  async postArticle(){
    let Title = this.insertTitle.value
    let Content = this.addContent.value
    let Author = "YMB"

    if (Title !== null && Content !== null) { //Para di magreklamo na null daw hanep
    this.NewPost.AddData(Title, Content, Author);
    }
  }
}

