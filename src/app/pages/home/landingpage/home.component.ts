import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { routes } from '../../../app.routes';
import { CommonModule } from '@angular/common';

import { LatestComponent } from '../latest/latest.component';
import { NewpostComponent } from '../newpost/newpost.component';


@Component({
  selector: 'app-home',
 /* template: `
  <div *ngFor="let article of articles">
    <h3>{{ article.title }}</h3>
    <p>{{ article.content }}</p>
    <span>Author: {{ article.author }}</span>
  </div>
`,*/
  standalone: true,
  imports: [routes,RouterOutlet,RouterLink,RouterModule, CommonModule,
  NewpostComponent, LatestComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})



export class HomeComponent {
 
}

