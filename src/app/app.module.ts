import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiedraSinglePlayerComponent } from './piedra-single-player/piedra-single-player.component';

import {enableProdMode} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BuscaminasComponent } from './buscaminas/buscaminas.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    PiedraSinglePlayerComponent,
    BuscaminasComponent,
    AhorcadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
