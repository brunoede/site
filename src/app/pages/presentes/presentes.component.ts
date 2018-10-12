import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog, MatSnackBar } from '@angular/material';
import { FormularioPresenteComponent } from './formulario-presente/formulario-presente.component';
import { Gift, GiftStream } from './gifts.model';

@Component({
  selector: 'app-presentes',
  templateUrl: './presentes.component.html',
  styleUrls: ['./presentes.component.scss']
})
export class PresentesComponent implements OnInit {

  gifts: Observable<GiftStream[]>;

  private giftsCollectionConnection: AngularFirestoreCollection<Gift>;

  private giftsCollectionSnapshotStream: Observable<DocumentChangeAction<Gift>[]>;

  constructor(
    private db: AngularFirestore,
    private dialog: MatDialog,
    private snack: MatSnackBar,
  ) { }

  ngOnInit() {

    this.giftsCollectionConnection = this.db.collection<Gift>('presentes', ref => {
      return ref.orderBy('nome');
    });

    this.giftsCollectionSnapshotStream = this.giftsCollectionConnection.snapshotChanges();

    this.gifts = this.giftsCollectionSnapshotStream.pipe(
      map(collection => {
        return collection.map(item => {
          const giftStream: GiftStream = {
            id: item.payload.doc.id,
            stream: item,
            data: new Gift(item.payload.doc.data())
          };
          return giftStream;
        });
      })
    );

  }

  openRewardForm(giftStream) {
    const dialogRef = this.dialog.open(FormularioPresenteComponent);
    dialogRef.componentInstance.giftStream = giftStream;
    dialogRef.afterClosed().subscribe(giver => {
      if (giver) {
        giftStream.data.givenBy = giftStream.data.givenBy ? [...giftStream.data.givenBy, giver] : [giver];
        this.reward(giftStream);
      }
    });
  }

  private reward(giftStream) {
    const item: any = { ...giftStream.data };
    this.giftsCollectionConnection.doc(giftStream.id).update(item)
      .then(updated => {
        this.snack.open('Presenteado. Muito obrigado!!!', undefined, {
          panelClass: 'bg-success',
          duration: 3e3
        });
      });
  }

}
