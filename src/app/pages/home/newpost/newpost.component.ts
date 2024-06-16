import { Component,inject, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { routes } from '../../../app.routes';
import { CommonModule } from '@angular/common';
import { Firestore, collection, collectionData, Timestamp } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { NewPostService } from '../../features/new-post.service';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';

import { LatestComponent } from '../latest/latest.component';



@Component({
  selector: 'app-newpost',
  standalone: true,
  imports: [routes,RouterOutlet,RouterLink,RouterModule, CommonModule, FormsModule, ReactiveFormsModule,
  NewpostComponent, LatestComponent],
  templateUrl: './newpost.component.html',
  styleUrl: './newpost.component.scss'
})
export class NewpostComponent {
  //Ito yun sa forms
      insertTitle = new FormControl('');
      addContent = new FormControl('');

  constructor(public NewPost:NewPostService) {
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
