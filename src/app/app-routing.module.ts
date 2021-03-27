import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tranferencias',
    loadChildren: () => import('./pages/tranferencias/tranferencias.module').then( m => m.TranferenciasPageModule)
  },
  {
    path: 'cpropias',
    loadChildren: () => import('./pages/cpropias/cpropias.module').then( m => m.CpropiasPageModule)
  },
  {
    path: 'cterceros',
    loadChildren: () => import('./pages/cterceros/cterceros.module').then( m => m.CtercerosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
