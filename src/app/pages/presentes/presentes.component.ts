import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable, pipe, of } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Gift {
  cores: string;
  marcas: string;
  nome: string;
  quantidade: number;
}

@Component({
  selector: 'app-presentes',
  templateUrl: './presentes.component.html',
  styleUrls: ['./presentes.component.scss']
})
export class PresentesComponent implements OnInit {

  gifts: Observable<any>;

  private giftsCollectionConnection: AngularFirestoreCollection<any>;

  private giftsCollectionSnapshotStream: Observable<DocumentChangeAction<any>[]>;

  constructor(
    private db: AngularFirestore,
  ) { }

  ngOnInit() {

    this.giftsCollectionConnection = this.db.collection<Gift>('presentes', ref => {
      return ref.orderBy('nome');
    });

    /*     this.giftsCollectionConnection.snapshotChanges().subscribe(res => {
          console.log('snapshotChanges', res);

          res.forEach(item => {
            console.log('document change action', item.payload.doc.data());
          });
        }); */

    this.giftsCollectionSnapshotStream = this.giftsCollectionConnection.snapshotChanges();

    this.gifts = this.giftsCollectionSnapshotStream.pipe(
      map(collection => {
        return collection.map(item => {
          const giftStream = {
            id: item.payload.doc.id,
            stream: item,
            data: item.payload.doc.data()
          };
          return giftStream;
        });
      })
    );
  }

  reward(gift) {

    const item: Gift = gift.data;

    item.quantidade = 3;

    this.giftsCollectionConnection.doc(gift.id).update(item)
      .then(updated => {
        console.log('updated', updated);
      });

  }

}
