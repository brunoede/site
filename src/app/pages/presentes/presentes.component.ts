import { Component, OnInit } from '@angular/core';
import { PRESENTES } from './presentes';

@Component({
  selector: 'app-presentes',
  templateUrl: './presentes.component.html',
  styleUrls: ['./presentes.component.css']
})
export class PresentesComponent implements OnInit {

  presentes = PRESENTES;

  constructor() { }

  ngOnInit() {
  }

}
