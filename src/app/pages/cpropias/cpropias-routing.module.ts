import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CpropiasPage } from './cpropias.page';

const routes: Routes = [
  {
    path: '',
    component: CpropiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CpropiasPageRoutingModule {}
