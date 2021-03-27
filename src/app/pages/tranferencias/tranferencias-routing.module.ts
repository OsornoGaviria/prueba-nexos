import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TranferenciasPage } from './tranferencias.page';

const routes: Routes = [
  {
    path: '',
    component: TranferenciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TranferenciasPageRoutingModule {}
