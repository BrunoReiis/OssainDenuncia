import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListarDenunciaComponent } from './pages/listar-denuncia/listar-denuncia.component';
import { RegistroDenunciaComponent } from './pages/registro-denuncia/registro-denuncia.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'registroDenuncia',
    component: RegistroDenunciaComponent
  },
  {
    path: 'listarDenuncias',
    component: ListarDenunciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
