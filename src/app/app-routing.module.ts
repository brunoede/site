import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { LocalComponent } from './pages/local/local.component';
import { ProgramacaoComponent } from './pages/programacao/programacao.component';
import { OrientacoesComponent } from './pages/orientacoes/orientacoes.component';
import { PresentesComponent } from './pages/presentes/presentes.component';

const AppRoutes = [
  { path: '', redirectTo: '/localedata', pathMatch: 'full' },
  { path: 'noivos', loadChildren: './pages/noivos/noivos.module#NoivosModule' },
  { path: 'programacao', component: ProgramacaoComponent },
  { path: 'orientacoes', component: OrientacoesComponent },
  { path: 'localedata', loadChildren: './pages/local/local.module#LocalModule' },
  { path: 'presentes', loadChildren: './pages/presentes/presentes.module#PresentesModule' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
