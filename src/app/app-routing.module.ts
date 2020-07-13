import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { HomeComponent } from './components/home/home.component';
import { OrdersComponent } from './components/orders/orders.component';


const routes: Routes = [
  { path: 'perfil', component: PerfilComponent },
  { path: 'cuenta', component: CuentaComponent },
  { path: 'home', component:   HomeComponent },
  { path: 'orden', component:   OrdersComponent },
  { path: 'mapa', component: MapaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
