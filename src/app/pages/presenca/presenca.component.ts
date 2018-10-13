import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Convidado } from './presenca.models';
import { FirestoreCollectionItemStream } from '../../shared/models/firestore.models';

@Component({
  selector: 'app-presenca',
  templateUrl: './presenca.component.html',
  styleUrls: ['./presenca.component.scss']
})
export class PresencaComponent implements OnInit {

  addNovoConvidado: boolean;

  nome: string;

  confirmacao = 'confirmada';

  convidados: Observable<any[]>;

  private convidadosCollectionConnection: AngularFirestoreCollection<any>;

  private convidadosCollectionSnapshotStream: Observable<DocumentChangeAction<any>[]>;

  ngOnInit() {

    this.convidadosCollectionConnection = this.db.collection<any>('convidados', ref => {
      return ref.orderBy('nome');
    });

    this.convidadosCollectionSnapshotStream = this.convidadosCollectionConnection.snapshotChanges();

    this.convidados = this.convidadosCollectionSnapshotStream.pipe(
      map(collection => {
        return collection.reverse().map(item => {
          const convidadoStream: FirestoreCollectionItemStream = {
            id: item.payload.doc.id,
            stream: item,
            data: new Convidado(item.payload.doc.data())
          };
          return convidadoStream;
        });
      })
    );

  }

  constructor(
    private db: AngularFirestore,
    private snack: MatSnackBar,
  ) { }

  onConfirm() {

    const convidado = {
      nome: this.nome,
      confirmacao: this.confirmacao,
    };

    console.log('convidado', convidado);

    this.convidadosCollectionConnection.add(convidado)
      .then(res => {

        this.snack.open(`${this.nome} confirmado!`, undefined, {
          panelClass: 'bg-success',
          duration: 3e3
        });

        this.addNovoConvidado = false;

        this.nome = undefined;

        this.confirmacao = 'confirmada';

      });
  }


}
