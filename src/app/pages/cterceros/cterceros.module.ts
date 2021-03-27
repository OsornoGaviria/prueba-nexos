import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CtercerosPageRoutingModule } from './cterceros-routing.module';

import { CtercerosPage } from './cterceros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CtercerosPageRoutingModule
  ],
  declarations: [CtercerosPage]
})
export class CtercerosPageModule {}
