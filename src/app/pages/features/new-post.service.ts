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

  async AddData(insertTitle:string, 
    addContent:string, 
    Author:string ){

    const db = this.db;
    const PostCollections = "article"
    

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, PostCollections), {
    title: insertTitle,
    content: addContent,
    author: Author,
    time: Timestamp.now(),
  });
  
console.log("Document written with ID: ", docRef.id); //Pangcheck lang ng post ID hahaha
  }


}
