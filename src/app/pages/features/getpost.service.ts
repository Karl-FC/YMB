import { Injectable } from '@angular/core';
import { collection, doc, getDocs, addDoc, Timestamp } from "@angular/fire/firestore" //Initialize muna ng firestore
import { getFirestore } from "@angular/fire/firestore"  //@angular/fire dapat
import { Firestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class GetpostService {
  private db: Firestore; //Ganto pagimport ng Firestore database
  constructor() { 
    this.db = getFirestore() //Yun mismong database ng firestore
  }

  async getData(){
    // Kukunin yun mga documents sa collection na "article"
    const PostCollections = "article"
    const ArticleReference = collection(this.db, PostCollections);
    const LoopNaGetDoc = await getDocs(ArticleReference); //Pang
    const Posts: any[] = [];

    LoopNaGetDoc.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      Posts.push(doc.data());    
      
      
    });
    return Posts;
  }
  
}
