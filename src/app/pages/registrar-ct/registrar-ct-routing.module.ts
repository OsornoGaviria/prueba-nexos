import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarCtPage } from './registrar-ct.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarCtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarCtPageRoutingModule {}
