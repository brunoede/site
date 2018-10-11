import { Component, OnInit } from '@angular/core';
import { GoogleDriveService } from '../../shared/services/google-drive/google-drive.service';

const publicFolderUrl = '1LhHxFrl7yxgU9OlpdIUB1gL2V2kAjHpD';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent implements OnInit {

  showing: string;

  images;

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
