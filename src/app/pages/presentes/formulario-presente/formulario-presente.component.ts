import { Component } from '@angular/core';
import { GiftStream } from './../gifts.model';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-formulario-presente',
  templateUrl: './formulario-presente.component.html',
  styleUrls: ['./formulario-presente.component.scss']
})
export class FormularioPresenteComponent {

  giftStream: GiftStream;

  nome;

  constructor(
    private dialogRef: MatDialogRef<FormularioPresenteComponent>
  ) { }

  onSubmit() {
    this.dialogRef.close(this.nome);
  }

}
