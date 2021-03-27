import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CtercerosPage } from './cterceros.page';

const routes: Routes = [
  {
    path: '',
    component: CtercerosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CtercerosPageRoutingModule {}
