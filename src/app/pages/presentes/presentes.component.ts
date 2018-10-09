import { Component, OnInit } from '@angular/core';
import { PRESENTES } from './presentes';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-presentes',
  templateUrl: './presentes.component.html',
  styleUrls: ['./presentes.component.css']
})
export class PresentesComponent implements OnInit {

  presentes = PRESENTES;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('https://brunoede-1.firebaseio.com/rest/presentes.json').subscribe(res => { });
  }

}
