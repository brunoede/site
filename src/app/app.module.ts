import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { OrientacoesComponent } from './pages/orientacoes/orientacoes.component';
import { AppRoutingModule } from './app-routing.module';
import { ProgramacaoComponent } from './pages/programacao/programacao.component';
import { environment } from './../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    OrientacoesComponent,
        ProgramacaoComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
