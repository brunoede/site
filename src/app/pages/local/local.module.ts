import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { LocalRoutingModule } from './local-routing.module';
import { LocalComponent } from './local.component';
import { MatButtonModule } from '@angular/material';
import { GoogleDriveServiceModule } from '../../shared/services/google-drive/google-drive-service.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NguCarouselModule } from '@ngu/carousel';

@NgModule({
  imports: [
    CommonModule,
    LocalRoutingModule,
    AngularFirestoreModule,
    MatButtonModule,
    GoogleDriveServiceModule,
    FlexLayoutModule,
    NguCarouselModule,
  ],
  declarations: [
    LocalComponent
  ]
})
export class LocalModule { }
