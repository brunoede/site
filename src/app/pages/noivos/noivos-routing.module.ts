import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoivosComponent } from './noivos.component';

const routes: Routes = [
  { path: '', component: NoivosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoivosRoutingModule { }
