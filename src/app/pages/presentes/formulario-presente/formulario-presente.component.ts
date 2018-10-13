import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FirestoreCollectionItemStream } from './../../../shared/models/firestore.models';

@Component({
  selector: 'app-formulario-presente',
  templateUrl: './formulario-presente.component.html',
  styleUrls: ['./formulario-presente.component.scss']
})
export class FormularioPresenteComponent {

  giftStream: FirestoreCollectionItemStream;

  nome;

  constructor(
    private dialogRef: MatDialogRef<FormularioPresenteComponent>
  ) { }

  onSubmit() {
    this.dialogRef.close(this.nome);
  }

}
