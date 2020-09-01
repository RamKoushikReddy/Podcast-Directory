import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { podcast } from './podcast';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  podcastcollection: AngularFirestoreCollection;
  podcast1: Observable<podcast[]>
  

  constructor(public afs: AngularFirestore) {
    this.podcast1 = this.afs.collection('podcast1').valueChanges();
  }
  
  getmethod() { 
    return this.podcast1;
  }
}
