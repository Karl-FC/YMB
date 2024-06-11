import { Injectable } from '@angular/core';
import { getFirestore } from '@angular/fire/firestore'
import { Firestore } from 'firebase/firestore';
import { collection, doc, setDoc, addDoc, Timestamp }  from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class NewPostService {
  private db: Firestore; 
  constructor() { 
    this.db = getFirestore()
  }

  async AddData(){
    const db = this.db;
    const PostCollections = "article"
    const Posts: any[] = [];

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, PostCollections), {
    title: "Bagong title",
    content: "new content",
    author: "Anon"
  });
  
console.log("Document written with ID: ", docRef.id);
  }
}
