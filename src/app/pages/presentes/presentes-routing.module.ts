import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentesComponent } from './presentes.component';

const routes: Routes = [
  { path: '', component: PresentesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentesRoutingModule { }
