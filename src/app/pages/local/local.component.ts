import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

const publicFolderUrl = '1LhHxFrl7yxgU9OlpdIUB1gL2V2kAjHpD';

const driveUrl = `https://www.googleapis.com/drive/v3/files?q='${publicFolderUrl}'+in+parents&key=${environment.googleDrive.key}`;

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  showMap;

  showing: string;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.http.get(driveUrl)
    .subscribe(res => {
      console.log('GOOGLE DRIVE RES', res);
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
