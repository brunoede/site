import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { PresentesRoutingModule } from './presentes-routing.module';
import { PresentesComponent } from './presentes.component';
import { MatButtonModule, MatDialogModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { FormularioPresenteComponent } from './formulario-presente/formulario-presente.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PresentesRoutingModule,
    AngularFirestoreModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
  ],
  declarations: [PresentesComponent, FormularioPresenteComponent],
  entryComponents: [FormularioPresenteComponent]
})
export class PresentesModule { }
