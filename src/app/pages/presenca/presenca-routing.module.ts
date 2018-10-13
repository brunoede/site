import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresencaComponent } from './presenca.component';

const routes: Routes = [
  { path: '', component: PresencaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresencaRoutingModule { }
