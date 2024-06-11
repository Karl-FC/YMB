import { Injectable } from '@angular/core';//Initialize muna ng firestore
import { getFirestore } from "@angular/fire/firestore"  //@angular/fire dapat
import { Firestore } from 'firebase/firestore';

import { collection, getDocs } from "@angular/fire/firestore" //Function para mag get ng docs
import { query, orderBy,limit } from '@angular/fire/firestore';  
//Query = para maramihan
//Limit para may limit kung ilang docs ifefetch
//orderBy para may order
//Goal is magfefetch siya ng latest five posts

@Injectable({
  providedIn: 'root'
})
export class GetpostService {
  private db: Firestore; //Ganto pagimport ng Firestore database
  constructor() { 
    this.db = getFirestore() //Yun mismong database ng firestore
  }

  async getData(ilanBa: number){
    // Kukunin yun mga documents sa collection na "article"
    const PostCollections = "article"
    const ArticleReference = collection(this.db, PostCollections);
    const QueryLinya = query(ArticleReference, orderBy("time", "desc"), limit(ilanBa))
    const querySnapshot  = await getDocs(QueryLinya); //Para magloop na maraming documents
    const Posts: any[] = [];  

    querySnapshot .forEach((doc) => {
      //console.log(doc.id, " => ", doc.data()); //Pangcheck lang ng array at contents hahaha
      Posts.push(doc.data());    
      
      
    });
    return Posts;
  }
  
}
