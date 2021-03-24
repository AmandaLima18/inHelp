import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroProfissionaisPage } from './cadastro-profissionais.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroProfissionaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroProfissionaisPageRoutingModule {}
