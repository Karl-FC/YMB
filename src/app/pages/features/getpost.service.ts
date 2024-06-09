import { Injectable } from '@angular/core';
import { collection, doc, getDocs, addDoc, Timestamp } from "@angular/fire/firestore"
import { initializeApp } from "@angular/fire/app"
import { getFirestore } from "@angular/fire/firestore"
import { Firestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class GetpostService {
  private db: Firestore;
  constructor() { 
    this.db = getFirestore()
  }

  async getData(){
    // Add a new document with a generated id.
    const ArticleReference = collection(this.db, "article");
    const querySnapshot = await getDocs(ArticleReference);
    const Posts: any[] = [];

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      Posts.push(doc.data());    
      
      
    });
    return Posts;
  }
  
}
