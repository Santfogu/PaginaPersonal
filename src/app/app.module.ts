import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienciaModule } from './Experiencia/Experiencia.module';
import { InfoPersonalModule } from './InfoPersonal/InfoPersonal.module';
import { ProyectosPreviosModule } from './ProyectosPrevios/ProyectosPrevios.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfoPersonalModule,
    ExperienciaModule,
    ProyectosPreviosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
