import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresencaRoutingModule } from './presenca-routing.module';
import { PresencaComponent } from './presenca.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatButtonModule, MatInputModule, MatSnackBarModule, MatRadioModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PresencaRoutingModule,
    AngularFirestoreModule,
    MatSnackBarModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
  ],
  declarations: [PresencaComponent]
})
export class PresencaModule { }
