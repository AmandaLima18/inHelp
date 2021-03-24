import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BairroPage } from './bairro.page';

const routes: Routes = [
  {
    path: '',
    component: BairroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BairroPageRoutingModule {}
