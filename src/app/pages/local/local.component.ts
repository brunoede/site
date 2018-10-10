import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  showMap;

  showing: string;

  constructor() { }

  ngOnInit() {
  }

  showContent(container) {

    if (this.showing === container) {

      this.showing = undefined;

    } else {

      this.showing = container;

    }

  }

}
