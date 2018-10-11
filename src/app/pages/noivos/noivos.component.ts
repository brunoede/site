import { Component, OnInit } from '@angular/core';
import { GoogleDriveService } from '../../shared/services/google-drive/google-drive.service';

const publicFolderUrl = '1UHLb32NZLexziSv2q6OC4e6X14Mqb-a7';

@Component({
  selector: 'app-noivos',
  templateUrl: './noivos.component.html',
  styleUrls: ['./noivos.component.scss']
})
export class NoivosComponent implements OnInit {

  images;

  showing: string;

  constructor(
    private drive: GoogleDriveService
  ) { }

  ngOnInit() {

    this.drive.listFolder(publicFolderUrl)
    .subscribe((res: any) => {
      this.images = res;
    });

  }

  showContent(container) {

    if (this.showing === container) {

      this.showing = undefined;

    } else {

      this.showing = container;

    }

  }
}
