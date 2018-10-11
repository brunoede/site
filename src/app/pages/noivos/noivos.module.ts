import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoivosRoutingModule } from './noivos-routing.module';
import { NoivosComponent } from './noivos.component';
import { GoogleDriveServiceModule } from '../../shared/services/google-drive/google-drive-service.module';
import { MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    NoivosRoutingModule,
    GoogleDriveServiceModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
  declarations: [NoivosComponent]
})
export class NoivosModule { }
