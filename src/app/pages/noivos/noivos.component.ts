import { Component, OnInit } from '@angular/core';
import { GoogleDriveService } from '../../shared/services/google-drive/google-drive.service';

const publicFolderUrl = '1UHLb32NZLexziSv2q6OC4e6X14Mqb-a7';

@Component({
  selector: 'app-noivos',
  templateUrl: './noivos.component.html',
  styleUrls: ['./noivos.component.scss']
})
export class NoivosComponent implements OnInit {


  showing: string;

  images: any[] = [];

  carouselConf = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    slide: 1,
    speed: 400,
    interval: 4000,
    point: {
      visible: true
    },
    load: 2,
    touch: true,
    loop: true,
    custom: 'banner'
  };

  private _images;

  constructor(
    private drive: GoogleDriveService
  ) { }

  ngOnInit() {

    this.drive.listFolder(publicFolderUrl)
    .subscribe((res: any) => {
      this._images = res;
      this.extractImages();
    });

  }

  showContent(container) {

    if (this.showing === container) {

      this.showing = undefined;

    } else {

      this.showing = container;

    }

  }

  private extractImages() {
    this.images = this._images.map((image, index) => {
      const url = `https://drive.google.com/thumbnail?id=${image.id}&sz=w600`;
      const thumbUrl = `https://drive.google.com/thumbnail?id=${image.id}&sz=w100`;
      const title = `Imagem ${index + 1}`;
      return {
        url,
        thumbUrl,
        title: title,
        alt: title,
        ariaLabel: `${title} aria-label`
      };
    });
  }
}
