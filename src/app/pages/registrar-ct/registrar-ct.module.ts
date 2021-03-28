import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarCtPageRoutingModule } from './registrar-ct-routing.module';

import { RegistrarCtPage } from './registrar-ct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarCtPageRoutingModule
  ],
  declarations: [RegistrarCtPage]
})
export class RegistrarCtPageModule {}
