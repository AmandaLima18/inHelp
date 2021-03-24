import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroProfissionaisPageRoutingModule } from './cadastro-profissionais-routing.module';

import { CadastroProfissionaisPage } from './cadastro-profissionais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroProfissionaisPageRoutingModule
  ],
  declarations: [CadastroProfissionaisPage]
})
export class CadastroProfissionaisPageModule {}
