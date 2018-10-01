import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LocalComponent } from './pages/local/local.component';
import { OrientacoesComponent } from './pages/orientacoes/orientacoes.component';
import { PresentesComponent } from './pages/presentes/presentes.component';
import { AppRoutingModule } from './app-routing.module';
import { ProgramacaoComponent } from './pages/programacao/programacao.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocalComponent,
    OrientacoesComponent,
    PresentesComponent,
    ProgramacaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
