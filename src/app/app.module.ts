import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ComidaEscolhidaComponent } from './comida-escolhida/comida-escolhida.component';


@NgModule({
  declarations: [
    AppComponent,
    ComidaEscolhidaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
