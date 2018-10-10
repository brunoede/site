import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Gift {
  cores: string;
  marcas: string;
  nome: string;
}

@Component({
  selector: 'app-presentes',
  templateUrl: './presentes.component.html',
  styleUrls: ['./presentes.component.scss']
})
export class PresentesComponent implements OnInit {

  gifts: Observable<Gift[]>;

  private giftsCollection: AngularFirestoreCollection<Gift>;

  constructor(
    private db: AngularFirestore
  ) { }

  ngOnInit() {

    this.giftsCollection = this.db.collection<Gift>('presentes', ref => {
      return ref.orderBy('nome');
    });

    this.gifts = this.giftsCollection.valueChanges();

  }

}
