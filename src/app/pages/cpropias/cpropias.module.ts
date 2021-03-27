import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CpropiasPageRoutingModule } from './cpropias-routing.module';

import { CpropiasPage } from './cpropias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CpropiasPageRoutingModule
  ],
  declarations: [CpropiasPage]
})
export class CpropiasPageModule {}
