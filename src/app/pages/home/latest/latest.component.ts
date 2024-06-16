import { Component,inject, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { Firestore, collection, collectionData, Timestamp } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { GetpostService } from '../../features/getpost.service';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

export interface ArticlePost {
  title: string;
  content: string;
  author: string;
  time: Timestamp;  
  image: string;
}

@Component({
  selector: 'app-latest',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterModule, CommonModule,
    MatCardModule, MatButtonModule, NgIf],
  templateUrl: './latest.component.html',
  styleUrl: './latest.component.scss'
})


export class LatestComponent {
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
    this.getArticles(20); //Sa pag open mismo ng page, dapat may makikita ang user na 10 articles
  }

  reLoad(event: Event) {
    event.preventDefault();
    location.reload();
  }

  async getArticles(ilanNga: number) {
    this.articles = await this.getIt.getData(ilanNga);
  }

  convertTime(origTime: Timestamp): string {
    const date = origTime.toDate(); //Para yun format, maging MM/DD/YYYY
    const year = date.getFullYear(); //Kunin yun year
    const month = date.toLocaleString('en-US', { month: 'long' }); //Kunin yun month, in word format
    const day = date.getDate(); //Kunin yun day (1-31)
    const HH = date.getUTCHours(); //Kunin yun oras (military time)
    const MM = date.getUTCMinutes();

    return `${month} ${day}, ${year} at ${HH}:${MM}`;
  }
  

}
