import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranferenciasPageRoutingModule } from './tranferencias-routing.module';

import { TranferenciasPage } from './tranferencias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranferenciasPageRoutingModule
  ],
  declarations: [TranferenciasPage]
})
export class TranferenciasPageModule {}
