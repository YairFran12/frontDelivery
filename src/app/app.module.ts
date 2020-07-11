import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FixedBottomComponent } from './components/fixed-bottom/fixed-bottom.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FixedBottomComponent,
    PerfilComponent,
    CuentaComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDsRmKCDfE8H-_7DTkivgWASO7uRYTgJJ0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
