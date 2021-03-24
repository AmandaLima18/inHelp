import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BairroPageRoutingModule } from './bairro-routing.module';

import { BairroPage } from './bairro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BairroPageRoutingModule
  ],
  declarations: [BairroPage]
})
export class BairroPageModule {}
