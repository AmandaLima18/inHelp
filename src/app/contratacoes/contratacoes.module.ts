import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContratacoesPageRoutingModule } from './contratacoes-routing.module';

import { ContratacoesPage } from './contratacoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContratacoesPageRoutingModule
  ],
  declarations: [ContratacoesPage]
})
export class ContratacoesPageModule {}
