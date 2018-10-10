import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { PresentesRoutingModule } from './presentes-routing.module';
import { PresentesComponent } from './presentes.component';

@NgModule({
  imports: [
    CommonModule,
    PresentesRoutingModule,
    AngularFirestoreModule,
  ],
  declarations: [PresentesComponent]
})
export class PresentesModule { }
