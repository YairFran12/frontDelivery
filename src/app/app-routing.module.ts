import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { MapaComponent } from './components/mapa/mapa.component';


const routes: Routes = [
  { path: 'perfil', component: PerfilComponent },
  { path: 'cuenta', component: CuentaComponent },
  { path: 'mapa', component: MapaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
