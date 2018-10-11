import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleDriveService } from './google-drive.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    GoogleDriveService
  ]
})
export class GoogleDriveServiceModule { }
