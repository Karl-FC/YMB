import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { Observable } from 'rxjs';

import { Analytics } from '@angular/fire/analytics';
import { Auth } from '@angular/fire/auth';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { HomeComponent } from './pages/home/landingpage/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule,FormsModule,
    NavbarComponent,FooterComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private analytics = inject(Analytics);
  private auth = inject(Auth);
  private firestore = inject(Firestore);
  article$: Observable<any[]>;
  title = 'YMB';

  constructor() {
    const PostProperties = collection(this.firestore, 'article')
    this.article$ = collectionData(PostProperties);
  }

}
