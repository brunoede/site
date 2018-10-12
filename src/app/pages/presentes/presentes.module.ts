import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { PresentesRoutingModule } from './presentes-routing.module';
import { PresentesComponent } from './presentes.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    PresentesRoutingModule,
    AngularFirestoreModule,
    MatButtonModule,
  ],
  declarations: [PresentesComponent]
})
export class PresentesModule { }
